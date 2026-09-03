import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getMessages } from "./messages";
import { isLocale } from "./config";

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
  return {
    ...metadata,
    alternates: {
      canonical: `/${locale}/${page}`,
      languages: { en: `/en/${page}`, "zh-TW": `/zh-TW/${page}`, "zh-CN": `/zh-CN/${page}` },
    },
  };
}
