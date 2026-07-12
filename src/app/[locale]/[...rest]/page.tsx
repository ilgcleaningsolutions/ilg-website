import { notFound } from "next/navigation";

// Any path that doesn't match a real page falls through to here and renders the
// localized not-found UI.
export default function CatchAllPage() {
  notFound();
}
