import { motion } from 'motion/react';
import { useState } from 'react';
import { ChevronDown, Shield, Stethoscope, Lock, AlertCircle } from 'lucide-react';
import React from 'react';
const safetyTopics = [
  {
    icon: Stethoscope,
    title: "Medical screening",
    content: "Before you travel, our medical team reviews your health history and current condition. We ensure Ayurveda is appropriate and safe for you. If there are concerns, we'll refer you to appropriate care."
  },
  {
    icon: Shield,
    title: "Safety standards",
    content: "All partner centres meet rigorous hygiene and safety protocols. We visit every location personally. We verify practitioner credentials. Your wellbeing is not negotiable."
  },
  {
    icon: Lock,
    title: "Data privacy",
    content: "Your health information is protected and confidential. We only share what's necessary with your chosen centre. You control your data. Always."
  },
  {
    icon: AlertCircle,
    title: "Who Ayurveda may not be right for",
    content: "Ayurveda is powerful, but not for everyone. We don't recommend it for acute medical emergencies, uncontrolled chronic conditions, or those requiring immediate pharmaceutical intervention. Honesty keeps you safe."
  }
];

export function SafetyEthics() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-5xl md:text-6xl mb-6 text-foreground"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: '1.3'
            }}
          >
            Safety & ethics
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Transparency builds trust. Here's what you should know.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {safetyTopics.map((topic, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="border border-border rounded-lg overflow-hidden bg-card"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between hover:bg-muted/10 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <topic.icon className="w-5 h-5 text-primary flex-shrink-0" strokeWidth={1.5} />
                  <span 
                    className="text-lg text-left text-foreground"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {topic.title}
                  </span>
                </div>
                <ChevronDown 
                  className={`w-5 h-5 text-foreground/50 transition-transform duration-300 flex-shrink-0 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              <div 
                className={`overflow-hidden transition-all duration-300 ${
                  openIndex === index ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <div className="px-6 pb-5 pt-2 pl-16">
                  <p 
                    className="text-base text-foreground/70 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      lineHeight: '1.8'
                    }}
                  >
                    {topic.content}
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
