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
    liveUrl: "https://example.com/flightbooking",
    repoUrl: "https://github.com/example/ecommerce",
  },
  {
    id: "project-2",
    title: "Task Management App",
    description: "Task Management tool with live updates and collaborative features, designed to streamline task tracking and improve workflow clarity",
    image: "/projects/task.png",
    alt: "Task Management App",
    techStack: ["React", "Next.js", "MongoDB"],
    liveUrl: "https://example.com/taskapp",
    repoUrl: "https://github.com/example/taskapp",
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
