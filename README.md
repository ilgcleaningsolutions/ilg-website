# ILG Cleaning Services

Website for **ILG Cleaning Services**, the exclusive distributor of two
professional cleaning brands:

- **Klinmak** — Italian floor scrubber-dryers (Joker & Mini ranges)
- **Tecnovap** — industrial steam-cleaning systems

Built as a fast, statically-generated marketing site with a working contact form.

---

## Tech stack

| | |
|---|---|
| Framework | [Next.js 16](https://nextjs.org) (App Router, Turbopack) |
| Language | TypeScript, React 19 |
| Styling | Tailwind CSS + HSL design tokens (`src/app/globals.css`) |
| UI primitives | [shadcn/ui](https://ui.shadcn.com) (Radix) — `src/components/ui/*` |
| Animation | framer-motion |
| Icons | lucide-react |
| Email | [Resend](https://resend.com) (contact form → `sales@ilgcleaningsolutions.com`) |
| Images | Cloudinary + Pexels (remote), served via `next/image` |
| Toasts | sonner |

---

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Configure environment
cp .env.example .env
#   → add your RESEND_API_KEY (see below)

# 3. Run the dev server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

### Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start the dev server (Turbopack) |
| `npm run build` | Production build |
| `npm run start` | Serve the production build |
| `npm run lint` | Run ESLint |

---

## Environment variables

Only one variable is required; the rest have sensible defaults in code. See
[`.env.example`](./.env.example).

| Variable | Required | Default | Purpose |
|---|---|---|---|
| `RESEND_API_KEY` | ✅ | — | Resend API key — powers the contact form |
| `NEXT_PUBLIC_SITE_URL` | — | `https://www.ilgcleaning.com` | Base URL for Open Graph / canonical metadata |

> **Contact form deliverability:** Resend only sends from a **verified domain**.
> `ilgcleaningsolutions.com` is verified, so the default `RESEND_FROM` works. If you
> change the domain, verify it at <https://resend.com/domains> and update `RESEND_FROM`.

---

## Project structure

```
src/
├─ app/
│  ├─ page.tsx                 # Home (hero + highlights + steam-cleaners + contact)
│  ├─ klinmak/                 # /klinmak brand page + /klinmak/[slug] product pages
│  ├─ tecnovap/                # /tecnovap brand page + /tecnovap/[slug] product pages
│  ├─ api/contact/route.ts     # Contact-form handler (Resend)
│  ├─ layout.tsx               # Root layout + metadata
│  └─ globals.css              # Design tokens (:root / .dark) + component classes
├─ components/                 # App components (see styling convention below)
│  └─ ui/                      # shadcn/ui primitives in use (dialog, sonner)
└─ lib/
   ├─ klinmak-products.ts      # Klinmak product catalog + detail content
   └─ tecnovap-products.ts     # Tecnovap product catalog + detail content
```

Product pages are statically generated from the catalogs in `src/lib` via
`generateStaticParams`. Adding or removing a product there automatically updates the
carousels, the header nav dropdowns, the "explore other products" lists, and the
generated routes.

---

## Conventions

### className styling pattern
Every app component (everything in `src/components/` except `ui/`) keeps its
Tailwind classes in a module-scope `styles` object and references them from the
markup — no inline literal class strings:

```tsx
const styles = {
  section: "relative w-full overflow-hidden",
  title: "font-display text-3xl text-foreground",
  // dynamic parts are function keys or composed inline:
  navLink: (active: boolean) => (active ? "text-primary" : "text-muted-foreground"),
} as const;

// ...
<section className={styles.section}>
  <h1 className={styles.title}>…</h1>
  <a className={styles.navLink(isActive)}>…</a>
</section>
```

`src/components/HeroSection.tsx` is the reference implementation.

### Design tokens & theming
Colors, gradients and shadows are HSL CSS custom properties defined in
`globals.css` under `:root` (light) and `.dark`. Light mode is the default; dark
mode is an explicit user toggle in the header. Prefer editing tokens over
hardcoding colors.

### Images
Remote image hosts (Cloudinary, Pexels) are allow-listed in `next.config.ts`
(`dangerouslyAllowSVG` is on so the branded SVG icons/stickers can be served).

---

## Deployment

Deploys to any Next.js host (e.g. **Vercel**). Set the environment variables in the
host's dashboard. The contact-form API route runs server-side, so it needs a Node
runtime (not a static export).
