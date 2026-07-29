# Release 105 — verified Stripe payments

- All payment completion screens now rely on server-side Stripe verification.
- Deposit and balance returns are no longer marked paid after a failed backend call.
- Skipper fees, extras and ad-hoc payments use a verified completion endpoint.
- A saved cash-warranty choice completes the booking's warranty step; receiving
  the physical cash remains a separate operational event.
- Booking list and booking detail now use the same canonical state engine.
  Legacy `bookingStatus: completed` and zero-amount imported payment records no
  longer make a future, unpaid reservation appear fully paid or completed.
- The renamed admin offers page resolves legacy `admin-proposals` Firebase text
  while using `admin-offers` as the canonical multilingual content path.
- Cancelled outings no longer display pending payment or warranty actions. The
  booking detail shows the recorded cancellation reason instead.
- Booking list date normalization now follows the same root/raw/payment fallback
  chain as booking detail, preventing valid imported dates from appearing empty.
- Skipper cash confirmation now follows the canonical remaining balance instead
  of stale imported `skipperPaid` flags, matching the Alegria cash workflow.
- Payment history reads the canonical `backendpayments` ledger.
- Payment requests preserve `boatId`/`ownerId`; the backend validates them
  against `bnFleet`, `bnBookings` and `bnProposals`.
- Public availability reads `backendcalendar/{boatId}`.
- Alegria skipper pricing is 300 € in the accompanying Firebase dump.

Deploy the matching release 105 backend before this frontend.
