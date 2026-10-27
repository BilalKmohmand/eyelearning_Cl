import type { Metadata, Viewport } from "next";
import { Figtree, Fraunces } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "Math & English Tutoring | Hicksville, NY",
    template: "%s",
  },
  description:
    "Eye Level Learning Center of Hicksville offers Math and English tutoring for Pre-K–12. Book a free level test.",
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/apple-touch-icon.png" }],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: SITE.themeColor,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `body{margin:0;background:#f3f6f8;color:#0d2137;font-family:system-ui,sans-serif} .site-header{position:sticky;top:0;z-index:50;background:rgba(243,246,248,.95);border-bottom:1px solid #c9d4de}`,
          }}
        />
      </head>
      <body className={`${fraunces.variable} ${figtree.variable} antialiased`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
