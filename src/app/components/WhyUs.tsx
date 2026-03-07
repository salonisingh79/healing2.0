import { motion } from 'motion/react';
import { Heart, UserCheck, Shield, TrendingUp } from 'lucide-react';
import React from 'react';
const values = [
  {
    icon: Heart,
    title: "Care managers, not call centers",
    description: "You'll work with one person who knows your story. No scripts. No transfers."
  },
  {
    icon: UserCheck,
    title: "Doctor matching, not listings",
    description: "We don't just send you links. We guide you to the Vaidya and centre that fit your needs."
  },
  {
    icon: TrendingUp,
    title: "Post-return support",
    description: "Healing doesn't stop when you leave India. We help you integrate what you've learned into daily life."
  },
  {
    icon: Shield,
    title: "Ethical, transparent pricing",
    description: "No hidden fees. No upselling. You know what you're paying for, and why."
  }
];

export function WhyUs() {
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
            Why The Healing Groove
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            You could book a retreat yourself. But you don't have to do this alone.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12">
          {values.map((value, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="flex gap-5"
            >
              <div className="flex-shrink-0">
                <div className="w-12 h-12 rounded-full bg-primary/15 flex items-center justify-center">
                  <value.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <div className="space-y-3">
                <h3 
                  className="text-xl text-foreground"
                  style={{ fontFamily: 'var(--font-serif)' }}
                >
                  {value.title}
                </h3>
                <p 
                  className="text-base text-foreground/70 leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    lineHeight: '1.8'
                  }}
                >
                  {value.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}