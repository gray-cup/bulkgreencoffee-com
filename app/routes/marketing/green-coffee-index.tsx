import { redirect } from "react-router";

// No standalone /green-coffee hub page exists; send visitors to the catalogue.
export const loader = () => redirect("/products", 301);

export default function GreenCoffeeIndex() {
  return null;
}
