# Alegria backend notification endpoint

This backend build adds the generic endpoint expected by the frontend notification service:

`POST /api/notifications/alegria`

It accepts queued notification payloads for:

- `offer_created`
- `offer_updated`
- `offer_sent`
- `booking_updated`
- `booking_confirmed`
- `payment_completed`

For each payload it:

1. normalizes recipients
2. sends an admin email to `ALEGRIA_ADMIN_EMAIL`, or `MAIL_TO`, or `alegria.boat01@gmail.com`
3. sends a customer email when `customerEmail` is present
4. updates `/bnNotifications/{eventId}` with `status = sent`
5. updates matching audit timelines under `/bnBookingEvents/{bookingId}/{eventId}` and/or `/bnProposalEvents/{offerId}/{eventId}`

Required SMTP environment variables are the same as the existing mailer:

- `SMTP_HOST`
- `SMTP_PORT`
- `SMTP_SECURE`
- `SMTP_USER`
- `SMTP_PASS`
- optional `MAIL_FROM_NAME`
- optional `MAIL_FROM_EMAIL`
- optional `ALEGRIA_ADMIN_EMAIL`
