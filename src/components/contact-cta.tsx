"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Mail, GitBranch, Link, Copy, Check } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function ContactCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const [copied, setCopied] = useState(false);

  const email = "dejannkevin@gmail.com";

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy: ', err);
    }
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
            .from(contactRef.current, { opacity: 0, y: 20, duration: 0.45 }, "-=0.25")
            .from(socialRef.current, { opacity: 0, y: 16, duration: 0.35 }, "-=0.2");
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
            .from(contactRef.current, { opacity: 0, y: 20, duration: 0.45 }, "-=0.25")
            .from(socialRef.current, { opacity: 0, y: 16, duration: 0.35 }, "-=0.2");
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
      id="contact"
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
      aria-labelledby="contact-heading"
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div
          ref={headerRef}
          className="text-center mb-16"
        >
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl lg:text-5xl font-bold text-foreground mb-4"
          >
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities and collaborations. Let's build something together.
          </p>
        </div>

        {/* Contact Options */}
        <div className="max-w-2xl mx-auto">
          {/* Primary Contact - Email */}
          <div
            ref={contactRef}
            className="mb-12"
          >
            <div className="bg-muted/10 border border-border/50 rounded-2xl p-8 text-center">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <Mail size={24} className="text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  Send Email
                </h3>
                <p className="text-muted-foreground mb-4">
                  The fastest way to reach me
                </p>
              </div>

              {/* Email Display */}
              <div className="flex items-center justify-center gap-3 mb-6 p-4 bg-background rounded-lg border border-border/30">
                <code className="text-sm text-foreground font-mono">
                  {email}
                </code>
                <motion.button
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  className="p-2 rounded-md hover:bg-muted/20 transition-colors"
                  aria-label="Copy email address"
                >
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} className="text-muted-foreground" />
                  )}
                </motion.button>
              </div>

              {/* Email Button */}
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 200, damping: 20 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-background"
              >
                <Mail size={18} className="mr-2" />
                Open Email Client
              </motion.a>
            </div>
          </div>

          {/* Social Links */}
          <div
            ref={socialRef}
            className="text-center"
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Connect on Social
            </h3>
            <div className="flex justify-center gap-6">
              <motion.a
                href="https://github.com/veksimage"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 bg-muted/5 hover:bg-muted/10 hover:border-primary/30 transition-all duration-200"
                aria-label="Visit GitHub profile"
              >
                <GitBranch size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  GitHub
                </span>
              </motion.a>

              <motion.a
                href="https://www.linkedin.com/in/kevin-dejan-108ba1223/?skipRedirect=true"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0.2, type: "spring", stiffness: 300, damping: 20 }}
                className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 bg-muted/5 hover:bg-muted/10 hover:border-primary/30 transition-all duration-200"
                aria-label="Visit LinkedIn profile"
              >
                <Link size={24} className="text-muted-foreground group-hover:text-primary transition-colors" />
                <span className="text-xs text-muted-foreground group-hover:text-foreground transition-colors">
                  LinkedIn
                </span>
              </motion.a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}