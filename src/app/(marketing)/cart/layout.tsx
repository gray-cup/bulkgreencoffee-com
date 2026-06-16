import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sample Request Cart | Bulk Green Coffee",
  description:
    "Review your selected Indian green coffee samples before submitting your request. Specialty Arabica from Koraput, Halflong, and South India. MOQ 10 kg.",
  robots: { index: false, follow: false },
};

export default function CartLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
