import type { ProductId } from "@/content/products";

type MetadataMessages = { title: string; description: string };
type ProductMessages = { name: string; description: string; overview: string };
export type ProductDetailMessages = {
  metadata: MetadataMessages;
  eyebrow: string;
  statement: string;
  conceptNotice: string;
  intro: { eyebrow: string; title: string; copy: string };
  form: { eyebrow: string; title: string; copy: string };
  material: { eyebrow: string; title: string; copy: string; labels: string[] };
  workspace: { eyebrow: string; title: string; copy: string };
  family: { eyebrow: string; title: string; collection: string };
};

export type LocaleMessages = {
  metadata: MetadataMessages;
  accessibility: {
    home: string; primaryNav: string; footerNav: string; mobileNav: string;
    openMenu: string; closeMenu: string; language: string; learnAbout: string; skipToContent: string;
  };
  nav: { products: string; design: string; about: string; support: string };
  hero: { eyebrow: string; title: string; copy: string; cta: string; imageAlt: string };
  philosophy: { eyebrow: string; title: string; copy: string };
  collection: { eyebrow: string; title: string; copy: string; learnMore: string; viewAll: string };
  products: Record<ProductId, ProductMessages>;
  productDetails: Record<ProductId, ProductDetailMessages>;
  design: { eyebrow: string; title: string; copy: string; cta: string; material: string };
  footer: {
    slogan: string; note: string;
    groups: { products: string; discover: string; support: string; language: string };
  };
  pages: {
    products: { metadata: MetadataMessages; eyebrow: string; title: string };
    design: {
      metadata: MetadataMessages; eyebrow: string; title: string; intro: string; thesis: string;
      form: { eyebrow: string; title: string; lead: string; copy: string };
      material: { eyebrow: string; title: string; lead: string; copy: string; terms: string[] };
      space: { eyebrow: string; title: string; lead: string; copy: string };
      restraint: { eyebrow: string; title: string; lead: string; copy: string };
      everyday: { eyebrow: string; title: string; lead: string; copy: string };
      principles: { eyebrow: string; title: string; items: Array<{ title: string; copy: string }> };
      products: { eyebrow: string; title: string; copy: string; conceptNotice: string; cta: string };
    };
    about: {
      metadata: MetadataMessages; eyebrow: string; title: string; intro: string; thesis: string;
      idea: { eyebrow: string; title: string; copy: string };
      relationship: { eyebrow: string; title: string; items: Array<{ title: string; copy: string }> };
      approach: { eyebrow: string; title: string; lead: string; copy: string };
      principles: { eyebrow: string; title: string; items: Array<{ title: string; copy: string }> };
      closing: { eyebrow: string; title: string; copy: string; conceptNotice: string; designCta: string; productsCta: string };
    };
    support: {
      metadata: MetadataMessages; eyebrow: string; title: string; intro: string; conceptNotice: string;
      products: { eyebrow: string; title: string; copy: string; cta: string };
      topics: { eyebrow: string; title: string; items: Array<{ title: string; copy: string }> };
      faq: { eyebrow: string; title: string; items: Array<{ question: string; answer: string }> };
      help: { eyebrow: string; title: string; copy: string; cta: string };
    };
  };
};
