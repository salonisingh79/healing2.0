import { motion } from 'motion/react';
import { Search, MapPin, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { useState } from 'react';
import React from 'react';
const journeys = [
  {
    id: 1,
    name: "Somatheeram Ayurveda Village",
    location: "Kerala, Coast",
    image: "https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxrZXJhbGElMjBiYWNrd2F0ZXJzJTIwcGVhY2VmdWwlMjBuYXR1cmV8ZW58MXx8fHwxNzcwMjIwOTAzfDA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: ["Stress & Burnout", "Digestive Health", "Detox"],
    duration: "14-21 days",
    priceRange: "$2,400 - $4,200"
  },
  {
    id: 2,
    name: "Vana Wellness Retreat",
    location: "Dehradun, Himalayan Foothills",
    image: "https://images.unsplash.com/photo-1766434773090-bfc6bdbf8b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbnMlMjBzdW5yaXNlJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcwMjIwOTA0fDA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: ["Mental Clarity", "Sleep Disorders", "Immune Support"],
    duration: "7-14 days",
    priceRange: "$3,200 - $5,800"
  },
  {
    id: 3,
    name: "Ananda in the Himalayas",
    location: "Rishikesh, Mountains",
    image: "https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMG9pbCUyMG1hc3NhZ2UlMjB0aGVyYXB5fGVufDF8fHx8MTc3MDIyMDkwMnww&ixlib=rb-4.1.0&q=80&w=1080",
    focus: ["Chronic Pain", "Anxiety Relief", "Weight Balance"],
    duration: "10-21 days",
    priceRange: "$2,800 - $6,500"
  },
  {
    id: 4,
    name: "Carnoustie Ayurveda",
    location: "Kerala, Backwaters",
    image: "https://images.unsplash.com/photo-1742483377931-68488341fb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMHdlbGxuZXNzJTIwcmV0cmVhdCUyMGluZGlhfGVufDF8fHx8MTc3MDIyMDkwNHww&ixlib=rb-4.1.0&q=80&w=1080",
    focus: ["Skin Conditions", "Hormonal Balance", "Rejuvenation"],
    duration: "14-28 days",
    priceRange: "$2,200 - $4,800"
  }
];

export function ExploreJourneys() {
  const [searchQuery, setSearchQuery] = useState('');
  
  return (
    <section id="explore" className="py-32 px-6 bg-background">
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
            Explore healing journeys
          </h2>
          <p 
            className="text-lg text-foreground/70 max-w-2xl mx-auto mb-12"
            style={{ 
              fontFamily: 'var(--font-sans)',
              lineHeight: '1.8'
            }}
          >
            Each place has its own spirit. Find the one that calls to you.
          </p>
          
          {/* Search UI */}
          <div className="max-w-3xl mx-auto space-y-5">
            <div className="relative">
              <Search className="absolute left-5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <input
                type="text"
                placeholder="What would you like to work on?"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-14 pr-6 py-4 rounded-full bg-card border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all duration-300"
                style={{ fontFamily: 'var(--font-sans)' }}
              />
            </div>
            
            <div className="flex flex-wrap gap-3 justify-center">
              <button className="px-6 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm">
                7-14 days
              </button>
              <button className="px-6 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm">
                2-3 weeks
              </button>
              <button className="px-6 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm">
                Kerala
              </button>
              <button className="px-6 py-2 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 text-sm">
                Mountains
              </button>
            </div>
          </div>
        </motion.div>
        
        {/* Journey Cards */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {journeys.map((journey, index) => (
            <motion.div
              key={journey.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
            >
              <Link to={`/centre/${journey.id}`} className="block group">
                <div className="bg-card rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-500 border border-border/50">
                  {/* Image */}
                  <div className="relative h-72 overflow-hidden">
                    <ImageWithFallback
                      src={journey.image}
                      alt={journey.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  
                  {/* Content */}
                  <div className="p-6 space-y-4">
                    <h3 
                      className="text-2xl text-foreground group-hover:text-primary transition-colors duration-300"
                      style={{ fontFamily: 'var(--font-serif)' }}
                    >
                      {journey.name}
                    </h3>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <MapPin className="w-4 h-4" />
                      <span>{journey.location}</span>
                    </div>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {journey.focus.map((tag) => (
                        <span 
                          key={tag}
                          className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* Duration & Price */}
                    <div className="flex items-center justify-between pt-3 border-t border-border">
                      <div className="flex items-center gap-2 text-sm text-foreground/70">
                        <Clock className="w-4 h-4" />
                        <span>{journey.duration}</span>
                      </div>
                      <span className="text-sm text-foreground/70">{journey.priceRange}</span>
                    </div>
                    
                    <button className="w-full mt-2 py-3 rounded-full border border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                      Learn more
                    </button>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}