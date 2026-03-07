import { motion } from 'motion/react';
import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import React from 'react';
import { 
  ArrowLeft, 
  MapPin, 
  Star, 
  Users, 
  Award, 
  Heart,
  CheckCircle,
  Calendar,
  Clock,
  Wifi,
  Utensils,
  Sparkles,
  Phone,
  Mail,
  Shield,
  Activity,
  Home,
  Dumbbell,
  Droplet,
  Wind,
  Leaf,
  Tag,
  ChevronDown,
  ChevronUp,
  Image as ImageIcon
} from 'lucide-react';
import { PhotoViewer } from './PhotoViewer';

// Centre data with comprehensive details
const centreData = {
  1: {
    id: 1,
    name: "Somatheeram Ayurveda Village",
    location: "Chowara Beach, Kerala",
    rating: 4.8,
    reviews: 342,
    tagline: "Experience Authentic Kerala Ayurveda by the Arabian Sea",
    verified: true,
    
    overview: {
      description: "For over three decades, Somatheeram has been a sanctuary where the ocean meets the forest, and tradition meets presence. Established in 1985, we were among the first authentic Ayurvedic wellness centers in Kerala to combine traditional healing with international standards of comfort and care. Nestled on 15 acres of lush tropical gardens overlooking Chowara Beach, we offer a transformative journey back to balance and vitality.",
      highlights: [
        "35+ years of Ayurvedic excellence",
        "Beachfront location with private access",
        "Expert team of 12 qualified Ayurvedic physicians",
        "Internationally certified organic treatments",
        "Over 250,000 satisfied guests from 150+ countries"
      ],
      certifications: [
        "Green Leaf Certified by Kerala Tourism",
        "ISO 9001:2015 Certified",
        "Ayush Ministry Approved",
        "NABH Accredited Healthcare Provider"
      ]
    },

    heroImages: [
      "https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1715242563833-946f4b811399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1763890965393-1cea435581ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    ],
    
    gallery: [
      { url: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Treatments" },
      { url: "https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Rooms" },
      { url: "https://images.unsplash.com/photo-1763890965393-1cea435581ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Yoga Hall" },
      { url: "https://images.unsplash.com/photo-1715242563833-946f4b811399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Pool" },
      { url: "https://images.unsplash.com/photo-1767350510090-137a6ce252c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Dining" },
      { url: "https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Beach" }
    ],

    treatments: [
      {
        name: "Panchakarma Detoxification",
        duration: "14-21 days",
        description: "Complete body purification through five therapeutic actions to eliminate deep-rooted toxins",
        benefits: ["Deep detoxification", "Improved metabolism", "Enhanced immunity", "Mental clarity"],
        icon: Droplet,
        recommended: true
      },
      {
        name: "Stress & Anxiety Relief",
        duration: "7-14 days",
        description: "Specialized treatments combining Shirodhara, Abhyanga, and herbal therapies for mental wellness",
        benefits: ["Reduced stress", "Better sleep", "Emotional balance", "Nervous system restoration"],
        icon: Wind,
        recommended: true
      },
      {
        name: "Weight Management Program",
        duration: "14-28 days",
        description: "Holistic approach to sustainable weight loss through dosha balancing and metabolic correction",
        benefits: ["Natural weight loss", "Improved digestion", "Increased energy", "Long-term results"],
        icon: Activity,
        recommended: false
      },
      {
        name: "Rejuvenation Therapy (Rasayana)",
        duration: "7-21 days",
        description: "Anti-aging treatments to restore vitality, improve immunity, and promote longevity",
        benefits: ["Anti-aging", "Skin rejuvenation", "Enhanced vitality", "Improved immunity"],
        icon: Sparkles,
        recommended: false
      },
      {
        name: "Pain Management",
        duration: "14-21 days",
        description: "Specialized protocols for arthritis, back pain, joint disorders, and chronic pain conditions",
        benefits: ["Pain relief", "Improved mobility", "Inflammation reduction", "Long-term healing"],
        icon: Shield,
        recommended: false
      },
      {
        name: "Diabetes Care Program",
        duration: "21-28 days",
        description: "Comprehensive Ayurvedic approach to managing diabetes through diet, herbs, and lifestyle",
        benefits: ["Blood sugar balance", "Reduced medication dependency", "Complication prevention", "Better energy"],
        icon: Heart,
        recommended: false
      }
    ],

    facilities: [
      { name: "72 Traditional Cottages", icon: Home },
      { name: "6 Treatment Rooms", icon: Sparkles },
      { name: "Yoga & Meditation Hall", icon: Activity },
      { name: "Infinity Pool", icon: Droplet },
      { name: "Organic Restaurant", icon: Utensils },
      { name: "Ayurvedic Pharmacy", icon: Leaf },
      { name: "Fitness Center", icon: Dumbbell },
      { name: "Library", icon: Award },
      { name: "Beach Access", icon: Users },
      { name: "Free Wi-Fi", icon: Wifi },
      { name: "24/7 Medical", icon: Shield },
      { name: "Airport Transfer", icon: Clock }
    ],

    doctors: [
      {
        name: "Dr. Rajeev Menon",
        designation: "Chief Ayurvedic Physician",
        qualification: "BAMS, MD (Ayurveda), 25 years experience",
        specialization: "Panchakarma & Chronic Disease Management",
        experience: "25 years",
        image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        description: "Dr. Menon has treated over 15,000 patients from around the world and specializes in complex chronic conditions."
      },
      {
        name: "Dr. Lakshmi Nair",
        designation: "Senior Ayurvedic Physician",
        qualification: "BAMS, MD (Kayachikitsa), 18 years experience",
        specialization: "Women's Health & Fertility",
        experience: "18 years",
        image: "https://images.unsplash.com/photo-1659353887907-000c9a92377d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        description: "An expert in PCOS, menopause, and hormonal balance with a gentle, compassionate approach."
      },
      {
        name: "Dr. Arun Kumar",
        designation: "Consultant Physician",
        qualification: "BAMS, PG Diploma (Panchakarma), 12 years experience",
        specialization: "Stress Management & Mental Wellness",
        experience: "12 years",
        image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        description: "Specializes in anxiety, depression, and sleep disorders using traditional Ayurvedic psychiatry."
      }
    ],

    packages: [
      {
        name: "Essential Wellness",
        duration: "7 Days",
        price: "₹65,000",
        priceUSD: "$780",
        description: "Perfect introduction to Ayurvedic healing",
        includes: [
          "Doctor consultation & diagnosis",
          "Daily Ayurvedic treatments (2 hours)",
          "Yoga & meditation sessions",
          "3 organic meals per day",
          "Cottage accommodation",
          "Herbal medicines & oils"
        ],
        popular: false,
        discount: null
      },
      {
        name: "Transformation Package",
        duration: "14 Days",
        price: "₹1,15,000",
        priceUSD: "$1,380",
        description: "Deep healing and rejuvenation program",
        includes: [
          "All Essential Wellness features",
          "Extended Panchakarma protocols",
          "Personalized diet plan",
          "Daily yoga & pranayama",
          "Cooking class & wellness workshop",
          "Post-retreat support (30 days)"
        ],
        popular: true,
        discount: "15% OFF"
      },
      {
        name: "Complete Detox & Renewal",
        duration: "21 Days",
        price: "₹1,65,000",
        priceUSD: "$1,980",
        description: "Comprehensive healing journey",
        includes: [
          "All Transformation features",
          "Advanced detoxification protocols",
          "Marma therapy sessions",
          "Mental wellness counseling",
          "Ayurvedic cooking certification",
          "6-month follow-up program"
        ],
        popular: false,
        discount: "20% OFF"
      }
    ],

    specialOffers: [
      {
        title: "Early Bird Special",
        description: "Book 90 days in advance and save 25%",
        code: "EARLY25"
      },
      {
        title: "Couple's Wellness Retreat",
        description: "Two guests sharing - get 30% off second guest",
        code: "COUPLE30"
      }
    ],

    contact: {
      phone: "+91 471 226 6501",
      email: "info@somatheeram.org",
      whatsapp: "+91 94470 26501"
    }
  },
  2: {
    id: 2,
    name: "Vana Wellness Retreat",
    location: "Dehradun, Himalayan Foothills",
    rating: 4.9,
    reviews: 287,
    tagline: "Transform Your Life in the Lap of the Himalayas",
    verified: true,
    
    overview: {
      description: "Vana is not a spa. It is a place of deep listening — to the body, the mind, and the quieter wisdom that lives beneath thought. Nestled in 21 acres of Sal forest at the foothills of the Himalayas, every experience is designed to restore what modern life depletes. Founded on the principles of holistic wellness, we integrate Ayurveda, Tibetan healing, and yoga to create personalized transformational journeys.",
      highlights: [
        "21 acres of pristine Sal forest sanctuary",
        "Integration of Ayurveda, Tibetan & Yoga healing",
        "Award-winning luxury wellness resort",
        "Personalized wellness programs by expert team",
        "Farm-to-table organic cuisine from own gardens"
      ],
      certifications: [
        "Conde Nast Top Wellness Destination",
        "World Luxury Spa Awards Winner",
        "Sustainable Tourism Certified",
        "Ayush Ministry Accredited"
      ]
    },

    heroImages: [
      "https://images.unsplash.com/photo-1766434773090-bfc6bdbf8b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600",
      "https://images.unsplash.com/photo-1715242563833-946f4b811399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1763890965393-1cea435581ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800",
      "https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    ],

    gallery: [
      { url: "https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Treatments" },
      { url: "https://images.unsplash.com/photo-1700142360825-d21edc53c8db?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Rooms" },
      { url: "https://images.unsplash.com/photo-1763890965393-1cea435581ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Yoga" },
      { url: "https://images.unsplash.com/photo-1715242563833-946f4b811399?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Forest" },
      { url: "https://images.unsplash.com/photo-1767350510090-137a6ce252c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Dining" },
      { url: "https://images.unsplash.com/photo-1766434773090-bfc6bdbf8b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800", category: "Mountain" }
    ],

    treatments: [
      {
        name: "Ayurvedic Constitutional Balancing",
        duration: "7-21 days",
        description: "Deep dosha analysis and personalized treatment protocols for complete mind-body harmony",
        benefits: ["Dosha balancing", "Energy restoration", "Mental clarity", "Improved vitality"],
        icon: Droplet,
        recommended: true
      },
      {
        name: "Tibetan Ku Nye Healing",
        duration: "5-14 days",
        description: "Ancient Tibetan massage therapy combined with energy work for deep healing",
        benefits: ["Energy flow", "Pain relief", "Emotional release", "Spiritual alignment"],
        icon: Wind,
        recommended: true
      },
      {
        name: "Sleep & Recovery Program",
        duration: "7-14 days",
        description: "Specialized protocols for chronic insomnia and sleep disorders using Ayurvedic wisdom",
        benefits: ["Better sleep", "Nervous system healing", "Hormone balance", "Deep rest"],
        icon: Activity,
        recommended: false
      },
      {
        name: "Immunity Boost Retreat",
        duration: "7-14 days",
        description: "Strengthen your immune system through Ayurvedic Rasayana therapies and herbal support",
        benefits: ["Enhanced immunity", "Disease prevention", "Vitality boost", "Longevity"],
        icon: Shield,
        recommended: false
      },
      {
        name: "Mental Wellness Program",
        duration: "14-21 days",
        description: "Holistic approach to anxiety, depression, and burnout through traditional healing",
        benefits: ["Reduced anxiety", "Mental clarity", "Emotional balance", "Stress relief"],
        icon: Heart,
        recommended: false
      },
      {
        name: "Forest Bathing & Nature Therapy",
        duration: "3-7 days",
        description: "Reconnect with nature through guided forest walks, meditation, and sensory immersion",
        benefits: ["Stress reduction", "Nature connection", "Mindfulness", "Inner peace"],
        icon: Leaf,
        recommended: false
      }
    ],

    facilities: [
      { name: "82 Luxury Villas", icon: Home },
      { name: "Treatment Center", icon: Sparkles },
      { name: "Tibetan Pavilion", icon: Heart },
      { name: "Yoga Studios", icon: Activity },
      { name: "Organic Restaurant", icon: Utensils },
      { name: "Hydrotherapy Pool", icon: Droplet },
      { name: "Fitness Studio", icon: Dumbbell },
      { name: "Herbal Apothecary", icon: Leaf },
      { name: "Library", icon: Award },
      { name: "Forest Trails", icon: Users },
      { name: "24/7 Medical Team", icon: Shield },
      { name: "Airport Transfers", icon: Clock }
    ],

    doctors: [
      {
        name: "Dr. Sanjay Sharma",
        designation: "Director of Ayurveda",
        qualification: "BAMS, MD (Kayachikitsa), 30 years experience",
        specialization: "Chronic Disease & Detoxification",
        experience: "30 years",
        image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        description: "Pioneer in integrative Ayurvedic medicine with expertise in complex chronic conditions."
      },
      {
        name: "Dr. Tenzin Dorje",
        designation: "Tibetan Medicine Physician",
        qualification: "Menpa Degree, 20 years experience",
        specialization: "Tibetan Healing & Energy Medicine",
        experience: "20 years",
        image: "https://images.unsplash.com/photo-1659353887907-000c9a92377d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        description: "Trained in traditional Tibetan medicine, specializing in pulse diagnosis and Ku Nye therapy."
      },
      {
        name: "Dr. Priya Desai",
        designation: "Wellness Physician",
        qualification: "BAMS, MSc (Yoga Therapy), 15 years experience",
        specialization: "Mental Health & Stress Management",
        experience: "15 years",
        image: "https://images.unsplash.com/photo-1659353887222-630895f23cc5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400",
        description: "Expert in combining Ayurveda and yoga therapy for anxiety and modern lifestyle disorders."
      }
    ],

    packages: [
      {
        name: "Rejuvenation Escape",
        duration: "5 Days",
        price: "₹95,000",
        priceUSD: "$1,140",
        description: "Short immersive wellness experience",
        includes: [
          "Wellness consultation & assessment",
          "Daily Ayurvedic treatments",
          "Yoga & meditation sessions",
          "Organic meals & herbal teas",
          "Luxury villa accommodation",
          "Forest bathing experiences"
        ],
        popular: false,
        discount: null
      },
      {
        name: "Complete Transformation",
        duration: "14 Days",
        price: "₹2,45,000",
        priceUSD: "$2,940",
        description: "Deep healing and lifestyle reset",
        includes: [
          "All Rejuvenation features",
          "Panchakarma detoxification",
          "Tibetan healing sessions",
          "Personalized wellness plan",
          "Cooking & nutrition workshops",
          "90-day post-retreat support"
        ],
        popular: true,
        discount: "12% OFF"
      },
      {
        name: "Ultimate Wellness Journey",
        duration: "21 Days",
        price: "₹3,50,000",
        priceUSD: "$4,200",
        description: "Life-changing holistic transformation",
        includes: [
          "All Transformation features",
          "Advanced detox protocols",
          "Mental wellness counseling",
          "Spiritual guidance sessions",
          "Personalized herbal formulations",
          "6-month wellness coaching"
        ],
        popular: false,
        discount: "18% OFF"
      }
    ],

    specialOffers: [
      {
        title: "Mountain Serenity Package",
        description: "Book before December and receive spa upgrade",
        code: "MOUNTAIN25"
      },
      {
        title: "Couples Wellness Journey",
        description: "Special pricing - save 35% on second guest",
        code: "COUPLE35"
      }
    ],

    contact: {
      phone: "+91 135 666 4400",
      email: "reservations@vana.co.in",
      whatsapp: "+91 98370 44400"
    }
  }
};

export function CentreDetail() {
  const { id } = useParams();
  const centre = centreData[Number(id) as keyof typeof centreData];
  const [showAllTreatments, setShowAllTreatments] = useState(false);
  const [showAllDoctors, setShowAllDoctors] = useState(false);
  const [showAllPhotos, setShowAllPhotos] = useState(false);
  const [isPhotoViewerOpen, setIsPhotoViewerOpen] = useState(false);
  const [selectedPhotoIndex, setSelectedPhotoIndex] = useState(0);
  const [showStickyHeader, setShowStickyHeader] = useState(false);

  // Scroll listener for sticky header
  useEffect(() => {
    const handleScroll = () => {
      // Show sticky header after scrolling 400px (past hero)
      setShowStickyHeader(window.scrollY > 400);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!centre) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Centre not found</h2>
          <Link to="/search" className="text-primary hover:underline">Back to Search</Link>
        </div>
      </div>
    );
  }

  const visibleTreatments = showAllTreatments ? centre.treatments : centre.treatments.slice(0, 3);
  const visibleDoctors = showAllDoctors ? centre.doctors : centre.doctors.slice(0, 2);
  const visiblePhotos = showAllPhotos ? centre.gallery : centre.gallery.slice(0, 4);

  return (
    <div className="bg-white">
      
      {/* Sticky Header - Appears on Scroll */}
      <div className={`fixed top-0 left-0 right-0 z-[100] bg-white border-b border-muted/30 shadow-md transition-transform duration-300 ${
        showStickyHeader ? 'translate-y-0' : '-translate-y-full'
      }`}>
        <div className="max-w-7xl mx-auto px-6 py-3">
          <div className="flex items-center justify-between gap-4">
            {/* Left - Centre Info */}
            <div className="flex items-center gap-4 flex-1 min-w-0">
              <Link 
                to="/search"
                className="flex-shrink-0 p-2 hover:bg-muted/20 rounded-lg transition-all"
              >
                <ArrowLeft className="w-5 h-5 text-foreground" />
              </Link>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="font-bold text-foreground truncate text-lg">
                    {centre.name}
                  </h2>
                  {centre.verified && (
                    <CheckCircle className="w-4 h-4 text-primary flex-shrink-0" />
                  )}
                </div>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                    <span className="truncate">{centre.location}</span>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-foreground">{centre.rating}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right - CTA Buttons */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="hidden md:block text-right">
                <div className="text-sm text-foreground/60">From</div>
                <div className="text-xl font-bold text-primary">{centre.packages[0].price}</div>
              </div>
              <Link
                to={`/availability/${centre.id}`}
                className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-lg transition-all whitespace-nowrap"
              >
                Check Availability
              </Link>
            </div>
          </div>
        </div>
      </div>
      
      {/* Hero Image - Single */}
      <div className="relative h-[40vh] min-h-[300px] bg-foreground/5 group cursor-pointer"
        onClick={() => {
          setSelectedPhotoIndex(0);
          setIsPhotoViewerOpen(true);
        }}
      >
        <img 
          src={centre.heroImages[0]} 
          alt={centre.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        
        {/* Photo indicator on hover */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
          <div className="w-16 h-16 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
            <ImageIcon className="w-8 h-8 text-white" />
          </div>
        </div>
        
        {/* View All Photos badge */}
        <div className="absolute bottom-6 right-6 px-4 py-2 bg-white/95 hover:bg-white rounded-xl font-semibold text-sm flex items-center gap-2 shadow-lg transition-all">
          <ImageIcon className="w-4 h-4" />
          View All {centre.gallery.length} Photos
        </div>
        
        {/* Back Button */}
        <Link 
          to="/search" 
          className="absolute top-6 left-6 px-4 py-2 bg-white/95 hover:bg-white text-foreground rounded-xl font-semibold flex items-center gap-2 transition-all shadow-lg z-10"
          onClick={(e) => e.stopPropagation()}
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Search
        </Link>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 py-8">
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h1 className="text-4xl font-bold text-foreground">{centre.name}</h1>
                    {centre.verified && (
                      <CheckCircle className="w-6 h-6 text-primary" />
                    )}
                  </div>
                  <div className="flex flex-wrap items-center gap-4 text-foreground/70 mb-2">
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-primary" />
                      <span>{centre.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                      <span className="font-bold text-foreground">{centre.rating}</span>
                      <span>({centre.reviews} reviews)</span>
                    </div>
                  </div>
                  <p className="text-lg text-foreground/70 italic">{centre.tagline}</p>
                </div>
              </div>

              {/* Special Offers */}
              {centre.specialOffers.length > 0 && (
                <div className="flex flex-wrap gap-3 pt-4 border-t border-muted/30">
                  {centre.specialOffers.map((offer, index) => (
                    <div key={index} className="px-4 py-2 bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 text-primary rounded-xl text-sm font-semibold flex items-center gap-2">
                      <Tag className="w-4 h-4" />
                      {offer.description} • <span className="font-mono">{offer.code}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Overview Section */}
            <div className="bg-white rounded-2xl border border-muted/30 p-4">
              <h2 className="text-xl font-bold text-foreground mb-2 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Overview
              </h2>
              
              {/* Ultra-compact highlights - show only 2 initially */}
              <OverviewHighlights highlights={centre.overview.highlights} />

              {/* Collapsible description with Read More */}
              <OverviewDescription description={centre.overview.description} />

              {/* Compact certifications - collapsible */}
              <OverviewCertifications certifications={centre.overview.certifications} />
            </div>

            {/* Facilities */}
            <div className="bg-white rounded-2xl border border-muted/30 p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Home className="w-6 h-6 text-primary" />
                Facilities & Amenities
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {centre.facilities.map((facility, index) => (
                  <div key={index} className="flex items-center gap-2 p-3 bg-muted/20 rounded-lg hover:bg-primary/5 transition-all">
                    <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <facility.icon className="w-4 h-4 text-primary" />
                    </div>
                    <span className="text-sm font-semibold text-foreground">{facility.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Wellness Packages */}
            <div className="bg-white rounded-2xl border border-muted/30 p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Wellness Packages
              </h2>

              <div className="space-y-4">
                {centre.packages.map((pkg, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className={`relative rounded-xl p-5 border-2 transition-all ${
                      pkg.popular
                        ? 'border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg'
                        : 'border-muted/30 hover:border-primary/30'
                    }`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-3 left-4 px-4 py-1 bg-gradient-to-r from-primary to-accent text-white rounded-full text-xs font-bold shadow-lg">
                        MOST POPULAR
                      </div>
                    )}

                    <div className="flex items-start justify-between mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-foreground mb-1">{pkg.name}</h3>
                        <p className="text-sm text-foreground/60 mb-2">{pkg.duration} • {pkg.description}</p>
                      </div>
                      <div className="text-right ml-4">
                        {pkg.discount && (
                          <span className="inline-block px-2 py-1 bg-red-500 text-white rounded text-xs font-bold mb-1">
                            {pkg.discount}
                          </span>
                        )}
                        <div className="text-2xl font-bold text-primary">{pkg.price}</div>
                        <div className="text-sm text-foreground/60">{pkg.priceUSD}</div>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-2 mb-4">
                      {pkg.includes.slice(0, 4).map((item, i) => (
                        <div key={i} className="flex items-start gap-2 text-sm text-foreground/70">
                          <CheckCircle className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                    {pkg.includes.length > 4 && (
                      <p className="text-sm text-primary font-semibold mb-4">
                        +{pkg.includes.length - 4} more inclusions
                      </p>
                    )}

                    <Link
                      to={`/availability/${centre.id}`}
                      className={`block w-full text-center py-3 rounded-xl font-bold transition-all ${
                        pkg.popular
                          ? 'bg-primary text-white hover:bg-primary/90 shadow-md'
                          : 'bg-primary/10 text-primary hover:bg-primary/20'
                      }`}
                    >
                      Book This Package
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Treatments Section */}
            <div className="bg-white rounded-2xl border border-muted/30 p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-primary" />
                Treatments Offered
              </h2>

              <div className="space-y-3">
                {visibleTreatments.map((treatment, index) => (
                  <div
                    key={index}
                    className={`rounded-xl p-4 border transition-all ${
                      treatment.recommended
                        ? 'border-primary/50 bg-primary/5'
                        : 'border-muted/30 hover:border-primary/30'
                    }`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                        treatment.recommended ? 'bg-primary text-white' : 'bg-muted/50 text-foreground/60'
                      }`}>
                        <treatment.icon className="w-6 h-6" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold text-foreground">{treatment.name}</h3>
                          {treatment.recommended && (
                            <span className="px-2 py-0.5 bg-primary/20 text-primary rounded text-xs font-bold">
                              TOP PICK
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-foreground/60 mb-2 flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {treatment.duration}
                        </p>
                        <p className="text-sm text-foreground/70 mb-3">{treatment.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {treatment.benefits.map((benefit, i) => (
                            <span key={i} className="px-2 py-1 bg-muted/40 text-foreground/70 rounded text-xs">
                              {benefit}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {centre.treatments.length > 3 && (
                <button
                  onClick={() => setShowAllTreatments(!showAllTreatments)}
                  className="w-full mt-4 py-3 border-2 border-muted/30 rounded-xl font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                >
                  {showAllTreatments ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Show All {centre.treatments.length} Treatments <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>

            {/* Doctors Section */}
            <div className="bg-white rounded-2xl border border-muted/30 p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                Expert Physicians
              </h2>

              <div className="space-y-4">
                {visibleDoctors.map((doctor, index) => (
                  <div key={index} className="flex gap-4 p-4 border border-muted/30 rounded-xl hover:border-primary/30 transition-all">
                    <img 
                      src={doctor.image}
                      alt={doctor.name}
                      className="w-24 h-24 rounded-xl object-cover flex-shrink-0"
                    />
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-foreground mb-1">{doctor.name}</h3>
                      <p className="text-sm text-primary font-semibold mb-1">{doctor.designation}</p>
                      <p className="text-xs text-foreground/60 mb-2">{doctor.qualification}</p>
                      <div className="inline-flex items-center gap-1 px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-semibold mb-2">
                        <Award className="w-3 h-3" />
                        {doctor.specialization}
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{doctor.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {centre.doctors.length > 2 && (
                <button
                  onClick={() => setShowAllDoctors(!showAllDoctors)}
                  className="w-full mt-4 py-3 border-2 border-muted/30 rounded-xl font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                >
                  {showAllDoctors ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Show All {centre.doctors.length} Doctors <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>

            {/* Photo Gallery */}
            <div className="bg-white rounded-2xl border border-muted/30 p-6">
              <h2 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                <ImageIcon className="w-6 h-6 text-primary" />
                Photo Gallery
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                {visiblePhotos.map((image, visibleIndex) => {
                  // Get the actual index in the full gallery array
                  const actualIndex = centre.gallery.findIndex(img => img.url === image.url);
                  
                  return (
                    <div 
                      key={visibleIndex} 
                      className="group relative rounded-xl overflow-hidden aspect-square cursor-pointer"
                      onClick={() => {
                        setSelectedPhotoIndex(actualIndex);
                        setIsPhotoViewerOpen(true);
                      }}
                    >
                      <img 
                        src={image.url} 
                        alt={image.category}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="absolute bottom-3 left-3">
                          <span className="text-white text-sm font-semibold">{image.category}</span>
                        </div>
                      </div>
                      {/* Click indicator */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                          <ImageIcon className="w-6 h-6 text-white" />
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>

              {centre.gallery.length > 4 && (
                <button
                  onClick={() => setShowAllPhotos(!showAllPhotos)}
                  className="w-full mt-4 py-3 border-2 border-muted/30 rounded-xl font-semibold text-foreground hover:border-primary/30 hover:bg-primary/5 transition-all flex items-center justify-center gap-2"
                >
                  {showAllPhotos ? (
                    <>Show Less <ChevronUp className="w-4 h-4" /></>
                  ) : (
                    <>Show All {centre.gallery.length} Photos <ChevronDown className="w-4 h-4" /></>
                  )}
                </button>
              )}
            </div>

          </div>

          {/* Right Column - Sticky Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              
              {/* Main Booking Card */}
              <div className="bg-white rounded-2xl shadow-xl p-6 border-2 border-primary/20">
                <div className="mb-6">
                  <div className="text-sm text-foreground/60 mb-1">Starting from</div>
                  <div className="text-3xl font-bold text-primary mb-1">
                    {centre.packages[0].price}
                  </div>
                  <div className="text-sm text-foreground/60">{centre.packages[0].priceUSD} • {centre.packages[0].duration}</div>
                </div>

                <Link
                  to={`/availability/${centre.id}`}
                  className="block w-full text-center py-4 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-bold hover:shadow-xl transition-all mb-3"
                >
                  Check Availability
                </Link>

                <Link
                  to="/care-guide"
                  className="block w-full text-center py-3 border-2 border-primary/20 text-primary rounded-xl font-semibold hover:bg-primary/5 transition-all"
                >
                  Talk to Wellness Guide
                </Link>
              </div>

              {/* Contact Card */}
              <div className="bg-white rounded-2xl shadow-lg p-6 border border-muted/30">
                <h3 className="font-bold text-foreground mb-4">Contact Centre</h3>
                
                <div className="space-y-3">
                  <a 
                    href={`tel:${centre.contact.phone}`}
                    className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60">Call</div>
                      <div className="text-sm font-semibold text-foreground">{centre.contact.phone}</div>
                    </div>
                  </a>

                  <a 
                    href={`https://wa.me/${centre.contact.whatsapp.replace(/\s+/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-3 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
                  >
                    <div className="w-10 h-10 bg-white/20 rounded-lg flex items-center justify-center">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs text-white/80">WhatsApp</div>
                      <div className="text-sm font-bold">{centre.contact.whatsapp}</div>
                    </div>
                  </a>

                  <a 
                    href={`mailto:${centre.contact.email}`}
                    className="flex items-center gap-3 p-3 bg-muted/20 rounded-lg hover:bg-muted/30 transition-all"
                  >
                    <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs text-foreground/60">Email</div>
                      <div className="text-xs font-semibold text-foreground break-all">{centre.contact.email}</div>
                    </div>
                  </a>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom Padding */}
      <div className="h-12"></div>

      {/* Photo Viewer */}
      {isPhotoViewerOpen && (
        <PhotoViewer
          images={centre.gallery.map(img => img.url)}
          initialIndex={selectedPhotoIndex}
          isOpen={isPhotoViewerOpen}
          onClose={() => setIsPhotoViewerOpen(false)}
          centreName={centre.name}
        />
      )}
    </div>
  );
}

// Collapsible Description Component
function OverviewDescription({ description }: { description: string }) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Split into first sentence for collapsed view
  const sentences = description.match(/[^.!?]+[.!?]+/g) || [description];
  const shortText = sentences[0]; // Only show first sentence
  const showReadMore = sentences.length > 1;

  return (
    <div className="mb-3">
      <p className="text-foreground/70 leading-relaxed text-xs">
        {isExpanded ? description : shortText}
        {!isExpanded && showReadMore && '...'}
      </p>
      {showReadMore && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-1.5 text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Read Less
              <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              Read More
              <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

// Ultra-compact Highlights Component
function OverviewHighlights({ highlights }: { highlights: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-4">
        {isExpanded ? (
          highlights.map((highlight, index) => (
            <div key={index} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
              <CheckCircle className="w-3 h-3 flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))
        ) : (
          highlights.slice(0, 2).map((highlight, index) => (
            <div key={index} className="inline-flex items-center gap-1.5 bg-primary/10 text-primary px-3 py-1.5 rounded-full text-xs font-semibold">
              <CheckCircle className="w-3 h-3 flex-shrink-0" />
              <span>{highlight}</span>
            </div>
          ))
        )}
      </div>
      {highlights.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="text-sm font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-4 h-4" />
            </>
          ) : (
            <>
              Show All {highlights.length} Highlights
              <ChevronDown className="w-4 h-4" />
            </>
          )}
        </button>
      )}
    </div>
  );
}

// Compact Certifications Component
function OverviewCertifications({ certifications }: { certifications: string[] }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-gradient-to-br from-primary/5 to-accent/5 rounded-lg p-3 border border-primary/20">
      <h3 className="text-sm font-bold text-foreground mb-2 flex items-center gap-1.5">
        <Award className="w-4 h-4 text-primary" />
        Certifications
      </h3>
      <div className="space-y-1.5">
        {isExpanded ? (
          certifications.map((cert, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-foreground/70">
              <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></div>
              {cert}
            </div>
          ))
        ) : (
          certifications.slice(0, 2).map((cert, index) => (
            <div key={index} className="flex items-center gap-2 text-xs text-foreground/70">
              <div className="w-1 h-1 rounded-full bg-primary flex-shrink-0"></div>
              {cert}
            </div>
          ))
        )}
      </div>
      {certifications.length > 2 && (
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="mt-2 text-xs font-semibold text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          {isExpanded ? (
            <>
              Show Less
              <ChevronUp className="w-3 h-3" />
            </>
          ) : (
            <>
              +{certifications.length - 2} more
              <ChevronDown className="w-3 h-3" />
            </>
          )}
        </button>
      )}
    </div>
  );
}