# Release 112 - owner-scoped operational data

Operational Firebase collections for Alegria now use the boat owner as their
parent key:

```text
backendcalendar/alegria/{date}
backendfeedbacks/alegria/{feedbackId}
bnBookings/alegria/{bookingId}
bnProposals/alegria/{proposalId}
```

The Alegria skipper key is now:

```text
bnSkippers/alegria
```

instead of `bnSkippers/alegria-default`.

All booking, offer and Stripe payment reads/writes have been updated to the
same scoped locations, preventing payment callbacks from recreating legacy
root-level records.
