"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subheaderRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const ctx = gsap.context(() => {
      const heroTL = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.4 },
      });

      heroTL
        .from(sectionRef.current, { autoAlpha: 0, y: 25 }, 0)
        .from(headlineRef.current, { y: 20, autoAlpha: 0 }, "-=.2")
        .from(subheaderRef.current, { y: 15, autoAlpha: 0 }, "-=.25")
        .from(buttonsRef.current, { y: 10, autoAlpha: 0, stagger: 0.1 }, "-=.2");

      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "+=250",
        scrub: false,
        toggleActions: "play none none reverse",
        onEnter: () => heroTL.play(),
      });

      return () => {
        ScrollTrigger.getAll().forEach((t) => t.kill());
        heroTL.kill();
      };
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="min-h-screen flex items-center justify-center bg-background"
      aria-label="Hero section"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 ref={headlineRef} className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6">
          Creating Simple, Reliable Digital
          <span className="text-primary"> Experiences</span>
        </h1>
        <p ref={subheaderRef} className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          Full-stack developer passionate about building scalable web applications
          with modern technologies.
        </p>
        <div ref={buttonsRef} className="flex flex-col sm:flex-row gap-4 justify-center">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", duration: 0.25 }}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: "spring", duration: 0.25 }}
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-accent"
          >
            Contact Me
          </motion.a>
        </div>
      </div>
    </section>
  );
}