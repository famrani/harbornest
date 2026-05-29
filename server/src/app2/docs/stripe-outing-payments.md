# Alegria Stripe outing payments

## Added backend endpoints

### Create deposit checkout

`POST /pay/outing-deposit-checkout`

```json
{
  "ownerId": "OWNER_UID",
  "bookingId": "BOOKING_ID",
  "depositAmount": 500,
  "currency": "eur",
  "customerEmail": "client@example.com",
  "customerName": "Client Name",
  "customerPhone": "+336...",
  "outingType": "Journée en mer",
  "outingDate": "2026-07-15",
  "successUrl": "https://alegriaboat.eu/payment-success",
  "cancelUrl": "https://alegriaboat.eu/payment-cancel"
}
```

### Create warranty setup checkout

`POST /pay/outing-warranty-checkout`

```json
{
  "ownerId": "OWNER_UID",
  "bookingId": "BOOKING_ID",
  "warrantyAmount": 1500,
  "currency": "eur",
  "customerEmail": "client@example.com",
  "customerName": "Client Name",
  "customerPhone": "+336...",
  "outingType": "Journée en mer",
  "outingDate": "2026-07-15",
  "successUrl": "https://alegriaboat.eu/payment-success",
  "cancelUrl": "https://alegriaboat.eu/payment-cancel"
}
```

This saves a payment method. It does not charge the warranty immediately.

### Charge warranty if damage is confirmed

`POST /pay/outing-warranty-charge`

```json
{
  "ownerId": "OWNER_UID",
  "bookingId": "BOOKING_ID",
  "amount": 300,
  "currency": "eur",
  "reason": "Damaged cushion"
}
```

Protect this endpoint for owner/admin users only.

### Read payment status

`GET /pay/outing-payment-status?bookingId=BOOKING_ID`

## Firebase writes

- `/backendpayments/{paymentId}`
- `/backendbookings/{bookingId}/payments/deposit`
- `/backendbookings/{bookingId}/payments/warranty`


## Frontend aliases also supported

The backend now also accepts these Angular-friendly endpoints:

- `POST /api/payments/create-deposit-checkout-session`
- `POST /api/payments/create-warranty-checkout-session`
- `POST /api/payments/create-warranty-setup-session`
- `POST /api/payments/charge-warranty`
- `GET /api/payments/status?bookingId=...`

The older `/stripe/deposit-checkout`, `/stripe/warranty-setup`, and `/stripe/warranty-charge` aliases are also preserved.
