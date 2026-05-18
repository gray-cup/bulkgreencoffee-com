"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile, useTurnstile } from "@/components/ui/turnstile";
import type { SampleOrderRequest } from "@/app/api/create-payment/route";

const businessCategories = [
  { id: "roastery",   label: "Roastery" },
  { id: "cafe",       label: "Cafe" },
  { id: "hotel",      label: "Hotel" },
  { id: "restaurant", label: "Restaurant" },
  { id: "importer",   label: "Importer / Distributor" },
  { id: "other",      label: "Other" },
];

type Props = {
  products: string[];     // slugs
  quantityTier: string;
  totalAmount: number;
  /** Called before submit so parent can render an order summary */
  renderSummary?: () => React.ReactNode;
  onBack?: () => void;
};

export function CheckoutForm({ products, quantityTier, totalAmount, renderSummary, onBack }: Props) {
  const router = useRouter();
  const turnstile = useTurnstile();

  const [customerType,     setCustomerType]     = useState<"individual" | "business">("individual");
  const [country,          setCountry]          = useState("");
  const [name,             setName]             = useState("");
  const [phone,            setPhone]            = useState("");
  const [email,            setEmail]            = useState("");
  const [pincode,          setPincode]          = useState("");
  const [address,          setAddress]          = useState("");
  const [state,            setState]            = useState("");
  const [gstOrTaxId,       setGstOrTaxId]       = useState("");
  const [businessType,     setBusinessType]     = useState("");
  const [isLoading,        setIsLoading]        = useState(false);
  const [error,            setError]            = useState("");

  // Auto-detect country from the geo API and map code → full name
  useEffect(() => {
    fetch("/api/geo")
      .then((r) => r.json())
      .then((d) => {
        if (!d.country) return;
        try {
          const name = new Intl.DisplayNames(["en"], { type: "region" }).of(d.country);
          if (name) setCountry(name);
        } catch {
          setCountry(d.country);
        }
      })
      .catch(() => {});
  }, []);

  const isIndia        = country.trim().toLowerCase() === "india";
  const isBusiness     = customerType === "business";
  const taxLabel       = isIndia ? "GST Number" : "Tax ID";
  const taxPlaceholder = isIndia ? "22AAAAA0000A1Z5" : "VAT / Tax registration number";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    const payload: SampleOrderRequest = {
      name,
      phone,
      email:        email || undefined,
      country,
      pincode,
      address,
      state:        state || undefined,
      gstOrTaxId:   gstOrTaxId || undefined,
      businessType: businessType || undefined,
      products,
      quantityTier,
      totalAmount,
    };

    try {
      const res = await fetch("/api/create-payment", {
        method:  "POST",
        headers: { "Content-Type": "application/json" },
        body:    JSON.stringify(payload),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to create payment");
      window.location.href = data.paymentLink;
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong");
      setIsLoading(false);
    }
  };

  return (
    <div>
      {renderSummary?.()}

      <form className="space-y-5" onSubmit={handleSubmit}>

        {/* Individual / Business tab */}
        <div className="inline-flex gap-1 bg-gray-100 rounded-xl p-1">
          {(["individual", "business"] as const).map((type) => (
            <button
              key={type}
              type="button"
              onClick={() => setCustomerType(type)}
              className={`px-5 py-1.5 rounded-lg text-sm font-medium transition-colors cursor-pointer capitalize ${
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
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input
            id="name"
            placeholder="Your name"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Phone + Country */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              type="tel"
              placeholder="+91 98765 43210"
              required
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="country">Country</Label>
            <Input
              id="country"
              placeholder="India, Germany, Japan…"
              value={country}
              onChange={(e) => setCountry(e.target.value)}
            />
          </div>
        </div>

        {/* Email */}
        <div className="space-y-2">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            placeholder="you@company.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {/* Address */}
        <div className="space-y-2">
          <Label htmlFor="address">Full Delivery Address</Label>
          <Textarea
            id="address"
            placeholder="House / flat no., street, area, city"
            rows={3}
            required
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        {/* State + Pincode */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-2">
            <Label htmlFor="state">State</Label>
            <Input
              id="state"
              placeholder={isIndia ? "Maharashtra" : "State / Province"}
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="pincode">Pincode / ZIP</Label>
            <Input
              id="pincode"
              placeholder={isIndia ? "400001" : "ZIP / Postal code"}
              required
              value={pincode}
              onChange={(e) => setPincode(e.target.value)}
            />
          </div>
        </div>

        {/* Business-only fields */}
        {isBusiness && (
          <>
            <div className="space-y-2">
              <Label htmlFor="tax">{taxLabel} <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <Input
                id="tax"
                placeholder={taxPlaceholder}
                value={gstOrTaxId}
                onChange={(e) => setGstOrTaxId(e.target.value)}
              />
            </div>

            <div className="space-y-3">
              <Label>Business Type <span className="text-muted-foreground font-normal">(optional)</span></Label>
              <div className="flex flex-wrap gap-2">
                {businessCategories.map((cat) => (
                  <button
                    key={cat.id}
                    type="button"
                    onClick={() => setBusinessType(businessType === cat.id ? "" : cat.id)}
                    className={`px-4 py-2 text-sm rounded-lg border transition-colors cursor-pointer ${
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

        <Turnstile
          onVerify={turnstile.handleVerify}
          onError={turnstile.handleError}
          onExpire={turnstile.handleExpire}
        />

        {error && <p className="text-red-600 text-sm">{error}</p>}

        <Button
          type="submit"
          variant="teal"
          className="w-full h-11 rounded-xl"
          disabled={!turnstile.isVerified || isLoading || products.length === 0}
        >
          {isLoading ? "Processing..." : `Pay ₹${totalAmount} & Order`}
        </Button>
      </form>
    </div>
  );
}
