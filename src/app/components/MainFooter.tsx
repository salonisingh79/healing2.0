import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, Phone, Mail } from 'lucide-react';
import Asset4WhiteIcon from '../../imports/Asset4WhiteIcon1';
import React from 'react';
export function MainFooter() {
  return (
    <footer className="bg-primary/95 border-t border-primary">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link to="/" className="group inline-flex items-center gap-3 mb-4">
              <div className="h-14 w-auto aspect-[427.28/467.66] group-hover:opacity-80 transition-opacity">
                <Asset4WhiteIcon />
              </div>
              <div
                className="text-xl font-bold text-white group-hover:text-green-200 transition-colors"
                style={{
                  fontFamily: 'var(--font-sans)',
                  letterSpacing: '-0.02em',
                }}
              >
                The Healing Groove
              </div>
            </Link>
            <p className="text-sm text-white/70 leading-relaxed">
              Healing journeys and wellness experiences curated with trust, care, and authentic guidance.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Quick Links</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/how-it-works" className="text-white/70 hover:text-white transition-colors">How It Works</Link>
              <Link to="/why-india" className="text-white/70 hover:text-white transition-colors">Why India</Link>
              <Link to="/stories" className="text-white/70 hover:text-white transition-colors">Stories</Link>
              <Link to="/who-we-are" className="text-white/70 hover:text-white transition-colors">Who We Are</Link>
              <Link to="/connect-with-us" className="text-white/70 hover:text-white transition-colors">Connect With Us</Link>
            </div>
          </div>

          {/* Explore */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Explore</h4>
            <div className="flex flex-col gap-2 text-sm">
              <Link to="/search" className="text-white/70 hover:text-white transition-colors">Explore Wellness</Link>
              <Link to="/for-centres" className="text-white/70 hover:text-white transition-colors">For Centres</Link>
              <Link to="/blog" className="text-white/70 hover:text-white transition-colors">Blog</Link>
              <Link to="/privacy" className="text-white/70 hover:text-white transition-colors">Privacy</Link>
              <Link to="/terms" className="text-white/70 hover:text-white transition-colors">Terms</Link>
              <Link to="/cookies" className="text-white/70 hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>

          {/* Contact + Social */}
          <div>
            <h4 className="text-white font-bold text-base mb-4">Contact</h4>
            <div className="flex flex-col gap-3 text-sm text-white/75">
              <a href="tel:8427775621" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-4 h-4" />
                <span>8427775621</span>
              </a>
              <a
                href="mailto:info@thehealinggroove.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span>info@thehealinggroove.com</span>
              </a>
              <div className="flex items-center gap-2.5 pt-1">
                <a
                  href="https://instagram.com/thehealinggroove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://linkedin.com/company/thehealinggroove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://www.facebook.com/profile.php?id=61578539474411"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="w-4 h-4" strokeWidth={1.5} />
                </a>
                <a
                  href="https://twitter.com/thehealinggroove"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 rounded-full border border-white/25 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="w-4 h-4" strokeWidth={1.5} />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/15">
          <p className="text-xs text-white/45">© 2026 The Healing Groove. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}