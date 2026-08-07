import type { Metadata } from "next";
import { notFound } from "next/navigation";

import JsonLd from "@/components/JsonLd";
import StrategicPage from "@/components/StrategicPage";
import { strategicPages } from "@/lib/strategic-pages";
import {
  findStrategicPageKey,
  isLanguage,
  languageAlternates,
  languages,
  siteUrl,
  strategicPath,
  strategicSlugs,
  type StrategicPageKey,
} from "@/lib/site";

type Props = { params: Promise<{ lang: string; slug: string }> };

export function generateStaticParams() {
  return languages.flatMap((lang) =>
    (Object.keys(strategicSlugs) as StrategicPageKey[]).map((key) => ({
      lang,
      slug: strategicSlugs[key][lang],
    }))
  );
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const pageKey = findStrategicPageKey(lang, slug);
  if (!pageKey) notFound();

  const page = strategicPages[pageKey][lang];
  const canonical = `${siteUrl}${strategicPath(pageKey, lang)}`;

  return {
    title: page.label,
    description: page.summary,
    alternates: {
      canonical,
      languages: languageAlternates((language) => strategicPath(pageKey, language)),
    },
    openGraph: {
      title: `${page.title} | ALGOFERT-BIO®`,
      description: page.summary,
      url: canonical,
      locale: lang === "fr" ? "fr_FR" : lang === "en" ? "en_US" : "ar_DZ",
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang, slug } = await params;
  if (!isLanguage(lang)) notFound();
  const pageKey = findStrategicPageKey(lang, slug);
  if (!pageKey) notFound();

  const page = strategicPages[pageKey][lang];
  const canonical = `${siteUrl}${strategicPath(pageKey, lang)}`;
  const homeLabels = { fr: "Accueil", en: "Home", ar: "الرئيسية" };
  const breadcrumbData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: homeLabels[lang],
        item: `${siteUrl}/${lang}`,
      },
      {
        "@type": "ListItem",
        position: 2,
        name: page.label,
        item: canonical,
      },
    ],
  };

  return (
    <>
      <JsonLd id="algofert-breadcrumb-schema" data={breadcrumbData} />
      <StrategicPage language={lang} pageKey={pageKey} />
    </>
  );
}
