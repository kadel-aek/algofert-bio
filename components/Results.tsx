"use client";

import Image from "next/image";

import Counter from "@/components/Counter";
import FadeIn from "@/components/FadeIn";
import { Card, Container, SectionTitle } from "@/components/ui";

const results = [
  {
    value: 357,
    title: "Rendement par épi",
    description:
      "Gain maximal observé avec le consortium R5 + RB4 par rapport au témoin non inoculé.",
  },
  {
    value: 184,
    title: "Nombre de grains par épi",
    description:
      "Progression maximale observée avec le consortium R5 + RB4 dans les conditions de l’essai.",
  },
  {
    value: 61,
    title: "Poids de mille grains",
    description:
      "Amélioration maximale du PMG observée avec le consortium R5 + RB4.",
  },
];

type ResultsProps = {
  chartSrc: string;
};

export default function Results({ chartSrc }: ResultsProps) {
  return (
    <section
      id="resultats"
      className="scroll-mt-20 overflow-hidden bg-[#eee9dc] py-24 lg:py-32"
    >
      <Container>
        <FadeIn>
          <SectionTitle
            eyebrow="Résultats expérimentaux"
            title="Des performances observées sur l’orge"
            description="Les valeurs présentées correspondent aux gains maximaux observés lors des essais comparatifs réalisés avec les consortiums ALGOFERT-BIO®."
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
                  <p className="flex items-start text-5xl font-black tracking-tight text-[#e3bd42] sm:text-6xl">
                    <Counter
                      value={result.value}
                      prefix="+"
                      suffix=" %"
                      duration={1800}
                    />
                  </p>

                  <div className="mt-7 h-px w-16 bg-gradient-to-r from-[#e3bd42] to-transparent" />

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
            <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-[#2e7d32]">
                  Analyse comparative
                </p>

                <h3 className="mt-2 text-2xl font-extrabold text-[#17351f]">
                  Nombre de grains par épi et poids de mille grains
                </h3>
              </div>

              <p className="max-w-sm text-sm leading-6 text-[#617066]">
                Témoin non inoculé comparé aux trois consortiums microbiens
                évalués au champ.
              </p>
            </div>

            <div className="overflow-hidden rounded-2xl bg-[#f5f6f3]">
              <Image
                src={chartSrc}
                alt="Résultats comparatifs ALGOFERT-BIO sur l’orge"
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
              Les résultats affichés correspondent aux conditions expérimentales
              des essais réalisés. Ils ne constituent pas une garantie de
              rendement identique dans toutes les parcelles ou conditions
              pédoclimatiques.
            </p>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}