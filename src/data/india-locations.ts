// India-specific city/state data for the India supplier pages
// (/india/[state], /india/[state]/[city], /[city]-green-coffee-supplier, sitemap).
// For country-agnostic data see src/data/destinations.ts (countries) and
// src/data/country-cities.ts (top cities per country) and src/data/world-regions.ts (region groupings).

export type IndiaCity = {
  city: string;
  citySlug: string;
  state: string;
  stateSlug: string;
  cityContext: string;
  industries: string[];
  nearbyAreas: string[];
  transitDays: string;
  moq: string;
  popularProductSlugs: string[];
  faqs: { question: string; answer: string }[];
  coordinates: { lat: number; lng: number };
};

export const indiaCities: IndiaCity[] = [
  // ── MAHARASHTRA ──────────────────────────────────────────────────────────────
  {
    city: "Mumbai",
    citySlug: "mumbai",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "India's largest commercial city — home to hundreds of specialty cafés, hotel chains, HORECA distributors, and coffee roasters sourcing in bulk for the hospitality sector.",
    industries: ["Hospitality & Hotels", "Specialty Cafés", "Corporate Offices", "Food Service", "Coffee Roasters", "Retail Chains"],
    nearbyAreas: ["Thane", "Navi Mumbai", "Kalyan", "Panvel", "Vasai"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "How do you deliver green coffee to Mumbai?",
        answer: "We dispatch via road freight from our warehouse to Mumbai. Delivery to most Mumbai and Navi Mumbai addresses takes 3-5 business days. Minimum order is 10 kg for specialty lots and 60 kg for commercial grade.",
      },
      {
        question: "Which Indian green coffee grades are most popular with Mumbai roasters?",
        answer: "Mumbai's specialty roasters favour Koraput Naturals, Koraput HSD, and Halflong SL-9 for single-origin menus. Commercial buyers and HORECA distributors prefer Koraput AA/AAA for consistent blending.",
      },
      {
        question: "Do you supply to cafés and hotels in Mumbai directly?",
        answer: "Yes — we supply green (unroasted) coffee to roasters who then supply cafés and hotels. If you run a roastery or are a distributor supplying the HORECA sector, we can work directly with you.",
      },
    ],
    coordinates: { lat: 19.076, lng: 72.8777 },
  },
  {
    city: "Pune",
    citySlug: "pune",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "Pune's booming café culture and large tech-campus population drive strong demand for specialty green coffee from roasters, café chains, and corporate food service operators.",
    industries: ["Specialty Cafés", "Corporate Campuses", "Hotels", "Food Service", "Coffee Roasters"],
    nearbyAreas: ["Pimpri-Chinchwad", "Hinjewadi", "Kothrud", "Viman Nagar"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "koraput-hsd", "chikmagalur-arabica", "halflong-arabica-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "Can I buy specialty green coffee in Pune in small trial quantities?",
        answer: "Yes — specialty lots start from 10 kg, ideal for Pune roasters trialling a new origin. We also send 250-500g sample packs before any bulk order. Contact us on WhatsApp.",
      },
      {
        question: "How long does delivery to Pune take?",
        answer: "Road freight from our dispatch point to Pune typically takes 3-5 business days. We coordinate directly with the freight partner once your order is confirmed.",
      },
    ],
    coordinates: { lat: 18.5204, lng: 73.8567 },
  },
  {
    city: "Nagpur",
    citySlug: "nagpur",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "Nagpur's central India location makes it a distribution hub. Strong institutional demand from government offices, colleges, and the growing hospitality sector drives bulk coffee sourcing.",
    industries: ["Government Offices", "Educational Institutions", "Hotels", "Food Service", "Distributors"],
    nearbyAreas: ["Wardha", "Amravati", "Chandrapur", "Yavatmal"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "coorg-arabica"],
    faqs: [
      {
        question: "Do you supply commercial grade green coffee to Nagpur?",
        answer: "Yes — Koraput AA and AAA commercial grade are available for delivery to Nagpur. MOQ 60 kg for commercial grade. GST invoice provided for all domestic orders.",
      },
    ],
    coordinates: { lat: 21.1458, lng: 79.0882 },
  },

  // ── KARNATAKA ──────────────────────────────────────────────────────────────
  {
    city: "Bengaluru",
    citySlug: "bengaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    cityContext:
      "India's specialty coffee capital — Bengaluru hosts the country's most sophisticated roasters, baristas, and café culture. The city is where Indian specialty coffee was invented for modern consumers.",
    industries: ["Specialty Cafés", "Coffee Roasters", "Tech Campuses", "Hotels", "Exporters", "Barista Training"],
    nearbyAreas: ["Whitefield", "Koramangala", "Indiranagar", "HSR Layout", "Electronic City"],
    transitDays: "2-4 days",
    moq: "10 kg",
    popularProductSlugs: ["halflong-arabica-naturals", "koraput-naturals", "koraput-hsd", "bababudangiri-arabica", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Which Indian origins are most popular with Bengaluru specialty roasters?",
        answer: "Bengaluru roasters most commonly request Koraput Naturals, Halflong SL-9, Koraput HSD, and Bababudangiri Arabica for their single-origin and seasonal menus. We also supply South India AA/AAA for commercial buyers.",
      },
      {
        question: "Can you deliver green coffee to specific areas in Bengaluru?",
        answer: "Yes — we deliver to Koramangala, Indiranagar, Whitefield, HSR Layout, and all Bengaluru areas via road freight. Delivery typically takes 2-4 business days from dispatch.",
      },
      {
        question: "Do you source from South India estates directly?",
        answer: "Yes — our Chikmagalur, Coorg, Wayanad, and Bababudangiri lots are sourced directly from Karnataka and Kerala estates. Bengaluru roasters buying South India origins get the shortest supply chain.",
      },
    ],
    coordinates: { lat: 12.9716, lng: 77.5946 },
  },
  {
    city: "Mysuru",
    citySlug: "mysuru",
    state: "Karnataka",
    stateSlug: "karnataka",
    cityContext:
      "Mysuru's proximity to Coorg and Chikmagalur makes it a natural hub for South India green coffee. Strong heritage hospitality sector and growing café culture drive local demand.",
    industries: ["Heritage Hotels", "Specialty Cafés", "Hospitality", "Government Offices", "Coffee Estate Buyers"],
    nearbyAreas: ["Hunsur", "Kushalnagar", "Srirangapatna", "Mandya"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["chikmagalur-arabica", "coorg-arabica", "bababudangiri-arabica", "koraput-peaberry"],
    faqs: [
      {
        question: "Can I source South India Arabica through you near Mysuru?",
        answer: "Yes — Coorg (Kodagu), Chikmagalur, and Bababudangiri are all within 100-200 km of Mysuru. We source from these estates and can deliver directly to your Mysuru address within 2-3 business days.",
      },
    ],
    coordinates: { lat: 12.2958, lng: 76.6394 },
  },

  // ── TAMIL NADU ──────────────────────────────────────────────────────────────
  {
    city: "Chennai",
    citySlug: "chennai",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Chennai has a deep filter coffee tradition and a rapidly growing specialty café market. Strong institutional demand from hotels, IT parks, and manufacturing sectors drives commercial and specialty green coffee sourcing.",
    industries: ["Filter Coffee Brands", "Hotels", "IT Parks", "Manufacturing", "Specialty Cafés", "Distributors"],
    nearbyAreas: ["Tambaram", "Sriperumbudur", "Poonamallee", "Kanchipuram", "Mahabalipuram"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "chirang-robusta-naturals", "koraput-naturals"],
    faqs: [
      {
        question: "Do you supply Arabica-Robusta blends for South Indian filter coffee in Chennai?",
        answer: "We supply both Arabica (Koraput AA/AAA, South India lots) and Robusta (Chirang CxR, Tirap CxR) as separate green coffee lots. Most Chennai filter coffee manufacturers blend 60-70% Arabica with 30-40% Robusta in-house.",
      },
      {
        question: "Is your green coffee suitable for filter coffee grinding in Chennai?",
        answer: "Yes — our commercial AA/AAA Arabica and CxR Robusta are both suitable as base beans for South Indian filter coffee blends. Contact us for grade recommendations based on your blend requirements.",
      },
    ],
    coordinates: { lat: 13.0827, lng: 80.2707 },
  },
  {
    city: "Coimbatore",
    citySlug: "coimbatore",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Coimbatore's strong manufacturing and textile economy creates large institutional canteen demand. The city also has a growing specialty café scene and direct road access to Kerala's Wayanad coffee estates.",
    industries: ["Textile Industry", "Manufacturing", "Hotels", "Educational Institutions", "Specialty Cafés"],
    nearbyAreas: ["Tiruppur", "Erode", "Pollachi", "Palakkad"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "wayanad-arabica", "chikmagalur-arabica", "chirang-robusta-naturals"],
    faqs: [
      {
        question: "Can I source Wayanad Arabica through you for delivery to Coimbatore?",
        answer: "Yes — Wayanad (Kerala) is approximately 100 km from Coimbatore. We source Wayanad Arabica in AA, AB, and PB grades and can deliver to Coimbatore in 3-5 business days.",
      },
    ],
    coordinates: { lat: 11.0168, lng: 76.9558 },
  },

  // ── KERALA ──────────────────────────────────────────────────────────────────
  {
    city: "Kochi",
    citySlug: "kochi",
    state: "Kerala",
    stateSlug: "kerala",
    cityContext:
      "Kochi is Kerala's commercial capital — a port city with a thriving hospitality sector, specialty café scene, and strong institutional demand from IT parks and the tourism industry.",
    industries: ["Hospitality & Hotels", "Specialty Cafés", "IT Parks", "Port-Related Businesses", "Tourism", "Coffee Roasters"],
    nearbyAreas: ["Ernakulam", "Thrissur", "Aluva", "Perumbavoor", "Angamaly"],
    transitDays: "2-4 days",
    moq: "10 kg",
    popularProductSlugs: ["wayanad-arabica", "koraput-naturals", "halflong-arabica-naturals", "chikmagalur-arabica", "chirang-robusta-naturals"],
    faqs: [
      {
        question: "Can I source Wayanad Arabica directly through you in Kochi?",
        answer: "Yes — Wayanad is approximately 120 km from Kochi. We source Wayanad Arabica in multiple grades and can deliver to Kochi within 2-4 business days. Ideal for Kerala roasters and distributors wanting local origin traceability.",
      },
      {
        question: "Do you supply organic-certified Wayanad Arabica?",
        answer: "Organic-certified lots from Wayanad cooperatives are available on request. Documentation including the organic certificate can be provided. Contact us with your requirement.",
      },
    ],
    coordinates: { lat: 9.9312, lng: 76.2673 },
  },

  // ── DELHI NCR ──────────────────────────────────────────────────────────────
  {
    city: "New Delhi",
    citySlug: "new-delhi",
    state: "Delhi NCR",
    stateSlug: "delhi-ncr",
    cityContext:
      "India's capital and one of the world's largest hospitality markets — Delhi's hotel chains, corporate campuses, government institutions, and growing third-wave café scene create massive green coffee demand.",
    industries: ["Hotels & Hospitality", "Government Offices", "Corporate Campuses", "Specialty Cafés", "Distributors", "Exporters"],
    nearbyAreas: ["Gurgaon", "Noida", "Faridabad", "Ghaziabad", "Sonipat"],
    transitDays: "2-4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "koraput-naturals", "chikmagalur-arabica", "halflong-arabica-naturals"],
    faqs: [
      {
        question: "Is Gray Cup Enterprises based near Delhi?",
        answer: "Yes — our registered office is in Sonipat, Haryana, which is 45 km from New Delhi. This makes us one of the most geographically accessible Indian green coffee suppliers for Delhi NCR buyers.",
      },
      {
        question: "Can you deliver green coffee to specific Delhi addresses — Connaught Place, South Delhi, etc?",
        answer: "Yes — we deliver to all Delhi NCR areas including Connaught Place, South Delhi, Karol Bagh, Dwarka, and all NCR areas (Gurgaon, Noida, Faridabad). Delivery takes 2-4 business days from dispatch.",
      },
    ],
    coordinates: { lat: 28.6139, lng: 77.2090 },
  },
  {
    city: "Gurgaon",
    citySlug: "gurgaon",
    state: "Delhi NCR",
    stateSlug: "delhi-ncr",
    cityContext:
      "Gurgaon's concentration of Fortune 500 corporate campuses, luxury hotels, and a sophisticated café culture creates strong institutional and specialty green coffee demand.",
    industries: ["Corporate Campuses", "Luxury Hotels", "Specialty Cafés", "IT/ITES", "Food Service"],
    nearbyAreas: ["Manesar", "Sohna", "Faridabad", "Delhi", "Rewari"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals", "halflong-arabica-naturals"],
    faqs: [
      {
        question: "Do you supply green coffee to corporate campuses in Gurgaon?",
        answer: "Yes — corporate procurement teams in Gurgaon can source directly from us. We supply both commercial AA/AAA for high-volume canteens and specialty lots for premium office café programmes. GST invoice provided.",
      },
    ],
    coordinates: { lat: 28.4595, lng: 77.0266 },
  },
  {
    city: "Noida",
    citySlug: "noida",
    state: "Delhi NCR",
    stateSlug: "delhi-ncr",
    cityContext:
      "Noida's large IT and media sector creates strong corporate coffee demand. Growing independent café scene also drives specialty roaster sourcing in the city.",
    industries: ["IT/ITES", "Media Companies", "Corporate Offices", "Specialty Cafés", "Malls & Retail"],
    nearbyAreas: ["Greater Noida", "Ghaziabad", "Delhi", "Faridabad"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "How quickly can you deliver green coffee to Noida?",
        answer: "Noida is close to our Haryana base — delivery typically takes 2-3 business days. We deliver to Sector 18, Sector 62, Greater Noida, and all Noida areas.",
      },
    ],
    coordinates: { lat: 28.5355, lng: 77.3910 },
  },

  // ── TELANGANA ──────────────────────────────────────────────────────────────
  {
    city: "Hyderabad",
    citySlug: "hyderabad",
    state: "Telangana",
    stateSlug: "telangana",
    cityContext:
      "Hyderabad's massive IT sector, growing café culture, and strong hospitality industry make it one of India's fastest-growing green coffee markets for both commercial and specialty buyers.",
    industries: ["IT Campuses", "Hotels", "Specialty Cafés", "Pharma Industry", "Government", "Food Service"],
    nearbyAreas: ["Secunderabad", "Cyberabad", "Warangal", "Karimnagar", "Khammam"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "Which green coffee grades work best for Hyderabad's café sector?",
        answer: "Hyderabad's specialty cafés typically use Koraput Naturals, Koraput HSD, or South India Arabica for single-origin menus. Commercial espresso bars prefer AA/AAA commercial grade as a reliable, cost-efficient base.",
      },
      {
        question: "Do you supply to IT company campuses in Hyderabad?",
        answer: "Yes — corporate procurement teams can source commercial-grade green coffee for in-house roasting or work with their roaster partners. We supply GST invoices for all Telangana orders.",
      },
    ],
    coordinates: { lat: 17.3850, lng: 78.4867 },
  },

  // ── GUJARAT ──────────────────────────────────────────────────────────────
  {
    city: "Ahmedabad",
    citySlug: "ahmedabad",
    state: "Gujarat",
    stateSlug: "gujarat",
    cityContext:
      "Ahmedabad's strong business community and growing hospitality sector create steady demand for commercial green coffee. The city's position as Gujarat's commercial capital makes it a natural distribution hub.",
    industries: ["Textiles & Manufacturing", "Hotels", "Corporate Offices", "Food Service", "Distributors"],
    nearbyAreas: ["Gandhinagar", "Vadodara", "Surat", "Anand", "Mehsana"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "coorg-arabica"],
    faqs: [
      {
        question: "Can you supply commercial green coffee to Ahmedabad distributors?",
        answer: "Yes — we work with distributors in Gujarat who supply the hospitality and food service sector. Contact us for bulk pricing on commercial AA/AAA lots for Ahmedabad-based distributors.",
      },
    ],
    coordinates: { lat: 23.0225, lng: 72.5714 },
  },
  {
    city: "Surat",
    citySlug: "surat",
    state: "Gujarat",
    stateSlug: "gujarat",
    cityContext:
      "Surat's diamond trading, textile, and manufacturing economy creates institutional demand. A growing café culture among the city's young professional population drives specialty interest.",
    industries: ["Diamond & Textile Industry", "Manufacturing", "Hotels", "Specialty Cafés", "Corporate Offices"],
    nearbyAreas: ["Navsari", "Bharuch", "Ankleshwar", "Valsad"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "How long does delivery from India origins to Surat take?",
        answer: "Delivery from our dispatch point to Surat takes approximately 4-6 business days by road. We provide tracking updates and GST invoice with every order.",
      },
    ],
    coordinates: { lat: 21.1702, lng: 72.8311 },
  },

  // ── WEST BENGAL ──────────────────────────────────────────────────────────────
  {
    city: "Kolkata",
    citySlug: "kolkata",
    state: "West Bengal",
    stateSlug: "west-bengal",
    cityContext:
      "Kolkata's geographic proximity to Assam and East India origins makes it an ideal entry point for North East Indian and Koraput green coffee. The city's historic café culture is now complemented by a modern specialty scene.",
    industries: ["Specialty Cafés", "Hotels", "Distributors", "Food Service", "Government Offices", "Tea & Coffee Traders"],
    nearbyAreas: ["Howrah", "Salt Lake", "New Town", "Barrackpore", "Durgapur"],
    transitDays: "3-4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "halflong-arabica-naturals", "koraput-washed", "chirang-robusta-naturals", "koraput-commercial-aa"],
    faqs: [
      {
        question: "Why is Kolkata a good city for sourcing Assam and Odisha green coffee?",
        answer: "Kolkata is geographically close to both our North East India origins (Halflong, Chirang — Assam) and East India origins (Koraput — Odisha). This means shorter road transit, fresher lots, and lower freight costs than sourcing from South India.",
      },
      {
        question: "Do you serve Howrah and other Kolkata districts?",
        answer: "Yes — we deliver across Greater Kolkata including Howrah, Salt Lake, New Town, and Barrackpore. Transit time from dispatch to Kolkata area is 3-4 business days.",
      },
    ],
    coordinates: { lat: 22.5726, lng: 88.3639 },
  },

  // ── PUNJAB ──────────────────────────────────────────────────────────────
  {
    city: "Amritsar",
    citySlug: "amritsar",
    state: "Punjab",
    stateSlug: "punjab",
    cityContext:
      "Amritsar's massive religious tourism sector — the Golden Temple draws 100,000+ daily visitors — creates large institutional demand for food service including coffee. Growing hospitality sector drives commercial grade sourcing.",
    industries: ["Religious Tourism", "Hospitality & Hotels", "Pilgrimage Services", "Food Service", "Corporate Offices"],
    nearbyAreas: ["Tarn Taran", "Gurdaspur", "Batala", "Attari"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Do you supply green coffee for Amritsar's large hospitality sector?",
        answer: "Yes — Amritsar's hotel and hospitality sector is one of Punjab's largest. We supply commercial AA/AAA for high-volume institutional buyers and specialty lots for boutique hotels and cafés.",
      },
    ],
    coordinates: { lat: 31.6340, lng: 74.8723 },
  },
  {
    city: "Ludhiana",
    citySlug: "ludhiana",
    state: "Punjab",
    stateSlug: "punjab",
    cityContext:
      "Ludhiana's large textile and manufacturing industry creates institutional canteen demand. A growing café culture among the city's industrial business community drives commercial sourcing.",
    industries: ["Textile Industry", "Manufacturing", "Hotels", "Corporate Offices", "Food Service"],
    nearbyAreas: ["Jalandhar", "Phagwara", "Khanna", "Moga"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aa", "chikmagalur-arabica", "koraput-commercial-aaa"],
    faqs: [
      {
        question: "Can you supply green coffee to factories and canteens in Ludhiana?",
        answer: "Yes — commercial AA/AAA grade is well-suited for factory canteen sourcing. We supply in 60 kg bags (GrainPro-lined jute) or can arrange smaller lots for smaller operations. GST invoice included.",
      },
    ],
    coordinates: { lat: 30.9010, lng: 75.8573 },
  },

  // ── RAJASTHAN ──────────────────────────────────────────────────────────────
  {
    city: "Jaipur",
    citySlug: "jaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    cityContext:
      "Jaipur's massive tourism economy — heritage hotels, palace properties, and luxury hospitality — creates premium demand for both commercial and specialty green coffee.",
    industries: ["Heritage Hotels", "Tourism", "Government Offices", "Specialty Cafés", "Retail Chains"],
    nearbyAreas: ["Ajmer", "Alwar", "Sikar", "Dausa", "Tonk"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals", "coorg-arabica"],
    faqs: [
      {
        question: "Do you supply to heritage hotels and palace properties in Jaipur?",
        answer: "Yes — Jaipur's heritage hospitality sector is a natural buyer for quality Indian green coffee. We supply both commercial AA/AAA for high-volume use and specialty single-origin lots for premium menus. Contact us for institutional pricing.",
      },
    ],
    coordinates: { lat: 26.9124, lng: 75.7873 },
  },
  {
    city: "Jodhpur",
    citySlug: "jodhpur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    cityContext:
      "Jodhpur's growing hotel and resort scene — anchored by heritage properties in the Blue City — drives demand for quality green coffee, especially for hotel F&B and specialty cafés serving tourists.",
    industries: ["Heritage Hotels", "Tourism", "Retail Chains", "Specialty Cafés"],
    nearbyAreas: ["Barmer", "Pali", "Nagaur", "Jaisalmer"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Can I buy green coffee wholesale in Jodhpur?",
        answer: "Yes — we supply commercial and specialty green coffee to Jodhpur's hospitality sector and roasters. Transit is 4-6 days. Contact us on WhatsApp for current lot availability and pricing.",
      },
    ],
    coordinates: { lat: 26.2389, lng: 73.0243 },
  },
  {
    city: "Udaipur",
    citySlug: "udaipur",
    state: "Rajasthan",
    stateSlug: "rajasthan",
    cityContext:
      "Udaipur's luxury lake-city tourism means premium hotels, palace restaurants, and specialty cafés are major buyers. Single-origin Odisha and Coorg lots perform well here.",
    industries: ["Luxury Hotels", "Tourism", "Specialty Cafés", "Resorts"],
    nearbyAreas: ["Chittorgarh", "Bhilwara", "Rajsamand"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "coorg-arabica", "chikmagalur-arabica", "koraput-peaberry"],
    faqs: [
      {
        question: "Do you supply specialty green coffee to Udaipur's luxury hotels?",
        answer: "Yes — Udaipur's palace properties and lake hotels often prefer specialty single-origin lots. We supply Koraput Naturals, Peaberry, and Coorg Arabica with full traceability. Sample packs available before bulk orders.",
      },
    ],
    coordinates: { lat: 24.5854, lng: 73.7125 },
  },

  // ── UTTAR PRADESH ──────────────────────────────────────────────────────────
  {
    city: "Lucknow",
    citySlug: "lucknow",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    cityContext:
      "Lucknow's expanding café culture, government institutions, and large corporate sector create steady green coffee demand. The city's hospitality belt along Gomti Nagar and Hazratganj is a key growth zone.",
    industries: ["Government Offices", "Hotels", "Specialty Cafés", "Corporate Offices", "Retail Chains"],
    nearbyAreas: ["Kanpur", "Unnao", "Rae Bareli", "Sitapur"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "How do I source bulk green coffee in Lucknow?",
        answer: "We dispatch from our warehouse to Lucknow via road freight — typical transit is 3-5 days. Minimum order is 10 kg for specialty and 60 kg for commercial grade. WhatsApp us for a quote and sample.",
      },
    ],
    coordinates: { lat: 26.8467, lng: 80.9462 },
  },
  {
    city: "Kanpur",
    citySlug: "kanpur",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    cityContext:
      "Kanpur's large industrial population, leather industry campuses, and a growing food service sector make it a solid bulk buyer for commercial-grade green coffee for canteen and café use.",
    industries: ["Leather & Textile Industry", "Corporate Canteens", "Hotels", "Food Service"],
    nearbyAreas: ["Lucknow", "Unnao", "Fatehpur", "Hamirpur"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Do you deliver green coffee to Kanpur industrial canteens?",
        answer: "Yes — commercial AA and AAA grade green coffee is ideal for Kanpur's factory and institutional canteens. We supply in 60 kg GrainPro-lined jute bags. GST invoice included for corporate procurement.",
      },
    ],
    coordinates: { lat: 26.4499, lng: 80.3319 },
  },
  {
    city: "Varanasi",
    citySlug: "varanasi",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    cityContext:
      "Varanasi's booming spiritual tourism creates consistent demand from boutique hotels, guesthouses, and specialty cafés along the ghats catering to international visitors.",
    industries: ["Tourism & Hospitality", "Boutique Hotels", "Specialty Cafés", "Retail"],
    nearbyAreas: ["Jaunpur", "Mirzapur", "Chandauli", "Bhadohi"],
    transitDays: "4-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "koraput-commercial-aaa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Can specialty cafés in Varanasi order small green coffee lots?",
        answer: "Yes — specialty lots start from 10 kg, ideal for boutique cafés along the ghats. We offer 250g sample packs before any bulk commitment. WhatsApp us for availability.",
      },
    ],
    coordinates: { lat: 25.3176, lng: 82.9739 },
  },
  {
    city: "Agra",
    citySlug: "agra",
    state: "Uttar Pradesh",
    stateSlug: "uttar-pradesh",
    cityContext:
      "Agra's massive tourism sector — anchored by the Taj Mahal — means luxury hotels, heritage properties, and high-footfall cafés need reliable green coffee supply.",
    industries: ["Luxury Hotels", "Tourism", "Specialty Cafés", "Heritage Resorts"],
    nearbyAreas: ["Mathura", "Firozabad", "Etah", "Mainpuri"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Do you supply green coffee to Agra's hotel corridor near the Taj Mahal?",
        answer: "Yes — we supply both commercial-grade lots for high-volume hotel use and specialty single-origin for premium café menus. Delivery to Agra takes 3-5 days from dispatch.",
      },
    ],
    coordinates: { lat: 27.1767, lng: 78.0081 },
  },

  // ── MADHYA PRADESH ─────────────────────────────────────────────────────────
  {
    city: "Indore",
    citySlug: "indore",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    cityContext:
      "Indore's reputation as India's cleanest city has fuelled a vibrant café culture and strong retail food industry. Specialty roasters, café chains, and food processing companies are key buyers.",
    industries: ["Specialty Cafés", "Food Processing", "Retail Chains", "Corporate Offices", "Hotels"],
    nearbyAreas: ["Ujjain", "Dewas", "Dhar", "Pithampur"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals", "koraput-hsd"],
    faqs: [
      {
        question: "How do Indore roasters buy green coffee in bulk?",
        answer: "We ship directly to Indore via road freight in 3-5 days. Specialty lots (Koraput Naturals, HSD) from 10 kg and commercial AA/AAA from 60 kg bags. WhatsApp us for current stock.",
      },
    ],
    coordinates: { lat: 22.7196, lng: 75.8577 },
  },
  {
    city: "Bhopal",
    citySlug: "bhopal",
    state: "Madhya Pradesh",
    stateSlug: "madhya-pradesh",
    cityContext:
      "Bhopal's government institutions, growing tech park ecosystem, and expanding hospitality sector create consistent bulk coffee demand. The city's lake-front hotel belt is a premium buyer segment.",
    industries: ["Government Institutions", "Hotels", "Corporate Offices", "Specialty Cafés"],
    nearbyAreas: ["Sehore", "Raisen", "Vidisha", "Hoshangabad"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Can government institutions in Bhopal buy green coffee from you?",
        answer: "Yes — we supply to government canteens and institutional kitchens with proper GST invoicing and delivery challans. Commercial AA/AAA grade is most suitable for high-volume institutional use.",
      },
    ],
    coordinates: { lat: 23.2599, lng: 77.4126 },
  },

  // ── ANDHRA PRADESH ─────────────────────────────────────────────────────────
  {
    city: "Visakhapatnam",
    citySlug: "visakhapatnam",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    cityContext:
      "Visakhapatnam (Vizag) is Andhra Pradesh's largest city and a major port and industrial hub. A growing café scene, HORECA sector, and steel/pharma industry campuses drive bulk coffee demand.",
    industries: ["Port & Shipping", "Steel Industry", "HORECA", "Specialty Cafés", "Corporate Campuses"],
    nearbyAreas: ["Bheemunipatnam", "Anakapalli", "Vizianagaram", "Srikakulam"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Do you deliver green coffee to Visakhapatnam's industrial canteens?",
        answer: "Yes — Vizag's steel plants, pharma campuses, and shipping offices are served via road freight in 4-6 days. Commercial AA/AAA suits high-volume canteen use. GST invoice provided.",
      },
    ],
    coordinates: { lat: 17.6868, lng: 83.2185 },
  },
  {
    city: "Vijayawada",
    citySlug: "vijayawada",
    state: "Andhra Pradesh",
    stateSlug: "andhra-pradesh",
    cityContext:
      "Vijayawada is Andhra Pradesh's commercial and political capital, with a large HORECA sector, government offices, and a rising café culture among its young professional population.",
    industries: ["Government Offices", "HORECA", "Specialty Cafés", "Retail", "Food Service"],
    nearbyAreas: ["Guntur", "Krishna", "Tenali", "Eluru"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-commercial-aa"],
    faqs: [
      {
        question: "How quickly can you deliver green coffee to Vijayawada?",
        answer: "Delivery to Vijayawada is 4-6 business days via road freight. We supply commercial-grade lots from 60 kg and specialty from 10 kg. WhatsApp us for a quote.",
      },
    ],
    coordinates: { lat: 16.5062, lng: 80.6480 },
  },

  // ── HARYANA ────────────────────────────────────────────────────────────────
  {
    city: "Gurugram",
    citySlug: "gurugram",
    state: "Haryana",
    stateSlug: "haryana",
    cityContext:
      "Gurugram's dense corporate hub — home to Fortune 500 offices, MNC campuses, and hundreds of specialty cafés along Cyber Hub and Golf Course Road — drives some of the highest per-capita green coffee demand in India.",
    industries: ["MNC Offices", "Tech Campuses", "Specialty Cafés", "Hotels", "Co-working Spaces"],
    nearbyAreas: ["Manesar", "Faridabad", "Rewari", "Pataudi"],
    transitDays: "2-4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "koraput-hsd", "chikmagalur-arabica", "halflong-arabica-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "Can I buy specialty green coffee for my Gurugram café or roastery?",
        answer: "Yes — Gurugram's roasters and specialty cafés are some of our most active buyers. Transit is 2-4 days. We carry Koraput Naturals, HSD, and Peaberry for single-origin menus. Sample packs available.",
      },
    ],
    coordinates: { lat: 28.4595, lng: 77.0266 },
  },
  {
    city: "Faridabad",
    citySlug: "faridabad",
    state: "Haryana",
    stateSlug: "haryana",
    cityContext:
      "Faridabad's large manufacturing and industrial sector means consistent institutional canteen demand for commercial-grade green coffee, alongside a growing café culture in residential zones.",
    industries: ["Manufacturing", "Industrial Canteens", "Hotels", "Food Service"],
    nearbyAreas: ["Ballabhgarh", "Palwal", "Greater Faridabad"],
    transitDays: "2-4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Do you supply green coffee to Faridabad factory canteens?",
        answer: "Yes — commercial AA/AAA grade is ideal for industrial canteens. Delivery to Faridabad is 2-4 days. We provide proper GST invoicing for corporate procurement.",
      },
    ],
    coordinates: { lat: 28.4089, lng: 77.3178 },
  },

  // ── CHANDIGARH ─────────────────────────────────────────────────────────────
  {
    city: "Chandigarh",
    citySlug: "chandigarh",
    state: "Chandigarh",
    stateSlug: "chandigarh",
    cityContext:
      "Chandigarh Tricity (Chandigarh, Mohali, Panchkula) has India's highest per-capita income and a thriving café culture. Specialty roasters, boutique cafés, and upscale hotels are active green coffee buyers.",
    industries: ["Specialty Cafés", "Government Offices", "Hotels", "IT Campuses", "Retail Chains"],
    nearbyAreas: ["Mohali", "Panchkula", "Zirakpur", "Kharar", "Derabassi"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "chikmagalur-arabica", "koraput-peaberry", "halflong-arabica-naturals"],
    faqs: [
      {
        question: "Can Chandigarh specialty cafés buy single-origin green coffee from you?",
        answer: "Yes — Chandigarh's café scene has excellent palates. We supply Koraput Naturals, Peaberry, and Halflong Arabica for single-origin menus. Minimum 10 kg. Sample packs available via WhatsApp.",
      },
    ],
    coordinates: { lat: 30.7333, lng: 76.7794 },
  },

  // ── ODISHA ─────────────────────────────────────────────────────────────────
  {
    city: "Bhubaneswar",
    citySlug: "bhubaneswar",
    state: "Odisha",
    stateSlug: "odisha",
    cityContext:
      "Bhubaneswar is Odisha's capital and fastest-growing city. As the gateway to Koraput coffee country, Bhubaneswar roasters have unique access to fresh-harvest Odisha Arabica and Robusta direct from the Eastern Ghats.",
    industries: ["IT Campuses", "Government Offices", "Hotels", "Specialty Cafés", "Retail Chains"],
    nearbyAreas: ["Cuttack", "Khurda", "Puri", "Berhampur"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "koraput-commercial-aaa", "koraput-hsd", "koraput-peaberry"],
    faqs: [
      {
        question: "Can I source Koraput green coffee directly in Bhubaneswar?",
        answer: "Yes — as the nearest major city to Koraput's growing coffee belt, Bhubaneswar gets some of our fastest deliveries (2-3 days). Ideal for roasters wanting fresh-harvest Odisha Arabica.",
      },
    ],
    coordinates: { lat: 20.2961, lng: 85.8245 },
  },
  {
    city: "Cuttack",
    citySlug: "cuttack",
    state: "Odisha",
    stateSlug: "odisha",
    cityContext:
      "Cuttack — Odisha's silver city and commercial centre — has a growing HORECA sector and educational institutions creating institutional coffee demand.",
    industries: ["HORECA", "Educational Institutions", "Government Offices", "Food Service"],
    nearbyAreas: ["Bhubaneswar", "Kendrapara", "Jagatsinghpur"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "koraput-naturals"],
    faqs: [
      {
        question: "Do you deliver green coffee to Cuttack?",
        answer: "Yes — Cuttack delivery is 2-3 days from dispatch. We supply both commercial and specialty Odisha coffee. Being close to the Koraput source means you get some of the freshest lots.",
      },
    ],
    coordinates: { lat: 20.4625, lng: 85.8828 },
  },

  // ── ASSAM ──────────────────────────────────────────────────────────────────
  {
    city: "Guwahati",
    citySlug: "guwahati",
    state: "Assam",
    stateSlug: "assam",
    cityContext:
      "Guwahati is Northeast India's commercial gateway. A rapidly growing café scene, major hotel chains, and university campuses create increasing demand for quality green coffee alongside the region's tea culture.",
    industries: ["Hotels", "Specialty Cafés", "Educational Institutions", "Government Offices", "HORECA"],
    nearbyAreas: ["Dispur", "Kamrup", "North Guwahati", "Sonapur"],
    transitDays: "5-7 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Can I buy bulk green coffee in Guwahati?",
        answer: "Yes — we deliver to Guwahati in 5-7 days via road freight from our dispatch point. Commercial lots for canteens and specialty for cafés. WhatsApp us for current availability.",
      },
    ],
    coordinates: { lat: 26.1445, lng: 91.7362 },
  },

  // ── JHARKHAND ──────────────────────────────────────────────────────────────
  {
    city: "Ranchi",
    citySlug: "ranchi",
    state: "Jharkhand",
    stateSlug: "jharkhand",
    cityContext:
      "Ranchi — Jharkhand's capital — has a growing hospitality sector, government institutions, and a café culture emerging among its young professional population. Industrial canteens are a key buyer segment.",
    industries: ["Government Offices", "Industrial Canteens", "Hotels", "Specialty Cafés"],
    nearbyAreas: ["Jamshedpur", "Bokaro", "Ramgarh", "Hazaribagh"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "How do I order bulk green coffee for Ranchi institutions?",
        answer: "Contact us via WhatsApp and we'll arrange road freight delivery to Ranchi in 4-6 days. We supply commercial AA/AAA for institutional canteens and specialty lots for cafés.",
      },
    ],
    coordinates: { lat: 23.3441, lng: 85.3096 },
  },

  // ── CHHATTISGARH ───────────────────────────────────────────────────────────
  {
    city: "Raipur",
    citySlug: "raipur",
    state: "Chhattisgarh",
    stateSlug: "chhattisgarh",
    cityContext:
      "Raipur — Chhattisgarh's capital and central India's emerging commercial hub — has a growing café scene, steel industry campuses, and large government institutions driving coffee demand.",
    industries: ["Steel Industry", "Government Offices", "Hotels", "Specialty Cafés", "Corporate Campuses"],
    nearbyAreas: ["Durg", "Bhilai", "Rajnandgaon", "Baloda Bazar"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Can Raipur's steel industry campuses buy green coffee in bulk?",
        answer: "Yes — commercial AA/AAA is ideal for industrial canteens. We deliver to Raipur in 3-5 days. GST invoice included. WhatsApp for institutional pricing.",
      },
    ],
    coordinates: { lat: 21.2514, lng: 81.6296 },
  },

  // ── UTTARAKHAND ────────────────────────────────────────────────────────────
  {
    city: "Dehradun",
    citySlug: "dehradun",
    state: "Uttarakhand",
    stateSlug: "uttarakhand",
    cityContext:
      "Dehradun's large educational institutions, army cantonments, and growing café scene make it a consistent buyer of both commercial and specialty green coffee.",
    industries: ["Educational Institutions", "Defence Canteens", "Hotels", "Specialty Cafés"],
    nearbyAreas: ["Haridwar", "Rishikesh", "Mussoorie", "Roorkee"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Do you supply green coffee to Dehradun schools and colleges?",
        answer: "Yes — educational institutions and army canteens are regular buyers. Commercial AA/AAA from 60 kg. Delivery to Dehradun in 3-5 days from dispatch.",
      },
    ],
    coordinates: { lat: 30.3165, lng: 78.0322 },
  },

  // ── ADDITIONAL KARNATAKA CITIES ────────────────────────────────────────────
  {
    city: "Hubli-Dharwad",
    citySlug: "hubli-dharwad",
    state: "Karnataka",
    stateSlug: "karnataka",
    cityContext:
      "Hubli-Dharwad's twin-city hub serves as north Karnataka's commercial centre. A growing café culture and large educational institutions create demand for specialty and commercial green coffee.",
    industries: ["Specialty Cafés", "Educational Institutions", "Hotels", "Retail Chains"],
    nearbyAreas: ["Gadag", "Haveri", "Dharwad", "Belgaum"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["chikmagalur-arabica", "koraput-commercial-aaa", "coorg-arabica"],
    faqs: [
      {
        question: "Can I get Karnataka-origin green coffee delivered to Hubli?",
        answer: "Yes — Chikmagalur and Coorg Arabica are a natural fit for Hubli buyers wanting origin-proximity. Transit is 3-5 days. Specialty from 10 kg, commercial from 60 kg.",
      },
    ],
    coordinates: { lat: 15.3647, lng: 75.1240 },
  },
  {
    city: "Mangaluru",
    citySlug: "mangaluru",
    state: "Karnataka",
    stateSlug: "karnataka",
    cityContext:
      "Mangaluru sits at the edge of Karnataka's coffee belt and has a deeply embedded coffee culture. Roasters here have direct access to Coorg and Chikmagalur origins, and specialty cafés serve a discerning local market.",
    industries: ["Specialty Cafés", "Roasters", "Hotels", "Retail Chains", "Export"],
    nearbyAreas: ["Udupi", "Puttur", "Bantwal", "Sullia"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["coorg-arabica", "chikmagalur-arabica", "koraput-naturals", "koraput-peaberry"],
    faqs: [
      {
        question: "Is Mangaluru close to Karnataka's coffee growing regions?",
        answer: "Yes — Mangaluru is the nearest port city to Coorg and Chikmagalur. Our transit to Mangaluru is just 2-3 days. Ideal for roasters wanting traceability and freshness from Karnataka origins.",
      },
    ],
    coordinates: { lat: 12.9141, lng: 74.8560 },
  },

  // ── ADDITIONAL TAMIL NADU CITIES ───────────────────────────────────────────
  {
    city: "Madurai",
    citySlug: "madurai",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Madurai's strong café culture, tourism, and textile industry create steady green coffee demand. The city's filter-coffee tradition is evolving with specialty café adoption among younger consumers.",
    industries: ["Specialty Cafés", "Hotels", "Textile Industry", "Tourism"],
    nearbyAreas: ["Dindigul", "Virudhunagar", "Theni", "Sivaganga"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Do you deliver green coffee to Madurai cafés and hotels?",
        answer: "Yes — Madurai delivery is 4-6 days. Commercial lots for filter coffee blending and specialty for single-origin menus. WhatsApp for current stock and pricing.",
      },
    ],
    coordinates: { lat: 9.9252, lng: 78.1198 },
  },
  {
    city: "Tiruchirappalli",
    citySlug: "tiruchirappalli",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Tiruchirappalli (Trichy) is Tamil Nadu's fourth-largest city with a strong industrial base. Factory canteens, hotels, and a growing café scene are key buyer segments.",
    industries: ["Manufacturing", "Industrial Canteens", "Hotels", "Specialty Cafés"],
    nearbyAreas: ["Karur", "Thanjavur", "Pudukkottai", "Ariyalur"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Can factories and canteens in Trichy buy green coffee from you?",
        answer: "Yes — commercial AA/AAA is ideal for high-volume canteen use. We deliver to Trichy in 4-6 days. GST invoice provided for industrial procurement.",
      },
    ],
    coordinates: { lat: 10.7905, lng: 78.7047 },
  },
  {
    city: "Salem",
    citySlug: "salem",
    state: "Tamil Nadu",
    stateSlug: "tamil-nadu",
    cityContext:
      "Salem's steel industry and textile belt create significant institutional canteen demand. A growing café culture among Salem's young workforce is also driving specialty coffee adoption.",
    industries: ["Steel Industry", "Textile Industry", "Corporate Canteens", "Specialty Cafés"],
    nearbyAreas: ["Namakkal", "Dharmapuri", "Erode", "Attur"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-commercial-aa"],
    faqs: [
      {
        question: "How do Salem's steel industry canteens buy green coffee?",
        answer: "Industrial canteens use commercial AA/AAA grade in 60 kg bags for cost-effective bulk brewing. Transit to Salem is 4-6 days. WhatsApp us for institutional pricing.",
      },
    ],
    coordinates: { lat: 11.6643, lng: 78.1460 },
  },

  // ── ADDITIONAL MAHARASHTRA CITIES ─────────────────────────────────────────
  {
    city: "Nashik",
    citySlug: "nashik",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "Nashik is Maharashtra's wine and hospitality hub. Vineyards, resorts, and a booming café culture create strong demand for specialty and commercial green coffee.",
    industries: ["Hospitality & Resorts", "Wine Tourism", "Specialty Cafés", "Corporate Offices", "FMCG"],
    nearbyAreas: ["Igatpuri", "Sinnar", "Malegaon", "Dhule"],
    transitDays: "2-3 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-naturals", "chikmagalur-arabica", "koraput-peaberry", "coorg-arabica"],
    faqs: [
      {
        question: "Can Nashik vineyards and resorts buy specialty green coffee from you?",
        answer: "Yes — Nashik's resort and winery hospitality sector is a natural fit for premium single-origin lots. We supply Koraput Naturals and Peaberry for cupping menus. Delivery in 2-3 days.",
      },
    ],
    coordinates: { lat: 19.9975, lng: 73.7898 },
  },
  {
    city: "Aurangabad",
    citySlug: "aurangabad",
    state: "Maharashtra",
    stateSlug: "maharashtra",
    cityContext:
      "Aurangabad (Sambhajinagar) is Maharashtra's industrial and heritage tourism hub. Auto industry campuses, heritage hotel chains, and an emerging café culture drive bulk coffee sourcing.",
    industries: ["Automotive Industry", "Heritage Hotels", "Industrial Canteens", "Specialty Cafés"],
    nearbyAreas: ["Jalna", "Latur", "Osmanabad", "Beed"],
    transitDays: "3-4 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-naturals"],
    faqs: [
      {
        question: "Do you supply green coffee to Aurangabad's automotive industry canteens?",
        answer: "Yes — commercial AA/AAA grade is ideal for large industrial canteens. Delivery to Aurangabad is 3-4 days from dispatch. GST invoice for corporate procurement.",
      },
    ],
    coordinates: { lat: 19.8762, lng: 75.3433 },
  },

  // ── ADDITIONAL GUJARAT CITIES ──────────────────────────────────────────────
  {
    city: "Vadodara",
    citySlug: "vadodara",
    state: "Gujarat",
    stateSlug: "gujarat",
    cityContext:
      "Vadodara's large industrial base — chemicals, petrochemicals, and engineering — creates strong institutional canteen demand. A growing hospitality sector adds premium green coffee buyers.",
    industries: ["Chemical & Petrochemical Industry", "Engineering Companies", "Hotels", "Corporate Campuses"],
    nearbyAreas: ["Anand", "Bharuch", "Kheda", "Panchmahal"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Can Vadodara's chemical industry campuses buy green coffee in bulk?",
        answer: "Yes — we supply commercial-grade lots to industrial canteens across Gujarat. Delivery to Vadodara is 3-5 days. GST invoice and delivery challans provided.",
      },
    ],
    coordinates: { lat: 22.3072, lng: 73.1812 },
  },
  {
    city: "Rajkot",
    citySlug: "rajkot",
    state: "Gujarat",
    stateSlug: "gujarat",
    cityContext:
      "Rajkot's booming MSME ecosystem, engineering industry, and a growing café culture among young entrepreneurs make it an emerging buyer of commercial and specialty green coffee.",
    industries: ["Engineering & Manufacturing", "MSME", "Hotels", "Specialty Cafés"],
    nearbyAreas: ["Morbi", "Gondal", "Junagadh", "Jamnagar"],
    transitDays: "3-5 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "chikmagalur-arabica", "koraput-commercial-aa"],
    faqs: [
      {
        question: "Do you deliver green coffee to Rajkot businesses?",
        answer: "Yes — Rajkot delivery is 3-5 days. We cater to industrial canteens and specialty cafés. WhatsApp us for pricing and current stock.",
      },
    ],
    coordinates: { lat: 22.3039, lng: 70.8022 },
  },

  // ── BIHAR ──────────────────────────────────────────────────────────────────
  {
    city: "Patna",
    citySlug: "patna",
    state: "Bihar",
    stateSlug: "bihar",
    cityContext:
      "Patna — Bihar's capital — has large government institutions, a growing hospitality sector, and an emerging café culture driven by students and professionals. Institutional canteens are a key buyer segment.",
    industries: ["Government Offices", "Educational Institutions", "Hotels", "HORECA"],
    nearbyAreas: ["Hajipur", "Danapur", "Biharsharif", "Gaya"],
    transitDays: "4-6 days",
    moq: "10 kg",
    popularProductSlugs: ["koraput-commercial-aaa", "koraput-commercial-aa", "chikmagalur-arabica"],
    faqs: [
      {
        question: "Can government institutions in Patna buy green coffee from you?",
        answer: "Yes — we supply institutional buyers in Patna with GST invoicing. Commercial AA/AAA grade in 60 kg bags is standard for high-volume use. Delivery in 4-6 days.",
      },
    ],
    coordinates: { lat: 25.5941, lng: 85.1376 },
  },
];

export function getCitiesByState(stateSlug: string): IndiaCity[] {
  return indiaCities.filter((c) => c.stateSlug === stateSlug);
}

export function getCityBySlug(stateSlug: string, citySlug: string): IndiaCity | undefined {
  return indiaCities.find((c) => c.stateSlug === stateSlug && c.citySlug === citySlug);
}

export function getCityBySlugOnly(citySlug: string): IndiaCity | undefined {
  return indiaCities.find((c) => c.citySlug === citySlug);
}

export function getRelatedCities(citySlug: string, stateSlug: string): IndiaCity[] {
  return indiaCities.filter((c) => c.stateSlug === stateSlug && c.citySlug !== citySlug).slice(0, 4);
}

export const INDIA_STATES: { name: string; slug: string }[] = [
  { name: "Maharashtra", slug: "maharashtra" },
  { name: "Karnataka", slug: "karnataka" },
  { name: "Tamil Nadu", slug: "tamil-nadu" },
  { name: "Kerala", slug: "kerala" },
  { name: "Delhi NCR", slug: "delhi-ncr" },
  { name: "Telangana", slug: "telangana" },
  { name: "Gujarat", slug: "gujarat" },
  { name: "West Bengal", slug: "west-bengal" },
  { name: "Punjab", slug: "punjab" },
  { name: "Rajasthan", slug: "rajasthan" },
  { name: "Uttar Pradesh", slug: "uttar-pradesh" },
  { name: "Madhya Pradesh", slug: "madhya-pradesh" },
  { name: "Andhra Pradesh", slug: "andhra-pradesh" },
  { name: "Haryana", slug: "haryana" },
  { name: "Chandigarh", slug: "chandigarh" },
  { name: "Odisha", slug: "odisha" },
  { name: "Assam", slug: "assam" },
  { name: "Jharkhand", slug: "jharkhand" },
  { name: "Chhattisgarh", slug: "chhattisgarh" },
  { name: "Uttarakhand", slug: "uttarakhand" },
  { name: "Bihar", slug: "bihar" },
];

export function getStateNameFromSlug(slug: string): string | undefined {
  return INDIA_STATES.find((s) => s.slug === slug)?.name;
}

// Top cities for supplier-style flat pages
export const TOP_INDIAN_CITIES = [
  "mumbai", "bengaluru", "hyderabad", "chennai", "new-delhi",
  "pune", "ahmedabad", "kolkata", "kochi", "jaipur",
];
