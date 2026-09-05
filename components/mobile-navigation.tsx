"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { NavigationLink } from "./navigation-link";

type MobileNavigationProps = {
  items: ReadonlyArray<{ label: string; href: string }>;
  navLabel: string;
  openLabel: string;
  closeLabel: string;
};

export function MobileNavigation({ items, navLabel, openLabel, closeLabel }: MobileNavigationProps) {
  const pathname = usePathname();
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const summaryRef = useRef<HTMLElement>(null);
  const firstLinkRef = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    const details = detailsRef.current;
    if (details) details.open = false;
  }, [pathname]);

  function closeMenu(restoreFocus = false) {
    if (detailsRef.current) detailsRef.current.open = false;
    if (restoreFocus) summaryRef.current?.focus();
  }

  return <details
    className="mobile-menu"
    ref={detailsRef}
    onToggle={(event) => {
      const open = event.currentTarget.open;
      if (open) requestAnimationFrame(() => firstLinkRef.current?.focus());
    }}
    onKeyDown={(event) => {
      if (event.key === "Escape" && event.currentTarget.open) {
        event.preventDefault();
        closeMenu(true);
      }
    }}
  >
    <summary ref={summaryRef}>
      <span className="mobile-menu__open-label sr-only">{openLabel}</span>
      <span className="mobile-menu__close-label sr-only">{closeLabel}</span>
      <i aria-hidden="true" />
      <i aria-hidden="true" />
    </summary>
    <nav aria-label={navLabel}>
      {items.map((item, index) => <NavigationLink
        key={item.href}
        href={item.href}
        ref={index === 0 ? firstLinkRef : undefined}
        onClick={() => closeMenu()}
      >{item.label}</NavigationLink>)}
    </nav>
  </details>;
}
