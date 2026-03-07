import { MapPin, Calendar, Users, Search, Sparkles, MessageCircle, Star, Globe, ChevronDown, Minimize2, X } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChatInterface } from './ChatInterface';
import React from 'react';
const LOCATIONS = [
  'All of India',
  'Kerala',
  'Goa',
  'Rishikesh, Uttarakhand',
  'Dehradun, Uttarakhand',
  'Palakkad, Kerala',
  'Gokarna, Karnataka',
  'Mumbai, Maharashtra'
];

const WELLNESS_GOALS = [
  'All Treatments',
  'Panchakarma & Detox',
  'Stress & Burnout Relief',
  'Chronic Pain Management',
  'Digestive Health',
  'Weight Management',
  'Sleep & Relaxation',
  'Yoga & Meditation'
];

const DURATIONS = [
  'Any Duration',
  '3-5 days',
  '7-10 days',
  '14-21 days',
  '21+ days'
];

const MONTHS = [
  'Anytime',
  'March 2026',
  'April 2026',
  'May 2026',
  'June 2026',
  'July 2026',
  'August 2026'
];

export function HeroLandingUnique() {
  const [location, setLocation] = useState('Kerala');
  const [wellnessGoal, setWellnessGoal] = useState('Stress & Burnout Relief');
  const [duration, setDuration] = useState('7-10 days');
  const [month, setMonth] = useState('April 2026');
  const [guests, setGuests] = useState('2 travellers');
  const [searchType, setSearchType] = useState('retreat');
  const [isSearching, setIsSearching] = useState(false);
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const goalDropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (goalDropdownRef.current && !goalDropdownRef.current.contains(event.target as Node)) {
        setShowGoalDropdown(false);
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    setIsSearching(true);
    setTimeout(() => {
      setIsSearching(false);
      // Scroll to results
      document.getElementById('wellness-centres')?.scrollIntoView({ behavior: 'smooth' });
    }, 1500);
  };

  return (
    <section className="relative min-h-[85vh] bg-gradient-to-b from-white via-primary/5 to-white">
      
      {/* Background Image - Full Visibility, No Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-fixed opacity-75"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1677889909894-181f75dc13a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkYSUyMHdlbGxuZXNzJTIwcmV0cmVhdCUyMGluZGlhJTIwdHJvcGljYWwlMjBwYWxtJTIwdHJlZXMlMjBoZWFsaW5nfGVufDF8fHx8MTc3MDI3MDE2MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral')`
        }}
      />
      
      {/* Subtle dark gradient overlay for text visibility */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/20"></div>
      
      {/* Decorative Light Elements */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-12">
        
        {/* Top Brand Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-8"
        >
          <h1 
            className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-tight mb-4"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-bold)',
              letterSpacing: '-0.02em'
            }}
          >
            <span className="bg-gradient-to-r from-amber-200 via-yellow-100 to-lime-200 bg-clip-text text-transparent">
              The Healing Groove
            </span>
          </h1>
          <p 
            className="text-xl sm:text-2xl text-white"
            style={{
              fontFamily: 'var(--font-sans)',
              fontWeight: 'var(--font-weight-normal)',
            }}
          >
            Book Authentic Ayurvedic Wellness Across India
          </p>
        </motion.div>

        {/* MAIN SEARCH CARD - MakeMyTrip Style */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-xl shadow-2xl border border-muted/50 p-8 max-w-6xl mx-auto"
        >
          
          {/* Search Type Tabs */}
          <div className="flex flex-wrap gap-2 sm:gap-4 mb-6 border-b border-muted pb-4">
            <button
              onClick={() => setSearchType('retreat')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                searchType === 'retreat'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-foreground/70 hover:bg-muted/50'
              }`}
            >
              Full Retreats
            </button>
            <button
              onClick={() => setSearchType('treatment')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                searchType === 'treatment'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-foreground/70 hover:bg-muted/50'
              }`}
            >
              Treatments Only
            </button>
            <button
              onClick={() => setSearchType('consultation')}
              className={`flex-1 sm:flex-none px-4 sm:px-6 py-2.5 rounded-full text-sm font-medium transition-all ${
                searchType === 'consultation'
                  ? 'bg-primary text-white shadow-md'
                  : 'text-foreground/70 hover:bg-muted/50'
              }`}
            >
              Consultation
            </button>
          </div>

          {/* Search Form */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-4">
            
            {/* Wellness Goal */}
            <div className="space-y-2 relative" ref={goalDropdownRef}>
              <label className="text-sm text-foreground/70 font-semibold">
                What brings you here?
              </label>
              <button
                onClick={() => {
                  setShowGoalDropdown(!showGoalDropdown);
                  setShowLocationDropdown(false);
                }}
                className="w-full px-4 py-3.5 border border-muted/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white text-left flex items-center justify-between hover:border-primary"
              >
                <span className="text-base truncate pr-2">{wellnessGoal}</span>
                <ChevronDown className="w-4 h-4 text-foreground/50 flex-shrink-0" />
              </button>
              {showGoalDropdown && (
                <div 
                  className="absolute left-0 right-0 top-[calc(100%+0.25rem)] bg-white border border-primary/50 rounded-xl shadow-xl z-[100] max-h-64 overflow-y-auto"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                >
                  {WELLNESS_GOALS.map(goal => (
                    <div
                      key={goal}
                      className={`px-4 py-3 cursor-pointer hover:bg-primary/5 transition-colors text-base ${
                        wellnessGoal === goal ? 'bg-primary/10 text-primary font-semibold' : ''
                      }`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setWellnessGoal(goal);
                        setShowGoalDropdown(false);
                      }}
                    >
                      {goal}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Location */}
            <div className="space-y-2 relative" ref={locationDropdownRef}>
              <label className="text-sm text-foreground/70 font-semibold">
                Destination
              </label>
              <button
                onClick={() => {
                  setShowLocationDropdown(!showLocationDropdown);
                  setShowGoalDropdown(false);
                }}
                className="w-full px-4 py-3.5 border border-muted/50 rounded-xl focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-left flex items-center justify-between hover:border-accent"
              >
                <span className="text-base truncate pr-2">{location}</span>
                <ChevronDown className="w-4 h-4 text-foreground/50 flex-shrink-0" />
              </button>
              {showLocationDropdown && (
                <div 
                  className="absolute left-0 right-0 top-[calc(100%+0.25rem)] bg-white border border-accent/50 rounded-xl shadow-xl z-[100] max-h-64 overflow-y-auto"
                  onMouseDown={(e) => e.stopPropagation()}
                  onClick={(e) => e.stopPropagation()}
                >
                  {LOCATIONS.map(loc => (
                    <div
                      key={loc}
                      className={`px-4 py-3 cursor-pointer hover:bg-accent/5 transition-colors text-base ${
                        location === loc ? 'bg-accent/10 text-accent font-semibold' : ''
                      }`}
                      onMouseDown={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                      }}
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setLocation(loc);
                        setShowLocationDropdown(false);
                      }}
                    >
                      {loc}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Duration */}
            <div className="space-y-2">
              <label className="text-sm text-foreground/70 font-semibold">
                Duration
              </label>
              <select
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="w-full px-4 py-3.5 border border-muted/50 rounded-xl focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-white cursor-pointer text-base hover:border-secondary"
              >
                {DURATIONS.map(dur => (
                  <option key={dur} value={dur}>{dur}</option>
                ))}
              </select>
            </div>

            {/* Start Month */}
            <div className="space-y-2">
              <label className="text-sm text-foreground/70 font-semibold">
                When
              </label>
              <select
                value={month}
                onChange={(e) => setMonth(e.target.value)}
                className="w-full px-4 py-3.5 border border-muted/50 rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white cursor-pointer text-base hover:border-primary"
              >
                {MONTHS.map(m => (
                  <option key={m} value={m}>{m}</option>
                ))}
              </select>
            </div>

            {/* Search Button */}
            <div className="space-y-2">
              <label className="text-sm text-transparent sm:block hidden">Search</label>
              <button
                className="w-full h-auto sm:h-[54px] py-3.5 sm:py-0 bg-primary hover:bg-primary/90 text-white rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-base disabled:opacity-50"
                onClick={handleSearch}
                disabled={isSearching}
              >
                {isSearching ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Searching...
                  </>
                ) : (
                  <>
                    <Search className="w-5 h-5" />
                    SEARCH
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Quick Filters - Pill Style */}
          <div className="flex flex-wrap items-center gap-2 pt-4 border-t border-muted">
            <span className="text-xs text-foreground/50 font-medium">POPULAR:</span>
            <button className="text-xs px-4 py-2 rounded-full bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium border border-transparent hover:border-primary/30">
              Panchakarma Kerala
            </button>
            <button className="text-xs px-4 py-2 rounded-full bg-muted/50 text-foreground hover:bg-accent/10 hover:text-accent transition-colors font-medium border border-transparent hover:border-accent/30">
              Yoga Rishikesh
            </button>
            <button className="text-xs px-4 py-2 rounded-full bg-muted/50 text-foreground hover:bg-secondary/10 hover:text-secondary-foreground transition-colors font-medium border border-transparent hover:border-secondary/30">
              Detox Retreats
            </button>
            <button className="text-xs px-4 py-2 rounded-full bg-muted/50 text-foreground hover:bg-primary/10 hover:text-primary transition-colors font-medium border border-transparent hover:border-primary/30">
              Stress Relief
            </button>
          </div>
        </motion.div>

        {/* Quick Stats - Clean Pills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-wrap justify-center gap-4 mt-8"
        >
          <div className="bg-white rounded-full px-6 py-3 shadow-md border border-primary/20 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">
              <span className="text-primary font-semibold">42+</span> Verified Centres
            </span>
          </div>
          
          <div className="bg-white rounded-full px-6 py-3 shadow-md border border-accent/20 flex items-center gap-2">
            <Globe className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-foreground">
              <span className="text-accent font-semibold">100%</span> English-Friendly
            </span>
          </div>
          
          <div className="bg-white rounded-full px-6 py-3 shadow-md border border-secondary/20 flex items-center gap-2">
            <Star className="w-4 h-4 text-secondary-foreground fill-secondary-foreground" />
            <span className="text-sm font-medium text-foreground">
              <span className="text-secondary-foreground font-semibold">4.9/5</span> from 2,400+ travelers
            </span>
          </div>
        </motion.div>

      </div>

     
    </section>
  );
}