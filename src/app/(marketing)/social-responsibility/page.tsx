import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Social Responsibility | Tribal Farmers & Sustainability | Bulk Green Coffee",
  description:
    "How Bulk Green Coffee supports tribal coffee farming communities in Koraput, Assam, and Arunachal Pradesh — fair pricing, traceability, and sustainable sourcing from India's most remote growing regions.",
  alternates: { canonical: "/social-responsibility" },
};

export default function SocialResponsibilityPage() {
  return (
    <div className="min-h-screen py-20 px-4 lg:px-6">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">

        <div className="mb-16">
          <p className="text-xs font-semibold uppercase tracking-widest text-teal-700 mb-3">
            Social Responsibility
          </p>
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-4">
            Coffee That Gives Back to the People Who Grow It
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Most Indian green coffee is bought by large traders who aggregate from middlemen — leaving farmers with little price transparency and no connection to the end buyer. We try to change that, one origin at a time.
          </p>
        </div>

        <hr className="mb-16" />

        {/* Tribal Farmers Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Tribal Coffee Farmers of Koraput, Odisha
          </h2>
          <p className="text-neutral-600 mb-4">
            Koraput district in southern Odisha is home to some of India's most remarkable coffee. At elevations between 900 and 1,350 metres in the Eastern Ghats, tribal farming communities — primarily from the Kondh, Gadaba, and Poraja tribes — have been growing Arabica coffee since the 1960s. As of 2023, over 3,600 tribal farmers cultivate coffee across more than 7,100 hectares of forest-fringe land.
          </p>
          <p className="text-neutral-600 mb-4">
            Coffee here isn't just a crop — it was introduced as an alternative to <em>Podu</em> (shifting cultivation), helping stabilise income for communities that had previously depended on slash-and-burn farming. The Odisha government formally launched Koraput Coffee as a brand in 2019, and the region is actively pursuing a Geographical Indication (GI) tag to protect its name on international markets.
          </p>
          <p className="text-neutral-600">
            When you buy Koraput green coffee through us, you are buying from these farming communities — with full traceability back to the district and cooperative. We pay above-market rates and work with cooperative structures that ensure farmers receive a meaningful share of the export price.
          </p>
        </section>

        {/* North East India */}
        <section className="mb-16 p-6 bg-neutral-50 rounded-xl border border-neutral-200">
          <h2 className="text-2xl font-semibold text-black mb-4">
            North East India: Naga, Wancho & Dimasa Farmers
          </h2>
          <p className="text-neutral-600 mb-4">
            Our Halflong Arabica (Assam) comes from the Dima Hasao hills — a region inhabited primarily by the Dimasa people, one of Assam's indigenous communities. Coffee farming here is small-scale, forest-integrated, and largely organic by practice (not always by certification). The SL-9 varietal grown here scores consistently above 88 SCA, yet most of the harvest has historically been sold domestically at commodity prices.
          </p>
          <p className="text-neutral-600">
            Our Tirap Robusta (Arunachal Pradesh) is grown by Naga and Wancho tribal communities in the eastern Himalayan foothills — an origin so remote it barely appears in international green coffee directories. By building a direct supply relationship here, we help create income stability for farming families in one of India's most geographically isolated regions.
          </p>
        </section>

        {/* Shade-Grown & Environmental */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Shade-Grown Coffee and Environmental Stewardship
          </h2>
          <p className="text-neutral-600 mb-4">
            Almost all Indian coffee is shade-grown — a tradition that predates any modern sustainability framework. Coffee grows under a multi-tier canopy of silver oak, jackfruit, pepper vines, cardamom, and native jungle trees. This creates a biodiverse microhabitat that supports bird populations, maintains soil health, prevents erosion, and sequesters carbon.
          </p>
          <p className="text-neutral-600 mb-4">
            Shade-grown coffee is inherently slower-growing. The cherries develop over a longer period, accumulating more sugars and acids — which translates directly into better cup quality. It also means lower yields per hectare than sun-grown monoculture, which is one reason Indian coffee commands a premium over comparable origins from flat-land sun farms.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-6">
            {[
              { label: "Multi-canopy shade", desc: "Silver oak, pepper, cardamom, and native jungle trees form the shade layer above every Indian coffee farm we source from." },
              { label: "Minimal chemical inputs", desc: "Tribal farms in Koraput and North East India rely primarily on natural compost, fallen leaf mulch, and forest cover — not synthetic fertilisers." },
              { label: "Water conservation", desc: "The washed Koraput lots use spring-fed fermentation tanks and recirculating wash channels — minimising freshwater consumption at the processing station." },
            ].map((item) => (
              <div key={item.label} className="p-5 rounded-lg border border-neutral-200 bg-white">
                <p className="font-medium text-black mb-1 text-sm">{item.label}</p>
                <p className="text-sm text-neutral-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Fair Pricing */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold text-black mb-4">
            Our Approach to Pricing and Transparency
          </h2>
          <p className="text-neutral-600 mb-4">
            We don't publish a fixed "fair trade premium" because we think that framing misses the point. Instead, we work to understand what farmers actually need to sustain quality production — and price accordingly. For specialty lots, that means paying well above the ICO reference price. For commercial grade, it means avoiding the race-to-the-bottom dynamic that exploits farmers who lack direct market access.
          </p>
          <p className="text-neutral-600">
            We also try to be transparent with our buyers about what they're actually purchasing: which district, which cooperative, which varietal, which harvest season, and what process was used. Traceability isn't just a marketing story — it's a mechanism that keeps everyone in the supply chain accountable.
          </p>
        </section>

        {/* CTA */}
        <div className="p-6 bg-teal-50 border border-teal-200 rounded-xl">
          <p className="font-semibold text-black mb-2">Want to know more about our sourcing?</p>
          <p className="text-sm text-neutral-600 mb-4">
            We're happy to share lot-level information — farm location, processing partner, moisture content, and SCA scores — for any product you're considering. Just get in touch.
          </p>
          <a
            href="/contact"
            className="inline-block px-5 py-2 rounded-lg bg-teal-800 text-white text-sm font-medium hover:bg-teal-900 transition-colors"
          >
            Contact Us
          </a>
        </div>

      </div>
    </div>
  );
}
