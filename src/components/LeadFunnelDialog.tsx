"use client";

import { useState, type ReactNode } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  Briefcase,
  Check,
  CheckCircle2,
  Hash,
  Loader2,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  User,
} from "lucide-react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { submitCrmLead } from "@/lib/crm";

const INTEREST_OPTIONS = [
  "Pricing",
  "Availability",
  "Demo / Video",
  "Technical datasheet",
  "Financing options",
];

const URGENCY_OPTIONS = ["Immediate", "1–3 months", "Just exploring"];

const CONTACT_METHOD_OPTIONS: [string, string][] = [
  ["phone", "Phone call"],
  ["whatsapp", "WhatsApp"],
  ["sms", "SMS"],
  ["email", "Email"],
];

const initialForm = {
  interests: [] as string[],
  urgency: "",
  businessType: "",
  unitQuantity: "",
  location: "",
  preferredContactMethods: [] as string[],
  contactName: "",
  email: "",
  phone: "",
  comments: "",
};

const styles = {
  chip: (active: boolean) =>
    `inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-colors ${
      active
        ? "border-primary bg-primary text-primary-foreground"
        : "border-border bg-background text-foreground/80 hover:border-primary/50"
    }`,
  chipCheck: (active: boolean) =>
    `flex h-3.5 w-3.5 items-center justify-center rounded-full border transition-colors ${
      active ? "border-primary-foreground bg-primary-foreground/20" : "border-foreground/30"
    }`,
  field: "relative",
  icon: "absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground",
  input:
    "w-full pl-10 pr-4 py-3 rounded-lg bg-background border border-border text-foreground text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 transition-shadow",
  progressDot: (active: boolean) =>
    `h-1.5 flex-1 rounded-full transition-colors ${active ? "bg-primary" : "bg-border"}`,
  nav: "mt-6 flex items-center justify-between gap-3",
  navBtn:
    "inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-heading font-semibold text-foreground/80 transition-colors hover:border-primary/50",
  primaryBtn:
    "inline-flex items-center gap-1.5 rounded-full bg-primary px-6 py-2.5 text-sm font-heading font-semibold text-primary-foreground transition-colors hover:bg-accent disabled:opacity-60",
  hint: "mt-1.5 text-xs text-muted-foreground",
} as const;

const stepVariants = {
  enter: (dir: number) => ({ x: dir > 0 ? 24 : -24, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: dir > 0 ? -24 : 24, opacity: 0 }),
};

interface LeadFunnelDialogProps {
  /** Product name sent to Interlink as `product_interest`. */
  productName: string;
  /** The existing CTA element that opens the dialog — its markup/styling is untouched. */
  children: ReactNode;
}

const LeadFunnelDialog = ({ productName, children }: LeadFunnelDialogProps) => {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [direction, setDirection] = useState(1);
  const [form, setForm] = useState(initialForm);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  function goToStep(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  function resetOnClose(nextOpen: boolean) {
    setOpen(nextOpen);
    if (!nextOpen) {
      setTimeout(() => {
        setStep(1);
        setDirection(1);
        setForm(initialForm);
        setSubmitted(false);
      }, 200);
    }
  }

  function toggleInterest(value: string) {
    setForm((current) => ({
      ...current,
      interests: current.interests.includes(value)
        ? current.interests.filter((v) => v !== value)
        : [...current.interests, value],
    }));
  }

  function toggleContactMethod(value: string) {
    setForm((current) => ({
      ...current,
      preferredContactMethods: current.preferredContactMethods.includes(value)
        ? current.preferredContactMethods.filter((v) => v !== value)
        : [...current.preferredContactMethods, value],
    }));
  }

  function handleStep2Next() {
    if (form.preferredContactMethods.length === 0) {
      toast.error("Pick at least one way for us to reach you.");
      return;
    }
    goToStep(3);
  }

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    if (!form.contactName.trim()) {
      toast.error("Please enter your name.");
      return;
    }
    if (!form.email.trim() && !form.phone.trim()) {
      toast.error("Please provide an email or a phone number.");
      return;
    }

    setSubmitting(true);
    try {
      await submitCrmLead({
        contact_name: form.contactName.trim(),
        email: form.email.trim() || undefined,
        phone: form.phone.trim() || undefined,
        preferred_contact_methods: form.preferredContactMethods,
        product_interest: productName,
        interests: form.interests,
        urgency: form.urgency || undefined,
        business_type: form.businessType.trim() || undefined,
        unit_quantity: form.unitQuantity.trim() || undefined,
        location: form.location.trim() || undefined,
        comments: form.comments.trim() || undefined,
      });
      setSubmitted(true);
    } catch (error) {
      toast.error(
        error instanceof Error
          ? error.message
          : "Sorry, something went wrong. Please try again.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <Dialog open={open} onOpenChange={resetOnClose}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="max-w-lg overflow-hidden">
        {submitted ? (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="flex flex-col items-center gap-3 py-6 text-center"
          >
            <CheckCircle2 size={40} className="text-primary" />
            <DialogTitle>Thank you!</DialogTitle>
            <DialogDescription>
              We received your request about the {productName}. Our team will reach out via
              your preferred contact method shortly.
            </DialogDescription>
          </motion.div>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle>Request pricing &amp; availability</DialogTitle>
              <DialogDescription>{productName}</DialogDescription>
            </DialogHeader>

            <div className="flex gap-1.5" aria-label={`Step ${step} of 3`}>
              {[1, 2, 3].map((n) => (
                <span key={n} className={styles.progressDot(step >= n)} />
              ))}
            </div>

            <form onSubmit={handleSubmit} onKeyDown={(e) => e.key === "Enter" && step < 3 && e.preventDefault()}>
              <AnimatePresence mode="wait" custom={direction}>
                {step === 1 && (
                  <motion.div
                    key="step-1"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col gap-5"
                  >
                    <div>
                      <p className="mb-2 text-sm font-medium text-foreground">
                        What would you like to know?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {INTEREST_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            className={styles.chip(form.interests.includes(opt))}
                            onClick={() => toggleInterest(opt)}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-foreground">
                        When do you need it?
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {URGENCY_OPTIONS.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            className={styles.chip(form.urgency === opt)}
                            onClick={() => setForm((c) => ({ ...c, urgency: opt }))}
                          >
                            {opt}
                          </button>
                        ))}
                      </div>
                    </div>
                    <div className={styles.nav} style={{ justifyContent: "flex-end" }}>
                      <button type="button" className={styles.primaryBtn} onClick={() => goToStep(2)}>
                        Next <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 2 && (
                  <motion.div
                    key="step-2"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    <div className={styles.field}>
                      <Briefcase size={16} className={styles.icon} />
                      <input
                        type="text"
                        placeholder="Type of business or operation"
                        value={form.businessType}
                        onChange={(e) => setForm((c) => ({ ...c, businessType: e.target.value }))}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <Hash size={16} className={styles.icon} />
                      <input
                        type="number"
                        min="1"
                        placeholder="Number of units"
                        value={form.unitQuantity}
                        onChange={(e) => setForm((c) => ({ ...c, unitQuantity: e.target.value }))}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <MapPin size={16} className={styles.icon} />
                      <input
                        type="text"
                        placeholder="City / Country"
                        value={form.location}
                        onChange={(e) => setForm((c) => ({ ...c, location: e.target.value }))}
                        className={styles.input}
                      />
                    </div>
                    <div>
                      <p className="mb-2 text-sm font-medium text-foreground">
                        Preferred contact method — pick as many as you like
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {CONTACT_METHOD_OPTIONS.map(([value, label]) => {
                          const active = form.preferredContactMethods.includes(value);
                          return (
                            <button
                              key={value}
                              type="button"
                              aria-pressed={active}
                              className={styles.chip(active)}
                              onClick={() => toggleContactMethod(value)}
                            >
                              <span className={styles.chipCheck(active)}>
                                {active && <Check size={9} strokeWidth={3} />}
                              </span>
                              {label}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                    <div className={styles.nav}>
                      <button type="button" className={styles.navBtn} onClick={() => goToStep(1)}>
                        <ArrowLeft size={15} /> Back
                      </button>
                      <button type="button" className={styles.primaryBtn} onClick={handleStep2Next}>
                        Next <ArrowRight size={15} />
                      </button>
                    </div>
                  </motion.div>
                )}

                {step === 3 && (
                  <motion.div
                    key="step-3"
                    custom={direction}
                    variants={stepVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: 0.22, ease: "easeOut" }}
                    className="flex flex-col gap-4"
                  >
                    <div className={styles.field}>
                      <User size={16} className={styles.icon} />
                      <input
                        type="text"
                        placeholder="Your name *"
                        value={form.contactName}
                        onChange={(e) => setForm((c) => ({ ...c, contactName: e.target.value }))}
                        className={styles.input}
                        required
                      />
                    </div>
                    <div className={styles.field}>
                      <Mail size={16} className={styles.icon} />
                      <input
                        type="email"
                        placeholder="Email"
                        value={form.email}
                        onChange={(e) => setForm((c) => ({ ...c, email: e.target.value }))}
                        className={styles.input}
                      />
                    </div>
                    <div className={styles.field}>
                      <Phone size={16} className={styles.icon} />
                      <input
                        type="tel"
                        placeholder="Phone"
                        value={form.phone}
                        onChange={(e) => setForm((c) => ({ ...c, phone: e.target.value }))}
                        className={styles.input}
                      />
                    </div>
                    <p className={styles.hint}>Provide at least one — email or phone.</p>
                    <div className={styles.field}>
                      <MessageSquare size={16} className="absolute left-3 top-3.5 text-muted-foreground" />
                      <textarea
                        placeholder="Anything else we should know? (optional)"
                        value={form.comments}
                        onChange={(e) => setForm((c) => ({ ...c, comments: e.target.value }))}
                        rows={3}
                        className={`${styles.input} resize-none`}
                      />
                    </div>
                    <div className={styles.nav}>
                      <button type="button" className={styles.navBtn} onClick={() => goToStep(2)}>
                        <ArrowLeft size={15} /> Back
                      </button>
                      <button type="submit" className={styles.primaryBtn} disabled={submitting}>
                        {submitting ? (
                          <>
                            <Loader2 size={15} className="animate-spin" /> Sending...
                          </>
                        ) : (
                          "Send request"
                        )}
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
};

export default LeadFunnelDialog;
