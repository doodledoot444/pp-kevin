export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  alt: string;
  techStack: string[];
  liveUrl?: string;
  repoUrl?: string;
}

export const FEATURED_PROJECTS: Project[] = [
  {
    id: "project-1",
    title: "Water Station Management Web App",
    description: "Multi-user order management system with admin control analytics dashboard and email verification notifications",
    image: "/projects/project1.png",
    alt: "Water Station Management Web App",
    techStack: ["Tailwind","Next.js", "PostgreSQL", "Docker", "Prisma"],
    liveUrl: "https://cws-webapp.vercel.app/",
    repoUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "project-2",
    title: "Landing Page for SaaS Properties",
    description: "Landing page for SaaS properties with responsive design and interactive elements to enhance user engagement.",
    image: "/projects/Landing-page.jpg",
    alt: "Landing Page for SaaS Properties",
    techStack: ["React", "Next.js", "MongoDB"],
    liveUrl: "https://sc-property.vercel.app/",
    repoUrl: "https://github.com/doodledoot444",
  },
  {
    id: "project-3",
    title: "Data Visualization Dashboard",
    description: "Analytics dashboard with dynamic data visualization, focusing on efficient data handling, responsive UI, and scalable frontend architecture.",
    image: "/projects/DVD_1.png",
    alt: "Data Visualization Dashboard",
    techStack: ["TanStack Query", "Recharts", "Tailwind", "TypeScript"],
    liveUrl: "https://example.com/dashboard",
    repoUrl: "https://github.com/example/dashboard",
  },
 
];

