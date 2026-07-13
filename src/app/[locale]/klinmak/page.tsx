"use client";

import { useLocale, useTranslations } from "next-intl";
import BrandPage from "@/components/BrandPage";
import KlinmakProductsBanner from "@/components/KlinmakProductsBanner";
import KlinmakRangeHeader from "@/components/KlinmakRangeHeader";
import KlinmakWhyChoose from "@/components/KlinmakWhyChoose";
import ProductCarousel from "@/components/ProductCarousel";
import { getKlinmakProducts } from "@/lib/klinmak-products";
import { CheckCircle2 } from "lucide-react";

const KlinmakFooter = () => {
  const t = useTranslations("KlinmakPage");
  const setsApart = t.raw("setsApart") as string[];

  return (
    <section className="border-t border-border section-alt dark:border-white/10">
      <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 py-16 md:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: About */}
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
              {t("footerMeetLead")}{" "}
              <span className="italic text-primary">Klinmak</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              {t("footerPara1")}
            </p>
            <p className="text-muted-foreground/80 text-sm leading-relaxed">
              {t("footerPara2")}
            </p>
          </div>

          {/* Right: What Sets Us Apart */}
          <div>
            <h3 className="font-heading font-bold text-xl text-foreground mb-6">
              {t("footerWhatSetsApart")}
            </h3>
            <div className="flex flex-col gap-4">
              {setsApart.map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle2 size={18} className="text-ilg-blue-light shrink-0" />
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

export default function KlinmakPage() {
  const locale = useLocale();
  const t = useTranslations("KlinmakPage");

  const products = getKlinmakProducts(locale);
  const jokerProducts = products.filter((p) => p.group === "joker");
  const miniProducts = products.filter((p) => p.group === "mini");

  return (
    <BrandPage
      brandName="Klinmak"
      videoUrl="https://player.vimeo.com/video/1086777340?h=3409b137f3&autoplay=1&loop=1&muted=1&background=1"
      heroLogo="https://res.cloudinary.com/dcclo03c2/image/upload/v1768498735/imakus/klinmak-logo-dark-mode.png"
      heroTitle={t("heroTitle")}
      heroSubtitle={t("heroSubtitle")}
      heroSubtitleVariant="paragraph"
      heroAlign="bottom"
      heroCompact
      brandFooter={<KlinmakFooter />}
    >
      <KlinmakWhyChoose />

      {/* ======================  PRODUCTS  ====================== */}
      <KlinmakProductsBanner />

      {/* Joker range — cream block */}
      <KlinmakRangeHeader
        category={t("jokerCategory")}
        title={t("jokerTitle")}
        left={t.raw("jokerLeft") as string[]}
        right={t.raw("jokerRight") as string[]}
        altBg
      />
      <ProductCarousel products={jokerProducts} brandSlug="klinmak" altBg />

      {/* Mini range — white block */}
      <KlinmakRangeHeader
        category={t("miniCategory")}
        title={t("miniTitle")}
        left={t.raw("miniLeft") as string[]}
        right={t.raw("miniRight") as string[]}
      />
      <ProductCarousel products={miniProducts} brandSlug="klinmak" />
    </BrandPage>
  );
}
