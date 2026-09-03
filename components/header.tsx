import Image from "next/image";
import logo from "@/public/images/solen-logo.jpg";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LanguageSelector } from "./language-selector";

export function Header({ locale, messages }: { locale: Locale; messages: Messages }) {
  const navItems = [
    { label: messages.nav.products, href: `/${locale}#products` },
    { label: messages.nav.design, href: `/${locale}#design` },
    { label: messages.nav.about, href: `/${locale}#about` },
    { label: messages.nav.support, href: `/${locale}#support` },
  ];
  return <header className="site-header">
    <a className="brand" href={`/${locale}#top`} aria-label={messages.accessibility.home}><span className="brand__mark" aria-hidden="true"><Image src={logo} alt="" priority /></span><span>SOLEN</span></a>
    <nav aria-label={messages.accessibility.primaryNav}>{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
    <div className="header-actions">
      <LanguageSelector locale={locale} label={messages.accessibility.language} />
      <details className="mobile-menu">
        <summary aria-label={messages.accessibility.openMenu}><span aria-hidden="true" /><span aria-hidden="true" /></summary>
        <nav aria-label={messages.accessibility.mobileNav}>{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      </details>
    </div>
  </header>;
}
