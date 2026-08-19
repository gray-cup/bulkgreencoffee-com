import { products, type Product } from "@/data/products";

// Deterministic (seeded) shuffle so location pages show a "random" slice of
// the catalogue without a server/client hydration mismatch - the same seed
// (e.g. the country or city slug) always picks the same products, but
// different locations show different products.
function seededRandom(seed: string) {
  let h = 0;
  for (let i = 0; i < seed.length; i++) {
    h = (Math.imul(31, h) + seed.charCodeAt(i)) | 0;
  }
  return function next() {
    h = Math.imul(h ^ (h >>> 15), h | 1);
    h ^= h + Math.imul(h ^ (h >>> 7), h | 61);
    return ((h ^ (h >>> 14)) >>> 0) / 4294967296;
  };
}

export function getRandomProducts(seed: string, count = 6): Product[] {
  const rng = seededRandom(seed);
  const pool = [...products];
  const picked: Product[] = [];
  while (picked.length < count && pool.length > 0) {
    const index = Math.floor(rng() * pool.length);
    picked.push(pool.splice(index, 1)[0]);
  }
  return picked;
}
