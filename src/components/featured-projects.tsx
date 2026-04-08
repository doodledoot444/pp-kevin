"use client";

import { memo, useMemo, useCallback } from "react";
import { motion } from "framer-motion";
import { FeaturedProjectsSkeleton } from "@/components/skeletons";
import { FEATURED_PROJECTS } from "@/lib/projects";
import ProjectCard from "@/components/project-card";
import ProjectModal from "@/components/project-modal";
import { useProjectModal } from "@/hooks/useProjectModal";
import { EA_EASING } from "@/lib/animationVariants";

export default memo(function FeaturedProjects({ isLoading = false }: { isLoading?: boolean }) {
  const { isOpen, activeProjectId, openModal, closeModal } = useProjectModal();

  const activeProject = useMemo(
    () => FEATURED_PROJECTS.find((p) => p.id === activeProjectId) || null,
    [activeProjectId]
  );

  const memoizedOpenModal = useCallback((projectId: string) => {
    openModal(projectId);
  }, [openModal]);

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
    hidden: { opacity: 0, y: 16, scale: 0.98 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.45,
        delay: i * 0.04,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  if (isLoading) {
    return (
      <section
        id="projects"
        className="py-20 bg-background scroll-mt-20"
        aria-busy="true"
        aria-labelledby="projects-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FeaturedProjectsSkeleton />
        </div>
      </section>
    );
  }

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
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-6"
          >
            {FEATURED_PROJECTS.map((project, index) => (
              <motion.div
                key={project.id}
                variants={cardVariants}
                custom={index}
                className="w-full h-full"
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