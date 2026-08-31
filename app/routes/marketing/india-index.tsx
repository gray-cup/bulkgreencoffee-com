import { redirect } from "react-router";

// No standalone /india hub page exists; send visitors to the locations page.
export const loader = () => redirect("/india/available-locations", 301);

export default function IndiaIndex() {
  return null;
}
