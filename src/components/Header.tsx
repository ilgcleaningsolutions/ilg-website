"use client";

import { useState, useEffect, useTransition } from "react";
import { useLocale, useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import { Moon, Sun, Menu, X, ChevronDown, Mail, Languages } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { klinmakProducts } from "@/lib/klinmak-products";
import { tecnovapProducts } from "@/lib/tecnovap-products";

/* Nav structure. Top-level labels/descriptions are translated at render time via
   the "Header" namespace (keyed by `key`); product model names in the dropdowns
   stay identical across locales, so they come straight from the data. */
type NavConfig = {
  key: string;
  href: string;
  /** Fixed label (brand name); when omitted the label comes from translations. */
  label?: string;
  children?: { label: string; href: string }[];
};

const navConfig: NavConfig[] = [
  { key: "home", href: "/" },
  {
    key: "klinmak",
    label: "Klinmak",
    href: "/klinmak",
    children: klinmakProducts.map((p) => ({
      label: p.name,
      href: `/klinmak/${p.slug}`,
    })),
  },
  {
    key: "tecnovap",
    label: "Tecnovap",
    href: "/tecnovap",
    children: tecnovapProducts.map((p) => ({
      label: p.name,
      href: `/tecnovap/${p.slug}`,
    })),
  },
];

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (active state, scroll state) are composed inline
   against these base strings, or expressed as function keys.
   ============================================================ */
const styles = {
  // Header shell (scroll-aware border)
  header: (scrolled: boolean) =>
    `fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-background/90 backdrop-blur-lg border-b ${
      scrolled ? "border-border shadow-sm" : "border-transparent"
    }`,
  bar: "mx-auto grid w-full max-w-[1440px] grid-cols-[auto_1fr_auto] items-center gap-4 px-4 md:grid-cols-3 md:px-6",

  // Logo
  logoLink: "flex items-center gap-3 justify-self-start",
  logoLight: "w-auto h-12 md:h-14 dark:hidden",
  logoDark: "w-auto h-12 md:h-14 hidden dark:block",

  // Desktop nav
  desktopNav: "hidden items-center justify-center gap-8 justify-self-center md:flex",
  dropdownGroup: "relative group",
  dropdownButton: (active: boolean) =>
    `relative flex items-center gap-1 font-heading text-[15px] font-medium transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200 group-hover:after:scale-x-100 ${
      active
        ? "text-primary after:scale-x-100"
        : "text-muted-foreground after:scale-x-0"
    }`,
  dropdownChevron: "group-hover:rotate-180 transition-transform duration-200",
  dropdownPanel:
    "absolute top-full left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200",
  dropdownCard:
    "bg-background/95 backdrop-blur-lg border border-border rounded-lg shadow-lg p-2 min-w-[230px]",
  dropdownBrandLink: (active: boolean) =>
    `block px-4 py-2.5 rounded-md font-heading transition-colors hover:bg-secondary ${
      active ? "text-primary" : "text-foreground"
    }`,
  dropdownBrandLabel: "text-sm font-semibold",
  dropdownBrandDesc: "block text-xs font-normal text-muted-foreground/70 mt-0.5",
  dropdownDivider: "my-1.5 h-px bg-border",
  dropdownChildLink: (active: boolean) =>
    `block px-4 py-2 rounded-md text-sm font-heading font-medium transition-colors hover:bg-secondary ${
      active ? "text-primary" : "text-muted-foreground"
    }`,
  desktopNavLink: (active: boolean) =>
    `relative font-heading text-[15px] font-medium transition-colors duration-200 hover:text-primary after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:w-full after:origin-left after:bg-primary after:transition-transform after:duration-200 hover:after:scale-x-100 ${
      active
        ? "text-primary after:scale-x-100"
        : "text-muted-foreground after:scale-x-0"
    }`,

  // Right-side cluster
  rightCluster: "flex items-center gap-3 justify-self-end",
  langToggle:
    "inline-flex items-center gap-1.5 rounded-full bg-secondary px-2.5 py-2 font-heading text-xs font-semibold text-secondary-foreground transition-colors duration-200 hover:bg-primary hover:text-primary-foreground disabled:opacity-60",
  themeToggle:
    "p-2 rounded-full bg-secondary text-secondary-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200",
  contactDesktop:
    "inline-flex items-center gap-2 rounded-full bg-primary px-3 py-2 font-heading text-sm font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-accent sm:px-4",
  contactDesktopLabel: "hidden sm:inline",
  mobileMenuToggle:
    "md:hidden p-2 rounded-full bg-secondary text-secondary-foreground",

  // Mobile nav
  mobileNav:
    "md:hidden bg-background/95 backdrop-blur-lg border-b border-border overflow-hidden",
  mobileNavInner: "container mx-auto px-6 py-4 flex flex-col gap-4",
  mobileBrand: "flex flex-col",
  mobileBrandRow: (active: boolean) =>
    `flex items-center justify-between font-heading transition-colors ${
      active ? "text-primary" : "text-foreground"
    }`,
  mobileBrandLink: "flex-1",
  mobileBrandLabel: "text-sm font-semibold",
  mobileBrandDesc: "block text-xs font-normal text-muted-foreground/60",
  mobileBrandToggle: "-mr-2 p-2",
  mobileBrandChevron: (open: boolean) =>
    `shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`,
  mobileChildWrap: "overflow-hidden",
  mobileChildList: "mt-2 flex flex-col gap-2 pl-4",
  mobileChildLink: (active: boolean) =>
    `font-heading text-sm font-medium transition-colors ${
      active ? "text-primary" : "text-muted-foreground"
    }`,
  mobileNavLink: (active: boolean) =>
    `font-heading text-sm font-medium transition-colors ${
      active ? "text-primary" : "text-muted-foreground"
    }`,
  contactMobile:
    "mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-5 py-3 font-heading text-sm font-semibold text-primary-foreground shadow-sm transition-colors duration-200 hover:bg-accent",
} as const;

const Header = () => {
  const t = useTranslations("Header");
  const locale = useLocale();
  const router = useRouter();
  const [isDark, setIsDark] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openBrand, setOpenBrand] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();

  // Labels resolved from translations; brand names fall back to the config value.
  const navLinks = navConfig.map((link) => ({
    ...link,
    label: link.label ?? t(`nav.${link.key}`),
    desc: link.key === "home" ? undefined : t(`desc.${link.key}`),
  }));

  const nextLocale = locale === "es" ? "en" : "es";
  const switchLocale = () => {
    // Re-navigate to the same page under the other locale (adds/removes "/es").
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  };

  useEffect(() => {
    // Light mode is the default; only honor an explicit user opt-in to dark.
    const stored = localStorage.getItem("ilg-theme");
    if (stored === "dark") {
      // eslint-disable-next-line react-hooks/set-state-in-effect -- SSR-safe: theme is only readable from localStorage on the client
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- close the mobile menu whenever the route changes
    setMobileOpen(false);
  }, [pathname]);

  const toggleTheme = () => {
    setIsDark((prev) => {
      const next = !prev;
      document.documentElement.classList.toggle("dark", next);
      localStorage.setItem("ilg-theme", next ? "dark" : "light");
      return next;
    });
  };

  return (
    <header className={styles.header(isScrolled)}>
      {/* 3-column grid so the center nav is truly centered regardless of how wide
          the logo or the right-side cluster (theme toggle + WhatsApp CTA) get. */}
      <div className={styles.bar}>
        <Link href="/" className={styles.logoLink}>
          {/* Light-mode logo */}
          <Image
            src="https://res.cloudinary.com/dxbwqifwn/image/upload/v1781883598/igl-light-mode-logo_zoi10d.png"
            alt="ILG Cleaning Services"
            width={160}
            height={64}
            className={styles.logoLight}
          />
          {/* Dark-mode logo */}
          <Image
            src="https://res.cloudinary.com/dxbwqifwn/image/upload/v1781883598/igl-dark-mode-logo_ulpp0u.png"
            alt="ILG Cleaning Services"
            width={160}
            height={64}
            className={styles.logoDark}
          />
        </Link>

        {/* Desktop nav — true-centered in the middle column */}
        <nav className={styles.desktopNav}>
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.label} className={styles.dropdownGroup}>
                <button
                  className={styles.dropdownButton(
                    link.children.some((c) => pathname === c.href)
                  )}
                >
                  {link.label}
                  <ChevronDown size={14} className={styles.dropdownChevron} />
                </button>
                <div className={styles.dropdownPanel}>
                  <div className={styles.dropdownCard}>
                    {/* Brand header — links to the brand page, shows the subtitle */}
                    {link.href && (
                      <Link
                        href={link.href}
                        className={styles.dropdownBrandLink(pathname === link.href)}
                      >
                        <span className={styles.dropdownBrandLabel}>{link.label}</span>
                        {link.desc && (
                          <span className={styles.dropdownBrandDesc}>
                            {link.desc}
                          </span>
                        )}
                      </Link>
                    )}
                    <div className={styles.dropdownDivider} />
                    {link.children.map((child) => (
                      <Link
                        key={child.href}
                        href={child.href}
                        className={styles.dropdownChildLink(pathname === child.href)}
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                className={styles.desktopNavLink(pathname === link.href)}
              >
                {link.label}
              </Link>
            )
          )}
        </nav>

        <div className={styles.rightCluster}>
          {/* Language switcher — swaps the whole site to the other locale */}
          <button
            onClick={switchLocale}
            disabled={isPending}
            className={styles.langToggle}
            aria-label={t("switchLanguage")}
          >
            <Languages size={16} />
            <span>{nextLocale.toUpperCase()}</span>
          </button>

          <button
            onClick={toggleTheme}
            className={styles.themeToggle}
            aria-label={t("toggleTheme")}
          >
            {isDark ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* Contact Us — scrolls to the contact form */}
          <Link
            href="/#contact"
            className={styles.contactDesktop}
            aria-label={t("contact")}
          >
            <Mail size={16} />
            <span className={styles.contactDesktopLabel}>{t("contact")}</span>
          </Link>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={styles.mobileMenuToggle}
            aria-label={t("toggleMenu")}
          >
            {mobileOpen ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {/* Mobile nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className={styles.mobileNav}
          >
            <div className={styles.mobileNavInner}>
              {navLinks.map((link) =>
                link.children ? (
                  <div key={link.label} className={styles.mobileBrand}>
                    {/* Brand row — name links to the brand page; chevron toggles the machine list */}
                    <div
                      className={styles.mobileBrandRow(
                        pathname.startsWith(link.href)
                      )}
                    >
                      <Link
                        href={link.href}
                        onClick={() => setMobileOpen(false)}
                        className={styles.mobileBrandLink}
                      >
                        <span className={styles.mobileBrandLabel}>{link.label}</span>
                        {link.desc && (
                          <span className={styles.mobileBrandDesc}>
                            {link.desc}
                          </span>
                        )}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setOpenBrand((cur) =>
                            cur === link.label ? null : link.label
                          )
                        }
                        aria-label={t("toggleProducts", { brand: link.label })}
                        className={styles.mobileBrandToggle}
                      >
                        <ChevronDown
                          size={16}
                          className={styles.mobileBrandChevron(
                            openBrand === link.label
                          )}
                        />
                      </button>
                    </div>

                    <AnimatePresence initial={false}>
                      {openBrand === link.label && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className={styles.mobileChildWrap}
                        >
                          <div className={styles.mobileChildList}>
                            {link.children.map((child) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                onClick={() => setMobileOpen(false)}
                                className={styles.mobileChildLink(
                                  pathname === child.href
                                )}
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={styles.mobileNavLink(pathname === link.href)}
                  >
                    {link.label}
                  </Link>
                )
              )}

              {/* Contact Us — full button as the last item in the mobile menu */}
              <Link
                href="/#contact"
                onClick={() => setMobileOpen(false)}
                className={styles.contactMobile}
                aria-label={t("contact")}
              >
                <Mail size={16} />
                {t("contact")}
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
