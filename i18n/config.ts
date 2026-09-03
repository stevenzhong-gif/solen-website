export const locales = ["en", "zh-TW", "zh-CN"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "en";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  "zh-TW": "繁中",
  "zh-CN": "简中",
};
