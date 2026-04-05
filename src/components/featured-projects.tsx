"use client";

import { memo } from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/project-card";

export default memo(function FeaturedProjects() {

  // Container stagger
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  // Section fade-in (top-level)
  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
      },
    },
  };

  // Card pop-up
  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.92,
      y: 20,
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.4,
      },
    },
  };

  return (
    <motion.section
      id="projects"
      className="py-24 bg-background scroll-mt-20"
      aria-labelledby="projects-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="mb-16 text-center">
          <h2
            id="projects-heading"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Showcasing Personal Projects
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            A selection of projects that demonstrate my skills in web application development.
          </p>
        </div>

        {/* Animated Grid */}
        <motion.div
          variants={containerVariants}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {FEATURED_PROJECTS.map((project, index) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              whileHover={{
                y: -6,
                scale: 1.02,
                transition: { duration: 0.2 },
              }}
              className="will-change-transform"
            >
              <ProjectCard project={project} index={index} />
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <div className="text-center mt-16" />
      </div>
    </motion.section>
  );
});