import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Bulk Green Coffee | Gray Cup Enterprises Pvt. Ltd.",
  description:
    "Learn about Bulk Green Coffee — operated by Gray Cup Enterprises Private Limited (CIN: U47211DL2025PTC457808, GST: 06AAMCG4985H1Z4). Incorporated November 2025, sourcing Indian green coffee directly from tribal cooperatives and estates.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Bulk Green Coffee | Gray Cup Enterprises",
    description:
      "India-registered wholesale green coffee supplier. Direct sourcing from Koraput, Assam, and South India estates. Export to Europe, Middle East, and Southeast Asia.",
    url: "https://bulkgreencoffee.com/about",
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
