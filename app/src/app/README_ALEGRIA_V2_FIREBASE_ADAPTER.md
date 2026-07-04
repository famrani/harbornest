# Alegria v2 Firebase adapter

This frontend now supports the uploaded Firebase content object:

```text
/alegria_v2
```

The new object is **additive**. It is used for:

- i18n text (`/alegria_v2/i18n/{lang}`)
- tenant/brand settings (`/alegria_v2/tenants/alegria`)
- marinas and workflow rules
- feature flags

It does **not** replace legacy operational objects. Keep existing objects such as:

- `/backendusers`
- `/bnBookings`
- `/bnPayments` or `/backendpayments`
- `/bnProposals`
- `/bnExtraServices`
- `/guestInfo`
- `/siteContent` during transition

`SiteContentService` first tries `/alegria_v2`, then falls back to legacy `/siteContent`, then local `SITE_CONTENT`.
