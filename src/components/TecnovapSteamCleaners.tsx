"use client";

import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { ArrowUpRight, Bluetooth, Smartphone } from "lucide-react";

const AFNOR_LOGO =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/v1783015784/Logo_AFNOR_Tecnovap-294x300_bgbcek.png";

/* MyTecnovap banner — flat #0094DA background, so the card behind it uses the
   same color and the letterboxing is invisible. */
const MYTECNOVAP_IMAGE =
  "https://res.cloudinary.com/dxbwqifwn/image/upload/f_auto,q_auto/v1785596265/my-tecnovap_v97baf.jpg";

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
  id: string;
  image: string;
}

/* Rendered below the cert / app / banner row — two wide cards per row on lg. */
const photoCards: PhotoCard[] = [
  {
    no: "02",
    id: "healthcare",
    image: PHOTO.healthcare,
  },
  {
    no: "03",
    id: "horeca",
    image: PHOTO.horeca,
  },
  {
    no: "04",
    id: "foodMechanical",
    image: PHOTO.industry,
  },
  {
    no: "05",
    id: "ecological",
    image: PHOTO.agriculture,
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
  certFooter: "mt-auto flex items-center justify-center pt-8",
  certSealChip: "rounded-2xl bg-white p-4 shadow-md ring-1 ring-black/5",
  certSealImage: "h-28 w-auto md:h-36",

  // MyTecnovap app card (top of the right column, light blue)
  appCard:
    "flex flex-col rounded-3xl border border-primary/15 bg-primary/[0.07] p-7 sm:col-span-2 lg:col-span-2 lg:row-span-1",
  appHeader: "mb-5 flex items-center justify-end",
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

  // MyTecnovap banner card (below the app card, brand-blue to blend with the image)
  bannerCard:
    "relative min-h-[190px] overflow-hidden rounded-3xl bg-[#0094DA] shadow-[var(--shadow-card)] sm:col-span-2 lg:col-span-2 lg:row-span-1",
  bannerImage: "object-contain p-4",

  // Application photo cards (light overlay) — all wide, two per row on lg
  photoCard:
    "group relative flex min-h-[190px] flex-col justify-between overflow-hidden rounded-3xl p-6 text-white shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-0.5 sm:col-span-2 lg:col-span-2",
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

const TecnovapSteamCleaners = () => {
  const t = useTranslations("SteamCleaners");
  return (
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
          {t("eyebrow")}
          <span className={styles.eyebrowRule} />
        </p>
        <h2 className={styles.headingTitle}>
          {t("headingLead")}{" "}
          <span className={styles.headingAccent}>{t("headingAccent")}</span>
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
              {t("cert.label")}
            </span>
            <span className={styles.certBadge}>
              {t("cert.badge")}
            </span>
          </div>

          <h3 className={styles.certTitle}>
            {t("cert.titleLead")}{" "}
            <span className={styles.certTitleAccent}>{t("cert.titleAccent")}</span> {t("cert.titleTail")}
          </h3>
          <p className={styles.certBody}>
            {t.rich("cert.body", {
              strong: (chunks) => (
                <strong className={styles.certBodyStrong}>{chunks}</strong>
              ),
            })}
          </p>

          <div className={styles.certFooter}>
            {/* AFNOR seal — white chip keeps it legible in light & dark */}
            <div className={styles.certSealChip}>
              <Image
                src={AFNOR_LOGO}
                alt={t("cert.sealAlt")}
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
            <span className={styles.appNo}>
              {t("app.no")}
            </span>
          </div>

          <h3 className={styles.appTitle}>
            MyTecnovap App
          </h3>
          <p className={styles.appBody}>
            {t("app.body")}
          </p>

          <div className={styles.appFooter}>
            <div className={styles.appChip}>
              <span className={styles.appChipIcon}>
                <Smartphone size={22} strokeWidth={1.75} />
              </span>
              <div>
                <p className={styles.appChipTitle}>
                  {t("app.chipTitle")}
                </p>
                <p className={styles.appChipMeta}>
                  <Bluetooth size={12} className={styles.appChipMetaIcon} /> {t("app.chipMeta")}
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ---- MyTecnovap banner (right column) ---- */}
        <motion.div
          {...fadeUp}
          transition={{ duration: 0.6, delay: 0.1 }}
          className={styles.bannerCard}
        >
          <Image
            src={MYTECNOVAP_IMAGE}
            alt="MyTecnovap App"
            fill
            className={styles.bannerImage}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </motion.div>

        {/* ---- Application photo cards (light overlay) ---- */}
        {photoCards.map(({ no, id, image }, i) => (
          <motion.div
            key={id}
            {...fadeUp}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.06 }}
            className={styles.photoCard}
          >
            <Image
              src={image}
              alt={t(`photoCards.${id}.title`)}
              fill
              className={styles.photoImage}
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            {/* much lighter overlay — a gentle bottom fade only */}
            <div className={styles.photoOverlay} />

            <div className={styles.photoTopRow}>
              <span className={styles.photoNo}>
                {t("photoCards.noLabel")} {no}
              </span>
              <ArrowUpRight
                size={18}
                className={styles.photoArrow}
              />
            </div>

            <div className={styles.photoTextWrap}>
              <h4 className={styles.photoTitle}>
                {t(`photoCards.${id}.title`)}
              </h4>
              <p className={styles.photoDesc}>
                {t(`photoCards.${id}.desc`)}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
  );
};

export default TecnovapSteamCleaners;
