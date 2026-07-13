"use client";

import { useLocale, useTranslations } from "next-intl";
import BrandPage from "@/components/BrandPage";
import ProductCarousel from "@/components/ProductCarousel";
import ProductShowcase from "@/components/ProductShowcase";
import TecnovapBeltCleaningBanner from "@/components/TecnovapBeltCleaningBanner";
import TecnovapBenefits from "@/components/TecnovapBenefits";
import TecnovapProductsBanner from "@/components/TecnovapProductsBanner";
import TecnovapSystemsBanner from "@/components/TecnovapSystemsBanner";
import { getTecnovapProducts } from "@/lib/tecnovap-products";
import { CheckCircle2 } from "lucide-react";

const TecnovapFooter = () => {
  const t = useTranslations("TecnovapPage");
  const values = t.raw("values") as string[];

  return (
    <section className="border-t border-border section-alt dark:border-white/10">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: About */}
          <div>
            <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
              {t("footerMeetLead")}{" "}
              <span className="italic text-primary">Tecnovap</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("footerPara1")}
            </p>
            <p className="text-muted-foreground/80 text-sm leading-relaxed">
              {t("footerPara2")}
            </p>
          </div>

          {/* Right: Our Values */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              {t("footerValuesTitle")}
            </h3>
            <div className="flex flex-col gap-4">
              {values.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 size={18} className="text-ilg-blue-light shrink-0 mt-0.5" />
                  <span className="text-foreground/80 text-sm">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default function TecnovapPage() {
  const locale = useLocale();
  const t = useTranslations("TecnovapPage");

  const products = getTecnovapProducts(locale);
  const productsList = products.filter((p) => p.group === "products");
  const systemsList = products.filter((p) => p.group === "systems");
  const beltsList = products.filter((p) => p.group === "belts");

  return (
    <BrandPage
      brandName="Tecnovap"
      videoSrc="https://www.tecnovap.it/wp-content/uploads/2025/06/Tecnovap-Steam-and-vacuum_1.mp4"
      heroLogo="https://res.cloudinary.com/dxbwqifwn/image/upload/v1782163335/tecnovap-logo_tra1aq.svg"
      heroTitle={t("heroTitle")}
      heroSubtitle={t("heroSubtitle")}
      brandFooter={<TecnovapFooter />}
    >
      {/* ======================  DRY VAPOR STEAM INTRO ====================== */}
      <TecnovapBenefits />

      {/* ======================  PRODUCTS  (white block) ====================== */}
      <TecnovapProductsBanner />
      {productsList.map((p, i) => (
        <ProductShowcase
          key={p.slug}
          eyebrow={p.category}
          name={p.name}
          systemTitle
          spec={p.spec}
          description={p.description}
          features={p.features}
          image={p.image}
          imageAlt={p.imageAlt}
          cta={{ label: t("seeMore"), href: `/tecnovap/${p.slug}` }}
          // First product sits right under the Products banner; collapse the top stripe so they read as one block.
          tightTop={i === 0}
        />
      ))}

      {/* ======================  SYSTEMS  (cream block) ====================== */}
      <TecnovapSystemsBanner />
      <ProductCarousel products={systemsList} brandSlug="tecnovap" altBg />

      {/* ======================  BELT CLEANING  (white block) ====================== */}
      <TecnovapBeltCleaningBanner />
      {beltsList.length > 0 && (
        <ProductCarousel products={beltsList} brandSlug="tecnovap" landscape />
      )}
    </BrandPage>
  );
}
