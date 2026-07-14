# Alegria email templates

Backend emails are sent with Nodemailer from:

`Alegria Team <alegria.boat01@gmail.com>`

Recommended environment variables:

```env
MAIL_FROM_NAME=Alegria Team
MAIL_FROM_EMAIL=alegria.boat01@gmail.com
SMTP_HOST=...
SMTP_PORT=465
SMTP_SECURE=true
SMTP_USER=alegria.boat01@gmail.com
SMTP_PASS=...
```

Templates are read from Firebase:

`/siteContent/{fr|en|es}/emailTemplates/{offerReady|bookingConfirmed}`

A Firebase import patch is included in `firebase_emailTemplates_patch.json`.

Supported variables include:

- `{{customerName}}`
- `{{offerId}}`, `{{offerUrl}}`
- `{{bookingId}}`, `{{bookingUrl}}`
- `{{outingType}}`, `{{outingDate}}`
- `{{totalAmount}}`, `{{depositAmount}}`, `{{balanceAmount}}`
- `{{summaryHtml}}`
- `{{buttonText}}`
