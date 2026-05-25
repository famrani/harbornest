# Outing payment component

This is a frontend example component for Alegria guest payments.

It expects a backend with these endpoints:

- `POST /pay/outing-deposit-checkout`
- `POST /pay/outing-warranty-checkout`
- `GET /pay/outing-payment-status`
- `POST /pay/outing-warranty-charge` admin/owner only

Typical usage:

```html
<app-outing-payment [payment]="{
  ownerId: 'OWNER_UID',
  bookingId: booking.bookingId,
  customerEmail: booking.customer.email,
  customerName: booking.customer.fullName,
  customerPhone: booking.customer.phone,
  outingType: booking.outingType,
  outingDate: booking.date,
  depositAmount: 500,
  warrantyAmount: 1500
}"></app-outing-payment>
```

The deposit is paid immediately. The warranty flow saves the card with Stripe Checkout setup mode.
The admin/owner can later charge part or all of the warranty through `/pay/outing-warranty-charge` if damage is confirmed.
