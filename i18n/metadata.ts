import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import { locales, type Locale } from "./config";

const openGraphLocales: Record<Locale, string> = {
  en: "en_US",
  "zh-TW": "zh_TW",
  "zh-CN": "zh_CN",
};

type LocalizedMetadataInput = {
  locale: Locale;
  path?: string;
  title: string;
  description: string;
};

export function createLocalizedMetadata({ locale, path = "", title, description }: LocalizedMetadataInput): Metadata {
  const localizedPath = `/${locale}${path}`;
  const languageAlternates = Object.fromEntries(
    locales.map((alternateLocale) => [
      alternateLocale,
      new URL(`/${alternateLocale}${path}`, siteConfig.productionUrl).toString(),
    ]),
  );
  languageAlternates["x-default"] = new URL(`/en${path}`, siteConfig.productionUrl).toString();

  return {
    metadataBase: siteConfig.productionUrl,
    title,
    description,
    robots: { index: true, follow: true },
    alternates: {
      canonical: new URL(localizedPath, siteConfig.productionUrl),
      languages: languageAlternates,
    },
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: openGraphLocales[locale],
      alternateLocale: locales
        .filter((alternateLocale) => alternateLocale !== locale)
        .map((alternateLocale) => openGraphLocales[alternateLocale]),
      url: new URL(localizedPath, siteConfig.productionUrl),
      title,
      description,
      images: [{ url: new URL("/images/solen-logo.jpg", siteConfig.productionUrl), alt: "SOLEN" }],
    },
  };
}
