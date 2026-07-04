# Alegria v2 Firebase adapter - backend

This backend now reads the uploaded Firebase content object:

```text
/alegria_v2
```

The new object is **additive** and is used for:

- email templates: `/alegria_v2/i18n/{lang}/emails/...`
- tenant contact email: `/alegria_v2/tenants/alegria/brand/contactEmail`
- workflow/configuration metadata

It does **not** replace legacy operational objects. Keep existing roots such as:

- `/backendusers`
- `/bnBookings`
- `/bnPayments` or `/backendpayments`
- `/bnProposals`
- `/bnExtraServices`
- `/guestInfo`
- `/siteContent` during transition

The backend first tries `/alegria_v2`, then falls back to legacy `/siteContent` and default templates.
