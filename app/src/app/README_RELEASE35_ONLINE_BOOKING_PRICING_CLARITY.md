# Release 35 - Online Booking Pricing Clarity

Changes:
- Added a clear estimated pricing block to the right summary panel on `/reserver`.
- Shows:
  - Total boat amount
  - Total skipper amount
  - Total customer payable amount
- Keeps the detailed price estimate in step 1.
- Adds i18n labels and fallback getters so the screen works even if Firebase content is not yet updated.
- The request still does not collect payment immediately; it only clarifies the expected amount before the proposal is finalized.
