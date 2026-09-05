import type { Metadata } from "next";
import type { ReactNode } from "react";
import { notFound } from "next/navigation";
import { getMessages } from "@/i18n/messages";
import { isLocale, locales } from "@/i18n/config";
import { createLocalizedMetadata } from "@/i18n/metadata";
import "../globals.css";

type LocaleLayoutProps = { children: ReactNode; params: Promise<{ locale: string }> };

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Omit<LocaleLayoutProps, "children">): Promise<Metadata> {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);

  return createLocalizedMetadata({
    locale,
    title: messages.metadata.title,
    description: messages.metadata.description,
  });
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();

  return <html lang={locale} className="h-full antialiased" data-scroll-behavior="smooth"><body id="top">{children}</body></html>;
}
