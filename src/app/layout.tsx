import type { Metadata, Viewport } from "next";
import { DM_Sans, Plus_Jakarta_Sans } from "next/font/google";
import { SiteShell } from "@/components/SiteShell";
import { SITE } from "@/lib/site";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
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
  themeColor: "#0F2137",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US" className={`${plusJakarta.variable} ${dmSans.variable}`}>
      <head>
        <style
          dangerouslySetInnerHTML={{
            __html: `body{margin:0;background:#F8FAFC;color:#0F172A}h1,h2,h3,h4{font-family:var(--font-plus-jakarta),system-ui,sans-serif}`,
          }}
        />
      </head>
      <body className={`${dmSans.className} antialiased bg-slate-50 text-slate-900 selection:bg-amber-100 selection:text-amber-900`}>
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
