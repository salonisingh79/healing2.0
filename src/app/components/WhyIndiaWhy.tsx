import { motion } from 'motion/react';
import React from 'react';
const ideas = [
  {
    title: "Root-cause healing",
    description: "Ayurveda doesn't treat symptoms. It asks: why is the body out of balance? What needs to shift for true healing to happen?"
  },
  {
    title: "Nervous system reset",
    description: "Your body has been in fight-or-flight for too long. Ayurveda creates the conditions for deep rest — the kind that changes everything."
  },
  {
    title: "Ancient + modern integration",
    description: "Traditional wisdom, supported by diagnostic clarity. You don't have to choose between old and new. Here, they work together."
  },
  {
    title: "Healing as lifestyle, not event",
    description: "This is not a quick fix. It's the beginning of understanding your body differently — a practice you take home with you."
  }
];

export function WhyIndiaWhy() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl mb-6 text-foreground"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: '1.3'
            }}
          >
            Why India. Why Ayurveda.
          </h2>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {ideas.map((idea, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="space-y-4"
            >
              <h3 
                className="text-2xl text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {idea.title}
              </h3>
              <p 
                className="text-base text-foreground/70 leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.8'
                }}
              >
                {idea.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
