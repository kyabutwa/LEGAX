# LegaX Supabase Database

Gate 02 establishes the canonical PostgreSQL domain model.

Verification uses the Supabase CLI local database and pgTAP tests. The migration is intended to apply cleanly to an empty database, and the CI gate repeats that process.

Gate 02 establishes canonical domain tables, lifecycle primitives, credentials, immutable events/evidence, idempotency, optimistic concurrency, indexes and deny-by-default RLS scaffolding.

Gate 03 will add the Supabase Auth ↔ LegaX Account relationship and authenticated access policies. It must not duplicate these domain tables.

Rules:
1. PostgreSQL is authoritative.
2. Migration files are append-only.
3. Consequential operations are idempotent and auditable.
4. Current lifecycle state is separate from lifecycle history.
5. RLS is enforcement; domain authorization remains in LegaX.
6. Services consume Core contracts rather than creating competing identity/auth/lifecycle models.
