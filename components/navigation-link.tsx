"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { forwardRef, type ComponentPropsWithoutRef } from "react";

type NavigationLinkProps = ComponentPropsWithoutRef<typeof Link> & { exact?: boolean };

export const NavigationLink = forwardRef<HTMLAnchorElement, NavigationLinkProps>(function NavigationLink({ href, exact = false, ...props }, ref) {
  const pathname = usePathname();
  const targetPath = href.toString().split("#")[0];
  const isCurrent = pathname === targetPath || (!exact && pathname.startsWith(`${targetPath}/`));

  return <Link ref={ref} href={href} aria-current={isCurrent ? "page" : undefined} {...props} />;
});
