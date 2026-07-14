# Release 3.2 offer payment Terms & Conditions fix

Fixes `/pay/outing-deposit-checkout` returning 400 when the checkout is created from an issued offer.

The backend Terms & Conditions guard now checks:
1. `/bnBookings/{id}`
2. `/bnProposals/{id}`

This supports the normal customer flow:
offer issued -> customer accepts T&C -> customer pays deposit -> booking can be finalized.

Payments remain blocked when neither the booking nor offer has explicit customer Terms & Conditions acceptance.
