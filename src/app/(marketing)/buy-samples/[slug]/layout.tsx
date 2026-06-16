import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Buy Sample | Bulk Green Coffee",
  description: "Order an Indian green coffee sample before committing to a bulk purchase. Specialty and commercial lots available.",
  robots: { index: false, follow: false },
};

export default function BuySampleSlugLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
