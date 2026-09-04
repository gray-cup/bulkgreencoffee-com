import { NextRequest, NextResponse } from "@/lib/next-server-compat";
import { eq } from "drizzle-orm";
import { db } from "@/db";
import { bulkgreencoffee_site } from "@/db/schema";
import {
  CASHFREE_BASE_URL,
  CASHFREE_CLIENT_ID,
  CASHFREE_CLIENT_SECRET,
  cashfreeHeaders,
  resolveCashfreeCurrency,
} from "@/lib/cashfree";
import { convertPrice, type CurrencyCode } from "@/lib/currency";
import { fetchExchangeRates } from "@/lib/exchange-rates";
import { getProductBySlug } from "@/data/products";
import {
  computeRoastedOrderTotal,
  roastedPackPrice,
  roastedPackGrams,
  type RoastedKind,
  type RoastedOrderItem,
} from "@/lib/roasted-pricing";

interface RoastedOrderRequest {
  kind: RoastedKind; // "retail" | "cafe"
  place?: string; // slug, for the admin note only
  name: string;
  phone: string;
  email?: string;
  country: string;
  pincode: string;
  address: string;
  state?: string;
  gstOrTaxId?: string;
  businessType?: string;
  items: RoastedOrderItem[]; // { slug, pack, qty } - price recomputed server-side
  currency?: CurrencyCode;
}

export async function POST(request: NextRequest) {
  try {
    if (!CASHFREE_CLIENT_ID || !CASHFREE_CLIENT_SECRET) {
      return NextResponse.json({ error: "Payment gateway not configured" }, { status: 500 });
    }

    const body: RoastedOrderRequest = await request.json();
    const { kind, place, name, phone, email, country, pincode, address, state, gstOrTaxId, businessType, items } = body;

    if (kind !== "retail" && kind !== "cafe") {
      return NextResponse.json({ error: "Invalid order kind" }, { status: 400 });
    }
    if (!name || !phone || !address || !pincode || !Array.isArray(items) || items.length === 0) {
      return NextResponse.json(
        { error: "Name, phone, address, pincode and at least one item are required" },
        { status: 400 },
      );
    }
    // Indian PIN codes are exactly 6 digits, first digit 1-9.
    if ((country ?? "").trim().toLowerCase() === "india" && !/^[1-9]\d{5}$/.test(String(pincode).trim())) {
      return NextResponse.json({ error: "Enter a valid 6-digit PIN code" }, { status: 400 });
    }

    const isIndia = country.trim().toLowerCase() === "india";

    let totalAmount: number;
    try {
      totalAmount = computeRoastedOrderTotal(kind, items);
    } catch (err) {
      return NextResponse.json(
        { error: err instanceof Error ? err.message : "Invalid order items" },
        { status: 400 },
      );
    }

    const productSlugs = Array.from(new Set(items.map((i) => i.slug)));

    // Per-line breakdown for the orders-graycup admin (rendered from items_detail).
    // pack label + qty ride in `tier`, which the admin already displays.
    const itemsDetail = items.map((it) => {
      const product = getProductBySlug(it.slug);
      const qty = Math.max(1, Math.floor(it.qty || 0));
      return {
        slug: it.slug,
        name: product?.name ?? it.slug,
        image: product ? `https://bulkgreencoffee.com${product.image}` : null,
        tier: `${it.pack} × ${qty} (roasted ${kind})`,
        grams: roastedPackGrams(kind, it.pack) * qty,
        price: (roastedPackPrice(kind, it.slug, it.pack) ?? 0) * qty,
      };
    });

    const packSummary = items
      .map((it) => `${it.slug} ${it.pack}×${Math.max(1, Math.floor(it.qty || 0))}`)
      .join(", ");
    const quantityTier = `roasted-${kind}${place ? ` @ ${place}` : ""}: ${packSummary}`.slice(0, 240);

    const linkId = `rgc_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 30);
    const origin = request.headers.get("origin") || "https://bulkgreencoffee.com";

    let linkCurrency: CurrencyCode = "INR";
    let linkAmount = totalAmount;
    if (!isIndia && body.currency && body.currency !== "INR") {
      linkCurrency = resolveCashfreeCurrency(body.currency);
      const rates = await fetchExchangeRates();
      linkAmount = convertPrice(totalAmount, linkCurrency, rates);
      if (!linkAmount || linkAmount <= 0) {
        linkCurrency = "INR";
        linkAmount = totalAmount;
      }
    }

    await db.insert(bulkgreencoffee_site).values({
      name,
      phone: phone.replace(/\D/g, "").slice(-12),
      email: email || null,
      country,
      pincode,
      address,
      state: state || null,
      gst_or_tax_id: gstOrTaxId || null,
      business_type: businessType || (kind === "cafe" ? "Café / HoReCa" : "Retail"),
      products: JSON.stringify(productSlugs),
      quantity_tier: quantityTier,
      items_detail: JSON.stringify(itemsDetail),
      total_amount: totalAmount,
      link_id: linkId,
      payment_status: "pending",
      currency: linkCurrency,
      charged_amount: linkCurrency === "INR" ? null : linkAmount,
    });

    const paymentLinkPayload = {
      link_id: linkId,
      link_amount: linkAmount,
      link_currency: linkCurrency,
      link_purpose: `Bulk Green Coffee: roasted ${kind} order (${productSlugs.join(", ")})`,
      customer_details: {
        customer_name: name,
        customer_phone: phone.replace(/\D/g, "").slice(-10),
        ...(email && { customer_email: email }),
      },
      link_meta: {
        return_url: `${origin}/buy-green-coffee-beans/success?link_id=${linkId}`,
      },
      link_notify: { send_sms: true, send_email: !!email },
      link_expiry_time: expiryTime.toISOString(),
    };

    const response = await fetch(`${CASHFREE_BASE_URL}/links`, {
      method: "POST",
      headers: cashfreeHeaders(),
      body: JSON.stringify(paymentLinkPayload),
    });
    const data = (await response.json()) as any;

    if (!response.ok) {
      console.error("Cashfree API error:", data);
      return NextResponse.json({ error: data.message || "Failed to create payment link" }, { status: response.status });
    }

    if (data.cf_link_id) {
      await db
        .update(bulkgreencoffee_site)
        .set({ cf_link_id: String(data.cf_link_id) })
        .where(eq(bulkgreencoffee_site.link_id, linkId));
    }

    return NextResponse.json({ success: true, paymentLink: data.link_url, linkId });
  } catch (error) {
    console.error("Roasted payment creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

import type { ActionFunctionArgs } from "react-router";

export async function action({ request }: ActionFunctionArgs) {
  return POST(new NextRequest(request));
}
