"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Send,
  User,
  Mail,
  Phone,
  MessageSquare,
  Building,
  MapPin,
  Hash,
  Briefcase,
  Layers,
} from "lucide-react";
import { toast } from "sonner";
import { useTranslations } from "next-intl";
import { submitCrmLead } from "@/lib/crm";

const INTEREST_OPTIONS = [
  "Floor Scrubber Dryers",
  "Steam Cleaning Systems",
];

const INDUSTRY_OPTIONS = [
  "Retail",
  "Cleaning company",
  "Offices & public buildings",
  "Healthcare",
  "Hospitality",
  "Food service",
  "Warehouses",
  "Manufacturing",
  "Transport",
  "Other",
];

/* ============================================================
   Tailwind class names, grouped by the element they style.
   Dynamic parts (e.g. the select's filled/placeholder text color)
   are composed inline against these base strings.
   ============================================================ */
const styles = {
  // Form shell
  form: "glass-card p-8 md:p-10 max-w-2xl mx-auto",

  // Shared field wrappers + icon
  fieldTop: "relative mb-5",
  field: "relative",
  fieldComments: "relative mb-6",
  icon: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
  iconComments: "absolute left-3 top-3.5 text-muted-foreground",

  // Grid of paired fields
  grid: "grid grid-cols-1 sm:grid-cols-2 gap-5 mb-5",

  // Inputs (base; select/textarea compose extra classes inline)
  input:
    "w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow",
  select: "appearance-none",
  selectFilled: "text-foreground",
  selectPlaceholder: "text-muted-foreground",
  textarea: "resize-none",

  // Submit button
  submit:
    "w-full inline-flex items-center justify-center gap-2 px-8 py-3 rounded-lg bg-primary text-primary-foreground font-heading font-semibold text-sm hover:bg-primary/90 transition-colors disabled:opacity-60 hover-scale",
} as const;

const ContactForm = () => {
  const t = useTranslations("ContactForm");
  const [form, setForm] = useState({
    interest: "",
    firstName: "",
    lastName: "",
    company: "",
    email: "",
    postalCode: "",
    phone: "",
    country: "United States",
    industry: "",
    comments: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const required: [string, string][] = [
      [form.interest, "interested system"],
      [form.firstName.trim(), "first name"],
      [form.lastName.trim(), "last name"],
      [form.company.trim(), "company name"],
      [form.email.trim(), "work email"],
      [form.postalCode.trim(), "postal code"],
      [form.phone.trim(), "phone"],
      [form.country.trim(), "country"],
      [form.industry, "industry"],
    ];

    if (required.some(([value]) => !value)) {
      toast.error(t("requiredError"));
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
      toast.error(t("invalidEmail"));
      return;
    }

    setIsSubmitting(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => ({}));
        throw new Error(data.error || "Request failed");
      }

      // Best-effort: also create the lead in Interlink. Never blocks or fails
      // the form on top of the email above, which stays the source of truth.
      submitCrmLead({
        contact_name: `${form.firstName.trim()} ${form.lastName.trim()}`.trim(),
        email: form.email.trim(),
        phone: form.phone.trim() || undefined,
        company: form.company.trim() || undefined,
        product_interest: form.interest || undefined,
        business_type: form.industry || undefined,
        location: [form.postalCode.trim(), form.country.trim()].filter(Boolean).join(", ") || undefined,
        comments: form.comments.trim() || undefined,
      }).catch((error) => {
        console.error("CRM lead sync failed:", error);
      });

      toast.success(t("successMessage"));
      setForm({
        interest: "",
        firstName: "",
        lastName: "",
        company: "",
        email: "",
        postalCode: "",
        phone: "",
        country: "United States",
        industry: "",
        comments: "",
      });
    } catch {
      toast.error(t("errorMessage"));
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={styles.form}
    >
      {/* Interested system */}
      <div className={styles.fieldTop}>
        <Layers size={16} className={styles.icon} />
        <select
          name="interest"
          value={form.interest}
          onChange={handleChange}
          className={`${styles.input} ${styles.select} ${
            form.interest ? styles.selectFilled : styles.selectPlaceholder
          }`}
        >
          <option value="" disabled>
            {t("interestPlaceholder")}
          </option>
          {INTEREST_OPTIONS.map((opt) => (
            <option key={opt} value={opt}>
              {opt}
            </option>
          ))}
        </select>
      </div>

      <div className={styles.grid}>
        {/* First name */}
        <div className={styles.field}>
          <User size={16} className={styles.icon} />
          <input
            type="text"
            name="firstName"
            placeholder={t("firstNamePlaceholder")}
            value={form.firstName}
            onChange={handleChange}
            maxLength={100}
            className={styles.input}
          />
        </div>

        {/* Last name */}
        <div className={styles.field}>
          <User size={16} className={styles.icon} />
          <input
            type="text"
            name="lastName"
            placeholder={t("lastNamePlaceholder")}
            value={form.lastName}
            onChange={handleChange}
            maxLength={100}
            className={styles.input}
          />
        </div>

        {/* Company */}
        <div className={styles.field}>
          <Building size={16} className={styles.icon} />
          <input
            type="text"
            name="company"
            placeholder={t("companyPlaceholder")}
            value={form.company}
            onChange={handleChange}
            maxLength={100}
            className={styles.input}
          />
        </div>

        {/* Work email */}
        <div className={styles.field}>
          <Mail size={16} className={styles.icon} />
          <input
            type="email"
            name="email"
            placeholder={t("emailPlaceholder")}
            value={form.email}
            onChange={handleChange}
            maxLength={255}
            className={styles.input}
          />
        </div>

        {/* Postal code */}
        <div className={styles.field}>
          <Hash size={16} className={styles.icon} />
          <input
            type="text"
            name="postalCode"
            placeholder={t("postalCodePlaceholder")}
            value={form.postalCode}
            onChange={handleChange}
            maxLength={20}
            className={styles.input}
          />
        </div>

        {/* Phone */}
        <div className={styles.field}>
          <Phone size={16} className={styles.icon} />
          <input
            type="tel"
            name="phone"
            placeholder={t("phonePlaceholder")}
            value={form.phone}
            onChange={handleChange}
            maxLength={20}
            className={styles.input}
          />
        </div>

        {/* Country */}
        <div className={styles.field}>
          <MapPin size={16} className={styles.icon} />
          <input
            type="text"
            name="country"
            placeholder={t("countryPlaceholder")}
            value={form.country}
            onChange={handleChange}
            maxLength={100}
            className={styles.input}
          />
        </div>

        {/* Industry */}
        <div className={styles.field}>
          <Briefcase size={16} className={styles.icon} />
          <select
            name="industry"
            value={form.industry}
            onChange={handleChange}
            className={`${styles.input} ${styles.select} ${
              form.industry ? styles.selectFilled : styles.selectPlaceholder
            }`}
          >
            <option value="" disabled>
              {t("industryPlaceholder")}
            </option>
            {INDUSTRY_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Comments */}
      <div className={styles.fieldComments}>
        <MessageSquare size={16} className={styles.iconComments} />
        <textarea
          name="comments"
          placeholder={t("commentsPlaceholder")}
          value={form.comments}
          onChange={handleChange}
          rows={4}
          maxLength={1000}
          className={`${styles.input} ${styles.textarea}`}
        />
      </div>

      <button type="submit" disabled={isSubmitting} className={styles.submit}>
        {isSubmitting ? t("sending") : t("sendMessage")} <Send size={16} />
      </button>
    </motion.form>
  );
};

export default ContactForm;
