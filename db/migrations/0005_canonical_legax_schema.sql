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

-- PostgreSQL function bodies are stored as text and are not rewritten when
-- a referenced schema is renamed. Repair the canonical account invariant
-- function so no runtime path retains the removed legacy schema reference.
CREATE OR REPLACE FUNCTION legax.enforce_account_primary_credential()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  credential_account_id uuid;
BEGIN
  IF NEW.primary_credential_id IS NULL THEN
    RETURN NEW;
  END IF;

  SELECT account_id
    INTO credential_account_id
    FROM legax.credentials
   WHERE credential_id = NEW.primary_credential_id;

  IF credential_account_id IS NULL THEN
    RAISE EXCEPTION 'Primary credential % does not exist', NEW.primary_credential_id
      USING ERRCODE = '23503';
  END IF;

  IF credential_account_id <> NEW.account_id THEN
    RAISE EXCEPTION 'Primary credential % belongs to account %, not account %',
      NEW.primary_credential_id, credential_account_id, NEW.account_id
      USING ERRCODE = '23514';
  END IF;

  RETURN NEW;
END;
$$;


-- Repair the active-session invariant after the physical schema rename.
CREATE OR REPLACE FUNCTION legax.enforce_active_session_account()
RETURNS trigger
LANGUAGE plpgsql
AS $$
DECLARE
  account_state text;
  identity_state text;
BEGIN
  IF NEW.state <> 'ACTIVE' THEN
    RETURN NEW;
  END IF;

  SELECT a.state, i.state
    INTO account_state, identity_state
    FROM legax.accounts a
    JOIN legax.identities i ON i.identity_id = a.identity_id
   WHERE a.account_id = NEW.account_id;

  IF account_state IS DISTINCT FROM 'ACTIVE' THEN
    RAISE EXCEPTION 'LEGAX_ACTIVE_SESSION_ACCOUNT_NOT_ACTIVE';
  END IF;

  IF identity_state IS DISTINCT FROM 'ACTIVE' THEN
    RAISE EXCEPTION 'LEGAX_ACTIVE_SESSION_IDENTITY_NOT_ACTIVE';
  END IF;

  RETURN NEW;
END;
$$;


-- Final legacy-runtime scrub for functions whose source was persisted before
-- the physical schema rename. Replace both qualified schema references and
-- legacy invariant identifiers while preserving each function's signature.
DO $$
DECLARE
  r record;
  definition text;
BEGIN
  FOR r IN
    SELECT p.oid
      FROM pg_proc p
      JOIN pg_namespace n ON n.oid = p.pronamespace
     WHERE n.nspname = 'legax'
       AND (p.prosrc ILIKE '%legakeys.%' OR p.prosrc ILIKE '%LEGAKEYS_%')
  LOOP
    definition := pg_get_functiondef(r.oid);
    definition := replace(definition, 'legakeys.', 'legax.');
    definition := replace(definition, 'LEGAKEYS_', 'LEGAX_');
    EXECUTE definition;
  END LOOP;
END
$$;
