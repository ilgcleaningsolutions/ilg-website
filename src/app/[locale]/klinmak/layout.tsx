import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { localeAlternates } from "@/lib/site";

// The Klinmak brand page is a client component, so its SEO metadata lives in
// this route layout. Product pages below override with their own metadata.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("klinmakTitle");
  const description = t("klinmakDescription");

  return {
    title,
    description,
    alternates: localeAlternates("/klinmak", locale),
    openGraph: { title, description },
    twitter: { title, description },
  };
}

export default function KlinmakLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
