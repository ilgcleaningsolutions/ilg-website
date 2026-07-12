"use client";

import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";

const benefitKeys = [
  "benefit1",
  "benefit2",
  "benefit3",
  "benefit4",
  "benefit5",
  "benefit6",
  "benefit7",
  "benefit8",
  "benefit9",
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
  const t = useTranslations("TecnovapBeltCleaningBanner");
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
          {t("eyebrow")}
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
          {t("headlinePre")}{" "}
          <span className={styles.headlineAccent}>{t("headlineAccent")}</span>
        </motion.h2>

        {/* Lead paragraph */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className={styles.lead}
        >
          {t("lead")}
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
              {t("column1Heading")}
            </h3>
            <p className={styles.columnBody}>
              {t("column1Body1a")} <em>{t("column1Body1Em")}</em>{" "}
              {t("column1Body1b")}
            </p>
            <p className={styles.columnBody}>
              {t("column1Body2")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className={styles.columnHeading}>
              {t("column2HeadingPre")}{" "}
              <span className={styles.columnHeadingAccent}>{t("column2HeadingAccent")}</span>
            </h3>
            <p className={styles.columnBody}>
              {t("column2Body1")}
            </p>
            <p className={styles.columnBody}>
              {t("column2Body2")}
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
            {t("benefitsLabel")}
          </p>
          <ul className={styles.benefitsList}>
            {benefitKeys.map((key) => (
              <li
                key={key}
                className={styles.benefitItem}
              >
                <CheckCircle
                  size={18}
                  className={styles.benefitIcon}
                />
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default TecnovapBeltCleaningBanner;
