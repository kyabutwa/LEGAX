# LegaX — Project Context for Replit

**Purpose:** this file is a compact handoff for anyone opening the canonical `kyabutwa/LEGAX` repository in Replit. It supplements, and does not replace, the detailed numbered architecture contracts.

## Product definition

LegaX is identity and access management living infrastructure for participating communities, organizations, people, providers, and LegaX services. It connects identity, access, buildings/places/units/resources, payments, commerce, services, environment, and intelligence in one ecosystem while keeping people and communities in control of what they authorize.

The product is identity-centric, multi-context, and service-oriented. It is not a collection of unrelated apps or a generic dashboard.

## Canonical service family

- LegaPay — payments and supported commerce/payment workflows.
- LegaAccess — identity evidence, verification, credentials, context-aware authorization and access decisions.
- LegaRide — mobility.
- LegaNetwork — community and participation network.
- LegaBooking — places, availability and bookings.
- LegaMarket — marketplace and service commerce.
- LegaFood — food ordering/service workflows.
- LegaHealth — health-related service connections subject to appropriate privacy and legal requirements.
- LegaAds — governed advertising.
- LegaAward — awards/recognition.
- LegaWork — professional opportunities, profiles, proposals, work/assignments and client/freelancer relationships.
- Core platform capabilities also include community/organization/provider operating systems, CRM, chat, RAG, voice and governed intelligence.

A service is not production-ready merely because its name, document, route or button exists.

## Canonical domain and authority principles

- Identity ≠ Account ≠ Participant.
- Authentication ≠ Authorization.
- A role, relationship, membership, context, workspace, capability or subscription does not by itself grant authority.
- Context affects relevance but never silently creates permission.
- No authorization → no consequential action.
- One durable identity may hold multiple relationships and participate in many contexts.
- Personal settings, organization administration, community operations, provider operations and security administration must remain separately scoped.
- AI, RAG, chat and voice must go through the same authorization and execution rules as other interfaces.
- RAG supports knowledge retrieval; canonical database state remains the source of transactional truth.
- External systems are replaceable adapters, not the canonical LegaX domain model.
- Avoid centralized raw biometric templates by default; platform Face ID/fingerprint is a local authentication signal, not a universal identity proof.

## Canonical execution pattern

`Intent/Request → Validation → Authorization → Command → State Gates → Execution → Event → Evidence → Audit`

Every consequential workflow must define its actor, context, target resource, required authority, lifecycle/state transitions, idempotency, failure/retry/compensation behavior, event contract, evidence, and audit trail. Missing authority or required dependencies must fail closed.

## Architecture and protocol coverage

Use the numbered documents already in `docs/` as the detailed source:
- Product constitution and identity/account/authentication/authorization/access.
- Physical resources and economic/commerce.
- Lifecycle/policy, events/evidence/intelligence, and LegaServices.
- Canonical domain and relationship models, state machines, command/execution, event/evidence contracts, provider/adapter architecture.
- Community, organization and provider management network operating systems.
- Security, privacy/governance, API, core execution engine, database architecture, CRM, RAG, LegaService implementation, intelligence, conformance, UI/UX and production UI implementation.
- Service-specific definitions under `docs/services/`.

Do not assume numbering means every expected document exists. Inspect the actual tree, identify gaps (including any missing gate), and record them rather than inventing content or duplicating documents.

## Repository and technology facts to verify before coding

The current checked-in `package.json` identifies a TypeScript Cloudflare Worker application using Wrangler and `@neondatabase/serverless`. The repository also contains `db/migrations/`, CI/deployment workflows, source code, tests and the logo asset. This is the observed implementation state, not permission to blindly preserve it or to replace it.

Before changing the stack, compare:
1. The canonical database architecture document(s), including `docs/25-neon-database-architecture.md`.
2. Current migrations, database constraints, connection configuration and runtime.
3. Current deployment workflows and environment requirements.
4. Existing test/build/deployment evidence and any reported failures.
5. The intended role of Replit (cloud development) versus the production runtime.

Do not silently substitute Supabase for Neon, Cloudflare for Replit, or a different framework. If a technology decision is unresolved or contradictory, produce a short evidence-based decision record before making a consequential change. Never print or commit secrets; use environment-variable placeholders and the platform's secret manager.

## Brand assets

The repository root contains `legax-logo-transparent.png`, which is the existing canonical logo asset. Reuse it in the app. Avoid adding a duplicate copy under another name. If additional images are needed, identify the exact source and commit them with descriptive filenames and appropriate licensing/provenance notes.

## Current execution status and next work

The repository already contains a substantial architecture corpus and an existing implementation foundation. The next action is **not** to rewrite everything or immediately build more UI. First:
1. Inspect the complete repository and current branch/head.
2. Review all existing 00–33 architecture/implementation documents and the service documents; record any missing/contradictory gates.
3. Inspect source, migrations, environment variable names (never values), workflows, tests, and recent CI/deployment runs.
4. Reproduce current failures and successes.
5. Compare implementation to the canonical contracts and build a prioritized gap matrix.
6. Implement one gate at a time with testable acceptance criteria.
7. Re-run failed checks, verify deployment and real workflows, and only then mark a gate GREEN.

Use the strict truth-state rule: GREEN means implemented + tested + deployed + production-verified + accepted. Anything less must be marked with its actual incomplete state.

## Project boundary

This repository is LegaX. Do not mix RoyalUnity or TSAVO Royal Suburbs project-specific product requirements, branding, assets or documents into this repository.
