import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/HomePage";
import JsonLd from "@/components/JsonLd";
import SeoFaq from "@/components/SeoFaq";
import { seoContent } from "@/lib/seo";
import {
  isLanguage,
  languageAlternates,
  siteUrl,
} from "@/lib/site";

type Props = { params: Promise<{ lang: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const seo = seoContent[lang];
  const title = seo.title;
  const description = seo.description;
  const canonical = `${siteUrl}/${lang}`;

  return {
    title: { absolute: seo.title },
    description,
    keywords: seo.keywords,
    alternates: {
      canonical,
      languages: languageAlternates((language) => `/${language}`),
    },
    openGraph: {
      title,
      description,
      url: canonical,
      locale: lang === "fr" ? "fr_FR" : lang === "en" ? "en_US" : "ar_DZ",
    },
  };
}

export default async function Page({ params }: Props) {
  const { lang } = await params;
  if (!isLanguage(lang)) notFound();

  const seo = seoContent[lang];
  const description = seo.description;
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
        knowsAbout: seo.keywords,
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
      {
        "@type": "FAQPage",
        "@id": `${siteUrl}/${lang}#faq`,
        inLanguage: lang,
        mainEntity: seo.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      },
    ],
  };

  return (
    <>
      <JsonLd id="algofert-organization-schema" data={structuredData} />
      <HomePage initialLanguage={lang} faqSlot={<SeoFaq lang={lang} />} />
    </>
  );
}
