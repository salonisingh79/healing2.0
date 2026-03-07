import { useState } from 'react';
import { Link } from 'react-router-dom';
import { SimplePageLayout } from '../components/SimplePageLayout';
import { Search, SlidersHorizontal, MapPin, Star, Heart, ChevronDown, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { LoginModal } from '../components/LoginModal';
import React from 'react';
const MOCK_CENTRES = [
  {
    id: 1,
    name: 'Kairali Ayurvedic Healing Village',
    location: 'Palakkad, Kerala',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.9,
    reviews: 342,
    price: 95000,
    duration: '7-14 days',
    speciality: 'Panchakarma & Detox',
    verified: true,
    availability: 'Available Mar 15-22',
    saved: false
  },
  {
    id: 2,
    name: 'Somatheeram Ayurveda Resort',
    location: 'Kovalam, Kerala',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.8,
    reviews: 567,
    price: 120000,
    duration: '7-21 days',
    speciality: 'Stress Relief',
    verified: true,
    availability: 'Available Apr 1-8',
    saved: false
  },
  {
    id: 3,
    name: 'Ananda in the Himalayas',
    location: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.9,
    reviews: 890,
    price: 280000,
    duration: '7-14 days',
    speciality: 'Luxury Wellness',
    verified: true,
    availability: 'Available Mar 20-27',
    saved: false
  },
  {
    id: 4,
    name: 'Kalari Kovilakom Palace',
    location: 'Palakkad, Kerala',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.9,
    reviews: 234,
    price: 175000,
    duration: '14-28 days',
    speciality: 'Traditional Panchakarma',
    verified: true,
    availability: 'Available Apr 5-12',
    saved: false
  },
  {
    id: 5,
    name: 'Shreyas Yoga Retreat',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.8,
    reviews: 445,
    price: 145000,
    duration: '7-14 days',
    speciality: 'Yoga & Meditation',
    verified: true,
    availability: 'Available Mar 18-25',
    saved: false
  },
  {
    id: 6,
    name: 'SwaSwara Wellness Retreat',
    location: 'Gokarna, Karnataka',
    image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.7,
    reviews: 321,
    price: 110000,
    duration: '7-14 days',
    speciality: 'Holistic Healing',
    verified: true,
    availability: 'Available Apr 10-17',
    saved: false
  },
  {
    id: 7,
    name: 'Atmantan Wellness Resort',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1731597076108-f3bbe268162f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.8,
    reviews: 412,
    price: 185000,
    duration: '7-14 days',
    speciality: 'Medical Wellness',
    verified: true,
    availability: 'Available Mar 10-17',
    saved: false
  },
  {
    id: 8,
    name: 'Vana Wellness Retreat',
    location: 'Dehradun, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1764661441867-473a59a765bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.9,
    reviews: 678,
    price: 295000,
    duration: '7-21 days',
    speciality: 'Holistic Detox',
    verified: true,
    availability: 'Limited Mar 25-30',
    saved: false
  },
  {
    id: 9,
    name: 'Parmarth Niketan Ashram',
    location: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1724405847524-2b5a514ddbba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.7,
    reviews: 523,
    price: 65000,
    duration: '7-14 days',
    speciality: 'Yoga & Meditation',
    verified: true,
    availability: 'Available Apr 2-9',
    saved: false
  },
  {
    id: 10,
    name: 'Ashiyana Yoga Retreat',
    location: 'Goa',
    image: 'https://images.unsplash.com/photo-1753898465083-a6830cd77c88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.6,
    reviews: 289,
    price: 98000,
    duration: '7-14 days',
    speciality: 'Beach Yoga',
    verified: true,
    availability: 'Available Mar 12-19',
    saved: false
  },
  {
    id: 11,
    name: 'Ayurveda Yoga Villa',
    location: 'Mysore, Karnataka',
    image: 'https://images.unsplash.com/photo-1764831071387-18337bd98660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.6,
    reviews: 198,
    price: 78000,
    duration: '7-21 days',
    speciality: 'Ashtanga Yoga',
    verified: true,
    availability: 'Available Apr 8-15',
    saved: false
  },
  {
    id: 12,
    name: 'Carnoustie Ayurveda Resort',
    location: 'Mararikulam, Kerala',
    image: 'https://images.unsplash.com/photo-1715242563833-946f4b811399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.7,
    reviews: 356,
    price: 125000,
    duration: '7-21 days',
    speciality: 'Beachfront Ayurveda',
    verified: true,
    availability: 'Available Mar 22-29',
    saved: false
  },
  {
    id: 13,
    name: 'Ayurvedagram Heritage',
    location: 'Bangalore, Karnataka',
    image: 'https://images.unsplash.com/photo-1769541158118-363e11d9b246?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.6,
    reviews: 267,
    price: 142000,
    duration: '14-28 days',
    speciality: 'Panchakarma',
    verified: true,
    availability: 'Limited Apr 3-10',
    saved: false
  },
  {
    id: 14,
    name: 'Beach & Lake Ayurveda',
    location: 'Poovar, Kerala',
    image: 'https://images.unsplash.com/photo-1720504611632-a234f20c2ff9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.5,
    reviews: 189,
    price: 88000,
    duration: '7-14 days',
    speciality: 'Nature Therapy',
    verified: true,
    availability: 'Available Mar 28-Apr 4',
    saved: false
  },
  {
    id: 15,
    name: 'Dharana at Shillim',
    location: 'Pune, Maharashtra',
    image: 'https://images.unsplash.com/photo-1767653431683-9d8346bc18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.9,
    reviews: 734,
    price: 265000,
    duration: '7-21 days',
    speciality: 'Mindfulness & Wellness',
    verified: true,
    availability: 'Available Apr 12-19',
    saved: false
  },
  {
    id: 16,
    name: 'Raga Svara Yoga Retreat',
    location: 'Mysore, Karnataka',
    image: 'https://images.unsplash.com/photo-1767008458853-8d626dc5644d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.7,
    reviews: 201,
    price: 92000,
    duration: '7-14 days',
    speciality: 'Yoga & Sound Healing',
    verified: true,
    availability: 'Available Mar 16-23',
    saved: false
  },
  {
    id: 17,
    name: 'Nirvana Hermitage',
    location: 'Rishikesh, Uttarakhand',
    image: 'https://images.unsplash.com/photo-1724167934723-6ca990cb8a15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.6,
    reviews: 176,
    price: 72000,
    duration: '7-14 days',
    speciality: 'Meditation & Pranayama',
    verified: false,
    availability: 'Available Apr 6-13',
    saved: false
  },
  {
    id: 18,
    name: 'Hevanika Nature Cure',
    location: 'Palakkad, Kerala',
    image: 'https://images.unsplash.com/photo-1759216852906-1bd15c147f82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    rating: 4.5,
    reviews: 143,
    price: 68000,
    duration: '7-14 days',
    speciality: 'Naturopathy',
    verified: true,
    availability: 'Available Mar 30-Apr 6',
    saved: false
  }
];

export function SearchResultsPage() {
  const [location, setLocation] = useState('All');
  const [sortBy, setSortBy] = useState('recommended');
  const [showFilters, setShowFilters] = useState(false);
  const [centres, setCentres] = useState(MOCK_CENTRES);
  const [savedCentres, setSavedCentres] = useState<number[]>([]);
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleSave = (id: number) => {
    if (savedCentres.includes(id)) {
      setSavedCentres(savedCentres.filter(centreId => centreId !== id));
    } else {
      setSavedCentres([...savedCentres, id]);
    }
  };

  const handleSaveWithAuthCheck = (id: number) => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    handleSave(id);
  };

  return (
    <SimplePageLayout>
      {/* Hero Section with Search */}
      <div className="bg-gradient-to-br from-primary via-primary/95 to-accent py-12 border-b border-primary">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-8">
            <h1 className="text-5xl font-bold text-white mb-3">
              {location === 'All' ? 'Explore Wellness Centres Across India' : `Wellness Centres in ${location}`}
            </h1>
            <p className="text-white/90 text-xl">
              {centres.length} centres available • Find your perfect healing retreat
            </p>
          </div>

          {/* Enhanced Search Bar */}
          <div className="bg-white rounded-2xl shadow-2xl p-4 sm:p-5">
            <div className="grid grid-cols-1 sm:grid-cols-12 gap-3">
              <div className="sm:col-span-5">
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
                  Search Destination
                </label>
                <input
                  type="text"
                  placeholder="Centre name or location..."
                  className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all text-sm"
                />
              </div>
              <div className="sm:col-span-3">
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
                  Location
                </label>
                <select
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white transition-all appearance-none text-sm"
                >
                  <option value="All">All Locations</option>
                  <option value="Kerala">Kerala</option>
                  <option value="Goa">Goa</option>
                  <option value="Rishikesh">Rishikesh</option>
                  <option value="Karnataka">Karnataka</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block">
                  Duration
                </label>
                <select className="w-full px-4 py-3 border border-muted rounded-xl focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 bg-white transition-all appearance-none text-sm">
                  <option>Any</option>
                  <option>3-5 days</option>
                  <option>7-10 days</option>
                  <option>14+ days</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="text-xs font-semibold text-foreground/70 mb-1.5 block sm:invisible">
                  Search
                </label>
                <button className="w-full bg-primary hover:bg-primary/90 text-white rounded-xl font-bold py-3.5 transition-all flex items-center justify-center gap-2 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:scale-[1.02] text-sm">
                  <Search className="w-5 h-5" />
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="bg-muted/30 min-h-screen">
        <div className="max-w-7xl mx-auto px-6 py-8">
          
          {/* Filters & Sort Bar - Enhanced */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-6 bg-white rounded-xl p-4 shadow-sm border border-muted/50">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-5 py-2.5 bg-primary/5 border-2 border-primary/20 rounded-lg hover:border-primary hover:bg-primary/10 transition-all font-semibold text-primary"
              >
                <Filter className="w-4 h-4" />
                {showFilters ? 'Hide Filters' : 'Show Filters'}
              </button>
              <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="px-3 py-1.5 bg-accent/10 text-accent rounded-full font-medium">
                  ✓ Verified Only
                </span>
                <span className="px-3 py-1.5 bg-primary/10 text-primary rounded-full font-medium">
                  Available Now
                </span>
              </div>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold text-foreground/70">Sort:</span>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-2.5 border-2 border-muted rounded-lg focus:outline-none focus:border-primary bg-white text-sm font-semibold hover:border-primary/50 transition-all"
              >
                <option value="recommended">⭐ Recommended</option>
                <option value="price-low">💰 Price: Low to High</option>
                <option value="price-high">💎 Price: High to Low</option>
                <option value="rating">🏆 Highest Rated</option>
                <option value="reviews">💬 Most Reviewed</option>
              </select>
            </div>
          </div>

          {/* Filters Panel */}
          <AnimatePresence>
            {showFilters && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                className="bg-white rounded-xl border border-muted/50 p-6 mb-6"
              >
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Price Range
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">Under ₹1,00,000</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">₹1,00,000 - ₹2,00,000</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">Above ₹2,00,000</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Duration
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">3-5 days</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">7-10 days</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">14+ days</span>
                      </label>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-semibold text-foreground mb-2 block">
                      Speciality
                    </label>
                    <div className="space-y-2">
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">Panchakarma</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">Stress Relief</span>
                      </label>
                      <label className="flex items-center gap-2">
                        <input type="checkbox" className="rounded border-muted" />
                        <span className="text-sm">Yoga & Meditation</span>
                      </label>
                    </div>
                  </div>
                </div>
                <div className="flex gap-3 mt-6 pt-6 border-t border-muted">
                  <button className="px-5 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all">
                    Apply Filters
                  </button>
                  <button
                    onClick={() => setShowFilters(false)}
                    className="px-5 py-2 border border-muted text-foreground rounded-lg font-semibold hover:bg-muted/50 transition-all"
                  >
                    Clear All
                  </button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Results Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {centres.map((centre) => (
              <motion.div
                key={centre.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-white rounded-xl border border-muted/50 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <Link to={`/centre/${centre.id}`} className="block">
                  <div className="relative overflow-hidden">
                    <img
                      src={centre.image}
                      alt={centre.name}
                      className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {centre.verified && (
                      <div className="absolute top-3 left-3 bg-white px-2.5 py-1 rounded-full text-xs font-semibold text-primary flex items-center gap-1">
                        ✓ Verified
                      </div>
                    )}
                    <button
                      onClick={(e) => {
                        e.preventDefault();
                        handleSaveWithAuthCheck(centre.id);
                      }}
                      className="absolute top-3 right-3 w-9 h-9 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-all"
                    >
                      <Heart
                        className={`w-4 h-4 ${
                          savedCentres.includes(centre.id)
                            ? 'fill-primary text-primary'
                            : 'text-foreground/60'
                        }`}
                      />
                    </button>
                  </div>
                </Link>

                <div className="p-5">
                  <Link to={`/centre/${centre.id}`}>
                    <h3 className="font-bold text-foreground mb-1.5 group-hover:text-primary transition-colors">
                      {centre.name}
                    </h3>
                  </Link>
                  <div className="flex items-center gap-1.5 text-sm text-foreground/60 mb-3">
                    <MapPin className="w-3.5 h-3.5" />
                    {centre.location}
                  </div>
                  
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center gap-1 bg-primary/10 px-2.5 py-1 rounded-md">
                      <Star className="w-3.5 h-3.5 fill-primary text-primary" />
                      <span className="text-sm font-bold text-primary">{centre.rating}</span>
                    </div>
                    <span className="text-xs text-foreground/50">({centre.reviews} reviews)</span>
                  </div>

                  <div className="flex items-center justify-between mb-3 pb-3 border-b border-muted">
                    <div>
                      <div className="text-xs text-foreground/50 mb-0.5">from</div>
                      <div className="text-lg font-bold text-foreground">
                        ₹{centre.price.toLocaleString('en-IN')}
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-xs text-foreground/50 mb-0.5">duration</div>
                      <div className="text-sm font-semibold text-foreground">{centre.duration}</div>
                    </div>
                  </div>

                  <div className="text-xs text-accent font-medium mb-3">{centre.availability}</div>
                  
                  <Link
                    to={`/centre/${centre.id}`}
                    className="block w-full py-2.5 bg-primary hover:bg-primary/90 text-white text-center rounded-lg font-semibold transition-all text-sm"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center mt-12">
            <button className="px-8 py-3 border-2 border-primary text-primary hover:bg-primary hover:text-white rounded-lg font-semibold transition-all">
              Load More Centres
            </button>
          </div>
        </div>
      </div>
      <LoginModal
        isOpen={showLoginModal}
        onClose={() => setShowLoginModal(false)}
      />
    </SimplePageLayout>
  );
}