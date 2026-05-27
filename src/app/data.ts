

import { ProjectType, ExperienceType, SkillCategoryType } from "../types";

export const PERSONAL_INFO = {
  name: "Firomsa Hika",
  title: "Full-Stack Software Engineer",
  subtitle: "Computer Science & Engineering Student | Graduating June 2026",
  email: "firomsahika2022@gmail.com",
  phone: "+251917627181",
  location: "Addis Ababa, Ethiopia",
  github: "https://github.com/firomsahika",
  linkedin: "https://www.linkedin.com/in/firomsa-hika-553071366/", 
  degree: "Bachelor of Computer Science and Engineering",
  university: "Adama Science and Technology University (ASTU)",
  graduation: "June 2026",
  gpaBadge: "Top-Ranked Developer",
  summary: "I am an elite, highly active Full-Stack Developer specializing in high-performance web applications using Javascript, Typescript, Python, Java, Next.js, React, Node.js, Express.js, Java Spring Boot, and Django. With a rich background in building cryptographic government platforms, collaborative enterprise construction tools, and distributed microservices architectures, I combine deep technical competence in backend engineering with highly stylized and motion-responsive frontend execution. As a CSE student leader at ASTU, I thrive in fast-paced software development environments that demand engineering excellence, clean documentation, and robust design."
};

export const SKILL_CATEGORIES: SkillCategoryType[] = [
  {
    title: "Languages",
    icon: "code",
    glowColor: "shadow-blue-500/20 border-blue-500/30 text-blue-400",
    skills: ["Python", "Java", "C++", "JavaScript", "TypeScript", "HTML5", "CSS3"]
  },
  {
    title: "Frontend Stack",
    icon: "layers",
    glowColor: "shadow-cyan-500/20 border-cyan-500/30 text-cyan-400",
    skills: ["React.js", "Next.js", "Tailwind CSS", "Redux Toolkit", "Zustand", "Shadcn UI", "Framer Motion", "Responsive Design"]
  },
  {
    title: "Backend Core",
    icon: "server",
    glowColor: "shadow-violet-500/20 border-violet-500/30 text-violet-400",
    skills: ["Node.js", "Express.js", "Java Spring Boot", "Django", "FastAPI", "gRPC Engine", "RESTful APIs", "JWT Security"]
  },
  {
    title: "Databases & ORMs",
    icon: "database",
    glowColor: "shadow-emerald-500/20 border-emerald-500/30 text-emerald-400",
    skills: ["PostgreSQL", "MySQL", "SQLite3", "Prisma ORM", "Microservices DB-per-service"]
  },
  {
    title: "DevOps & Cloud",
    icon: "cloud",
    glowColor: "shadow-teal-500/20 border-teal-500/30 text-teal-400",
    skills: ["Docker", "Git / GitHub Workflows", "CI/CD Pipelines", "AWS Infrastructure", "Vercel / Render Deployment"]
  },
  {
    title: "Fields of Interest",
    icon: "cpu",
    glowColor: "shadow-pink-500/20 border-pink-500/30 text-pink-400",
    skills: ["Microcomputing & Interface", "Computer & Network Security", "Artificial Intelligence", "Data Structures & Algorithms", "Microservices Architecture"]
  }
];

export const PROJECTS: ProjectType[] = [
  {
    id: "sersocaa",
    title: "SERSOCAA Verification System",
    role: "Full-Stack Developer",
    url: "https://sersocaa.org/",
    githubUrl: "https://github.com/firomsahika/Vocational-Qualification-Certification-Agency",
    description: "Vocational Assessment Certificate Verification Platform engineered for the Southern Region Ethiopian government agency to address document forgery.",
    highlights: [
      "Built and deployed a highly secure, high-traffic platform verifying genuine governmental vocational assessments.",
      "Eliminated verification and certificate forgery risks entirely by engineering an instantaneous cryptographic lookup mechanism.",
      "Designed an intuitive, minimalist, dark-mode administrative dashboard tailored for administrative audits, secure registrations, and multi-tier role management.",
      "Utilized Next.js dynamic hydration combined with Prisma and PostgreSQL to ensure millisecond record retrievals."
    ],
    tags: ["Next.js", "Prisma ORM", "PostgreSQL", "Cryptographic Hashing", "Tailwind CSS", "Admin Analytics"],
    category: "fullstack",
    featured: true
  },
  {
    id: "conwise",
    title: "CONWISE Platform",
    role: "Full-Stack & Project Coordinator",
    url: "https://conwise.vercel.app",
    githubUrl: "https://github.com/ConWise-System/ConWise",
    description: "Modular corporate project management platform engineered specifically for engineering teams and heavy civil construction companies.",
    highlights: [
      "Architected and deployed a collaborative project planning system to handle live site updates and materials telemetry.",
      "Designed a robust report-management system streamlining site journaling, task tracking, and interactive progress metrics.",
      "Coordinated a 5-member team through agile milestones, maintaining Git branches, component design, and integration testing.",
      "Engineered backend routes utilizing Node.js, Express.js, Prisma ORM, and clustered PostgreSQL instances."
    ],
    tags: ["MERN/N", "Next.js", "Express.js", "PostgreSQL", "Prisma", "Real-Time Tracking", "Team Leadership"],
    category: "fullstack",
    featured: true
  },
  {
    id: "atisnama",
    title: "ATIS NAMA Foundation Platform",
    role: "Fullstack Developer",
    url: "https://atis-nama-foundation.vercel.app",
    githubUrl: "https://github.com/firomsahika/atis-nama-foundation",
    description: "Public-facing community empowerment and social resource management platform for the ATIS NAMA charitable foundation.",
    highlights: [
      "Designed and deployed the foundation's official channel to manage support request pipelines and campaign logistics.",
      "Automated and optimized administrative intake workflows, saving organizers and volunteers up to 40% in processing hours.",
      "Constructed asset-light image delivery pipelines which load smoothly in limited-bandwidth mobile locations across Ethiopia.",
      "Structured responsive styling frameworks utilizing Tailwind CSS for a seamless interface across a range of display densities."
    ],
    tags: ["Next.js", "Tailwind CSS", "Workflow Automation", "Asset Optimization", "Responsive Design"],
    category: "frontend"
  },
  {
    id: "focusastu",
    title: "FOCUS ASTU Web Platform",
    role: "Frontend Developer",
    url: "https://focus-astu.vercel.app/",
    githubUrl: "https://github.com/firomsahika/focus-astu-website",
    description: "Official community hub and event booking engine for the Fellowship of Oromo Christian University Students at ASTU.",
    highlights: [
      "Constructed the high-fidelity public landing site and user registry portal from the ground up.",
      "Automated custom member registrations and workshop bookings, eliminating physical record books and lowering operational workload by 40%.",
      "Created highly animated components using Framer Motion and custom CSS cubic-bezier curves for an advanced interactive feel.",
      "Designed a light-weight backend architecture that integrates cleanly with modern progressive frontend screens."
    ],
    tags: ["React", "Tailwind CSS", "Framer Motion", "Event Management", "ASTU Community"],
    category: "frontend"
  },
  {
    id: "roofapp",
    title: "Roof App Platform",
    role: "Frontend Developer",
    url: "https://roof-app-clone-gvbr.onrender.com/",
    githubUrl: "https://github.com/firomsa/roof-app",
    description: "A high-fidelity modern digital portal for a professional roofing services company, optimized for customer inquiries, material estimations, and scheduling.",
    highlights: [
      "Engineered an interactive material selection and inquiry estimation tool to streamline roofing client workflows.",
      "Implemented beautiful glassmorphism navigation menus and modern responsive bento-grids for residential and commercial catalogs.",
      "Engineered performance-aware media delivery techniques ensuring instant page-load behaviors on mobile devices."
    ],
    tags: ["React", "Tailwind CSS", "Premium UI", "Estimation flow", "Media Loader"],
    category: "frontend"
  },
  {
    id: "interia",
    title: "Interia Design Showcase",
    role: "Frontend Developer",
    url: "https://i-n-t-e-r-i-a-plfw.onrender.com/",
    githubUrl: "https://github.com/firomsa/interia",
    description: "An elegant, high-contrast, minimalist showcase portal for a premium interior design firm, styled with fluid transitions and modern visual spacing.",
    highlights: [
      "Developed an immersive spatial architectural gallery utilizing premium modern slide assemblies and interactive layout panels.",
      "Crafted an exquisite dark-slate boutique layout featuring carefully balanced typography scales and bold design values.",
      "Optimized high-resolution architectural photography rendering to load flawlessly across lower-bandwidth mobile networks."
    ],
    tags: ["Next.js", "Tailwind CSS", "Boutique Design", "Dynamic Slides", "Touch-Friendly"],
    category: "frontend"
  }
];

export const WORK_EXPERIENCE: ExperienceType[] = [
  {
    id: "insa",
    company: "Information Network Security Administration (INSA)",
    role: "Backend Developer (Intern)",
    location: "Addis Ababa, Ethiopia",
    period: "June 2025 – August 2025",
    category: "internship",
    description: [
      "Developed an Intern Management System using Java Spring Boot microservices architecture, handling secure multi-user workloads (Interns, Mentors, and HR).",
      "Designed and built REST APIs and high-performance gRPC channels for reliable service-to-service communication.",
      "Engineered an activity aggregation engine gathering operational logs from active databases to serve live updates on dashboards.",
      "Enforced rigid JWT role authorizations to build a certified safe and authorized application shell.",
      "Leveraged Spring Cloud Gateway and Eureka Discovery Server for robust load balancing and service lookup."
    ],
    technologies: ["Java", "Spring Boot", "Microservices", "gRPC", "Protobuf", "JWT Security", "PostgreSQL", "Spring Cloud"],
    link: "https://github.com/INSA-Intern-Management-System/intern-management-system"
  },
  {
    id: "ozone",
    company: "Ozone Technology PLC",
    role: "Frontend Developer (Certificate)",
    location: "Adama, Ethiopia",
    period: "July 2024 – September 2024",
    category: "certificate",
    description: [
      "Built and deployed the 'Falcon' framework, a portfolio creator that enables digital specialists to spin up professional sites in seconds.",
      "Accelerated content delivery speed by 25% by utilizing Next.js Server-Side Rendering (SSR) and asset preload priorities.",
      "Strengthened SEO configurations through structured schema markups and micro-data layouts, amplifying web traffic by 30%.",
      "Created customizable styling sub-systems utilizing Tailwind CSS token configurations for client theme switches.",
      "Collaborated strictly within agile sprints, undergoing detailed visual peer reviews and automated testing."
    ],
    technologies: ["Next.js", "React.js", "Tailwind CSS", "SSR Core", "SEO Engineering", "Vite/Webpack Core"],
    link: "https://www.github.com"
  },
  {
    id: "csec-bootcamp",
    company: "CSEC-ASTU Advanced FullStack Bootcamp",
    role: "Full-Stack Developer & Team Leader",
    location: "ASTU, Ethiopia",
    period: "March 2024 – May 2024",
    category: "certificate",
    description: [
      "Assigned as Scrum Master and Team Leader, directing a 3-engineer cohort to build a custom commercial e-commerce solution.",
      "Obtained 1st place in the final Bootcamp Demo Day, competing against top-tier coders and university seniors.",
      "Configured secure routes using Express.js middleware, Prisma schema queries, and clustered PostgreSQL systems.",
      "Guided GitHub workflows, branching protocols, pull request approvals, and UI layout reviews."
    ],
    technologies: ["Next.js", "Express.js", "Shadcn UI", "Prisma ORM", "PostgreSQL", "Git Flow", "Agile Sprints"]
  }
];

export const EDUCATION = {
  institution: "Adama Science and Technology University (ASTU)",
  degree: "Bachelor of Science in Computer Science and Engineering",
  location: "Adama, Ethiopia",
  period: "Graduating June 2026",
  achievements: [
    "Top-ranked student in the five-week Advanced Web Development Bootcamp of CSEC-ASTU (Computer Science & Engineering Club).",
    "Consistently recognized for leading complex software class projects and agile engineering assignments."
  ],
  coursework: [
    "Algorithmic Problem Solving (C++)",
    "Object-Oriented Programming (Java)",
    "Calculus I & II",
    "Web Development Fundamentals",
    "Database Systems",
    "Data Mining & Machine Learning",
    "Data Structures & Algorithms",
    "Computer & Network Security",
    "Artificial Intelligence Systems",
    "Microcomputing & Hardware Interface"
  ]
};

export const LEADERSHIP = {
  organization: "FOCUS-ASTU Fellowship of Oromo Christian University Students",
  role: "Vice President",
  period: "2022 – 2024",
  stats: "200+ Active Members Managed",
  description: [
    "Directed administrative, outreach, and collaborative efforts of a major student organization comprising over 200 physical members.",
    "Spearheaded and scaled the 'AGAPE' community project, coordinating massive logistics to distribute food, basic resources, and companionship to the homeless, hospital environments, and regional elderly groups.",
    "Designed structured peer mentoring loops, building high-performing volunteer core teams to accomplish community goals."
  ]
};
