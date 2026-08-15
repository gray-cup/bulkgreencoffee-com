/// <reference types="@cloudflare/workers-types" />
/// <reference types="vite/client" />

interface Env {
  DATABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_URL?: string;
  NEXT_PUBLIC_SUPABASE_ANON_KEY?: string;
  CASHFREE_APP_ID?: string;
  CASHFREE_SECRET_KEY?: string;
}

declare module "@react-router/cloudflare" {
  interface AppLoadContext {
    cloudflare: {
      env: Env;
      ctx: ExecutionContext;
    };
  }
}
