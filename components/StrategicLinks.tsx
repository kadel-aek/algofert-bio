"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import { useLanguage } from "@/components/LanguageProvider";
import {
  strategicPages,
  strategicSectionCopy,
} from "@/lib/strategic-pages";
import { strategicPath, type StrategicPageKey } from "@/lib/site";

const pageKeys: StrategicPageKey[] = [
  "investors",
  "partners",
  "research",
  "news",
];

export default function StrategicLinks() {
  const { language, isRTL } = useLanguage();
  const copy = strategicSectionCopy[language];

  return (
    <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
      <div className={`mx-auto max-w-7xl ${isRTL ? "text-right" : "text-left"}`}>
        <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
          {copy.eyebrow}
        </p>
        <h2 className="mt-5 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
          {copy.title}
        </h2>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-[#536158]">
          {copy.text}
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {pageKeys.map((key) => {
            const page = strategicPages[key][language];
            return (
              <Link
                key={key}
                href={strategicPath(key, language)}
                className="group flex min-h-64 flex-col justify-between rounded-3xl border border-[#17351f]/10 bg-[#f7f3e8] p-7 transition duration-300 hover:-translate-y-1 hover:border-[#2e7d32]/30 hover:shadow-xl"
              >
                <div>
                  <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4971b]">
                    {page.label}
                  </p>
                  <h3 className="mt-5 text-2xl font-extrabold text-[#17351f]">
                    {page.title}
                  </h3>
                </div>
                <span className="mt-8 inline-flex items-center gap-2 font-bold text-[#2e7d32]">
                  {copy.discover}
                  <ArrowUpRight className="h-5 w-5 transition group-hover:translate-x-1 group-hover:-translate-y-1" />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
