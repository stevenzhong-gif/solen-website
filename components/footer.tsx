import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";

export function Footer({ locale, messages }: { locale: Locale; messages: Messages }) {
  const footerLinks = [
    { label: messages.nav.products, id: "products" }, { label: messages.nav.design, id: "design" },
    { label: messages.nav.about, id: "about" }, { label: messages.nav.support, id: "support" },
  ];
  return <footer className="footer" id="support">
    <div><p className="footer__brand">SOLEN</p><p className="footer__slogan">{messages.footer.slogan}</p></div>
    <nav aria-label={messages.accessibility.primaryNav}>{footerLinks.map((item) => <a key={item.id} href={`/${locale}#${item.id}`}>{item.label}</a>)}</nav>
    <p className="footer__meta">© {new Date().getFullYear()} SOLEN<br />{messages.footer.note}</p>
  </footer>;
}
