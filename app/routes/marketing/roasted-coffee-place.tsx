import { useParams } from "react-router";
import { RoastedPlacePage } from "@/components/roasted/RoastedPlacePage";
import { getRoastedPlace } from "@/data/roasted-places";
import { pageMeta, NOT_FOUND_META } from "@/lib/seo";

export function meta({ params }: { params: { place?: string } }) {
  const place = getRoastedPlace(params.place || "");
  if (!place) return NOT_FOUND_META;
  return pageMeta({
    title: `Roasted Coffee in ${place.name} | 250g–1kg Packs | Bulk Green Coffee`,
    description: `Buy freshly roasted single-origin Indian coffee in ${place.name}, ${place.state}. 250g, 500g and 1kg packs, roasted to order, delivered in ${place.transitDays}.`,
    canonical: `/roasted-coffee/${place.slug}`,
    image: "https://bulkgreencoffee.com/roasted/roasted-beans.webp",
  });
}

export default function RoastedCoffeePlaceRoute() {
  const { place } = useParams<{ place: string }>();
  return <RoastedPlacePage kind="retail" placeSlug={place || ""} />;
}
