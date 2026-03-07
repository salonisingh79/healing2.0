import { Link } from 'react-router-dom';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { Heart, TrendingUp, Shield, Award, CheckCircle, ArrowRight, Sparkles, Leaf, MapPin, Activity, Brain, Stethoscope, Droplets, Scale, Wind, Zap } from 'lucide-react';
import { motion } from 'motion/react';
import React from 'react';
export function WhyIndiaPage() {
  const doshas = [
    {
      name: 'Vata',
      number: '01',
      subtitle: 'Movement & Air',
      description: 'Governs movement and the nervous system',
      color: '#F5A623',
      gradientFrom: 'from-yellow-400',
      gradientTo: 'to-orange-400',
    },
    {
      name: 'Pitta',
      number: '02',
      subtitle: 'Metabolism & Fire',
      description: 'Controls metabolism and digestion',
      color: '#4ABFCF',
      gradientFrom: 'from-cyan-400',
      gradientTo: 'to-blue-400',
    },
    {
      name: 'Kapha',
      number: '03',
      subtitle: 'Structure & Earth',
      description: 'Maintains structure and immunity',
      color: '#8BC34A',
      gradientFrom: 'from-green-400',
      gradientTo: 'to-teal-500',
    }
  ];

  const ayurvedaTherapies = [
    {
      number: '01',
      name: 'Panchakarma Therapy',
      tagline: 'The Five Detoxification Procedures',
      description: 'A comprehensive five-step detoxification therapy designed to eliminate toxins from the body and restore balance.',
      procedures: [
        { name: 'Vamana', detail: 'Therapeutic emesis' },
        { name: 'Virechana', detail: 'Purgation therapy' },
        { name: 'Basti', detail: 'Medicated enema' },
        { name: 'Nasya', detail: 'Nasal cleansing' },
        { name: 'Raktamokshana', detail: 'Blood purification' },
      ],
      icon: Droplets,
      color: '#4ABFCF',
      image: './Ayurvedic Medicines_.jpg',
    },
    {
      number: '02',
      name: 'Chronic Disease Treatment',
      tagline: 'Root-Cause Healing for Lasting Health',
      description: 'Through traditional pulse diagnosis, Ayurveda identifies imbalances and provides customised solutions for long-standing conditions.',
      procedures: [
        { name: 'Arthritis', detail: 'Joint inflammation relief' },
        { name: 'Diabetes', detail: 'Metabolic regulation' },
        { name: 'Cholesterol', detail: 'Lipid balance' },
        { name: 'Hormonal Imbalance', detail: 'Women\'s wellness' },
      ],
      icon: Heart,
      color: '#E84855',
      image: 'https://images.unsplash.com/photo-1659353887907-000c9a92377d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      number: '03',
      name: 'Weight Loss & Metabolic Correction',
      tagline: 'Sustainable Transformation Through Satvic Diets',
      description: 'Ayurvedic weight management addresses root causes — slow metabolism, toxin accumulation, and hormonal irregularities.',
      procedures: [
        { name: 'Dosha-Specific Meal Plans', detail: 'Personalised nutrition' },
        { name: 'Herbal Fat Metabolizers', detail: 'Natural supplementation' },
        { name: 'Agni Enhancement', detail: 'Digestive fire activation' },
        { name: 'Detox Therapies', detail: 'Deep cellular cleanse' },
      ],
      icon: Scale,
      color: '#8BC34A',
      image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
    {
      number: '04',
      name: 'Stress Relief & Mental Wellness',
      tagline: 'Restore Calm in a Burnout World',
      description: 'Modern burnout has become a global pandemic. Ayurveda offers mental restoration procedures to reduce stress and regain cognitive balance.',
      procedures: [
        { name: 'Shirodhara', detail: 'Warm oil on forehead' },
        { name: 'Abhyanga', detail: 'Full-body oil massage' },
        { name: 'Herbal Adaptogens', detail: 'Nervous system support' },
        { name: 'Meditation & Pranayama', detail: 'Breathing practices' },
      ],
      icon: Brain,
      color: '#9B5DE5',
      image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
    },
  ];

  const destinations = [
    {
      name: 'Kerala',
      title: 'The Heart of Ayurveda',
      description: 'Globally recognized for its traditional Kairali Ayurveda procedures, authentic expert-led treatments and rejuvenational therapies',
      image: 'https://images.unsplash.com/photo-1621713745398-28bb5b45b223?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/destination/kerala'
    },
    {
      name: 'Rishikesh',
      title: 'The Yoga Capital of India',
      description: 'Offers Yoga teachings, workshops and yoga retreats in the laps of Himalayas',
      image: 'https://images.unsplash.com/photo-1724864814923-548d7fd5f42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/destination/rishikesh'
    },
    {
      name: 'Goa',
      title: 'Hub of Modern Ayurveda Retreats',
      description: 'Luxury Ayurveda resorts integrating wellness tourism with classical treatments',
      image: 'https://images.unsplash.com/photo-1725990075468-6af40634e012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200',
      link: '/destination/goa'
    }
  ];

  const benefits = [
    'Healing the root cause',
    'Natural and chemical-free therapies',
    'Improved immunity and vitality',
    'Enhanced digestion and metabolism',
    'Emotional resilience and mental clarity',
    'Long-term disease prevention'
  ];

  const integrationAreas = [
    { name: 'Lifestyle disorders', icon: Heart },
    { name: 'Corporate Burnout', icon: Shield },
    { name: 'Woman sexual wellness', icon: Sparkles },
    { name: 'Mental health', icon: Brain }
  ];

  return (
    <PageLayout>
      <div className="bg-white">
        
        {/* Hero with Background Image */}
        <div className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1608942025318-1191eeade556?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1600"
              alt="Himalayan landscape"
              className="w-full h-full object-cover scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
          </div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative z-10 max-w-5xl mx-auto px-6 text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full px-5 py-2 mb-8"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-white">5,000 Years of Healing Wisdom</span>
            </motion.div>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
              " The science of life "<br />
              <span className="text-primary">belongs to India</span>
            </h1>
            <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
             this isn't just wellness tourism . It's a time travel to 5000 years old healing tradition that holistically transformed lives .
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <div className="flex flex-col items-center gap-2">
              <span className="text-xs text-white/60 uppercase tracking-wider">Scroll to explore</span>
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-6 h-10 border-2 border-white/30 rounded-full flex items-start justify-center p-2"
              >
                <div className="w-1.5 h-1.5 bg-white/60 rounded-full" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Welcome Section */}
        <div className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Welcome to the Land of Ayurveda</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                India : The birthplace of Ayurveda
              </h2>
              <p className="text-xl text-foreground/70 max-w-4xl mx-auto leading-relaxed">
                Ayurveda is a holistic wellness science rooted in over 5,000 years of continuous practice in India. It is not merely a medical system; it is a complete science of life. India remains the global birthplace of authentic Ayurveda therapy, offering deeply traditional treatments administered by highly trained Ayurvedic physicians (Vaidyas).
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="relative rounded-3xl overflow-hidden shadow-2xl"
              >
                <img
                  src="./doshas.png"
                  alt="Ayurvedic consultation"
                  className="w-full h-[700px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold text-foreground mb-6">
                  What Is Ayurveda?<br />
                  <span className="text-primary">The Science of Life and Longevity</span>
                </h3>
                <p className="text-lg text-foreground/70 mb-8 leading-relaxed">
                  Ayurveda is derived from two Sanskrit words: <strong>Ayur</strong> (life) and <strong>Veda</strong> (knowledge). It is based on balancing the body's doshas. Imbalance in doshas affects the overall health of an individual. Ayurveda helps in bringing balance through holistic treatments for mind, body & spirit.
                </p>

                {/* DOSHA CIRCULAR INFOGRAPHIC */}
                <div className="relative w-full flex justify-center items-center" style={{ minHeight: 420 }}>

                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="absolute top-0 left-1/2 -translate-x-1/2 text-center"
                    style={{ width: 180 }}
                  >
                    <p className=" font-bold uppercase tracking-widest mb-1" style={{ color: doshas[0].color }}>{doshas[0].name}</p>
                    <p className="text-foreground/50 uppercase tracking-wider mb-1">{doshas[0].subtitle}</p>
                    <p className="text-foreground/60 leading-relaxed">{doshas[0].description}</p>
                  </motion.div>

                  <div className="mt-16">
                    <svg viewBox="0 0 280 280" width="280" height="280" style={{ overflow: 'visible' }}>
                      <defs>
                        <filter id="doshaShadow" x="-30%" y="-30%" width="160%" height="160%">
                          <feDropShadow dx="0" dy="3" stdDeviation="8" floodColor="#00000018" />
                        </filter>
                        <filter id="centerShadow" x="-30%" y="-30%" width="160%" height="160%">
                          <feDropShadow dx="0" dy="2" stdDeviation="6" floodColor="#00000015" />
                        </filter>
                      </defs>

                      <line x1="140" y1="140" x2="140" y2="12" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
                      <line x1="140" y1="140" x2="255" y2="242" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />
                      <line x1="140" y1="140" x2="25" y2="242" stroke="#e5e7eb" strokeWidth="1.5" strokeDasharray="4 3" />

                      <path d="M 75,87 A 85,85 0 0,1 205,87 L 140,140 Z" fill={doshas[0].color} opacity="0.88" filter="url(#doshaShadow)" />
                      <path d="M 205,87 A 85,85 0 0,1 140,212 L 140,140 Z" fill={doshas[1].color} opacity="0.88" filter="url(#doshashadow)" />
                      <path d="M 140,212 A 85,85 0 0,1 75,87 L 140,140 Z" fill={doshas[2].color} opacity="0.88" filter="url(#doshaShadow)" />

                      <circle cx="140" cy="140" r="54" fill="white" filter="url(#centerShadow)" />
                      <circle cx="140" cy="140" r="50" fill="white" stroke="#f3f4f6" strokeWidth="1.5" />

                      <text x="140" y="128" textAnchor="middle" fontSize="9" fontWeight="700" fill="#9ca3af" letterSpacing="2">3 DOSHAS</text>
                      <text x="140" y="144" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">AYURVEDIC</text>
                      <text x="140" y="159" textAnchor="middle" fontSize="12" fontWeight="700" fill="#374151">BALANCE</text>

                      <circle cx="139" cy="60" r="17" fill={doshas[0].color} filter="url(#doshaShadow)" />
                      <circle cx="139" cy="60" r="14" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <text x="139" y="60" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">01</text>

                      <circle cx="196" cy="202" r="17" fill={doshas[1].color} filter="url(#doshaShadow)" />
                      <circle cx="196" cy="202" r="14" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <text x="196" y="207" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">02</text>

                      <circle cx="84" cy="202" r="17" fill={doshas[2].color} filter="url(#doshaShadow)" />
                      <circle cx="84" cy="202" r="14" fill="none" stroke="rgba(255,255,255,0.35)" strokeWidth="1.5" />
                      <text x="84" y="207" textAnchor="middle" fontSize="11" fontWeight="700" fill="white">03</text>
                    </svg>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="absolute bottom-0 left-0 text-right"
                    style={{ width: 145 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: doshas[2].color }}>{doshas[2].name}</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">{doshas[2].subtitle}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">{doshas[2].description}</p>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                    className="absolute bottom-0 right-0 text-left"
                    style={{ width: 145 }}
                  >
                    <p className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: doshas[1].color }}>{doshas[1].name}</p>
                    <p className="text-xs text-foreground/50 uppercase tracking-wider mb-1">{doshas[1].subtitle}</p>
                    <p className="text-xs text-foreground/60 leading-relaxed">{doshas[1].description}</p>
                  </motion.div>

                </div>

              </motion.div>
            </div>
          </div>
        </div>

        {/* Integration with Modern Medicine */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <Stethoscope className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Modern Integration</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
               Blending ayurveda and modern science for holistic care
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                Ayurveda complements modern diagnostics while maintaining its natural therapeutic foundation. We combine tradition with modern understanding for optimal outcomes.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {integrationAreas.map((area, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <area.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-foreground">{area.name}</h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* ═══════════════════════════════════════════════════════
            AYURVEDA THERAPIES SECTION  (replaces Herbs section)
            ═══════════════════════════════════════════════════════ */}
        <div className="py-24 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <Leaf className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Signature Treatments</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Ayurveda Therapies India Offers
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                From ancient detox rituals to modern mind-body restoration, India's Ayurvedic tradition offers therapies that heal at the deepest level.
              </p>
            </motion.div>

            <div className="space-y-8">
              {ayurvedaTherapies.map((therapy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`group grid lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-muted/20 ${index % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
                >
                  {/* Image */}
                  <div className="relative h-72 lg:h-auto overflow-hidden">
                    <img
                      src={therapy.image}
                      alt={therapy.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent lg:bg-gradient-to-t lg:from-black/40 lg:to-transparent" />
                    {/* Number badge */}
                    <div
                      className="absolute top-6 left-6 w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-xl shadow-lg"
                      style={{ backgroundColor: therapy.color }}
                    >
                      {therapy.number}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="bg-white p-8 lg:p-10 flex flex-col justify-center">
                    <div
                      className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-4 w-fit"
                      style={{ backgroundColor: `${therapy.color}18` }}
                    >
                      <therapy.icon className="w-4 h-4" style={{ color: therapy.color }} />
                      <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: therapy.color }}>
                        {therapy.tagline}
                      </span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-bold text-foreground mb-4">{therapy.name}</h3>
                    <p className="text-foreground/70 leading-relaxed mb-6">{therapy.description}</p>

                    {/* Procedures grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {therapy.procedures.map((proc, pIdx) => (
                        <div
                          key={pIdx}
                          className="flex items-start gap-2 bg-muted/30 rounded-xl p-3 hover:bg-muted/50 transition-colors"
                        >
                          <div
                            className="w-2 h-2 rounded-full mt-1.5 flex-shrink-0"
                            style={{ backgroundColor: therapy.color }}
                          />
                          <div>
                            <p className="text-sm font-semibold text-foreground leading-tight">{proc.name}</p>
                            <p className="text-xs text-foreground/50 mt-0.5">{proc.detail}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
        {/* ═══════════════════════════════════════════════════════ */}

        {/* Best Ayurveda Wellness Hubs */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Premium Destinations</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                Best Ayurveda Wellness Hubs in India
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                The best wellness centers in India offer holistic healing through Ayurveda detox programs. Combining ancient traditions with modern therapies in natural environments.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {destinations.map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={destination.link}
                    className="group block bg-white rounded-2xl overflow-hidden border-2 border-muted/30 hover:border-primary/30 shadow-lg hover:shadow-2xl transition-all duration-500"
                  >
                    <div className="relative h-72 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-3xl font-bold text-white mb-2">{destination.name}</h3>
                        <p className="text-sm font-semibold text-primary mb-2">{destination.title}</p>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-foreground/70 leading-relaxed">{destination.description}</p>
                      <div className="mt-4 inline-flex items-center gap-2 text-primary font-semibold group-hover:gap-3 transition-all">
                        <span>Explore {destination.name}</span>
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* What Ayurveda Gives */}
        <div className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2 mb-6">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Core Benefits</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-6">
                What Ayurveda Gives You
              </h2>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto leading-relaxed">
                From preventive healthcare to chronic disease management, Ayurveda provides customized treatments for holistic wellbeing
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="flex items-center gap-4 bg-white rounded-xl p-6 border border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-lg transition-all"
                >
                  <CheckCircle className="w-6 h-6 text-primary flex-shrink-0" />
                  <span className="text-foreground/80 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-br from-primary via-primary to-accent py-20">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl sm:text-5xl font-bold text-white mb-6">
                Ready to Experience Authentic Ayurveda?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Discover the transformative power of 5,000 years of healing wisdom in the birthplace of Ayurveda
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/search"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-xl font-bold transition-all shadow-lg"
                >
                  Explore Wellness Centers
                  <ArrowRight className="w-5 h-5" />
                </Link>
                <Link
                  to="/care-guide"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-xl font-bold transition-all backdrop-blur-sm"
                >
                  Talk to a Wellness Guide
                </Link>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}