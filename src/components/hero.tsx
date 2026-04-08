"use client";

import { motion, useReducedMotion } from "framer-motion";
import { heroVariants, EA_EASING } from "@/lib/animationVariants";
import { HeroSkeleton } from "@/components/skeletons";

export default function Hero({ isLoading = false }: { isLoading?: boolean }) {
  const shouldReduceMotion = useReducedMotion();

  if (isLoading) {
    return (
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center bg-background"
        aria-busy="true"
        aria-label="Hero section"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <HeroSkeleton />
        </div>
      </section>
    );
  }

  const reducedMotionProps = shouldReduceMotion
    ? { initial: "visible", animate: "visible" }
    : { initial: "hidden", animate: "visible" };

  return (
    <motion.section
      id="hero"
      className="min-h-screen flex items-center justify-center bg-background"
      aria-label="Hero section"
      variants={heroVariants.section}
      {...reducedMotionProps}
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          className="overflow-hidden inline-flex w-full justify-center"
          variants={heroVariants.headingMask}
        >
          <motion.h1
            variants={heroVariants.headingText}
            className="text-4xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6"
          >
            Creating Simple, Reliable Digital
            <span className="text-primary"> Experiences</span>
          </motion.h1>
        </motion.div>

        <motion.p
          variants={heroVariants.subtext}
          className="text-lg sm:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
        >
          I build production-grade web systems that handle real users, payments, and scale.
        </motion.p>

        <motion.div
          variants={heroVariants.ctaGroup}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.a
            variants={heroVariants.ctaButton}
            href="#projects"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.03, boxShadow: shouldReduceMotion ? 'none' : '0 18px 40px rgba(59, 130, 246, 0.18)' }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.97 }}
            transition={{ duration: 0.3, ease: EA_EASING }}
            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary hover:bg-primary/90"
          >
            View Projects
          </motion.a>

          <motion.a
            variants={heroVariants.ctaButton}
            href="#contact"
            whileHover={{ scale: shouldReduceMotion ? 1 : 1.03, boxShadow: shouldReduceMotion ? 'none' : '0 18px 40px rgba(15, 23, 42, 0.12)' }}
            whileTap={{ scale: shouldReduceMotion ? 1 : 0.97 }}
            transition={{ duration: 0.3, ease: EA_EASING }}
            className="inline-flex items-center justify-center px-6 py-3 border border-border text-base font-medium rounded-md text-foreground bg-background hover:bg-accent"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>
    </motion.section>
  );
}