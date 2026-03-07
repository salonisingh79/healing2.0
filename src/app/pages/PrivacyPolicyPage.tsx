import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import React from 'react';
export function PrivacyPolicyPage() {
  return (
    <PageLayout>
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground/60 mb-12">Last updated: February 4, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">1. Information We Collect</h2>
              <p className="text-foreground/70 leading-relaxed">
                We collect information you provide directly to us when you create an account, make an enquiry, or communicate with our care guides. This includes your name, email address, phone number, health information (when voluntarily provided), and booking preferences.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">2. How We Use Your Information</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                We use the information we collect to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Process your wellness centre enquiries and bookings</li>
                <li>Connect you with appropriate wellness centres and care guides</li>
                <li>Send you booking confirmations and pre-arrival information</li>
                <li>Improve our platform and services</li>
                <li>Communicate with you about your bookings and our services</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">3. Information Sharing</h2>
              <p className="text-foreground/70 leading-relaxed">
                We share your information only with wellness centres you've chosen to book with, and only the information necessary to facilitate your stay. We never sell your personal information to third parties. Your health information is shared only with the medical professionals treating you, following strict confidentiality protocols.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">4. Data Security</h2>
              <p className="text-foreground/70 leading-relaxed">
                We implement appropriate technical and organizational security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. All sensitive data is encrypted in transit and at rest.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">5. Your Rights</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Access and receive a copy of your personal data</li>
                <li>Correct inaccurate or incomplete information</li>
                <li>Request deletion of your personal data</li>
                <li>Opt-out of marketing communications</li>
                <li>Withdraw consent for data processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">6. Cookies and Tracking</h2>
              <p className="text-foreground/70 leading-relaxed">
                We use cookies and similar tracking technologies to improve your browsing experience, analyze site traffic, and personalize content. You can control cookie preferences through your browser settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">7. Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                If you have questions about this Privacy Policy or how we handle your data, please contact us at:
              </p>
              <p className="text-foreground/70 leading-relaxed mt-3">
                Email: privacy@thehealinggroove.com<br />
                Phone: +91 98765 43210
              </p>
            </section>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}