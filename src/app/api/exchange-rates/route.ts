import { NextResponse } from "next/server";
import { fetchExchangeRates } from "@/lib/exchange-rates";

export async function GET() {
  try {
    const rates = await fetchExchangeRates();
    return NextResponse.json(rates, {
      headers: {
        // Cache at the CDN/browser for 1 week; serve stale for up to 1 day while revalidating
        "Cache-Control": "public, s-maxage=604800, stale-while-revalidate=86400",
      },
    });
  } catch (err) {
    console.error("exchange-rates route error:", err);
    // On error return a 5-minute cache so we retry soon
    return NextResponse.json(
      { INR: 1, USD: 0.0119, EUR: 0.0109, GBP: 0.0092, AED: 0.0437, KRW: 16.5 },
      { headers: { "Cache-Control": "public, s-maxage=300, stale-while-revalidate=60" } }
    );
  }
}
