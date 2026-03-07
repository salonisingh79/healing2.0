import { motion } from 'motion/react';
import React from 'react';
export function WhyIndiaSmall() {
  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 
            className="text-2xl mb-4 text-foreground"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.01em'
            }}
          >
            Why India leads in Ayurveda & wellness
          </h2>
          <p 
            className="text-base text-foreground/60 mb-8"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-light)'
            }}
          >
            5,000 years of healing wisdom
          </p>
          <div className="space-y-4 text-left max-w-3xl mx-auto">
            <p 
              className="text-base text-foreground/80 leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-sans)',
                lineHeight: '1.7'
              }}
            >
              Ayurveda was born in India over 5,000 years ago and continues to be practiced in its most authentic form here. The country's climate, natural herbs, and generations of trained practitioners create conditions for healing that cannot be replicated elsewhere.
            </p>
            <p 
              className="text-base text-foreground/80 leading-relaxed"
              style={{ 
                fontFamily: 'var(--font-sans)',
                lineHeight: '1.7'
              }}
            >
              From Kerala's coastal Panchakarma centres to Himalayan detox retreats, India offers wellness experiences grounded in tradition yet supported by modern medical understanding.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}