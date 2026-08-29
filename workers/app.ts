import { createRequestHandler } from "@react-router/cloudflare";
// @ts-ignore
import * as build from "../build/server/index.js";

const requestHandler = createRequestHandler({ build: build as any });

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
    // src/db/index.ts reads the D1 binding off this global (see getDb()).
    // ponytail: same binding every request, so cross-request reuse is fine.
    (globalThis as any).__D1_DB__ = env.DB;
    return requestHandler({
      request,
      env,
      ctx,
      waitUntil: ctx.waitUntil.bind(ctx),
      passThroughOnException: ctx.passThroughOnException
        ? ctx.passThroughOnException.bind(ctx)
        : () => {},
    });
  },
};

