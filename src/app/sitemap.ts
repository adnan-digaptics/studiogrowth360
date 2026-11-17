import type { MetadataRoute } from "next";

export const dynamic = "force-static";

const publicRoutes = [
  "",
  "/about",
  "/services",
  "/lead-generation",
  "/n8n-automation",
  "/gohighlevel-services",
  "/crm-solutions",
  "/ai-automation",
  "/website-funnel-development",
  "/digital-marketing",
  "/industries-we-serve",
  "/industries-we-serve/photography-studios",
  "/industries-we-serve/podcast-studios",
  "/industries-we-serve/yoga-studios",
  "/industries-we-serve/craft-studios",
  "/pricing",
  "/contact",
  "/book-consultation",
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
