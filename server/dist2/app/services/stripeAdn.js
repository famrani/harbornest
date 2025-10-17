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
const stripe_1 = __importDefault(require("stripe"));
const dotenv = __importStar(require("dotenv"));
const uuid_1 = require("uuid");
const admin = __importStar(require("firebase-admin"));
const firebase_service_1 = require("./firebase.service");
dotenv.config();
class StripeService {
    constructor() {
        let secretKey = process.env.STRIPE_SECRET_KEY;
        this.stripe = new stripe_1.default(secretKey, {
            apiVersion: '2025-08-27.basil',
        });
    }
    // Customers
    async createCustomer(req, res) {
        try {
            const { email, name, phone, metadata, accountId } = req.body;
            const params = {
                email,
                name,
                phone,
                metadata,
            };
            const customer = accountId
                ? await this.stripe.customers.create(params, { stripeAccount: accountId })
                : await this.stripe.customers.create(params);
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async retrieveCustomer(req, res) {
        try {
            const { customerId, accountId } = req.query;
            const customer = accountId
                ? await this.stripe.customers.retrieve(customerId, { stripeAccount: accountId })
                : await this.stripe.customers.retrieve(customerId);
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async updateCustomer(req, res) {
        try {
            const { customerId, updateFields, accountId } = req.body;
            const customer = accountId
                ? await this.stripe.customers.update(customerId, updateFields, { stripeAccount: accountId })
                : await this.stripe.customers.update(customerId, updateFields);
            res.json(customer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async deleteCustomer(req, res) {
        try {
            const { customerId, accountId } = req.body;
            const deleted = accountId
                ? await this.stripe.customers.del(customerId, { stripeAccount: accountId })
                : await this.stripe.customers.del(customerId);
            res.json(deleted);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Payment Intents
    async createPaymentIntent(req, res) {
        let bookingdata = {};
        try {
            const { amount, currency, customerId, applicationFee, accountId, user_guest, email_guest, user_host, email_host, start_date, end_date, start_time, end_time, listing_title, } = req.body;
            bookingdata.user_guest = user_guest;
            bookingdata.email_guest = email_guest;
            bookingdata.user_host = user_host;
            bookingdata.email_host = email_host;
            bookingdata.start_date = start_date;
            bookingdata.end_date = end_date;
            bookingdata.start_time = start_time;
            bookingdata.end_time = end_time;
            bookingdata.listing_title = listing_title;
            bookingdata.price = amount / 100;
            const params = {
                amount,
                currency,
                customer: customerId,
                payment_method_types: ['card'],
            };
            if (accountId && applicationFee) {
                params.transfer_data = { destination: accountId };
                params.application_fee_amount = applicationFee;
            }
            const paymentIntent = await this.stripe.paymentIntents.create(params);
            res.json(paymentIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async confirmPaymentIntent(req, res) {
        try {
            const { paymentIntentId } = req.body;
            const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);
            res.json(paymentIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async cancelPaymentIntent(req, res) {
        try {
            const { paymentIntentId } = req.body;
            const paymentIntent = await this.stripe.paymentIntents.cancel(paymentIntentId);
            res.json(paymentIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Refunds
    async createRefund(req, res) {
        try {
            const { paymentIntentId, amount, accountId } = req.body;
            const params = {
                payment_intent: paymentIntentId,
                amount,
            };
            const refund = accountId
                ? await this.stripe.refunds.create(params, { stripeAccount: accountId })
                : await this.stripe.refunds.create(params);
            res.json(refund);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async createSetupIntent(req, res) {
        try {
            const { customerId } = req.body;
            const setupIntent = await this.stripe.setupIntents.create({
                customer: customerId,
                payment_method_types: ['card'],
            });
            res.json(setupIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async confirmSetupIntent(req, res) {
        try {
            const { setupIntentId } = req.body;
            const setupIntent = await this.stripe.setupIntents.confirm(setupIntentId);
            res.json(setupIntent);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Webhook
    async handleWebhook(req, res, endpointSecret) {
        try {
            const sig = req.headers['stripe-signature'];
            const event = this.stripe.webhooks.constructEvent(req.body, sig, endpointSecret);
            console.log('Webhook event received:', event.type);
            res.status(200).send({ received: true });
        }
        catch (err) {
            console.error('Webhook Error:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    }
    // --- Add to your StripeService class ---
    // Create a Connected Standard Account
    async createStandardAccount(req, res) {
        try {
            const { email, country = 'FR' } = req.body;
            const account = await this.stripe.accounts.create({
                type: 'standard',
                country,
                email,
                business_type: 'individual', // or 'company'
            });
            res.json(account);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Generate an Account Link for Onboarding
    async createStandardAccountLink(req, res) {
        try {
            const { accountId, refreshUrl, returnUrl } = req.body;
            const accountLink = await this.stripe.accountLinks.create({
                account: accountId,
                refresh_url: refreshUrl,
                return_url: returnUrl,
                type: 'account_onboarding',
            });
            res.json(accountLink);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Retrieve a Connected Account
    async retrieveAccount(req, res) {
        try {
            const { accountId } = req.query;
            const account = await this.stripe.accounts.retrieve(accountId);
            res.json(account);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // ✅ Create a Connected Express Account
    async createExpressAccount(req, res) {
        try {
            const { email, country = 'FR' } = req.body;
            const account = await this.stripe.accounts.create({
                type: 'express', // ✅ EXPRESS account
                country,
                email,
                capabilities: {
                    card_payments: { requested: true },
                    transfers: { requested: true },
                },
                business_type: 'individual', // or 'company' if you need
            });
            const state = (0, uuid_1.v4)();
            res.json(account);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // Generate an Account Link for Express Onboarding
    async createExpressAccountLink(req, res) {
        try {
            const { accountId, refreshUrl, returnUrl } = req.body;
            const accountLink = await this.stripe.accountLinks.create({
                account: accountId,
                refresh_url: refreshUrl,
                return_url: returnUrl,
                type: 'account_onboarding',
            });
            res.json(accountLink);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // OPTIONAL - Manual Transfer to Connected Account
    async createTransfer(req, res) {
        try {
            const { amount, currency, destinationAccountId } = req.body;
            const transfer = await this.stripe.transfers.create({
                amount,
                currency,
                destination: destinationAccountId,
            });
            res.json(transfer);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // OPTIONAL - List PaymentIntents
    async listPaymentIntents(req, res) {
        try {
            const { limit = 10 } = req.query;
            const paymentIntents = await this.stripe.paymentIntents.list({
                limit: Number(limit),
            });
            res.json(paymentIntents);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    // OPTIONAL - List Charges
    async listCharges(req, res) {
        console.log('listCharges');
        try {
            const { limit = 10 } = req.query;
            const charges = await this.stripe.charges.list({
                limit: Number(limit),
            });
            res.json(charges);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async listCustomAccounts(req, res) {
        try {
            const { limit = 100 } = req.query;
            const accounts = await this.stripe.accounts.list({
                limit: Number(limit),
            });
            const customAccounts = accounts.data.filter(acc => acc.type === 'custom' || acc.type === 'express');
            res.json(customAccounts);
        }
        catch (error) {
            res.status(400).json({ error: error.message });
        }
    }
    async deleteStripeAccount(req, res) {
        try {
            const { stripeAccountId } = req.query;
            const deleted = await this.stripe.accounts.del(String(stripeAccountId));
            console.log(`Deleted account ${stripeAccountId}:`, deleted);
            res.json(deleted);
        }
        catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    async getAccountStatus(req, res) {
        try {
            const { accountId } = req.query;
            const snap = await admin.database().ref(`/${firebase_service_1.OBJECTNAME.wnUsers}/${accountId}/stripeAccountId`).once('value');
            const stripeAccountId = snap.val();
            if (!stripeAccountId)
                return res.json({ connected: false });
            const account = await this.stripe.accounts.retrieve(stripeAccountId);
            res.json({
                connected: true,
                stripeAccountId: stripeAccountId,
                status: account.details_submitted ? 'Complete' : 'Incomplete',
            });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async disconnectStripeAccount(req, res) {
        try {
            const { accountId } = req.query;
            const snap = await admin.database().ref(`/${firebase_service_1.OBJECTNAME.wnUsers}/${accountId}/stripeAccountId`).once('value');
            await admin.database().ref(`/${firebase_service_1.OBJECTNAME.wnUsers}/${accountId}/stripeAccountId`).remove();
            res.json({ success: true });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async createDashboardLink(req, res) {
        try {
            const { stripeAccountId } = req.body;
            const link = await this.stripe.accounts.createLoginLink(stripeAccountId);
            res.json({ url: link.url });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    async createRemediationLink(req, res) {
        console.log('createRemediationLink');
        try {
            const { stripeAccountId, refresh_url, return_url } = req.body;
            const accountLink = await this.stripe.accountLinks.create({
                account: stripeAccountId,
                refresh_url: `${refresh_url}`,
                return_url: `${return_url}`,
                type: 'account_onboarding',
            });
            res.json({ url: accountLink.url });
        }
        catch (err) {
            res.status(500).json({ error: err.message });
        }
    }
    setRoutes(stripeRouter) {
        // --- Customers ---
        stripeRouter.post('/stripe/customer', (req, res) => this.createCustomer(req, res));
        stripeRouter.get('/stripe/customer/:customerId', (req, res) => this.retrieveCustomer(req, res));
        stripeRouter.put('/stripe/customer/:customerId', (req, res) => this.updateCustomer(req, res));
        stripeRouter.delete('/stripe/customer/:customerId', (req, res) => this.deleteCustomer(req, res));
        // --- Payment Intents ---
        stripeRouter.post('/stripe/payment-intent', (req, res) => this.createPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/:paymentIntentId/confirm', (req, res) => this.confirmPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/:paymentIntentId/cancel', (req, res) => this.cancelPaymentIntent(req, res));
        // --- Setup Intents ---
        stripeRouter.post('/stripe/setup-intent', (req, res) => this.createSetupIntent(req, res));
        stripeRouter.post('/stripe/setup-intent/:setupIntentId/confirm', (req, res) => this.confirmSetupIntent(req, res));
        // --- Refunds ---
        stripeRouter.post('/stripe/refund', (req, res) => this.createRefund(req, res));
        // --- Webhooks ---
        stripeRouter.post('/stripe/webhook', (req, res, endpointSecret) => this.handleWebhook(req, res, endpointSecret));
        stripeRouter.post('/stripe/standardaccount', (req, res) => this.createStandardAccount(req, res)); // Create Stripe Standard Account
        stripeRouter.post('/stripe/expressaccount', (req, res) => this.createExpressAccount(req, res)); // Create Stripe Express Account
        stripeRouter.post('/stripe/standardaccount-link', (req, res) => this.createStandardAccountLink(req, res)); // Create Stripe Express Account
        stripeRouter.post('/stripe/expressaccount-link', (req, res) => this.createExpressAccountLink(req, res)); // Create Account Onboarding Link
        stripeRouter.get('/stripe/account', (req, res) => this.retrieveAccount(req, res)); // Get Account Details
        // Optional: Manual Transfers
        stripeRouter.post('/stripe/transfer', (req, res) => this.createTransfer(req, res));
        // Optional: Admin listing
        stripeRouter.get('/stripe/payment-intents', (req, res) => this.listPaymentIntents(req, res));
        stripeRouter.get('/stripe/charges', (req, res) => this.listCharges(req, res));
        stripeRouter.get('/stripe/listaccount', (req, res) => this.listCustomAccounts(req, res));
        stripeRouter.get('/stripe/deleteaccount', (req, res) => this.deleteStripeAccount(req, res));
        stripeRouter.get('/stripe/account-status', (req, res) => this.getAccountStatus(req, res));
        stripeRouter.post('/stripe/disconnect-account', (req, res) => this.disconnectStripeAccount(req, res));
        stripeRouter.post('/stripe/dashboard-link', (req, res) => this.createDashboardLink(req, res));
        stripeRouter.post('/stripe/remediation-link', (req, res) => this.createRemediationLink(req, res));
    }
}
exports.StripeService = StripeService;

//# sourceMappingURL=stripeAdn.js.map
