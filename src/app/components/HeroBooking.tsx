import { motion } from 'motion/react';
import { Search, MapPin, Calendar, DollarSign } from 'lucide-react';
import { useState } from 'react';
import React from 'react';
export function HeroBooking() {
  const [wellnessGoal, setWellnessGoal] = useState('');
  const [duration, setDuration] = useState('');
  const [location, setLocation] = useState('');
  const [budget, setBudget] = useState('');
  
  return (
    <section className="relative min-h-[70vh] flex items-center justify-center px-6 py-20">
      {/* Background Image - Peaceful meditation woman */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1620919203384-7a23fdeb97fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWFjZWZ1bCUyMG1lZGl0YXRpb24lMjB3b21hbiUyMG5hdHVyZSUyMHdlbGxuZXNzJTIwaGVhbGluZ3xlbnwxfHx8fDE3NzAyMjYzMTB8MA&ixlib=rb-4.1.0&q=80&w=1080')`
        }}
      />
      
      <div className="relative z-10 w-full max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h1 
            className="text-3xl md:text-4xl mb-4 text-foreground"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              lineHeight: '1.1',
              letterSpacing: '-0.02em'
            }}
          >
            Authentic wellness in India
          </h1>
          <p 
            className="text-lg md:text-xl text-foreground/70 mb-8 max-w-2xl"
            style={{ 
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-light)',
              lineHeight: '1.6'
            }}
          >
            Discover verified Ayurvedic retreats, yoga ashrams, and healing centres across India
          </p>
        </motion.div>
        
        {/* Search Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="bg-card rounded-xl shadow-lg p-6 md:p-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            {/* Wellness Goal */}
            <div className="space-y-2">
              <label 
                className="text-sm font-medium text-foreground/80 block"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Wellness goal
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="e.g., stress, gut health"
                  value={wellnessGoal}
                  onChange={(e) => setWellnessGoal(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-input-background border border-border focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
            </div>
            
            {/* Duration */}
            <div className="space-y-2">
              <label 
                className="text-sm font-medium text-foreground/80 block"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Duration
              </label>
              <div className="relative">
                <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select 
                  value={duration}
                  onChange={(e) => setDuration(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-input-background border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="">Any duration</option>
                  <option value="7-14">7-14 days</option>
                  <option value="14-21">14-21 days</option>
                  <option value="21-28">21-28 days</option>
                  <option value="28+">28+ days</option>
                </select>
              </div>
            </div>
            
            {/* Location */}
            <div className="space-y-2">
              <label 
                className="text-sm font-medium text-foreground/80 block"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Location in India
              </label>
              <div className="relative">
                <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select 
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-input-background border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="">Any location</option>
                  <option value="kerala">Kerala</option>
                  <option value="goa">Goa</option>
                  <option value="himalayas">Himalayas</option>
                  <option value="karnataka">Karnataka</option>
                  <option value="rajasthan">Rajasthan</option>
                </select>
              </div>
            </div>
            
            {/* Budget Range */}
            <div className="space-y-2">
              <label 
                className="text-sm font-medium text-foreground/80 block"
                style={{ fontFamily: 'var(--font-sans)' }}
              >
                Budget range
              </label>
              <div className="relative">
                <DollarSign className="absolute left-4 top-1/2 transform -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <select 
                  value={budget}
                  onChange={(e) => setBudget(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 rounded-lg bg-input-background border border-border appearance-none cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all text-sm"
                  style={{ fontFamily: 'var(--font-sans)' }}
                >
                  <option value="">Any budget</option>
                  <option value="2000-3500">$2,000 - $3,500</option>
                  <option value="3500-5000">$3,500 - $5,000</option>
                  <option value="5000-7500">$5,000 - $7,500</option>
                  <option value="7500+">$7,500+</option>
                </select>
              </div>
            </div>
          </div>
          
          <button className="w-full py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition-opacity duration-300 font-medium">
            Find wellness centres
          </button>
        </motion.div>
      </div>
    </section>
  );
}