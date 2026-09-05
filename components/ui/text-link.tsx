import Link from "next/link";
import type { ReactNode } from "react";

export function TextLink({ href, children, light = false }: { href: string; children: ReactNode; light?: boolean }) {
  return <Link className={`text-link${light ? " text-link--light" : ""}`} href={href}>
    {children}<span aria-hidden="true">↗</span>
  </Link>;
}
