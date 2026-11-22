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
  period: string;
  label: string;
  detail: string;
}

export interface SkillEntry {
  name: string;
  level: number;
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
  role: "Software Engineer",
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
    "I'm a Creative Director and Full-Stack Software Engineer from Ibadan, Nigeria, specializing in building scalable web platforms, SaaS systems, AI-powered tools, and mobile applications. I enjoy turning complex operational challenges into simple, intuitive, high-impact digital products.",
    "My focus is delivering software that is both deeply functional and visually refined—combining clean architecture, responsive user experience, and dependable performance. From healthcare and biotech platforms to cybersecurity sandboxes, cloud infrastructure, and educational academies, I partner with ambitious organizations to bring their vision to life.",
  ],
} as const;

export const SERVICES: ServiceItem[] = [
  {
    title: "Web Design",
    description:
      "Modern, conversion-focused interfaces crafted with precision, accessibility, and strong visual identity.",
    icon: "/images/icon-design.svg",
    iconAlt: "Web design icon",
  },
  {
    title: "Web Development",
    description:
      "Full-stack web applications and cloud SaaS platforms built with Next.js, TypeScript, and scalable APIs.",
    icon: "/images/icon-dev.svg",
    iconAlt: "Web development icon",
  },
  {
    title: "Mobile Apps",
    description:
      "Production-grade Android and cross-platform mobile applications engineered for speed and real-world reliability.",
    icon: "/images/icon-app.svg",
    iconAlt: "Mobile app icon",
  },
  {
    title: "Software Development",
    description:
      "Custom end-to-end software systems, AI workflows, and interactive platforms tailored to complex business needs.",
    icon: "/images/icon-dev.svg",
    iconAlt: "Software development icon",
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
    title: "University of the People",
    period: "2021 — Present",
    label: "Course:",
    detail: "BSc. Computer Science",
  },
  {
    title: "ALX Full-Stack Development",
    period: "2022 — 2023",
    label: "Course:",
    detail: "Full-Stack Software Engineering with Python",
  },
  {
    title: "New Horizon Computer Learning Center",
    period: "2020 — 2021",
    label: "Course:",
    detail: "Diploma in Web Development",
  },
];

export const EXPERIENCE: TimelineEntry[] = [
  {
    title: "WISDOM HOUSE ISLAMIC SCHOOL, NG",
    period: "2023 — Present",
    label: "Position:",
    detail: "Web Developer and Administrator",
  },
  {
    title: "DAARU-L-ILM ISLAMIC STUDIES, UK",
    period: "2020 — Present",
    label: "Position:",
    detail: "Chief Technical Officer (CTO)",
  },
  {
    title: "CITADEL OF KNOWLEDGE, UK",
    period: "2018 — 2020",
    label: "Position:",
    detail: "Website Developer & Administrator",
  },
  {
    title: "OXFORD AFRICA LTD, NIGERIA",
    period: "2015 — 2018",
    label: "Position:",
    detail: "Graphics Designer",
  },
];

export const SKILLS: SkillEntry[] = [
  { name: "Web Design & UI Architecture", level: 90 },
  { name: "Full-Stack & Next.js Development", level: 95 },
  { name: "Server-Side Development & APIs", level: 95 },
  { name: "Database Engineering", level: 95 },
  { name: "WordPress & CMS Platforms", level: 95 },
  { name: "Graphic Design & Branding", level: 85 },
  { name: "Teamwork & Technical Leadership", level: 95 },
  { name: "Client Communication", level: 90 },
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
      "Serving learners locally in Luton, UK and internationally, Daaru-l-Ilm pairs authentic, scholar-led Islamic scholarship with a seamless modern digital learning experience. As Chief Technical Officer, I oversee the academy's web ecosystem supporting tiered curriculum enrollment, live online classrooms, and personalized private instruction.",
    highlights: [
      "Tiered academic progression spanning Foundation (Temhidiyah), Intermediate (Ibtidaaiyah), and Advanced (Idaadiyah) levels",
      "Core disciplines in Quranic recitation (Tajweed), systematic Hifz memorization, Fiqh, Hadith, and Arabic grammar (Nahw & Sarf)",
      "Hybrid instructional delivery bridging Luton in-person cohorts and global online students",
      "Bespoke 1-on-1 private tuition pathways with dedicated student support",
    ],
    tags: [
      "EdTech Academy",
      "Online & Hybrid LMS",
      "UK Institution",
      "CTO Leadership",
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
