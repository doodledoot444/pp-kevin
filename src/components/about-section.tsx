"use client";

import { motion } from "framer-motion";
import { Code2, Layers, Zap } from "lucide-react";
import { AboutSectionSkeleton } from "@/components/skeletons";

type SpecializationItem = {
  icon: React.ReactNode;
  title: string;
  description: string;
};

const SPECIALIZATIONS: SpecializationItem[] = [
  {
    icon: <Code2 size={20} className="text-primary" />,
    title: "Frontend Architecture",
    description: "React, Next.js, TypeScript, Tailwind, Angular, component-driven design",
  },
  {
    icon: <Layers size={20} className="text-primary" />,
    title: "Full-Stack Systems",
    description: "Node.js, Express, PostgreSQL, Prisma, real-time architectures",
  },
  {
    icon: <Zap size={20} className="text-primary" />,
    title: "Performance & Scale",
    description: "Optimization, DevOps, Docker, CI/CD",
  },
];

const FOCUS_AREAS = [
  "Focus on performance and efficient application behavior",
  "Develop scalable frontend structures with reusable, maintainable components",
  "Capable across the stack, from user interfaces to backend systems",
  "Experience delivering production applications both independently and in team environments",
];

export default function AboutSection({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section
        id="about"
        className="py-24 bg-background relative overflow-hidden scroll-mt-20"
        aria-busy="true"
        aria-labelledby="about-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <AboutSectionSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section
      id="about"
      className="py-24 bg-background relative overflow-hidden scroll-mt-20"
      aria-labelledby="about-heading"
    >
      
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-16 text-center lg:text-left"
        >
          <h2
            id="about-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4"
          >
            About
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl">
            I approach development with clean architecture, 
            performance optimization, and scalable systems.
          </p>
        </motion.div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
        
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.25 }}
            className="flex justify-center lg:justify-start"
          >
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 30 }}
              className="relative w-full h-72 sm:h-96 rounded-2xl border border-border bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center overflow-hidden group"
            >
              {/* Animated grid background */}
              <div className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <svg
                  className="w-full h-full"
                  preserveAspectRatio="none"
                  viewBox="0 0 100 100"
                >
                  <defs>
                    <pattern
                      id="grid"
                      width="20"
                      height="20"
                      patternUnits="userSpaceOnUse"
                    >
                      <path
                        d="M 20 0 L 0 0 0 20"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="0.5"
                      />
                    </pattern>
                  </defs>
                  <rect width="100" height="100" fill="url(#grid)" />
                </svg>
              </div>

              {/* Placeholder with subtle accent */}
              <div className="relative z-10 flex flex-col items-center gap-4">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration:   5, repeat: Infinity, ease: "linear" }}
                  className="w-16 h-16 rounded-full border-2 border-primary/30 border-t-primary"
                ></motion.div>
                <p className="text-sm text-muted-foreground font-medium">
                  Taking time to build with care 
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.45, delay: 0.4 }}
            className="flex flex-col"
          >
            
            <div className="mb-8">
              <p className="text-base leading-relaxed text-muted-foreground mb-1">
                I build web applications that balance with user experience. My approach centers on
              </p>
              <ul className="space-y-0 text-base text-muted-foreground">
                <li>• Writing clean, maintainable code that scales</li>
                <li>• Optimizing performance at both frontend and backend</li>
                <li>• Designing systems that are intuitive and robust</li>
              </ul>
            </div>


            <div className="mb-10">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Focus Areas
              </h3>
              <div className="space-y-3">
                {FOCUS_AREAS.map((area, idx) => (
                  <div
                    key={idx}
                    className="flex gap-3 group cursor-pointer"
                  >
                    <motion.div
                      whileHover={{ x: 4 }}
                      transition={{ duration: 0.2 }}
                      className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mt-0.5"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary"></div>
                    </motion.div>
                    <p className="text-sm text-muted-foreground group-hover:text-foreground transition-colors duration-200">
                      {area}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        
        <motion.div
          className="mt-20 pt-16 border-t border-border/50"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.h3
            className="text-sm font-semibold text-foreground mb-8 uppercase tracking-wide"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.35, ease: 'easeOut' }}
          >
            Specialization
          </motion.h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALIZATIONS.map((spec, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.35, delay: idx * 0.08, ease: 'easeOut' }}
                whileHover={{ y: -4 }}
                className="group rounded-xl border border-border/50 bg-muted/10 p-6 hover:bg-muted/20 hover:border-primary/30 transition-all duration-300 cursor-pointer"
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className="flex-shrink-0 p-2 rounded-lg bg-primary/10">
                    {spec.icon}
                  </div>
                  <h4 className="text-base font-semibold text-foreground">{spec.title}</h4>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {spec.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
