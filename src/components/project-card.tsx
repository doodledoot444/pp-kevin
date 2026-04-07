"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { memo, useEffect, useState, useCallback } from "react";
import { EA_EASING } from "@/lib/animationVariants";

interface ProjectCardProps {
  project: Project;
  index: number;
  onOpenModal?: (projectId: string) => void;
}

export default memo(function ProjectCard({ project, index, onOpenModal }: ProjectCardProps) {
  const [isTouch, setIsTouch] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  useEffect(() => {
    setIsTouch('ontouchstart' in window || navigator.maxTouchPoints > 0);
  }, []);

  // Memoize handlers to prevent child re-renders
  const toggleOverlay = useCallback((e: React.MouseEvent) => {
    if (isTouch) {
      const target = e.target as HTMLElement;
      if (target.closest('a')) {
        return;
      }
      setShowOverlay((prev) => !prev);
    }
  }, [isTouch]);

  const handleCardClick = useCallback(() => {
    if (onOpenModal && !isTouch) {
      onOpenModal(project.id);
    }
  }, [onOpenModal, project.id, isTouch]);

  return (
    <motion.div
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: EA_EASING,
      }}
      whileHover={{ y: -8, transition: { duration: 0.25, ease: EA_EASING } }}
      className="group h-full cursor-pointer"
      onClick={handleCardClick}
    >
      <motion.article 
        className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50"
        whileHover={{
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.15)',
        }}
      >
        {/* Image Container */}
        <motion.div 
          className="relative w-full aspect-video overflow-hidden bg-muted cursor-pointer"
          onClick={toggleOverlay}
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}
        >
          <motion.div
            className="relative w-full h-full"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.4, ease: EA_EASING }}
          >
            <Image
              src={project.image}
              alt={project.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority={index < 2}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={isTouch ? { opacity: showOverlay ? 1 : 0 } : undefined}
            whileHover={!isTouch ? { opacity: 1 } : undefined}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-xs"
          >
            <div className="flex gap-3">
              {project.liveUrl && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/maintenance?source=live"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
                    aria-label={`Under maintenance: ${project.title} live site`}
                  >
                    <ExternalLink className="w-5 h-5" />
                  </Link>
                </motion.div>
              )}
              {project.repoUrl && (
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Link
                    href="/maintenance?source=repo"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 text-foreground transition-colors"
                    aria-label={`Under maintenance: ${project.title} repository`}
                  >
                    <Code2 className="w-5 h-5" />
                  </Link>
                </motion.div>
              )}
            </div>
          </motion.div>
        </motion.div>

        {/* Content Container */}
        <motion.div 
          className="flex-1 p-6 flex flex-col justify-between"
          whileHover={{ backgroundColor: 'rgba(0, 0, 0, 0.02)' }}
        >
          <div className="mb-4">
            <motion.h3 
              className="text-xl font-semibold text-foreground mb-2 line-clamp-2"
              whileHover={{ color: 'hsl(var(--primary))' }}
              transition={{ duration: 0.2 }}
            >
              {project.title}
            </motion.h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="inline-block px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded transition-colors hover:bg-primary/10 hover:text-primary"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </motion.article>
    </motion.div>
  );
});
