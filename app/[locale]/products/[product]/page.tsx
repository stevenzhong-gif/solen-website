import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ProductConceptNotice, ProductFamilyNavigation, ProductHero, ProductMaterialSection, ProductNarrativeSection } from "@/components/product-detail";
import { products, getProduct, type ProductId } from "@/content/products";
import { locales, isLocale } from "@/i18n/config";
import { getMessages } from "@/i18n/messages";
import { createLocalizedMetadata } from "@/i18n/metadata";

type ProductPageProps = { params: Promise<{ locale: string; product: string }> };

export const dynamicParams = false;

export function generateStaticParams() {
  return locales.flatMap((locale) => products.map((product) => ({ locale, product: product.slug })));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { locale, product: slug } = await params;
  const product = getProduct(slug);
  if (!isLocale(locale) || !product) notFound();
  return createLocalizedMetadata({ locale, path: `/products/${product.slug}`, ...getMessages(locale).productDetails[product.id].metadata });
}

export default async function ProductPage({ params }: ProductPageProps) {
  const { locale, product: slug } = await params;
  const product = getProduct(slug);
  if (!isLocale(locale) || !product) notFound();
  const messages = getMessages(locale);
  const content = messages.productDetails[product.id];
  const names = Object.fromEntries(products.map((item) => [item.id, messages.products[item.id].name])) as Record<ProductId, string>;

  return <PageShell locale={locale} messages={messages}>
    <article className="product-detail">
      <ProductHero name={messages.products[product.id].name} image={product.image} content={content} composition={product.id === "wireless-charger" ? "surface" : product.id === "desktop-hub" ? "vertical" : "dock"} />
      <ProductConceptNotice>{content.conceptNotice}</ProductConceptNotice>
      {product.id === "smart-dock" ? <>
        <ProductNarrativeSection {...content.intro} />
        <ProductNarrativeSection {...content.form} tone="beige" />
        <ProductMaterialSection content={content.material} />
        <ProductNarrativeSection {...content.workspace} tone="charcoal" />
      </> : product.id === "wireless-charger" ? <>
        <ProductNarrativeSection {...content.intro} composition="surface" />
        <ProductMaterialSection content={content.material} composition="surface" />
        <ProductNarrativeSection {...content.form} tone="beige" composition="surface" />
        <ProductNarrativeSection {...content.workspace} tone="charcoal" composition="surface" />
      </> : <>
        <ProductNarrativeSection {...content.intro} composition="vertical" />
        <ProductNarrativeSection {...content.form} tone="charcoal" composition="vertical" />
        <ProductNarrativeSection {...content.workspace} composition="vertical" />
        <ProductMaterialSection content={content.material} composition="vertical" />
      </>}
      <ProductFamilyNavigation locale={locale} current={product.id} content={content.family} productNames={names} />
    </article>
  </PageShell>;
}
