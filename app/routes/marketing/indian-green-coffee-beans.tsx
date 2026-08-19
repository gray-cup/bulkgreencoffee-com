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
    title: "Indian Green Coffee Beans | Wholesale Arabica & Robusta Supplier",
    description:
      "Buy Indian green coffee beans in bulk, specialty and commercial Arabica & Robusta from Koraput, Chikmagalur, Coorg, Wayanad, and Assam. Export-ready with full documentation.",
    alternates: { canonical: "/indian-green-coffee-beans" },
    openGraph: {
      title: "Indian Green Coffee Beans | Wholesale Supplier",
      description:
        "Specialty and commercial grade Indian green coffee beans, Arabica and Robusta, sourced direct from Koraput, Chikmagalur, Coorg, Wayanad, and Assam. Export-ready with full documentation.",
      url: `${BASE_URL}/indian-green-coffee-beans`,
      locale: "en_US",
    },
  };
}

const faqs = [
  {
    q: "What are Indian green coffee beans?",
    a: "Green coffee beans are unroasted coffee seeds, harvested, processed (washed, natural, or honey), and dried but not yet roasted. India produces both Arabica and Robusta, grown across the Western Ghats (Karnataka, Kerala, Tamil Nadu), the Eastern Ghats (Odisha), and North East India (Assam, Arunachal Pradesh).",
  },
  {
    q: "What grades of Indian green coffee are available?",
    a: "Commercial grades run from AAA down to BB (screen size based), alongside specialty lots (Peaberry, single-estate washed/natural/honey) scoring 84+ SCA. We supply both, so you can order a single commercial grade for volume or a specialty lot for a single-origin feature.",
  },
  {
    q: "What is the minimum order quantity?",
    a: "Specialty single-origin lots start from 10 kg. Commercial grades typically start from 60 kg. We also ship retail-size samples (100g–20kg) for evaluation before you commit to a bulk order.",
  },
  {
    q: "Do you provide export documentation?",
    a: "Yes. Every shipment includes phytosanitary certificates, fumigation reports, moisture analysis, and a certificate of origin, everything customs authorities require on arrival.",
  },
];

export default function IndianGreenCoffeeBeansPage() {
  const featuredProducts = getRandomProducts("indian-green-coffee-beans", 6);
  const waLink = getWhatsappLink(
    "Hi, I'm looking to buy Indian green coffee beans in bulk and would like to enquire about sourcing."
  );

  const breadcrumbs = [
    { name: "Home", url: BASE_URL },
    { name: "Indian Green Coffee Beans", url: `${BASE_URL}/indian-green-coffee-beans` },
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
          <span className="text-black">Indian Green Coffee Beans</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Indian Green Coffee Beans, Wholesale
          </h1>
          <p className="text-md text-muted-foreground max-w-2xl mb-6">
            Specialty and commercial-grade green (unroasted) Arabica and Robusta, sourced directly from Koraput, Chikmagalur, Coorg, Wayanad, and North East India. Export-ready with full phytosanitary and customs documentation.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href={waLink} target="_blank" rel="noopener noreferrer">
              <Button variant="teal" size="sm">WhatsApp: +91 85279 14317</Button>
            </a>
            <Link href="/products">
              <Button variant="lightgraybg" size="sm">Browse Full Catalogue</Button>
            </Link>
          </div>
        </div>

        <hr className="mb-10" />

        {/* Quick facts */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-12">
          {[
            { label: "Origins", value: "6+ regions" },
            { label: "Grades", value: "AAA to BB, Specialty" },
            { label: "MOQ (Specialty)", value: "10 kg" },
            { label: "MOQ (Commercial)", value: "60 kg" },
          ].map((stat) => (
            <div key={stat.label} className="p-5 border rounded-lg text-center">
              <p className="text-lg font-semibold text-black">{stat.value}</p>
              <p className="text-xs text-muted-foreground mt-1">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Origins */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Where We Source From</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-sm">
            {[
              { region: "Koraput, Odisha", note: "Tribal-farmed Arabica, naturals, washed, and Honey Sun-Dried, our flagship East India origin." },
              { region: "Halflong, Assam", note: "Rare high-altitude SL-9 Arabica from the North East, limited seasonal harvests." },
              { region: "Chikmagalur & Coorg, Karnataka", note: "India's original coffee belt, established estate Arabica with consistent quality." },
              { region: "Wayanad, Kerala", note: "Forest-grown, cooperative-sourced Arabica with a smooth, consistent cup." },
              { region: "Chirang, Assam & Tirap, Arunachal Pradesh", note: "North East Indian Robusta, bold and earthy, suited to espresso blends and instant." },
              { region: "Bababudangiri, Karnataka", note: "India's mythical coffee birthplace, rare, high-altitude, earthy-spiced Arabica." },
            ].map((o) => (
              <div key={o.region} className="p-4 border rounded-lg">
                <p className="font-medium text-black mb-1">{o.region}</p>
                <p className="text-muted-foreground">{o.note}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Products */}
        <div className="mb-12">
          <h2 className="text-lg font-semibold text-black mb-4">Popular Indian Green Coffee Lots</h2>
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
          <h2 className="text-lg font-semibold text-black mb-3">Buying Indian Green Coffee Beans</h2>
          <p className="text-sm text-muted-foreground leading-relaxed mb-3">
            India is the world's sixth-largest coffee producer, and unlike most origins, it grows both Arabica and Robusta at scale, primarily shade-grown across the Western Ghats, Eastern Ghats, and North East hill regions. That gives buyers a wide range of options: bright, high-altitude specialty Arabica from Koraput and Chikmagalur; full-bodied commercial Arabica from Coorg and Wayanad; and bold, low-acid Robusta from Assam and Arunachal Pradesh for espresso blends and instant coffee manufacturing.
          </p>
          <p className="text-sm text-muted-foreground leading-relaxed">
            We supply both specialty single-origin lots (10 kg minimum, cupped and scored) and commercial-grade beans (60 kg minimum, screen-sorted AAA through BB) with full export documentation: phytosanitary certificates, fumigation reports, and moisture analysis on every shipment. WhatsApp us with your target origin, grade, and volume, we typically respond within a few hours and can arrange samples before any bulk commitment.
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
          <h2 className="text-lg font-semibold text-black mb-1">Ready to source Indian green coffee?</h2>
          <p className="text-sm text-muted-foreground mb-4">
            Message us on WhatsApp with your target origin, grade, and volume. We respond within a few hours and can arrange samples before any bulk order.
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
