import Image from "next/image";
import smartDock from "@/public/images/smart-dock.jpg";
import wirelessCharger from "@/public/images/wireless-charger.jpg";
import desktopHub from "@/public/images/desktop-hub.jpg";
import { PageIntro, PageShell } from "@/components/page-shell";
import { getPageContext, getPageMetadata, type RouteParams } from "@/i18n/page-context";

const images = [smartDock, wirelessCharger, desktopHub];
export const generateMetadata = (props: RouteParams) => getPageMetadata(props, "products");

export default async function ProductsPage(props: RouteParams) {
  const { locale, messages } = await getPageContext(props);
  const page = messages.pages.products;

  return <PageShell locale={locale} messages={messages}>
    <PageIntro eyebrow={page.eyebrow} title={page.title} />
    <div className="product-editorial">
      {messages.products.map((product, index) => <article className="product-feature" key={product.name}>
        <div className="product-feature__visual">
          <span className="product-feature__number" aria-hidden="true">0{index + 1}</span>
          <Image src={images[index]} alt={`SOLEN ${product.name}`} sizes="(max-width: 900px) 100vw, 60vw" />
        </div>
        <div className="product-feature__copy">
          <p className="eyebrow">SOLEN / 0{index + 1}</p>
          <h2>{product.name}</h2>
          <p className="product-feature__message">{product.description}</p>
          <p className="product-feature__description">{page.items[index].description}</p>
        </div>
      </article>)}
    </div>
  </PageShell>;
}
