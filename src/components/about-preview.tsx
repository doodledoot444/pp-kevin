"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutPreview() {
  return (
    <section id="about" className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="aspect-square bg-muted rounded-lg overflow-hidden ring-2 ring-muted">
              <Image
                src="/projects/kevin.jpg"
                alt="Kevin Dejan - Full Stack Developer"
                width={400}
                height={400}
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">About Me</h2>
            <p className="text-muted-foreground mb-6">
              I’m a full-stack developer focused on building reliable, 
              user-centered web applications. I work primarily within modern 
              JavaScript ecosystems, developing responsive frontends and structured 
              backend systems that are designed to perform well in real-world use.
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Frontend: React, Next.js, Angular</li>
              <li>• Backend: SQL, Express, MongoDB, PostgreSQL, Prisma, Supabase </li>
              <li>• Hostinger, Vercel hosting, CI/CD</li>
              <li>• Focus: Scalable architecture</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}