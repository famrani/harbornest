# Alegria Backend Release 91

- Remaining-balance checkout now uses the exhaustive Offer/Booking T&C resolver.
- If acceptance exists on the offer but not on the booking, the canonical booking is backfilled before checkout.
- Payments remain allowed on or after the outing date unless the booking is cancelled or the balance is already paid.
