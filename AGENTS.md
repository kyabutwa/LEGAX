# Instructions for agents working in LegaX

## Before changing anything
1. Read this file and `README.md`.
2. Inspect the repository tree, git history, `package.json`, runtime/configuration, database migrations, CI workflows, tests, and deployment target.
3. Read the relevant canonical documents in `docs/` and `docs/services/`. Do not rely only on summaries or prior assistant messages when the repository contains the source.
4. Establish current truth from files and executed tests. Do not assume a previously reported pass is reproducible.
5. Keep this repository strictly LegaX. Do not mix RoyalUnity/TSAVO Royal Suburbs project artifacts into it.

## Canonical principles
- Identity is not Account; Account is not Participant.
- Authentication is not Authorization.
- Role, membership, context, workspace, capability, and subscription do not independently grant authority.
- Every consequential command must bind actor, context, resource, authorization, state gates, idempotency, event, and evidence as specified by the canonical contracts.
- AI, voice, search, and RAG cannot bypass authorization or become transactional truth.
- External providers are replaceable adapters. Never make an external CRM/provider the canonical LegaX domain.
- Minimize sensitive data and never centralize raw biometric templates by default.
- Fail closed for missing authorization or required canonical dependencies. Never display fake success.

## Implementation protocol
**Review → Inspect → Compare → Research → Implement → Execute → Inspect → Test → Fix → Re-execute → Verify → Deploy → Production verify.**

For each gate:
- define acceptance criteria before implementation;
- identify existing code and reuse it where correct;
- avoid duplicate docs, packages, tables, abstractions, and integrations;
- run relevant checks and inspect their real output;
- fix failures and rerun the failing checks;
- report exact changed paths, commit, commands, results, known gaps, and risks;
- use GREEN only for implemented, tested, deployed, production-verified, and accepted work.

## Technology and deployment
Do not replace the existing runtime, database, deployment platform, package manager, or CI just because another stack is familiar. Inspect the current repository and reconcile any proposed change with the canonical architecture documents first. Replit is a development workspace connected to GitHub; do not assume it is the production deployment target.

## Documentation and assets
- Treat `docs/00-product-constitution.md` and the relevant numbered canonical contract as the source for product semantics.
- Treat `docs/33-production-ui-implementation.md` as a gate-specific implementation document, not a substitute for reviewing earlier contracts.
- Preserve the existing canonical logo asset `legax-logo-transparent.png`.
- Do not invent missing document contents. Record missing or contradictory documents as explicit gaps and resolve them through a reviewed commit.
- Keep RoyalUnity materials separate from LegaX.
