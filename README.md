# LegaX

**LegaX is identity and access management living infrastructure for participating communities, organizations, people, providers, and LegaX services.** It connects identity, access, places, resources, payments, commerce, services, environment, and intelligence while keeping people and communities in control of what they authorize.

## Project status

This repository is the canonical source of truth. Replit is the cloud development workspace connected to this GitHub repository. A document, existing code, or a successful local build is not by itself proof of production readiness.

Use the truth states defined in the architecture:
- **GREEN — VERIFIED:** implemented, tested, deployed, production-verified, and accepted.
- **YELLOW — SUPPORTED:** implementation or integration support exists, but production verification is incomplete.
- **BLUE — PROPOSED:** designed but not implemented.
- **RED — FAILED:** attempted and currently not working.

The current repository is an existing implementation foundation. Inspect its actual runtime, deployment target, database adapter, migrations, workflows, and test results before changing technology or claiming any gate is green.

## Start here

1. Read `AGENTS.md` for mandatory repository and execution rules.
2. Read `docs/00-product-constitution.md` for the product constitution.
3. Review the canonical domain, relationship, state-machine, command/execution, event, and evidence contracts in `docs/`.
4. Read `docs/33-production-ui-implementation.md` for the latest production UI implementation gate.
5. Inspect `package.json`, runtime/configuration files, migrations, CI, tests, and recent workflow results before making changes.
6. Maintain a gap list: what exists, what is incomplete, what failed, and what evidence is needed to close each gate.

## Architecture documents

The `docs/` directory contains the product constitution and numbered architecture/implementation gates. The later documents cover the canonical domain and relationship models, state machines, command/execution contract, event and evidence contracts, provider adapters, community/organization/provider operating systems, security, privacy/governance, API, execution engine, database architecture, CRM, RAG, LegaServices, intelligence, conformance, UI/UX, and production UI implementation.

The `docs/services/` directory contains service-level specifications, including LegaPay, LegaAccess, LegaRide, LegaNetwork, LegaBooking, LegaMarket, LegaFood, LegaHealth, LegaAds, LegaAward, and LegaWork.

Use the actual filenames as the authoritative index; do not create duplicate architecture documents just to restate existing material. If a numbered gate is missing or incomplete, record the gap explicitly and resolve it through the established implementation protocol.

## Brand assets

The repository includes `legax-logo-transparent.png`. The production UI should reuse the canonical repository asset and should not replace it with a generated or unrelated logo. Additional brand and product images should be added only when their exact source is identified and their purpose is clear.

## Non-negotiable product principles

- Identity ≠ Account ≠ Participant.
- Authentication ≠ Authorization.
- Context changes relevance; it does not grant authority.
- Capability, role, workspace, membership, and subscription are not authorization.
- No authorization → no consequential action.
- One durable identity can participate in many relationships and contexts.
- AI can explain, retrieve, recommend, prepare, and assist; it cannot bypass authorization.
- RAG is not transactional source of truth.
- External systems are adapters, not the canonical LegaX domain model.
- No fake success, fake integrations, guessed inventory, or unverified production claims.

## Execution protocol

**Review → Inspect → Compare against canonical contracts → Research only necessary unknowns → Implement → Execute → Inspect → Test → Fix → Re-execute → Verify → Deploy → Verify production.**

For every gate, report the exact files changed, commands/tests executed, results, remaining risks, and evidence. Do not mark a gate GREEN unless its definition of done is demonstrated.

## Current implementation technology

Do not infer the stack from this document alone. The checked-in `package.json`, runtime/configuration files, migrations, and deployment workflows are the current implementation evidence. Architecture decisions and technology changes must be reconciled with the numbered architecture documents before implementation. Replit is the development environment; GitHub remains the source of truth.
