# LegaX — LegaRide

## LegaRide — Mobility & Transport Coordination

**Canonical definition**

LegaRide is the LegaX service responsible for coordinating governed mobility interactions among passengers, drivers, vehicle operators, fleet owners, transport providers, communities, and mobility resources, from ride requests and matching through acceptance, trip execution, completion, cancellation, pricing, payment, safety events, and evidence.

LegaRide represents trips, routes, pickup and destination contexts, vehicles, drivers, capacity, availability, requests, offers, assignments, and trip states without treating a provider's technical connection as automatic authority.

**Canonical flow:** Mobility Request → Context/Availability → Matching → Offer/Acceptance → Authorization → Trip → Safety/Operational Events → Completion → Payment/Settlement → Evidence.

**Core boundaries:** driver identity is distinct from driver authorization; vehicle registration is distinct from permission to operate a trip; location is context and evidence, not authority; matching is not acceptance; acceptance is not completion; payment initiation is not settlement.

**Safety:** service policies may require identity assurance, driver/provider verification, vehicle state, trip-specific authorization, emergency procedures, route/location controls, incident reporting, and appropriate evidence. Sensitive location information must be purpose-bound and minimized.

**AI boundary:** intelligence may match riders and drivers, estimate arrival, optimize routes, forecast demand, detect anomalies, or assist safety operations, but cannot silently authorize consequential actions.

**Composition:** LegaRide may use LegaPay for payment and other LegaServices for booking, access, network, or work relationships through explicit contracts.

**Status:** Foundational service contract — implementation intentionally deferred.