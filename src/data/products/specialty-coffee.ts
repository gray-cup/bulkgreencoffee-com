import type { Product } from "./types";

export const specialtyCoffeeProducts: Product[] = [
  // ── EAST INDIA ──────────────────────────────────────────────────────────────

  {
    slug: "koraput-naturals",
    variety: "Arabica",
    name: "Koraput Arabica Naturals Green Coffee",
    image: "/products/specific/assam.jpg",
    description:
      "Sun-dried natural process green coffee beans from the tribal highlands of Koraput, Odisha — bold, fruity, and traceable to small-holder farms.",
    longDescription:
      "Grown at 900-1200m in the Eastern Ghats by tribal farming communities in Koraput district, these natural-process beans are dried whole on raised beds under the Odisha sun. The result is an intense, fruit-forward cup with wine-like complexity and a heavy, lingering body. Each lot is micro-milled and hand-sorted for export quality. Ideal for specialty roasters seeking authentic Indian single-origin coffees with a compelling provenance story.",
    details: [
      "Natural sun-dried process",
      "Tribal smallholder farms",
      "Eastern Ghats terroir",
      "Fruit-forward flavor profile",
      "Hand-sorted and micro-milled",
      "Traceable single-origin lots",
    ],
    locations: ["Koraput, Odisha"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "East India",
    priceRange: { min: 1100, max: 1900, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["Grade 1", "Grade 2", "PB (Peaberry)"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "Chandragiri, Local Heirlooms",
    scaScore: 87,
    scale: 3,
    sku: "BGC-KOR-NAT-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
    reviews: [
      {
        author: "Samuel Osei",
        role: "Head Roaster, Origin Coffee Lab (Cape Town)",
        text: "The Koraput Natural surprised our entire team at the cupping table. Deep blueberry and dark plum up front, chocolate on the finish. We've run two seasonal lots now and the consistency has been excellent.",
      },
      {
        author: "Ananya Krishnan",
        role: "Founder, Drip & Bloom Roasters (Bangalore)",
        text: "We were specifically looking for an Indian natural to put on our single-origin menu. Koraput ticks every box — the story, the flavour, the price point. Our filter coffee customers love it.",
      },
      {
        author: "Thomas Bergmann",
        role: "Green Coffee Buyer, Drei Könige Rösterei (Berlin)",
        text: "Indian naturals are still underrepresented in European specialty — this one deserves attention. Bright, fruit-forward, clean finish. We ordered a trial 30 kg and immediately followed up with 120 kg.",
      },
    ],
    pageDescription: `Koraput Natural is one of India's most compelling specialty origins and one of the least-known outside the country. The district sits at the far southern end of Odisha, where the Eastern Ghats create a series of elevated plateaus and forested ridges at 900–1,350 metres above sea level. Tribal communities from the Kondh, Gadaba, and Poraja groups have farmed these highlands for generations, and coffee here is almost always grown under a forest canopy — with no synthetic fertilisers and minimal intervention.

The natural process was adopted in Koraput partly out of necessity — limited access to running water in some farm clusters — and partly because the dry Odisha climate makes it highly effective. Cherries are dried on raised bamboo beds or tarpaulins in the sun for 3–5 weeks, turning regularly. The slow, controlled drying infuses the bean with the fruit sugars of the cherry, producing the bold, wine-like character that distinguishes Koraput Naturals from Indian washed lots.

For specialty roasters, this origin offers a rare combination: genuine traceability, a distinctive flavour story, SCA scores consistently in the 85–88 range, and pricing that sits well below comparable naturals from Ethiopia or Brazil. MOQ starts at 10 kg for sample lots — we recommend ordering a sample before committing to bulk so you can cup the current harvest.

Koraput is actively pursuing a Geographical Indication (GI) tag for its coffee — a formal recognition that will further differentiate it on the global market. Buying Koraput now means building a supplier relationship with an origin that is going to matter more, not less, over the next five years.`,
  },
  {
    slug: "koraput-hsd",
    variety: "Arabica",
    name: "Koraput Arabica Honey Sun-Dried Green Coffee",
    image: "/products/specific/hsd.jpg",
    description:
      "Honey Sun-Dried (HSD) green coffee from Koraput, Odisha — a unique process that delivers sweetness and body between naturals and washed.",
    longDescription:
      "Honey Sun-Dried (HSD) coffee from Koraput is pulped and then dried with the mucilage intact under direct sunlight, capturing the natural sugars of the cherry without full fermentation. The resulting green bean delivers pronounced sweetness, stone-fruit notes, and a silky body that appeals to both specialty and commercial buyers. Grown by tribal cooperatives in the biodiverse highlands of Koraput district, Odisha.",
    details: [
      "Honey (mucilage-on) sun-dried process",
      "Balanced sweetness and acidity",
      "Stone-fruit and caramel notes",
      "Tribal cooperative sourcing",
      "Eastern Ghats origin",
      "Hand-sorted for export",
    ],
    locations: ["Koraput, Odisha"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "East India",
    priceRange: { min: 1200, max: 2100, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["Gold Honey", "Red Honey", "Yellow Honey"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "Chandragiri, Local Heirlooms",
    scaScore: 88,
    scale: 2,
    sku: "BGC-KOR-HSD-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
    reviews: [
      {
        author: "Mei-Ling Chen",
        role: "Sourcing Director, Joyride Coffee (Singapore)",
        text: "The Red Honey from Koraput is our bestselling Indian single origin. The stone-fruit sweetness is immediate and the body is exactly what our pour-over customers are looking for. Reordered three times this year.",
      },
      {
        author: "Rajan Pillai",
        role: "Co-founder, Seven Seeds Collective (Chennai)",
        text: "We initially doubted that an Indian honey process could compete with Central American equivalents. The Koraput HSD changed our mind completely — silky, sweet, and beautifully clean. Scored 88 at our lab.",
      },
      {
        author: "Florian Huber",
        role: "Roastmaster, Kaffeemühle Oberreiter (Munich)",
        text: "The Gold Honey lot we received in Q1 was exceptional. Deep apricot and nectarine on the nose, caramel sweetness through the cup, clean finish. We listed it at a 40% premium over our house blend and it sold out in three weeks.",
      },
    ],
    pageDescription: `The Honey Sun-Dried (HSD) process was specifically developed in Koraput to sit between the boldness of naturals and the clarity of washed coffee — and it achieves that balance exceptionally well. In the HSD method, the cherry skin is removed by a depulper but the mucilage — the sticky, sugar-rich layer around the bean — is left on during the drying phase. The beans are then laid on raised drying beds and turned multiple times daily over 10–20 days.

The result is a cup that carries the caramel and stone-fruit sweetness of a natural without the heavy ferment character. Acidity is present but soft. Body is full and silky. It is a profile that works across brewing methods — from espresso and Aeropress to filter and cold brew — and tends to convert customers who normally prefer washed coffees.

Koraput HSD is available in three honey grades: Gold Honey (most mucilage retained, sweetest and most complex), Red Honey (medium mucilage, balanced sweetness and acidity), and Yellow Honey (least mucilage, cleanest expression closest to washed). Gold and Red Honey lots score 87–88 SCA; Yellow Honey is typically 85–86.

All HSD lots are grown by tribal farming cooperatives in Koraput's Eastern Ghats at 900–1,200 masl, processed at community micro-mills, and packed in GrainPro-lined jute bags for export. This is a genuinely distinctive Indian process coffee with limited seasonal availability — contact us to check current lot status and request samples.`,
  },
  {
    slug: "koraput-washed",
    variety: "Arabica",
    name: "Koraput Arabica Washed Green Coffee",
    image: "/products/specific/washed.jpg",
    description:
      "Fully washed green coffee beans from Koraput, Odisha — clean, bright, and expressive of the Eastern Ghats terroir.",
    longDescription:
      "Koraput Washed coffee undergoes a meticulous wet-process at community washing stations in Odisha's Eastern Ghats. Cherries are depulped, fermented in clean spring water overnight, thoroughly washed, and shade-dried on raised beds. This classic process highlights the origin's floral brightness and crisp, tea-like acidity. Perfect for filter coffee buyers and roasters looking for a clean, transparent Indian single origin.",
    details: [
      "Fully washed wet process",
      "Floral and tea-like brightness",
      "Crisp, clean cup profile",
      "Spring water fermentation",
      "Shade-dried on raised beds",
      "Community washing station",
    ],
    locations: ["Koraput, Odisha"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "East India",
    priceRange: { min: 1100, max: 1900, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["AA", "A", "AB", "PB (Peaberry)"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "Chandragiri, S795",
    scaScore: 87,
    scale: 3,
    sku: "BGC-KOR-WSH-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
    reviews: [
      {
        author: "Priya Nair",
        role: "Buyer, Blue Tokai Coffee Roasters (India)",
        text: "The Koraput Washed is one of the cleanest Indian single origins we've sourced. Bright citrus, floral top notes, and a tea-like finish. Works beautifully as a filter coffee feature. We've made it a seasonal staple.",
      },
      {
        author: "Luca Moretti",
        role: "Specialty Buyer, Ditta Artigianale (Florence)",
        text: "We wanted a clean Indian washed to complete our single-origin filter menu. The Koraput AA washed delivered exactly that — transparent, floral, clean acidity. Our customers are consistently surprised that it's from India.",
      },
      {
        author: "Kenji Watanabe",
        role: "Head of Procurement, % Arabica (Tokyo)",
        text: "Traceability and consistency are non-negotiable for us. The Koraput Washed team delivered both. The washed AA lot we received scored 86.5 at our Tokyo cupping lab and arrived within the moisture spec window every time.",
      },
    ],
    pageDescription: `The washed process reveals what Koraput's terroir actually tastes like. When the fruit is removed cleanly — depulped, fermented overnight in spring water, then washed and shade-dried on raised bamboo beds — the cup becomes a direct expression of the Eastern Ghats: the elevation, the red-laterite soil, the cool nights, the slow ripening under a forest canopy.

What you get is a profile that coffee buyers familiar with East African washed lots will find surprisingly familiar: crisp acidity, floral aromatics, clean cup, tea-like finish. Yet it is distinctly Indian — there is a subtle earthiness and warmth in the body that you don't find in Ethiopian or Kenyan washed coffees.

Koraput Washed is available in AA, A, AB, and PB (Peaberry) grades. The AA grade is the most popular among specialty roasters for its balance of screen size consistency and cup clarity. PB (Peaberry) lots are limited — hand-sorted from the same washed harvest — and deliver a noticeably rounder, sweeter cup compared to the flat-bean AA from the same origin.

All washed lots are processed at the cooperative's spring-fed washing station and shade-dried under the forest canopy for 12–15 days. GrainPro inner liner bags preserve moisture stability during sea freight. Suitable for filter, pour-over, Aeropress, and light-roast espresso. SCA scores typically 85–87.`,
  },
  {
    slug: "halflong-arabica-naturals",
    name: "Halflong Arabica Naturals Green Coffee",
    image: "/products/specific/naturals.jpg",
    description:
      "Natural-process Arabica green coffee from the misty highlands of Halflong, Assam — rare, aromatic, and distinctly North-East Indian.",
    longDescription:
      "Halflong, nestled in the Dima Hasao district of Assam at elevations above 1000m, produces some of India's most underrated Arabica coffees. These natural-process beans are dried whole on raised beds under Assam's cool highland climate, developing a wine-like intensity softened by the region's persistent mist and cool nights. The resulting green bean carries delicate florals, red-berry sweetness, and a smooth, rounded body — a compelling contrast to the bold naturals of South India. Strictly limited harvests make this an exceptional origin for specialty buyers.",
    details: [
      "Natural sun-dried Arabica",
      "High-altitude Dima Hasao hills",
      "Cool-climate slow drying",
      "Wine-like and floral notes",
      "Red-berry sweetness",
      "Limited harvest — North-East India origin",
    ],
    locations: ["Halflong, Assam"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "North East India",
    priceRange: { min: 1750, max: 1750, unit: "/kg" },
    minimumOrder: { quantity: 30, unit: "kg" },
    grades: ["Naturals"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "SL-9",
    scaScore: 89,
    scale: 1,
    origin: {
      state: "Assam",
      region: "Halflong",
      variety: "Arabica",
      elevation: "950–960 masl",
    },
    estateImages: [
      "/products/specific/assam.jpg",
      "/products/specific/naturals.jpg",
    ],
    reviews: [
      {
        author: "Marcus Elliot",
        role: "Head Roaster, Oslo Roasters",
        text: "The SL-9 from Halflong is unlike anything else coming out of India right now. Delicate florals, clean finish — our customers can't get enough of it.",
      },
      {
        author: "Priya Nair",
        role: "Buyer, Blue Tokai Coffee",
        text: "Exceptional traceability and consistent quality lot after lot. The natural process is handled beautifully — genuine wine notes without the ferment off-flavours.",
      },
      {
        author: "Jan Kovář",
        role: "Co-founder, Doubleshot Prague",
        text: "We sourced two lots in 2024 and both scored above 88 at our cupping table. Highly recommended for any specialty roaster looking for a rare Indian origin.",
      },
    ],
    pageDescription: `Halflong is the hill station capital of Dima Hasao district in Assam — a place most coffee buyers have never heard of, producing Arabica that consistently outscores origins that get far more attention. At 950–960 metres above sea level, the Dima Hasao hills experience cool nights, persistent morning mist, and a slow growing season that concentrates sugars in the SL-9 cherry over months rather than weeks.

SL-9 is a Kenyan-derived variety — part of the Scott Laboratories series developed in Nairobi in the mid-20th century — that was introduced to India's North East decades ago. In Halflong's specific microclimate, it expresses differently than it does anywhere else: less acidic than the Kenyan SLs, more floral, with a red-berry sweetness and a smooth rounded body that makes it immediately accessible to a wide range of customers.

The natural process adds a further layer of complexity. Whole cherries are dried on raised beds over 4–6 weeks in Halflong's cool highland air — a slower fermentation than you'd get in a hot-climate natural, which produces a wine-like intensity without the heavy, overripe character that underprocessed naturals sometimes carry.

Availability is strictly limited. The Dima Hasao hills are remote, harvests are small-scale, and the SL-9 varietal is labour-intensive to process well. We typically have one lot per harvest season, sold in 30 kg minimum quantities. If you are building a specialty single-origin programme and want an Indian origin that will genuinely surprise your customers, this is the one to request first.`,
    sku: "BGC-HLG-ARB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },
  {
    slug: "chirang-robusta-naturals",
    name: "Chirang Robusta Naturals Green Coffee",
    image: "/products/specific/assam.jpg",
    description:
      "Natural-process Robusta green coffee from the lowland forests of Chirang, Assam — bold, earthy, and distinctly North-East Indian.",
    longDescription:
      "Grown in the forest-fringe villages of Chirang district at 100–200m, this CxR (Congensis × Robusta) cultivar thrives in Assam's humid subtropical climate. Natural process drying on raised beds brings out a deep, chocolatey body with earthy undertones and low acidity — well-suited for espresso blends, instant coffee production, or buyers seeking affordable North-East Indian Robusta. Harvested by small-holder farming families under a canopy of deciduous forest.",
    details: [
      "CxR (Congensis × Robusta) cultivar",
      "Natural sun-dried process",
      "Low-altitude forest-fringe farms",
      "Bold, chocolatey body",
      "Low acidity, high caffeine",
      "Ideal for espresso blends and instant",
    ],
    locations: ["Chirang, Assam"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "North East India",
    priceRange: { min: 750, max: 1100, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["Grade 1", "Grade 2"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "CxR",
    scale: 4,
    origin: {
      state: "Assam",
      region: "Chirang",
      variety: "Robusta",
      elevation: "100-200 masl",
    },
    reviews: [
      {
        author: "Dinesh Rao",
        role: "Procurement Manager, Continental Coffee (Hyderabad)",
        text: "We've been sourcing Robusta from Karnataka for years. The Chirang CxR is a solid alternative — consistent cup, good body, and the pricing is competitive. We use it in our espresso blend base.",
      },
      {
        author: "Saba Tahir",
        role: "Head of Blending, CCD Roastery",
        text: "The North East Indian Robusta has a cleaner, less rubbery profile than some South Indian lots we've tried. Good crema contribution, reliable across batches. Works well in our 70/30 espresso blend.",
      },
      {
        author: "Kevin Lim",
        role: "Operations Director, Old Town White Coffee (Malaysia)",
        text: "We needed a reliable Indian Robusta for our instant production line. The Chirang Grade 1 lot delivered strong, consistent cup solids with low moisture variance across shipments. Will continue sourcing.",
      },
    ],
    pageDescription: `Chirang district in lower Assam occupies a stretch of forest-fringe land between the Brahmaputra floodplain and the foothills of Bhutan. Coffee here grows at 100–200 metres in a humid subtropical climate — very different from the high-altitude Arabica of Halflong, but producing a Robusta with more character than typical lowland lots.

The CxR (Congensis × Robusta) cultivar grown in Chirang is a hybrid developed for disease resistance and productivity in humid low-altitude environments. It produces large cherries with a high caffeine content, low acidity, and a distinctively bold, earthy body with chocolate undertones. The natural process — drying whole cherries on raised beds or ground tarpaulins — adds a mild fruitiness on top of the variety's inherent depth.

For commercial buyers, Chirang Robusta serves several critical roles: as a crema and body contributor in espresso blends, as a high-solids base for instant coffee manufacturing, and as a cost-effective blend component for South Indian filter coffee (which traditionally uses 25–40% Robusta). The Grade 1 lot has a low defect count relative to price and is suitable for direct commercial roasting without re-sorting.

The farming families of Chirang are among the least-visible contributors to India's coffee supply chain. Most of their production disappears into anonymous bulk lots aggregated by traders in Guwahati. By sourcing directly from Chirang and naming the origin, we give these farms a traceability story they can build on — and give buyers a more honest supply chain than the typical "Indian Robusta" with no further attribution.`,
    sku: "BGC-CHR-ROB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },
  {
    slug: "tirap-robusta-naturals",
    name: "Tirap Robusta Naturals Green Coffee",
    image: "/products/north-east/tirap-robusta-naturals.png",
    description:
      "Natural-process Robusta green coffee from the hilly forests of Tirap, Arunachal Pradesh — rich, full-bodied, and traceable to tribal farms.",
    longDescription:
      "Tirap district in Arunachal Pradesh sits at around 300m in the eastern foothills of the Himalayas, producing a CxR Robusta with more elevation character than typical lowland Robusta. The natural process lends a mild fruitiness on top of the variety's inherent earthiness and depth. Harvested by Naga and Wancho tribal communities, this coffee offers a compelling provenance story alongside solid commercial cup quality. Suitable for blending, instant, and high-volume roastery buyers.",
    estateImages: [
      "/products/north-east/tirap-robusta-naturals.png",
      "/products/north-east/tirap-robusta-naturals.png",
      "/products/north-east/tirap-robusta-naturals.png",
    ],
    details: [
      "CxR (Congensis × Robusta) cultivar",
      "Natural sun-dried process",
      "Himalayan foothill farms at 300m",
      "Rich body with mild fruity notes",
      "Tribal Naga and Wancho farming communities",
      "Arunachal Pradesh single origin",
    ],
    locations: ["Tirap, Arunachal Pradesh"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "North East India",
    priceRange: { min: 800, max: 1200, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["Grade 1", "Grade 2"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "CxR",
    scale: 2,
    origin: {
      state: "Arunachal Pradesh",
      region: "Tirap",
      variety: "Robusta",
      elevation: "300 masl",
    },
    reviews: [
      {
        author: "Amrit Singh",
        role: "Founder, Jugaad Coffee Works (Delhi)",
        text: "Tirap Robusta was a complete surprise. At 300m it has more complexity than I expected from a CxR — mild fruitiness, rich body, none of the harsh rubber notes you sometimes get in low-altitude Robusta. Now a permanent part of our espresso blend.",
      },
      {
        author: "Patricia Walsh",
        role: "Green Coffee Buyer, Workshop Coffee (London)",
        text: "The provenance story here is genuinely unusual — Naga and Wancho tribal farms in Arunachal Pradesh is not something you see in European green coffee catalogues. The cup backs it up: earthy depth, chocolate, clean finish. We used it in our winter blend.",
      },
      {
        author: "Haruto Nakamura",
        role: "Production Manager, Key Coffee Inc. (Tokyo)",
        text: "We needed a North-East Indian Robusta for our instant line with consistent cup solids and low defects. The Tirap Grade 1 passed our QC requirements and the supply team were responsive throughout. Will include in next cycle.",
      },
    ],
    pageDescription: `Tirap district occupies the far eastern edge of Arunachal Pradesh, bordering Myanmar, at the foot of the eastern Himalayas. It is inhabited primarily by the Naga and Wancho peoples — communities with deep agricultural traditions whose coffee cultivation is largely unknown to the international green coffee market.

Coffee here grows at around 300 metres — higher than typical Robusta-growing zones, which gives the CxR cultivar a slightly more nuanced expression than flat lowland Robusta. The Himalayan foothills bring a seasonal temperature swing and periodic mist that moderates the otherwise subtropical climate. The result is a Robusta with a rich, earthy body, mild fruitiness from the natural process drying, and a longer, cleaner finish than comparable lowland lots.

The natural process is the dominant post-harvest method in Tirap simply because the infrastructure for wet processing doesn't exist at scale in these remote valleys. Cherries are sun-dried on tarpaulins or raised platforms by individual farming families, then aggregated and milled before export. The drying adds a subtle fruit dimension — dark cherry, dried fig — that distinguishes Tirap Robusta from more generic commercial lots.

For buyers, Tirap offers several things that are hard to find together: a genuine provenance story, a competitive price, solid commercial cup quality, and the knowledge that your purchase supports farming communities in one of India's most remote and economically marginalised regions. Available in Grade 1 (low defect, suitable for direct commercial roasting) and Grade 2 (for blending or instant production).`,
    sku: "BGC-TRP-ROB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },

  // ── SOUTH INDIA ─────────────────────────────────────────────────────────────

  {
    slug: "chikmagalur-arabica",
    name: "Chikmagalur Arabica Green Coffee",
    image: "/products/green-coffee-beans.png",
    description:
      "Premium green Arabica from the misty coffee estates of Chikmagalur, Karnataka — the heartland of Indian coffee with bright acidity and floral notes.",
    longDescription:
      "Chikmagalur, perched in the Western Ghats of Karnataka, is the cradle of Indian coffee and produces some of the country's most consistent, well-structured Arabica. Grown at 900–1200m on well-established estates under silver oak shade, these beans develop a classic profile of bright citrus acidity, subtle floral notes, and a clean, balanced finish. Available in washed, natural, and honey process — ideal for specialty roasters building a reliable South India offering.",
    details: [
      "Western Ghats shade-grown Arabica",
      "900–1200 masl elevation",
      "Multiple process options (washed / natural / honey)",
      "Bright citrus acidity and floral top notes",
      "Established estate sourcing",
      "Karnataka's original coffee belt",
    ],
    locations: ["Chikmagalur, Karnataka"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "South India",
    priceRange: { min: 950, max: 1700, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["AA", "A", "AB", "PB (Peaberry)"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "S795, Catuai, SLN 9",
    scaScore: 85,
    scale: 4,
    origin: {
      state: "Karnataka",
      region: "Chikmagalur",
      variety: "Arabica",
      elevation: "900–1200 masl",
    },
    reviews: [
      {
        author: "Shreya Mehta",
        role: "Co-founder, Subko Coffee Roasters (Mumbai)",
        text: "Chikmagalur AA washed is our house espresso base. Consistent across every shipment, clean cup, bright acidity that holds up through milk-based drinks. We've been on the same supplier relationship for two seasons now.",
      },
      {
        author: "David Schomer",
        role: "Owner, Espresso Vivace (Seattle)",
        text: "The S795 from Chikmagalur is a hidden gem for blenders. It adds brightness and structure without dominating the blend. We use it as a 30% component in our espresso and it lifts everything around it.",
      },
      {
        author: "Nadia Boukhari",
        role: "Buyer, Café Comptoir de l'Est (Paris)",
        text: "We feature an Indian Arabica every winter season and Chikmagalur is consistently our best-reviewed. Customers describe it as 'clean and interesting' — not a common combination for a commercial Indian lot.",
      },
    ],
    pageDescription: `Chikmagalur is where Indian coffee began. According to legend, Baba Budan — a Sufi saint returning from a pilgrimage to Mecca — smuggled seven coffee seeds out of Yemen in the 17th century and planted them in the hills of what is now Chikmagalur district. The British colonial plantation system formalised what began as a spiritual act, and today Chikmagalur is Karnataka's most productive and most storied coffee-growing region.

The Western Ghats here rise to over 1,800 metres, though most coffee grows in the 900–1,200 metre band where temperature and rainfall are optimal. Estates are shaded by silver oak, jackfruit, and native jungle trees — a multi-layer canopy that maintains soil moisture, prevents erosion, and creates the cool microclimate that slows cherry ripening and concentrates flavour.

The dominant variety is S.795 — India's most widely planted Arabica, bred from Kent and S.288 in the 1940s at the Coffee Board of India's research station. S.795 produces a well-balanced cup: moderate brightness, good body, subtle chocolate and mocha notes. Catuai and SLN-9 lots are also available with slightly different cup profiles — Catuai being cleaner and brighter, SLN-9 having more floral complexity.

Available in AA, A, AB, and PB (Peaberry) grades across washed, natural, and honey process. The AA washed is our most popular commercial option for South Indian buyers and espresso blenders. PB grade is hand-sorted and adds a noticeably rounder, sweeter dimension — excellent as a single-origin filter feature or as a premium component in a specialty blend.`,
    sku: "BGC-CHK-ARB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },
  {
    slug: "coorg-arabica",
    name: "Coorg Arabica Green Coffee",
    image: "/products/green-coffee-beans.png",
    description:
      "Rich, full-bodied green Arabica from Coorg (Kodagu), Karnataka — grown on lush planters' estates at elevation with excellent body and mild acidity.",
    longDescription:
      "Coorg, also known as Kodagu, is Karnataka's other great coffee district — famous for its dense, forested planters' estates where Arabica grows under pepper vines and silver oak at 800–1100m. The beans carry a characteristic richness: full body, mild acidity, chocolate and spice undertones, and a long, clean finish. A favourite among South Indian filter coffee blenders and specialty roasters alike, Coorg Arabica is one of India's most reliably traded origins.",
    details: [
      "Full-bodied Arabica from Kodagu estates",
      "800–1100 masl elevation",
      "Grown alongside pepper and cardamom",
      "Chocolate and spice undertones",
      "Mild acidity, long clean finish",
      "Traditional planters' estate sourcing",
    ],
    locations: ["Coorg (Kodagu), Karnataka"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "South India",
    priceRange: { min: 900, max: 1600, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["AA", "A", "AB", "PB (Peaberry)"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "S795, Catuai",
    scaScore: 84,
    scale: 5,
    origin: {
      state: "Karnataka",
      region: "Coorg (Kodagu)",
      variety: "Arabica",
      elevation: "800–1100 masl",
    },
    reviews: [
      {
        author: "Ashwin Balachandran",
        role: "Head Roaster, Third Wave Coffee Roasters (Bangalore)",
        text: "Coorg AA is our go-to for South Indian filter coffee customers. Full body, low acidity, chocolate finish — exactly what that market wants. Consistent quality across every order we've placed.",
      },
      {
        author: "Isabella Romano",
        role: "Sourcing Lead, Gardelli Specialty Coffees (Forlì)",
        text: "The Coorg Peaberry we sampled was outstanding — fuller and sweeter than the AA from the same harvest. We've started featuring it as a standalone espresso and the response has been very positive.",
      },
      {
        author: "Ahmed Al-Rashid",
        role: "Operations Manager, Café Bateel (Dubai)",
        text: "We supply high-volume to hospitality clients in the UAE. Coorg Arabica AA gives us the reliability, body, and price point we need. Have been sourcing through Bulk Green Coffee for two seasons without quality issues.",
      },
    ],
    pageDescription: `Coorg (officially Kodagu) is one of the most biodiverse districts in India — a dense, forested landscape of hills and valleys in southern Karnataka where coffee, pepper, cardamom, and orange plantations coexist under a canopy of silver oak and native jungle trees. Coffee here has been grown by Kodava families on large planters' estates since the 19th century, and the region has developed a distinct and recognisable cup character.

Where Chikmagalur Arabica tends towards brightness and florals, Coorg leans fuller and richer — lower acidity, heavier body, and pronounced chocolate and spice undertones that come partly from the terroir and partly from the proximity of pepper and cardamom in the same growing environment. This profile makes Coorg Arabica particularly well-suited to espresso blending, South Indian filter coffee, and milk-based café drinks where a structured, full-bodied base is desirable.

Estates in Coorg are typically larger than the smallholder farms of Koraput or North East India — well-established, with reliable wet-processing infrastructure and experienced post-harvest teams. This translates to consistent quality across shipments, which is why Coorg AA is among India's most reliably traded green coffee grades for commercial buyers.

Peaberry (PB) lots from Coorg are especially prized. The same rich, chocolatey character of the flat-bean Coorg, but with added roundness, sweetness, and aromatic concentration from the single-seed mutation. Available from 10 kg for sampling. Contact us for current lot availability and moisture certificates.`,
    sku: "BGC-CRG-ARB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },
  {
    slug: "wayanad-arabica",
    name: "Wayanad Arabica Green Coffee",
    image: "/products/green-coffee-beans.png",
    description:
      "Smooth, well-rounded green Arabica from the highland forests of Wayanad, Kerala — celebrated for its mild flavour and excellent cup consistency.",
    longDescription:
      "Wayanad's coffee grows in the biodiverse forests of northern Kerala at 700–1000m, benefiting from the Arabian Sea's moisture and cool Ghats nights. Small-holder farms and cooperatives produce Arabica with a notably smooth cup — gentle acidity, mild nuttiness, subtle floral hints, and a clean, medium body. Wayanad Arabica is prized for its consistency and adaptability across filter, espresso, and blending applications. Certified organic lots are available on request.",
    details: [
      "Kerala forest-grown Arabica",
      "700–1000 masl elevation",
      "Small-holder and cooperative sourcing",
      "Smooth, mild cup with floral hints",
      "Organic certified lots available",
      "Consistent quality across seasons",
    ],
    locations: ["Wayanad, Kerala"],
    category: "Coffee",
    categoryTwo: "Single Origin",
    region: "South India",
    priceRange: { min: 900, max: 1650, unit: "/kg" },
    minimumOrder: { quantity: 10, unit: "kg" },
    grades: ["AA", "A", "AB", "PB (Peaberry)"],
    packaging: ["60kg GrainPro jute bags", "30kg bags", "Bulk containers"],
    varietal: "S795, Catuai, Chandragiri",
    scaScore: 84,
    scale: 4,
    origin: {
      state: "Kerala",
      region: "Wayanad",
      variety: "Arabica",
      elevation: "700–1000 masl",
    },
    reviews: [
      {
        author: "Rina Thomas",
        role: "Founder, Araku Coffee Lab (Kerala)",
        text: "Wayanad Arabica is our benchmark for consistency. Season after season, the cup profile barely shifts — smooth, mild, a little nutty. It's exactly what our café accounts need for a house blend base.",
      },
      {
        author: "James Hoffmann",
        role: "Roaster and Educator (London)",
        text: "Wayanad's forest-grown cooperatives produce some of the most underrated Arabica in South Asia. The cup is mild in the best sense — accessible, consistent, and genuinely pleasant. A solid entry point for anyone exploring Indian origins.",
      },
      {
        author: "Laila Hassan",
        role: "Procurement, Al Mawakeb Coffee (Riyadh)",
        text: "We needed a consistent, smooth Arabica for our filter coffee programme in Saudi Arabia. Wayanad AA matched our cup spec every shipment. The organic-certified lot was also well within our customer's expectations.",
      },
    ],
    pageDescription: `Wayanad is Kerala's highest district — a plateau at the top of the Western Ghats that catches both the Arabian Sea monsoon from the west and the Bay of Bengal moisture from the east, creating one of the most reliably wet and biodiverse growing environments in South India. Coffee here is grown by small-holder farmers and cooperatives whose land is woven between the Wayanad Wildlife Sanctuary and tribal reserve forests.

The cup character of Wayanad Arabica is defined by its smoothness. Where Chikmagalur produces bright, structured acidity and Coorg delivers heavy-bodied richness, Wayanad sits in between: medium body, gentle acidity, mild nuttiness, and a clean, floral finish that makes it immediately accessible across brewing methods and customer demographics. It is not a coffee that demands attention — but it is a coffee that reliably satisfies.

This makes Wayanad a favourite for café chain buyers, hospitality clients, and blenders who need a consistent, non-aggressive Indian Arabica at scale. The cooperative sourcing model — involving hundreds of small farmers — actually improves lot-level consistency, because the variations between individual farms average out across the collective processing station.

Organic-certified lots from Wayanad are available on request. The certification is managed through cooperative-level certification bodies and can be supplied with documentation. PB (Peaberry) grade is available from the same washed harvest — hand-sorted, limited availability. Contact us for current lot status, moisture analysis, and sample requests.`,
    sku: "BGC-WYD-ARB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },
  {
    slug: "bababudangiri-arabica",
    name: "Bababudangiri Arabica Green Coffee",
    image: "/products/green-coffee-beans.png",
    description:
      "Rare single-origin green Arabica from the ancient Bababudangiri hills, Karnataka — India's mythical coffee birthplace with a distinctive earthy complexity.",
    longDescription:
      "The Bababudangiri hills in Karnataka's Chikmagalur district are where coffee is said to have first been cultivated in India, brought by Baba Budan in the 17th century. Today, small estates and forest-fringe farms at 1000–1400m produce limited lots of Arabica with a profile unlike any other Indian origin — earthy and spiced at its core, with a creamy body, brown-sugar sweetness, and a lingering, complex finish. These lots are genuinely rare and carry a provenance story that resonates strongly with specialty buyers.",
    details: [
      "India's mythical coffee origin",
      "1000–1400 masl — one of India's highest-grown origins",
      "Rare, limited-availability lots",
      "Earthy, spiced complexity with creamy body",
      "Brown-sugar sweetness and long finish",
      "Forest-fringe small-estate sourcing",
    ],
    locations: ["Bababudangiri, Karnataka"],
    category: "Coffee",
    categoryTwo: "Premium",
    region: "South India",
    priceRange: { min: 1200, max: 2200, unit: "/kg" },
    minimumOrder: { quantity: 30, unit: "kg" },
    grades: ["Grade 1", "PB (Peaberry)"],
    packaging: ["60kg GrainPro jute bags", "30kg bags"],
    varietal: "S795, Local Heirlooms",
    scaScore: 86,
    scale: 2,
    origin: {
      state: "Karnataka",
      region: "Bababudangiri",
      variety: "Arabica",
      elevation: "1000–1400 masl",
    },
    reviews: [
      {
        author: "Olga Melnyk",
        role: "Head of Single Origins, Tim Wendelboe (Oslo)",
        text: "The Bababudangiri lot we sourced last season was unlike anything else from India — earthy complexity, a spiced warmth that comes from the terroir, and a lingering sweetness on the finish. A genuinely memorable cup.",
      },
      {
        author: "Sameer Gupta",
        role: "Founder, Corridor Seven Coffee Roasters (Pune)",
        text: "The provenance story sells itself — Indian coffee's mythical birthplace. But the cup delivers too. Creamy body, brown sugar, subtle spice. We sold out our 30 kg sample lot in ten days on a single Instagram post.",
      },
      {
        author: "Beatriz Costa",
        role: "Green Coffee Buyer, Delta Cafés (Portugal)",
        text: "We feature a heritage Indian origin every year in our specialty range. Bababudangiri is the strongest yet — the altitude, the story, and the cup profile all align. Our customers love the 'birthplace of Indian coffee' narrative.",
      },
    ],
    pageDescription: `No Indian coffee origin carries a more compelling story than Bababudangiri. According to historical records and Sufi tradition, it was here — in the Chandragiri hills of what is now Chikmagalur district, Karnataka — that Baba Budan, a Muslim pilgrim returning from Mecca, planted seven coffee seeds he had smuggled out of Yemen sometime in the early 17th century. Those seeds were the first coffee plants in India, and the descendants of that original cultivation still grow on the slopes of the hills that bear Baba Budan's name.

Today, Bababudangiri is one of India's highest coffee-growing areas, with farms reaching 1,000–1,400 metres above sea level — significantly higher than most of Chikmagalur's main growing belt. The extra elevation means cooler temperatures, slower cherry development, and a more complex cup. The profile here is earthy and spiced in a way that is distinctly different from other Indian origins — a quality that comes partly from the altitude and partly from the ancient, unregistered heirloom varietals that have been growing on these slopes for centuries.

The lots available from Bababudangiri are genuinely limited. Small estates and forest-fringe farms with ageing heirloom trees don't produce at commercial scale. What they produce is remarkable: Grade 1 lots with 86+ SCA scores, a creamy, heavy body, brown-sugar sweetness, and a finishing complexity that specialist buyers often describe as the most "complete" Indian Arabica they've tried.

Peaberry (PB) from Bababudangiri is especially rare — hand-sorted from an already limited harvest, it amplifies the origin's characteristic earthiness and sweetness into an extraordinarily concentrated cup. Available in 30 kg minimum lots only. Contact us well in advance of the harvest season (November–February) to reserve allocation.`,
    sku: "BGC-BBG-ARB-001",
    brand: "Bulk Green Coffee",
    availability: "in_stock",
    googleProductCategory: "1868",
  },
];
