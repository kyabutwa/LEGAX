# LegaX — Phase 33 UI/UX Production Implementation

## Purpose

Phase 33 turns the canonical UI/UX architecture in Phases 31–32 into an executable application interface without creating a parallel identity, authorization, execution, event, evidence or source-of-truth system.

This closes two runtime gaps found during implementation review:

1. **General LegaX UI/UX shell** — shared navigation, responsive layout, semantic structure, shared visual tokens, state conventions and context-oriented destinations.
2. **People UI** — a dedicated People surface for identity, participation and governed relationships.

## Implemented

### General shell

Implemented in `src/ui/page.ts` and `src/ui/app-shell.ts`.

The shared page renderer provides:
- semantic primary navigation;
- Overview, Services, Places, People, Activity and Account destinations;
- shared responsive design tokens and components;
- mobile adaptation;
- visible keyboard focus;
- reduced-motion handling;
- active navigation state;
- explicit HTML response headers.

### People

Implemented in `src/ui/people.ts` and routed at `GET /people`.

The surface provides:
- People heading and purpose;
- governed search/filter controls;
- relationship filter;
- explicit context-required state;
- safe empty state when authoritative people data is unavailable;
- identity, participation, relationship and privacy explanations;
- no fabricated person records.

## Canonical boundary

The UI is a client of LegaX contracts.

**UI PRESENTS AUTHORITY; UI DOES NOT CREATE AUTHORITY.**

People visibility does not grant permission. Identity is not account, participation or authority. The UI does not create backend people records or execute consequential commands.

## Integration

- `GET /` → General LegaX shell.
- `GET /people` → People UI.
- Existing API routes remain unchanged and fail closed.

The shared renderer prevents separate UI surfaces from drifting into competing navigation, styling or security semantics.

## Verification

Required sequence:

**DOCUMENTATION → IMPLEMENTATION → AUTOMATED TESTS → TYPECHECK → BUILD → DEPLOY → LIVE ROUTE CHECK → RE-INSPECTION**

A green build proves the artifact builds and its automated checks pass; it does not by itself prove full LegaX production conformance.

## Non-goals

This step does not invent authentication, authorization, People APIs, identity evidence, or consequential People commands. Those remain governed by the canonical architecture and are added only with their required backend contracts.
