import type { MetadataRoute } from "next";
import { klinmakProducts } from "@/lib/klinmak-products";
import { getTecnovapSlugs } from "@/lib/tecnovap-products";
import { SITE_URL } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  // Un-prefixed English paths; Spanish alternates live under /es.
  const paths = [
    "/",
    "/klinmak",
    "/tecnovap",
    ...klinmakProducts
      .filter((p) => p.detail)
      .map((p) => `/klinmak/${p.slug}`),
    ...getTecnovapSlugs().map((slug) => `/tecnovap/${slug}`),
  ];

  return paths.map((path) => {
    const en = path === "/" ? SITE_URL : `${SITE_URL}${path}`;
    const es = path === "/" ? `${SITE_URL}/es` : `${SITE_URL}/es${path}`;
    return {
      url: en,
      changeFrequency: "monthly",
      priority: path === "/" ? 1 : path.split("/").length > 2 ? 0.7 : 0.9,
      alternates: { languages: { en, es } },
    };
  });
}
