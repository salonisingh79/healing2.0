import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
const testimonials = [
  {
    quote: "The platform made it easy to find exactly what I needed. My coordinator guided me through everything.",
    name: "Rebecca",
    country: "Canada",
    image: "https://images.unsplash.com/photo-1635695696701-fc9b49c991bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhhcHB5JTIwcmVsYXhlZCUyMHBlYWNlZnVsJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzcwMjI2MzUyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  },
  {
    quote: "I was nervous about traveling alone to India. The support team helped me feel confident and prepared.",
    name: "David",
    country: "United States",
    image: "https://images.unsplash.com/photo-1662302392561-b1deecd3579d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBtYW4lMjBoYXBweSUyMHBlYWNlZnVsJTIwd2VsbG5lc3MlMjBwb3J0cmFpdHxlbnwxfHx8fDE3NzAyMjYzNTN8MA&ixlib=rb-4.1.0&q=80&w=1080"
  }
];

export function TestimonialsMinimal() {
  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
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
            What guests say
          </h2>
          <p 
            className="text-base text-foreground/60"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-light)'
            }}
          >
            Real experiences from our community
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-background p-6 rounded-lg border border-border"
            >
              <div className="flex items-start gap-4 mb-4">
                <ImageWithFallback
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover"
                />
                <div className="flex-1">
                  <p 
                    className="text-base text-foreground/85 italic"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      lineHeight: '1.7'
                    }}
                  >
                    "{testimonial.quote}"
                  </p>
                </div>
              </div>
              <p 
                className="text-sm text-muted-foreground font-medium pl-20"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                — {testimonial.name}, {testimonial.country}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}