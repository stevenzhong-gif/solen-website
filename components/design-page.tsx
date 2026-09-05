import Image from "next/image";
import Link from "next/link";
import { products } from "@/content/products";
import type { Locale } from "@/i18n/config";
import type { LocaleMessages } from "@/i18n/types";

type DesignMessages = LocaleMessages["pages"]["design"];

export function DesignHero({ content }: { content: DesignMessages }) {
  return <section className="design-page-hero" aria-labelledby="design-page-title">
    <p className="eyebrow">{content.eyebrow}</p>
    <div className="design-page-hero__statement">
      <h1 id="design-page-title">{content.title}</h1>
      <p>{content.intro}</p>
    </div>
    <p className="design-page-hero__thesis">{content.thesis}</p>
  </section>;
}

type ChapterKey = "form" | "space" | "restraint" | "everyday";

export function DesignChapter({ content, chapter, index }: { content: DesignMessages[ChapterKey]; chapter: ChapterKey; index: string }) {
  return <section className={`design-chapter design-chapter--${chapter}`} aria-labelledby={`design-${chapter}-title`}>
    <div className="design-chapter__index"><span aria-hidden="true">{index}</span><p className="eyebrow">{content.eyebrow}</p></div>
    <div className="design-chapter__body">
      <h2 id={`design-${chapter}-title`}>{content.title}</h2>
      <p className="design-chapter__lead">{content.lead}</p>
      <p className="design-chapter__copy">{content.copy}</p>
    </div>
  </section>;
}

export function MaterialLanguage({ content }: { content: DesignMessages["material"] }) {
  return <section className="design-material" aria-labelledby="design-material-title">
    <div className="design-material__heading">
      <p className="eyebrow">{content.eyebrow}</p>
      <h2 id="design-material-title">{content.title}</h2>
    </div>
    <div className="design-material__narrative"><p>{content.lead}</p><p>{content.copy}</p></div>
    <ol className="design-material__terms">
      {content.terms.map((term, index) => <li key={term}><span aria-hidden="true">0{index + 1}</span>{term}</li>)}
    </ol>
  </section>;
}

export function DesignPrinciples({ content }: { content: DesignMessages["principles"] }) {
  return <section className="design-principles" aria-labelledby="design-principles-title">
    <div className="design-principles__heading"><p className="eyebrow">{content.eyebrow}</p><h2 id="design-principles-title">{content.title}</h2></div>
    <ol>{content.items.map((item, index) => <li key={item.title}><span aria-hidden="true">0{index + 1}</span><h3>{item.title}</h3><p>{item.copy}</p></li>)}</ol>
  </section>;
}

export function DesignProductConnection({ locale, content, messages }: { locale: Locale; content: DesignMessages["products"]; messages: LocaleMessages }) {
  return <section className="design-products" aria-labelledby="design-products-title">
    <div className="design-products__heading">
      <div><p className="eyebrow">{content.eyebrow}</p><h2 id="design-products-title">{content.title}</h2></div>
      <p>{content.copy}</p>
    </div>
    <p className="design-products__notice">{content.conceptNotice}</p>
    <div className="design-products__list">
      {products.map((product, index) => <Link href={`/${locale}/products/${product.slug}`} key={product.id} aria-label={`${messages.accessibility.learnAbout} ${messages.products[product.id].name}`}>
        <span className="design-products__visual"><Image src={product.image} alt="" sizes="(max-width: 620px) 100vw, 33vw" /></span>
        <span className="design-products__meta"><span aria-hidden="true">0{index + 1}</span><strong>{messages.products[product.id].name}</strong><span aria-hidden="true">↗</span></span>
      </Link>)}
    </div>
    <Link className="design-products__collection" href={`/${locale}/products`}>{content.cta}<span aria-hidden="true">↗</span></Link>
  </section>;
}
