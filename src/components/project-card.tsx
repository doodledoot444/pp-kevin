"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Project } from "@/lib/projects";
import Link from "next/link";
import { ExternalLink, Code2 } from "lucide-react";
import { memo } from "react";

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default memo(function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      viewport={{ once: true, margin: "0px 0px -100px 0px" }}
      whileHover={{ y: -8 }}
      className="group h-full"
    >
      <article className="h-full flex flex-col bg-card border border-border rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/50">
        {/* Image Container */}
        <div className="relative w-full aspect-video overflow-hidden bg-muted">
          <Image
            src={project.image}
            alt={project.alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            priority={index < 2}
          />
          {/* Overlay with CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="absolute inset-0 bg-black/60 flex items-center justify-center backdrop-blur-xs"
          >
            <div className="flex gap-3">
              {project.liveUrl && (
                <Link
                  href="/maintenance?source=live"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary hover:bg-primary/90 text-white transition-colors"
                  aria-label={`Under maintenance: ${project.title} live site`}
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              )}
              {project.repoUrl && (
                <Link
                  href="/maintenance?source=repo"
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary hover:bg-secondary/90 text-foreground transition-colors"
                  aria-label={`Under maintenance: ${project.title} repository`}
                >
                  <Code2 className="w-5 h-5" />
                </Link>
              )}
            </div>
          </motion.div>
        </div>

        {/* Content Container */}
        <div className="flex-1 p-6 flex flex-col justify-between">
          {/* Title and Description */}
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-foreground mb-2 line-clamp-2">
              {project.title}
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
              {project.description}
            </p>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 pt-4 border-t border-border">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="inline-block px-2.5 py-1 bg-muted text-muted-foreground text-xs font-medium rounded transition-colors hover:bg-muted hover:text-foreground"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </article>
    </motion.div>
  );
});
