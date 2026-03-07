import { motion } from 'motion/react';
import { Leaf, Flame, Droplet, Activity } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 1, ease: "easeOut" }
};

export function WhyAyurveda() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Image */}
          <motion.div {...fadeInUp} className="relative">
            <div className="relative rounded-lg overflow-hidden shadow-2xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1677599082447-6549af4c5454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHNwaWNlcyUyMG1vcnRhcnxlbnwxfHx8fDE3NzAyMjA5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ayurvedic herbs and spices"
                className="w-full h-[600px] object-cover"
              />
              {/* Subtle texture overlay */}
              <div 
                className="absolute inset-0 opacity-5 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
                }}
              ></div>
            </div>
          </motion.div>
          
          {/* Right: Text Content */}
          <motion.div {...fadeInUp} transition={{ delay: 0.2, duration: 1 }}>
            <h2 
              className="text-5xl md:text-6xl mb-8 text-foreground"
              style={{ 
                fontFamily: 'var(--font-serif)',
                lineHeight: '1.3'
              }}
            >
              Why India, Why Ayurveda
            </h2>
            
            <div className="space-y-6 mb-12">
              <p 
                className="text-lg text-foreground/80"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.9'
                }}
              >
                Ayurveda is not a quick fix.
              </p>
              <p 
                className="text-lg text-foreground/80"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.9'
                }}
              >
                It is a way of listening to the body — patiently, respectfully, deeply. 
                A 5,000-year-old science rooted in the understanding that health 
                is balance, and healing begins when we honor what we are, not force what we should be.
              </p>
              <p 
                className="text-lg text-foreground/80"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.9'
                }}
              >
                India is where this wisdom was born. It's where nature, tradition, 
                and practiced hands come together in ways no textbook can replicate.
              </p>
            </div>
            
            {/* Icons */}
            <div className="grid grid-cols-2 gap-8">
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="flex flex-col items-start gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-secondary/20 flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-secondary" />
                </div>
                <p className="text-sm text-foreground/70">Natural herbs & remedies</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="flex flex-col items-start gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                  <Flame className="w-6 h-6 text-accent" />
                </div>
                <p className="text-sm text-foreground/70">Balancing inner fire (Agni)</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col items-start gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                  <Droplet className="w-6 h-6 text-primary" />
                </div>
                <p className="text-sm text-foreground/70">Cleansing & renewal</p>
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="flex flex-col items-start gap-3"
              >
                <div className="w-12 h-12 rounded-full bg-muted/40 flex items-center justify-center">
                  <Activity className="w-6 h-6 text-muted-foreground" />
                </div>
                <p className="text-sm text-foreground/70">Body-mind harmony</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
