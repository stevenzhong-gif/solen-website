import type { ReactNode } from "react";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { Footer } from "./footer";
import { Header } from "./header";

export function PageShell({ locale, messages, children }: { locale: Locale; messages: Messages; children: ReactNode }) {
  return <><Header locale={locale} messages={messages} /><main className="inner-page">{children}</main><Footer locale={locale} messages={messages} /></>;
}

export function PageIntro({ eyebrow, title, intro }: { eyebrow: string; title: string; intro?: string }) {
  return <section className="page-intro" aria-labelledby="page-title">
    <p className="eyebrow">{eyebrow}</p>
    <h1 id="page-title">{title}</h1>
    {intro && <p className="page-intro__copy">{intro}</p>}
  </section>;
}
