import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { bulkgreencoffee_site } from "@/db/schema";
import { CASHFREE_BASE_URL, cashfreeHeaders } from "@/lib/cashfree";

// Belt-and-suspenders fallback for when the Cashfree webhook is delayed or
// missed: the success page calls this with the link_id from the return_url
// to actively check the link's status and reconcile our DB.
export async function GET(request: NextRequest) {
  const linkId = request.nextUrl.searchParams.get("link_id");
  if (!linkId) {
    return NextResponse.json({ error: "link_id is required" }, { status: 400 });
  }

  const [order] = await db
    .select()
    .from(bulkgreencoffee_site)
    .where(eq(bulkgreencoffee_site.link_id, linkId))
    .limit(1);

  if (!order) {
    return NextResponse.json({ error: "Order not found" }, { status: 404 });
  }

  // Webhook already reconciled this order - no need to call Cashfree again.
  if (order.payment_status === "paid" || order.payment_status === "failed") {
    return NextResponse.json({ status: order.payment_status });
  }

  try {
    const response = await fetch(`${CASHFREE_BASE_URL}/links/${linkId}`, {
      headers: cashfreeHeaders(),
    });
    const data = await response.json();

    if (!response.ok) {
      console.error("Cashfree link status error:", data);
      return NextResponse.json({ status: order.payment_status });
    }

    let newStatus: "paid" | "failed" | null = null;
    if (data.link_status === "PAID") newStatus = "paid";
    else if (data.link_status === "EXPIRED" || data.link_status === "CANCELLED") newStatus = "failed";

    if (newStatus && newStatus !== order.payment_status) {
      await db
        .update(bulkgreencoffee_site)
        .set({ payment_status: newStatus, status_updated_at: new Date() })
        .where(eq(bulkgreencoffee_site.link_id, linkId));
    }

    return NextResponse.json({ status: newStatus || order.payment_status });
  } catch (error) {
    console.error("verify-payment error:", error);
    return NextResponse.json({ status: order.payment_status });
  }
}
