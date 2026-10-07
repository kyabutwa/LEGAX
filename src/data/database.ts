import { neon } from "@neondatabase/serverless";

export interface DatabaseEnv {
  DATABASE_URL?: string;
}

export interface CanonicalDatabaseStatus {
  connected: boolean;
  schema: string;
  productName: string;
  contractVersion: string;
  consequentialWritesEnabled: boolean;
}

export async function readCanonicalDatabaseStatus(
  env: DatabaseEnv
): Promise<CanonicalDatabaseStatus> {
  if (!env.DATABASE_URL) {
    throw new Error("DATABASE_NOT_CONFIGURED");
  }

  const sql = neon(env.DATABASE_URL);
  const rows = await sql<{
    schema: string;
    product_name: string;
    contract_version: string;
    consequential_writes_enabled: boolean;
  }[]>(
    "SELECT current_schema() AS schema, product_name, contract_version, consequential_writes_enabled FROM legax.runtime_contract WHERE contract_id = 1 LIMIT 1"
  );

  const row = rows[0];
  if (!row) {
    throw new Error("CANONICAL_RUNTIME_CONTRACT_NOT_FOUND");
  }

  if (row.product_name !== "LegaX") {
    throw new Error("CANONICAL_RUNTIME_CONTRACT_INVALID");
  }

  return {
    connected: true,
    schema: "legax",
    productName: row.product_name,
    contractVersion: row.contract_version,
    consequentialWritesEnabled: row.consequential_writes_enabled
  };
}
