import { HeroLandingUnique } from './HeroLandingUnique';
import { QuickCategories } from './QuickCategories';
import { SpecialOffers } from './SpecialOffers';
import { WellnessCentres } from './WellnessCentres';
import { WhyBookWithUs } from './WhyBookWithUs';
import { HowItWorksSimple } from './HowItWorksSimple';
import { WhyIndiaSmall } from './WhyIndiaSmall';
import { TrustSignals } from './TrustSignals';
import { TestimonialsMinimal } from './TestimonialsMinimal';
import { WhyTheHealingGroove } from './WhyTheHealingGroove';
import { FinalCTA } from './FinalCTA';
import { SeasonalBanner } from './SeasonalBanner';
import { StickySearchBar } from './StickySearchBar';
import React from 'react';
export function HomePage() {
  return (
    <>
      <StickySearchBar />
      <SeasonalBanner />
      <HeroLandingUnique />
      <QuickCategories />
      <SpecialOffers />
      <WellnessCentres />
      <WhyBookWithUs />
      <HowItWorksSimple />
      <WhyIndiaSmall />
      <TrustSignals />
      <TestimonialsMinimal />
      <WhyTheHealingGroove />
      <FinalCTA />
    </>
  );
}