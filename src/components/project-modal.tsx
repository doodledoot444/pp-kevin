"use client";

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Project } from '@/lib/projects';
import { projectModalVariants } from '@/lib/animationVariants';
import { X, ExternalLink, Code2 } from 'lucide-react';
import { useEffect, useRef, memo } from 'react';

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

const ProjectModal = memo(function ProjectModal({ project, isOpen, onClose }: ProjectModalProps) {
  const modalRef = useRef<HTMLDivElement>(null);

  // Handle backdrop click
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  // Focus trap: ensure focus stays within modal when open
  useEffect(() => {
    if (!isOpen || !modalRef.current) return;

    const modal = modalRef.current;
    const focusableElements = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );

    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
        return;
      }

      if (e.key !== 'Tab' || focusableElements.length === 0) return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement?.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement?.focus();
          e.preventDefault();
        }
      }
    };

    modal.addEventListener('keydown', handleKeyDown);
    firstElement?.focus();

    return () => modal.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!project) return null;

  const liveHref = project.liveUrl || '/maintenance?source=live';
  const repoHref = project.repoUrl || '/maintenance?source=repo';
  const isExternalLiveLink = Boolean(project.liveUrl);
  const isExternalRepoLink = Boolean(project.repoUrl);

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="modal-overlay"
          variants={projectModalVariants.backdrop}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
          onClick={handleBackdropClick}
          aria-modal="true"
          role="dialog"
        >
          <motion.div
            ref={modalRef}
            key={`modal-${project.id}`}
            variants={projectModalVariants.modal}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="relative w-full max-w-2xl max-h-[calc(100vh-3rem)] overflow-auto bg-card border border-border rounded-xl shadow-2xl"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-lg bg-background/80 hover:bg-background transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={20} className="text-foreground" />
            </button>

            {/* Image Section */}
            <motion.div
              variants={projectModalVariants.content}
              initial="hidden"
              animate="visible"
              className="relative w-full aspect-video overflow-hidden bg-muted"
            >
              <Image
                src={project.image}
                alt={project.alt}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />

              {/* Subtle glow overlay on hover */}
              <motion.div
                whileHover={{ opacity: 0.1 }}
                className="absolute inset-0 bg-primary/20"
              />
            </motion.div>

            {/* Content Section */}
            <motion.div
              variants={projectModalVariants.content}
              initial="hidden"
              animate="visible"
              className="p-8"
            >
              {/* Title */}
              <h2 className="text-3xl font-bold text-foreground mb-4">
                {project.title}
              </h2>

              {/* Description */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="mb-8">
                <h3 className="text-sm font-semibold text-foreground mb-3 uppercase tracking-wide">
                  Technology Stack
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.techStack.map((tech) => (
                    <motion.span
                      key={tech}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="inline-block px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full border border-primary/30"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <motion.div
                className="flex gap-4 pt-6 border-t border-border"
                variants={{
                  visible: {
                    transition: {
                      staggerChildren: 0.1,
                    },
                  },
                }}
                initial="hidden"
                animate="visible"
              >
                {project.liveUrl && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={liveHref}
                      target={isExternalLiveLink ? '_blank' : undefined}
                      rel={isExternalLiveLink ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
                    >
                      <ExternalLink size={16} />
                      View Project
                    </Link>
                  </motion.div>
                )}

                {project.repoUrl && (
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, y: 10 },
                      visible: { opacity: 1, y: 0 },
                    }}
                  >
                    <Link
                      href={repoHref}
                      target={isExternalRepoLink ? '_blank' : undefined}
                      rel={isExternalRepoLink ? 'noopener noreferrer' : undefined}
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-secondary text-foreground font-semibold rounded-lg hover:bg-secondary/90 transition-colors"
                    >
                      <Code2 size={16} />
                      View Code
                    </Link>
                  </motion.div>
                )}
              </motion.div>

              {/* Subtle info text */}
              <p className="text-xs text-muted-foreground mt-4">
                Press <kbd className="px-2 py-1 bg-muted rounded text-xs font-mono">ESC</kbd> to close
              </p>
            </motion.div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
});

export default ProjectModal;
