"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

import LanguageProvider, { useLanguage } from "@/components/LanguageProvider";
import Navbar from "@/components/Navbar";
import type { Language } from "@/lib/i18n";
import {
  strategicPages,
  type StrategicPageContent,
} from "@/lib/strategic-pages";
import {
  strategicPath,
  type StrategicPageKey,
} from "@/lib/site";

const pageKeys: StrategicPageKey[] = ["investors", "partners", "research", "news"];

function StrategicPageContentView({
  page,
  pageKey,
}: {
  page: StrategicPageContent;
  pageKey: StrategicPageKey;
}) {
  const { language, isRTL } = useLanguage();
  const BackIcon = isRTL ? ArrowRight : ArrowLeft;

  return (
    <main className={`min-h-screen overflow-x-hidden bg-[#f7f3e8] text-[#17351f] ${isRTL ? "text-right" : "text-left"}`}>
      <Navbar
        logoSrc="/images/logo/logo-dark.png"
        languagePaths={{
          fr: strategicPath(pageKey, "fr"),
          en: strategicPath(pageKey, "en"),
          ar: strategicPath(pageKey, "ar"),
        }}
      />

      <section className="relative overflow-hidden bg-[#0b2e1d] px-6 pb-24 pt-40 text-white lg:px-10 lg:pb-32 lg:pt-48">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/terrain/chercheuse-culture.jpg"
            alt=""
            fill
            priority
            className="object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d12] via-[#071d12]/95 to-[#071d12]/65" />
        <div className="relative mx-auto max-w-7xl">
          <Link href={`/${language}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#f0d36f] transition hover:text-white">
            <BackIcon className="h-4 w-4" />
            ALGOFERT-BIO®
          </Link>
          <p className="mt-10 text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
            {page.eyebrow}
          </p>
          <h1 className="mt-6 max-w-5xl text-4xl font-black tracking-tight sm:text-6xl lg:text-7xl">
            {page.title}
          </h1>
          <p className="mt-8 max-w-3xl text-lg leading-8 text-white/75 sm:text-xl">
            {page.summary}
          </p>
        </div>
      </section>

      <section className="px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-6 lg:grid-cols-3">
            {page.highlights.map((item, index) => (
              <article key={item.title} className="rounded-3xl border border-[#17351f]/10 bg-white p-8 shadow-sm">
                <span className="text-sm font-black text-[#c4971b]">{String(index + 1).padStart(2, "0")}</span>
                <h2 className="mt-8 text-2xl font-extrabold">{item.title}</h2>
                <p className="mt-4 leading-7 text-[#5a685e]">{item.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-16 grid overflow-hidden rounded-[2rem] bg-[#102d1c] text-white lg:grid-cols-[1fr_0.9fr]">
            <div className="p-8 sm:p-12 lg:p-16">
              <h2 className="text-3xl font-extrabold sm:text-4xl">{page.needsTitle}</h2>
              <ul className="mt-8 space-y-4">
                {page.needs.map((need) => (
                  <li key={need} className="flex items-start gap-3 text-white/75">
                    <span className="mt-0.5 rounded-full bg-[#e3bd42] p-1 text-[#17351f]"><Check className="h-4 w-4" /></span>
                    <span className="leading-7">{need}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="relative min-h-80">
              <Image src="/images/packaging/gamme-algofert-bio.png" alt="Gamme ALGOFERT-BIO®" fill className="object-cover object-top" />
            </div>
          </div>

          <div className="mt-16 rounded-3xl border border-[#2e7d32]/15 bg-white p-8 sm:p-12">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#2e7d32]">ALGOFERT-BIO®</p>
            <h2 className="mt-5 text-3xl font-extrabold">{page.evidenceTitle}</h2>
            <p className="mt-5 max-w-4xl text-lg leading-8 text-[#536158]">{page.evidenceText}</p>
          </div>
        </div>
      </section>

      <section className="bg-[#17351f] px-6 py-24 text-white lg:px-10">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-black tracking-tight sm:text-5xl">{page.ctaTitle}</h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/70">{page.ctaText}</p>
          <a href="mailto:nassima.draou@univ-usto.dz?subject=ALGOFERT-BIO%20-%20Partenariat" className="mt-9 inline-flex rounded-full bg-[#e3bd42] px-8 py-4 font-extrabold text-[#17351f] transition hover:-translate-y-1 hover:bg-[#efca54]">
            {page.ctaLabel}
          </a>
        </div>
      </section>

      <section className="bg-white px-6 py-16 lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {pageKeys.map((key) => (
            <Link key={key} href={strategicPath(key, language)} className={`rounded-2xl border p-5 font-bold transition ${key === pageKey ? "border-[#2e7d32] bg-[#2e7d32] text-white" : "border-[#17351f]/10 bg-[#f7f3e8] hover:border-[#2e7d32]/40"}`}>
              {strategicPages[key][language].label}
            </Link>
          ))}
        </div>
      </section>

      <footer className="bg-[#081f13] px-6 py-10 text-sm text-white/55 lg:px-10">
        <div className="mx-auto flex max-w-7xl flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ALGOFERT-BIO®</p>
          <p>Département de Biotechnologie — USTO-MB</p>
          <Link href={`/${language}#contact`} className="font-bold text-[#e3bd42]">Contact</Link>
        </div>
      </footer>
    </main>
  );
}

export default function StrategicPage({
  language,
  pageKey,
}: {
  language: Language;
  pageKey: StrategicPageKey;
}) {
  return (
    <LanguageProvider key={language} initialLanguage={language}>
      <StrategicPageContentView page={strategicPages[pageKey][language]} pageKey={pageKey} />
    </LanguageProvider>
  );
}
