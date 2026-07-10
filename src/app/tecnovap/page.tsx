"use client";

import BrandPage from "@/components/BrandPage";
import ProductCarousel from "@/components/ProductCarousel";
import ProductShowcase from "@/components/ProductShowcase";
import TecnovapBeltCleaningBanner from "@/components/TecnovapBeltCleaningBanner";
import TecnovapBenefits from "@/components/TecnovapBenefits";
import TecnovapProductsBanner from "@/components/TecnovapProductsBanner";
import TecnovapSystemsBanner from "@/components/TecnovapSystemsBanner";
import { tecnovapProducts } from "@/lib/tecnovap-products";
import { CheckCircle2 } from "lucide-react";

const productsList = tecnovapProducts.filter((p) => p.group === "products");
const systemsList = tecnovapProducts.filter((p) => p.group === "systems");
const beltsList = tecnovapProducts.filter((p) => p.group === "belts");

const values = [
  "Quality in products and in the commercial relationships we establish — technical support that makes our steam cleaners truly valuable and durable",
  "Continuous innovation in the steam cleaning sector, creating new technologies to meet every customer need",
  "Protection of the environment, with a cleaning method that has a reduced environmental footprint compared to traditional techniques",
  "Trust, reliability and respect in all internal and external relationships",
];

const TecnovapFooter = () => (
  <section className="border-t border-border section-alt dark:border-white/10">
    <div className="max-w-6xl mx-auto px-10 md:px-16 lg:px-20 py-16 md:py-20">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Left: About */}
        <div>
          <h2 className="font-display font-bold text-3xl md:text-4xl text-foreground mb-6">
            Meet <span className="italic text-primary">Tecnovap</span>
          </h2>
          <p className="text-muted-foreground leading-relaxed mb-6">
            Founded in 1985 in Negrar di Valpolicella (Verona) as a small family-run
            artisan business with a clear objective: to produce boilers for steam
            generators with technologies that were already cutting-edge for that time.
          </p>
          <p className="text-muted-foreground/80 text-sm leading-relaxed">
            With 40 years of experience, the company continues to proceed towards
            constant improvement of its products and affirms its firm presence not only in
            the domestic sphere, but also in the professional and industrial sectors.
            Tecnovap is a leading company in the steam cleaning sector among the
            domestic and foreign companies it works with.
          </p>
        </div>

        {/* Right: Our Values */}
        <div>
          <h3 className="font-heading font-bold text-xl text-foreground mb-6">
            Our Values
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

export default function TecnovapPage() {
  return (
    <BrandPage
      brandName="Tecnovap"
      videoSrc="https://www.tecnovap.it/wp-content/uploads/2025/06/Tecnovap-Steam-and-vacuum_1.mp4"
      heroLogo="https://res.cloudinary.com/dxbwqifwn/image/upload/v1782163335/tecnovap-logo_tra1aq.svg"
      heroTitle="Choose the Future of Cleaning"
      heroSubtitle={"World leading manufacturer of high‑quality steam cleaners"}
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
          cta={{ label: "See more", href: `/tecnovap/${p.slug}` }}
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
