# LegaX — LegaRide

## 13.3 — LegaRide Advanced Service Contract

### Canonical definition

LegaRide is the governed mobility coordination service connecting passengers, drivers, vehicle operators, fleets, transport providers, communities, and mobility resources through request, matching, offer, acceptance, trip execution, safety, fare, payment, completion, cancellation, incident, and dispute lifecycles.

LegaRide coordinates mobility; it does not automatically become the legal authority for licensing, vehicle ownership, driver qualification, road regulation, or transport regulation. External authorities and providers retain authority over facts they legally control.

### Domain model

Core objects: RiderParticipation, DriverParticipation, ProviderParticipation, Vehicle, VehicleCredential, DriverCredentialReference, MobilityRequest, TripOffer, Match, Assignment, Pickup, Route, Stop, Trip, Fare, FareRule, TripState, SafetyIncident, Cancellation, NoShow, Rating/Review, PaymentReference, and Dispute.

A driver identity is distinct from driver eligibility and authorization. A vehicle identity is distinct from permission to perform a particular trip. A route is context, not authority.

### Trip lifecycle

**REQUESTED → MATCHING → OFFERED → ACCEPTED → DRIVER_EN_ROUTE → ARRIVED → PASSENGER_ONBOARD → IN_TRANSIT → COMPLETED**

Exceptional states include **CANCELLED, NO_SHOW, REJECTED, EXPIRED, INTERRUPTED, INCIDENT, DISPUTED, UNKNOWN**.

Transitions must preserve timestamps, actor, context, policy, location precision appropriate to purpose, and evidence.

### Matching and offers

Matching considers governed inputs such as location, capacity, vehicle class, availability, service level, accessibility requirements, provider rules, safety constraints, and pricing. Matching creates a proposal; it does not itself create a contract or authorization.

An offer has explicit expiry, price/fare basis, provider, trip context, and acceptance semantics.

### Fare and payment

Fares may depend on distance, time, zone, service class, surge/availability policy, waiting time, cancellation rules, tolls, or other governed rules. LegaRide must preserve the fare calculation inputs and version used for a consequential price.

Payment is delegated to LegaPay through explicit contracts. Trip completion must not be inferred solely from payment success.

### Safety

Safety controls may include driver/provider verification, vehicle eligibility, trip-specific risk evaluation, emergency mechanisms, trusted contacts where legitimately supported, incident reporting, route deviation detection, and post-trip investigation. Safety signals remain signals unless a governed policy converts them into an action.

### Location and tracking

Location is contextual and potentially sensitive. LegaRide must separate requested pickup/destination, operational positioning, historical location evidence, and derived analytics. Retention and precision must be purpose-bound.

### Provider integration

Provider adapters must define vehicle/driver mapping, trip creation, acceptance, cancellation, location events, fare semantics, completion, provider transaction IDs, webhook authenticity, reconciliation, outage behavior, and dispute handling.

### Intelligence

AI may match trips, estimate arrival, optimize routes, predict demand, identify anomalies, assist incident triage, and recommend service levels. It cannot silently deny a person a consequential mobility opportunity or authorize a trip outside policy.

### Advanced invariants

1. Match ≠ offer.
2. Offer ≠ acceptance.
3. Acceptance ≠ trip completion.
4. Location ≠ identity.
5. Location ≠ authority.
6. Driver identity ≠ driver eligibility.
7. Vehicle identity ≠ operating authorization.
8. Fare calculation must be reproducible from governed inputs/version.
9. Provider completion ≠ automatic settlement.
10. Safety signals are not authority without policy.
11. Trip cancellation/refund semantics are explicit.
12. Duplicate ride commands cannot create duplicate trips.

**Standards alignment:** mobility interoperability should be designed to map to appropriate public-transport and fare specifications where relevant; GTFS supports structured fare products, media, and fare rules.

**Status:** Advanced service contract — ready for trip, fare, provider-adapter, policy, event, and operational implementation.