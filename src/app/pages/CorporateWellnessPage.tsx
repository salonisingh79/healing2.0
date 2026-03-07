import { Link } from 'react-router-dom';
import React from 'react';
import { SimplePageLayout as PageLayout } from '../components/SimplePageLayout';
import { motion } from 'motion/react';
import { 
  Building2, 
  TrendingUp, 
  Users, 
  Heart, 
  Sparkles,
  Check,
  Calendar,
  MapPin,
  Clock,
  Award,
  Shield,
  Zap,
  Target,
  MessageCircle,
  ArrowRight,
  Brain,
  Activity,
  Smile
} from 'lucide-react';

export function CorporateWellnessPage() {
  const benefits = [
    {
      icon: TrendingUp,
      title: 'Boost Productivity',
      description: '25% reduction in sick leave absenteeism',
      stat: '25%'
    },
    {
      icon: Heart,
      title: 'Burnout Reduction',
      description: 'Up to 48% reduction in burnout symptoms',
      stat: '48%'
    },
    {
      icon: Users,
      title: 'Strengthen Work Culture',
      description: '77% of employees say that strong work culture allows them to do their best work.',
      stat: '77%'
    },
    {
      icon: Shield,
      title: 'Strong Return on Investment',
      description: 'For every $1 invested in employee wellness, companies saved $3.27 in healthcare costs.',
      stat: '$3.27'
    }
  ];

  const trustedCompanies = [
    { name: 'Oceaniek Technology', industry: 'Technology' },
    { name: 'Punjab Ports', industry: 'Food industry' },
    { name: 'Chandighar Hospital', industry: 'Healthcare' },
    { name: 'Core Brain Vision', industry: 'IT Industry' },

  ];

  const testimonials = [
    {
      quote: "The wellness retreat transformed our team's dynamics. We saw a 40% reduction in sick days and a dramatic improvement in collaboration.",
      author: "Sarah Johnson",
      role: "Chief People Officer",
      company: "TechCorp Global",
      image: "https://images.unsplash.com/photo-1675783052137-86e68b3f340d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      quote: "Investing in our team's wellbeing was the best decision we made. The ROI in terms of productivity and retention has been exceptional.",
      author: "Michael Chen",
      role: "VP of Human Resources", 
      company: "FinanceHub Inc",
      image: "https://images.unsplash.com/photo-1759310610552-914069ec2e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    },
    {
      quote: "Our leadership team returned from Rishikesh completely recharged. The program exceeded all expectations and delivered lasting results.",
      author: "Emma Williams",
      role: "Director of Talent Development",
      company: "InnovateLabs",
      image: "https://images.unsplash.com/photo-1758873268663-5a362616b5a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=400"
    }
  ];

  const caseStudies = [
    {
      company: "Global Tech Solutions",
      industry: "Technology",
      teamSize: "85 employees",
      challenge: "High burnout rates in engineering team",
      solution: "7-day Panchakarma wellness retreat in Kerala",
      results: [
        "47% reduction in stress-related absences",
        "92% employee satisfaction increase",
        "3.2x improvement in team collaboration scores"
      ],
      image: "https://images.unsplash.com/photo-1758599543120-c1cbcf407fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    },
    {
      company: "Financial Services Corp",
      industry: "Finance",
      teamSize: "120 employees",
      challenge: "Executive leadership burnout",
      solution: "5-day leadership wellness retreat in Rishikesh",
      results: [
        "Leadership satisfaction up 89%",
        "Decision-making clarity improved 65%",
        "Employee retention increased by 34%"
      ],
      image: "https://images.unsplash.com/photo-1758272959210-8f572a78e7ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800"
    }
  ];

  const packages = [
    {
      name: 'Prakriti Insight Camp',
      duration: 'Half Day',
      ideal: '20–30 Employees',
      price: '₹25,000',
      features: [
        'Dosha & Prakriti Analysis',
        'Personalized Diet Plan',
        '20–30 mins consultation per employee',
        'Coverage: 20–30 Employees',
      ],
      highlighted: false
    },
    {
      name: 'Nadi Pariksha Bootcamp',
      duration: 'Half Day',
      ideal: '20–30 Employees',
      price: '₹32,000',
      features: [
        'Traditional Pulse Diagnosis (15–20 mins per employee)',
        'Personalized Wellness Protocol',
        'Diet Recommendations',
        'Coverage: 20–30 Employees',
      ],
      highlighted: false
    },
    {
      name: 'Mind Reboot Session',
      duration: '2 Hours',
      ideal: '30+ Employees',
      price: 'Starting ₹30,000',
      features: [
        'Guided Meditation & Yoga Nidra',
        'Stress & Focus Talk Session',
        'Breathwork (Pranayama)',
        'Coverage: 30+ Employees',
      ],
      highlighted: false
    },
    {
      name: 'Yoga Se Hi Hoga Session',
      duration: 'Flexible',
      ideal: 'All Teams',
      price: 'Custom Pricing',
      features: [
        'Therapeutic Yoga Flow',
        'Pranayama & Meditation',
        'Stress Relief Techniques',
      ],
      highlighted: false
    },
    {
      name: 'Mega Wellness Day',
      duration: 'Full Day',
      ideal: '40–50 Employees',
      price: 'Starting ₹50,000',
      features: [
        'Yoga Session',
        'Meditation & Yoga Nidra',
        'Motivational Talk Session',
        'Stress Management Workshop',
        'Interactive Wellness Activities',
      ],
      highlighted: true
    },
    {
      name: 'Corporate Wellness Retreat',
      duration: '7 Days',
      ideal: 'Leadership & Teams',
      price: 'Custom Pricing',
      features: [
        'Ayurveda Consultation',
        'Yoga Workshops (7-Day Relax Program)',
        'Panchakarma Therapies',
        'Naturopathy Treatments',
        'Healing Massages',
        'Nutritional & Lifestyle Guidance',
        'Available: Kerala | Rishikesh | Himachal Pradesh',
      ],
      highlighted: false
    }
  ];

  const stats = [
    {
      icon: Brain,
      number: '87%',
      label: 'Report Improved Mental Clarity',
      gradient: 'from-primary to-accent'
    },
    {
      icon: Activity,
      number: '3.5x',
      label: 'ROI on Wellness Investment',
      gradient: 'from-accent to-primary'
    },
    {
      icon: Smile,
      number: '92%',
      label: 'Employee Satisfaction Increase',
      gradient: 'from-primary to-accent'
    },
    {
      icon: Target,
      number: '40%',
      label: 'Reduction in Sick Days',
      gradient: 'from-accent to-primary'
    }
  ];

  const process = [
    {
      step: '01',
      title: 'Discovery Call',
      description: 'We understand your company culture, wellness goals, and team needs'
    },
    {
      step: '02',
      title: 'Custom Program Design',
      description: 'Our experts create a tailored wellness retreat matching your objectives'
    },
    {
      step: '03',
      title: 'Seamless Execution',
      description: 'We handle all logistics—travel, accommodation, activities, and meals'
    },
    {
      step: '04',
      title: 'Ongoing Support',
      description: 'Post-retreat integration plan to sustain wellness benefits long-term'
    }
  ];

  return (
    <PageLayout>
      <div className="bg-white">
        
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/5">
          <div className="max-w-7xl mx-auto px-6 py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">A Corporate Wellness Project by The Healing Groove</span>
                </div>
                
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight">
                YOUR HEALING 
                  <span className="block bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mt-2">
                  PROJECT
                  </span>
                </h1>
                
                <p className="text-xl text-foreground/70 leading-relaxed mb-8">
                A corporate wellness project by The Healing Groove  to provide authentic wellness programs for corporate workforce to reduce corporate burnout , boost productivity and build a healthy workforce .
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/enquiry/corporate"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white rounded-xl font-bold hover:bg-primary/90 shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 transition-all"
                  >
                    Request Demo
                    <ArrowRight className="w-5 h-5" />
                  </Link>
                  <Link
                    to="https://api.whatsapp.com/send/?phone=%2B918427775621&text&type=phone_number&app_absent=0"
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white border-2 border-primary/20 text-primary rounded-xl font-bold hover:border-primary/40 hover:bg-primary/5 transition-all"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Schedule Consultation
                  </Link>
                </div>

                <div className="flex flex-wrap items-center gap-6 text-sm text-foreground/60">
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Fully Customizable</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>All-Inclusive Packages</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-primary" />
                    <span>Expert-Led Programs</span>
                  </div>
                </div>
              </motion.div>

              {/* Right Image Grid */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="relative"
              >
                <div className="grid grid-cols-2 gap-4">
                  {/* Main large image */}
                  <div className="col-span-2 relative rounded-3xl overflow-hidden shadow-2xl">
                    <img
                      src="https://images.unsplash.com/photo-1758599543120-c1cbcf407fec?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1200"
                      alt="Corporate team retreat"
                      className="w-full h-[320px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                  
                  {/* Two smaller images */}
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1759310610552-914069ec2e0b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                      alt="Business professionals"
                      className="w-full h-[220px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                  
                  <div className="relative rounded-2xl overflow-hidden shadow-xl">
                    <img
                      src="https://images.unsplash.com/photo-1758874384683-0accd9fb26ee?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=600"
                      alt="Corporate wellness session"
                      className="w-full h-[220px] object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
                  </div>
                </div>
                
                {/* Floating Stats Card */}
                <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-6 border-2 border-primary/20 z-10">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                      <Award className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground">250+</div>
                      <div className="text-sm text-foreground/60">Companies Served</div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Trusted By Section */}
        <div className="py-16 bg-muted/30 border-y border-muted/50">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-10"
            >
              <p className="text-sm font-semibold text-foreground/60 uppercase tracking-wider mb-6">
                Trusted by Leading Organizations
              </p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {trustedCompanies.map((company, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="flex flex-col items-center justify-center p-6 bg-white rounded-xl border border-muted/30 hover:border-primary/30 hover:shadow-md transition-all"
                >
                  <div className="text-2xl font-bold text-foreground mb-1">{company.name}</div>
                  <div className="text-xs text-foreground/50">{company.industry}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Why Corporate Wellness */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Sparkles className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Business Impact</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
              We are here to make impact
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                Strategic wellness programs that deliver measurable results for your organization
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl p-8 border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <benefit.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-primary mb-2">{benefit.stat}</div>
                  <h3 className="text-xl font-bold text-foreground mb-3">{benefit.title}</h3>
                  <p className="text-foreground/70 leading-relaxed">{benefit.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute top-0 right-0 w-24 h-24 opacity-5">
                    <div className={`absolute top-4 right-4 w-16 h-16 rounded-full bg-gradient-to-br ${stat.gradient}`} />
                  </div>
                  
                  <div className={`relative w-16 h-16 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <div className={`text-5xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                    {stat.number}
                  </div>
                  
                  <div className="text-foreground/70 font-medium leading-snug">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Packages */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Calendar className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Flexible Options</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Tailored Wellness Programs
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                Choose a program that fits your team size, timeline, and wellness objectives
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {packages.map((pkg, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative bg-white rounded-3xl p-8 border-2 shadow-lg hover:shadow-2xl transition-all duration-500 ${
                    pkg.highlighted
                      ? 'border-primary/50 shadow-primary/20'
                      : 'border-muted/30'
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-2 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-bold shadow-lg">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-foreground mb-2">{pkg.name}</h3>
                    <div className="flex items-center gap-2 text-sm text-foreground/60 mb-1">
                      <Clock className="w-4 h-4" />
                      <span>{pkg.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-foreground/60">
                      <Users className="w-4 h-4" />
                      <span>{pkg.ideal}</span>
                    </div>
                  </div>

                  <div className="mb-8">
                    <div className="text-3xl font-bold text-primary">{pkg.price}</div>
                  </div>

                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/enquiry/corporate"
                    className={`block w-full text-center px-6 py-4 rounded-xl font-bold transition-all ${
                      pkg.highlighted
                        ? 'bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/30'
                        : 'bg-primary/10 text-primary hover:bg-primary/20'
                    }`}
                  >
                    Request Proposal
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* How It Works */}
        <div className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Zap className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Simple Process</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                How We Work With You
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                From initial consultation to post-retreat integration, we handle everything
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="bg-white rounded-2xl p-8 border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500 h-full">
                    <div className="text-6xl font-bold text-primary/10 mb-4">{item.step}</div>
                    <h3 className="text-xl font-bold text-foreground mb-3">{item.title}</h3>
                    <p className="text-foreground/70 leading-relaxed">{item.description}</p>
                  </div>
                  
                  {index < process.length - 1 && (
                    <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-0.5 bg-gradient-to-r from-primary/50 to-transparent" />
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Featured Destinations */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Premium Locations</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Retreat Destinations
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                Carefully selected wellness centers in India's most serene locations
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  name: 'Kerala Backwaters',
                  description: 'Traditional Ayurvedic centers surrounded by tranquil waterways',
                  image: 'https://images.unsplash.com/photo-1764012393303-157f358bd5fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
                  link: '/destination/kerala'
                },
                {
                  name: 'Rishikesh Himalayas',
                  description: 'Yoga and meditation retreats in the spiritual capital of India',
                  image: 'https://images.unsplash.com/photo-1724864814923-548d7fd5f42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
                  link: '/destination/rishikesh'
                },
                {
                  name: 'Himachal Pradesh',
                  description: 'Mountain wellness escapes combining nature, healing and rejuvenation',
                  image: 'https://images.unsplash.com/photo-1725990075468-6af40634e012?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=800',
                  link: '/destination/himachal'
                }
              ].map((destination, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Link
                    to={destination.link}
                    className="group block bg-white rounded-2xl overflow-hidden border-2 border-muted/30 hover:border-primary/30 shadow-sm hover:shadow-xl transition-all duration-500"
                  >
                    <div className="relative h-64 overflow-hidden">
                      <img
                        src={destination.image}
                        alt={destination.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <div className="absolute bottom-6 left-6 right-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{destination.name}</h3>
                        <p className="text-white/90 text-sm">{destination.description}</p>
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="py-20 bg-gradient-to-b from-white to-muted/30">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <MessageCircle className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Client Testimonials</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                What Our Clients Say
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                Real stories from companies that have experienced the transformative power of our wellness programs
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="absolute top-0 left-0 w-16 h-16 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <img
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="w-10 h-10 object-cover rounded-full"
                    />
                  </div>
                  
                  <div className="text-sm text-foreground/60 mt-2">
                    <span className="font-bold">{testimonial.author}</span>
                    <span className="ml-2">{testimonial.role}</span>
                    <span className="ml-2 text-primary">at {testimonial.company}</span>
                  </div>
                  
                  <p className="text-foreground/70 leading-relaxed mt-4">
                    "{testimonial.quote}"
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>

        {/* Case Studies */}
        <div className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <Award className="w-4 h-4 text-primary" />
                <span className="text-sm font-semibold text-primary">Success Stories</span>
              </div>
              <h2 className="text-4xl sm:text-5xl font-bold text-foreground mb-4">
                Case Studies
              </h2>
              <p className="text-xl text-foreground/60 max-w-3xl mx-auto">
                Detailed insights into how our wellness programs have impacted real businesses
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {caseStudies.map((caseStudy, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500"
                >
                  <div className="relative h-64 overflow-hidden mb-6">
                    <img
                      src={caseStudy.image}
                      alt={caseStudy.company}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-6 left-6 right-6">
                      <h3 className="text-2xl font-bold text-white mb-2">{caseStudy.company}</h3>
                      <p className="text-white/90 text-sm">{caseStudy.industry}</p>
                    </div>
                  </div>
                  
                  <div className="text-sm text-foreground/60 mt-2">
                    <span className="font-bold">Team Size:</span>
                    <span className="ml-2">{caseStudy.teamSize}</span>
                  </div>
                  
                  <div className="text-sm text-foreground/60 mt-2">
                    <span className="font-bold">Challenge:</span>
                    <span className="ml-2">{caseStudy.challenge}</span>
                  </div>
                  
                  <div className="text-sm text-foreground/60 mt-2">
                    <span className="font-bold">Solution:</span>
                    <span className="ml-2">{caseStudy.solution}</span>
                  </div>
                  
                  <ul className="space-y-3 mt-4">
                    {caseStudy.results.map((result, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-foreground/70">{result}</span>
                      </li>
                    ))}
                  </ul>
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
                Ready to Transform Your Workforce?
              </h2>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Join 250+ forward-thinking companies who've invested in their team's wellbeing. 
                Let's design a program that delivers lasting impact.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Link
                  to="/enquiry/corporate"
                  className="px-8 py-4 bg-white hover:bg-white/90 text-primary rounded-xl font-bold transition-all shadow-lg"
                >
                  Request Custom Proposal
                </Link>
                <Link
                  to="/care-guide"
                  className="px-8 py-4 bg-transparent hover:bg-white/10 border-2 border-white text-white rounded-xl font-bold transition-all backdrop-blur-sm"
                >
                  Schedule Discovery Call
                </Link>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 text-white/80 text-sm">
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>No commitment consultation</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>Custom pricing for groups</span>
                </div>
                <div className="flex items-center gap-2">
                  <Check className="w-5 h-5" />
                  <span>24/7 support during retreat</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

      </div>
    </PageLayout>
  );
}