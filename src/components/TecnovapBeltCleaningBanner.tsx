"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const benefits = [
  "Designed for cleaning flat conveyor-belt systems",
  "Dry steam with vacuum extraction for quick cleaning and sanitation",
  'Low-moisture "dry" solution',
  "Leaves belts dry and ready for sanitation",
  "Removes allergens, mold, glaze, oil overspray, bacteria, fats, grime, and soils",
  "Removes adhesives, oils, and paper residues",
  "Reduces belt-cleaning labor costs",
  "Improves production-line flexibility and changeover times",
  "Helps meet stringent quality and FSMA requirements",
];

/* Tailwind class names, grouped by the element they style. */
const styles = {
  section: "relative overflow-hidden py-20 md:py-28 section-subtle",

  // Ambient blobs
  blobLeft:
    "pointer-events-none absolute -left-32 top-10 h-80 w-80 rounded-full bg-primary/8 blur-3xl",
  blobRight:
    "pointer-events-none absolute -right-32 bottom-20 h-80 w-80 rounded-full bg-primary/8 blur-3xl",

  container: "container relative mx-auto px-6",

  // Eyebrow
  eyebrow:
    "mb-5 flex items-center justify-center gap-3 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-primary",
  eyebrowRule: "h-px w-8 bg-primary",

  // Headline + lead
  headline:
    "mx-auto max-w-4xl text-center font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl",
  headlineAccent: "italic text-primary",
  lead:
    "mx-auto mt-6 max-w-3xl text-center text-base leading-relaxed text-muted-foreground md:text-lg",

  // Divider
  divider:
    "mx-auto mt-10 h-px w-40 bg-gradient-to-r from-transparent via-primary to-transparent",

  // Two info columns
  columnsGrid: "mx-auto mt-14 grid max-w-5xl gap-12 lg:grid-cols-2 lg:gap-16",
  columnHeading:
    "font-display text-2xl leading-tight text-foreground md:text-3xl",
  columnHeadingAccent: "italic text-primary",
  columnBody: "mt-4 leading-relaxed text-muted-foreground",

  // Benefits grid
  benefitsWrap: "mx-auto mt-16 max-w-5xl",
  benefitsLabel:
    "mb-6 text-center font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
  benefitsList: "grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3",
  benefitItem:
    "flex items-start gap-3 text-sm leading-relaxed text-foreground/85",
  benefitIcon: "mt-0.5 shrink-0 text-primary",
} as const;

const TecnovapBeltCleaningBanner = () => {
  return (
    <section className={styles.section}>
      {/* Ambient blobs */}
      <div
        aria-hidden
        className={styles.blobLeft}
      />
      <div
        aria-hidden
        className={styles.blobRight}
      />

      <div className={styles.container}>
        {/* Eyebrow */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={styles.eyebrow}
        >
          <span className={styles.eyebrowRule} />
          Belt Cleaning Systems
          <span className={styles.eyebrowRule} />
        </motion.p>

        {/* Headline */}
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className={styles.headline}
        >
          Clean flat conveyor belts with{" "}
          <span className={styles.headlineAccent}>dry-steam precision.</span>
        </motion.h2>

        {/* Lead paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={styles.lead}
        >
          Save labor and time with ILG&nbsp;Cleaning&nbsp;Solutions conveyor-belt
          cleaning systems — designed for bakery, snacks, confectionery,
          pharmaceutical, and any other industrial conveying line that demands
          the highest level of cleaning and hygiene.
        </motion.p>

        {/* Divider */}
        <div className={styles.divider} />

        {/* Two info columns */}
        <div className={styles.columnsGrid}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h3 className={styles.columnHeading}>
              How it works
            </h3>
            <p className={styles.columnBody}>
              The system uses the power of <em>dry</em> steam to quickly remove
              allergens, mold, glaze, oil overspray, bacteria, fats, grime, and
              soils. A connected vacuum system extracts the emulsified soils,
              leaving the belt clean and dry.
            </p>
            <p className={styles.columnBody}>
              Dry-steam belt cleaning saves labor, decreases sanitation time,
              and increases productivity with faster changeovers.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.columnHeading}>
              Built around{" "}
              <span className={styles.columnHeadingAccent}>your line</span>
            </h3>
            <p className={styles.columnBody}>
              Each conveyor-belt cleaning system can be customized to meet your
              exact requirements — ideal for large or small manufacturers
              running multiple product lines.
            </p>
            <p className={styles.columnBody}>
              State-of-the-art solutions, deployed worldwide to keep flat
              conveyor belts hygienic, compliant, and ready for the next run.
            </p>
          </motion.div>
        </div>

        {/* Benefits grid */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, delay: 0.25 }}
          className={styles.benefitsWrap}
        >
          <p className={styles.benefitsLabel}>
            Key Benefits
          </p>
          <ul className={styles.benefitsList}>
            {benefits.map((b) => (
              <li
                key={b}
                className={styles.benefitItem}
              >
                <CheckCircle
                  size={18}
                  className={styles.benefitIcon}
                />
                <span>{b}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TecnovapBeltCleaningBanner;
