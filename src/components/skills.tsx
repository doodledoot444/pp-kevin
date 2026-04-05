"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
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

gsap.registerPlugin(ScrollTrigger);

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
      { name: "Angular", icon: <Code2 size={18} className="text-primary" />, level: "Proficient" },
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
      { name: "Docker", icon: <Terminal size={18} className="text-primary" />, level: "Advanced" },
      { name: "Git", icon: <Terminal size={18} className="text-primary" />, level: "Advanced" },
      { name: "Vercel", icon: <Cloud size={18} className="text-primary" />, level: "Advanced" },
      { name: "CI/CD", icon: <Zap size={18} className="text-primary" />, level: "Intermediate" },
    ],
  },
];

const itemHover = { scale: 1.03, opacity: 0.97 };

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<HTMLDivElement[]>([]);
  categoryRefs.current = [];

  const trackCategoryRef = (el: HTMLDivElement) => {
    if (el && !categoryRefs.current.includes(el)) categoryRefs.current.push(el);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { duration: 0.35, ease: "power2.out" } });

      tl.from(headingRef.current, { autoAlpha: 0, y: 24 })
        .from(categoryRefs.current, {
          autoAlpha: 0,
          y: 18,
          stagger: 0.14,
        }, "-=0.1");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top 80%",
        onEnter: () => tl.play(),
        markers: false,
      });

      return () => {
        ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        tl.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="py-20 bg-muted/30"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={headingRef} className="text-center mb-12">
          <h2 id="skills-heading" className="text-3xl sm:text-4xl font-bold text-foreground">
            Skills & Technologies
          </h2>
          <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
            Technologies I use to build scalable and performant applications with maintainable architecture.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {SKILL_CATEGORIES.map((category) => (
            <div
              key={category.category}
              ref={trackCategoryRef}
              className="rounded-2xl border border-border bg-card p-5"
            >
              <h3 className="text-lg font-semibold text-foreground mb-4">{category.category}</h3>
              <div className="grid gap-3">
                {category.items.map((item) => (
                  <motion.div
                    key={`${category.category}-${item.name}`}
                    whileHover={itemHover}
                    transition={{ duration: 0.24 }}
                    className="flex items-center gap-3 px-3 py-2 rounded-lg border border-border/50 bg-background/5"
                  >
                    <span className="flex items-center justify-center w-7 h-7 bg-primary/15 text-primary rounded-md">
                      {item.icon}
                    </span>
                    <div>
                      <p className="text-sm font-medium text-foreground">{item.name}</p>
                      {item.level && <p className="text-xs text-muted-foreground">{item.level}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
