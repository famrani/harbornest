import Stripe from 'stripe';
import { Request, Response } from 'express';
import * as dotenv from 'dotenv';
import { v4 as uuidv4 } from 'uuid';
import * as admin from 'firebase-admin';
import { OBJECTNAME, BookingData } from './firebase.service';

dotenv.config();

export class StripeService {
    private stripe: Stripe;

    constructor() {
        let secretKey = process.env.STRIPE_SECRET_KEY as string;
        this.stripe = new Stripe(secretKey, {
            apiVersion: '2025-08-27.basil',
        });
    }

    // Customers

    async createCustomer(req: Request, res: Response) {
        try {
            const { email, name, phone, metadata, accountId } = req.body;

            const params: Stripe.CustomerCreateParams = {
                email,
                name,
                phone,
                metadata,
            };

            const customer = accountId
                ? await this.stripe.customers.create(params, { stripeAccount: accountId })
                : await this.stripe.customers.create(params);

            res.json(customer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async retrieveCustomer(req: Request, res: Response) {
        try {
            const { customerId, accountId } = req.query;
            const customer = accountId
                ? await this.stripe.customers.retrieve(customerId as string, { stripeAccount: accountId as string })
                : await this.stripe.customers.retrieve(customerId as string);

            res.json(customer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async updateCustomer(req: Request, res: Response) {
        try {
            const { customerId, updateFields, accountId } = req.body;

            const customer = accountId
                ? await this.stripe.customers.update(customerId, updateFields, { stripeAccount: accountId })
                : await this.stripe.customers.update(customerId, updateFields);

            res.json(customer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteCustomer(req: Request, res: Response) {
        try {
            const { customerId, accountId } = req.body;

            const deleted = accountId
                ? await this.stripe.customers.del(customerId, { stripeAccount: accountId })
                : await this.stripe.customers.del(customerId);

            res.json(deleted);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // Payment Intents

    async createPaymentIntent(req: Request, res: Response) {
        let bookingdata = {} as BookingData;
        try {
            const {
                amount,
                currency,
                customerId,
                applicationFee,
                accountId,
                user_guest,
                email_guest,
                user_host,
                email_host,
                start_date,
                end_date,
                start_time,
                end_time,
                listing_title,
            } = req.body;

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

            const params: Stripe.PaymentIntentCreateParams = {
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
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async confirmPaymentIntent(req: Request, res: Response) {
        try {
            const { paymentIntentId } = req.body;

            const paymentIntent = await this.stripe.paymentIntents.confirm(paymentIntentId);
            res.json(paymentIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async cancelPaymentIntent(req: Request, res: Response) {
        try {
            const { paymentIntentId } = req.body;

            const paymentIntent = await this.stripe.paymentIntents.cancel(paymentIntentId);
            res.json(paymentIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // Refunds

    async createRefund(req: Request, res: Response) {
        try {
            const { paymentIntentId, amount, accountId } = req.body;

            const params: Stripe.RefundCreateParams = {
                payment_intent: paymentIntentId,
                amount,
            };

            const refund = accountId
                ? await this.stripe.refunds.create(params, { stripeAccount: accountId })
                : await this.stripe.refunds.create(params);

            res.json(refund);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async createSetupIntent(req: Request, res: Response) {
        try {
            const { customerId } = req.body;

            const setupIntent = await this.stripe.setupIntents.create({
                customer: customerId,
                payment_method_types: ['card'],
            });

            res.json(setupIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async confirmSetupIntent(req: Request, res: Response) {
        try {
            const { setupIntentId } = req.body;

            const setupIntent = await this.stripe.setupIntents.confirm(setupIntentId);
            res.json(setupIntent);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // Webhook

    async handleWebhook(req: Request, res: Response, endpointSecret: string) {
        try {
            const sig = req.headers['stripe-signature'];
            const event = this.stripe.webhooks.constructEvent(req.body, sig as string, endpointSecret);

            console.log('Webhook event received:', event.type);

            res.status(200).send({ received: true });
        } catch (err: any) {
            console.error('Webhook Error:', err.message);
            res.status(400).send(`Webhook Error: ${err.message}`);
        }
    }

    // --- Add to your StripeService class ---

    // Create a Connected Standard Account
    async createStandardAccount(req: Request, res: Response) {
        try {
            const { email, country = 'FR' } = req.body;

            const account = await this.stripe.accounts.create({
                type: 'standard',
                country,
                email,
                business_type: 'individual', // or 'company'
            });

            res.json(account);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // Generate an Account Link for Onboarding
    async createStandardAccountLink(req: Request, res: Response) {
        try {
            const { accountId, refreshUrl, returnUrl } = req.body;

            const accountLink = await this.stripe.accountLinks.create({
                account: accountId,
                refresh_url: refreshUrl,
                return_url: returnUrl,
                type: 'account_onboarding',
            });

            res.json(accountLink);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // Retrieve a Connected Account
    async retrieveAccount(req: Request, res: Response) {
        try {
            const { accountId } = req.query;

            const account = await this.stripe.accounts.retrieve(accountId as string);

            res.json(account);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // ✅ Create a Connected Express Account
    async createExpressAccount(req: Request, res: Response) {
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

            const state = uuidv4();

            res.json(account);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // Generate an Account Link for Express Onboarding
    async createExpressAccountLink(req: Request, res: Response) {
        try {
            const { accountId, refreshUrl, returnUrl } = req.body;

            const accountLink = await this.stripe.accountLinks.create({
                account: accountId,
                refresh_url: refreshUrl,
                return_url: returnUrl,
                type: 'account_onboarding',
            });

            res.json(accountLink);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }


    // OPTIONAL - Manual Transfer to Connected Account
    async createTransfer(req: Request, res: Response) {
        try {
            const { amount, currency, destinationAccountId } = req.body;

            const transfer = await this.stripe.transfers.create({
                amount,
                currency,
                destination: destinationAccountId,
            });

            res.json(transfer);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // OPTIONAL - List PaymentIntents
    async listPaymentIntents(req: Request, res: Response) {
        try {
            const { limit = 10 } = req.query;

            const paymentIntents = await this.stripe.paymentIntents.list({
                limit: Number(limit),
            });

            res.json(paymentIntents);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    // OPTIONAL - List Charges
    async listCharges(req: Request, res: Response) {
        console.log('listCharges');
        try {
            const { limit = 10 } = req.query;

            const charges = await this.stripe.charges.list({
                limit: Number(limit),
            });

            res.json(charges);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async listCustomAccounts(req: Request, res: Response) {
        try {
            const { limit = 100 } = req.query;

            const accounts = await this.stripe.accounts.list({
                limit: Number(limit),
            });
            const customAccounts = accounts.data.filter(acc => acc.type === 'custom' || acc.type === 'express');
            res.json(customAccounts);
        } catch (error: any) {
            res.status(400).json({ error: error.message });
        }
    }

    async deleteStripeAccount(req: Request, res: Response) {
        try {
            const { stripeAccountId } = req.query;
            const deleted = await this.stripe.accounts.del(String(stripeAccountId));
            console.log(`Deleted account ${stripeAccountId}:`, deleted);
            res.json(deleted);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async getAccountStatus(req: Request, res: Response) {
        try {
            const { accountId } = req.query;
            const snap = await admin.database().ref(`/${OBJECTNAME.wnUsers}/${accountId}/stripeAccountId`).once('value');
            const stripeAccountId = snap.val();

            if (!stripeAccountId) return res.json({ connected: false });

            const account = await this.stripe.accounts.retrieve(stripeAccountId);
            res.json({
                connected: true,
                stripeAccountId: stripeAccountId,
                status: account.details_submitted ? 'Complete' : 'Incomplete',
            });
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async disconnectStripeAccount(req: Request, res: Response) {
        try {

            const { accountId } = req.query;
            const snap = await admin.database().ref(`/${OBJECTNAME.wnUsers}/${accountId}/stripeAccountId`).once('value');

            await admin.database().ref(`/${OBJECTNAME.wnUsers}/${accountId}/stripeAccountId`).remove();
            res.json({ success: true });
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async createDashboardLink(req: Request, res: Response) {
        try {
            const { stripeAccountId } = req.body;
            const link = await this.stripe.accounts.createLoginLink(stripeAccountId);
            res.json({ url: link.url });
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }

    async createRemediationLink(req: Request, res: Response) {
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
        } catch (err: any) {
            res.status(500).json({ error: err.message });
        }
    }


    setRoutes(stripeRouter: any) {
        // --- Customers ---
        stripeRouter.post('/stripe/customer', (req: Request, res: Response) => this.createCustomer(req, res));
        stripeRouter.get('/stripe/customer/:customerId', (req: Request, res: Response) => this.retrieveCustomer(req, res));
        stripeRouter.put('/stripe/customer/:customerId', (req: Request, res: Response) => this.updateCustomer(req, res));
        stripeRouter.delete('/stripe/customer/:customerId', (req: Request, res: Response) => this.deleteCustomer(req, res));

        // --- Payment Intents ---
        stripeRouter.post('/stripe/payment-intent', (req: Request, res: Response) => this.createPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/:paymentIntentId/confirm', (req: Request, res: Response) => this.confirmPaymentIntent(req, res));
        stripeRouter.post('/stripe/payment-intent/:paymentIntentId/cancel', (req: Request, res: Response) => this.cancelPaymentIntent(req, res));

        // --- Setup Intents ---
        stripeRouter.post('/stripe/setup-intent', (req: Request, res: Response) => this.createSetupIntent(req, res));
        stripeRouter.post('/stripe/setup-intent/:setupIntentId/confirm', (req: Request, res: Response) => this.confirmSetupIntent(req, res));

        // --- Refunds ---
        stripeRouter.post('/stripe/refund', (req: Request, res: Response) => this.createRefund(req, res));

        // --- Webhooks ---
        stripeRouter.post('/stripe/webhook', (req: Request, res: Response, endpointSecret: string) => this.handleWebhook(req, res, endpointSecret));

        stripeRouter.post('/stripe/standardaccount', (req: Request, res: Response) => this.createStandardAccount(req, res));               // Create Stripe Standard Account
        stripeRouter.post('/stripe/expressaccount', (req: Request, res: Response) => this.createExpressAccount(req, res));               // Create Stripe Express Account
        stripeRouter.post('/stripe/standardaccount-link', (req: Request, res: Response) => this.createStandardAccountLink(req, res));                    // Create Stripe Express Account
        stripeRouter.post('/stripe/expressaccount-link', (req: Request, res: Response) => this.createExpressAccountLink(req, res));        // Create Account Onboarding Link
        stripeRouter.get('/stripe/account', (req: Request, res: Response) => this.retrieveAccount(req, res));                // Get Account Details

        // Optional: Manual Transfers
        stripeRouter.post('/stripe/transfer', (req: Request, res: Response) => this.createTransfer(req, res));

        // Optional: Admin listing
        stripeRouter.get('/stripe/payment-intents', (req: Request, res: Response) => this.listPaymentIntents(req, res));
        stripeRouter.get('/stripe/charges', (req: Request, res: Response) => this.listCharges(req, res));
        stripeRouter.get('/stripe/listaccount', (req: Request, res: Response) => this.listCustomAccounts(req, res));
        stripeRouter.get('/stripe/deleteaccount', (req: Request, res: Response) => this.deleteStripeAccount(req, res));

        stripeRouter.get('/stripe/account-status', (req: Request, res: Response) => this.getAccountStatus(req, res));
        stripeRouter.post('/stripe/disconnect-account', (req: Request, res: Response) => this.disconnectStripeAccount(req, res));
        stripeRouter.post('/stripe/dashboard-link', (req: Request, res: Response) => this.createDashboardLink(req, res));
        stripeRouter.post('/stripe/remediation-link', (req: Request, res: Response) => this.createRemediationLink(req, res));
    }

}
