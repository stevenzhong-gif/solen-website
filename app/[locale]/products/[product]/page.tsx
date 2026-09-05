import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PageShell } from "@/components/page-shell";
import { ProductConceptNotice, ProductFamilyNavigation, ProductHero, ProductMaterialSection, ProductStoryStage } from "@/components/product-detail";
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
  const composition = product.id === "wireless-charger" ? "surface" : product.id === "desktop-hub" ? "vertical" : "dock";
  const storyChapters = product.id === "wireless-charger"
    ? [content.intro, content.form, content.workspace]
    : product.id === "desktop-hub"
      ? [content.intro, content.workspace, content.form]
      : [content.intro, content.form, content.workspace];

  return <PageShell locale={locale} messages={messages}>
    <article className="product-detail">
      <ProductHero name={messages.products[product.id].name} image={product.image} content={content} composition={composition} />
      <ProductConceptNotice>{content.conceptNotice}</ProductConceptNotice>
      <ProductStoryStage name={messages.products[product.id].name} image={product.image} chapters={storyChapters} composition={composition} />
      <ProductMaterialSection content={content.material} composition={composition} />
      <ProductFamilyNavigation locale={locale} current={product.id} content={content.family} productNames={names} />
    </article>
  </PageShell>;
}
