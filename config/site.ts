export const siteConfig = {
  name: "SOLEN",
  productionUrl: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://solen-website-six.vercel.app",
  ),
} as const;
