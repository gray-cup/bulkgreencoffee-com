import { NextRequest, NextResponse } from "@/lib/next-server-compat";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(process.cwd(), "public", "llms.txt");

  if (fs.existsSync(filePath)) {
    const content = fs.readFileSync(filePath, "utf-8");
    return new NextResponse(content, {
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  return new NextResponse("llms.txt not found", { status: 404 });
}


import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

export async function loader({ request }: LoaderFunctionArgs) {
  return GET();
}
