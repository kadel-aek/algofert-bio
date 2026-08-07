import type { Metadata } from "next";
import { notFound } from "next/navigation";

import HomePage from "@/components/HomePage";
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
  return <HomePage initialLanguage={lang} />;
}
