"use client";

import { usePathname, useRouter } from "next/navigation";
import { localeLabels, locales, type Locale } from "@/i18n/config";

type LanguageSelectorProps = { locale: Locale; label: string };

export function LanguageSelector({ locale, label }: LanguageSelectorProps) {
  const pathname = usePathname();
  const router = useRouter();

  function changeLocale(nextLocale: Locale) {
    const segments = pathname.split("/");
    segments[1] = nextLocale;
    router.push(`${segments.join("/")}${window.location.search}${window.location.hash}`);
  }

  return <label className="language-selector">
    <span className="sr-only">{label}</span>
    <select value={locale} onChange={(event) => changeLocale(event.target.value as Locale)} aria-label={label}>
      {locales.map((option) => <option key={option} value={option} lang={option}>{localeLabels[option]}</option>)}
    </select>
  </label>;
}
