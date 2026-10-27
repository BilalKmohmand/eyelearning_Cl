import type { Metadata } from "next";
import { PAGE_SEO, SITE, type PageKey } from "./site";

export function buildMetadata(page: PageKey): Metadata {
  const seo = PAGE_SEO[page];
  const canonical = `${SITE.url}${seo.path === "/" ? "/" : seo.path}`;
  const ogImage = `${SITE.url}/images/og-default.svg`;

  return {
    title: seo.title,
    description: seo.description,
    metadataBase: new URL(SITE.url),
    alternates: {
      canonical,
      languages: {
        "en-US": canonical,
        "x-default": canonical,
      },
    },
    robots: {
      index: true,
      follow: true,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url: canonical,
      siteName: SITE.name,
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: `${SITE.name} — Math and English tutoring in Hicksville, NY`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: seo.ogTitle,
      description: seo.ogDescription,
      images: [ogImage],
    },
    icons: {
      icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
      apple: [{ url: "/apple-touch-icon.png" }],
    },
    other: {
      "theme-color": SITE.themeColor,
    },
  };
}

export function absoluteUrl(path: string): string {
  if (path.startsWith("http")) return path;
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${SITE.url}${normalized}`;
}
