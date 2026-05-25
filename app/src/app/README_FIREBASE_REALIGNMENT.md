# Firebase realignment

This build is aligned with the current Firebase Realtime Database root structure:

- `/bnOutings` for public outing content
- `/bnAdminOutings` for Boat Log Manager outings
- `/bnBookings` for bookings
- `/guestInfo/guestFaq` for guest FAQ
- `/guestInfo/guestJourney` for guest journey/how-it-works
- `/backendusers` for user roles/profile
- `/backendfeedbacks` for feedbacks

Legacy `/1000/...` reads are kept only as fallback where useful, but the app now reads and writes the current root paths first.

Boat Log Manager model:

- A boat outing has one departure log.
- A boat outing has one return/arrival log.
- A boat outing has zero, one, or many anchorages.
- Anchorages are managed separately from the departure checklist.
