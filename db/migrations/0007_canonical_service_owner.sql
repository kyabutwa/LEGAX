-- 0007 — remove historical service ownership default
ALTER TABLE legax.services ALTER COLUMN owner_domain SET DEFAULT 'LEGAX';
UPDATE legax.services SET owner_domain='LEGAX' WHERE owner_domain='LEGAKEYS';
