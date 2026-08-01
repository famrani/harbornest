# Release 105 — multi-boat Stripe regression fix

## Release 106 — private GCS media

- Adds `POST /api/media/signed-urls` for batched V4 read URLs.
- Keeps `alegria_pics` private; only paths under `alegria/img/` can be signed.
- Uses Application Default Credentials and never exposes the service-account key.
- Limits requests to 200 paths and applies per-IP rate limiting.
- Requires `npm install @google-cloud/storage` in the complete server project.

## Fixed payment flows

- Deposit Checkout creation and server-verified completion.
- Remaining-balance Checkout creation and server-verified completion.
- Warranty card SetupIntent creation/completion, damage charge and release.
- Skipper-fee Checkout and verified completion.
- Extra-service and ad-hoc Checkout and verified completion.
- Refund routing to the Stripe account that owns the booking.
- Platform webhook now updates Firebase instead of only acknowledging events.
- `backendpayments` remains the global Stripe ledger and every record carries
  `boatId` and `ownerId`.

The browser no longer marks a deposit, balance, skipper fee or extra as paid
when the backend cannot verify the Checkout Session with Stripe.

## Stripe webhook configuration

For the Alegria/platform account, configure Stripe to send at least:

- `checkout.session.completed`
- `setup_intent.succeeded`
- `payment_intent.succeeded`
- `payment_intent.payment_failed`

to:

`https://<backend-host>/stripe/webhook`

Set the matching signing secret in `STRIPE_WEBHOOK_SECRET`.

For a connected Standard owner, use:

`https://<backend-host>/stripe/owner/<ownerId>/webhook`

and store the signing secret under:

`backendusers/<ownerId>/stripeWebhookSecret`

## Deployment order

1. Back up Firebase.
2. Deploy the backend.
3. Confirm webhook delivery returns HTTP 200.
4. Deploy the frontend.
5. Import the release 105 dump at the database root.
6. Test one low-value payment in Stripe test mode for each relevant flow.
