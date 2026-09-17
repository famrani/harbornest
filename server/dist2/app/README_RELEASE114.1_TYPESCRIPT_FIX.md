# Release 114.1 - TypeScript tenant-scope fix

This maintenance release fixes the 23 `TS2304: Cannot find name 'boatId'`
errors introduced in `services/stripeAdn.ts` during the Stripe Connect
multi-boat conversion.

The affected payment methods now resolve their local tenant context through
`resolvePaymentContext(bookingId, ownerId)`. Error handlers use a separately
resolved `failedBoatId`, because a `boatId` declared inside a `try` block is not
visible in its `catch` block.

No Stripe secret key is added to Firebase or to the frontend. Owner payments
continue to use Stripe Connect account IDs, with the platform secret remaining
server-side.
