import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { EnquiryPage } from './EnquiryPage';
import { Award, Brain, CheckCircle2, Heart, Sparkles } from 'lucide-react';

const trustedCompanies = [
  {
    name: 'Oceaniek Technology',
    industry: 'Technology',
    imageSrc: '/oceaniektechnologies.png',
  },
  {
    name: 'Punjab Ports',
    industry: 'Food industry',
    imageSrc: '/PunjabPortLogo.png',
  },
  {
    name: 'Chandighar Hospital',
    industry: 'Healthcare',
    imageSrc: '/chandigarhhospital.png',
  },
];

const ABOUT_IMAGE_1 = '/about/image%20(4).png';
const ABOUT_IMAGE_2 = '/about/image%20(3).png';
const ABOUT_IMAGE_3 = '/about/image%20(2).png';
const ABOUT_IMAGE_4 = '/about/image%20(1).png';
const CLIENT_TESTIMONIAL_IMAGES = [
  '/clients/WhatsApp%20Image%202026-04-01%20at%2011.40.48%20(1).jpeg',
  '/clients/WhatsApp%20Image%202026-04-01%20at%2011.40.48%20(2).jpeg',
  '/clients/WhatsApp%20Image%202026-04-01%20at%2011.40.48.jpeg',
  '/clients/WhatsApp%20Image%202026-04-01%20at%2011.40.49%20(1).jpeg',
  '/clients/WhatsApp%20Image%202026-04-01%20at%2011.40.49%20(2).jpeg',
  '/clients/WhatsApp%20Image%202026-04-01%20at%2011.40.49.jpeg',
];

type InfoSection = {
  key: string;
  badge: string;
  title: string;
  description: string;
  bullets?: string[];
  imageSrc: string;
  imageAlt: string;
  reverseOnDesktop?: boolean;
  icon: React.ComponentType<{ className?: string }>;
};

const iconForSection: InfoSection[] = [
  {
    key: 'healing',
    badge: 'Our Story',
    title: 'What is Healing Groove?',
    description:
      'The Healing Groove is a global wellness tourism facilitator and wellness corporate session provider, dedicated to connecting patients with high-quality healthcare and transformative healing experiences worldwide. We believe healing goes beyond medicine: it begins with trust, compassion, and human connection. Guided by the philosophy "Vasudhaiva Kutumbakam" (the world is one family), we ensure every patient feels supported, respected, and cared for.',
    bullets: [
      'Founded with world-class traditional medicine and sessions',
      'Designed for better wellbeing, increased productivity, and burnout reduction',
    ],
    imageSrc: ABOUT_IMAGE_1,
    imageAlt: 'Healing Groove wellness experience',
    icon: Heart,
  },
  {
    key: 'team',
    badge: 'Workplace Wellness',
    title: 'Your Team Deserves Better',
    description:
      'Is workplace stress silently draining your organization’s potential? Nearly four out of five employees are experiencing work-related stress right now, leading to burnout, disengagement, and costly turnover. This costs your organization through lost productivity, increased healthcare expenses, and the constant cycle of recruiting and retraining talent.',
    bullets: [
      'Lost productivity and higher healthcare expenses',
      'The constant cycle of recruiting and retraining',
    ],
    imageSrc: ABOUT_IMAGE_2,
    imageAlt: 'People connecting and learning together',
    reverseOnDesktop: true,
    icon: Brain,
  },
  {
    key: 'program',
    badge: 'Custom Programs',
    title: 'Your Custom Wellness Program',
    description:
      'Create a personalized wellness journey designed around your unique health goals, lifestyle, and preferences. Our custom wellness program integrates holistic therapies like Nadi Pariksha, Ayurveda consultation, Sound healing, Reiki healing, yoga and meditation sessions to restore balance and improve overall wellbeing. Whether you seek burnout relief, recovery support, or long-term productivity, we tailor every element to suit your needs. With expert guidance and continuous support, you’ll experience a transformative path that nurtures your body, mind, and spirit.',
    bullets: [
      'Nadi Pariksha',
      'Ayurveda consultation',
      'Sound healing & Reiki healing',
      'Yoga & meditation',
    ],
    imageSrc: ABOUT_IMAGE_3,
    imageAlt: 'Traditional therapies and wellness',
    icon: Sparkles,
  },
  {
    key: 'impact',
    badge: 'Measurable Outcomes',
    title: 'Your Measurable Impact',
    description:
      'Your employee satisfaction will reach 95% as stress drops by 40% and team collaboration strengthens across all departments. Your productivity gains average 30% while your employees report 65% more energy throughout their workday, translating directly to better performance. Perhaps most telling: 92% of participants recommend this program to other organizations, proving it delivers real value.',
    imageSrc: ABOUT_IMAGE_4,
    imageAlt: 'Corporate wellness retreat and outcomes',
    reverseOnDesktop: true,
    icon: Award,
  },
];

export function AboutPage() {
  const sections = iconForSection;
  const loopingTestimonials = [...CLIENT_TESTIMONIAL_IMAGES, ...CLIENT_TESTIMONIAL_IMAGES];
  const mobileCarouselRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const carousel = mobileCarouselRef.current;
    if (!carousel) return;

    const runAutoLoop = () => {
      if (window.innerWidth >= 768) return;
      const firstCard = carousel.querySelector('div > div') as HTMLDivElement | null;
      if (!firstCard) return;

      const styles = window.getComputedStyle(carousel.firstElementChild as Element);
      const gap = parseFloat(styles.columnGap || styles.gap || '16');
      const step = firstCard.offsetWidth + gap;
      const maxLeft = carousel.scrollWidth - carousel.clientWidth;
      const next = carousel.scrollLeft + step;

      if (next >= maxLeft - 4) {
        carousel.scrollTo({ left: 0, behavior: 'smooth' });
      } else {
        carousel.scrollTo({ left: next, behavior: 'smooth' });
      }
    };

    const intervalId = window.setInterval(runAutoLoop, 2600);
    return () => window.clearInterval(intervalId);
  }, []);

  return (
    <PageLayout>
      <div className="bg-white">
        {/* Page header */}
        <div className="relative overflow-hidden bg-[url('/about-bg.jpg')] bg-cover bg-center">
          <div className="max-w-7xl mx-auto px-6 py-16 lg:py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">About</span>
              </div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-4">
                About The Healing Groove
              </h1>
              <p className="text-xl text-foreground/70 leading-relaxed">
                Healing goes beyond medicine. We connect people with authentic healing experiences and corporate wellness sessions
                built for trust, balance, and measurable wellbeing.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="/TheHealingGroove.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-primary text-white font-semibold hover:bg-primary/90 transition-all shadow-lg shadow-primary/20"
                >
                  Get Your Quote
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-xl border-2 border-primary text-primary font-semibold hover:bg-primary/5 transition-all"
                >
                  Contact us
                </a>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Alternating text + image sections */}
        {sections.slice(0, 2).map((section, idx) => (
          <div key={section.key} className={idx % 2 === 0 ? 'py-16 lg:py-20 bg-white' : 'py-16 lg:py-20 bg-muted/10'}>
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: section.reverseOnDesktop ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={section.reverseOnDesktop ? 'lg:order-2' : undefined}
                >
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-5 w-fit border border-primary/10">
                    <section.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{section.badge}</span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-6">{section.description}</p>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-foreground/70">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: section.reverseOnDesktop ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={section.reverseOnDesktop ? 'lg:order-1' : undefined}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="w-full h-[320px] lg:h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        {/* Trusted by Leading Organizations (from Corporate page) */}
        <div className="py-16 bg-muted/30 border-y border-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
              transition={{ duration: 0.5 }}
            >
              <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
                Trusted by Leading Organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-8">
              {trustedCompanies.map((company, index) => (
                <motion.div
                  key={company.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-muted/30 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="relative w-full flex items-center justify-center mb-3">
                    <img
                      src={company.imageSrc}
                      alt={company.name}
                      className="max-h-14 w-auto object-contain"
                    />
                  </div>
                  <div className="text-base font-bold text-foreground mb-1 text-center">{company.name}</div>
                  <div className="text-xs text-foreground/50 text-center">{company.industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What Our Clients Say */}
        <div className="py-16 lg:py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">What Our Clients Say</span>
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-3">
                Our Testimonials
              </h2>
              <p className="text-lg text-foreground/60 max-w-3xl mx-auto">
                Real voices from people who experienced our healing sessions.
              </p>
            </motion.div>

            {/* Mobile: swipe carousel */}
            <div
              ref={mobileCarouselRef}
              className="md:hidden overflow-x-auto scrollbar-hide snap-x snap-mandatory -mx-2 px-2"
            >
              <div className="flex gap-4 pb-2">
                {CLIENT_TESTIMONIAL_IMAGES.map((imageSrc, index) => (
                  <motion.div
                    key={`mobile-${imageSrc}`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.35, delay: index * 0.03 }}
                    className="snap-center shrink-0 w-[88vw] max-w-[360px] rounded-xl overflow-hidden border border-muted/40"
                  >
                    <img
                      src={imageSrc}
                      alt={`Client testimonial ${index + 1}`}
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tablet/Desktop: auto-looping strip */}
            <div className="relative hidden md:block">
              <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-10 lg:w-12 bg-gradient-to-r from-white to-transparent z-10" />
              <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 lg:w-12 bg-gradient-to-l from-white to-transparent z-10" />

              <div className="overflow-hidden px-8 lg:px-10">
                <div className="testimonial-marquee-track flex gap-6 pb-2 w-max">
                  {loopingTestimonials.map((imageSrc, index) => (
                    <motion.div
                      key={`${imageSrc}-${index}`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.45, delay: index * 0.03 }}
                      className="shrink-0 w-[280px] lg:w-[320px] overflow-hidden rounded-xl border border-muted/40"
                    >
                      <img
                        src={imageSrc}
                        alt={`Client testimonial ${(index % CLIENT_TESTIMONIAL_IMAGES.length) + 1}`}
                        className="w-full h-full object-cover"
                        loading="lazy"
                      />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Remaining sections */}
        {sections.slice(2).map((section, idx) => (
          <div
            key={section.key}
            className={idx % 2 === 0 ? 'py-16 lg:py-20 bg-white' : 'py-16 lg:py-20 bg-muted/10'}
          >
            <div className="max-w-7xl mx-auto px-6">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: section.reverseOnDesktop ? 30 : -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className={section.reverseOnDesktop ? 'lg:order-2' : undefined}
                >
                  <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-5 w-fit border border-primary/10">
                    <section.icon className="w-4 h-4 text-primary" />
                    <span className="text-sm font-semibold text-primary">{section.badge}</span>
                  </div>

                  <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-4">{section.title}</h2>
                  <p className="text-foreground/70 leading-relaxed text-lg mb-6">{section.description}</p>

                  {section.bullets && section.bullets.length > 0 && (
                    <ul className="space-y-3">
                      {section.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3 text-foreground/70">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: section.reverseOnDesktop ? -30 : 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className={section.reverseOnDesktop ? 'lg:order-1' : undefined}
                >
                  <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      className="w-full h-[320px] lg:h-[420px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        ))}

        <section
          id="contact"
          className="scroll-mt-24 border-t border-muted/40 bg-muted/10 py-10 lg:py-14"
          aria-label="Contact"
        >
          <EnquiryPage
            embedded
            retreatIdOverride="general"
            variant="connect"
            showBackButton={false}
            subjectPrefix="New Healing Groove Enquiry from"
            topHeading="Connect With Us"
            topDescription="Whether you're planning a wellness program or seeking guidance, share your details and we'll respond within 24 hours."
            contactInfo={{
              phone: '8427775621',
              officialEmail: 'info@thehealinggroove.com',
              alternateEmail: 'chetnahealinggroove@gmail.com',
              linkedinUrl: 'https://www.linkedin.com/company/the-healing-groove/',
              twitterUrl: 'https://x.com/HealingGroove',
              instagramUrl:
                'https://www.instagram.com/the_healing_groove?igsh=ajVnMHV5NmZ3cDQ0&utm_source=qr',
            }}
          />
        </section>
      </div>
    </PageLayout>
  );
}

