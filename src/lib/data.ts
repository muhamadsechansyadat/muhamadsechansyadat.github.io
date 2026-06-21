export const profile = {
  name: "Muhamad Sechan Syadat",
  initials: "MSS",
  role: "Software Engineer",
  focus: "Backend & Full Stack Development",
  location: "Indonesia",
  availability: "On-Site · Hybrid · Remote",
  email: "muhamadsechansyadat@gmail.com",
  phone: "+62 882-1044-5417",
  linkedin: "https://linkedin.com/in/muhamad-sechan-syadat",
  github: "https://github.com/muhamadsechansyadat",
  cv: "/cv.pdf",
  yearsExperience: 5,
};

export const summary = `Software Engineer with over 5 years of experience delivering scalable web applications, enterprise systems, and digital platforms across IT Infrastructure, Education, Logistics, Human Resources, E-Commerce, and Financial Services industries. Demonstrated expertise in backend and full stack development using Laravel, Golang, Node.js, React.js, and Next.js. Experienced in designing RESTful APIs, optimizing application performance, implementing business-critical features, and collaborating with cross-functional teams to deliver reliable and maintainable software solutions.`;

export const skillGroups = [
  {
    label: "Backend",
    items: ["PHP", "Laravel", "CodeIgniter", "Golang (Gin)", "Node.js", "Express.js", "Python", "Flask", "Django"],
  },
  {
    label: "Frontend",
    items: ["React.js", "Next.js", "JavaScript ES6+", "TypeScript", "HTML5", "CSS3", "Tailwind CSS", "Bootstrap", "Alpine.js"],
  },
  {
    label: "Database",
    items: ["MySQL", "PostgreSQL", "SQL Server", "Redis"],
  },
  {
    label: "DevOps & Infra",
    items: ["Docker", "Linux", "Git", "GitHub", "Cloudflare Pages", "Vercel"],
  },
  {
    label: "Practice",
    items: [
      "RESTful API Design",
      "System Design",
      "Database Design",
      "Application Architecture",
      "Performance Optimization",
      "Agile / Scrum",
      "CMS Development",
      "Electron",
    ],
  },
] as const;

export type Experience = {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  bullets: string[];
  projects?: string[];
};

export const experiences: Experience[] = [
  {
    company: "PT Binawan Inti Teknologi",
    role: "Full Stack Developer",
    period: "Aug 2023 — Feb 2026",
    bullets: [
      "Engineered and maintained enterprise-grade web applications using Next.js, Express.js, Tailwind CSS, and Bootstrap.",
      "Developed scalable digital platforms supporting educational services, recruitment systems, and corporate operations.",
      "Collaborated with designers, stakeholders, and backend teams to translate business requirements into technical solutions.",
      "Integrated backend services and APIs to streamline workflows and improve operational efficiency.",
      "Contributed to application maintenance, performance improvements, and feature enhancements throughout the SDLC.",
    ],
    projects: [
      "BICCA Corporate Website",
      "Binawan Academic Platform",
      "WCHSS System",
      "Al Jazeerah Corporate Website",
      "Vokati Recruitment Platform",
    ],
  },
  {
    company: "PT Rembon Karya Digital",
    role: "Web & Backend Developer",
    period: "Jan 2022 — Jun 2023",
    bullets: [
      "Designed, developed, and maintained custom business applications using Laravel and Flask frameworks.",
      "Built and enhanced business-critical systems supporting education, logistics, and financial service industries.",
      "Participated in application modernization initiatives, including migration and optimization projects.",
      "Developed secure RESTful APIs and integrated third-party services.",
      "Improved application reliability through debugging, performance tuning, and code refactoring.",
    ],
    projects: [
      "Infina.id",
      "Atlas Edu Platform",
      "PAM Cargo ERP & PDS System",
      "Sharia Finance Platform Migration",
    ],
  },
  {
    company: "DropshipAja",
    role: "Web & Backend Developer",
    period: "Jan 2021 — Aug 2021",
    bullets: [
      "Developed and enhanced e-commerce platform features to improve user experience and operational efficiency.",
      "Integrated Flip payment gateway services to support secure transaction processing.",
      "Implemented marketplace-style dynamic pricing functionalities.",
      "Resolved production issues and optimized application performance to improve system stability.",
      "Collaborated with internal teams to deliver feature releases and platform improvements.",
    ],
  },
  {
    company: "PT Inet Global Indo",
    role: "Web & Backend Developer",
    period: "Oct 2019 — Jan 2021",
    bullets: [
      "Developed internal business applications supporting HR, administration, and operational processes.",
      "Designed and implemented new modules using Laravel and CodeIgniter frameworks.",
      "Maintained and enhanced legacy systems while improving application usability and performance.",
      "Collaborated with stakeholders to identify requirements and deliver effective software solutions.",
      "Participated in bug fixing, system maintenance, and feature development initiatives.",
    ],
    projects: [
      "HR Management System",
      "Internal Operational Applications",
      "FastLab System",
    ],
  },
];

export type Project = {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  stack: string[];
  url?: string;
  cover: string;
  shots: string[];
  year?: string;
};

const folderShots = (slug: string, count: number, ext: "png" | "webp") =>
  Array.from({ length: count }, (_, i) => `/portfolio/${slug}/shot-${i + 1}.${ext}`);

export const featuredProjects: Project[] = [
  {
    slug: "apotech",
    title: "Plus Group Vending Machine Pharmacist",
    tagline: "Cross-platform desktop app for pharmacy vending operations.",
    description:
      "Cross-platform desktop application for pharmacy vending machine operations built with Next.js, Electron, and TypeScript. Features Lottie animations and Axios-based REST API integration for real-time inventory and dispensing workflows.",
    stack: ["Next.js", "Electron", "TypeScript", "Lottie", "Axios"],
    url: "https://vending-machine-pharmacist.vercel.app",
    cover: "/portfolio/apotech/shot-1.png",
    shots: folderShots("apotech", 8, "png"),
  },
  {
    slug: "chaos-lab",
    title: "Chaos Lab — Entertainment Venue Platform",
    tagline: "Responsive multi-language venue platform.",
    description:
      "Responsive multi-language venue platform built with HTML5, CSS3, Bootstrap 5, Owl Carousel, and jQuery. Implemented OpenGraph metadata and mobile-first SEO for organic discovery.",
    stack: ["HTML5", "CSS3", "Bootstrap 5", "Owl Carousel", "jQuery"],
    url: "https://chaos-lab-id.vercel.app",
    cover: "/portfolio/chaos-lab/shot-1.png",
    shots: folderShots("chaos-lab", 7, "png"),
  },
  {
    slug: "headliners",
    title: "Headliners — IP Management Website",
    tagline: "Responsive IP management website with SEO + WebP optimization.",
    description:
      "Responsive IP management website built using Bootstrap 5, CSS3, and vanilla JavaScript with SEO optimization and WebP image compression. Deployed via Cloudflare Pages.",
    stack: ["Bootstrap 5", "CSS3", "JavaScript", "Cloudflare Pages", "WebP"],
    url: "https://headliners-vert.vercel.app",
    cover: "/portfolio/headliners/shot-1.webp",
    shots: folderShots("headliners", 6, "webp"),
  },
  {
    slug: "moudy-villa",
    title: "Villa Moudy — Villa Booking Platform",
    tagline: "Responsive booking flow with date picker + carousel.",
    description:
      "Responsive villa booking platform built with HTML, CSS, and JavaScript. Combines Swiper carousel, Flatpickr date picker, and Bootstrap to deliver a smooth reservation experience.",
    stack: ["HTML", "CSS", "JavaScript", "Swiper", "Flatpickr", "Bootstrap"],
    url: "https://moudy.vercel.app",
    cover: "/portfolio/moudy-villa/shot-1.png",
    shots: folderShots("moudy-villa", 6, "png"),
  },
  {
    slug: "nidji",
    title: "Nidji — Band Promotional Website",
    tagline: "Event campaign microsite for an Indonesian band.",
    description:
      "Promotional web platform built for the Indonesian band Nidji to support their event campaign, featuring fully responsive design and dynamic content.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    cover: "/portfolio/nidji/shot-1.webp",
    shots: folderShots("nidji", 6, "webp"),
  },
  {
    slug: "up-above",
    title: "Ferdinand William Widjaja — Personal Site",
    tagline: "Polished personal corporate site with a refined editorial layout.",
    description:
      "Personal/corporate website with an editorial layout, optimized typography, and clean responsive grid. Built to act as a high-trust digital business card.",
    stack: ["HTML5", "CSS3", "JavaScript", "Responsive"],
    cover: "/portfolio/up-above/shot-1.png",
    shots: folderShots("up-above", 6, "png"),
  },
];

export const otherProjects = [
  {
    title: "Plus Group Website — Corporate Site with CMS",
    description:
      "Corporate website using Laravel 12, PostgreSQL, and Docker with Tailwind CSS, Alpine.js, a comprehensive CMS admin panel, and an async email queue system.",
    stack: ["Laravel 12", "PostgreSQL", "Docker", "Tailwind", "Alpine.js"],
    url: "https://plusgroup.id",
  },
  {
    title: "Vokati — Recruitment Platform",
    description:
      "Multi-page recruitment platform using HTML5, Bootstrap, and vanilla JavaScript with dynamic navigation, Toastr notifications, and Swiper carousel.",
    stack: ["HTML5", "Bootstrap", "JavaScript", "Swiper"],
    url: "https://vokati.vercel.app",
  },
  {
    title: "Sasana Jiwa — Event Management Landing",
    description:
      "Multi-page event management website built with HTML5, CSS3, and Bootstrap covering homepage, services, portfolio, and contact pages.",
    stack: ["HTML5", "CSS3", "Bootstrap"],
    url: "https://sasana-jiwa.vercel.app",
  },
];

export const education = [
  {
    school: "Universitas Terbuka",
    degree: "Bachelor of Statistics",
    period: "2025 — Present",
    note: "Currently Enrolled",
  },
  {
    school: "SMK Wikrama Bogor",
    degree: "Software Engineering",
    period: "2016 — 2019",
  },
];

export const languages = [
  { name: "Indonesian", level: "Native" },
  { name: "English", level: "Professional Working Proficiency" },
];

export const openTo = [
  "Backend Developer",
  "Full Stack Developer",
  "Software Engineer",
  "Frontend Developer",
];
