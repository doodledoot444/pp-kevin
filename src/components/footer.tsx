"use client";

import { motion } from 'framer-motion';
import { GitBranch, Link as LinkIcon, Heart } from 'lucide-react';

export default function Footer() {
  const fadeUp = {
    hidden: { opacity: 0, y: 20 },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.08,
        duration: 0.4,
      },
    }),
  };

  return (
    <footer className="bg-muted/40 border-t border-border relative overflow-hidden">
      
      {/* subtle background accent */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-primary/5 rounded-full blur-3xl opacity-20" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        
        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
          >
            <h3 className="text-xl font-semibold text-foreground mb-2">
              John Kevin Dejan
            </h3>
            <p className="text-muted-foreground text-sm">
              Web Developer focused on scalable, modern applications.
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={1}
          >
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {[
                { label: "About", href: "#about" },
                { label: "Projects", href: "#projects" },
                { label: "Contact", href: "#contact" },
              ].map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={2}
          >
            <h4 className="text-sm font-semibold text-foreground mb-3">
              Connect
            </h4>

            <div className="flex justify-center md:justify-start gap-4">
              {[
                {
                  href: "https://github.com/veksimage",
                  icon: GitBranch,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/kevin-dejan-108ba1223/",
                  icon: LinkIcon,
                  label: "LinkedIn",
                },
                {
                  href: "https://www.instagram.com/kevinforya_/",
                  icon: Heart,
                  label: "Instagram",
                },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-3 rounded-lg border border-border/50 bg-background/50 hover:bg-muted/20 transition-all"
                  aria-label={label}
                >
                  <Icon size={18} className="text-muted-foreground hover:text-foreground transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
          className="mt-12 pt-6 border-t border-border text-center"
        >
          <p className="text-muted-foreground text-sm">
            © 2026 John Kevin Dejan. Built with Next.js. All rights reserved.
          </p>
        </motion.div>

      </div>
    </footer>
  );
}