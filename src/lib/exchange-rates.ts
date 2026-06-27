import { unstable_cache } from "next/cache";
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
  CNY: 0.086,  HKD: 0.093,  MOP: 0.096,  TWD: 0.390,  KPW: 10.71,
  MNT: 41.0,   KZT: 6.18,   KGS: 1.21,   TJS: 0.130,  TMT: 0.042,
  UZS: 152.0,  AFN: 0.845,  BDT: 1.31,   BTN: 1.0,    MVR: 0.184,
  NPR: 1.60,   PKR: 3.33,   LKR: 3.55,   AUD: 0.0188, CAD: 0.016,
  SGD: 0.016,  RUB: 1.07,   TRY: 0.41,   AMD: 4.78,   AZN: 0.020,
  GEL: 0.032,
};

// All exchange-rate API codes we want to fetch (must match CurrencyCode names)
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

// Cached for 1 week — revalidated on every build and after 7 days
export const fetchExchangeRates = unstable_cache(
  async (): Promise<RatesMap> => {
    const apiKey = process.env.EXCHANGERATE_API_KEY;
    if (!apiKey) {
      console.warn("EXCHANGERATE_API_KEY not set, using fallback rates");
      return FALLBACK_RATES;
    }

    try {
      // Fetch USD-based rates (one call covers all currencies)
      const res = await fetch(
        `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`,
        { next: { revalidate: 604800 } } // 1 week
      );

      if (!res.ok) throw new Error(`ExchangeRate API error: ${res.status}`);

      const data: ExchangeRateApiResponse = await res.json();
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
          // Fall back to static rate for currencies not in the API response
          rates[code] = FALLBACK_RATES[code];
        }
      }

      return rates;
    } catch (err) {
      console.error("Failed to fetch exchange rates, using fallback:", err);
      return FALLBACK_RATES;
    }
  },
  ["exchange-rates-v2"],
  { revalidate: 604800, tags: ["exchange-rates"] } // 1 week
);
