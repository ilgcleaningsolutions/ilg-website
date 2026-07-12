import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  // The two locales the site supports.
  locales: ["en", "es"],

  // English is the default and keeps the bare, un-prefixed URLs (/, /klinmak, …).
  defaultLocale: "en",

  // Only Spanish gets a path prefix (/es/…); English URLs stay exactly as they
  // were before i18n so existing links and search rankings are preserved.
  localePrefix: "as-needed",
});

export type Locale = (typeof routing.locales)[number];
