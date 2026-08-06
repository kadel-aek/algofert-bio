"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

type NavbarProps = {
  logoSrc: string;
};

const navigation = [
  { label: "Technologie", href: "#technologie" },
  { label: "Essais au champ", href: "#terrain" },
  { label: "Résultats", href: "#resultats" },
  { label: "Produits", href: "#produits" },
  { label: "Équipe", href: "#equipe" },
];

export default function Navbar({ logoSrc }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

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
        className="mx-auto flex min-h-[94px] w-full max-w-[1500px] items-center justify-between gap-6 px-6 lg:px-10"
      >
        {/* Logo */}
        <a
          href="#accueil"
          onClick={closeMenu}
          className="relative z-50 flex shrink-0 items-center"
          aria-label="Retour à l’accueil ALGOFERT-BIO"
        >
          <div className="flex h-[88px] w-[250px] items-center justify-center overflow-hidden sm:w-[290px] lg:w-[330px]">
            <Image
              src={logoSrc}
              alt="Logo ALGOFERT-BIO"
              width={520}
              height={200}
              priority
              className="h-[100px] w-[250px] scale-[1.6] object-contain object-center drop-shadow-[0_5px_16px_rgba(0,0,0,0.45)] sm:w-[290px] lg:w-[330px]"
            />
          </div>
        </a>

        {/* Navigation bureau */}
        <div className="hidden items-center gap-1 xl:flex">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-full px-4 py-3 text-sm font-semibold text-white/75 transition duration-300 hover:bg-white/10 hover:text-white"
            >
              {item.label}
            </a>
          ))}

          <a
            href="#contact"
            className="ml-3 inline-flex items-center justify-center rounded-full border border-[#e3bd42]/55 bg-[#e3bd42]/10 px-6 py-3 text-sm font-bold text-[#f0d36f] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e3bd42] hover:text-[#17351f]"
          >
            Contact
          </a>
        </div>

        {/* Bouton mobile */}
        <button
          type="button"
          onClick={() => setIsMenuOpen((current) => !current)}
          className="relative z-50 flex h-12 w-12 items-center justify-center rounded-full border border-white/15 bg-[#071d12]/70 text-white backdrop-blur-md xl:hidden"
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">
            {isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          </span>

          <span className="relative block h-5 w-6">
            <span
              className={`absolute left-0 top-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "translate-y-[9px] rotate-45" : ""
              }`}
            />

            <span
              className={`absolute left-0 top-[9px] h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "opacity-0" : "opacity-100"
              }`}
            />

            <span
              className={`absolute bottom-0 left-0 h-0.5 w-6 rounded-full bg-current transition duration-300 ${
                isMenuOpen ? "-translate-y-[9px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`absolute inset-x-0 top-0 z-40 min-h-screen bg-[#06170e]/98 px-6 pb-10 pt-28 backdrop-blur-xl transition duration-300 xl:hidden ${
          isMenuOpen
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-5 opacity-0"
        }`}
      >
        <div className="mx-auto flex max-w-xl flex-col gap-3">
          {navigation.map((item, index) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-5 text-lg font-bold text-white transition hover:bg-white/10"
            >
              <span>{item.label}</span>

              <span className="text-[#e3bd42]">
                {String(index + 1).padStart(2, "0")}
              </span>
            </a>
          ))}

          <a
            href="#contact"
            onClick={closeMenu}
            className="mt-3 flex items-center justify-center rounded-2xl bg-[#e3bd42] px-6 py-5 text-lg font-extrabold text-[#17351f] transition hover:bg-[#efca54]"
          >
            Nous contacter
          </a>

          <div className="mt-7 border-t border-white/10 pt-6">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#e3bd42]">
              ALGOFERT-BIO®
            </p>

            <p className="mt-3 max-w-sm text-sm leading-6 text-white/50">
              Biofertilisants microbiens PGPR issus de consortiums bactériens
              autochtones algériens.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}