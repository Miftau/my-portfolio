export type PageTab = "about" | "resume" | "portfolio" | "contact";

export type ProjectFilterCategory =
  | "All"
  | "Web Platforms & SaaS"
  | "Applications"
  | "Web Development"
  | "Graphics Design";

export interface ServiceItem {
  title: string;
  description: string;
  icon: string;
  iconAlt: string;
}

export interface ValueItem {
  id: string;
  title: string;
  description: string;
  icon: "compass" | "handshake" | "shield" | "progress";
}

export interface TestimonialItem {
  id: string;
  name: string;
  date: string;
  dateTime: string;
  avatar: string;
  avatarAlt: string;
  quote: string;
}

export interface ClientItem {
  name: string;
  logo: string;
  url?: string;
}

export interface TimelineEntry {
  title: string;
  organization?: string;
  period: string;
  label?: string;
  detail?: string;
  highlights?: string[];
}

export interface CertificationEntry {
  title: string;
  issuer?: string;
  year: string;
}

export interface SkillGroup {
  category: string;
  skills: string[];
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectFilterCategory, "All">;
  url?: string;
  ctaLabel?: string;
  image: string;
  imageAlt: string;
  featured?: boolean;
  summary: string;
  description: string;
  highlights: string[];
  tags: string[];
}

export const PROFILE = {
  name: "Yusuf Muftaudeen",
  displayName: "YUSUF MUFTAUDEEN (DEV. PROGRESS)",
  role: "AI Engineer & Full-Stack Developer",
  avatar: "/images/progress2.png",
  email: "muftaudeenyusufbabatunde@gmail.com",
  phoneDisplay: "+234 (0) 704 581 9352",
  phoneHref: "tel:+2347045819352",
  githubLabel: "Repositories",
  githubUrl: "https://github.com/Miftau",
  location: "Ibadan, Oyo State, NIGERIA",
  socials: [
    {
      name: "Facebook",
      url: "https://www.facebook.com/berberthunday.tiamiyu",
    },
    {
      name: "Twitter",
      url: "https://twitter.com/pimconcepts",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/yusuf-muftaudeen-7b967321b",
    },
  ],
  aboutParagraphs: [
    "I am a results-driven AI Engineer, Full-Stack Developer, and Chief Technical Officer with 6+ years of experience architecting scalable, intelligent web and mobile applications across Nigeria, Qatar, and the UK. My engineering work blends machine learning classification, real-time data preprocessing pipelines, LLM integration, and computer vision foundations with resilient production backends in Python (Django, Flask), Node.js, and Java Spring Boot.",
    "Beyond technical depth, I believe meaningful engineering begins with deep listening, clear architecture, and real accountability. Whether leading enterprise technical strategy at MODINS, mentoring future defenders as a Cyber Security Instructor, or building high-throughput fraud detection systems and AI virtual labs, I focus on translating complex operational challenges into secure, user-centric products built to endure.",
    "Guided by integrity, craftsmanship, and continuous progress—and strengthened by an interdisciplinary foundation in Computer Science and Microbiology—I treat every engagement as a long-term partnership dedicated to measurable performance, security, and real-world impact.",
  ],
} as const;

export const PROFESSIONAL_VALUES: ValueItem[] = [
  {
    id: "purpose",
    title: "Purpose-Driven Engineering",
    description:
      "Every architectural choice serves a clear human or business outcome—prioritizing usefulness, clarity, and real impact over unnecessary complexity.",
    icon: "compass",
  },
  {
    id: "empathy",
    title: "Client Empathy & Transparency",
    description:
      "Listening closely, asking the right questions, and communicating openly from initial discovery through launch and long-term iteration.",
    icon: "handshake",
  },
  {
    id: "craft",
    title: "Craftsmanship & Reliability",
    description:
      "Writing maintainable code and designing polished, resilient products that perform dependably at scale and honor every deadline.",
    icon: "shield",
  },
  {
    id: "progress",
    title: "Continuous Progress",
    description:
      "Staying grounded in fundamentals while advancing with modern full-stack, cloud, and AI practices so every client benefits from forward-looking solutions.",
    icon: "progress",
  },
];

export const SERVICES: ServiceItem[] = [
  {
    title: "AI & Machine Learning",
    description:
      "End-to-end LLM integrations, ML classification, fraud detection architectures, data preprocessing pipelines, and MLOps workflows.",
    icon: "/images/icon-design.svg",
    iconAlt: "AI and machine learning icon",
  },
  {
    title: "Full-Stack Web Engineering",
    description:
      "Scalable web platforms and APIs engineered with Next.js, React, TypeScript, Python (Django/Flask), Node.js, and Java Spring Boot.",
    icon: "/images/icon-dev.svg",
    iconAlt: "Full-stack web development icon",
  },
  {
    title: "Cross-Platform Mobile Apps",
    description:
      "High-performance mobile applications built with React Native, real-time WebSockets, GPS capabilities, and seamless API synchronization.",
    icon: "/images/icon-app.svg",
    iconAlt: "Mobile app development icon",
  },
  {
    title: "Cloud, DevOps & Security",
    description:
      "AWS cloud data strategy, CI/CD automation, penetration testing, security governance, and custom analytics dashboards.",
    icon: "/images/icon-dev.svg",
    iconAlt: "Cloud and security engineering icon",
  },
];

export const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "ad-dars",
    name: "AD-DARS ACADEMY",
    date: "14 June, 2023",
    dateTime: "2023-06-14",
    avatar: "/images/avatar-1.png",
    avatarAlt: "AD-DARS Academy",
    quote:
      "What impressed me most about Dev. Yusuf was his ability to take a vague idea and turn it into something beautiful and functional. He listened closely, asked the right questions, and infused the project with originality and heart. The end result was better than I could've imagined.",
  },
  {
    id: "whis-ceo",
    name: "WHIS CEO",
    date: "22 October, 2023",
    dateTime: "2023-10-22",
    avatar: "/images/avatar-2.png",
    avatarAlt: "WHIS CEO",
    quote:
      "Dev. YUSUF was hired to create a school website. I was very pleased with the work done. He has a lot of experience and is very concerned about the needs of the client. He gently and respectfully listens to every detail to deliver the best quality application.",
  },
  {
    id: "mr-lookman",
    name: "Mr Lookman",
    date: "18 March, 2024",
    dateTime: "2024-03-18",
    avatar: "/images/avatar-3.png",
    avatarAlt: "Mr Lookman",
    quote:
      "Watching Dev. Progress grow into such a thoughtful and skilled professional has been incredibly rewarding. He brings both a strategic mindset and a personal passion to his work, which is a rare combination. I'm confident he will continue to create meaningful, impactful work wherever he goes.",
  },
  {
    id: "mr-abdullahi",
    name: "Mr Abdullahi",
    date: "05 August, 2024",
    dateTime: "2024-08-05",
    avatar: "/images/avatar-4.png",
    avatarAlt: "Mr Abdullahi",
    quote:
      "I've had the pleasure of working alongside Dev. YUSUF for over a year, and he has consistently brought creativity, focus, and a positive attitude to every project. Whether we were under tight deadlines or exploring new ideas, Yusuf was the person everyone wanted on their team.",
  },
];

export const CLIENTS: ClientItem[] = [
  {
    name: "Daaru-l-Ilm Islamic Studies",
    logo: "/images/Daaru Blue side.png",
    url: "https://www.daaru-l-ilm.org/",
  },
  { name: "Day Care", logo: "/images/Day care.JPG" },
  { name: "Partner Brand", logo: "/images/LOGO.png" },
  {
    name: "Wisdom House Islamic School",
    logo: "/images/Wisdom school.png",
    url: "https://whischool.com",
  },
  { name: "NAMS", logo: "/images/nams1.png" },
  {
    name: "Progress ICT",
    logo: "/images/Progress logo.jpg",
    url: "https://progressict.com.ng",
  },
];

export const EDUCATION: TimelineEntry[] = [
  {
    title: "B.Sc. in Computer Science",
    organization: "University of the People",
    period: "2021 — 2027",
  },
  {
    title: "B.Sc. in Microbiology",
    organization: "University of Ilorin",
    period: "2021 — 2026",
  },
  {
    title: "Diploma in Web Development",
    organization: "New Horizon Computer Learning Center, Nigeria",
    period: "2012",
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "Chief Technical Officer",
    organization: "MODINS NIG. LTD — Nigeria",
    period: "March 2026 — Present",
    highlights: [
      "Direct enterprise-wide technical strategy, system architecture, and product roadmaps across proprietary clinical systems and educational management platforms.",
      "Lead engineering teams in architecting scalable full-stack web and mobile applications integrated with secure APIs, automated data workflows, and robust cloud deployments.",
      "Establish engineering standards, CI/CD pipelines, and data security governance to ensure compliance, high availability, and optimal software performance.",
    ],
  },
  {
    title: "Cyber Security Instructor",
    organization: "TECHEND STEM — Oyo, Nigeria",
    period: "2024 — Present",
    highlights: [
      "Design and deliver comprehensive curricula covering cybersecurity fundamentals, network defense protocols, and penetration testing methodologies.",
      "Facilitate hands-on lab environments covering ethical hacking, vulnerability assessments, secure coding practices, and threat analysis.",
    ],
  },
  {
    title: "Senior AI & Full-Stack Developer (Contract)",
    organization: "Triple A HOLDING — Qatar (Remote)",
    period: "December 2021 — 2024",
    highlights: [
      "Co-led the architectural design and deployment of predictive models and machine learning classification systems integrated directly into enterprise web platforms.",
      "Built high-throughput Python (Flask/Django) data preprocessing pipelines to clean and transform multi-source streams for real-time fraud detection architectures.",
      "Engineered responsive React and Next.js interfaces and real-time WebSocket data streaming to monitor model performance post-deployment.",
      "Conducted deep performance profiling and frontend refactoring, reducing page load times by 40% across data-heavy workflows.",
    ],
  },
  {
    title: "AI & Full-Stack Developer",
    organization: "DAARU-L-ILM ISLAMIC STUDIES — Luton, UK (Remote)",
    period: "May 2018 — Present",
    highlights: [
      "Architected custom school management application modules, including automated dynamic ID card generation and smart institutional portals.",
      "Designed an interactive custom admin dashboard with advanced data visualizations translating platform analytics into actionable business intelligence.",
      "Partnered with Product Management to define technical requirements and data architectures, driving a 20% increase in sprint development efficiency.",
      "Led Agile sprint planning, stand-ups, and continuous delivery with adaptive cross-device interfaces and reliable API synchronization.",
    ],
  },
];

export const CERTIFICATIONS: CertificationEntry[] = [
  {
    title: "AWS AI Scholar",
    issuer: "Amazon Web Services",
    year: "2025",
  },
  {
    title: "Certified AWS Data Strategist",
    issuer: "Amazon Web Services",
    year: "2020",
  },
  {
    title: "ALX Fullstack Development Graduate",
    issuer: "ALX Africa",
    year: "2021",
  },
  {
    title: "ALX JavaScript Foundation",
    issuer: "Udacity",
    year: "2019",
  },
];

export const SKILL_GROUPS: SkillGroup[] = [
  {
    category: "Artificial Intelligence & ML",
    skills: [
      "Machine Learning Classification",
      "Data Preprocessing Pipelines",
      "Fraud Detection Architectures",
      "LLM Integration",
      "Predictive Modeling",
      "Computer Vision Foundations",
      "MLOps Workflows",
    ],
  },
  {
    category: "Backend & Data Engineering",
    skills: [
      "Python (Django, Flask)",
      "Node.js & Express",
      "Java (Spring Boot)",
      "MySQL",
      "RESTful APIs",
      "WebSockets",
      "Cloud Data Strategy",
    ],
  },
  {
    category: "Frontend & Mobile Development",
    skills: [
      "JavaScript (ES6+)",
      "TypeScript",
      "React",
      "Next.js",
      "React Native",
      "HTML5 & CSS3",
      "Tailwind CSS",
      "Performance Optimization",
    ],
  },
  {
    category: "Tools, DevOps & Security",
    skills: [
      "Amazon Web Services (AWS)",
      "Git / GitLab Workflows",
      "CI/CD Pipelines",
      "Test-Driven Development (TDD)",
      "Penetration Testing",
      "Admin Dashboards & Data Viz",
    ],
  },
];

export const PROJECT_CATEGORIES: ProjectFilterCategory[] = [
  "All",
  "Web Platforms & SaaS",
  "Applications",
  "Web Development",
  "Graphics Design",
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "solcluster",
    title: "SOLCLUSTER",
    subtitle: "Innovation & Project Orchestration Platform",
    category: "Web Platforms & SaaS",
    url: "https://solcluster.vercel.app/",
    ctaLabel: "Visit Live Platform",
    image: "/images/projects/solcluster.jpg",
    imageAlt: "SOLCLUSTER Innovation Operating System preview",
    featured: true,
    summary:
      "An innovation operating system powered by the proprietary FOCUS matching engine—uniting modular tech projects into cohesive, investor-ready Solution Clusters.",
    description:
      "SOLCLUSTER transforms how complex industry challenges meet executable engineering solutions. Powered by the proprietary FOCUS matching engine, it scans and pairs complementary, modular technology projects into unified Solution Clusters (Solution Composites)—eliminating integration guesswork while giving teams and investors a transparent path from blueprint to capital.",
    highlights: [
      "Automated tech-stack and API compatibility matching powered by the FOCUS engine",
      "Joint dependency mapping to coordinate modular Solution Composites seamlessly",
      "Shared real-time Kanban boards and dedicated community collaboration spaces",
      "Investor portal connecting vetted, high-potential Solution Clusters directly to capital",
    ],
    tags: [
      "Innovation OS",
      "FOCUS Engine",
      "API Matching",
      "Real-Time Kanban",
      "Investor Portal",
    ],
  },
  {
    id: "modinsclinic",
    title: "MODINSClinic",
    subtitle: "Hospital & Clinical Operations Management SaaS",
    category: "Web Platforms & SaaS",
    url: "https://modinsclinic.vercel.app/",
    ctaLabel: "Explore Platform",
    image: "/images/projects/modinsclinic.jpg",
    imageAlt: "MODINSClinic Hospital & Clinical Operations SaaS preview",
    featured: true,
    summary:
      "Cloud-native healthcare operations hub replacing siloed legacy systems with AI-assisted EHR, telemedicine, automated HMO billing, and pharmacy control.",
    description:
      "Purpose-built for private clinics, hospitals, and multi-branch medical practices, MODINSClinic unifies clinical care and back-office execution in a single cloud-native workspace. By pairing longitudinal patient records with an AI clinical scribe and automated revenue workflows, medical teams spend less time on paperwork and more time delivering exceptional care.",
    highlights: [
      "Longitudinal Electronic Health Records (EHR) with an AI clinical scribe auto-generating SOAP notes and ICD-10 diagnostic codes",
      "Secure built-in telemedicine consultations for seamless remote patient care",
      "Automated clinical order billing and end-to-end HMO claims processing",
      "Real-time pharmacy inventory management with proactive expiry alerts",
      "GPS-geofenced staff attendance tracking tailored for multi-branch facilities",
    ],
    tags: [
      "Healthcare SaaS",
      "AI Clinical Scribe",
      "EHR & ICD-10",
      "Telemedicine",
      "HMO Claims",
    ],
  },
  {
    id: "aipacyb-lab",
    title: "AIPACYB Lab",
    subtitle: "Guided Interactive Cyber & AI Security Playground",
    category: "Web Platforms & SaaS",
    url: "https://aipacyb-lab.vercel.app/",
    ctaLabel: "Launch Playground",
    image: "/images/projects/aipacyb-lab.jpg",
    imageAlt: "AIPACYB Lab Interactive Cyber and AI Security Playground preview",
    featured: true,
    summary:
      "A hands-on cyber, AI/ML, and hardware security lab platform delivering 248 guided labs and 851 auto-verified tasks inside live isolated browser sandboxes.",
    description:
      "AIPACYB Lab reimagines cybersecurity engineering education through learn-by-doing execution. Spanning absolute beginner programming foundations through advanced adversarial AI defense, hardware fault injection, and autonomous agent red teaming, every mission runs inside real isolated sandboxes with step-by-step guidance and instant automated verification.",
    highlights: [
      "248 hands-on labs and 851 automatically verified tasks across 10 structured tracks (Beginner to Advanced)",
      "Multi-runtime isolated sandboxes: FlowLab visual runtime, Python/Pyodide, Web security, and Kali Linux CLI",
      "Frontier modules covering OWASP LLM defense, Autonomous Agent Red Teaming, and Hardware Fault Injection (EMFI)",
      "Adaptive Placement Test, Security Tools & Hardware Atlas, Live Threat Feed, and verifiable credentials",
    ],
    tags: [
      "Cybersecurity",
      "AI Security",
      "Isolated Sandboxes",
      "Python / Kali Linux",
      "EdTech Platform",
    ],
  },
  {
    id: "microbelab",
    title: "MicrobeLab",
    subtitle: "AI-Driven Virtual Microbiology Laboratory",
    category: "Web Platforms & SaaS",
    url: "https://microbe-lab.vercel.app/",
    ctaLabel: "Open Virtual Lab",
    image: "/images/projects/microbelab.jpg",
    imageAlt: "MicrobeLab AI-Driven Virtual Microbiology Laboratory preview",
    featured: true,
    summary:
      "An AI-powered virtual wet laboratory enabling scientists, universities, and biotech teams to simulate microbiological experiments rapidly in software.",
    description:
      "MicrobeLab empowers researchers, academic institutions, and biotech innovators to model complex microbiological workflows without the cost, turnaround time, or biosafety constraints of physical wet labs. Combining ten specialized scientific modules with deep-learning phenotypic prediction, it accelerates hypothesis validation and experimental design.",
    highlights: [
      "10 specialized modules spanning Genomics & Sequencing, Antimicrobial Resistance, Synthetic Biology, Metagenomics, and Virology",
      "Deep learning models engineered to predict phenotypic behavior and microbial strain mutations",
      "Multi-variable biological simulation workbench for repeatable computational experiments",
      "Automated protocol generation equipped with integrated laboratory safety guidelines",
    ],
    tags: [
      "Biotech AI",
      "Deep Learning",
      "Virtual Wet Lab",
      "Genomics & AMR",
      "Scientific SaaS",
    ],
  },
  {
    id: "safenaija",
    title: "SafeNaija",
    subtitle: "Personal Safety & Emergency Response Android App",
    category: "Applications",
    url: "https://play.google.com/store/apps/details?id=com.safenaija.mobile",
    ctaLabel: "View on Google Play",
    image: "/images/projects/safenaija.jpg",
    imageAlt: "SafeNaija Personal Safety Android Mobile App preview",
    featured: true,
    summary:
      "Published Android safety app for SafeNaija Alert Networks broadcasting real-time danger notifications, live GPS location sharing, and map-based incident alerts.",
    description:
      "Built for SafeNaija Alert Networks and live on the Google Play Store, SafeNaija is a mission-critical personal safety application keeping citizens across Nigeria informed and connected during emergencies. Its low-friction interface lets users trigger instant danger alerts, coordinate trusted contacts, and visualize live neighborhood threats at a glance.",
    highlights: [
      "Categorized rapid alerts for kidnapping, robbery, road accidents, health crises, and missing persons",
      "Instant push notification broadcasts keeping nearby communities alerted in real time",
      "Live GPS location sharing directly with designated emergency contacts",
      "Missing-person photo uploads paired with interactive Google Maps incident visualization",
    ],
    tags: [
      "Android App",
      "Google Play Store",
      "Real-Time GPS",
      "Emergency Alerts",
      "Google Maps",
    ],
  },
  {
    id: "libyan-spider",
    title: "Libyan Spider",
    subtitle: "Cloud Services, Web Hosting & Digital Infrastructure",
    category: "Web Platforms & SaaS",
    url: "https://libyanspider.com/",
    ctaLabel: "Visit Website",
    image: "/images/projects/libyanspider.jpg",
    imageAlt: "Libyan Spider Cloud Services and Digital Infrastructure preview",
    featured: true,
    summary:
      "Enterprise cloud, hosting, and accredited .ly domain platform for one of Libya's pioneering digital infrastructure and cybersecurity providers since 2002.",
    description:
      "Founded in 2002, Libyan Spider stands at the core of Libya's national IT and cloud ecosystem. The platform presents an enterprise-ready gateway to mission-critical domain registration, resilient Infrastructure-as-a-Service, cybersecurity defense, and custom software solutions built for high-growth businesses and institutions.",
    highlights: [
      "Leading accredited registrar for Libya's .ly country-code domain alongside global TLDs",
      "Cloud Infrastructure-as-a-Service featuring VPS, dedicated servers, and managed Kubernetes (KaaS)",
      "Enterprise cybersecurity solutions, business email hosting, and bespoke web & mobile engineering",
      "Accessible no-code drag-and-drop website builder enabling rapid business launches",
    ],
    tags: [
      "Cloud IaaS",
      ".ly Domain Registrar",
      "Managed Kubernetes",
      "Cybersecurity",
      "Enterprise Portal",
    ],
  },
  {
    id: "daaru-l-ilm",
    title: "DAARU-L-ILM",
    subtitle: "Islamic Education & Quranic Academy (Luton, UK)",
    category: "Web Platforms & SaaS",
    url: "https://www.daaru-l-ilm.org/",
    ctaLabel: "Visit Academy",
    image: "/images/daaru-l-ilm.png",
    imageAlt: "DAARU-L-ILM Islamic Education and Quranic Academy website",
    featured: true,
    summary:
      "Global academic platform for the Luton, UK academy delivering structured, scholar-led Quranic and Islamic studies through online and in-person instruction.",
    description:
      "Serving learners locally in Luton, UK and internationally, Daaru-l-Ilm pairs authentic, scholar-led Islamic scholarship with a seamless modern digital learning experience. As AI & Full-Stack Developer since 2018, I architected custom school management modules, dynamic ID card generation, smart institutional portals, and an interactive analytics dashboard supporting tiered enrollment and hybrid classrooms.",
    highlights: [
      "Tiered academic progression spanning Foundation (Temhidiyah), Intermediate (Ibtidaaiyah), and Advanced (Idaadiyah) levels",
      "Core disciplines in Quranic recitation (Tajweed), systematic Hifz memorization, Fiqh, Hadith, and Arabic grammar (Nahw & Sarf)",
      "Custom institutional portal modules including automated dynamic ID card generation and interactive admin analytics dashboards",
      "Hybrid instructional delivery bridging Luton in-person cohorts, global online classes, and bespoke 1-on-1 private tuition",
    ],
    tags: [
      "EdTech Academy",
      "Custom LMS & Analytics",
      "UK Institution",
      "AI & Full-Stack",
    ],
  },
  {
    id: "progress-ict",
    title: "Website Agency",
    subtitle: "Progress ICT — Digital Agency & Web Solutions",
    category: "Web Development",
    url: "https://progressict.com.ng",
    ctaLabel: "Visit Website",
    image: "/images/Screenshot 2023-10-04 204345.png",
    imageAlt: "Progress-ICT Website Agency preview",
    summary:
      "Modern agency storefront for Progress ICT highlighting web engineering, branding, and digital transformation services for growing businesses.",
    description:
      "A clean, conversion-driven agency web platform built for Progress ICT to showcase digital services, client case studies, and consultation pathways for organizations seeking dependable web and ICT execution.",
    highlights: [
      "Service showcase tailored to web design, software development, and brand strategy",
      "Responsive layout engineered for fast loading across desktop and mobile",
      "Streamlined lead-capture and client inquiry flows",
    ],
    tags: ["Agency Web", "Responsive UI", "Lead Generation"],
  },
  {
    id: "ai-article-humanizer",
    title: "AI Article Humanizer",
    subtitle: "Natural-Language Content Refinement Web App",
    category: "Web Development",
    url: "https://progress-humanizer.onrender.com/",
    ctaLabel: "Try Live App",
    image: "/images/humanizer.png",
    imageAlt: "AI Article Humanizer web application preview",
    summary:
      "Web-based text transformation utility that polishes robotic drafts into fluent, natural, publication-ready prose.",
    description:
      "Built for writers, editors, and content teams, AI Article Humanizer streamlines editorial workflows by restructuring stiff, repetitive drafts into clear, authentic, human-sounding articles.",
    highlights: [
      "Real-time text processing pipeline with clean side-by-side workflow",
      "Focused distraction-free editorial interface",
      "Cloud-deployed web application accessible on any device",
    ],
    tags: ["AI Tooling", "NLP Web App", "Full-Stack"],
  },
  {
    id: "data-visualization",
    title: "Data Visualization Site",
    subtitle: "Interactive Analytics & Charting Web App",
    category: "Web Development",
    url: "https://progress-visualize.onrender.com/",
    ctaLabel: "Open App",
    image: "/images/progress_visualize.png",
    imageAlt: "Data Visualization web application preview",
    summary:
      "Interactive web platform for turning raw datasets into clear, visual charts and decision-ready analytical insights.",
    description:
      "An intuitive analytics web application designed to help users explore trends, compare metrics, and communicate quantitative insights through responsive interactive visualizations.",
    highlights: [
      "Interactive chart generation from structured user datasets",
      "Clean dashboard styling optimized for clarity and readability",
      "Web-accessible reporting workflow built for rapid exploration",
    ],
    tags: ["Data Analytics", "Interactive Charts", "Web App"],
  },
  {
    id: "task-manager",
    title: "Task Manager",
    subtitle: "Productivity & Workflow Application",
    category: "Applications",
    image: "/images/project-8.jpg",
    imageAlt: "Task Manager application preview",
    summary:
      "Focused productivity application built to help individuals and small teams organize priorities, track milestones, and stay on schedule.",
    description:
      "A streamlined task orchestration app engineered for daily execution, combining clear task states, priority organization, and frictionless progress tracking.",
    highlights: [
      "Structured task lifecycle and priority tracking",
      "Clean, distraction-free interface built for speed",
      "Responsive layout tailored for daily team workflows",
    ],
    tags: ["Productivity App", "Workflow UI", "Application"],
  },
  {
    id: "atrok",
    title: "ATROK",
    subtitle: "Visual Identity & Promotional Design",
    category: "Graphics Design",
    image: "/images/g-1.jpg",
    imageAlt: "ATROK brand graphics design",
    summary:
      "High-impact visual branding and promotional artwork crafted to establish strong market recall.",
    description:
      "Bespoke graphic identity and marketing visual suite created for ATROK, combining bold typography, balanced hierarchy, and cohesive brand color direction.",
    highlights: [
      "Custom promotional layout and brand visual language",
      "Print- and digital-ready high-resolution artwork",
    ],
    tags: ["Brand Design", "Visual Identity", "Graphics"],
  },
  {
    id: "rajack",
    title: "RAJACK",
    subtitle: "Brand & Campaign Graphic Design",
    category: "Graphics Design",
    image: "/images/g-2.jpg",
    imageAlt: "RAJACK brand graphics design",
    summary:
      "Clean commercial brand collateral engineered for clarity across digital campaigns and print touchpoints.",
    description:
      "Visual campaign assets and promotional design created for RAJACK to elevate audience engagement and present a polished commercial identity.",
    highlights: [
      "Consistent visual hierarchy and eye-catching composition",
      "Tailored for social, web, and print distribution",
    ],
    tags: ["Commercial Design", "Campaign Art", "Graphics"],
  },
  {
    id: "talkless",
    title: "TALKLESS",
    subtitle: "Creative Direction & Graphic Artwork",
    category: "Graphics Design",
    image: "/images/g-4.jpg",
    imageAlt: "TALKLESS creative graphics design",
    summary:
      "Distinctive graphic design piece blending modern typography with memorable visual storytelling.",
    description:
      "Creative visual artwork produced for TALKLESS with an emphasis on expressive styling, strong contrast, and immediate audience recognition.",
    highlights: [
      "Modern typographic composition and color balancing",
      "Versatile brand asset ready for multi-channel rollout",
    ],
    tags: ["Creative Direction", "Typography", "Graphics"],
  },
  {
    id: "raji-onipata",
    title: "Raji Onipata",
    subtitle: "Brand Identity & Media Design",
    category: "Graphics Design",
    image: "/images/g-6.jpg",
    imageAlt: "Raji Onipata brand graphics design",
    summary:
      "Custom visual identity and digital promotional design crafted for clear audience communication.",
    description:
      "Tailored graphic design suite developed for Raji Onipata, pairing clean visual composition with authentic brand messaging.",
    highlights: [
      "Bespoke identity styling and layout precision",
      "Optimized for digital media and print clarity",
    ],
    tags: ["Brand Collateral", "Graphic Design", "Media"],
  },
];
