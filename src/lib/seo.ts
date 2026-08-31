import type { MetaDescriptor } from "react-router";

const BASE_URL = "https://bulkgreencoffee.com";
const DEFAULT_OG_IMAGE = `${BASE_URL}/og.png`;

type PageMetaInput = {
  title: string;
  description: string;
  /** Path (e.g. "/products/koraput-naturals") or absolute URL. Omit for noindex pages. */
  canonical?: string;
  image?: string;
  /** true → emit <meta name="robots" content="noindex"> and no canonical */
  noindex?: boolean;
};

/**
 * Single source of truth for a route's <head> tags in React Router.
 * A leaf route's `meta` export fully replaces the root meta, so every field
 * (title, description, canonical, OG, Twitter) has to be re-emitted here.
 */
export function pageMeta({ title, description, canonical, image, noindex }: PageMetaInput): MetaDescriptor[] {
  const url = canonical
    ? canonical.startsWith("http")
      ? canonical
      : `${BASE_URL}${canonical}`
    : undefined;
  const ogImage = image ?? DEFAULT_OG_IMAGE;

  const tags: MetaDescriptor[] = [
    { title },
    { name: "description", content: description },
    { property: "og:title", content: title },
    { property: "og:description", content: description },
    { property: "og:image", content: ogImage },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "Bulk Green Coffee" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: title },
    { name: "twitter:description", content: description },
    { name: "twitter:image", content: ogImage },
  ];

  if (noindex) {
    tags.push({ name: "robots", content: "noindex, follow" });
  } else if (url) {
    tags.push({ property: "og:url", content: url });
    tags.push({ tagName: "link", rel: "canonical", href: url });
  }

  return tags;
}

export const NOT_FOUND_META = pageMeta({
  title: "Page Not Found | Bulk Green Coffee",
  description: "The page you are looking for does not exist.",
  noindex: true,
});
