-- 0006 — canonical operating, catalog, availability and fulfillment foundation
-- Adds missing implementation primitives without replacing the existing LegaX model.

CREATE TABLE IF NOT EXISTS legax.organization_profiles (
  organization_entity_id uuid PRIMARY KEY REFERENCES legax.entities(entity_id),
  workspace_id uuid NOT NULL REFERENCES legax.workspaces(id),
  onboarding_state text NOT NULL DEFAULT 'CONFIGURING',
  governance_mode text NOT NULL DEFAULT 'EXPLICIT_AUTHORIZATION',
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS legax.provider_profiles (
  provider_entity_id uuid PRIMARY KEY REFERENCES legax.entities(entity_id),
  workspace_id uuid NOT NULL REFERENCES legax.workspaces(id),
  onboarding_state text NOT NULL DEFAULT 'CONFIGURING',
  service_mode text NOT NULL DEFAULT 'DIRECT_AND_PROVIDER_NETWORK',
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS legax.operating_teams (
  team_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_entity_id uuid NOT NULL REFERENCES legax.entities(entity_id),
  workspace_id uuid NOT NULL REFERENCES legax.workspaces(id),
  name text NOT NULL,
  team_type text NOT NULL,
  lifecycle_state text NOT NULL DEFAULT 'ACTIVE',
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS legax.team_memberships (
  team_membership_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  team_id uuid NOT NULL REFERENCES legax.operating_teams(team_id),
  participant_ref uuid NOT NULL REFERENCES legax.participants(participant_id),
  role text NOT NULL,
  status text NOT NULL DEFAULT 'ACTIVE',
  scope_ref uuid,
  valid_from timestamptz NOT NULL DEFAULT now(),
  valid_until timestamptz,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(team_id, participant_ref, role)
);

CREATE TABLE IF NOT EXISTS legax.commerce_products (
  product_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_entity_id uuid NOT NULL REFERENCES legax.entities(entity_id),
  service_id uuid REFERENCES legax.services(service_id),
  name text NOT NULL,
  description text,
  product_type text NOT NULL DEFAULT 'PHYSICAL',
  lifecycle_state text NOT NULL DEFAULT 'DRAFT',
  publication_state text NOT NULL DEFAULT 'PRIVATE',
  currency_code text,
  base_price numeric(20,6),
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  provenance jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS legax.commerce_variants (
  variant_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid NOT NULL REFERENCES legax.commerce_products(product_id),
  name text NOT NULL,
  sku text,
  price numeric(20,6),
  currency_code text,
  lifecycle_state text NOT NULL DEFAULT 'ACTIVE',
  inventory_policy text NOT NULL DEFAULT 'DENY',
  attributes jsonb NOT NULL DEFAULT '{}'::jsonb,
  provenance jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(product_id, sku)
);

CREATE TABLE IF NOT EXISTS legax.commerce_inventory (
  inventory_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  variant_id uuid NOT NULL REFERENCES legax.commerce_variants(variant_id),
  resource_id uuid REFERENCES legax.resources(resource_id),
  place_id uuid REFERENCES legax.places(place_id),
  quantity_on_hand numeric(20,6) NOT NULL DEFAULT 0,
  quantity_reserved numeric(20,6) NOT NULL DEFAULT 0,
  quantity_available numeric(20,6) GENERATED ALWAYS AS (quantity_on_hand - quantity_reserved) STORED,
  state text NOT NULL DEFAULT 'AVAILABLE',
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(variant_id, place_id)
);

CREATE TABLE IF NOT EXISTS legax.commerce_availability (
  availability_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  product_id uuid REFERENCES legax.commerce_products(product_id),
  variant_id uuid REFERENCES legax.commerce_variants(variant_id),
  place_id uuid REFERENCES legax.places(place_id),
  state text NOT NULL DEFAULT 'AVAILABLE',
  quantity_limit numeric(20,6),
  starts_at timestamptz NOT NULL DEFAULT now(),
  ends_at timestamptz,
  conditions jsonb NOT NULL DEFAULT '{}'::jsonb,
  provenance jsonb NOT NULL DEFAULT '{}'::jsonb
);

CREATE TABLE IF NOT EXISTS legax.delivery_options (
  delivery_option_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  owner_entity_id uuid NOT NULL REFERENCES legax.entities(entity_id),
  name text NOT NULL,
  method text NOT NULL,
  service_area jsonb NOT NULL DEFAULT '{}'::jsonb,
  fee numeric(20,6),
  currency_code text,
  estimated_min_minutes integer,
  estimated_max_minutes integer,
  availability_state text NOT NULL DEFAULT 'AVAILABLE',
  lifecycle_state text NOT NULL DEFAULT 'ACTIVE',
  settings jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS legax.commerce_orders (
  order_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  buyer_entity_id uuid NOT NULL REFERENCES legax.entities(entity_id),
  seller_entity_id uuid NOT NULL REFERENCES legax.entities(entity_id),
  context_entity_id uuid REFERENCES legax.entities(entity_id),
  delivery_option_id uuid REFERENCES legax.delivery_options(delivery_option_id),
  order_state text NOT NULL DEFAULT 'DRAFT',
  payment_state text NOT NULL DEFAULT 'UNPAID',
  fulfillment_state text NOT NULL DEFAULT 'UNFULFILLED',
  total_amount numeric(20,6) NOT NULL DEFAULT 0,
  currency_code text,
  idempotency_key text NOT NULL,
  correlation_id text NOT NULL,
  delivery_address jsonb NOT NULL DEFAULT '{}'::jsonb,
  provenance jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now(),
  UNIQUE(buyer_entity_id, idempotency_key)
);

CREATE TABLE IF NOT EXISTS legax.commerce_order_items (
  order_item_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES legax.commerce_orders(order_id),
  variant_id uuid NOT NULL REFERENCES legax.commerce_variants(variant_id),
  quantity numeric(20,6) NOT NULL,
  unit_price numeric(20,6) NOT NULL,
  currency_code text,
  fulfillment_state text NOT NULL DEFAULT 'UNFULFILLED',
  created_at timestamptz NOT NULL DEFAULT now()
);

CREATE TABLE IF NOT EXISTS legax.commerce_fulfillments (
  fulfillment_id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  order_id uuid NOT NULL REFERENCES legax.commerce_orders(order_id),
  delivery_option_id uuid REFERENCES legax.delivery_options(delivery_option_id),
  fulfillment_state text NOT NULL DEFAULT 'PENDING',
  dispatch_state text NOT NULL DEFAULT 'NOT_DISPATCHED',
  delivery_state text NOT NULL DEFAULT 'NOT_STARTED',
  provider_reference text,
  scheduled_from timestamptz,
  scheduled_until timestamptz,
  dispatched_at timestamptz,
  delivered_at timestamptz,
  evidence_reference uuid,
  provenance jsonb NOT NULL DEFAULT '{}'::jsonb,
  created_at timestamptz NOT NULL DEFAULT now(),
  updated_at timestamptz NOT NULL DEFAULT now()
);

CREATE INDEX IF NOT EXISTS commerce_products_public_idx ON legax.commerce_products(publication_state, lifecycle_state);
CREATE INDEX IF NOT EXISTS commerce_variants_product_idx ON legax.commerce_variants(product_id, lifecycle_state);
CREATE INDEX IF NOT EXISTS commerce_availability_lookup_idx ON legax.commerce_availability(variant_id, state, starts_at, ends_at);
CREATE INDEX IF NOT EXISTS commerce_orders_buyer_idx ON legax.commerce_orders(buyer_entity_id, created_at DESC);
CREATE INDEX IF NOT EXISTS commerce_orders_seller_idx ON legax.commerce_orders(seller_entity_id, created_at DESC);
CREATE INDEX IF NOT EXISTS commerce_fulfillments_state_idx ON legax.commerce_fulfillments(fulfillment_state, dispatch_state, delivery_state);
