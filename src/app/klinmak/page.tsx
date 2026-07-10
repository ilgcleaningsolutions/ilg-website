"use client";

import BrandPage from "@/components/BrandPage";
import KlinmakProductsBanner from "@/components/KlinmakProductsBanner";
import KlinmakRangeHeader from "@/components/KlinmakRangeHeader";
import KlinmakWhyChoose from "@/components/KlinmakWhyChoose";
import ProductCarousel from "@/components/ProductCarousel";
import { jokerProducts, miniProducts } from "@/lib/klinmak-products";
import { CheckCircle2 } from "lucide-react";

const jokerLeft = [
  "Klinmak's walk-behind industrial floor scrubbers combine ergonomic design with high performance, delivering professional cleaning results even in medium-sized spaces.",
  "Easy to operate, they ensure spotless floors with minimal effort.",
];

const jokerRight = [
  "All our machines are ready to use and come complete with lithium battery and charger, 2 or 4 brushes, and a standard Hepa H13 filter.",
  "The range includes 3 models with 50-liter tanks and cleaning paths from 40 cm to 70 cm.",
];

const miniLeft = [
  "Klinmak's compact walk-behind floor scrubbers are the perfect choice for narrow or hard-to-reach spaces.",
  "Thanks to advanced technology and a modular design, they deliver flawless results while ensuring energy savings and ease of use.",
];

const miniRight = [
  "All machines are also available complete with lithium battery and charger, equipped with 2 or 4 brushes and a standard Hepa H13 filter.",
  "The range includes 3 models, from 12 to 30 liters, with cleaning paths from 40 to 70 cm.",
];

const setsApart = [
  "Modular machines with advanced technology",
  "Reduced energy consumption",
  "High reliability and performance",
  "Immediate machine availability",
  "Lithium batteries included",
  "3-year warranty coverage",
];

const KlinmakFooter = () => (
  <section className="border-t border-border section-alt dark:border-white/10">
    <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: About */}
        <div>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
            Meet <span className="italic text-primary">Klinmak</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Klinmak is the ideal partner for companies looking for cutting-edge
            solutions in professional floor cleaning. Our machines combine Italian
            craftsmanship with innovative technology to deliver exceptional
            cleaning results.
          </p>
          <p className="text-muted-foreground/80 text-sm leading-relaxed">
            Founded in 2014, we have established ourselves as a leading Italian
            manufacturer based in Milan province. We specialize in professional and
            industrial floor scrubbers, offering 100% Made in Italy solutions distributed
            globally through selected partners across hospitality, healthcare, retail, and
            industrial sectors.
          </p>
        </div>

        {/* Right: What Sets Us Apart */}
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">
            What Sets Us Apart
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

export default function KlinmakPage() {
  return (
    <BrandPage
      brandName="Klinmak"
      videoUrl="https://player.vimeo.com/video/1086777340?h=3409b137f3&autoplay=1&loop=1&muted=1&background=1"
      heroLogo="https://res.cloudinary.com/dcclo03c2/image/upload/v1768498735/imakus/klinmak-logo-dark-mode.png"
      heroTitle="New standards in sustainable cleaning"
      heroSubtitle="KlinMak® floor scrubber-dryers represent a new frontier in professional cleaning efficiency, combining maximum performance and reduced energy consumption."
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
        category="Walk-behind floor scrubbers"
        title="Joker range"
        left={jokerLeft}
        right={jokerRight}
        altBg
      />
      <ProductCarousel
        products={jokerProducts}
        brandSlug="klinmak"
        altBg
      />

      {/* Mini range — white block */}
      <KlinmakRangeHeader
        category="Compact walk-behind floor scrubbers"
        title="Mini range"
        left={miniLeft}
        right={miniRight}
      />
      <ProductCarousel
        products={miniProducts}
        brandSlug="klinmak"
      />
    </BrandPage>
  );
}
