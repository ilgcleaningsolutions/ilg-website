"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
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

const industries: { icon: LucideIcon; id: string }[] = [
  { icon: Building2, id: "offices" },
  { icon: Bus, id: "transport" },
  { icon: HeartPulse, id: "healthcare" },
  { icon: UtensilsCrossed, id: "foodService" },
  { icon: Warehouse, id: "warehouses" },
  { icon: Factory, id: "manufacturing" },
  { icon: SprayCan, id: "cleaningCompanies" },
  { icon: Hotel, id: "hospitality" },
  { icon: Store, id: "retail" },
];

/* The three non-modal cards */
const cards: { icon: LucideIcon; id: string }[] = [
  { icon: Sparkles, id: "premiumEquipment" },
  { icon: BatteryCharging, id: "warranty" },
  { icon: Package, id: "accessories" },
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
  title:
    "mb-12 text-center font-display text-3xl leading-tight text-primary md:text-4xl",
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
  const t = useTranslations("Industries");
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Section title — moved from the hero's shared-mission pill */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6 }}
          className={styles.title}
        >
          {t("title")}
        </motion.h2>
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
                  {t("modalCard.title")}
                </h3>
                <p className={styles.cardDesc}>
                  {t("modalCard.desc")}
                </p>
              </button>
            </DialogTrigger>

            <DialogContent className={styles.dialogContent}>
              <div className={styles.dialogHeader}>
                <div className={styles.dialogIconBadge}>
                  <Building2 size={26} />
                </div>
                <DialogTitle className={styles.dialogTitle}>
                  {t("modal.title")}
                </DialogTitle>
                <DialogDescription className={styles.dialogDescription}>
                  {t("modal.desc")}
                </DialogDescription>
              </div>

              <div className={styles.industryGrid}>
                {industries.map(({ icon: Icon, id }) => (
                  <div
                    key={id}
                    className={styles.industryTile}
                  >
                    <Icon size={20} className={styles.industryIcon} />
                    <span className={styles.industryLabel}>
                      {t(`industries.${id}`)}
                    </span>
                  </div>
                ))}
              </div>
            </DialogContent>
          </Dialog>

          {/* Cards 2–4 */}
          {cards.map(({ icon: Icon, id }) => (
            <div key={id} className={styles.card}>
              <div className={styles.iconBadge}>
                <Icon size={26} strokeWidth={1.75} />
              </div>
              <h3 className={styles.cardTitle}>
                {t(`cards.${id}.title`)}
              </h3>
              <p className={styles.cardDesc}>
                {t(`cards.${id}.desc`)}
              </p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default IndustriesHighlights;
