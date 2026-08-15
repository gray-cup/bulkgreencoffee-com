import { NextRequest, NextResponse } from "@/lib/next-server-compat";
import { supabase } from "@/lib/supabase";

const RATE_LIMIT_WINDOW = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;
const RATE_LIMIT_STORAGE = new Map<
  string,
  { count: number; resetTime: number }
>();

setInterval(() => {
  const now = Date.now();
  for (const [ip, data] of RATE_LIMIT_STORAGE.entries()) {
    if (now > data.resetTime) {
      RATE_LIMIT_STORAGE.delete(ip);
    }
  }
}, RATE_LIMIT_WINDOW);

interface ProductRequestData {
  company: string;
  email: string;
  name: string;
  phone: string;
  category: string;
  productName: string;
  quantity: string;
  details: string;
  turnstileToken: string;
}

function getClientIP(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  const realIP = request.headers.get("x-real-ip");
  const cfConnectingIP = request.headers.get("cf-connecting-ip");

  if (cfConnectingIP) return cfConnectingIP;
  if (realIP) return realIP;
  if (forwarded) return forwarded.split(",")[0].trim();

  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; resetTime?: number } {
  const now = Date.now();
  const clientData = RATE_LIMIT_STORAGE.get(ip);

  if (!clientData || now > clientData.resetTime) {
    RATE_LIMIT_STORAGE.set(ip, {
      count: 1,
      resetTime: now + RATE_LIMIT_WINDOW,
    });
    return { allowed: true };
  }

  if (clientData.count >= MAX_REQUESTS_PER_WINDOW) {
    return {
      allowed: false,
      resetTime: clientData.resetTime,
    };
  }

  clientData.count++;
  RATE_LIMIT_STORAGE.set(ip, clientData);

  return { allowed: true };
}

async function verifyTurnstile(token: string, ip: string): Promise<boolean> {
  const secretKey = process.env.TURNSTILE_SECRET_KEY;
  if (!secretKey) {
    console.warn("TURNSTILE_SECRET_KEY not configured");
    return true;
  }

  try {
    const response = await fetch(
      "https://challenges.cloudflare.com/turnstile/v0/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams({
          secret: secretKey,
          response: token,
          remoteip: ip,
        }),
      },
    );

    const result = (await response.json()) as any;
    return result.success === true;
  } catch (error) {
    console.error("Turnstile verification error:", error);
    return false;
  }
}

function validateProductRequestData(data: any): {
  isValid: boolean;
  errors: string[];
} {
  const errors: string[] = [];

  if (
    !data.productName ||
    typeof data.productName !== "string" ||
    data.productName.trim().length === 0
  ) {
    errors.push("Product name is required");
  } else if (data.productName.trim().length > 100) {
    errors.push("Product name must be less than 100 characters");
  }

  if (
    !data.contactName ||
    typeof data.contactName !== "string" ||
    data.contactName.trim().length === 0
  ) {
    errors.push("Contact name is required");
  } else if (data.contactName.trim().length > 100) {
    errors.push("Contact name must be less than 100 characters");
  }

  if (!data.email || typeof data.email !== "string") {
    errors.push("Email is required");
  } else {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
      errors.push("Invalid email format");
    } else if (data.email.length > 254) {
      errors.push("Email must be less than 254 characters");
    }
  }

  if (
    !data.companyName ||
    typeof data.companyName !== "string" ||
    data.companyName.trim().length === 0
  ) {
    errors.push("Company name is required");
  } else if (data.companyName.trim().length > 100) {
    errors.push("Company name must be less than 100 characters");
  }

  return {
    isValid: errors.length === 0,
    errors,
  };
}

export async function POST(request: NextRequest) {
  try {
    const clientIP = getClientIP(request);

    const rateLimitResult = checkRateLimit(clientIP);
    if (!rateLimitResult.allowed) {
      const resetTime = rateLimitResult.resetTime || Date.now();
      const retryAfter = Math.ceil((resetTime - Date.now()) / 1000);

      return NextResponse.json(
        {
          error: "Too many requests. Please try again later.",
          retryAfter,
        },
        {
          status: 429,
          headers: {
            "Retry-After": retryAfter.toString(),
          },
        },
      );
    }

    let body: any;
    try {
      body = (await request.json()) as any;
    } catch {
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    const validation = validateProductRequestData(body);
    if (!validation.isValid) {
      return NextResponse.json(
        {
          error: "Validation failed",
          details: validation.errors,
        },
        { status: 400 },
      );
    }

    const isValidToken = await verifyTurnstile(body.turnstileToken, clientIP);
    if (!isValidToken) {
      return NextResponse.json(
        { error: "Security verification failed. Please try again." },
        { status: 400 },
      );
    }

    const requestData: ProductRequestData = {
      company: body.company.trim(),
      email: body.email.trim().toLowerCase(),
      name: body.name.trim(),
      phone: body.phone.trim(),
      category: body.category || "",
      productName: body.productName.trim(),
      quantity: body.quantity?.trim() || "",
      details: body.details?.trim() || "",
      turnstileToken: body.turnstileToken,
    };

    const { error: dbError } = await supabase.from("product_requests").insert({
      company: requestData.company,
      email: requestData.email,
      name: requestData.name,
      phone: requestData.phone,
      category: requestData.category,
      product_name: requestData.productName,
      quantity: requestData.quantity || null,
      details: requestData.details || null,
    });

    if (dbError) {
      console.error("Supabase insert error:", dbError);
      return NextResponse.json(
        { error: "Failed to save submission. Please try again." },
        { status: 500 },
      );
    }

    return NextResponse.json(
      {
        success: true,
        message: "Product request submitted successfully",
      },
      { status: 200 },
    );
  } catch (error) {
    console.error("Product request API error:", error);

    return NextResponse.json(
      {
        error: "Internal server error. Please try again later.",
      },
      { status: 500 },
    );
  }
}

export async function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}



import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  return POST(new NextRequest(request));
}
