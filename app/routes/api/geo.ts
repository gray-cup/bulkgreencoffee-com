import { NextRequest, NextResponse } from "@/lib/next-server-compat";

export async function GET(request: NextRequest) {
  try {
    const country =
      request.headers.get("cf-ipcountry") ||
      request.headers.get("x-vercel-ip-country") ||
      null;

    return NextResponse.json({ country });
  } catch {
    return NextResponse.json({ country: null });
  }
}



import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  return GET(new NextRequest(request));
}
