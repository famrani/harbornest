# Release 36 - Online booking request emails

When a customer submits an online booking request, the frontend now calls `/api/proposals/:proposalId/notify-request-created`.

The backend sends:
- an admin notification to `ALEGRIA_ADMIN_EMAIL`, `MAIL_TO`, or `alegria.boat01@gmail.com`
- a customer acknowledgement when a customer email is present

New Firebase templates are included in `firebase_booking_request_email_templates_all_languages.json` for `fr`, `en`, `es`, `it`, `de`, `nl`, and `ru` under both:
- `/siteContent/{lang}/emailTemplates/{bookingRequestAdmin|bookingRequestCustomer}`
- `/alegria_v2/i18n/{lang}/emails/{bookingRequestAdmin|bookingRequestCustomer}`
