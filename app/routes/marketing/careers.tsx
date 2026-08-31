import React from "react";
import { pageMeta } from "@/lib/seo";

export const meta = () =>
  pageMeta({
    title: "Careers | Bulk Green Coffee",
    description: "Work with Bulk Green Coffee. Open roles across sourcing, quality, logistics, and growth for India's green coffee export business.",
    canonical: "/careers",
  });

export default function CareersPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="max-w-5xl mx-auto px-4 lg:px-6">
        <div className="text-start mb-16">
          <h1 className="text-3xl md:text-4xl font-semibold text-black mb-3">
            Careers at Bulk Green Coffee
          </h1>
          <p className="text-md md:text-lg text-muted-foreground">
            What are we? Who Started this? Started why?
          </p>
        </div>
      </div>
    </div>
  );
}
