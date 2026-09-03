const footerLinks = ["Products", "Design", "About", "Support"] as const;

export function Footer() {
  return <footer className="footer" id="support">
    <div><p className="footer__brand">SOLEN</p><p className="footer__slogan">Technology, naturally.</p></div>
    <nav aria-label="Footer navigation">{footerLinks.map((label) => <a key={label} href={`#${label.toLowerCase()}`}>{label}</a>)}</nav>
    <p className="footer__meta">© {new Date().getFullYear()} SOLEN<br />Designed for considered living.</p>
  </footer>;
}
