"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import {
  BatteryCharging,
  Brush,
  Headset,
  Leaf,
  Lightbulb,
  ShieldCheck,
  Truck,
  VolumeX,
  Wrench,
  type LucideIcon,
} from "lucide-react";

/* "Why choose KlinMak?" — the brochure feature set, rebuilt as a clean,
   uniform icon-card grid (one icon per feature, no empty cells).
   Icons/structure live here; title + body text resolve via next-intl. */
interface Feature {
  key: string;
  icon: LucideIcon;
}

const features: Feature[] = [
  { key: "continuousImprovement", icon: Lightbulb },
  { key: "twoOrFourBrushes", icon: Brush },
  { key: "lithiumBatteries", icon: BatteryCharging },
  { key: "lowMaintenance", icon: Wrench },
  { key: "immediateAvailability", icon: Truck },
  { key: "technicalSupport", icon: Headset },
  { key: "extendedWarranty", icon: ShieldCheck },
  { key: "minimumNoise", icon: VolumeX },
  { key: "energySaving", icon: Leaf },
];

/* ============================================================
   Tailwind class names, grouped by the element they style.
   ============================================================ */
const styles = {
  // Section shell
  section: "py-14 md:py-20 section-alt",
  container: "max-w-5xl mx-auto px-6 md:px-10",

  // Heading
  heading:
    "font-display italic text-2xl md:text-3xl lg:text-4xl text-foreground text-left mb-10 md:mb-14",
  headingAccent: "text-ilg-blue-light",

  // Feature grid
  grid: "grid grid-cols-1 gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-x-12 lg:gap-y-10",
  card: "group relative pt-2",
  cardIndex:
    "pointer-events-none absolute -top-3 right-0 select-none font-display text-5xl md:text-6xl font-bold leading-none text-primary/[0.07] dark:text-ilg-blue-light/[0.12]",
  cardIcon:
    "mb-3 text-primary transition-transform duration-300 group-hover:-translate-y-0.5 dark:text-ilg-blue-light",
  cardTitle:
    "font-heading text-lg md:text-xl font-bold tracking-tight leading-tight mb-1.5 text-primary dark:text-white",
  cardBody:
    "text-muted-foreground text-[0.8rem] leading-relaxed [&_strong]:font-semibold [&_strong]:text-foreground",
} as const;

const KlinmakWhyChoose = () => {
  const t = useTranslations("KlinmakWhyChoose");

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
          className={styles.heading}
        >
          {t.rich("heading", {
            accent: (chunks) => (
              <span className={styles.headingAccent}>{chunks}</span>
            ),
          })}
        </motion.h2>

        {/* Compact, abstract grid — big titles over a ghosted index numeral */}
        <div className={styles.grid}>
          {features.map((f, i) => {
            const Icon = f.icon;
            return (
              <motion.div
                key={f.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.45, delay: (i % 3) * 0.07 }}
                className={styles.card}
              >
                {/* Abstract oversized index — distinct tint per theme */}
                <span className={styles.cardIndex}>
                  {String(i + 1).padStart(2, "0")}
                </span>

                <Icon
                  size={22}
                  strokeWidth={1.75}
                  className={styles.cardIcon}
                />
                <h3 className={styles.cardTitle}>
                  {t(`${f.key}Title`)}
                </h3>
                <p className={styles.cardBody}>
                  {t.rich(`${f.key}Body`, {
                    strong: (chunks) => <strong>{chunks}</strong>,
                  })}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default KlinmakWhyChoose;
