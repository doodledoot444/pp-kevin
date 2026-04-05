"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, Code2, Layers, Zap } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

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
    description: "Optimization, caching strategies, DevOps, Docker, CI/CD",
  },
];

const FOCUS_AREAS = [
  "Focus on performance and efficient application behavior",
  "Develop scalable frontend structures with reusable, maintainable components",
  "Capable across the stack, from user interfaces to backend systems",
  "Experience delivering production applications both independently and in team environments",
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const bulletRefs = useRef<HTMLDivElement[]>([]);
  const specializationRefs = useRef<HTMLDivElement[]>([]);

  bulletRefs.current = [];
  specializationRefs.current = [];

  const trackBulletRef = (el: HTMLDivElement) => {
    if (el && !bulletRefs.current.includes(el)) bulletRefs.current.push(el);
  };

  // Specialization refs no longer needed for animation
  const trackSpecializationRef = (el: HTMLDivElement) => {
    if (el && !specializationRefs.current.includes(el)) specializationRefs.current.push(el);
  };

  useEffect(() => {
    // Scroll to top when component mounts (for navigation)
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    // Small delay to ensure DOM refs are populated
    const timeoutId = setTimeout(() => {
      const ctx = gsap.context(() => {
        // Check if section is already in viewport
        const rect = sectionRef.current?.getBoundingClientRect();
        const isInView = rect && rect.top < window.innerHeight * 0.8;

        if (isInView) {
          // Animate immediately if already in view
          const tl = gsap.timeline({ defaults: { ease: "power2.out" } });

          tl.from(headerRef.current, { opacity: 0, y: 24, duration: 0.4 }, 0)
            .from(visualRef.current, { opacity: 0, x: -20, duration: 0.45 }, "-=0.25")
            .from(contentRef.current, { opacity: 0, x: 20, duration: 0.45 }, "-=0.4")
            .from(
              bulletRefs.current,
              {
                opacity: 0,
                y: 12,
                duration: 0.35,
                stagger: 0.08,
              },
              "-=0.3"
            );
         
        } else {
          // Use ScrollTrigger if not in view
          const tl = gsap.timeline({
            defaults: { ease: "power2.out" },
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
              markers: false,
            },
          });

          tl.from(headerRef.current, { opacity: 0, y: 24, duration: 0.4 }, 0)
            .from(visualRef.current, { opacity: 0, x: -20, duration: 0.45 }, "-=0.25")
            .from(contentRef.current, { opacity: 0, x: 20, duration: 0.45 }, "-=0.4")
            .from(
              bulletRefs.current,
              {
                opacity: 0,
                y: 12,
                duration: 0.35,
                stagger: 0.08,
              },
              "-=0.3"
            )
            .from(
              specializationRefs.current,
              {
                opacity: 0,
                y: 20,
                duration: 0.25,
                stagger: 0.06,
              },
              "-=0.2"
            );
        }

        return () => {
          ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
        };
      }, sectionRef);

      return () => {
        ctx.kill();
      };
    }, 100);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      aria-labelledby="about-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
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
        </div>

        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start mb-16">
        
          <div ref={visualRef} className="flex justify-center lg:justify-start">
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 30 }}
              className="relative w-full h-96 rounded-2xl border border-border bg-gradient-to-br from-muted/20 to-muted/5 flex items-center justify-center overflow-hidden group"
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
          </div>

          {/* Right: Content */}
          <div ref={contentRef} className="flex flex-col">
            {/* Primary Description */}
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

            {/* Focus Areas */}
            <div className="mb-10">
              <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wide">
                Focus Areas
              </h3>
              <div className="space-y-3">
                {FOCUS_AREAS.map((area, idx) => (
                  <div
                    key={idx}
                    ref={trackBulletRef}
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
          </div>
        </div>

        {/* Specialization Grid */}
        <div className="mt-20 pt-16 border-t border-border/50">
          <h3 className="text-sm font-semibold text-foreground mb-8 uppercase tracking-wide">
            Specialization
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SPECIALIZATIONS.map((spec, idx) => (
              <motion.div
                key={idx}
                ref={trackSpecializationRef}
                whileHover={{ y: -4 }}
                transition={{ duration: 0.3, type: "spring", stiffness: 200, damping: 25 }}
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
                <motion.div
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-medium opacity-70 group-hover:opacity-100 transition-opacity duration-200 cursor-pointer py-1 px-2"
                >
                  Learn more
                  <ArrowRight size={16} />
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
