-- LegaX Gate 03: Authentication + Account
-- Supabase Auth owns credentials, sessions, email/phone/social identities and
-- recovery. LegaX owns the domain Account and links it to auth.users.

alter table core.accounts
  add constraint accounts_auth_user_fk
  foreign key (auth_user_id) references auth.users(id) on delete restrict;

create index accounts_auth_user_idx on core.accounts(auth_user_id);

create or replace function core.provision_account_for_auth_user()
returns trigger
language plpgsql
security definer
set search_path = core, public
as $$
begin
  insert into core.accounts (auth_user_id, status)
  values (new.id, 'PENDING')
  on conflict (auth_user_id) do nothing;
  return new;
end;
$$;

revoke all on function core.provision_account_for_auth_user() from public;

create trigger auth_user_account_provisioning
after insert on auth.users
for each row execute function core.provision_account_for_auth_user();

create or replace function core.current_account_id()
returns uuid
language sql
stable
security definer
set search_path = core, public
as $$
  select id from core.accounts where auth_user_id = auth.uid();
$$;

revoke all on function core.current_account_id() from public;
grant execute on function core.current_account_id() to authenticated;

create policy account_self_select
on core.accounts
for select
to authenticated
using (auth_user_id = auth.uid());

create policy account_self_update
on core.accounts
for update
to authenticated
using (auth_user_id = auth.uid())
with check (auth_user_id = auth.uid());

create policy account_identity_self_select
on core.account_identities
for select
to authenticated
using (
  account_id = core.current_account_id()
);

comment on table core.accounts is 'LegaX domain account, distinct from Supabase Auth user. Supabase Auth owns authentication credentials and sessions.';
comment on column core.accounts.auth_user_id is 'Stable link to Supabase Auth user; not a LegaX Identity or Participant.';
