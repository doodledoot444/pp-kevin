"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, memo } from "react";
import { Menu, X } from "lucide-react";

const DASHBOARD_PAGES = ["/about", "/contact"];

export default memo(function Navbar() {
  const pathname = usePathname();
  const showDashboardButton = DASHBOARD_PAGES.includes(pathname);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const getLinkHref = (section: string) => {
    return `/${section}`;
  };

  return (
    <nav
      className="fixed top-0 w-full z-50 border-b border-border/40 bg-background/15 backdrop-blur-sm"
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
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {/* Mobile Menu */}
        {isOpen && (
          <div
            id="mobile-menu"
            className="md:hidden bg-background/95 backdrop-blur-sm border-t border-border/40 animate-in fade-in slide-in-from-top-2 duration-200"
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
          </div>
        )}
      </div>
    </nav>
  );
});