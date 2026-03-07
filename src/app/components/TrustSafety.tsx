import { motion } from 'motion/react';
import { Shield, Stethoscope, DollarSign, HeadphonesIcon, CheckCircle } from 'lucide-react';
import React from 'react';
const trustPoints = [
  {
    icon: Stethoscope,
    title: "Medical screening before travel",
    description: "Every guest is assessed by qualified practitioners to ensure Ayurveda is right for them."
  },
  {
    icon: Shield,
    title: "Safety & hygiene standards",
    description: "All centres meet international hygiene protocols and safety requirements."
  },
  {
    icon: CheckCircle,
    title: "Integration with modern diagnostics",
    description: "Traditional wisdom complemented by contemporary medical understanding when needed."
  },
  {
    icon: DollarSign,
    title: "Transparent pricing",
    description: "No hidden costs. Everything is clear before you commit."
  },
  {
    icon: HeadphonesIcon,
    title: "24/7 human support",
    description: "A real person, available whenever you need guidance or reassurance."
  }
];

export function TrustSafety() {
  return (
    <section className="py-32 px-6 bg-card">
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
            You are safe here
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Tradition and care, supported by modern safety standards.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {trustPoints.map((point, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                <point.icon className="w-7 h-7 text-primary" strokeWidth={1.5} />
              </div>
              <h3 
                className="text-xl mb-3 text-foreground"
                style={{ fontFamily: 'var(--font-serif)' }}
              >
                {point.title}
              </h3>
              <p 
                className="text-sm text-foreground/70 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="mt-16 p-8 rounded-lg bg-muted/20 border border-border text-center"
        >
          <p 
            className="text-base text-foreground/70 italic"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            "We'll guide you, step by step. There's no rush here."
          </p>
        </motion.div>
      </div>
    </section>
  );
}
