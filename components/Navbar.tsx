"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

import { useLanguage } from "@/components/LanguageProvider";
import type { Language } from "@/lib/i18n";

type NavbarProps = {
  logoSrc: string;
  languagePaths?: Record<Language, string>;
};

const navigation = [
  { key: "technology", href: "#technologie" },
  { key: "fieldTrials", href: "#terrain" },
  { key: "results", href: "#resultats" },
  { key: "products", href: "#produits" },
  { key: "team", href: "#equipe" },
] as const;

const languages: Language[] = ["fr", "ar", "en"];

export default function Navbar({ logoSrc, languagePaths }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const { language, setLanguage, t, isRTL } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-b border-white/10 bg-[#071d12]/92 shadow-[0_12px_40px_rgba(0,0,0,0.22)] backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <nav
        aria-label="Navigation principale"
        className="mx-auto flex min-h-[72px] w-full max-w-[1500px] items-center justify-between gap-2 px-3 sm:min-h-[82px] sm:gap-3 sm:px-5 lg:min-h-[94px] lg:px-10"
      >
        <Link
          href={`/${language}#accueil`}
          onClick={closeMenu}
          className="relative z-50 flex shrink-0 items-center"
          aria-label="Retour à l’accueil ALGOFERT-BIO"
        >
          <div className="flex h-[52px] w-[92px] items-center justify-center overflow-hidden sm:h-[66px] sm:w-[150px] lg:h-[88px] lg:w-[300px]">
            <Image
              src={logoSrc}
              alt="Logo ALGOFERT-BIO"
              width={520}
              height={200}
              priority
              className="h-[54px] w-[92px] scale-[1.16] object-contain object-center drop-shadow-[0_5px_16px_rgba(0,0,0,0.45)] sm:h-[72px] sm:w-[150px] sm:scale-[1.28] lg:h-[100px] lg:w-[300px] lg:scale-[1.5]"
            />
          </div>
        </Link>

        <div
          className={`hidden items-center gap-1 xl:flex ${
            isRTL ? "flex-row-reverse" : ""
          }`}
        >
          {navigation.map((item) => (
            <a
              key={item.href}
              href={`/${language}${item.href}`}
              className="rounded-full px-4 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:bg-white/10 hover:text-white"
            >
              {t.nav[item.key]}
            </a>
          ))}

          <a
            href={`/${language}#contact`}
            className="mx-3 inline-flex items-center justify-center rounded-full border border-[#e3bd42]/55 bg-[#e3bd42]/10 px-6 py-3 text-sm font-bold text-[#f0d36f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3bd42] hover:text-[#17351f]"
          >
            {t.nav.contact}
          </a>

          <div
            className="flex items-center rounded-full border border-white/15 bg-[#071d12]/55 p-1 backdrop-blur-md"
            aria-label="Sélection de la langue"
          >
            {languages.map((item) => (
              <Link
                key={item}
                href={languagePaths?.[item] ?? `/${item}`}
                onClick={() => setLanguage(item)}
                className={`rounded-full px-3 py-2 text-xs font-extrabold transition ${
                  language === item
                    ? "bg-[#e3bd42] text-[#17351f]"
                    : "text-white/65 hover:bg-white/10 hover:text-white"
                }`}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>
        </div>

        <div className="relative z-50 flex shrink-0 items-center gap-1.5 sm:gap-2 xl:hidden">
          <div className="flex items-center rounded-full border border-white/15 bg-[#071d12]/70 p-0.5 backdrop-blur-md sm:p-1">
            {languages.map((item) => (
              <Link
                key={item}
                href={languagePaths?.[item] ?? `/${item}`}
                onClick={() => setLanguage(item)}
                className={`rounded-full px-2 py-1.5 text-[10px] font-extrabold transition sm:px-2.5 sm:py-2 sm:text-[11px] ${
                  language === item
                    ? "bg-[#e3bd42] text-[#17351f]"
                    : "text-white/65"
                }`}
                aria-pressed={language === item}
              >
                {item.toUpperCase()}
              </Link>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((current) => !current)}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#071d12]/70 text-white backdrop-blur-md sm:h-12 sm:w-12"
            aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            aria-expanded={isMenuOpen}
          >
            <span className="sr-only">
              {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            </span>

            <span className="relative block h-4 w-5 sm:h-5 sm:w-6">
              <span
                className={`absolute left-0 top-0 h-0.5 w-5 sm:w-6 rounded-full bg-current transition duration-300 ${
                  isMenuOpen ? "translate-y-[7px] rotate-45 sm:translate-y-[9px]" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-[7px] sm:top-[9px] h-0.5 w-5 sm:w-6 rounded-full bg-current transition duration-300 ${
                  isMenuOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 h-0.5 w-5 sm:w-6 rounded-full bg-current transition duration-300 ${
                  isMenuOpen ? "-translate-y-[7px] -rotate-45 sm:-translate-y-[9px]" : ""
                }`}
              />
            </span>
          </button>
        </div>
      </nav>

      <div
        className={`absolute inset-x-0 top-0 z-40 min-h-screen bg-[#06170e]/98 px-6 pb-10 pt-28 backdrop-blur-xl transition duration-300 xl:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }`}
      >
        <div
          className={`mx-auto flex max-w-xl flex-col gap-3 ${
            isRTL ? "text-right" : "text-left"
          }`}
        >
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={`/${language}${item.href}`}
              onClick={closeMenu}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-lg font-bold text-white transition hover:bg-white/10"
            >
              <span>{t.nav[item.key]}</span>
              <span className="text-[#e3bd42]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}

          <a
            href={`/${language}#contact`}
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center rounded-2xl bg-[#e3bd42] px-6 py-5 text-lg font-extrabold text-[#17351f] transition hover:bg-[#efca54]"
          >
            {t.nav.contactMobile}
          </a>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3bd42]">
              ALGOFERT-BIO®
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
              {t.mobileIntro}
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
