import { useState } from 'react';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { MessageCircle, Phone, Mail, Clock, Globe, Star, CheckCircle } from 'lucide-react';
import { ChatInterface } from '../components/ChatInterface';
import React from 'react';
export function CareGuidePage() {
  const [isChatOpen, setIsChatOpen] = useState(false);

  const guides = [
    {
      name: 'Ananya Sharma',
      role: 'Senior Care Guide',
      experience: '5+ years',
      languages: ['English', 'Hindi', 'French'],
      expertise: ['First-time travelers', 'Stress & burnout', 'Luxury wellness'],
      availability: 'Available now',
      rating: 4.9,
      reviews: 890,
      image: 'A'
    },
    {
      name: 'Priya Menon',
      role: 'Wellness Specialist',
      experience: '4+ years',
      languages: ['English', 'Malayalam', 'German'],
      expertise: ['Panchakarma', 'Chronic pain', 'Kerala centres'],
      availability: 'Available now',
      rating: 4.8,
      reviews: 654,
      image: 'P'
    },
    {
      name: 'Rahul Verma',
      role: 'Care Guide',
      experience: '3+ years',
      languages: ['English', 'Hindi', 'Spanish'],
      expertise: ['Yoga retreats', 'Rishikesh', 'Budget planning'],
      availability: 'Returns in 2 hours',
      rating: 4.9,
      reviews: 432,
      image: 'R'
    }
  ];

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Talk to a Care Guide
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Get personalized guidance from wellness experts who understand your journey
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/70">Free consultation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/70">No pressure to book</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-accent" />
                <span className="text-foreground/70">Available 7 days a week</span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Contact Bar */}
        <div className="max-w-5xl mx-auto px-6 -mt-8">
          <div className="bg-white rounded-xl shadow-xl border border-muted/50 p-6">
            <div className="grid sm:grid-cols-3 gap-4">
              <button
                onClick={() => setIsChatOpen(true)}
                className="flex items-center justify-center gap-3 p-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-semibold transition-all"
              >
                <MessageCircle className="w-5 h-5" />
                Start Live Chat
              </button>
              <a
                href="tel:+919876543210"
                className="flex items-center justify-center gap-3 p-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all"
              >
                <Phone className="w-5 h-5" />
                Call Now
              </a>
              <a
                href="mailto:hello@thehealinggroove.com"
                className="flex items-center justify-center gap-3 p-4 border-2 border-primary text-primary hover:bg-primary/5 rounded-lg font-semibold transition-all"
              >
                <Mail className="w-5 h-5" />
                Email Us
              </a>
            </div>
          </div>
        </div>

        {/* Care Guides */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Meet Our Care Guides
            </h2>
            <p className="text-foreground/60">
              Real people committed to finding your perfect wellness experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {guides.map((guide, idx) => (
              <div key={idx} className="bg-white rounded-xl border border-muted/50 p-6 hover:shadow-lg transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="relative">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl">
                      {guide.image}
                    </div>
                    {guide.availability === 'Available now' && (
                      <div className="absolute bottom-0 right-0 w-5 h-5 bg-green-500 rounded-full border-2 border-white"></div>
                    )}
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground">{guide.name}</h3>
                    <p className="text-sm text-foreground/60">{guide.role}</p>
                  </div>
                </div>

                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-2 text-sm">
                    <Clock className="w-4 h-4 text-primary" />
                    <span className={guide.availability === 'Available now' ? 'text-accent font-semibold' : 'text-foreground/60'}>
                      {guide.availability}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Globe className="w-4 h-4 text-primary" />
                    <span className="text-foreground/60">{guide.languages.join(', ')}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Star className="w-4 h-4 fill-primary text-primary" />
                    <span className="text-foreground">
                      <strong>{guide.rating}</strong> <span className="text-foreground/60">({guide.reviews} reviews)</span>
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <div className="text-xs font-semibold text-foreground/60 mb-2">EXPERTISE:</div>
                  <div className="flex flex-wrap gap-2">
                    {guide.expertise.map((exp, i) => (
                      <span key={i} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full">
                        {exp}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  onClick={() => setIsChatOpen(true)}
                  className="w-full py-2.5 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all text-sm"
                  disabled={guide.availability !== 'Available now'}
                >
                  {guide.availability === 'Available now' ? 'Chat Now' : 'Notify When Available'}
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* How It Works */}
        <div className="bg-gradient-to-b from-white to-muted/30 py-16">
          <div className="max-w-4xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              How Care Guides Help
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">
                  1
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Understand Your Goals
                </h3>
                <p className="text-sm text-foreground/70">
                  We listen to your wellness concerns, lifestyle, and what you hope to achieve through Ayurveda.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">
                  2
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Personalized Recommendations
                </h3>
                <p className="text-sm text-foreground/70">
                  Based on your needs, we suggest the best centres, programs, and timing for your journey.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">
                  3
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Handle All Coordination
                </h3>
                <p className="text-sm text-foreground/70">
                  We manage booking, pre-arrival questions, dietary requirements, and any special requests.
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-xl mb-4">
                  4
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">
                  Support During Stay
                </h3>
                <p className="text-sm text-foreground/70">
                  We're available during your retreat if you need anything or have questions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="max-w-3xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Common Questions
          </h2>

          <div className="space-y-4">
            <details className="bg-white rounded-xl border border-muted/50 p-5">
              <summary className="font-semibold text-foreground cursor-pointer">
                Is the consultation really free?
              </summary>
              <p className="text-sm text-foreground/70 mt-3">
                Yes! We make money through partnerships with wellness centres, not from travelers. Our goal is to help you find the right fit.
              </p>
            </details>

            <details className="bg-white rounded-xl border border-muted/50 p-5">
              <summary className="font-semibold text-foreground cursor-pointer">
                Do I have to book through you?
              </summary>
              <p className="text-sm text-foreground/70 mt-3">
                No pressure at all. Many travelers use us for advice and then book independently. We're here to help, not to push.
              </p>
            </details>

            <details className="bg-white rounded-xl border border-muted/50 p-5">
              <summary className="font-semibold text-foreground cursor-pointer">
                What if I'm not sure what I need?
              </summary>
              <p className="text-sm text-foreground/70 mt-3">
                That's exactly why we exist! Most first-timers feel overwhelmed. We'll ask the right questions to guide you to what matches your needs.
              </p>
            </details>

            <details className="bg-white rounded-xl border border-muted/50 p-5">
              <summary className="font-semibold text-foreground cursor-pointer">
                What are your working hours?
              </summary>
              <p className="text-sm text-foreground/70 mt-3">
                9am - 8pm IST, Monday to Saturday. For urgent queries on Sunday, email us and we'll respond within 24 hours.
              </p>
            </details>
          </div>
        </div>
      </div>

      {/* Chat Interface */}
      <ChatInterface 
        isOpen={isChatOpen}
        onClose={() => setIsChatOpen(false)}
        onMinimize={() => setIsChatOpen(false)}
      />
    </PageLayout>
  );
}