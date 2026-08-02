import Image from "next/image";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Results from "@/components/Results";
import ContactForm from "@/components/ContactForm";

const assets = {
  logoDark: "/images/logo/logo-dark.png",

  packaging: "/images/packaging/gamme-algofert-bio.png",

  chercheuseDebout: "/images/terrain/chercheuse-debout.jpeg",
  chercheuseCulture: "/images/terrain/chercheuse-culture.jpg",

  rendementFr: "/images/essais/rendement-fr.jpg",
  plantesEntieres: "/images/essais/plantes-entieres.jpeg",
  comparaisonEpis: "/images/essais/comparaison-epis-recolte.jpeg",
  episVerts: "/images/essais/epis-verts.jpeg",
  flaconsBio: "/images/essais/flacons-bio.jpg",

  heroVideo: "/videos/hero-farmer.mp4",
  rootVideo: "/videos/root-colonization.mp4",
  soilVideo: "/videos/soil-degraded.mp4",
  fieldVideo: "/videos/field-pgpr.mp4",
  teamProductVideo: "/videos/team-product.mp4",
  fullFilm: "/videos/algofert-film.mp4",
};

const benefits = [
  {
    number: "01",
    title: "Consortiums microbiens PGPR",
    description:
      "Des associations complémentaires de bactéries autochtones sélectionnées pour leurs propriétés de biofertilisation, de biostimulation et de biocontrôle.",
  },
  {
    number: "02",
    title: "Recherche algérienne",
    description:
      "Une technologie développée au Département de Biotechnologie de l’USTO-MB à partir de microorganismes issus d’écosystèmes algériens.",
  },
  {
    number: "03",
    title: "Validation au champ",
    description:
      "Des essais sur orge réalisés en conditions réelles ont montré une amélioration significative de plusieurs composantes du rendement.",
  },
  {
    number: "04",
    title: "Agriculture durable",
    description:
      "Une solution biologique conçue pour accompagner les performances des cultures et contribuer à la préservation de la fertilité des sols.",
  },
];

const products = [
  {
    name: "Essentiel",
    consortium: "RB6 + R5",
    description:
      "Formulation associant des fonctions complémentaires de biostimulation et de biocontrôle.",
    accent: "text-[#75c45b]",
    border: "border-[#75c45b]/30",
  },
  {
    name: "Performance",
    consortium: "RB4 + RB6",
    description:
      "Formulation associant notamment la solubilisation du phosphore et une activité antifongique.",
    accent: "text-[#58a7df]",
    border: "border-[#58a7df]/30",
  },
  {
    name: "Excellence",
    consortium: "R5 + RB4",
    description:
      "Formulation ayant présenté les meilleurs résultats expérimentaux sur plusieurs paramètres.",
    accent: "text-[#e0b43d]",
    border: "border-[#e0b43d]/30",
  },
];

const technologyFunctions = [
  {
    title: "Biostimulation",
    description: "Développement végétatif et racinaire.",
  },
  {
    title: "Biofertilisation",
    description: "Fonctions liées à la nutrition des plantes.",
  },
  {
    title: "Biocontrôle",
    description: "Potentiel biologique contre certains agents nuisibles.",
  },
  {
    title: "Souches autochtones",
    description: "Microorganismes issus d’écosystèmes algériens.",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-[#f7f3e8] text-[#17351f]">
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
              Notre technologie
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              La puissance des microorganismes bénéfiques
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#4c5f51]">
              ALGOFERT-BIO® repose sur des consortiums de bactéries
              rhizosphériques promotrices de la croissance des plantes,
              sélectionnées pour leurs fonctions complémentaires.
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
              Du sol fragilisé à la culture vigoureuse
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Une réponse biologique développée pour les cultures
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
                  Le défi
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Sols et cultures soumis au stress
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  La diminution de la fertilité biologique peut limiter le
                  développement racinaire et les performances agronomiques.
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
                  La solution
                </p>

                <h3 className="mt-3 text-2xl font-bold">
                  Des cultures accompagnées par les PGPR
                </h3>

                <p className="mt-4 leading-7 text-white/65">
                  Les consortiums sont développés pour soutenir les interactions
                  bénéfiques entre les racines, le sol et les microorganismes.
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
                Suivi des essais dans une parcelle agricole algérienne.
              </p>
            </div>

            <div>
              <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
                Technologie évaluée au champ
              </p>

              <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
                Des essais réalisés en conditions réelles
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#536158]">
                Les formulations ont été évaluées sur orge en conditions de
                culture pluviale afin d’étudier leur effet sur le développement
                végétatif et les composantes du rendement.
              </p>

              <ul className="mt-8 space-y-4 text-[#34483a]">
                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ Culture pluviale
                </li>

                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ Conditions semi-arides
                </li>

                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ Témoin non inoculé
                </li>

                <li className="rounded-2xl bg-[#f2f5ef] px-5 py-4">
                  ✓ Mesures agronomiques et analyses statistiques
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

      {/* Preuves visuelles */}
      <section className="bg-[#102d1c] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
            Preuves visuelles
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Des différences visibles sur les plantes et les épis
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
                <h3 className="text-xl font-bold">Plantes entières</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Comparaison du développement aérien et racinaire.
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
                <h3 className="text-xl font-bold">Épis verts</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Observation des différences de longueur et de formation.
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
                <h3 className="text-xl font-bold">Épis à maturité</h3>

                <p className="mt-3 text-sm leading-6 text-white/60">
                  Comparaison du témoin et des trois consortiums.
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
            Pourquoi ALGOFERT-BIO® ?
          </p>

          <h2 className="mt-5 max-w-3xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            Une innovation scientifique pensée pour le terrain
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
          <div className="overflow-hidden rounded-3xl bg-[#eff3ec] p-6">
            <Image
              src={assets.flaconsBio}
              alt="Préparations expérimentales des consortiums"
              width={900}
              height={600}
              className="h-auto w-full rounded-2xl"
            />
          </div>

          <div>
            <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#2e7d32]">
              Du laboratoire au champ
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Des formulations préparées et évaluées
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#536158]">
              Les consortiums ont été préparés, formulés sur support solide puis
              évalués dans le cadre des essais expérimentaux
              d’ALGOFERT-BIO®.
            </p>

            <div className="mt-8 space-y-4">
              <div className="rounded-2xl border border-[#2e7d32]/10 bg-[#f2f5ef] px-5 py-4">
                Culture et concentration de la biomasse bactérienne
              </div>

              <div className="rounded-2xl border border-[#2e7d32]/10 bg-[#f2f5ef] px-5 py-4">
                Incorporation sur un support solide stérilisé
              </div>

              <div className="rounded-2xl border border-[#2e7d32]/10 bg-[#f2f5ef] px-5 py-4">
                Contrôle de la viabilité et de la pureté microbiologique
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
              De la recherche au produit
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Une technologie développée par une équipe scientifique algérienne
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#536158]">
              ALGOFERT-BIO® est développé par Pr SELAMI Nawel et Dr DRAOU
              Nassima, au Département de Biotechnologie de l’USTO-MB, depuis la
              sélection des microorganismes jusqu’à la formulation et aux
              essais au champ.
            </p>

            <div className="mt-8 rounded-2xl border border-[#2e7d32]/15 bg-white/60 px-5 py-4">
              <p className="text-sm font-semibold leading-6 text-[#34483a]">
                Recherche microbiologique, formulation, validation expérimentale
                et préparation du transfert technologique.
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
              Notre gamme
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Trois consortiums complémentaires
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
                  Consortium : {product.consortium}
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
              Porteuses du projet
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Une innovation portée par le Département de Biotechnologie
            </h2>

            <p className="mt-6 text-lg leading-8 text-[#536158]">
              ALGOFERT-BIO® est porté par Pr SELAMI Nawel et Dr DRAOU Nassima,
              enseignantes-chercheuses au Département de Biotechnologie de
              l’Université des Sciences et de la Technologie Mohamed Boudiaf
              d’Oran.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2">
            <article className="rounded-3xl bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#c4971b]">
                Porteuse du projet
              </p>

              <h3 className="mt-5 text-3xl font-extrabold">
                Pr SELAMI Nawel
              </h3>

              <p className="mt-3 text-[#5a685e]">
                Département de Biotechnologie — USTO-MB
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
                Porteuse du projet
              </p>

              <h3 className="mt-5 text-3xl font-extrabold">
                Dr DRAOU Nassima
              </h3>

              <p className="mt-3 text-[#5a685e]">
                Département de Biotechnologie — USTO-MB
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

      {/* Innovation et maturation */}
      <section className="bg-[#17351f] px-6 py-24 text-white lg:px-10 lg:py-32">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
            Innovation et maturation
          </p>

          <h2 className="mx-auto mt-6 max-w-4xl text-4xl font-extrabold tracking-tight sm:text-5xl">
            De la recherche universitaire vers une solution agricole
            industrialisable
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-8 text-white/70">
            Le projet poursuit sa maturation technologique, son développement
            réglementaire et la préparation de sa production pilote.
          </p>

          <div className="mt-8 inline-flex rounded-full border border-[#e3bd42]/40 bg-[#e3bd42]/10 px-6 py-3 font-semibold text-[#f0d36f]">
            Demande de brevet déposée auprès de l’INAPI
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
              Contact et partenariat
            </p>

            <h2 className="mt-5 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Construisons ensemble l’agriculture de demain
            </h2>

            <p className="mt-6 max-w-xl text-lg leading-8 text-[#536158]">
              ALGOFERT-BIO® recherche des partenaires scientifiques, agricoles,
              techniques, industriels et financiers pour accompagner sa
              maturation, sa production pilote et sa future mise sur le marché.
            </p>

            <div className="mt-10 space-y-4">
              <div className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-sm font-bold uppercase tracking-[0.2em] text-[#c4971b]">
                  Porteuses du projet
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
                  Département de Biotechnologie
                  <br />
                  Université des Sciences et de la Technologie Mohamed Boudiaf
                  d’Oran — USTO-MB
                </p>
              </div>

              <div className="rounded-2xl bg-[#17351f] p-6 text-white">
                <p className="font-bold">Partenariats recherchés</p>

                <p className="mt-3 text-sm leading-6 text-white/65">
                  Exploitations agricoles, industriels, distributeurs,
                  investisseurs, structures de contrôle, laboratoires et
                  organismes de financement.
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
              Projet de développement d’une gamme de biofertilisants microbiens
              PGPR à base de consortiums bactériens autochtones algériens.
            </p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-7">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#e3bd42]">
              Porteuses du projet
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
                Département de Biotechnologie
              </p>

              <p className="mt-2 text-sm leading-6 text-white/50">
                Université des Sciences et de la Technologie Mohamed Boudiaf
                d’Oran
                <br />
                USTO-MB — Oran, Algérie
              </p>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-12 flex max-w-7xl flex-col gap-3 border-t border-white/10 pt-7 text-xs text-white/35 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ALGOFERT-BIO®. Tous droits réservés.</p>

          <p>Projet accompagné par l’Incubateur USTO-MB</p>
        </div>
      </footer>
    </main>
  );
}