import React from "react";
import { pageMeta } from "@/lib/seo";
import { Button } from "@/components/ui/button";

export const meta = () =>
  pageMeta({
    title: "Contact Us | Bulk Green Coffee | Indian Green Coffee Wholesale",
    description:
      "Get in touch with Bulk Green Coffee to enquire about wholesale Indian green coffee. We supply roasters, importers, and distributors worldwide.",
    canonical: "/contact",
  });

/* ---------- Page ---------- */
export default function ContactPage() {
  return (
    <div className="mt-10 min-h-screen">
      <div className="max-w-6xl pt-10 mx-auto px-4 lg:px-6">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-2xl md:text-3xl font-semibold text-black mb-2">
            Contact Bulk Green Coffee
          </h1>
          <p className="text-muted-foreground">
            Have a question or want to do business? There is always a way to
            reach us.
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sales & Purchases */}
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold text-black mb-1">Sales & Purchases</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Response within 12 hours.
            </p>
            <a
              href="mailto:office@graycup.org"
              className="text-sm text-black underline underline-offset-4 hover:text-neutral-600"
            >
              office@graycup.org
            </a>
          </div>

          {/* General Enquiries */}
          <div className="p-4 border rounded-lg">
            <h2 className="font-semibold text-black mb-1">General Enquiries</h2>
            <p className="text-sm text-muted-foreground mb-3">
              Response within 12 hours.
            </p>
            <a
              href="mailto:arjun@graycup.in"
              className="text-sm text-black underline underline-offset-4 hover:text-neutral-600"
            >
              arjun@graycup.in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
