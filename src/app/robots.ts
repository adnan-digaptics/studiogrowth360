import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://studiogrowth360.com";
  const baseUrl = `${siteUrl.replace(/\/+$/, "")}/`;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: new URL("sitemap.xml", baseUrl).toString(),
  };
}
