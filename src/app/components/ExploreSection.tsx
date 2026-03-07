import { motion } from 'motion/react';
import { Search, Clock, DollarSign, MapPin } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
export function ExploreSection() {
  const [concern, setConcern] = useState('');
  
  return (
    <section id="explore" className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-2xl md:text-3xl mb-6 text-foreground"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.02em'
            }}
          >
            Explore healing journeys
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Find what feels right for you.
          </p>
          
          {/* Search Block */}
          <div className="max-w-3xl mx-auto space-y-6">
            {/* What you want to work on */}
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="What you want to work on"
                value={concern}
                onChange={(e) => setConcern(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
            </div>
            
            {/* Soft Filters */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="relative">
                <Clock className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select className="w-full pl-11 pr-4 py-3.5 rounded-full bg-background border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm">
                  <option>Time you can give</option>
                  <option>7-14 days</option>
                  <option>14-21 days</option>
                  <option>21+ days</option>
                </select>
              </div>
              
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select className="w-full pl-11 pr-4 py-3.5 rounded-full bg-background border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm">
                  <option>Budget comfort</option>
                  <option>$2,000 - $3,500</option>
                  <option>$3,500 - $5,000</option>
                  <option>$5,000+</option>
                </select>
              </div>
              
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select className="w-full pl-11 pr-4 py-3.5 rounded-full bg-background border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm">
                  <option>Nature preference</option>
                  <option>Coast</option>
                  <option>Forest</option>
                  <option>Hills & Mountains</option>
                </select>
              </div>
            </div>
            
            <div className="pt-4">
              <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300">
                Show me what fits
              </button>
            </div>
          </div>
        </motion.div>
        
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-center text-sm text-muted-foreground italic mt-12"
          style={{ fontFamily: 'var(--font-sans)' }}
        >
          Still not sure? That's okay. A care guide can help.
        </motion.p>
      </div>
    </section>
  );
}