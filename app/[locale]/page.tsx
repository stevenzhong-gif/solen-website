import Image from "next/image";
import desktopHub from "@/public/images/desktop-hub.jpg";
import smartDock from "@/public/images/smart-dock.jpg";
import wirelessCharger from "@/public/images/wireless-charger.jpg";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";
import { getMessages } from "@/i18n/messages";
import { isLocale } from "@/i18n/config";
import { notFound } from "next/navigation";

const productImages = [smartDock, wirelessCharger, desktopHub];
const lines = (value: string) => value.split("\n").map((line) => <span key={line}>{line}</span>);

export default async function Home({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  if (!isLocale(locale)) notFound();
  const messages = getMessages(locale);

  return <>
    <Header locale={locale} messages={messages} />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">{messages.hero.eyebrow}</p>
          <h1 id="hero-title">{messages.hero.title}</h1>
          <p className="hero__description">{lines(messages.hero.copy)}</p>
          <a className="text-link" href={`/${locale}/products`}>{messages.hero.cta}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero__visual">
          <span className="hero__index" aria-hidden="true">01</span>
          <Image src={smartDock} alt={messages.hero.imageAlt} priority sizes="(max-width: 900px) 100vw, 58vw" />
        </div>
      </section>

      <section className="philosophy" id="about" aria-labelledby="philosophy-title">
        <p className="eyebrow">{messages.philosophy.eyebrow}</p>
        <div className="philosophy__content"><h2 id="philosophy-title">{messages.philosophy.title}</h2><p>{messages.philosophy.copy}</p></div>
      </section>

      <section className="products" id="products" aria-labelledby="products-title">
        <div className="section-heading"><p className="eyebrow">{messages.collection.eyebrow}</p><h2 id="products-title">{messages.collection.title}</h2></div>
        <div className="product-grid">
          {messages.products.map((product, index) => <ProductCard key={product.name} {...product} image={productImages[index]} number={`0${index + 1}`} learnMore={messages.collection.learnMore} learnAbout={messages.accessibility.learnAbout} />)}
        </div>
      </section>

      <section className="design" id="design" aria-labelledby="design-title">
        <div className="design__texture" aria-hidden="true" />
        <div className="design__content">
          <p className="eyebrow">{messages.design.eyebrow}</p><h2 id="design-title">{lines(messages.design.title)}</h2>
          <a className="text-link text-link--light" href={`/${locale}/design`}>{messages.design.cta}<span aria-hidden="true">↗</span></a>
        </div>
        <p className="design__material" aria-hidden="true">{messages.design.material}</p>
      </section>
    </main>
    <Footer locale={locale} messages={messages} />
  </>;
}
