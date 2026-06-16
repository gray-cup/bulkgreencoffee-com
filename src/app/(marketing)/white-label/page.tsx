import React from "react";
import { Button } from "@/components/ui/button";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "White Label Green Coffee Sourcing | Indian Arabica & Robusta | Bulk Green Coffee",
  description:
    "Source Indian green coffee under your own brand. We supply specialty and commercial Arabica and Robusta from Koraput, Assam, Karnataka, and Kerala — export-ready with full traceability. MOQ from 10 kg.",
  alternates: { canonical: "/white-label" },
};

export default function WhiteLabelPage() {
  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-12">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            White Label
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Your Brand. Our Coffee.
          </h1>
          <p className="text-md text-muted-foreground max-w-xl">
            We can be your sourcing partner — supplying premium Indian green
            coffee under your brand name. Simple, reliable, and scalable.
          </p>
        </div>

        <hr className="mb-12" />

        {/* What we offer */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            What we offer
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Direct Origin Sourcing</p>
              <p className="text-sm text-muted-foreground">
                We source directly from tribal cooperatives in Koraput (Odisha), small-holder farms in Halflong (Assam), and established estates in Karnataka and Kerala — cutting out commodity brokers and giving you a genuine traceability story for your brand.
              </p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Flexible Quantities</p>
              <p className="text-sm text-muted-foreground">
                Start with 10 kg sample lots to validate quality before committing to scale. We accommodate orders from small roasters trialling a new origin up to container-scale buyers purchasing full export lots.
              </p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Quality Assurance & Documentation</p>
              <p className="text-sm text-muted-foreground">
                Every batch is moisture-checked and cupped before dispatch. We supply phytosanitary certificates, fumigation reports, moisture analysis, and SCA score sheets (for specialty lots) — so your customers can trust the quality claim on your label.
              </p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1">Worldwide Shipping</p>
              <p className="text-sm text-muted-foreground">
                We export to Europe, the Middle East, Southeast Asia, and North America. FOB Chennai and FOB Mundra pricing available. We handle all export documentation including COO, phytosanitary, and fumigation certificates.
              </p>
            </div>
          </div>
        </div>

        {/* What coffees you can white-label */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">
            What coffees can I white-label?
          </h2>
          <p className="text-sm text-muted-foreground mb-5">
            Any product in our catalogue is available for white-label supply. Popular choices for branded Indian coffee programmes include:
          </p>
          <div className="space-y-3">
            {[
              {
                name: "Koraput Arabica (Natural / HSD / Washed)",
                desc: "Odisha tribal-grown specialty Arabica — GI-pending origin with a compelling provenance story. Scores 85–88 SCA. Available in natural, honey, and washed process.",
              },
              {
                name: "Halflong SL-9 Arabica Naturals",
                desc: "Rare high-altitude Arabica from Dima Hasao, Assam. Delicate florals, red-berry sweetness, 89 SCA. Limited availability — contact us for current lot status.",
              },
              {
                name: "Chikmagalur / Coorg / Wayanad Arabica",
                desc: "South India's most reliable commercial and specialty Arabica. Available in AA, A, AB, and PB (Peaberry) grades. Year-round supply.",
              },
              {
                name: "Commercial AA/AAA Grade",
                desc: "Plantation-grade washed Arabica for high-volume roasters, filter coffee brands, and blending. Consistent quality, competitive pricing from ₹800/kg.",
              },
              {
                name: "CxR Robusta (Assam / Arunachal Pradesh)",
                desc: "Natural-process Robusta from tribal farms in North East India. Bold body, earthy-chocolate profile. Ideal for espresso blends and instant coffee manufacturers.",
              },
            ].map((item) => (
              <div key={item.name} className="flex gap-3 p-4 rounded-lg border border-neutral-200">
                <div className="w-1.5 h-1.5 rounded-full bg-teal-600 mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-black text-sm">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* How it works */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">How it works</h2>
          <div className="space-y-4">
            {[
              { step: "1", title: "Tell us what you need", desc: "Share your target origin, process type, grade, volume, and timeline. We'll come back with current lot availability and pricing within 24 hours." },
              { step: "2", title: "Receive samples", desc: "We send green coffee samples before any bulk commitment. Most buyers cup 2–3 lots before selecting their white-label origin." },
              { step: "3", title: "Confirm and order", desc: "Once you've selected a lot, we confirm the order, raise a proforma invoice, and begin export documentation. Lead time is typically 2–4 weeks from order confirmation." },
              { step: "4", title: "Receive and roast", desc: "Your green coffee arrives in GrainPro-lined jute bags with all documentation. Roast it, pack it into your branded bags, and sell it under your brand." },
            ].map((item) => (
              <div key={item.step} className="flex gap-4">
                <div className="w-7 h-7 rounded-full bg-teal-800 text-white text-xs font-semibold flex items-center justify-center shrink-0 mt-0.5">
                  {item.step}
                </div>
                <div>
                  <p className="font-medium text-black text-sm">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Packaging note */}
        <div className="mb-12 p-5 border border-neutral-200 rounded-lg bg-neutral-50">
          <p className="text-sm font-semibold text-black mb-1">
            A note on packaging
          </p>
          <p className="text-sm text-muted-foreground">
            We focus entirely on green coffee sourcing — we do not provide custom retail packaging.
            For branded valve bags, stand-up pouches, and kraft packaging, we recommend{" "}
            <a
              href="https://www.swisspac.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black underline underline-offset-4 hover:text-neutral-600"
            >
              SwissPac
            </a>
            , a trusted coffee packaging partner used by brands worldwide.
          </p>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <a
            href="https://wa.me/918527914317?text=Hi%2C%20I%20found%20the%20White%20Label%20page%20on%20bulkgreencoffee.com%20and%20I%20would%20like%20to%20enquire%20about%20it."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="black" size="sm">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Message us on WhatsApp
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
}
