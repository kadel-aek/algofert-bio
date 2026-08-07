import type { MetadataRoute } from "next";

import {
  languageAlternates,
  languages,
  siteUrl,
  strategicPath,
  strategicSlugs,
  type StrategicPageKey,
} from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const homePages: MetadataRoute.Sitemap = languages.map((language) => ({
    url: `${siteUrl}/${language}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 1,
    alternates: {
      languages: languageAlternates((item) => `/${item}`),
    },
  }));

  const strategicPages: MetadataRoute.Sitemap = (
    Object.keys(strategicSlugs) as StrategicPageKey[]
  ).flatMap((key) =>
    languages.map((language) => ({
      url: `${siteUrl}${strategicPath(key, language)}`,
      lastModified: new Date(),
      changeFrequency: key === "news" ? "weekly" : "monthly",
      priority: key === "news" ? 0.8 : 0.85,
      alternates: {
        languages: languageAlternates((item) => strategicPath(key, item)),
      },
    }))
  );

  return [...homePages, ...strategicPages];
}
