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
    title: "ALGOFERT-BIO® — Bio-engrais, engrais naturel et biostimulant PGPR algérien",
    description:
      "ALGOFERT-BIO® : bio-engrais (bioengrais, bioangrais), engrais naturel et biostimulant à base de bactéries PGPR autochtones algériennes. Alternative aux engrais chimiques, avec une activité de biocontrôle (biopesticide) à l'étude. Essais au champ sur orge à El-Guettar (Relizane), Algérie.",
    keywords: [
      "bioangrais",
      "bioengrais",
      "engrais naturel",
      "engrais naturel Algérie",
      "bio-pesticide",
      "biostimulants",
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
        q: "Qu'est-ce qu'un bio-engrais (bioengrais, bioangrais) ?",
        a: "Un bio-engrais, ou biofertilisant, est un produit à base de microorganismes vivants bénéfiques qui favorisent la nutrition et la croissance des plantes. ALGOFERT-BIO® utilise des consortiums de bactéries PGPR autochtones algériennes, sélectionnées pour leurs fonctions complémentaires.",
      },
      {
        q: "ALGOFERT-BIO® est-il un biopesticide (bio-pesticide) ?",
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
      {
        q: "ALGOFERT-BIO® est-il un engrais naturel et un biostimulant ?",
        a: "Oui. ALGOFERT-BIO® est un engrais naturel d'origine microbienne : son principe actif est constitué de bactéries PGPR vivantes, et non d'engrais chimiques de synthèse. Il agit aussi comme biostimulant, en favorisant l'enracinement, l'absorption des nutriments et la vigueur des plantes.",
      },
    ],
  },
  en: {
    title: "ALGOFERT-BIO® — Biofertilizer, natural fertilizer and PGPR biostimulant from Algeria",
    description:
      "ALGOFERT-BIO®: microbial bio-fertilizer, natural fertilizer and biostimulant made from native Algerian PGPR bacteria. An alternative to chemical fertilizers, with biocontrol (biopesticide) activity under study. Field trials on barley in El-Guettar (Relizane), Algeria.",
    keywords: [
      "biofertilizer",
      "natural fertilizer",
      "bio-pesticide",
      "biostimulants",
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
        q: "Is ALGOFERT-BIO® a biopesticide (bio-pesticide)?",
        a: "ALGOFERT-BIO® is first and foremost a biofertilizer and biostimulant. Its PGPR strains are also studied for biocontrol activity, meaning natural plant protection without chemical pesticides.",
      },
      {
        q: "How is a biofertilizer different from a chemical fertilizer?",
        a: "A chemical fertilizer supplies mineral nutrients directly. A biofertilizer establishes living bacteria in the rhizosphere to improve nutrient availability, root development and soil health, supporting sustainable agriculture.",
      },
      {
        q: "Where can I find biofertilizers in Algeria?",
        a: "ALGOFERT-BIO® is developed at the University of Science and Technology of Oran (USTO-MB). For partnership, trial or information requests, please use the contact form on this website.",
      },
      {
        q: "Is ALGOFERT-BIO® a natural fertilizer and a biostimulant?",
        a: "Yes. ALGOFERT-BIO® is a natural fertilizer of microbial origin: its active ingredient is living PGPR bacteria, not synthetic chemical fertilizers. It also acts as a biostimulant, supporting rooting, nutrient uptake and plant vigor.",
      },
    ],
  },
  ar: {
    title: "ALGOFERT-BIO® — أسمدة بيولوجية وسماد طبيعي ومنشط حيوي جزائري",
    description:
      "ALGOFERT-BIO®: أسمدة بيولوجية (أسمدة حيوية) وسماد طبيعي ومنشط حيوي لنمو النبات، من بكتيريا PGPR جزائرية محلية. بديل للأسمدة الكيميائية، مع نشاط في المكافحة البيولوجية (مبيدات حيوية) قيد الدراسة. تجارب حقلية على الشعير بالقطار (غليزان)، الجزائر.",
    keywords: [
      "أسمدة بيولوجية",
      "سماد طبيعي",
      "أسمدة طبيعية",
      "منشط حيوي",
      "منشطات حيوية",
      "مبيدات بيولوجية",
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
        q: "هل ALGOFERT-BIO® مبيد حيوي (مبيد بيولوجي)؟",
        a: "ALGOFERT-BIO® هو في المقام الأول سماد بيولوجي ومحفّز حيوي للنمو. كما تُدرس سلالاته لنشاطها في المكافحة البيولوجية، أي حماية النبات بطريقة طبيعية دون استخدام المبيدات الكيميائية.",
      },
      {
        q: "ما الفرق بين السماد البيولوجي والسماد الكيميائي؟",
        a: "يوفّر السماد الكيميائي العناصر المعدنية مباشرة، أما السماد البيولوجي فيُدخل بكتيريا حية في منطقة الجذور لتحسين توفر العناصر الغذائية ونمو الجذور وصحة التربة، في إطار زراعة مستدامة.",
      },
      {
        q: "أين أجد الأسمدة البيولوجية في الجزائر؟",
        a: "تم تطوير ALGOFERT-BIO® بجامعة العلوم والتكنولوجيا بوهران (USTO-MB). لأي طلب شراكة أو تجربة أو معلومات، يرجى استعمال استمارة الاتصال في الموقع.",
      },
      {
        q: "هل ALGOFERT-BIO® سماد طبيعي ومنشط حيوي؟",
        a: "نعم. ALGOFERT-BIO® سماد طبيعي من أصل ميكروبي: مادته الفعالة بكتيريا PGPR حية، وليست أسمدة كيميائية مصنّعة. كما يعمل كمنشط حيوي يحفّز نمو الجذور وامتصاص العناصر الغذائية وقوة النبات.",
      },
    ],
  },
};
