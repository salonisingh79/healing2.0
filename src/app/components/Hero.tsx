import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
export function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1668600062007-fc80e37ef279?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b2dhJTIwbWVkaXRhdGlvbiUyMGZvcmVzdCUyMGluZGlhfGVufDF8fHx8MTc3MDIyMDkwMnww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Peaceful meditation in nature"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/40 via-foreground/20 to-background"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
        >
          <h1 
            className="text-6xl md:text-7xl lg:text-8xl mb-6 text-warm-white tracking-wide"
            style={{ 
              fontFamily: 'var(--font-title)',
              lineHeight: '1.1'
            }}
          >
            The Healing Groove
          </h1>
          
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="text-xl md:text-2xl mb-12 text-warm-white/90 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Ancient Indian wisdom, thoughtfully guided for modern lives.
          </motion.p>
          
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="flex flex-col sm:flex-row gap-5 justify-center items-center"
          >
            <a 
              href="#explore"
              className="px-8 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-500 min-w-[240px]"
            >
              Explore Healing Journeys
            </a>
            <button className="px-8 py-4 rounded-full bg-card/90 backdrop-blur text-foreground hover:bg-card transition-colors duration-500 min-w-[240px]">
              Speak to a Care Guide
            </button>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 2 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 rounded-full border-2 border-warm-white/50 flex justify-center pt-2"
        >
          <div className="w-1.5 h-1.5 rounded-full bg-warm-white/70"></div>
        </motion.div>
      </motion.div>
    </section>
  );
}