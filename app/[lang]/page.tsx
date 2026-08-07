import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import { translations } from "@/lib/i18n";
import {
  isLanguage,
  languageAlternates,
  siteUrl,
} from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const title = translations[lang].hero.description;
  const description = translations[lang].mobileIntro;
  const canonical = `${siteUrl}/${lang}`;

  return {
    title: "ALGOFERT-BIO®",
    description,
    alternates: {
      canonical,
      languages: languageAlternates((language) => `/${language}`),
    },
    openGraph: {
      title: `ALGOFERT-BIO® — ${title}`,
      description,
      url: canonical,
      locale: lang === "fr" ? "fr_FR" : lang === "en" ? "en_US" : "ar_DZ",
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const description = translations[lang].mobileIntro;
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "ALGOFERT-BIO®",
        alternateName: "ALGOFERT-BIO",
        url: siteUrl,
        logo: `${siteUrl}/icon-512.png`,
        description,
        address: {
          "@type": "PostalAddress",
          addressLocality: "Oran",
          addressCountry: "DZ",
        },
      },
      {
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        url: siteUrl,
        name: "ALGOFERT-BIO®",
        inLanguage: ["fr", "en", "ar"],
        publisher: { "@id": `${siteUrl}/#organization` },
      },
    ],
  };

  return (
    <>
      <JsonLd id="algofert-organization-schema" data={structuredData} />
      <HomePage initialLanguage={lang} />
    </>
  );
}
