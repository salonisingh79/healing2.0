import { motion } from 'motion/react';
import { Shield, Users, DollarSign, HeadphonesIcon, CheckCircle } from 'lucide-react';
import React from 'react';
const trustPoints = [
  {
    icon: Users,
    text: "Personalised care, not packages"
  },
  {
    icon: Shield,
    text: "Pre-travel medical screening"
  },
  {
    icon: DollarSign,
    text: "Transparent pricing"
  },
  {
    icon: HeadphonesIcon,
    text: "24/7 human support"
  },
  {
    icon: CheckCircle,
    text: "India-based verified centres"
  }
];

export function TrustBar() {
  return (
    <section className="py-8 px-6 bg-card border-y border-border">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8"
        >
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center text-center gap-3"
            >
              <point.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
              <p 
                className="text-xs text-foreground/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {point.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
