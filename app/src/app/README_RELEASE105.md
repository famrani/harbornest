# Release 105 — verified Stripe payments

## Release 106 — private GCS media

- Firebase stores stable object paths such as `alegria/img/events/sunset/sunset1.jpg`.
- Firebase GET responses are scanned for image paths and resolved in one backend batch.
- Signed URLs are held in memory only and refreshed before expiration.
- If signing fails, the original Firebase response remains available to the application.

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
- Offer-to-booking conversion preserves the complete customer price, including
  the separately paid skipper; Alegria's online amount no longer replaces it.
- Direct booking entry has a dedicated boat-rental price. The entered rental is
  preserved and the skipper is added separately to the complete customer total.
- Click&Boat entry now requires only the customer amount and Alegria payout.
  The payout defaults to 76% (about 24% platform commission) and remains editable.
- Every direct/platform booking-page label now resolves from the multilingual
  `siteContent/{boatId}/{language}/externalBookings` Firebase section.
- The Release 105.18 Firebase restore rebuilds the full multilingual
  `siteContent/alegria` tree after a partial import left only `externalBookings`.
- External booking prices now remain stable after reopening. The platform customer
  amount is the boat rental, the payout remains separate, and their difference is
  the platform commission. The full outing total adds skipper and direct services.
- Existing external bookings containing the two platform amounts are corrected at
  display time even if legacy total or commission fields contain stale values.
- Payment history reads the canonical `backendpayments` ledger.
- Private GCS media paths returned by Firebase are resolved in batches through
  the backend. Signed URLs are cached in memory and are never written to Firebase.
- Payment requests preserve `boatId`/`ownerId`; the backend validates them
  against `bnFleet`, `bnBookings` and `bnProposals`.
- Public availability reads `backendcalendar/{boatId}`.
- Alegria skipper pricing is 300 € in the accompanying Firebase dump.

## Release 106.1 — zero-price offers

- A complimentary offer with all price components set to zero now remains at
  `0 €` in the editor, saved proposal, email summary and WhatsApp message.
- The pricing recalculation always replaces stale/default totals, including
  when the calculated result is exactly zero.
- New offers no longer start with a hidden `1,000 €` total.
- Zero-price offers are valid; only negative totals are rejected.
- Customer-facing previews recalculate unsaved edits before being generated.

Deploy the matching release 105 backend before this frontend.
