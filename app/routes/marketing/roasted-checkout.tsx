"use client";

import { useEffect, useState } from "react";
import Link from "@/lib/next-link-compat";
import { ChevronLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Turnstile, useTurnstile } from "@/components/ui/turnstile";
import { getProductBySlug } from "@/data/products";
import { pageMeta } from "@/lib/seo";
import {
  roastedPackPrice,
  roastedPackGrams,
  type RoastedKind,
  type RoastedOrderItem,
} from "@/lib/roasted-pricing";
import { deliveryFeeForGrams } from "@/lib/pricing";

export const meta = () =>
  pageMeta({ title: "Checkout | Roasted Coffee | Bulk Green Coffee", description: "Complete your roasted coffee order.", noindex: true });

const CHECKOUT_KEY = "rgc_roasted_order";
type StoredOrder = { kind: RoastedKind; place: string; placeName: string; items: RoastedOrderItem[] };

export default function RoastedCheckoutPage() {
  const turnstile = useTurnstile();
  const [order, setOrder] = useState<StoredOrder | null>(null);
  const [loaded, setLoaded] = useState(false);

  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [country, setCountry] = useState("India");
  const [address, setAddress] = useState("");
  const [state, setState] = useState("");
  const [pincode, setPincode] = useState("");
  const [gstOrTaxId, setGst] = useState("");
  const [busy, setBusy] = useState(false);
  const [err, setErr] = useState("");

  useEffect(() => {
    try {
      const raw = sessionStorage.getItem(CHECKOUT_KEY);
      if (raw) setOrder(JSON.parse(raw));
    } catch {}
    setLoaded(true);
  }, []);

  if (loaded && (!order || !order.items?.length)) {
    return (
      <div className="max-w-lg mx-auto px-4 py-24 text-center">
        <h1 className="text-xl font-semibold text-black mb-3">Your roasted coffee order is empty</h1>
        <p className="text-gray-600 mb-6">Pick your packs on a roasted coffee page first.</p>
        <Button variant="teal">
          <Link href="/roasted-coffee/mumbai">Browse roasted coffee</Link>
        </Button>
      </div>
    );
  }
  if (!order) return null;

  const lines = order.items.map((it) => {
    const p = getProductBySlug(it.slug);
    const unit = roastedPackPrice(order.kind, it.slug, it.pack) ?? 0;
    return { ...it, name: p?.name ?? it.slug, image: p?.image, unit, lineTotal: unit * it.qty };
  });
  const subtotal = lines.reduce((s, l) => s + l.lineTotal, 0);
  const grams = order.items.reduce((s, it) => s + roastedPackGrams(order.kind, it.pack) * it.qty, 0);
  const delivery = deliveryFeeForGrams(grams);
  const total = subtotal + delivery;

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !phone || !address || !pincode) {
      setErr("Name, phone, address and pincode are required.");
      return;
    }
    setErr("");
    setBusy(true);
    try {
      const res = await fetch("/api/roasted-create-payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          kind: order.kind,
          place: order.place,
          name,
          phone,
          email: email || undefined,
          country,
          pincode,
          address,
          state: state || undefined,
          gstOrTaxId: gstOrTaxId || undefined,
          items: order.items,
          currency: "INR",
        }),
      });
      const data = (await res.json()) as any;
      if (!res.ok) throw new Error(data.error || "Failed to create payment");
      try {
        sessionStorage.removeItem(CHECKOUT_KEY);
      } catch {}
      window.location.href = data.paymentLink;
    } catch (e2) {
      setErr(e2 instanceof Error ? e2.message : "Something went wrong.");
      setBusy(false);
    }
  };

  return (
    <div className="max-w-5xl mx-auto px-4 lg:px-6 py-12">
      <Link href={`/${order.kind === "cafe" ? "bulk-roasted-coffee-cafes" : "roasted-coffee"}/${order.place}`} className="text-sm text-muted-foreground hover:text-black mb-8 inline-flex items-center gap-1">
        <ChevronLeft className="w-4 h-4" /> Back to {order.placeName}
      </Link>

      <div className="grid gap-10 lg:grid-cols-2">
        {/* Summary */}
        <div className="space-y-3">
          <h1 className="text-xl font-semibold text-black">
            Roasted {order.kind === "cafe" ? "café bulk" : "retail"} order · {order.placeName}
          </h1>
          <div className="rounded-xl border border-gray-200 divide-y">
            {lines.map((l) => (
              <div key={`${l.slug}-${l.pack}`} className="p-3 flex justify-between text-sm">
                <span>
                  {l.name} — {l.pack} × {l.qty}
                </span>
                <span>₹{l.lineTotal}</span>
              </div>
            ))}
            <div className="p-3 flex justify-between text-sm text-gray-600">
              <span>Delivery</span>
              <span>₹{delivery}</span>
            </div>
            <div className="p-3 flex justify-between font-semibold text-black">
              <span>Total</span>
              <span>₹{total}</span>
            </div>
          </div>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={submit} noValidate>
          <div className="space-y-1.5">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="phone">Phone</Label>
              <Input id="phone" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="country">Country</Label>
              <Input id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
            </div>
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </div>
          <div className="space-y-1.5">
            <Label htmlFor="address">Delivery address</Label>
            <Textarea id="address" rows={3} value={address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="space-y-1.5">
              <Label htmlFor="state">State</Label>
              <Input id="state" value={state} onChange={(e) => setState(e.target.value)} />
            </div>
            <div className="space-y-1.5">
              <Label htmlFor="pincode">Pincode</Label>
              <Input id="pincode" value={pincode} onChange={(e) => setPincode(e.target.value)} />
            </div>
          </div>
          {order.kind === "cafe" && (
            <div className="space-y-1.5">
              <Label htmlFor="gst">
                GST number <span className="text-muted-foreground font-normal">(optional)</span>
              </Label>
              <Input id="gst" value={gstOrTaxId} onChange={(e) => setGst(e.target.value)} />
            </div>
          )}

          <Turnstile onVerify={turnstile.handleVerify} onError={turnstile.handleError} onExpire={turnstile.handleExpire} />
          {err && <p className="text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-3 py-2">{err}</p>}

          <Button type="submit" variant="teal" className="w-full h-11 rounded-xl" disabled={!turnstile.isVerified || busy}>
            {busy ? "Processing…" : `Pay ₹${total} & Order`}
          </Button>
        </form>
      </div>
    </div>
  );
}
