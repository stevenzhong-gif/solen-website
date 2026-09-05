import type { Locale } from "@/i18n/config";
import { localeLabels, locales } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { getProductHref, products } from "@/content/products";
import Link from "next/link";
import { LocaleLink } from "./locale-link";
import { NavigationLink } from "./navigation-link";

export function Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  return <footer className="footer">
    <div className="footer__lead">
      <Link className="footer__brand" href={`/${locale}`}>SOLEN</Link>
      <p className="footer__slogan">{messages.footer.slogan}</p>
    </div>
    <nav className="footer__directory" aria-label={messages.accessibility.footerNav}>
      <div className="footer__group">
        <p>{messages.footer.groups.products}</p>
        {products.map((product) => <Link key={product.id} href={getProductHref(locale, product)}>{messages.products[product.id].name}</Link>)}
      </div>
      <div className="footer__group">
        <p>{messages.footer.groups.discover}</p>
        <NavigationLink href={`/${locale}/design`}>{messages.nav.design}</NavigationLink>
        <NavigationLink href={`/${locale}/about`}>{messages.nav.about}</NavigationLink>
      </div>
      <div className="footer__group">
        <p>{messages.footer.groups.support}</p>
        <NavigationLink href={`/${locale}/support`}>{messages.nav.support}</NavigationLink>
      </div>
      <div className="footer__group footer__languages">
        <p>{messages.footer.groups.language}</p>
        {locales.map((item) => <LocaleLink key={item} locale={item}>{localeLabels[item]}</LocaleLink>)}
      </div>
    </nav>
    <div className="footer__base">
      <p>© {new Date().getFullYear()} SOLEN</p>
      <p>{messages.footer.note}</p>
    </div>
  </footer>;
}
