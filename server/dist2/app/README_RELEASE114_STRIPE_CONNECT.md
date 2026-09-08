# Release 114 - Stripe Connect for multiple boat owners

HarborDirect uses one platform secret from `.env`. Boat owners never provide a
secret API key. The safe connected account id is stored at:

```text
backendowners/{ownerId}/stripeConnect/accountId
```

The boat resolves its payment owner through:

```text
bnFleet/{boatId}/ownerId
```

Owner outing payments are direct connected-account charges with no application
fee. HarborDirect setup fees and subscriptions stay on the platform account.

Endpoints:

```text
GET  /stripe/connect/authorize?ownerId=...&returnUrl=...&refreshUrl=...
GET  /owner/stripe/status?ownerId=...
POST /stripe/connect/deauthorize
POST /stripe/connect/webhook
POST /stripe/webhook
```

Configure the first webhook for events from connected accounts and the second
for platform subscription events. Both endpoints require the unparsed raw body.

Legacy `stripeStandard.access_token`, `refresh_token` and per-owner webhook
secrets are no longer used and must not be imported into Firebase.
