import { Link } from 'react-router-dom';
import { ArrowRight, Star, Phone, Mail, MapPin, CheckCircle, Target, Zap, Users, TrendingUp, Award, BarChart3, Shield, Clock, Sparkles, Rocket, Globe, MessageSquare, Play, Trophy, Brain, Lightbulb, LineChart, Gauge, HeartHandshake, Lock, FileCheck, Timer, ChartBar, Search, Megaphone, Tv, Radio, Package, Aperture, Film, Newspaper, Users2, Building2, Vote, MapPinned, Eye, Wifi, Settings, Monitor, Briefcase, Palette, Code, Layers, Boxes, Share2, Laptop, Server, Camera, Heart, GraduationCap, Home, ShoppingCart, Cpu, DollarSign, Hotel, Car, Shirt, Scale, Factory, Utensils } from 'lucide-react';
import { useState } from 'react';
import { AutoCarousel } from '../ui/AutoCarousel';
import { BentoGrid2 } from '../layout/BentoGrid2';
import { SEOHead } from '../SEOHead';
import { getAllKeywords, getPageKeywords } from '../../utils/seoKeywords';
import { StructuredData, organizationSchema, localBusinessSchema, websiteSchema } from '../../utils/structuredData';

export function HomePage() {
  const seoData = getPageKeywords('home');
  const [email, setEmail] = useState('');

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  // Quick Facts for Hero
  const quickFacts = [
    { label: '96+ Clients Served' },
    { label: '100+ Brands Managed' },
    { label: '7+ Years of Expertise' },
    { label: '74+ Campaigns Delivered' },
  ];

  // Core Services - 14 services with proper icons
  const coreServices = [
    {
      title: 'Digital Marketing',
      description: 'SEO, SEM, SMM, Email & Content Marketing. Complete digital ecosystems powered by data.',
      icon: Rocket,
      link: '/services/digital-marketing',
    },
    {
      title: 'Advertising',
      description: 'Google, Meta, YouTube, LinkedIn Ads. Multi-channel campaigns with full transparency.',
      icon: Megaphone,
      link: '/services/advertising',
    },
    {
      title: 'Branding & Strategy',
      description: 'Brand positioning, design, identity systems, and messaging frameworks that resonate.',
      icon: Sparkles,
      link: '/services/branding',
    },
    {
      title: 'BTL Activations',
      description: 'Events, exhibitions, retail promotions, and experiential marketing that creates impact.',
      icon: Users2,
      link: '/services/btl-activations',
    },
    {
      title: 'OOH Advertising',
      description: 'Billboards, transit, airport, mall media - visibility where your audience lives.',
      icon: MapPinned,
      link: '/services/ooh-advertising',
    },
    {
      title: 'Website & App Development',
      description: 'UI/UX, E-commerce, Mobile Apps - fast, responsive, conversion-optimized platforms.',
      icon: Monitor,
      link: '/services/website-development',
    },
    {
      title: 'Software Development',
      description: 'CRM, ERP, SaaS, Automation - custom solutions that scale with your business.',
      icon: Code,
      link: '/services/software-development',
    },
    {
      title: 'Public Relations',
      description: 'Media outreach, press coverage, influencer collaborations that build credibility.',
      icon: MessageSquare,
      link: '/services/public-relations',
    },
    {
      title: 'Political Campaigns',
      description: 'Targeted digital advocacy, sentiment mapping, voter analysis with real-time dashboards.',
      icon: Vote,
      link: '/services/political-campaigns',
    },
    {
      title: 'Product Marketing',
      description: 'Launch planning, go-to-market strategy, omnichannel execution for product success.',
      icon: Package,
      link: '/services/product-marketing',
    },
    {
      title: 'Graphic Design',
      description: 'Social media, campaigns, print - professional designs aligned with brand guidelines.',
      icon: Palette,
      link: '/services/graphic-design',
    },
    {
      title: 'Media Production',
      description: 'Video production, photography, drone shoots - cinematic brand storytelling.',
      icon: Camera,
      link: '/services/media-production',
    },
  ];

  // Why We're Different - 6 principles
  const differentiators = [
    {
      icon: FileCheck,
      title: 'Transparent Pricing & Reports',
      description: 'Clear scope, fixed pricing, detailed monthly reports. You know exactly where every rupee goes.',
    },
    {
      icon: Shield,
      title: 'No Exaggerated Claims',
      description: 'We set realistic expectations. SEO takes 3-6 months. Paid ads need testing. No overnight miracles.',
    },
    {
      icon: Clock,
      title: 'Honest Timelines & Measurable KPIs',
      description: 'Proper project timelines with clear milestones. Data-driven KPIs that matter to your business.',
    },
    {
      icon: Award,
      title: '98% Client Retention',
      description: 'Most clients stay for years because we deliver consistent value and honest communication.',
    },
    {
      icon: Users,
      title: 'Weekly Communication & Full Accountability',
      description: 'Regular video calls, live dashboards, open dialogue about what is working and what needs work.',
    },
    {
      icon: Target,
      title: 'Results-First Mindset',
      description: 'We focus on metrics that drive business growth - leads, conversions, revenue, not vanity stats.',
    },
  ];

  // Digital Marketing Deep Dive
  const digitalMarketingServices = [
    {
      icon: Search,
      title: 'SEO (On-page, Off-page, Technical)',
      description: '3-6 months to show results. Content optimization, link building, technical audits.',
    },
    {
      icon: MapPin,
      title: 'Google My Business Optimization',
      description: 'Local visibility on Google Maps. Real photos, reviews, regular updates for store visits.',
    },
    {
      icon: Target,
      title: 'Google Ads & Display Network',
      description: 'Keyword planning, A/B testing, tracked clicks. Every rupee accounted for.',
    },
    {
      icon: Share2,
      title: 'Meta & LinkedIn Campaigns',
      description: 'Targeted social media advertising with continuous optimization for better performance.',
    },
    {
      icon: Mail,
      title: 'Email Marketing Automation',
      description: 'Nurture campaigns, drip sequences, segmented lists for higher engagement.',
    },
    {
      icon: BarChart3,
      title: 'Analytics & Performance Reports',
      description: 'Monthly dashboards showing traffic, conversions, ROI with actionable insights.',
    },
  ];

  // OOH Advertising Details
  const oohServices = [
    {
      icon: Building2,
      title: 'Billboards & Hoardings',
      description: 'Strategic placements in high-traffic areas with geo-mapping visibility reports.',
    },
    {
      icon: Tv,
      title: 'Transit Media',
      description: 'Bus wraps, metro ads, cab branding - mobile impressions across the city.',
    },
    {
      icon: Globe,
      title: 'Airport Branding',
      description: 'Premium visibility at airports targeting travelers and business audiences.',
    },
    {
      icon: Boxes,
      title: 'Mall & Retail Media',
      description: 'Shopping center displays, kiosks, in-store branding for retail traffic.',
    },
  ];

  // BTL Activations Examples
  const btlActivations = [
    {
      icon: Users2,
      title: 'Mall & Retail Activations',
      description: 'Product sampling, demos, pop-up stores with measurable lead capture.',
    },
    {
      icon: Trophy,
      title: 'Campus & Roadshows',
      description: 'College tours, city roadshows, mobile brand experiences.',
    },
    {
      icon: Building2,
      title: 'Trade Exhibitions',
      description: 'Booth design, staffing, lead collection with post-event analytics.',
    },
    {
      icon: Boxes,
      title: 'Society-Level Branding',
      description: 'Residential complex activations, community engagement programs.',
    },
  ];

  // Tools & Technologies
  const tools = [
    'Google Analytics 4',
    'Search Console',
    'SEMrush',
    'Ahrefs',
    'HubSpot',
    'Meta Business Suite',
    'Google Ads',
    'Figma',
    'Adobe Creative Cloud',
    'WordPress',
    'Shopify Plus',
    'AWS Cloud',
    'MongoDB',
    'Firebase',
    'Mailchimp',
    'Zapier',
    'Tableau',
    'Salesforce',
    'Hotjar',
    'Node.js',
  ];

  // Industries Served
  const industries = [
    { name: 'Healthcare', icon: Heart },
    { name: 'Technology', icon: Cpu },
    { name: 'Real Estate', icon: Home },
    { name: 'E-Commerce', icon: ShoppingCart },
    { name: 'Education', icon: GraduationCap },
    { name: 'Finance', icon: DollarSign },
    { name: 'Hospitality', icon: Hotel },
    { name: 'Automotive', icon: Car },
    { name: 'Fashion', icon: Shirt },
    { name: 'F&B', icon: Utensils },
    { name: 'Legal', icon: Scale },
    { name: 'Manufacturing', icon: Factory },
  ];

  // Process Steps
  const processSteps = [
    {
      step: '01',
      icon: Search,
      title: 'Discovery & Research',
      description: 'Understanding goals, audience, and competition.',
      duration: '5-7 Days',
    },
    {
      step: '02',
      icon: FileCheck,
      title: 'Strategy & Planning',
      description: 'Roadmap, timelines, and KPIs with transparent pricing.',
      duration: '7-10 Days',
    },
    {
      step: '03',
      icon: Lightbulb,
      title: 'Creative Production',
      description: 'Design, copy, and content. Quality takes time.',
      duration: '10-15 Days',
    },
    {
      step: '04',
      icon: Rocket,
      title: 'Campaign Execution',
      description: 'Testing, optimization, and gradual scaling.',
      duration: '3-5 Days',
    },
    {
      step: '05',
      icon: TrendingUp,
      title: 'Analysis & Improvement',
      description: 'Weekly analysis and continuous optimization.',
      duration: 'Ongoing',
    },
  ];

  // Real Success Metrics
  const successMetrics = [
    {
      metric: '300% Inquiry Growth',
      industry: 'Healthcare',
      description: 'GMB optimization + content marketing over 8 months',
    },
    {
      metric: '250% Organic Traffic',
      industry: 'Fashion',
      description: 'SEO campaign with consistent monthly growth',
    },
    {
      metric: '180% ROAS Improvement',
      industry: 'Real Estate',
      description: 'Google Ads testing and refinement over 3 months',
    },
    {
      metric: '98% Client Retention',
      industry: 'All Industries',
      description: 'Long-term partnerships built on trust and results',
    },
  ];

  // Client Testimonials
  const testimonials = [
    {
      quote: 'Their GMB optimization alone increased our clinic footfall by 200%. Worth every rupee.',
      name: 'Dr. Sneha Jain',
      title: 'Prime Healthcare',
      result: '200% Footfall Increase',
      rating: 5,
    },
    {
      quote: 'OOH + Digital combo worked wonders for our retail brand. Strategic visibility everywhere.',
      name: 'Priya Sharma',
      title: 'Fashion Hub',
      result: 'Strong Brand Recall',
      rating: 5,
    },
    {
      quote: 'Honest, data-driven, and dependable. Best agency we have worked with.',
      name: 'Amit Patel',
      title: 'Real Estate Pro',
      result: '180% ROAS',
      rating: 5,
    },
    {
      quote: 'Transparent pricing and weekly updates. We always know what is happening with our campaigns.',
      name: 'Vikram Singh',
      title: 'TechStart Solutions',
      result: 'Complete Transparency',
      rating: 5,
    },
  ];

  return (
    <div className="bg-black">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={getAllKeywords('home')}
        ogType="website"
      />
      
      {/* Structured Data */}
      <StructuredData schema={[organizationSchema, localBusinessSchema, websiteSchema]} />
      
      {/* 1. Hero Section - Headline + Quick Facts with Video Background */}
      <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden">
        {/* Video Background */}
        <div className="absolute inset-0 z-0">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="metadata"
            className="absolute inset-0 w-full h-full object-cover"
            poster="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 1080'%3E%3Crect fill='%23000' width='1920' height='1080'/%3E%3C/svg%3E"
          >
            <source src="https://inchtomilez.com/wp-content/uploads/2024/09/Sequence-01_2.mp4#t=9" type="video/mp4" />
          </video>
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/60"></div>
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="max-w-6xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-2 rounded-full mb-6">
            <Star className="w-4 h-4 text-white" fill="currentColor" />
            <span className="text-[0.8125rem] font-medium uppercase tracking-wide text-yellow-500">Indore's Most Transparent Agency</span>
          </div>

          {/* Main Headline - Hindi/English Mix */}
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-6 leading-[1.3]" style={{ maxWidth: '900px', margin: '0 auto 1.5rem' }}>
            💥 Duniya Brands Ke Peeche, <br className="hidden md:inline" />
            Aur Brands Marketing Aur Advertising Ke!
          </h1>

          {/* Subtext */}
          <p className="text-[0.9375rem] leading-relaxed text-gray-200 max-w-4xl mx-auto mb-4" style={{ lineHeight: 1.6 }}>
            The world chases brands - but the smartest brands chase strategy.
          </p>
          
          <p className="text-[0.9375rem] leading-relaxed text-gray-300 max-w-4xl mx-auto mb-10" style={{ lineHeight: 1.6 }}>
            At <span className="text-yellow-500 font-semibold">InchToMilez</span>, we combine digital intelligence, creative storytelling, 
            and real-world advertising to deliver <span className="text-yellow-500 font-semibold">measurable, lasting growth</span>.
          </p>
          
          {/* Quick Facts */}
          <div className="flex flex-wrap justify-center gap-3 md:gap-4 mb-10">
            {quickFacts.map((fact, index) => (
              <div key={index} className="flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full">
                <CheckCircle className="w-4 h-4 text-yellow-500" />
                <span className="text-[0.8125rem] text-gray-200">{fact.label}</span>
              </div>
            ))}
          </div>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link
              to="/contact"
              className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-2xl hover:shadow-yellow-500/50 hover:scale-105"
            >
              Get Free Consultation
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/services"
              className="glass-card hover:bg-white/10 px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold hover:scale-105"
            >
              Explore Our Services
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-white/10">
            <a href="tel:+919669988666" className="flex items-center gap-2 text-[0.8125rem] text-gray-300 hover:text-yellow-500 transition-colors">
              <Phone className="w-4 h-4" />
              +91 966-998-8666
            </a>
            <a href="mailto:inchtomilez@gmail.com" className="flex items-center gap-2 text-[0.8125rem] text-gray-300 hover:text-yellow-500 transition-colors">
              <Mail className="w-4 h-4" />
              inchtomilez@gmail.com
            </a>
            <div className="flex items-center gap-2 text-[0.8125rem] text-gray-300">
              <MapPin className="w-4 h-4" />
              Indore, Madhya Pradesh, India
            </div>
          </div>
        </div>
        </div>
      </section>

      {/* 2. Who We Are */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="mb-6 leading-[1.3]">
                Who We Are
              </h2>
              
              <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                We are <span className="text-yellow-500 font-semibold">InchToMilez</span>, Indore's most transparent, performance-driven marketing agency.
              </p>
              
              <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                From digital ecosystems to BTL activations and OOH advertising, we bridge <span className="text-yellow-500 font-semibold">online and offline</span> to create complete brand presence.
              </p>
              
              <p className="text-[0.9375rem] leading-relaxed text-white font-semibold text-lg" style={{ lineHeight: 1.6 }}>
                We do not sell illusions - we deliver results with data, creativity, and integrity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Our Philosophy */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="glass-strong p-8 md:p-12 rounded-2xl text-center">
              <div className="inline-flex items-center gap-2 bg-yellow-500 text-black px-4 py-2 rounded-full mb-6">
                <Lightbulb className="w-4 h-4" />
                <span className="text-[0.8125rem] font-semibold uppercase tracking-wide">Our Philosophy</span>
              </div>
              
              <h2 className="mb-6 leading-[1.3]">
                Duniya Brands Ke Peeche,<br />
                Aur Brands Marketing Aur Advertising Ke!
              </h2>
              
              <p className="text-[0.9375rem] leading-relaxed text-gray-300 max-w-3xl mx-auto mb-6" style={{ lineHeight: 1.6 }}>
                We believe great brands are not built by chance - they are built by <span className="text-yellow-500 font-semibold">strategy, communication, and consistency</span>.
              </p>
              
              <p className="text-[0.9375rem] leading-relaxed text-white font-semibold text-lg max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
                Our purpose is simple: help your business grow inch by inch until it becomes a mile of success.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Why We're Different */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">WHY CHOOSE US</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Why We Are Different
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              We are not another agency making promises. We are <span className="text-yellow-500 font-semibold">partners in your success</span>.
            </p>

            <BentoGrid2 
              cards={differentiators.map(item => ({
                title: item.title,
                description: item.description,
                icon: item.icon,
              }))}
              mode="asymmetric"
              showBadges={true}
              showStats={false}
              ariaLabel="Why we're different"
            />
          </div>
        </div>
      </section>

      {/* 5. Our Core Expertise */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">COMPREHENSIVE SOLUTIONS</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              One Agency. Infinite Possibilities.
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              We unify every vertical of modern marketing under one roof — from <span className="text-yellow-500 font-semibold">digital to physical, strategy to execution</span>.
            </p>

            <BentoGrid2 
              cards={coreServices.map(service => ({
                title: service.title,
                description: service.description,
                icon: service.icon,
                link: service.link
              }))}
              mode="asymmetric"
              showBadges={true}
              showStats={true}
              ariaLabel="Our core services"
            />

            <div className="mt-12 text-center">
              <Link
                to="/services"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-lg hover:scale-105"
              >
                View All Services
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Digital Marketing That Builds Brands */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">DIGITAL ECOSYSTEM</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Digital Marketing That Builds Brands
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              Our digital ecosystem covers everything from <span className="text-yellow-500 font-semibold">SEO optimization to paid performance marketing</span>. 
              We do not just drive traffic - we drive trust.
            </p>

            <BentoGrid2 
              cards={digitalMarketingServices.map(service => ({
                title: service.title,
                description: service.description,
                icon: service.icon,
              }))}
              mode="asymmetric"
              showBadges={false}
              showStats={false}
              ariaLabel="Digital marketing services"
            />
          </div>
        </div>
      </section>

      {/* 7. Google My Business & Local Dominance */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-card p-8 md:p-12 text-center">
              <MapPin className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
              
              <h2 className="mb-6 leading-[1.3]">
                Google My Business & Local Dominance
              </h2>
              
              <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                For local visibility, we make your brand <span className="text-yellow-500 font-semibold">unmissable on Google Maps and search</span>.
              </p>
              
              <p className="text-[0.9375rem] leading-relaxed text-gray-300" style={{ lineHeight: 1.6 }}>
                We optimize your Google Business Profile with real photos, reviews, keywords, and regular updates - 
                <span className="text-yellow-500 font-semibold"> turning searches into store visits</span>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Google Ads & Paid Campaigns */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="mb-6 text-center leading-[1.3]">
              Google Ads & Paid Campaigns
            </h2>
            
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              We manage everything from keyword planning to A/B tested ad creatives. 
              <span className="text-yellow-500 font-semibold"> Every click is tracked. Every rupee is accounted for.</span>
            </p>
            
            <p className="text-[0.9375rem] leading-relaxed text-white font-semibold text-center mb-12">
              Your ROI is our primary metric.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="glass-card p-6">
                <Target className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">Search Ads</h3>
                <p className="text-[0.8125rem] text-gray-400 leading-relaxed">Intent-driven traffic from users actively searching for your solutions.</p>
              </div>
              
              <div className="glass-card p-6">
                <Eye className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">Display & Discovery</h3>
                <p className="text-[0.8125rem] text-gray-400 leading-relaxed">Visual reach across Google network with targeted audience segments.</p>
              </div>
              
              <div className="glass-card p-6">
                <Zap className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">Performance Max</h3>
                <p className="text-[0.8125rem] text-gray-400 leading-relaxed">AI-powered campaigns across all Google channels for maximum impact.</p>
              </div>
              
              <div className="glass-card p-6">
                <Play className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">YouTube Video Ads</h3>
                <p className="text-[0.8125rem] text-gray-400 leading-relaxed">Engaging video content that captures attention and drives action.</p>
              </div>
              
              <div className="glass-card p-6">
                <Users className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">Retargeting & Remarketing</h3>
                <p className="text-[0.8125rem] text-gray-400 leading-relaxed">Re-engage visitors who showed interest but did not convert yet.</p>
              </div>
              
              <div className="glass-card p-6">
                <BarChart3 className="w-8 h-8 text-yellow-500 mb-4" />
                <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">Analytics & Optimization</h3>
                <p className="text-[0.8125rem] text-gray-400 leading-relaxed">Continuous testing and refinement based on performance data.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 9. SEO & Webmaster Tools Management */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Search className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            
            <h2 className="mb-6 leading-[1.3]">
              SEO & Webmaster Tools Management
            </h2>
            
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8" style={{ lineHeight: 1.6 }}>
              We ensure your website is <span className="text-yellow-500 font-semibold">technically perfect</span> - fast, crawlable, and indexed correctly.
            </p>

            <div className="glass-card p-8 text-left">
              <h3 className="text-[1.375rem] font-medium mb-6 leading-[1.4]">Our Toolkit Includes:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold">Google Search Console (Webmaster Tools)</p>
                    <p className="text-[0.8125rem] text-gray-400">Monitor indexing, fix crawl errors, optimize search performance</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold">Bing Webmaster</p>
                    <p className="text-[0.8125rem] text-gray-400">Additional search visibility on Microsoft network</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold">SEMrush / Ahrefs</p>
                    <p className="text-[0.8125rem] text-gray-400">Keyword research, competitor analysis, backlink audits</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold">Site Speed & Schema Optimization</p>
                    <p className="text-[0.8125rem] text-gray-400">Technical SEO for faster load times and better rankings</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold">Monthly SEO Health Reports</p>
                    <p className="text-[0.8125rem] text-gray-400">Transparent reporting on rankings, traffic, and opportunities</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Social Media Marketing */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto text-center">
            <Share2 className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            
            <h2 className="mb-6 leading-[1.3]">
              Social Media Marketing
            </h2>
            
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8 max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              <span className="text-yellow-500 font-semibold">Creative storytelling meets analytics.</span> 
              From reels and carousels to paid campaigns, we manage your entire social presence with clarity and consistency.
            </p>

            <div className="inline-block glass-card p-6 mb-12">
              <h3 className="text-[1.375rem] font-medium mb-4 leading-[1.4]">Platforms We Master:</h3>
              <div className="flex flex-wrap justify-center gap-4">
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-[0.8125rem] font-semibold">Instagram</span>
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-[0.8125rem] font-semibold">Facebook</span>
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-[0.8125rem] font-semibold">LinkedIn</span>
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-[0.8125rem] font-semibold">YouTube</span>
                <span className="bg-yellow-500 text-black px-4 py-2 rounded-lg text-[0.8125rem] font-semibold">X (Twitter)</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 11. OOH Advertising */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">OUT-OF-HOME ADVERTISING</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              OOH Advertising - Visibility That Lasts
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              Billboards, hoardings, transit media, airport screens, and mall branding - 
              <span className="text-yellow-500 font-semibold"> we plan, place, and monitor every outdoor impression</span> using data-driven heatmaps.
            </p>

            <BentoGrid2 
              cards={oohServices.map(service => ({
                title: service.title,
                description: service.description,
                icon: service.icon,
              }))}
              mode="uniform"
              columns={4}
              ariaLabel="OOH advertising services"
            />

            <div className="mt-12">
              <div className="glass-strong p-8 rounded-2xl">
                <h3 className="text-[1.375rem] font-medium mb-6 text-center leading-[1.4]">OOH Analytics We Provide:</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <MapPin className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold mb-2">Geo-mapping Visibility Reports</p>
                    <p className="text-[0.8125rem] text-gray-400">See exactly where your ads are placed and their reach</p>
                  </div>
                  
                  <div className="text-center">
                    <BarChart3 className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold mb-2">ROI & Footfall Estimates</p>
                    <p className="text-[0.8125rem] text-gray-400">Data-driven estimates of impressions and impact</p>
                  </div>
                  
                  <div className="text-center">
                    <Settings className="w-8 h-8 text-yellow-500 mx-auto mb-3" />
                    <p className="text-[0.9375rem] leading-relaxed text-white font-semibold mb-2">Dynamic Campaign Adjustments</p>
                    <p className="text-[0.8125rem] text-gray-400">Optimize placements based on performance data</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 text-center">
              <Link
                to="/services/ooh-advertising"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-lg hover:scale-105"
              >
                Learn More About OOH
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 12. BTL Activations */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">EXPERIENTIAL MARKETING</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              BTL Activations - Real-World Brand Engagement
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              Bring your brand to life through <span className="text-yellow-500 font-semibold">experiential marketing</span>. 
              Each campaign is fully measurable with lead capture & post-event analytics.
            </p>

            <BentoGrid2 
              cards={btlActivations.map(activation => ({
                title: activation.title,
                description: activation.description,
                icon: activation.icon,
              }))}
              mode="uniform"
              columns={4}
              ariaLabel="BTL activation services"
            />

            <div className="mt-12 text-center">
              <Link
                to="/services/btl-activations"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-lg hover:scale-105"
              >
                Explore BTL Activations
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Website & App + Software Development */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Website & App Development */}
              <div className="glass-card p-8">
                <Monitor className="w-12 h-12 text-yellow-500 mb-6" />
                <h2 className="mb-4 leading-[1.3]">Website & App Development</h2>
                <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                  Fast, functional, <span className="text-yellow-500 font-semibold">conversion-optimized web ecosystems</span>.
                </p>
                <p className="text-[0.8125rem] text-gray-400 mb-4">
                  From corporate websites to e-commerce and app development - we build with design precision and SEO intelligence.
                </p>
                <Link
                  to="/services/website-development"
                  className="inline-flex items-center gap-2 text-[0.8125rem] text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Software & Automation */}
              <div className="glass-card p-8">
                <Code className="w-12 h-12 text-yellow-500 mb-6" />
                <h2 className="mb-4 leading-[1.3]">Software & Automation</h2>
                <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                  Custom software, dashboards, and <span className="text-yellow-500 font-semibold">CRMs that simplify workflows</span>.
                </p>
                <p className="text-[0.8125rem] text-gray-400 mb-4">
                  We automate routine tasks and deliver smarter scalability for growing businesses.
                </p>
                <Link
                  to="/services/software-development"
                  className="inline-flex items-center gap-2 text-[0.8125rem] text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 14. Media Production & PR */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Media Production */}
              <div className="glass-card p-8">
                <Camera className="w-12 h-12 text-yellow-500 mb-6" />
                <h2 className="mb-4 leading-[1.3]">Media Production & Creative Design</h2>
                <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                  From product shoots to <span className="text-yellow-500 font-semibold">cinematic brand films</span>, 
                  we handle the full creative process.
                </p>
                <p className="text-[0.8125rem] text-gray-400 mb-4">
                  Content that tells stories - not just fills space.
                </p>
                <Link
                  to="/services/media-production"
                  className="inline-flex items-center gap-2 text-[0.8125rem] text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
                >
                  View Our Work <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Public Relations */}
              <div className="glass-card p-8">
                <MessageSquare className="w-12 h-12 text-yellow-500 mb-6" />
                <h2 className="mb-4 leading-[1.3]">Public Relations & Influence Management</h2>
                <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6" style={{ lineHeight: 1.6 }}>
                  We help brands <span className="text-yellow-500 font-semibold">earn media coverage</span> and maintain credibility.
                </p>
                <p className="text-[0.8125rem] text-gray-400 mb-4">
                  Across print, digital, and influencer ecosystems - building trust that lasts.
                </p>
                <Link
                  to="/services/public-relations"
                  className="inline-flex items-center gap-2 text-[0.8125rem] text-yellow-500 hover:text-yellow-400 font-semibold transition-colors"
                >
                  Learn More <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 15. Our Process */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">OUR METHODOLOGY</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Our Process – How We Work
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              A <span className="text-yellow-500 font-semibold">systematic approach</span> refined over 7 years and 74+ campaigns. 
              Clear steps, realistic timelines.
            </p>

            <BentoGrid2 
              cards={processSteps.map(step => ({
                icon: step.icon,
                number: step.step,
                label: step.title,
                sublabel: step.duration,
                description: step.description
              }))}
              mode="uniform"
              columns={5}
              ariaLabel="Our process steps"
            />
          </div>
        </div>
      </section>

      {/* 16. Industries We Serve */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">INDUSTRY EXPERTISE</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Industries We Serve
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              <span className="text-yellow-500 font-semibold">Healthcare • Tech • Real Estate • E-Commerce • Education • Finance • Hospitality • F&B • Legal • Manufacturing • Automotive</span>
            </p>

            <BentoGrid2 
              cards={industries.map(industry => ({
                icon: industry.icon,
                label: industry.name,
                sublabel: 'Industry expertise'
              }))}
              mode="uniform"
              columns={4}
              ariaLabel="Industries we serve"
            />

            <div className="mt-12 text-center">
              <Link
                to="/industries"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-lg hover:scale-105"
              >
                Explore All Industries
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 17. Tools We Trust */}
      <section className="border-t border-white/10 py-16 md:py-24 overflow-hidden bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">TECHNOLOGY STACK</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Tools We Trust
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              <span className="text-yellow-500 font-semibold">Industry-standard platforms</span> and enterprise-grade tools for maximum performance.
            </p>
          </div>

          <AutoCarousel speed="normal">
            {tools.map((tool, index) => (
              <div key={index} className="glass min-w-[180px] sm:min-w-[220px] flex-shrink-0 text-center snap-center">
                <p className="text-[0.9375rem] leading-relaxed font-medium">{tool}</p>
              </div>
            ))}
          </AutoCarousel>
        </div>
      </section>

      {/* 18. Real Success Metrics */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">PROVEN RESULTS</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Real Numbers, Real Success
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              Results from <span className="text-yellow-500 font-semibold">96+ client partnerships</span> representing 
              years of consistent effort and optimization.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {successMetrics.map((metric, index) => (
                <div key={index} className="glass-card p-8">
                  <div className="inline-block bg-yellow-500 text-black px-4 py-2 rounded-lg mb-4 text-[0.9375rem] font-semibold">
                    {metric.metric}
                  </div>
                  <h3 className="text-[1.375rem] font-medium mb-2 leading-[1.4]">{metric.industry}</h3>
                  <p className="text-[0.8125rem] text-gray-400 leading-relaxed">{metric.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 19. Client Testimonials */}
      <section className="border-t border-white/10 py-16 md:py-24 overflow-hidden bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto mb-12">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center">CLIENT FEEDBACK</p>
            <h2 className="mb-4 text-center leading-[1.3]">
              Client Testimonials
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8 text-center max-w-3xl mx-auto" style={{ lineHeight: 1.6 }}>
              Honest feedback from <span className="text-yellow-500 font-semibold">real clients</span> about their experience working with us.
            </p>
          </div>

          <AutoCarousel speed="slow">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="glass-card min-w-[300px] sm:min-w-[380px] max-w-[420px] flex-shrink-0 snap-center p-6">
                {/* Rating */}
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" />
                  ))}
                </div>
                
                <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-6 italic" style={{ lineHeight: 1.6 }}>
                  &quot;{testimonial.quote}&quot;
                </p>
                
                {/* Result badge */}
                <div className="inline-block bg-yellow-500 text-black px-3 py-1.5 rounded-lg mb-4 text-[0.8125rem] font-semibold">
                  {testimonial.result}
                </div>
                
                <div className="pt-4 border-t border-white/10">
                  <p className="text-[0.9375rem] leading-relaxed font-semibold">{testimonial.name}</p>
                  <p className="text-[0.8125rem] text-yellow-500">{testimonial.title}</p>
                </div>
              </div>
            ))}
          </AutoCarousel>
        </div>
      </section>

      {/* 20. Our Promise */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong p-8 md:p-12 rounded-2xl text-center">
              <Shield className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
              
              <h2 className="mb-6 leading-[1.3]">
                Our Promise
              </h2>
              
              <p className="text-[0.9375rem] leading-relaxed text-white font-semibold text-lg mb-4" style={{ lineHeight: 1.6 }}>
                We will not promise miracles - only measurable progress.
              </p>
              
              <p className="text-[0.9375rem] leading-relaxed text-gray-300" style={{ lineHeight: 1.6 }}>
                We value <span className="text-yellow-500 font-semibold">long-term success</span> over short-term noise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 21. Newsletter */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="glass-strong p-8 md:p-12 rounded-2xl text-center">
              <Mail className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
              
              <h2 className="mb-4 leading-[1.3]">Newsletter - Stay Ahead of the Curve</h2>
              <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-8 max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
                Get monthly insights, trends, and marketing hacks from the InchToMilez team. 
                <span className="text-yellow-500 font-semibold"> No fluff. No spam. Just growth.</span>
              </p>
              
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your business email"
                  className="flex-1 px-6 py-4 bg-black border border-white/20 rounded-xl text-white placeholder:text-white/40 focus:outline-none focus:border-yellow-500 transition-colors duration-200 text-[0.9375rem]"
                  required
                />
                <button
                  type="submit"
                  className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 text-[0.9375rem] font-semibold whitespace-nowrap shadow-lg hover:scale-105"
                >
                  Subscribe Now
                </button>
              </form>
              
              <p className="text-[0.8125rem] text-gray-500 mt-4" style={{ lineHeight: 1.6 }}>Unsubscribe anytime. We respect your inbox.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 22. Global Vision */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <Globe className="w-12 h-12 text-yellow-500 mx-auto mb-6" />
            
            <h2 className="mb-6 leading-[1.3]">
              Global Vision - Local Expertise
            </h2>
            
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-4" style={{ lineHeight: 1.6 }}>
              Born in Indore, growing worldwide.
            </p>
            
            <p className="text-[0.9375rem] leading-relaxed text-white font-semibold text-lg" style={{ lineHeight: 1.6 }}>
              Our goal: make transparent, ethical marketing India's biggest export.
            </p>
          </div>
        </div>
      </section>

      {/* 23. Final CTA */}
      <section className="border-t border-white/10 py-16 md:py-24 bg-gradient-to-b from-black to-yellow-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 leading-[1.3]">Ready to Go from Inch to Mile?</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-10 max-w-2xl mx-auto" style={{ lineHeight: 1.6 }}>
              Let us build your next success story together. 
              <span className="text-yellow-500 font-semibold"> Free consultation. No obligations. Just honest insights.</span>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Link
                to="/contact"
                className="bg-yellow-500 hover:bg-yellow-400 text-black px-10 py-5 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold shadow-xl hover:shadow-yellow-500/50 hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                to="/services"
                className="glass-card hover:bg-white/10 px-10 py-5 rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold hover:scale-105"
              >
                Explore Services
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8 border-t border-white/10">
              <a href="tel:+919669988666" className="flex items-center gap-2 text-[0.9375rem] text-gray-300 hover:text-yellow-500 transition-colors font-semibold">
                <Phone className="w-5 h-5" />
                📞 +91 966-998-8666
              </a>
              <a href="mailto:inchtomilez@gmail.com" className="flex items-center gap-2 text-[0.9375rem] text-gray-300 hover:text-yellow-500 transition-colors font-semibold">
                <Mail className="w-5 h-5" />
                inchtomilez@gmail.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
