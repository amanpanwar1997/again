import SEOHead from '../../components/SEOHead';
import SchemaMarkup from '../../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../../components/EnhancedSchemaMarkup';
import { getPageMetadata } from '../../utils/seoMetadata';
import StackingSection from '../../components/StackingSection';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent } from '../../components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '../../components/ui/tabs';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { 
  Monitor, Target, TrendingUp, Users, Search, BarChart3, Megaphone, Mail, 
  Globe, Zap, Award, CheckCircle2, ArrowRight, LineChart, DollarSign,
  Clock, Shield, Rocket, Brain, Star, Package, Play, MessageSquare,
  TrendingDown, Eye, MousePointer, Share2, Hash, Image, Video,
  ChevronRight, Sparkles, Gauge, Phone, Briefcase
} from 'lucide-react';

export default function DigitalMarketing() {
  const totalSections = 16;

  // Hero Stats (4 KEY METRICS WITH BADGES)
  const heroStats = [
    { metric: '347%', label: 'Growth', badge: 'Avg.', icon: TrendingUp },
    { metric: '12.8x', label: 'ROAS', badge: 'Proven', icon: DollarSign },
    { metric: '200+', label: 'Campaigns', badge: 'Won', icon: Rocket },
    { metric: '96%', label: 'Retention', badge: 'Client', icon: Star }
  ];

  // Core Services (4 PILLARS WITH ENHANCED BADGES)
  const coreServices = [
    {
      icon: Search,
      title: 'SEO Domination',
      tagline: 'Own Page 1',
      description: 'Top 3 rankings guaranteed. Drive organic traffic that converts.',
      badge: 'Top 3',
      stat: '300%',
      statLabel: 'Traffic'
    },
    {
      icon: Target,
      title: 'PPC Excellence',
      tagline: 'Instant Visibility',
      description: 'Maximum ROI. Zero wasted spend. Every rupee tracked.',
      badge: '10x ROAS',
      stat: '₹50L',
      statLabel: 'Ad Spend Managed'
    },
    {
      icon: Megaphone,
      title: 'Social Mastery',
      tagline: 'Viral Growth',
      description: 'Build armies of fans. Turn followers into customers.',
      badge: 'Viral',
      stat: '1M+',
      statLabel: 'Reach/Month'
    },
    {
      icon: LineChart,
      title: 'Performance Analytics',
      tagline: 'Data-Driven',
      description: 'Real-time insights. Predictive modeling. Guaranteed growth.',
      badge: 'Live',
      stat: '24/7',
      statLabel: 'Tracking'
    }
  ];

  // SEO Services with Tabs (3 CATEGORIES)
  const seoCategories = {
    technical: {
      title: 'Technical SEO',
      badge: 'Foundation',
      items: [
        { name: 'Speed optimization', badge: '<2s' },
        { name: 'Mobile-first indexing', badge: 'Core' },
        { name: 'Schema markup', badge: 'Rich' },
        { name: 'Core Web Vitals', badge: 'Green' }
      ]
    },
    onPage: {
      title: 'On-Page SEO',
      badge: 'Content',
      items: [
        { name: 'Keyword domination', badge: 'Top 3' },
        { name: 'Content optimization', badge: 'Convert' },
        { name: 'Internal linking', badge: 'Smart' },
        { name: 'Meta perfection', badge: 'CTR+' }
      ]
    },
    offPage: {
      title: 'Off-Page SEO',
      badge: 'Authority',
      items: [
        { name: 'Premium backlinks', badge: 'DA 70+' },
        { name: 'Brand mentions', badge: 'PR' },
        { name: 'Guest posting', badge: 'Quality' },
        { name: 'Local citations', badge: 'GMB' }
      ]
    }
  };

  // PPC Channels with Tabs (4 PLATFORMS)
  const ppcPlatforms = {
    google: {
      name: 'Google Ads',
      badge: 'Search Leader',
      icon: Globe,
      channels: [
        { name: 'Search Ads', spend: '₹10L/mo', badge: 'Intent' },
        { name: 'Display Network', reach: '2M', badge: 'Awareness' },
        { name: 'Shopping Ads', roas: '15x', badge: 'E-Com' },
        { name: 'YouTube Ads', views: '500K', badge: 'Video' }
      ]
    },
    meta: {
      name: 'Meta Ads',
      badge: 'Social Giant',
      icon: Users,
      channels: [
        { name: 'Facebook Ads', audience: '50L', badge: 'Broad' },
        { name: 'Instagram Ads', engagement: '8%', badge: 'Visual' },
        { name: 'Messenger Ads', ctr: '12%', badge: 'Direct' },
        { name: 'Audience Network', reach: '10M', badge: 'Extended' }
      ]
    },
    linkedin: {
      name: 'LinkedIn Ads',
      badge: 'B2B King',
      icon: Briefcase,
      channels: [
        { name: 'Sponsored Content', cpl: '₹2K', badge: 'Lead' },
        { name: 'InMail Campaigns', open: '45%', badge: 'Direct' },
        { name: 'Text Ads', budget: 'Low', badge: 'Efficient' },
        { name: 'Video Ads', view: '60%', badge: 'Engage' }
      ]
    },
    advanced: {
      name: 'Advanced',
      badge: 'Multi-Channel',
      icon: Zap,
      channels: [
        { name: 'Remarketing', roas: '20x', badge: 'Re-Target' },
        { name: 'Lookalike Audiences', scale: '10x', badge: 'Similar' },
        { name: 'Sequential Ads', convert: '25%', badge: 'Journey' },
        { name: 'Dynamic Ads', auto: 'AI', badge: 'Smart' }
      ]
    }
  };

  // Social Media Services with Tabs
  const socialPlatforms = {
    organic: {
      title: 'Organic Growth',
      badge: 'Free',
      services: [
        { name: 'Content Strategy', badge: 'Viral' },
        { name: 'Community Building', badge: 'Engaged' },
        { name: 'Influencer Outreach', badge: 'Partner' },
        { name: 'Trend Jacking', badge: 'Timely' }
      ]
    },
    paid: {
      title: 'Paid Social',
      badge: 'Scale',
      services: [
        { name: 'Campaign Management', badge: 'Expert' },
        { name: 'A/B Testing', badge: 'Optimize' },
        { name: 'Audience Targeting', badge: 'Precise' },
        { name: 'Budget Optimization', badge: 'Smart' }
      ]
    },
    content: {
      title: 'Content Creation',
      badge: 'Creative',
      services: [
        { name: 'Video Production', badge: 'HD' },
        { name: 'Graphic Design', badge: 'Pro' },
        { name: 'Copywriting', badge: 'Convert' },
        { name: 'Meme Marketing', badge: 'Viral' }
      ]
    }
  };

  // Process (4 PHASES WITH TIMELINE)
  const processPhases = [
    { 
      step: '01', 
      title: 'Discovery', 
      time: 'Week 1',
      description: 'Deep audit. Competitor intel. Market gaps.',
      icon: Search,
      badge: 'Audit'
    },
    { 
      step: '02', 
      title: 'Strategy', 
      time: 'Week 2',
      description: 'Custom roadmap. Clear KPIs. Winning tactics.',
      icon: Brain,
      badge: 'Plan'
    },
    { 
      step: '03', 
      title: 'Execution', 
      time: 'Week 3-4',
      description: 'Multi-channel launch. Creative excellence.',
      icon: Rocket,
      badge: 'Launch'
    },
    { 
      step: '04', 
      title: 'Optimization', 
      time: 'Ongoing',
      description: 'A/B testing. Data analysis. Scale wins.',
      icon: TrendingUp,
      badge: 'Scale'
    }
  ];

  // Investment Plans (3 TIERS WITH MORE BADGES)
  const investmentPlans = [
    {
      name: 'Starter',
      price: '₹25,000',
      period: '/mo',
      savings: null,
      description: 'Launch your digital presence',
      badge: 'For Startups',
      features: [
        { text: '15 keywords', badge: 'SEO' },
        { text: '2 social platforms', badge: 'Social' },
        { text: 'Monthly reports', badge: 'Analytics' },
        { text: 'Email support', badge: 'Support' }
      ],
      cta: 'Start Growing',
      popular: false
    },
    {
      name: 'Growth',
      price: '₹50,000',
      period: '/mo',
      savings: 'Save ₹10K',
      description: 'Dominate your market',
      badge: 'Most Popular',
      features: [
        { text: '30 keywords', badge: 'SEO+' },
        { text: 'Google Ads', badge: 'PPC' },
        { text: '4 social platforms', badge: 'Social+' },
        { text: 'Weekly calls', badge: 'Strategy' },
        { text: 'Account manager', badge: 'Dedicated' }
      ],
      cta: 'Get Started',
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      savings: null,
      description: 'Full-stack domination',
      badge: 'Premium',
      features: [
        { text: 'Unlimited campaigns', badge: 'All-In' },
        { text: 'Multi-channel', badge: 'Omni' },
        { text: 'C-level strategy', badge: 'Executive' },
        { text: '24/7 support', badge: 'Priority' },
        { text: 'Custom dashboard', badge: 'Tech' }
      ],
      cta: 'Contact Us',
      popular: false
    }
  ];

  // Tech Stack (12 TOOLS WITH CATEGORIES)
  const techStack = {
    analytics: {
      title: 'Analytics',
      tools: ['Google Analytics 4', 'Mixpanel', 'Hotjar']
    },
    seo: {
      title: 'SEO',
      tools: ['SEMrush', 'Ahrefs', 'Screaming Frog']
    },
    advertising: {
      title: 'Advertising',
      tools: ['Google Ads', 'Meta Business', 'LinkedIn Campaign Manager']
    },
    automation: {
      title: 'Automation',
      tools: ['HubSpot', 'Mailchimp', 'Zapier']
    }
  };

  // Industries (12 SECTORS WITH BADGES)
  const industries = [
    { name: 'E-Commerce', badge: '15x' },
    { name: 'SaaS', badge: 'B2B' },
    { name: 'Healthcare', badge: 'Trust' },
    { name: 'Real Estate', badge: 'Leads' },
    { name: 'Education', badge: 'Scale' },
    { name: 'Finance', badge: 'BFSI' },
    { name: 'Fashion', badge: 'Trend' },
    { name: 'Food & Beverage', badge: 'Local' },
    { name: 'Technology', badge: 'B2B' },
    { name: 'Hospitality', badge: 'OTA' },
    { name: 'Automotive', badge: 'Dealer' },
    { name: 'Manufacturing', badge: 'B2B' }
  ];

  // Success Stories (3 CASES WITH ENHANCED BADGES)
  const successStories = [
    { 
      client: 'Fashion E-Com', 
      result: '450%', 
      metric: 'Revenue Growth',
      time: '6 months',
      badge: 'E-Commerce',
      icon: TrendingUp 
    },
    { 
      client: 'Healthcare Chain', 
      result: '23x', 
      metric: 'Return on Ad Spend',
      time: '3 months',
      badge: 'Healthcare',
      icon: DollarSign 
    },
    { 
      client: 'SaaS Startup', 
      result: '80K+', 
      metric: 'Qualified Leads',
      time: '5 months',
      badge: 'SaaS',
      icon: Users 
    }
  ];

  // Why Choose Us (6 ADVANTAGES WITH BADGES)
  const advantages = [
    { 
      icon: Award, 
      title: 'Certified Experts', 
      description: 'Google & Meta partners', 
      badge: 'Verified',
      stat: '15+'
    },
    { 
      icon: Shield, 
      title: 'Performance Guarantee', 
      description: 'Results or refund', 
      badge: 'Risk-Free',
      stat: '100%'
    },
    { 
      icon: Clock, 
      title: 'Fast Support', 
      description: 'Response in <2 hours', 
      badge: 'Priority',
      stat: '<2hr'
    },
    { 
      icon: DollarSign, 
      title: 'Transparent ROI', 
      description: 'Live dashboards', 
      badge: 'Real-Time',
      stat: '24/7'
    },
    { 
      icon: Users, 
      title: 'Dedicated Team', 
      description: '5+ specialists per account', 
      badge: 'Expert',
      stat: '5+'
    },
    { 
      icon: Gauge, 
      title: 'Quick Results', 
      description: 'Traffic in 24-48 hours', 
      badge: 'Fast',
      stat: '48hr'
    }
  ];

  // FAQ (4 CRITICAL WITH BADGES)
  const faqs = [
    {
      question: 'How fast can I see results?',
      answer: 'PPC: Traffic within 24-48 hours. SEO: First page rankings in 60-90 days. Social: Engagement spike in 2-4 weeks. Guaranteed.',
      badge: 'Timeline'
    },
    {
      question: 'What\'s your competitive advantage?',
      answer: 'Performance obsession. We optimize for revenue, not vanity metrics. Every rupee tracked. Every campaign tested. Zero guesswork.',
      badge: 'Advantage'
    },
    {
      question: 'Do you work with small businesses?',
      answer: 'Yes! 100+ startups scaled from zero to market leaders. Flexible packages. No lock-ins. Growth-first.',
      badge: 'Startups'
    },
    {
      question: 'What industries do you specialize in?',
      answer: 'E-commerce, SaaS, healthcare, real estate, education, finance, and 10+ more. Industry-specific strategies.',
      badge: 'Expertise'
    }
  ];

  // Testimonials (3 POWERFUL WITH RATINGS)
  const testimonials = [
    { 
      name: 'Amit Patel', 
      company: 'TechNova Solutions', 
      text: '7x ROI in 3 months. Best investment we made.', 
      rating: 5,
      badge: 'SaaS',
      result: '7x ROI'
    },
    { 
      name: 'Sneha Reddy', 
      company: 'Glamour Studio', 
      text: '200 to 50K followers. Game changer!', 
      rating: 5,
      badge: 'Beauty',
      result: '50K+'
    },
    { 
      name: 'Rajesh Kumar', 
      company: 'BuildMart', 
      text: '500 quality leads per month. Consistent.', 
      rating: 5,
      badge: 'Real Estate',
      result: '500/mo'
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/digital-marketing')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'Digital Marketing Services',
          description: 'Performance-driven digital marketing in Indore. SEO, PPC, social media, content marketing. Guaranteed ROI.',
          serviceType: 'Digital Marketing',
          url: '/services/digital-marketing'
        }}
      />
      <SchemaMarkup type="organization" />
      <EnhancedSchemaMarkup 
        page="services" 
        serviceData={{
          name: 'Digital Marketing Services',
          description: 'Full-stack digital marketing: SEO domination, PPC excellence, social media mastery. Data-driven strategies. Guaranteed growth.',
          price: 'Starting from ₹25,000/month'
        }}
      />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Digital Marketing' }]} />

      <div className="pt-20">
        {/* Hero Section - POWER OPENING WITH BADGES */}
        <StackingSection index={0} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black hover:bg-yellow-400">
                  #1 Agency
                </Badge>
                <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                  Indore
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  200+ Clients
                </Badge>
              </div>
              <h1 className="mb-4">Dominate. Scale. Win.</h1>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Performance-obsessed digital marketing. Clicks → Customers. Campaigns → Cash flow.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6">
                  <Rocket className="mr-2 h-5 w-5" />
                  Get Free Strategy
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  <Play className="mr-2 h-5 w-5" />
                  View Success Stories
                </Button>
              </div>
              
              {/* Hero Stats Grid */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {heroStats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="bg-white/5 border border-white/10 rounded-xl p-4 hover:border-yellow-500/30 transition-all">
                      <Badge className="bg-yellow-500/20 text-yellow-500 mb-2">
                        {stat.badge}
                      </Badge>
                      <div className="flex items-center gap-2 mb-1">
                        <Icon className="h-4 w-4 text-yellow-500" />
                        <div className="text-yellow-500" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                          {stat.metric}
                        </div>
                      </div>
                      <div className="text-gray-400">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Core Services - ACCORDION WITH ENHANCED BADGES */}
        <StackingSection index={1} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Core Services
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  4 Pillars
                </Badge>
              </div>
              <h2 className="mb-8">Digital Dominance Arsenal</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {coreServices.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 hover:scale-105 transition-all group">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center group-hover:border-yellow-500/30 transition-all">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                            {service.badge}
                          </Badge>
                        </div>
                        <h3 className="mb-1">{service.title}</h3>
                        <p className="text-yellow-500 mb-3" style={{ fontSize: '13px' }}>{service.tagline}</p>
                        <p className="text-gray-300 mb-4">{service.description}</p>
                        <div className="flex items-center justify-between pt-4 border-t border-white/10">
                          <div>
                            <div className="text-yellow-500" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                              {service.stat}
                            </div>
                            <div className="text-gray-400" style={{ fontSize: '11px' }}>
                              {service.statLabel}
                            </div>
                          </div>
                          <ArrowRight className="h-5 w-5 text-yellow-500 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* SEO Services - TABS WITH BADGES */}
        <StackingSection index={2} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Search Domination
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Page 1 Guaranteed
                </Badge>
              </div>
              <h2 className="mb-8">SEO Services</h2>
              
              <Tabs defaultValue="technical" className="w-full">
                <TabsList className="bg-white/5 border border-white/10 p-1 mb-6 w-full md:w-auto">
                  <TabsTrigger value="technical" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                    Technical
                  </TabsTrigger>
                  <TabsTrigger value="onPage" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                    On-Page
                  </TabsTrigger>
                  <TabsTrigger value="offPage" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                    Off-Page
                  </TabsTrigger>
                </TabsList>

                {Object.entries(seoCategories).map(([key, category]) => (
                  <TabsContent key={key} value={key}>
                    <Card className="bg-black border border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <h3>{category.title}</h3>
                          <Badge className="bg-yellow-500/20 text-yellow-500">
                            {category.badge}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {category.items.map((item, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 transition-all">
                              <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                                <span className="text-gray-300">{item.name}</span>
                              </div>
                              <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                                {item.badge}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </StackingSection>

        {/* PPC Advertising - TABS WITH PLATFORMS */}
        <StackingSection index={3} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Paid Advertising
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  10x ROAS
                </Badge>
              </div>
              <h2 className="mb-8">PPC Mastery</h2>
              
              <Tabs defaultValue="google" className="w-full">
                <TabsList className="bg-white/5 border border-white/10 p-1 mb-6 w-full md:w-auto flex-wrap">
                  {Object.entries(ppcPlatforms).map(([key, platform]) => (
                    <TabsTrigger 
                      key={key} 
                      value={key}
                      className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black"
                    >
                      {platform.name}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {Object.entries(ppcPlatforms).map(([key, platform]) => {
                  const Icon = platform.icon;
                  return (
                    <TabsContent key={key} value={key}>
                      <Card className="bg-black border border-white/10">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-6">
                            <div className="w-10 h-10 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                              <Icon className="h-5 w-5 text-white" />
                            </div>
                            <h3>{platform.name}</h3>
                            <Badge className="bg-yellow-500/20 text-yellow-500">
                              {platform.badge}
                            </Badge>
                          </div>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {platform.channels.map((channel, idx) => (
                              <div key={idx} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 transition-all">
                                <div className="flex items-start justify-between mb-2">
                                  <div className="flex items-center gap-2">
                                    <CheckCircle2 className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                                    <span className="text-white">{channel.name}</span>
                                  </div>
                                  <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                                    {channel.badge}
                                  </Badge>
                                </div>
                                <div className="text-gray-400 pl-6">
                                  {Object.entries(channel).filter(([k]) => k !== 'name' && k !== 'badge').map(([k, v]) => (
                                    <div key={k}>
                                      <span className="capitalize">{k}:</span> <span className="text-yellow-500">{v}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  );
                })}
              </Tabs>
            </div>
          </div>
        </StackingSection>

        {/* Social Media - TABS */}
        <StackingSection index={4} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Social Media
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Viral Growth
                </Badge>
              </div>
              <h2 className="mb-8">Social Domination</h2>
              
              <Tabs defaultValue="organic" className="w-full">
                <TabsList className="bg-white/5 border border-white/10 p-1 mb-6 w-full md:w-auto">
                  <TabsTrigger value="organic" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                    Organic
                  </TabsTrigger>
                  <TabsTrigger value="paid" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                    Paid
                  </TabsTrigger>
                  <TabsTrigger value="content" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
                    Content
                  </TabsTrigger>
                </TabsList>

                {Object.entries(socialPlatforms).map(([key, platform]) => (
                  <TabsContent key={key} value={key}>
                    <Card className="bg-black border border-white/10">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-6">
                          <h3>{platform.title}</h3>
                          <Badge className="bg-yellow-500/20 text-yellow-500">
                            {platform.badge}
                          </Badge>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {platform.services.map((service, idx) => (
                            <div key={idx} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 transition-all">
                              <div className="flex items-center gap-3">
                                <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0" />
                                <span className="text-gray-300">{service.name}</span>
                              </div>
                              <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                                {service.badge}
                              </Badge>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>
          </div>
        </StackingSection>

        {/* Process - TIMELINE WITH BADGES */}
        <StackingSection index={5} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Our Process
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  4 Phases
                </Badge>
              </div>
              <h2 className="mb-8">Growth System</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {processPhases.map((phase, index) => {
                  const Icon = phase.icon;
                  return (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 hover:scale-105 transition-all group relative">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-2 mb-4">
                          <Badge className="bg-yellow-500 text-black">
                            {phase.step}
                          </Badge>
                          <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                            {phase.badge}
                          </Badge>
                        </div>
                        <Icon className="h-10 w-10 mb-4 text-yellow-500 group-hover:scale-110 transition-transform" />
                        <h3 className="mb-2">{phase.title}</h3>
                        <p className="text-gray-400 mb-3">{phase.description}</p>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span style={{ fontSize: '11px' }}>{phase.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Investment Plans - PRICING WITH ENHANCED BADGES */}
        <StackingSection index={6} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Pricing
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  No Hidden Costs
                </Badge>
              </div>
              <h2 className="mb-8">Investment Plans</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {investmentPlans.map((plan, index) => (
                  <Card 
                    key={index} 
                    className={`border transition-all ${
                      plan.popular 
                        ? 'bg-yellow-500/10 border-yellow-500/50 scale-105' 
                        : 'bg-black border-white/10 hover:border-yellow-500/50 hover:scale-105'
                    }`}
                  >
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <Badge className={plan.popular ? 'bg-yellow-500 text-black' : 'bg-white/10 text-white'}>
                          {plan.badge}
                        </Badge>
                        {plan.savings && (
                          <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                            {plan.savings}
                          </Badge>
                        )}
                      </div>
                      <h3 className="mb-2">{plan.name}</h3>
                      <div className="flex items-baseline gap-1 mb-3">
                        <span className="text-yellow-500" style={{ fontSize: '32px', fontWeight: 'bold' }}>
                          {plan.price}
                        </span>
                        <span className="text-gray-400">{plan.period}</span>
                      </div>
                      <p className="text-gray-400 mb-6">{plan.description}</p>
                      <div className="space-y-3 mb-6">
                        {plan.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <CheckCircle2 className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-300">{feature.text}</span>
                            </div>
                            <Badge variant="outline" className="border-yellow-500/30 text-yellow-500" style={{ fontSize: '10px' }}>
                              {feature.badge}
                            </Badge>
                          </div>
                        ))}
                      </div>
                      <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-full">
                        {plan.cta}
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Tech Stack - CATEGORIZED WITH BADGES */}
        <StackingSection index={7} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Technology
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Enterprise Grade
                </Badge>
              </div>
              <h2 className="mb-8">Tech Stack</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {Object.entries(techStack).map(([key, category]) => (
                  <Card key={key} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <Badge className="bg-yellow-500/20 text-yellow-500 mb-4">
                        {category.title}
                      </Badge>
                      <div className="space-y-3">
                        {category.tools.map((tool, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors">
                            <Package className="h-4 w-4 text-yellow-500" />
                            <span>{tool}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Industries - GRID WITH BADGES */}
        <StackingSection index={8} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Industries
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  12+ Sectors
                </Badge>
              </div>
              <h2 className="mb-8">We Dominate</h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {industries.map((industry, index) => (
                  <div key={index} className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 hover:scale-105 transition-all text-center">
                    <div className="text-white mb-2">{industry.name}</div>
                    <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                      {industry.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Success Stories - ENHANCED WITH BADGES */}
        <StackingSection index={9} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Case Studies
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Real Results
                </Badge>
              </div>
              <h2 className="mb-8">Success Stories</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {successStories.map((story, index) => {
                  const Icon = story.icon;
                  return (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 hover:scale-105 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Badge className="bg-yellow-500/20 text-yellow-500">
                            {story.badge}
                          </Badge>
                          <Icon className="h-6 w-6 text-yellow-500" />
                        </div>
                        <h3 className="mb-2">{story.client}</h3>
                        <div className="mb-3">
                          <div className="text-yellow-500 mb-1" style={{ fontSize: '32px', fontWeight: 'bold', lineHeight: 1 }}>
                            {story.result}
                          </div>
                          <div className="text-gray-400">{story.metric}</div>
                        </div>
                        <div className="flex items-center gap-2 text-gray-500">
                          <Clock className="h-4 w-4" />
                          <span style={{ fontSize: '13px' }}>{story.time}</span>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Why Choose Us - 6 ADVANTAGES */}
        <StackingSection index={10} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Why Inchtomilez
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  6 Advantages
                </Badge>
              </div>
              <h2 className="mb-8">The Inchtomilez Edge</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {advantages.map((advantage, index) => {
                  const Icon = advantage.icon;
                  return (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all">
                      <CardContent className="p-6">
                        <div className="flex items-start justify-between mb-4">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                          <div className="text-right">
                            <Badge className="bg-yellow-500/20 text-yellow-500 mb-1">
                              {advantage.badge}
                            </Badge>
                            <div className="text-yellow-500" style={{ fontSize: '20px', fontWeight: 'bold' }}>
                              {advantage.stat}
                            </div>
                          </div>
                        </div>
                        <h3 className="mb-2">{advantage.title}</h3>
                        <p className="text-gray-400">{advantage.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Testimonials - WITH RATINGS & BADGES */}
        <StackingSection index={11} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Testimonials
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  5★ Rated
                </Badge>
              </div>
              <h2 className="mb-8">What Clients Say</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {testimonials.map((testimonial, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => (
                            <Star key={i} className="h-4 w-4 fill-yellow-500 text-yellow-500" />
                          ))}
                        </div>
                        <Badge className="bg-yellow-500/20 text-yellow-500">
                          {testimonial.badge}
                        </Badge>
                      </div>
                      <p className="text-gray-300 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div>
                          <div className="text-white">{testimonial.name}</div>
                          <div className="text-gray-400" style={{ fontSize: '13px' }}>{testimonial.company}</div>
                        </div>
                        <Badge variant="outline" className="border-yellow-500/30 text-yellow-500">
                          {testimonial.result}
                        </Badge>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* FAQ - WITH BADGES */}
        <StackingSection index={12} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  FAQ
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Top Questions
                </Badge>
              </div>
              <h2 className="mb-8">Your Questions, Answered</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-4">
                {faqs.map((faq, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`faq-${index}`}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 data-[state=open]:border-yellow-500/50"
                  >
                    <AccordionTrigger className="px-6 py-4 hover:no-underline text-left">
                      <div className="flex items-center gap-3 flex-1">
                        <h3 className="text-white flex-1">{faq.question}</h3>
                        <Badge className="bg-yellow-500/20 text-yellow-500">
                          {faq.badge}
                        </Badge>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </StackingSection>

        {/* CTA Section - FINAL PUSH */}
        <StackingSection index={13} total={totalSections}>
          <div>
            <div className="w-[80vw] text-center">
              <div className="flex items-center justify-center gap-3 mb-4">
                <Badge className="bg-yellow-500 text-black">
                  Ready to Scale?
                </Badge>
                <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                  Free Strategy
                </Badge>
              </div>
              <h2 className="mb-4">Let's 10x Your Business</h2>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                30-minute strategy call. Free audit. Custom roadmap. Zero obligation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Book Strategy Call
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  <MessageSquare className="mr-2 h-5 w-5" />
                  Chat with Expert
                </Button>
              </div>
              <div className="flex flex-wrap items-center justify-center gap-4 text-gray-400">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  No long-term contracts
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  Performance guarantee
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                  Results or refund
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Contact Section */}
        <StackingSection index={14} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <div className="flex items-center gap-3 mb-8">
                <Badge className="bg-yellow-500 text-black">
                  Get in Touch
                </Badge>
                <Badge variant="outline" className="border-white/20 text-white">
                  Response in &lt;2hr
                </Badge>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Phone className="h-6 w-6 text-yellow-500" />
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-500 mb-3">
                      Call Us
                    </Badge>
                    <p className="text-gray-400">+91 9669988666</p>
                    <p className="text-gray-400">+91 9009970709</p>
                  </CardContent>
                </Card>

                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Mail className="h-6 w-6 text-yellow-500" />
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-500 mb-3">
                      Email Us
                    </Badge>
                    <p className="text-gray-400">contact@inchtomilez.com</p>
                  </CardContent>
                </Card>

                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Globe className="h-6 w-6 text-yellow-500" />
                    </div>
                    <Badge className="bg-yellow-500/20 text-yellow-500 mb-3">
                      Visit Us
                    </Badge>
                    <p className="text-gray-400">Vijay Nagar, Indore</p>
                    <p className="text-gray-400">Madhya Pradesh</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Final Stats */}
        <StackingSection index={15} total={totalSections}>
          <div>
            <div className="w-[80vw] text-center">
              <h2 className="mb-8">Join 200+ Winning Brands</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div>
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '40px', fontWeight: 'bold' }}>347%</div>
                  <div className="text-gray-400">Avg Growth</div>
                  <Badge className="bg-yellow-500/20 text-yellow-500 mt-2">Proven</Badge>
                </div>
                <div>
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '40px', fontWeight: 'bold' }}>12.8x</div>
                  <div className="text-gray-400">ROAS</div>
                  <Badge className="bg-yellow-500/20 text-yellow-500 mt-2">Guaranteed</Badge>
                </div>
                <div>
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '40px', fontWeight: 'bold' }}>96%</div>
                  <div className="text-gray-400">Retention</div>
                  <Badge className="bg-yellow-500/20 text-yellow-500 mt-2">Loyal</Badge>
                </div>
                <div>
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '40px', fontWeight: 'bold' }}>200+</div>
                  <div className="text-gray-400">Campaigns</div>
                  <Badge className="bg-yellow-500/20 text-yellow-500 mt-2">Won</Badge>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>
      </div>
    </div>
  );
}
