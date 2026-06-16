import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Indian Green Coffee Products | Specialty & Commercial | Bulk Green Coffee",
  description:
    "Browse wholesale Indian green coffee — specialty Natural, Washed, and HSD lots from Koraput, Halflong, and South India; plus commercial AA/AAA and Peaberry grade. MOQ from 10 kg. Export-ready.",
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
