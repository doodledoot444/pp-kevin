"use client";

import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { useProjectModal } from "@/hooks/useProjectModal";
import { projectModalVariants, EA_EASING } from "@/lib/animationVariants";

export default memo(function FeaturedProjects() {
  const { isOpen, activeProjectId, openModal, closeModal } = useProjectModal();

  
  const activeProject = useMemo(
    () => FEATURED_PROJECTS.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  
  const memoizedOpenModal = useCallback(openModal, [openModal]);

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
        ease: EA_EASING,
      },
    },
  };

  // Card pop-up with EA easing
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
        ease: EA_EASING,
      },
    },
  };

  return (
    <>
      <motion.section
        id="projects"
        className="py-24 bg-background scroll-mt-20"
        aria-labelledby="projects-heading"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-100px" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          
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

          
          <motion.div
            variants={containerVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: false, amount: 0.2, margin: "-100px" }}
                className="will-change-transform"
              >
                <ProjectCard 
                  project={project} 
                  index={index}
                  onOpenModal={memoizedOpenModal}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <div className="text-center mt-16" />
        </div>
      </motion.section>

     
      <ProjectModal 
        project={activeProject}
        isOpen={isOpen}
        onClose={closeModal}
      />
    </>
  );
});