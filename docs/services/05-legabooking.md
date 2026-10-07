# LegaX — LegaBooking

## 13.5 — LegaBooking Advanced Service Contract

### Canonical definition

LegaBooking is the governed reservation and scheduling service for time-bound commitments involving services, people, providers, places, facilities, equipment, appointments, capacity, and other reservable resources.

It separates discovery, availability, eligibility, hold, reservation, authorization, confirmation, fulfillment, attendance, completion, cancellation, expiry, and dispute so that a booking cannot silently become access, payment settlement, ownership, or service completion.

### Domain model

Core objects: Resource, AvailabilityWindow, CapacityUnit, Schedule, Slot, BookingRequest, Hold, Reservation, BookingParty, Provider, PriceQuote, CancellationPolicy, Attendance, Fulfillment, NoShow, Waitlist, Recurrence, CalendarReference, PaymentReference, AccessReference, and Dispute.

### Availability semantics

Availability may be **authoritative, provider-supplied, cached, estimated, or inferred**. The source and freshness of availability must be preserved.

A search result is not a reservation. A hold temporarily protects capacity. Confirmation creates the governed commitment.

### Booking lifecycle

**REQUESTED → ELIGIBILITY_CHECK → HOLDING → AUTHORIZATION_PENDING → CONFIRMED → ACTIVE/FULFILLMENT → COMPLETED**

Exceptions: **REJECTED, EXPIRED, CANCELLED, NO_SHOW, FAILED, DISPUTED, RECONCILIATION_REQUIRED**.

### Concurrency

Reservation requires concurrency protection so two actors cannot consume the same scarce capacity beyond policy. Holds require expiry. Retries must be idempotent. Provider callbacks may arrive late or out of order and require reconciliation.

### Pricing and payment

Quotes must preserve price inputs, currency, taxes/fees where applicable, validity, pricing-policy version, and provider source. LegaPay owns payment lifecycle; LegaBooking owns the commercial reservation relationship.

### Access composition

A confirmed booking may become an input to a LegaAccess authorization request, but booking confirmation alone never opens a door or grants system access.

### Cancellation, refund and disputes

Cancellation policy is versioned and effective for the booking. Cancellation, no-show, provider cancellation, partial fulfillment, refund eligibility, and dispute are separate states and events.

### Intelligence

AI may optimize schedules, predict demand, recommend resources, resolve non-authoritative conflicts, and assist operations. It cannot reserve scarce capacity without an authorized action.

### Advanced invariants

1. Search result ≠ availability guarantee.
2. Availability ≠ reservation.
3. Hold ≠ confirmation.
4. Confirmation ≠ fulfillment.
5. Booking ≠ access.
6. Booking ≠ payment settlement.
7. Provider availability retains provenance.
8. Holds expire deterministically.
9. Scarce capacity is protected against race conditions.
10. Price quotes preserve calculation provenance.
11. Cancellation policy is versioned.
12. Duplicate commands cannot create duplicate reservations.

**Status:** Advanced service contract — ready for inventory, scheduling, reservation, concurrency, payment, access, provider, and event implementation.