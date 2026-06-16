import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers at Bulk Green Coffee | Gray Cup Enterprises",
  description:
    "Join Bulk Green Coffee — a fast-growing Indian green coffee wholesale and export company. We work with tribal farming cooperatives across Koraput, Assam, and South India.",
  alternates: { canonical: "/careers" },
  openGraph: {
    title: "Careers | Bulk Green Coffee",
    description: "Open roles at Gray Cup Enterprises Private Limited, the company behind Bulk Green Coffee.",
    url: "https://bulkgreencoffee.com/careers",
  },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
