import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Upload, CheckCircle } from 'lucide-react';
import React from 'react';
export function PartnerRegisterPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    centreName: '',
    ownerName: '',
    email: '',
    phone: '',
    location: '',
    yearsOperating: '',
    specialties: '',
    doctorCount: '',
    bamsCertified: false,
    englishSpeaking: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate('/confirmation', { state: { type: 'partner', ...formData } });
  };

  return (
    <PageLayout>
      <div className="bg-gradient-to-b from-primary/5 to-white py-12">
        <div className="max-w-3xl mx-auto px-6">
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">
              Register Your Wellness Centre
            </h1>
            <p className="text-foreground/60">
              Join our network of verified centres and connect with international travelers
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Centre Information */}
            <div className="bg-white rounded-xl border border-muted/50 p-6">
              <h3 className="font-bold text-foreground mb-4">Centre Information</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Centre Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.centreName}
                    onChange={(e) => setFormData({...formData, centreName: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Kairali Ayurvedic Healing Village"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Location (City, State) *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.location}
                      onChange={(e) => setFormData({...formData, location: e.target.value})}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="Palakkad, Kerala"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-foreground mb-2">
                      Years Operating *
                    </label>
                    <input
                      type="number"
                      required
                      value={formData.yearsOperating}
                      onChange={(e) => setFormData({...formData, yearsOperating: e.target.value})}
                      className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                      placeholder="10"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Specialties *
                  </label>
                  <textarea
                    required
                    value={formData.specialties}
                    onChange={(e) => setFormData({...formData, specialties: e.target.value})}
                    rows={3}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 resize-none"
                    placeholder="E.g., Panchakarma, Stress Management, Pain Relief, etc."
                  />
                </div>
              </div>
            </div>

            {/* Contact Person */}
            <div className="bg-white rounded-xl border border-muted/50 p-6">
              <h3 className="font-bold text-foreground mb-4">Contact Person</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.ownerName}
                    onChange={(e) => setFormData({...formData, ownerName: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="Dr. Suresh Kumar"
                  />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
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
                      placeholder="contact@centre.com"
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
                      placeholder="+91 98765 43210"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Qualifications */}
            <div className="bg-white rounded-xl border border-muted/50 p-6">
              <h3 className="font-bold text-foreground mb-4">Qualifications</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Number of BAMS-Certified Doctors *
                  </label>
                  <input
                    type="number"
                    required
                    value={formData.doctorCount}
                    onChange={(e) => setFormData({...formData, doctorCount: e.target.value})}
                    className="w-full px-4 py-3 border border-muted rounded-lg focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                    placeholder="3"
                  />
                </div>
                <div className="space-y-3">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.bamsCertified}
                      onChange={(e) => setFormData({...formData, bamsCertified: e.target.checked})}
                      className="mt-1 rounded border-muted"
                    />
                    <div>
                      <div className="font-semibold text-foreground">All doctors are BAMS certified</div>
                      <div className="text-sm text-foreground/60">
                        And registered with Ministry of AYUSH
                      </div>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData.englishSpeaking}
                      onChange={(e) => setFormData({...formData, englishSpeaking: e.target.checked})}
                      className="mt-1 rounded border-muted"
                    />
                    <div>
                      <div className="font-semibold text-foreground">English-speaking staff available</div>
                      <div className="text-sm text-foreground/60">
                        Doctors and key staff fluent in English
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Documents */}
            <div className="bg-white rounded-xl border border-muted/50 p-6">
              <h3 className="font-bold text-foreground mb-4">Documents (Optional)</h3>
              <p className="text-sm text-foreground/60 mb-4">
                Upload certificates, photos, or any credentials now, or we'll collect them during verification
              </p>
              <button
                type="button"
                className="flex items-center gap-2 px-4 py-3 border-2 border-dashed border-muted hover:border-primary rounded-lg transition-all font-medium"
              >
                <Upload className="w-5 h-5" />
                Upload Documents
              </button>
            </div>

            {/* Submit */}
            <div className="bg-primary/5 rounded-xl p-6 border border-primary/20">
              <div className="flex items-start gap-3 mb-4">
                <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <div className="text-sm text-foreground/70">
                  By submitting, you agree to our verification process. We'll contact you within 48 hours to schedule an in-person audit. No fees until you're live on the platform.
                </div>
              </div>
              <button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-primary to-accent hover:from-primary/90 hover:to-accent/90 text-white rounded-lg font-bold transition-all text-lg"
              >
                Submit Application
              </button>
            </div>
          </form>
        </div>
      </div>
    </PageLayout>
  );
}