# Release 104 — Firebase multi-boat / multi-skipper

- Boat context resolved from `window.__BOAT_ID__`, `?boat=`, local storage, then `alegria`.
- Website content: `siteContent/{boatId}/{language}`.
- Commercial outings: `bnOutings/{boatId}/{outingId}`.
- Pricing: `bnPricingModel/{boatId}` (single source).
- Extra services: `bnFleet/{boatId}/extraServices`.
- Operational logbooks: `bnBookings/{bookingId}/operationalLog`.
- Booking/offer lists are filtered for the active boat.
- Fleet administration can add boats and skippers.
- Simplified CMS selects a boat and writes only its four business sections.

See `FIREBASE_MULTI_BOAT_MIGRATION.md` before importing the new dump.
