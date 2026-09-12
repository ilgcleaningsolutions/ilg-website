/**
 * Site-wide SEO constants shared by the root layout, per-page metadata,
 * sitemap.xml and robots.txt.
 */

export const SITE_NAME = "ILG Cleaning Solutions";

export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ilgcleaningsolutions.com";

// New ILG logo composited onto the brand navy as a 1200×630 social-share card (Cloudinary transform).
export const OG_IMAGE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/c_fit,w_820/c_pad,w_1200,h_630,b_rgb:1d2c4d/v1781883598/igl-dark-mode-logo_ulpp0u.png";

/**
 * Trim free-form product copy down to a search-snippet-sized meta description
 * (~160 chars), cutting on a word boundary.
 */
export function metaDescription(text: string, max = 160): string {
  if (text.length <= max) return text;
  const cut = text.slice(0, max);
  return `${cut.slice(0, cut.lastIndexOf(" "))}…`;
}

/**
 * Canonical + hreflang alternates for a route. `path` is the un-prefixed
 * English path ("/" for home); Spanish pages live under "/es".
 */
export function localeAlternates(path: string, locale: string) {
  const enPath = path === "/" ? "/" : path;
  const esPath = path === "/" ? "/es" : `/es${path}`;
  return {
    canonical: locale === "es" ? esPath : enPath,
    languages: { en: enPath, es: esPath },
  };
}
