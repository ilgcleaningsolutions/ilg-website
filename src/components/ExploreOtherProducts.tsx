"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

/** Minimal serializable shape — the full TecnovapProduct can't be passed across
 *  the server→client boundary because mainFeatures[].icon is a React component. */
export interface ExploreCard {
  slug: string;
  name: string;
  image: string;
  imageAlt?: string;
}

interface ExploreOtherProductsProps {
  products: ExploreCard[];
  /** URL prefix — e.g. "tecnovap" → /tecnovap/<slug> */
  brandSlug: string;
  /** Auto-rotate interval in ms (0 disables). Only fires when the row overflows. */
  autoplayMs?: number;
}

// Tile geometry — kept in sync with ProductTile's tailwind widths so the
// scroll-by-one-item arithmetic actually lines up with the real layout.
const ITEM_WIDTH_PX = 208; // w-52
const GAP_PX = 16; // gap-x-4

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (the arrow scroll-availability states) are
   composed inline against these base strings.
   ============================================================ */
const styles = {
  // Carousel shell
  root: "relative",
  // Arrows — base + per-direction offset; scroll-state variants composed inline
  arrowBase:
    "absolute top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-border bg-card text-foreground shadow-md transition-opacity hover:bg-secondary",
  arrowLeft: "left-0 md:left-2",
  arrowRight: "right-0 md:right-2",
  arrowEnabled: "opacity-100",
  arrowDisabled: "pointer-events-none opacity-0",
  // Scroller
  scroller:
    "-mx-6 overflow-x-auto px-6 [mask-image:linear-gradient(to_right,transparent_0%,black_5%,black_95%,transparent_100%)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden",
  strip: "mx-auto flex w-max items-start justify-center gap-x-4 py-2 md:gap-x-6",

  // Tile
  tile: "group flex w-52 shrink-0 flex-col items-center gap-4 rounded-xl border border-transparent p-4 text-center transition-colors duration-200 hover:border-border hover:bg-card",
  tileImageWrap: "relative flex h-44 w-44 shrink-0 items-center justify-center",
  tileImage: "object-contain",
  tileName:
    "font-heading text-sm font-semibold uppercase leading-tight tracking-[0.1em] text-muted-foreground transition-colors duration-200 group-hover:text-primary",
} as const;

/**
 * "Explore other products" navigation.
 *
 * A single horizontal strip of tiles. When all tiles fit in the container the
 * row is centered with no chrome. When they don't, the strip becomes scrollable
 * — prev/next arrows fade in only when there's room to scroll that way, the
 * row auto-rotates one item at a time (stopping permanently on first user
 * interaction), and the edges fade via a CSS mask so off-screen tiles dissolve
 * into the background instead of clipping.
 */
const ExploreOtherProducts = ({
  products,
  brandSlug,
  autoplayMs = 3500,
}: ExploreOtherProductsProps) => {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [overflow, setOverflow] = useState(false);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);
  const userInteracted = useRef(false);

  // Track overflow + scroll position; ResizeObserver covers responsive changes.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      const maxScroll = el.scrollWidth - el.clientWidth;
      setOverflow(maxScroll > 1);
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft < maxScroll - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(el);
    return () => {
      el.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, [products.length]);

  // Auto-rotate one item at a time. Wraps to start when it reaches the end.
  useEffect(() => {
    const el = scrollerRef.current;
    if (!el || !overflow || autoplayMs <= 0) return;
    const id = window.setInterval(() => {
      if (userInteracted.current) return;
      const maxScroll = el.scrollWidth - el.clientWidth;
      if (el.scrollLeft >= maxScroll - 4) {
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({
          left: ITEM_WIDTH_PX + GAP_PX,
          behavior: "smooth",
        });
      }
    }, autoplayMs);
    return () => window.clearInterval(id);
  }, [overflow, autoplayMs]);

  const scrollOne = (dir: 1 | -1) => {
    userInteracted.current = true;
    scrollerRef.current?.scrollBy({
      left: dir * (ITEM_WIDTH_PX + GAP_PX),
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.root}>
      {/* Arrows — only rendered when the row actually overflows */}
      {overflow && (
        <>
          <button
            type="button"
            onClick={() => scrollOne(-1)}
            aria-label="Previous products"
            className={`${styles.arrowBase} ${styles.arrowLeft} ${
              canScrollLeft ? styles.arrowEnabled : styles.arrowDisabled
            }`}
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={() => scrollOne(1)}
            aria-label="Next products"
            className={`${styles.arrowBase} ${styles.arrowRight} ${
              canScrollRight ? styles.arrowEnabled : styles.arrowDisabled
            }`}
          >
            <ChevronRight size={18} />
          </button>
        </>
      )}

      {/* Scroller. `w-max` on the strip means the row sizes to its content —
          when it fits, mx-auto centers it; when it doesn't, the parent scrolls. */}
      <div
        ref={scrollerRef}
        className={styles.scroller}
        onPointerDown={() => {
          userInteracted.current = true;
        }}
      >
        <div className={styles.strip}>
          {products.map((p) => (
            <ProductTile key={p.slug} product={p} brandSlug={brandSlug} />
          ))}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/* Tile                                                                       */
/* -------------------------------------------------------------------------- */

const ProductTile = ({
  product,
  brandSlug,
}: {
  product: ExploreCard;
  brandSlug: string;
}) => (
  <Link
    href={`/${brandSlug}/${product.slug}`}
    className={styles.tile}
  >
    <span className={styles.tileImageWrap}>
      <Image
        src={product.image}
        alt={product.imageAlt ?? ""}
        fill
        className={styles.tileImage}
        sizes="176px"
      />
    </span>
    <span className={styles.tileName}>
      {product.name}
    </span>
  </Link>
);

export default ExploreOtherProducts;
