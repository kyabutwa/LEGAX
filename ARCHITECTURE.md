# LegaX Architecture Contract

LegaX is the full ecosystem. LegaX Core is shared platform infrastructure. LegaServices are first-class service domains.

Canonical flow:
Authentication → Account → Identity → Participant → Participation → Context → Role → Capability → Authorization → Lifecycle → Action → Event → Evidence

Authentication is not authorization. Capability is not authorization. Context never grants authority.

## Core
Account, Identity, Participant, Participation, Context, Role, Capability, Authorization, Lifecycle, Credential, Policy, Places, Event, Evidence.

## Services
LegaPay, LegaAccess, LegaRide, LegaNetwork, LegaBooking, LegaMarket, LegaFood, LegaHealth, LegaAds, LegaAward, LegaWork and future LegaServices.

## Lifecycle
State → Transition Request → Validation → Review when required → Verification when required → Authorization → Transition Execution → New State → Event → Evidence.

Lifecycle keeps current state plus transition, review, verification and immutable histories.

## Authority
Supabase PostgreSQL is the canonical system of record. AI, clients, caches, queues, realtime messages and external providers are not domain authorities.

AI can observe, reason, recommend, match, forecast and propose. It cannot independently authorize consequential actions.

External payment, verification, notification, maps, biometric and access providers are adapters behind explicit ports/contracts.

Services consume Core contracts and do not create competing identity, authorization or lifecycle systems.
