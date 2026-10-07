-- LegaX Gate 02: Canonical Database
create extension if not exists pgcrypto;

create schema if not exists core;
create schema if not exists lifecycle;
create schema if not exists audit;
create schema if not exists security;

create or replace function core.set_updated_at()
returns trigger language plpgsql as $$
begin new.updated_at = now(); return new; end;
$$;

create table core.accounts (
  id uuid primary key default gen_random_uuid(),
  auth_user_id uuid unique,
  status text not null default 'ACTIVE' check (status in ('PENDING','ACTIVE','SUSPENDED','CLOSED')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table core.identities (
  id uuid primary key default gen_random_uuid(),
  identity_type text not null default 'PERSON' check (identity_type in ('PERSON','ORGANIZATION','PROVIDER','SYSTEM')),
  display_name text,
  status text not null default 'ACTIVE' check (status in ('ACTIVE','SUSPENDED','DEACTIVATED')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table core.participants (
  id uuid primary key default gen_random_uuid(),
  identity_id uuid not null unique references core.identities(id),
  status text not null default 'ACTIVE' check (status in ('PENDING','ACTIVE','SUSPENDED','INACTIVE')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table core.account_identities (
  account_id uuid not null references core.accounts(id) on delete cascade,
  identity_id uuid not null references core.identities(id),
  is_primary boolean not null default true,
  created_at timestamptz not null default now(),
  primary key (account_id, identity_id)
);
create unique index account_identities_one_primary on core.account_identities(account_id) where is_primary;

create table core.contexts (
  id uuid primary key default gen_random_uuid(),
  context_type text not null,
  name text not null,
  parent_context_id uuid references core.contexts(id),
  status text not null default 'ACTIVE' check (status in ('DRAFT','ACTIVE','SUSPENDED','ARCHIVED')),
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table core.participations (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid not null references core.participants(id),
  context_id uuid not null references core.contexts(id),
  relationship_type text not null,
  status text not null default 'ACTIVE' check (status in ('PENDING','ACTIVE','SUSPENDED','ENDED')),
  starts_at timestamptz,
  ends_at timestamptz,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  check (ends_at is null or starts_at is null or ends_at > starts_at),
  unique (participant_id, context_id, relationship_type)
);

create table core.roles (
  id uuid primary key default gen_random_uuid(),
  context_id uuid references core.contexts(id),
  code text not null,
  name text not null,
  description text,
  status text not null default 'ACTIVE' check (status in ('ACTIVE','INACTIVE')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create unique index roles_global_code_uq on core.roles(code) where context_id is null;
create unique index roles_context_code_uq on core.roles(context_id, code) where context_id is not null;

create table core.capabilities (
  id uuid primary key default gen_random_uuid(),
  code text not null unique,
  name text not null,
  description text,
  status text not null default 'ACTIVE' check (status in ('ACTIVE','INACTIVE')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table core.role_capabilities (
  role_id uuid not null references core.roles(id) on delete cascade,
  capability_id uuid not null references core.capabilities(id) on delete cascade,
  created_at timestamptz not null default now(),
  primary key (role_id, capability_id)
);

create table core.participation_roles (
  participation_id uuid not null references core.participations(id) on delete cascade,
  role_id uuid not null references core.roles(id),
  status text not null default 'ACTIVE' check (status in ('ACTIVE','INACTIVE')),
  assigned_at timestamptz not null default now(),
  revoked_at timestamptz,
  primary key (participation_id, role_id)
);

create table core.authorization_decisions (
  id uuid primary key default gen_random_uuid(),
  participant_id uuid references core.participants(id),
  participation_id uuid references core.participations(id),
  context_id uuid references core.contexts(id),
  capability_id uuid references core.capabilities(id),
  credential_id uuid,
  target_type text,
  target_id uuid,
  requested_action text not null,
  decision text not null check (decision in ('ALLOW','DENY','REQUIRES_REVIEW','REQUIRES_VERIFICATION','REQUIRES_AUTHENTICATION','EXPIRED','INVALID_CONTEXT')),
  policy_version text,
  reason_code text,
  decided_at timestamptz not null default now(),
  expires_at timestamptz,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object')
);

create table lifecycle.states (
  id uuid primary key default gen_random_uuid(),
  graph_key text not null,
  code text not null,
  name text not null,
  terminal boolean not null default false,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz not null default now(),
  unique (graph_key, code)
);

create table lifecycle.transition_policies (
  id uuid primary key default gen_random_uuid(),
  policy_key text not null unique,
  requires_review boolean not null default false,
  requires_verification boolean not null default false,
  requires_authorization boolean not null default true,
  transition_timeout interval,
  policy_version text not null default '1',
  active boolean not null default true,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz not null default now()
);

create table lifecycle.transitions (
  id uuid primary key default gen_random_uuid(),
  graph_key text not null,
  code text not null,
  from_state_id uuid not null references lifecycle.states(id),
  to_state_id uuid not null references lifecycle.states(id),
  initiating_capability_id uuid references core.capabilities(id),
  policy_id uuid references lifecycle.transition_policies(id),
  active boolean not null default true,
  created_at timestamptz not null default now(),
  unique (graph_key, code),
  check (from_state_id <> to_state_id)
);

create table lifecycle.lifecycle_bindings (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null,
  entity_id uuid not null,
  graph_key text not null,
  current_state_id uuid not null references lifecycle.states(id),
  version bigint not null default 1 check (version > 0),
  updated_at timestamptz not null default now(),
  unique (entity_type, entity_id)
);

create table lifecycle.transition_requests (
  id uuid primary key default gen_random_uuid(),
  idempotency_key text not null unique,
  entity_type text not null,
  entity_id uuid not null,
  transition_id uuid not null references lifecycle.transitions(id),
  requested_by_participant_id uuid references core.participants(id),
  expected_version bigint,
  status text not null default 'REQUESTED' check (status in ('REQUESTED','VALIDATING','PENDING_REVIEW','PENDING_VERIFICATION','PENDING_AUTHORIZATION','EXECUTING','SUCCEEDED','REJECTED','DENIED','FAILED','EXPIRED')),
  requested_at timestamptz not null default now(),
  expires_at timestamptz,
  executed_at timestamptz,
  failure_code text,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object')
);

create table lifecycle.reviews (
  id uuid primary key default gen_random_uuid(),
  transition_request_id uuid not null references lifecycle.transition_requests(id) on delete cascade,
  status text not null default 'PENDING' check (status in ('PENDING','APPROVED','REJECTED','EXPIRED')),
  reviewer_participant_id uuid references core.participants(id),
  decision_reason text,
  created_at timestamptz not null default now(),
  decided_at timestamptz
);

create table lifecycle.verifications (
  id uuid primary key default gen_random_uuid(),
  transition_request_id uuid not null references lifecycle.transition_requests(id) on delete cascade,
  verification_type text not null,
  status text not null default 'PENDING' check (status in ('PENDING','PASSED','FAILED','EXPIRED')),
  verifier_participant_id uuid references core.participants(id),
  evidence_id uuid,
  created_at timestamptz not null default now(),
  verified_at timestamptz
);

create table lifecycle.state_history (
  id uuid primary key default gen_random_uuid(),
  entity_type text not null,
  entity_id uuid not null,
  from_state_id uuid references lifecycle.states(id),
  to_state_id uuid not null references lifecycle.states(id),
  transition_request_id uuid not null references lifecycle.transition_requests(id),
  version bigint not null check (version > 0),
  changed_at timestamptz not null default now(),
  unique (entity_type, entity_id, version)
);

create table lifecycle.transition_history (
  id uuid primary key default gen_random_uuid(),
  transition_request_id uuid not null unique references lifecycle.transition_requests(id),
  outcome text not null check (outcome in ('SUCCEEDED','REJECTED','DENIED','FAILED','EXPIRED')),
  executed_at timestamptz,
  error_code text,
  created_at timestamptz not null default now()
);

create table lifecycle.review_history (
  id uuid primary key default gen_random_uuid(),
  review_id uuid not null references lifecycle.reviews(id),
  from_status text,
  to_status text not null,
  changed_at timestamptz not null default now()
);

create table lifecycle.verification_history (
  id uuid primary key default gen_random_uuid(),
  verification_id uuid not null references lifecycle.verifications(id),
  from_status text,
  to_status text not null,
  changed_at timestamptz not null default now()
);

create table core.credentials (
  id uuid primary key default gen_random_uuid(),
  subject_type text not null,
  subject_id uuid not null,
  issuer_type text not null,
  issuer_id uuid,
  purpose text not null,
  scope jsonb not null default '{}'::jsonb check (jsonb_typeof(scope) = 'object'),
  status text not null default 'ACTIVE' check (status in ('PENDING','ACTIVE','EXPIRED','REVOKED','SUSPENDED')),
  valid_from timestamptz not null default now(),
  expires_at timestamptz,
  revoked_at timestamptz,
  credential_fingerprint text unique,
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object'),
  created_at timestamptz not null default now(),
  check (expires_at is null or expires_at > valid_from),
  check (revoked_at is null or status = 'REVOKED')
);

create table audit.events (
  id uuid primary key default gen_random_uuid(),
  event_type text not null,
  entity_type text,
  entity_id uuid,
  actor_participant_id uuid references core.participants(id),
  correlation_id uuid,
  causation_id uuid references audit.events(id),
  occurred_at timestamptz not null default now(),
  payload jsonb not null default '{}'::jsonb check (jsonb_typeof(payload) = 'object'),
  event_version integer not null default 1 check (event_version > 0)
);

create table audit.evidence (
  id uuid primary key default gen_random_uuid(),
  evidence_type text not null,
  entity_type text,
  entity_id uuid,
  event_id uuid references audit.events(id),
  source_type text not null,
  source_reference text,
  content_hash text,
  captured_at timestamptz not null default now(),
  metadata jsonb not null default '{}'::jsonb check (jsonb_typeof(metadata) = 'object')
);

create table audit.idempotency_keys (
  id uuid primary key default gen_random_uuid(),
  scope text not null,
  key text not null,
  request_hash text,
  status text not null default 'IN_PROGRESS' check (status in ('IN_PROGRESS','SUCCEEDED','FAILED')),
  response_code integer,
  response_payload jsonb,
  created_at timestamptz not null default now(),
  completed_at timestamptz,
  unique (scope, key)
);

create index participations_participant_idx on core.participations(participant_id);
create index participations_context_idx on core.participations(context_id);
create index participation_roles_role_idx on core.participation_roles(role_id);
create index authorization_decisions_subject_idx on core.authorization_decisions(participant_id, decided_at desc);
create index authorization_decisions_target_idx on core.authorization_decisions(target_type, target_id, decided_at desc);
create index lifecycle_bindings_state_idx on lifecycle.lifecycle_bindings(current_state_id);
create index transition_requests_entity_idx on lifecycle.transition_requests(entity_type, entity_id, requested_at desc);
create index transition_requests_status_idx on lifecycle.transition_requests(status);
create index state_history_entity_idx on lifecycle.state_history(entity_type, entity_id, version desc);
create index credentials_subject_idx on core.credentials(subject_type, subject_id);
create index credentials_status_idx on core.credentials(status, expires_at);
create index events_entity_idx on audit.events(entity_type, entity_id, occurred_at desc);
create index events_correlation_idx on audit.events(correlation_id);
create index evidence_entity_idx on audit.evidence(entity_type, entity_id, captured_at desc);

create trigger accounts_updated_at before update on core.accounts for each row execute function core.set_updated_at();
create trigger identities_updated_at before update on core.identities for each row execute function core.set_updated_at();
create trigger participants_updated_at before update on core.participants for each row execute function core.set_updated_at();
create trigger contexts_updated_at before update on core.contexts for each row execute function core.set_updated_at();
create trigger participations_updated_at before update on core.participations for each row execute function core.set_updated_at();
create trigger roles_updated_at before update on core.roles for each row execute function core.set_updated_at();
create trigger capabilities_updated_at before update on core.capabilities for each row execute function core.set_updated_at();
create trigger lifecycle_bindings_updated_at before update on lifecycle.lifecycle_bindings for each row execute function core.set_updated_at();

create or replace function audit.prevent_mutation()
returns trigger language plpgsql as $$
begin
  raise exception 'IMMUTABLE_AUDIT_RECORD: % records cannot be changed', TG_TABLE_NAME using errcode = '42501';
end;
$$;

create trigger events_immutable before update or delete on audit.events for each row execute function audit.prevent_mutation();
create trigger evidence_immutable before update or delete on audit.evidence for each row execute function audit.prevent_mutation();

do $$
declare r record;
begin
  for r in
    select n.nspname as schema_name, c.relname as table_name
    from pg_class c join pg_namespace n on n.oid=c.relnamespace
    where n.nspname in ('core','lifecycle','audit') and c.relkind='r'
  loop
    execute format('alter table %I.%I enable row level security', r.schema_name, r.table_name);
    execute format('create policy legax_gate02_deny_all on %I.%I for all to public using (false) with check (false)', r.schema_name, r.table_name);
  end loop;
end;
$$;

alter table core.authorization_decisions
  add constraint authorization_decisions_credential_fk
  foreign key (credential_id) references core.credentials(id);

alter table lifecycle.verifications
  add constraint verifications_evidence_fk
  foreign key (evidence_id) references audit.evidence(id);

alter table lifecycle.transition_requests
  add constraint transition_requests_expected_version_ck
  check (expected_version is null or expected_version > 0);

create or replace function lifecycle.validate_graph_consistency()
returns trigger
language plpgsql
as $$
declare
  from_graph text;
  to_graph text;
begin
  select graph_key into from_graph from lifecycle.states where id = new.from_state_id;
  select graph_key into to_graph from lifecycle.states where id = new.to_state_id;
  if from_graph is null or to_graph is null or from_graph <> new.graph_key or to_graph <> new.graph_key then
    raise exception 'LIFECYCLE_GRAPH_MISMATCH';
  end if;
  return new;
end;
$$;

create trigger transitions_graph_consistency
before insert or update on lifecycle.transitions
for each row execute function lifecycle.validate_graph_consistency();

create or replace function lifecycle.validate_binding_graph()
returns trigger
language plpgsql
as $$
declare
  state_graph text;
begin
  select graph_key into state_graph from lifecycle.states where id = new.current_state_id;
  if state_graph is null or state_graph <> new.graph_key then
    raise exception 'LIFECYCLE_BINDING_GRAPH_MISMATCH';
  end if;
  return new;
end;
$$;

create trigger lifecycle_bindings_graph_consistency
before insert or update on lifecycle.lifecycle_bindings
for each row execute function lifecycle.validate_binding_graph();
