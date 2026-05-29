"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.StripeService = void 0;
// server/src/stripe.service.ts
const stripe_1 = __importDefault(require("stripe"));
const dotenv = __importStar(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
dotenv.config();
// Use a stable, real API version (left as provided)
const STRIPE_API_VERSION = '2025-08-27.basil';
// Platform client (used for OAuth exchange and platform-scoped admin/debug)
const PLATFORM = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: STRIPE_API_VERSION,
});
/**
 * Resolve a Stripe client AUTHED AS THE OWNER (Standard account)
 * using the OAuth access_token stored at:
 *   /backendowners/{ownerId}/stripeStandard/access_token
 */
async function getOwnerStripe(db, ownerId) {
    const snap = await db.ref(`/backendowners/${ownerId}/stripeStandard`).once('value');
    const data = snap.val();
    if (!data?.access_token)
        throw new Error('Owner not connected to Stripe via Standard OAuth');
    return new stripe_1.default(data.access_token, { apiVersion: STRIPE_API_VERSION });
}
/** Get owner’s webhook signing secret (owner Dashboard → Webhooks) */
async function getOwnerWebhookSecret(db, ownerId) {
    const snap = await db.ref(`/backendowners/${ownerId}/webhookSecret`).once('value');
    const secret = snap.val();
    if (!secret)
        throw new Error('Owner webhook secret not found.');
    return secret;
}
class StripeService {
    constructor(stbDbSvc) {
        this.stbDbSvc = stbDbSvc;
    }
    // ---------------------------------------------------------------------------
    // 1) OAUTH (Standard accounts)
    // ---------------------------------------------------------------------------
    /** Step 1: Redirect to Stripe to connect Standard account */
    async connectAuthorize(req, res) {
        try {
            const { ownerId, accountType = 'owner', returnUrl } = req.query;
            if (!ownerId)
                return res.status(400).send('ownerId required');
            // Encode returnUrl safely inside state
            const encodedReturn = returnUrl
                ? Buffer.from(returnUrl, 'utf8').toString('base64url')
                : '';
            const state = `${crypto_1.default.randomBytes(16).toString('hex')}:${ownerId}:${accountType}:${encodedReturn}`;
            const params = new URLSearchParams({
                response_type: 'code',
                scope: 'read_write',
                client_id: process.env.STRIPE_CLIENT_ID,
                redirect_uri: process.env.STRIPE_CONNECT_REDIRECT_URI,
                state,
            });
            res.redirect(`https://connect.stripe.com/oauth/authorize?${params.toString()}`);
        }
        catch (e) {
            res.status(400).send(e?.message || 'Authorize failed');
        }
    }
    /** Step 2: Callback — exchange code for access_token and save it */
    async connectCallback(req, res) {
        try {
            const { code, state } = req.query;
            if (!code || !state)
                return res.status(400).send('Missing code/state');
            // state = nonce:ownerId:accountType:encodedReturn
            const parts = state.split(':');
            const ownerId = parts[1];
            const accountTypeRaw = parts[2];
            const encodedReturn = parts[3];
            const accountType = accountTypeRaw === 'provider' ? 'provider' : 'owner';
            if (!ownerId)
                return res.status(400).send('Bad state');
            let returnUrl;
            if (encodedReturn) {
                try {
                    returnUrl = Buffer.from(encodedReturn, 'base64url').toString('utf8');
                }
                catch {
                    returnUrl = undefined;
                }
            }
            const token = await PLATFORM.oauth.token({ grant_type: 'authorization_code', code });
            const { stripe_user_id, access_token, refresh_token, token_type, scope, livemode, } = token;
            const path = accountType === 'provider'
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
        }
        catch (err) {
            console.error('[Stripe OAuth callback] error:', err);
            res.status(400).send(err?.message || 'OAuth failed');
        }
    }
    /** Disconnect (deauthorize) an owner’s Standard connection */
    async connectDeauthorize(req, res) {
        try {
            const { ownerId } = req.body;
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId required' });
            const snap = await this.stbDbSvc.db
                .ref(`/backendowners/${ownerId}/stripeStandard`)
                .once('value');
            const data = snap.val();
            if (!data?.stripe_user_id)
                return res.json({ ok: true }); // already removed
            await PLATFORM.oauth.deauthorize({
                client_id: process.env.STRIPE_CLIENT_ID,
                stripe_user_id: data.stripe_user_id,
            });
            await this.stbDbSvc.db.ref(`/backendowners/${ownerId}/stripeStandard`).remove();
            res.json({ ok: true });
        }
        catch (e) {
            res.status(400).json({ error: e?.message || 'Deauthorize failed' });
        }
    }
    // ---------------------------------------------------------------------------
    // 2) Owner-scoped Money APIs (Standard: act on owner’s account)
    // ---------------------------------------------------------------------------
    /** Create a Customer in the OWNER’s account */
    async createCustomer(req, res) {
        try {
            const { ownerId, email, name, phone, metadata } = req.body;
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const customer = await stripe.customers.create({ email, name, phone, metadata });
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /** Retrieve a Customer (owner scope) */
    async retrieveCustomer(req, res) {
        try {
            const { ownerId, customerId } = req.query;
            if (!ownerId || !customerId) {
                return res.status(400).json({ error: 'ownerId & customerId required' });
            }
            const stripe = await this.getStripeForOwner(ownerId);
            const customer = await stripe.customers.retrieve(customerId);
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /** Update a Customer (owner scope) */
    async updateCustomer(req, res) {
        try {
            const { ownerId, customerId, updateFields } = req.body;
            if (!ownerId || !customerId) {
                return res.status(400).json({ error: 'ownerId & customerId required' });
            }
            const stripe = await this.getStripeForOwner(ownerId);
            const customer = await stripe.customers.update(customerId, updateFields || {});
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /** Delete a Customer (owner scope) */
    async deleteCustomer(req, res) {
        try {
            const { ownerId, customerId } = req.body;
            if (!ownerId || !customerId) {
                return res.status(400).json({ error: 'ownerId & customerId required' });
            }
            const stripe = await this.getStripeForOwner(ownerId);
            const deleted = await stripe.customers.del(customerId);
            res.json(deleted);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Checkout (mode: 'setup') — collect card for later charge (off-session)
     * body: { ownerId, bookingId, customerEmail?, successUrl, cancelUrl }
     */
    async checkoutSetup(req, res) {
        try {
            const { ownerId, bookingId, customerEmail, successUrl, cancelUrl } = req.body;
            if (!ownerId || !bookingId)
                return res.status(400).json({ error: 'ownerId & bookingId required' });
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
        }
        catch (e) {
            res.status(400).json({ error: e.message });
        }
    }
    /**
     * Owner accepts booking → off-session charge using saved PM
     * body: { ownerId, bookingId, amount, currency?='eur' }
     */
    async acceptAndCharge(req, res) {
        try {
            const { ownerId, bookingId, amount, currency = 'eur' } = req.body;
            if (!ownerId || !bookingId || !amount) {
                return res.status(400).json({ error: 'ownerId, bookingId, amount required' });
            }
            const bookingSnap = await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).once('value');
            if (!bookingSnap.exists())
                return res.status(404).json({ error: 'Booking not found' });
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
        }
        catch (e) {
            console.error('[acceptAndCharge] error:', e?.message || e);
            const { bookingId } = (req.body || {});
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
    normalizeAmountToCents(value) {
        const n = Number(value || 0);
        if (!Number.isFinite(n) || n <= 0)
            return 0;
        // Frontend may send euros (999) or cents (99900). Treat values < 10000 as euros.
        return Math.round(n < 10000 ? n * 100 : n);
    }
    buildBookingPaymentPath(bookingId, child) {
        return child
            ? `/backendbookings/${bookingId}/payments/${child}`
            : `/backendbookings/${bookingId}/payments`;
    }
    appendCheckoutParams(url, params) {
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
    async getStripeForOwner(ownerId) {
        if (ownerId === 'alegria' || ownerId === 'platform') {
            return PLATFORM;
        }
        return getOwnerStripe(this.stbDbSvc.db, ownerId);
    }
    async createOutingDepositCheckout(req, res) {
        try {
            const { ownerId, bookingId, depositAmount, currency = 'eur', customerEmail, customerName, customerPhone, outingType, outingDate, successUrl, cancelUrl, } = req.body || {};
            if (!ownerId || !bookingId) {
                return res.status(400).json({ error: 'ownerId and bookingId are required' });
            }
            const amount = this.normalizeAmountToCents(depositAmount);
            if (!amount)
                return res.status(400).json({ error: 'depositAmount must be greater than 0' });
            if (!successUrl || !cancelUrl)
                return res.status(400).json({ error: 'successUrl and cancelUrl are required' });
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
            const paymentId = paymentRef.key;
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
        }
        catch (e) {
            console.error('[createOutingDepositCheckout] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to create deposit checkout session' });
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
    async createOutingWarrantySetupCheckout(req, res) {
        try {
            const { ownerId, bookingId, warrantyAmount, currency = 'eur', customerEmail, customerName, customerPhone, outingType, outingDate, successUrl, cancelUrl, } = req.body || {};
            if (!ownerId || !bookingId) {
                return res.status(400).json({ error: 'ownerId and bookingId are required' });
            }
            const amount = this.normalizeAmountToCents(warrantyAmount);
            if (!amount)
                return res.status(400).json({ error: 'warrantyAmount must be greater than 0' });
            if (!successUrl || !cancelUrl)
                return res.status(400).json({ error: 'successUrl and cancelUrl are required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const customer = customerEmail
                ? await stripe.customers.create({
                    email: customerEmail,
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
            const paymentId = paymentRef.key;
            const session = await stripe.checkout.sessions.create({
                mode: 'setup',
                payment_method_types: ['card'],
                customer: customer?.id,
                customer_email: customer ? undefined : customerEmail,
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
        }
        catch (e) {
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
    async chargeOutingWarranty(req, res) {
        try {
            let { ownerId, bookingId, amount, reason, currency = 'eur' } = req.body || {};
            if (!bookingId) {
                return res.status(400).json({ error: 'bookingId is required' });
            }
            const amountCents = this.normalizeAmountToCents(amount);
            if (!amountCents)
                return res.status(400).json({ error: 'amount must be greater than 0' });
            const warrantySnap = await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'warranty')).once('value');
            const warranty = warrantySnap.val();
            ownerId = ownerId || warranty?.ownerId;
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId is required' });
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
                warrantyChargedAmount: amountCents,
                warrantyChargeReason: reason || null,
                modifiedTS: Date.now(),
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
        }
        catch (e) {
            console.error('[chargeOutingWarranty] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to charge warranty' });
        }
    }
    /**
     * Read payment status for a booking.
     * query: ownerId?, bookingId
     */
    async outingPaymentStatus(req, res) {
        try {
            const { bookingId } = req.query;
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            const snap = await this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId)).once('value');
            return res.json({ ok: true, bookingId, payments: snap.val() || {} });
        }
        catch (e) {
            return res.status(400).json({ error: e?.message || 'Failed to read payment status' });
        }
    }
    // ---------------------- PaymentIntent helpers (owner) -----------------------
    async createPaymentIntent(req, res) {
        try {
            const { ownerId, amount, currency, customerId, description, metadata } = req.body;
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const params = {
                amount,
                currency,
                customer: customerId,
                payment_method_types: ['card'],
                description,
                metadata,
            };
            const paymentIntent = await stripe.paymentIntents.create(params);
            res.json(paymentIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async confirmPaymentIntent(req, res) {
        try {
            const { ownerId, paymentIntentId } = req.body;
            if (!ownerId || !paymentIntentId)
                return res.status(400).json({ error: 'ownerId & paymentIntentId required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const paymentIntent = await stripe.paymentIntents.confirm(paymentIntentId);
            res.json(paymentIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async cancelPaymentIntent(req, res) {
        try {
            const { ownerId, paymentIntentId } = req.body;
            if (!ownerId || !paymentIntentId)
                return res.status(400).json({ error: 'ownerId & paymentIntentId required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const paymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);
            res.json(paymentIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /** Refund in the owner’s account */
    async createRefund(req, res) {
        try {
            const { ownerId, paymentIntentId, amount } = req.body;
            if (!ownerId || !paymentIntentId)
                return res.status(400).json({ error: 'ownerId & paymentIntentId required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const refund = await stripe.refunds.create({ payment_intent: paymentIntentId, amount });
            res.json(refund);
        }
        catch (error) {
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
    async markDepositPaidFromStripe(params) {
        const now = Date.now();
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
                paymentStatus: 'paid',
                stripePaymentIntentId: params.stripePaymentIntentId || null,
                stripeCheckoutSessionId: params.stripeCheckoutSessionId || null,
                modifiedTS: now,
                updatedAt: now,
            }),
            this.stbDbSvc.db.ref(`/bnProposals/${params.bookingId}`).update({
                depositStatus: 'paid',
                depositPaid: true,
                paymentStatus: 'paid',
                status: 'accepted',
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
    async markWarrantySavedFromStripe(params) {
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
    async handleOwnerWebhook(req, res) {
        const ownerId = req.params.ownerId;
        if (!ownerId)
            return res.status(400).send('ownerId missing in URL');
        let event;
        try {
            const secret = (ownerId === 'alegria' || ownerId === 'platform') ? (process.env.STRIPE_WEBHOOK_SECRET || '') : await getOwnerWebhookSecret(this.stbDbSvc.db, ownerId);
            const signature = req.headers['stripe-signature'];
            // req.body must be a Buffer (bodyParser.raw in bootstrap)
            event = PLATFORM.webhooks.constructEvent(req.body, signature, secret);
        }
        catch (err) {
            console.error('[Owner Webhook] signature verification failed:', err.message);
            return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
        }
        try {
            console.log('[Owner Webhook] event', event.type, event.id);
            switch (event.type) {
                case 'setup_intent.succeeded': {
                    const si = event.data.object;
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
                            paymentMethodId: si.payment_method || null,
                            stripeCustomerId: si.customer || null,
                        });
                    }
                    break;
                }
                case 'checkout.session.completed': {
                    const session = event.data.object;
                    const bookingId = (session.metadata && session.metadata['bookingId']) || null;
                    const paymentType = (session.metadata && session.metadata['paymentType']) || null;
                    const paymentId = (session.metadata && session.metadata['paymentId']) || null;
                    if (!bookingId)
                        break;
                    const now = Date.now();
                    if (paymentType === 'deposit') {
                        await this.markDepositPaidFromStripe({
                            bookingId,
                            paymentId,
                            ownerId,
                            amount: session.amount_total || null,
                            currency: session.currency || 'eur',
                            stripeCheckoutSessionId: session.id,
                            stripePaymentIntentId: session.payment_intent || null,
                            stripeCustomerId: session.customer || null,
                        });
                    }
                    if (session.mode === 'setup' && session.setup_intent) {
                        const stripe = await this.getStripeForOwner(ownerId);
                        const si = await stripe.setupIntents.retrieve(session.setup_intent);
                        const paymentMethodId = si.payment_method || null;
                        const customerId = si.customer || null;
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
                        const updatePayload = {
                            status: 'deposit_paid',
                            checkoutSessionId: session.id,
                            paymentIntentId: session.payment_intent,
                            stripeCustomerId: session.customer || null,
                            amount_total: session.amount_total || null,
                            currency: session.currency || null,
                            modifiedTS: now,
                            updatedAt: now,
                        };
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payments/deposit`).update(updatePayload);
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/deposit`).update(updatePayload);
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                            depositStatus: 'paid',
                            depositPaid: true,
                            modifiedTS: now,
                        });
                        if (paymentId) {
                            await this.stbDbSvc.db.ref(`/backendpayments/${paymentId}`).update(updatePayload);
                        }
                    }
                    break;
                }
                case 'payment_intent.succeeded': {
                    const pi = event.data.object;
                    const bookingId = (pi.metadata && pi.metadata['bookingId']) || null;
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
                    const pi = event.data.object;
                    const bookingId = (pi.metadata && pi.metadata['bookingId']) || null;
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
        }
        catch (err) {
            console.error('[Owner Webhook] handler error:', err);
            res.status(500).send(`Webhook handler error: ${err.message || err}`);
        }
    }
    /** Optional: platform-scoped webhook if you need it */
    async handlePlatformWebhook(req, res, endpointSecret) {
        try {
            const sig = req.headers['stripe-signature'];
            const event = PLATFORM.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log('[Platform Webhook] event:', event.type);
            res.status(200).send({ received: true });
        }
        catch (err) {
            console.error('[Platform Webhook] Error:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    }
    // ---------------------------------------------------------------------------
    // 4) Admin / misc (platform-scoped)
    // ---------------------------------------------------------------------------
    /** Retrieve any account by id (acts with platform secret key) */
    async retrieveAccount(req, res) {
        try {
            const { accountId } = req.query;
            if (!accountId)
                return res.status(400).json({ error: 'accountId required' });
            const account = await PLATFORM.accounts.retrieve(accountId);
            res.json(account);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /** List PaymentIntents on the platform account (debug) */
    async listPaymentIntents(req, res) {
        try {
            const { limit = 10 } = req.query;
            const paymentIntents = await PLATFORM.paymentIntents.list({ limit: Number(limit) });
            res.json(paymentIntents);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /** List Charges on the platform account (debug) */
    async listCharges(req, res) {
        try {
            const { limit = 10 } = req.query;
            const charges = await PLATFORM.charges.list({ limit: Number(limit) });
            res.json(charges);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
   * Return public Stripe connection status for an owner.
   * Does NOT expose access_token or refresh_token.
   *
   * GET /owner/stripe/status?ownerId=...
   */
    async ownerStripeStatus(req, res) {
        try {
            const { ownerId } = req.query;
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
        }
        catch (err) {
            console.error('[ownerStripeStatus] Error:', err);
            res.status(500).json({ error: err?.message || 'Failed to read Stripe status' });
        }
    }
    // ---------------------------------------------------------------------------
    // 5) Route wiring (use in your router)
    // ---------------------------------------------------------------------------
    setRoutes(stripeRouter) {
        // OAuth (Standard)
        stripeRouter.get('/stripe/connect/authorize', (req, res) => this.connectAuthorize(req, res));
        stripeRouter.get('/stripe/connect/callback', (req, res) => this.connectCallback(req, res));
        stripeRouter.post('/stripe/connect/deauthorize', (req, res) => this.connectDeauthorize(req, res));
        // Customers
        stripeRouter.post('/stripe/customer', (req, res) => this.createCustomer(req, res));
        stripeRouter.get('/stripe/customer', (req, res) => this.retrieveCustomer(req, res));
        stripeRouter.put('/stripe/customer', (req, res) => this.updateCustomer(req, res));
        stripeRouter.delete('/stripe/customer', (req, res) => this.deleteCustomer(req, res));
        // Checkout setup + accept & charge
        stripeRouter.post('/pay/checkout-setup', (req, res) => this.checkoutSetup(req, res));
        stripeRouter.post('/pay/accept-and-charge', (req, res) => this.acceptAndCharge(req, res));
        // Alegria outing deposit + warranty
        stripeRouter.post('/pay/outing-deposit-checkout', (req, res) => this.createOutingDepositCheckout(req, res));
        stripeRouter.post('/pay/outing-warranty-checkout', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/pay/outing-warranty-charge', (req, res) => this.chargeOutingWarranty(req, res));
        stripeRouter.get('/pay/outing-payment-status', (req, res) => this.outingPaymentStatus(req, res));
        // Frontend-friendly aliases
        stripeRouter.post('/api/payments/create-deposit-checkout-session', (req, res) => this.createOutingDepositCheckout(req, res));
        stripeRouter.post('/api/payments/create-warranty-checkout-session', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/api/payments/create-warranty-setup-session', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/api/payments/charge-warranty', (req, res) => this.chargeOutingWarranty(req, res));
        stripeRouter.get('/api/payments/status', (req, res) => this.outingPaymentStatus(req, res));
        // Older aliases used by the Angular BookingApiService
        stripeRouter.post('/stripe/deposit-checkout', (req, res) => this.createOutingDepositCheckout(req, res));
        stripeRouter.post('/stripe/warranty-setup', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/stripe/warranty-charge', (req, res) => this.chargeOutingWarranty(req, res));
        // PaymentIntent helpers
        stripeRouter.post('/stripe/payment-intent', (req, res) => this.createPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/confirm', (req, res) => this.confirmPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/cancel', (req, res) => this.cancelPaymentIntent(req, res));
        // Refunds
        stripeRouter.post('/stripe/refund', (req, res) => this.createRefund(req, res));
        // Admin/debug (platform-scoped)
        stripeRouter.get('/stripe/account', (req, res) => this.retrieveAccount(req, res));
        stripeRouter.get('/stripe/payment-intents', (req, res) => this.listPaymentIntents(req, res));
        stripeRouter.get('/stripe/charges', (req, res) => this.listCharges(req, res));
        stripeRouter.get('/owner/stripe/status', (req, res) => this.ownerStripeStatus(req, res));
        // IMPORTANT: Webhooks must be registered in your server bootstrap with RAW body:
        // import bodyParser from 'body-parser';
        // app.post('/stripe/owner/:ownerId/webhook', bodyParser.raw({ type: 'application/json' }),
        //   (req, res) => stripeSvc.handleOwnerWebhook(req as any, res));
        // app.post('/stripe/webhook', bodyParser.raw({ type: 'application/json' }),
        //   (req, res) => stripeSvc.handlePlatformWebhook(req as any, res, process.env.STRIPE_WEBHOOK_SECRET || ''));
    }
}
exports.StripeService = StripeService;

//# sourceMappingURL=stripeAdn.js.map
