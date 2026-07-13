"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

/* ============================================================
   Tailwind class names, grouped by the element they style.
   ============================================================ */
const styles = {
  // Section shell
  section: "relative overflow-hidden pt-16 md:pt-20 pb-14 md:pb-20 section-subtle",
  container: "container mx-auto px-6 text-center",

  // Eyebrow
  eyebrow:
    "mb-4 flex items-center justify-center gap-3 font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-primary",
  eyebrowRule: "h-px w-8 bg-primary",

  // Headline
  headline: "mx-auto max-w-3xl font-display text-2xl leading-tight text-foreground md:text-3xl lg:text-4xl",
  headlineAccent: "italic text-ilg-blue-light",
} as const;

const KlinmakProductsBanner = () => {
  const t = useTranslations("KlinmakProductsBanner");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
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
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, delay: 0.05 }}
          className={styles.headline}
        >
          {t.rich("headline", {
            accent: (chunks) => (
              <span className={styles.headlineAccent}>{chunks}</span>
            ),
          })}
        </motion.h2>
      </div>
    </section>
  );
};

export default KlinmakProductsBanner;
