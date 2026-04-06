"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { memo } from "react";

export default memo(function AboutPreview() {
  const imageVariants = {
    hidden: {
      opacity: 0,
      x: -40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.6,
      },
    },
  };

  const textVariants = {
    hidden: {
      opacity: 0,
      x: 40,
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.6,
        delay: 0.1,
      },
    },
  };

  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          
          <motion.div
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="aspect-square bg-muted rounded-lg overflow-hidden ring-2 ring-muted group">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="w-full h-full"
              >
                <Image
                  src="/projects/kevin.jpg"
                  alt="Kevin Dejan - Full Stack Developer"
                  width={400}
                  height={400}
                  priority
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>
          </motion.div>

         
          <motion.div
            variants={textVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">
              About Me
            </h2>

            <p className="text-muted-foreground mb-6 leading-relaxed">
              Web developer focused on building reliable, 
              scalable applications. Passionate about learning new technologies and best practices to create efficient solutions.
            </p>

            <ul className="space-y-2 text-muted-foreground">
              {[
                "Frontend: React, Next.js, Angular",
                "Backend: SQL, Express, MongoDB, PostgreSQL, Prisma, Supabase",
                "Hosting: Vercel, Hostinger, CI/CD",
                "Focus: Scalable architecture",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{
                    opacity: 0,
                    x: 20,
                  }}
                  whileInView={{
                    opacity: 1,
                    x: 0,
                  }}
                  transition={{
                    duration: 0.4,
                    delay: 0.15 + i * 0.05,
                  }}
                  viewport={{ once: true }}
                >
                  • {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

        </div>
      </div>
    </section>
  );
});