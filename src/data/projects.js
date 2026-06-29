export const filterCategories = ["All", "Web", "AI/ML", "Data", "Others"];

export const categoryClass = {
  Web: "project-category-badge--web",
  "AI/ML": "project-category-badge--ai",
  Data: "project-category-badge--data",
  Others: "project-category-badge--others",
};

export const projects = [
  {
    slug: "dailypress-portal",
    title: "Dailypress Portal",
    tagline: "Article platform with auth, submissions, and admin tooling.",
    description:
      "Article platform with auth, submissions, and an admin panel — my only production build so far.",
    overview:
      "Dailypress is a full-stack news portal where writers submit articles and admins review, publish, and manage content. I built the client and server from scratch — JWT auth, role-based routes, and a dashboard for editorial workflow.",
    image: "https://i.postimg.cc/Gm3Lvm23/Good-Morning-(Facebook-Post).png",
    live: "https://dailypress-bf298.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A12-Dailypress-server",
    stack: ["React", "Node.js", "MongoDB"],
    categories: ["Web"],
    meta: [
      { label: "Type", value: "Full-stack web app" },
      { label: "Status", value: "Production" },
      { label: "Role", value: "Solo developer" },
    ],
    techStacks: [
      {
        title: "Frontend",
        items: ["React", "React Router", "Tailwind CSS", "Axios", "Firebase Hosting"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express", "MongoDB", "JWT", "bcrypt"],
      },
      {
        title: "Workflow",
        items: ["REST API", "Role-based access", "Admin moderation", "Responsive UI"],
      },
    ],
    features: [
      "User registration and login with secure JWT sessions",
      "Writers can draft and submit articles for review",
      "Admin panel to approve, reject, and manage published posts",
      "Category tagging and searchable article listings",
      "Responsive layout for mobile readers and editors",
    ],
  },
  {
    slug: "portfolio-website",
    title: "Portfolio Website",
    tagline: "Personal site to showcase work, skills, and contact.",
    description:
      "This site — built to showcase my work, skills, and contact info while job hunting.",
    overview:
      "A single-page portfolio with section-based storytelling, project filtering, contact form, and a focus on performance and clean UI. Deployed on Netlify with a React + Vite toolchain and custom scroll-driven animations.",
    image: "https://i.postimg.cc/8zyWJm4T/image.png",
    live: "https://plabon.netlify.app/",
    clientRepo: "https://github.com/DevAbidHasan/Portfolio-website",
    serverRepo: null,
    stack: ["React", "Tailwind", "Vite"],
    categories: ["Web"],
    meta: [
      { label: "Type", value: "Marketing / portfolio" },
      { label: "Status", value: "Live" },
      { label: "Role", value: "Design & development" },
    ],
    techStacks: [
      {
        title: "Frontend",
        items: ["React 19", "React Router", "Tailwind CSS 4", "Vite"],
      },
      {
        title: "UX",
        items: ["Scroll reveal", "Custom cursor", "Dark / light theme", "Responsive layout"],
      },
      {
        title: "Deploy",
        items: ["Netlify", "Web3Forms contact", "Optimized images", "SPA routing"],
      },
    ],
    features: [
      "Hero, experience, skills, projects, services, FAQ, and contact sections",
      "Category-based project list with dedicated project detail pages",
      "Contact form with Web3Forms email delivery",
      "Theme toggle with persisted preference",
      "Loader and micro-interactions tuned for a polished first impression",
    ],
  },
  {
    slug: "booknest",
    title: "Booknest",
    tagline: "Library management with borrowing history and admin views.",
    description:
      "Practice project — library management with borrowing history, built to sharpen full-stack skills.",
    overview:
      "Booknest simulates a small library system: browse titles, borrow and return books, and track history. Built as a MERN practice app to reinforce CRUD APIs, auth, and dashboard-style admin screens.",
    image: "https://i.ibb.co.com/vCD0RpN1/image.png",
    live: "https://book-nest-75887.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A11-Booknest-server",
    stack: ["React", "Express", "MongoDB"],
    categories: ["Web"],
    meta: [
      { label: "Type", value: "Full-stack practice app" },
      { label: "Status", value: "Deployed demo" },
      { label: "Role", value: "Solo developer" },
    ],
    techStacks: [
      {
        title: "Frontend",
        items: ["React", "React Router", "Tailwind CSS", "Context API"],
      },
      {
        title: "Backend",
        items: ["Express", "MongoDB", "JWT auth", "REST endpoints"],
      },
      {
        title: "Domain",
        items: ["Book catalog", "Borrow / return flow", "User history", "Admin overview"],
      },
    ],
    features: [
      "Browse and search available books in the catalog",
      "Borrow and return flow with availability checks",
      "Personal borrowing history per user account",
      "Admin-friendly data model for managing inventory",
      "Deployed client on Firebase for quick sharing",
    ],
  },
  {
    slug: "plantpal",
    title: "Plantpal",
    tagline: "Plant care tracker with schedules and notes.",
    description:
      "Practice project — plant care tracker with schedules and notes, built for learning and demos.",
    overview:
      "Plantpal helps users log plants, watering schedules, and care notes in one place. A friendly CRUD app that mixes React UI patterns with a Node backend and Firebase hosting for a complete demo experience.",
    image: "https://i.postimg.cc/KjC1m0DX/image.png",
    live: "https://plantpal-plant-care-tracking.web.app/",
    clientRepo: "https://github.com/DevAbidHasan/B11-A10-Plantpal-client",
    serverRepo: "https://github.com/DevAbidHasan/B11-A10-Plantpal-server",
    stack: ["React", "Node.js", "Firebase"],
    categories: ["Web"],
    meta: [
      { label: "Type", value: "Full-stack practice app" },
      { label: "Status", value: "Deployed demo" },
      { label: "Role", value: "Solo developer" },
    ],
    techStacks: [
      {
        title: "Frontend",
        items: ["React", "Tailwind CSS", "Form handling", "Responsive cards"],
      },
      {
        title: "Backend",
        items: ["Node.js", "Express", "MongoDB", "REST API"],
      },
      {
        title: "Hosting",
        items: ["Firebase Hosting", "Environment config", "Demo-ready deploy"],
      },
    ],
    features: [
      "Add plants with care notes and optional photos",
      "Track watering schedules and last-care dates",
      "Edit and remove entries from a personal dashboard",
      "Clean mobile layout for quick check-ins",
      "Separated client and server repos for realistic workflow",
    ],
  },
];

export function getProjectBySlug(slug) {
  return projects.find((p) => p.slug === slug);
}

export function getAdjacentProjects(slug) {
  const index = projects.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  };
}
