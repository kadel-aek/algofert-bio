import type { Language } from "@/lib/i18n";

/**
 * Contenu SEO par langue : titre, description, mots-clés et FAQ.
 * Les termes ciblés : bioangrais / bio-engrais, biopesticide(s), أسمدة بيولوجية.
 */
type SeoContent = {
  title: string;
  description: string;
  keywords: string[];
  faqTitle: string;
  faq: { q: string; a: string }[];
};

export const seoContent: Record<Language, SeoContent> = {
  fr: {
    title: "ALGOFERT-BIO® — Bio-engrais et biofertilisants PGPR algériens",
    description:
      "ALGOFERT-BIO® : bio-engrais (bioangrais) et biofertilisants microbiens PGPR issus de bactéries autochtones algériennes. Alternative naturelle aux engrais chimiques, avec activité de biocontrôle. Essais réels sur orge, Oran, Algérie.",
    keywords: [
      "bioangrais",
      "bio-angrais",
      "bio engrais",
      "bio-engrais",
      "biofertilisant",
      "biofertilisants",
      "engrais biologique",
      "engrais biologique Algérie",
      "biopesticide",
      "biopesticides",
      "biocontrôle",
      "PGPR",
      "rhizobactéries",
      "biostimulant",
      "agriculture durable Algérie",
      "ALGOFERT-BIO",
    ],
    faqTitle: "Questions fréquentes sur les bio-engrais ALGOFERT-BIO®",
    faq: [
      {
        q: "Qu'est-ce qu'un bio-engrais (bioangrais) ?",
        a: "Un bio-engrais, ou biofertilisant, est un produit à base de microorganismes vivants bénéfiques qui favorisent la nutrition et la croissance des plantes. ALGOFERT-BIO® utilise des consortiums de bactéries PGPR autochtones algériennes, sélectionnées pour leurs fonctions complémentaires.",
      },
      {
        q: "ALGOFERT-BIO® est-il un biopesticide ?",
        a: "ALGOFERT-BIO® est avant tout un biofertilisant et biostimulant. Ses souches PGPR sont également étudiées pour leur activité de biocontrôle, c'est-à-dire la protection naturelle des plantes, sans recours aux pesticides chimiques.",
      },
      {
        q: "Quelle différence entre bio-engrais et engrais chimique ?",
        a: "Un engrais chimique apporte directement des éléments minéraux. Un bio-engrais installe des bactéries vivantes dans la rhizosphère pour améliorer la disponibilité des nutriments, le développement racinaire et la santé du sol, dans une logique d'agriculture durable.",
      },
      {
        q: "Où trouver des bio-engrais en Algérie ?",
        a: "ALGOFERT-BIO® est développé à l'Université des Sciences et de la Technologie d'Oran (USTO-MB). Pour toute demande de partenariat, d'essai ou d'information, utilisez le formulaire de contact du site.",
      },
    ],
  },
  en: {
    title: "ALGOFERT-BIO® — Bio-fertilizers and PGPR biofertilizers from Algeria",
    description:
      "ALGOFERT-BIO®: microbial PGPR bio-fertilizers (biofertilisers) made from native Algerian bacterial consortia. A natural alternative to chemical fertilizers, with biocontrol activity. Field trials on barley, Oran, Algeria.",
    keywords: [
      "biofertilizer",
      "biofertiliser",
      "bio-fertilizer",
      "organic fertilizer Algeria",
      "biopesticide",
      "biopesticides",
      "biocontrol",
      "PGPR",
      "plant growth promoting rhizobacteria",
      "biostimulant",
      "sustainable agriculture Algeria",
      "ALGOFERT-BIO",
    ],
    faqTitle: "Frequently asked questions about ALGOFERT-BIO® biofertilizers",
    faq: [
      {
        q: "What is a biofertilizer?",
        a: "A biofertilizer is a product containing beneficial living microorganisms that support plant nutrition and growth. ALGOFERT-BIO® uses consortia of native Algerian PGPR bacteria selected for complementary functions.",
      },
      {
        q: "Is ALGOFERT-BIO® a biopesticide?",
        a: "ALGOFERT-BIO® is first and foremost a biofertilizer and biostimulant. Its PGPR strains are also studied for biocontrol activity, meaning natural plant protection without chemical pesticides.",
      },
      {
        q: "How is a biofertilizer different from a chemical fertilizer?",
        a: "A chemical fertilizer supplies mineral nutrients directly. A biofertilizer establishes living bacteria in the rhizosphere to improve nutrient availability, root development and soil health, supporting sustainable agriculture.",
      },
    ],
  },
  ar: {
    title: "ALGOFERT-BIO® — أسمدة بيولوجية وأسمدة حيوية جزائرية",
    description:
      "ALGOFERT-BIO®: أسمدة بيولوجية (أسمدة حيوية) ميكروبية من نوع PGPR مستخلصة من بكتيريا جزائرية محلية. بديل طبيعي للأسمدة الكيميائية مع نشاط للمكافحة البيولوجية. تجارب حقلية على الشعير، وهران، الجزائر.",
    keywords: [
      "أسمدة بيولوجية",
      "اسمدة بيولوجية",
      "سماد بيولوجي",
      "أسمدة حيوية",
      "سماد حيوي",
      "مبيدات حيوية",
      "مبيد حيوي",
      "المكافحة البيولوجية",
      "PGPR",
      "البكتيريا المحفزة لنمو النبات",
      "الزراعة المستدامة الجزائر",
      "ALGOFERT-BIO",
    ],
    faqTitle: "أسئلة شائعة حول الأسمدة البيولوجية ALGOFERT-BIO®",
    faq: [
      {
        q: "ما هي الأسمدة البيولوجية؟",
        a: "الأسمدة البيولوجية (الأسمدة الحيوية) منتجات تحتوي على كائنات دقيقة نافعة تحفّز تغذية النبات ونموه. يعتمد ALGOFERT-BIO® على مجموعات من بكتيريا PGPR الجزائرية المحلية، تم اختيارها لوظائفها المتكاملة.",
      },
      {
        q: "هل ALGOFERT-BIO® مبيد حيوي؟",
        a: "ALGOFERT-BIO® هو في المقام الأول سماد بيولوجي ومحفّز حيوي للنمو. كما تُدرس سلالاته لنشاطها في المكافحة البيولوجية، أي حماية النبات بطريقة طبيعية دون استخدام المبيدات الكيميائية.",
      },
      {
        q: "ما الفرق بين السماد البيولوجي والسماد الكيميائي؟",
        a: "يوفّر السماد الكيميائي العناصر المعدنية مباشرة، أما السماد البيولوجي فيُدخل بكتيريا حية في منطقة الجذور لتحسين توفر العناصر الغذائية ونمو الجذور وصحة التربة، في إطار زراعة مستدامة.",
      },
    ],
  },
};
