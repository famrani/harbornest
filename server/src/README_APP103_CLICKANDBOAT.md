# app103 Click&Boat / platform bookings

This backend package is kept compatible with the current frontend flow.

The frontend creates platform booking proposals in Firebase under `bnProposals` and uses the existing payment checkout endpoints for:
- remaining Alegria services payable online,
- ad hoc payments,
- warranty setup/charge flows.

No backend database schema migration is required for this first app103 version.
