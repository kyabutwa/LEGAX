import { existsSync, readFileSync } from "node:fs";

const required = [
  "README.md","ARCHITECTURE.md","docs/FOUNDATION.md","docs/AUTHORIZATION.md",
  "docs/LIFECYCLE.md","docs/SECURITY.md","docs/ENVIRONMENTS.md",
  "supabase/README.md","supabase/migrations/.gitkeep","supabase/tests/.gitkeep",
  "pnpm-workspace.yaml","tsconfig.base.json","turbo.json",".env.example",
  "packages/core/README.md","packages/domain/README.md",
  "packages/identity/README.md","packages/authorization/README.md",
  "packages/lifecycle/README.md","packages/credentials/README.md",
  "packages/access/README.md","packages/payments/README.md",
  "packages/services/README.md","packages/contracts/README.md",
  "packages/validation/README.md","packages/ui/README.md","packages/ai/README.md",
  "apps/web/README.md","apps/mobile/README.md"
];

const missing = required.filter((path) => !existsSync(path));
if (missing.length) {
  console.error("LEGAX FOUNDATION: RED");
  missing.forEach((path) => console.error("- missing " + path));
  process.exit(1);
}

const architecture = readFileSync("ARCHITECTURE.md", "utf8");
const terms = ["Authentication","Authorization","Lifecycle","Event","Evidence","PostgreSQL","LegaService"];
const absent = terms.filter((term) => !architecture.includes(term));
if (absent.length) {
  console.error("LEGAX FOUNDATION: RED");
  absent.forEach((term) => console.error("- missing architecture term " + term));
  process.exit(1);
}

console.log("LEGAX FOUNDATION: GREEN");
