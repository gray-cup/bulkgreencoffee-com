import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

export function getDb(d1Binding?: D1Database) {
  if (d1Binding) {
    return drizzle(d1Binding, { schema });
  }
  const globalDb = (globalThis as any).__D1_DB__;
  if (globalDb) {
    return drizzle(globalDb, { schema });
  }
  throw new Error("Cloudflare D1 Database binding 'DB' is not available in current execution context");
}

export const db = new Proxy({} as ReturnType<typeof drizzle<typeof schema>>, {
  get(_target, prop) {
    const instance = getDb();
    return (instance as any)[prop];
  },
});
