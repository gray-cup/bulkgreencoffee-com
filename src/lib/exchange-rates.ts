import type { CurrencyCode } from "./currency";

export type RatesMap = Partial<Record<CurrencyCode, number>> & { INR: 1 };

// All rates expressed as "how many units of this currency = 1 INR"
const FALLBACK_RATES: RatesMap = {
  INR: 1,
  USD: 0.0119, EUR: 0.0109, GBP: 0.0092, AED: 0.0437, KRW: 16.5,
  CHF: 0.0106, NOK: 0.129,  SEK: 0.124,  DKK: 0.081,  PLN: 0.048,
  CZK: 0.274,  HUF: 4.38,   RON: 0.054,  BGN: 0.021,  ISK: 1.64,
  ALL: 1.07,   BYN: 0.039,  BAM: 0.021,  MKD: 0.67,   RSD: 1.27,
  MDL: 0.21,   UAH: 0.49,   SAR: 0.0447, QAR: 0.0433, KWD: 0.0037,
  BHD: 0.00449,OMR: 0.00458,JOD: 0.0084, ILS: 0.044,  LBP: 106.5,
  IQD: 15.6,   IRR: 500,    SYP: 154,    YER: 2.96,   JPY: 1.81,
  CNY: 0.086,  HKD: 0.093,  MOP: 0.096,  TWD: 0.38,   KPW: 10.7,
  MNT: 40.5,   KZT: 5.7,    KGS: 1.03,   TJS: 0.13,   TMT: 0.042,
  UZS: 152.0,  AFN: 0.85,   BDT: 1.42,   BTN: 1.0,    MVR: 0.18,
  NPR: 1.6,    PKR: 3.32,   LKR: 3.52,   AUD: 0.0185, CAD: 0.0169,
  SGD: 0.0161, RUB: 1.15,   TRY: 0.41,   AMD: 4.62,   AZN: 0.020,
  GEL: 0.032,
};

const CURRENCY_CODES: CurrencyCode[] = [
  "USD","EUR","GBP","AED","KRW","CHF","NOK","SEK","DKK","PLN","CZK","HUF",
  "RON","BGN","ISK","ALL","BYN","BAM","MKD","RSD","MDL","UAH","SAR","QAR",
  "KWD","BHD","OMR","JOD","ILS","LBP","IQD","IRR","SYP","YER","JPY","CNY",
  "HKD","MOP","TWD","KPW","MNT","KZT","KGS","TJS","TMT","UZS","AFN","BDT",
  "BTN","MVR","NPR","PKR","LKR","AUD","CAD","SGD","RUB","TRY","AMD","AZN",
  "GEL","INR",
];

type ExchangeRateApiResponse = {
  result: "success" | "error";
  conversion_rates: Record<string, number>;
};

let cachedRates: RatesMap | null = null;
let lastFetchTime = 0;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000; // 24 hours

export async function fetchExchangeRates(): Promise<RatesMap> {
  const now = Date.now();
  if (cachedRates && now - lastFetchTime < CACHE_TTL_MS) {
    return cachedRates;
  }

  const apiKey = process.env.EXCHANGERATE_API_KEY;
  if (!apiKey) {
    console.warn("EXCHANGERATE_API_KEY not set, using fallback rates");
    return FALLBACK_RATES;
  }

  try {
    const res = await fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`);
    if (!res.ok) throw new Error(`ExchangeRate API error: ${res.status}`);

    const data: ExchangeRateApiResponse = (await res.json()) as any;
    if (data.result !== "success") throw new Error("ExchangeRate API returned non-success");

    const r = data.conversion_rates;
    const inrToUsd = 1 / (r["INR"] ?? 84);

    const rates: RatesMap = { INR: 1 };
    for (const code of CURRENCY_CODES) {
      if (code === "INR") continue;
      const apiRate = r[code];
      if (apiRate !== undefined) {
        rates[code] = inrToUsd * apiRate;
      } else {
        rates[code] = FALLBACK_RATES[code];
      }
    }

    cachedRates = rates;
    lastFetchTime = now;
    return rates;
  } catch (err) {
    console.error("Failed to fetch exchange rates, using fallback:", err);
    return FALLBACK_RATES;
  }
}
