"use client";

import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { FEATURED_PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { useProjectModal } from "@/hooks/useProjectModal";
import { EA_EASING } from "@/lib/animationVariants";

export default memo(function FeaturedProjects() {
  const { isOpen, activeProjectId, openModal, closeModal } = useProjectModal();

  const activeProject = useMemo(
    () => FEATURED_PROJECTS.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  const memoizedOpenModal = useCallback(openModal, [openModal]);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const sectionVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: EA_EASING,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 16 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.35,
        ease: EA_EASING,
      },
    },
  };

  return (
    <>
      <motion.section
        id="projects"
        className="py-20 bg-background scroll-mt-20"
        aria-labelledby="projects-heading"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }} // FIXED
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-12 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Showcasing Personal Projects
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              A selection of projects that demonstrate my skills in web application development.
            </p>
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.1 }} // SINGLE OBSERVER
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-8"
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                className="w-full"
              >
                <ProjectCard
                  project={project}
                  index={index}
                  onOpenModal={memoizedOpenModal}
                />
              </motion.div>
            ))}
          </motion.div>

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