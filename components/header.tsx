import Image from "next/image";
import logo from "@/public/images/solen-logo.jpg";

const navItems = [
  { label: "Products", href: "#products" }, { label: "Design", href: "#design" },
  { label: "About", href: "#about" }, { label: "Support", href: "#support" },
] as const;

export function Header() {
  return <header className="site-header">
    <a className="brand" href="#top" aria-label="SOLEN home"><span className="brand__mark" aria-hidden="true"><Image src={logo} alt="" priority /></span><span>SOLEN</span></a>
    <nav aria-label="Primary navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
    <div className="header-actions">
      <button className="language" type="button" aria-label="Language selector, English selected">EN <span aria-hidden="true">⌄</span></button>
      <details className="mobile-menu">
        <summary aria-label="Open navigation menu"><span aria-hidden="true" /><span aria-hidden="true" /></summary>
        <nav aria-label="Mobile navigation">{navItems.map((item) => <a key={item.label} href={item.href}>{item.label}</a>)}</nav>
      </details>
    </div>
  </header>;
}
