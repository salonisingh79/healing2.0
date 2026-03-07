import { motion } from 'motion/react';
import { useState } from 'react';
import React from 'react';
const filters = [
  'Stress & Burnout',
  'Gut Health',
  'Detox',
  "Women's Wellness",
  'Yoga & Meditation',
  'Ayurveda Therapy',
  'Weight Management',
  'Chronic Pain'
];

export function FilterChips() {
  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <section className="py-12 px-6 bg-gradient-to-b from-white to-muted/20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h3 className="text-2xl font-serif text-foreground mb-2">
            What brings you to healing?
          </h3>
          <p className="text-foreground/60">Choose your wellness goal</p>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap gap-3 justify-center"
        >
          {filters.map((filter, index) => (
            <button
              key={index}
              onClick={() => setSelected(selected === filter ? null : filter)}
              className={`px-6 py-3 rounded-full border-2 transition-all duration-300 text-sm font-medium shadow-sm hover:shadow-md hover:-translate-y-0.5 ${
                selected === filter
                  ? 'bg-primary text-white border-transparent shadow-lg'
                  : 'bg-white text-foreground border-border hover:border-primary/40'
              }`}
              style={{ fontFamily: 'var(--font-sans)' }}
            >
              {filter}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
}