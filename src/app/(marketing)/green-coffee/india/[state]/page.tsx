import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import {
  stateDestinations,
  getStateBySlug,
  getWhatsappLink,
} from "@/data/destinations";
import { getProductBySlug } from "@/data/products";

type Props = { params: Promise<{ state: string }> };

export function generateStaticParams() {
  return stateDestinations.map((s) => ({ state: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { state } = await params;
  const dest = getStateBySlug(state);
  if (!dest) return { title: "Not Found" };
  return {
    title: dest.metaTitle,
    description: dest.metaDescription,
    alternates: { canonical: `/green-coffee/india/${dest.slug}` },
    openGraph: {
      title: dest.metaTitle,
      description: dest.metaDescription,
      url: `https://bulkgreencoffee.com/green-coffee/india/${dest.slug}`,
    },
  };
}

export default async function StatePage({ params }: Props) {
  const { state } = await params;
  const dest = getStateBySlug(state);
  if (!dest) notFound();

  const products = dest.popularProductSlugs
    .map((s) => getProductBySlug(s))
    .filter(Boolean) as NonNullable<ReturnType<typeof getProductBySlug>>[];

  const waLink = getWhatsappLink(
    `Hi, I found your page for ${dest.name} on bulkgreencoffee.com and I would like to enquire about sourcing Indian green coffee.`
  );

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        {/* Header */}
        <div className="mb-10">
          <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground mb-3">
            🇮🇳 India · {dest.name}
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            {dest.heroHeadline}
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            {dest.heroSubtitle}
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp — +91 85279 14317</Button>
            </a>
            <Link href="/contact">
              <Button variant="lightgraybg" size="sm">Contact Form</Button>
            </Link>
            <Link href="/products">
              <Button variant="lightgraybg" size="sm">Browse All Products</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Market Context */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">
            Green Coffee Sourcing in {dest.name}
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed max-w-3xl mb-6">
            {dest.marketContext}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1 text-sm">GST Invoice Included</p>
              <p className="text-sm text-muted-foreground">All India domestic orders come with a valid GST tax invoice from Gray Cup Enterprises Private Limited (GST: 06AAMCG4985H1Z4).</p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1 text-sm">MOQ from 10 kg</p>
              <p className="text-sm text-muted-foreground">Specialty lots start from 10 kg, allowing roasters and cafés to trial new origins without large upfront commitments.</p>
            </div>
            <div className="p-5 border rounded-lg">
              <p className="font-medium text-black mb-1 text-sm">Direct from Origin</p>
              <p className="text-sm text-muted-foreground">We source directly from tribal cooperatives in Koraput, farms in Assam, and estates in South India — no commodity middlemen.</p>
            </div>
          </div>
        </div>

        {/* Featured Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-2">
            Products Available in {dest.name}
          </h2>
          <p className="text-sm text-muted-foreground mb-6">
            All products available for delivery across India with GST invoice.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {products.map((product) => (
              <LocationProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-4">
            <Link href="/products" className="text-sm text-teal-700 hover:text-teal-900 font-medium">
              View all products →
            </Link>
          </div>
        </div>

        <hr className="mb-12" />

        {/* About the company */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">About Bulk Green Coffee</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                Bulk Green Coffee is operated by Gray Cup Enterprises Private Limited — an India-registered company incorporated on 7th November 2025 and headquartered in Sonipat, Haryana.
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                We source green coffee directly from tribal farming cooperatives in Koraput (Odisha), small-holder farms in Halflong and Chirang (Assam), Tirap (Arunachal Pradesh), and established estates in Chikmagalur, Coorg, Wayanad, and Bababudangiri (South India).
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                We supply domestic Indian buyers (roasters, café chains, institutional buyers) and export to buyers in Europe, the Middle East, Southeast Asia, and beyond.
              </p>
            </div>
            <div className="space-y-2 text-sm">
              {[
                { label: "Legal Name", value: "Gray Cup Enterprises Private Limited" },
                { label: "CIN", value: "U47211DL2025PTC457808" },
                { label: "GST", value: "06AAMCG4985H1Z4" },
                { label: "Incorporated", value: "7th November 2025" },
                { label: "WhatsApp", value: "+91 85279 14317" },
                { label: "UPI", value: "graycup@kotak" },
              ].map((item) => (
                <div key={item.label} className="flex gap-3">
                  <span className="text-muted-foreground w-28 shrink-0">{item.label}</span>
                  <span className="text-black">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* FAQ */}
        {dest.faqs.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold text-black mb-6">
              FAQs — Green Coffee in {dest.name}
            </h2>
            <div className="space-y-4">
              {dest.faqs.map((faq, i) => (
                <div key={i} className="p-5 border rounded-lg">
                  <p className="font-medium text-black mb-2">{faq.q}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">
            Ready to source green coffee in {dest.name}?
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            Message us on WhatsApp with your origin preference, volume, and delivery location. We respond within a few hours and can arrange samples before any bulk order.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp — +91 85279 14317</Button>
            </a>
            <Link href="/contact">
              <Button variant="lightgraybg" size="sm">Contact Form</Button>
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
