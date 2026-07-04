# Release 3.2 proposal payment Terms & Conditions fix

Fixes `/pay/outing-deposit-checkout` returning 400 when the checkout is created from an issued proposal.

The backend Terms & Conditions guard now checks:
1. `/bnBookings/{id}`
2. `/bnProposals/{id}`

This supports the normal customer flow:
proposal issued -> customer accepts T&C -> customer pays deposit -> booking can be finalized.

Payments remain blocked when neither the booking nor proposal has explicit customer Terms & Conditions acceptance.
