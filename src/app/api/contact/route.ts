import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

/** Where enquiries are delivered, and the verified sender address.
    FROM must be on a domain verified in Resend (ilgcleaningsolutions.com is). */
const TO = process.env.CONTACT_TO || "sales@ilgcleaningsolutions.com";
const FROM =
  process.env.RESEND_FROM || "ILG Website <noreply@ilgcleaningsolutions.com>";

const REQUIRED = [
  "interest",
  "firstName",
  "lastName",
  "company",
  "email",
  "postalCode",
  "phone",
  "country",
  "industry",
] as const;

const escapeHtml = (value: unknown) =>
  String(value ?? "").replace(
    /[<>&"]/g,
    (c) => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;" })[c] as string,
  );

export async function POST(req: Request) {
  if (!process.env.RESEND_API_KEY) {
    return NextResponse.json(
      { error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let data: Record<string, string>;
  try {
    data = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  const missing = REQUIRED.filter((key) => !String(data[key] ?? "").trim());
  if (missing.length > 0) {
    return NextResponse.json(
      { error: "Please fill in all required fields." },
      { status: 400 },
    );
  }

  const email = String(data.email).trim();
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return NextResponse.json(
      { error: "Please enter a valid email address." },
      { status: 400 },
    );
  }

  const name = `${data.firstName} ${data.lastName}`.trim();
  const rows: [string, string][] = [
    ["Interested system", data.interest],
    ["Name", name],
    ["Company", data.company],
    ["Work email", email],
    ["Phone", data.phone],
    ["Postal code", data.postalCode],
    ["Country", data.country],
    ["Industry", data.industry],
    ["Comments", data.comments?.trim() || "—"],
  ];

  const html = `
    <div style="font-family:Arial,Helvetica,sans-serif;color:#1d2c4d">
      <h2 style="margin:0 0 12px">New website enquiry</h2>
      <table cellpadding="8" style="border-collapse:collapse;font-size:14px">
        ${rows
          .map(
            ([label, value]) =>
              `<tr>
                 <td style="font-weight:600;background:#f2f5fa;border:1px solid #e2e8f0">${escapeHtml(label)}</td>
                 <td style="border:1px solid #e2e8f0">${escapeHtml(value)}</td>
               </tr>`,
          )
          .join("")}
      </table>
    </div>`;

  const text = rows.map(([label, value]) => `${label}: ${value}`).join("\n");

  try {
    const { error } = await resend.emails.send({
      from: FROM,
      to: [TO],
      replyTo: email,
      subject: `New enquiry — ${data.interest} — ${name}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Could not send your message. Please try again." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { error: "Could not send your message. Please try again." },
      { status: 500 },
    );
  }
}
