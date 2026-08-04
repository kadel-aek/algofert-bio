"use client";

import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import ContactForm from "@/components/ContactForm";
import { useLanguage } from "@/components/LanguageProvider";

const assets = {
  logoDark: "/images/logo/logo-dark.png",

  packaging: "/images/packaging/gamme-algofert-bio.png",

  chercheuseDebout: "/images/terrain/chercheuse-debout.jpeg",
  chercheuseCulture: "/images/terrain/chercheuse-culture.jpg",

  rendementFr: "/images/essais/rendement-fr.jpg",
  plantesEntieres: "/images/essais/plantes-entieres.jpeg",
  comparaisonEpis: "/images/essais/comparaison-epis-recolte.jpeg",
  episVerts: "/images/essais/epis-verts.jpeg",
  consortiumsOrge: "/images/laboratoire/consortiums-orge.jpeg",
  consortiumsTomate: "/images/laboratoire/consortiums-tomate.jpeg",

  heroVideo: "/videos/hero-farmer.mp4",
  rootVideo: "/videos/root-colonization.mp4",
  soilVideo: "/videos/soil-degraded.mp4",
  fieldVideo: "/videos/field-pgpr.mp4",
  teamProductVideo: "/videos/team-product.mp4",
  fullFilm: "/videos/algofert-film.mp4",
};

export default function Home() {
  const { t, isRTL } = useLanguage();
  const benefits = t.page.benefits;
  const products = t.page.products;
  const technologyFunctions = t.page.technology.functions;

  return (
    <main className={`min-h-screen overflow-x-hidden bg-[#f7f3e8] text-[#17351f] ${isRTL ? "text-right" : "text-left"}`}>
      {/* Navigation */}
      <Navbar logoSrc={assets.logoDark} />

      {/* Hero */}
      <Hero heroVideo={assets.heroVideo} fullFilm={assets.fullFilm} />

      {/* Technologie */}
      <section
        id="technologie"
        className="scroll-mt-20 px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
              {t.page.technology.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.technology.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#4c5f51]">
              {t.page.technology.description}
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {technologyFunctions.map((item) => (
                <article
                  key={item.title}
                  className="rounded-2xl bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <h3 className="font-bold">{item.title}</h3>

                  <p className="mt-2 text-sm leading-6 text-[#617066]">
                    {item.description}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl bg-[#153c26] shadow-2xl">
            <video
              className="aspect-video w-full object-cover"
              muted
              loop
              playsInline
              controls
              preload="metadata"
            >
              <source src={assets.rootVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Problème et solution */}
      <section className="bg-[#102d1c] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
              {t.page.problem.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.problem.title}
            </h2>
          </div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2">
            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1">
              <video
                className="aspect-video w-full object-cover"
                muted
                loop
                playsInline
                controls
                preload="metadata"
              >
                <source src={assets.soilVideo} type="video/mp4" />
              </video>

              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e3bd42]">
                  {t.page.problem.challengeLabel}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {t.page.problem.challengeTitle}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {t.page.problem.challengeDescription}
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 transition duration-300 hover:-translate-y-1">
              <video
                className="aspect-video w-full object-cover"
                muted
                loop
                playsInline
                controls
                preload="metadata"
              >
                <source src={assets.fieldVideo} type="video/mp4" />
              </video>

              <div className="p-7">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#e3bd42]">
                  {t.page.problem.solutionLabel}
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  {t.page.problem.solutionTitle}
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  {t.page.problem.solutionDescription}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Essais au champ */}
      <section
        id="terrain"
        className="scroll-mt-20 bg-white px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="relative overflow-hidden rounded-3xl">
              <Image
                src={assets.chercheuseDebout}
                alt="Suivi d’une parcelle expérimentale ALGOFERT-BIO"
                width={900}
                height={1200}
                className="h-[620px] w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-[#0b2e1d]/75 via-transparent to-transparent" />

              <p className="absolute bottom-6 left-6 max-w-md text-sm font-medium leading-6 text-white">
                {t.page.field.caption}
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
                {t.page.field.eyebrow}
              </p>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {t.page.field.title}
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#536158]">
                {t.page.field.description}
              </p>

              <ul className="mt-8 space-y-4 text-[#34483a]">
                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ {t.page.field.items[0]}
                </li>

                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ {t.page.field.items[1]}
                </li>

                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ {t.page.field.items[2]}
                </li>

                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ {t.page.field.items[3]}
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-14 overflow-hidden rounded-3xl shadow-xl shadow-black/10">
            <Image
              src={assets.chercheuseCulture}
              alt="Champ expérimental d’orge à El-Guettar, Relizane — 36°04'10.3&quot;N 0°48'39.7&quot;E"
              width={1536}
              height={1024}
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      {/* {t.page.visual.eyebrow} */}
      <section className="bg-[#102d1c] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
            {t.page.visual.eyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.page.visual.title}
          </h2>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <article className="overflow-hidden rounded-3xl bg-white/5 transition duration-300 hover:-translate-y-1">
              <Image
                src={assets.plantesEntieres}
                alt="Comparaison de plantes entières"
                width={900}
                height={1200}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{t.page.visual.cards[0].title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {t.page.visual.cards[0].description}
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white/5 transition duration-300 hover:-translate-y-1">
              <Image
                src={assets.episVerts}
                alt="Comparaison d’épis verts"
                width={900}
                height={1200}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{t.page.visual.cards[1].title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {t.page.visual.cards[1].description}
                </p>
              </div>
            </article>

            <article className="overflow-hidden rounded-3xl bg-white/5 transition duration-300 hover:-translate-y-1">
              <Image
                src={assets.comparaisonEpis}
                alt="Comparaison des épis à la récolte"
                width={900}
                height={1200}
                className="h-96 w-full object-cover"
              />

              <div className="p-6">
                <h3 className="text-xl font-bold">{t.page.visual.cards[2].title}</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  {t.page.visual.cards[2].description}
                </p>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* Avantages */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
            {t.page.benefitsEyebrow}
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.page.benefitsTitle}
          </h2>

          <div className="mt-16 grid gap-px overflow-hidden rounded-3xl bg-[#dfe5de] md:grid-cols-2">
            {benefits.map((benefit) => (
              <article
                key={benefit.number}
                className="bg-white p-8 transition duration-300 hover:bg-[#f8faf6] sm:p-10"
              >
                <span className="text-sm font-bold text-[#c4971b]">
                  {benefit.number}
                </span>

                <h3 className="mt-8 text-2xl font-bold">{benefit.title}</h3>

                <p className="mt-4 leading-7 text-[#5a685e]">
                  {benefit.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Résultats */}
      <Results chartSrc={assets.rendementFr} />

      {/* Formulations expérimentales */}
      <section className="bg-white px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="overflow-hidden rounded-3xl bg-[#eff3ec] p-4">
              <Image
                src={assets.consortiumsOrge}
                alt="Essais en pots des consortiums bactériens sur orge"
                width={1080}
                height={810}
                className="h-[420px] w-full rounded-2xl object-contain object-center"
              />
            </div>

            <div className="overflow-hidden rounded-3xl bg-[#eff3ec] p-4">
              <Image
                src={assets.consortiumsTomate}
                alt="Essais en pots des consortiums bactériens sur tomate"
                width={608}
                height={1080}
                className="h-[420px] w-full rounded-2xl object-contain object-center"
              />
            </div>
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
              {t.page.formulations.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.formulations.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#536158]">
              {t.page.formulations.description}
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#2e7d32]/10 bg-[#f2f5ef] px-5 py-4">
                {t.page.formulations.steps[0]}
              </div>

              <div className="rounded-2xl border border-[#2e7d32]/10 bg-[#f2f5ef] px-5 py-4">
                {t.page.formulations.steps[1]}
              </div>

              <div className="rounded-2xl border border-[#2e7d32]/10 bg-[#f2f5ef] px-5 py-4">
                {t.page.formulations.steps[2]}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vidéo équipe et produit */}
      <section className="bg-[#f0ecdf] px-6 py-24 lg:px-10 lg:py-32">
        <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
              {t.page.teamProduct.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.teamProduct.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#536158]">
              {t.page.teamProduct.description}
            </p>

            <div className="mt-8 rounded-2xl border border-[#2e7d32]/15 bg-white/60 px-5 py-4">
              <p className="text-sm font-semibold leading-6 text-[#34483a]">
                {t.page.teamProduct.note}
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-3xl border border-[#17351f]/10 bg-[#102d1c] shadow-2xl shadow-black/15">
            <video
              className="aspect-video w-full object-cover"
              muted
              loop
              playsInline
              controls
              preload="metadata"
            >
              <source src={assets.teamProductVideo} type="video/mp4" />
            </video>
          </div>
        </div>
      </section>

      {/* Produits */}
      <section
        id="produits"
        className="scroll-mt-20 bg-[#102d1c] px-6 py-24 text-white lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
              {t.page.productsSection.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.productsSection.title}
            </h2>
          </div>

          <div className="mx-auto mt-12 max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-white p-3 shadow-2xl shadow-black/20 sm:p-5">
            <Image
              src={assets.packaging}
              alt="Présentation de la gamme ALGOFERT-BIO®"
              width={1600}
              height={1000}
              className="h-[460px] w-full rounded-2xl object-cover object-top sm:h-[540px]"
            />
          </div>

          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {products.map((product) => (
              <article
                key={product.name}
                className={`rounded-3xl border ${product.border} bg-white/5 p-7 transition duration-300 hover:-translate-y-1 hover:bg-white/[0.08]`}
              >
                <p
                  className={`text-sm font-bold uppercase tracking-[0.25em] ${product.accent}`}
                >
                  ALGOFERT-BIO®
                </p>

                <h3 className="mt-4 text-3xl font-extrabold">
                  {product.name}
                </h3>

                <p className="mt-4 font-semibold text-white/80">
                  {t.page.productsSection.consortiumLabel} : {product.consortium}
                </p>

                <p className="mt-4 text-sm leading-6 text-white/60">
                  {product.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe */}
      <section
        id="equipe"
        className="scroll-mt-20 bg-[#f7f3e8] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
              {t.page.team.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.team.title}
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#536158]">
              {t.page.team.description}
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c4971b]">
                {t.page.team.cardLabel}
              </p>

              <h3 className="mt-5 text-3xl font-extrabold">
                Pr SELAMI Nawel
              </h3>

              <p className="mt-3 text-[#5a685e]">
                {t.page.team.departmentShort}
              </p>

              <a
                href="mailto:nawel.selami@univ-usto.dz"
                className="mt-5 inline-block font-semibold text-[#2e7d32] transition hover:underline"
              >
                nawel.selami@univ-usto.dz
              </a>
            </article>

            <article className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c4971b]">
                {t.page.team.cardLabel}
              </p>

              <h3 className="mt-5 text-3xl font-extrabold">
                Dr DRAOU Nassima
              </h3>

              <p className="mt-3 text-[#5a685e]">
                {t.page.team.departmentShort}
              </p>

              <a
                href="mailto:nassima.draou@univ-usto.dz"
                className="mt-5 inline-block font-semibold text-[#2e7d32] transition hover:underline"
              >
                nassima.draou@univ-usto.dz
              </a>
            </article>
          </div>
        </div>
      </section>

      {/* {t.page.innovation.eyebrow} */}
      <section className="bg-[#17351f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
            {t.page.innovation.eyebrow}
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            {t.page.innovation.title}
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            {t.page.innovation.description}
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[#e3bd42]/40 bg-[#e3bd42]/10 px-6 py-3 font-semibold text-[#f0d36f]">
            {t.page.innovation.badge}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section
        id="contact"
        className="scroll-mt-20 bg-[#f7f3e8] px-6 py-24 lg:px-10 lg:py-32"
      >
        <div className="mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
              {t.page.contact.eyebrow}
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              {t.page.contact.title}
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#536158]">
              {t.page.contact.description}
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4971b]">
                  {t.page.team.eyebrow}
                </p>

                <div className="mt-5 space-y-5">
                  <div>
                    <p className="font-bold">Pr SELAMI Nawel</p>

                    <a
                      href="mailto:nawel.selami@univ-usto.dz"
                      className="mt-1 inline-block text-sm text-[#2e7d32] transition hover:underline"
                    >
                      nawel.selami@univ-usto.dz
                    </a>
                  </div>

                  <div>
                    <p className="font-bold">Dr DRAOU Nassima</p>

                    <a
                      href="mailto:nassima.draou@univ-usto.dz"
                      className="mt-1 inline-block text-sm text-[#2e7d32] transition hover:underline"
                    >
                      nassima.draou@univ-usto.dz
                    </a>
                  </div>
                </div>

                <p className="mt-5 text-sm leading-6 text-[#617066]">
                  {t.page.footer.department}
                  <br />
                  {t.page.footer.university}
                  d’Oran — USTO-MB
                </p>
              </div>

              <div className="rounded-2xl bg-[#17351f] p-6 text-white">
                <p className="font-bold">{t.page.contact.partnersTitle}</p>

                <p 
				  className={`mt-3 text-white/70 ${
				   isRTL
                     ? "text-lg leading-8"
                     : "text-sm leading-6"
                  }`}
                >
                  {t.page.contact.partnersDescription}
                  
                </p>
              </div>
            </div>
          </div>

          <ContactForm />
        </div>
      </section>

      {/* Pied de page */}
      <footer className="bg-[#081f13] px-6 py-14 text-white lg:px-10">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <Image
              src={assets.logoDark}
              alt="Logo ALGOFERT-BIO"
              width={260}
              height={110}
              className="h-16 w-auto rounded-xl object-contain"
            />

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/60">
              Né de la recherche algérienne. Au service de l’agriculture
              durable.
            </p>

            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">
              {t.page.footer.description}
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
              {t.page.team.eyebrow}
            </p>

            <div className="mt-6 space-y-5">
              <div>
                <p className="text-lg font-bold">Pr SELAMI Nawel</p>

                <a
                  href="mailto:nawel.selami@univ-usto.dz"
                  className="mt-1 block text-sm text-white/55 transition hover:text-white"
                >
                  nawel.selami@univ-usto.dz
                </a>
              </div>

              <div>
                <p className="text-lg font-bold">Dr DRAOU Nassima</p>

                <a
                  href="mailto:nassima.draou@univ-usto.dz"
                  className="mt-1 block text-sm text-white/55 transition hover:text-white"
                >
                  nassima.draou@univ-usto.dz
                </a>
              </div>
            </div>

            <div className="mt-7 border-t border-white/10 pt-6">
              <p className="text-sm font-semibold text-white/80">
                {t.page.footer.department}
              </p>

              <p className="mt-2 text-sm leading-6 text-white/50">
                {t.page.footer.university}
                d’Oran
                <br />
                USTO-MB — Oran, Algérie
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>{t.page.footer.copyright}</p>

          <p>{t.page.footer.incubator}</p>
        </div>
      </footer>
    </main>
  );
}