import { motion } from 'motion/react';
import { Calendar } from 'lucide-react';
import React from 'react';
export function SeasonalBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="bg-gradient-to-r from-accent/10 via-primary/5 to-secondary/10 border-b border-primary/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-3">
        <div className="flex items-center justify-center gap-3">
          <Calendar className="w-4 h-4 text-primary" />
          <p 
            className="text-sm text-foreground/70"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-medium)'
            }}
          >
            <span className="text-primary font-semibold">Best season for Ayurveda now</span> • Monsoon detox period begins June
          </p>
        </div>
      </div>
    </motion.div>
  );
}
