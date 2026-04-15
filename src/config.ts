export const siteConfig = {
  name: "Eduardo \"Ed\" Sánchez-Castro",
  title: "PhD Candidate in Developmental, Stem Cell and Regenerative Biology at the Millman Lab",
  description: "Eduardo \"Ed\" Sánchez-Castro — PhD Candidate at Washington University in St. Louis investigating in vitro pancreatic islet differentiation for diabetes therapy.",
  accentColor: "#003366",

  colors: {
    primaryDark: "#002244",
    primary: "#003366",
    primaryLight: "#335c85",
    accent: "#ffa500",
    surface: "#f3f6fa",
    surfaceLight: "#f9fbfd",
  },

  // Highlight: link to manuscript on bioRxiv
  tagline: "Developed the first digital twin of in vitro pancreatic islet differentiation: a multiomic framework for cell fate prediction.",
  taglineLink: "https://www.biorxiv.org/",

  stats: [
    { value: "4", label: "Publications" },
    { value: "30+", label: "Programs Delivered" },
    { value: "1,000+", label: "Attendees Reached" },
    { value: "4", label: "Languages" },
  ],

  quote: {
    text: "Research should serve people. Every experiment in my lab connects back to a child I once mentored who was learning to live with diabetes.",
    author: "Eduardo \"Ed\" Sánchez-Castro",
  },

  // Research Focus — emphasis on Diabetes (rendered larger), Science Communication removed
  services: [
    {
      icon: "heart",
      title: "Diabetes",
      description: "Improving the generation and function of insulin-producing pancreatic β-cells from human pluripotent stem cells for diabetes therapy.",
      items: ["Stem cell differentiation", "In vitro & computational approaches", "Millman Lab, WashU", "HIRN DePOSIT Award"],
      featured: true,
    },
    {
      icon: "shield",
      title: "Global Health",
      description: "Bridging biotechnology and health policy to address infectious diseases and strengthen healthcare systems in Latin America.",
      items: ["Malaria burden in Peru (Lancet)", "COVID-19 molecular diagnostics", "Genomic surveillance", "Health policy planning"],
    },
  ],

  cta: {
    title: "Let's Connect",
    description: "Whether you're interested in collaboration, mentorship, or scientific outreach — I'd love to hear from you.",
    buttonText: "Get in Touch",
    emailSubject: "Reaching out — Portfolio",
  },

  social: {
    email: "e.sanchezcastro@wustl.edu",
    linkedin: "https://linkedin.com/in/ed-sanchez-castro",
    scholar: "https://scholar.google.com/citations?user=rV8rKY4AAAAJ&hl=es",
  },

  aboutMe:
    "I am a PhD candidate at Washington University in St. Louis, where I investigate how to improve stem cell-derived insulin-producing β-cells by understanding and directing cell fate during differentiation. My research seeks to advance cell replacement strategies for diabetes and contribute to the development of more effective therapies.<br><br>My scientific journey has been profoundly shaped by my personal experience with type 1 diabetes, diagnosed when I was 12 years old. This life-changing event inspired my commitment to finding better treatments and to raising awareness about the disease. I earned my Bachelor of Science in Genetics and Biotechnology from the Universidad Nacional Mayor de San Marcos in 2019 and later completed a Master's in Health Policies in 2022. Together, these experiences have allowed me to approach biomedical research from both a scientific and a patient-centered perspective.<br><br>Beyond the lab, I am passionate about service, mentorship, and communication. I have worked to support children with diabetes in Peru, contribute to student leadership across the academic communities I have been part of, and promote science communication efforts that bring scientific knowledge closer to the public.",

  skills: [
    "Stem Cell Biology",
    "Molecular Genetics",
    "Single-Cell Multiomics",
    "Computational Biology",
    "Bioinformatics",
    "Single-Cell RNA-seq",
    "Single-Cell ATAC-seq",
    "Flow Cytometry",
    "qPCR",
    "ELISA",
    "Glucose-Stimulated Insulin Secretion",
    "Health Policy",
    "Science Communication",
    "Student Governance",
  ],

  // Publications (replaces Projects)
  projects: [
    {
      name: "Modeling immune responses to stem cell-derived islet grafts in vivo",
      description: "Bechi Genzano C, …, <strong>Sánchez-Castro EE</strong>, et al. <em>JCI Insight</em> (submitted, 2025).",
      link: "",
      skills: ["Stem Cells", "Immunology", "In Vivo"],
    },
    {
      name: "Comparative transcriptomics of early pancreatic differentiation",
      description: "<strong>Sánchez-Castro EE</strong>, Ishahak M, Millman JR. HIRN 10th Anniversary Symposium, Bethesda, MD, 2025. Poster presentation.",
      link: "",
      skills: ["Transcriptomics", "β-Cells", "Bioinformatics"],
    },
    {
      name: "Health and economic burden due to malaria in Peru (1990–2019)",
      description: "<strong>Sánchez-Castro EE</strong>, et al. <em>Lancet Regional Health – Americas</em>. 2022;15:100347.",
      link: "https://doi.org/10.1016/j.lana.2022.100347",
      skills: ["Epidemiology", "Global Health", "GBD Study"],
    },
    {
      name: "Mesenchymal stromal cell-based therapies for muscle regeneration",
      description: "<strong>Sánchez-Castro EE</strong>, et al. <em>Frontiers in Immunology</em>. 2021;11:609961.",
      link: "https://doi.org/10.3389/fimmu.2020.609961",
      skills: ["Stem Cells", "Regenerative Medicine", "Immunology"],
    },
  ],

  // Combined Outreach & Leadership (Experience entries + Community entries unified)
  experience: [
    {
      company: "Washington University in St. Louis",
      title: "Student Representative, DBBS Operations Team",
      dateRange: "2025 – 2026",
      bullets: [
        "Led coordination across program representatives to advance DBBS modernization",
        "Helped update admissions processes and program structure standardization",
        "Inaugural student representative to the Operations Team",
      ],
    },
    {
      company: "Washington University in St. Louis",
      title: "Director, Student Advisory Committee (SAC)",
      dateRange: "2024 – 2026",
      bullets: [
        "Oversaw <strong>9 SAC branches</strong> and executed <strong>30+ programs</strong>",
        "Town halls, career-development, and community-building events reaching <strong>1,000+ attendees</strong>",
        "Recognized with <strong>WashU Medicine Drum Major Award</strong> (2026)",
      ],
    },
    {
      company: "Peruvian National Institute of Health (INS)",
      title: "COVID-19 Molecular Diagnostics Trainer",
      dateRange: "2021 – 2022",
      bullets: [
        "Trained laboratory personnel <strong>across Peru</strong> in molecular diagnosis of SARS-CoV-2",
        "Supported standardization of testing workflows nationwide",
      ],
    },
    {
      company: "UNMSM / Journal Club Program",
      title: "Director, Journal Club Program",
      dateRange: "2018 – 2021",
      bullets: [
        "Coordinated <strong>80+ journal clubs</strong> across 6 schools",
        "Standardized operations and speaker scheduling to sustain participation",
      ],
    },
  ],

  education: [
    {
      school: "Washington University in St. Louis",
      degree: "PhD in Developmental, Regenerative & Stem Cell Biology",
      dateRange: "2022 – 2027",
      achievements: [
        "Research on β-cell differentiation for diabetes therapy (Advisor: Jeffrey Millman, PhD)",
        "HIRN DePOSIT Challenge Award (2025)",
        "WashU Medicine Drum Major Award (2026)",
      ],
    },
    {
      school: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "MSc in Health Policy and Planning",
      dateRange: "2020 – 2022",
      achievements: [
        "Biotechnology-related health policy in Peru",
        "Published in Lancet Regional Health – Americas",
      ],
    },
    {
      school: "Universidad Nacional Mayor de San Marcos (UNMSM)",
      degree: "BSc in Genetics and Biotechnology",
      dateRange: "2014 – 2019",
      achievements: [
        "Research on SNPs associated with type 2 diabetes in Peruvian population",
        "Research Travel Scholarship, Peruvian National Fund for Science & Innovation",
      ],
    },
  ],

  // Custom: Awards & Recognition
  awards: [
    {
      title: "WashU Medicine Drum Major Award",
      year: "2026",
      description: "Recognized for leading integrative activities across DBBS",
    },
    {
      title: "HIRN DePOSIT Challenge Award",
      year: "2025",
      description: "Data-sharing project to advance type 1 diabetes research",
    },
    {
      title: "Nobel Prize Dialogue Delegate",
      year: "2021",
      description: "Selected by the Peruvian National Academy of Sciences",
    },
    {
      title: "National Essay Contest Winner",
      year: "2021",
      description: "\"Health of the Future\" — genomic surveillance for Peru (KeroLab by Roche)",
    },
    {
      title: "Young Latin American Leader in Biotechnology",
      year: "2020",
      description: "Recognized by Allbiotech",
    },
  ],

  // Custom: Community & Outreach (rendered together with Experience under "Outreach & Leadership")
  community: [
    {
      title: "Founder, \"Ciencia Papaya\"",
      org: "YouTube Science Channel",
      period: "2020–2021",
      description: "Created accessible content highlighting scientific advances across STEM fields",
    },
    {
      title: "Diabetes Mentor, ADINA",
      org: "Peruvian Assoc. of Diabetes in Children",
      period: "2009–2014",
      description: "Mentored newly diagnosed youth with type 1 diabetes and their families",
    },
    {
      title: "Clinical Biologist, SERUMS",
      org: "Peru Rural Health Service",
      period: "2021–2022",
      description: "Delivered clinical laboratory and telehealth services in rural areas during COVID-19",
    },
  ],
};
