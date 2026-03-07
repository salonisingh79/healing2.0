import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import React from 'react';
const offers = [
  {
    id: 1,
    badge: 'LIMITED TIME',
    badgeColor: 'bg-gradient-to-r from-primary to-accent',
    title: 'Panchakarma Detox Special',
    subtitle: 'Kerala Ayurveda Excellence',
    description: 'Get up to 25% OFF on 14-day Panchakarma packages',
    image: 'https://images.unsplash.com/photo-1758738880382-d614a6ecdc4a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjBheXVydmVkaWMlMjBtYXNzYWdlJTIwdHJlYXRtZW50JTIwcmVsYXhlZCUyMHdlbGxuZXNzfGVufDF8fHx8MTc3MDIyNjM4NHww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'VIEW DETAILS',
    ctaColor: 'text-primary'
  },
  {
    id: 2,
    badge: 'BESTSELLER',
    badgeColor: 'bg-gradient-to-r from-accent to-secondary',
    title: 'Yoga & Meditation Retreat',
    subtitle: 'Himalayan Wellness Experience',
    description: 'Book 7-day packages starting at ₹42,000',
    image: 'https://images.unsplash.com/photo-1606127815423-4bb96d8141b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHlvZ2ElMjBzdW5yaXNlJTIwbW91bnRhaW5zJTIwcGVhY2VmdWwlMjByZXRyZWF0fGVufDF8fHx8MTc3MDIyNjM4NXww&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'BOOK NOW',
    ctaColor: 'text-accent'
  },
  {
    id: 3,
    badge: 'NEW',
    badgeColor: 'bg-gradient-to-r from-secondary to-primary',
    title: 'Stress Relief Getaway',
    subtitle: 'Coastal Healing in Goa',
    description: 'Unwind with special wellness programs at beachside retreats',
    image: 'https://images.unsplash.com/photo-1695411560260-24bca88a2399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZXJzb24lMjByZWxheGluZyUyMGJlYWNoJTIwd2VsbG5lc3MlMjBwZWFjZWZ1bCUyMGdvYXxlbnwxfHx8fDE3NzAyMjYzODV8MA&ixlib=rb-4.1.0&q=80&w=1080',
    cta: 'EXPLORE NOW',
    ctaColor: 'text-secondary-foreground'
  }
];

export function SpecialOffers() {
  return (
    <section className="py-16 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 
              className="text-4xl sm:text-5xl mb-3"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--font-weight-bold)',
                letterSpacing: '-0.02em'
              }}
            >
              Special Offers
            </h2>
            <p 
              className="text-lg text-foreground/60"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--font-weight-normal)'
              }}
            >
              Limited-time wellness packages
            </p>
          </div>
          <button 
            className="text-base text-primary hover:text-primary/80 transition-colors flex items-center gap-2"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-semibold)'
            }}
          >
            VIEW ALL <ArrowRight className="w-5 h-5" />
          </button>
        </div>

        {/* Horizontal Scrolling Offers */}
        <div className="overflow-x-auto scrollbar-hide -mx-2">
          <div className="flex gap-6 px-2 pb-4">
            {offers.map((offer, index) => (
              <motion.div
                key={offer.id}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex flex-col flex-shrink-0 w-96 bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 cursor-pointer group border border-border/50"
                style={{
                  boxShadow: '0 1px 3px rgba(0,0,0,0.04), 0 4px 16px rgba(0,0,0,0.04)'
                }}
              >
                {/* Image with Badge */}
                <div className="relative h-52 overflow-hidden">
                  <ImageWithFallback
                    src={offer.image}
                    alt={offer.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                  
                  {/* Modern Badge */}
                  <div 
                    className={`absolute top-4 left-4 ${offer.badgeColor} text-white text-xs px-4 py-1.5 rounded-full shadow-lg backdrop-blur-sm`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--font-weight-bold)',
                      letterSpacing: '0.05em'
                    }}
                  >
                    {offer.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-7">
                  <p 
                    className="text-xs text-foreground/50 mb-2 uppercase tracking-wider"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--font-weight-semibold)',
                      letterSpacing: '0.08em'
                    }}
                  >
                    {offer.subtitle}
                  </p>
                  <h3 
                    className="text-2xl text-foreground mb-3 group-hover:text-primary transition-colors"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--font-weight-bold)',
                      letterSpacing: '-0.01em',
                      lineHeight: '1.3'
                    }}
                  >
                    {offer.title}
                  </h3>
                  <p 
                    className="text-base text-foreground/70 mb-5 leading-relaxed flex-grow"
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--font-weight-medium)'
                    }}
                  >
                    {offer.description}
                  </p>
                  <button 
                    className={`text-base ${offer.ctaColor} hover:opacity-80 transition-all flex items-center gap-2 group-hover:gap-3 mt-auto`}
                    style={{
                      fontFamily: 'var(--font-sans)',
                      fontWeight: 'var(--font-weight-bold)'
                    }}
                  >
                    {offer.cta} <ArrowRight className="w-5 h-5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}