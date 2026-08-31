import { indiaCities } from "@/data/india-locations";
import { maharashtraLocalities } from "@/data/roasted-places.generated";

/**
 * Place list for /roasted-coffee/:place and /bulk-roasted-coffee-cafes/:place.
 *
 * Sources, merged and de-duped by slug (first wins):
 *  1. indiaCities  - nationwide metros with rich context/industry data
 *  2. places.md    - affluent Maharashtra localities & high-income districts
 */
export type RoastedPlace = {
  slug: string;
  name: string;
  state: string;
  stateSlug: string;
  blurb: string;
  transitDays: string;
  nearbyAreas?: string[];
};

const bySlug = new Map<string, RoastedPlace>();

for (const c of indiaCities) {
  bySlug.set(c.citySlug, {
    slug: c.citySlug,
    name: c.city,
    state: c.state,
    stateSlug: c.stateSlug,
    blurb: c.cityContext,
    transitDays: c.transitDays ?? "3-6 days",
    nearbyAreas: c.nearbyAreas,
  });
}

for (const l of maharashtraLocalities) {
  if (bySlug.has(l.slug)) continue;
  bySlug.set(l.slug, {
    slug: l.slug,
    name: l.name,
    state: l.state,
    stateSlug: l.stateSlug,
    blurb: `${l.name} — ${l.blurb}. We ship freshly roasted coffee here in retail packs and café bulk quantities.`,
    transitDays: "2-4 days",
  });
}

export const roastedPlaces: RoastedPlace[] = Array.from(bySlug.values());

export function getRoastedPlace(slug: string): RoastedPlace | undefined {
  return bySlug.get(slug);
}
