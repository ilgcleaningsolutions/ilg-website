import type { LucideIcon } from "lucide-react";
import type { Locale } from "@/i18n/routing";

/**
 * A translatable value: the same field expressed in each supported locale.
 * Product data files wrap every user-facing string in one of these; structural
 * data (icons, images, numbers, units, slugs, hotspot coordinates) stays plain.
 */
export type Localized<T = string> = { en: T; es: T };

function isLocalized(v: unknown): v is Localized {
  return (
    typeof v === "object" &&
    v !== null &&
    "en" in v &&
    "es" in v &&
    typeof (v as Record<string, unknown>).en === "string"
  );
}

/**
 * Maps a "raw" product type (with `Localized` fields) to the resolved type a
 * component consumes, where every `Localized` has collapsed to a plain string.
 * Lucide icons and primitives pass through unchanged.
 */
export type Resolved<T> = T extends Localized
  ? string
  : T extends LucideIcon
    ? T
    : T extends readonly (infer U)[]
      ? Resolved<U>[]
      : T extends object
        ? { [K in keyof T]: Resolved<T[K]> }
        : T;

/**
 * Deep-resolve every `{ en, es }` wrapper inside `value` to `locale`, leaving
 * arrays' shape, numbers, plain strings, and icon components (functions) intact.
 */
export function localize<T>(value: T, locale: string): Resolved<T> {
  const lang: Locale = locale === "es" ? "es" : "en";
  return resolve(value, lang) as Resolved<T>;
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function resolve(value: any, lang: Locale): any {
  if (Array.isArray(value)) return value.map((v) => resolve(v, lang));
  if (isLocalized(value)) return value[lang];
  // Recurse into plain objects only — functions (Lucide icons) are left as-is.
  if (value !== null && typeof value === "object") {
    const out: Record<string, unknown> = {};
    for (const key of Object.keys(value)) {
      out[key] = resolve((value as Record<string, unknown>)[key], lang);
    }
    return out;
  }
  return value;
}
