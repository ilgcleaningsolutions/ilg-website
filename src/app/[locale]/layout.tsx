import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";
import "../globals.css";
import { Providers } from "@/components/Providers";
import { routing } from "@/i18n/routing";

const SITE_NAME = "ILG Cleaning Services";

// New ILG logo composited onto the brand navy as a 1200×630 social-share card (Cloudinary transform).
const OG_IMAGE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/c_fit,w_820/c_pad,w_1200,h_630,b_rgb:1d2c4d/v1781883598/igl-dark-mode-logo_ulpp0u.png";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });
  const title = t("title");
  const description = t("description");

  return {
    metadataBase: new URL(
      process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.ilgcleaning.com",
    ),
    title,
    description,
    // Point search engines at the localized alternates for the home page.
    alternates: {
      canonical: locale === routing.defaultLocale ? "/" : `/${locale}`,
      languages: {
        en: "/",
        es: "/es",
      },
    },
    openGraph: {
      type: "website",
      siteName: SITE_NAME,
      locale: locale === "es" ? "es_ES" : "en_US",
      title,
      description,
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: SITE_NAME }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE],
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering for this locale.
  setRequestLocale(locale);

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="antialiased">
        <NextIntlClientProvider>
          <Providers>{children}</Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
