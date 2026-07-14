# Release 40 - Customer offer request edit/cancel notifications

Adds backend endpoints:
- POST `/api/bookings/:bookingId/notify-updated`
- POST `/api/bookings/:bookingId/notify-cancelled`
- POST `/api/offers/:offerId/notify-request-updated`
- POST `/api/offers/:offerId/notify-request-cancelled`

These send email notifications to Alegria and the customer using Firebase email templates:
- `bookingRequestUpdatedAdmin`
- `bookingRequestUpdatedCustomer`
- `bookingRequestCancelledAdmin`
- `bookingRequestCancelledCustomer`
