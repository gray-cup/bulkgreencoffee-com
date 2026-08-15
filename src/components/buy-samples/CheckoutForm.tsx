"use client";

import React, { useState, useEffect, useRef } from "react";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile, useTurnstile } from "@/components/ui/turnstile";
export interface SampleOrderRequest {
  name: string;
  phone: string;
  email?: string;
  country: string;
  pincode: string;
  address: string;
  state?: string;
  gstOrTaxId?: string;
  businessType?: string;
  items: Array<{ slug: string; tier: string }>;
  currency: string;
}
import { useCurrency } from "@/components/currency-provider";
import { convertPrice, formatPrice } from "@/lib/currency";
import { priceForItem, gramsForTier, deliveryFeeForGrams, type OrderItem } from "@/lib/pricing";

const businessCategories = [
  { id: "roastery",   label: "Roastery" },
  { id: "cafe",       label: "Cafe" },
  { id: "hotel",      label: "Hotel" },
  { id: "restaurant", label: "Restaurant" },
  { id: "importer",   label: "Importer / Distributor" },
  { id: "other",      label: "Other" },
];

type FieldErrors = Partial<Record<"name" | "phone" | "email" | "address" | "pincode", string>>;

// Buyer details persist locally so returning visitors don't retype their
// address/contact info. Expires after ~3 months so stale details eventually
// stop being suggested.
const DETAILS_STORAGE_KEY = "bgc_checkout_details";
const DETAILS_MAX_AGE_MS = 1000 * 60 * 60 * 24 * 90;

type StoredCheckoutDetails = {
  customerType?: "individual" | "business";
  country?: string;
  name?: string;
  phone?: string;
  email?: string;
  pincode?: string;
  address?: string;
  state?: string;
  gstOrTaxId?: string;
  businessType?: string;
  savedAt?: number;
};

function titleCase(str: string) {
  return str.replace(/\b\w/g, (c) => c.toUpperCase());
}

function validate(fields: {
  name: string; phone: string; email: string; address: string; pincode: string;
}): FieldErrors {
  const e: FieldErrors = {};
  if (!fields.name.trim())                             e.name    = "Name is required.";
  if (!fields.phone.trim())                            e.phone   = "Phone number is required.";
  if (!fields.email.trim())                            e.email   = "Email address is required.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) e.email = "Enter a valid email address.";
  if (!fields.address.trim())                          e.address = "Delivery address is required.";
  else if (fields.address.trim().length < 7)           e.address = "Address must be at least 7 characters.";
  if (!fields.pincode.trim())                          e.pincode = "Pincode / ZIP is required.";
  return e;
}

type Props = {
  items: OrderItem[];
  renderSummary?: () => React.ReactNode;
  onBack?: () => void;
};

export function CheckoutForm({ items, renderSummary, onBack }: Props) {
  const turnstile = useTurnstile();
  const { currency, rates } = useCurrency();

  const [customerType, setCustomerType] = useState<"individual" | "business">("individual");
  const [country,      setCountry]      = useState("");
  const [name,         setName]         = useState("");
  const [phone,        setPhone]        = useState("");
  const [email,        setEmail]        = useState("");
  const [pincode,      setPincode]      = useState("");
  const [address,      setAddress]      = useState("");
  const [state,        setState]        = useState("");
  const [gstOrTaxId,   setGstOrTaxId]   = useState("");
  const [businessType, setBusinessType] = useState("");
  const [isLoading,    setIsLoading]    = useState(false);
  const [submitError,  setSubmitError]  = useState("");

  // Which fields the user has blurred at least once
  const [touched, setTouched] = useState<Set<string>>(new Set());
  const [triedSubmit, setTriedSubmit] = useState(false);

  const touch = (field: string) => setTouched((prev) => new Set([...prev, field]));
  const showErr = (field: string) => touched.has(field) || triedSubmit;

  const fieldValues = { name, phone, email, address, pincode };
  const errors = validate(fieldValues);
  const hasErrors = Object.keys(errors).length > 0;

  // Restore previously entered buyer details (if saved within the last ~3
  // months) so a returning visitor doesn't have to retype everything.
  useEffect(() => {
    try {
      const raw = localStorage.getItem(DETAILS_STORAGE_KEY);
      if (raw) {
        const saved: StoredCheckoutDetails = JSON.parse(raw);
        if (saved && typeof saved.savedAt === "number" && Date.now() - saved.savedAt <= DETAILS_MAX_AGE_MS) {
          if (saved.customerType === "individual" || saved.customerType === "business") setCustomerType(saved.customerType);
          if (saved.country)      setCountry(saved.country);
          if (saved.name)         setName(saved.name);
          if (saved.phone)        setPhone(saved.phone);
          if (saved.email)        setEmail(saved.email);
          if (saved.pincode)      setPincode(saved.pincode);
          if (saved.address)      setAddress(saved.address);
          if (saved.state)        setState(saved.state);
          if (saved.gstOrTaxId)   setGstOrTaxId(saved.gstOrTaxId);
          if (saved.businessType) setBusinessType(saved.businessType);
        } else {
          localStorage.removeItem(DETAILS_STORAGE_KEY);
        }
      }
    } catch {}
  }, []);

  // Persist buyer details on every change, refreshing the ~3-month expiry.
  // Skips its first (mount) invocation so it never overwrites saved details
  // with the still-empty field values from before the restore effect above
  // has applied them - both effects fire on mount, in declaration order, but
  // state updates from the restore effect aren't visible here until the
  // next render.
  const skippedFirstPersist = useRef(false);
  useEffect(() => {
    if (!skippedFirstPersist.current) {
      skippedFirstPersist.current = true;
      return;
    }
    const details: StoredCheckoutDetails = {
      customerType, country, name, phone, email, pincode, address, state, gstOrTaxId, businessType,
      savedAt: Date.now(),
    };
    try {
      localStorage.setItem(DETAILS_STORAGE_KEY, JSON.stringify(details));
    } catch {}
  }, [customerType, country, name, phone, email, pincode, address, state, gstOrTaxId, businessType]);

  // Auto-detect country code → full name, but don't clobber a restored value
  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then((d: any) => {
        if (!d.country) return;
        try {
          const detected = new Intl.DisplayNames(["en"], { type: "region" }).of(d.country);
          if (detected) setCountry((prev) => prev || detected);
        } catch {
          setCountry((prev) => prev || d.country);
        }
      })
      .catch(() => {});
  }, []);

  const isIndia          = country.trim().toLowerCase() === "india";
  const isBusiness       = customerType === "business";
  const taxLabel         = isIndia ? "GST Number" : "Tax ID";
  const taxPlaceholder   = isIndia ? "22AAAAA0000A1Z5" : "VAT / Tax registration number";

  // Display only - the server independently recomputes this from `items`
  // against the product catalogue, so a tampered request can't change what's
  // actually charged.
  const totalAmount      = items.reduce((sum, item) => sum + (priceForItem(item) ?? 0), 0);
  const totalGrams       = items.reduce((sum, item) => sum + gramsForTier(item.tier), 0);
  const deliveryFee      = deliveryFeeForGrams(totalGrams);
  const finalAmount      = totalAmount + deliveryFee;

  // International orders are charged in the customer's local currency
  // (Cashfree still settles to us in INR) so foreign cards aren't declined
  // over an INR-only charge and the amount matches what's shown here.
  const payLabel = isIndia
    ? `Pay ₹${finalAmount} & Order`
    : `Pay ${formatPrice(convertPrice(finalAmount, currency, rates), currency)} & Order`;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setTriedSubmit(true);
    if (hasErrors) return;

    setSubmitError("");
    setIsLoading(true);

    const payload: SampleOrderRequest = {
      name,
      phone,
      email,
      country,
      pincode,
      address,
      state:        state || undefined,
      gstOrTaxId:   gstOrTaxId || undefined,
      businessType: businessType || undefined,
      items,
      currency: isIndia ? "INR" : currency,
    };

    try {
      const res  = await fetch("/api/create-payment", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || "Failed to create payment");
      window.location.href = data.paymentLink;
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const fieldClass = (field: keyof FieldErrors) =>
    errors[field] && showErr(field) ? "border-red-400 focus-visible:ring-red-300" : "";

  return (
    <div>
      {renderSummary?.()}

      {onBack && (
        <button
          type="button"
          onClick={onBack}
          className="text-sm text-muted-foreground hover:text-black mb-8 flex items-center gap-1 transition-colors active:opacity-60"
        >
          <ChevronLeft className="w-4 h-4" /> Back to products
        </button>
      )}

      <form className="space-y-5" onSubmit={handleSubmit} noValidate>

        {/* Individual / Business tab */}
        <div className="inline-flex gap-1 bg-gray-100 rounded-xl p-1">
          {(["individual", "business"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setCustomerType(type)}
              className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer active:scale-95 ${
                customerType === type
                  ? "bg-white text-black shadow-sm"
                  : "text-gray-500 hover:text-gray-800 hover:bg-white/60"
              }`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>

        {/* Name */}
        <div className="space-y-1.5">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            value={name}
            className={fieldClass("name")}
            onChange={(e) => setName(e.target.value)}
            onBlur={() => {
              touch("name");
              if (name.trim()) setName(titleCase(name.trim()));
            }}
          />
          {errors.name && showErr("name") && (
            <p className="text-xs text-red-500">{errors.name}</p>
          )}
        </div>

        {/* Phone + Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              value={phone}
              className={fieldClass("phone")}
              onChange={(e) => setPhone(e.target.value)}
              onBlur={() => touch("phone")}
            />
            {errors.phone && showErr("phone") && (
              <p className="text-xs text-red-500">{errors.phone}</p>
            )}
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="India, Germany, Japan…"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
              onBlur={() => touch("country")}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-1.5">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            className={fieldClass("email")}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => touch("email")}
          />
          {errors.email && showErr("email") && (
            <p className="text-xs text-red-500">{errors.email}</p>
          )}
        </div>

        {/* Address */}
        <div className="space-y-1.5">
          <Label htmlFor="address">Full Delivery Address</Label>
          <Textarea
            id="address"
            placeholder="House / flat no., street, area, city"
            rows={3}
            value={address}
            className={fieldClass("address")}
            onChange={(e) => setAddress(e.target.value)}
            onBlur={() => touch("address")}
          />
          {errors.address && showErr("address") && (
            <p className="text-xs text-red-500">{errors.address}</p>
          )}
        </div>

        {/* State + Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder={isIndia ? "Maharashtra" : "State / Province"}
              value={state}
              onChange={(e) => setState(e.target.value)}
              onBlur={() => touch("state")}
            />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="pincode">Pincode / ZIP</Label>
            <Input
              id="pincode"
              placeholder={isIndia ? "400001" : "ZIP / Postal code"}
              value={pincode}
              className={fieldClass("pincode")}
              onChange={(e) => setPincode(e.target.value)}
              onBlur={() => touch("pincode")}
            />
            {errors.pincode && showErr("pincode") && (
              <p className="text-xs text-red-500">{errors.pincode}</p>
            )}
          </div>
        </div>

        {/* Business-only fields */}
        {isBusiness && (
          <>
            <div className="space-y-1.5">
              <Label htmlFor="tax">
                {taxLabel}{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Input
                id="tax"
                placeholder={taxPlaceholder}
                value={gstOrTaxId}
                onChange={(e) => setGstOrTaxId(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label>
                Business Type{" "}
                <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <div className="flex flex-wrap gap-2">
                {businessCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setBusinessType(businessType === cat.id ? "" : cat.id)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-colors cursor-pointer active:scale-95 ${
                      businessType === cat.id
                        ? "bg-neutral-800 border-neutral-800 text-white"
                        : "border-gray-200 bg-white text-gray-700 hover:border-gray-300"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </>
        )}

        {deliveryFee > 0 && (
          <div className="flex justify-between text-sm text-gray-700 bg-gray-50 border border-gray-200 rounded-lg px-3 py-2">
            <span>Delivery</span>
            <span className="font-medium">₹{deliveryFee}</span>
          </div>
        )}

        <Turnstile
          onVerify={turnstile.handleVerify}
          onError={turnstile.handleError}
          onExpire={turnstile.handleExpire}
        />

        {submitError && (
          <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">
            {submitError}
          </p>
        )}

        {triedSubmit && hasErrors && (
          <p className="text-sm text-red-600">
            Please fix the errors above before continuing.
          </p>
        )}

        <Button
          type="submit"
          variant="teal"
          className="w-full h-11 rounded-xl active:scale-95"
          disabled={!turnstile.isVerified || isLoading || items.length === 0}
        >
          {isLoading ? "Processing…" : payLabel}
        </Button>
      </form>
    </div>
  );
}
