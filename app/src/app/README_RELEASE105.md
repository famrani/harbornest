# Release 105 — verified Stripe payments

- All payment completion screens now rely on server-side Stripe verification.
- Deposit and balance returns are no longer marked paid after a failed backend call.
- Skipper fees, extras and ad-hoc payments use a verified completion endpoint.
- A saved cash-warranty choice completes the booking's warranty step; receiving
  the physical cash remains a separate operational event.
- Booking list and booking detail now use the same canonical state engine.
  Legacy `bookingStatus: completed` and zero-amount imported payment records no
  longer make a future, unpaid reservation appear fully paid or completed.
- Payment history reads the canonical `backendpayments` ledger.
- Payment requests preserve `boatId`/`ownerId`; the backend validates them
  against `bnFleet`, `bnBookings` and `bnProposals`.
- Public availability reads `backendcalendar/{boatId}`.
- Alegria skipper pricing is 300 € in the accompanying Firebase dump.

Deploy the matching release 105 backend before this frontend.
