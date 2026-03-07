import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import React from 'react';
const stories = [
  {
    name: "Sarah",
    country: "United Kingdom",
    image: "https://images.unsplash.com/photo-1758797316117-8d133af25f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3b21hbiUyMG1lZGl0YXRpb24lMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzAyMjA5MDV8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "I came exhausted. I left knowing how to listen to my body again. The pace was slow, intentional. For the first time in years, I felt held.",
    concern: "Chronic stress & insomnia"
  },
  {
    name: "Michael",
    country: "Australia",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMG9pbCUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3MDIyMDkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "It wasn't what I expected — it was better. Less about 'fixing' me, more about understanding who I am. The Vaidya saw things no doctor ever had.",
    concern: "Digestive issues & inflammation"
  },
  {
    name: "Emma",
    country: "United States",
    image: "https://images.unsplash.com/photo-1677599082447-6549af4c5454?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBoZXJicyUyMHNwaWNlcyUyMG1vcnRhcnxlbnwxfHx8fDE3NzAyMjA5MDN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    quote: "I was skeptical at first. But something shifted. Not overnight — gently, like the way seasons change. I'm still integrating what I learned.",
    concern: "Anxiety & burnout"
  }
];

export function Stories() {
  return (
    <section id="stories" className="py-32 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center mb-20"
        >
          <h2 
            className="text-5xl md:text-6xl mb-6 text-foreground"
            style={{ 
              fontFamily: 'var(--font-serif)',
              lineHeight: '1.3'
            }}
          >
            Stories from those who went
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Real experiences. Not polished. Just honest.
          </p>
        </motion.div>
        
        <div className="space-y-16">
          {stories.map((story, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              className="grid md:grid-cols-5 gap-8 items-center"
            >
              {/* Image */}
              <div className={`md:col-span-2 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                <div className="relative rounded-lg overflow-hidden shadow-lg">
                  <ImageWithFallback
                    src={story.image}
                    alt={`${story.name} from ${story.country}`}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
                </div>
              </div>
              
              {/* Content */}
              <div className={`md:col-span-3 ${index % 2 === 1 ? 'md:order-1' : ''}`}>
                <div className="space-y-5">
                  <p 
                    className="text-xl md:text-2xl text-foreground/90 leading-relaxed"
                    style={{ 
                      fontFamily: 'var(--font-sans)',
                      lineHeight: '1.7'
                    }}
                  >
                    {story.quote}
                  </p>
                  
                  <div className="pt-4 border-t border-border">
                    <p 
                      className="text-base text-foreground"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {story.name}, {story.country}
                    </p>
                    <p 
                      className="text-sm text-muted-foreground mt-1"
                      style={{ fontFamily: 'var(--font-sans)' }}
                    >
                      {story.concern}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-center mt-20"
        >
          <p 
            className="text-base text-foreground/60 italic mb-8"
            style={{ fontFamily: 'var(--font-sans)' }}
          >
            Your story could be next.
          </p>
          <button className="px-8 py-4 rounded-full bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300">
            Begin your journey
          </button>
        </motion.div>
      </div>
    </section>
  );
}
