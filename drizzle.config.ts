import type { Config } from "drizzle-kit";
import { env } from "@/lib/env.mjs";

export default {
  schema: "./lib/db/schema",
  out: "./lib/db/migrations",
  dbCredentials: {
    url: env.DATABASE_URL,
  },
  dialect: "sqlite",
} satisfies Config;