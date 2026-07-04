# Alegria v2.0 workflow / finance alignment

This release adds a shared frontend financial engine and workflow engine:

- `home/bookings/booking-financial.service.ts`
- `home/bookings/booking-workflow.service.ts`

The booking detail page now derives customer status, payment status, and completion from four explicit steps only:

1. Terms & Conditions explicitly accepted by customer.
2. Alegria revenue fully paid.
3. Skipper revenue fully paid.
4. Warranty method completed.

No booking is considered confirmed unless all four steps are complete. Payments and warranty actions are disabled until Terms & Conditions are formally accepted.

The file `firebase/alegria-v2-content-i18n.json` contains Firebase-ready text/configuration keys in FR, EN, ES, IT, DE, NL and RU.
