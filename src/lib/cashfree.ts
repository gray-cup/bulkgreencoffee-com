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
