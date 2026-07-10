"use client";

import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import IndustriesHighlights from "@/components/IndustriesHighlights";
import TecnovapSteamCleaners from "@/components/TecnovapSteamCleaners";

export default function HomePage() {
  return (
    <Layout>
      <HeroSection />

      <IndustriesHighlights />

      <TecnovapSteamCleaners />

      <ContactSection
        heading="Looking for Professional Cleaning Equipment?"
        subtitle="ILG helps customers find the best premium cleaning brands. Get in touch and we'll help you find the perfect solution."
        brandContext="Whether you need floor scrubbing machines from Klinmak or industrial steam cleaners from Tecnovap, our team is ready to assist with consultation, quotes, and after-sales support."
      />
    </Layout>
  );
}
