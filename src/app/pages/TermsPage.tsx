import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import React from 'react';
export function TermsPage() {
  return (
    <PageLayout>
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-foreground/60 mb-12">Last updated: February 4, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Acceptance of Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                By accessing and using The Healing Groove platform, you accept and agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. Our Role</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Healing Groove acts as a booking platform and facilitator between travelers and wellness centres. We verify centres and provide support, but we are not medical practitioners. All medical treatments are provided directly by the wellness centres and their qualified doctors.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Bookings and Payments</h2>
              <p className="text-foreground/70 leading-relaxed">
                When you make a booking through our platform, you enter into a direct agreement with the wellness centre. Payment terms, cancellation policies, and refund conditions are specific to each centre and will be clearly communicated before confirmation.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Cancellation Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                Most centres offer free cancellation up to 14 days before your arrival date. Specific cancellation terms vary by centre and will be confirmed with your booking. Cancellations made within the restricted period may incur fees as determined by the wellness centre.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Medical Disclaimer</h2>
              <p className="text-foreground/70 leading-relaxed">
                Ayurvedic treatments are provided by qualified doctors at partner centres. Results vary by individual. We recommend consulting your primary physician before beginning any wellness program, especially if you have existing medical conditions. The Healing Groove is not liable for treatment outcomes.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. User Conduct</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                You agree to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Provide accurate information in all communications</li>
                <li>Treat wellness centre staff and other guests with respect</li>
                <li>Follow centre rules and treatment protocols</li>
                <li>Disclose relevant medical history to treating doctors</li>
                <li>Not misuse or abuse our platform or services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Reviews and Content</h2>
              <p className="text-foreground/70 leading-relaxed">
                Reviews and testimonials published on our platform are from verified guests. By submitting a review, you grant us permission to publish your feedback. We reserve the right to moderate content for appropriateness.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">8. Limitation of Liability</h2>
              <p className="text-foreground/70 leading-relaxed">
                The Healing Groove provides a platform service. We are not liable for acts, errors, omissions, representations, warranties, or negligence of wellness centres. We do not guarantee specific treatment outcomes or travel arrangements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">9. Changes to Terms</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may modify these terms at any time. Continued use of our platform after changes constitutes acceptance of the updated terms. We will notify users of significant changes via email.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">10. Contact</h2>
              <p className="text-foreground/70 leading-relaxed">
                For questions about these Terms of Service, contact us at:
              </p>
              <p className="text-foreground/70 leading-relaxed mt-3">
                Email: legal@thehealinggroove.com<br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}