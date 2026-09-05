import Image from "next/image";
import Link from "next/link";
import { getProductHref, products } from "@/content/products";
import { PageIntro, PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "products");

export default async function ProductsPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.products;

  return <PageShell locale={locale} messages={messages}>
    <PageIntro eyebrow={page.eyebrow} title={page.title} />
    <div className="product-editorial">
      {products.map((product, index) => {
        const productMessages = messages.products[product.id];
        const href = getProductHref(locale, product);
        return <article className="product-feature" id={product.slug} key={product.id}>
        <Link className="product-feature__visual" href={href} aria-label={`${messages.accessibility.learnAbout} ${productMessages.name}`}>
          <span className="product-feature__number" aria-hidden="true">0{index + 1}</span>
          <Image src={product.image} alt={`SOLEN ${productMessages.name}`} sizes="(max-width: 900px) 100vw, 60vw" />
        </Link>
        <div className="product-feature__copy">
          <p className="eyebrow">SOLEN / 0{index + 1}</p>
          <h2><Link href={href}>{productMessages.name}</Link></h2>
          <p className="product-feature__message">{productMessages.description}</p>
          <p className="product-feature__description">{productMessages.overview}</p>
          <Link className="product-feature__link" href={href} aria-label={`${messages.accessibility.learnAbout} ${productMessages.name}`}>{messages.collection.learnMore}<span aria-hidden="true">↗</span></Link>
        </div>
      </article>})}
    </div>
  </PageShell>;
}
