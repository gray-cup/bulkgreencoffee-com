import Link from "@/lib/next-link-compat";
import type { Metadata } from "next";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LocationProductCard } from "@/components/products";
import { getWhatsappLink } from "@/data/destinations";
import { getRandomProducts } from "@/lib/random-products";
import { BreadcrumbSchema, FaqSchema } from "@/components/seo";

const BASE_URL = "https://bulkgreencoffee.com";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: "Bulk Green Coffee | Wholesale Green Coffee Beans, India Export",
    description:
      "Source bulk green coffee beans from India, commercial grades from 60 kg, specialty single-origin lots from 10 kg. Consistent supply, competitive pricing, full export documentation.",
    alternates: { canonical: "/bulk-green-coffee" },
    openGraph: {
      title: "Bulk Green Coffee | Wholesale India Export",
      description:
        "Commercial and specialty grade bulk green coffee from India. Consistent volume supply, competitive per-kg pricing, full export documentation.",
      url: `${BASE_URL}/bulk-green-coffee`,
      locale: "en_US",
    },
  };
}

const faqs = [
  {
    q: "What counts as a bulk green coffee order?",
    a: "Our commercial grades (AAA through BB) start at 60 kg per order, packed in 60 kg GrainPro-lined jute bags. For volume beyond a few bags, tell us your target tonnage and we'll quote per-kg pricing with freight.",
  },
  {
    q: "Can I mix grades or origins in one bulk order?",
    a: "Yes. Many buyers combine a commercial-grade base (for volume and price) with a specialty lot (for a single-origin feature). We can consolidate shipping and documentation across multiple SKUs into one export.",
  },
  {
    q: "How is bulk green coffee priced?",
    a: "Price scales with grade (screen size and cup quality) and quantity. Commercial AAA/AA/A/B+/B/BB grades range roughly ₹680–850/kg; specialty single-origin lots range roughly ₹950–2,200/kg depending on process and rarity. Contact us for current pricing, it moves with the harvest and market.",
  },
  {
    q: "How long does a bulk order take to ship?",
    a: "Once your order is confirmed, we typically dispatch within 1–2 weeks depending on grade availability, plus sea freight transit time to your port (commonly 3–5 weeks depending on destination). We provide phytosanitary certificates, fumigation reports, and a certificate of origin with every shipment.",
  },
];

export default function BulkGreenCoffeePage() {
  const featuredProducts = getRandomProducts("bulk-green-coffee", 6);
  const waLink = getWhatsappLink(
    "Hi, I'm looking to place a bulk green coffee order and would like to enquire about grades, pricing, and volume."
  );

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: "Bulk Green Coffee", url: `${BASE_URL}/bulk-green-coffee` },
  ];

  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <BreadcrumbSchema items={breadcrumbs} />
      <FaqSchema faqs={faqs} />
      <div className="max-w-6xl mx-auto px-4 lg:px-6">

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs text-muted-foreground mb-8 flex-wrap">
          <Link href="/" className="hover:text-black transition-colors">Home</Link>
          <span>/</span>
          <span className="text-black">Bulk Green Coffee</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Bulk Green Coffee, Wholesale India Export
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            Commercial-grade and specialty green coffee at volume, from 60 kg bags to full containers. Consistent supply, competitive per-kg pricing, and full export documentation on every shipment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp: +91 85279 14317</Button>
            </a>
            <Link href="/1-container-green-coffee-beans">
              <Button variant="lightgraybg" size="sm">Full Container Orders</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Pricing ladder */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Commercial Grade Pricing (per kg, indicative)</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border rounded-lg overflow-hidden">
              <thead>
                <tr className="bg-gray-50 text-xs text-muted-foreground">
                  <th className="text-left font-medium px-4 py-2.5">Grade</th>
                  <th className="text-left font-medium px-4 py-2.5">Screen Size</th>
                  <th className="text-right font-medium px-4 py-2.5">Price/kg (₹)</th>
                  <th className="text-right font-medium px-4 py-2.5">MOQ</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { grade: "AAA", screen: "Screen 17+", price: "830–850", moq: "60 kg" },
                  { grade: "AA", screen: "Screen 16+", price: "800–820", moq: "60 kg" },
                  { grade: "A", screen: "Screen 15+", price: "765–785", moq: "60 kg" },
                  { grade: "B+", screen: "Screen 15+", price: "755–775", moq: "60 kg" },
                  { grade: "B", screen: "Screen 13+", price: "695–715", moq: "60 kg" },
                  { grade: "BB", screen: "Screen 12+", price: "680–700", moq: "60 kg" },
                ].map((row) => (
                  <tr key={row.grade} className="border-t border-gray-100">
                    <td className="px-4 py-2.5 font-medium text-black">{row.grade}</td>
                    <td className="px-4 py-2.5 text-muted-foreground">{row.screen}</td>
                    <td className="px-4 py-2.5 text-right">₹{row.price}</td>
                    <td className="px-4 py-2.5 text-right text-muted-foreground">{row.moq}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Indicative pricing, moves with harvest and market conditions. Specialty single-origin lots (Koraput, Halflong, Chikmagalur, and others) are priced separately, typically ₹950–2,200/kg depending on process and rarity. Request a quote for current pricing.
          </p>
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Popular Bulk Lots</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {featuredProducts.map((product) => (
              <LocationProductCard key={product.slug} product={product} />
            ))}
          </div>
          <div className="mt-6">
            <Link href="/products" className="inline-flex items-center gap-1 text-sm text-teal-700 hover:text-teal-900 font-medium">
              View the full catalogue <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

        {/* Body copy */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-3">Sourcing Green Coffee at Volume</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            Bulk buyers, roasters, blenders, café chains, instant coffee manufacturers, and importers, need two things above all: consistent quality across every shipment, and a price that holds at scale. Our commercial grades (AAA through BB) are screen-sorted and moisture-tested to a fixed specification, so a bag ordered this quarter cups the same as a bag ordered next quarter.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Every bulk shipment, whether it's a few 60 kg bags or a full container, ships with phytosanitary certificates, fumigation reports, moisture analysis, and a certificate of origin. WhatsApp us your target grade and volume and we'll quote current pricing with freight.
          </p>
        </div>

        {/* FAQ */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="p-5 border rounded-lg">
                <p className="font-medium text-black mb-2">{faq.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="p-8 rounded-xl border border-teal-200 bg-teal-50">
          <h2 className="text-lg font-semibold text-black mb-1">Ready to place a bulk order?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Message us on WhatsApp with your target grade and volume. We respond within a few hours and can arrange samples before any bulk commitment.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp: +91 85279 14317</Button>
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
