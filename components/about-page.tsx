import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { LocaleMessages } from "@/i18n/types";

type AboutMessages = LocaleMessages["pages"]["about"];

export function AboutHero({ content }: { content: AboutMessages }) {
  return <section className="about-hero" aria-labelledby="about-title">
    <p className="eyebrow">{content.eyebrow}</p>
    <div className="about-hero__statement"><h1 id="about-title">{content.title}</h1><p>{content.intro}</p></div>
    <p className="about-hero__thesis">{content.thesis}</p>
  </section>;
}

export function AboutIdea({ content }: { content: AboutMessages["idea"] }) {
  return <section className="about-idea" aria-labelledby="about-idea-title">
    <p className="eyebrow">{content.eyebrow}</p>
    <div><h2 id="about-idea-title">{content.title}</h2><p>{content.copy}</p></div>
    <span aria-hidden="true">S</span>
  </section>;
}

export function AboutRelationship({ content }: { content: AboutMessages["relationship"] }) {
  return <section className="about-relationship" aria-labelledby="about-relationship-title">
    <div className="about-relationship__heading"><p className="eyebrow">{content.eyebrow}</p><h2 id="about-relationship-title">{content.title}</h2></div>
    <ol>{content.items.map((item, index) => <li key={item.title}><span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ol>
  </section>;
}

export function AboutApproach({ content }: { content: AboutMessages["approach"] }) {
  return <section className="about-approach" aria-labelledby="about-approach-title">
    <p className="eyebrow">{content.eyebrow}</p>
    <div><h2 id="about-approach-title">{content.title}</h2><p className="about-approach__lead">{content.lead}</p><p>{content.copy}</p></div>
  </section>;
}

export function AboutPrinciples({ content }: { content: AboutMessages["principles"] }) {
  return <section className="about-values" aria-labelledby="about-values-title">
    <div><p className="eyebrow">{content.eyebrow}</p><h2 id="about-values-title">{content.title}</h2></div>
    <ol>{content.items.map((item, index) => <li key={item.title}><span aria-hidden="true">0{index + 1}</span><div><h3>{item.title}</h3><p>{item.copy}</p></div></li>)}</ol>
  </section>;
}

export function AboutClosing({ locale, content }: { locale: Locale; content: AboutMessages["closing"] }) {
  return <section className="about-closing" aria-labelledby="about-closing-title">
    <p className="eyebrow">{content.eyebrow}</p>
    <div className="about-closing__content"><h2 id="about-closing-title">{content.title}</h2><p>{content.copy}</p></div>
    <p className="about-closing__notice">{content.conceptNotice}</p>
    <div className="about-closing__links"><Link href={`/${locale}/design`}>{content.designCta}<span aria-hidden="true">↗</span></Link><Link href={`/${locale}/products`}>{content.productsCta}<span aria-hidden="true">↗</span></Link></div>
  </section>;
}
