import type { ReactNode } from "react";
import "../globals.css";

export default function DefaultLayout({ children }: { children: ReactNode }) {
  return <html lang="en" className="h-full antialiased"><body>{children}</body></html>;
}
