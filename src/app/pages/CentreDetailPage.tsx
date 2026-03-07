import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { MapPin, Star, Heart, Share2, Phone, Mail, Shield, Award, Users, Calendar, Clock, ChevronRight, Check, X } from 'lucide-react';
import { motion } from 'motion/react';
import { useAuth } from '../contexts/AuthContext';
import { LoginModal } from '../components/LoginModal';
import React from 'react';
export function CentreDetailPage() {
  const [saved, setSaved] = useState(false);
  const { isLoggedIn } = useAuth();
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);
  const { id } = useParams();

  const handleSaveClick = () => {
    if (!isLoggedIn) {
      setShowLoginModal(true);
      return;
    }
    setSaved(!saved);
  };

  const images = [
    'https://images.unsplash.com/photo-1540555700478-4be289fbecef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    'https://images.unsplash.com/photo-1596178060671-7a80dc8059ea?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
    'https://images.unsplash.com/photo-1545389336-cf090694435e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200'
  ];

  const programs = [
    {
      name: 'Panchakarma Detox Program',
      duration: '14-21 days',
      price: 125000,
      description: 'Complete detoxification with five cleansing therapies'
    },
    {
      name: 'Stress & Burnout Relief',
      duration: '7-10 days',
      price: 95000,
      description: 'Specialized treatments for modern stress and anxiety'
    },
    {
      name: 'Chronic Pain Management',
      duration: '10-14 days',
      price: 110000,
      description: 'Targeted therapy for joint and muscle pain'
    }
  ];

  return (
    <PageLayout>
      <div className="bg-white">
        
        {/* Image Gallery */}
        <div className="relative">
          <div className="max-w-7xl mx-auto px-6 py-6">
            <div className="grid grid-cols-4 gap-3 h-[500px]">
              <div className="col-span-3 relative rounded-xl overflow-hidden">
                <img
                  src={images[0]}
                  alt="Centre main"
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={handleSaveClick}
                  className="absolute top-4 right-4 w-11 h-11 bg-white rounded-full flex items-center justify-center hover:bg-primary/10 transition-all shadow-lg"
                >
                  <Heart className={`w-5 h-5 ${saved ? 'fill-primary text-primary' : 'text-foreground/60'}`} />
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {images.slice(1, 4).map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx + 1)}
                    className={`relative rounded-xl overflow-hidden flex-1 ${
                      selectedImage === idx + 1 ? 'ring-2 ring-primary' : ''
                    }`}
                  >
                    <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              
              {/* Header */}
              <div>
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="bg-primary/10 text-primary text-xs font-semibold px-2.5 py-1 rounded-full">
                        ✓ Verified Centre
                      </span>
                      <span className="bg-accent/10 text-accent text-xs font-semibold px-2.5 py-1 rounded-full">
                        English Friendly
                      </span>
                    </div>
                    <h1 className="text-4xl font-bold text-foreground mb-2">
                      Kairali Ayurvedic Healing Village
                    </h1>
                    <div className="flex items-center gap-4 text-foreground/60">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4" />
                        Palakkad, Kerala
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Star className="w-4 h-4 fill-primary text-primary" />
                        <span className="font-semibold text-foreground">4.9</span>
                        <span>(342 reviews)</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Overview */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Overview</h2>
                <p className="text-foreground/70 leading-relaxed mb-4">
                  Nestled in the serene backwaters of Kerala, Kairali Ayurvedic Healing Village offers authentic Panchakarma treatments in a peaceful, natural setting. Founded in 1989 by the Kairali family, this centre has been healing thousands of international guests with traditional Ayurvedic wisdom.
                </p>
                <p className="text-foreground/70 leading-relaxed">
                  The centre specializes in stress relief, detoxification, and chronic pain management. All treatments are supervised by experienced Ayurvedic doctors who create personalized healing plans based on your dosha and health goals.
                </p>
              </div>

              {/* Key Features */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Why Choose This Centre</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <Shield className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Verified & Safe</div>
                      <div className="text-sm text-foreground/60">Background-checked doctors, hygiene audits</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-accent/5 rounded-lg">
                    <Award className="w-5 h-5 text-accent mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">35+ Years Experience</div>
                      <div className="text-sm text-foreground/60">Trusted by 10,000+ international guests</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-secondary/5 rounded-lg">
                    <Users className="w-5 h-5 text-secondary-foreground mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">English-Speaking</div>
                      <div className="text-sm text-foreground/60">All doctors and staff fluent in English</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 p-4 bg-primary/5 rounded-lg">
                    <Calendar className="w-5 h-5 text-primary mt-0.5" />
                    <div>
                      <div className="font-semibold text-foreground mb-1">Flexible Booking</div>
                      <div className="text-sm text-foreground/60">Free cancellation up to 14 days before</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Healing Programs */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Healing Programs</h2>
                <div className="space-y-4">
                  {programs.map((program, idx) => (
                    <div key={idx} className="border border-muted rounded-xl p-5 hover:border-primary hover:shadow-md transition-all">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-lg font-bold text-foreground">{program.name}</h3>
                        <div className="text-right">
                          <div className="text-xs text-foreground/50">from</div>
                          <div className="text-xl font-bold text-primary">
                            ₹{program.price.toLocaleString('en-IN')}
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-foreground/60 mb-3">
                        <Clock className="w-4 h-4" />
                        {program.duration}
                      </div>
                      <p className="text-sm text-foreground/70 mb-4">{program.description}</p>
                      <Link
                        to={`/availability/${id}`}
                        className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                      >
                        Check Availability
                        <ChevronRight className="w-4 h-4" />
                      </Link>
                    </div>
                  ))}
                </div>
              </div>

              {/* Daily Rhythm */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Your Daily Rhythm</h2>
                <div className="bg-muted/30 rounded-xl p-6 space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">6:30 AM</div>
                    <div className="text-sm text-foreground/70">Wake up, herbal tea</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">7:00 AM</div>
                    <div className="text-sm text-foreground/70">Yoga & meditation session</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">8:30 AM</div>
                    <div className="text-sm text-foreground/70">Ayurvedic breakfast</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">10:00 AM</div>
                    <div className="text-sm text-foreground/70">Treatment session (90 mins)</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">12:30 PM</div>
                    <div className="text-sm text-foreground/70">Lunch & rest time</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">4:00 PM</div>
                    <div className="text-sm text-foreground/70">Second treatment (optional)</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">6:00 PM</div>
                    <div className="text-sm text-foreground/70">Evening yoga or nature walk</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">7:30 PM</div>
                    <div className="text-sm text-foreground/70">Light dinner</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="text-sm font-semibold text-primary min-w-[80px]">9:00 PM</div>
                    <div className="text-sm text-foreground/70">Recommended bedtime</div>
                  </div>
                </div>
              </div>

              {/* What's Included */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">What's Included</h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    {[
                      'Accommodation (AC room)',
                      '3 Ayurvedic meals daily',
                      'Initial doctor consultation',
                      'Daily treatments as prescribed',
                      'Yoga & meditation sessions',
                      'All medicines & oils'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                  <div className="space-y-2">
                    {[
                      'Follow-up consultations',
                      'Take-home care plan',
                      'Airport pickup/drop',
                      'Wi-Fi access',
                      'Laundry service',
                      '24/7 on-site support'
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-sm">
                        <Check className="w-4 h-4 text-accent" />
                        <span className="text-foreground/70">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Reviews */}
              <div>
                <h2 className="text-2xl font-bold text-foreground mb-4">Guest Reviews</h2>
                <div className="space-y-4">
                  {[
                    {
                      name: 'Sarah M.',
                      country: 'UK',
                      rating: 5,
                      date: 'Jan 2026',
                      text: 'Life-changing experience. The doctors were incredibly knowledgeable and the treatments were exactly what I needed after years of burnout. Highly recommend!'
                    },
                    {
                      name: 'Michael T.',
                      country: 'USA',
                      rating: 5,
                      date: 'Dec 2025',
                      text: 'As a first-time visitor to an Ayurvedic centre, I was nervous. But the staff made me feel so comfortable and explained everything clearly. Amazing results for my chronic back pain.'
                    }
                  ].map((review, idx) => (
                    <div key={idx} className="border border-muted rounded-xl p-5">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <div className="font-semibold text-foreground">{review.name}</div>
                          <div className="text-sm text-foreground/60">{review.country} • {review.date}</div>
                        </div>
                        <div className="flex items-center gap-0.5">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                          ))}
                        </div>
                      </div>
                      <p className="text-sm text-foreground/70 leading-relaxed">{review.text}</p>
                    </div>
                  ))}
                </div>
                <Link
                  to={`/centre/${id}/reviews`}
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-4"
                >
                  Read all 342 reviews
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 space-y-6">
                
                {/* Booking Card */}
                <div className="bg-white border-2 border-primary/30 rounded-xl p-6 shadow-lg">
                  <div className="text-center mb-6">
                    <div className="text-sm text-foreground/60 mb-1">Starting from</div>
                    <div className="text-3xl font-bold text-foreground">₹95,000</div>
                    <div className="text-sm text-foreground/60">per person / 7 days</div>
                  </div>
                  
                  <Link
                    to={`/availability/${id}`}
                    className="block w-full py-3.5 bg-primary hover:bg-primary/90 text-white text-center rounded-lg font-bold transition-all mb-3 text-lg"
                  >
                    Check Availability
                  </Link>
                  
                  <Link
                    to={`/enquiry/${id}`}
                    className="block w-full py-3 border-2 border-primary text-primary text-center rounded-lg font-semibold hover:bg-primary/5 transition-all mb-4"
                  >
                    Enquire Now
                  </Link>

                  <div className="text-center text-xs text-foreground/50 mb-4">
                    Free cancellation up to 14 days
                  </div>

                  <div className="pt-4 border-t border-muted">
                    <Link
                      to="/care-guide"
                      className="flex items-center justify-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors"
                    >
                      <Mail className="w-4 h-4" />
                      Talk to Care Guide
                    </Link>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-muted/30 rounded-xl p-5">
                  <h3 className="font-bold text-foreground mb-4">Need Help?</h3>
                  <div className="space-y-3">
                    <a href="tel:+919876543210" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                      <Phone className="w-4 h-4" />
                      +91 98765 43210
                    </a>
                    <a href="mailto:hello@kairali.com" className="flex items-center gap-3 text-sm text-foreground/70 hover:text-primary transition-colors">
                      <Mail className="w-4 h-4" />
                      hello@kairali.com
                    </a>
                  </div>
                </div>

                {/* Similar Centres */}
                <div className="bg-white border border-muted/50 rounded-xl p-5">
                  <h3 className="font-bold text-foreground mb-4">Similar Centres</h3>
                  <div className="space-y-3">
                    <Link to="/centre/2" className="block group">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        Somatheeram Resort
                      </div>
                      <div className="text-xs text-foreground/60">Kovalam, Kerala</div>
                    </Link>
                    <Link to="/centre/4" className="block group">
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        Kalari Kovilakom
                      </div>
                      <div className="text-xs text-foreground/60">Palakkad, Kerala</div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <LoginModal isOpen={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </PageLayout>
  );
}