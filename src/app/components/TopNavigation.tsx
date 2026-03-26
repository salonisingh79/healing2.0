import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import Asset5ColorIcon from '../../imports/Asset5ColorIcon1';
import React from 'react';
export function TopNavigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isAboutOpen, setIsAboutOpen] = useState(false);
  const aboutWrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isAboutOpen) return;

    const onDocumentDown = (e: MouseEvent) => {
      const wrapper = aboutWrapperRef.current;
      if (!wrapper) return;
      if (e.target instanceof Node && !wrapper.contains(e.target)) setIsAboutOpen(false);
    };

    document.addEventListener('mousedown', onDocumentDown);
    return () => document.removeEventListener('mousedown', onDocumentDown);
  }, [isAboutOpen]);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-muted/50 shadow-sm">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="h-11 w-auto aspect-[427.28/467.66] group-hover:opacity-90 transition-opacity">
              <Asset5ColorIcon />
            </div>
            <span 
              className="text-xl font-bold text-primary group-hover:opacity-80 transition-opacity"
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              The Healing Groove
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* <Link
              to="/search"
              className="px-4 py-2 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
            >
              Explore Wellness
            </Link> */}
            <div className="relative" ref={aboutWrapperRef}>
              <button
                type="button"
                onClick={() => setIsAboutOpen((v) => !v)}
                className="px-4 py-2 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all flex items-center gap-1"
                aria-haspopup="menu"
                aria-expanded={isAboutOpen}
              >
                About
                <ChevronDown className="w-4 h-4 text-primary/70" />
              </button>

              <AnimatePresence>
                {isAboutOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -8, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -8, scale: 0.98 }}
                    transition={{ duration: 0.16 }}
                    className="absolute left-0 top-full mt-3 w-56 bg-white border border-muted/50 shadow-xl rounded-2xl overflow-hidden z-50"
                    role="menu"
                  >
                    <Link
                      to="/who-we-are"
                      onClick={() => setIsAboutOpen(false)}
                      className="block px-5 py-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
                      role="menuitem"
                    >
                      Who We Are
                    </Link>
                    <Link
                      to="/connect-with-us"
                      onClick={() => setIsAboutOpen(false)}
                      className="block px-5 py-3 text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
                      role="menuitem"
                    >
                      Connect with us
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
            <Link
              to="/how-it-works"
              className="px-4 py-2 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
            >
              How It Works
            </Link>
            <Link
              to="/why-india"
              className="px-4 py-2 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
            >
              Why India
            </Link>
            <Link
              to="/stories"
              className="px-4 py-2 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
            >
              Stories
            </Link>
            <Link
              to="/for-centres"
              className="px-4 py-2 rounded-lg text-base font-semibold text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
            >
              For Centres
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center gap-3">
           
            <Link
              to="/enquiry/corporate"
              className="flex items-center gap-2 px-6 py-2.5 rounded-lg text-base font-bold bg-primary text-white shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-105 transition-all"
            >
              {/* <User className="w-4 h-4" />
              Sign In */}
              Let's Heal Together
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden w-10 h-10 rounded-lg flex items-center justify-center hover:bg-muted/50 transition-colors"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-muted/50 bg-white"
          >
            <div className="px-6 py-4 space-y-1">
              {/* <Link
                to="/search"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                Explore Wellness
              </Link> */}
              <Link
                to="/how-it-works"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                How It Works
              </Link>
              <Link
                to="/why-india"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                Why India
              </Link>
              <Link
                to="/stories"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                Stories
              </Link>
              <Link
                to="/who-we-are"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                Who We Are
              </Link>
              <Link
                to="/connect-with-us"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                Connect with us
              </Link>
              <Link
                to="/for-centres"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-medium text-foreground/70 hover:text-primary hover:bg-primary/5 transition-all"
              >
                For Centres
              </Link>
              
              <Link
                to="/signin"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block px-4 py-3 rounded-lg text-sm font-semibold text-center bg-primary/10 text-primary hover:bg-primary/20 transition-all"
              >
                {/* Sign In */}
                Let's Heal Together
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}