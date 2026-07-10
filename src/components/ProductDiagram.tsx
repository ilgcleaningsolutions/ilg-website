"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import type { ProductPart } from "@/lib/tecnovap-products";

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (the active/inactive state) are composed inline
   against these base strings.
   ============================================================ */
const styles = {
  // Image canvas + image
  canvas: "relative mx-auto w-full max-w-2xl",
  image: "object-contain",

  // Hotspot button + dot
  hotspot:
    "absolute z-10 flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center focus:outline-none",
  hotspotHalo:
    "absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-400 opacity-70",
  hotspotDot:
    "relative inline-flex h-3.5 w-3.5 rounded-full bg-yellow-400 shadow-[0_0_0_3px_rgba(250,204,21,0.25),0_2px_8px_rgba(0,0,0,0.25)] ring-2 ring-white transition-transform",
  hotspotDotActive: "scale-125",
  hotspotDotInactive: "scale-100",

  // Debug overlay
  debugReadout:
    "pointer-events-none absolute left-2 top-2 z-30 rounded-md bg-foreground/90 px-2 py-1 font-mono text-[10px] text-background shadow",
  debugLast: "ml-2 font-semibold",
  debugMarker:
    "pointer-events-none absolute z-30 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-fuchsia-500 bg-fuchsia-500/40",

  // Tooltip
  tooltipWrap: "pointer-events-none absolute z-20",
  tooltip:
    "relative max-w-[220px] rounded-lg bg-foreground/95 px-3 py-2 text-center text-xs text-background shadow-lg backdrop-blur-sm",
  tooltipLabel: "font-heading font-semibold",
  tooltipDesc: "mt-0.5 text-[10px] opacity-80",
  tooltipArrow:
    "absolute left-1/2 top-full h-2 w-2 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-foreground/95",

  // Legend
  legend: "mx-auto mt-8 flex max-w-2xl flex-wrap justify-center gap-2",
  legendButton:
    "inline-flex items-center gap-2 rounded-full border px-3 py-1.5 font-heading text-xs font-medium transition-all",
  legendButtonActive: "border-yellow-400/70 bg-yellow-400/10 text-foreground",
  legendButtonInactive:
    "border-border bg-card text-muted-foreground hover:border-yellow-400/50 hover:text-foreground",
  legendDot: "inline-block h-2 w-2 rounded-full transition-colors",
  legendDotActive: "bg-yellow-400",
  legendDotInactive: "bg-foreground/30",
} as const;

interface ProductDiagramProps {
  image: string;
  alt?: string;
  parts: ProductPart[];
  /** Intrinsic image width — used to derive the container aspect so hotspots align. */
  imageWidth?: number;
  imageHeight?: number;
  className?: string;
}

const ProductDiagram = ({
  image,
  alt,
  parts,
  imageWidth,
  imageHeight,
  className,
}: ProductDiagramProps) => {
  const [active, setActive] = useState<number | null>(null);
  // Debug mode is opt-in via `?debug=hotspots` on the URL. When on, clicking
  // anywhere on the image logs and clipboards the percentage coordinates so the
  // exact part positions can be captured without guessing.
  const [debug, setDebug] = useState(false);
  const [lastClick, setLastClick] = useState<{ x: number; y: number } | null>(
    null,
  );

  useEffect(() => {
    if (typeof window === "undefined") return;
    const params = new URLSearchParams(window.location.search);
    // eslint-disable-next-line react-hooks/set-state-in-effect -- one-time read of the ?debug flag from the URL on mount
    setDebug(params.get("debug") === "hotspots");
  }, []);

  // Use the real image aspect ratio so percentage-based hotspots aren't thrown off
  // by letterboxing inside an arbitrary square container.
  const aspectStyle =
    imageWidth && imageHeight
      ? { aspectRatio: `${imageWidth} / ${imageHeight}` }
      : undefined;

  const handleDebugClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!debug) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = +(((e.clientX - rect.left) / rect.width) * 100).toFixed(1);
    const y = +(((e.clientY - rect.top) / rect.height) * 100).toFixed(1);
    setLastClick({ x, y });
    const snippet = `{ x: ${x}, y: ${y}, label: "" },`;
    console.log("[ProductDiagram]", snippet);
    navigator.clipboard?.writeText(snippet).catch(() => {});
  };

  return (
    <div className={className}>
      {/* Image canvas with absolute-positioned hotspots */}
      <div
        className={styles.canvas}
        style={aspectStyle ?? { aspectRatio: "1 / 1" }}
        onClick={handleDebugClick}
      >
        <Image
          src={image}
          alt={alt ?? ""}
          fill
          className={styles.image}
          sizes="(max-width: 1024px) 90vw, 50vw"
          priority
        />

        {parts.map((part, i) => {
          const isActive = active === i;
          return (
            <button
              key={`${part.label}-${i}`}
              type="button"
              onMouseEnter={() => setActive(i)}
              onMouseLeave={() => setActive(null)}
              onFocus={() => setActive(i)}
              onBlur={() => setActive(null)}
              onClick={() => setActive(isActive ? null : i)}
              aria-label={part.label}
              className={styles.hotspot}
              style={{ left: `${part.x}%`, top: `${part.y}%` }}
            >
              {/* Pulsing halo */}
              <span
                aria-hidden
                className={styles.hotspotHalo}
              />
              {/* Solid dot */}
              <span
                aria-hidden
                className={`${styles.hotspotDot} ${
                  isActive ? styles.hotspotDotActive : styles.hotspotDotInactive
                }`}
              />
            </button>
          );
        })}

        {/* Debug mode overlay — coordinates readout + last clicked point */}
        {debug && (
          <>
            <div className={styles.debugReadout}>
              debug: click anywhere → coords logged & copied
              {lastClick && (
                <span className={styles.debugLast}>
                  last: {lastClick.x}, {lastClick.y}
                </span>
              )}
            </div>
            {lastClick && (
              <span
                aria-hidden
                className={styles.debugMarker}
                style={{ left: `${lastClick.x}%`, top: `${lastClick.y}%` }}
              />
            )}
          </>
        )}

        {/* Tooltip — the OUTER div owns the positioning transform (centered above
            the dot). The INNER motion.div handles entrance/exit animation only,
            so Framer's transform doesn't clobber our placement math. */}
        <AnimatePresence>
          {active !== null && (
            <div
              key={`tip-${active}`}
              className={styles.tooltipWrap}
              style={{
                left: `${parts[active].x}%`,
                top: `${parts[active].y}%`,
                transform: "translate(-50%, calc(-100% - 14px))",
              }}
            >
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.96 }}
                transition={{ duration: 0.15, ease: "easeOut" }}
                className={styles.tooltip}
              >
                <p className={styles.tooltipLabel}>
                  {parts[active].label}
                </p>
                {parts[active].description && (
                  <p className={styles.tooltipDesc}>
                    {parts[active].description}
                  </p>
                )}
                {/* Tip arrow at the bottom-center, pointing down at the dot */}
                <span
                  aria-hidden
                  className={styles.tooltipArrow}
                />
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>

      {/* Parts legend — tap-friendly on mobile, hover-sync on desktop */}
      <ul className={styles.legend}>
        {parts.map((part, i) => {
          const isActive = active === i;
          return (
            <li key={`legend-${i}`}>
              <button
                type="button"
                onMouseEnter={() => setActive(i)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(isActive ? null : i)}
                className={`${styles.legendButton} ${
                  isActive
                    ? styles.legendButtonActive
                    : styles.legendButtonInactive
                }`}
              >
                <span
                  className={`${styles.legendDot} ${
                    isActive ? styles.legendDotActive : styles.legendDotInactive
                  }`}
                />
                {part.label}
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ProductDiagram;
