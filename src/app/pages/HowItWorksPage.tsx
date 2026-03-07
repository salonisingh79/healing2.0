import { Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Search, MessageCircle, Calendar, Plane, Heart, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
export function HowItWorksPage() {
  return (
    <PageLayout>
      <div className="bg-white">
        
        {/* Hero - Clean and Modern */}
        <div className="relative bg-gradient-to-br from-primary via-primary/90 to-accent py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)',
              backgroundSize: '40px 40px'
            }} />
          </div>
          <div className="relative max-w-4xl mx-auto px-6 text-center">
            <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm text-white rounded-full text-sm font-semibold mb-6">
              Simple. Clear. Supported.
            </div>
            <h1 className="text-5xl sm:text-6xl font-bold text-white mb-6">
              Your Journey in 5 Steps
            </h1>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              From first search to final goodbye, we're with you every step of the way
            </p>
          </div>
        </div>

        {/* Timeline Steps */}
        <div className="max-w-6xl mx-auto px-6 py-20">
          
          {/* Step 1 */}
          <div className="relative flex gap-8 pb-20">
            {/* Vertical Line */}
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                1
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
            </div>
            
            {/* Content */}
            <div className="flex-1 pt-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Search className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Explore & Compare
                  </h2>
                  <p className="text-foreground/60 text-lg">
                    Browse 42+ verified wellness centres across Kerala, Goa, Rishikesh, and more
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-2xl p-8 border border-muted/50">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      Filter by what matters
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• Wellness goals (stress, detox, rejuvenation)</li>
                      <li>• Location & scenery preferences</li>
                      <li>• Budget and duration</li>
                      <li>• Accommodation style</li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-3 flex items-center gap-2">
                      <CheckCircle className="w-5 h-5 text-accent" />
                      See everything upfront
                    </h3>
                    <ul className="space-y-2 text-sm text-foreground/70">
                      <li>• Real photos (no stock images)</li>
                      <li>• Transparent pricing</li>
                      <li>• Verified guest reviews</li>
                      <li>• Doctor credentials</li>
                    </ul>
                  </div>
                </div>
                
                <Link
                  to="/search"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-muted/20 border border-muted/50 rounded-lg font-semibold text-foreground transition-all mt-6 shadow-sm"
                >
                  Start Exploring
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative flex gap-8 pb-20">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                2
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
            </div>
            
            <div className="flex-1 pt-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Ask Questions (No Pressure)
                  </h2>
                  <p className="text-foreground/60 text-lg">
                    Connect with a Care Guide who actually answers their WhatsApp
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-accent/5 to-accent/10 rounded-2xl p-8 border border-accent/20">
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg">
                      💬
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">"Which centre is best for my health issue?"</p>
                      <p className="text-sm text-foreground/60">We know each centre's specialties and doctor expertise</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg">
                      💬
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">"Is this safe for first-timers?"</p>
                      <p className="text-sm text-foreground/60">Most of our guests are first-time Ayurveda travelers</p>
                    </div>
                  </div>
                  
                  <div className="flex gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white flex items-center justify-center text-lg">
                      💬
                    </div>
                    <div>
                      <p className="font-semibold text-foreground mb-1">"What's the difference between these two?"</p>
                      <p className="text-sm text-foreground/60">We give honest comparisons—not sales pitches</p>
                    </div>
                  </div>
                </div>
                
               
              </div>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative flex gap-8 pb-20">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                3
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
            </div>
            
            <div className="flex-1 pt-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Book Your Dates
                  </h2>
                  <p className="text-foreground/60 text-lg">
                    Lock in your spot with flexible terms (because life happens)
                  </p>
                </div>
              </div>
              
              <div className="bg-white rounded-2xl p-8 border-2 border-muted/50 shadow-sm">
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Free cancellation</p>
                        <p className="text-sm text-foreground/60">Up to 14 days before arrival</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Pay in installments</p>
                        <p className="text-sm text-foreground/60">Split payments, no extra fees</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Instant confirmation</p>
                        <p className="text-sm text-foreground/60">Get your booking details immediately</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-semibold text-foreground">Easy date changes</p>
                        <p className="text-sm text-foreground/60">Subject to availability</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 rounded-lg p-4 border border-primary/20">
                  <p className="text-sm text-foreground/70">
                    <strong className="text-foreground">What happens next:</strong> We send your details to the centre, they prepare your personalized treatment plan, and you receive everything via email within 24 hours.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Step 4 */}
          <div className="relative flex gap-8 pb-20">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                4
              </div>
              <div className="w-1 flex-1 bg-gradient-to-b from-primary/50 to-transparent mt-4" />
            </div>
            
            <div className="flex-1 pt-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Plane className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Prepare for Your Trip
                  </h2>
                  <p className="text-foreground/60 text-lg">
                    Get everything you need to arrive confident and ready
                  </p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="bg-gradient-to-r from-primary/5 to-accent/5 rounded-xl p-6 border border-muted/30">
                  <h3 className="font-bold text-foreground mb-2">You'll Receive:</h3>
                  <ul className="space-y-2 text-sm text-foreground/70">
                    <li>✓ Packing list customized for your program</li>
                    <li>✓ Airport pickup instructions & contact numbers</li>
                    <li>✓ What to expect in your first 24 hours</li>
                    <li>✓ Indian SIM card recommendations</li>
                    <li>✓ Weather forecasts & clothing tips</li>
                  </ul>
                </div>
                
                <div className="bg-accent/10 rounded-xl p-5 border border-accent/30">
                  <div className="flex gap-3">
                    <span className="text-2xl">💡</span>
                    <div>
                      <p className="font-semibold text-foreground mb-1">Pro Tip from Past Travelers:</p>
                      <p className="text-sm text-foreground/70">
                        Arrive in India 1-2 days early to adjust to the timezone. Explore the local area, settle in, and start your program feeling fresh—not jet-lagged.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div className="relative flex gap-8">
            <div className="hidden sm:flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold text-2xl shadow-lg">
                5
              </div>
            </div>
            
            <div className="flex-1 pt-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Heart className="w-6 h-6 text-primary" strokeWidth={2} />
                </div>
                <div className="flex-1">
                  <h2 className="text-3xl font-bold text-foreground mb-2">
                    Experience Your Transformation
                  </h2>
                  <p className="text-foreground/60 text-lg">
                    The part where everything comes together
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-primary via-primary/90 to-accent rounded-2xl p-8 text-white shadow-xl">
                <p className="text-lg mb-6 leading-relaxed opacity-95">
                  Daily consultations with your Ayurvedic doctor. Personalized treatments. Nourishing meals. Guided yoga and meditation. Time to rest, reflect, and genuinely reset.
                </p>
                
                <div className="bg-white/10 backdrop-blur-sm rounded-lg p-5 mb-6">
                  <p className="font-semibold mb-2">We Stay Connected:</p>
                  <p className="text-sm opacity-90">
                    Your Care Guide checks in during your stay. Need something? Have a concern? One WhatsApp away. We're your bridge between you and the centre.
                  </p>
                </div>
                
                <Link
                  to="/stories"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-white text-primary hover:bg-white/90 rounded-lg font-semibold transition-all"
                >
                  Read Real Guest Stories
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="bg-gradient-to-b from-muted/20 to-white py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">
              That's It. Simple as That.
            </h2>
            <p className="text-xl text-foreground/60 mb-10 max-w-2xl mx-auto">
              No confusing booking process. No upsells. No surprises. Just you, your wellness goals, and our support every step of the way.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/search"
                className="px-10 py-5 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-xl font-bold transition-all text-lg shadow-lg"
              >
                Start Exploring Centres
              </Link>
              
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
