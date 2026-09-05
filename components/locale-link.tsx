"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";

export function LocaleLink({ locale, children }: { locale: Locale; children: ReactNode }) {
  const pathname = usePathname();
  const segments = pathname.split("/");
  const isCurrent = segments[1] === locale;
  segments[1] = locale;

  return <Link href={segments.join("/") || `/${locale}`} hrefLang={locale} lang={locale} aria-current={isCurrent ? "page" : undefined}>{children}</Link>;
}
