"use client";

import { Link } from "@/i18n/navigation";
import Image from "next/image";
import { Mail, Phone, Linkedin } from "lucide-react";
import { useTranslations } from "next-intl";

/* ============================================================
   Tailwind class names, grouped by the element they style.
   ============================================================ */
const styles = {
  // Shell
  footer:
    "border-t border-border bg-background py-12 text-foreground dark:border-white/10 dark:text-white",
  container: "max-w-6xl mx-auto px-6 md:px-12",
  grid: "grid md:grid-cols-3 gap-8 mb-8 items-start",

  // Brand column
  logoLight: "h-24 md:h-28 w-auto dark:hidden",
  logoDark: "hidden h-24 md:h-28 w-auto dark:block",
  brandBlurb: "text-muted-foreground text-sm leading-relaxed",

  // Quick Links column
  quickLinksCol: "md:justify-self-center pt-5",
  colHeading: "text-lg font-heading font-bold mb-4",
  linkList: "space-y-2",
  navLink:
    "text-muted-foreground hover:text-primary transition-colors text-sm",

  // Contact column
  contactCol: "md:justify-self-end pt-5",
  contactList: "space-y-3",
  contactLink:
    "flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors group",
  contactIcon: "w-5 h-5 group-hover:scale-110 transition-transform",
  contactLabel: "text-sm",

  // Copyright
  copyright: "border-t border-border dark:border-white/10 pt-8 text-center space-y-2",
  copyrightText: "text-muted-foreground text-sm",
  builtBy: "text-muted-foreground/70 text-xs",
  heart: "text-red-400",
  builtByLink: "hover:text-primary transition-colors",
} as const;

const Footer = () => {
  const t = useTranslations("Footer");
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Brand */}
          <div>
            {/* Light-mode logo */}
            <Image
              src="https://res.cloudinary.com/dxbwqifwn/image/upload/v1781883598/igl-light-mode-logo_zoi10d.png"
              alt="ILG Cleaning Services"
              width={500}
              height={200}
              className={styles.logoLight}
            />
            {/* Dark-mode logo */}
            <Image
              src="https://res.cloudinary.com/dxbwqifwn/image/upload/v1781883598/igl-dark-mode-logo_ulpp0u.png"
              alt="ILG Cleaning Services"
              width={500}
              height={200}
              className={styles.logoDark}
            />
            <p className={styles.brandBlurb}>{t("brandBlurb")}</p>
          </div>

          {/* Quick Links */}
          <div className={styles.quickLinksCol}>
            <h4 className={styles.colHeading}>{t("quickLinks")}</h4>
            <ul className={styles.linkList}>
              <li>
                <Link href="/" className={styles.navLink}>
                  {t("home")}
                </Link>
              </li>
              <li>
                <Link href="/klinmak" className={styles.navLink}>
                  Klinmak
                </Link>
              </li>
              <li>
                <Link href="/tecnovap" className={styles.navLink}>
                  Tecnovap
                </Link>
              </li>
              <li>
                <Link href="/#contact" className={styles.navLink}>
                  {t("contactUs")}
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={styles.contactCol}>
            <h4 className={styles.colHeading}>{t("getInTouch")}</h4>
            <div className={styles.contactList}>
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.contactLink}
              >
                <Linkedin className={styles.contactIcon} />
                <span className={styles.contactLabel}>LinkedIn</span>
              </a>
              <a
                href="mailto:sales@ilgcleaningsolutions.com"
                className={styles.contactLink}
              >
                <Mail className={styles.contactIcon} />
                <span className={styles.contactLabel}>sales@ilgcleaningsolutions.com</span>
              </a>
              <a
                href="tel:+1234567890"
                className={styles.contactLink}
              >
                <Phone className={styles.contactIcon} />
                <span className={styles.contactLabel}>+1 (234) 567-890</span>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={styles.copyright}>
          <p className={styles.copyrightText}>
            {t("copyright", { year: new Date().getFullYear() })}
          </p>
          <p className={styles.builtBy}>
            {t("builtWith")} <span className={styles.heart}>&hearts;</span> {t("by")}{" "}
            <a
              href="https://www.altitudewebworks.com"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.builtByLink}
            >
              www.altitudewebworks.com
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
