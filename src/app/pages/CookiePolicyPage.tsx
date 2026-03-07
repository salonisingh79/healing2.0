import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import React from 'react';
export function CookiePolicyPage() {
  return (
    <PageLayout>
      <div className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-4xl font-bold text-foreground mb-4">Cookie Policy</h1>
          <p className="text-foreground/60 mb-12">Last updated: February 4, 2026</p>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">What Are Cookies?</h2>
              <p className="text-foreground/70 leading-relaxed">
                Cookies are small text files stored on your device when you visit our website. They help us provide a better user experience by remembering your preferences and understanding how you use our platform.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Types of Cookies We Use</h2>
              
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Essential Cookies</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Required for the platform to function. These include authentication, security, and basic functionality cookies. You cannot opt out of these cookies.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Performance Cookies</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Help us understand how visitors interact with our website by collecting anonymous usage data. This helps us improve platform performance.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Functionality Cookies</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Remember your preferences like language, location, and saved centres to provide a personalized experience.
                  </p>
                </div>

                <div>
                  <h3 className="text-lg font-bold text-foreground mb-2">Marketing Cookies</h3>
                  <p className="text-foreground/70 leading-relaxed">
                    Track your browsing across websites to show you relevant content and advertisements. You can opt out of these cookies.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">How to Manage Cookies</h2>
              <p className="text-foreground/70 leading-relaxed mb-3">
                You can control and manage cookies in several ways:
              </p>
              <ul className="list-disc list-inside text-foreground/70 space-y-2 ml-4">
                <li>Browser settings: Most browsers allow you to refuse or delete cookies</li>
                <li>Cookie preferences: Use our cookie banner to customize your preferences</li>
                <li>Opt-out tools: Use third-party opt-out mechanisms for marketing cookies</li>
              </ul>
              <p className="text-foreground/70 leading-relaxed mt-3">
                Note: Disabling certain cookies may affect platform functionality and your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Third-Party Cookies</h2>
              <p className="text-foreground/70 leading-relaxed">
                We use trusted third-party services like analytics providers that may set their own cookies. These help us understand user behavior and improve our services. Third parties are bound by their own privacy policies.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Updates to This Policy</h2>
              <p className="text-foreground/70 leading-relaxed">
                We may update this Cookie Policy periodically. Changes will be posted on this page with an updated revision date. Continued use of our platform after changes indicates acceptance.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-3">Contact Us</h2>
              <p className="text-foreground/70 leading-relaxed">
                Questions about our use of cookies? Contact us at:
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