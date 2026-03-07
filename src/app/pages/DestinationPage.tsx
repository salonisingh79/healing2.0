import { useParams, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { MapPin, Star, Search, Calendar, Users, ChevronRight, Award, Heart, TrendingUp, Sunrise, Wind, Mountain, Sparkles, Clock, Leaf, Activity, Book } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import React from 'react';
// Destination data
const DESTINATIONS = {
  'kerala': {
    name: 'Kerala',
    subtitle: 'The Heart of Authentic Ayurveda',
    description: 'Where 5,000 years of healing tradition meets serene backwaters and lush greenery',
    heroImage: 'https://images.unsplash.com/photo-1766404891650-492a7192696b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLZXJhbGElMjBiYWNrd2F0ZXJzJTIwaG91c2Vib2F0JTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcwNzA1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    themeColor: '#00864d',
    accentColor: '#7BC74D',
    highlights: [
      { icon: Award, text: 'Birthplace of Ayurveda' },
      { icon: Heart, text: 'Authentic Panchakarma centres' },
      { icon: TrendingUp, text: '150+ certified wellness retreats' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1662543713250-d734701de793?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Traditional Ayurvedic massage therapy',
        alt: 'Ayurvedic treatment in Kerala'
      },
      {
        url: 'https://images.unsplash.com/photo-1707893013488-51672ef83425?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Serene backwaters and houseboats',
        alt: 'Kerala backwaters'
      },
      {
        url: 'https://images.unsplash.com/photo-1698139214412-3352d1d68efa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Lush tropical nature of Kerala',
        alt: 'Kerala nature and greenery'
      },
      {
        url: 'https://images.unsplash.com/photo-1759141936083-d10203b4d4f6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Herbal medicine preparation',
        alt: 'Ayurvedic herbs and medicines'
      },
      {
        url: 'https://images.unsplash.com/photo-1669738016153-0ebc6b6189ba?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Peaceful yoga and meditation',
        alt: 'Yoga in Kerala'
      },
      {
        url: 'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Wellness spa treatments',
        alt: 'Kerala wellness spa'
      }
    ],
    bestFor: ['Traditional Panchakarma', 'Stress & Burnout Relief', 'Digestive Disorders', 'Rejuvenation Therapy'],
    popularAreas: [
      { name: 'Palakkad', description: 'Traditional & peaceful', centers: 24 },
      { name: 'Thrissur', description: 'Heritage centres', centers: 18 },
      { name: 'Wayanad', description: 'Nature retreats', centers: 12 },
      { name: 'Kovalam', description: 'Beach wellness', centers: 15 }
    ],
    centres: [
      {
        id: 1,
        name: 'Somatheeram Ayurveda Village',
        location: 'Chowara Beach',
        rating: 4.8,
        reviews: 342,
        price: 95000,
        duration: '7 days',
        image: 'https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        specialties: ['Panchakarma', 'Stress Relief', 'Detox'],
        featured: true
      },
      {
        id: 4,
        name: 'Carnoustie Ayurveda',
        location: 'Mararikulam',
        rating: 4.9,
        reviews: 287,
        price: 125000,
        duration: '7 days',
        image: 'https://images.unsplash.com/photo-1742483377931-68488341fb7d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        specialties: ['Rejuvenation', 'Weight Loss', 'Skin Care'],
        featured: true
      }
    ]
  },
  'rishikesh': {
    name: 'Rishikesh',
    subtitle: 'Capital City of Yoga',
    description: 'Sacred mountains, the holy Ganges, and transformative yoga & meditation practices',
    heroImage: 'https://images.unsplash.com/photo-1767653431683-9d8346bc18f3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxSaXNoaWtlc2glMjB5b2dhJTIwc3VucmlzZSUyMEdhbmdlcyUyMHJpdmVyfGVufDF8fHx8MTc3MDcwNTUzNnww&ixlib=rb-4.1.0&q=80&w=1080',
    themeColor: '#FF6B35',
    accentColor: '#F7931E',
    highlights: [
      { icon: Award, text: 'UNESCO World Yoga Capital' },
      { icon: Heart, text: 'Himalayan healing energy' },
      { icon: TrendingUp, text: '80+ yoga & wellness centres' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1683318528827-9577068cebeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Yoga practice by the Ganges',
        alt: 'Yoga in Rishikesh'
      },
      {
        url: 'https://images.unsplash.com/photo-1664389582119-3005a796ed19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Majestic Himalayan mountain views',
        alt: 'Himalayas in Rishikesh'
      },
      {
        url: 'https://images.unsplash.com/photo-1764661441867-473a59a765bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Traditional ashram meditation',
        alt: 'Ashram in Rishikesh'
      },
      {
        url: 'https://images.unsplash.com/photo-1690312509772-1c5064259b8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Sacred Ganga Aarti ceremony',
        alt: 'Ganga Aarti ceremony'
      },
      {
        url: 'https://images.unsplash.com/photo-1660791602343-dd024121b7eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Iconic Laxman Jhula suspension bridge',
        alt: 'Laxman Jhula bridge'
      },
      {
        url: 'https://images.unsplash.com/photo-1758797316117-8d133af25f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Himalayan wellness retreat',
        alt: 'Rishikesh retreat center'
      }
    ],
    aboutCity: {
      title: 'Where the Ganges Meets the Himalayas',
      content: 'Nestled in the foothills of the Himalayas along the banks of the sacred Ganges River, Rishikesh has been a spiritual sanctuary for seekers and yogis for thousands of years. Known as the "Yoga Capital of the World," this ancient city offers a unique blend of authentic spiritual practices, pristine natural beauty, and transformative wellness experiences. The crisp mountain air, the sound of temple bells, and the flowing Ganges create an environment where healing happens naturally.',
      image: 'https://images.unsplash.com/photo-1653282767645-5d951af5a470?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800'
    },
    whyChoose: [
      {
        icon: Sunrise,
        title: 'Authentic Yoga Lineages',
        description: 'Learn from masters trained in traditional Hatha, Ashtanga, and Kundalini yoga with unbroken guru-shishya lineages dating back centuries'
      },
      {
        icon: Mountain,
        title: 'Himalayan Healing Energy',
        description: 'The unique geography—where mountains meet the sacred river—creates a powerful natural energy field that amplifies meditation and healing'
      },
      {
        icon: Wind,
        title: 'Sacred Atmosphere',
        description: 'Surrounded by ashrams, temples, and spiritual seekers from around the world, creating an atmosphere of deep peace and transformation'
      },
      {
        icon: Sparkles,
        title: 'Holistic Integration',
        description: 'Combine yoga, pranayama, meditation, Ayurveda, and sound healing in a setting that naturally supports spiritual growth'
      }
    ],
    servicesOffered: [
      {
        icon: Activity,
        title: 'Traditional Yoga Programs',
        offerings: [
          '200/300/500 Hour Yoga Teacher Training',
          'Hatha & Ashtanga Intensive Courses',
          'Kundalini & Tantra Workshops',
          'Iyengar Alignment-Based Practice',
          'Daily Drop-in Classes (Morning & Evening)'
        ]
      },
      {
        icon: Leaf,
        title: 'Ayurvedic Wellness',
        offerings: [
          'Personalized Dosha Consultation',
          'Panchakarma Detox Programs (7-21 days)',
          'Ayurvedic Massage & Therapies',
          'Herbal Medicine Preparation',
          'Sattvic Diet & Nutrition Guidance'
        ]
      },
      {
        icon: Sparkles,
        title: 'Meditation & Mindfulness',
        offerings: [
          'Vipassana Silent Retreats',
          'Transcendental Meditation',
          'Guided Himalayan Meditations',
          'Breathwork & Pranayama Sessions',
          'Sound Healing with Tibetan Bowls'
        ]
      },
      {
        icon: Book,
        title: 'Spiritual Practices',
        offerings: [
          'Vedanta Philosophy Classes',
          'Sanskrit Chanting & Mantras',
          'Ganga Aarti Ceremonies',
          'Himalayan Trekking & Nature Walks',
          'One-on-One Spiritual Counseling'
        ]
      }
    ],
    bestTime: {
      title: 'Best Time to Visit',
      seasons: [
        { period: 'September - November', weather: '15-25°C, Clear skies', vibe: 'Perfect for yoga & trekking' },
        { period: 'February - May', weather: '20-35°C, Pleasant mornings', vibe: 'Ideal for intensive practice' },
        { period: 'June - August', weather: 'Monsoon season', vibe: 'Quieter, introspective retreats' }
      ]
    },
    bestFor: ['Yoga Teacher Training', 'Spiritual Awakening', 'Meditation Retreats', 'Stress Release', 'Detox & Renewal', 'Sound Healing'],
    popularAreas: [
      { name: 'Tapovan', description: 'Spiritual heart, premium ashrams', centers: 32 },
      { name: 'Laxman Jhula', description: 'Riverside yoga, iconic bridge', centers: 28 },
      { name: 'Ram Jhula', description: 'Traditional ashrams, quieter', centers: 20 },
      { name: 'Neelkanth', description: 'Mountain retreats, secluded', centers: 15 }
    ],
    centres: [
      {
        id: 3,
        name: 'Ananda in the Himalayas',
        location: 'Palace Estate',
        rating: 4.9,
        reviews: 456,
        price: 280000,
        duration: '7 days',
        image: 'https://images.unsplash.com/photo-1611073615452-4889cb93422e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        specialties: ['Yoga', 'Meditation', 'Ayurveda'],
        featured: true
      },
      {
        id: 5,
        name: 'Parmarth Niketan Ashram',
        location: 'Swarg Ashram',
        rating: 4.7,
        reviews: 892,
        price: 45000,
        duration: '7 days',
        image: 'https://images.unsplash.com/photo-1764661441867-473a59a765bc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        specialties: ['Yoga Training', 'Ganga Aarti', 'Spiritual Workshops'],
        featured: true
      },
      {
        id: 6,
        name: 'Rishikesh Yog Peeth',
        location: 'Tapovan',
        rating: 4.8,
        reviews: 634,
        price: 65000,
        duration: '7 days',
        image: 'https://images.unsplash.com/photo-1758797316117-8d133af25f8c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        specialties: ['200hr YTT', 'Hatha Yoga', 'Meditation'],
        featured: false
      }
    ]
  },
  'goa': {
    name: 'Goa',
    subtitle: 'Beach Wellness Paradise',
    description: 'Rejuvenate by the Arabian Sea with modern wellness meets coastal tranquility',
    heroImage: 'https://images.unsplash.com/photo-1668262121183-08bf7a35cc82?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxHb2ElMjBiZWFjaCUyMHdlbGxuZXNzJTIwcGVhY2VmdWx8ZW58MXx8fHwxNzcwNzA1NTM2fDA&ixlib=rb-4.1.0&q=80&w=1080',
    themeColor: '#1E88E5',
    accentColor: '#29B6F6',
    highlights: [
      { icon: Award, text: 'Premium beach resorts' },
      { icon: Heart, text: 'Modern wellness facilities' },
      { icon: TrendingUp, text: '45+ luxury retreats' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1695411560260-24bca88a2399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Beach yoga at sunset in Goa',
        alt: 'Beach yoga in Goa'
      },
      {
        url: 'https://images.unsplash.com/photo-1718275521201-1b8066ea2669?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Wellness retreat spa facilities',
        alt: 'Goa wellness retreat'
      },
      {
        url: 'https://images.unsplash.com/photo-1569034797434-b168fbcf7fcc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Peaceful morning beach views',
        alt: 'Goa beach morning'
      },
      {
        url: 'https://images.unsplash.com/photo-1630595633877-9918ee257288?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Spa massage and wellness treatments',
        alt: 'Spa treatment in Goa'
      },
      {
        url: 'https://images.unsplash.com/photo-1619650512374-db3cd859d8b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Tropical palm tree paradise',
        alt: 'Goa palm trees'
      },
      {
        url: 'https://images.unsplash.com/photo-1654738763901-b8f3fd146f33?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Luxury wellness resort amenities',
        alt: 'Luxury resort in Goa'
      }
    ],
    bestFor: ['Beach Yoga', 'Relaxation & Recovery', 'Luxury Wellness', 'Couples Retreats'],
    popularAreas: [
      { name: 'Anjuna', description: 'Boutique retreats', centers: 12 },
      { name: 'Palolem', description: 'Beach wellness', centers: 10 },
      { name: 'Mandrem', description: 'Quiet luxury', centers: 8 }
    ],
    centres: [
      {
        id: 2,
        name: 'Devaaya Ayurveda & Nature Cure Centre',
        location: 'Divar Island',
        rating: 4.7,
        reviews: 198,
        price: 110000,
        duration: '7 days',
        image: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600',
        specialties: ['Nature Cure', 'Beach Wellness', 'Detox'],
        featured: true
      }
    ]
  },
  'karnataka': {
    name: 'Karnataka',
    subtitle: 'Heritage Wellness Haven',
    description: 'Ancient temples, lush coffee plantations, and traditional healing practices',
    heroImage: 'https://images.unsplash.com/photo-1767766790564-f1a3bf637a81?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxLYXJuYXRha2ElMjB0ZW1wbGUlMjBoZXJpdGFnZSUyMGN1bHR1cmV8ZW58MXx8fHwxNzcwNzA1NTM3fDA&ixlib=rb-4.1.0&q=80&w=1080',
    themeColor: '#D84315',
    accentColor: '#FF6F00',
    highlights: [
      { icon: Award, text: 'Heritage wellness centres' },
      { icon: Heart, text: 'Nature-immersive retreats' },
      { icon: TrendingUp, text: '35+ authentic centres' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1548013146-72479768bada?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Ancient temple architecture',
        alt: 'Karnataka temples'
      },
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Coffee plantation wellness',
        alt: 'Coffee plantations in Coorg'
      },
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Nature retreat experiences',
        alt: 'Nature retreat Karnataka'
      },
      {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Yoga in heritage settings',
        alt: 'Yoga in Karnataka'
      },
      {
        url: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Traditional Ayurvedic treatments',
        alt: 'Ayurveda in Karnataka'
      },
      {
        url: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Royal wellness heritage',
        alt: 'Heritage wellness Karnataka'
      }
    ],
    bestFor: ['Cultural Wellness', 'Nature Therapy', 'Traditional Ayurveda', 'Yoga Retreats'],
    popularAreas: [
      { name: 'Coorg', description: 'Coffee plantations', centers: 14 },
      { name: 'Bangalore', description: 'Urban wellness', centers: 18 },
      { name: 'Mysore', description: 'Royal heritage', centers: 12 }
    ],
    centres: []
  },
  'tamil-nadu': {
    name: 'Tamil Nadu',
    subtitle: 'Temple Towns & Sacred Healing',
    description: 'Where ancient Siddha medicine and temple spirituality create profound healing',
    heroImage: 'https://images.unsplash.com/photo-1621488832166-8507b7eae488?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxUYW1pbCUyME5hZHUlMjB0ZW1wbGUlMjBwZWFjZWZ1bCUyMHNwaXJpdHVhbHxlbnwxfHx8fDE3NzA3MDU1Mzd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    themeColor: '#C2185B',
    accentColor: '#E91E63',
    highlights: [
      { icon: Award, text: 'Ancient Siddha tradition' },
      { icon: Heart, text: 'Temple town serenity' },
      { icon: TrendingUp, text: '50+ wellness centres' }
    ],
    galleryImages: [
      {
        url: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Ancient temple spirituality',
        alt: 'Tamil Nadu temples'
      },
      {
        url: 'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Traditional Siddha medicine',
        alt: 'Siddha treatments'
      },
      {
        url: 'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Peaceful coastal retreats',
        alt: 'Beach wellness Tamil Nadu'
      },
      {
        url: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Yoga and meditation',
        alt: 'Yoga in Tamil Nadu'
      },
      {
        url: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'French-Indian fusion culture',
        alt: 'Pondicherry culture'
      },
      {
        url: 'https://images.unsplash.com/photo-1582719471384-894fbb16e074?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
        caption: 'Sacred healing environments',
        alt: 'Healing retreats Tamil Nadu'
      }
    ],
    bestFor: ['Siddha Medicine', 'Spiritual Healing', 'Traditional Therapies', 'Temple Retreats'],
    popularAreas: [
      { name: 'Pondicherry', description: 'French-Indian fusion', centers: 15 },
      { name: 'Madurai', description: 'Temple heritage', centers: 12 },
      { name: 'Mahabalipuram', description: 'Coastal serenity', centers: 10 }
    ],
    centres: []
  }
};

export function DestinationPage() {
  const { destination } = useParams<{ destination: string }>();
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');

  // Get destination data
  const destData = DESTINATIONS[destination?.toLowerCase() || 'kerala'];

  if (!destData) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Destination not found</h1>
          <Link to="/" className="text-primary hover:underline">Return home</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section - Redesigned */}
      <div className="relative min-h-[85vh] overflow-hidden">
        {/* Background Image */}
        <ImageWithFallback
          src={destData.heroImage}
          alt={destData.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        
        {/* Gradient Overlays - Multi-layered for better depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/80" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            background: `linear-gradient(135deg, ${destData.themeColor}40 0%, transparent 50%)`
          }}
        />
        
        <div className="relative h-full max-w-7xl mx-auto px-6 flex flex-col">
          {/* Breadcrumb - Elevated with backdrop */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="pt-8 pb-4"
          >
            <div className="inline-flex items-center gap-2 text-sm px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
              <Link to="/" className="text-white/80 hover:text-white transition-colors">Home</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <Link to="/search" className="text-white/80 hover:text-white transition-colors">Destinations</Link>
              <ChevronRight className="w-3.5 h-3.5 text-white/60" />
              <span className="text-white font-medium">{destData.name}</span>
            </div>
          </motion.div>

          {/* Main Hero Content */}
          <div className="flex-1 flex flex-col justify-center py-12 md:py-16">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Column - Main Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                {/* Destination Badge */}
                <div 
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 backdrop-blur-md border"
                  style={{
                    backgroundColor: `${destData.themeColor}20`,
                    borderColor: `${destData.themeColor}40`
                  }}
                >
                  <MapPin className="w-4 h-4" style={{ color: destData.themeColor }} />
                  <span className="text-sm font-semibold text-white">Premium Destination</span>
                </div>

                {/* Title */}
                <h1 
                  className="mb-5"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--font-weight-bold)',
                    letterSpacing: '-0.03em',
                    color: '#FFFFFF',
                    fontSize: 'clamp(3rem, 7vw, 5.5rem)',
                    lineHeight: '1.05',
                    textShadow: '0 2px 20px rgba(0,0,0,0.3)'
                  }}
                >
                  {destData.name}
                </h1>
                
                {/* Subtitle */}
                <p 
                  className="text-white mb-4"
                  style={{ 
                    fontFamily: 'var(--font-sans)',
                    fontWeight: 'var(--font-weight-medium)',
                    fontSize: 'clamp(1.25rem, 3vw, 1.875rem)',
                    lineHeight: '1.4'
                  }}
                >
                  {destData.subtitle}
                </p>

                {/* Description */}
                <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-8 max-w-xl">
                  {destData.description}
                </p>

                {/* CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mb-10">
                  <button
                    onClick={() => navigate(`/search?location=${destData.name}`)}
                    className="px-8 py-4 rounded-xl font-bold text-white shadow-2xl hover:shadow-3xl transform hover:-translate-y-0.5 transition-all"
                    style={{ 
                      backgroundColor: destData.themeColor,
                      fontSize: '1.125rem'
                    }}
                  >
                    Browse All Centres
                  </button>
                  <button
                    onClick={() => navigate('/care-guide')}
                    className="px-8 py-4 bg-white/95 hover:bg-white text-foreground rounded-xl font-bold shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all"
                    style={{ fontSize: '1.125rem' }}
                  >
                    Get Expert Advice
                  </button>
                </div>

                {/* Stats Row */}
                <div className="flex flex-wrap gap-6">
                  {destData.highlights.map((highlight, idx) => {
                    const Icon = highlight.icon;
                    return (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.4 + idx * 0.1 }}
                        className="flex items-center gap-3 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-md border border-white/20"
                      >
                        <div 
                          className="w-10 h-10 rounded-lg flex items-center justify-center"
                          style={{ backgroundColor: `${destData.themeColor}30` }}
                        >
                          <Icon className="w-5 h-5 text-white" />
                        </div>
                        <span className="text-sm font-semibold text-white">{highlight.text}</span>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>

              {/* Right Column - Search Card */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="hidden lg:block"
              >
                <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl p-8 border border-white/40">
                  <h3 className="text-2xl font-bold mb-2">Find Your Perfect Retreat</h3>
                  <p className="text-foreground/70 mb-6">Search from {destData.popularAreas.reduce((sum, area) => sum + area.centers, 0)}+ verified wellness centres</p>
                  
                  {/* Search Input */}
                  <div className="relative mb-4">
                    <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
                    <input
                      type="text"
                      placeholder="Search treatments, therapies..."
                      className="w-full pl-12 pr-4 py-4 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all text-base"
                      style={{ 
                        focusRing: `2px solid ${destData.themeColor}40`
                      }}
                    />
                  </div>

                  {/* Quick Filters */}
                  <div className="mb-6">
                    <p className="text-sm font-semibold text-foreground/70 mb-3">Popular treatments:</p>
                    <div className="flex flex-wrap gap-2">
                      {destData.bestFor.slice(0, 4).map((item, idx) => (
                        <button
                          key={idx}
                          className="px-4 py-2 border-2 rounded-lg text-sm font-medium hover:shadow-md transition-all"
                          style={{
                            borderColor: `${destData.themeColor}30`,
                            color: destData.themeColor
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = `${destData.themeColor}10`;
                            e.currentTarget.style.borderColor = destData.themeColor;
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.borderColor = `${destData.themeColor}30`;
                          }}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Popular Areas */}
                  <div className="pt-6 border-t border-border">
                    <p className="text-sm font-semibold text-foreground/70 mb-3">Browse by area:</p>
                    <div className="space-y-2">
                      {destData.popularAreas.slice(0, 3).map((area, idx) => (
                        <button
                          key={idx}
                          onClick={() => navigate(`/search?location=${destData.name}, ${area.name}`)}
                          className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-muted/50 transition-all group"
                        >
                          <div className="flex items-center gap-3">
                            <MapPin className="w-4 h-4 text-foreground/40" />
                            <div className="text-left">
                              <div className="font-semibold text-sm group-hover:text-primary transition-colors">{area.name}</div>
                              <div className="text-xs text-foreground/60">{area.centers} centres</div>
                            </div>
                          </div>
                          <ChevronRight className="w-4 h-4 text-foreground/30 group-hover:text-primary transition-colors" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Bottom CTA */}
                  <button
                    onClick={() => navigate(`/search?location=${destData.name}`)}
                    className="w-full mt-6 py-4 rounded-xl font-bold text-white shadow-lg hover:shadow-xl transition-all"
                    style={{ backgroundColor: destData.themeColor }}
                  >
                    View All {destData.popularAreas.reduce((sum, area) => sum + area.centers, 0)} Centres
                  </button>
                </div>
              </motion.div>

            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="pb-8 flex justify-center"
          >
            <div className="flex flex-col items-center gap-2 text-white/60">
              <span className="text-xs font-medium uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ChevronRight className="w-5 h-5 rotate-90" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Mobile Search Card - Shows below hero on mobile */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="lg:hidden -mt-20 relative z-10 mx-6 mb-8"
      >
        <div className="bg-white rounded-2xl shadow-2xl p-6 border border-border">
          <h3 className="text-xl font-bold mb-2">Find Your Perfect Retreat</h3>
          <p className="text-foreground/70 text-sm mb-4">Search from {destData.popularAreas.reduce((sum, area) => sum + area.centers, 0)}+ verified centres</p>
          
          <div className="relative mb-4">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-foreground/40" />
            <input
              type="text"
              placeholder="Search treatments..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 border-2 border-border rounded-xl focus:outline-none focus:ring-2 focus:border-transparent transition-all"
              style={{ 
                focusRing: `2px solid ${destData.themeColor}40`
              }}
            />
          </div>

          <button
            onClick={() => navigate(`/search?location=${destData.name}`)}
            className="w-full py-3 rounded-xl font-bold text-white shadow-lg transition-all"
            style={{ backgroundColor: destData.themeColor }}
          >
            View All Centres
          </button>
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        
        {/* Best For Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Perfect for</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {destData.bestFor.map((item, idx) => (
              <div
                key={idx}
                className="px-6 py-4 bg-primary/5 border border-primary/20 rounded-lg text-center hover:bg-primary/10 transition-all cursor-pointer"
                style={{
                  backgroundColor: destData.themeColor ? `${destData.themeColor}08` : undefined,
                  borderColor: destData.themeColor ? `${destData.themeColor}33` : undefined
                }}
              >
                <p className="font-semibold text-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Destination Gallery Section */}
        {destData.galleryImages && destData.galleryImages.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-2">Explore {destData.name}</h2>
            <p className="text-foreground/70 mb-8">Discover the beauty and wellness experiences awaiting you</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {destData.galleryImages.map((image, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: idx * 0.1 }}
                  className="group relative aspect-[4/3] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-all"
                >
                  <img
                    src={image.url}
                    alt={image.alt}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <p className="text-white text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {image.caption}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>
        )}

        {/* About City Section (Rishikesh specific) */}
        {destData.aboutCity && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-3xl font-bold mb-6">{destData.aboutCity.title}</h2>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  {destData.aboutCity.content}
                </p>
              </div>
              <div className="order-1 md:order-2">
                <div className="relative h-96 rounded-2xl overflow-hidden shadow-xl">
                  <img
                    src={destData.aboutCity.image}
                    alt={`${destData.name} landscape`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </motion.section>
        )}

        {/* Why Choose Section (Rishikesh specific) */}
        {destData.whyChoose && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8 text-center">Why choose {destData.name}?</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {destData.whyChoose.map((reason, idx) => {
                const Icon = reason.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                  >
                    <div 
                      className="w-12 h-12 rounded-lg flex items-center justify-center mb-4"
                      style={{ 
                        backgroundColor: destData.themeColor ? `${destData.themeColor}15` : '#00864d15'
                      }}
                    >
                      <Icon 
                        className="w-6 h-6" 
                        style={{ color: destData.themeColor || '#00864d' }}
                      />
                    </div>
                    <h3 className="text-lg font-bold mb-2">{reason.title}</h3>
                    <p className="text-sm text-foreground/70 leading-relaxed">
                      {reason.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Services Offered Section (Rishikesh specific) */}
        {destData.servicesOffered && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-8">Wellness services in {destData.name}</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {destData.servicesOffered.map((service, idx) => {
                const Icon = service.icon;
                return (
                  <div
                    key={idx}
                    className="bg-white border border-border rounded-xl p-8 hover:shadow-lg transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div 
                        className="w-10 h-10 rounded-lg flex items-center justify-center"
                        style={{ 
                          backgroundColor: destData.themeColor ? `${destData.themeColor}15` : '#00864d15'
                        }}
                      >
                        <Icon 
                          className="w-5 h-5" 
                          style={{ color: destData.themeColor || '#00864d' }}
                        />
                      </div>
                      <h3 className="text-xl font-bold">{service.title}</h3>
                    </div>
                    <ul className="space-y-2">
                      {service.offerings.map((offering, offeringIdx) => (
                        <li key={offeringIdx} className="flex items-start gap-2 text-sm">
                          <span 
                            className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                            style={{ backgroundColor: destData.themeColor || '#00864d' }}
                          />
                          <span className="text-foreground/80">{offering}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                );
              })}
            </div>
          </motion.section>
        )}

        {/* Best Time to Visit (Rishikesh specific) */}
        {destData.bestTime && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold mb-6">{destData.bestTime.title}</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {destData.bestTime.seasons.map((season, idx) => (
                <div
                  key={idx}
                  className="bg-white border border-border rounded-xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="flex items-center gap-2 mb-3">
                    <Clock className="w-5 h-5" style={{ color: destData.themeColor || '#00864d' }} />
                    <h3 className="font-bold">{season.period}</h3>
                  </div>
                  <p className="text-sm text-foreground/70 mb-2">{season.weather}</p>
                  <p 
                    className="text-sm font-semibold"
                    style={{ color: destData.themeColor || '#00864d' }}
                  >
                    {season.vibe}
                  </p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Popular Areas */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold mb-6">Popular areas in {destData.name}</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {destData.popularAreas.map((area, idx) => (
              <Link
                key={idx}
                to={`/search?location=${destData.name}, ${area.name}`}
                className="group bg-white border border-border rounded-xl p-6 hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {area.name}
                  </h3>
                  <ChevronRight className="w-5 h-5 text-foreground/40 group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm text-foreground/60 mb-3">{area.description}</p>
                <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                  <MapPin className="w-4 h-4" />
                  {area.centers} centres
                </div>
              </Link>
            ))}
          </div>
        </motion.section>

        {/* Featured Centres */}
        {destData.centres.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-bold">Top-rated centres</h2>
              <Link
                to={`/search?location=${destData.name}`}
                className="text-primary hover:text-primary/80 font-semibold flex items-center gap-1"
              >
                View all
                <ChevronRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {destData.centres.map((centre) => (
                <Link
                  key={centre.id}
                  to={`/centre/${centre.id}`}
                  className="group bg-white border border-border rounded-xl overflow-hidden hover:border-primary hover:shadow-xl transition-all"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={centre.image}
                      alt={centre.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {centre.featured && (
                      <div className="absolute top-4 left-4 px-3 py-1 bg-accent text-white text-xs font-bold rounded-full">
                        FEATURED
                      </div>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                        {centre.name}
                      </h3>
                      <div className="flex items-center gap-1 bg-primary/10 px-2 py-1 rounded">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="text-sm font-bold text-primary">{centre.rating}</span>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-4">
                      <MapPin className="w-4 h-4" />
                      {centre.location}
                      <span className="mx-2">•</span>
                      <span>{centre.reviews} reviews</span>
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {centre.specialties.map((specialty, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-muted text-xs font-medium rounded-full"
                        >
                          {specialty}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <div>
                        <div className="text-sm text-foreground/60">From</div>
                        <div className="text-2xl font-bold text-primary">
                          ₹{centre.price.toLocaleString('en-IN')}
                        </div>
                        <div className="text-xs text-foreground/60">{centre.duration}</div>
                      </div>
                      <button className="px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </motion.section>
        )}

        {/* Why Visit Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 bg-muted/30 rounded-2xl p-8 md:p-12"
        >
          <h2 className="text-3xl font-bold mb-6">Why visit {destData.name}?</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">Authentic Healing Tradition</h3>
              <p className="text-foreground/80 leading-relaxed mb-6">
                {destData.name} offers an unparalleled wellness experience rooted in centuries of healing wisdom. 
                The region's natural environment, experienced practitioners, and authentic approach create the 
                perfect conditions for deep transformation and renewal.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4 text-primary">What to Expect</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80">Certified wellness centres with experienced practitioners</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80">Personalized treatment programs tailored to your needs</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80">Beautiful natural settings that enhance healing</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-primary" />
                  </div>
                  <span className="text-foreground/80">Authentic local cuisine and holistic care</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* CTA Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start your healing journey?
            </h2>
            <p className="text-lg text-foreground/70 mb-8 max-w-2xl mx-auto">
              Explore all wellness centres in {destData.name} and find the perfect retreat for your needs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => navigate(`/search?location=${destData.name}`)}
                className="px-8 py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold text-lg transition-all shadow-lg hover:shadow-xl"
              >
                Browse All Centres
              </button>
              <button
                onClick={() => navigate('/care-guide')}
                className="px-8 py-4 bg-white hover:bg-muted border-2 border-primary text-primary rounded-lg font-bold text-lg transition-all"
              >
                Speak to Care Guide
              </button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
}