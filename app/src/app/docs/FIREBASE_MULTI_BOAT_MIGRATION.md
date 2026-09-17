# Firebase multi-boat migration

## Canonical roots

- `backendpayments`: global payment ledger (unchanged)
- `backendusers`: global user directory (unchanged)
- `backendfeedbacks/{feedbackId}`: feedback with `boatId` and optional `skipperId`
- `bnFleet/{boatId}`: boat, owner, defaults and extra-services catalogue
- `bnSkippers/{skipperId}`: skipper profile and `boatIds` assignments
- `bnBookings/{bookingId}`: booking, boat/skipper references, events and optional `operationalLog`
- `bnProposals/{offerId}`: offer, boat/skipper references and events
- `bnOutings/{boatId}/{outingId}`: multilingual commercial outing descriptions
- `bnPricingModel/{boatId}`: the single operational pricing model
- `siteContent/{boatId}/{language}/{section}`: all website content
- `guestInfo/{boatId}`, `proposalInfo/{boatId}`, `emailBranding/{boatId}`: boat-scoped configuration

## Removed roots

`bnAdminOutings`, `bnBookingEvents`, `bnExtraServices`, `bnNotifications`,
`bnProposalEvents`, `cmsContent`, `cmsContentMeta`, `siteContentMeta` and
`translationAudit`.

No useful data is discarded: logbooks are moved into bookings, event history is
embedded in its booking/proposal (or the boat for unlinked events), extras move
to the boat, and CMS content is merged into the canonical `siteContent` tree.

## Import

1. Back up the current Realtime Database.
2. Deploy the new back-end, then the new front-end.
3. Import `firebase-dump-release104-multiboat.json` at the database root.
4. Open **Administration → Flotte** and complete the owner/default skipper for each boat.
5. Open the CMS, select a boat, verify its four sections, then save.

The migration script is included and can be rerun on a newer export:

```bash
node migrate-firebase-multiboat.js current-export.json firebase-dump-release104-multiboat.json
```
