import { redirect, type LoaderFunctionArgs } from "react-router";

// /buy-samples and /buy-samples/* were renamed to /buy-green-coffee-beans/*.
export function loader({ params, request }: LoaderFunctionArgs) {
  const rest = params["*"];
  const search = new URL(request.url).search;
  const target = rest ? `/buy-green-coffee-beans/${rest}` : "/buy-green-coffee-beans";
  return redirect(target + search, 301);
}

export default function BuySamplesRedirect() {
  return null;
}
