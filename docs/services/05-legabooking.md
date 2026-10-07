# LegaX — LegaBooking

## LegaBooking — Reservations & Scheduling

**Canonical definition**

LegaBooking is the LegaX service responsible for coordinating governed reservations and scheduling of services, resources, places, facilities, capacity, appointments, and other time-bound commitments while preserving the distinction between availability, reservation, authorization, confirmation, fulfillment, and completion.

LegaBooking may coordinate bookings across communities, providers, organizations, and LegaServices without becoming the owner or authority of every resource it can reserve.

**Canonical flow:** Search/Request → Availability → Eligibility → Hold/Reservation → Authorization → Confirmation → Fulfillment → Completion/Cancellation/No-show → Event/Evidence.

**Core boundaries:** availability is not authorization; a temporary hold is not a confirmed booking; booking confirmation is not fulfillment; provider availability is an external assertion whose provenance must remain visible; a booking does not automatically grant physical access unless LegaAccess separately authorizes and enforces it.

**Lifecycle:** requested, held, pending, confirmed, active, completed, cancelled, expired, rejected, no-show, disputed, or domain-specific states must be governed and idempotent.

**AI boundary:** intelligence may recommend resources, predict availability, resolve scheduling conflicts, or optimize capacity, but cannot create an unauthorized commitment.

**Composition:** LegaBooking may coordinate LegaPay, LegaAccess, LegaRide, LegaFood, LegaHealth, LegaWork, or other services through explicit contracts.

**Status:** Foundational service contract — implementation intentionally deferred.