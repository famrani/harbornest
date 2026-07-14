# Release 74 — Warranty damage charges

- Charges card warranties through Stripe using the saved reusable payment method.
- Saves each successful damage charge under `bnBookings/{bookingId}/payments/warrantyCharges/{chargeId}`.
- Keeps a latest-charge summary under `payments/warrantyCharge`.
- Stores cumulative charged amount, latest amount, reason, Stripe PaymentIntent ID and timestamps.
- Mirrors the aggregate status to the offer and stores a normalized record in `backendpayments`.
- Prevents charging more than the remaining warranty amount.
