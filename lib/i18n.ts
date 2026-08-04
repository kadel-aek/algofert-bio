export type Language = "fr" | "en" | "ar";

export const translations = {
  fr: {
    nav: {
      technology: "Technologie",
      fieldTrials: "Essais au champ",
      results: "Résultats",
      products: "Produits",
      team: "Équipe",
      contact: "Contact",
      contactMobile: "Nous contacter",
    },
    mobileIntro:
      "Biofertilisants microbiens PGPR issus de consortiums bactériens autochtones algériens.",
    hero: {
      eyebrow: "Innovation agricole algérienne",
      titleLine1: "La biotechnologie",
      titleLine2: "au service du vivant.",
      description:
        "Une gamme de biofertilisants microbiens fondée sur des consortiums de bactéries PGPR autochtones algériennes, développée pour accompagner durablement la croissance et les performances des cultures.",
      signature:
        "Née de la recherche algérienne. Au service de l’agriculture durable.",
      discover: "Découvrir la technologie",
      film: "Voir le film",
      explore: "Explorer",
      stats: [
        { value: "PGPR", label: "Consortiums" },
        { value: "Algérie", label: "Souches autochtones" },
        { value: "Champ", label: "Essais réels" },
      ],
    },
    page: {
      technology: {
        eyebrow: "Notre technologie",
        title: "La puissance des microorganismes bénéfiques",
        description:
          "ALGOFERT-BIO® repose sur des consortiums de bactéries rhizosphériques promotrices de la croissance des plantes, sélectionnées pour leurs fonctions complémentaires.",
        functions: [
          { title: "Biostimulation", description: "Développement végétatif et racinaire." },
          { title: "Biofertilisation", description: "Fonctions liées à la nutrition des plantes." },
          { title: "Biocontrôle", description: "Potentiel biologique contre certains agents nuisibles." },
          { title: "Souches autochtones", description: "Microorganismes issus d’écosystèmes algériens." },
        ],
      },
      problem: {
        eyebrow: "Du sol fragilisé à la culture vigoureuse",
        title: "Une réponse biologique développée pour les cultures",
        challengeLabel: "Le défi",
        challengeTitle: "Sols et cultures soumis au stress",
        challengeDescription:
          "La diminution de la fertilité biologique peut limiter le développement racinaire et les performances agronomiques.",
        solutionLabel: "La solution",
        solutionTitle: "Des cultures accompagnées par les PGPR",
        solutionDescription:
          "Les consortiums sont développés pour soutenir les interactions bénéfiques entre les racines, le sol et les microorganismes.",
      },
      field: {
        caption: "Suivi des essais dans une parcelle agricole algérienne.",
        eyebrow: "Technologie évaluée au champ",
        title: "Des essais réalisés en conditions réelles",
        description:
          "Les formulations ont été évaluées sur orge en conditions de culture pluviale afin d’étudier leur effet sur le développement végétatif et les composantes du rendement.",
        items: [
          "Culture pluviale",
          "Conditions semi-arides",
          "Témoin non inoculé",
          "Mesures agronomiques et analyses statistiques",
        ],
      },
      visual: {
        eyebrow: "Preuves visuelles",
        title: "Des différences visibles sur les plantes et les épis",
        cards: [
          { title: "Plantes entières", description: "Comparaison du développement aérien et racinaire." },
          { title: "Épis verts", description: "Observation des différences de longueur et de formation." },
          { title: "Épis à maturité", description: "Comparaison du témoin et des trois consortiums." },
        ],
      },
      benefitsEyebrow: "Pourquoi ALGOFERT-BIO® ?",
      benefitsTitle: "Une innovation scientifique pensée pour le terrain",
      benefits: [
        { number: "01", title: "Consortiums microbiens PGPR", description: "Des associations complémentaires de bactéries autochtones sélectionnées pour leurs propriétés de biofertilisation, de biostimulation et de biocontrôle." },
        { number: "02", title: "Recherche algérienne", description: "Une technologie développée au Département de Biotechnologie de l’USTO-MB à partir de microorganismes issus d’écosystèmes algériens." },
        { number: "03", title: "Validation au champ", description: "Des essais sur orge réalisés en conditions réelles ont montré une amélioration significative de plusieurs composantes du rendement." },
        { number: "04", title: "Agriculture durable", description: "Une solution biologique conçue pour accompagner les performances des cultures et contribuer à la préservation de la fertilité des sols." },
      ],
      formulations: {
        eyebrow: "Du laboratoire au champ",
        title: "Des formulations préparées et évaluées",
        description: "Les consortiums ont été préparés, formulés sur support solide puis évalués dans le cadre des essais expérimentaux d’ALGOFERT-BIO®.",
        steps: [
          "Culture et concentration de la biomasse bactérienne",
          "Incorporation sur un support solide stérilisé",
          "Contrôle de la viabilité et de la pureté microbiologique",
        ],
      },
      teamProduct: {
        eyebrow: "De la recherche au produit",
        title: "Une technologie développée par une équipe scientifique algérienne",
        description: "ALGOFERT-BIO® est développé par Pr SELAMI Nawel et Dr DRAOU Nassima, au Département de Biotechnologie de l’USTO-MB, depuis la sélection des microorganismes jusqu’à la formulation et aux essais au champ.",
        note: "Recherche microbiologique, formulation, validation expérimentale et préparation du transfert technologique.",
      },
      productsSection: {
        eyebrow: "Notre gamme",
        title: "Trois consortiums complémentaires",
        consortiumLabel: "Consortium",
      },
      products: [
        { name: "Essentiel", consortium: "RB6 + R5", description: "Formulation associant des fonctions complémentaires de biostimulation et de biocontrôle.", accent: "text-[#75c45b]", border: "border-[#75c45b]/30" },
        { name: "Performance", consortium: "RB4 + RB6", description: "Formulation associant notamment la solubilisation du phosphore et une activité antifongique.", accent: "text-[#58a7df]", border: "border-[#58a7df]/30" },
        { name: "Excellence", consortium: "R5 + RB4", description: "Formulation ayant présenté les meilleurs résultats expérimentaux sur plusieurs paramètres.", accent: "text-[#e0b43d]", border: "border-[#e0b43d]/30" },
      ],
      team: {
        eyebrow: "Porteuses du projet",
        title: "Une innovation portée par le Département de Biotechnologie",
        description: "ALGOFERT-BIO® est porté par Pr SELAMI Nawel et Dr DRAOU Nassima, enseignantes-chercheuses au Département de Biotechnologie de l’Université des Sciences et de la Technologie Mohamed Boudiaf d’Oran.",
        cardLabel: "Porteuse du projet",
        departmentShort: "Département de Biotechnologie — USTO-MB",
      },
      innovation: {
        eyebrow: "Innovation et maturation",
        title: "De la recherche universitaire vers une solution agricole industrialisable",
        description: "Le projet poursuit sa maturation technologique, son développement réglementaire et la préparation de sa production pilote.",
        badge: "Demande de brevet déposée auprès de l’INAPI",
      },
      contact: {
        eyebrow: "Contact et partenariat",
        title: "Construisons ensemble l’agriculture de demain",
        description: "ALGOFERT-BIO® recherche des partenaires scientifiques, agricoles, techniques, industriels et financiers pour accompagner sa maturation, sa production pilote et sa future mise sur le marché.",
        partnersTitle: "Partenariats recherchés",
        partnersDescription: "Exploitations agricoles, industriels, distributeurs, investisseurs, structures de contrôle, laboratoires et organismes de financement.",
      },

      results: {
        eyebrow: "Résultats expérimentaux",
        title: "Des performances observées sur l’orge",
        description:
          "Les valeurs présentées correspondent aux gains maximaux observés lors des essais comparatifs réalisés avec les consortiums ALGOFERT-BIO®.",
        cards: [
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
        ],
        analysisEyebrow: "Analyse comparative",
        analysisTitle: "Nombre de grains par épi et poids de mille grains",
        analysisDescription:
          "Témoin non inoculé comparé aux trois consortiums microbiens évalués au champ.",
        chartAlt: "Résultats comparatifs ALGOFERT-BIO sur l’orge",
        disclaimer:
          "Les résultats affichés correspondent aux conditions expérimentales des essais réalisés. Ils ne constituent pas une garantie de rendement identique dans toutes les parcelles ou conditions pédoclimatiques.",
      },
      contactForm: {
        nameLabel: "Nom et prénom *",
        namePlaceholder: "Votre nom",
        organizationLabel: "Organisme",
        organizationPlaceholder: "Entreprise ou institution",
        emailLabel: "Adresse e-mail *",
        emailPlaceholder: "votre@email.com",
        subjectLabel: "Objet *",
        subjectPlaceholder: "Sélectionnez un sujet",
        subjects: {
          scientific: "Partenariat scientifique",
          agricultural: "Essai agricole",
          industrial: "Partenariat industriel",
          investment: "Investissement et financement",
          distribution: "Distribution",
          other: "Autre demande",
        },
        messageLabel: "Message *",
        messagePlaceholder: "Présentez brièvement votre demande...",
        submit: "Envoyer la demande",
        loading: "Envoi en cours...",
        success: "Votre message a été envoyé avec succès.",
        error: "L’envoi du message a échoué.",
        unknownError: "Une erreur est survenue pendant l’envoi.",
      },
      footer: {
        signature: "Né de la recherche algérienne. Au service de l’agriculture durable.",
        description: "Projet de développement d’une gamme de biofertilisants microbiens PGPR à base de consortiums bactériens autochtones algériens.",
        department: "Département de Biotechnologie",
        university: "Université des Sciences et de la Technologie Mohamed Boudiaf",
        copyright: "© 2026 ALGOFERT-BIO®. Tous droits réservés.",
        incubator: "Projet accompagné par l’Incubateur USTO-MB",
      },
    },
  },

  en: {
    nav: {
      technology: "Technology", fieldTrials: "Field trials", results: "Results",
      products: "Products", team: "Team", contact: "Contact", contactMobile: "Contact us",
    },
    mobileIntro: "Microbial PGPR biofertilizers developed from native Algerian bacterial consortia.",
    hero: {
      eyebrow: "Algerian agricultural innovation",
      titleLine1: "Biotechnology", titleLine2: "in service of life.",
      description: "A range of microbial biofertilizers based on native Algerian PGPR bacterial consortia, developed to sustainably support crop growth and performance.",
      signature: "Born from Algerian research. Serving sustainable agriculture.",
      discover: "Discover the technology", film: "Watch the film", explore: "Explore",
      stats: [
        { value: "PGPR", label: "Consortia" },
        { value: "Algeria", label: "Native strains" },
        { value: "Field", label: "Real trials" },
      ],
    },
    page: {
      technology: {
        eyebrow: "Our technology",
        title: "The power of beneficial microorganisms",
        description: "ALGOFERT-BIO® is based on consortia of plant growth-promoting rhizobacteria selected for their complementary functions.",
        functions: [
          { title: "Biostimulation", description: "Vegetative and root development." },
          { title: "Biofertilization", description: "Functions related to plant nutrition." },
          { title: "Biocontrol", description: "Biological potential against selected harmful agents." },
          { title: "Native strains", description: "Microorganisms originating from Algerian ecosystems." },
        ],
      },
      problem: {
        eyebrow: "From weakened soil to vigorous crops",
        title: "A biological response developed for crops",
        challengeLabel: "The challenge",
        challengeTitle: "Soils and crops under stress",
        challengeDescription: "Declining biological fertility may restrict root development and agronomic performance.",
        solutionLabel: "The solution",
        solutionTitle: "Crops supported by PGPR",
        solutionDescription: "The consortia are developed to support beneficial interactions among roots, soil and microorganisms.",
      },
      field: {
        caption: "Monitoring trials in an Algerian agricultural field.",
        eyebrow: "Technology evaluated in the field",
        title: "Trials conducted under real conditions",
        description: "The formulations were evaluated on rainfed barley to study their effects on vegetative development and yield components.",
        items: ["Rainfed crop", "Semi-arid conditions", "Non-inoculated control", "Agronomic measurements and statistical analyses"],
      },
      visual: {
        eyebrow: "Visual evidence",
        title: "Visible differences in plants and spikes",
        cards: [
          { title: "Whole plants", description: "Comparison of shoot and root development." },
          { title: "Green spikes", description: "Observation of differences in length and formation." },
          { title: "Mature spikes", description: "Comparison of the control and the three consortia." },
        ],
      },
      benefitsEyebrow: "Why ALGOFERT-BIO®?",
      benefitsTitle: "Scientific innovation designed for field conditions",
      benefits: [
        { number: "01", title: "Microbial PGPR consortia", description: "Complementary associations of native bacteria selected for biofertilization, biostimulation and biocontrol properties." },
        { number: "02", title: "Algerian research", description: "A technology developed at the USTO-MB Department of Biotechnology using microorganisms from Algerian ecosystems." },
        { number: "03", title: "Field validation", description: "Real-condition barley trials showed significant improvement in several yield components." },
        { number: "04", title: "Sustainable agriculture", description: "A biological solution designed to support crop performance and help preserve soil fertility." },
      ],
      formulations: {
        eyebrow: "From laboratory to field",
        title: "Prepared and evaluated formulations",
        description: "The consortia were prepared, formulated on a solid carrier and then evaluated in ALGOFERT-BIO® experimental trials.",
        steps: ["Culture and concentration of bacterial biomass", "Incorporation into a sterilized solid carrier", "Control of viability and microbiological purity"],
      },
      teamProduct: {
        eyebrow: "From research to product",
        title: "A technology developed by an Algerian scientific team",
        description: "ALGOFERT-BIO® is developed by Prof. SELAMI Nawel and Dr. DRAOU Nassima at the USTO-MB Department of Biotechnology, from microorganism selection through formulation and field trials.",
        note: "Microbiological research, formulation, experimental validation and technology-transfer preparation.",
      },
      productsSection: { eyebrow: "Our range", title: "Three complementary consortia", consortiumLabel: "Consortium" },
      products: [
        { name: "Essential", consortium: "RB6 + R5", description: "A formulation combining complementary biostimulation and biocontrol functions.", accent: "text-[#75c45b]", border: "border-[#75c45b]/30" },
        { name: "Performance", consortium: "RB4 + RB6", description: "A formulation notably combining phosphate solubilization and antifungal activity.", accent: "text-[#58a7df]", border: "border-[#58a7df]/30" },
        { name: "Excellence", consortium: "R5 + RB4", description: "The formulation that delivered the best experimental results across several parameters.", accent: "text-[#e0b43d]", border: "border-[#e0b43d]/30" },
      ],
      team: {
        eyebrow: "Project leaders",
        title: "An innovation led by the Department of Biotechnology",
        description: "ALGOFERT-BIO® is led by Prof. SELAMI Nawel and Dr. DRAOU Nassima, lecturer-researchers at the Department of Biotechnology, University of Science and Technology of Oran Mohamed Boudiaf.",
        cardLabel: "Project leader",
        departmentShort: "Department of Biotechnology — USTO-MB",
      },
      innovation: {
        eyebrow: "Innovation and maturation",
        title: "From university research to an industrially scalable agricultural solution",
        description: "The project is advancing its technological maturation, regulatory development and pilot-production preparation.",
        badge: "Patent application filed with INAPI",
      },
      contact: {
        eyebrow: "Contact and partnership",
        title: "Let us build tomorrow’s agriculture together",
        description: "ALGOFERT-BIO® is seeking scientific, agricultural, technical, industrial and financial partners to support maturation, pilot production and future market launch.",
        partnersTitle: "Partnerships sought",
        partnersDescription: "Farms, manufacturers, distributors, investors, control bodies, laboratories and funding organizations.",
      },

      results: {
        eyebrow: "Experimental results",
        title: "Performance observed in barley",
        description:
          "The values shown represent the highest gains observed during comparative trials conducted with the ALGOFERT-BIO® consortia.",
        cards: [
          {
            value: 357,
            title: "Yield per spike",
            description:
              "Highest gain observed with the R5 + RB4 consortium compared with the non-inoculated control.",
          },
          {
            value: 184,
            title: "Grains per spike",
            description:
              "Highest increase observed with the R5 + RB4 consortium under the trial conditions.",
          },
          {
            value: 61,
            title: "Thousand-grain weight",
            description:
              "Highest improvement in thousand-grain weight observed with the R5 + RB4 consortium.",
          },
        ],
        analysisEyebrow: "Comparative analysis",
        analysisTitle: "Grains per spike and thousand-grain weight",
        analysisDescription:
          "Non-inoculated control compared with the three microbial consortia evaluated in the field.",
        chartAlt: "Comparative ALGOFERT-BIO results in barley",
        disclaimer:
          "The displayed results correspond to the experimental conditions of the trials conducted. They do not guarantee identical yields in every field or under all soil and climate conditions.",
      },
      contactForm: {
        nameLabel: "Full name *",
        namePlaceholder: "Your name",
        organizationLabel: "Organization",
        organizationPlaceholder: "Company or institution",
        emailLabel: "Email address *",
        emailPlaceholder: "your@email.com",
        subjectLabel: "Subject *",
        subjectPlaceholder: "Select a subject",
        subjects: {
          scientific: "Scientific partnership",
          agricultural: "Agricultural trial",
          industrial: "Industrial partnership",
          investment: "Investment and funding",
          distribution: "Distribution",
          other: "Other request",
        },
        messageLabel: "Message *",
        messagePlaceholder: "Briefly describe your request...",
        submit: "Send request",
        loading: "Sending...",
        success: "Your message has been sent successfully.",
        error: "The message could not be sent.",
        unknownError: "An error occurred while sending your message.",
      },
      footer: {
        signature: "Born from Algerian research. Serving sustainable agriculture.",
        description: "Development project for a range of microbial PGPR biofertilizers based on native Algerian bacterial consortia.",
        department: "Department of Biotechnology",
        university: "University of Science and Technology of Oran Mohamed Boudiaf",
        copyright: "© 2026 ALGOFERT-BIO®. All rights reserved.",
        incubator: "Project supported by the USTO-MB Incubator",
      },
    },
  },

  ar: {
    nav: {
      technology: "التكنولوجيا", fieldTrials: "التجارب الحقلية", results: "النتائج",
      products: "المنتجات", team: "الفريق", contact: "اتصل بنا", contactMobile: "تواصل معنا",
    },
    mobileIntro: "أسمدة حيوية ميكروبية تعتمد على اتحادات بكتيرية جزائرية محلية محفزة لنمو النبات.",
    hero: {
      eyebrow: "ابتكار زراعي جزائري",
      titleLine1: "التكنولوجيا الحيوية", titleLine2: "في خدمة الحياة.",
      description: "مجموعة من الأسمدة الحيوية الميكروبية القائمة على اتحادات بكتيرية جزائرية محلية محفزة لنمو النبات، طُوّرت لدعم نمو المحاصيل وأدائها بصورة مستدامة.",
      signature: "ثمرة البحث العلمي الجزائري، في خدمة الزراعة المستدامة.",
      discover: "اكتشف التكنولوجيا", film: "شاهد الفيلم", explore: "استكشف",
      stats: [
        { value: "PGPR", label: "اتحادات بكتيرية" },
        { value: "الجزائر", label: "سلالات محلية" },
        { value: "الحقل", label: "تجارب واقعية" },
      ],
    },
    page: {
      technology: {
        eyebrow: "تقنيتنا",
        title: "قوة الكائنات الحية الدقيقة النافعة",
        description: "يعتمد ALGOFERT-BIO® على اتحادات من البكتيريا الجذرية المحفزة لنمو النبات، المنتقاة لوظائفها المتكاملة.",
        functions: [
          { title: "التحفيز الحيوي", description: "دعم النمو الخضري والجذري." },
          { title: "التسميد الحيوي", description: "وظائف مرتبطة بتغذية النبات." },
          { title: "المكافحة الحيوية", description: "قدرة بيولوجية ضد بعض العوامل الضارة." },
          { title: "سلالات محلية", description: "كائنات دقيقة مصدرها نظم بيئية جزائرية." },
        ],
      },
      problem: {
        eyebrow: "من تربة متدهورة إلى محاصيل قوية",
        title: "استجابة بيولوجية مطوّرة لخدمة المحاصيل",
        challengeLabel: "التحدي",
        challengeTitle: "تربة ومحاصيل خاضعة للإجهاد",
        challengeDescription: "قد يؤدي تراجع الخصوبة البيولوجية إلى الحد من نمو الجذور والأداء الزراعي.",
        solutionLabel: "الحل",
        solutionTitle: "محاصيل مدعومة ببكتيريا PGPR",
        solutionDescription: "طُوّرت الاتحادات لدعم التفاعلات النافعة بين الجذور والتربة والكائنات الحية الدقيقة.",
      },
      field: {
        caption: "متابعة التجارب في قطعة زراعية جزائرية.",
        eyebrow: "تكنولوجيا جرى تقييمها في الحقل",
        title: "تجارب أُنجزت في ظروف واقعية",
        description: "جرى تقييم التركيبات على الشعير في الزراعة المطرية لدراسة تأثيرها في النمو الخضري ومكونات المردود.",
        items: ["زراعة مطرية", "ظروف شبه جافة", "شاهد غير ملقح", "قياسات زراعية وتحليلات إحصائية"],
      },
      visual: {
        eyebrow: "أدلة بصرية",
        title: "فروق ظاهرة على النباتات والسنابل",
        cards: [
          { title: "نباتات كاملة", description: "مقارنة النمو الهوائي والجذري." },
          { title: "سنابل خضراء", description: "ملاحظة الفروق في الطول والتكوين." },
          { title: "سنابل ناضجة", description: "مقارنة الشاهد والاتحادات الثلاثة." },
        ],
      },
      benefitsEyebrow: "لماذا ALGOFERT-BIO®؟",
      benefitsTitle: "ابتكار علمي مصمم لظروف الحقل",
      benefits: [
        { number: "01", title: "اتحادات ميكروبية PGPR", description: "تجمعات متكاملة من بكتيريا محلية منتقاة لخصائص التسميد الحيوي والتحفيز الحيوي والمكافحة الحيوية." },
        { number: "02", title: "بحث علمي جزائري", description: "تكنولوجيا طُوّرت بقسم التكنولوجيا الحيوية في USTO-MB انطلاقاً من كائنات دقيقة مصدرها نظم بيئية جزائرية." },
        { number: "03", title: "تحقق ميداني", description: "أظهرت تجارب الشعير في الظروف الحقيقية تحسناً معنوياً في عدة مكونات للمردود." },
        { number: "04", title: "زراعة مستدامة", description: "حل بيولوجي صُمم لدعم أداء المحاصيل والمساهمة في الحفاظ على خصوبة التربة." },
      ],
      formulations: {
        eyebrow: "من المختبر إلى الحقل",
        title: "تركيبات محضّرة ومقيّمة",
        description: "حُضّرت الاتحادات وصيغت على دعامة صلبة، ثم قُيّمت ضمن التجارب التجريبية لـ ALGOFERT-BIO®.",
        steps: ["زراعة الكتلة الحيوية البكتيرية وتركيزها", "إدماجها في دعامة صلبة معقمة", "مراقبة الحيوية والنقاوة الميكروبيولوجية"],
      },
      teamProduct: {
        eyebrow: "من البحث إلى المنتج",
        title: "تكنولوجيا طوّرها فريق علمي جزائري",
        description: "طُوّر ALGOFERT-BIO® من طرف الأستاذة سالمي نوال والدكتورة دراعو نسيمة بقسم التكنولوجيا الحيوية في USTO-MB، من انتقاء الكائنات الدقيقة إلى الصياغة والتجارب الحقلية.",
        note: "بحث ميكروبيولوجي، صياغة، تحقق تجريبي وتحضير لنقل التكنولوجيا.",
      },
      productsSection: { eyebrow: "مجموعتنا", title: "ثلاثة اتحادات متكاملة", consortiumLabel: "الاتحاد" },
      products: [
        { name: "الأساسي", consortium: "RB6 + R5", description: "تركيبة تجمع وظائف متكاملة للتحفيز الحيوي والمكافحة الحيوية.", accent: "text-[#75c45b]", border: "border-[#75c45b]/30" },
        { name: "الأداء", consortium: "RB4 + RB6", description: "تركيبة تجمع خصوصاً إذابة الفوسفات ونشاطاً مضاداً للفطريات.", accent: "text-[#58a7df]", border: "border-[#58a7df]/30" },
        { name: "التميز", consortium: "R5 + RB4", description: "التركيبة التي أظهرت أفضل النتائج التجريبية في عدة معايير.", accent: "text-[#e0b43d]", border: "border-[#e0b43d]/30" },
      ],
      team: {
        eyebrow: "حاملتا المشروع",
        title: "ابتكار يشرف عليه قسم التكنولوجيا الحيوية",
        description: "تشرف على ALGOFERT-BIO® الأستاذة سالمي نوال والدكتورة دراعو نسيمة، الأستاذتان الباحثتان بقسم التكنولوجيا الحيوية في جامعة العلوم والتكنولوجيا محمد بوضياف بوهران.",
        cardLabel: "حاملة المشروع",
        departmentShort: "قسم التكنولوجيا الحيوية — USTO-MB",
      },
      innovation: {
        eyebrow: "الابتكار والنضج التكنولوجي",
        title: "من البحث الجامعي إلى حل زراعي قابل للتصنيع",
        description: "يواصل المشروع مسار النضج التكنولوجي والتطوير التنظيمي والتحضير للإنتاج التجريبي.",
        badge: "إيداع طلب براءة اختراع لدى المعهد الوطني الجزائري للملكية الصناعية",
      },
      contact: {
        eyebrow: "الاتصال والشراكة",
        title: "لنبني معا زراعة المستقبل",
        description: "يبحث ALGOFERT-BIO® عن شركاء علميين وزراعيين وتقنيين وصناعيين وماليين لدعم مرحلة النضج والإنتاج التجريبي والدخول المستقبلي إلى السوق.",
        partnersTitle: "الشراكات المطلوبة",
        partnersDescription: "مستثمرات فلاحية، صناعيون، موزعون، مستثمرون، هيئات رقابة، مخابر وهيئات تمويل.",
      },

      results: {
        eyebrow: "النتائج التجريبية",
        title: "أداء ملحوظ على الشعير",
        description:
          "تمثل القيم المعروضة أعلى الزيادات المسجلة خلال التجارب المقارنة المنجزة باستعمال اتحادات ALGOFERT-BIO®.",
        cards: [
          {
            value: 357,
            title: "المردود لكل سنبلة",
            description:
              "أعلى زيادة سُجلت مع الاتحاد R5 + RB4 مقارنة بالشاهد غير الملقح.",
          },
          {
            value: 184,
            title: "عدد الحبوب في السنبلة",
            description:
              "أعلى تحسن سُجل مع الاتحاد R5 + RB4 ضمن ظروف التجربة.",
          },
          {
            value: 61,
            title: "وزن ألف حبة",
            description:
              "أعلى تحسن في وزن ألف حبة سُجل مع الاتحاد R5 + RB4.",
          },
        ],
        analysisEyebrow: "تحليل مقارن",
        analysisTitle: "عدد الحبوب في السنبلة ووزن ألف حبة",
        analysisDescription:
          "مقارنة الشاهد غير الملقح بالاتحادات الميكروبية الثلاثة المقيمة في الحقل.",
        chartAlt: "نتائج مقارنة لـ ALGOFERT-BIO على الشعير",
        disclaimer:
          "تعكس النتائج المعروضة الظروف التجريبية التي أُنجزت فيها الاختبارات، ولا تضمن الحصول على المردود نفسه في جميع الحقول أو تحت مختلف الظروف الترابية والمناخية.",
      },
      contactForm: {
        nameLabel: "الاسم واللقب *",
        namePlaceholder: "أدخل اسمك",
        organizationLabel: "الهيئة أو المؤسسة",
        organizationPlaceholder: "شركة أو مؤسسة",
        emailLabel: "البريد الإلكتروني *",
        emailPlaceholder: "your@email.com",
        subjectLabel: "الموضوع *",
        subjectPlaceholder: "اختر موضوعًا",
        subjects: {
          scientific: "شراكة علمية",
          agricultural: "تجربة زراعية",
          industrial: "شراكة صناعية",
          investment: "استثمار وتمويل",
          distribution: "التوزيع",
          other: "طلب آخر",
        },
        messageLabel: "الرسالة *",
        messagePlaceholder: "قدم طلبك بإيجاز...",
        submit: "إرسال الطلب",
        loading: "جارٍ الإرسال...",
        success: "تم إرسال رسالتك بنجاح.",
        error: "تعذر إرسال الرسالة.",
        unknownError: "حدث خطأ أثناء إرسال الرسالة.",
      },
      footer: {
        signature: "ثمرة البحث العلمي الجزائري، في خدمة الزراعة المستدامة.",
        description: "مشروع لتطوير مجموعة من الأسمدة الحيوية الميكروبية PGPR القائمة على اتحادات بكتيرية جزائرية محلية.",
        department: "قسم التكنولوجيا الحيوية",
        university: "جامعة العلوم والتكنولوجيا محمد بوضياف بوهران",
        copyright: "© 2026 ALGOFERT-BIO®. جميع الحقوق محفوظة.",
        incubator: "مشروع مرفق من حاضنة USTO-MB",
      },
    },
  },
} as const;
