"use client";

import { useTranslations } from "next-intl";
import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import IndustriesHighlights from "@/components/IndustriesHighlights";
import TecnovapSteamCleaners from "@/components/TecnovapSteamCleaners";

export default function HomePage() {
  const t = useTranslations("Home");

  return (
    <Layout>
      <HeroSection />

      <IndustriesHighlights />

      <TecnovapSteamCleaners />

      <ContactSection
        heading={t("contactHeading")}
        subtitle={t("contactSubtitle")}
        brandContext={t("contactBrandContext")}
      />
    </Layout>
  );
}
