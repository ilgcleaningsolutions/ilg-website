import type { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import HomePage from "@/components/HomePage";
import { localeAlternates } from "@/lib/site";

// Title/description/OG come from the root layout; the page only owns its canonical.
export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  return {
    alternates: localeAlternates("/", locale),
  };
}

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  setRequestLocale(locale);
  return <HomePage />;
}
