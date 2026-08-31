import { useParams } from "react-router";
import { RoastedPlacePage } from "@/components/roasted/RoastedPlacePage";
import { getRoastedPlace } from "@/data/roasted-places";
import { pageMeta, NOT_FOUND_META } from "@/lib/seo";

export function meta({ params }: { params: { place?: string } }) {
  const place = getRoastedPlace(params.place || "");
  if (!place) return NOT_FOUND_META;
  return pageMeta({
    title: `Bulk Roasted Coffee for Cafés in ${place.name} | 1–50kg | Bulk Green Coffee`,
    description: `Wholesale roasted coffee for cafés, restaurants and hotels in ${place.name}, ${place.state}. 1kg to 50kg packs at volume pricing, roasted to order, delivered in ${place.transitDays}. GST invoice.`,
    canonical: `/bulk-roasted-coffee-cafes/${place.slug}`,
    image: "https://bulkgreencoffee.com/roasted/hero-beans.webp",
  });
}

export default function BulkRoastedCafesPlaceRoute() {
  const { place } = useParams<{ place: string }>();
  return <RoastedPlacePage kind="cafe" placeSlug={place || ""} />;
}
