export interface CrmLeadPayload {
  contact_name: string;
  email?: string;
  phone?: string;
  /** Visitor can check more than one — the API picks a primary and keeps the full list in notes. */
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

/** Submits the lead-funnel form to our own `/api/crm-lead` route, which relays it to Interlink server-side. */
export async function submitCrmLead(payload: CrmLeadPayload): Promise<void> {
  const res = await fetch("/api/crm-lead", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const data = await res.json().catch(() => ({}));
    throw new Error(data.error || "Request failed");
  }
}
