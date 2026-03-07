import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import React from 'react';
export function FinalCTA() {
  return (
    <section className="py-20 px-6 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 
            className="text-3xl text-foreground mb-4"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.02em'
            }}
          >
            Ready to begin your healing journey?
          </h2>
          <p 
            className="text-lg text-foreground/70 mb-6"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-light)'
            }}
          >
            Explore authentic wellness centres across India
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
              Browse Wellness Centres
              <ArrowRight className="w-5 h-5" />
            </button>
           
          </div>
        </motion.div>
      </div>
    </section>
  );
}