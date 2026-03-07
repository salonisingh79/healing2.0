import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { CentreDetail } from './components/CentreDetail';
import { SearchResultsPage } from './pages/SearchResultsPage';
import { AvailabilityPage } from './pages/AvailabilityPage';
import { EnquiryPage } from './pages/EnquiryPage';
import { PaymentPage } from './pages/PaymentPage';
import { ConfirmationPage } from './pages/ConfirmationPage';
import { CareGuidePage } from './pages/CareGuidePage';
import { HowItWorksPage } from './pages/HowItWorksPage';
import { WhyIndiaPage } from './pages/WhyIndiaPage';
import { StoriesPage } from './pages/StoriesPage';
import { ForCentresPage } from './pages/ForCentresPage';
import { PartnerRegisterPage } from './pages/PartnerRegisterPage';
import { DashboardPage } from './pages/DashboardPage';
import { SignInPage } from './pages/SignInPage';
import { PrivacyPolicyPage } from './pages/PrivacyPolicyPage';
import { TermsPage } from './pages/TermsPage';
import { CookiePolicyPage } from './pages/CookiePolicyPage';
import { DestinationPage } from './pages/DestinationPage';
import { BlogPage } from './pages/BlogPage';
import { ArticlePage } from './pages/ArticlePage';
import { CorporateWellnessPage } from './pages/CorporateWellnessPage';
import { TopNavigation } from './components/TopNavigation';
import { MainFooter } from './components/MainFooter';
import { ScrollToTop } from './components/ScrollToTop';
import { AuthProvider } from './contexts/AuthContext';
import React from 'react';

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <ScrollToTop />
        <div className="min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
          <TopNavigation />
          <Routes>
            {/* Home Page - With header and footer */}
            <Route path="/" element={<><HomePage /><MainFooter /></>} />
            
            {/* Destination Pages */}
            <Route path="/destination/:destination" element={<><DestinationPage /><MainFooter /></>} />
            
            {/* Main Pages with SimplePageLayout */}
            <Route path="/search" element={<><SearchResultsPage /><MainFooter /></>} />
            <Route path="/centre/:id" element={<><CentreDetail /><MainFooter /></>} />
            <Route path="/availability/:id" element={<><AvailabilityPage /><MainFooter /></>} />
            <Route path="/enquiry/:id" element={<><EnquiryPage /><MainFooter /></>} />
            <Route path="/payment/:id" element={<><PaymentPage /><MainFooter /></>} />
            <Route path="/confirmation" element={<><ConfirmationPage /><MainFooter /></>} />
            
            {/* Information Pages */}
            <Route path="/care-guide" element={<><CareGuidePage /><MainFooter /></>} />
            <Route path="/how-it-works" element={<><HowItWorksPage /><MainFooter /></>} />
            <Route path="/why-india" element={<><WhyIndiaPage /><MainFooter /></>} />
            <Route path="/stories" element={<><StoriesPage /><MainFooter /></>} />
            
            {/* Partner Pages */}
            <Route path="/for-centres" element={<><ForCentresPage /><MainFooter /></>} />
            <Route path="/partner-register" element={<><PartnerRegisterPage /><MainFooter /></>} />
            
            {/* User Pages */}
            <Route path="/dashboard" element={<><DashboardPage /><MainFooter /></>} />
            <Route path="/signin" element={<><SignInPage /><MainFooter /></>} />
            
            {/* Legal Pages */}
            <Route path="/privacy" element={<><PrivacyPolicyPage /><MainFooter /></>} />
            <Route path="/terms" element={<><TermsPage /><MainFooter /></>} />
            <Route path="/cookies" element={<><CookiePolicyPage /><MainFooter /></>} />
            
            {/* Blog Pages */}
            <Route path="/blog" element={<><BlogPage /><MainFooter /></>} />
            <Route path="/blog/:slug" element={<><ArticlePage /><MainFooter /></>} />
            
            {/* Corporate Wellness Page */}
            <Route path="/corporate-wellness" element={<><CorporateWellnessPage /><MainFooter /></>} />
            
            {/* Legacy route */}
            <Route path="/journeys" element={<><HomePage /><MainFooter /></>} />
          </Routes>
        </div>
      </BrowserRouter>
    </AuthProvider>
  );
}