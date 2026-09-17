# Release 104 — Firebase multi-boat / multi-skipper

- Added canonical Firebase roots for fleet, skippers, pricing, outings and boat-scoped site content.
- Booking creation resolves `boatId`, `ownerId` and `skipperId` from `bnFleet`.
- Extra services are loaded from the selected boat.
- Guest configuration and site content are boat-scoped.
- Notification history is embedded in bookings, proposals or the boat instead of global queue/event roots.
- Admin content API now addresses `siteContent/{boatId}/{language}/{section}`.

See `FIREBASE_MULTI_BOAT_MIGRATION.md` before importing the new dump.
