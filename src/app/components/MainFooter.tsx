import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import Asset4WhiteIcon from '../../imports/Asset4WhiteIcon1';
import React from 'react';
export function MainFooter() {
  return (
    <footer className="bg-primary/95 border-t border-primary">
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        {/* Popular Destinations - Highlighted Section */}
        <div className="mb-6 pb-6 border-b border-white/10">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2 text-white/90 text-sm font-semibold">
              <MapPin className="w-4 h-4" strokeWidth={2} />
              Popular Destinations
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-2">
              <Link 
                to="/destination/kerala" 
                className="group relative overflow-hidden rounded-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1764012393303-157f358bd5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Kerala"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <div className="font-semibold text-white text-xs mb-0.5">Kerala</div>
                  <div className="text-[10px] text-white/70">Backwaters</div>
                </div>
              </Link>

              <Link 
                to="/destination/goa" 
                className="group relative overflow-hidden rounded-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1725990075468-6af40634e012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Goa"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <div className="font-semibold text-white text-xs mb-0.5">Goa</div>
                  <div className="text-[10px] text-white/70">Beach Wellness</div>
                </div>
              </Link>

              <Link 
                to="/destination/rishikesh" 
                className="group relative overflow-hidden rounded-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1724864814923-548d7fd5f42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Rishikesh"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <div className="font-semibold text-white text-xs mb-0.5">Rishikesh</div>
                  <div className="text-[10px] text-white/70">Yoga Capital</div>
                </div>
              </Link>

              <Link 
                to="/destination/karnataka" 
                className="group relative overflow-hidden rounded-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1702970091346-8e4e72427691?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Karnataka"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <div className="font-semibold text-white text-xs mb-0.5">Karnataka</div>
                  <div className="text-[10px] text-white/70">Heritage</div>
                </div>
              </Link>

              <Link 
                to="/destination/tamil-nadu" 
                className="group relative overflow-hidden rounded-md bg-white/10 hover:bg-white/15 border border-white/20 hover:border-white/40 transition-all backdrop-blur-sm"
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1759509334486-3ae81c4dcb01?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
                    alt="Tamil Nadu"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2">
                  <div className="font-semibold text-white text-xs mb-0.5">Tamil Nadu</div>
                  <div className="text-[10px] text-white/70">Temple Towns</div>
                </div>
              </Link>

              <Link 
                to="/search" 
                className="group relative overflow-hidden rounded-md bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/30 transition-all flex items-center justify-center aspect-[4/3]"
              >
                <div className="text-center px-2">
                  <div className="font-semibold text-white text-xs mb-0.5">View All</div>
                  <div className="text-[10px] text-white/50 group-hover:text-white/70">Explore →</div>
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section - Compact */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <Link to="/" className="group flex items-center gap-3">
            <div className="h-14 w-auto aspect-[427.28/467.66] group-hover:opacity-80 transition-opacity">
              <Asset4WhiteIcon />
            </div>
            <div 
              className="text-xl font-bold text-white group-hover:text-green-200 transition-colors"
              style={{ 
                fontFamily: 'var(--font-sans)',
                letterSpacing: '-0.02em'
              }}
            >
              The Healing Groove
            </div>
          </Link>

          {/* Social + Contact */}
          <div className="flex flex-col items-start gap-2">
            <div className="text-xs font-semibold text-white/70">Follow us</div>
            <div className="flex items-center gap-2.5">
              <a 
                href="https://instagram.com/thehealinggroove" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a 
                href="https://linkedin.com/company/thehealinggroove" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a 
              href="https://www.facebook.com/profile.php?id=61578539474411" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
              <a 
                href="https://twitter.com/thehealinggroove" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-7 h-7 rounded-full border border-white/20 hover:border-white hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-all"
                aria-label="Twitter"
              >
                <Twitter className="w-3.5 h-3.5" strokeWidth={1.5} />
              </a>
            </div>
            <div className="flex flex-wrap items-center gap-3 text-xs text-white/70">
              <a href="tel:8427775621" className="inline-flex items-center gap-2 hover:text-white transition-colors">
                <Phone className="w-3.5 h-3.5" />
                <span>8427775621</span>
              </a>
              <a
                href="mailto:info@thehealinggroove.com"
                className="inline-flex items-center gap-2 hover:text-white transition-colors"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>info@thehealinggroove.com</span>
              </a>
            </div>
          </div>

          {/* Legal Links */}
          <div className="flex items-center gap-5">
            <p className="text-xs text-white/40">
              © 2026 The Healing Groove
            </p>
            {/* Corporate page is currently hidden */}
            {/* <Link to="/corporate-wellness" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Corporate
            </Link> */}
            <Link to="/blog" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Blog
            </Link>
            <Link to="/privacy" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Terms
            </Link>
            <Link to="/cookies" className="text-xs text-white/50 hover:text-white/80 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}