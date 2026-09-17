# Release 115 — boat-scoped links

Emails and backend-generated public links now derive their URL from the record's
`boatId`. Offer, booking, customer and administrator links therefore remain inside
the correct tenant, for example `/alegria/offer/...` or `/poseidon/bookings/...`.

Email templates are also read from `siteContent/{boatId}/{language}/emailTemplates`.
Legacy unscoped template paths remain a migration fallback only.

