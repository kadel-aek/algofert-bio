"use client";

import Image from "next/image";

type Step = {
  id: string;
  title: string;
  text: string;
};

const steps: Step[] = [
  {
    id: "01",
    title: "Inoculation",
    text: "Application du consortium sur la semence ou directement dans le sol.",
  },
  {
    id: "02",
    title: "Attraction chimique",
    text: "Les exsudats racinaires attirent les microorganismes bénéfiques.",
  },
  {
    id: "03",
    title: "Colonisation",
    text: "Adhésion des bactéries et formation d’un biofilm au niveau de la racine.",
  },
  {
    id: "04",
    title: "Stimulation",
    text: "Production de composés favorisant la nutrition, la protection et le développement.",
  },
  {
    id: "05",
    title: "Croissance",
    text: "Développement racinaire renforcé et amélioration des performances de la plante.",
  },
];

const indicators = [
  {
    title: "PGPR",
    text: "Consortiums microbiens",
  },
  {
    title: "Rhizosphère",
    text: "Interface sol-racine active",
  },
  {
    title: "Effet final",
    text: "Nutrition, protection et vigueur végétale",
  },
];

export default function RootColonizationGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-[#b9a44c]/20 bg-[rgba(7,37,24,0.72)] p-5 shadow-[0_20px_80px_rgba(0,0,0,0.28)] backdrop-blur-md md:p-6">
      {/* En-tête */}
      <div className="mb-5">
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.35em] text-[#e0c45b]">
          Interaction biologique
        </p>

        <h3 className="text-lg font-bold text-white md:text-xl">
          Colonisation de la rhizosphère
        </h3>

        <p className="mt-2 max-w-3xl text-sm leading-6 text-white/75">
          Visualisation simplifiée de la colonisation de la rhizosphère par les
          microorganismes bénéfiques.
        </p>
      </div>

      <div className="grid gap-5 xl:grid-cols-[0.95fr_1.35fr]">
        {/* Étapes biologiques */}
        <div className="rounded-[24px] border border-white/10 bg-[rgba(5,28,18,0.55)] p-4 md:p-5">
          <div className="space-y-4">
            {steps.map((step) => (
              <article
                key={step.id}
                className="flex gap-4 rounded-2xl border border-white/10 bg-white/[0.02] p-3"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#e0c45b]/50 bg-[#122d1d] text-sm font-bold text-[#f0d76e]">
                  {step.id}
                </div>

                <div className="min-w-0">
                  <h4 className="text-sm font-extrabold uppercase tracking-wide text-white">
                    {step.title}
                  </h4>

                  <p className="mt-1 text-xs leading-5 text-white/70 md:text-[13px]">
                    {step.text}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Illustration scientifique */}
        <div className="relative rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,#173f2a_0%,#0a2216_58%,#08190f_100%)] p-4 md:p-5">
          <div className="relative overflow-hidden rounded-[22px] border border-white/10 bg-[#06150d]">
            <Image
              src="/images/hero/algofert-root-hero.png"
              alt="Colonisation racinaire par les bactéries PGPR"
              width={900}
              height={900}
              priority
              sizes="(max-width: 1280px) 100vw, 55vw"
              className="h-[520px] w-full object-cover object-center"
            />

            {/* Zoom 1 */}
            <div className="absolute right-4 top-5 w-[160px] rounded-2xl border border-[#d8bf58]/35 bg-[rgba(8,19,13,0.88)] p-3 shadow-lg backdrop-blur-sm">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#f0d76e]">
                Zoom 1
              </p>

              <p className="mt-1 text-xs leading-5 text-white/85">
                Bactéries PGPR en suspension autour de la jeune racine.
              </p>
            </div>

            {/* Zoom 2 */}
            <div className="absolute right-4 top-1/2 w-[170px] -translate-y-1/2 rounded-2xl border border-[#d8bf58]/35 bg-[rgba(8,19,13,0.88)] p-3 shadow-lg backdrop-blur-sm">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#f0d76e]">
                Zoom 2
              </p>

              <p className="mt-1 text-xs leading-5 text-white/85">
                Formation d’un biofilm bactérien au contact de la racine.
              </p>
            </div>

            {/* Zoom 3 */}
            <div className="absolute bottom-5 right-4 w-[170px] rounded-2xl border border-[#d8bf58]/35 bg-[rgba(8,19,13,0.88)] p-3 shadow-lg backdrop-blur-sm">
              <p className="text-[11px] font-extrabold uppercase tracking-wide text-[#f0d76e]">
                Zoom 3
              </p>

              <p className="mt-1 text-xs leading-5 text-white/85">
                Colonisation au niveau des poils absorbants et de la zone
                racinaire.
              </p>
            </div>
          </div>

          {/* Indicateurs */}
          <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {indicators.map((indicator) => (
              <article
                key={indicator.title}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-3"
              >
                <p className="text-xs font-bold uppercase tracking-wide text-[#f0d76e]">
                  {indicator.title}
                </p>

                <p className="mt-1 text-xs leading-5 text-white/70">
                  {indicator.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}