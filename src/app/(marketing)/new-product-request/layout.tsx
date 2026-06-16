import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Request a New Coffee Origin | Bulk Green Coffee",
  description:
    "Can't find the Indian green coffee origin or grade you need? Submit a new product request and we'll source it for you from Indian tribal cooperatives and estates.",
  alternates: { canonical: "/new-product-request" },
  openGraph: {
    title: "Request a New Coffee Origin | Bulk Green Coffee",
    description: "Tell us what green coffee you need and we'll source it from India.",
    url: "https://bulkgreencoffee.com/new-product-request",
  },
};

export default function NewProductRequestLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
