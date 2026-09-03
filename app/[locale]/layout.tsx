import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "@/i18n/messages";
import { isLocale, locales } from "@/i18n/config";
import "../globals.css";

type LocaleLayoutProps = { children: ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);

  return {
    title: messages.metadata.title,
    description: messages.metadata.description,
    alternates: {
      canonical: `/${locale}`,
      languages: { en: "/en", "zh-TW": "/zh-TW", "zh-CN": "/zh-CN" },
    },
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <html lang={locale} className="h-full antialiased"><body id="top">{children}</body></html>;
}
