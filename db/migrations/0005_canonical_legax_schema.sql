-- LegaX canonical data foundation migration 0005
-- Tested on an isolated Neon branch before production application.
-- This migration removes the legacy physical schema name without duplicating
-- the existing 128-table source of truth.
ALTER SCHEMA legakeys RENAME TO legax;

UPDATE legax.runtime_contract
SET product_name = 'LegaX',
    canonical_schema = 'legax',
    updated_at = now()
WHERE contract_id = 1;

ALTER TABLE legax.runtime_contract
  ADD CONSTRAINT runtime_contract_product_name_chk
  CHECK (product_name = 'LegaX');
