"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import { CheckCircle, ArrowRight } from "lucide-react";
import Image from "next/image";
import Layout from "@/components/Layout";

interface BrandPageProps {
  brandName: string;
  /** Intro tagline — section is skipped if omitted */
  tagline?: string;
  /** Intro description (paired with tagline) */
  description?: string;
  videoUrl?: string;
  videoSrc?: string;
  /** Optional hero overlay — logo + headline + sub-headline rendered over the video */
  heroLogo?: string;
  heroTitle?: string;
  heroSubtitle?: string;
  /** "tagline" = short uppercase, letter-spaced line (default); "paragraph" = readable sentence-case lede */
  heroSubtitleVariant?: "tagline" | "paragraph";
  /** Vertical placement of the hero overlay content (default "center") */
  heroAlign?: "center" | "bottom";
  /** Smaller logo/title/subtitle sizing for the hero overlay (default false) */
  heroCompact?: boolean;
  /** "Why Choose …" grid — section is skipped if omitted/empty */
  features?: { title: string; description: string }[];
  /** "… Products" grid — section is skipped if omitted/empty */
  productCategories?: { name: string; description: string }[];
  /** Custom sections rendered between the brand sections and the contact CTA (e.g. ProductShowcase blocks) */
  children?: React.ReactNode;
  brandFooter?: React.ReactNode;
}

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.6 },
};

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (heroCompact / heroAlign variants) are composed
   inline against these base strings.
   ============================================================ */
const styles = {
  // Video hero shell
  heroSection: "relative h-screen min-h-[640px] overflow-hidden bg-black",
  heroVideo:
    "absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2 object-cover",
  heroIframe:
    "absolute top-1/2 left-1/2 w-[177.77vh] min-w-full h-[56.25vw] min-h-full -translate-x-1/2 -translate-y-1/2",

  // Hero overlay
  heroScrim:
    "absolute inset-0 bg-gradient-to-b from-black/75 via-black/40 to-black/60",
  heroOverlay: "absolute inset-0 flex flex-col items-center px-6 text-center",
  heroOverlayAlignBottom: "justify-end pb-16 md:pb-24",
  heroOverlayAlignCenter: "justify-center pt-20",
  heroContent: "flex flex-col items-center",
  heroLogoCompact: "mb-6 h-12 w-auto drop-shadow-2xl sm:h-14 md:h-16 lg:h-20",
  heroLogoDefault: "mb-8 h-16 w-auto drop-shadow-2xl sm:h-20 md:h-24 lg:h-28",
  heroTitle:
    "font-display leading-tight text-white [text-shadow:_0_2px_18px_rgb(0_0_0_/_60%)]",
  heroTitleCompact: "text-2xl sm:text-3xl md:text-4xl lg:text-5xl",
  heroTitleDefault:
    "text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.5rem]",
  heroSubtitleParagraph:
    "max-w-2xl font-heading font-normal leading-relaxed text-white/90 [text-shadow:_0_1px_12px_rgb(0_0_0_/_60%)]",
  heroSubtitleParagraphCompact: "mt-5 text-sm sm:text-base md:text-lg",
  heroSubtitleParagraphDefault: "mt-6 text-base sm:text-lg md:text-xl",
  heroSubtitleTagline:
    "mt-5 max-w-2xl font-heading text-base font-semibold uppercase tracking-[0.18em] text-white/90 [text-shadow:_0_1px_12px_rgb(0_0_0_/_60%)] sm:text-lg md:text-xl lg:text-2xl",

  // Intro
  introSection: "py-20 section-subtle",
  introContainer: "container mx-auto px-6 text-center max-w-3xl",
  introTagline: "font-display text-3xl md:text-5xl text-foreground mb-4",
  introDescription: "text-muted-foreground text-lg leading-relaxed",

  // Features grid
  featuresSection: "py-20 section-alt",
  sectionContainer: "container mx-auto px-6",
  sectionHeading:
    "font-display text-2xl md:text-4xl text-foreground text-center mb-4",
  sectionSubtext: "text-muted-foreground text-center max-w-xl mx-auto mb-12",
  featuresGrid: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6",
  featureCard: "glass-card p-6 hover-scale",
  featureCardInner: "flex items-start gap-3",
  featureIcon: "text-primary mt-0.5 shrink-0",
  featureTitle: "font-heading font-semibold text-foreground mb-1",
  featureDescription: "text-muted-foreground text-sm",

  // Products grid
  productsSection: "py-20 section-subtle",
  productsGrid: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8",
  productCard: "group glass-card overflow-hidden",
  productImageBox: "aspect-[4/3] bg-muted flex items-center justify-center",
  productImageLabel: "text-muted-foreground text-sm font-heading",
  productBody: "p-6",
  productName: "font-heading font-semibold text-foreground text-lg mb-2",
  productDescription: "text-muted-foreground text-sm mb-4",
  productLink:
    "inline-flex items-center gap-1 text-primary text-sm font-semibold group-hover:gap-2 transition-all",
} as const;

const BrandPage = ({
  brandName,
  tagline,
  description,
  videoUrl,
  videoSrc,
  heroLogo,
  heroTitle,
  heroSubtitle,
  heroSubtitleVariant = "tagline",
  heroAlign = "center",
  heroCompact = false,
  features,
  productCategories,
  children,
  brandFooter,
}: BrandPageProps) => {
  const t = useTranslations("BrandPage");
  const hasHeroOverlay = Boolean(heroLogo || heroTitle || heroSubtitle);

  return (
    <Layout>
      {/* Video Hero */}
      <section className={styles.heroSection}>
        {videoSrc ? (
          <video
            src={videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className={styles.heroVideo}
          />
        ) : videoUrl ? (
          <iframe
            src={videoUrl}
            title={t("videoTitle", { brand: brandName })}
            className={styles.heroIframe}
            style={{ border: "none" }}
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen
          />
        ) : null}

        {/* Optional overlay: dark scrim + logo + title + subtitle */}
        {hasHeroOverlay && (
          <>
            <div className={styles.heroScrim} />
            <div
              className={`${styles.heroOverlay} ${
                heroAlign === "bottom"
                  ? styles.heroOverlayAlignBottom
                  : styles.heroOverlayAlignCenter
              }`}
            >
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className={styles.heroContent}
              >
                {heroLogo && (
                  <Image
                    src={heroLogo}
                    alt={brandName}
                    width={520}
                    height={200}
                    priority
                    className={
                      heroCompact
                        ? styles.heroLogoCompact
                        : styles.heroLogoDefault
                    }
                  />
                )}
                {heroTitle && (
                  <h1
                    className={`${styles.heroTitle} ${
                      heroCompact
                        ? styles.heroTitleCompact
                        : styles.heroTitleDefault
                    }`}
                  >
                    {heroTitle}
                  </h1>
                )}
                {heroSubtitle && (
                  heroSubtitleVariant === "paragraph" ? (
                    <p
                      className={`${styles.heroSubtitleParagraph} ${
                        heroCompact
                          ? styles.heroSubtitleParagraphCompact
                          : styles.heroSubtitleParagraphDefault
                      }`}
                    >
                      {heroSubtitle}
                    </p>
                  ) : (
                    <h3 className={styles.heroSubtitleTagline}>
                      {heroSubtitle}
                    </h3>
                  )
                )}
              </motion.div>
            </div>
          </>
        )}
      </section>

      {/* Intro */}
      {(tagline || description) && (
        <section className={styles.introSection}>
          <div className={styles.introContainer}>
            {tagline && (
              <motion.h1
                {...fadeInUp}
                className={styles.introTagline}
              >
                {tagline}
              </motion.h1>
            )}
            {description && (
              <motion.p
                {...fadeInUp}
                transition={{ ...fadeInUp.transition, delay: 0.2 }}
                className={styles.introDescription}
              >
                {description}
              </motion.p>
            )}
          </div>
        </section>
      )}

      {/* Custom sections (e.g. product showcase scroll) */}
      {children}

      {/* Features Grid */}
      {features && features.length > 0 && (
      <section className={styles.featuresSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            {...fadeInUp}
            className={styles.sectionHeading}
          >
            {t("whyChoose", { brand: brandName })}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className={styles.sectionSubtext}
          >
            {t("whyChooseSubtitle", { brand: brandName })}
          </motion.p>

          <div className={styles.featuresGrid}>
            {features!.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={styles.featureCard}
              >
                <div className={styles.featureCardInner}>
                  <CheckCircle
                    className={styles.featureIcon}
                    size={20}
                  />
                  <div>
                    <h3 className={styles.featureTitle}>
                      {feature.title}
                    </h3>
                    <p className={styles.featureDescription}>
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {/* Products */}
      {productCategories && productCategories.length > 0 && (
      <section className={styles.productsSection}>
        <div className={styles.sectionContainer}>
          <motion.h2
            {...fadeInUp}
            className={styles.sectionHeading}
          >
            {t("productsHeading", { brand: brandName })}
          </motion.h2>
          <motion.p
            {...fadeInUp}
            transition={{ ...fadeInUp.transition, delay: 0.1 }}
            className={styles.sectionSubtext}
          >
            {t("productsSubtitle")}
          </motion.p>

          <div className={styles.productsGrid}>
            {productCategories!.map((cat, i) => (
              <motion.div
                key={cat.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className={styles.productCard}
              >
                {/* Placeholder image */}
                <div className={styles.productImageBox}>
                  <span className={styles.productImageLabel}>
                    {t("productImage")}
                  </span>
                </div>
                <div className={styles.productBody}>
                  <h3 className={styles.productName}>
                    {cat.name}
                  </h3>
                  <p className={styles.productDescription}>
                    {cat.description}
                  </p>
                  <span className={styles.productLink}>
                    {t("learnMore")} <ArrowRight size={14} />
                  </span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
      )}

      {brandFooter}
    </Layout>
  );
};

export default BrandPage;
