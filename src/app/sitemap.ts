import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  console.assert(process.env.MAIN_URL);
  return [
    {
      url: `${process.env.MAIN_URL}`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: `${process.env.MAIN_URL}/#experience`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: `${process.env.MAIN_URL}/#contact`,
      lastModified: new Date(),
      changeFrequency: "yearly",
      priority: 0.5,
    },
  ];
}
