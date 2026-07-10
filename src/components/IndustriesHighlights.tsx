"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Bus,
  HeartPulse,
  UtensilsCrossed,
  Warehouse,
  Factory,
  SprayCan,
  Hotel,
  Store,
  Sparkles,
  BatteryCharging,
  Package,
  type LucideIcon,
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

const industries = [
  { icon: Building2, label: "Offices & public buildings" },
  { icon: Bus, label: "Transport" },
  { icon: HeartPulse, label: "Healthcare" },
  { icon: UtensilsCrossed, label: "Food service" },
  { icon: Warehouse, label: "Warehouses" },
  { icon: Factory, label: "Manufacturing" },
  { icon: SprayCan, label: "Cleaning companies" },
  { icon: Hotel, label: "Hospitality" },
  { icon: Store, label: "Retail" },
];

/* The three non-modal cards */
const cards: { icon: LucideIcon; title: string; desc: string }[] = [
  {
    icon: Sparkles,
    title: "Premium Equipment",
    desc: "Powered by industry-leading trusted brands.",
  },
  {
    icon: BatteryCharging,
    title: "36-Month Warranty",
    desc: "On every Klinmak lithium battery.",
  },
  {
    icon: Package,
    title: "100+ Accessories",
    desc: "Designed for all cleaning tasks.",
  },
];

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (e.g. the modal trigger's extra `cursor-pointer`)
   are composed inline against these base strings.
   ============================================================ */
const styles = {
  // Section shell
  section: "py-20 bg-primary/[0.07]",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4",

  // Shared card + icon badge (formerly cardClass / iconBadge)
  card: "flex w-full flex-col items-center rounded-2xl border border-border bg-card p-8 text-center shadow-[var(--shadow-card)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[var(--shadow-elevated)]",
  iconBadge:
    "mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary",
  cardTitle: "font-heading text-lg font-bold text-foreground",
  cardDesc: "mt-2 text-sm leading-relaxed text-muted-foreground",

  // Industries modal
  dialogContent: "max-w-xl border-border",
  dialogHeader: "flex flex-col items-center pt-2 text-center",
  dialogIconBadge:
    "mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary",
  dialogTitle: "font-display text-3xl font-normal text-foreground",
  dialogDescription: "mt-2 max-w-md",
  industryGrid: "mt-4 grid grid-cols-2 gap-2.5 sm:grid-cols-3",
  industryTile:
    "flex flex-col items-center gap-2 rounded-xl border border-border bg-secondary/50 p-4 text-center",
  industryIcon: "text-primary",
  industryLabel: "text-xs font-medium leading-tight text-foreground",
} as const;

const IndustriesHighlights = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={styles.grid}
        >
          {/* Card 1 — Industries (opens a modal with all sectors) */}
          <Dialog>
            <DialogTrigger asChild>
              <button type="button" className={`${styles.card} cursor-pointer`}>
                <div className={styles.iconBadge}>
                  <Building2 size={26} strokeWidth={1.75} />
                </div>
                <h3 className={styles.cardTitle}>
                  Industries We Serve
                </h3>
                <p className={styles.cardDesc}>
                  Trusted across 9+ demanding sectors.
                </p>
              </button>
            </DialogTrigger>

            <DialogContent className={styles.dialogContent}>
              <div className={styles.dialogHeader}>
                <div className={styles.dialogIconBadge}>
                  <Building2 size={26} />
                </div>
                <DialogTitle className={styles.dialogTitle}>
                  Industries We Serve
                </DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  From healthcare to heavy industry — trusted across the sectors that
                  demand reliable, professional-grade cleaning.
                </DialogDescription>
              </div>

              <div className={styles.industryGrid}>
                {industries.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className={styles.industryTile}
                  >
                    <Icon size={20} className={styles.industryIcon} />
                    <span className={styles.industryLabel}>
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Cards 2–4 */}
          {cards.map(({ icon: Icon, title, desc }) => (
            <div key={title} className={styles.card}>
              <div className={styles.iconBadge}>
                <Icon size={26} strokeWidth={1.75} />
              </div>
              <h3 className={styles.cardTitle}>
                {title}
              </h3>
              <p className={styles.cardDesc}>
                {desc}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHighlights;
