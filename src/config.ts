export const siteConfig = {
  name: "Enrique E. Sánchez-Castro",
  title: "PhD Candidate · Stem Cell Biology · Washington University in St. Louis",
  description: "Enrique Sánchez-Castro — PhD Candidate in Developmental, Regenerative & Stem Cell Biology at WashU. Research on β-cell differentiation for diabetes therapy. Nobel Prize Dialogue delegate.",
  accentColor: "#1A4F6E",

  colors: {
    primaryDark: "#1A4F6E",
    primary: "#27668C",
    primaryLight: "#8AABB8",
    accent: "#D97C2B",
    surface: "#EFF3F5",
    surfaceLight: "#F7F9FA",
  },

  tagline: "From mentoring diabetic youth to engineering β-cells — a scientist driven by purpose.",

  stats: [
    { value: "4", label: "Publications" },
    { value: "30+", label: "Programs Delivered" },
    { value: "1,000+", label: "Attendees Reached" },
    { value: "4", label: "Languages" },
  ],

  quote: {
    text: "Research should serve people. Every experiment in my lab connects back to a child I once mentored who was learning to live with diabetes.",
    author: "Enrique Sánchez-Castro",
  },

  // Research Focus (replaces Services)
  services: [
    {
      icon: "heart",
      title: "Diabetes & β-Cell Engineering",
      description: "Improving the generation and function of insulin-producing pancreatic β-cells from human pluripotent stem cells for diabetes therapy.",
      items: ["Stem cell differentiation", "In vitro & computational approaches", "Millman Lab, WashU", "HIRN DePOSIT Award"],
    },
    {
      icon: "shield",
      title: "Global Health & Policy",
      description: "Bridging biotechnology and health policy to address infectious diseases and strengthen healthcare systems in Latin America.",
      items: ["Malaria burden in Peru (Lancet)", "COVID-19 molecular diagnostics", "Genomic surveillance", "Health policy planning"],
    },
    {
      icon: "academic",
      title: "Science Communication & Leadership",
      description: "Building frameworks for student representation and making science accessible to broader audiences.",
      items: ["DBBS Student Advisory Committee", "Ciencia Papaya YouTube channel", "Nobel Prize Dialogue delegate", "80+ journal clubs coordinated"],
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
  },

  aboutMe:
    "I'm a PhD candidate at Washington University in St. Louis, where I research how to improve insulin-producing β-cells derived from stem cells — work that could one day transform diabetes treatment. My journey in science started early: at age 14, I began mentoring children newly diagnosed with type 1 diabetes through <strong>ADINA</strong> in Peru, an experience that shaped my commitment to purpose-driven research.<br><br>Beyond the lab, I've served as <strong>Senior Director of the DBBS Student Advisory Committee</strong>, delivering 30+ programs reaching 1,000+ attendees, and was selected by the <strong>Peruvian National Academy of Sciences</strong> as a delegate to the Nobel Prize Dialogue. I believe that great science happens when we build inclusive communities and communicate our discoveries with clarity and passion.",

  skills: [
    "Stem Cell Biology",
    "Molecular Genetics",
    "Flow Cytometry",
    "Bioinformatics",
    "NGS Analysis",
    "Computational Biology",
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

  // Custom: Community & Outreach
  community: [
    {
      title: "COVID-19 Molecular Diagnostics Trainer",
      org: "Peruvian National Institute of Health (INS)",
      period: "2021–2022",
      description: "Trained laboratory personnel across Peru in molecular diagnosis of SARS-CoV-2",
    },
    {
      title: "Clinical Biologist, SERUMS",
      org: "Peru Rural Health Service",
      period: "2021–2022",
      description: "Delivered clinical laboratory and telehealth services in rural areas during COVID-19",
    },
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
  ],
};
