# Release 3.2 – Global translation pipe fix

This release fixes the systemic Angular runtime errors raised by templates still using `| siteText`.

Changes:
- `SiteTextPipe` is now a standalone Angular pipe.
- `HomeModule` imports `SiteTextPipe` instead of declaring it.
- All existing `| siteText` usages remain supported globally across HomeModule components.

This avoids one-by-one page fixes and restores compatibility for components such as MyBookings, BookingDetail, Bookings, Terms, AccountSummary, etc.
