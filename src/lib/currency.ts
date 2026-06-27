export type CurrencyCode =
  // Already supported
  | "INR" | "EUR" | "GBP" | "USD" | "AED" | "KRW"
  // Europe
  | "ALL" | "BYN" | "BAM" | "BGN" | "CZK" | "DKK" | "HUF" | "ISK"
  | "MDL" | "MKD" | "PLN" | "RON" | "RSD" | "SEK" | "UAH" | "CHF"
  | "NOK" | "SAR" | "AUD" | "JPY" | "SGD" | "CAD"
  // East Asia
  | "CNY" | "HKD" | "MOP" | "TWD" | "KPW" | "MNT"
  // Central Asia
  | "KZT" | "KGS" | "TJS" | "TMT" | "UZS"
  // South Asia
  | "AFN" | "BDT" | "BTN" | "MVR" | "NPR" | "PKR" | "LKR"
  // Middle East
  | "BHD" | "IRR" | "IQD" | "ILS" | "JOD" | "KWD" | "LBP" | "OMR"
  | "QAR" | "SYP" | "YER"
  // Transcontinental
  | "RUB" | "TRY" | "AMD" | "AZN" | "GEL";

export type CurrencyConfig = {
  code: CurrencyCode;
  symbol: string;
  name: string;
  rate: number; // Rate to convert FROM INR (fallback static rate)
  locale: string;
  decimals?: 0 | 2 | 3; // override; undefined = let Intl decide
};

export const CURRENCIES: Record<CurrencyCode, CurrencyConfig> = {
  // ─── Core ────────────────────────────────────────────────────────────────────
  INR: { code: "INR", symbol: "₹",     name: "Indian Rupee",              rate: 1,        locale: "en-IN",  decimals: 0 },
  USD: { code: "USD", symbol: "$",     name: "US Dollar",                 rate: 0.0119,   locale: "en-US" },
  EUR: { code: "EUR", symbol: "€",     name: "Euro",                      rate: 0.0109,   locale: "de-DE" },
  GBP: { code: "GBP", symbol: "£",    name: "British Pound",             rate: 0.0092,   locale: "en-GB" },
  AED: { code: "AED", symbol: "د.إ",  name: "UAE Dirham",                rate: 0.0437,   locale: "ar-AE" },
  KRW: { code: "KRW", symbol: "₩",    name: "South Korean Won",          rate: 16.5,     locale: "ko-KR",  decimals: 0 },
  // ─── Europe ──────────────────────────────────────────────────────────────────
  CHF: { code: "CHF", symbol: "Fr",    name: "Swiss Franc",               rate: 0.0106,   locale: "de-CH" },
  NOK: { code: "NOK", symbol: "kr",   name: "Norwegian Krone",           rate: 0.129,    locale: "nb-NO" },
  SEK: { code: "SEK", symbol: "kr",   name: "Swedish Krona",             rate: 0.124,    locale: "sv-SE" },
  DKK: { code: "DKK", symbol: "kr",   name: "Danish Krone",              rate: 0.081,    locale: "da-DK" },
  PLN: { code: "PLN", symbol: "zł",   name: "Polish Zloty",              rate: 0.048,    locale: "pl-PL" },
  CZK: { code: "CZK", symbol: "Kč",   name: "Czech Koruna",              rate: 0.274,    locale: "cs-CZ" },
  HUF: { code: "HUF", symbol: "Ft",   name: "Hungarian Forint",          rate: 4.38,     locale: "hu-HU",  decimals: 0 },
  RON: { code: "RON", symbol: "lei",  name: "Romanian Leu",              rate: 0.054,    locale: "ro-RO" },
  BGN: { code: "BGN", symbol: "лв",   name: "Bulgarian Lev",             rate: 0.021,    locale: "bg-BG" },
  ISK: { code: "ISK", symbol: "kr",   name: "Icelandic Króna",           rate: 1.64,     locale: "is-IS",  decimals: 0 },
  ALL: { code: "ALL", symbol: "L",    name: "Albanian Lek",              rate: 1.07,     locale: "sq-AL",  decimals: 0 },
  BYN: { code: "BYN", symbol: "Br",   name: "Belarusian Ruble",          rate: 0.039,    locale: "be-BY" },
  BAM: { code: "BAM", symbol: "KM",   name: "Bosnia Mark",               rate: 0.021,    locale: "bs-BA" },
  MKD: { code: "MKD", symbol: "ден", name: "Macedonian Denar",          rate: 0.67,     locale: "mk-MK",  decimals: 0 },
  RSD: { code: "RSD", symbol: "дин", name: "Serbian Dinar",             rate: 1.27,     locale: "sr-RS",  decimals: 0 },
  MDL: { code: "MDL", symbol: "L",    name: "Moldovan Leu",              rate: 0.21,     locale: "ro-MD" },
  UAH: { code: "UAH", symbol: "₴",   name: "Ukrainian Hryvnia",         rate: 0.49,     locale: "uk-UA" },
  // ─── Middle East & Gulf ──────────────────────────────────────────────────────
  SAR: { code: "SAR", symbol: "﷼",   name: "Saudi Riyal",               rate: 0.0447,   locale: "ar-SA" },
  QAR: { code: "QAR", symbol: "﷼",   name: "Qatari Riyal",              rate: 0.0433,   locale: "ar-QA" },
  KWD: { code: "KWD", symbol: "د.ك", name: "Kuwaiti Dinar",             rate: 0.0037,   locale: "ar-KW",  decimals: 3 },
  BHD: { code: "BHD", symbol: "BD",   name: "Bahraini Dinar",            rate: 0.00449,  locale: "ar-BH",  decimals: 3 },
  OMR: { code: "OMR", symbol: "﷼",   name: "Omani Rial",                rate: 0.00458,  locale: "ar-OM",  decimals: 3 },
  JOD: { code: "JOD", symbol: "JD",   name: "Jordanian Dinar",           rate: 0.0084,   locale: "ar-JO",  decimals: 3 },
  ILS: { code: "ILS", symbol: "₪",   name: "Israeli Shekel",            rate: 0.044,    locale: "he-IL" },
  LBP: { code: "LBP", symbol: "ل.ل", name: "Lebanese Pound",            rate: 106.5,    locale: "ar-LB",  decimals: 0 },
  IQD: { code: "IQD", symbol: "ع.د", name: "Iraqi Dinar",               rate: 15.6,     locale: "ar-IQ",  decimals: 0 },
  IRR: { code: "IRR", symbol: "﷼",   name: "Iranian Rial",              rate: 500,      locale: "fa-IR",  decimals: 0 },
  SYP: { code: "SYP", symbol: "£",   name: "Syrian Pound",              rate: 154,      locale: "ar-SY",  decimals: 0 },
  YER: { code: "YER", symbol: "﷼",   name: "Yemeni Rial",               rate: 2.96,     locale: "ar-YE",  decimals: 0 },
  // ─── East Asia ───────────────────────────────────────────────────────────────
  JPY: { code: "JPY", symbol: "¥",    name: "Japanese Yen",              rate: 1.81,     locale: "ja-JP",  decimals: 0 },
  CNY: { code: "CNY", symbol: "¥",    name: "Chinese Yuan",              rate: 0.086,    locale: "zh-CN" },
  HKD: { code: "HKD", symbol: "HK$",  name: "Hong Kong Dollar",          rate: 0.093,    locale: "zh-HK" },
  MOP: { code: "MOP", symbol: "P",    name: "Macanese Pataca",           rate: 0.096,    locale: "zh-MO" },
  TWD: { code: "TWD", symbol: "NT$",  name: "New Taiwan Dollar",         rate: 0.390,    locale: "zh-TW",  decimals: 0 },
  KPW: { code: "KPW", symbol: "₩",   name: "North Korean Won",          rate: 10.71,    locale: "ko-KP",  decimals: 0 },
  MNT: { code: "MNT", symbol: "₮",   name: "Mongolian Tögrög",          rate: 41.0,     locale: "mn-MN",  decimals: 0 },
  // ─── Central Asia ────────────────────────────────────────────────────────────
  KZT: { code: "KZT", symbol: "₸",   name: "Kazakhstani Tenge",         rate: 6.18,     locale: "kk-KZ",  decimals: 0 },
  KGS: { code: "KGS", symbol: "с",   name: "Kyrgyzstani Som",           rate: 1.21,     locale: "ky-KG" },
  TJS: { code: "TJS", symbol: "SM",   name: "Tajikistani Somoni",        rate: 0.130,    locale: "tg-TJ" },
  TMT: { code: "TMT", symbol: "T",    name: "Turkmenistani Manat",       rate: 0.042,    locale: "tk-TM" },
  UZS: { code: "UZS", symbol: "so'm",name: "Uzbekistani Sum",           rate: 152.0,    locale: "uz-UZ",  decimals: 0 },
  // ─── South Asia ──────────────────────────────────────────────────────────────
  AUD: { code: "AUD", symbol: "A$",   name: "Australian Dollar",         rate: 0.0188,   locale: "en-AU" },
  CAD: { code: "CAD", symbol: "CA$",  name: "Canadian Dollar",           rate: 0.016,    locale: "en-CA" },
  SGD: { code: "SGD", symbol: "S$",   name: "Singapore Dollar",          rate: 0.016,    locale: "en-SG" },
  AFN: { code: "AFN", symbol: "؋",   name: "Afghan Afghani",            rate: 0.845,    locale: "ps-AF",  decimals: 0 },
  BDT: { code: "BDT", symbol: "৳",   name: "Bangladeshi Taka",          rate: 1.31,     locale: "bn-BD",  decimals: 0 },
  BTN: { code: "BTN", symbol: "Nu",   name: "Bhutanese Ngultrum",        rate: 1.0,      locale: "dz-BT",  decimals: 0 },
  MVR: { code: "MVR", symbol: "Rf",   name: "Maldivian Rufiyaa",         rate: 0.184,    locale: "dv-MV" },
  NPR: { code: "NPR", symbol: "Rs",   name: "Nepalese Rupee",            rate: 1.60,     locale: "ne-NP",  decimals: 0 },
  PKR: { code: "PKR", symbol: "Rs",   name: "Pakistani Rupee",           rate: 3.33,     locale: "ur-PK",  decimals: 0 },
  LKR: { code: "LKR", symbol: "Rs",   name: "Sri Lankan Rupee",          rate: 3.55,     locale: "si-LK",  decimals: 0 },
  // ─── Transcontinental ────────────────────────────────────────────────────────
  RUB: { code: "RUB", symbol: "₽",   name: "Russian Ruble",             rate: 1.07,     locale: "ru-RU",  decimals: 0 },
  TRY: { code: "TRY", symbol: "₺",   name: "Turkish Lira",              rate: 0.41,     locale: "tr-TR" },
  AMD: { code: "AMD", symbol: "֏",   name: "Armenian Dram",             rate: 4.78,     locale: "hy-AM",  decimals: 0 },
  AZN: { code: "AZN", symbol: "₼",   name: "Azerbaijani Manat",         rate: 0.020,    locale: "az-AZ" },
  GEL: { code: "GEL", symbol: "₾",   name: "Georgian Lari",             rate: 0.032,    locale: "ka-GE" },
};

// Slug-based map: country page slug → currency code
export const SLUG_CURRENCY_MAP: Record<string, CurrencyCode> = {
  // Europe
  germany: "EUR", france: "EUR", italy: "EUR", netherlands: "EUR", spain: "EUR",
  ireland: "EUR", austria: "EUR", belgium: "EUR", bulgaria: "BGN", croatia: "EUR",
  cyprus: "EUR", "czech-republic": "CZK", denmark: "DKK", estonia: "EUR",
  finland: "EUR", greece: "EUR", hungary: "HUF", latvia: "EUR", lithuania: "EUR",
  luxembourg: "EUR", malta: "EUR", portugal: "EUR", romania: "RON", slovakia: "EUR",
  slovenia: "EUR", "san-marino": "EUR", "vatican-city": "EUR", monaco: "EUR",
  andorra: "EUR", kosovo: "EUR", montenegro: "EUR", liechtenstein: "CHF",
  "north-macedonia": "MKD", serbia: "RSD", albania: "ALL", moldova: "MDL",
  ukraine: "UAH", belarus: "BYN", "bosnia-and-herzegovina": "BAM",
  norway: "NOK", switzerland: "CHF", iceland: "ISK", sweden: "SEK", poland: "PLN",
  "united-kingdom": "GBP",
  // Middle East
  uae: "AED", "saudi-arabia": "SAR", qatar: "QAR", kuwait: "KWD", bahrain: "BHD",
  oman: "OMR", jordan: "JOD", israel: "ILS", palestine: "ILS", lebanon: "LBP",
  iraq: "IQD", iran: "IRR", syria: "SYP", yemen: "YER",
  // East Asia
  japan: "JPY", "south-korea": "KRW", china: "CNY", "hong-kong": "HKD",
  macau: "MOP", taiwan: "TWD", "north-korea": "KPW", mongolia: "MNT",
  // Central Asia
  kazakhstan: "KZT", kyrgyzstan: "KGS", tajikistan: "TJS",
  turkmenistan: "TMT", uzbekistan: "UZS",
  // South Asia
  india: "INR", bangladesh: "BDT", "sri-lanka": "LKR", nepal: "NPR",
  pakistan: "PKR", maldives: "MVR", bhutan: "BTN", afghanistan: "AFN",
  // Oceania
  australia: "AUD",
  // Americas
  usa: "USD", canada: "CAD",
  // Southeast Asia
  singapore: "SGD",
  // Transcontinental
  russia: "RUB", turkey: "TRY", armenia: "AMD", azerbaijan: "AZN", georgia: "GEL",
};

// ISO country code → currency (for geo-detection)
export const COUNTRY_CURRENCY_MAP: Record<string, CurrencyCode> = {
  // Europe
  DE: "EUR", FR: "EUR", IT: "EUR", ES: "EUR", NL: "EUR", BE: "EUR",
  AT: "EUR", PT: "EUR", IE: "EUR", FI: "EUR", GR: "EUR", EE: "EUR",
  LV: "EUR", LT: "EUR", LU: "EUR", MT: "EUR", SK: "EUR", SI: "EUR",
  HR: "EUR", CY: "EUR", MC: "EUR", SM: "EUR", VA: "EUR", AD: "EUR",
  XK: "EUR", ME: "EUR",
  GB: "GBP",
  CH: "CHF", LI: "CHF",
  NO: "NOK", SE: "SEK", DK: "DKK", IS: "ISK",
  PL: "PLN", CZ: "CZK", HU: "HUF", RO: "RON", BG: "BGN",
  RS: "RSD", MK: "MKD", AL: "ALL", MD: "MDL", UA: "UAH",
  BY: "BYN", BA: "BAM",
  // Middle East
  AE: "AED", SA: "SAR", QA: "QAR", KW: "KWD", BH: "BHD",
  OM: "OMR", JO: "JOD", IL: "ILS", PS: "ILS", LB: "LBP",
  IQ: "IQD", IR: "IRR", SY: "SYP", YE: "YER",
  // East Asia
  JP: "JPY", KR: "KRW", CN: "CNY", HK: "HKD", MO: "MOP",
  TW: "TWD", KP: "KPW", MN: "MNT",
  // Central Asia
  KZ: "KZT", KG: "KGS", TJ: "TJS", TM: "TMT", UZ: "UZS",
  // South Asia
  IN: "INR", BD: "BDT", LK: "LKR", NP: "NPR", PK: "PKR",
  MV: "MVR", BT: "BTN", AF: "AFN",
  // Oceania
  AU: "AUD", NZ: "AUD",
  // Americas
  US: "USD", MX: "USD", BR: "USD", AR: "USD", CL: "USD",
  CO: "USD", PE: "USD",
  CA: "CAD",
  // Southeast Asia
  SG: "SGD", MY: "USD", TH: "USD", VN: "USD", PH: "USD", ID: "USD",
  // Transcontinental
  RU: "RUB", TR: "TRY", AM: "AMD", AZ: "AZN", GE: "GEL",
};

export const DEFAULT_CURRENCY: CurrencyCode = "USD";

export function convertPrice(
  priceInINR: number,
  toCurrency: CurrencyCode,
  rates?: Partial<Record<CurrencyCode, number>>
): number {
  const rate = rates?.[toCurrency] ?? CURRENCIES[toCurrency]?.rate ?? 0.012;
  return Math.round(priceInINR * rate * 100) / 100;
}

export function formatPrice(
  price: number,
  currency: CurrencyCode,
  _options?: { showSymbol?: boolean }
): string {
  const config = CURRENCIES[currency];
  if (!config) return `${price}`;

  const decimals = config.decimals;
  const fractionDigits =
    decimals !== undefined
      ? decimals
      : undefined; // let Intl use the currency default

  try {
    return new Intl.NumberFormat(config.locale, {
      style: "currency",
      currency: config.code,
      ...(fractionDigits !== undefined && {
        minimumFractionDigits: fractionDigits,
        maximumFractionDigits: fractionDigits,
      }),
    }).format(price);
  } catch {
    // Fallback for locales/currencies not supported by the runtime
    const sym = config.symbol;
    return `${sym}${price.toFixed(fractionDigits ?? 2)}`;
  }
}

export function formatPriceRange(
  minINR: number,
  maxINR: number,
  currency: CurrencyCode
): string {
  const config = CURRENCIES[currency];
  if (!config) return `₹${minINR} - ₹${maxINR}`;
  const minConverted = convertPrice(minINR, currency);
  const maxConverted = convertPrice(maxINR, currency);
  return `${formatPrice(minConverted, currency)} - ${formatPrice(maxConverted, currency)}`;
}

export function getCurrencyFromCountry(countryCode: string): CurrencyCode {
  return COUNTRY_CURRENCY_MAP[countryCode.toUpperCase()] ?? DEFAULT_CURRENCY;
}

export function getCurrencyForSlug(slug: string): CurrencyCode {
  return SLUG_CURRENCY_MAP[slug] ?? DEFAULT_CURRENCY;
}
