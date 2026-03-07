import { useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { ChevronLeft, ChevronRight, Calendar, Check, MapPin, Star, Info, ArrowRight } from 'lucide-react';
import React from 'react';
// Mock centre data
const centreData: Record<string, any> = {
  '1': {
    name: 'Somatheeram Ayurveda Village',
    location: 'Chowara Beach, Kerala',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1732361262604-ed2753702919?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  },
  '2': {
    name: 'Vana Wellness Retreat',
    location: 'Dehradun, Himalayan Foothills',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1766434773090-bfc6bdbf8b78?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400'
  }
};

const PACKAGES = [
  { 
    id: 1,
    name: 'Essential Wellness', 
    days: 7, 
    price: 65000,
    description: 'Introduction to Ayurveda',
    popular: false 
  },
  { 
    id: 2,
    name: 'Transformation', 
    days: 14, 
    price: 115000,
    description: 'Deep healing program',
    popular: true 
  },
  { 
    id: 3,
    name: 'Complete Detox', 
    days: 21, 
    price: 165000,
    description: 'Full healing journey',
    popular: false 
  },
];

const MONTHS = [
  'March 2026',
  'April 2026',
  'May 2026',
  'June 2026',
  'July 2026',
  'August 2026'
];

const AVAILABILITY_DATA: Record<string, Array<{ date: number; available: boolean }>> = {
  'March 2026': [
    ...Array.from({ length: 14 }, (_, i) => ({ date: i + 1, available: false })),
    ...Array.from({ length: 17 }, (_, i) => ({ date: i + 15, available: true })),
  ],
  'April 2026': [
    ...Array.from({ length: 30 }, (_, i) => ({ date: i + 1, available: true })),
  ],
  'May 2026': [
    ...Array.from({ length: 31 }, (_, i) => ({ date: i + 1, available: true })),
  ],
  'June 2026': [
    ...Array.from({ length: 30 }, (_, i) => ({ date: i + 1, available: true })),
  ],
};

export function AvailabilityPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const centre = centreData[id || '1'];
  
  const [selectedMonth, setSelectedMonth] = useState('April 2026');
  const [selectedPackage, setSelectedPackage] = useState<number>(2);
  const [selectedStartDate, setSelectedStartDate] = useState<number | null>(null);

  const handleContinue = () => {
    if (selectedStartDate && selectedPackage) {
      const pkg = PACKAGES.find(p => p.id === selectedPackage);
      navigate(`/enquiry/${id}`, {
        state: {
          duration: pkg?.days,
          startDate: `${selectedStartDate} ${selectedMonth}`,
          price: pkg?.price,
          packageName: pkg?.name
        }
      });
    }
  };

  const availability = AVAILABILITY_DATA[selectedMonth] || [];
  const selectedPkg = PACKAGES.find(p => p.id === selectedPackage);

  return (
    <PageLayout>
      <div className="bg-white min-h-screen">
        
        {/* Compact Header */}
        <div className="border-b border-muted/30 bg-white sticky top-0 z-10">
          <div className="max-w-6xl mx-auto px-4 py-4">
            <Link
              to={`/centre/${id}`}
              className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-3"
            >
              <ChevronLeft className="w-4 h-4" />
              Back to centre
            </Link>
            
            {/* Centre Info Bar */}
            <div className="flex items-center gap-4">
              <img 
                src={centre.image} 
                alt={centre.name}
                className="w-16 h-16 rounded-lg object-cover hidden sm:block"
              />
              <div className="flex-1 min-w-0">
                <h1 className="text-xl font-bold text-foreground truncate">{centre.name}</h1>
                <div className="flex items-center gap-3 text-sm text-foreground/70">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    <span className="truncate">{centre.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                    <span className="font-semibold text-foreground">{centre.rating}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content - Compact Layout */}
        <div className="max-w-6xl mx-auto px-4 py-6">
          
          <div className="grid lg:grid-cols-3 gap-6">
            
            {/* Left: Package & Date Selection */}
            <div className="lg:col-span-2 space-y-5">
              
              {/* Step 1: Package Selection - Compact */}
              <div className="bg-white rounded-xl border border-muted/30 shadow-sm">
                <div className="p-4 border-b border-muted/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                      1
                    </div>
                    <h2 className="text-lg font-bold text-foreground">Choose Package</h2>
                  </div>
                </div>
                
                <div className="p-4 space-y-2.5">
                  {PACKAGES.map((pkg) => (
                    <button
                      key={pkg.id}
                      onClick={() => setSelectedPackage(pkg.id)}
                      className={`w-full text-left p-3.5 rounded-lg border-2 transition-all ${
                        selectedPackage === pkg.id
                          ? 'border-primary bg-primary/5'
                          : 'border-muted/30 hover:border-primary/40'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="font-bold text-foreground">{pkg.name}</h3>
                            {pkg.popular && (
                              <span className="px-2 py-0.5 bg-accent text-white text-xs font-bold rounded">
                                Most Popular
                              </span>
                            )}
                          </div>
                          <p className="text-sm text-foreground/60">{pkg.days} days • {pkg.description}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <div className="text-lg font-bold text-primary">
                            ₹{pkg.price.toLocaleString('en-IN')}
                          </div>
                          <div className="text-xs text-foreground/50">total</div>
                        </div>
                        {selectedPackage === pkg.id && (
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                        )}
                      </div>
                    </button>
                  ))}
                </div>

                {/* Info Note */}
                <div className="px-4 pb-4">
                  <div className="flex gap-2 p-3 bg-blue-50 rounded-lg border border-blue-200">
                    <Info className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-xs text-blue-900">
                      All packages include accommodation, meals, treatments, yoga, and doctor consultations
                    </p>
                  </div>
                </div>
              </div>

              {/* Step 2: Date Selection - Compact Calendar */}
              <div className="bg-white rounded-xl border border-muted/30 shadow-sm">
                <div className="p-4 border-b border-muted/20">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xs">
                      2
                    </div>
                    <h2 className="text-lg font-bold text-foreground">Select Start Date</h2>
                  </div>
                </div>

                <div className="p-4">
                  {/* Compact Month Selector */}
                  <div className="flex items-center justify-between mb-3 bg-muted/20 rounded-lg p-2 max-w-sm mx-auto">
                    <button
                      onClick={() => {
                        const currentIndex = MONTHS.indexOf(selectedMonth);
                        if (currentIndex > 0) setSelectedMonth(MONTHS[currentIndex - 1]);
                      }}
                      disabled={MONTHS.indexOf(selectedMonth) === 0}
                      className="p-1 hover:bg-white rounded-md transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronLeft className="w-4 h-4" />
                    </button>
                    
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4 text-primary" />
                      <span className="text-sm font-bold text-foreground">{selectedMonth}</span>
                    </div>

                    <button
                      onClick={() => {
                        const currentIndex = MONTHS.indexOf(selectedMonth);
                        if (currentIndex < MONTHS.length - 1) setSelectedMonth(MONTHS[currentIndex + 1]);
                      }}
                      disabled={MONTHS.indexOf(selectedMonth) === MONTHS.length - 1}
                      className="p-1 hover:bg-white rounded-md transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
                    >
                      <ChevronRight className="w-4 h-4" />
                    </button>
                  </div>

                  {/* Compact Calendar Grid - Reduced Height */}
                  <div className="max-w-sm mx-auto">
                    <div className="grid grid-cols-7 gap-0.5">
                      {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                        <div key={i} className="text-center text-xs font-semibold text-foreground/50 py-0.5">
                          {day}
                        </div>
                      ))}
                      
                      {availability.map((day, idx) => (
                        <button
                          key={idx}
                          onClick={() => day.available && setSelectedStartDate(day.date)}
                          disabled={!day.available}
                          className={`h-8 w-full rounded flex items-center justify-center text-xs font-medium transition-all ${
                            selectedStartDate === day.date
                              ? 'bg-primary text-white shadow-sm'
                              : day.available
                              ? 'bg-white border border-muted/40 hover:border-primary hover:bg-primary/5'
                              : 'bg-muted/20 text-foreground/20 cursor-not-allowed'
                          }`}
                        >
                          {day.date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Compact Legend */}
                  <div className="flex justify-center gap-3 text-xs mt-2.5 pt-2.5 border-t border-muted/20">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-primary rounded"></div>
                      <span className="text-foreground/60">Selected</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white border border-muted/40 rounded"></div>
                      <span className="text-foreground/60">Available</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-muted/20 rounded"></div>
                      <span className="text-foreground/60">Unavailable</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Sticky Booking Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-24 bg-white rounded-xl border-2 border-primary/20 shadow-lg p-5">
                <h3 className="font-bold text-foreground mb-4 text-lg">Booking Summary</h3>
                
                {selectedPkg ? (
                  <div className="space-y-4">
                    {/* Package Info */}
                    <div className="pb-4 border-b border-muted/20">
                      <div className="text-sm text-foreground/60 mb-1">Package</div>
                      <div className="font-semibold text-foreground mb-1">{selectedPkg.name}</div>
                      <div className="text-sm text-foreground/70">{selectedPkg.days} days program</div>
                    </div>

                    {/* Date Info */}
                    {selectedStartDate ? (
                      <div className="pb-4 border-b border-muted/20">
                        <div className="text-sm text-foreground/60 mb-1">Start Date</div>
                        <div className="font-semibold text-foreground">
                          {selectedStartDate} {selectedMonth}
                        </div>
                      </div>
                    ) : (
                      <div className="pb-4 border-b border-muted/20">
                        <div className="text-sm text-foreground/60">Please select a start date</div>
                      </div>
                    )}

                    {/* Price */}
                    <div className="pb-4 border-b border-muted/20">
                      <div className="text-sm text-foreground/60 mb-1">Total Amount</div>
                      <div className="text-3xl font-bold text-primary">
                        ₹{selectedPkg.price.toLocaleString('en-IN')}
                      </div>
                      <div className="text-xs text-foreground/50 mt-1">
                        ≈ ${Math.round(selectedPkg.price / 83).toLocaleString()}
                      </div>
                    </div>

                    {/* What's Included */}
                    <div className="pb-4">
                      <div className="text-xs font-semibold text-foreground/70 mb-2">Included:</div>
                      <ul className="text-xs text-foreground/60 space-y-1">
                        <li className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>Accommodation & meals</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>Ayurvedic treatments</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>Doctor consultations</span>
                        </li>
                        <li className="flex items-start gap-1.5">
                          <Check className="w-3 h-3 text-primary flex-shrink-0 mt-0.5" />
                          <span>Yoga & meditation</span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <button
                      onClick={handleContinue}
                      disabled={!selectedStartDate}
                      className={`w-full py-3.5 rounded-lg font-bold transition-all flex items-center justify-center gap-2 ${
                        selectedStartDate
                          ? 'bg-gradient-to-r from-primary to-accent text-white hover:shadow-lg'
                          : 'bg-muted/30 text-foreground/40 cursor-not-allowed'
                      }`}
                    >
                      Continue to Enquiry
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    {/* Help Text */}
                    <p className="text-xs text-center text-foreground/50 pt-2">
                      No payment required now
                    </p>
                  </div>
                ) : (
                  <div className="text-sm text-foreground/60 text-center py-8">
                    Select a package to continue
                  </div>
                )}
              </div>

              {/* Need Help Card */}
              <div className="mt-4 bg-gradient-to-br from-primary/5 to-accent/5 rounded-xl border border-primary/20 p-4">
                <h4 className="font-semibold text-foreground mb-2 text-sm">Need Help?</h4>
                <p className="text-xs text-foreground/70 mb-3">
                  Our wellness guides can help you choose the right package and dates.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}