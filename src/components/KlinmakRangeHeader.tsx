"use client";

import { motion } from "framer-motion";

interface KlinmakRangeHeaderProps {
  /** Eyebrow / product family, e.g. "Walk-behind floor scrubbers" */
  category: string;
  /** Range name, e.g. "Joker range" */
  title: string;
  /** Left-column paragraph(s) */
  left: string[];
  /** Right-column paragraph(s) */
  right: string[];
  /** Use the cream alt background instead of white (default white) */
  altBg?: boolean;
}

/* ============================================================
   Tailwind class names, grouped by the element they style.
   The section background (alt/subtle) is chosen at runtime from
   the `altBg` prop and composed inline against `section`.
   ============================================================ */
const styles = {
  // Section shell — bg composed inline via altBg
  section: "py-10 md:py-12",
  sectionAlt: "section-alt",
  sectionSubtle: "section-subtle",
  container: "mx-auto max-w-5xl px-6",

  // Centered headline
  headlineWrap: "text-center",
  category:
    "mb-3 font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-primary",
  title: "font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl",
  titleAccent: "italic text-ilg-blue-light",

  // Two-column body
  bodyGrid: "mt-10 grid gap-8 text-left md:grid-cols-2 md:gap-14",
  column: "space-y-4",
  paragraph: "text-muted-foreground text-sm leading-relaxed md:text-base",
} as const;

const KlinmakRangeHeader = ({
  category,
  title,
  left,
  right,
  altBg = false,
}: KlinmakRangeHeaderProps) => {
  return (
    <section className={`${altBg ? styles.sectionAlt : styles.sectionSubtle} ${styles.section}`}>
      <div className={styles.container}>
        {/* Centered headline */}
        <div className={styles.headlineWrap}>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6 }}
            className={styles.category}
          >
            {category}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.05 }}
            className={styles.title}
          >
            <span className={styles.titleAccent}>{title}</span>
          </motion.h2>
        </div>

        {/* Two-column body */}
        <div className={styles.bodyGrid}>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={styles.column}
          >
            {left.map((para, i) => (
              <p
                key={i}
                className={styles.paragraph}
              >
                {para}
              </p>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.18 }}
            className={styles.column}
          >
            {right.map((para, i) => (
              <p
                key={i}
                className={styles.paragraph}
              >
                {para}
              </p>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default KlinmakRangeHeader;
