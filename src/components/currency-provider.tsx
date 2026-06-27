"use client";

import React, { createContext, useContext, useState, useEffect, useCallback } from "react";
import {
  type CurrencyCode,
  DEFAULT_CURRENCY,
  getCurrencyFromCountry,
  CURRENCIES,
  convertPrice,
} from "@/lib/currency";
import type { RatesMap } from "@/lib/exchange-rates";

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

type CurrencyContextType = {
  currency: CurrencyCode;
  setCurrency: (currency: CurrencyCode) => void;
  isLoading: boolean;
  rates: RatesMap;
  convert: (priceInINR: number, toCurrency: CurrencyCode) => number;
};

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

const CURRENCY_STORAGE_KEY = "graycup_currency";
const CURRENCY_MANUAL_KEY = "graycup_currency_manual";

export function CurrencyProvider({ children }: { children: React.ReactNode }) {
  const [currency, setCurrencyState] = useState<CurrencyCode>(DEFAULT_CURRENCY);
  const [isLoading, setIsLoading] = useState(true);
  const [rates, setRates] = useState<RatesMap>(FALLBACK_RATES);

  useEffect(() => {
    async function init() {
      // If the user manually picked a currency, respect it — skip geo
      const isManual = localStorage.getItem(CURRENCY_MANUAL_KEY) === "true";
      const stored = localStorage.getItem(CURRENCY_STORAGE_KEY);
      if (isManual && stored && stored in CURRENCIES) {
        setCurrencyState(stored as CurrencyCode);
      } else {
        // Always re-check geo so VPN / location changes are picked up
        try {
          const response = await fetch("/api/geo");
          if (response.ok) {
            const data = await response.json();
            if (data.country) {
              const detected = getCurrencyFromCountry(data.country);
              setCurrencyState(detected);
              localStorage.setItem(CURRENCY_STORAGE_KEY, detected);
            }
          }
        } catch {
          // fall back to whatever was stored, or DEFAULT_CURRENCY
          if (stored && stored in CURRENCIES) {
            setCurrencyState(stored as CurrencyCode);
          }
        }
      }
      setIsLoading(false);

      // Fetch live rates in the background — doesn't block the selector
      try {
        const ratesData = await fetch("/api/exchange-rates").then((r) => r.json() as Promise<RatesMap>);
        if (ratesData) setRates(ratesData);
      } catch {
        // keep using FALLBACK_RATES
      }
    }

    init();
  }, []);

  const setCurrency = (newCurrency: CurrencyCode) => {
    setCurrencyState(newCurrency);
    localStorage.setItem(CURRENCY_STORAGE_KEY, newCurrency);
    localStorage.setItem(CURRENCY_MANUAL_KEY, "true");
  };

  const convert = useCallback(
    (priceInINR: number, toCurrency: CurrencyCode) =>
      convertPrice(priceInINR, toCurrency, rates),
    [rates]
  );

  return (
    <CurrencyContext.Provider value={{ currency, setCurrency, isLoading, rates, convert }}>
      {children}
    </CurrencyContext.Provider>
  );
}

export function useCurrency() {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error("useCurrency must be used within a CurrencyProvider");
  }
  return context;
}
