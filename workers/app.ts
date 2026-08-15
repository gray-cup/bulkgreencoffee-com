import { createRequestHandler } from "@react-router/cloudflare";
// @ts-ignore
import * as build from "../build/server/index.js";

const requestHandler = createRequestHandler({ build: build as any });

export default {
  async fetch(request: Request, env: any, ctx: ExecutionContext) {
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

