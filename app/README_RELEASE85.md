# Release 85 — Payments & bookings premium UI

Changes:
- My Payments is fully driven by Firebase keys under `siteContent.<lang>.accountSummary.payments`.
- Customer name is displayed in booking selectors, selected booking summaries and payment cards.
- Booking cards show customer identity, passenger count, date, reference and payment progress.
- Technical `auto.home.account-summary...` labels were removed from the payment page.
- New translations added for fr, en, es, it, de, nl and ru.

Build note:
The uploaded archive did not contain the Angular CLI binary under `node_modules/.bin`, so a full `ng build` could not be executed in this environment. Source braces and modified templates were checked before packaging.
