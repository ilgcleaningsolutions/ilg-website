"use client";

import { motion } from "framer-motion";
import { ArrowRight, type LucideIcon } from "lucide-react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/navigation";

/* Klinmak: light/colored logo for the bright white overlay in light mode,
   white logo for the dark overlay in dark mode. */
const KLINMAK_LOGO_LIGHT =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1779976723/klinmak-logo_riuks0.png";
const KLINMAK_LOGO_DARK =
  "https://res.cloudinary.com/dcclo03c2/image/upload/v1768498735/imakus/klinmak-logo-dark-mode.png";
/* Tecnovap: brand-blue text for the bright light overlay, white text for the dark overlay. */
const TECNOVAP_LOGO_LIGHT =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1782163335/tecnovap-logo-light_nudb37.svg";
const TECNOVAP_LOGO_DARK =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1782163335/tecnovap-logo_tra1aq.svg";

/* Ready-made center-badge stickers (light / dark) */
const STICKER_LIGHT =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783184927/sticker-light_rjlkyp.svg";
const STICKER_DARK =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783185185/sticker-dark_lealtb.svg";

// Product-range lineups; e_trim drops transparent padding so both bottom-align.
// Tecnovap also gets its floor-reflection band cropped off (bottom ~24%) so the
// machines reach the image bottom like Klinmak's do.
const TECNOVAP_IMAGE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/e_trim/c_crop,g_north,w_1.0,h_0.76/f_auto,q_auto/v1783030275/Equipos_Tencovap_vvimra.png";
const KLINMAK_IMAGE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/e_trim,f_auto,q_auto/v1783030272/Equipos_Klinmak_ndu1yj.png";

/* Custom white SVG icons for the feature bands */
const IC_CHEMFREE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181708/Recurso_35_cypjtl.svg";
const IC_SANITIZE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181706/Recurso_32_oe2icc.svg";
const IC_SUSTAINABLE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181707/Recurso_34_i7afz5.svg";
const IC_247 =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181707/Recurso_33_o4fzgc.svg";
const IC_SILENT =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181706/Recurso_29_botvai.svg";
const IC_FLOORCARE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181706/Recurso_31_gddpfg.svg";
const IC_WARRANTY =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181706/Recurso_28_paflsf.svg";
const IC_RELIABLE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783181706/Recurso_30_nisytr.svg";

/* Bottom feature band content, per brand */
type Feature = { labelKey: string; icon?: LucideIcon; img?: string };

const TECNOVAP_FEATURES: Feature[] = [
  { img: IC_CHEMFREE, labelKey: "featureChemFree" },
  { img: IC_SANITIZE, labelKey: "featureSanitize" },
  { img: IC_SUSTAINABLE, labelKey: "featureSustainable" },
  { img: IC_247, labelKey: "featurePerformance247" },
];
const KLINMAK_FEATURES: Feature[] = [
  { img: IC_SILENT, labelKey: "featureSilent" },
  { img: IC_FLOORCARE, labelKey: "featureFloorCare" },
  { img: IC_WARRANTY, labelKey: "featureWarranty" },
  { img: IC_RELIABLE, labelKey: "featureReliable" },
];

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (e.g. an incoming `className` prop) are composed
   inline against these base strings.
   ============================================================ */
const styles = {
  // Section shell
  section: "relative w-full overflow-hidden lg:h-screen lg:min-h-[760px]",
  content: "relative z-10 flex flex-col lg:h-full",
  texture: "pointer-events-none absolute inset-0 z-[15] h-full w-full",

  // Headline band
  headlineBand: "container mx-auto px-6 pt-24 lg:pt-24",
  eyebrowStrip:
    "mb-3 flex flex-wrap items-center justify-between gap-3 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground sm:text-[11px]",
  eyebrowLeft: "flex items-center gap-3",
  eyebrowRule: "h-px w-8 bg-primary",
  eyebrowRight: "hidden md:inline",
  headlineGrid:
    "grid grid-cols-1 items-end gap-3 lg:grid-cols-[1.45fr_0.55fr] lg:gap-10",
  headline:
    "font-display text-3xl leading-[1.1] text-foreground md:text-4xl lg:text-4xl xl:text-5xl",
  headlineAccent: "italic text-ilg-blue-light",
  headlineSubtitle:
    "max-w-md text-sm leading-relaxed text-muted-foreground md:text-base lg:max-w-xs lg:justify-self-end lg:text-right",

  // Brand logos (above each product lineup)
  logoLight: "h-8 w-auto sm:h-10 dark:hidden",
  logoDark: "hidden h-8 w-auto sm:h-10 dark:block",
  /* lg:pt-14 lines the logo centers up with the center seal (150px sticker
     anchored at top-0 → center ≈ 75px; logo h-10 → 56px + 20px ≈ 76px). */
  columnLogo:
    "flex justify-center pb-2 pt-4 opacity-0 animate-fade-in-up lg:pt-14",

  // Product stage + center badge
  stage: "relative lg:min-h-0 lg:flex-1",
  centerBadge:
    "pointer-events-none absolute left-1/2 top-0 z-20 hidden -translate-x-1/2 items-center opacity-0 animate-fade-in lg:flex",
  connectorLeft:
    "mr-4 h-[2px] w-32 bg-gradient-to-l from-ilg-blue-light to-transparent xl:w-56",
  connectorRight:
    "ml-4 h-[2px] w-32 bg-gradient-to-r from-ilg-blue-light to-transparent xl:w-56",
  centerStickerLight: "shrink-0 drop-shadow-xl dark:hidden",
  centerStickerDark: "hidden shrink-0 drop-shadow-xl dark:block",

  // Brand columns
  columns: "grid grid-cols-1 lg:h-full lg:grid-cols-2",
  columnTecnovap: "hero-grad-tecnovap flex flex-col lg:h-full",
  columnKlinmak: "hero-grad-klinmak flex flex-col lg:h-full",
  productArea:
    "mt-2 flex flex-1 flex-col items-center px-6 lg:relative lg:mt-0 lg:min-h-0",
  /* Both boxes hug their image via aspect-ratio. Klinmak's image has a wider
     ratio (1390/710 vs 1853/823), so its box gets 87% width — both lineups
     then render at the same height. lg:mt-auto bottom-anchors the products,
     leaving the logo pinned at the top beside the center seal. */
  productImageBoxTecnovap:
    "relative aspect-[1853/823] w-full max-w-xl opacity-0 animate-fade-in-up lg:mt-auto lg:min-h-0 lg:max-h-full lg:max-w-none",
  productImageBoxKlinmak:
    "relative aspect-[1390/710] w-[87%] max-w-[31.3rem] opacity-0 animate-fade-in-up lg:mt-auto lg:min-h-0 lg:max-h-full lg:max-w-none",
  productImage: "object-contain object-bottom",
  ctaTecnovap:
    "mt-4 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-primary bg-background/50 px-4 py-1.5 font-heading text-xs font-semibold text-primary shadow-sm backdrop-blur-sm transition-all hover:gap-2 hover:bg-primary hover:text-primary-foreground lg:mb-3 lg:mt-3",
  ctaKlinmak:
    "mt-4 inline-flex items-center gap-1.5 whitespace-nowrap rounded-full border-2 border-klinmak bg-background/50 px-4 py-1.5 font-heading text-xs font-semibold text-klinmak shadow-sm backdrop-blur-sm transition-all hover:gap-2 hover:bg-klinmak hover:text-klinmak-foreground lg:mb-3 lg:mt-3",

  // Feature bands
  footerTecnovap:
    "hero-band-tecnovap relative mt-2 px-4 py-4 opacity-0 animate-fade-in-up lg:flex lg:h-[88px] lg:items-center lg:px-10 lg:py-0",
  footerKlinmak:
    "hero-band-klinmak relative mt-2 px-4 py-4 opacity-0 animate-fade-in-up lg:flex lg:h-[88px] lg:items-center lg:px-10 lg:py-0",
  footerGrid:
    "mx-auto grid w-full max-w-xl grid-cols-2 gap-x-3 gap-y-3 lg:max-w-none lg:grid-cols-4 lg:gap-3",
  featureItem: "flex items-center gap-2 text-white",
  featureIconShadow:
    "h-[19px] w-[19px] shrink-0 [filter:drop-shadow(0_2px_3px_rgba(0,0,0,0.9))_drop-shadow(0_4px_10px_rgba(0,0,0,0.7))] lg:h-9 lg:w-9",
  featureIconLucide:
    "h-[19px] w-[19px] shrink-0 text-white [filter:drop-shadow(0_2px_3px_rgba(0,0,0,0.9))_drop-shadow(0_4px_10px_rgba(0,0,0,0.7))] lg:h-9 lg:w-9",
  featureLabel:
    "font-heading text-[9px] font-semibold uppercase leading-tight tracking-tight lg:text-[11px] lg:tracking-wide",

  // Tagline strip
  tagline:
    "bg-[hsl(var(--ilg-blue-deep))] px-6 py-4 text-center opacity-0 animate-fade-in-up",
  taglineText: "font-display text-lg text-white/90 md:text-xl",
  taglineAccent: "italic text-[hsl(205_90%_68%)]",
} as const;

/* ============================================================
   HeroTexture — faint concentric swooshes layered over the
   gradients (light arcs bottom-left, subtle blue arcs top-right).
   ============================================================ */
const HeroTexture = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 1440 900"
    preserveAspectRatio="xMidYMid slice"
    fill="none"
    aria-hidden="true"
  >
    <defs>
      {/* soft edges so the bands fade rather than reading as hard lines */}
      <filter id="hero-soft" x="-30%" y="-30%" width="160%" height="160%">
        <feGaussianBlur stdDeviation="13" />
      </filter>
      {/* blue (left) → teal (right) across the full width */}
      <linearGradient
        id="hero-band-grad"
        gradientUnits="userSpaceOnUse"
        x1="0"
        y1="0"
        x2="1440"
        y2="0"
      >
        <stop offset="0%" stopColor="hsl(var(--ilg-blue-light))" />
        <stop offset="50%" stopColor="hsl(var(--ilg-blue-light))" />
        <stop offset="100%" stopColor="hsl(var(--klinmak))" />
      </linearGradient>
    </defs>
    {/* One set of big, soft U-shapes spanning the full width — nested concentric
        circles centred above the top so their lower arcs dip in the middle and
        rise to both sides. Blue on the left half, teal on the right. */}
    <g
      filter="url(#hero-soft)"
      fill="none"
      stroke="url(#hero-band-grad)"
      strokeOpacity="0.1"
      strokeWidth="72"
      strokeLinecap="round"
    >
      <circle cx="720" cy="-260" r="760" />
      <circle cx="720" cy="-260" r="850" />
      <circle cx="720" cy="-260" r="940" />
      <circle cx="720" cy="-260" r="1030" />
      <circle cx="720" cy="-260" r="1120" />
    </g>
  </svg>
);

/* Renders a single feature (custom SVG icon or lucide fallback) + label. */
const FeatureItem = ({ icon: Icon, img, labelKey }: Feature) => {
  const t = useTranslations("Hero");
  return (
    <div className={styles.featureItem}>
      {img ? (
        <Image
          src={img}
          alt=""
          width={28}
          height={28}
          className={styles.featureIconShadow}
        />
      ) : Icon ? (
        <Icon size={18} strokeWidth={1.5} className={styles.featureIconLucide} />
      ) : null}
      <span className={styles.featureLabel}>{t(labelKey)}</span>
    </div>
  );
};

const HeroSection = () => {
  const t = useTranslations("Hero");
  return (
    <section className={styles.section}>
      {/* ============================================================
          CONTENT — each brand column carries its own gradient so the
          blue/teal boundary lines up exactly with the sections. The
          swoosh texture is a single overlay on top (below), so its
          arcs stay continuous across the whole hero.
          ============================================================ */}
      <div className={styles.content}>
        {/* ---------- Top: editorial headline band ---------- */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className={styles.headlineBand}
        >
          {/* Eyebrow strip */}
          <div className={styles.eyebrowStrip}>
            <span className={styles.eyebrowLeft}>
              <span className={styles.eyebrowRule} />
              {t("eyebrowLeft")}
            </span>
            <span className={styles.eyebrowRight}>{t("eyebrowRight")}</span>
          </div>

          {/* Headline + subtitle */}
          <div className={styles.headlineGrid}>
            <h1 className={styles.headline}>
              {t("titleLead")}
              <br />
              {t("titleLine2")}
              <br />
              <span className={styles.headlineAccent}>{t("titleEmphasis")}</span>
            </h1>
            <p className={styles.headlineSubtitle}>{t("subtitle")}</p>
          </div>
        </motion.div>

        {/* ---------- Product stage ---------- */}
        {/* Each brand is a self-contained column (products → CTA → feature footer),
           so on mobile they stack and every side keeps its own footer. On desktop
           the two columns sit side-by-side and the footers align along the bottom. */}
        <div className={styles.stage}>
          {/* Center badge + straight blue connectors — desktop only (one circle on mobile) */}
          <div style={{ animationDelay: "0.45s" }} className={styles.centerBadge}>
            <span className={styles.connectorLeft} />
            {/* ready-made stickers — light / dark (CircularSeal kept in file for now) */}
            <Image
              src={STICKER_LIGHT}
              alt={t("stickerAlt")}
              width={150}
              height={150}
              className={styles.centerStickerLight}
            />
            <Image
              src={STICKER_DARK}
              alt={t("stickerAlt")}
              width={150}
              height={150}
              className={styles.centerStickerDark}
            />
            <span className={styles.connectorRight} />
          </div>

          <div className={styles.columns}>
            {/* Tecnovap column */}
            <div className={styles.columnTecnovap}>
              <div className={styles.productArea}>
                {/* Tecnovap logo — right above the product lineup */}
                <div
                  style={{ animationDelay: "0.15s" }}
                  className={styles.columnLogo}
                >
                  <Image
                    src={TECNOVAP_LOGO_LIGHT}
                    alt="Tecnovap"
                    width={200}
                    height={72}
                    className={styles.logoLight}
                  />
                  <Image
                    src={TECNOVAP_LOGO_DARK}
                    alt="Tecnovap"
                    width={200}
                    height={72}
                    className={styles.logoDark}
                  />
                </div>
                <div
                  style={{ animationDelay: "0.3s" }}
                  className={styles.productImageBoxTecnovap}
                >
                  <Image
                    src={TECNOVAP_IMAGE}
                    alt={t("tecnovapProductAlt")}
                    fill
                    priority
                    className={styles.productImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* CTA — sits in the gap below the products */}
                <Link href="/tecnovap" className={styles.ctaTecnovap}>
                  {t("exploreTecnovap")} <ArrowRight size={13} />
                </Link>
              </div>
              {/* Tecnovap footer */}
              <div
                style={{ animationDelay: "0.5s" }}
                className={styles.footerTecnovap}
              >
                <div className={styles.footerGrid}>
                  {TECNOVAP_FEATURES.map((feature) => (
                    <FeatureItem key={feature.labelKey} {...feature} />
                  ))}
                </div>
              </div>
            </div>

            {/* Klinmak column */}
            <div className={styles.columnKlinmak}>
              <div className={styles.productArea}>
                {/* Klinmak logo — right above the product lineup */}
                <div
                  style={{ animationDelay: "0.15s" }}
                  className={styles.columnLogo}
                >
                  <Image
                    src={KLINMAK_LOGO_LIGHT}
                    alt="Klinmak"
                    width={220}
                    height={72}
                    className={styles.logoLight}
                  />
                  <Image
                    src={KLINMAK_LOGO_DARK}
                    alt="Klinmak"
                    width={220}
                    height={72}
                    className={styles.logoDark}
                  />
                </div>
                <div
                  style={{ animationDelay: "0.3s" }}
                  className={styles.productImageBoxKlinmak}
                >
                  <Image
                    src={KLINMAK_IMAGE}
                    alt={t("klinmakProductAlt")}
                    fill
                    priority
                    className={styles.productImage}
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                </div>
                {/* CTA — sits in the gap below the products */}
                <Link href="/klinmak" className={styles.ctaKlinmak}>
                  {t("exploreKlinmak")} <ArrowRight size={13} />
                </Link>
              </div>
              {/* Klinmak footer */}
              <div
                style={{ animationDelay: "0.55s" }}
                className={styles.footerKlinmak}
              >
                <div className={styles.footerGrid}>
                  {KLINMAK_FEATURES.map((feature) => (
                    <FeatureItem key={feature.labelKey} {...feature} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ---------- Tagline strip ---------- */}
        <div style={{ animationDelay: "0.65s" }} className={styles.tagline}>
          <p className={styles.taglineText}>
            {t("taglineLead")}{" "}
            <span className={styles.taglineAccent}>{t("taglineAccent")}</span>
          </p>
        </div>
      </div>

      {/* Swoosh texture — single overlay on top so the arcs stay continuous
          across the whole hero (faint, so it reads as a background detail) */}
      <HeroTexture className={styles.texture} />
    </section>
  );
};

export default HeroSection;
