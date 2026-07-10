"use client";

import { motion } from "framer-motion";
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
   uniform icon-card grid (one icon per feature, no empty cells). */
interface Feature {
  title: string;
  icon: LucideIcon;
  body: React.ReactNode;
}

const features: Feature[] = [
  {
    title: "Continuous improvement",
    icon: Lightbulb,
    body: (
      <>
        For us, innovating means <strong>creating new machines</strong>, different
        from all existing ones. It is a demanding job, but we do it with passion —
        and we have shown that we know how.
      </>
    ),
  },
  {
    title: "Two or four brushes",
    icon: Brush,
    body: (
      <>
        All our machines <strong>(excluding vibrating ones)</strong> have{" "}
        <strong>two or four brushes</strong> thanks to the unique KlinMak mechanism
        (patented). Cleaning is significantly better than with a single brush.
      </>
    ),
  },
  {
    title: "Lithium batteries as standard",
    icon: BatteryCharging,
    body: (
      <>
        Our floor scrubber-dryers use <strong>only lithium batteries</strong>,
        halving the weight, improving <strong>handling</strong> and speeding up{" "}
        <strong>recharging</strong>.
      </>
    ),
  },
  {
    title: "Low maintenance costs",
    icon: Wrench,
    body: (
      <>
        We use only <strong>high-quality components</strong>, reducing maintenance
        activities — resulting in both <strong>time and money</strong> savings.
      </>
    ),
  },
  {
    title: "Immediate availability",
    icon: Truck,
    body: (
      <>
        Whether you need a machine or <strong>spare parts</strong>, we deliver{" "}
        <strong>quickly</strong> — keeping your operations running without downtime.
      </>
    ),
  },
  {
    title: "Always-available technical support",
    icon: Headset,
    body: (
      <>
        Have a question or an issue? You can <strong>contact us anytime, every
        day</strong> — expert technical support is always within reach.
      </>
    ),
  },
  {
    title: "Extended warranty",
    icon: ShieldCheck,
    body: (
      <>
        Our machines in the <strong>Joker range</strong> are covered by a{" "}
        <strong>36-month warranty</strong>.
      </>
    ),
  },
  {
    title: "Minimum noise",
    icon: VolumeX,
    body: (
      <>
        Our machines are <strong>extremely quiet</strong>, perfect for environments
        where noise is a problem, such as{" "}
        <strong>hospitals, offices, supermarkets…</strong>
      </>
    ),
  },
  {
    title: "Energy saving",
    icon: Leaf,
    body: (
      <>
        Our machines use very little energy and, thanks to{" "}
        <strong>lithium batteries</strong>, you save <strong>time and money</strong>.
      </>
    ),
  },
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

const KlinmakWhyChoose = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6 }}
        className={styles.heading}
      >
        Why choose <span className={styles.headingAccent}>KlinMak</span>?
      </motion.h2>

      {/* Compact, abstract grid — big titles over a ghosted index numeral */}
      <div className={styles.grid}>
        {features.map((f, i) => {
          const Icon = f.icon;
          return (
            <motion.div
              key={f.title}
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
                {f.title}
              </h3>
              <p className={styles.cardBody}>
                {f.body}
              </p>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default KlinmakWhyChoose;
