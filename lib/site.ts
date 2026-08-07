import type { Language } from "@/lib/i18n";

export const siteUrl = "https://algofert-bio.com";
export const languages: Language[] = ["fr", "en", "ar"];

export function isLanguage(value: string): value is Language {
  return languages.includes(value as Language);
}

export type StrategicPageKey =
  | "investors"
  | "partners"
  | "research"
  | "news";

export const strategicSlugs: Record<
  StrategicPageKey,
  Record<Language, string>
> = {
  investors: { fr: "investisseurs", en: "investors", ar: "investors" },
  partners: { fr: "partenaires", en: "partners", ar: "partners" },
  research: { fr: "recherche", en: "research", ar: "research" },
  news: { fr: "actualites", en: "news", ar: "news" },
};

export function strategicPath(key: StrategicPageKey, language: Language) {
  return `/${language}/${strategicSlugs[key][language]}`;
}

export function findStrategicPageKey(
  language: Language,
  slug: string
): StrategicPageKey | undefined {
  return (Object.keys(strategicSlugs) as StrategicPageKey[]).find(
    (key) => strategicSlugs[key][language] === slug
  );
}

export function languageAlternates(pathFor: (language: Language) => string) {
  return {
    fr: `${siteUrl}${pathFor("fr")}`,
    en: `${siteUrl}${pathFor("en")}`,
    ar: `${siteUrl}${pathFor("ar")}`,
    "x-default": `${siteUrl}${pathFor("fr")}`,
  };
}
