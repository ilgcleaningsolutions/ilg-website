import { Droplets, Flame, Gauge, Thermometer } from "lucide-react";

/**
 * Intro / educational block that explains *why* dry-vapor steam cleaning matters,
 * placed between the Tecnovap hero and the Products section.
 *
 * Content is from the original Tecnovap brand copy ("Discover the benefits..."
 * and "How well do dry vapor steam cleaners work?"). The four headline numbers
 * — 360°F boiler, 290°F output, 145 PSI, ~5% moisture — are surfaced as a
 * stat row so the page has something tangible to anchor on before product cards.
 */

const stats = [
  {
    icon: Flame,
    value: "360°F",
    label: "Boiler temperature",
  },
  {
    icon: Thermometer,
    value: "290°F",
    label: "Output temperature",
  },
  {
    icon: Gauge,
    value: "145 PSI",
    label: "Adjustable pressure",
  },
  {
    icon: Droplets,
    value: "~5%",
    label: "Moisture content",
  },
];

/* Tailwind class names, grouped by the element they style. */
const styles = {
  section: "section-subtle border-t border-border py-20 md:py-28",
  container: "container mx-auto px-6",

  // Headline
  headlineWrap: "mx-auto max-w-3xl text-center",
  eyebrow:
    "mb-4 font-heading text-[11px] font-semibold uppercase tracking-[0.22em] text-primary",
  headline:
    "font-display text-3xl leading-tight text-foreground md:text-4xl lg:text-5xl",
  headlineAccent: "italic text-primary",
  headlineRule: "mx-auto mt-8 h-px w-16 bg-foreground/20",

  // Two-column explainer
  explainerGrid:
    "mx-auto mt-12 grid max-w-5xl gap-10 md:mt-16 md:grid-cols-2 md:gap-14",
  explainerHeading:
    "mb-4 font-heading text-lg font-semibold text-foreground md:text-xl",
  explainerBody: "text-base leading-relaxed text-foreground/80",
  explainerEm: "not-italic font-medium text-foreground",
  explainerStat: "font-semibold text-foreground",

  // Stats row
  statsGrid:
    "mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-x-6 gap-y-10 md:mt-20 md:grid-cols-4 md:gap-x-8",
  statItem: "flex items-center gap-4 md:flex-col md:items-start md:gap-3",
  statIcon:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary",
  statText: "leading-tight",
  statValue: "font-display text-2xl font-semibold text-foreground md:text-3xl",
  statLabel:
    "mt-1 font-heading text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground",
} as const;

const TecnovapBenefits = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      {/* Headline */}
      <div className={styles.headlineWrap}>
        <p className={styles.eyebrow}>
          Dry Vapor Steam Technology
        </p>
        <h2 className={styles.headline}>
          Discover the benefits of using{" "}
          <span className={styles.headlineAccent}>Tecnovap steam generators</span>{" "}
          for your application
        </h2>
        <div className={styles.headlineRule} />
      </div>

      {/* Two-column explainer */}
      <div className={styles.explainerGrid}>
        <div>
          <h3 className={styles.explainerHeading}>
            The most advanced deep-cleaning technology
          </h3>
          <p className={styles.explainerBody}>
            Dry steam cleaners use superheated steam with an incredibly low
            moisture content to blast dirt, grease, soils and debris from
            surfaces — leaving them virtually dry and free of residual moisture,
            without harsh chemicals. The same heat also removes bacteria,
            allergens and mold on contact. Ideal for chemical-free{" "}
            <em className={styles.explainerEm}>
              dry cleaning
            </em>{" "}
            in bakeries, snack production plants and manufacturing facilities
            where degreasing and surface sanitation are essential.
          </p>
        </div>

        <div>
          <h3 className={styles.explainerHeading}>
            How well do dry vapor steam cleaners work?
          </h3>
          <p className={styles.explainerBody}>
            Dry vapor steam cleaners deliver all the cleaning and sanitizing
            power of wet steam, but with only ~5% moisture content. They kill
            germs on contact and blast debris from any surface in their path —
            heating tap water in the boiler to{" "}
            <span className={styles.explainerStat}>360°F</span> and
            producing dry vapor steam at an adjustable pressure of up to{" "}
            <span className={styles.explainerStat}>145 PSI</span> and
            an output temperature of{" "}
            <span className={styles.explainerStat}>290°F</span>.
          </p>
        </div>
      </div>

      {/* Headline stats row — bare, no card; just icons + numbers breathing on the section bg */}
      <div className={styles.statsGrid}>
        {stats.map(({ icon: Icon, value, label }) => (
          <div
            key={label}
            className={styles.statItem}
          >
            <span className={styles.statIcon}>
              <Icon size={18} strokeWidth={1.6} />
            </span>
            <div className={styles.statText}>
              <p className={styles.statValue}>
                {value}
              </p>
              <p className={styles.statLabel}>
                {label}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default TecnovapBenefits;
