import { motion } from 'motion/react';
import { Shield, Award, Lock, Clock } from 'lucide-react';
import React from 'react';
const signals = [
  {
    icon: Award,
    title: "Accreditation",
    description: "All centres verified by Indian wellness boards"
  },
  {
    icon: Clock,
    title: "Established practice",
    description: "Partner centres average 15+ years of operation"
  },
  {
    icon: Shield,
    title: "Safety protocols",
    description: "Medical screening and continuous care monitoring"
  },
  {
    icon: Lock,
    title: "Secure payments",
    description: "Bank-grade encryption and secure booking"
  }
];

export function TrustSignals() {
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
            Trust & safety
          </h2>
          <p 
            className="text-base text-foreground/60"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-light)'
            }}
          >
            Your wellbeing is our priority
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {signals.map((signal, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-card p-6 rounded-lg border border-border"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0">
                  <div className="w-10 h-10 rounded-full bg-primary/15 flex items-center justify-center">
                    <signal.icon className="w-5 h-5 text-primary" strokeWidth={1.5} />
                  </div>
                </div>
                <div>
                  <h3 
                    className="text-base font-medium mb-1.5 text-foreground"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {signal.title}
                  </h3>
                  <p 
                    className="text-sm text-foreground/70"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      lineHeight: '1.6'
                    }}
                  >
                    {signal.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}