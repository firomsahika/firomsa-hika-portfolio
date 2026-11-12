import { ProjectType, ExperienceType, SkillCategoryType } from "../types";

export const PERSONAL_INFO = {
  name: "FIROMSA HIKA TELILA",
  displayName: "Firomsa Hika Telila",
  title: "Senior Full-Stack Software Engineer",
  location: "Addis Ababa, Ethiopia",
  phone: "+251917627181",
  email: "firomsahika2022@gmail.com",
  github: "https://github.com/firomsahika",
  githubHandle: "firomsahika",
  linkedin: "https://www.linkedin.com/in/firomsa-hika-553071366/",
  linkedinHandle: "firomsa-hika-553071366",
  summary:
    "Results-driven Full-Stack Software Engineer with a B.Sc. in Computer Science & Engineering (ASTU) and extensive experience architecting scalable web platforms, distributed microservices, and high-throughput REST/gRPC APIs in JavaScript/TypeScript, Java, and Python. Proven track record collaborating directly with distributed engineering teams across standups, sprint planning, code reviews, and lifecycle debugging. Highly proficient in AI-assisted engineering workflows—leveraging Cursor, Antigravity IDE, Claude Code, Gemini, and GitHub Copilot to accelerate code generation, automated testing, and architectural refactoring—paired with strong English communication (C1/C2) and deep daily Ubuntu Linux proficiency.",
};

export const CORE_TECHNICAL_SKILLS: SkillCategoryType[] = [
  {
    category: "Languages & Frameworks",
    skills: [
      "TypeScript",
      "JavaScript (ES6+)",
      "Java 17+",
      "Spring Boot",
      "Node.js",
      "Express.js",
      "Python",
      "FastAPI",
      "Next.js",
      "React.js",
      "Tailwind CSS",
    ],
  },
  {
    category: "AI-Assisted Development & Evaluation Tools",
    skills: [
      "Cursor",
      "Google Antigravity IDE",
      "Claude Code",
      "Gemini",
      "GitHub Copilot",
      "LLM Code Evaluation & Rubric Auditing",
      "AI Prompt Engineering",
    ],
  },
  {
    category: "Backend, APIs & Architecture",
    skills: [
      "RESTful API Design",
      "gRPC",
      "Protocol Buffers",
      "Microservices Architecture",
      "Modular Monoliths",
      "Data Structures",
      "Algorithms",
      "Object-Oriented Design Patterns",
    ],
  },
  {
    category: "Databases & ORMs",
    skills: [
      "PostgreSQL",
      "MySQL",
      "SQLite3",
      "Prisma ORM",
      "Spring Data JPA",
      "Query Optimization & Indexing",
    ],
  },
  {
    category: "DevOps, Cloud & Security",
    skills: [
      "Docker",
      "Linux (Ubuntu daily driver, Bash scripting, terminal workflows)",
      "CI/CD (GitHub Actions)",
      "Git",
      "JWT Authentication",
      "Role-Based Access Control (RBAC)",
      "AWS",
      "Vercel",
    ],
  },
  {
    category: "Quality Assurance & Agile Practices",
    skills: [
      "End-to-End (E2E) Testing",
      "Jest",
      "Root-Cause Debugging",
      "Technical Specifications",
      "Code Reviews",
      "Agile/Scrum (Sprint Planning, Daily Standups)",
    ],
  },
];

export const PROFESSIONAL_EXPERIENCE: ExperienceType[] = [
  {
    id: "belight-soft",
    company: "Belight Soft",
    location: "Addis Ababa, Ethiopia (Remote)",
    role: "QA Tester & Full-Stack Debugger Engineer",
    period: "September 2026 – Present",
    isCurrent: true,
    points: [
      "Direct end-to-end testing, quality assurance workflows, and systemic debugging across production full-stack web applications that is implemented to eliminate critical regressions and maximize system availability.",
      "Conduct root-cause analysis across React/Next.js client code and backend APIs, streamlining error-handling, state synchronization, and API contract adherence.",
      "Author repeatable test scenarios and detailed bug verification specifications while collaborating in remote agile sprints and technical discussions to deliver features on schedule.",
    ],
  },
  {
    id: "afterquery",
    company: "AfterQuery",
    location: "Remote (Contract)",
    role: "AI Prompt Engineer & Code Quality Evaluator",
    period: "March 2026 – May 2026",
    isCurrent: false,
    points: [
      "Evaluate, debug, and audit AI-generated software solutions across TypeScript, JavaScript, Python, and Java for algorithmic accuracy, edge-case resilience, clean code standards, and strict rubric compliance.",
      "Design complex multi-step coding prompts and failure-mode test suites to benchmark large language model reasoning, code maintainability, and production readiness.",
      "Deliver clear, structured technical critiques and refactored reference implementations in fluent English to improve model code-generation quality.",
    ],
  },
  {
    id: "insa",
    company: "Information Network Security Administration (INSA)",
    location: "Addis Ababa, Ethiopia",
    role: "Backend Software Engineer Intern",
    period: "June 2025 – August 2025",
    isCurrent: false,
    points: [
      "Architected and implemented high-throughput backend microservices for an enterprise Intern Management System using Java 17, Spring Boot, and modular design patterns.",
      "Engineered low-latency inter-service communication utilizing gRPC, Protocol Buffers, and RESTful APIs for real-time reporting modules, evaluation engines, and automated notifications.",
      "Hardened service security by implementing stateless JWT authentication and granular Role-Based Access Control (RBAC) across distributed services.",
      "Containerized microservices using Docker on Ubuntu Linux and built automated build, test, and deployment pipelines via GitHub Actions CI/CD workflows.",
    ],
  },
  {
    id: "ozone",
    company: "Ozone Technology PLC",
    location: "Addis Ababa, Ethiopia",
    role: "Frontend Web Engineer Intern",
    period: "July 2024 – September 2024",
    isCurrent: false,
    points: [
      "Developed responsive, accessible web applications (Falcon) using Next.js, React, and Tailwind CSS, reducing client-side page load times by 25% across mobile and desktop browsers.",
      "Implemented Server-Side Rendering (SSR) and automated metadata indexing, increasing organic search visibility and indexing performance by 30%.",
      "Integrated asynchronous API payloads with strict TypeScript schemas, enforcing robust error boundary resilience across distributed endpoints.",
    ],
  },
  {
    id: "csec-bootcamp",
    company: "CSEC-ASTU Advanced Software Development Bootcamp",
    location: "Adama, Ethiopia",
    role: "Engineering Team Lead",
    period: "March 2024 – May 2024",
    isCurrent: false,
    points: [
      "Led a 3-engineer agile team to design, build, and deploy a full-stack e-commerce platform using Next.js, Express.js, Prisma ORM, and PostgreSQL.",
      "Established team coding standards, led pull request and architectural reviews, and enforced Git branching workflows.",
      "Awarded 1st Place among all bootcamp cohorts for architectural design, clean code maintainability, and application performance.",
    ],
  },
];

export const FEATURED_PROJECTS: ProjectType[] = [
  {
    id: "conwise",
    title: "ConWise",
    subtitle: "Modular Construction Project Management Platform",
    url: "https://conwise.vercel.app",
    displayUrl: "conwise.vercel.app",
    techStack: [
      "Next.js",
      "Node.js",
      "Express.js",
      "Prisma ORM",
      "PostgreSQL",
      "Docker",
      "GitHub Actions",
    ],
    points: [
      "Architected and deployed an end-to-end modular project management and site-reporting platform solving operational fragmentation and audit logging for construction engineering teams.",
      "Coordinated a 5-member engineering team through sprint planning, technical specification authoring, and modular component isolation.",
      "Built normalized relational database schemas and automated CI/CD workflows, ensuring zero-downtime releases and low-latency API performance.",
    ],
  },
  {
    id: "sersocaa",
    title: "SERSOCAA",
    subtitle: "Regional Credential Verification Platform",
    url: "https://sersocaa.org",
    displayUrl: "sersocaa.org",
    techStack: ["Next.js", "Prisma ORM", "PostgreSQL", "REST APIs"],
    points: [
      "Engineered and deployed a high-traffic digital verification platform for a regional government agency, preventing credential tampering through instant cryptographic lookup verification.",
      "Built an administrative portal featuring immutable audit trails, role-based access governance, and responsive dashboards optimized for low-bandwidth environments.",
    ],
  },
  {
    id: "mijuu-technologies",
    title: "Mijuu Technologies",
    subtitle: "Digital Engineering & AI Automation Agency Platform",
    url: "https://mijuu-technologies.vercel.app/",
    displayUrl: "mijuu-technologies.vercel.app",
    githubUrl: "https://github.com/firomsahika/mijuu-technologies",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Vercel"],
    points: [
      "Engineered and deployed a modern, high-performance agency platform showcasing software engineering, AI automation workflows, and digital solutions.",
      "Built responsive, accessible interfaces leveraging Next.js App Router and Tailwind CSS with client-side performance optimizations ensuring instant page loads across mobile and desktop devices.",
      "Architected intuitive navigation flows and service discovery pipelines optimized for client inquiry conversion and technical consultation intake.",
    ],
  },
  {
    id: "yerrytouch",
    title: "YerryTouch",
    subtitle: "Beauty & Wellness Service Booking Platform",
    url: "https://yerrytouch.vercel.app/",
    displayUrl: "yerrytouch.vercel.app",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "REST APIs"],
    points: [
      "Engineered an end-to-end appointment scheduling and service discovery platform tailored for beauty and wellness professionals.",
      "Designed interactive real-time availability calendars, automated booking workflows, and responsive client catalog interfaces.",
      "Optimized front-end asset delivery and mobile-first responsiveness, ensuring frictionless booking flows across all devices.",
    ],
  },
  {
    id: "atisnama",
    title: "ATIS NAMA Foundation",
    subtitle: "Community & Humanitarian Resource Management Platform",
    url: "https://atis-nama-foundation.vercel.app/",
    displayUrl: "atis-nama-foundation.vercel.app",
    githubUrl: "https://github.com/firomsahika/atis-nama-foundation",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    points: [
      "Architected and deployed the official digital hub for community support request pipelines, campaign logistics, and charitable initiatives.",
      "Automated administrative intake workflows and volunteer coordination pipelines, reducing processing overhead by up to 40%.",
      "Constructed lightweight, low-bandwidth optimized interfaces ensuring instant page loads across constrained regional mobile networks.",
    ],
  },
  {
    id: "focusastu",
    title: "FOCUS ASTU Platform",
    subtitle: "Student Fellowship & Event Registration Portal",
    url: "https://focus-astu-website.vercel.app/",
    displayUrl: "focus-astu-website.vercel.app",
    githubUrl: "https://github.com/firomsahika/focus-astu-website",
    techStack: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
    points: [
      "Constructed the official community platform and user registry portal from the ground up for 200+ active members.",
      "Automated custom member registrations and workshop bookings, eliminating physical record books and lowering operational workload by 40%.",
      "Delivered a responsive, high-contrast user interface with accessible components optimized for smooth performance across all browsers.",
    ],
  },
];

export const EDUCATION = {
  institution: "Adama Science and Technology University (ASTU)",
  location: "Adama, Ethiopia",
  degree: "Bachelor of Science in Computer Science and Engineering",
  graduation: "Graduated: June 2026",
  gpa: "3.34 / 4.00",
  coursework: [
    "Data Structures & Algorithms",
    "Object-Oriented Programming (Java)",
    "Software Engineering",
    "Operating Systems & Networks",
    "Database Systems",
    "Computer Security",
    "Research Methods & Scientific Writing",
  ],
};

export const LEADERSHIP = {
  organization: "FOCUS-ASTU Student Organization",
  location: "Adama, Ethiopia",
  role: "Vice President",
  period: "2022 – 2024",
  points: [
    "Directed organizational operations and cross-functional initiatives for 200+ members, leading technical training workshops, peer engineering mentorship, and community service projects.",
  ],
};
