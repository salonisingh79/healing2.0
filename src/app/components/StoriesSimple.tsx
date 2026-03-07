import { motion } from 'motion/react';
import React from 'react';
const stories = [
  {
    name: "Sarah",
    country: "United Kingdom",
    quote: "I came exhausted. I left knowing how to listen to my body again."
  },
  {
    name: "Michael",
    country: "Australia", 
    quote: "It wasn't what I expected — it was better. Less about fixing me, more about understanding who I am."
  },
  {
    name: "Emma",
    country: "United States",
    quote: "I was skeptical at first. But something shifted. Not overnight — gently, like the way seasons change."
  }
];

export function StoriesSimple() {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-5xl mx-auto">
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
            Real stories
          </h2>
        </motion.div>
        
        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="space-y-5"
            >
              <p 
                className="text-xl md:text-2xl text-foreground/85 leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.7'
                }}
              >
                {story.quote}
              </p>
              <p 
                className="text-sm text-muted-foreground"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {story.name}, {story.country}
              </p>
              {index < stories.length - 1 && (
                <div className="pt-8">
                  <div className="h-px bg-border"></div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
