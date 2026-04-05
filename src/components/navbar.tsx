"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, memo } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Menu, X } from "lucide-react";

const DASHBOARD_PAGES = ["/about", "/contact"];

export default memo(function Navbar() {
  const pathname = usePathname();
  const showDashboardButton = DASHBOARD_PAGES.includes(pathname);
  const { scrollY } = useScroll();
  const backgroundOpacity = useTransform(scrollY, [0, 100], [0.15, 0.9]);
  const blur = useTransform(scrollY, [0, 100], [0, 10]);
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const isHomePage = pathname === "/";

  const getLinkHref = (section: string) => {
    if (section === 'about') return '/about';
    if (isMobile) return `/${section}`;
    return isHomePage ? `#${section}` : `/${section}`;
  };

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
          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href={getLinkHref("projects")} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Projects
              </Link>
              <Link href={getLinkHref("about")} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About
              </Link>
              <Link href={getLinkHref("contact")} className="text-foreground hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
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
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary p-2 rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/40"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link
                href={getLinkHref("projects")}
                onClick={closeMenu}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Projects
              </Link>
              <Link
                href={getLinkHref("about")}
                onClick={closeMenu}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                About
              </Link>
              <Link
                href={getLinkHref("contact")}
                onClick={closeMenu}
                className="text-foreground hover:text-primary block px-3 py-2 rounded-md text-base font-medium transition-colors"
              >
                Contact
              </Link>
              {showDashboardButton && (
                <Link
                  href="/dashboard"
                  onClick={closeMenu}
                  className="text-white bg-primary block px-3 py-2 rounded-md text-base font-semibold hover:bg-primary/90 transition-colors"
                >
                  Dashboard
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
});