# LegaX Security Contract

Deny by default. Least privilege. Defense in depth.

Supabase Auth handles authentication/session mechanics. LegaX maintains its own Account, Identity, Participant and Participation domain records.

Every exposed database table requires deliberate RLS configuration and allow/deny tests. RLS is a database enforcement layer; it does not replace LegaX domain authorization.

Never commit secrets. Server-only credentials never reach clients.

Credentials require issuer, subject, purpose, scope, status, expiration and revocation semantics. Presented credentials use replay protection where applicable.

Authorization decisions, consequential actions, lifecycle transitions and provider callbacks require traceable events/evidence.

AI output is untrusted proposal data until deterministic validation and authorization accept it.
