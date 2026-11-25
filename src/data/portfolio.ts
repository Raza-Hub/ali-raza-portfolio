export const profile = {
  name: "Ali Raza",
  firstName: "Ali",
  role: "Senior Software Engineer",
  location: "Lahore, Pakistan",
  email: "aliiraza002@gmail.com",
  phone: "+923086652047",
  phoneDisplay: "+92 308 6652047",
  whatsapp: "https://wa.me/923086652047",
  linkedin: "https://www.linkedin.com/in/ali-raza-989525178/",
  resume: "/Ali_Raza_Resume.pdf",
  // Drop a square photo into /public (e.g. /public/ali.jpg) and set the path here.
  photo: "" as string,
  summary:
    "Senior Software Engineer with 5+ years of experience building backend platforms, integrations and full-stack web products.",
};

export const stats = [
  { value: "5+", label: "Years shipping production software" },
  { value: "63", label: "Third-party integrations built from scratch" },
  { value: "26", label: "Payment gateways integrated end-to-end" },
  { value: "51", label: "Live payment flows fixed in one release" },
];

export type ServiceIcon = "server" | "plug" | "layout" | "cloud" | "bot" | "users";

export const services: {
  icon: ServiceIcon;
  title: string;
  description: string;
  points: string[];
}[] = [
  {
    icon: "server",
    title: "Backend & API development",
    description:
      "Clean, versioned APIs and services that stay fast and predictable as traffic and teams grow.",
    points: [
      "NestJS · Node.js · Laravel",
      "REST, GraphQL & public APIs",
      "Idempotency, auth, RBAC",
    ],
  },
  {
    icon: "plug",
    title: "Integrations & payments",
    description:
      "Payment gateways, couriers, marketplaces and ERPs wired in properly, with webhooks you can trust.",
    points: [
      "Stripe, Klarna, PayTabs & 20+ more",
      "Courier & marketplace sync",
      "SAP S/4HANA & ERPs",
    ],
  },
  {
    icon: "layout",
    title: "Full-stack web apps",
    description:
      "Admin dashboards and customer-facing products built with React and Next.js, responsive down to the pixel.",
    points: ["React · Next.js", "Dashboards & CRMs", "Performance & Web Vitals"],
  },
  {
    icon: "cloud",
    title: "Cloud & DevOps",
    description:
      "Deployments on AWS with containers, CI/CD and monitoring, so releases are boring in the best way.",
    points: ["AWS ECS, EC2, Lambda, S3", "Docker & Kubernetes", "CI/CD pipelines"],
  },
  {
    icon: "bot",
    title: "AI & workflow automation",
    description:
      "LLM-powered data transformation and agentic workflows that take repetitive work off your team.",
    points: ["LLM integration", "Agentic AI workflows", "Schedulers & background jobs"],
  },
  {
    icon: "users",
    title: "Technical leadership",
    description:
      "Leading backend teams, shaping architecture, and turning vague requirements into a clear plan.",
    points: ["Architecture & code review", "Microservices design", "Mentoring developers"],
  },
];

export const skillGroups = [
  { title: "Languages", items: ["TypeScript", "JavaScript", "SQL", "C++"] },
  {
    title: "Backend",
    items: ["Node.js", "NestJS", "Express.js", "Laravel", "Serverless", "GraphQL", "Socket.IO"],
  },
  { title: "Frontend", items: ["React", "Next.js", "HTML", "CSS"] },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Supabase", "Sequelize", "TypeORM"],
  },
  { title: "Cloud & DevOps", items: ["AWS", "Docker", "Kubernetes", "CI/CD", "Vercel"] },
  {
    title: "Architecture",
    items: ["Microservices", "API Gateway", "Kafka", "RabbitMQ", "SQS / SNS", "JWT · RBAC"],
  },
  {
    title: "Payments",
    items: ["Stripe", "Klarna", "PayTabs", "Square", "Apple Pay", "JazzCash", "Easypaisa"],
  },
  {
    title: "AI & tools",
    items: ["LLM integration", "Prompt engineering", "Git", "Jira", "Postman", "Swagger"],
  },
];

export const marquee = [
  "NestJS",
  "TypeScript",
  "Node.js",
  "React",
  "Next.js",
  "PostgreSQL",
  "AWS",
  "Docker",
  "Kafka",
  "Redis",
  "MongoDB",
  "Stripe",
  "Socket.IO",
  "Laravel",
];

export type ProjectTheme = "orange" | "yellow" | "green" | "blue" | "pink";
export type ProjectIcon = "workflow" | "utensils" | "truck" | "bag" | "pen";

export const projects: {
  name: string;
  tagline: string;
  company: string;
  year: string;
  role: string;
  theme: ProjectTheme;
  icon: ProjectIcon;
  metric: { value: string; label: string };
  description: string;
  highlights: string[];
  stack: string[];
  chips?: string[];
}[] = [
  {
    name: "ExactFlow",
    tagline: "Multi-tenant order management & fulfillment platform",
    company: "Exact Solution Electronics",
    year: "2025 – now",
    role: "Backend engineer",
    theme: "orange",
    icon: "workflow",
    metric: { value: "63", label: "integrations built from scratch" },
    description:
      "I built the integration layer that connects merchants to the services they run on: payments, couriers, marketplaces, ERPs and email.",
    highlights: [
      "26 payment gateways with encrypted credentials, webhook signature checks and multi-currency support",
      "Tracked down a platform-wide currency-rounding bug and shipped one settlement fix across 51 live gateways",
      "Designed a versioned, API-key-authenticated public REST API (/v1) with request idempotency",
      "15 courier, 11 marketplace and 3 ERP integrations, including SAP S/4HANA",
    ],
    stack: ["NestJS", "Sequelize", "AWS", "LLMs"],
    chips: [
      "Klarna",
      "Square",
      "Wise",
      "DSV",
      "Stuart",
      "TikTok Shop",
      "Ankorstore",
      "SAP S/4HANA",
      "Loops",
    ],
  },
  {
    name: "Cheezious",
    tagline: "Operations platform for a multi-branch food chain",
    company: "Frizhub",
    year: "2021 – 2025",
    role: "Full-stack engineer",
    theme: "yellow",
    icon: "utensils",
    metric: { value: "6+", label: "modules: menu, branches, riders, CRM, RBAC" },
    description:
      "An admin dashboard and microservices backend that runs day-to-day operations across branches, menus and delivery riders.",
    highlights: [
      "React admin with role-based access, real-time menu and pricing management",
      "NestJS microservices over TCP behind an API Gateway",
      "Deployed on AWS ECS with CI/CD, Docker and Kubernetes",
      "Easypaisa, JazzCash and HBL payments, including QR payments",
    ],
    stack: ["React", "NestJS", "PostgreSQL", "Redis", "AWS"],
  },
  {
    name: "Mausool",
    tagline: "Logistics & fleet-management API",
    company: "Frizhub",
    year: "Logistics",
    role: "Backend team lead",
    theme: "green",
    icon: "truck",
    metric: { value: "Live", label: "location sharing, chat & order events" },
    description:
      "I led the backend team for a logistics platform used by admins, companies and drivers to manage orders, vehicles and subscriptions.",
    highlights: [
      "JWT auth with role and permission-based access for three user types",
      "Real-time chat, live location and order-status events with Socket.IO",
      "Firebase push notifications, scheduled jobs and invoice/QR generation",
    ],
    stack: ["NestJS", "TypeScript", "MySQL", "TypeORM", "Socket.IO"],
  },
  {
    name: "TradePark",
    tagline: "B2B multi-vendor marketplace",
    company: "Frizhub",
    year: "E-commerce",
    role: "Lead developer",
    theme: "blue",
    icon: "bag",
    metric: { value: "A→Z", label: "onboarding to checkout to payouts" },
    description:
      "I led the full build of a B2B marketplace, from buyer and seller onboarding to checkout, shipping and partner payouts.",
    highlights: [
      "PayTabs payments with webhooks and SMSA shipping integration",
      "Admin tools for offers, transactions, payouts and shipments",
      "Localization and notifications for users in several regions",
    ],
    stack: ["Laravel", "MySQL", "PayTabs", "RBAC"],
  },
  {
    name: "Legacy Suite",
    tagline: "Content website with a headless CMS",
    company: "Frizhub",
    year: "Content",
    role: "Frontend engineer",
    theme: "pink",
    icon: "pen",
    metric: { value: "CMS", label: "the team publishes content without a developer" },
    description:
      "A fast Next.js website with Strapi as a headless CMS, so the team can publish content without waiting on a developer.",
    highlights: [
      "Next.js frontend deployed on Vercel with continuous deployment",
      "Custom Strapi APIs for structured content",
      "Tuned with Lighthouse and Web Vitals",
    ],
    stack: ["Next.js", "Strapi", "Vercel"],
  },
];

export const experience = [
  {
    period: "Apr 2025 – Present",
    title: "Senior Software Engineer",
    company: "Exact Solution Electronics",
    location: "Lahore",
    current: true,
    points: [
      "Leading backend development with NestJS, Sequelize and AWS for enterprise automation.",
      "Designing modular architectures that make new integrations quick to add.",
      "Using LLMs and agentic AI for data transformation and workflow automation.",
    ],
  },
  {
    period: "Apr 2021 – Mar 2025",
    title: "Mid-Senior Software Engineer",
    company: "Frizhub",
    location: "Lahore",
    current: false,
    points: [
      "Led development of MERN and NestJS applications for food-tech, logistics and B2B commerce.",
      "Designed and maintained backend services on PostgreSQL, MongoDB and AWS.",
      "Built pixel-perfect, responsive interfaces for client-facing products.",
    ],
  },
];

export const education = {
  degree: "BS Software Engineering",
  school: "GIFT University, Gujranwala",
  period: "2016 – 2020",
  certification: "Google Cloud: Cloud Computing Fundamentals (in progress)",
};
