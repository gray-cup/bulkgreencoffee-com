import { NextRequest, NextResponse } from "@/lib/next-server-compat";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { bulkgreencoffee_site } from "@/db/schema";
import { verifyCashfreeWebhookSignature } from "@/lib/cashfree";

// Cashfree fires these for both Orders and Payment Links (a link creates an
// order under the hood, keyed by the link_id we passed in at creation).
// https://www.cashfree.com/docs/ (Payments > Webhooks)
type CashfreeWebhookPayload = {
  type?: string;
  data?: {
    order?: { order_id?: string; order_amount?: number; order_currency?: string };
    payment?: {
      payment_status?: string; // SUCCESS | FAILED | PENDING | ...
      cf_payment_id?: string | number;
    };
    link_id?: string;
    link_status?: string;
  };
};

function statusFromPayload(payload: CashfreeWebhookPayload): "paid" | "failed" | null {
  const paymentStatus = payload.data?.payment?.payment_status;
  if (paymentStatus === "SUCCESS") return "paid";
  if (paymentStatus === "FAILED" || paymentStatus === "CANCELLED" || paymentStatus === "VOID") return "failed";

  if (payload.type === "PAYMENT_SUCCESS_WEBHOOK") return "paid";
  if (payload.type === "PAYMENT_FAILED_WEBHOOK" || payload.type === "PAYMENT_USER_DROPPED_WEBHOOK") return "failed";

  const linkStatus = payload.data?.link_status;
  if (linkStatus === "PAID") return "paid";
  if (linkStatus === "EXPIRED" || linkStatus === "CANCELLED") return "failed";

  return null;
}

export async function POST(request: NextRequest) {
  const rawBody = await request.text();

  const timestamp = request.headers.get("x-webhook-timestamp");
  const signature = request.headers.get("x-webhook-signature");

  if (!verifyCashfreeWebhookSignature(rawBody, timestamp, signature)) {
    console.error("Cashfree webhook: signature verification failed");
    return NextResponse.json({ error: "Invalid signature" }, { status: 401 });
  }

  let payload: CashfreeWebhookPayload;
  try {
    payload = JSON.parse(rawBody);
  } catch {
    return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
  }

  // Our own linkId (see create-payment/route.ts) is what we asked Cashfree to
  // use as the order_id underneath the payment link.
  const linkId = payload.data?.link_id || payload.data?.order?.order_id;
  const newStatus = statusFromPayload(payload);

  if (!linkId || !newStatus) {
    // Not an event we act on (e.g. NOT_ATTEMPTED / PENDING) - ack so Cashfree
    // doesn't retry, but don't touch the row.
    return NextResponse.json({ received: true });
  }

  const cfPaymentId = payload.data?.payment?.cf_payment_id
    ? String(payload.data.payment.cf_payment_id)
    : null;

  await db
    .update(bulkgreencoffee_site)
    .set({
      payment_status: newStatus,
      cf_payment_id: cfPaymentId,
      status_updated_at: new Date().toISOString(),
    })
    .where(eq(bulkgreencoffee_site.link_id, linkId));

  return NextResponse.json({ received: true });
}



import type { ActionFunctionArgs, LoaderFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  return POST(new NextRequest(request));
}
