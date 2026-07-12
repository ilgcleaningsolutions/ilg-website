import { NextResponse } from "next/server";

/** Server-side only — never exposed to the browser (no NEXT_PUBLIC_ prefix). */
const INTERLINK_API_URL =
  process.env.INTERLINK_API_URL || "https://crm.ilgcleaningsolutions.com/api/v1";

const CONTACT_METHODS = ["phone", "whatsapp", "sms", "email"] as const;
const CONTACT_METHOD_LABELS: Record<string, string> = {
  phone: "Phone call",
  whatsapp: "WhatsApp",
  sms: "SMS",
  email: "Email",
};

interface LeadFunnelPayload {
  contact_name: string;
  email?: string;
  phone?: string;
  /** Visitor can select more than one — Interlink's schema stores a single primary method, so the
   *  first valid selection goes there and the full list is kept in `notes` for the sales rep. */
  preferred_contact_methods?: string[];
  company?: string;
  product_interest?: string;
  interests?: string[];
  urgency?: string;
  business_type?: string;
  unit_quantity?: string;
  location?: string;
  comments?: string;
}

/** Folds the funnel's answers that don't have a dedicated Lead column into the free-text `notes` field. */
function buildNotes(payload: LeadFunnelPayload, contactMethods: string[]): string | undefined {
  const lines: string[] = [];
  if (payload.company?.trim()) lines.push(`Company: ${payload.company.trim()}`);
  if (contactMethods.length > 1) {
    lines.push(`Preferred contact methods: ${contactMethods.map((m) => CONTACT_METHOD_LABELS[m] ?? m).join(", ")}`);
  }
  if (payload.interests?.length) lines.push(`Interested in: ${payload.interests.join(", ")}`);
  if (payload.urgency) lines.push(`Timeline: ${payload.urgency}`);
  if (payload.business_type?.trim()) lines.push(`Business type: ${payload.business_type.trim()}`);
  if (payload.unit_quantity?.trim()) lines.push(`Units needed: ${payload.unit_quantity.trim()}`);
  if (payload.location?.trim()) lines.push(`Location: ${payload.location.trim()}`);
  if (payload.comments?.trim()) lines.push("", "Additional comments:", payload.comments.trim());
  return lines.length ? lines.join("\n") : undefined;
}

export async function POST(req: Request) {
  let payload: LeadFunnelPayload;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const contactName = String(payload.contact_name ?? "").trim();
  const email = String(payload.email ?? "").trim();
  const phone = String(payload.phone ?? "").trim();
  const contactMethods = (payload.preferred_contact_methods ?? []).filter((m) =>
    CONTACT_METHODS.includes(m as (typeof CONTACT_METHODS)[number]),
  );

  if (!contactName) {
    return NextResponse.json({ error: "Please enter your name." }, { status: 400 });
  }
  if (!email && !phone) {
    return NextResponse.json(
      { error: "Please provide an email or a phone number." },
      { status: 400 },
    );
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json({ error: "Please enter a valid email address." }, { status: 400 });
  }

  try {
    const res = await fetch(`${INTERLINK_API_URL}/public/leads`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        contact_name: contactName,
        email: email || undefined,
        phone: phone || undefined,
        preferred_contact_method: contactMethods[0] || undefined,
        product_interest: payload.product_interest || undefined,
        notes: buildNotes(payload, contactMethods),
        source: "ILG Website",
      }),
    });

    if (!res.ok) {
      console.error("Interlink /public/leads error:", res.status, await res.text());
      return NextResponse.json(
        { error: "Could not submit your request. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("crm-lead route error:", err);
    return NextResponse.json(
      { error: "Could not submit your request. Please try again." },
      { status: 500 },
    );
  }
}
