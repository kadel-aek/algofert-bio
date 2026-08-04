"use client";

import Image from "next/image";

import Counter from "@/components/Counter";
import FadeIn from "@/components/FadeIn";
import { useLanguage } from "@/components/LanguageProvider";
import { Card, Container, SectionTitle } from "@/components/ui";

type ResultsProps = {
  chartSrc: string;
};

export default function Results({ chartSrc }: ResultsProps) {
  const { t, isRTL } = useLanguage();
  const results = t.page.results.cards;

  return (
    <section
      id="resultats"
      className="scroll-mt-20 overflow-hidden bg-[#eee9dc] py-24 lg:py-32"
    >
      <Container className={isRTL ? "text-right" : "text-left"}>
        <FadeIn>
          <SectionTitle
            eyebrow={t.page.results.eyebrow}
            title={t.page.results.title}
            description={t.page.results.description}
          />
        </FadeIn>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {results.map((result, index) => (
            <FadeIn key={result.title} delay={index * 0.12} y={40}>
              <Card
                theme="dark"
                className="group relative h-full overflow-hidden p-8"
              >
                <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#75c45b]/10 blur-3xl transition duration-500 group-hover:bg-[#75c45b]/20" />

                <div className="relative z-10">
                  <p
                    className={`flex items-start text-5xl font-black tracking-tight text-[#e3bd42] sm:text-6xl ${
                      isRTL ? "justify-end" : "justify-start"
                    }`}
                  >
                    <Counter
                      value={result.value}
                      prefix="+"
                      suffix=" %"
                      duration={1800}
                    />
                  </p>

                  <div
                    className={`mt-7 h-px w-16 bg-gradient-to-r from-[#e3bd42] to-transparent ${
                      isRTL ? "mr-0 ml-auto rotate-180" : ""
                    }`}
                  />

                  <h3 className="mt-7 text-2xl font-extrabold text-white">
                    {result.title}
                  </h3>

                  <p className="mt-4 text-sm leading-7 text-white/60">
                    {result.description}
                  </p>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-14" y={50}>
          <div className="overflow-hidden rounded-[2rem] border border-[#17351f]/10 bg-white p-4 shadow-2xl shadow-[#17351f]/10 sm:p-8">
            <div
              className={`mb-6 flex flex-col gap-3 sm:items-end sm:justify-between ${
                isRTL ? "sm:flex-row-reverse" : "sm:flex-row"
              }`}
            >
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2e7d32]">
                  {t.page.results.analysisEyebrow}
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-[#17351f]">
                  {t.page.results.analysisTitle}
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#617066]">
                {t.page.results.analysisDescription}
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#f5f6f3]">
              <Image
                src={chartSrc}
                alt={t.page.results.chartAlt}
                width={1600}
                height={1400}
                className="h-auto w-full"
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn className="mt-8" delay={0.15}>
          <div className="rounded-2xl border border-[#2e7d32]/15 bg-[#2e7d32]/5 px-6 py-5">
            <p className="text-sm leading-7 text-[#445548]">
              {t.page.results.disclaimer}
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
