# Release 80 — Offer domain refactor

Backend service/domain naming and public endpoints now use Offer/Offers:
- /api/offers/:offerId/...
- offerId / offerUrl in current API payloads
- Offer wording in notifications and templates

The existing Firebase persistence collection bnProposals and historical proposal* financial fields are deliberately preserved as a compatibility layer so existing records continue to work without a database migration.
