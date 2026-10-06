# LegaX Environment Contract

LegaX has four controlled environments:

- Development — disposable development data and development credentials.
- Preview — branch/PR validation; never production credentials.
- Staging — production-like integration environment with isolated data and credentials.
- Production — live data and live provider credentials.

Rules:

1. Production credentials are never reused in Development, Preview or Staging.
2. Database changes are versioned migrations committed to Git.
3. Schema changes are tested before promotion.
4. Environment-specific configuration is injected through deployment secret/configuration systems.
5. `.env.example` contains names and safe placeholders only.
6. Client-exposed configuration is deliberately separated from server-only secrets.
