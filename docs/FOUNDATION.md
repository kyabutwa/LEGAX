# LegaX Foundation

## Gate 01 — Repository and platform contract

This gate establishes the rules that every later feature must obey.

### Required invariants

1. One global LegaX Identity can participate in many contexts.
2. Authentication, Account, Identity and Participant are distinct concepts.
3. Participation connects a Participant to a contextual relationship.
4. Context does not itself grant authority.
5. Roles define contextual responsibility; capabilities define eligible operations.
6. Authorization is a runtime decision for a concrete operation.
7. Authorization is state-aware and deny-by-default.
8. Lifecycle is platform-wide, not service-specific infrastructure.
9. Current state and lifecycle history are distinct.
10. Review and verification are distinct from state.
11. Consequential operations are idempotent and auditable.
12. Events and evidence preserve the consequential history.
13. PostgreSQL is canonical.
14. External providers are adapters.
15. AI proposes; deterministic policy and authorization decide.

### Gate sequence

01 Foundation
02 Canonical database
03 Authentication + Account
04 Identity
05 Participant
06 Participation
07 Context
08 Role + Capability
09 Authorization
10 Lifecycle
11 Event + Evidence
12 Credentials
13 LegaAccess
14 Places
15 Organizations/Providers/Services
16 LegaPay
17 LegaBooking
18 LegaMarket
19 LegaWork
20 LegaRide
21 LegaFood
22 LegaHealth
23 LegaNetwork
24 LegaAds + LegaAward
25 Intelligence
26 Web
27 Mobile
28 Production hardening
29 Full E2E
30 Release
