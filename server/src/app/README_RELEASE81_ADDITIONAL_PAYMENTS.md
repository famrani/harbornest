# Release 81 — Additional payments backend

- Allows `ad_hoc` Stripe Checkout payments without a booking id.
- Booking terms validation is applied only when a booking is attached.
- Stores all payments in `backendpayments`.
- Optionally indexes standalone payments under `backendusers/{uid}/payments`.
- Stripe webhook marks standalone payments as paid without writing to an empty booking path.
