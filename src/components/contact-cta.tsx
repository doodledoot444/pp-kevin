"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, Link, Copy, Check } from "lucide-react";

export default function ContactCTA() {
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

  return (
    <motion.section
      id="contact"
      className="py-24 bg-background relative overflow-hidden scroll-mt-20"
      aria-labelledby="contact-heading"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, ease: "easeOut" }}
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
        </motion.div>

        <div className="max-w-2xl mx-auto">
          {/* Primary Contact - Email */}
          <motion.div
            className="mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
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
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
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
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}