import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Green Coffee Products | Specialty & Commercial | Bulk Green Coffee",
  description:
    "Browse wholesale Indian green coffee — commercial AA/AAA from ₹800/kg, specialty Natural, Washed & HSD from ₹1,100/kg. Koraput, Halflong, and South India origins. MOQ from 10 kg. Export-ready.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Indian Green Coffee Products | Bulk Green Coffee",
    description:
      "Specialty and commercial Indian Arabica and Robusta. Koraput, Halflong, Chikmagalur, Coorg, Wayanad, Bababudangiri. Export-ready with full documentation.",
    url: "https://bulkgreencoffee.com/products",
  },
};

export default function ProductsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
