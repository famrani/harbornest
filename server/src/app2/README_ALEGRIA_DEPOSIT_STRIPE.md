# Alegria deposit Checkout endpoint

This backend now exposes a Stripe Checkout endpoint for customer deposits.

## Endpoint

`POST /api/payments/create-deposit-checkout-session`

Alias:

`POST /pay/deposit-checkout`

## Request body

```json
{
  "ownerId": "optional-connected-owner-id",
  "bookingId": "optional-booking-id",
  "customerName": "Francesco Salvati",
  "customerEmail": "manager@example.com",
  "outingDate": "2026-07-15",
  "outingType": "Full day at sea",
  "totalPrice": 1299,
  "depositAmount": 649.5,
  "currency": "eur",
  "successUrl": "https://alegriaboat.eu/deposit/success",
  "cancelUrl": "https://alegriaboat.eu/deposit/cancel"
}
```

If `depositAmount` is omitted, the backend charges 50% of `totalPrice`.

If `ownerId` is provided, the Checkout Session is created in the connected owner Standard Stripe account. If not, it uses the platform Stripe account via `STRIPE_SECRET_KEY`.

## Response

```json
{
  "ok": true,
  "url": "https://checkout.stripe.com/...",
  "id": "cs_...",
  "depositId": "...",
  "amount": 64950,
  "currency": "eur"
}
```

Redirect the customer browser to `url`.

## Firebase writes

The endpoint creates/updates:

- `/backenddeposits/{depositId}`
- `/backendbookings/{bookingId}/payment` when `bookingId` is supplied

