import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/solen-logo.jpg";
import type { Locale } from "@/i18n/config";
import type { Messages } from "@/i18n/messages";
import { LanguageSelector } from "./language-selector";
import { MobileNavigation } from "./mobile-navigation";
import { NavigationLink } from "./navigation-link";
import { SkipLink } from "./ui/skip-link";

export function Header({ locale, messages }: { locale: Locale; messages: Messages }) {
  const navItems = [
    { label: messages.nav.products, href: `/${locale}/products` },
    { label: messages.nav.design, href: `/${locale}/design` },
    { label: messages.nav.about, href: `/${locale}/about` },
    { label: messages.nav.support, href: `/${locale}/support` },
  ];
  return <><SkipLink label={messages.accessibility.skipToContent} /><header className="site-header">
    <Link className="brand" href={`/${locale}`} aria-label={messages.accessibility.home}><span className="brand__mark" aria-hidden="true"><Image src={logo} alt="" loading="eager" sizes="24px" /></span><span>SOLEN</span></Link>
    <nav aria-label={messages.accessibility.primaryNav}>{navItems.map((item) => <NavigationLink key={item.label} href={item.href}>{item.label}</NavigationLink>)}</nav>
    <div className="header-actions">
      <LanguageSelector locale={locale} label={messages.accessibility.language} />
      <MobileNavigation items={navItems} navLabel={messages.accessibility.mobileNav} openLabel={messages.accessibility.openMenu} closeLabel={messages.accessibility.closeMenu} />
    </div>
  </header></>;
}
