import { motion } from 'motion/react';
import React from 'react';
const sections = [
  {
    title: "Why The Healing Groove?",
    content: "Established in 2024, The Healing Groove has positioned itself as the premier platform for authentic Ayurvedic wellness in India. We offer verified centres, transparent pricing, English-speaking practitioners, and personalized care coordination. Our curated selection ensures you can explore healing traditions with modern comfort and safety standards."
  },
  {
    title: "Booking Wellness with The Healing Groove",
    content: "At The Healing Groove, you can find the best deals on authentic Ayurvedic wellness across India. Our partner-first pricing, instant confirmations, and flexible booking options. Each experience is customized to your wellness goals. With verified centres and English-speaking practitioners, we make traditional healing accessible to Western travelers."
  },
  {
    title: "Healing Destinations in India",
    content: "The Healing Groove connects you with India's premier wellness destinations including Kerala's traditional Ayurveda centres, Rishikesh's Himalayan yoga retreats, and Goa's coastal wellness resorts. Experience authentic Panchakarma treatments, meditation practices, and holistic healing programs backed by centuries of wisdom and modern safety standards."
  }
];

export function WhyTheHealingGroove() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-12">
          {sections.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <h3 
                className="text-lg text-foreground mb-4"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '-0.01em'
                }}
              >
                {section.title}
              </h3>
              <p 
                className="text-sm text-foreground/70 leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--font-weight-normal)',
                  lineHeight: '1.8'
                }}
              >
                {section.content}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
