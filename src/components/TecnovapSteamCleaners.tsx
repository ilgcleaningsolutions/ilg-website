"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowUpRight, Bluetooth, Smartphone } from "lucide-react";

const AFNOR_LOGO =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783015784/Logo_AFNOR_Tecnovap-294x300_bgbcek.png";

/* Free Pexels photography (images.pexels.com) */
const PHOTO = {
  healthcare:
    "https://images.pexels.com/photos/36595248/pexels-photo-36595248.jpeg?auto=compress&cs=tinysrgb&w=900",
  horeca:
    "https://images.pexels.com/photos/2387675/pexels-photo-2387675.jpeg?auto=compress&cs=tinysrgb&w=900",
  industry:
    "https://images.pexels.com/photos/5115940/pexels-photo-5115940.jpeg?auto=compress&cs=tinysrgb&w=900",
  agriculture:
    "https://images.pexels.com/photos/5393082/pexels-photo-5393082.jpeg?auto=compress&cs=tinysrgb&w=900",
};

interface PhotoCard {
  no: string;
  title: string;
  desc: string;
  image: string;
  wide?: boolean;
}

/* Rendered after the cert + app cards so the bento fills correctly:
   the two small cards sit top-right, the two wide ones span the bottom row. */
const photoCards: PhotoCard[] = [
  {
    no: "02",
    title: "Healthcare",
    desc: "Sterile environments & clinical-grade sanitation.",
    image: PHOTO.healthcare,
  },
  {
    no: "03",
    title: "Ho.Re.Ca. & Household",
    desc: "Hotels, restaurants, cafés & household luxury.",
    image: PHOTO.horeca,
  },
  {
    no: "04",
    title: "Food & Mechanical",
    desc: "Conveyor-belt integration · Heavy transport de-greasing.",
    image: PHOTO.industry,
    wide: true,
  },
  {
    no: "05",
    title: "Ecological & Outdoor",
    desc: "Car wash · Wineries · Weed killing · Pest control.",
    image: PHOTO.agriculture,
    wide: true,
  },
];

const fadeUp = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-60px" },
};

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (e.g. the `wide` photo-card flag) are composed
   inline against these base strings.
   ============================================================ */
const styles = {
  // Section shell
  section: "section-subtle py-16 md:py-24",
  container: "container mx-auto px-6",

  // Heading
  heading: "mx-auto mb-10 max-w-2xl text-center md:mb-12",
  eyebrow:
    "mb-4 flex items-center justify-center gap-3 font-heading text-[11px] font-semibold uppercase tracking-[0.3em] text-primary",
  eyebrowRule: "h-px w-8 bg-primary",
  headingTitle:
    "font-display text-2xl leading-tight text-foreground md:text-3xl lg:text-4xl",
  headingAccent: "italic text-ilg-blue-light",

  // Bento grid
  bento: "grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4",

  // Certification card (large)
  certCard:
    "flex flex-col rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-card)] sm:col-span-2 lg:col-span-2 lg:row-span-2",
  certHeader: "mb-6 flex items-center gap-3",
  certLabel:
    "font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-primary",
  certBadge:
    "rounded-full border border-border px-2.5 py-1 font-heading text-[10px] font-semibold uppercase tracking-wider text-muted-foreground",
  certTitle:
    "font-display text-2xl leading-tight text-foreground md:text-3xl lg:text-4xl",
  certTitleAccent: "text-ilg-blue-light",
  certBody:
    "mt-4 max-w-lg text-sm leading-relaxed text-muted-foreground md:text-base",
  certBodyStrong: "font-semibold text-foreground",
  certFooter: "mt-auto flex items-center justify-between gap-4 pt-8",
  certFooterLabel:
    "font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-muted-foreground",
  certFooterValue: "mt-1 font-heading text-lg font-bold text-foreground",
  certSealChip: "rounded-2xl bg-white p-3 shadow-md ring-1 ring-black/5",
  certSealImage: "h-16 w-auto md:h-20",

  // MyTecnovap app card (tall, light blue)
  appCard:
    "flex flex-col rounded-3xl border border-primary/15 bg-primary/[0.07] p-7 sm:col-span-2 lg:col-span-1 lg:row-span-2",
  appHeader: "mb-5 flex items-center justify-between",
  appLabel:
    "font-heading text-[10px] font-semibold uppercase tracking-[0.22em] text-primary",
  appNo: "font-heading text-[10px] font-semibold uppercase tracking-wider text-primary/60",
  appTitle: "font-heading text-xl font-bold text-foreground",
  appBody: "mt-2 text-sm leading-relaxed text-muted-foreground",
  appFooter: "mt-auto pt-8",
  appChip:
    "flex items-center gap-3 rounded-2xl bg-card p-4 shadow-[var(--shadow-card)]",
  appChipIcon:
    "flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary",
  appChipTitle: "font-heading text-sm font-bold text-foreground",
  appChipMeta: "flex items-center gap-1 text-xs text-muted-foreground",
  appChipMetaIcon: "text-primary",

  // Application photo cards (light overlay)
  photoCard:
    "group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5",
  photoCardWide: "sm:col-span-2 lg:col-span-2",
  photoImage: "object-cover transition-transform duration-500 group-hover:scale-105",
  photoOverlay:
    "absolute inset-0 bg-gradient-to-t from-[hsl(var(--ilg-blue-deep))]/85 from-0% via-[hsl(var(--ilg-blue-deep))]/15 via-50% to-transparent",
  photoTopRow: "relative flex items-start justify-between",
  photoNo:
    "font-heading text-[10px] font-semibold uppercase tracking-[0.2em] text-white/75 [text-shadow:_0_1px_5px_rgb(0_0_0_/_45%)]",
  photoArrow:
    "text-white/80 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5",
  photoTextWrap: "relative",
  photoTitle:
    "font-heading text-lg font-bold leading-tight [text-shadow:_0_1px_6px_rgb(0_0_0_/_55%)]",
  photoDesc:
    "mt-1 max-w-xs text-xs leading-relaxed text-white/90 [text-shadow:_0_1px_6px_rgb(0_0_0_/_55%)]",
} as const;

const TecnovapSteamCleaners = () => (
  <section className={styles.section}>
    <div className={styles.container}>
      {/* Heading */}
      <motion.div
        {...fadeUp}
        transition={{ duration: 0.6 }}
        className={styles.heading}
      >
        <p className={styles.eyebrow}>
          <span className={styles.eyebrowRule} />
          About Steam Cleaners
          <span className={styles.eyebrowRule} />
        </p>
        <h2 className={styles.headingTitle}>
          Certified disinfection,{" "}
          <span className={styles.headingAccent}>endless applications.</span>
        </h2>
      </motion.div>

      {/* Bento */}
      <div className={styles.bento}>
        {/* ---- Certification card (large) ---- */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6 }}
          className={styles.certCard}
        >
          <div className={styles.certHeader}>
            <span className={styles.certLabel}>
              Certification
            </span>
            <span className={styles.certBadge}>
              Standard NF T72-110
            </span>
          </div>

          <h3 className={styles.certTitle}>
            Certified efficiency for{" "}
            <span className={styles.certTitleAccent}>Steam Disinfection</span> Devices
          </h3>
          <p className={styles.certBody}>
            Our EVO models are classified as{" "}
            <strong className={styles.certBodyStrong}>
              S.D.D. (Steam Disinfection Devices)
            </strong>{" "}
            in accordance with the AFNOR NF T72-110 standard — validated under
            rigorous laboratory protocols to sanitise with dry steam alone.
          </p>

          <div className={styles.certFooter}>
            <div>
              <p className={styles.certFooterLabel}>
                Authorised Body
              </p>
              <p className={styles.certFooterValue}>
                AFNOR Group France
              </p>
            </div>
            {/* AFNOR seal — white chip keeps it legible in light & dark */}
            <div className={styles.certSealChip}>
              <Image
                src={AFNOR_LOGO}
                alt="AFNOR NF T72-110 certification"
                width={96}
                height={98}
                className={styles.certSealImage}
              />
            </div>
          </div>
        </motion.div>

        {/* ---- MyTecnovap app card (tall, light blue) ---- */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.05 }}
          className={styles.appCard}
        >
          <div className={styles.appHeader}>
            <span className={styles.appLabel}>
              Remote Control
            </span>
            <span className={styles.appNo}>
              No. 01
            </span>
          </div>

          <h3 className={styles.appTitle}>
            MyTecnovap App
          </h3>
          <p className={styles.appBody}>
            Full Bluetooth control — monitor boiler pressure and steam temperature
            in real time from any device.
          </p>

          <div className={styles.appFooter}>
            <div className={styles.appChip}>
              <span className={styles.appChipIcon}>
                <Smartphone size={22} strokeWidth={1.75} />
              </span>
              <div>
                <p className={styles.appChipTitle}>
                  Connected cleaning
                </p>
                <p className={styles.appChipMeta}>
                  <Bluetooth size={12} className={styles.appChipMetaIcon} /> Pairs in seconds
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---- Application photo cards (light overlay) ---- */}
        {photoCards.map(({ no, title, desc, image, wide }, i) => (
          <motion.div
            key={title}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className={`${styles.photoCard} ${wide ? styles.photoCardWide : ""}`}
          >
            <Image
              src={image}
              alt={title}
              fill
              className={styles.photoImage}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            {/* much lighter overlay — a gentle bottom fade only */}
            <div className={styles.photoOverlay} />

            <div className={styles.photoTopRow}>
              <span className={styles.photoNo}>
                No. {no}
              </span>
              <ArrowUpRight
                size={18}
                className={styles.photoArrow}
              />
            </div>

            <div className={styles.photoTextWrap}>
              <h4 className={styles.photoTitle}>
                {title}
              </h4>
              <p className={styles.photoDesc}>
                {desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TecnovapSteamCleaners;
