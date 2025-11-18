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
// stripe.service.ts
const stripe_1 = __importDefault(require("stripe"));
const dotenv = __importStar(require("dotenv"));
const crypto_1 = __importDefault(require("crypto"));
const body_parser_1 = __importDefault(require("body-parser"));
dotenv.config();
// Use a stable, real API version
const STRIPE_API_VERSION = '2025-08-27.basil';
// Platform client (used only for OAuth exchange and optional platform webhooks/admin)
const PLATFORM = new stripe_1.default(process.env.STRIPE_SECRET_KEY, {
    apiVersion: STRIPE_API_VERSION,
});
/**
 * Resolve a Stripe client AUTHED AS THE OWNER (Standard account)
 * using the OAuth access_token you stored in RTDB at:
 *   /backendowners/{ownerId}/stripeStandard/access_token
 */
async function getOwnerStripe(db, ownerId) {
    const snap = await db.ref(`/backendowners/${ownerId}/stripeStandard`).once('value');
    const data = snap.val();
    if (!data?.access_token) {
        throw new Error('Owner not connected to Stripe via Standard OAuth');
    }
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
    /** Step 1: Redirect owner to Stripe to connect their Standard account */
    async connectAuthorize(req, res) {
        try {
            const { ownerId } = req.query;
            if (!ownerId)
                return res.status(400).send('ownerId required');
            // keep ownerId inside state to match on the callback
            const state = `${crypto_1.default.randomBytes(16).toString('hex')}:${ownerId}`;
            const params = new URLSearchParams({
                response_type: 'code',
                scope: 'read_write',
                client_id: process.env.STRIPE_CLIENT_ID,
                redirect_uri: process.env.STRIPE_CONNECT_REDIRECT_URI, // e.g. https://api.example.com/api/stripe/connect/callback
                state,
            });
            res.redirect(`https://connect.stripe.com/oauth/authorize?${params.toString()}`);
        }
        catch (e) {
            res.status(400).send(e.message || 'Authorize failed');
        }
    }
    /** Step 2: Stripe redirects here — exchange code for access_token and save it */
    async connectCallback(req, res) {
        try {
            const { code, state } = req.query;
            if (!code || !state)
                return res.status(400).send('Missing code/state');
            const [, ownerId] = state.split(':');
            if (!ownerId)
                return res.status(400).send('Bad state');
            const token = await PLATFORM.oauth.token({
                grant_type: 'authorization_code',
                code,
            });
            const { stripe_user_id, access_token, refresh_token, token_type, scope, livemode, } = token;
            await this.stbDbSvc.db.ref(`/backendowners/${ownerId}/stripeStandard`).set({
                stripe_user_id,
                access_token,
                refresh_token,
                token_type,
                scope,
                livemode,
                connectedAt: Date.now(),
            });
            res.redirect(process.env.CONNECT_DONE_REDIRECT || '/owner/stripe/connected');
        }
        catch (err) {
            console.error('[Stripe OAuth callback] error:', err);
            res.status(400).send(err.message || 'OAuth failed');
        }
    }
    /** Disconnect (deauthorize) an owner’s Standard connection */
    async connectDeauthorize(req, res) {
        try {
            const { ownerId } = req.body;
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId required' });
            const snap = await this.stbDbSvc.db.ref(`/backendowners/${ownerId}/stripeStandard`).once('value');
            const data = snap.val();
            if (!data?.stripe_user_id)
                return res.json({ ok: true }); // already gone
            await PLATFORM.oauth.deauthorize({
                client_id: process.env.STRIPE_CLIENT_ID,
                stripe_user_id: data.stripe_user_id,
            });
            await this.stbDbSvc.db.ref(`/backendowners/${ownerId}/stripeStandard`).remove();
            res.json({ ok: true });
        }
        catch (e) {
            res.status(400).json({ error: e.message });
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
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
            if (!ownerId || !customerId)
                return res.status(400).json({ error: 'ownerId & customerId required' });
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
            if (!ownerId || !customerId)
                return res.status(400).json({ error: 'ownerId & customerId required' });
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
            if (!ownerId || !customerId)
                return res.status(400).json({ error: 'ownerId & customerId required' });
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
            const deleted = await stripe.customers.del(customerId);
            res.json(deleted);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    /**
     * Checkout (mode: 'setup') — collect card for later charge
     * body: { ownerId, bookingId, customerEmail, successUrl, cancelUrl }
     */
    async checkoutSetup(req, res) {
        try {
            const { ownerId, bookingId, customerEmail, successUrl, cancelUrl } = req.body;
            if (!ownerId || !bookingId)
                return res.status(400).json({ error: 'ownerId & bookingId required' });
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
            // Optional: create a Customer on owner account to anchor the PM
            const customer = customerEmail
                ? await stripe.customers.create({ email: customerEmail }).catch(() => null)
                : null;
            const session = await stripe.checkout.sessions.create({
                mode: 'setup',
                payment_method_types: ['card'],
                customer: customer?.id,
                success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}&bookingId=${bookingId}`,
                cancel_url: `${cancelUrl}?bookingId=${bookingId}`,
                // keep bookingId handy for webhook mapping
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
     * Owner accepts booking → create an off-session charge using saved PM.
     * body: { ownerId, bookingId, amount, currency }
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
            // Mark booking confirmed first (business choice). Payment success/failure will further annotate.
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
                confirm: true, // charge immediately
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
            // If off-session confirmation failed (e.g., authentication_required), store error and revert if needed
            console.error('[acceptAndCharge] error:', e?.message || e);
            const { ownerId, bookingId } = req.body || {};
            if (bookingId) {
                await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}/payment`).update({
                    status: 'charge_failed',
                    lastError: e?.message || 'Charge failed',
                    updatedAt: Date.now(),
                });
                // Optionally flip booking back to pending
                await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                    status: 'pending',
                    updatedAt: Date.now(),
                });
            }
            res.status(400).json({ error: e?.message || 'Charge failed' });
        }
    }
    /** Standard owner-scoped PaymentIntent helpers (if you still want them) */
    async createPaymentIntent(req, res) {
        try {
            const { ownerId, amount, currency, customerId, description, metadata } = req.body;
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId required' });
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
            const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
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
     * URL: POST /api/stripe/owner/:ownerId/webhook
     * Events to subscribe (owner’s Dashboard):
     *  - checkout.session.completed
     *  - payment_intent.succeeded
     *  - payment_intent.payment_failed
     */
    async handleOwnerWebhook(req, res) {
        const ownerId = req.params.ownerId;
        if (!ownerId)
            return res.status(400).send('ownerId missing in URL');
        let event;
        try {
            const secret = await getOwnerWebhookSecret(this.stbDbSvc.db, ownerId);
            const signature = req.headers['stripe-signature'];
            // req.body must be a Buffer (bodyParser.raw)
            event = PLATFORM.webhooks.constructEvent(req.body, signature, secret);
        }
        catch (err) {
            console.error('[Owner Webhook] signature verification failed:', err.message);
            return res.status(400).send(`Webhook signature verification failed: ${err.message}`);
        }
        try {
            switch (event.type) {
                case 'checkout.session.completed': {
                    const session = event.data.object;
                    if (session.mode !== 'setup' || !session.setup_intent)
                        break;
                    const bookingId = (session.metadata && session.metadata['bookingId']) ||
                        null;
                    if (!bookingId) {
                        console.warn('[Owner Webhook] session completed but no bookingId metadata');
                        break;
                    }
                    const stripe = await getOwnerStripe(this.stbDbSvc.db, ownerId);
                    const si = await stripe.setupIntents.retrieve(session.setup_intent);
                    const paymentMethodId = si.payment_method || null;
                    const customerId = si.customer || null;
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
                    const pi = event.data.object;
                    const bookingId = (pi.metadata && pi.metadata['bookingId']) || null;
                    if (bookingId) {
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                            status: 'confirmed', // ensure confirmed in case it wasn’t
                            updatedAt: Date.now(),
                            'payment.status': 'charge_succeeded',
                            'payment.paymentIntentId': pi.id,
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
                        // Optionally revert booking to pending so owner can retry
                        await this.stbDbSvc.db.ref(`/backendbookings/${bookingId}`).update({
                            status: 'pending',
                            updatedAt: Date.now(),
                        });
                    }
                    break;
                }
                default:
                    // ignore other events or add more as needed
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
    // 4) Admin / misc
    // ---------------------------------------------------------------------------
    async retrieveAccount(req, res) {
        try {
            const { accountId } = req.query;
            const account = await PLATFORM.accounts.retrieve(accountId);
            res.json(account);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
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
    // ---------------------------------------------------------------------------
    // 5) Route wiring (use in your router)
    // NOTE: In your Express bootstrap, set RAW BODY for the webhook routes.
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
        // PaymentIntent helpers (optional)
        stripeRouter.post('/stripe/payment-intent', (req, res) => this.createPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/confirm', (req, res) => this.confirmPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/cancel', (req, res) => this.cancelPaymentIntent(req, res));
        // Refunds
        stripeRouter.post('/stripe/refund', (req, res) => this.createRefund(req, res));
        // Optional: platform webhook (also needs raw body in bootstrap)
        stripeRouter.post('/webhook', (req, res) => this.handlePlatformWebhook(req, res, process.env.STRIPE_WEBHOOK_SECRET || ''));
        // Admin/debug
        stripeRouter.get('/stripe/account', (req, res) => this.retrieveAccount(req, res));
        stripeRouter.get('/stripe/payment-intents', (req, res) => this.listPaymentIntents(req, res));
        stripeRouter.get('/stripe/charges', (req, res) => this.listCharges(req, res));
        // Webhooks
        // Webhooks must use raw
        stripeRouter.post('/api/stripe/owner/:ownerId/webhook', body_parser_1.default.raw({ type: 'application/json' }), (req, res) => this.handleOwnerWebhook(req, res));
        stripeRouter.post('/api/stripe/webhook', body_parser_1.default.raw({ type: 'application/json' }), (req, res) => this.handlePlatformWebhook(req, res, process.env.STRIPE_WEBHOOK_SECRET || ''));
    }
}
exports.StripeService = StripeService;

//# sourceMappingURL=stripeAdn.js.map
