import { motion } from 'motion/react';
import { Shield, UserCheck, DollarSign, HeadphonesIcon } from 'lucide-react';
import React from 'react';
const points = [
  {
    icon: Shield,
    text: "Verified Indian wellness centres"
  },
  {
    icon: DollarSign,
    text: "Transparent pricing"
  },
  {
    icon: UserCheck,
    text: "Personal care coordinator"
  },
  {
    icon: HeadphonesIcon,
    text: "Post-journey support"
  }
];

export function WhyBookWithUs() {
  return (
    <section className="py-16 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 
            className="text-2xl text-foreground mb-3"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.01em'
            }}
          >
            Why book with The Healing Groove
          </h2>
          <p 
            className="text-base text-foreground/60"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-light)'
            }}
          >
            Your trusted partner for authentic Ayurvedic wellness
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {points.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center">
                  <point.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
              </div>
              <p 
                className="text-base text-foreground font-medium"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.6'
                }}
              >
                {point.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}