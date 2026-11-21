import { formatINR } from "@/lib/currency";

type PriceDisplayProps = {
  minPrice: number;
  maxPrice: number;
  unit: string;
};

export function PriceDisplay({ minPrice, maxPrice, unit }: PriceDisplayProps) {
  const priceText =
    minPrice === maxPrice ? formatINR(minPrice) : `${formatINR(minPrice)} - ${formatINR(maxPrice)}`;

  return (
    <span dir="ltr">
      {priceText}{" "}
      <span className="text-sm font-normal text-muted-foreground">{unit}</span>
    </span>
  );
}
