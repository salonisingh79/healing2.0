import { motion } from 'motion/react';
import { MessageCircle, MapPin, Heart, Plane, HandHeart } from 'lucide-react';
import React from 'react';
const steps = [
  {
    icon: MessageCircle,
    title: "Share your concern",
    description: "Tell us what brings you here. We listen without judgment."
  },
  {
    icon: MapPin,
    title: "We guide you to the right path",
    description: "Based on your needs, we'll match you with the most suitable healing approach."
  },
  {
    icon: Heart,
    title: "Personalised healing plan",
    description: "A Vaidya creates a plan just for you — therapies, diet, rhythm, rest."
  },
  {
    icon: Plane,
    title: "Travel, care, and recovery",
    description: "We help arrange everything. You focus on being present."
  },
  {
    icon: HandHeart,
    title: "Continued support after return",
    description: "Healing doesn't stop when you leave. We stay with you."
  }
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-32 px-6 bg-card">
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
            How your journey works
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            We walk beside you, from the first conversation to your return home.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="flex gap-8 items-start"
            >
              {/* Icon with connecting line */}
              <div className="relative flex-shrink-0">
                <div className="w-16 h-16 rounded-full bg-primary/15 flex items-center justify-center relative z-10">
                  <step.icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                {index < steps.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-16 bg-border"></div>
                )}
              </div>
              
              {/* Content */}
              <div className="flex-1 pt-3">
                <h3 
                  className="text-2xl mb-3 text-foreground"
                  style={{ 
                    fontFamily: 'var(--font-serif)'
                  }}
                >
                  {step.title}
                </h3>
                <p 
                  className="text-base text-foreground/70 leading-relaxed"
                  style={{ 
                    fontFamily: 'var(--font-sans)'
                  }}
                >
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <p 
            className="text-base text-foreground/60 italic"
            style={{ 
              fontFamily: 'var(--font-sans)'
            }}
          >
            Let's begin when you're ready.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
