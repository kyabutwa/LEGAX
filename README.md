# LegaX

**LegaX is the full ecosystem.**

LegaX is not defined by a phone, browser, operating system, payment rail, access device, or external provider. Those are interfaces and adapters into one ecosystem.

## Foundation

`Authentication → Account → Identity → Participant → Participation → Context → Role → Capability → Authorization → Lifecycle → Action → Event → Evidence`

The platform separates authentication from authorization, capability from authority, current state from lifecycle history, and AI proposals from consequential execution.

## LegaX Core

- Account and authentication integration
- Identity
- Participant
- Participation
- Context
- Roles and capabilities
- Authorization
- Lifecycle
- Credentials
- Policy
- Places
- Events and evidence
- Shared contracts and validation
- Intelligence interfaces

## LegaServices

Every service is first-class and consumes the shared Core:

**LegaPay · LegaAccess · LegaRide · LegaNetwork · LegaBooking · LegaMarket · LegaFood · LegaHealth · LegaAds · LegaAward · LegaWork**

## Technology

- Web: Next.js + React + TypeScript
- Web runtime: Cloudflare Workers + vinext
- Mobile: React Native + Expo + TypeScript
- Platform backend: Supabase PostgreSQL, Auth, RLS, Storage, Realtime, Queues, Cron and Edge Functions
- Spatial: PostGIS
- Vector: pgvector
- CI/source: GitHub + GitHub Actions
- Mobile delivery: Expo EAS

## Non-negotiable rules

1. One global LegaX Identity can participate in many contexts.
2. Authentication is not authorization.
3. Context never grants authority.
4. Lifecycle is platform-wide.
5. Current state does not replace history.
6. AI can propose but cannot authorize consequential actions.
7. External providers are adapters, not domain authorities.
8. PostgreSQL is the canonical system of record.
9. Consequential actions are idempotent and auditable.
10. Database changes are versioned and reproducible.

See `ARCHITECTURE.md` and `docs/FOUNDATION.md` before adding features.
