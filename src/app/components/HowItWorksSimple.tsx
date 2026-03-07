import { motion } from 'motion/react';
import { Search, Users, CheckCircle, Plane, ArrowRight } from 'lucide-react';
import React from 'react';
const steps = [
  {
    icon: Search,
    title: "Search",
    description: "Find centres that match your wellness goals"
  },
  {
    icon: Users,
    title: "Compare",
    description: "Review verified centres, pricing, and programs"
  },
  {
    icon: CheckCircle,
    title: "Enquire / Book",
    description: "Connect with our care team to finalize details"
  },
  {
    icon: Plane,
    title: "Travel & heal",
    description: "Begin your wellness journey in India"
  }
];

export function HowItWorksSimple() {
  return (
    <section className="py-20 px-6 bg-gradient-to-b from-white via-muted/10 to-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-4xl sm:text-5xl text-foreground mb-4"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.02em'
            }}
          >
            How it works
          </h2>
          <p 
            className="text-lg text-foreground/60 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-normal)'
            }}
          >
            Simple steps to your healing journey
          </p>
        </motion.div>
        
        {/* Horizontal Flow Cards */}
        <div className="relative">
          {/* Connecting Line - Desktop */}
          <div className="hidden lg:block absolute top-24 left-0 right-0 h-1 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20 -z-10"></div>
          
          <div className="grid lg:grid-cols-4 gap-6 lg:gap-4">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                {/* Arrow between cards - Desktop Only */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute -right-2 top-24 z-20">
                    <div className="bg-white rounded-full p-2 shadow-lg">
                      <ArrowRight className="w-5 h-5 text-primary" />
                    </div>
                  </div>
                )}
                
                {/* Card */}
                <div className="relative bg-white rounded-lg p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-border/50 hover:border-primary/50 h-full flex flex-col group hover:-translate-y-2">
                  {/* Step Number Badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 rounded-full bg-gradient-to-br from-primary to-accent text-white flex items-center justify-center shadow-lg font-bold text-lg">
                    {index + 1}
                  </div>
                  
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-20 h-20 rounded-lg bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <step.icon className="w-10 h-10 text-primary" strokeWidth={1.5} />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 
                      className="text-2xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 'var(--font-weight-bold)',
                        letterSpacing: '-0.01em'
                      }}
                    >
                      {step.title}
                    </h3>
                    <p 
                      className="text-base text-foreground/70 leading-relaxed"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 'var(--font-weight-normal)'
                      }}
                    >
                      {step.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Below */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <button 
            className="px-8 py-4 rounded-full bg-primary text-white hover:bg-primary/90 transition-all duration-300 shadow-lg hover:shadow-xl font-semibold text-base"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-semibold)'
            }}
          >
            Start Your Journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}