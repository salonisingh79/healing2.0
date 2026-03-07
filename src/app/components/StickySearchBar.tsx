import { Search, MapPin, Calendar, ChevronDown } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
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

export function StickySearchBar() {
  const [isVisible, setIsVisible] = useState(false);
  const [location, setLocation] = useState('Kerala');
  const [wellnessGoal, setWellnessGoal] = useState('Stress & Burnout Relief');
  const [duration, setDuration] = useState('7-10 days');
  const [searchType, setSearchType] = useState<'retreat' | 'treatment' | 'consultation'>('retreat');
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const [showGoalDropdown, setShowGoalDropdown] = useState(false);
  const [showDurationDropdown, setShowDurationDropdown] = useState(false);

  const goalDropdownRef = useRef<HTMLDivElement>(null);
  const locationDropdownRef = useRef<HTMLDivElement>(null);
  const durationDropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar when scrolled down more than 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (goalDropdownRef.current && !goalDropdownRef.current.contains(event.target as Node)) {
        setShowGoalDropdown(false);
      }
      if (locationDropdownRef.current && !locationDropdownRef.current.contains(event.target as Node)) {
        setShowLocationDropdown(false);
      }
      if (durationDropdownRef.current && !durationDropdownRef.current.contains(event.target as Node)) {
        setShowDurationDropdown(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleSearch = () => {
    document.getElementById('wellness-centres')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ duration: 0.3, ease: 'easeOut' }}
          className="fixed top-16 left-0 right-0 z-40 bg-primary/95 backdrop-blur-lg border-b border-primary shadow-lg"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2 sm:gap-3">
              {/* Search Type Toggle - Compact Pills */}
              <div className="flex items-center gap-1.5 bg-muted/30 p-1 rounded-lg border border-muted/50 w-full sm:w-auto">
                <button
                  onClick={() => setSearchType('retreat')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                    searchType === 'retreat'
                      ? 'bg-white text-primary shadow-sm border border-primary/20'
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: searchType === 'retreat' ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)'
                  }}
                >
                  Full Retreats
                </button>
                <button
                  onClick={() => setSearchType('treatment')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                    searchType === 'treatment'
                      ? 'bg-white text-primary shadow-sm border border-primary/20'
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: searchType === 'treatment' ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)'
                  }}
                >
                  Treatments Only
                </button>
                <button
                  onClick={() => setSearchType('consultation')}
                  className={`flex-1 sm:flex-none px-3 py-1.5 rounded-md text-xs font-semibold transition-all duration-200 whitespace-nowrap ${
                    searchType === 'consultation'
                      ? 'bg-white text-primary shadow-sm border border-primary/20'
                      : 'text-foreground/60 hover:text-foreground/80'
                  }`}
                  style={{
                    fontFamily: 'var(--font-sans)',
                    fontWeight: searchType === 'consultation' ? 'var(--font-weight-semibold)' : 'var(--font-weight-medium)'
                  }}
                >
                  Consultation
                </button>
              </div>

              {/* What brings you - Compact */}
              <div className="relative flex-1" ref={goalDropdownRef}>
                <button
                  onClick={() => {
                    setShowGoalDropdown(!showGoalDropdown);
                    setShowLocationDropdown(false);
                    setShowDurationDropdown(false);
                  }}
                  className="w-full px-4 py-2.5 border border-muted/50 rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all bg-white text-left flex items-center justify-between hover:border-primary text-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Search className="w-4 h-4 text-primary flex-shrink-0" />
                    <span className="text-foreground/90 font-medium truncate">{wellnessGoal}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-foreground/60 flex-shrink-0 ml-2" />
                </button>
                {showGoalDropdown && (
                  <div className="absolute left-0 right-0 top-[calc(100%+0.25rem)] bg-white border border-primary/50 rounded-lg shadow-xl z-[100] max-h-64 overflow-y-auto">
                    {WELLNESS_GOALS.map(goal => (
                      <div
                        key={goal}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setWellnessGoal(goal);
                          setShowGoalDropdown(false);
                        }}
                        className="px-4 py-2.5 hover:bg-primary/10 cursor-pointer transition-colors text-sm border-b border-border/30 last:border-0"
                      >
                        {goal}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Location - Compact */}
              <div className="relative flex-1" ref={locationDropdownRef}>
                <button
                  onClick={() => {
                    setShowLocationDropdown(!showLocationDropdown);
                    setShowGoalDropdown(false);
                    setShowDurationDropdown(false);
                  }}
                  className="w-full px-4 py-2.5 border border-muted/50 rounded-lg focus:outline-none focus:border-accent focus:ring-2 focus:ring-accent/20 transition-all bg-white text-left flex items-center justify-between hover:border-accent text-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <MapPin className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-foreground/90 font-medium truncate">{location}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-foreground/60 flex-shrink-0 ml-2" />
                </button>
                {showLocationDropdown && (
                  <div className="absolute left-0 right-0 top-[calc(100%+0.25rem)] bg-white border border-accent/50 rounded-lg shadow-xl z-[100] max-h-64 overflow-y-auto">
                    {LOCATIONS.map(loc => (
                      <div
                        key={loc}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setLocation(loc);
                          setShowLocationDropdown(false);
                        }}
                        className="px-4 py-2.5 hover:bg-accent/10 cursor-pointer transition-colors text-sm border-b border-border/30 last:border-0"
                      >
                        {loc}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Duration - Compact */}
              <div className="relative flex-1" ref={durationDropdownRef}>
                <button
                  onClick={() => {
                    setShowDurationDropdown(!showDurationDropdown);
                    setShowGoalDropdown(false);
                    setShowLocationDropdown(false);
                  }}
                  className="w-full px-4 py-2.5 border border-muted/50 rounded-lg focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 transition-all bg-white text-left flex items-center justify-between hover:border-secondary text-sm"
                >
                  <div className="flex items-center gap-2 min-w-0">
                    <Calendar className="w-4 h-4 text-secondary flex-shrink-0" />
                    <span className="text-foreground/90 font-medium truncate">{duration}</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-foreground/60 flex-shrink-0 ml-2" />
                </button>
                {showDurationDropdown && (
                  <div className="absolute left-0 right-0 top-[calc(100%+0.25rem)] bg-white border border-secondary/50 rounded-lg shadow-xl z-[100] max-h-64 overflow-y-auto">
                    {DURATIONS.map(dur => (
                      <div
                        key={dur}
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          setDuration(dur);
                          setShowDurationDropdown(false);
                        }}
                        className="px-4 py-2.5 hover:bg-secondary/10 cursor-pointer transition-colors text-sm border-b border-border/30 last:border-0"
                      >
                        {dur}
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Search Button - Compact */}
              <button
                onClick={handleSearch}
                className="px-6 py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 shadow-md hover:shadow-lg text-sm whitespace-nowrap w-full sm:w-auto"
                style={{
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--font-weight-semibold)'
                }}
              >
                <Search className="w-4 h-4" />
                Search
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}