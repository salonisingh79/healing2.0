import { Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Users, TrendingUp, Shield, Globe, CheckCircle, ArrowRight } from 'lucide-react';
import React from 'react';
export function ForCentresPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white">
        
        {/* Hero */}
        <div className="bg-gradient-to-r from-primary/10 to-accent/10 py-16">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              Partner With Us
            </h1>
            <p className="text-xl text-foreground/70 mb-8">
              Connect with international travelers seeking authentic Ayurvedic wellness experiences
            </p>
            <Link
              to="/partner-register"
              className="inline-block px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-bold transition-all text-lg"
            >
              Register Your Centre
            </Link>
          </div>
        </div>

        {/* Why Partner */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Why Join The Healing Groove?
          </h2>

          <div className="grid sm:grid-cols-2 gap-8">
            <div className="bg-white rounded-xl p-8 border border-muted/50">
              <Users className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Reach International Guests
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We bring you qualified, international travelers actively seeking authentic Ayurvedic experiences. No more relying on word-of-mouth or expensive advertising.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-muted/50">
              <TrendingUp className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Fill Your Calendar
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                Our care guides match the right travelers with your specialties, ensuring consistent bookings year-round with guests who value what you offer.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-muted/50">
              <Shield className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Quality Over Quantity
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We pre-screen travelers and set clear expectations, so you receive serious, committed guests who understand and respect the Ayurvedic process.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 border border-muted/50">
              <Globe className="w-12 h-12 text-primary mb-4" />
              <h3 className="text-xl font-bold text-foreground mb-3">
                Marketing Support
              </h3>
              <p className="text-foreground/70 leading-relaxed">
                We handle marketing, booking management, and guest communication in English—so you can focus on what you do best: healing.
              </p>
            </div>
          </div>
        </div>

        {/* What We Look For */}
        <div className="bg-gradient-to-b from-white to-muted/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What We Look For in Partners
            </h2>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <CheckCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">Qualified Doctors</h3>
                <p className="text-sm text-foreground/70">
                  BAMS-certified Ayurvedic physicians registered with Ministry of AYUSH
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <CheckCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">Clean Facilities</h3>
                <p className="text-sm text-foreground/70">
                  Well-maintained premises meeting hygiene and safety standards
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <CheckCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">English Communication</h3>
                <p className="text-sm text-foreground/70">
                  Staff and doctors fluent in English for clear guest interaction
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <CheckCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">Transparent Pricing</h3>
                <p className="text-sm text-foreground/70">
                  Clear, upfront pricing with no hidden costs or surprise charges
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <CheckCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">Guest-Centric Approach</h3>
                <p className="text-sm text-foreground/70">
                  Commitment to personalized care and positive guest experiences
                </p>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <CheckCircle className="w-8 h-8 text-accent mb-3" />
                <h3 className="font-bold text-foreground mb-2">Professional Operations</h3>
                <p className="text-sm text-foreground/70">
                  Reliable booking management, clear policies, responsive communication
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Process */}
        <div className="max-w-5xl mx-auto px-6 py-16">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            How It Works
          </h2>

          <div className="space-y-8">
            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                1
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Submit Application</h3>
                <p className="text-foreground/70">
                  Fill out our partnership form with your centre details, credentials, and specialties
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                2
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Verification Visit</h3>
                <p className="text-foreground/70">
                  Our team conducts an in-person audit of facilities, meets doctors, reviews credentials
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                3
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Listing Creation</h3>
                <p className="text-foreground/70">
                  We photograph your centre, write compelling descriptions, and create your profile
                </p>
              </div>
            </div>

            <div className="flex gap-6 items-start">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                4
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground mb-2">Start Receiving Bookings</h3>
                <p className="text-foreground/70">
                  Go live on our platform and begin welcoming qualified international guests
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="bg-gradient-to-b from-white to-muted/30 py-16">
          <div className="max-w-5xl mx-auto px-6">
            <h2 className="text-3xl font-bold text-foreground text-center mb-12">
              What Partner Centres Say
            </h2>

            <div className="grid sm:grid-cols-2 gap-8">
              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <p className="text-foreground/70 italic mb-4">
                  "The Healing Groove brings us serious, well-informed international guests. Their care guides do excellent pre-screening, so travelers arrive with realistic expectations and genuine commitment to the healing process."
                </p>
                <div className="font-semibold text-foreground">Dr. Suresh Kumar</div>
                <div className="text-sm text-foreground/60">Kairali Ayurvedic Healing Village, Kerala</div>
              </div>

              <div className="bg-white rounded-xl p-6 border border-muted/50">
                <p className="text-foreground/70 italic mb-4">
                  "We used to spend heavily on online advertising with mixed results. Now, The Healing Groove handles marketing and booking coordination, allowing us to focus on patient care. Our occupancy has increased by 40%."
                </p>
                <div className="font-semibold text-foreground">Priya Menon</div>
                <div className="text-sm text-foreground/60">SwaSwara Wellness Retreat, Karnataka</div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-3xl mx-auto px-6 py-16 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Ready to Partner?
          </h2>
          <p className="text-foreground/60 mb-8">
            Join our network of verified wellness centres and connect with travelers seeking authentic healing
          </p>
          <Link
            to="/partner-register"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-bold transition-all text-lg"
          >
            Register Your Centre
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </PageLayout>
  );
}