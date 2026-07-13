"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, MessageCircle } from "lucide-react";
import LeadFunnelDialog from "@/components/LeadFunnelDialog";

/** Minimal shape the carousel needs — TecnovapProduct (and Klinmak data) both satisfy it. */
export interface CarouselProduct {
  slug: string;
  category: string;
  name: string;
  tagline: string;
  image: string;
  imageAlt?: string;
  /** Whether a detail page exists for this product — gates the "See more" CTA (default true) */
  hasDetail?: boolean;
}

interface ProductCarouselProps {
  products: CarouselProduct[];
  /** URL prefix for the "See more" link — e.g. "tecnovap" → /tecnovap/<slug> */
  brandSlug: string;
  /** Show the "See more" CTA linking to a detail page (default true). Set false when no detail pages exist. */
  showCta?: boolean;
  /** Use the cream alt section background instead of the default subtle one */
  altBg?: boolean;
  /** Auto-advance interval in ms (set 0 to disable). Stops permanently on first user interaction. */
  autoplayMs?: number;
  /** Use a shorter viewport + wider center for landscape products (e.g. belt-cleaning heads) so they fill the frame instead of being letterboxed by a tall container. */
  landscape?: boolean;
  /** On desktop, lay the products out in a static row instead of the carousel (carousel stays on mobile). Defaults to true when there are 2 or fewer products. */
  inlineOnDesktop?: boolean;
}

const slideVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 60 : -60, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -60 : 60, opacity: 0 }),
};

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (landscape/altBg ternaries, active-dot state,
   grid-column count) are exposed as function keys or composed
   inline against these base strings.
   ============================================================ */
const styles = {
  // Section shell — `sectionPad` (landscape) + altBg composed inline
  sectionBase: "relative overflow-hidden",
  sectionPad: (landscape: boolean) =>
    landscape ? "py-2 md:py-3" : "py-3 md:py-5",
  sectionBg: (altBg: boolean) => (altBg ? "section-alt" : "section-subtle"),

  // Desktop inline row
  inlineWrap: "mx-auto hidden w-full max-w-6xl px-6 lg:block",
  inlineGridBase: "grid items-end gap-8",
  inlineGridCols: (total: number) =>
    total === 2 ? "grid-cols-2" : "grid-cols-3",
  inlineItem: "flex flex-col items-center text-center",
  inlineImageBoxBase: "relative w-full",
  inlineImageBoxH: (landscape: boolean) =>
    landscape ? "h-[300px]" : "h-[460px]",
  inlineImage: "object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]",

  // Caption text — `category` (inline row, has mt-5) vs `categoryCaption`
  // (carousel caption, no mt-5); name/tagline/cta shared by both.
  category:
    "mb-2 mt-5 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-primary",
  categoryCaption:
    "mb-2 font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-primary",
  name: "font-display text-xl font-semibold text-foreground md:text-2xl",
  tagline:
    "mx-auto mt-3 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base",
  ctaRow: "mt-6 flex flex-wrap items-center justify-center gap-3",
  cta: "inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3 font-heading text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/20 transition-all hover:gap-3 hover:bg-accent",
  ctaSecondary:
    "inline-flex items-center gap-2 rounded-full border border-border px-7 py-3 font-heading text-sm font-semibold text-foreground/80 transition-all hover:gap-3 hover:border-primary/50",

  // Carousel outer wrapper — `lg:hidden` toggled inline when inlineDesktop
  carouselWrap: "lg:hidden",
  // Carousel viewport — `viewportH` (landscape) composed inline
  viewportBase: "relative mx-auto w-full max-w-7xl px-6",
  viewportH: (landscape: boolean) =>
    landscape
      ? "h-[320px] sm:h-[420px] lg:h-[520px]"
      : "h-[460px] sm:h-[600px] lg:h-[740px]",

  // Peek buttons (left/right) — position side composed inline
  peekLeft:
    "group absolute left-[3%] top-1/2 z-[1] h-[80%] w-[24%] -translate-y-1/2 cursor-pointer focus:outline-none sm:w-[22%] md:w-[22%] lg:w-[24%]",
  peekRight:
    "group absolute right-[3%] top-1/2 z-[1] h-[80%] w-[24%] -translate-y-1/2 cursor-pointer focus:outline-none sm:w-[22%] md:w-[22%] lg:w-[24%]",
  peekInner:
    "relative h-full w-full scale-90 opacity-35 grayscale blur-[1px] transition-all duration-500 group-hover:scale-95 group-hover:opacity-55 group-hover:blur-0",
  peekImage: "object-contain drop-shadow-[0_15px_30px_rgba(0,0,0,0.12)]",

  // Center (active) slide — `centerW` (landscape) composed inline
  centerBase: "absolute left-1/2 top-0 z-[2] h-full -translate-x-1/2",
  centerW: (landscape: boolean) =>
    landscape
      ? "w-[88%] sm:w-[78%] md:w-[72%] lg:w-[66%] xl:w-[62%]"
      : "w-[84%] sm:w-[72%] md:w-[64%] lg:w-[58%] xl:w-[54%]",
  centerMotion: "relative h-full w-full",
  centerImage: "object-contain drop-shadow-[0_25px_50px_rgba(0,0,0,0.18)]",

  // Arrow buttons (position strings differ per side)
  arrowLeft:
    "absolute left-[2%] top-1/2 z-[3] flex h-8 w-6 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-md transition-all hover:bg-secondary sm:h-14 sm:w-10 sm:rounded-xl sm:left-[17%] md:left-[22%] lg:left-[25%] xl:left-[27%]",
  arrowRight:
    "absolute right-[2%] top-1/2 z-[3] flex h-8 w-6 -translate-y-1/2 items-center justify-center rounded-lg border border-border bg-card text-foreground shadow-md transition-all hover:bg-secondary sm:h-14 sm:w-10 sm:rounded-xl sm:right-[17%] md:right-[22%] lg:right-[25%] xl:right-[27%]",
  arrowIcon: "h-4 w-4 sm:h-5 sm:w-5",

  // Caption block + dots
  captionBlock: "mt-2 px-6 text-center md:mt-3",
  captionMotion: "mx-auto max-w-xl",
  dotsRow: "mt-8 flex items-center justify-center gap-2",
  dot: (active: boolean) =>
    active
      ? "h-1.5 rounded-full transition-all w-10 bg-primary"
      : "h-1.5 rounded-full transition-all w-2 bg-foreground/25 hover:bg-foreground/45",
} as const;

const ProductCarousel = ({
  products,
  brandSlug,
  showCta = true,
  altBg = false,
  autoplayMs = 3000,
  landscape = false,
  inlineOnDesktop,
}: ProductCarouselProps) => {
  const t = useTranslations("ProductCarousel");
  const total = products.length;
  const hasMultiple = total > 1;
  // Few products read better as a static desktop row than a lopsided carousel.
  const inlineDesktop = inlineOnDesktop ?? total <= 2;
  // With ≤2 products there's nothing to peek/arrow toward — rely on autoplay + dots.
  const hideNav = total <= 2;
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const userInteracted = useRef(false);

  // Autoplay — advance every `autoplayMs`; stops permanently the moment the user clicks anything.
  useEffect(() => {
    if (!hasMultiple || autoplayMs <= 0) return;
    const id = window.setInterval(() => {
      if (userInteracted.current) return;
      setDirection(1);
      setCurrent((c) => (c + 1) % total);
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [hasMultiple, autoplayMs, total]);

  const goTo = (newIndex: number, dir: number) => {
    userInteracted.current = true;
    setDirection(dir);
    setCurrent(((newIndex % total) + total) % total);
  };
  const goPrev = () => goTo(current - 1, -1);
  const goNext = () => goTo(current + 1, 1);

  const currentProduct = products[current];
  const prevProduct = hasMultiple
    ? products[(current - 1 + total) % total]
    : undefined;
  const nextProduct = hasMultiple
    ? products[(current + 1) % total]
    : undefined;
  // With exactly 2 products prev === next; hide the right-side peek to avoid duplicating the same image.
  const showRightPeek = nextProduct && nextProduct.slug !== prevProduct?.slug;

  return (
    <section
      className={`${styles.sectionBase} ${styles.sectionPad(landscape)} ${styles.sectionBg(altBg)}`}
    >
      {/* ===== Desktop: static inline row (only a couple of products) ===== */}
      {inlineDesktop && (
        <div className={styles.inlineWrap}>
          <div
            className={`${styles.inlineGridBase} ${styles.inlineGridCols(total)}`}
          >
            {products.map((p) => (
              <div key={p.slug} className={styles.inlineItem}>
                <div
                  className={`${styles.inlineImageBoxBase} ${styles.inlineImageBoxH(landscape)}`}
                >
                  <Image
                    src={p.image}
                    alt={p.imageAlt ?? p.name}
                    fill
                    className={styles.inlineImage}
                    sizes="45vw"
                  />
                </div>
                <p className={styles.category}>
                  {p.category}
                </p>
                <h3 className={styles.name}>
                  {p.name}
                </h3>
                <p className={styles.tagline}>
                  {p.tagline}
                </p>
                {showCta && (p.hasDetail ?? true) && (
                  <div className={styles.ctaRow}>
                    <Link href={`/${brandSlug}/${p.slug}`} className={styles.cta}>
                      {t("seeMore")} <ArrowRight size={14} />
                    </Link>
                    <LeadFunnelDialog productName={p.name}>
                      <button type="button" className={styles.ctaSecondary}>
                        <MessageCircle size={14} /> {t("requestInfo")}
                      </button>
                    </LeadFunnelDialog>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ===== Carousel (hidden on desktop when inlineDesktop) ===== */}
      <div className={inlineDesktop ? styles.carouselWrap : ""}>
      {/* ===== Carousel viewport — bigger images, tighter section padding ===== */}
      <div
        className={`${styles.viewportBase} ${styles.viewportH(landscape)}`}
      >
        {/* Left peek (previous) */}
        {prevProduct && !hideNav && (
          <button
            type="button"
            onClick={goPrev}
            aria-label={t("previousNamed", { name: prevProduct.name })}
            className={styles.peekLeft}
          >
            <div className={styles.peekInner}>
              <Image
                src={prevProduct.image}
                alt={prevProduct.imageAlt ?? prevProduct.name}
                fill
                className={styles.peekImage}
                sizes="(max-width: 1024px) 18vw, 20vw"
              />
            </div>
          </button>
        )}

        {/* Right peek (next) */}
        {showRightPeek && (
          <button
            type="button"
            onClick={goNext}
            aria-label={t("nextNamed", { name: nextProduct!.name })}
            className={styles.peekRight}
          >
            <div className={styles.peekInner}>
              <Image
                src={nextProduct!.image}
                alt={nextProduct!.imageAlt ?? nextProduct!.name}
                fill
                className={styles.peekImage}
                sizes="(max-width: 1024px) 18vw, 20vw"
              />
            </div>
          </button>
        )}

        {/* Center (active product) — much bigger now */}
        <div
          className={`${styles.centerBase} ${styles.centerW(landscape)}`}
        >
          <AnimatePresence mode="wait" custom={direction}>
            <motion.div
              key={currentProduct.slug}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
              className={styles.centerMotion}
            >
              <Image
                src={currentProduct.image}
                alt={currentProduct.imageAlt ?? currentProduct.name}
                fill
                className={styles.centerImage}
                sizes="(max-width: 1024px) 52vw, 40vw"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Arrow buttons */}
        {hasMultiple && !hideNav && (
          <>
            <button
              type="button"
              onClick={goPrev}
              aria-label={t("previousProduct")}
              className={styles.arrowLeft}
            >
              <ChevronLeft className={styles.arrowIcon} />
            </button>
            <button
              type="button"
              onClick={goNext}
              aria-label={t("nextProduct")}
              className={styles.arrowRight}
            >
              <ChevronRight className={styles.arrowIcon} />
            </button>
          </>
        )}
      </div>

      {/* ===== Caption + CTA + Dots ===== */}
      <div className={styles.captionBlock}>
        <AnimatePresence mode="wait">
          <motion.div
            key={currentProduct.slug}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={styles.captionMotion}
          >
            <p className={styles.categoryCaption}>
              {currentProduct.category}
            </p>
            <h3 className={styles.name}>
              {currentProduct.name}
            </h3>
            <p className={styles.tagline}>
              {currentProduct.tagline}
            </p>
            {showCta && (currentProduct.hasDetail ?? true) && (
              <div className={styles.ctaRow}>
                <Link href={`/${brandSlug}/${currentProduct.slug}`} className={styles.cta}>
                  {t("seeMore")} <ArrowRight size={14} />
                </Link>
                <LeadFunnelDialog productName={currentProduct.name}>
                  <button type="button" className={styles.ctaSecondary}>
                    <MessageCircle size={14} /> {t("requestInfo")}
                  </button>
                </LeadFunnelDialog>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {hasMultiple && (
          <div className={styles.dotsRow}>
            {products.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => goTo(i, i > current ? 1 : -1)}
                aria-label={t("goTo", { name: p.name })}
                className={styles.dot(current === i)}
              />
            ))}
          </div>
        )}
      </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
