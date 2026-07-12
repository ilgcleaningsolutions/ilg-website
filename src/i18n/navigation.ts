import { createNavigation } from "next-intl/navigation";
import { routing } from "./routing";

// Locale-aware drop-in replacements for next/link + next/navigation. These keep
// the active locale on the URL automatically, so components link with plain
// hrefs ("/klinmak") and the "/es" prefix is added when needed.
export const { Link, redirect, usePathname, useRouter, getPathname } =
  createNavigation(routing);
