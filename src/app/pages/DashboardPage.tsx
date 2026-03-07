import { Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Heart, MessageCircle, FileText, Calendar, ChevronRight } from 'lucide-react';
import React from 'react';
export function DashboardPage() {
  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white py-12">
        <div className="max-w-6xl mx-auto px-6">
          
          <h1 className="text-4xl font-bold text-foreground mb-8">My Dashboard</h1>

          <div className="grid lg:grid-cols-3 gap-8">
            
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Active Enquiries */}
              <div className="bg-white rounded-xl border border-muted/50 p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Active Enquiries</h2>
                
                <div className="space-y-4">
                  <div className="border border-muted rounded-lg p-5">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="font-bold text-foreground mb-1">Kairali Ayurvedic Healing Village</h3>
                        <p className="text-sm text-foreground/60">14 days • Starting Apr 15, 2026</p>
                      </div>
                      <span className="text-xs px-3 py-1.5 bg-accent/10 text-accent rounded-full font-semibold">
                        In Progress
                      </span>
                    </div>
                    <p className="text-sm text-foreground/70 mb-4">
                      Your care guide Ananya is coordinating with the centre. You'll receive confirmation within 24 hours.
                    </p>
                    <div className="flex gap-3">
                      <Link
                        to="/care-guide"
                        className="px-4 py-2 bg-primary hover:bg-primary/90 text-white rounded-lg text-sm font-semibold transition-all"
                      >
                        Message Ananya
                      </Link>
                      <button className="px-4 py-2 border border-muted text-foreground hover:bg-muted/50 rounded-lg text-sm font-semibold transition-all">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* Past Bookings */}
              <div className="bg-white rounded-xl border border-muted/50 p-6">
                <h2 className="text-2xl font-bold text-foreground mb-4">Past Bookings</h2>
                <p className="text-sm text-foreground/60">
                  No past bookings yet. Start exploring wellness centres!
                </p>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              
              {/* Saved Centres */}
              <div className="bg-white rounded-xl border border-muted/50 p-6">
                <div className="flex items-center gap-2 mb-4">
                  <Heart className="w-5 h-5 text-primary" />
                  <h3 className="font-bold text-foreground">Saved Centres</h3>
                </div>
                <div className="space-y-3">
                  <Link to="/centre/1" className="block group">
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Kairali Healing Village
                    </div>
                    <div className="text-xs text-foreground/60">Kerala</div>
                  </Link>
                  <Link to="/centre/3" className="block group">
                    <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                      Ananda in the Himalayas
                    </div>
                    <div className="text-xs text-foreground/60">Uttarakhand</div>
                  </Link>
                </div>
                <Link
                  to="/search"
                  className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary/80 transition-colors mt-4"
                >
                  Explore More
                  <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Quick Actions */}
              <div className="bg-white rounded-xl border border-muted/50 p-6">
                <h3 className="font-bold text-foreground mb-4">Quick Actions</h3>
                <div className="space-y-3">
                  <Link
                    to="/search"
                    className="flex items-center gap-3 p-3 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all"
                  >
                    <Calendar className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Find a Centre</span>
                  </Link>
                  <Link
                    to="/care-guide"
                    className="flex items-center gap-3 p-3 bg-muted/30 hover:bg-muted/50 rounded-lg transition-all"
                  >
                    <MessageCircle className="w-5 h-5 text-primary" />
                    <span className="text-sm font-medium">Talk to Guide</span>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}