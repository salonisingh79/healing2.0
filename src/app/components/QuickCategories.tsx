import { motion } from 'motion/react';
import { Heart, Droplet, Leaf, Briefcase, Flower2, Weight, Activity, Brain } from 'lucide-react';
import React from 'react';
const categories = [
  { Icon: Heart, label: 'Yoga & Meditation', count: '18 centres', color: 'text-primary' },
  { Icon: Droplet, label: 'Panchakarma', count: '24 centres', color: 'text-accent' },
  { Icon: Leaf, label: 'Detox Programs', count: '15 centres', color: 'text-primary' },
  { Icon: Briefcase, label: 'Stress & Burnout', count: '28 centres', color: 'text-secondary-foreground' },
  { Icon: Flower2, label: "Women's Wellness", count: '12 centres', color: 'text-primary' },
  { Icon: Weight, label: 'Weight Management', count: '16 centres', color: 'text-accent' },
  { Icon: Activity, label: 'Chronic Pain Relief', count: '20 centres', color: 'text-primary' },
  { Icon: Brain, label: 'Mental Wellness', count: '14 centres', color: 'text-accent' },
];

export function QuickCategories() {
  return (
    <section className="py-12 px-6 bg-white border-b border-muted/30">
      <div className="max-w-7xl mx-auto">
        
        <div className="flex items-center justify-between mb-6">
          <h3 
            className="text-2xl text-foreground"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.01em'
            }}
          >
            What brings you to healing?
          </h3>
          <button 
            className="text-sm text-primary hover:text-primary/80 transition-colors"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-semibold)'
            }}
          >
            VIEW ALL →
          </button>
        </div>

        {/* Horizontal Scrolling Grid */}
        <div className="overflow-x-auto scrollbar-hide -mx-2">
          <div className="flex gap-4 px-2 pb-2">
            {categories.map((category, index) => (
              <motion.div
                key={category.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="flex-shrink-0 w-44 bg-white hover:bg-gradient-to-br hover:from-primary/5 hover:to-accent/5 border border-muted hover:border-primary/40 rounded-lg p-5 text-center transition-all duration-300 hover:shadow-lg hover:-translate-y-1 group"
              >
                <div className="mb-3 flex justify-center">
                  <category.Icon className={`w-10 h-10 ${category.color} group-hover:scale-110 transition-transform duration-300`} strokeWidth={1.5} />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1 group-hover:text-primary transition-colors">
                  {category.label}
                </h4>
                <p className="text-xs text-foreground/50">{category.count}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}