import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SOLEN — Technology, naturally.",
  description: "Thoughtful technology, designed to belong in your space.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body id="top">{children}</body>
    </html>
  );
}
