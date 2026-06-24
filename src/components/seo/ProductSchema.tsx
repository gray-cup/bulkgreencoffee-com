import type { Product, ProductAvailability } from "@/data/products/types";

const BASE_URL = "https://bulkgreencoffee.com";

function schemaAvailability(a: ProductAvailability): string {
  if (a === "in_stock") return "https://schema.org/InStock";
  if (a === "preorder") return "https://schema.org/PreOrder";
  return "https://schema.org/OutOfStock";
}

export function ProductSchema({ product }: { product: Product }) {
  const url = `${BASE_URL}/products/${product.slug}`;
  const imageUrl = product.image.startsWith("http")
    ? product.image
    : `${BASE_URL}${product.image}`;

  const ratedReviews = (product.reviews ?? []).filter((r) => r.rating != null);
  const aggregateRating =
    ratedReviews.length > 0
      ? {
          "@type": "AggregateRating",
          ratingValue: (
            ratedReviews.reduce((sum, r) => sum + r.rating, 0) /
            ratedReviews.length
          ).toFixed(1),
          reviewCount: ratedReviews.length,
          bestRating: 5,
          worstRating: 1,
        }
      : undefined;

  const schema = {
    "@context": "https://schema.org",
    "@type": "Product",
    "@id": url,
    name: product.name,
    description: product.description,
    image: imageUrl,
    url,
    sku: product.sku,
    mpn: product.mpn ?? product.sku,
    brand: {
      "@type": "Brand",
      name: product.brand,
    },
    category: product.googleProductCategory,
    ...(aggregateRating && { aggregateRating }),
    offers: {
      "@type": "AggregateOffer",
      priceCurrency: "INR",
      lowPrice: product.priceRange.min.toFixed(2),
      highPrice: product.priceRange.max.toFixed(2),
      offerCount: product.grades.length > 0 ? product.grades.length : 1,
      availability: schemaAvailability(product.availability),
      url,
      seller: {
        "@type": "Organization",
        name: "Bulk Green Coffee",
        url: BASE_URL,
      },
      priceValidUntil: new Date(
        new Date().setFullYear(new Date().getFullYear() + 1)
      )
        .toISOString()
        .split("T")[0],
      itemCondition: "https://schema.org/NewCondition",
      shippingDetails: {
        "@type": "OfferShippingDetails",
        shippingRate: {
          "@type": "MonetaryAmount",
          value: "0",
          currency: "INR",
        },
        shippingDestination: {
          "@type": "DefinedRegion",
          addressCountry: "IN",
        },
        deliveryTime: {
          "@type": "ShippingDeliveryTime",
          handlingTime: {
            "@type": "QuantitativeValue",
            minValue: 0,
            maxValue: 1,
            unitCode: "DAY",
          },
          transitTime: {
            "@type": "QuantitativeValue",
            minValue: 2,
            maxValue: 7,
            unitCode: "DAY",
          },
        },
      },
      hasMerchantReturnPolicy: {
        "@type": "MerchantReturnPolicy",
        applicableCountry: "IN",
        returnPolicyCategory: "https://schema.org/MerchantReturnFiniteReturnWindow",
        merchantReturnDays: 7,
        returnMethod: "https://schema.org/ReturnByMail",
        returnFees: "https://schema.org/FreeReturn",
      },
    },
    ...(product.scaScore != null && {
      additionalProperty: [
        {
          "@type": "PropertyValue",
          name: "SCA Score",
          value: product.scaScore,
        },
      ],
    }),
    ...(product.origin && {
      countryOfOrigin: {
        "@type": "Country",
        name: "India",
      },
    }),
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
