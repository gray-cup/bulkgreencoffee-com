import crypto from "crypto";
import type { CurrencyCode } from "./currency";

export const CASHFREE_CLIENT_ID = process.env.CASHFREE_CLIENT_ID;
export const CASHFREE_CLIENT_SECRET = process.env.CASHFREE_CLIENT_SECRET;

// Defaults to production so existing deployments keep working without adding
// CASHFREE_ENV; set CASHFREE_ENV=sandbox for testing.
export const CASHFREE_BASE_URL =
  process.env.CASHFREE_ENV === "sandbox"
    ? "https://sandbox.cashfree.com/pg"
    : "https://api.cashfree.com/pg";

export const CASHFREE_API_VERSION = "2023-08-01";

// Currencies we've confirmed Cashfree Payment Links accepts for international
// settlement. Anything outside this list falls back to USD so an order never
// gets rejected for an unsupported link_currency. Verify/extend this list
// against your Cashfree dashboard (Settings -> Payment Methods -> Currencies)
// if you need more.
const CASHFREE_SUPPORTED_CURRENCIES: ReadonlySet<CurrencyCode> = new Set([
  "USD", "EUR", "GBP", "AED", "AUD", "CAD", "SGD", "CHF", "JPY", "HKD",
]);

export function resolveCashfreeCurrency(currency: CurrencyCode): CurrencyCode {
  return CASHFREE_SUPPORTED_CURRENCIES.has(currency) ? currency : "USD";
}

export function cashfreeHeaders() {
  if (!CASHFREE_CLIENT_ID || !CASHFREE_CLIENT_SECRET) {
    throw new Error("Cashfree credentials are not configured");
  }
  return {
    "Content-Type": "application/json",
    "x-client-id": CASHFREE_CLIENT_ID,
    "x-client-secret": CASHFREE_CLIENT_SECRET,
    "x-api-version": CASHFREE_API_VERSION,
  };
}

/**
 * The Payment Link "PAID" webhook does NOT carry cf_payment_id - only the
 * separate PAYMENT_SUCCESS_WEBHOOK does, and that one is keyed by Cashfree's
 * own order_id, not our link_id. So when a link is paid we look the payment up
 * by the order_id the link webhook does give us (data.order.order_id).
 * Returns null on any failure - cf_payment_id is a nice-to-have, not critical.
 */
export async function fetchCfPaymentId(orderId: string): Promise<string | null> {
  try {
    const res = await fetch(`${CASHFREE_BASE_URL}/orders/${orderId}/payments`, {
      headers: cashfreeHeaders(),
    });
    if (!res.ok) return null;
    const body = (await res.json()) as any;
    const payments: any[] = Array.isArray(body) ? body : body.data ?? body.payments ?? [];
    const paid = payments.find((p) => (p.payment_status ?? p.status) === "SUCCESS") ?? payments[0];
    const id = paid?.cf_payment_id ?? paid?.payment_id;
    return id != null ? String(id) : null;
  } catch {
    return null;
  }
}

/**
 * Cashfree signs webhooks as base64(HMAC-SHA256(timestamp + rawBody, client_secret)),
 * sent as `x-webhook-signature` alongside `x-webhook-timestamp`.
 * https://www.cashfree.com/docs/ (Payments > Webhooks > Verify signature)
 */
export function verifyCashfreeWebhookSignature(
  rawBody: string,
  timestamp: string | null,
  signature: string | null,
): boolean {
  if (!CASHFREE_CLIENT_SECRET || !timestamp || !signature) return false;

  const expected = crypto
    .createHmac("sha256", CASHFREE_CLIENT_SECRET)
    .update(timestamp + rawBody)
    .digest("base64");

  const expectedBuf = Buffer.from(expected);
  const signatureBuf = Buffer.from(signature);
  if (expectedBuf.length !== signatureBuf.length) return false;

  return crypto.timingSafeEqual(expectedBuf, signatureBuf);
}
