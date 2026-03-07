import { motion } from 'motion/react';
import { MessageCircleHeart } from 'lucide-react';
import React from 'react';
export function CareGuideCTA() {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="space-y-8"
        >
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center">
              <MessageCircleHeart className="w-8 h-8 text-primary" strokeWidth={1.5} />
            </div>
          </div>
          
          <div className="space-y-4">
            <p 
              className="text-2xl md:text-3xl text-foreground"
              style={{ 
                fontFamily: 'var(--font-serif)',
                fontWeight: 'var(--font-weight-medium)',
                lineHeight: '1.4'
              }}
            >
              Not sure where to begin?
            </p>
            <p 
              className="text-xl text-foreground/70"
              style={{ 
                fontFamily: 'var(--font-sans)',
                lineHeight: '1.6'
              }}
            >
              Speak to someone who understands.
            </p>
          </div>
          
          <div className="pt-4">
            <button className="px-10 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300 text-lg">
              Talk to a Care Guide
            </button>
          </div>
          
          <p 
            className="text-sm text-muted-foreground italic pt-4"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            No pressure. Just conversation.
          </p>
        </motion.div>
      </div>
    </section>
  );
}