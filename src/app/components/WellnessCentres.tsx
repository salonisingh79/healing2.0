import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { MapPin, Clock, CheckCircle2, Heart, Eye, TrendingUp, Calendar } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { LoginModal } from './LoginModal';
import React from 'react';
const centres = [
  {
    id: 1,
    name: "Kairali Ayurvedic Health Resort",
    location: "Palakkad, Kerala",
    image: "https://images.unsplash.com/photo-1660724912226-faae4755c58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3b21hbiUyMHdlbGxuZXNzJTIwc3BhJTIwdHJlYXRtZW50JTIwcGVhY2VmdWwlMjBrZXJhbGF8ZW58MXx8fHwxNzcwMjI2MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: "Traditional Panchakarma & Ayurveda",
    duration: "14-21 days",
    priceUSD: "from $3,200",
    priceINR: "₹2,65,000",
    rating: 4.8,
    verified: true,
    availability: "Available this month",
    recentViews: 24,
    trending: true,
    lastUpdated: "Updated 3 days ago",
    viewedEarlier: false
  },
  {
    id: 2,
    name: "Parmarth Niketan Ashram",
    location: "Rishikesh, Uttarakhand",
    image: "https://images.unsplash.com/photo-1758797315311-07c928608c04?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaW1hbGF5YW4lMjBtb3VudGFpbiUyMHdlbGxuZXNzJTIwcmV0cmVhdCUyMHBlYWNlZnVsfGVufDF8fHx8MTc3MDIyNjMyNnww&ixlib=rb-4.1.0&q=80&w=1080",
    focus: "Yoga, Meditation & River Rafting",
    duration: "7-14 days",
    priceUSD: "from $1,200",
    priceINR: "₹99,500",
    rating: 4.9,
    verified: true,
    availability: "Limited availability",
    recentViews: 41,
    trending: false,
    lastUpdated: "Updated 1 day ago",
    viewedEarlier: true
  },
  {
    id: 3,
    name: "Kalari Kovilakom",
    location: "Palakkad, Kerala",
    image: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxheXVydmVkaWMlMjBzcGElMjBtYXNzYWdlJTIwd2VsbG5lc3MlMjBhdXRoZW50aWN8ZW58MXx8fHwxNzcwMjI2MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: "Authentic Panchakarma Healing",
    duration: "14-28 days",
    priceUSD: "from $4,800",
    priceINR: "₹3,98,000",
    rating: 4.7,
    verified: true,
    availability: "Next opening: March 2026",
    recentViews: 18,
    trending: true,
    lastUpdated: "Updated 5 days ago",
    viewedEarlier: false
  },
  {
    id: 4,
    name: "Ashiyana Yoga Retreat",
    location: "Goa",
    image: "https://images.unsplash.com/photo-1695411560260-24bca88a2399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnb2ElMjBiZWFjaCUyMHlvZ2ElMjByZXRyZWF0JTIwcGVhY2VmdWwlMjBzdW5zZXR8ZW58MXx8fHwxNzcwMjI2MzI1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: "Yoga, Meditation & Ayurveda",
    duration: "7-14 days",
    priceUSD: "from $1,800",
    priceINR: "₹1,49,000",
    rating: 4.6,
    verified: true,
    availability: "Popular this season",
    recentViews: 33,
    trending: false,
    lastUpdated: "Updated 2 days ago",
    viewedEarlier: true
  },
  {
    id: 5,
    name: "Vana Wellness Retreat",
    location: "Dehradun, Uttarakhand",
    image: "https://images.unsplash.com/photo-1725477980482-b6c5c6a98997?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuYXR1cmUlMjB3ZWxsbmVzcyUyMGRldG94JTIwcmV0cmVhdCUyMHBlYWNlZnVsJTIwaW5kaWF8ZW58MXx8fHwxNzcwMjI2MzI2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: "Holistic Wellness & Detox",
    duration: "7-21 days",
    priceUSD: "from $4,500",
    priceINR: "₹3,73,000",
    rating: 4.8,
    verified: true,
    availability: "Available this month",
    recentViews: 29,
    trending: true,
    lastUpdated: "Updated 4 days ago",
    viewedEarlier: false
  },
  {
    id: 6,
    name: "SwaSwara Wellness Center",
    location: "Gokarna, Karnataka",
    image: "https://images.unsplash.com/photo-1759951611066-d208d302e886?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2FzdGFsJTIwYmVhY2glMjB3ZWxsbmVzcyUyMG1lZGl0YXRpb24lMjBwZWFjZWZ1bHxlbnwxfHx8fDE3NzAyMjYzMjd8MA&ixlib=rb-4.1.0&q=80&w=1080",
    focus: "Coastal Healing & Rejuvenation",
    duration: "7-14 days",
    priceUSD: "from $3,200",
    priceINR: "₹2,65,000",
    rating: 4.7,
    verified: true,
    availability: "Available this month",
    recentViews: 22,
    trending: false,
    lastUpdated: "Updated 6 days ago",
    viewedEarlier: false
  },
  {
    id: 7,
    name: "Atmantan Wellness Resort",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1731597076108-f3bbe268162f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Medical Wellness & Detox",
    duration: "7-14 days",
    priceUSD: "from $3,800",
    priceINR: "₹3,15,000",
    rating: 4.8,
    verified: true,
    availability: "Available this month",
    recentViews: 37,
    trending: true,
    lastUpdated: "Updated 2 days ago",
    viewedEarlier: false
  },
  {
    id: 8,
    name: "Somatheeram Ayurveda Village",
    location: "Kovalam, Kerala",
    image: "https://images.unsplash.com/photo-1764661441867-473a59a765bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Traditional Ayurveda & Beach Yoga",
    duration: "14-21 days",
    priceUSD: "from $2,900",
    priceINR: "₹2,40,000",
    rating: 4.7,
    verified: true,
    availability: "Limited availability",
    recentViews: 28,
    trending: false,
    lastUpdated: "Updated 4 days ago",
    viewedEarlier: false
  },
  {
    id: 9,
    name: "Ananda in the Himalayas",
    location: "Rishikesh, Uttarakhand",
    image: "https://images.unsplash.com/photo-1724405847524-2b5a514ddbba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Luxury Spa & Ayurveda",
    duration: "7-14 days",
    priceUSD: "from $6,500",
    priceINR: "₹5,38,000",
    rating: 4.9,
    verified: true,
    availability: "Next opening: April 2026",
    recentViews: 52,
    trending: true,
    lastUpdated: "Updated 1 day ago",
    viewedEarlier: true
  },
  {
    id: 10,
    name: "Ayurveda Yoga Villa",
    location: "Mysore, Karnataka",
    image: "https://images.unsplash.com/photo-1753898465083-a6830cd77c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Ashtanga Yoga & Ayurveda",
    duration: "7-21 days",
    priceUSD: "from $1,500",
    priceINR: "₹1,24,000",
    rating: 4.6,
    verified: true,
    availability: "Available this month",
    recentViews: 19,
    trending: false,
    lastUpdated: "Updated 5 days ago",
    viewedEarlier: false
  },
  {
    id: 11,
    name: "Shreyas Yoga Retreat",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1764831071387-18337bd98660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Silent Retreat & Meditation",
    duration: "7-14 days",
    priceUSD: "from $2,400",
    priceINR: "₹1,99,000",
    rating: 4.8,
    verified: true,
    availability: "Popular this season",
    recentViews: 31,
    trending: false,
    lastUpdated: "Updated 3 days ago",
    viewedEarlier: true
  },
  {
    id: 12,
    name: "Carnoustie Ayurveda Resort",
    location: "Mararikulam, Kerala",
    image: "https://images.unsplash.com/photo-1715242563833-946f4b811399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Ayurvedic Healing & Beachfront",
    duration: "7-21 days",
    priceUSD: "from $2,100",
    priceINR: "₹1,74,000",
    rating: 4.7,
    verified: true,
    availability: "Available this month",
    recentViews: 26,
    trending: false,
    lastUpdated: "Updated 6 days ago",
    viewedEarlier: false
  },
  {
    id: 13,
    name: "Ayurvedagram Heritage Resort",
    location: "Bangalore, Karnataka",
    image: "https://images.unsplash.com/photo-1769541158118-363e11d9b246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Panchakarma & Wellness",
    duration: "14-28 days",
    priceUSD: "from $2,600",
    priceINR: "₹2,15,000",
    rating: 4.6,
    verified: true,
    availability: "Limited availability",
    recentViews: 21,
    trending: false,
    lastUpdated: "Updated 7 days ago",
    viewedEarlier: false
  },
  {
    id: 14,
    name: "Beach & Lake Ayurveda Resort",
    location: "Poovar, Kerala",
    image: "https://images.unsplash.com/photo-1720504611632-a234f20c2ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Ayurveda & Nature Therapy",
    duration: "7-14 days",
    priceUSD: "from $1,900",
    priceINR: "₹1,57,000",
    rating: 4.5,
    verified: true,
    availability: "Available this month",
    recentViews: 15,
    trending: false,
    lastUpdated: "Updated 8 days ago",
    viewedEarlier: false
  },
  {
    id: 15,
    name: "Dharana at Shillim",
    location: "Pune, Maharashtra",
    image: "https://images.unsplash.com/photo-1705083649602-03c5fbae2e89?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
    focus: "Holistic Wellness & Mindfulness",
    duration: "7-21 days",
    priceUSD: "from $4,200",
    priceINR: "₹3,48,000",
    rating: 4.9,
    verified: true,
    availability: "Popular this season",
    recentViews: 44,
    trending: true,
    lastUpdated: "Updated 2 days ago",
    viewedEarlier: false
  }
];

export function WellnessCentres() {
  const [savedCentres, setSavedCentres] = useState<number[]>([]);
  const { isLoggedIn } = useAuth();
  const [loginModalOpen, setLoginModalOpen] = useState(false);

  const toggleSave = (id: number) => {
    if (!isLoggedIn) {
      setLoginModalOpen(true);
      return;
    }
    setSavedCentres(prev => 
      prev.includes(id) ? prev.filter(cId => cId !== id) : [...prev, id]
    );
  };

  return (
    <section id="wellness-centres" className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-10"
        >
          <div className="flex items-center justify-between mb-6">
            <div>
              <h2 
                className="text-4xl sm:text-5xl text-foreground mb-3"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--font-weight-bold)',
                  letterSpacing: '-0.02em'
                }}
              >
                Featured Wellness Centres
              </h2>
              <p 
                className="text-lg text-foreground/60"
                style={{ 
                  fontFamily: 'var(--font-sans)',
                  fontWeight: 'var(--font-weight-normal)'
                }}
              >
                Verified retreats across India
              </p>
            </div>
            <Link 
              to="/wellness-centres"
              className="text-base text-primary transition-colors hidden sm:block"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--font-weight-semibold)'
              }}
            >
              VIEW ALL →
            </Link>
          </div>

          {/* Result Count - Live Platform Element #2 */}
          <div className="flex items-center gap-3 mb-2">
            <p 
              className="text-sm text-foreground/70"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--font-weight-medium)'
              }}
            >
              {centres.length} wellness centres match your preferences
            </p>
            <span className="text-xs text-foreground/40">•</span>
            <p 
              className="text-xs text-foreground/40"
              style={{ 
                fontFamily: 'var(--font-sans)',
                fontWeight: 'var(--font-weight-normal)'
              }}
            >
              Availability refreshed weekly
            </p>
          </div>
        </motion.div>
        
        {/* Grid of Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {centres.slice(0, 6).map((centre, index) => (
            <motion.div
              key={centre.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group"
            >
              <Link to={`/centre/${centre.id}`} className="block h-full">
                <div className="bg-white rounded-lg overflow-hidden border border-muted hover:border-primary/50 hover:shadow-2xl transition-all duration-300 cursor-pointer h-full flex flex-col hover:-translate-y-1.5">
                  {/* Image */}
                  <div className="relative h-36 overflow-hidden">
                    <ImageWithFallback
                      src={centre.image}
                      alt={centre.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    {/* Gradient overlay for better text visibility */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {centre.verified && (
                      <div className="absolute top-2 right-2 bg-gradient-to-r from-primary to-accent text-white rounded-full px-2.5 py-1 flex items-center gap-1 shadow-lg text-xs font-bold">
                        <CheckCircle2 className="w-3 h-3" />
                        VERIFIED
                      </div>
                    )}
                    <div className="absolute top-2 left-2 bg-white/95 backdrop-blur-sm rounded-full px-2.5 py-1 shadow-lg">
                      <div className="flex items-center gap-1">
                        <span className="text-xs font-bold text-secondary">★</span>
                        <span className="text-xs font-semibold text-foreground">{centre.rating}</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-3 flex-1 flex flex-col">
                    {/* Fixed height container for optional badges to ensure alignment */}
                    <div className="min-h-[24px] mb-1.5">
                      {/* Viewed Earlier Badge - Live Platform Element #5 */}
                      {centre.viewedEarlier && (
                        <span 
                          className="text-xs text-foreground/50 bg-muted/50 px-2 py-0.5 rounded inline-block"
                          style={{ 
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 'var(--font-weight-medium)'
                          }}
                        >
                          You viewed this earlier
                        </span>
                      )}

                      {/* Trending Badge */}
                      {centre.trending && !centre.viewedEarlier && (
                        <div className="flex items-center gap-1">
                          <TrendingUp className="w-3.5 h-3.5 text-accent" />
                          <span className="text-xs font-bold text-accent uppercase">Trending Now</span>
                        </div>
                      )}
                    </div>
                    
                    <h3 
                      className="text-base font-bold mb-1 text-foreground group-hover:text-primary transition-colors line-clamp-2"
                      style={{ 
                        fontFamily: 'var(--font-sans)',
                        fontWeight: 'var(--font-weight-bold)',
                        minHeight: '2.5rem'
                      }}
                    >
                      {centre.name}
                    </h3>
                    
                    <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-1.5">
                      <MapPin className="w-3 h-3 flex-shrink-0" />
                      <span className="line-clamp-1">{centre.location}</span>
                    </div>
                    
                    <p className="text-xs text-foreground/70 mb-2 line-clamp-2" style={{ minHeight: '2rem' }}>
                      {centre.focus}
                    </p>
                    
                    {/* Availability Badge */}
                    <div className="mb-2" style={{ minHeight: '24px' }}>
                      <div className={`inline-block px-2 py-0.5 rounded-full text-xs font-bold ${
                        centre.availability.includes('Available') 
                          ? 'bg-green-100 text-green-700'
                          : centre.availability.includes('Limited')
                          ? 'bg-orange-100 text-orange-700'
                          : 'bg-blue-100 text-blue-700'
                      }`}>
                        {centre.availability}
                      </div>
                    </div>
                    
                    {/* Social Proof */}
                    <div className="flex items-center gap-1.5 text-xs text-foreground/60 mb-2">
                      <Eye className="w-3 h-3 flex-shrink-0" />
                      <span>{centre.recentViews} people explored this week</span>
                    </div>
                    
                    {/* Pricing & Duration */}
                    <div className="mt-auto space-y-1.5 pt-2 border-t border-border">
                      <div className="flex items-baseline justify-between">
                        <div>
                          <div className="text-xs text-foreground/50 uppercase tracking-wide font-semibold mb-0.5">
                            Starting from
                          </div>
                          <div className="text-lg font-bold text-primary">
                            {centre.priceUSD}
                          </div>
                          <div className="text-xs text-foreground/60">
                            {centre.priceINR}
                          </div>
                        </div>
                        <button
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleSave(centre.id);
                          }}
                          className="p-1.5 rounded-full hover:bg-primary/10 transition-colors"
                        >
                          <Heart 
                            className={`w-4 h-4 transition-all ${
                              savedCentres.includes(centre.id) 
                                ? 'fill-primary text-primary' 
                                : 'text-foreground/40 hover:text-primary'
                            }`} 
                          />
                        </button>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-xs text-foreground/60">
                          <Clock className="w-3 h-3" />
                          <span>{centre.duration} programs</span>
                        </div>

                        {/* Last Updated - Live Platform Element #1 */}
                        <p 
                          className="text-xs text-foreground/30"
                          style={{ 
                            fontFamily: 'var(--font-sans)',
                            fontWeight: 'var(--font-weight-normal)'
                          }}
                        >
                          {centre.lastUpdated}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Load More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-10 text-center"
        >
          <Link 
            to="/search"
            className="inline-block px-8 py-3 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 font-medium"
          >
            View all centres
          </Link>
        </motion.div>
      </div>
      <LoginModal isOpen={loginModalOpen} onClose={() => setLoginModalOpen(false)} />
    </section>
  );
}