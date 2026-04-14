"use client";

import { memo } from "react";
import { motion, type Variants } from "framer-motion";
import { SkillsSkeleton } from "@/components/skeletons";
import {
  Code2,
  Server,
  Database,
  Zap,
  Monitor,
  Cpu,
  Cloud,
  Terminal,
  Shield,
} from "lucide-react";



type SkillItem = {
  name: string;
  icon: React.ReactNode;
  level?: string;
};

type SkillCategory = {
  category: string;
  items: SkillItem[];
};

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <Code2 size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "Next.js", icon: <Code2 size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "Angular", icon: <Code2 size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "Tailwind CSS", icon: <Monitor size={18} className="text-primary" />, level: "Entry-Level" },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <Server size={18} className="text-primary" />, level: "Beginner" },
      { name: "Express", icon: <Server size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "FastAPI", icon: <Cpu size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "GraphQL", icon: <Zap size={18} className="text-primary" />, level: "Beginner" },
    ],
  },
  {
    category: "Database",
    items: [
      { name: "PostgreSQL", icon: <Database size={18} className="text-primary" />, level: "Proficient" },
      { name: "MongoDB", icon: <Database size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "Redis", icon: <Cloud size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "Prisma", icon: <Shield size={18} className="text-primary" />, level: "Proficient" },
    ],
  },
  {
    category: "Tools / DevOps",
    items: [
      { name: "Docker", icon: <Terminal size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "Git", icon: <Terminal size={18} className="text-primary" />, level: "Beginner" },
      { name: "Vercel", icon: <Cloud size={18} className="text-primary" />, level: "Entry-Level" },
      { name: "CI/CD", icon: <Zap size={18} className="text-primary" />, level: "Beginner" },
    ],
  },
];

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const leftVariant: Variants = {
  hidden: { opacity: 0, x: -32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.58,
      ease: EASE,
    },
  },
};

const rightVariant: Variants = {
  hidden: { opacity: 0, x: 32 },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.58,
      ease: EASE,
    },
  },
};

const itemFade: Variants = {
  hidden: { opacity: 0, y: 8 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.32, ease: EASE },
  },
};

export default memo(function SkillsSection({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section
        id="skills"
        className="py-20 bg-muted/30"
        aria-busy="true"
        aria-labelledby="skills-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SkillsSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section
      id="skills"
      className="py-20 bg-muted/30"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Technologies I use to build scalable and performant applications with maintainable architecture.
          </p>
        </div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-80px" }}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {SKILL_CATEGORIES.map((category, index) => {
            const isLeft = index % 2 === 0;

            return (
            <motion.div
              key={category.category}
              variants={isLeft ? leftVariant : rightVariant}
              className="rounded-2xl border border-border bg-card p-5 transition-all duration-300 hover:shadow-lg hover:border-primary/50"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="grid gap-3">
                {category.items.map((item) => (
                  <motion.div
                    key={`${category.category}-${item.name}`}
                    variants={itemFade}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border/50 bg-background/5 transition-all duration-200 hover:border-primary/30 hover:bg-primary/5"
                  >
                    <span className="flex items-center justify-center w-7 h-7 bg-primary/15 text-primary rounded-md flex-shrink-0">
                      {item.icon}
                    </span>
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      {item.level && <p className="text-xs text-muted-foreground">{item.level}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          );
          })}
        </motion.div>
      </div>
    </section>
  );
});
