import desktopHub from "@/public/images/desktop-hub.jpg";
import smartDock from "@/public/images/smart-dock.jpg";
import wirelessCharger from "@/public/images/wireless-charger.jpg";
import Image from "next/image";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductCard } from "@/components/product-card";

const content = {
  hero: { title: "Technology, naturally.", copy: "Thoughtful technology,\ndesigned to belong in your space.", cta: "Explore Products" },
  philosophy: { eyebrow: "Our philosophy", title: "Designed for your space.", copy: "Technology should naturally integrate into everyday work and living environments." },
  products: [
    { name: "Smart Dock", description: "One connection.\nA simpler workspace.", image: smartDock },
    { name: "Wireless Charger", description: "Power,\nwithout the clutter.", image: wirelessCharger },
    { name: "Desktop Hub", description: "Everything connected.\nNothing complicated.", image: desktopHub },
  ],
  design: { eyebrow: "Designed with intention", title: "Warm materials.\nThoughtful technology.", cta: "Discover our design" },
} as const;

const lines = (value: string) => value.split("\n").map((line) => <span key={line}>{line}</span>);

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero__copy">
          <p className="eyebrow">SOLEN / Smart Dock</p>
          <h1 id="hero-title">{content.hero.title}</h1>
          <p className="hero__description">{lines(content.hero.copy)}</p>
          <a className="text-link" href="#products">{content.hero.cta}<span aria-hidden="true">↗</span></a>
        </div>
        <div className="hero__visual">
          <span className="hero__index" aria-hidden="true">01</span>
          <Image src={smartDock} alt="SOLEN Smart Dock in warm silver" priority sizes="(max-width: 900px) 100vw, 58vw" />
        </div>
      </section>

      <section className="philosophy" id="about" aria-labelledby="philosophy-title">
        <p className="eyebrow">{content.philosophy.eyebrow}</p>
        <div className="philosophy__content">
          <h2 id="philosophy-title">{content.philosophy.title}</h2>
          <p>{content.philosophy.copy}</p>
        </div>
      </section>

      <section className="products" id="products" aria-labelledby="products-title">
        <div className="section-heading"><p className="eyebrow">The collection</p><h2 id="products-title">Made to work together.</h2></div>
        <div className="product-grid">
          {content.products.map((product, index) => <ProductCard key={product.name} {...product} number={`0${index + 1}`} />)}
        </div>
      </section>

      <section className="design" id="design" aria-labelledby="design-title">
        <div className="design__texture" aria-hidden="true" />
        <div className="design__content">
          <p className="eyebrow">{content.design.eyebrow}</p>
          <h2 id="design-title">{lines(content.design.title)}</h2>
          <a className="text-link text-link--light" href="#about">{content.design.cta}<span aria-hidden="true">↗</span></a>
        </div>
        <p className="design__material" aria-hidden="true">Brushed aluminium / 100% recyclable</p>
      </section>
    </main>
    <Footer />
  </>;
}
