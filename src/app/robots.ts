import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  console.assert(process.env.MAIN_URL);
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/private/",
    },
    sitemap: `${process.env.MAIN_URL}/sitemap.xml`,
  };
}
