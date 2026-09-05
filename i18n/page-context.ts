import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages } from "./messages";
import { isLocale } from "./config";
import { createLocalizedMetadata } from "./metadata";

export type RouteParams = { params: Promise<{ locale: string }> };
export type PrimaryPage = "products" | "design" | "about" | "support";

export async function getPageContext({ params }: RouteParams) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  return { locale, messages: getMessages(locale) };
}

export async function getPageMetadata(props: RouteParams, page: PrimaryPage): Promise<Metadata> {
  const { locale, messages } = await getPageContext(props);
  const metadata = messages.pages[page].metadata;
  return createLocalizedMetadata({ locale, path: `/${page}`, ...metadata });
}
