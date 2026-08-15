import { createRequestHandler } from "@react-router/cloudflare";
// @ts-ignore
import * as build from "../build/server/index.js";

const requestHandler = createRequestHandler(build as any);

export default {
  async fetch(request: Request, env: any, ctx: any) {
    return requestHandler(request, {
      cloudflare: { env, ctx },
    });
  },
};
