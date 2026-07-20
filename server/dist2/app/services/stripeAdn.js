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
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payment`).update({
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
            const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
            if (!bookingSnap.exists())
                return res.status(404).json({ error: 'Booking not found' });
            const booking = bookingSnap.val();
            const pmId = booking?.payment?.paymentMethodId;
            const customerId = booking?.payment?.customerId;
            if (!pmId || !customerId) {
                return res.status(400).json({ error: 'No saved payment method/customer — complete checkout setup first' });
            }
            // Mark confirmed (your business choice)
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
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
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payment`).update({
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
                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payment`).update({
                    status: 'charge_failed',
                    lastError: e?.message || 'Charge failed',
                    updatedAt: Date.now(),
                });
                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
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
    parseOutingDateToMidnight(value) {
        const rawDate = String(value || '').trim();
        if (!rawDate)
            return 0;
        let normalized = rawDate;
        const frenchDate = rawDate.match(/^(\d{1,2})[\/\-.](\d{1,2})[\/\-.](\d{2,4})$/);
        if (frenchDate) {
            const day = frenchDate[1].padStart(2, '0');
            const month = frenchDate[2].padStart(2, '0');
            const year = frenchDate[3].length === 2 ? `20${frenchDate[3]}` : frenchDate[3];
            normalized = `${year}-${month}-${day}`;
        }
        const timestamp = Date.parse(normalized);
        if (Number.isNaN(timestamp))
            return 0;
        const date = new Date(timestamp);
        date.setHours(0, 0, 0, 0);
        return date.getTime();
    }
    isOutingDateTodayOrPast(value) {
        const outingTime = this.parseOutingDateToMidnight(value);
        if (!outingTime)
            return false;
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return outingTime <= today.getTime();
    }
    isCompletedPaymentValue(value) {
        if (value === true)
            return true;
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
    isCancelledStatusValue(value) {
        if (value === false)
            return true;
        const normalized = String(value || '').toLowerCase().trim();
        return ['false', 'cancelled', 'canceled', 'deleted'].includes(normalized);
    }
    hasExplicitCustomerTermsAcceptance(booking) {
        // A persisted explicit boolean is the source of truth. Older records may
        // not have acceptedAt/acceptedBy, so requiring audit metadata here
        // incorrectly blocks valid payments even though the UI shows acceptance.
        const accepted = booking?.customerTermsAccepted === true ||
            booking?.terms?.accepted === true ||
            booking?.workflow?.termsAccepted === true ||
            booking?.bookingWorkflow?.termsAccepted === true ||
            booking?.documents?.termsAccepted === true ||
            booking?.termsAccepted === true ||
            booking?.acceptedTerms === true ||
            booking?.tcAccepted === true ||
            booking?.tncAccepted === true ||
            booking?.tAndCAccepted === true ||
            booking?.termsAndConditionsAccepted === true ||
            booking?.termsAcceptedStatus === 'accepted' ||
            booking?.termsStatus === 'accepted' ||
            booking?.termsAndConditionsStatus === 'accepted';
        return accepted === true;
    }
    async assertTermsAcceptedBeforeCustomerAction(bookingId) {
        const id = String(bookingId || '').trim();
        if (!id) {
            throw new Error('bookingId is required');
        }
        const db = this.stbDbSvc.db;
        const bookingCandidates = [];
        const addCandidate = (value, source) => {
            if (!value)
                return;
            bookingCandidates.push({ value, source });
        };
        // 1) Direct Firebase key lookup.
        const directBookingSnap = await db.ref(`/bnBookings/${id}`).once('value');
        addCandidate(directBookingSnap.val(), `/bnBookings/${id}`);
        // 2) Resolve legacy/new identifiers. Some screens send bookingId, offerId,
        // proposalId or relatedBookingId, and those values are not always equal to
        // the Firebase node key.
        const bookingLookupFields = [
            'bookingId',
            'offerId',
            'proposalId',
            'relatedBookingId',
            'sourceOfferId'
        ];
        for (const field of bookingLookupFields) {
            try {
                const snap = await db.ref('/bnBookings').orderByChild(field).equalTo(id).once('value');
                const matches = snap.val() || {};
                Object.keys(matches).forEach((key) => addCandidate(matches[key], `/bnBookings/${key} via ${field}`));
            }
            catch (queryError) {
                console.warn('[terms-guard] booking lookup failed', { id, field, queryError });
            }
        }
        for (const candidate of bookingCandidates) {
            if (this.hasExplicitCustomerTermsAcceptance(candidate.value)) {
                return candidate.value;
            }
        }
        // 3) Resolve the associated offer/proposal using every relationship found
        // on the booking plus the incoming id.
        const relatedOfferIds = new Set([id]);
        for (const candidate of bookingCandidates) {
            const booking = candidate.value || {};
            [
                booking.offerId,
                booking.proposalId,
                booking.sourceOfferId,
                booking.workflow?.offerId,
                booking.workflow?.proposalId,
                booking.raw?.offerId,
                booking.raw?.proposalId
            ].forEach((value) => {
                const normalized = String(value || '').trim();
                if (normalized)
                    relatedOfferIds.add(normalized);
            });
        }
        const offerCandidates = [];
        const addOffer = (value, source) => {
            if (!value)
                return;
            offerCandidates.push({ value, source });
        };
        for (const offerId of relatedOfferIds) {
            const directOfferSnap = await db.ref(`/bnProposals/${offerId}`).once('value');
            addOffer(directOfferSnap.val(), `/bnProposals/${offerId}`);
        }
        const offerLookupFields = [
            'offerId',
            'proposalId',
            'bookingId',
            'relatedBookingId'
        ];
        for (const lookupId of relatedOfferIds) {
            for (const field of offerLookupFields) {
                try {
                    const snap = await db.ref('/bnProposals').orderByChild(field).equalTo(lookupId).once('value');
                    const matches = snap.val() || {};
                    Object.keys(matches).forEach((key) => addOffer(matches[key], `/bnProposals/${key} via ${field}`));
                }
                catch (queryError) {
                    console.warn('[terms-guard] offer lookup failed', { lookupId, field, queryError });
                }
            }
        }
        for (const candidate of offerCandidates) {
            if (this.hasExplicitCustomerTermsAcceptance(candidate.value)) {
                return candidate.value;
            }
        }
        console.error('[terms-guard] acceptance not found', {
            requestedId: id,
            bookingCandidates: bookingCandidates.map((candidate) => ({
                source: candidate.source,
                bookingId: candidate.value?.bookingId,
                offerId: candidate.value?.offerId,
                proposalId: candidate.value?.proposalId,
                relatedBookingId: candidate.value?.relatedBookingId,
                termsAccepted: candidate.value?.termsAccepted,
                tncAccepted: candidate.value?.tncAccepted,
                customerTermsAccepted: candidate.value?.customerTermsAccepted
            })),
            offerCandidates: offerCandidates.map((candidate) => ({
                source: candidate.source,
                offerId: candidate.value?.offerId,
                proposalId: candidate.value?.proposalId,
                bookingId: candidate.value?.bookingId,
                termsAccepted: candidate.value?.termsAccepted,
                tncAccepted: candidate.value?.tncAccepted,
                customerTermsAccepted: candidate.value?.customerTermsAccepted
            }))
        });
        if (bookingCandidates.length || offerCandidates.length) {
            throw new Error('The customer must explicitly accept the Terms & Conditions before payment or warranty registration.');
        }
        throw new Error(`Booking or offer not found for payment (${id}).`);
    }
    computePaymentWorkflowUpdate(booking) {
        const n = (value) => Number(value || 0) || 0;
        const payments = booking?.payments || {};
        const alegriaRevenue = n(booking?.alegriaRevenueTotal || booking?.onlinePayableAmount || booking?.appPayableAmount || booking?.proposalBoatPrice + booking?.proposalFuelPrice + booking?.proposalExtraServicesPrice);
        const skipperRevenue = n(booking?.skipperCashAmount || booking?.proposalSkipperPrice || payments?.direct?.skipperCashAmount);
        const alegriaPaid = n(booking?.alegriaPaidAmount || payments?.balance?.amount || payments?.alegria?.amount) + (booking?.depositPaid === true ? n(booking?.depositPaidAmount || booking?.depositAmount || payments?.deposit?.amount) : 0);
        const skipperPaid = n(booking?.skipperPaidAmount || payments?.skipper?.amount || (booking?.skipperPaid === true ? skipperRevenue : 0));
        const alegriaRemaining = Math.max(0, Math.round((alegriaRevenue - alegriaPaid) * 100) / 100);
        const skipperRemaining = Math.max(0, Math.round((skipperRevenue - skipperPaid) * 100) / 100);
        const warrantyStatus = String(booking?.warrantyStatus || '').toLowerCase();
        const warrantyMethod = String(booking?.warrantyMethod || booking?.warrantyPaymentChoice || '').toLowerCase();
        const warrantyAmount = n(booking?.warrantyAmount || booking?.cautionAmount || booking?.securityDepositAmount);
        const warrantyComplete = warrantyAmount <= 0 ||
            (warrantyMethod.includes('cash') && (warrantyStatus.includes('cash_selected') || warrantyStatus.includes('cash_received'))) ||
            ((warrantyMethod.includes('card') || warrantyMethod.includes('stripe')) && (warrantyStatus.includes('card_registered') || !!booking?.warrantyPaymentMethodId || !!booking?.warrantySetupIntentId));
        const termsAccepted = this.hasExplicitCustomerTermsAcceptance(booking);
        const fullyPaid = alegriaRemaining <= 0 && skipperRemaining <= 0;
        const confirmed = termsAccepted && fullyPaid && warrantyComplete;
        return {
            workflow: {
                ...(booking?.workflow || {}),
                termsAccepted,
                alegriaPaymentComplete: alegriaRemaining <= 0,
                skipperPaymentComplete: skipperRemaining <= 0,
                warrantyComplete,
                fullyPaid,
                confirmed,
                updatedAt: Date.now(),
            },
            alegriaRemaining,
            skipperRemaining,
            fullyPaid,
            confirmed,
            bookingStatus: confirmed ? 'confirmed' : 'waiting_for_customer',
            paymentStatus: fullyPaid ? 'fully_paid' : 'payment_pending',
        };
    }
    async assertBalanceCheckoutAllowed(bookingId, body) {
        // Use the same exhaustive Offer/Booking resolution as every other customer
        // payment action. Terms may have been accepted on the offer before the
        // canonical booking document was created or synchronized.
        const acceptedEntity = await this.assertTermsAcceptedBeforeCustomerAction(bookingId);
        const directBookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
        const directBooking = directBookingSnap.val();
        const booking = directBooking || acceptedEntity || {};
        // Backfill the canonical booking with the accepted terms state so future
        // checks remain fast and all payment flows share one persisted truth.
        if (directBooking && !this.hasExplicitCustomerTermsAcceptance(directBooking) && this.hasExplicitCustomerTermsAcceptance(acceptedEntity)) {
            const acceptedAt = acceptedEntity?.termsAcceptedAt || acceptedEntity?.tncAcceptedAt || acceptedEntity?.terms?.acceptedAt || Date.now();
            const acceptedBy = acceptedEntity?.termsAcceptedBy || acceptedEntity?.tncAcceptedBy || acceptedEntity?.terms?.acceptedBy || 'customer';
            const termsPatch = {
                termsAccepted: true,
                tncAccepted: true,
                customerTermsAccepted: true,
                termsAcceptedAt: acceptedAt,
                tncAcceptedAt: acceptedAt,
                termsAcceptedBy: acceptedBy,
                tncAcceptedBy: acceptedBy,
                termsAcceptedSource: acceptedEntity?.termsAcceptedSource || acceptedEntity?.tncAcceptedSource || 'customer_portal',
                terms: { ...(directBooking?.terms || {}), accepted: true, acceptedAt, acceptedBy, source: 'customer_portal' },
                workflow: { ...(directBooking?.workflow || {}), termsAccepted: true, termsAcceptedAt: acceptedAt, termsAcceptedBy: acceptedBy, termsAcceptedSource: 'customer_portal' },
                bookingWorkflow: { ...(directBooking?.bookingWorkflow || {}), termsAccepted: true, termsAcceptedAt: acceptedAt, termsAcceptedBy: acceptedBy, termsAcceptedSource: 'customer_portal' },
                modifiedTS: Date.now()
            };
            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update(termsPatch);
            Object.assign(booking, termsPatch);
        }
        const outingDate = booking.outingDate || booking.date || booking.bookingDate || body.outingDate || body.date;
        if (this.isCancelledStatusValue(booking.bookingStatus ?? booking.status) || booking.cancelled === true || booking.canceled === true) {
            throw new Error('This booking is cancelled. The remaining balance cannot be paid.');
        }
        const topLevelPaymentStatus = String(booking.paymentStatus || '').toLowerCase().trim();
        const topLevelMeansBalancePaid = [
            'balance_paid',
            'remaining_paid',
            'full_payment_done',
            'balance_payment_done',
            'remaining_payment_done'
        ].includes(topLevelPaymentStatus);
        // IMPORTANT: do not treat a generic top-level paymentStatus === 'paid' as the 90% balance.
        // Older records use paymentStatus='paid' for the 10% deposit only, which previously blocked
        // legitimate remaining-balance checkout creation.
        if (topLevelMeansBalancePaid ||
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
        // Payment collection remains allowed on the outing day and after the outing.
        // The outing date is informational only and must never auto-cancel a booking
        // or block collection of an outstanding balance.
    }
    normalizeAmountToCents(value) {
        const n = Number(value || 0);
        if (!Number.isFinite(n) || n <= 0)
            return 0;
        // Frontend may send euros (999) or cents (99900). Treat values < 10000 as euros.
        return Math.round(n < 10000 ? n * 100 : n);
    }
    buildBookingPaymentPath(bookingId, child) {
        return child
            ? `/bnBookings/${bookingId}/payments/${child}`
            : `/bnBookings/${bookingId}/payments`;
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
    isValidEmailForStripe(value) {
        const email = String(value || '').trim();
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    async getStripeForOwner(ownerId) {
        if (ownerId === 'alegria' || ownerId === 'platform') {
            return PLATFORM;
        }
        return getOwnerStripe(this.stbDbSvc.db, ownerId);
    }
    async createOutingDepositCheckout(req, res) {
        try {
            const body = req.body || {};
            const ownerId = body.ownerId || 'alegria';
            const bookingId = body.bookingId || body.offerId || body.id;
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
            const isDepositAuthorizationOnly = body.authorizeOnly === true ||
                body.depositAuthorizationOnly === true ||
                body.captureMethod === 'manual' ||
                body.capture_method === 'manual' ||
                body.paymentType === 'deposit_authorization';
            if (!bookingId) {
                return res.status(400).json({
                    error: 'bookingId is required',
                    received: { bookingId: body.bookingId, offerId: body.offerId, id: body.id }
                });
            }
            await this.assertTermsAcceptedBeforeCustomerAction(bookingId);
            let amount = this.normalizeAmountToCents(rawDepositAmount);
            if (!amount) {
                return res.status(400).json({
                    error: 'depositAmount or amount must be greater than 0',
                    received: { depositAmount: body.depositAmount, amount: body.amount, deposit: body.deposit }
                });
            }
            // Stripe card payments in EUR must meet the processor minimum.
            // Small test offers can produce a 10% deposit below that threshold,
            // so use the minimum charge rather than returning an opaque Stripe 400.
            if (currency === 'eur' && amount < 50) {
                amount = 50;
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
                    capture_method: isDepositAuthorizationOnly ? 'manual' : 'automatic',
                    metadata: {
                        paymentId,
                        bookingId,
                        ownerId,
                        paymentType: isDepositAuthorizationOnly ? 'deposit_authorization' : 'deposit',
                        outingType: outingType || '',
                        outingDate: outingDate || '',
                    },
                },
                metadata: {
                    paymentId,
                    bookingId,
                    ownerId,
                    paymentType: isDepositAuthorizationOnly ? 'deposit_authorization' : 'deposit',
                    outingType: outingType || '',
                    outingDate: outingDate || '',
                },
            });
            const now = Date.now();
            const payload = {
                paymentId,
                ownerId,
                bookingId,
                paymentType: isDepositAuthorizationOnly ? 'deposit_authorization' : 'deposit',
                amount,
                currency,
                status: isDepositAuthorizationOnly ? 'authorization_checkout_created' : 'checkout_created',
                captureMethod: isDepositAuthorizationOnly ? 'manual' : 'automatic',
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
    async createOutingWarrantySetupCheckout(req, res) {
        try {
            let { ownerId, bookingId, offerId, proposalId, relatedBookingId, warrantyAmount, amount: amountAlias, currency = 'eur', customerEmail, customerName, customerPhone, outingType, outingDate, successUrl, cancelUrl, } = req.body || {};
            bookingId = String(bookingId || offerId || proposalId || relatedBookingId || '').trim();
            if (!bookingId) {
                return res.status(400).json({ error: 'bookingId, offerId or proposalId is required' });
            }
            // Load the booking once so legacy/imported records can supply missing
            // owner, amount and customer context.
            const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
            let booking = bookingSnap.val() || null;
            if (!booking) {
                const lookupFields = ['bookingId', 'offerId', 'proposalId', 'relatedBookingId'];
                for (const field of lookupFields) {
                    const snap = await this.stbDbSvc.db.ref('/bnBookings').orderByChild(field).equalTo(bookingId).once('value');
                    const matches = snap.val() || {};
                    const firstKey = Object.keys(matches)[0];
                    if (firstKey) {
                        booking = matches[firstKey];
                        break;
                    }
                }
            }
            ownerId = ownerId || booking?.ownerId || booking?.raw?.ownerId || booking?.owner || 'alegria';
            customerEmail = customerEmail || booking?.customerEmail || booking?.email || booking?.raw?.customerEmail;
            customerName = customerName || booking?.customerName || booking?.raw?.customerName;
            customerPhone = customerPhone || booking?.customerPhone || booking?.phone || booking?.raw?.customerPhone;
            outingType = outingType || booking?.outingType || booking?.raw?.outingType;
            outingDate = outingDate || booking?.outingDate || booking?.raw?.outingDate;
            // Normal customer bookings still require explicit acceptance. Imported
            // or externally confirmed bookings may register a warranty card even
            // when their legacy T&C flags were not populated.
            const source = String(booking?.bookingSource || booking?.source || booking?.externalPlatform || booking?.raw?.bookingSource || '').toLowerCase();
            const status = String(booking?.bookingStatus || booking?.status || booking?.bookingRequestStatus || '').toLowerCase();
            const importedOrExternal = booking?.importedManually === true || booking?.raw?.importedManually === true ||
                source === 'external' || source === 'direct' || !!booking?.externalPlatformBookingRef || !!booking?.platformBookingReference;
            const alreadyConfirmed = ['confirmed', 'completed', 'accepted'].includes(status) ||
                String(booking?.bookingRequestStatus || '').toLowerCase() === 'confirmed';
            if (!(importedOrExternal && alreadyConfirmed)) {
                await this.assertTermsAcceptedBeforeCustomerAction(bookingId);
            }
            const rawWarrantyAmount = warrantyAmount ?? amountAlias ?? booking?.warrantyAmount ?? booking?.cautionAmount ?? booking?.securityDepositAmount ?? booking?.raw?.warrantyAmount;
            const amount = this.normalizeAmountToCents(rawWarrantyAmount);
            if (!amount)
                return res.status(400).json({ error: 'warrantyAmount must be greater than 0' });
            // Local and legacy clients do not always send callback URLs. Use the
            // request origin as a safe fallback while preserving explicit URLs.
            const origin = String(req.headers.origin || `${req.protocol}://${req.get('host')}` || '').replace(/\/$/, '');
            successUrl = successUrl || `${origin}/payment-success`;
            cancelUrl = cancelUrl || `${origin}/payment-cancel`;
            const safeCustomerEmail = this.isValidEmailForStripe(customerEmail) ? String(customerEmail).trim() : '';
            const stripe = await this.getStripeForOwner(ownerId);
            const customer = safeCustomerEmail
                ? await stripe.customers.create({
                    email: safeCustomerEmail,
                    name: customerName,
                    phone: customerPhone,
                    metadata: { bookingId, ownerId, source: 'alegria-warranty' },
                }).catch(() => null)
                : null;
            const paymentRef = this.stbDbSvc.db.ref('/backendpayments').push();
            const paymentId = paymentRef.key;
            const session = await stripe.checkout.sessions.create({
                mode: 'setup',
                payment_method_types: ['card'],
                customer: customer?.id,
                customer_email: customer ? undefined : safeCustomerEmail || undefined,
                success_url: this.appendCheckoutParams(successUrl, { session_id: '{CHECKOUT_SESSION_ID}', bookingId, paymentType: 'warranty', payment: 'success' }),
                cancel_url: this.appendCheckoutParams(cancelUrl, { bookingId, paymentType: 'warranty', payment: 'cancelled' }),
                setup_intent_data: {
                    metadata: {
                        paymentId, bookingId, ownerId, paymentType: 'warranty',
                        warrantyAmount: String(amount), currency,
                        outingType: outingType || '', outingDate: outingDate || '',
                    },
                },
                metadata: {
                    paymentId, bookingId, ownerId, paymentType: 'warranty',
                    warrantyAmount: String(amount), currency,
                    outingType: outingType || '', outingDate: outingDate || '',
                },
            });
            const now = Date.now();
            const payload = {
                paymentId, ownerId, bookingId, paymentType: 'warranty', amount, currency,
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
            return res.status(400).json({
                error: e?.message || 'Failed to create warranty setup session',
                code: e?.code || null,
                type: e?.type || null
            });
        }
    }
    /**
     * Completes and persists a remaining-balance Checkout Session after Stripe redirects back.
     * This is a safety net when webhooks are delayed/misconfigured and is also useful for local development.
     * body: { ownerId?, bookingId, checkoutSessionId|sessionId }
     */
    async completeOutingBalancePayment(req, res) {
        try {
            let { ownerId, bookingId, checkoutSessionId, sessionId } = req.body || {};
            checkoutSessionId = checkoutSessionId || sessionId;
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            if (!checkoutSessionId)
                return res.status(400).json({ error: 'checkoutSessionId is required' });
            if (!ownerId) {
                const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
                const booking = bookingSnap.val() || {};
                ownerId = booking.ownerId || booking.raw?.ownerId || booking.owner || 'alegria';
            }
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId is required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const session = await stripe.checkout.sessions.retrieve(checkoutSessionId, {
                expand: ['payment_intent', 'customer'],
            });
            if (session.mode !== 'payment') {
                return res.status(400).json({ error: 'Checkout session is not a payment session' });
            }
            const sessionBookingId = (session.metadata && session.metadata['bookingId']) || bookingId;
            const paymentType = String((session.metadata && session.metadata['paymentType']) || '').toLowerCase();
            if (sessionBookingId !== bookingId) {
                return res.status(400).json({ error: 'Checkout session does not belong to this booking' });
            }
            if (paymentType && paymentType !== 'balance' && paymentType !== 'remaining' && paymentType !== 'alegria_balance') {
                return res.status(400).json({ error: `Checkout session is not a balance payment session (${paymentType})` });
            }
            const paymentIntent = typeof session.payment_intent === 'string'
                ? await stripe.paymentIntents.retrieve(session.payment_intent)
                : session.payment_intent;
            const paymentStatus = String(session.payment_status || '').toLowerCase();
            const intentStatus = String(paymentIntent?.status || '').toLowerCase();
            const isPaid = paymentStatus === 'paid' || intentStatus === 'succeeded';
            if (!isPaid) {
                return res.status(400).json({ error: 'Stripe session is not paid yet', paymentStatus, intentStatus });
            }
            const now = Date.now();
            const paymentId = (session.metadata && session.metadata['paymentId']) || null;
            const amount = Number(session.amount_total || paymentIntent?.amount_received || paymentIntent?.amount || 0) || null;
            const currency = session.currency || paymentIntent?.currency || 'eur';
            const stripePaymentIntentId = paymentIntent?.id || (typeof session.payment_intent === 'string' ? session.payment_intent : null);
            const stripeCustomerId = typeof session.customer === 'string' ? session.customer : session.customer?.id || null;
            const paymentPayload = {
                paymentId,
                bookingId,
                ownerId,
                paymentType: 'balance',
                status: 'paid',
                paid: true,
                paymentStatus: 'paid',
                amount,
                amount_total: amount,
                currency,
                checkoutSessionId: session.id,
                stripeCheckoutSessionId: session.id,
                paymentIntentId: stripePaymentIntentId,
                stripePaymentIntentId,
                stripeCustomerId,
                paidAt: now,
                modifiedTS: now,
                updatedAt: now,
                source: 'stripe_checkout_complete',
            };
            await Promise.all([
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/balance`).update(paymentPayload),
                paymentId ? this.stbDbSvc.db.ref(`/backendpayments/${paymentId}`).update(paymentPayload) : Promise.resolve(null),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                    balanceStatus: 'paid',
                    balancePaid: true,
                    remainingPaid: true,
                    remainingStatus: 'paid',
                    balancePaymentStatus: 'paid',
                    balancePaymentMethod: 'Stripe',
                    alegriaPaid: true,
                    alegriaPaymentStatus: 'paid',
                    alegriaPaymentMethod: 'Stripe',
                    balancePaidAmount: amount ? amount / 100 : 0,
                    alegriaPaidAmount: amount ? amount / 100 : 0,
                    remainingFeesAmount: 0,
                    remainingOnboardAmount: 0,
                    remainingAlegriaRevenue: 0,
                    balancePaidAt: now,
                    bookingStatus: 'payment_done',
                    paymentStatus: 'full_payment_done',
                    stripeBalanceCheckoutSessionId: session.id,
                    stripeBalancePaymentIntentId: stripePaymentIntentId,
                    modifiedTS: now,
                    updatedAt: now,
                }),
                this.stbDbSvc.db.ref(`/bnProposals/${bookingId}`).update({
                    balanceStatus: 'paid',
                    balancePaid: true,
                    remainingPaid: true,
                    remainingStatus: 'paid',
                    balancePaymentStatus: 'paid',
                    balancePaidAt: now,
                    stripeBalanceCheckoutSessionId: session.id,
                    stripeBalancePaymentIntentId: stripePaymentIntentId,
                    modifiedTS: now,
                    updatedAt: now,
                }).catch(() => null),
            ]);
            return res.json({
                ok: true,
                bookingId,
                ownerId,
                paymentType: 'balance',
                status: 'paid',
                amount,
                currency,
                stripeCheckoutSessionId: session.id,
                stripePaymentIntentId,
                stripeCustomerId,
            });
        }
        catch (e) {
            console.error('[completeOutingBalancePayment] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to complete balance payment' });
        }
    }
    /**
     * Explicitly complete and persist a warranty card setup after Stripe redirects back.
     * This is a safety net when webhooks are delayed/misconfigured and is also useful
     * for local development. It retrieves the Checkout Session, extracts the SetupIntent
     * payment_method and stores it on /bnBookings/{bookingId}/payments/warranty.
     *
     * body: { ownerId?, bookingId, checkoutSessionId|sessionId }
     */
    async completeOutingWarrantySetup(req, res) {
        try {
            let { ownerId, bookingId, checkoutSessionId, sessionId } = req.body || {};
            checkoutSessionId = checkoutSessionId || sessionId;
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            if (!checkoutSessionId)
                return res.status(400).json({ error: 'checkoutSessionId is required' });
            if (!ownerId) {
                const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
                const booking = bookingSnap.val() || {};
                ownerId = booking.ownerId || booking.raw?.ownerId || booking.owner || 'alegria';
            }
            if (!ownerId)
                return res.status(400).json({ error: 'ownerId is required' });
            const stripe = await this.getStripeForOwner(ownerId);
            const session = await stripe.checkout.sessions.retrieve(checkoutSessionId, {
                expand: ['setup_intent', 'customer'],
            });
            if (session.mode !== 'setup') {
                return res.status(400).json({ error: 'Checkout session is not a setup session' });
            }
            const setupIntent = typeof session.setup_intent === 'string'
                ? await stripe.setupIntents.retrieve(session.setup_intent)
                : session.setup_intent;
            const paymentMethodId = typeof setupIntent?.payment_method === 'string'
                ? setupIntent.payment_method
                : setupIntent?.payment_method?.id;
            const stripeCustomerId = typeof session.customer === 'string'
                ? session.customer
                : session.customer?.id || (typeof setupIntent?.customer === 'string' ? setupIntent.customer : setupIntent?.customer?.id);
            if (!paymentMethodId) {
                return res.status(400).json({ error: 'SetupIntent completed but no reusable payment method was found' });
            }
            let cardLast4 = null;
            let cardBrand = null;
            try {
                const pm = await stripe.paymentMethods.retrieve(paymentMethodId);
                cardLast4 = pm?.card?.last4 || null;
                cardBrand = pm?.card?.brand || null;
            }
            catch { }
            const paymentId = (session.metadata && session.metadata['paymentId']) || (setupIntent?.metadata && setupIntent.metadata['paymentId']) || null;
            const amount = Number((session.metadata && session.metadata['warrantyAmount']) || (setupIntent?.metadata && setupIntent.metadata['warrantyAmount']) || 0) || null;
            const currency = (session.metadata && session.metadata['currency']) || (setupIntent?.metadata && setupIntent.metadata['currency']) || 'eur';
            await this.markWarrantySavedFromStripe({
                bookingId,
                paymentId,
                ownerId,
                amount,
                currency,
                setupIntentId: setupIntent?.id || null,
                paymentMethodId,
                stripeCustomerId,
            });
            const now = Date.now();
            const cardPayload = {
                warrantyPaymentChoice: 'stripe_card',
                warrantyMethod: 'stripe_card',
                warrantyStatus: 'card_registered',
                warrantyRegistered: true,
                warrantyPaymentMethodId: paymentMethodId,
                warrantySetupIntentId: setupIntent?.id || null,
                stripeCustomerId: stripeCustomerId || null,
                warrantyStripeCustomerId: stripeCustomerId || null,
                warrantyCardLast4: cardLast4 || null,
                warrantyCardBrand: cardBrand || null,
                modifiedTS: now,
                updatedAt: now,
            };
            await Promise.all([
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update(cardPayload),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warranty`).update({
                    ...cardPayload,
                    status: 'warranty_card_saved',
                    paymentType: 'warranty',
                    amount,
                    currency,
                    paymentMethodId,
                    setupIntentId: setupIntent?.id || null,
                    stripeCustomerId: stripeCustomerId || null,
                    cardLast4,
                    cardBrand,
                }),
                this.stbDbSvc.db.ref(`/bnProposals/${bookingId}`).update(cardPayload).catch(() => null),
            ]);
            return res.json({
                ok: true,
                bookingId,
                ownerId,
                setupIntentId: setupIntent?.id || null,
                paymentMethodId,
                stripeCustomerId: stripeCustomerId || null,
                cardLast4,
                cardBrand,
                amount,
                currency,
            });
        }
        catch (e) {
            console.error('[completeOutingWarrantySetup] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to complete warranty setup' });
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
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            const amountCents = this.normalizeAmountToCents(amount);
            if (!amountCents)
                return res.status(400).json({ error: 'amount must be greater than 0' });
            reason = String(reason || '').trim();
            if (!reason)
                return res.status(400).json({ error: 'reason is required' });
            const warrantyPath = this.buildBookingPaymentPath(bookingId, 'warranty');
            const [warrantySnap, bookingSnap] = await Promise.all([
                this.stbDbSvc.db.ref(warrantyPath).once('value'),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value'),
            ]);
            const booking = bookingSnap.val() || {};
            const warranty = warrantySnap.val() || {};
            ownerId = ownerId || warranty?.ownerId || booking?.ownerId || booking?.raw?.ownerId || 'alegria';
            const warrantyMethod = String(warranty?.warrantyMethod || warranty?.warrantyPaymentChoice ||
                booking?.warrantyMethod || booking?.warrantyPaymentChoice || '').toLowerCase();
            const warrantyStatus = String(warranty?.status || warranty?.warrantyStatus || booking?.warrantyStatus || '').toLowerCase();
            const warrantyReleased = booking?.warrantyReleased === true ||
                warranty?.warrantyReleased === true ||
                warrantyStatus === 'released' ||
                booking?.warrantyActive === false ||
                booking?.canChargeWarranty === false;
            if (warrantyReleased) {
                return res.status(409).json({ error: 'Warranty has already been released and can no longer be charged' });
            }
            const maxWarrantyCents = this.normalizeAmountToCents(Number(warranty.amount || booking.warrantyAmount || 0));
            const alreadyChargedCents = Number(booking.warrantyChargedAmount || 0);
            if (maxWarrantyCents && alreadyChargedCents + amountCents > maxWarrantyCents) {
                return res.status(400).json({ error: 'Requested charge exceeds the remaining warranty amount' });
            }
            const cashWarranty = warrantyMethod.includes('cash') || warrantyStatus.includes('cash');
            if (cashWarranty) {
                const chargeId = this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warrantyCharges`).push().key || `damage_${Date.now()}`;
                const now = Date.now();
                const totalChargedCents = alreadyChargedCents + amountCents;
                const chargeRecord = {
                    chargeId,
                    ownerId,
                    bookingId,
                    paymentType: 'warranty_damage_charge',
                    amount: amountCents,
                    amountCents,
                    amountEuros: amountCents / 100,
                    currency,
                    reason,
                    status: 'paid',
                    paid: true,
                    warrantyMethod: 'cash',
                    paymentMethod: 'cash',
                    stripePaymentIntentId: null,
                    createdTS: now,
                    modifiedTS: now,
                };
                const updates = {};
                updates[`/bnBookings/${bookingId}/payments/warrantyCharges/${chargeId}`] = chargeRecord;
                updates[`/bnBookings/${bookingId}/payments/warrantyCharge`] = {
                    ...chargeRecord,
                    warrantyChargeAmount: amountCents,
                    warrantyChargeAmountCents: amountCents,
                    warrantyChargeAmountEuros: amountCents / 100,
                    warrantyChargeReason: reason,
                    totalWarrantyChargedAmount: totalChargedCents,
                };
                updates[`/bnBookings/${bookingId}/warrantyStatus`] = totalChargedCents >= maxWarrantyCents && maxWarrantyCents > 0 ? 'fully_charged' : 'partially_charged';
                updates[`/bnBookings/${bookingId}/damageReported`] = true;
                updates[`/bnBookings/${bookingId}/damageCharged`] = true;
                updates[`/bnBookings/${bookingId}/warrantyChargedAmount`] = totalChargedCents;
                updates[`/bnBookings/${bookingId}/lastWarrantyChargeAmount`] = amountCents;
                updates[`/bnBookings/${bookingId}/lastWarrantyChargeAmountCents`] = amountCents;
                updates[`/bnBookings/${bookingId}/lastWarrantyChargeAmountEuros`] = amountCents / 100;
                updates[`/bnBookings/${bookingId}/lastWarrantyChargeStatus`] = 'paid';
                updates[`/bnBookings/${bookingId}/lastWarrantyChargeAt`] = now;
                updates[`/bnBookings/${bookingId}/lastWarrantyChargePaymentMethod`] = 'cash';
                updates[`/bnBookings/${bookingId}/warrantyChargeAmountCents`] = amountCents;
                updates[`/bnBookings/${bookingId}/warrantyChargeAmountEuros`] = amountCents / 100;
                updates[`/bnBookings/${bookingId}/warrantyChargeReason`] = reason;
                updates[`/bnBookings/${bookingId}/pendingWarrantyChargeAmount`] = amountCents / 100;
                updates[`/bnBookings/${bookingId}/pendingWarrantyChargeAmountCents`] = amountCents;
                updates[`/bnBookings/${bookingId}/pendingWarrantyChargeReason`] = reason;
                updates[`/bnBookings/${bookingId}/pendingWarrantyChargeStatus`] = 'paid';
                updates[`/bnBookings/${bookingId}/pendingWarrantyChargeError`] = null;
                updates[`/bnBookings/${bookingId}/pendingWarrantyChargeModifiedAt`] = now;
                updates[`/bnBookings/${bookingId}/warrantyChargePaymentIntentId`] = null;
                updates[`/bnBookings/${bookingId}/warrantyChargeRecordedAt`] = now;
                updates[`/bnBookings/${bookingId}/modifiedTS`] = now;
                updates[`/bnProposals/${bookingId}/warrantyChargedAmount`] = totalChargedCents;
                updates[`/bnProposals/${bookingId}/lastWarrantyChargeAmount`] = amountCents;
                updates[`/bnProposals/${bookingId}/warrantyChargeReason`] = reason;
                updates[`/bnProposals/${bookingId}/warrantyChargeStatus`] = 'paid';
                updates[`/bnProposals/${bookingId}/modifiedTS`] = now;
                updates[`/backendpayments/${chargeId}`] = chargeRecord;
                await this.stbDbSvc.db.ref().update(updates);
                return res.json({
                    ok: true,
                    bookingId,
                    chargeId,
                    amount: amountCents,
                    totalChargedAmount: totalChargedCents,
                    remainingWarrantyAmount: maxWarrantyCents ? Math.max(0, maxWarrantyCents - totalChargedCents) : null,
                    status: 'paid',
                    paymentMethod: 'cash',
                    stripePaymentIntentId: null,
                });
            }
            if (warrantyMethod && !['stripe_card', 'card', 'credit_card'].includes(warrantyMethod)) {
                return res.status(400).json({ error: 'Unsupported warranty method' });
            }
            const storedPaymentMethodId = warranty?.paymentMethodId || warranty?.warrantyPaymentMethodId || booking?.warrantyPaymentMethodId || booking?.paymentMethodId || booking?.payment?.paymentMethodId;
            const storedStripeCustomerId = warranty?.stripeCustomerId || warranty?.warrantyStripeCustomerId || booking?.warrantyStripeCustomerId || booking?.stripeCustomerId || booking?.payment?.stripeCustomerId || booking?.payment?.customerId;
            if (!storedPaymentMethodId || !storedStripeCustomerId) {
                return res.status(400).json({ error: 'No reusable Stripe warranty card is registered for this booking' });
            }
            const stripe = await this.getStripeForOwner(ownerId);
            const chargeId = this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warrantyCharges`).push().key || `damage_${Date.now()}`;
            const now = Date.now();
            // Save the requested amount before Stripe. The amount and reason therefore
            // remain visible even if Stripe rejects the off-session charge.
            const requestedChargeRecord = {
                chargeId,
                ownerId,
                bookingId,
                paymentType: 'warranty_damage_charge',
                amount: amountCents,
                amountCents,
                amountEuros: amountCents / 100,
                currency,
                reason,
                status: 'processing',
                paid: false,
                warrantyMethod: 'stripe_card',
                createdTS: now,
                modifiedTS: now,
            };
            await this.stbDbSvc.db.ref().update({
                [`/bnBookings/${bookingId}/payments/warrantyCharges/${chargeId}`]: requestedChargeRecord,
                [`/bnBookings/${bookingId}/payments/warrantyCharge`]: {
                    ...requestedChargeRecord,
                    warrantyChargeAmount: amountCents,
                    warrantyChargeAmountCents: amountCents,
                    warrantyChargeAmountEuros: amountCents / 100,
                    warrantyChargeReason: reason,
                },
                [`/bnBookings/${bookingId}/pendingWarrantyChargeAmount`]: amountCents / 100,
                [`/bnBookings/${bookingId}/pendingWarrantyChargeAmountCents`]: amountCents,
                [`/bnBookings/${bookingId}/pendingWarrantyChargeReason`]: reason,
                [`/bnBookings/${bookingId}/pendingWarrantyChargeStatus`]: 'processing',
                [`/bnBookings/${bookingId}/pendingWarrantyChargeRequestedAt`]: now,
                [`/bnBookings/${bookingId}/modifiedTS`]: now,
            });
            const pi = await stripe.paymentIntents.create({
                amount: amountCents,
                currency,
                customer: storedStripeCustomerId,
                payment_method: storedPaymentMethodId,
                off_session: true,
                confirm: true,
                description: `Alegria damage charge for booking ${bookingId}`,
                metadata: {
                    bookingId,
                    ownerId,
                    chargeId,
                    paymentType: 'warranty_damage_charge',
                    reason,
                },
            }, {
                idempotencyKey: `warranty-damage-${bookingId}-${chargeId}`,
            });
            if (!['succeeded', 'processing'].includes(pi.status)) {
                return res.status(402).json({ error: `Stripe damage charge was not completed (${pi.status})`, paymentIntentId: pi.id });
            }
            const totalChargedCents = alreadyChargedCents + amountCents;
            const chargeRecord = {
                chargeId,
                ownerId,
                bookingId,
                paymentType: 'warranty_damage_charge',
                amount: amountCents,
                amountCents,
                amountEuros: amountCents / 100,
                currency,
                reason,
                status: pi.status === 'succeeded' ? 'paid' : 'processing',
                paid: pi.status === 'succeeded',
                warrantyMethod: 'stripe_card',
                stripeCustomerId: storedStripeCustomerId,
                stripePaymentMethodId: storedPaymentMethodId,
                stripePaymentIntentId: pi.id,
                createdTS: now,
                modifiedTS: now,
            };
            const updates = {};
            updates[`/bnBookings/${bookingId}/payments/warrantyCharges/${chargeId}`] = chargeRecord;
            updates[`/bnBookings/${bookingId}/payments/warrantyCharge`] = {
                ...chargeRecord,
                warrantyChargeAmount: amountCents,
                warrantyChargeReason: reason,
                totalWarrantyChargedAmount: totalChargedCents,
            };
            updates[`/bnBookings/${bookingId}/warrantyStatus`] = totalChargedCents >= maxWarrantyCents && maxWarrantyCents > 0 ? 'fully_charged' : 'partially_charged';
            updates[`/bnBookings/${bookingId}/damageReported`] = true;
            updates[`/bnBookings/${bookingId}/damageCharged`] = true;
            updates[`/bnBookings/${bookingId}/warrantyChargedAmount`] = totalChargedCents;
            updates[`/bnBookings/${bookingId}/lastWarrantyChargeAmount`] = amountCents;
            updates[`/bnBookings/${bookingId}/lastWarrantyChargeAmountCents`] = amountCents;
            updates[`/bnBookings/${bookingId}/lastWarrantyChargeAmountEuros`] = amountCents / 100;
            updates[`/bnBookings/${bookingId}/warrantyChargeAmountCents`] = amountCents;
            updates[`/bnBookings/${bookingId}/warrantyChargeAmountEuros`] = amountCents / 100;
            updates[`/bnBookings/${bookingId}/warrantyChargeReason`] = reason;
            updates[`/bnBookings/${bookingId}/pendingWarrantyChargeAmount`] = amountCents / 100;
            updates[`/bnBookings/${bookingId}/pendingWarrantyChargeAmountCents`] = amountCents;
            updates[`/bnBookings/${bookingId}/pendingWarrantyChargeReason`] = reason;
            updates[`/bnBookings/${bookingId}/pendingWarrantyChargeStatus`] = chargeRecord.status;
            updates[`/bnBookings/${bookingId}/pendingWarrantyChargeModifiedAt`] = now;
            updates[`/bnBookings/${bookingId}/warrantyChargePaymentIntentId`] = pi.id;
            updates[`/bnBookings/${bookingId}/warrantyChargeRecordedAt`] = now;
            updates[`/bnBookings/${bookingId}/modifiedTS`] = now;
            updates[`/bnProposals/${bookingId}/warrantyChargedAmount`] = totalChargedCents;
            updates[`/bnProposals/${bookingId}/lastWarrantyChargeAmount`] = amountCents;
            updates[`/bnProposals/${bookingId}/warrantyChargeReason`] = reason;
            updates[`/bnProposals/${bookingId}/warrantyChargeStatus`] = chargeRecord.status;
            updates[`/bnProposals/${bookingId}/modifiedTS`] = now;
            updates[`/backendpayments/${chargeId}`] = chargeRecord;
            await this.stbDbSvc.db.ref().update(updates);
            return res.json({
                ok: true,
                bookingId,
                chargeId,
                amount: amountCents,
                totalChargedAmount: totalChargedCents,
                remainingWarrantyAmount: maxWarrantyCents ? Math.max(0, maxWarrantyCents - totalChargedCents) : null,
                status: chargeRecord.status,
                stripePaymentIntentId: pi.id,
            });
        }
        catch (e) {
            console.error('[chargeOutingWarranty] error:', e);
            try {
                const failedBookingId = String((req.body || {}).bookingId || '').trim();
                const failedAmountCents = this.normalizeAmountToCents((req.body || {}).amount);
                const failedReason = String((req.body || {}).reason || '').trim();
                if (failedBookingId && failedAmountCents > 0) {
                    await this.stbDbSvc.db.ref(`/bnBookings/${failedBookingId}`).update({
                        pendingWarrantyChargeAmount: failedAmountCents / 100,
                        pendingWarrantyChargeAmountCents: failedAmountCents,
                        pendingWarrantyChargeReason: failedReason,
                        pendingWarrantyChargeStatus: 'failed',
                        pendingWarrantyChargeError: e?.message || 'Failed to charge warranty through Stripe',
                        pendingWarrantyChargeModifiedAt: Date.now(),
                        modifiedTS: Date.now(),
                    });
                }
            }
            catch { }
            const code = e?.code === 'authentication_required' || e?.raw?.code === 'authentication_required' ? 402 : 400;
            return res.status(code).json({ error: e?.message || 'Failed to charge warranty through Stripe' });
        }
    }
    /**
     * Release a registered warranty card when the outing is finished and no damage
     * has been observed. A succeeded SetupIntent cannot be deleted; instead the
     * PaymentMethod is retained for audit, while application guards permanently block further charges.
     *
     * body: { ownerId?, bookingId, releasedBy? }
     */
    async releaseOutingWarranty(req, res) {
        try {
            let { ownerId, bookingId, releasedBy } = req.body || {};
            bookingId = String(bookingId || '').trim();
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            const [bookingSnap, warrantySnap] = await Promise.all([
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value'),
                this.stbDbSvc.db.ref(this.buildBookingPaymentPath(bookingId, 'warranty')).once('value'),
            ]);
            const booking = bookingSnap.val() || {};
            if (!bookingSnap.exists())
                return res.status(404).json({ error: 'Booking not found' });
            const warranty = warrantySnap.val() || {};
            const alreadyReleased = booking.warrantyReleased === true ||
                String(booking.warrantyStatus || '').toLowerCase() === 'released';
            if (alreadyReleased) {
                return res.json({ ok: true, bookingId, status: 'released', alreadyReleased: true });
            }
            const charges = booking?.payments?.warrantyCharges || {};
            const successfulStatuses = new Set(['paid', 'succeeded', 'captured', 'success', 'processing']);
            const warrantyChargeItems = Object.keys(charges).map((key) => charges[key]);
            const successfulChargeCents = warrantyChargeItems.reduce((total, item) => {
                const status = String(item?.status || '').toLowerCase();
                if (!successfulStatuses.has(status) && item?.paid !== true)
                    return total;
                const itemAmountCents = Number(item?.amountCents ?? item?.amount ?? 0);
                return total + (Number.isFinite(itemAmountCents) ? itemAmountCents : 0);
            }, 0);
            const chargedCents = Math.max(Number(booking.warrantyChargedAmount || 0), successfulChargeCents);
            if (chargedCents > 0 || booking.damageCharged === true) {
                return res.status(409).json({ error: 'The warranty cannot be released because a damage charge has been recorded' });
            }
            ownerId = ownerId || warranty?.ownerId || booking?.ownerId || booking?.raw?.ownerId || 'alegria';
            const warrantyMethod = String(warranty?.warrantyMethod || warranty?.warrantyPaymentChoice ||
                booking?.warrantyMethod || booking?.warrantyPaymentChoice || '').toLowerCase();
            const setupIntentId = warranty?.setupIntentId || warranty?.warrantySetupIntentId || booking?.warrantySetupIntentId || null;
            const paymentMethodId = warranty?.paymentMethodId || warranty?.warrantyPaymentMethodId || booking?.warrantyPaymentMethodId || null;
            let setupIntentStatus = null;
            const paymentMethodDetached = false;
            // A successful SetupIntent is an audit record and cannot be deleted.
            // Releasing the warranty is an application-level state transition: the
            // saved PaymentMethod remains attached, but all future damage charges are
            // blocked by warrantyStatus/canChargeWarranty checks.
            if (warrantyMethod.includes('card') || warrantyMethod.includes('stripe') || paymentMethodId || setupIntentId) {
                const stripe = await this.getStripeForOwner(ownerId);
                if (setupIntentId) {
                    try {
                        const setupIntent = await stripe.setupIntents.retrieve(setupIntentId);
                        setupIntentStatus = setupIntent.status;
                    }
                    catch (error) {
                        if (error?.code !== 'resource_missing')
                            throw error;
                        setupIntentStatus = 'not_found';
                    }
                }
            }
            const now = Date.now();
            const releaseId = this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warrantyReleases`).push().key || `release_${now}`;
            const releaseRecord = {
                releaseId,
                ownerId,
                bookingId,
                paymentType: 'warranty_release',
                warrantyAmount: Number(booking.warrantyAmount || warranty.amount || 0),
                status: 'released',
                noDamageObserved: true,
                releasedBy: releasedBy || 'admin',
                releasedAt: now,
                paymentMethodDetached,
                setupIntentStatus,
                archivedPaymentMethodId: paymentMethodId,
                archivedSetupIntentId: setupIntentId,
                createdTS: now,
                modifiedTS: now,
            };
            const updates = {};
            updates[`/bnBookings/${bookingId}/payments/warrantyReleases/${releaseId}`] = releaseRecord;
            updates[`/bnBookings/${bookingId}/payments/warranty/status`] = 'released';
            updates[`/bnBookings/${bookingId}/payments/warranty/releasedAt`] = now;
            updates[`/bnBookings/${bookingId}/payments/warranty/releasedBy`] = releaseRecord.releasedBy;
            updates[`/bnBookings/${bookingId}/payments/warranty/noDamageObserved`] = true;
            updates[`/bnBookings/${bookingId}/payments/warranty/paymentMethodDetached`] = false;
            updates[`/bnBookings/${bookingId}/payments/warranty/canChargeWarranty`] = false;
            updates[`/bnBookings/${bookingId}/warrantyStatus`] = 'released';
            updates[`/bnBookings/${bookingId}/warrantyReleased`] = true;
            updates[`/bnBookings/${bookingId}/warrantyReleasedAt`] = now;
            updates[`/bnBookings/${bookingId}/warrantyReleasedBy`] = releaseRecord.releasedBy;
            updates[`/bnBookings/${bookingId}/warrantyNoDamageObserved`] = true;
            updates[`/bnBookings/${bookingId}/warrantyActive`] = false;
            updates[`/bnBookings/${bookingId}/canChargeWarranty`] = false;
            updates[`/bnBookings/${bookingId}/warrantyPaymentMethodDetached`] = false;
            updates[`/bnBookings/${bookingId}/releasedWarrantyPaymentMethodId`] = paymentMethodId;
            updates[`/bnBookings/${bookingId}/releasedWarrantySetupIntentId`] = setupIntentId;
            updates[`/bnBookings/${bookingId}/modifiedTS`] = now;
            updates[`/bnProposals/${bookingId}/warrantyStatus`] = 'released';
            updates[`/bnProposals/${bookingId}/warrantyReleased`] = true;
            updates[`/bnProposals/${bookingId}/warrantyReleasedAt`] = now;
            updates[`/bnProposals/${bookingId}/canChargeWarranty`] = false;
            updates[`/bnProposals/${bookingId}/modifiedTS`] = now;
            updates[`/backendpayments/${releaseId}`] = releaseRecord;
            await this.stbDbSvc.db.ref().update(updates);
            return res.json({
                ok: true,
                bookingId,
                releaseId,
                status: 'released',
                releasedAt: now,
                noDamageObserved: true,
                paymentMethodDetached,
                setupIntentStatus,
            });
        }
        catch (e) {
            console.error('[releaseOutingWarranty] error:', e);
            return res.status(400).json({ error: e?.message || 'Failed to release warranty' });
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
    async markDepositAuthorizedFromStripe(params) {
        const now = Date.now();
        const updatePayload = {
            status: 'authorized',
            depositStatus: 'authorized',
            depositAuthorized: true,
            depositPaid: false,
            paid: false,
            amount: params.amount || null,
            currency: params.currency || 'eur',
            ownerId: params.ownerId,
            captureMethod: 'manual',
            stripeCheckoutSessionId: params.stripeCheckoutSessionId || null,
            stripePaymentIntentId: params.stripePaymentIntentId || null,
            stripeCustomerId: params.stripeCustomerId || null,
            modifiedTS: now,
            updatedAt: now,
        };
        await Promise.all([
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/deposit`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payment`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/deposit`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}`).update({
                depositStatus: 'authorized',
                depositAuthorized: true,
                depositPaid: false,
                paymentStatus: 'deposit_authorized',
                bookingStatus: false,
                bookingRequestStatus: 'pending_admin_confirmation',
                status: 'pending_admin_confirmation',
                stripePaymentIntentId: params.stripePaymentIntentId || null,
                stripeCheckoutSessionId: params.stripeCheckoutSessionId || null,
                depositAuthorizedAt: now,
                modifiedTS: now,
                updatedAt: now,
            }),
        ]);
        if (params.paymentId) {
            await this.stbDbSvc.db.ref(`/backendpayments/${params.paymentId}`).update(updatePayload);
        }
    }
    async markDepositPaidFromStripe(params) {
        const now = Date.now();
        const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}`).once('value').catch(() => null);
        const offerSnap = await this.stbDbSvc.db.ref(`/bnProposals/${params.bookingId}`).once('value').catch(() => null);
        const existingBooking = bookingSnap?.val?.() || {};
        const existingOffer = offerSnap?.val?.() || {};
        const termsAccepted = this.hasExplicitCustomerTermsAcceptance(existingBooking) || this.hasExplicitCustomerTermsAcceptance(existingOffer);
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
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/deposit`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payment`).update(updatePayload),
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
            warrantyPaymentMethodId: params.paymentMethodId || null,
            stripeCustomerId: params.stripeCustomerId || null,
            warrantyStripeCustomerId: params.stripeCustomerId || null,
            warrantyPaymentChoice: 'stripe_card',
            warrantyMethod: 'stripe_card',
            modifiedTS: now,
            updatedAt: now,
        };
        await Promise.all([
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/warranty`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payment`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}/payments/warranty`).update(updatePayload),
            this.stbDbSvc.db.ref(`/bnBookings/${params.bookingId}`).update({
                warrantyStatus: 'card_registered',
                warrantyRegistered: true,
                warrantyPaymentChoice: 'stripe_card',
                warrantyMethod: 'stripe_card',
                warrantyPaymentMethodId: params.paymentMethodId || null,
                warrantySetupIntentId: params.setupIntentId || null,
                stripeCustomerId: params.stripeCustomerId || null,
                warrantyStripeCustomerId: params.stripeCustomerId || null,
                modifiedTS: now,
                updatedAt: now,
            }),
            this.stbDbSvc.db.ref(`/bnProposals/${params.bookingId}`).update({
                warrantyStatus: 'card_registered',
                warrantyRegistered: true,
                warrantyPaymentChoice: 'stripe_card',
                warrantyMethod: 'stripe_card',
                warrantyPaymentMethodId: params.paymentMethodId || null,
                warrantySetupIntentId: params.setupIntentId || null,
                stripeCustomerId: params.stripeCustomerId || null,
                warrantyStripeCustomerId: params.stripeCustomerId || null,
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
                    const rawPaymentType = (session.metadata && (session.metadata['paymentType'] || session.metadata['checkoutType'] || session.metadata['paymentPurpose'])) || null;
                    const paymentType = String(rawPaymentType || '').toLowerCase().trim() || null;
                    const paymentId = (session.metadata && session.metadata['paymentId']) || null;
                    const standalonePayment = !!(session.metadata && session.metadata['standalonePayment'] === 'true');
                    const customerUserId = (session.metadata && session.metadata['customerUserId']) || null;
                    const now = Date.now();
                    // A standalone ad-hoc payment has no booking by design. Update the
                    // canonical payment record (and optional customer index) and stop here.
                    if (!bookingId && standalonePayment && paymentType === 'ad_hoc') {
                        const stripePaymentIntentId = session.payment_intent || null;
                        const updatePayload = {
                            status: 'paid',
                            paid: true,
                            paidAt: now,
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
                        if (paymentId) {
                            await this.stbDbSvc.db.ref(`/backendpayments/${paymentId}`).update(updatePayload);
                            if (customerUserId) {
                                await this.stbDbSvc.db.ref(`/backendusers/${customerUserId}/payments/${paymentId}`).update(updatePayload);
                            }
                        }
                        break;
                    }
                    if (!bookingId)
                        break;
                    if (paymentType === 'deposit_authorization') {
                        await this.markDepositAuthorizedFromStripe({
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
                    else if (paymentType === 'deposit') {
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
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/warranty`).update(updatePayload);
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
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payment`).update({
                            status: 'pm_saved',
                            setupIntentId: si.id,
                            paymentMethodId,
                            customerId,
                            updatedAt: now,
                        });
                    }
                    if (session.mode === 'payment' && session.payment_intent) {
                        const stripePaymentIntentId = session.payment_intent;
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
                        const isDepositPayment = ['deposit', 'deposit_authorization', 'deposit_payment'].includes(String(paymentType || ''));
                        const isWarrantyPayment = ['warranty', 'security_deposit', 'setup'].includes(String(paymentType || ''));
                        const isAdditionalPayment = ['ad_hoc', 'additional', 'extra_service', 'tip'].includes(String(paymentType || ''));
                        const isSkipperPayment = ['skipper_fee', 'skipper', 'skipper_payment'].includes(String(paymentType || ''));
                        const isBalancePayment = ['balance', 'alegria_balance', 'remaining', 'remaining_balance', 'boat_balance', 'alegria'].includes(String(paymentType || ''))
                            || (!paymentType && !!bookingId && !isDepositPayment && !isWarrantyPayment && !isAdditionalPayment && !isSkipperPayment);
                        if (isBalancePayment) {
                            const paidAmountEuros = Number(session.amount_total || 0) / 100;
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/balance`).update({
                                ...updatePayload,
                                paid: true,
                                paymentStatus: 'paid',
                                paymentType: 'balance',
                                method: 'Stripe',
                                amountEuros: paidAmountEuros,
                            });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/alegria`).update({
                                ...updatePayload,
                                paid: true,
                                paymentStatus: 'paid',
                                paymentType: 'alegria_balance',
                                method: 'Stripe',
                                amountEuros: paidAmountEuros,
                            });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                balanceStatus: 'paid',
                                balancePaid: true,
                                remainingPaid: true,
                                remainingStatus: 'paid',
                                balancePaymentStatus: 'paid',
                                balancePaymentMethod: 'Stripe',
                                alegriaPaid: true,
                                alegriaPaymentStatus: 'paid',
                                alegriaPaymentMethod: 'Stripe',
                                balancePaidAmount: paidAmountEuros,
                                alegriaPaidAmount: paidAmountEuros,
                                remainingFeesAmount: 0,
                                remainingOnboardAmount: 0,
                                remainingAlegriaRevenue: 0,
                                bookingStatus: 'payment_done',
                                paymentStatus: 'full_payment_done',
                                paymentStatusLabel: 'balance_paid',
                                modifiedTS: now,
                                updatedAt: now,
                            });
                        }
                        else if (isSkipperPayment) {
                            const paidAmountEuros = Number(session.amount_total || 0) / 100;
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/skipper`).update({
                                ...updatePayload,
                                paid: true,
                                paymentStatus: 'paid',
                                paymentType: 'skipper_fee',
                                method: 'Stripe',
                                amountEuros: paidAmountEuros,
                            });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                skipperPaid: true,
                                skipperStatus: 'paid',
                                skipperPaymentStatus: 'paid',
                                skipperPaymentMethod: 'Stripe',
                                skipperPaidAmount: paidAmountEuros,
                                skipperPaidAt: now,
                                modifiedTS: now,
                                updatedAt: now,
                            });
                        }
                        else if (paymentType === 'extra_service') {
                            const extraServiceId = (session.metadata && session.metadata['extraServiceId']) || null;
                            const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
                            const booking = bookingSnap.val() || {};
                            const extraServices = Array.isArray(booking.extraServices) ? booking.extraServices : [];
                            const updatedExtraServices = extraServices.map((item) => item.id === extraServiceId ? { ...item, status: 'paid', paid: true, paidAt: now, stripeCheckoutSessionId: session.id, stripePaymentIntentId, amount: (session.amount_total || item.amount) } : item);
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/extraServices`).set(updatedExtraServices);
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/extraServices/${extraServiceId}`).update(updatePayload);
                        }
                        else if (paymentType === 'ad_hoc') {
                            const adhocPaymentId = (session.metadata && (session.metadata['adhocPaymentId'] || session.metadata['extraServiceId'])) || null;
                            if (adhocPaymentId) {
                                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/adHoc/${adhocPaymentId}`).update(updatePayload);
                            }
                        }
                        else {
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/deposit`).update({ ...updatePayload, status: 'deposit_paid' });
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
                    const pi = event.data.object;
                    const metadata = pi.metadata || {};
                    const bookingId = metadata['bookingId'] || null;
                    const paymentType = String(metadata['paymentType'] || metadata['checkoutType'] || metadata['paymentPurpose'] || '').toLowerCase().trim();
                    if (bookingId) {
                        const now = Date.now();
                        const amountEuros = Number(pi.amount_received || pi.amount || 0) / 100;
                        const isDeposit = ['deposit', 'deposit_authorization', 'deposit_payment'].includes(paymentType);
                        const isWarranty = ['warranty', 'security_deposit', 'setup'].includes(paymentType);
                        const isAdditional = ['ad_hoc', 'additional', 'extra_service', 'tip'].includes(paymentType);
                        const isSkipper = ['skipper_fee', 'skipper', 'skipper_payment'].includes(paymentType);
                        const isBalance = ['balance', 'alegria_balance', 'remaining', 'remaining_balance', 'boat_balance', 'alegria'].includes(paymentType)
                            || (!paymentType && !isDeposit && !isWarranty && !isAdditional && !isSkipper);
                        if (isBalance) {
                            const common = {
                                status: 'paid', paid: true, paymentStatus: 'paid', method: 'Stripe',
                                paymentIntentId: pi.id, stripePaymentIntentId: pi.id,
                                amount: pi.amount_received || pi.amount || null, amountEuros,
                                currency: pi.currency || 'eur', paidAt: now, modifiedTS: now, updatedAt: now,
                            };
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/balance`).update({ ...common, paymentType: 'balance' });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/alegria`).update({ ...common, paymentType: 'alegria_balance' });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                balancePaid: true, balanceStatus: 'paid', balancePaymentStatus: 'paid', balancePaymentMethod: 'Stripe',
                                remainingPaid: true, remainingStatus: 'paid', alegriaPaid: true, alegriaPaymentStatus: 'paid', alegriaPaymentMethod: 'Stripe',
                                balancePaidAmount: amountEuros, alegriaPaidAmount: amountEuros,
                                remainingFeesAmount: 0, remainingOnboardAmount: 0, remainingAlegriaRevenue: 0,
                                bookingStatus: 'payment_done', paymentStatus: 'full_payment_done', paymentStatusLabel: 'balance_paid',
                                paymentPaymentIntentId: pi.id, modifiedTS: now, updatedAt: now,
                            });
                        }
                        else if (isSkipper) {
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/skipper`).update({
                                status: 'paid', paid: true, paymentStatus: 'paid', method: 'Stripe', paymentType: 'skipper_fee',
                                paymentIntentId: pi.id, stripePaymentIntentId: pi.id, amount: pi.amount_received || pi.amount || null,
                                amountEuros, currency: pi.currency || 'eur', paidAt: now, modifiedTS: now, updatedAt: now,
                            });
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                skipperPaid: true, skipperStatus: 'paid', skipperPaymentStatus: 'paid', skipperPaymentMethod: 'Stripe',
                                skipperPaidAmount: amountEuros, skipperPaidAt: now, modifiedTS: now, updatedAt: now,
                            });
                        }
                        else {
                            await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
                                paymentPaymentIntentId: pi.id, modifiedTS: now, updatedAt: now,
                            });
                        }
                    }
                    break;
                }
                case 'payment_intent.payment_failed': {
                    const pi = event.data.object;
                    const bookingId = (pi.metadata && pi.metadata['bookingId']) || null;
                    const message = (pi.last_payment_error && pi.last_payment_error.message) || 'Payment failed';
                    if (bookingId) {
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payment`).update({
                            status: 'charge_failed',
                            lastError: message,
                            paymentIntentId: pi.id,
                            updatedAt: Date.now(),
                        });
                        await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update({
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
    async acceptOutingBookingRequest(req, res) {
        try {
            const { bookingId, ownerId = 'alegria', adminId, note } = req.body || {};
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            const snap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
            if (!snap.exists())
                return res.status(404).json({ error: 'Booking not found' });
            const booking = snap.val() || {};
            const payment = booking?.payments?.deposit || {};
            const paymentIntentId = booking.stripePaymentIntentId || payment.stripePaymentIntentId;
            if (!paymentIntentId) {
                return res.status(400).json({ error: 'No authorized deposit payment intent found for this booking.' });
            }
            const stripe = await this.getStripeForOwner(ownerId || booking.ownerId || 'alegria');
            const pi = await stripe.paymentIntents.capture(paymentIntentId);
            const now = Date.now();
            const updatePayload = {
                bookingStatus: true,
                status: 'confirmed',
                bookingRequestStatus: 'confirmed',
                depositStatus: 'paid',
                depositPaid: true,
                depositCaptured: true,
                paymentStatus: 'deposit_paid',
                adminAcceptedAt: now,
                adminAcceptedBy: adminId || 'admin',
                adminAcceptanceNote: note || null,
                modifiedTS: now,
                updatedAt: now,
            };
            await Promise.all([
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update(updatePayload),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/deposit`).update({
                    status: 'captured',
                    depositStatus: 'paid',
                    depositPaid: true,
                    stripePaymentIntentId: paymentIntentId,
                    capturedAt: now,
                    paymentIntentStatus: pi.status,
                    modifiedTS: now,
                    updatedAt: now,
                }),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update(updatePayload).catch(() => undefined),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/deposit`).update({
                    status: 'captured',
                    depositStatus: 'paid',
                    depositPaid: true,
                    stripePaymentIntentId: paymentIntentId,
                    capturedAt: now,
                    paymentIntentStatus: pi.status,
                    modifiedTS: now,
                    updatedAt: now,
                }).catch(() => undefined),
            ]);
            return res.json({ ok: true, bookingId, paymentIntent: { id: pi.id, status: pi.status } });
        }
        catch (e) {
            console.error('[acceptOutingBookingRequest] error:', e);
            return res.status(400).json({ error: e?.message || 'Unable to accept booking request.' });
        }
    }
    async rejectOutingBookingRequest(req, res) {
        try {
            const { bookingId, ownerId = 'alegria', adminId, reason } = req.body || {};
            if (!bookingId)
                return res.status(400).json({ error: 'bookingId is required' });
            if (!reason)
                return res.status(400).json({ error: 'A rejection reason is required.' });
            const snap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
            if (!snap.exists())
                return res.status(404).json({ error: 'Booking not found' });
            const booking = snap.val() || {};
            const payment = booking?.payments?.deposit || {};
            const paymentIntentId = booking.stripePaymentIntentId || payment.stripePaymentIntentId;
            let cancelledPaymentIntent = null;
            if (paymentIntentId) {
                try {
                    const stripe = await this.getStripeForOwner(ownerId || booking.ownerId || 'alegria');
                    cancelledPaymentIntent = await stripe.paymentIntents.cancel(paymentIntentId);
                }
                catch (cancelError) {
                    console.warn('[rejectOutingBookingRequest] payment intent cancel warning:', cancelError?.message || cancelError);
                }
            }
            const now = Date.now();
            const updatePayload = {
                bookingStatus: false,
                status: 'rejected',
                bookingRequestStatus: 'rejected',
                depositStatus: 'authorization_cancelled',
                depositPaid: false,
                depositCaptured: false,
                paymentStatus: 'deposit_not_captured',
                rejectionReason: reason,
                adminRejectedAt: now,
                adminRejectedBy: adminId || 'admin',
                modifiedTS: now,
                updatedAt: now,
            };
            await Promise.all([
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update(updatePayload),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/deposit`).update({
                    status: 'authorization_cancelled',
                    depositStatus: 'authorization_cancelled',
                    depositPaid: false,
                    stripePaymentIntentId: paymentIntentId || null,
                    cancellationReason: reason,
                    cancelledAt: now,
                    paymentIntentStatus: cancelledPaymentIntent?.status || null,
                    modifiedTS: now,
                    updatedAt: now,
                }),
                this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).update(updatePayload).catch(() => undefined),
            ]);
            return res.json({ ok: true, bookingId, paymentIntent: cancelledPaymentIntent ? { id: cancelledPaymentIntent.id, status: cancelledPaymentIntent.status } : null });
        }
        catch (e) {
            console.error('[rejectOutingBookingRequest] error:', e);
            return res.status(400).json({ error: e?.message || 'Unable to reject booking request.' });
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
        stripeRouter.post('/pay/outing-balance-checkout', (req, res) => this.createOutingBalanceCheckout(req, res));
        stripeRouter.post('/pay/outing-remaining-checkout', (req, res) => this.createOutingBalanceCheckout(req, res));
        stripeRouter.post('/api/payments/create-balance-checkout-session', (req, res) => this.createOutingBalanceCheckout(req, res));
        stripeRouter.post('/api/payments/create-remaining-checkout-session', (req, res) => this.createOutingBalanceCheckout(req, res));
        stripeRouter.post('/stripe/balance-checkout', (req, res) => this.createOutingBalanceCheckout(req, res));
        stripeRouter.post('/stripe/remaining-checkout', (req, res) => this.createOutingBalanceCheckout(req, res));
        stripeRouter.post('/pay/outing-skipper-fee-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/api/payments/create-skipper-fee-checkout-session', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/stripe/skipper-fee-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/pay/outing-balance-complete', (req, res) => this.completeOutingBalancePayment(req, res));
        stripeRouter.post('/pay/outing-remaining-complete', (req, res) => this.completeOutingBalancePayment(req, res));
        stripeRouter.post('/api/payments/complete-balance-payment', (req, res) => this.completeOutingBalancePayment(req, res));
        stripeRouter.post('/api/payments/complete-remaining-payment', (req, res) => this.completeOutingBalancePayment(req, res));
        stripeRouter.post('/stripe/balance-complete', (req, res) => this.completeOutingBalancePayment(req, res));
        stripeRouter.post('/stripe/remaining-complete', (req, res) => this.completeOutingBalancePayment(req, res));
        stripeRouter.post('/pay/outing-deposit-checkout', (req, res) => this.createOutingDepositCheckout(req, res));
        stripeRouter.post('/pay/outing-warranty-checkout', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/pay/outing-warranty-charge', (req, res) => this.chargeOutingWarranty(req, res));
        stripeRouter.post('/pay/outing-warranty-complete', (req, res) => this.completeOutingWarrantySetup(req, res));
        stripeRouter.post('/api/payments/complete-warranty-setup', (req, res) => this.completeOutingWarrantySetup(req, res));
        stripeRouter.post('/stripe/warranty-complete', (req, res) => this.completeOutingWarrantySetup(req, res));
        stripeRouter.get('/pay/outing-payment-status', (req, res) => this.outingPaymentStatus(req, res));
        stripeRouter.post('/pay/outing-booking-accept', (req, res) => this.acceptOutingBookingRequest(req, res));
        stripeRouter.post('/pay/outing-booking-reject', (req, res) => this.rejectOutingBookingRequest(req, res));
        // Frontend-friendly aliases
        stripeRouter.post('/api/payments/create-deposit-checkout-session', (req, res) => this.createOutingDepositCheckout(req, res));
        stripeRouter.post('/api/payments/create-warranty-checkout-session', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/api/payments/create-warranty-setup-session', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/api/payments/charge-warranty', (req, res) => this.chargeOutingWarranty(req, res));
        stripeRouter.post('/api/payments/release-warranty', (req, res) => this.releaseOutingWarranty(req, res));
        stripeRouter.get('/api/payments/status', (req, res) => this.outingPaymentStatus(req, res));
        stripeRouter.post('/api/bookings/accept-request', (req, res) => this.acceptOutingBookingRequest(req, res));
        stripeRouter.post('/api/bookings/reject-request', (req, res) => this.rejectOutingBookingRequest(req, res));
        // Older aliases used by the Angular BookingApiService
        stripeRouter.post('/stripe/deposit-checkout', (req, res) => this.createOutingDepositCheckout(req, res));
        stripeRouter.post('/stripe/warranty-setup', (req, res) => this.createOutingWarrantySetupCheckout(req, res));
        stripeRouter.post('/stripe/warranty-charge', (req, res) => this.chargeOutingWarranty(req, res));
        stripeRouter.post('/pay/outing-warranty-release', (req, res) => this.releaseOutingWarranty(req, res));
        stripeRouter.post('/stripe/warranty-release', (req, res) => this.releaseOutingWarranty(req, res));
        stripeRouter.post('/pay/outing-extra-service-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/api/payments/create-extra-service-checkout-session', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/stripe/extra-service-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        // Dedicated ad-hoc aliases used by the frontend. They intentionally reuse
        // the generic additional-payment checkout but preserve paymentType=ad_hoc.
        stripeRouter.post('/pay/outing-adhoc-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/pay/outing-ad-hoc-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/api/payments/create-adhoc-checkout-session', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/api/payments/create-ad-hoc-checkout-session', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/stripe/adhoc-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/stripe/ad-hoc-checkout', (req, res) => this.createOutingExtraServiceCheckout(req, res));
        stripeRouter.post('/pay/outing-refund', (req, res) => this.refundOutingPayment(req, res));
        stripeRouter.post('/api/payments/refund', (req, res) => this.refundOutingPayment(req, res));
        stripeRouter.post('/stripe/booking-refund', (req, res) => this.refundOutingPayment(req, res));
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
    async createOutingBalanceCheckout(req, res) {
        try {
            const body = req.body || {};
            const ownerId = body.ownerId || 'alegria';
            const bookingId = body.bookingId || body.offerId || body.id;
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
                    received: { bookingId: body.bookingId, offerId: body.offerId, id: body.id }
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
        }
        catch (e) {
            console.error('[createOutingBalanceCheckout] error:', e);
            return res.status(400).json({
                error: e?.message || 'Failed to create balance checkout session',
                code: e?.code || null,
                type: e?.type || null
            });
        }
    }
    async createOutingExtraServiceCheckout(req, res) {
        try {
            const body = req.body || {};
            const ownerId = body.ownerId || 'alegria';
            const bookingId = body.bookingId || body.offerId || '';
            const standalonePayment = body.standalonePayment === true || body.standalonePayment === 'true' || !bookingId;
            const extraServiceId = body.extraServiceId || body.adhocPaymentId || body.serviceId || body.id || `extra_${Date.now()}`;
            const rawAmount = body.amount ?? body.extraAmount ?? body.price;
            const currency = String(body.currency || 'eur').toLowerCase();
            const requestedPaymentType = String(body.paymentType || body.checkoutType || body.type || '').toLowerCase();
            const isAdHocPayment = requestedPaymentType.includes('ad_hoc') || requestedPaymentType.includes('adhoc') || requestedPaymentType.includes('ad-hoc');
            const isSkipperFeePayment = requestedPaymentType.includes('skipper');
            const normalizedPaymentType = isSkipperFeePayment ? 'skipper_fee' : (isAdHocPayment ? 'ad_hoc' : 'extra_service');
            const description = body.description || body.title || body.name || (isAdHocPayment ? 'Ad hoc payment' : 'Extra service payment');
            const rawCustomerEmail = body.customerEmail || body.email || body.customer?.email;
            const customerEmail = this.isValidEmailForStripe(rawCustomerEmail) ? String(rawCustomerEmail).trim() : '';
            const customerName = body.customerName || body.name || body.customer?.fullName || (!customerEmail ? rawCustomerEmail : '');
            const customerPhone = body.customerPhone || body.phone || body.customer?.phone;
            const customerUserId = body.customerUserId || body.userId || body.uid || '';
            const category = String(body.category || (isAdHocPayment ? 'other' : 'extra_service'));
            const successUrl = body.successUrl || body.returnUrl;
            const cancelUrl = body.cancelUrl || body.failureUrl || body.returnUrl;
            if (!bookingId && !isAdHocPayment && !standalonePayment) {
                return res.status(400).json({ error: 'bookingId is required for this payment type' });
            }
            // Booking terms apply only to payments attached to a booking.
            if (bookingId) {
                await this.assertTermsAcceptedBeforeCustomerAction(bookingId);
            }
            const amount = this.normalizeAmountToCents(rawAmount);
            if (!amount) {
                return res.status(400).json({
                    error: 'amount must be greater than 0',
                    received: { amount: body.amount, extraAmount: body.extraAmount, price: body.price }
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
                        bookingId: bookingId || '',
                        ownerId,
                        customerUserId,
                        source: standalonePayment ? 'alegria-standalone-payment' : 'alegria-extra-service',
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
                                name: description,
                                description: 'Alegria Boat additional payment',
                            },
                        },
                    },
                ],
                success_url: this.appendCheckoutParams(successUrl, {
                    session_id: '{CHECKOUT_SESSION_ID}',
                    bookingId,
                    paymentType: normalizedPaymentType,
                    extraServiceId,
                    adhocPaymentId: isAdHocPayment ? extraServiceId : '',
                    payment: 'success'
                }),
                cancel_url: this.appendCheckoutParams(cancelUrl, {
                    bookingId,
                    paymentType: normalizedPaymentType,
                    extraServiceId,
                    adhocPaymentId: isAdHocPayment ? extraServiceId : '',
                    payment: 'cancelled'
                }),
                payment_intent_data: {
                    metadata: {
                        paymentId,
                        bookingId: bookingId || '',
                        ownerId,
                        paymentType: normalizedPaymentType,
                        standalonePayment: standalonePayment ? 'true' : 'false',
                        customerUserId,
                        category,
                        extraServiceId,
                        adhocPaymentId: isAdHocPayment ? extraServiceId : '',
                        description,
                    },
                },
                metadata: {
                    paymentId,
                    bookingId: bookingId || '',
                    ownerId,
                    paymentType: normalizedPaymentType,
                    standalonePayment: standalonePayment ? 'true' : 'false',
                    customerUserId,
                    category,
                    extraServiceId,
                    adhocPaymentId: isAdHocPayment ? extraServiceId : '',
                    description,
                },
            });
            const now = Date.now();
            const payload = {
                paymentId,
                ownerId,
                bookingId: bookingId || '',
                standalonePayment,
                customerUserId,
                category,
                paymentType: normalizedPaymentType,
                extraServiceId,
                adhocPaymentId: isAdHocPayment ? extraServiceId : '',
                description,
                amount,
                currency,
                status: 'checkout_created',
                paid: false,
                stripeCheckoutSessionId: session.id,
                stripeCustomerId: customer?.id || null,
                customerEmail: customerEmail || null,
                customerName: customerName || null,
                customerPhone: customerPhone || null,
                createdTS: now,
                modifiedTS: now,
            };
            await paymentRef.set(payload);
            if (isSkipperFeePayment && bookingId) {
                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/skipper`).set(payload);
            }
            else if (isAdHocPayment && bookingId) {
                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/adHoc/${extraServiceId}`).set(payload);
            }
            else if (isAdHocPayment && standalonePayment) {
                // Standalone payments are not attached to a booking. Keep a customer index
                // when an authenticated user id is supplied, while backendpayments remains
                // the canonical accounting record.
                if (customerUserId) {
                    await this.stbDbSvc.db.ref(`/backendusers/${customerUserId}/payments/${paymentId}`).set(payload);
                }
            }
            else {
                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/payments/extraServices/${extraServiceId}`).set(payload);
                const bookingSnap = await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`).once('value');
                const booking = bookingSnap.val() || {};
                const extraServices = Array.isArray(booking.extraServices) ? [...booking.extraServices] : [];
                const index = extraServices.findIndex((item) => item.id === extraServiceId || item.extraServiceId === extraServiceId);
                const extraPayload = {
                    id: extraServiceId,
                    extraServiceId,
                    description,
                    amount: amount > 10000 ? amount / 100 : amount,
                    amountCents: amount,
                    currency,
                    status: 'pending',
                    paid: false,
                    stripeCheckoutSessionId: session.id,
                    createdTS: now,
                    modifiedTS: now,
                };
                if (index >= 0) {
                    extraServices[index] = { ...extraServices[index], ...extraPayload };
                }
                else {
                    extraServices.push(extraPayload);
                }
                await this.stbDbSvc.db.ref(`/bnBookings/${bookingId}/extraServices`).set(extraServices);
            }
            return res.json({ ok: true, url: session.url, id: session.id, paymentId, extraServiceId, adhocPaymentId: isAdHocPayment ? extraServiceId : '', paymentType: normalizedPaymentType, standalonePayment });
        }
        catch (e) {
            console.error('[createOutingExtraServiceCheckout] error:', e);
            return res.status(400).json({
                error: e?.message || 'Failed to create extra service checkout session',
                code: e?.code || null,
                type: e?.type || null
            });
        }
    }
    async refundOutingPayment(req, res) {
        try {
            const body = req.body || {};
            const ownerId = body.ownerId || 'alegria';
            const bookingId = body.bookingId || body.offerId || body.id;
            const requestedType = String(body.paymentType || body.refundType || body.type || '').toLowerCase();
            const extraServiceId = body.extraServiceId || body.serviceId || null;
            const reason = body.reason || body.refundReason || '';
            const explicitPaymentIntentId = body.paymentIntentId || body.stripePaymentIntentId || null;
            const explicitCheckoutSessionId = body.checkoutSessionId || body.stripeCheckoutSessionId || null;
            if (!bookingId) {
                return res.status(400).json({ error: 'bookingId is required' });
            }
            const paymentType = requestedType.includes('deposit') ? 'deposit' :
                requestedType.includes('balance') || requestedType.includes('remaining') || requestedType.includes('90') ? 'balance' :
                    requestedType.includes('skipper') ? 'skipper_fee' :
                        requestedType.includes('extra') || requestedType.includes('service') ? 'extra_service' :
                            requestedType.includes('ad_hoc') || requestedType.includes('adhoc') || requestedType.includes('ad-hoc') ? 'ad_hoc' :
                                requestedType || 'balance';
            const rawAmount = body.amountCents ?? body.refundAmountCents ?? body.amount ?? body.refundAmount ?? body.refund ?? body.value;
            const amountCents = Number(body.amountCents ?? body.refundAmountCents) > 0
                ? Math.round(Number(body.amountCents ?? body.refundAmountCents))
                : this.normalizeAmountToCents(rawAmount);
            if (!amountCents) {
                return res.status(400).json({
                    error: 'A refund amount is required and must be greater than 0',
                    received: { amount: body.amount, refundAmount: body.refundAmount, amountCents: body.amountCents }
                });
            }
            const bookingRef = this.stbDbSvc.db.ref(`/bnBookings/${bookingId}`);
            const bookingSnap = await bookingRef.once('value');
            if (!bookingSnap.exists()) {
                return res.status(404).json({ error: 'Booking not found', bookingId });
            }
            const booking = bookingSnap.val() || {};
            let paymentPath = '';
            if (paymentType === 'deposit') {
                paymentPath = `/bnBookings/${bookingId}/payments/deposit`;
            }
            else if (paymentType === 'balance') {
                paymentPath = `/bnBookings/${bookingId}/payments/balance`;
            }
            else if (paymentType === 'skipper_fee') {
                paymentPath = `/bnBookings/${bookingId}/payments/skipper`;
            }
            else if (paymentType === 'extra_service') {
                if (extraServiceId) {
                    paymentPath = `/bnBookings/${bookingId}/payments/extraServices/${extraServiceId}`;
                }
                else {
                    return res.status(400).json({ error: 'extraServiceId is required to refund an extra service payment' });
                }
            }
            else if (paymentType === 'ad_hoc') {
                if (extraServiceId) {
                    paymentPath = `/bnBookings/${bookingId}/payments/adHoc/${extraServiceId}`;
                }
                else {
                    return res.status(400).json({ error: 'adhocPaymentId/extraServiceId is required to refund an ad hoc payment' });
                }
            }
            else {
                return res.status(400).json({
                    error: 'Unsupported paymentType for booking refund',
                    supportedPaymentTypes: ['deposit', 'balance', 'remaining', 'skipper_fee', 'extra_service', 'ad_hoc'],
                    received: requestedType
                });
            }
            const paymentSnap = await this.stbDbSvc.db.ref(paymentPath).once('value');
            const payment = paymentSnap.val() || {};
            let paymentIntentId = explicitPaymentIntentId ||
                payment.stripePaymentIntentId ||
                payment.paymentIntentId ||
                (paymentType === 'deposit' ? (booking.stripePaymentIntentId || booking.paymentPaymentIntentId) : null);
            let checkoutSessionId = explicitCheckoutSessionId ||
                payment.stripeCheckoutSessionId ||
                payment.checkoutSessionId ||
                (paymentType === 'deposit' ? booking.stripeCheckoutSessionId : null);
            const stripe = await this.getStripeForOwner(ownerId);
            if (!paymentIntentId && checkoutSessionId) {
                const session = await stripe.checkout.sessions.retrieve(checkoutSessionId);
                paymentIntentId = session.payment_intent || null;
            }
            if (!paymentIntentId) {
                return res.status(400).json({
                    error: 'No Stripe payment intent found for this payment. Cannot refund automatically.',
                    bookingId,
                    paymentType,
                    paymentPath,
                    hasCheckoutSession: !!checkoutSessionId
                });
            }
            const pi = await stripe.paymentIntents.retrieve(paymentIntentId);
            const paidAmount = Number(pi.amount_received || pi.amount || payment.amount_total || payment.amount || 0);
            const alreadyRefunded = Number(pi.amount_refunded || payment.refundedAmountCents || payment.refundedAmount || 0);
            const maxRefundable = Math.max(0, paidAmount - alreadyRefunded);
            if (maxRefundable && amountCents > maxRefundable) {
                return res.status(400).json({
                    error: 'Requested refund exceeds refundable amount',
                    requestedAmountCents: amountCents,
                    paidAmountCents: paidAmount,
                    alreadyRefundedCents: alreadyRefunded,
                    maxRefundableCents: maxRefundable
                });
            }
            const refund = await stripe.refunds.create({
                payment_intent: paymentIntentId,
                amount: amountCents,
                reason: ['duplicate', 'fraudulent', 'requested_by_customer'].includes(String(body.stripeReason || '')) ? body.stripeReason : undefined,
                metadata: {
                    bookingId,
                    ownerId,
                    paymentType,
                    extraServiceId: extraServiceId || '',
                    reason: reason || '',
                    source: 'admin_booking_refund',
                },
            });
            const now = Date.now();
            const newRefundedAmountCents = Number(payment.refundedAmountCents || payment.refundedAmount || 0) + amountCents;
            const recordedPaidAmountCents = paidAmount || Number(payment.amount_total || payment.amount || 0);
            const isFullRefund = recordedPaidAmountCents > 0 && newRefundedAmountCents >= recordedPaidAmountCents;
            const refundStatus = isFullRefund ? 'refunded' : 'partially_refunded';
            const refundPayload = {
                refundId: refund.id,
                bookingId,
                ownerId,
                paymentType,
                extraServiceId: extraServiceId || null,
                amount: amountCents,
                amountCents,
                currency: refund.currency || payment.currency || 'eur',
                status: refund.status || 'succeeded',
                reason: reason || null,
                stripePaymentIntentId: paymentIntentId,
                stripeRefundId: refund.id,
                createdTS: now,
                modifiedTS: now,
            };
            await this.stbDbSvc.db.ref(`${paymentPath}/refunds/${refund.id}`).set(refundPayload);
            await this.stbDbSvc.db.ref(paymentPath).update({
                refundStatus,
                refunded: isFullRefund,
                partiallyRefunded: !isFullRefund,
                refundedAmountCents: newRefundedAmountCents,
                refundedAmount: newRefundedAmountCents / 100,
                lastRefundId: refund.id,
                lastRefundAmountCents: amountCents,
                lastRefundAmount: amountCents / 100,
                lastRefundAt: now,
                modifiedTS: now,
                updatedAt: now,
            });
            const bookingUpdate = {
                modifiedTS: now,
                updatedAt: now,
            };
            if (paymentType === 'deposit') {
                bookingUpdate.depositRefundStatus = refundStatus;
                bookingUpdate.depositRefundedAmountCents = newRefundedAmountCents;
                bookingUpdate.depositRefunded = isFullRefund;
                if (isFullRefund) {
                    bookingUpdate.depositPaid = false;
                    bookingUpdate.depositStatus = 'refunded';
                }
            }
            else if (paymentType === 'balance') {
                bookingUpdate.balanceRefundStatus = refundStatus;
                bookingUpdate.balanceRefundedAmountCents = newRefundedAmountCents;
                bookingUpdate.balanceRefunded = isFullRefund;
                if (isFullRefund) {
                    bookingUpdate.balancePaid = false;
                    bookingUpdate.balanceStatus = 'refunded';
                    bookingUpdate.paymentStatus = 'balance_refunded';
                }
            }
            else if (paymentType === 'skipper_fee') {
                bookingUpdate.skipperRefundStatus = refundStatus;
                bookingUpdate.skipperRefundedAmountCents = newRefundedAmountCents;
                bookingUpdate.skipperRefunded = isFullRefund;
                if (isFullRefund) {
                    bookingUpdate.skipperPaid = false;
                    bookingUpdate.skipperStatus = 'refunded';
                }
            }
            await bookingRef.update(bookingUpdate);
            return res.json({
                ok: true,
                refund,
                bookingId,
                paymentType,
                amountCents,
                amount: amountCents / 100,
                refundStatus,
                paymentIntentId,
            });
        }
        catch (e) {
            console.error('[refundOutingPayment] error:', e);
            return res.status(400).json({
                error: e?.message || 'Failed to refund outing payment',
                code: e?.code || null,
                type: e?.type || null
            });
        }
    }
}
exports.StripeService = StripeService;

//# sourceMappingURL=stripeAdn.js.map
