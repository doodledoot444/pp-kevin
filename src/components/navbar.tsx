"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const DASHBOARD_PAGES = ["/about", "/contact"];

export default function Navbar() {
  const pathname = usePathname();
  const showDashboardButton = DASHBOARD_PAGES.includes(pathname);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.15, 0.9]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);

  return (
    <motion.nav
      style={{
        backdropFilter: `blur(${blur}px)`,
        backgroundColor: `rgba(12, 18, 28, ${backgroundOpacity})`,
      }}
      className="fixed top-0 w-full z-50 border-b border-border/40"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-xl font-bold text-foreground">Kevin Dejan</h1>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/projects" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href="/about" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href="/contact" className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
              {showDashboardButton && (
                <Link
                  href="/dashboard"
                  className="text-white bg-primary px-3 py-2 rounded-md text-sm font-semibold hover:bg-primary/90 transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}