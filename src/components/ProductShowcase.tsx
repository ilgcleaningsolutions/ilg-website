"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, type LucideIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProductSpec {
  icon: LucideIcon;
  label: string;
  value: string;
}

export interface SpecRow {
  label: string;
  unit?: string;
  value: string;
  note?: string;
}

export interface SpecGroup {
  title: string;
  rows: SpecRow[];
}

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (e.g. `reverse`, `tightTop`, `altBg`) are composed
   inline against these base strings.
   ============================================================ */
const styles = {
  // Section shell + layout
  sectionTight: "pt-10 md:pt-14 pb-20 md:pb-28",
  sectionDefault: "py-20 md:py-28",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16",

  // Image column
  imageCol: "order-2 flex flex-col items-center",
  imageBox: "relative w-full max-w-md aspect-square lg:max-w-lg",
  image: "object-contain drop-shadow-2xl",

  // Main Features panel
  mainFeaturesPanel: "mt-8 w-full max-w-md lg:max-w-lg",
  mainFeaturesHeader: "mb-4",
  mainFeaturesHeaderRow: "flex items-center justify-between gap-3",
  mainFeaturesTitle:
    "font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-foreground",
  viewSpecsButton:
    "inline-flex shrink-0 items-center gap-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-primary transition-all hover:gap-2",
  mainFeaturesDivider:
    "mt-2 h-px w-full bg-gradient-to-r from-border via-border to-transparent",
  chipList: "flex flex-wrap gap-x-5 gap-y-3",
  chipItem: "flex items-center gap-2.5",
  chipIconWrap:
    "flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
  chipTextWrap: "leading-tight",
  chipLabel:
    "font-heading text-[9px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
  chipValue: "mt-0.5 font-heading text-xs font-semibold text-primary md:text-sm",

  // Spec dialog
  dialogContent: "max-h-[85vh] max-w-2xl overflow-y-auto border-border",
  dialogHead: "pt-2",
  dialogEyebrow:
    "font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
  dialogTitle:
    "mt-1 font-display text-2xl font-normal text-foreground md:text-3xl",
  dialogSpec: "mt-1 text-sm text-muted-foreground",
  specGroups: "mt-6 flex flex-col gap-7",
  specGroupTitle:
    "mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
  specTableWrap: "overflow-hidden rounded-xl border border-border",
  specTable: "w-full text-sm",
  specRowEven: "bg-secondary/40",
  specRowOdd: "bg-transparent",
  specCellLabel: "w-[44%] px-4 py-3 align-top text-foreground/85",
  specCellNote: "mt-0.5 text-xs text-muted-foreground",
  specCellValue:
    "w-[36%] px-4 py-3 align-top text-left font-heading font-semibold text-primary",
  specCellUnit:
    "w-[20%] py-3 pr-4 align-top text-left text-xs uppercase tracking-wider text-muted-foreground",

  // Copy column
  copyCol: "order-1",
  eyebrow:
    "mb-3 font-heading text-xs font-semibold uppercase tracking-[0.22em] text-primary",
  systemTitleRow: "flex items-center gap-4 md:gap-5",
  systemTitleRule: "h-px w-10 shrink-0 bg-foreground/25 md:w-16",
  systemTitle:
    "font-display text-3xl uppercase leading-none tracking-tight text-foreground md:text-4xl lg:text-5xl xl:text-6xl",
  systemTitleFirst: "font-bold",
  systemTitleTail: "font-light text-foreground/40",
  title: "font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl",
  spec: "mt-2 font-heading text-base font-medium text-muted-foreground md:text-lg",
  divider:
    "mt-5 h-px w-full max-w-sm bg-gradient-to-r from-border via-border to-transparent",
  tagline: "mt-6 max-w-xl text-base leading-relaxed text-foreground/85 md:text-lg",
  description:
    "mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground md:text-base",
  featureList: "mt-5 flex max-w-xl flex-col gap-2.5",
  featureItem:
    "flex items-start gap-3 text-sm leading-relaxed text-foreground/85 md:text-base",
  featureBullet: "mt-2 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-primary",
  cta: "mt-9 inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 font-heading text-sm font-semibold text-primary-foreground transition-all duration-200 hover:bg-accent",
} as const;

interface ProductShowcaseProps {
  /** Small uppercase label above the product name (e.g. "Commercial Steam Cleaner") */
  eyebrow?: string;
  /** Product name / model (e.g. "EVO 304 24/7") */
  name: string;
  /** Short spec line shown beneath the name (e.g. "2.45 kW") */
  spec?: string;
  /** Top marketing tagline / hero copy for the product */
  tagline?: string;
  /** Technical intro paragraph */
  description?: string;
  /** Optional bullet-style highlights */
  features?: string[];
  /** Product image URL */
  image: string;
  imageAlt?: string;
  /** Optional spec list rendered under the image as a "Main Features" panel */
  mainFeatures?: ProductSpec[];
  /** Full technical spec table — opens in a modal from the "View Specifications" button */
  specifications?: SpecGroup[];
  /** Optional CTA button under the copy */
  cta?: { label: string; href: string };
  /** Place the image on the right (default) or left */
  reverse?: boolean;
  /** Use the cream-tint alt section background instead of the default subtle one */
  altBg?: boolean;
  /** Render the name in the System-style: uppercase, leading hairline, first word bold + rest lighter */
  systemTitle?: boolean;
  /** Collapse top padding — use when this showcase sits directly under a banner that shares the same background. */
  tightTop?: boolean;
}

const ProductShowcase = ({
  eyebrow,
  name,
  spec,
  tagline,
  description,
  features,
  image,
  imageAlt,
  mainFeatures,
  specifications,
  cta,
  reverse = false,
  altBg = false,
  systemTitle = false,
  tightTop = false,
}: ProductShowcaseProps) => {
  // For systemTitle, split the name into first word (emphasized) + the rest (lighter).
  const [systemFirst, ...systemRest] = name.split(" ");
  const systemTail = systemRest.join(" ");
  return (
    <section
      className={`${tightTop ? styles.sectionTight : styles.sectionDefault} ${
        altBg ? "section-alt" : "section-subtle"
      }`}
    >
      <div className={styles.container}>
        <div
          className={`${styles.grid} ${
            // When tightTop is on, anchor the text to the top so it sits close to the banner above
            // instead of being vertically centered against the taller product image.
            tightTop ? "items-start" : "items-center"
          }`}
        >
          {/* Image + Main Features */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className={`${styles.imageCol} ${reverse ? "lg:order-2" : "lg:order-1"}`}
          >
            <div className={styles.imageBox}>
              <Image
                src={image}
                alt={imageAlt ?? name}
                fill
                className={styles.image}
                sizes="(max-width: 1024px) 90vw, 40vw"
              />
            </div>

            {mainFeatures && mainFeatures.length > 0 && (
              <div className={styles.mainFeaturesPanel}>
                {/* Header row — title left, View Specifications button right */}
                <div className={styles.mainFeaturesHeader}>
                  <div className={styles.mainFeaturesHeaderRow}>
                    <p className={styles.mainFeaturesTitle}>
                      Main Features
                    </p>
                    {specifications && specifications.length > 0 && (
                      <Dialog>
                        <DialogTrigger asChild>
                          <button
                            type="button"
                            className={styles.viewSpecsButton}
                          >
                            View Specifications
                            <ArrowRight size={12} />
                          </button>
                        </DialogTrigger>
                        <DialogContent className={styles.dialogContent}>
                          <div className={styles.dialogHead}>
                            <p className={styles.dialogEyebrow}>
                              {eyebrow ?? "Specifications"}
                            </p>
                            <DialogTitle className={styles.dialogTitle}>
                              {name}
                            </DialogTitle>
                            {spec && (
                              <DialogDescription className={styles.dialogSpec}>
                                {spec}
                              </DialogDescription>
                            )}
                          </div>

                          {/* Spec groups */}
                          <div className={styles.specGroups}>
                            {specifications.map((group) => (
                              <div key={group.title}>
                                <p className={styles.specGroupTitle}>
                                  {group.title}
                                </p>
                                <div className={styles.specTableWrap}>
                                  <table className={styles.specTable}>
                                    <tbody>
                                      {group.rows.map((row, i) => (
                                        <tr
                                          key={`${row.label}-${i}`}
                                          className={
                                            i % 2 === 0
                                              ? styles.specRowEven
                                              : styles.specRowOdd
                                          }
                                        >
                                          <td className={styles.specCellLabel}>
                                            <div>{row.label}</div>
                                            {row.note && (
                                              <div className={styles.specCellNote}>
                                                {row.note}
                                              </div>
                                            )}
                                          </td>
                                          <td className={styles.specCellValue}>
                                            {row.value}
                                          </td>
                                          <td className={styles.specCellUnit}>
                                            {row.unit ?? ""}
                                          </td>
                                        </tr>
                                      ))}
                                    </tbody>
                                  </table>
                                </div>
                              </div>
                            ))}
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </div>
                  <div className={styles.mainFeaturesDivider} />
                </div>

                {/* Compact wrap-flex spec chips */}
                <ul className={styles.chipList}>
                  {mainFeatures.map(({ icon: Icon, label, value }) => (
                    <li key={label} className={styles.chipItem}>
                      <span className={styles.chipIconWrap}>
                        <Icon size={15} strokeWidth={1.6} />
                      </span>
                      <div className={styles.chipTextWrap}>
                        <p className={styles.chipLabel}>
                          {label}
                        </p>
                        <p className={styles.chipValue}>
                          {value}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </motion.div>

          {/* Copy */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`${styles.copyCol} ${reverse ? "lg:order-1" : "lg:order-2"}`}
          >
            {eyebrow && (
              <p className={styles.eyebrow}>
                {eyebrow}
              </p>
            )}

            {systemTitle ? (
              <div className={styles.systemTitleRow}>
                <span
                  aria-hidden
                  className={styles.systemTitleRule}
                />
                <h2 className={styles.systemTitle}>
                  <span className={styles.systemTitleFirst}>{systemFirst}</span>
                  {systemTail && (
                    <>
                      {" "}
                      <span className={styles.systemTitleTail}>
                        {systemTail}
                      </span>
                    </>
                  )}
                </h2>
              </div>
            ) : (
              <h2 className={styles.title}>
                {name}
              </h2>
            )}

            {spec && (
              <p className={styles.spec}>
                {spec}
              </p>
            )}

            {/* Divider — fades on the right edge */}
            <div className={styles.divider} />

            {tagline && (
              <p className={styles.tagline}>
                {tagline}
              </p>
            )}

            {description && (
              <p className={styles.description}>
                {description}
              </p>
            )}

            {features && features.length > 0 && (
              <ul className={styles.featureList}>
                {features.map((f) => (
                  <li
                    key={f}
                    className={styles.featureItem}
                  >
                    <span className={styles.featureBullet} />
                    {f}
                  </li>
                ))}
              </ul>
            )}

            {cta && (
              <Link
                href={cta.href}
                className={styles.cta}
              >
                {cta.label}
                <ArrowRight size={16} />
              </Link>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductShowcase;
