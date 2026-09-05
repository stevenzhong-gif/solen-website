import Image from "next/image";
import Link from "next/link";
import type { Locale } from "@/i18n/config";
import type { ProductDetailMessages } from "@/i18n/types";
import { getProductDetailHref, products, type ProductId } from "@/content/products";

type ProductComposition = "dock" | "surface" | "vertical";

export function ProductHero({ name, image, content, composition = "dock" }: { name: string; image: (typeof products)[number]["image"]; content: ProductDetailMessages; composition?: ProductComposition }) {
  return <section className={`product-detail-hero product-detail-hero--${composition}`} aria-labelledby="product-title">
    <div className="product-detail-hero__copy"><p className="eyebrow">{content.eyebrow}</p><h1 id="product-title">{name}</h1><p className="product-detail-hero__statement">{content.statement}</p></div>
    <div className="product-detail-hero__visual"><Image src={image} alt={`SOLEN ${name}`} loading="eager" fetchPriority="high" sizes="(max-width: 900px) 100vw, 62vw" /></div>
  </section>;
}

export function ProductConceptNotice({ children }: { children: string }) {
  return <aside className="product-concept-notice"><span aria-hidden="true">Concept / 01</span><p>{children}</p></aside>;
}

export function ProductNarrativeSection({ eyebrow, title, copy, tone = "paper", composition = "dock" }: { eyebrow: string; title: string; copy: string; tone?: "paper" | "beige" | "charcoal"; composition?: ProductComposition }) {
  return <section className={`product-narrative product-narrative--${tone} product-narrative--${composition}`}><p className="eyebrow">{eyebrow}</p><div><h2>{title}</h2><p>{copy}</p></div></section>;
}

export function ProductMaterialSection({ content, composition = "dock" }: { content: ProductDetailMessages["material"]; composition?: ProductComposition }) {
  return <section className={`product-material product-material--${composition}`}><div><p className="eyebrow">{content.eyebrow}</p><h2>{content.title}</h2><p>{content.copy}</p></div><ul>{content.labels.map((label, index) => <li key={label}><span>0{index + 1}</span>{label}</li>)}</ul></section>;
}

export function ProductFamilyNavigation({ locale, current, content, productNames }: { locale: Locale; current: ProductId; content: ProductDetailMessages["family"]; productNames: Record<ProductId, string> }) {
  return <section className="product-family" aria-labelledby="product-family-title"><p className="eyebrow">{content.eyebrow}</p><div className="product-family__heading"><h2 id="product-family-title">{content.title}</h2><Link href={`/${locale}/products`}>{content.collection}<span aria-hidden="true">↗</span></Link></div><div className="product-family__links">{products.filter((product) => product.id !== current).map((product) => <Link key={product.id} href={getProductDetailHref(locale, product)}><span>{productNames[product.id]}</span><span aria-hidden="true">↗</span></Link>)}</div></section>;
}
