import type { MetadataRoute } from "next";
import { SITE } from "@/lib/site";

const lastModified = new Date("2026-10-27");

export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "/",
    "/math-tutoring-hicksville/",
    "/english-tutoring-hicksville/",
    "/free-level-test/",
    "/faq/",
    "/contact/",
    "/privacy/",
  ];

  return paths.map((path) => ({
    url: `${SITE.url}${path === "/" ? "/" : path}`,
    lastModified,
    changeFrequency: path === "/" ? "weekly" : "monthly",
    priority: path === "/" ? 1 : 0.8,
  }));
}
