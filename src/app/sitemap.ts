import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const publicRoutes = [
  "",
  "/about",
  "/service",
  "/portfolio",
  "/blog",
  "/faq",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://studiogrowth360.com";
  const baseUrl = `${siteUrl.replace(/\/+$/, "")}/`;

  return publicRoutes.map((route) => ({
    url: new URL(route.replace(/^\/+/, ""), baseUrl).toString(),
    lastModified: new Date(),
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1.0 : 0.8,
  }));
}
