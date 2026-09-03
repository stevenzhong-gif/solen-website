import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  const footerLinks = [
    { label: messages.nav.products, path: "products" }, { label: messages.nav.design, path: "design" },
    { label: messages.nav.about, path: "about" }, { label: messages.nav.support, path: "support" },
  ];
  return <footer className="footer" id="support">
    <div><p className="footer__brand">SOLEN</p><p className="footer__slogan">{messages.footer.slogan}</p></div>
    <nav aria-label={messages.accessibility.primaryNav}>{footerLinks.map((item) => <a key={item.path} href={`/${locale}/${item.path}`}>{item.label}</a>)}</nav>
    <p className="footer__meta">© {new Date().getFullYear()} SOLEN<br />{messages.footer.note}</p>
  </footer>;
}
