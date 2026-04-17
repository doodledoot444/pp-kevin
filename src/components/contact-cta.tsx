"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, GitBranch, Link, Copy, Check } from "lucide-react";
import { ContactSkeleton } from "@/components/skeletons";

export default function ContactCTA({ isLoading = false }: { isLoading?: boolean }) {
  const [copied, setCopied] = useState(false);

  if (isLoading) {
    return (
      <section
        id="contact"
        className="py-24 bg-background relative overflow-hidden scroll-mt-20"
        aria-busy="true"
        aria-labelledby="contact-heading"
      >
        <ContactSkeleton />
      </section>
    );
  }

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


  const sectionVariants = {
    hidden: {
      opacity: 0,
      y: 30,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 20,
    },
    visible: (i = 0) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.1 + i * 0.08,
        duration: 0.45,
      },
    }),
  };

  return (
    <motion.section
      id="contact"
      className="py-24 bg-background relative overflow-hidden scroll-mt-20"
      aria-labelledby="contact-heading"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
    >
      
      <motion.div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <div className="absolute top-20 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl opacity-20" />
      </motion.div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={fadeUp}
          custom={0}
        >
          <h2
            id="contact-heading"
            className="text-4xl sm:text-5xl font-bold text-foreground mb-4"
          >
            Contact
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Open to opportunities and collaborations. Let&apos;s build something together.
          </p>
        </motion.div>

        <div className="max-w-2xl mx-auto">

          
          <motion.div
            className="mb-12"
            variants={fadeUp}
            custom={1}
          >
            <div className="bg-muted/10 border border-border/50 rounded-2xl p-8 text-center backdrop-blur-sm">
              
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

              
              <div className="flex items-center justify-center gap-3 mb-6 p-4 bg-background rounded-lg border border-border/30">
                <code className="text-sm text-foreground font-mono">
                  {email}
                </code>

                <motion.button
                  onClick={copyToClipboard}
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-md hover:bg-muted/20 transition-colors"
                >
                  {copied ? (
                    <Check size={16} className="text-green-500" />
                  ) : (
                    <Copy size={16} className="text-muted-foreground" />
                  )}
                </motion.button>
              </div>

           
              <motion.a
                href={`mailto:${email}`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground font-semibold rounded-lg hover:bg-primary/90 transition-colors"
              >
                <Mail size={18} className="mr-2" />
                Open Email Client
              </motion.a>
            </div>
          </motion.div>

          
          <motion.div
            className="text-center"
            variants={fadeUp}
            custom={2}
          >
            <h3 className="text-lg font-semibold text-foreground mb-6">
              Connect on Social
            </h3>

            <div className="flex justify-center gap-6">
              {[
                {
                  href: "https://github.com/doodledoot444",
                  icon: GitBranch,
                  label: "GitHub",
                },
                {
                  href: "https://www.linkedin.com/in/kevin-dejan-108ba1223/",
                  icon: Link,
                  label: "LinkedIn",
                },
              ].map(({ href, icon: Icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -4, scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={fadeUp}
                  custom={3 + i}
                  className="group flex flex-col items-center gap-2 p-4 rounded-xl border border-border/50 bg-muted/5 hover:bg-muted/10 hover:border-primary/30 transition-all"
                >
                  <Icon className="text-muted-foreground group-hover:text-primary transition-colors" />
                  <span className="text-xs text-muted-foreground group-hover:text-foreground">
                    {label}
                  </span>
                </motion.a>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </motion.section>
  );
}