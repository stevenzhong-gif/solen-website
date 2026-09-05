import Link from "next/link";
import { getProductHref, products } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { LocaleMessages } from "@/i18n/types";

type SupportMessages = LocaleMessages["pages"]["support"];

export function SupportHero({ content }: { content: SupportMessages }) {
  return <section className="support-hero" aria-labelledby="support-title">
    <p className="eyebrow">{content.eyebrow}</p>
    <div><h1 id="support-title">{content.title}</h1><p>{content.intro}</p></div>
    <p className="support-hero__notice">{content.conceptNotice}</p>
  </section>;
}

export function SupportProducts({ locale, content, messages }: { locale: Locale; content: SupportMessages["products"]; messages: LocaleMessages }) {
  return <section className="support-products" aria-labelledby="support-products-title">
    <div className="support-section-heading"><p className="eyebrow">{content.eyebrow}</p><div><h2 id="support-products-title">{content.title}</h2><p>{content.copy}</p></div></div>
    <div className="support-product-links">{products.map((product, index) => <Link key={product.id} href={getProductHref(locale, product)}><span aria-hidden="true">0{index + 1}</span><strong>{messages.products[product.id].name}</strong><small>{content.cta}</small><span aria-hidden="true">↗</span></Link>)}</div>
  </section>;
}

export function SupportTopics({ content }: { content: SupportMessages["topics"] }) {
  return <section className="support-topics" aria-labelledby="support-topics-title">
    <div className="support-section-heading"><p className="eyebrow">{content.eyebrow}</p><h2 id="support-topics-title">{content.title}</h2></div>
    <ol>{content.items.map((item, index) => <li key={item.title}><span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ol>
  </section>;
}

export function SupportFaq({ content }: { content: SupportMessages["faq"] }) {
  return <section className="support-faq" aria-labelledby="support-faq-title">
    <div><p className="eyebrow">{content.eyebrow}</p><h2 id="support-faq-title">{content.title}</h2></div>
    <div className="support-faq__list">{content.items.map((item) => <details key={item.question}><summary>{item.question}<span aria-hidden="true">+</span></summary><p>{item.answer}</p></details>)}</div>
  </section>;
}

export function SupportHelp({ locale, content }: { locale: Locale; content: SupportMessages["help"] }) {
  return <section className="support-help" aria-labelledby="support-help-title"><p className="eyebrow">{content.eyebrow}</p><div><h2 id="support-help-title">{content.title}</h2><p>{content.copy}</p><Link href={`/${locale}/about`}>{content.cta}<span aria-hidden="true">↗</span></Link></div></section>;
}
