import Link from "next/link";

import { seoContent } from "@/lib/seo";
import { strategicPages } from "@/lib/strategic-pages";
import { strategicPath } from "@/lib/site";
import type { Language } from "@/lib/i18n";

/** Section FAQ rendue côté serveur : le texte est visible par Google. */
export default function SeoFaq({ lang }: { lang: Language }) {
  const { faqTitle, faq } = seoContent[lang];

  return (
    <section
      aria-labelledby="faq-title"
      dir={lang === "ar" ? "rtl" : "ltr"}
      className="bg-[#f7f3e8] px-6 py-16 text-[#17351f] lg:px-10"
    >
      <div className="mx-auto max-w-4xl">
        <h2 id="faq-title" className="text-2xl font-bold lg:text-3xl">
          {faqTitle}
        </h2>
        <div className="mt-8 space-y-4">
          {faq.map((item) => (
            <details
              key={item.q}
              className="rounded-2xl border border-[#17351f]/10 bg-white/60 p-5"
            >
              <summary className="cursor-pointer font-semibold">
                {item.q}
              </summary>
              <p className="mt-3 leading-7 text-[#17351f]/80">{item.a}</p>
            </details>
          ))}
        </div>
        <nav className="mt-8 flex flex-wrap gap-3">
          {(["biofertilizers", "biocontrol"] as const).map((key) => (
            <Link
              key={key}
              href={strategicPath(key, lang)}
              className="rounded-full border border-[#2e7d32]/30 bg-white px-5 py-2 text-sm font-bold text-[#2e7d32] transition hover:bg-[#2e7d32] hover:text-white"
            >
              {strategicPages[key][lang].label}
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
