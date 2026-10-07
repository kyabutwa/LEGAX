begin;
select plan(14);

select ok(to_regclass('auth.users') is not null,'Supabase Auth users table exists');

select ok(exists(select 1 from pg_constraint where conname='accounts_auth_user_fk'),'account links to auth user');
select ok(exists(select 1 from pg_constraint where conname='accounts_auth_user_id_key'),'auth user link is unique');

select ok(exists(select 1 from pg_trigger where tgname='auth_user_account_provisioning'),'auth user provisions domain account');

select ok(exists(select 1 from pg_proc where proname='current_account_id'),'current account helper exists');

select ok(
  exists(select 1 from pg_policies where schemaname='core' and tablename='accounts' and policyname='account_self_select'),
  'account self-select policy exists'
);
select ok(
  exists(select 1 from pg_policies where schemaname='core' and tablename='accounts' and policyname='account_self_update'),
  'account self-update policy exists'
);
select ok(
  exists(select 1 from pg_policies where schemaname='core' and tablename='account_identities' and policyname='account_identity_self_select'),
  'account identity self-select policy exists'
);

select ok(
  exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
    where n.nspname='core' and p.proname='provision_account_for_auth_user'),
  'provisioning function exists'
);

select ok(
  (select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace
   where n.nspname='core' and c.relname='accounts'),
  'accounts RLS remains enabled'
);

select ok(
  not exists(select 1 from pg_policies where schemaname='core' and tablename='accounts' and policyname='legax_gate02_deny_all'),
  'Gate 02 deny policy is replaced by Gate 03 account policies'
);

select ok(
  exists(select 1 from pg_trigger t join pg_class c on c.oid=t.tgrelid join pg_namespace n on n.oid=c.relnamespace
    where n.nspname='auth' and c.relname='users' and t.tgname='auth_user_account_provisioning'),
  'trigger is attached to auth.users'
);

select ok(
  exists(select 1 from pg_proc p join pg_namespace n on n.oid=p.pronamespace
    where n.nspname='core' and p.proname='current_account_id' and p.prosecdef),
  'current account helper is security definer'
);

select * from finish();
rollback;
