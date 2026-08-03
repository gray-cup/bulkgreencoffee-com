import { NextRequest, NextResponse } from "next/server";
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

export interface SampleOrderRequest {
  name: string;
  phone: string;
  email: string;
  country: string;
  pincode: string;
  address: string;
  state?: string;
  gstOrTaxId?: string;
  businessType?: string;
  products: string[];       // slugs
  quantityTier: string;     // "100g" | "1kg" | "3kg" | "5kg"
  totalAmount: number;      // INR, already calculated on client
  currency?: CurrencyCode;  // customer's display currency; ignored for India
}

export async function POST(request: NextRequest) {
  try {
    if (!CASHFREE_CLIENT_ID || !CASHFREE_CLIENT_SECRET) {
      return NextResponse.json(
        { error: "Payment gateway not configured" },
        { status: 500 },
      );
    }

    const body: SampleOrderRequest = await request.json();
    const { name, phone, email, country, pincode, address, state, gstOrTaxId, businessType, products, quantityTier, totalAmount } = body;

    if (!name || !phone || !address || !pincode || products.length === 0) {
      return NextResponse.json(
        { error: "Name, phone, address, pincode and at least one product are required" },
        { status: 400 },
      );
    }

    const linkId = `bgc_${Date.now()}_${Math.random().toString(36).substring(2, 8)}`;
    const expiryTime = new Date();
    expiryTime.setMinutes(expiryTime.getMinutes() + 30);

    const origin = request.headers.get("origin") || "https://bulkgreencoffee.com";

    // Domestic (India) always settles in INR. International orders are charged
    // in the customer's local currency (Cashfree settles to the merchant in
    // INR regardless) so the amount on their card statement matches what they
    // were shown, and so foreign-card declines caused by an INR-only charge
    // are avoided.
    const isIndia = country.trim().toLowerCase() === "india";
    let linkCurrency: CurrencyCode = "INR";
    let linkAmount = totalAmount;

    if (!isIndia && body.currency && body.currency !== "INR") {
      linkCurrency = resolveCashfreeCurrency(body.currency);
      // Convert server-side using our own rate fetch — never trust a
      // client-supplied converted amount for what gets charged.
      const rates = await fetchExchangeRates();
      linkAmount = convertPrice(totalAmount, linkCurrency, rates);
      if (!linkAmount || linkAmount <= 0) {
        linkCurrency = "INR";
        linkAmount = totalAmount;
      }
    }

    // Save order to database first
    await db.insert(bulkgreencoffee_site).values({
      name,
      phone: phone.replace(/\D/g, "").slice(-12),
      email:          email || null,
      country,
      pincode,
      address,
      state:          state || null,
      gst_or_tax_id:  gstOrTaxId || null,
      business_type:  businessType || null,
      products:       JSON.stringify(products),
      quantity_tier:  quantityTier,
      total_amount:   totalAmount,
      link_id:        linkId,
      payment_status: "pending",
      currency:       linkCurrency,
      charged_amount: linkCurrency === "INR" ? null : linkAmount,
    });

    const paymentLinkPayload = {
      link_id: linkId,
      link_amount: linkAmount,
      link_currency: linkCurrency,
      link_purpose: `Bulk Green Coffee — ${quantityTier} sample${products.length > 1 ? "s" : ""} (${products.join(", ")})`,

      customer_details: {
        customer_name:  name,
        customer_phone: phone.replace(/\D/g, "").slice(-10),
        ...(email && { customer_email: email }),
      },

      link_meta: {
        return_url: `${origin}/buy-samples/success?link_id=${linkId}`,
      },

      link_notify: {
        send_sms:   true,
        send_email: !!email,
      },

      link_expiry_time: expiryTime.toISOString(),
    };

    const response = await fetch(`${CASHFREE_BASE_URL}/links`, {
      method: "POST",
      headers: cashfreeHeaders(),
      body: JSON.stringify(paymentLinkPayload),
    });

    const data = await response.json();

    if (!response.ok) {
      console.error("Cashfree API error:", data);
      return NextResponse.json(
        { error: data.message || "Failed to create payment link" },
        { status: response.status },
      );
    }

    return NextResponse.json({
      success:     true,
      paymentLink: data.link_url,
      linkId,
    });
  } catch (error) {
    console.error("Payment creation error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
