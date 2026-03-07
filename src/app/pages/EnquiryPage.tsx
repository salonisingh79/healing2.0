import { useState } from 'react';
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { ChevronLeft, Check, CheckCircle2 } from 'lucide-react';
import React from 'react';
// 🔧 REPLACE THIS WITH YOUR FORMSPREE ENDPOINT
const FORMSPREE_URL = 'https://formspree.io/f/mkovyvnq';

export function EnquiryPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const location = useLocation();
  const bookingDetails = location.state || {};

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    employees: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMsg('');

    try {
      const data = new FormData();
      data.append('firstName', formData.firstName);
      data.append('lastName', formData.lastName);
      data.append('email', formData.email);
      data.append('phone', formData.phone);
      data.append('companyName', formData.companyName);
      data.append('employees', formData.employees);
      data.append('Retreat_ID', id || '');
      data.append('Duration', bookingDetails.duration ? `${bookingDetails.duration} days` : 'N/A');
      data.append('Start_Date', bookingDetails.startDate || 'N/A');
      data.append('Price', bookingDetails.price ? `Rs. ${bookingDetails.price.toLocaleString('en-IN')}` : 'N/A');
      data.append('_subject', `New Corporate Enquiry from ${formData.firstName} ${formData.lastName}`);

      const response = await fetch(FORMSPREE_URL, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      const result = await response.json();
      console.log('Formspree response:', result);

      if (response.ok) {
        setStatus('success');
      } else {
        const msg = result?.errors?.map((err: any) => err.message).join(', ') || 'Submission failed.';
        setErrorMsg(msg);
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setErrorMsg('Network error. Please check your connection.');
      setStatus('error');
    }
  };

  // ── SUCCESS STATE ──
  if (status === 'success') {
    return (
      <PageLayout>
        <div className="bg-gradient-to-b from-primary/5 to-white min-h-[70vh] flex items-center justify-center py-12">
          <div className="max-w-md mx-auto px-6 text-center">
            <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </div>
            <h2 className="text-3xl font-bold text-foreground mb-3">Enquiry Submitted!</h2>
            <p className="text-foreground/60 mb-2 text-lg">
              Thank you, <span className="font-semibold text-foreground">{formData.firstName}</span>!
            </p>
            <p className="text-foreground/60 mb-8">
              Our wellness care guide will reach out to you at <span className="font-semibold text-foreground">{formData.email}</span> within 24 hours to discuss your booking.
            </p>
            <button
              onClick={() => navigate('/')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary hover:bg-primary/90 text-white rounded-lg font-semibold transition-all"
            >
              Back to Home
            </button>
          </div>
        </div>
      </PageLayout>
    );
  }

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          
          <button
            onClick={() => navigate(-1)}
            className="inline-flex items-center gap-2 text-sm font-medium text-primary hover:text-primary/80 transition-colors mb-6"
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <h1 className="text-4xl font-bold text-foreground mb-2">
            Share Your Details
          </h1>
          <p className="text-foreground/60 mb-8">
            Help us understand your wellness goals so we can personalize your experience
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Booking Summary */}
            {bookingDetails.duration && (
              <div className="bg-white rounded-xl border border-primary/20 p-6">
                <h3 className="font-bold text-foreground mb-3">Your Selection</h3>
                <div className="grid sm:grid-cols-3 gap-4 text-sm">
                  <div>
                    <div className="text-foreground/60 mb-1">Duration</div>
                    <div className="font-semibold">{bookingDetails.duration} days</div>
                  </div>
                  <div>
                    <div className="text-foreground/60 mb-1">Start Date</div>
                    <div className="font-semibold">{bookingDetails.startDate}</div>
                  </div>
                  <div>
                    <div className="text-foreground/60 mb-1">Price</div>
                    <div className="font-semibold text-primary">₹{bookingDetails.price?.toLocaleString('en-IN')}</div>
                  </div>
                </div>
              </div>
            )}

            {/* Personal Information */}
            <div className="bg-white rounded-xl border border-muted/50 p-6">
              <h3 className="font-bold text-foreground mb-4">Personal Information</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({...formData, firstName: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.lastName}
                    onChange={(e) => setFormData({...formData, lastName: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Doe"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="john@example.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="+1 234 567 8900"
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Company Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({...formData, companyName: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Microsoft..."
                  />
                </div>
                <div className="sm:col-span-2">
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    How many employees? *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.employees}
                    onChange={(e) => setFormData({...formData, employees: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="20, 50, 100..."
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <Check className="w-5 h-5 text-accent mt-0.5" />
                <div className="text-sm text-foreground/70">
                  By submitting, you agree that our care guide will contact you within 24 hours to discuss your booking. No payment required now.
                </div>
              </div>

              {status === 'error' && (
                <p className="text-red-500 text-sm mb-3">
                  {errorMsg || 'Something went wrong. Please try again or contact us directly.'}
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full py-4 bg-primary hover:bg-primary/90 text-white rounded-lg font-bold transition-all text-lg disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {status === 'sending' ? 'Sending...' : 'Submit Enquiry'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}