import desktopHub from "@/public/images/desktop-hub.jpg";
import smartDock from "@/public/images/smart-dock.jpg";
import wirelessCharger from "@/public/images/wireless-charger.jpg";
import type { Locale } from "@/i18n/config";

export const productIds = ["smart-dock", "wireless-charger", "desktop-hub"] as const;
export type ProductId = (typeof productIds)[number];

export const products = [
  { id: "smart-dock", slug: "smart-dock", image: smartDock, detailStatus: "complete" },
  { id: "wireless-charger", slug: "wireless-charger", image: wirelessCharger, detailStatus: "complete" },
  { id: "desktop-hub", slug: "desktop-hub", image: desktopHub, detailStatus: "complete" },
] as const satisfies ReadonlyArray<{ id: ProductId; slug: ProductId; image: typeof smartDock; detailStatus: "complete" }>;

export function getProduct(productId: string) {
  return products.find((product) => product.id === productId);
}

export function getProductHref(locale: Locale, product: (typeof products)[number]) {
  return `/${locale}/products/${product.slug}`;
}

export function getProductDetailHref(locale: Locale, product: (typeof products)[number]) {
  return `/${locale}/products/${product.slug}`;
}
