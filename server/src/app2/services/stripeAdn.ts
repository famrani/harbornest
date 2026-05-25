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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);

            // Optional: anchor PM on a Customer you create now
            const customer = customerEmail
                ? await stripe.customers.create({ email: customerEmail }).catch(() => null)
                : null;

            const session = await stripe.checkout.sessions.create({
                mode: 'setup',
                payment_method_types: ['card'],
                customer: customer?.id,
                success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}&bookingId=${bookingId}`,
                cancel_url: `${cancelUrl}?bookingId=${bookingId}`,
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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



    /**
     * Create a Stripe Checkout Session for an Alegria charter deposit.
     *
     * This endpoint is designed for the public customer deposit page.
     * It can charge either:
     *  - the platform Stripe account, when ownerId is omitted, or
     *  - a connected owner Standard account, when ownerId is provided.
     *
     * POST /api/payments/create-deposit-checkout-session
     * Alias: POST /pay/deposit-checkout
     *
     * body: {
     *   ownerId?: string,
     *   bookingId?: string,
     *   customerName: string,
     *   customerEmail: string,
     *   outingDate: string,        // ISO date or display date
     *   outingType?: string,
     *   totalPrice: number,        // euros by default, e.g. 1299
     *   depositAmount?: number,    // euros; defaults to 50% of totalPrice
     *   currency?: string,         // defaults to eur
     *   successUrl: string,
     *   cancelUrl: string
     * }
     */
    async createDepositCheckoutSession(req: Request, res: Response) {
        try {
            const {
                ownerId,
                bookingId,
                customerName,
                customerEmail,
                outingDate,
                outingType = 'Alegria outing',
                totalPrice,
                depositAmount,
                currency = 'eur',
                successUrl,
                cancelUrl,
            } = req.body || {};

            if (!customerName || !customerEmail || !outingDate || !totalPrice || !successUrl || !cancelUrl) {
                return res.status(400).json({
                    error: 'customerName, customerEmail, outingDate, totalPrice, successUrl and cancelUrl are required',
                });
            }

            const totalPriceNumber = Number(totalPrice);
            if (!Number.isFinite(totalPriceNumber) || totalPriceNumber <= 0) {
                return res.status(400).json({ error: 'totalPrice must be a positive number' });
            }

            const depositNumber = depositAmount !== undefined && depositAmount !== null
                ? Number(depositAmount)
                : totalPriceNumber * 0.5;

            if (!Number.isFinite(depositNumber) || depositNumber <= 0) {
                return res.status(400).json({ error: 'depositAmount must be a positive number' });
            }

            const totalPriceCents = Math.round(totalPriceNumber * 100);
            const depositCents = Math.round(depositNumber * 100);

            const stripe = ownerId
                ? await getOwnerStripe(this.stbDbSvc.db, ownerId)
                : PLATFORM;

            const customer = await stripe.customers.create({
                name: customerName,
                email: customerEmail,
                metadata: {
                    source: 'alegria_deposit_page',
                    bookingId: bookingId || '',
                    outingDate,
                    outingType,
                },
            });

            const depositRef = this.stbDbSvc.db.ref('/backenddeposits').push();
            const depositId = depositRef.key || crypto.randomBytes(12).toString('hex');

            const session = await stripe.checkout.sessions.create({
                mode: 'payment',
                payment_method_types: ['card'],
                customer: customer.id,
                customer_email: undefined,
                line_items: [
                    {
                        quantity: 1,
                        price_data: {
                            currency,
                            unit_amount: depositCents,
                            product_data: {
                                name: `Alegria deposit - ${outingType}`,
                                description: `Deposit for ${outingDate}. Total price: ${(totalPriceCents / 100).toFixed(2)} ${currency.toUpperCase()}`,
                            },
                        },
                    },
                ],
                success_url: `${successUrl}${successUrl.includes('?') ? '&' : '?'}session_id={CHECKOUT_SESSION_ID}&depositId=${depositId}`,
                cancel_url: `${cancelUrl}${cancelUrl.includes('?') ? '&' : '?'}depositId=${depositId}`,
                metadata: {
                    depositId,
                    bookingId: bookingId || '',
                    ownerId: ownerId || '',
                    customerName,
                    customerEmail,
                    outingDate,
                    outingType,
                    totalPriceCents: String(totalPriceCents),
                    depositCents: String(depositCents),
                },
                payment_intent_data: {
                    description: `Alegria deposit - ${outingType} - ${outingDate}`,
                    metadata: {
                        depositId,
                        bookingId: bookingId || '',
                        ownerId: ownerId || '',
                        customerName,
                        customerEmail,
                        outingDate,
                        outingType,
                        totalPriceCents: String(totalPriceCents),
                        depositCents: String(depositCents),
                    },
                },
            });

            await depositRef.set({
                depositId,
                bookingId: bookingId || null,
                ownerId: ownerId || null,
                customerName,
                customerEmail,
                outingDate,
                outingType,
                totalPriceCents,
                depositCents,
                currency,
                stripeCustomerId: customer.id,
                checkoutSessionId: session.id,
                status: 'checkout_created',
                createdAt: Date.now(),
                updatedAt: Date.now(),
            });

            if (bookingId) {
                await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                    depositId,
                    depositStatus: 'checkout_created',
                    depositCheckoutSessionId: session.id,
                    depositAmount: depositCents,
                    totalPrice: totalPriceCents,
                    currency,
                    updatedAt: Date.now(),
                });
            }

            return res.json({
                ok: true,
                url: session.url,
                id: session.id,
                depositId,
                amount: depositCents,
                currency,
            });
        } catch (e: any) {
            console.error('[createDepositCheckoutSession] error:', e?.message || e);
            return res.status(400).json({ error: e?.message || 'Failed to create deposit checkout session' });
        }
    }


    // ---------------------- PaymentIntent helpers (owner) -----------------------

    async createPaymentIntent(req: Request, res: Response) {
        try {
            const { ownerId, amount, currency, customerId, description, metadata } = req.body;
            if (!ownerId) return res.status(400).json({ error: 'ownerId required' });

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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

            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
    async handleOwnerWebhook(req: Request, res: Response) {
        const ownerId = (req.params as any).ownerId as string;
        if (!ownerId) return res.status(400).send('ownerId missing in URL');

        let event: Stripe.Event;
        try {
            const secret = await getOwnerWebhookSecret(this.stbDbSvc.db, ownerId);
            const signature = req.headers['stripe-signature'] as string;
            // req.body must be a Buffer (bodyParser.raw in bootstrap)
            event = PLATFORM.webhooks.constructEvent(req.body as any, signature, secret);
        } catch (err: any) {
            console.error('[Owner Webhook] signature verification failed:', err.message);
            return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
        }

        try {
            switch (event.type) {
                case 'checkout.session.completed': {
                    const session = event.data.object as Stripe.Checkout.Session;

                    // Deposit checkout sessions created by createDepositCheckoutSession()
                    if (session.mode === 'payment') {
                        const depositId = (session.metadata && session.metadata['depositId']) || null;
                        const bookingId = (session.metadata && session.metadata['bookingId']) || null;

                        if (depositId) {
                            await this.stbDbSvc.db.ref(`/backenddeposits/${depositId}`).update({
                                status: 'paid',
                                checkoutSessionId: session.id,
                                paymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
                                paidAt: Date.now(),
                                updatedAt: Date.now(),
                            });
                        }

                        if (bookingId) {
                            await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                                depositStatus: 'paid',
                                depositCheckoutSessionId: session.id,
                                depositPaymentIntentId: typeof session.payment_intent === 'string' ? session.payment_intent : null,
                                updatedAt: Date.now(),
                            });
                        }
                        break;
                    }

                    // Existing setup-mode flow used to save a card for later off-session charge
                    if (session.mode !== 'setup' || !session.setup_intent) break;

                    const bookingId = (session.metadata && session.metadata['bookingId']) || null;
                    if (!bookingId) break;

                    const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
                    const si = await stripe.setupIntents.retrieve(session.setup_intent as string);

                    const paymentMethodId = (si.payment_method as string) || null;
                    const customerId = (si.customer as string) || null;

                    await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                        status: 'pm_saved',
                        setupIntentId: si.id,
                        paymentMethodId,
                        customerId,
                        updatedAt: Date.now(),
                    });
                    break;
                }

                case 'payment_intent.succeeded': {
                    const pi = event.data.object as Stripe.PaymentIntent;
                    const bookingId = (pi.metadata && (pi.metadata as any)['bookingId']) || null;
                    if (bookingId) {
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                            status: 'confirmed',
                            updatedAt: Date.now(),
                            'payment.status': 'charge_succeeded',
                            'payment.paymentIntentId': pi.id,
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

        // Alegria public deposit checkout
        stripeRouter.post('/api/payments/create-deposit-checkout-session', (req: Request, res: Response) =>
            this.createDepositCheckoutSession(req, res)
        );
        stripeRouter.post('/pay/deposit-checkout', (req: Request, res: Response) =>
            this.createDepositCheckoutSession(req, res)
        );

        // Checkout setup + accept & charge
        stripeRouter.post('/pay/checkout-setup', (req: Request, res: Response) =>
            this.checkoutSetup(req, res)
        );
        stripeRouter.post('/pay/accept-and-charge', (req: Request, res: Response) =>
            this.acceptAndCharge(req, res)
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
}
