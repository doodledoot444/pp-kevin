"use client";

import { memo } from "react";
import { motion } from 'framer-motion';
import { TechStackSkeleton } from "@/components/skeletons";

const technologies = [
  "React", "Next.js", "Angular", "TypeScript",
  "Node.js", "PostgreSQL", "SQLServer", "Prisma", "Supabase"
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const itemVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.35,
    },
  },
};

export default memo(function TechStack({ isLoading = false }: { isLoading?: boolean }) {
  if (isLoading) {
    return (
      <section className="py-20 bg-muted/50" aria-busy="true">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <TechStackSkeleton />
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Tech Stack
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies I work with to build structured components
          </p>
        </div>

        {/* Pop-up Animation Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-wrap justify-center gap-4"
        >
          {technologies.map((tech) => (
            <motion.span
              key={tech}
              variants={itemVariants}
              whileHover={{
                scale: 1.1,
                transition: { duration: 0.2 },
              }}
              className="
                px-4 py-2 
                bg-background 
                border border-border 
                rounded-full 
                text-sm font-medium 
                text-foreground
                transition-all
                duration-200
                hover:bg-accent
                hover:border-primary
              "
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

      </div>
    </section>
  );
});