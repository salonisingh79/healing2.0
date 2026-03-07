import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { ArrowRight } from 'lucide-react';
import React from 'react';
const paths = [
  {
    title: "Stress & burnout reset",
    description: "For those who've been running on empty. Deep rest, nervous system recalibration, and learning to feel safe again.",
    image: "https://images.unsplash.com/photo-1668600062007-fc80e37ef279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGZvcmVzdCUyMGluZGlhfGVufDF8fHx8MTc3MDIyMDkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "14–21 days"
  },
  {
    title: "Gut & metabolism balance",
    description: "Digestive issues, inflammation, weight imbalance. Ayurveda sees the gut as the root of health. Start there.",
    image: "https://images.unsplash.com/photo-1677599082447-6549af4c5454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHNwaWNlcyUyMG1vcnRhcnxlbnwxfHx8fDE3NzAyMjA5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "14–28 days"
  },
  {
    title: "Women's hormonal wellness",
    description: "PCOS, menopause, cycle irregularities. Gentle, supportive therapies that honor the body's natural rhythms.",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMG9pbCUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3MDIyMDkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "21–28 days"
  },
  {
    title: "Deep detox & renewal",
    description: "Panchakarma. The full reset. For those ready to release what no longer serves and begin again.",
    image: "https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzcwMjIwOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    duration: "21–42 days"
  }
];

export function FeaturedPaths() {
  return (
    <section className="py-32 px-6 bg-card">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-16"
        >
          <h2 
            className="text-2xl md:text-3xl mb-6 text-foreground"
            style={{ 
              fontFamily: 'var(--font-serif)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.02em'
            }}
          >
            Featured healing paths
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Not sure where to begin? These are the journeys our guests choose most.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {paths.map((path, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group"
            >
              <div className="bg-background rounded-lg overflow-hidden border border-border hover:border-primary/50 transition-all duration-500">
                {/* Image */}
                <div className="relative h-64 overflow-hidden">
                  <ImageWithFallback
                    src={path.image}
                    alt={path.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4">
                    <p 
                      className="text-xs text-warm-white/80"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {path.duration}
                    </p>
                  </div>
                </div>
                
                {/* Content */}
                <div className="p-6 space-y-4">
                  <h3 
                    className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {path.title}
                  </h3>
                  <p 
                    className="text-sm text-foreground/70 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      lineHeight: '1.7'
                    }}
                  >
                    {path.description}
                  </p>
                  <button className="flex items-center gap-2 text-sm text-primary hover:gap-3 transition-all duration-300">
                    <span>Explore this path</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}