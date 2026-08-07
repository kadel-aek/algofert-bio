import type { Language } from "@/lib/i18n";
import type { StrategicPageKey } from "@/lib/site";

export type StrategicPageContent = {
  label: string;
  eyebrow: string;
  title: string;
  summary: string;
  highlights: { title: string; text: string }[];
  needsTitle: string;
  needs: string[];
  evidenceTitle: string;
  evidenceText: string;
  ctaTitle: string;
  ctaText: string;
  ctaLabel: string;
};

export const strategicPages: Record<
  StrategicPageKey,
  Record<Language, StrategicPageContent>
> = {
  investors: {
    fr: {
      label: "Investisseurs",
      eyebrow: "Investissement et financement",
      title: "Accompagner le passage de la recherche à la production pilote",
      summary: "ALGOFERT-BIO® prépare la maturation, la validation réglementaire et l’industrialisation progressive d’une gamme de biofertilisants microbiens PGPR développée en Algérie.",
      highlights: [
        { title: "Innovation scientifique", text: "Consortiums de bactéries PGPR autochtones sélectionnés pour leurs fonctions complémentaires." },
        { title: "Premières preuves terrain", text: "Essais expérimentaux en serre et au champ, notamment sur orge en conditions réelles." },
        { title: "Potentiel de développement", text: "Gamme en maturation avec préparation du prototype physique et de la production pilote." },
      ],
      needsTitle: "Axes de financement recherchés",
      needs: ["Production pilote et équipements", "Analyses, contrôles et homologation", "Conditionnement et stabilité des formulations", "Développement commercial et accès au marché"],
      evidenceTitle: "Une démarche fondée sur des preuves",
      evidenceText: "Les performances communiquées correspondent aux conditions expérimentales des essais réalisés. Elles ne constituent pas une garantie de rendement identique dans toutes les conditions pédoclimatiques.",
      ctaTitle: "Étudier une opportunité d’investissement",
      ctaText: "Un échange confidentiel peut être organisé afin de présenter l’état de maturation, les besoins et la feuille de route du projet.",
      ctaLabel: "Contacter l’équipe",
    },
    en: {
      label: "Investors",
      eyebrow: "Investment and funding",
      title: "Supporting the transition from research to pilot production",
      summary: "ALGOFERT-BIO® is preparing the maturation, regulatory validation and progressive industrialization of a range of microbial PGPR biofertilizers developed in Algeria.",
      highlights: [
        { title: "Scientific innovation", text: "Consortia of native PGPR bacteria selected for complementary functions." },
        { title: "Initial field evidence", text: "Experimental greenhouse and field trials, including barley under real conditions." },
        { title: "Development potential", text: "A maturing range with physical prototypes and pilot production in preparation." },
      ],
      needsTitle: "Funding priorities",
      needs: ["Pilot production and equipment", "Analyses, controls and regulatory approval", "Packaging and formulation stability", "Business development and market access"],
      evidenceTitle: "An evidence-based approach",
      evidenceText: "The reported performance corresponds to the experimental conditions of the trials conducted and does not guarantee identical yields under every soil and climate condition.",
      ctaTitle: "Explore an investment opportunity",
      ctaText: "A confidential discussion can be arranged to present the project’s maturity, requirements and development roadmap.",
      ctaLabel: "Contact the team",
    },
    ar: {
      label: "المستثمرون",
      eyebrow: "الاستثمار والتمويل",
      title: "دعم الانتقال من البحث العلمي إلى الإنتاج التجريبي",
      summary: "يعمل مشروع ALGOFERT-BIO® على استكمال النضج التقني والتحقق التنظيمي والتحضير للتصنيع التدريجي لمجموعة من الأسمدة الحيوية الميكروبية المطورة في الجزائر.",
      highlights: [
        { title: "ابتكار علمي", text: "اتحادات من بكتيريا PGPR المحلية مختارة بناءً على وظائفها المتكاملة." },
        { title: "أدلة تجريبية أولية", text: "تجارب في الدفيئة والحقل، من بينها تجارب على الشعير في ظروف حقيقية." },
        { title: "قابلية التطوير", text: "مجموعة قيد النضج مع التحضير للنموذج المادي والإنتاج التجريبي." },
      ],
      needsTitle: "محاور التمويل المطلوبة",
      needs: ["الإنتاج التجريبي والتجهيزات", "التحاليل والمراقبة والاعتماد", "التعبئة وثبات التركيبات", "التطوير التجاري والوصول إلى السوق"],
      evidenceTitle: "منهج قائم على الأدلة",
      evidenceText: "ترتبط النتائج المعلنة بظروف التجارب المنجزة ولا تمثل ضمانًا لتحقيق المردود نفسه في جميع الظروف المناخية والتربوية.",
      ctaTitle: "دراسة فرصة استثمار",
      ctaText: "يمكن تنظيم لقاء سري لعرض مستوى نضج المشروع واحتياجاته وخارطة طريقه.",
      ctaLabel: "التواصل مع الفريق",
    },
  },
  partners: {
    fr: {
      label: "Partenaires",
      eyebrow: "Coopération scientifique, agricole et industrielle",
      title: "Construire des partenariats pour valider, produire et diffuser",
      summary: "ALGOFERT-BIO® recherche des collaborations structurées avec des exploitations agricoles, laboratoires, organismes de contrôle, industriels et distributeurs.",
      highlights: [
        { title: "Partenaires agricoles", text: "Parcelles d’essais, cultures cibles et validation dans différentes conditions pédoclimatiques." },
        { title: "Partenaires techniques", text: "Analyses microbiologiques, contrôle qualité, stabilité et développement réglementaire." },
        { title: "Partenaires industriels", text: "Montée en échelle, production pilote, conditionnement et préparation de la distribution." },
      ],
      needsTitle: "Collaborations prioritaires",
      needs: ["Essais multilocaux et démonstrations", "Laboratoires d’analyse et de contrôle", "Production et conditionnement pilotes", "Distribution d’intrants agricoles"],
      evidenceTitle: "Un partenariat avec des objectifs mesurables",
      evidenceText: "Chaque collaboration proposée doit préciser les responsabilités, le protocole, les indicateurs, la confidentialité et les livrables attendus.",
      ctaTitle: "Proposer un partenariat",
      ctaText: "Présentez votre organisme, vos moyens et le type de collaboration envisagé.",
      ctaLabel: "Envoyer une proposition",
    },
    en: {
      label: "Partners",
      eyebrow: "Scientific, agricultural and industrial cooperation",
      title: "Building partnerships to validate, produce and distribute",
      summary: "ALGOFERT-BIO® seeks structured collaborations with farms, laboratories, control bodies, manufacturers and distributors.",
      highlights: [
        { title: "Agricultural partners", text: "Trial plots, target crops and validation across different soil and climate conditions." },
        { title: "Technical partners", text: "Microbiological analyses, quality control, stability and regulatory development." },
        { title: "Industrial partners", text: "Scale-up, pilot production, packaging and preparation for distribution." },
      ],
      needsTitle: "Priority collaborations",
      needs: ["Multi-location trials and demonstrations", "Analysis and control laboratories", "Pilot production and packaging", "Agricultural input distribution"],
      evidenceTitle: "Partnerships with measurable objectives",
      evidenceText: "Each proposed collaboration should define responsibilities, protocols, indicators, confidentiality and expected deliverables.",
      ctaTitle: "Propose a partnership",
      ctaText: "Introduce your organization, capabilities and the type of collaboration you are considering.",
      ctaLabel: "Send a proposal",
    },
    ar: {
      label: "الشركاء",
      eyebrow: "تعاون علمي وفلاحي وصناعي",
      title: "بناء شراكات للتحقق والإنتاج والتوزيع",
      summary: "يبحث ALGOFERT-BIO® عن تعاون منظم مع المستثمرات الفلاحية والمخابر وهيئات الرقابة والمصنعين والموزعين.",
      highlights: [
        { title: "شركاء فلاحيون", text: "قطع تجريبية ومحاصيل مستهدفة والتحقق في ظروف مناخية وتربوية مختلفة." },
        { title: "شركاء تقنيون", text: "تحاليل ميكروبيولوجية ومراقبة الجودة والثبات والتطوير التنظيمي." },
        { title: "شركاء صناعيون", text: "رفع حجم الإنتاج والتعبئة التجريبية والتحضير للتوزيع." },
      ],
      needsTitle: "التعاون ذو الأولوية",
      needs: ["تجارب متعددة المواقع وعروض ميدانية", "مخابر التحليل والمراقبة", "الإنتاج والتعبئة التجريبيان", "توزيع المدخلات الفلاحية"],
      evidenceTitle: "شراكة بأهداف قابلة للقياس",
      evidenceText: "ينبغي أن يحدد كل تعاون المسؤوليات والبروتوكول والمؤشرات والسرية والنتائج المنتظرة.",
      ctaTitle: "اقتراح شراكة",
      ctaText: "عرّف بمؤسستك وإمكاناتها ونوع التعاون المقترح.",
      ctaLabel: "إرسال اقتراح",
    },
  },
  research: {
    fr: {
      label: "Recherche",
      eyebrow: "Base scientifique et expérimentale",
      title: "Des consortiums microbiens étudiés du laboratoire au champ",
      summary: "Le programme scientifique porte sur des bactéries PGPR autochtones, leur complémentarité fonctionnelle et leur évaluation sur la croissance, les stress abiotiques et le potentiel de biocontrôle.",
      highlights: [
        { title: "Sélection microbiologique", text: "Caractérisation de microorganismes issus d’écosystèmes algériens et étude de fonctions d’intérêt agronomique." },
        { title: "Formulation", text: "Préparation de consortiums, incorporation sur support solide et contrôle de la viabilité et de la pureté." },
        { title: "Évaluation expérimentale", text: "Essais en serre et au champ avec témoins, mesures agronomiques et analyses statistiques." },
      ],
      needsTitle: "Axes de coopération scientifique",
      needs: ["Essais sur différentes cultures et régions", "Stabilité, durée de conservation et qualité", "Interactions plante-sol-microorganismes", "Validation du potentiel de biocontrôle"],
      evidenceTitle: "Interprétation responsable des résultats",
      evidenceText: "Les résultats sont rapportés avec leur contexte expérimental. Toute allégation commerciale ou réglementaire nécessite une validation appropriée.",
      ctaTitle: "Initier une collaboration scientifique",
      ctaText: "Les laboratoires et équipes de recherche peuvent proposer un protocole commun ou une expertise complémentaire.",
      ctaLabel: "Contacter les chercheuses",
    },
    en: {
      label: "Research",
      eyebrow: "Scientific and experimental basis",
      title: "Microbial consortia studied from laboratory to field",
      summary: "The scientific programme focuses on native PGPR bacteria, their functional complementarity and their assessment for growth, abiotic stress and biocontrol potential.",
      highlights: [
        { title: "Microbiological selection", text: "Characterization of microorganisms from Algerian ecosystems and functions of agronomic interest." },
        { title: "Formulation", text: "Preparation of consortia, incorporation into a solid carrier and viability and purity control." },
        { title: "Experimental assessment", text: "Greenhouse and field trials with controls, agronomic measurements and statistical analyses." },
      ],
      needsTitle: "Scientific cooperation priorities",
      needs: ["Trials across crops and regions", "Stability, shelf life and quality", "Plant–soil–microorganism interactions", "Validation of biocontrol potential"],
      evidenceTitle: "Responsible interpretation of results",
      evidenceText: "Results are reported with their experimental context. Any commercial or regulatory claim requires appropriate validation.",
      ctaTitle: "Start a scientific collaboration",
      ctaText: "Laboratories and research teams can propose a joint protocol or complementary expertise.",
      ctaLabel: "Contact the researchers",
    },
    ar: {
      label: "البحث العلمي",
      eyebrow: "الأساس العلمي والتجريبي",
      title: "دراسة الاتحادات الميكروبية من المخبر إلى الحقل",
      summary: "يركز البرنامج العلمي على بكتيريا PGPR المحلية وتكامل وظائفها وتقييمها في النمو والإجهادات اللاحيوية وإمكانات المكافحة الحيوية.",
      highlights: [
        { title: "الانتقاء الميكروبيولوجي", text: "توصيف كائنات دقيقة من نظم بيئية جزائرية ودراسة وظائف ذات أهمية فلاحية." },
        { title: "التركيب", text: "تحضير الاتحادات وإدماجها في حامل صلب ومراقبة الحيوية والنقاوة." },
        { title: "التقييم التجريبي", text: "تجارب في الدفيئة والحقل مع الشواهد والقياسات الفلاحية والتحليل الإحصائي." },
      ],
      needsTitle: "محاور التعاون العلمي",
      needs: ["تجارب على محاصيل ومناطق مختلفة", "الثبات ومدة الحفظ والجودة", "تفاعلات النبات والتربة والكائنات الدقيقة", "التحقق من إمكانات المكافحة الحيوية"],
      evidenceTitle: "تفسير مسؤول للنتائج",
      evidenceText: "تُعرض النتائج ضمن سياقها التجريبي، وتتطلب أي ادعاءات تجارية أو تنظيمية تحققًا مناسبًا.",
      ctaTitle: "بدء تعاون علمي",
      ctaText: "يمكن للمخابر وفرق البحث اقتراح بروتوكول مشترك أو خبرة مكملة.",
      ctaLabel: "التواصل مع الباحثتين",
    },
  },
  news: {
    fr: {
      label: "Actualités",
      eyebrow: "Avancement du projet",
      title: "Les étapes de développement d’ALGOFERT-BIO®",
      summary: "Cette page rassemble les jalons vérifiables du projet, depuis les essais expérimentaux jusqu’à la maturation et à la préparation du prototype.",
      highlights: [
        { title: "06 juillet 2026 — MOU", text: "Signature du MOU dans le cadre de l’accompagnement par l’Incubateur USTO-MB." },
        { title: "Essais expérimentaux", text: "Travaux menés en serre, au champ à Relizane et sur le site de fabrication." },
        { title: "ProtoMarket 2026", text: "Préparation d’une candidature, d’un prototype de packaging et d’une vidéo de démonstration." },
      ],
      needsTitle: "Prochaines étapes",
      needs: ["Prototype physique et vidéo", "Analyses et contrôles complémentaires", "Production pilote", "Partenariats institutionnels et industriels"],
      evidenceTitle: "Une information documentée",
      evidenceText: "Les nouvelles publications seront accompagnées de photographies, documents ou liens permettant d’identifier clairement l’étape présentée.",
      ctaTitle: "Suivre ou relayer le projet",
      ctaText: "Les organismes et médias spécialisés peuvent contacter l’équipe pour obtenir une présentation institutionnelle.",
      ctaLabel: "Demander la présentation",
    },
    en: {
      label: "News",
      eyebrow: "Project progress",
      title: "ALGOFERT-BIO® development milestones",
      summary: "This page brings together verifiable project milestones, from experimental trials to maturation and prototype preparation.",
      highlights: [
        { title: "6 July 2026 — MOU", text: "MOU signed as part of the support provided by the USTO-MB Incubator." },
        { title: "Experimental trials", text: "Work conducted in greenhouse conditions, in the field in Relizane and at the production site." },
        { title: "ProtoMarket 2026", text: "Preparation of an application, a packaging prototype and a demonstration video." },
      ],
      needsTitle: "Next steps",
      needs: ["Physical prototype and video", "Additional analyses and controls", "Pilot production", "Institutional and industrial partnerships"],
      evidenceTitle: "Documented information",
      evidenceText: "New updates will be supported by photographs, documents or links that clearly identify the milestone presented.",
      ctaTitle: "Follow or feature the project",
      ctaText: "Specialized organizations and media can contact the team to request an institutional presentation.",
      ctaLabel: "Request the presentation",
    },
    ar: {
      label: "الأخبار",
      eyebrow: "تقدم المشروع",
      title: "مراحل تطوير ALGOFERT-BIO®",
      summary: "تجمع هذه الصفحة المراحل الموثقة للمشروع، من التجارب العلمية إلى النضج وتحضير النموذج الأولي.",
      highlights: [
        { title: "06 يوليو 2026 — مذكرة تفاهم", text: "توقيع مذكرة التفاهم في إطار مرافقة حاضنة USTO-MB." },
        { title: "التجارب العلمية", text: "أعمال في الدفيئة والحقل بولاية غليزان وفي موقع التصنيع." },
        { title: "ProtoMarket 2026", text: "تحضير ملف الترشح ونموذج التغليف وفيديو توضيحي." },
      ],
      needsTitle: "الخطوات القادمة",
      needs: ["النموذج المادي والفيديو", "تحاليل ومراقبة إضافية", "الإنتاج التجريبي", "شراكات مؤسساتية وصناعية"],
      evidenceTitle: "معلومات موثقة",
      evidenceText: "ستُرفق المستجدات القادمة بصور أو وثائق أو روابط توضح المرحلة المعروضة.",
      ctaTitle: "متابعة المشروع أو التعريف به",
      ctaText: "يمكن للهيئات ووسائل الإعلام المتخصصة طلب العرض المؤسساتي للمشروع.",
      ctaLabel: "طلب العرض",
    },
  },
};

export const strategicSectionCopy: Record<Language, { eyebrow: string; title: string; text: string; discover: string }> = {
  fr: { eyebrow: "Coopération et développement", title: "Un espace pour chaque partenaire du projet", text: "Accédez aux informations adaptées aux investisseurs, partenaires, équipes scientifiques et organismes souhaitant suivre le projet.", discover: "Découvrir" },
  en: { eyebrow: "Cooperation and development", title: "Dedicated information for every project partner", text: "Access information for investors, partners, scientific teams and organizations following the project.", discover: "Discover" },
  ar: { eyebrow: "التعاون والتطوير", title: "معلومات مخصصة لكل شريك في المشروع", text: "اطلع على المعلومات الموجهة للمستثمرين والشركاء والفرق العلمية والهيئات المتابعة للمشروع.", discover: "اكتشف" },
};
