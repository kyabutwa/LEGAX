begin;
select plan(28);

select ok(to_regnamespace('core') is not null,'core schema exists');
select ok(to_regnamespace('lifecycle') is not null,'lifecycle schema exists');
select ok(to_regnamespace('audit') is not null,'audit schema exists');
select ok(to_regnamespace('security') is not null,'security schema exists');

select ok(to_regclass('core.accounts') is not null,'accounts');
select ok(to_regclass('core.identities') is not null,'identities');
select ok(to_regclass('core.participants') is not null,'participants');
select ok(to_regclass('core.participations') is not null,'participations');
select ok(to_regclass('core.contexts') is not null,'contexts');
select ok(to_regclass('core.roles') is not null,'roles');
select ok(to_regclass('core.capabilities') is not null,'capabilities');
select ok(to_regclass('core.authorization_decisions') is not null,'authorization_decisions');
select ok(to_regclass('lifecycle.states') is not null,'states');
select ok(to_regclass('lifecycle.transitions') is not null,'transitions');
select ok(to_regclass('lifecycle.transition_policies') is not null,'transition_policies');
select ok(to_regclass('lifecycle.transition_requests') is not null,'transition_requests');
select ok(to_regclass('lifecycle.lifecycle_bindings') is not null,'lifecycle_bindings');
select ok(to_regclass('lifecycle.reviews') is not null,'reviews');
select ok(to_regclass('lifecycle.verifications') is not null,'verifications');
select ok(to_regclass('lifecycle.state_history') is not null,'state_history');
select ok(to_regclass('lifecycle.transition_history') is not null,'transition_history');
select ok(to_regclass('lifecycle.review_history') is not null,'review_history');
select ok(to_regclass('lifecycle.verification_history') is not null,'verification_history');
select ok(to_regclass('core.credentials') is not null,'credentials');
select ok(to_regclass('audit.events') is not null,'events');
select ok(to_regclass('audit.evidence') is not null,'evidence');
select ok(to_regclass('audit.idempotency_keys') is not null,'idempotency_keys');
select ok((select relrowsecurity from pg_class c join pg_namespace n on n.oid=c.relnamespace where n.nspname='core' and c.relname='accounts'),'accounts RLS enabled');

select * from finish();
rollback;
