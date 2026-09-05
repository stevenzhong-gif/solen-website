import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/content/products";
import { locales } from "@/i18n/config";

const pagePaths = ["", "/products", "/design", "/about", "/support"] as const;

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [...pagePaths, ...products.map((product) => `/products/${product.slug}` as const)];

  return paths.flatMap((path) => locales.map((locale) => {
    const languages = Object.fromEntries(locales.map((alternateLocale) => [
      alternateLocale,
      new URL(`/${alternateLocale}${path}`, siteConfig.productionUrl).toString(),
    ]));
    languages["x-default"] = new URL(`/en${path}`, siteConfig.productionUrl).toString();

    return {
      url: new URL(`/${locale}${path}`, siteConfig.productionUrl).toString(),
      changeFrequency: "monthly" as const,
      priority: path === "" ? 1 : path === "/products" ? 0.9 : 0.8,
      alternates: { languages },
    };
  }));
}
