// server/src/stripe.service.ts
import Stripe from 'stripe';
import type { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import crypto from 'crypto';
import { StoreDbService } from './firebase.service';

dotenv.config();

// Use a stable, real API version (left as provided)
const STRIPE_API_VERSION: Stripe.LatestApiVersion = '2025-08-27.basil';

// Platform client (used for OAuth exchange and platform-scoped admin/debug)
const PLATFORM = new Stripe(process.env.STRIPE_SECRET_KEY as string, {
    apiVersion: STRIPE_API_VERSION,
});

/**
 * Resolve a Stripe client AUTHED AS THE OWNER (Standard account)
 * using the OAuth access_token stored at:
 *   /backendowners/{ownerId}/stripeStandard/access_token
 */
async function getOwnerStripe(db: any, ownerId: string): Promise<Stripe> {
    const snap = await db.ref(`/backendowners/${ownerId}/stripeStandard`).once('value');
    const data = snap.val();
    if (!data?.access_token) throw new Error('Owner not connected to Stripe via Standard OAuth');
    return new Stripe(data.access_token, { apiVersion: STRIPE_API_VERSION });
}

/** Get owner’s webhook signing secret (owner Dashboard → Webhooks) */
async function getOwnerWebhookSecret(db: any, ownerId: string): Promise<string> {
    const snap = await db.ref(`/backendowners/${ownerId}/webhookSecret`).once('value');
    const secret = snap.val();
    if (!secret) throw new Error('Owner webhook secret not found.');
    return secret;
}

export class StripeService {
    constructor(private stbDbSvc: StoreDbService) { }

    // ---------------------------------------------------------------------------
    // 1) OAUTH (Standard accounts)
    // ---------------------------------------------------------------------------

    /** Step 1: Redirect to Stripe to connect Standard account */
    async connectAuthorize(req: Request, res: Response) {
        try {
            const { ownerId, accountType = 'owner', returnUrl } = req.query as {
                ownerId?: string;
                accountType?: 'owner' | 'provider';
                returnUrl?: string;
            };
            if (!ownerId) return res.status(400).send('ownerId required');

            // Encode returnUrl safely inside state
            const encodedReturn = returnUrl
                ? Buffer.from(returnUrl, 'utf8').toString('base64url')
                : '';

            const state = `${crypto.randomBytes(16).toString('hex')}:${ownerId}:${accountType}:${encodedReturn}`;

            const params = new URLSearchParams({
                response_type: 'code',
                scope: 'read_write',
                client_id: process.env.STRIPE_CLIENT_ID!,
                redirect_uri: process.env.STRIPE_CONNECT_REDIRECT_URI!,
                state,
            });

            res.redirect(`https://connect.stripe.com/oauth/authorize?${params.toString()}`);
        } catch (e: any) {
            res.status(400).send(e?.message || 'Authorize failed');
        }
    }

    /** Step 2: Callback — exchange code for access_token and save it */
    async connectCallback(req: Request, res: Response) {
        try {
            const { code, state } = req.query as { code?: string; state?: string };
            if (!code || !state) return res.status(400).send('Missing code/state');

            // state = nonce:ownerId:accountType:encodedReturn
            const parts = state.split(':');
            const ownerId = parts[1];
            const accountTypeRaw = parts[2] as 'owner' | 'provider' | undefined;
            const encodedReturn = parts[3];

            const accountType = accountTypeRaw === 'provider' ? 'provider' : 'owner';
            if (!ownerId) return res.status(400).send('Bad state');

            let returnUrl: string | undefined;
            if (encodedReturn) {
                try {
                    returnUrl = Buffer.from(encodedReturn, 'base64url').toString('utf8');
                } catch {
                    returnUrl = undefined;
                }
            }

            const token = await PLATFORM.oauth.token({ grant_type: 'authorization_code', code });

            const {
                stripe_user_id,
                access_token,
                refresh_token,
                token_type,
                scope,
                livemode,
            } = token;

            const path =
                accountType === 'provider'
                    ? `/backendproviders/${ownerId}/stripeStandard`
                    : `/backendowners/${ownerId}/stripeStandard`;

            await this.stbDbSvc.db.ref(path).set({
                stripe_user_id,
                access_token,
                refresh_token,
                token_type,
                scope,
                livemode,
                connectedAt: Date.now(),
            });

            // Fallback to old behavior if we don't have a returnUrl
            const fallback = process.env.CONNECT_DONE_REDIRECT || '/owner/stripe/connected';

            // Optional: basic safety — allow only relative URLs or same-origin
            const target = returnUrl && returnUrl.startsWith('http')
                ? returnUrl
                : fallback;

            res.redirect(target);
        } catch (err: any) {
            console.error('[Stripe OAuth callback] error:', err);
            res.status(400).send(err?.message || 'OAuth failed');
        }
    }

    /** Disconnect (deauthorize) an owner’s Standard connection */
    async connectDeauthorize(req: Request, res: Response) {
        try {
            const { ownerId } = req.body as { ownerId?: string };
            if (!ownerId) return res.status(400).json({ error: 'ownerId required' });

            const snap = await this.stbDbSvc.db
                .ref(`/backendowners/${ownerId}/stripeStandard`)
                .once('value');
            const data = snap.val();
            if (!data?.stripe_user_id) return res.json({ ok: true }); // already removed

            await PLATFORM.oauth.deauthorize({
                client_id: process.env.STRIPE_CLIENT_ID!,
                stripe_user_id: data.stripe_user_id,
            });

            await this.stbDbSvc.db.ref(`/backendowners/${ownerId}/stripeStandard`).remove();
            res.json({ ok: true });
        } catch (e: any) {
            res.status(400).json({ error: e?.message || 'Deauthorize failed' });
        }
    }

    // ---------------------------------------------------------------------------
    // 2) Owner-scoped Money APIs (Standard: act on owner’s account)
    // ---------------------------------------------------------------------------

    /** Create a Customer in the OWNER’s account */
    async createCustomer(req: Request, res: Response) {
        try {
            const { ownerId, email, name, phone, metadata } = req.body;
            if (!ownerId) return res.status(400).json({ error: 'ownerId required' });

            const stripe = await this.getStripeForOwner(ownerId);
            const customer = await stripe.customers.create({ email, name, phone, metadata });
            res.json(customer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /** Retrieve a Customer (owner scope) */
    async retrieveCustomer(req: Request, res: Response) {
        try {
            const { ownerId, customerId } = req.query as { ownerId?: string; customerId?: string };
            if (!ownerId || !customerId) {
                return res.status(400).json({ error: 'ownerId & customerId required' });
            }

            const stripe = await this.getStripeForOwner(ownerId);
            const customer = await stripe.customers.retrieve(customerId);
            res.json(customer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /** Update a Customer (owner scope) */
    async updateCustomer(req: Request, res: Response) {
        try {
            const { ownerId, customerId, updateFields } = req.body;
            if (!ownerId || !customerId) {
                return res.status(400).json({ error: 'ownerId & customerId required' });
            }

            const stripe = await this.getStripeForOwner(ownerId);
            const customer = await stripe.customers.update(customerId, updateFields || {});
            res.json(customer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /** Delete a Customer (owner scope) */
    async deleteCustomer(req: Request, res: Response) {
        try {
            const { ownerId, customerId } = req.body;
            if (!ownerId || !customerId) {
                return res.status(400).json({ error: 'ownerId & customerId required' });
            }

            const stripe = await this.getStripeForOwner(ownerId);
            const deleted = await stripe.customers.del(customerId);
            res.json(deleted);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /**
     * Checkout (mode: 'setup') — collect card for later charge (off-session)
     * body: { ownerId, bookingId, customerEmail?, successUrl, cancelUrl }
     */
    async checkoutSetup(req: Request, res: Response) {
        try {
            const { ownerId, bookingId, customerEmail, successUrl, cancelUrl } = req.body;
            if (!ownerId || !bookingId) return res.status(400).json({ error: 'ownerId & bookingId required' });

            const stripe = await this.getStripeForOwner(ownerId);

            // Optional: anchor PM on a Customer you create now
            const customer = customerEmail
                ? await stripe.customers.create({ email: customerEmail }).catch(() => null)
                : null;

            const session = await stripe.checkout.sessions.create({
                mode: 'setup',
                payment_method_types: ['card'],
                customer: customer?.id,
                success_url: this.appendCheckoutParams(successUrl, { session_id: '{CHECKOUT_SESSION_ID}', bookingId }),
                cancel_url: this.appendCheckoutParams(cancelUrl, { bookingId }),
                metadata: { bookingId },
            });

            await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                status: 'init',
                checkoutSessionId: session.id,
                updatedAt: Date.now(),
            });

            res.json({ url: session.url, id: session.id });
        } catch (e: any) {
            res.status(400).json({ error: e.message });
        }
    }

    /**
     * Owner accepts booking → off-session charge using saved PM
     * body: { ownerId, bookingId, amount, currency?='eur' }
     */
    async acceptAndCharge(req: Request, res: Response) {
        try {
            const { ownerId, bookingId, amount, currency = 'eur' } = req.body;
            if (!ownerId || !bookingId || !amount) {
                return res.status(400).json({ error: 'ownerId, bookingId, amount required' });
            }

            const bookingSnap = await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).once('value');
            if (!bookingSnap.exists()) return res.status(404).json({ error: 'Booking not found' });

            const booking = bookingSnap.val();
            const pmId = booking?.payment?.paymentMethodId;
            const customerId = booking?.payment?.customerId;
            if (!pmId || !customerId) {
                return res.status(400).json({ error: 'No saved payment method/customer — complete checkout setup first' });
            }

            // Mark confirmed (your business choice)
            await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                status: 'confirmed',
                updatedAt: Date.now(),
            });

            const stripe = await this.getStripeForOwner(ownerId);
            const pi = await stripe.paymentIntents.create({
                amount,
                currency,
                customer: customerId,
                payment_method: pmId,
                off_session: true,
                confirm: true,
                description: `Booking #${bookingId}`,
                metadata: { bookingId },
            });

            await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                status: 'charge_processing',
                paymentIntentId: pi.id,
                updatedAt: Date.now(),
            });

            res.json({ ok: true, paymentIntent: pi });
        } catch (e: any) {
            console.error('[acceptAndCharge] error:', e?.message || e);
            const { bookingId } = (req.body || {}) as any;

            if (bookingId) {
                await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                    status: 'charge_failed',
                    lastError: e?.message || 'Charge failed',
                    updatedAt: Date.now(),
                });
                await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                    status: 'pending',
                    updatedAt: Date.now(),
                });
            }

            res.status(400).json({ error: e?.message || 'Charge failed' });
        }
    }


    // ---------------------------------------------------------------------------
    // 2.b) Alegria outing payments: deposit + warranty / damage deposit
    // ---------------------------------------------------------------------------

    private parseOutingDateToMidnight(value: any): number {
        const rawDate = String(value || '').trim();
        if (!rawDate) return 0;

        let normalized = rawDate;
        const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
        if (frenchDate) {
            const day = frenchDate[1].padStart(2, '0');
            const month = frenchDate[2].padStart(2, '0');
            const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
            normalized = `${year}-${month}-${day}`;
        }

        const timestamp = Date.parse(normalized);
        if (Number.isNaN(timestamp)) return 0;

        const date = new Date(timestamp);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
    }

    private isOutingDateTodayOrPast(value: any): boolean {
        const outingTime = this.parseOutingDateToMidnight(value);
        if (!outingTime) return false;

        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return outingTime <= today.getTime();
    }

    private isCompletedPaymentValue(value: any): boolean {
        if (value === true) return true;
        const normalized = String(value || '').toLowerCase().trim();
        return [
            'true',
            'paid',
            'completed',
            'complete',
            'done',
            'balance_paid',
            'remaining_paid',
            'payment_done',
            'full_payment_done'
        ].includes(normalized);
    }

    private isCancelledStatusValue(value: any): boolean {
        if (value === false) return true;
        const normalized = String(value || '').toLowerCase().trim();
        return ['false', 'cancelled', 'canceled', 'deleted'].includes(normalized);
    }

    private async assertBalanceCheckoutAllowed(bookingId: string, body: any): Promise<void> {
        const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
        const booking = bookingSnap.val() || {};
        const outingDate = booking.outingDate || booking.date || booking.bookingDate || body.outingDate || body.date;

        if (this.isCancelledStatusValue(booking.bookingStatus ?? booking.status) || booking.cancelled === true || booking.canceled === true) {
            throw new Error('This booking is cancelled. The remaining balance cannot be paid.');
        }

        if (this.isCompletedPaymentValue(booking.paymentStatus) ||
            this.isCompletedPaymentValue(booking.balancePaid) ||
            this.isCompletedPaymentValue(booking.balanceStatus) ||
            this.isCompletedPaymentValue(booking.balancePaymentStatus) ||
            this.isCompletedPaymentValue(booking.remainingPaid) ||
            this.isCompletedPaymentValue(booking.remainingStatus) ||
            this.isCompletedPaymentValue(booking.remainingPaymentStatus) ||
            this.isCompletedPaymentValue(booking?.payments?.balance?.paid) ||
            this.isCompletedPaymentValue(booking?.payments?.balance?.status) ||
            this.isCompletedPaymentValue(booking?.payments?.remaining?.paid) ||
            this.isCompletedPaymentValue(booking?.payments?.remaining?.status)) {
            throw new Error('The remaining balance is already paid.');
        }

        if (this.isOutingDateTodayOrPast(outingDate)) {
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                bookingStatus: false,
                status: 'cancelled',
                cancellationReason: 'Outing date is today or already past and remaining balance was not paid.',
                modifiedTS: Date.now(),
                updatedAt: Date.now(),
            }).catch(() => undefined);
            throw new Error('The outing date is today or already past. The remaining balance cannot be paid and the booking is cancelled.');
        }
    }

    private normalizeAmountToCents(value: any): number {
        const n = Number(value || 0);
        if (!Number.isFinite(n) || n <= 0) return 0;
        // Frontend may send euros (999) or cents (99900). Treat values < 10000 as euros.
        return Math.round(n < 10000 ? n * 100 : n);
    }

    private buildBookingPaymentPath(bookingId: string, child?: string): string {
        return child
            ? `/backendbookings/${bookingId}/payments/${child}`
            : `/backendbookings/${bookingId}/payments`;
    }

    private appendCheckoutParams(url: string, params: Record<string, string>): string {
        const separator = url.includes('?') ? '&' : '?';

        const query = Object.entries(params)
            .map(([key, value]) => {
                if (value === '{CHECKOUT_SESSION_ID}') {
                    return `${encodeURIComponent(key)}={CHECKOUT_SESSION_ID}`;
                }

                return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
            })
            .join('&');

        return `${url}${separator}${query}`;
    }

    /**
     * Create a Stripe Checkout Session to pay the outing deposit.
     *
     * body: {
     *   ownerId, bookingId,
     *   depositAmount, currency='eur',
     *   customerEmail?, customerName?, customerPhone?,
     *   outingType?, outingDate?, successUrl, cancelUrl
     * }
     */

    private isValidEmailForStripe(value: any): boolean {
        const email = String(value || '').trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    private async getStripeForOwner(ownerId: string): Promise<Stripe> {
        if (ownerId === 'alegria' || ownerId === 'platform') {
            return PLATFORM;
        }
        return getOwnerStripe(this.stbDbSvc.db, ownerId);
    }

    async createOutingDepositCheckout(req: Request, res: Response) {
        try {
            const body = req.body || {};
            const ownerId = body.ownerId || 'alegria';
            const bookingId = body.bookingId || body.proposalId || body.id;
            const rawDepositAmount = body.depositAmount ?? body.amount ?? body.deposit ?? body.totalDeposit;
            const currency = String(body.currency || 'eur').toLowerCase();
            const rawCustomerEmail = body.customerEmail || body.email || body.customer?.email;
            const customerEmail = this.isValidEmailForStripe(rawCustomerEmail) ? String(rawCustomerEmail).trim() : '';
            const customerName = body.customerName || body.name || body.customer?.fullName || (!customerEmail ? rawCustomerEmail : '');
            const customerPhone = body.customerPhone || body.phone || body.customer?.phone;
            const outingType = body.outingType || body.type || '';
            const outingDate = body.outingDate || body.date || '';
            const successUrl = body.successUrl || body.returnUrl;
            const cancelUrl = body.cancelUrl || body.failureUrl || body.returnUrl;

            if (!bookingId) {
                return res.status(400).json({
                    error: 'bookingId is required',
                    received: { bookingId: body.bookingId, proposalId: body.proposalId, id: body.id }
                });
            }

            const amount = this.normalizeAmountToCents(rawDepositAmount);
            if (!amount) {
                return res.status(400).json({
                    error: 'depositAmount or amount must be greater than 0',
                    received: { depositAmount: body.depositAmount, amount: body.amount, deposit: body.deposit }
                });
            }

            if (!successUrl || !cancelUrl) {
                return res.status(400).json({
                    error: 'successUrl and cancelUrl are required',
                    received: { successUrl, cancelUrl, returnUrl: body.returnUrl }
                });
            }

            const stripe = await this.getStripeForOwner(ownerId);

            const customer = customerEmail
                ? await stripe.customers.create({
                    email: customerEmail,
                    name: customerName,
                    phone: customerPhone,
                    metadata: {
                        bookingId,
                        ownerId,
                        source: 'alegria-deposit',
                    },
                }).catch(() => null)
                : null;

            const paymentRef = this.stbDbSvc.db.ref('/backendpayments').push();
            const paymentId = paymentRef.key as string;

            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                customer: customer?.id,
                customer_email: customer ? undefined : customerEmail,
                line_items: [
                    {
                        quantity: 1,
                        price_data: {
                            currency,
                            unit_amount: amount,
                            product_data: {
                                name: 'Alegria outing deposit',
                                description: outingType || 'Boat outing deposit',
                            },
                        },
                    },
                ],
                success_url: this.appendCheckoutParams(successUrl, { session_id: '{CHECKOUT_SESSION_ID}', bookingId, paymentType: 'deposit', payment: 'success' }),
                cancel_url: this.appendCheckoutParams(cancelUrl, { bookingId, paymentType: 'deposit', payment: 'cancelled' }),
                payment_intent_data: {
                    setup_future_usage: 'off_session',
                    metadata: {
                        paymentId,
                        bookingId,
                        ownerId,
                        paymentType: 'deposit',
                        outingType: outingType || '',
                        outingDate: outingDate || '',
                    },
                },
                metadata: {
                    paymentId,
                    bookingId,
                    ownerId,
                    paymentType: 'deposit',
                    outingType: outingType || '',
                    outingDate: outingDate || '',
                },
            });

            const now = Date.now();
            const payload = {
                paymentId,
                ownerId,
                bookingId,
                paymentType: 'deposit',
                amount,
                currency,
                status: 'checkout_created',
                stripeCheckoutSessionId: session.id,
                stripeCustomerId: customer?.id || null,
                customerEmail: customerEmail || null,
                customerName: customerName || null,
                customerPhone: customerPhone || null,
                outingType: outingType || null,
                outingDate: outingDate || null,
                createdTS: now,
                modifiedTS: now,
            };

            await paymentRef.set(payload);
            await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'deposit')).set(payload);

            return res.json({ ok: true, url: session.url, id: session.id, paymentId });
        } catch (e: any) {
            console.error('[createOutingDepositCheckout] error:', e);
            return res.status(400).json({
                error: e?.message || 'Failed to create deposit checkout session',
                code: e?.code || null,
                type: e?.type || null
            });
        }
    }

    /**
     * Create a Stripe Checkout Session to register a card for the warranty / damage deposit.
     * This does NOT charge the customer immediately. It stores a payment method that can be
     * charged later if damage is confirmed.
     *
     * body: {
     *   ownerId, bookingId, warrantyAmount, currency='eur',
     *   customerEmail?, customerName?, customerPhone?,
     *   outingType?, outingDate?, successUrl, cancelUrl
     * }
     */
    async createOutingWarrantySetupCheckout(req: Request, res: Response) {
        try {
            const {
                ownerId,
                bookingId,
                warrantyAmount,
                currency = 'eur',
                customerEmail,
                customerName,
                customerPhone,
                outingType,
                outingDate,
                successUrl,
                cancelUrl,
            } = req.body || {};

            const safeCustomerEmail = this.isValidEmailForStripe(customerEmail) ? String(customerEmail).trim() : '';

            if (!ownerId || !bookingId) {
                return res.status(400).json({ error: 'ownerId and bookingId are required' });
            }

            const amount = this.normalizeAmountToCents(warrantyAmount);
            if (!amount) return res.status(400).json({ error: 'warrantyAmount must be greater than 0' });
            if (!successUrl || !cancelUrl) return res.status(400).json({ error: 'successUrl and cancelUrl are required' });

            const stripe = await this.getStripeForOwner(ownerId);
            const customer = safeCustomerEmail
                ? await stripe.customers.create({
                    email: safeCustomerEmail,
                    name: customerName,
                    phone: customerPhone,
                    metadata: {
                        bookingId,
                        ownerId,
                        source: 'alegria-warranty',
                    },
                }).catch(() => null)
                : null;

            const paymentRef = this.stbDbSvc.db.ref('/backendpayments').push();
            const paymentId = paymentRef.key as string;

            const session = await stripe.checkout.sessions.create({
                mode: 'setup',
                payment_method_types: ['card'],
                customer: customer?.id,
                customer_email: customer ? undefined : safeCustomerEmail || undefined,
                success_url: this.appendCheckoutParams(successUrl, { session_id: '{CHECKOUT_SESSION_ID}', bookingId, paymentType: 'warranty', payment: 'success' }),
                cancel_url: this.appendCheckoutParams(cancelUrl, { bookingId, paymentType: 'warranty', payment: 'cancelled' }),
                setup_intent_data: {
                    metadata: {
                        paymentId,
                        bookingId,
                        ownerId,
                        paymentType: 'warranty',
                        warrantyAmount: String(amount),
                        currency,
                        outingType: outingType || '',
                        outingDate: outingDate || '',
                    },
                },
                metadata: {
                    paymentId,
                    bookingId,
                    ownerId,
                    paymentType: 'warranty',
                    warrantyAmount: String(amount),
                    currency,
                    outingType: outingType || '',
                    outingDate: outingDate || '',
                },
            });

            const now = Date.now();
            const payload = {
                paymentId,
                ownerId,
                bookingId,
                paymentType: 'warranty',
                amount,
                currency,
                status: 'setup_checkout_created',
                stripeCheckoutSessionId: session.id,
                stripeCustomerId: customer?.id || null,
                customerEmail: customerEmail || null,
                customerName: customerName || null,
                customerPhone: customerPhone || null,
                outingType: outingType || null,
                outingDate: outingDate || null,
                createdTS: now,
                modifiedTS: now,
            };

            await paymentRef.set(payload);
            await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'warranty')).set(payload);

            return res.json({ ok: true, url: session.url, id: session.id, paymentId });
        } catch (e: any) {
            console.error('[createOutingWarrantySetupCheckout] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to create warranty setup session' });
        }
    }

    /**
     * Charge all or part of the stored warranty if damage is confirmed.
     * This endpoint must be protected on your frontend/backend side for admins/owners only.
     *
     * body: { ownerId, bookingId, amount, reason?, currency='eur' }
     */
    async chargeOutingWarranty(req: Request, res: Response) {
        try {
            let { ownerId, bookingId, amount, reason, currency = 'eur' } = req.body || {};
            if (!bookingId) {
                return res.status(400).json({ error: 'bookingId is required' });
            }

            const amountCents = this.normalizeAmountToCents(amount);
            if (!amountCents) return res.status(400).json({ error: 'amount must be greater than 0' });

            const warrantySnap = await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'warranty')).once('value');
            const warranty = warrantySnap.val();
            ownerId = ownerId || warranty?.ownerId;
            if (!ownerId) return res.status(400).json({ error: 'ownerId is required' });
            if (!warranty?.paymentMethodId || !warranty?.stripeCustomerId) {
                return res.status(400).json({ error: 'No warranty payment method saved for this booking' });
            }

            const maxWarranty = Number(warranty.amount || 0);
            if (maxWarranty && amountCents > maxWarranty) {
                return res.status(400).json({ error: 'Requested charge exceeds recorded warranty amount' });
            }

            const stripe = await this.getStripeForOwner(ownerId);
            const pi = await stripe.paymentIntents.create({
                amount: amountCents,
                currency,
                customer: warranty.stripeCustomerId,
                payment_method: warranty.paymentMethodId,
                off_session: true,
                confirm: true,
                description: `Alegria warranty charge for booking ${bookingId}`,
                metadata: {
                    bookingId,
                    ownerId,
                    paymentType: 'warranty_charge',
                    reason: reason || '',
                },
            });

            const now = Date.now();
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warrantyCharge`).update({
                status: 'warranty_charged',
                warrantyChargeAmount: amountCents,
                warrantyChargeReason: reason || null,
                modifiedTS: Date.now(),
            });
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                warrantyStatus: 'charged',
                damageReported: true,
                damageCharged: true,
                warrantyChargedAmount: amountCents,
                warrantyChargeReason: reason || null,
                warrantyChargeRecordedAt: now,
                modifiedTS: now,
            });

            await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'warranty')).update({
                status: 'warranty_charged',
                warrantyChargeAmount: amountCents,
                warrantyChargeReason: reason || null,
                warrantyChargePaymentIntentId: pi.id,
                modifiedTS: now,
            });

            await this.stbDbSvc.db.ref('/backendpayments').push().set({
                ownerId,
                bookingId,
                paymentType: 'warranty_charge',
                amount: amountCents,
                currency,
                status: pi.status,
                reason: reason || null,
                stripePaymentIntentId: pi.id,
                createdTS: now,
                modifiedTS: now,
            });

            return res.json({ ok: true, paymentIntent: pi });
        } catch (e: any) {
            console.error('[chargeOutingWarranty] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to charge warranty' });
        }
    }

    /**
     * Read payment status for a booking.
     * query: ownerId?, bookingId
     */
    async outingPaymentStatus(req: Request, res: Response) {
        try {
            const { bookingId } = req.query as { bookingId?: string };
            if (!bookingId) return res.status(400).json({ error: 'bookingId is required' });

            const snap = await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId)).once('value');
            return res.json({ ok: true, bookingId, payments: snap.val() || {} });
        } catch (e: any) {
            return res.status(400).json({ error: e?.message || 'Failed to read payment status' });
        }
    }

    // ---------------------- PaymentIntent helpers (owner) -----------------------

    async createPaymentIntent(req: Request, res: Response) {
        try {
            const { ownerId, amount, currency, customerId, description, metadata } = req.body;
            if (!ownerId) return res.status(400).json({ error: 'ownerId required' });

            const stripe = await this.getStripeForOwner(ownerId);
            const params: Stripe.PaymentIntentCreateParams = {
                amount,
                currency,
                customer: customerId,
                payment_method_types: ['card'],
                description,
                metadata,
            };

            const paymentIntent = await stripe.paymentIntents.create(params);
            res.json(paymentIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async confirmPaymentIntent(req: Request, res: Response) {
        try {
            const { ownerId, paymentIntentId } = req.body;
            if (!ownerId || !paymentIntentId) return res.status(400).json({ error: 'ownerId & paymentIntentId required' });

            const stripe = await this.getStripeForOwner(ownerId);
            const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
            res.json(paymentIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async cancelPaymentIntent(req: Request, res: Response) {
        try {
            const { ownerId, paymentIntentId } = req.body;
            if (!ownerId || !paymentIntentId) return res.status(400).json({ error: 'ownerId & paymentIntentId required' });

            const stripe = await this.getStripeForOwner(ownerId);
            const paymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);
            res.json(paymentIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /** Refund in the owner’s account */
    async createRefund(req: Request, res: Response) {
        try {
            const { ownerId, paymentIntentId, amount } = req.body;
            if (!ownerId || !paymentIntentId) return res.status(400).json({ error: 'ownerId & paymentIntentId required' });

            const stripe = await this.getStripeForOwner(ownerId);
            const refund = await stripe.refunds.create({ payment_intent: paymentIntentId, amount });
            res.json(refund);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // ---------------------------------------------------------------------------
    // 3) Webhooks
    // ---------------------------------------------------------------------------

    /**
     * Owner-scoped webhook (raw body required in server bootstrap)
     * URL: POST /stripe/owner/:ownerId/webhook
     * Subscribe to (on owner’s Dashboard):
     *  - checkout.session.completed
     *  - payment_intent.succeeded
     *  - payment_intent.payment_failed
     */

    private async markDepositPaidFromStripe(params: {
        bookingId: string;
        paymentId?: string | null;
        ownerId: string;
        amount?: number | null;
        currency?: string | null;
        stripeCheckoutSessionId?: string | null;
        stripePaymentIntentId?: string | null;
        stripeCustomerId?: string | null;
    }): Promise<void> {
        const now = Date.now();

        const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}`).once('value').catch(() => null);
        const proposalSnap = await this.stbDbSvc.db.ref(`/bnProposals/${params.bookingId}`).once('value').catch(() => null);
        const existingBooking = bookingSnap?.val?.() || {};
        const existingProposal = proposalSnap?.val?.() || {};

        const termsAccepted =
            existingBooking.termsAccepted === true ||
            existingBooking.termsStatus === 'accepted' ||
            existingBooking?.documents?.termsAccepted === true ||
            existingProposal.termsAccepted === true ||
            existingProposal.termsStatus === 'accepted';

        const derivedBookingStatus = termsAccepted ? 'confirmed' : 'awaiting_terms';

        const updatePayload = {
            status: 'paid',
            depositStatus: 'paid',
            depositPaid: true,
            paid: true,
            amount: params.amount || null,
            currency: params.currency || 'eur',
            ownerId: params.ownerId,
            stripeCheckoutSessionId: params.stripeCheckoutSessionId || null,
            stripePaymentIntentId: params.stripePaymentIntentId || null,
            stripeCustomerId: params.stripeCustomerId || null,
            modifiedTS: now,
            updatedAt: now,
        };

        await Promise.all([
            this.stbDbSvc.db.ref(`/backendbookings/${params.bookingId}/payments/deposit`).update(updatePayload),
            this.stbDbSvc.db.ref(`/backendbookings/${params.bookingId}/payment`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/deposit`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}`).update({
                depositStatus: 'paid',
                depositPaid: true,
                paymentStatus: 'deposit_paid',
                bookingStatus: derivedBookingStatus,
                confirmedAt: termsAccepted ? now : null,
                stripePaymentIntentId: params.stripePaymentIntentId || null,
                stripeCheckoutSessionId: params.stripeCheckoutSessionId || null,
                modifiedTS: now,
                updatedAt: now,
            }),
            this.stbDbSvc.db.ref(`/bnProposals/${params.bookingId}`).update({
                depositStatus: 'paid',
                depositPaid: true,
                paymentStatus: 'deposit_paid',
                bookingStatus: derivedBookingStatus,
                confirmedAt: termsAccepted ? now : null,
                status: termsAccepted ? 'accepted' : 'awaiting_terms',
                stripePaymentIntentId: params.stripePaymentIntentId || null,
                stripeCheckoutSessionId: params.stripeCheckoutSessionId || null,
                modifiedTS: now,
                updatedAt: now,
            }),
        ]);

        if (params.paymentId) {
            await this.stbDbSvc.db.ref(`/backendpayments/${params.paymentId}`).update(updatePayload);
        }
    }

    private async markWarrantySavedFromStripe(params: {
        bookingId: string;
        paymentId?: string | null;
        ownerId: string;
        amount?: number | null;
        currency?: string | null;
        setupIntentId?: string | null;
        paymentMethodId?: string | null;
        stripeCustomerId?: string | null;
    }): Promise<void> {
        const now = Date.now();
        const updatePayload = {
            status: 'warranty_card_saved',
            warrantyStatus: 'card_registered',
            warrantyRegistered: true,
            amount: params.amount || null,
            currency: params.currency || 'eur',
            ownerId: params.ownerId,
            setupIntentId: params.setupIntentId || null,
            paymentMethodId: params.paymentMethodId || null,
            stripeCustomerId: params.stripeCustomerId || null,
            modifiedTS: now,
            updatedAt: now,
        };

        await Promise.all([
            this.stbDbSvc.db.ref(`/backendbookings/${params.bookingId}/payments/warranty`).update(updatePayload),
            this.stbDbSvc.db.ref(`/backendbookings/${params.bookingId}/payment`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/warranty`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}`).update({
                warrantyStatus: 'card_registered',
                warrantyRegistered: true,
                warrantyPaymentMethodId: params.paymentMethodId || null,
                warrantySetupIntentId: params.setupIntentId || null,
                modifiedTS: now,
                updatedAt: now,
            }),
            this.stbDbSvc.db.ref(`/bnProposals/${params.bookingId}`).update({
                warrantyStatus: 'card_registered',
                warrantyRegistered: true,
                warrantyPaymentMethodId: params.paymentMethodId || null,
                warrantySetupIntentId: params.setupIntentId || null,
                modifiedTS: now,
                updatedAt: now,
            }),
        ]);

        if (params.paymentId) {
            await this.stbDbSvc.db.ref(`/backendpayments/${params.paymentId}`).update(updatePayload);
        }
    }

    async handleOwnerWebhook(req: Request, res: Response) {
        const ownerId = (req.params as any).ownerId as string;
        if (!ownerId) return res.status(400).send('ownerId missing in URL');

        let event: Stripe.Event;
        try {
            const secret = (ownerId === 'alegria' || ownerId === 'platform') ? (process.env.STRIPE_WEBHOOK_SECRET || '') : await getOwnerWebhookSecret(this.stbDbSvc.db, ownerId);
            const signature = req.headers['stripe-signature'] as string;
            // req.body must be a Buffer (bodyParser.raw in bootstrap)
            event = PLATFORM.webhooks.constructEvent(req.body as any, signature, secret);
        } catch (err: any) {
            console.error('[Owner Webhook] signature verification failed:', err.message);
            return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
        }

        try {
            console.log('[Owner Webhook] event', event.type, event.id);
            switch (event.type) {

                case 'setup_intent.succeeded': {
                    const si = event.data.object as Stripe.SetupIntent;
                    const bookingId = (si.metadata && si.metadata['bookingId']) || null;
                    const paymentType = (si.metadata && si.metadata['paymentType']) || null;
                    const paymentId = (si.metadata && si.metadata['paymentId']) || null;

                    if (bookingId && paymentType === 'warranty') {
                        await this.markWarrantySavedFromStripe({
                            bookingId,
                            paymentId,
                            ownerId,
                            amount: Number((si.metadata && si.metadata['warrantyAmount']) || 0) || null,
                            currency: (si.metadata && si.metadata['currency']) || 'eur',
                            setupIntentId: si.id,
                            paymentMethodId: (si.payment_method as string) || null,
                            stripeCustomerId: (si.customer as string) || null,
                        });
                    }

                    break;
                }

                case 'checkout.session.completed': {
                    const session = event.data.object as Stripe.Checkout.Session;
                    const bookingId = (session.metadata && session.metadata['bookingId']) || null;
                    const paymentType = (session.metadata && session.metadata['paymentType']) || null;
                    const paymentId = (session.metadata && session.metadata['paymentId']) || null;
                    if (!bookingId) break;

                    const now = Date.now();
                    if (paymentType === 'deposit') {
                        await this.markDepositPaidFromStripe({
                            bookingId,
                            paymentId,
                            ownerId,
                            amount: session.amount_total || null,
                            currency: session.currency || 'eur',
                            stripeCheckoutSessionId: session.id,
                            stripePaymentIntentId: (session.payment_intent as string) || null,
                            stripeCustomerId: (session.customer as string) || null,
                        });
                    }



                    if (session.mode === 'setup' && session.setup_intent) {
                        const stripe = await this.getStripeForOwner(ownerId);
                        const si = await stripe.setupIntents.retrieve(session.setup_intent as string);

                        const paymentMethodId = (si.payment_method as string) || null;
                        const customerId = (si.customer as string) || null;
                        const warrantyAmount = Number((session.metadata && session.metadata['warrantyAmount']) || 0);

                        await this.markWarrantySavedFromStripe({
                            bookingId,
                            paymentId,
                            ownerId,
                            amount: warrantyAmount || null,
                            currency: (session.metadata && session.metadata['currency']) || 'eur',
                            setupIntentId: si.id,
                            paymentMethodId,
                            stripeCustomerId: customerId,
                        });


                        const updatePayload = {
                            status: 'warranty_card_saved',
                            setupIntentId: si.id,
                            paymentMethodId,
                            stripeCustomerId: customerId,
                            amount: warrantyAmount || null,
                            modifiedTS: now,
                            updatedAt: now,
                        };

                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payments/warranty`).update(updatePayload);
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warranty`).update(updatePayload);
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                            warrantyStatus: 'card_registered',
                            warrantyRegistered: true,
                            modifiedTS: now,
                        });
                        if (paymentId) {
                            await this.stbDbSvc.db.ref(`/backendpayments/${paymentId}`).update(updatePayload);
                        }

                        // Keep backward compatibility with older booking.payment shape.
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                            status: 'pm_saved',
                            setupIntentId: si.id,
                            paymentMethodId,
                            customerId,
                            updatedAt: now,
                        });
                    }

                    if (session.mode === 'payment' && session.payment_intent) {
                        const stripePaymentIntentId = session.payment_intent as string;
                        const updatePayload = {
                            status: 'paid',
                            checkoutSessionId: session.id,
                            stripeCheckoutSessionId: session.id,
                            paymentIntentId: stripePaymentIntentId,
                            stripePaymentIntentId,
                            stripeCustomerId: session.customer || null,
                            amount: session.amount_total || null,
                            amount_total: session.amount_total || null,
                            currency: session.currency || null,
                            modifiedTS: now,
                            updatedAt: now,
                        };

                        if (paymentType === 'balance') {
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/balance`).update(updatePayload);
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                balanceStatus: 'paid',
                                balancePaid: true,
                                bookingStatus: 'payment_done',
                                paymentStatus: 'full_payment_done',
                                modifiedTS: now,
                            });
                        } else if (paymentType === 'extra_service') {
                            const extraServiceId = (session.metadata && session.metadata['extraServiceId']) || null;
                            const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
                            const booking = bookingSnap.val() || {};
                            const extraServices = Array.isArray(booking.extraServices) ? booking.extraServices : [];
                            const updatedExtraServices = extraServices.map((item: any) =>
                                item.id === extraServiceId ? { ...item, status: 'paid', paid: true, paidAt: now, stripeCheckoutSessionId: session.id, stripePaymentIntentId, amount: (session.amount_total || item.amount) } : item
                            );
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/extraServices`).set(updatedExtraServices);
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/extraServices/${extraServiceId}`).update(updatePayload);
                        } else {
                            await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payments/deposit`).update({ ...updatePayload, status: 'deposit_paid' });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/deposit`).update({ ...updatePayload, status: 'deposit_paid' });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                depositStatus: 'paid',
                                depositPaid: true,
                                modifiedTS: now,
                            });
                        }

                        if (paymentId) {
                            await this.stbDbSvc.db.ref(`/backendpayments/${paymentId}`).update(updatePayload);
                        }
                    }

                    break;
                }

                case 'payment_intent.succeeded': {
                    const pi = event.data.object as Stripe.PaymentIntent;
                    const bookingId = (pi.metadata && (pi.metadata as any)['bookingId']) || null;
                    if (bookingId) {
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                            status: 'confirmed',
                            updatedAt: Date.now(),
                            paymentStatus: 'charge_succeeded',
                            paymentPaymentIntentId: pi.id,
                        });
                    }
                    break;
                }

                case 'payment_intent.payment_failed': {
                    const pi = event.data.object as Stripe.PaymentIntent;
                    const bookingId = (pi.metadata && (pi.metadata as any)['bookingId']) || null;
                    const message = (pi.last_payment_error && pi.last_payment_error.message) || 'Payment failed';
                    if (bookingId) {
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                            status: 'charge_failed',
                            lastError: message,
                            paymentIntentId: pi.id,
                            updatedAt: Date.now(),
                        });
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                            status: 'pending',
                            updatedAt: Date.now(),
                        });
                    }
                    break;
                }

                default:
                    // ignore others
                    break;
            }

            res.json({ received: true });
        } catch (err: any) {
            console.error('[Owner Webhook] handler error:', err);
            res.status(500).send(`Webhook handler error: ${err.message || err}`);
        }
    }

    /** Optional: platform-scoped webhook if you need it */
    async handlePlatformWebhook(req: Request, res: Response, endpointSecret: string) {
        try {
            const sig = req.headers['stripe-signature'] as string;
            const event = PLATFORM.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log('[Platform Webhook] event:', event.type);
            res.status(200).send({ received: true });
        } catch (err: any) {
            console.error('[Platform Webhook] Error:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    }

    // ---------------------------------------------------------------------------
    // 4) Admin / misc (platform-scoped)
    // ---------------------------------------------------------------------------

    /** Retrieve any account by id (acts with platform secret key) */
    async retrieveAccount(req: Request, res: Response) {
        try {
            const { accountId } = req.query as { accountId?: string };
            if (!accountId) return res.status(400).json({ error: 'accountId required' });
            const account = await PLATFORM.accounts.retrieve(accountId);
            res.json(account);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /** List PaymentIntents on the platform account (debug) */
    async listPaymentIntents(req: Request, res: Response) {
        try {
            const { limit = 10 } = req.query as { limit?: string | number };
            const paymentIntents = await PLATFORM.paymentIntents.list({ limit: Number(limit) });
            res.json(paymentIntents);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /** List Charges on the platform account (debug) */
    async listCharges(req: Request, res: Response) {
        try {
            const { limit = 10 } = req.query as { limit?: string | number };
            const charges = await PLATFORM.charges.list({ limit: Number(limit) });
            res.json(charges);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    /**
   * Return public Stripe connection status for an owner.
   * Does NOT expose access_token or refresh_token.
   *
   * GET /owner/stripe/status?ownerId=...
   */
    async ownerStripeStatus(req: Request, res: Response) {
        try {
            const { ownerId } = req.query as { ownerId?: string };
            if (!ownerId) {
                return res.status(400).json({ error: 'ownerId required' });
            }

            // Read from Firebase
            const snap = await this.stbDbSvc.db
                .ref(`/backendowners/${ownerId}/stripeStandard`)
                .once('value');

            const data = snap.val();
            if (!data) {
                // Not connected
                return res.json({
                    connected: false,
                    stripe_user_id: null,
                    livemode: false,
                    connectedAt: null,
                });
            }

            // Return only safe fields
            return res.json({
                connected: true,
                stripe_user_id: data.stripe_user_id || null,
                livemode: !!data.livemode,
                connectedAt: data.connectedAt || null,
            });
        } catch (err: any) {
            console.error('[ownerStripeStatus] Error:', err);
            res.status(500).json({ error: err?.message || 'Failed to read Stripe status' });
        }
    }


    // ---------------------------------------------------------------------------
    // 5) Route wiring (use in your router)
    // ---------------------------------------------------------------------------

    setRoutes(stripeRouter: any) {
        // OAuth (Standard)
        stripeRouter.get('/stripe/connect/authorize', (req: Request, res: Response) =>
            this.connectAuthorize(req, res)
        );
        stripeRouter.get('/stripe/connect/callback', (req: Request, res: Response) =>
            this.connectCallback(req, res)
        );
        stripeRouter.post('/stripe/connect/deauthorize', (req: Request, res: Response) =>
            this.connectDeauthorize(req, res)
        );

        // Customers
        stripeRouter.post('/stripe/customer', (req: Request, res: Response) =>
            this.createCustomer(req, res)
        );
        stripeRouter.get('/stripe/customer', (req: Request, res: Response) =>
            this.retrieveCustomer(req, res)
        );
        stripeRouter.put('/stripe/customer', (req: Request, res: Response) =>
            this.updateCustomer(req, res)
        );
        stripeRouter.delete('/stripe/customer', (req: Request, res: Response) =>
            this.deleteCustomer(req, res)
        );

        // Checkout setup + accept & charge
        stripeRouter.post('/pay/checkout-setup', (req: Request, res: Response) =>
            this.checkoutSetup(req, res)
        );
        stripeRouter.post('/pay/accept-and-charge', (req: Request, res: Response) =>
            this.acceptAndCharge(req, res)
        );

        // Alegria outing deposit + warranty
        stripeRouter.post('/pay/outing-balance-checkout', (req: Request, res: Response) =>
            this.createOutingBalanceCheckout(req, res)
        );
        stripeRouter.post('/pay/outing-remaining-checkout', (req: Request, res: Response) =>
            this.createOutingBalanceCheckout(req, res)
        );
        stripeRouter.post('/api/payments/create-balance-checkout-session', (req: Request, res: Response) =>
            this.createOutingBalanceCheckout(req, res)
        );
        stripeRouter.post('/api/payments/create-remaining-checkout-session', (req: Request, res: Response) =>
            this.createOutingBalanceCheckout(req, res)
        );
        stripeRouter.post('/stripe/balance-checkout', (req: Request, res: Response) =>
            this.createOutingBalanceCheckout(req, res)
        );
        stripeRouter.post('/stripe/remaining-checkout', (req: Request, res: Response) =>
            this.createOutingBalanceCheckout(req, res)
        );


        stripeRouter.post('/pay/outing-deposit-checkout', (req: Request, res: Response) =>
            this.createOutingDepositCheckout(req, res)
        );
        stripeRouter.post('/pay/outing-warranty-checkout', (req: Request, res: Response) =>
            this.createOutingWarrantySetupCheckout(req, res)
        );
        stripeRouter.post('/pay/outing-warranty-charge', (req: Request, res: Response) =>
            this.chargeOutingWarranty(req, res)
        );
        stripeRouter.get('/pay/outing-payment-status', (req: Request, res: Response) =>
            this.outingPaymentStatus(req, res)
        );

        // Frontend-friendly aliases
        stripeRouter.post('/api/payments/create-deposit-checkout-session', (req: Request, res: Response) =>
            this.createOutingDepositCheckout(req, res)
        );
        stripeRouter.post('/api/payments/create-warranty-checkout-session', (req: Request, res: Response) =>
            this.createOutingWarrantySetupCheckout(req, res)
        );
        stripeRouter.post('/api/payments/create-warranty-setup-session', (req: Request, res: Response) =>
            this.createOutingWarrantySetupCheckout(req, res)
        );
        stripeRouter.post('/api/payments/charge-warranty', (req: Request, res: Response) =>
            this.chargeOutingWarranty(req, res)
        );
        stripeRouter.get('/api/payments/status', (req: Request, res: Response) =>
            this.outingPaymentStatus(req, res)
        );

        // Older aliases used by the Angular BookingApiService
        stripeRouter.post('/stripe/deposit-checkout', (req: Request, res: Response) =>
            this.createOutingDepositCheckout(req, res)
        );
        stripeRouter.post('/stripe/warranty-setup', (req: Request, res: Response) =>
            this.createOutingWarrantySetupCheckout(req, res)
        );
        stripeRouter.post('/stripe/warranty-charge', (req: Request, res: Response) =>
            this.chargeOutingWarranty(req, res)
        );

        stripeRouter.post('/pay/outing-extra-service-checkout', (req: Request, res: Response) =>
            this.createOutingExtraServiceCheckout(req, res)
        );
        stripeRouter.post('/api/payments/create-extra-service-checkout-session', (req: Request, res: Response) =>
            this.createOutingExtraServiceCheckout(req, res)
        );
        stripeRouter.post('/stripe/extra-service-checkout', (req: Request, res: Response) =>
            this.createOutingExtraServiceCheckout(req, res)
        );
        stripeRouter.post('/pay/outing-refund', (req: Request, res: Response) =>
            this.refundOutingPayment(req, res)
        );
        stripeRouter.post('/api/payments/refund', (req: Request, res: Response) =>
            this.refundOutingPayment(req, res)
        );
        stripeRouter.post('/stripe/booking-refund', (req: Request, res: Response) =>
            this.refundOutingPayment(req, res)
        );

        // PaymentIntent helpers
        stripeRouter.post('/stripe/payment-intent', (req: Request, res: Response) =>
            this.createPaymentIntent(req, res)
        );
        stripeRouter.post('/stripe/payment-intent/confirm', (req: Request, res: Response) =>
            this.confirmPaymentIntent(req, res)
        );
        stripeRouter.post('/stripe/payment-intent/cancel', (req: Request, res: Response) =>
            this.cancelPaymentIntent(req, res)
        );

        // Refunds
        stripeRouter.post('/stripe/refund', (req: Request, res: Response) =>
            this.createRefund(req, res)
        );

        // Admin/debug (platform-scoped)
        stripeRouter.get('/stripe/account', (req: Request, res: Response) =>
            this.retrieveAccount(req, res)
        );
        stripeRouter.get('/stripe/payment-intents', (req: Request, res: Response) =>
            this.listPaymentIntents(req, res)
        );
        stripeRouter.get('/stripe/charges', (req: Request, res: Response) =>
            this.listCharges(req, res)
        );

        stripeRouter.get('/owner/stripe/status', (req: Request, res: Response) =>
            this.ownerStripeStatus(req, res)
        );
        // IMPORTANT: Webhooks must be registered in your server bootstrap with RAW body:
        // import bodyParser from 'body-parser';
        // app.post('/stripe/owner/:ownerId/webhook', bodyParser.raw({ type: 'application/json' }),
        //   (req, res) => stripeSvc.handleOwnerWebhook(req as any, res));
        // app.post('/stripe/webhook', bodyParser.raw({ type: 'application/json' }),
        //   (req, res) => stripeSvc.handlePlatformWebhook(req as any, res, process.env.STRIPE_WEBHOOK_SECRET || ''));
    }

    async createOutingBalanceCheckout(req: any, res: any) {
        try {
            const body = req.body || {};
            const ownerId = body.ownerId || 'alegria';
            const bookingId = body.bookingId || body.proposalId || body.id;
            const rawBalanceAmount = body.balanceAmount ?? body.remainingAmount ?? body.amount ?? body.balance ?? body.remaining;
            const currency = String(body.currency || 'eur').toLowerCase();
            const rawCustomerEmail = body.customerEmail || body.email || body.customer?.email;
            const customerEmail = this.isValidEmailForStripe(rawCustomerEmail) ? String(rawCustomerEmail).trim() : '';
            const customerName = body.customerName || body.name || body.customer?.fullName || (!customerEmail ? rawCustomerEmail : '');
            const customerPhone = body.customerPhone || body.phone || body.customer?.phone;
            const outingType = body.outingType || body.type || '';
            const outingDate = body.outingDate || body.date || '';
            const successUrl = body.successUrl || body.returnUrl;
            const cancelUrl = body.cancelUrl || body.failureUrl || body.returnUrl;

            if (!bookingId) {
                return res.status(400).json({
                    error: 'bookingId is required',
                    received: { bookingId: body.bookingId, proposalId: body.proposalId, id: body.id }
                });
            }

            await this.assertBalanceCheckoutAllowed(bookingId, body);

            const amount = this.normalizeAmountToCents(rawBalanceAmount);
            if (!amount) {
                return res.status(400).json({
                    error: 'balanceAmount, remainingAmount or amount must be greater than 0',
                    received: { balanceAmount: body.balanceAmount, remainingAmount: body.remainingAmount, amount: body.amount }
                });
            }

            if (!successUrl || !cancelUrl) {
                return res.status(400).json({
                    error: 'successUrl and cancelUrl are required',
                    received: { successUrl, cancelUrl, returnUrl: body.returnUrl }
                });
            }

            const stripe = await this.getStripeForOwner(ownerId);

            const customer = customerEmail
                ? await stripe.customers.create({
                    email: customerEmail,
                    name: customerName,
                    phone: customerPhone,
                    metadata: {
                        bookingId,
                        ownerId,
                        source: 'alegria-balance',
                    },
                }).catch(() => null)
                : null;

            const paymentRef = this.stbDbSvc.db.ref('/backendpayments').push();
            const paymentId = paymentRef.key as string;

            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                customer: customer?.id,
                customer_email: customer ? undefined : customerEmail,
                line_items: [
                    {
                        quantity: 1,
                        price_data: {
                            currency,
                            unit_amount: amount,
                            product_data: {
                                name: 'Alegria remaining balance',
                                description: outingType || 'Boat outing remaining balance',
                            },
                        },
                    },
                ],
                success_url: this.appendCheckoutParams(successUrl, { session_id: '{CHECKOUT_SESSION_ID}', bookingId, paymentType: 'balance', payment: 'success' }),
                cancel_url: this.appendCheckoutParams(cancelUrl, { bookingId, paymentType: 'balance', payment: 'cancelled' }),
                payment_intent_data: {
                    metadata: {
                        paymentId,
                        bookingId,
                        ownerId,
                        paymentType: 'balance',
                        outingType: outingType || '',
                        outingDate: outingDate || '',
                    },
                },
                metadata: {
                    paymentId,
                    bookingId,
                    ownerId,
                    paymentType: 'balance',
                    outingType: outingType || '',
                    outingDate: outingDate || '',
                },
            });

            const now = Date.now();
            const payload = {
                paymentId,
                ownerId,
                bookingId,
                paymentType: 'balance',
                amount,
                currency,
                status: 'checkout_created',
                stripeCheckoutSessionId: session.id,
                stripeCustomerId: customer?.id || null,
                customerEmail: customerEmail || null,
                customerName: customerName || null,
                customerPhone: customerPhone || null,
                outingType: outingType || null,
                outingDate: outingDate || null,
                createdTS: now,
                modifiedTS: now,
            };

            await paymentRef.set(payload);
            await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'balance')).set(payload);
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/balance`).set(payload);

            return res.json({ ok: true, url: session.url, id: session.id, paymentId });
        } catch (e: any) {
            console.error('[createOutingBalanceCheckout] error:', e);
            return res.status(400).json({
                error: e?.message || 'Failed to create balance checkout session',
                code: e?.code || null,
                type: e?.type || null
            });
        }
    }

    async createOutingExtraServiceCheckout(req: any, res: any) {
        return res.status(501).json({ error: 'createOutingExtraServiceCheckout not yet implemented' });
    }

    async refundOutingPayment(req: any, res: any) {
        return res.status(501).json({ error: 'refundOutingPayment not yet implemented' });
    }

}
