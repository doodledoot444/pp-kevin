"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function MaintenancePage() {
  const [sourceLabel] = useState(() => {
    if (typeof window === "undefined") return "Project resource";
    const params = new URLSearchParams(window.location.search);
    const source = params.get("source");
    return source === "live" ? "Live site" : source === "repo" ? "Repository" : "Project resource";
  });

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-2xl rounded-[28px] border border-border/50 bg-card/95 p-8 shadow-[0_24px_80px_rgba(15,23,42,0.12)] backdrop-blur-xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="space-y-8 text-center"
        >
          <div className="space-y-4">
            <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary/80">
              Work in Progress
            </p>
            <h1 className="text-4xl sm:text-5xl font-semibold text-foreground">
              Under Maintenance
            </h1>
            <p className="mx-auto max-w-xl text-base sm:text-lg leading-8 text-muted-foreground">
              This project is currently being updated and improved for better performance and stability.
            </p>
          </div>

          <div className="rounded-3xl border border-border/50 bg-muted/70 px-6 py-5 text-left text-sm sm:text-base text-muted-foreground">
            <p>Personal portfolio and project environment</p>
            <p className="mt-2 text-foreground">{sourceLabel} is temporarily unavailable.</p>
            <p className="mt-2">Status: No ETA</p>
          </div>

          <motion.div
            className="flex items-center justify-center gap-3"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: {},
              visible: {},
            }}
          >
            {[0, 1, 2].map((dot) => (
              <motion.span
                key={dot}
                className="block h-3 w-3 rounded-full bg-primary"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 1.6,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: dot * 0.2,
                }}
              />
            ))}
          </motion.div>

          <Link
            href="/dashboard"
            className="inline-flex w-full items-center justify-center rounded-full bg-primary px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/20 transition-colors hover:bg-primary/90 sm:w-auto"
          >
            Go back to Dashboard
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
