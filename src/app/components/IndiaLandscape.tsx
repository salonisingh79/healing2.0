import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
const regions = [
  {
    name: "Kerala",
    focus: "Traditional Ayurveda",
    description: "Backwaters, coastal serenity, authentic panchakarma",
    image: "https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzcwMjIwOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Himalayas",
    focus: "Detox, silence, renewal",
    description: "Mountain air, forest walks, deep rest",
    image: "https://images.unsplash.com/photo-1766434773090-bfc6bdbf8b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBzdW5yaXNlJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcwMjIwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    name: "Coastal India",
    focus: "Recovery & rejuvenation",
    description: "Ocean breeze, gentle therapies, long-term healing",
    image: "https://images.unsplash.com/photo-1742483377931-68488341fb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMHdlbGxuZXNzJTIwcmV0cmVhdCUyMGluZGlhfGVufDF8fHx8MTc3MDIyMDkwNHww&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function IndiaLandscape() {
  return (
    <section className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
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
            India as a healing landscape
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Different places hold different medicine. We'll help you find yours.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {regions.map((region, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              className="group"
            >
              <div className="relative h-80 rounded-lg overflow-hidden mb-5">
                <ImageWithFallback
                  src={region.image}
                  alt={region.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/70 via-foreground/20 to-transparent"></div>
                <div className="absolute bottom-6 left-6 right-6">
                  <h3 
                    className="text-3xl text-warm-white mb-2"
                    style={{ fontFamily: 'var(--font-serif)' }}
                  >
                    {region.name}
                  </h3>
                  <p 
                    className="text-sm text-warm-white/90"
                    style={{ fontFamily: 'var(--font-sans)' }}
                  >
                    {region.focus}
                  </p>
                </div>
              </div>
              <p 
                className="text-sm text-foreground/70 text-center leading-relaxed"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  lineHeight: '1.7'
                }}
              >
                {region.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
