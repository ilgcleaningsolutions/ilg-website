"use client";

import { motion } from "framer-motion";
import { Phone, Mail, MapPin } from "lucide-react";
import { useTranslations } from "next-intl";
import ContactForm from "./ContactForm";

interface ContactSectionProps {
  heading?: string;
  subtitle?: string;
  brandContext?: string;
}

/* ============================================================
   Tailwind class names, grouped by the element they style.
   ============================================================ */
const styles = {
  // Section shell + layout
  section: "py-20 bg-primary/[0.07]",
  container: "container mx-auto px-6",
  grid: "grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start",

  // Left text column
  textCol: "flex flex-col gap-6",
  heading: "font-display text-3xl md:text-4xl text-foreground leading-tight",
  subtitle: "text-muted-foreground text-lg leading-relaxed",
  brandContext: "text-muted-foreground leading-relaxed",

  // Contact rows
  contactList: "flex flex-col gap-4 mt-2",
  contactLink: "flex items-center gap-3 group",
  contactRow: "flex items-center gap-3",
  iconCircleHover:
    "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors",
  iconCircle:
    "w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center",
  icon: "text-primary",
  contactLabel: "text-sm font-semibold text-foreground",
  contactValue: "text-sm text-muted-foreground",
} as const;

const ContactSection = ({
  heading = "Get in Touch",
  subtitle = "Ready to elevate your cleaning operations?",
  brandContext,
}: ContactSectionProps) => {
  const t = useTranslations("ContactSection");
  return (
    <section id="contact" className={styles.section}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Left — Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className={styles.textCol}
          >
            <h2 className={styles.heading}>
              {heading}
            </h2>
            <p className={styles.subtitle}>
              {subtitle}
            </p>

            {brandContext && (
              <p className={styles.brandContext}>
                {brandContext}
              </p>
            )}

            <div className={styles.contactList}>
              <a
                href="mailto:sales@ilgcleaningsolutions.com"
                className={styles.contactLink}
              >
                <div className={styles.iconCircleHover}>
                  <Mail size={18} className={styles.icon} />
                </div>
                <div>
                  <p className={styles.contactLabel}>
                    {t("emailUs")}
                  </p>
                  <p className={styles.contactValue}>
                    sales@ilgcleaningsolutions.com
                  </p>
                </div>
              </a>

              <a
                href="tel:+19397497799"
                className={styles.contactLink}
              >
                <div className={styles.iconCircleHover}>
                  <Phone size={18} className={styles.icon} />
                </div>
                <div>
                  <p className={styles.contactLabel}>
                    {t("callUs")}
                  </p>
                  <p className={styles.contactValue}>
                    +1 (939) 749-7799
                  </p>
                </div>
              </a>

              <a
                href="tel:+18888915556"
                className={styles.contactLink}
              >
                <div className={styles.iconCircleHover}>
                  <Phone size={18} className={styles.icon} />
                </div>
                <div>
                  <p className={styles.contactLabel}>
                    {t("tollFree")}
                  </p>
                  <p className={styles.contactValue}>
                    1-888-891-5556
                  </p>
                </div>
              </a>

              <div className={styles.contactRow}>
                <div className={styles.iconCircle}>
                  <MapPin size={18} className={styles.icon} />
                </div>
                <div>
                  <p className={styles.contactLabel}>
                    {t("visitUs")}
                  </p>
                  <p className={styles.contactValue}>
                    {t("location")}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Form */}
          <div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
