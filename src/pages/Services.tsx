import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../components/EnhancedSchemaMarkup';
import FAQSchema from '../components/FAQSchema';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { MAIN_PAGES_METADATA } from '../utils/mainPagesMetadata';
import { SERVICES_FAQS } from '../utils/faqData';
import StackingSection from '../components/StackingSection';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Card, CardContent } from '../components/ui/card';
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { 
  Monitor, 
  Megaphone, 
  ShoppingCart, 
  Palette, 
  Video, 
  Sparkles, 
  Pencil, 
  MapPin, 
  FileText, 
  Code, 
  Smartphone, 
  Globe, 
  Target, 
  Gift,
  Users,
  Newspaper,
  ArrowRight,
  CheckCircle2,
  TrendingUp,
  Award,
  Zap,
  Clock,
  DollarSign,
  BarChart3,
  Layers,
  Rocket,
  Shield,
  Lightbulb,
  Settings,
  Star,
  ChevronRight,
  Briefcase,
  HeartHandshake,
  LineChart,
  Package,
  Workflow,
  Brain,
  Gauge
} from 'lucide-react';

export default function Services() {
  const totalSections = 21;
  const metadata = MAIN_PAGES_METADATA.services;
  const [activeProcess, setActiveProcess] = useState<string>('process-1');

  // Auto-cycle through process steps every 4 seconds
  useEffect(() => {
    const processes = ['process-1', 'process-2', 'process-3', 'process-4'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % processes.length;
      setActiveProcess(processes[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Hero Section
  const HeroSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] space-y-6">
        <Badge className="bg-yellow-500 text-black border-0 px-4 py-1">
          360° Solutions
        </Badge>
        <h1 className="mb-4">Comprehensive Digital Marketing Services</h1>
        <p className="text-xl text-gray-300 max-w-3xl">
          End-to-end digital marketing and advertising solutions that transform brands, 
          drive measurable growth, and create lasting competitive advantages
        </p>
        <div className="flex flex-wrap gap-3 pt-4">
          <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
            16 Core Services
          </Badge>
          <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
            20+ Industries
          </Badge>
          <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
            500+ Projects Delivered
          </Badge>
          <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
            10+ Years Experience
          </Badge>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-6 max-w-4xl">
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">300%</div>
            <p className="text-gray-300 text-sm">Avg. ROI Increase</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">97%</div>
            <p className="text-gray-300 text-sm">Client Retention</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">24/7</div>
            <p className="text-gray-300 text-sm">Support Available</p>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-lg p-4 text-center">
            <div className="text-3xl mb-2">2-4x</div>
            <p className="text-gray-300 text-sm">Faster Results</p>
          </div>
        </div>
      </div>
    </div>
  );

  // Service Categories Overview
  const serviceCategories = [
    {
      category: 'Digital Marketing',
      icon: Monitor,
      count: 5,
      description: 'SEO, SEM, Social Media, Content Marketing & Analytics',
      badge: 'Most Popular',
      color: 'yellow'
    },
    {
      category: 'Creative Services',
      icon: Palette,
      count: 4,
      description: 'Branding, Design, Animation & Media Production',
      badge: 'Premium',
      color: 'yellow'
    },
    {
      category: 'Technology Solutions',
      icon: Code,
      count: 3,
      description: 'Web, App & Software Development',
      badge: 'High-Tech',
      color: 'yellow'
    },
    {
      category: 'Offline Marketing',
      icon: MapPin,
      count: 2,
      description: 'OOH, Print Media & Traditional Advertising',
      badge: 'Traditional',
      color: 'yellow'
    },
    {
      category: 'Strategic Services',
      icon: Target,
      count: 2,
      description: 'Political Campaigns, PR & Corporate Gifting',
      badge: 'Specialized',
      color: 'yellow'
    }
  ];

  // Why Choose Our Services
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award-Winning Team',
      description: 'Certified experts with 10+ years of proven industry experience',
      badge: 'Expert Team'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'Average 300% ROI improvement across all client campaigns',
      badge: '300% ROI'
    },
    {
      icon: Zap,
      title: 'Fast Turnaround',
      description: 'Quick execution without compromising quality or creativity',
      badge: '2-4x Faster'
    },
    {
      icon: Shield,
      title: 'Quality Guarantee',
      description: '100% satisfaction guarantee with unlimited revisions',
      badge: 'Guaranteed'
    },
    {
      icon: Clock,
      title: '24/7 Support',
      description: 'Round-the-clock customer support and dedicated account managers',
      badge: 'Always Available'
    },
    {
      icon: DollarSign,
      title: 'Transparent Pricing',
      description: 'No hidden costs, clear packages, and flexible payment options',
      badge: 'Fair Pricing'
    }
  ];

  // Our Process
  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Research',
      description: 'Deep dive into your business, audience, competitors, and goals',
      icon: Lightbulb,
      badge: 'Foundation'
    },
    {
      step: '02',
      title: 'Strategy & Planning',
      description: 'Custom roadmap with KPIs, timelines, and budget allocation',
      icon: Brain,
      badge: 'Strategy'
    },
    {
      step: '03',
      title: 'Creative Execution',
      description: 'Professional implementation across all channels and touchpoints',
      icon: Rocket,
      badge: 'Launch'
    },
    {
      step: '04',
      title: 'Monitor & Optimize',
      description: 'Continuous tracking, A/B testing, and performance optimization',
      icon: Gauge,
      badge: 'Growth'
    }
  ];

  // Service Packages
  const servicePackages = [
    {
      name: 'Starter Package',
      price: 'Custom',
      description: 'Perfect for startups and small businesses',
      icon: Package,
      features: [
        '1-2 Core Services',
        'Basic Strategy',
        'Monthly Reporting',
        'Email Support',
        '3-Month Commitment'
      ],
      badge: 'Startup Friendly',
      popular: false
    },
    {
      name: 'Growth Package',
      price: 'Custom',
      description: 'Ideal for growing businesses scaling fast',
      icon: TrendingUp,
      features: [
        '3-5 Core Services',
        'Advanced Strategy',
        'Weekly Reporting',
        'Priority Support',
        '6-Month Commitment'
      ],
      badge: 'Most Popular',
      popular: true
    },
    {
      name: 'Enterprise Package',
      price: 'Custom',
      description: 'Complete solution for established brands',
      icon: Briefcase,
      features: [
        'All 16 Services',
        'Custom Strategy',
        'Real-time Dashboard',
        'Dedicated Manager',
        '12-Month Partnership'
      ],
      badge: 'Premium',
      popular: false
    }
  ];

  // Tools & Technologies
  const toolsAndTech = [
    { name: 'Google Ads', category: 'Advertising' },
    { name: 'Meta Business', category: 'Social' },
    { name: 'Google Analytics', category: 'Analytics' },
    { name: 'SEMrush', category: 'SEO' },
    { name: 'HubSpot', category: 'CRM' },
    { name: 'Adobe Creative Suite', category: 'Design' },
    { name: 'Figma', category: 'Design' },
    { name: 'After Effects', category: 'Animation' },
    { name: 'React', category: 'Development' },
    { name: 'WordPress', category: 'CMS' },
    { name: 'Shopify', category: 'E-commerce' },
    { name: 'AWS', category: 'Cloud' },
    { name: 'Mailchimp', category: 'Email' },
    { name: 'Hootsuite', category: 'Social' },
    { name: 'Canva Pro', category: 'Design' },
    { name: 'Zapier', category: 'Automation' }
  ];

  // Service Section Component
  const ServiceSection = ({ 
    title, 
    description, 
    category,
    icon: Icon,
    features,
    path
  }: { 
    title: string; 
    description: string;
    category: string;
    icon: any;
    features: string[];
    path: string;
  }) => (
    <div className="flex items-center justify-center h-full px-8 md:px-16 py-8">
      <div className="w-[80vw] space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Icon className="h-10 w-10 text-white" />
            <Badge variant="outline" className="text-gray-400 border-white/10 px-3 py-1">
              {category}
            </Badge>
          </div>
          <Badge className="bg-yellow-500 text-black">
            Popular Service
          </Badge>
        </div>

        {/* Title & Description */}
        <div className="space-y-3">
          <h2>{title}</h2>
          <p className="text-lg text-gray-300 max-w-3xl leading-relaxed">
            {description}
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-4xl">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="flex items-start gap-3 bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 transition-all duration-300 hover:scale-105"
            >
              <CheckCircle2 className="h-5 w-5 text-yellow-500 flex-shrink-0 mt-0.5" />
              <span className="text-gray-300">{feature}</span>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="flex flex-wrap gap-3 pt-2">
          <Link to={path}>
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-6 py-3 gap-2">
              Explore {title}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-6 py-3">
            Request Quote
          </Button>
        </div>
      </div>
    </div>
  );

  // Services Data
  const services = [
    {
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies that drive qualified traffic, boost conversions, and maximize ROI through SEO, SEM, social media, content marketing, and advanced analytics.",
      category: "DIGITAL",
      icon: Monitor,
      path: "/services/digital-marketing",
      features: [
        "SEO & SEM strategies that dominate search rankings",
        "Social media campaigns with viral potential",
        "Data-driven performance marketing & analytics",
        "Content marketing that tells your brand story",
        "Email marketing automation & nurture sequences",
        "Conversion rate optimization (CRO) strategies"
      ]
    },
    {
      title: "Advertising",
      description: "Multi-channel advertising campaigns that cut through the noise, capture attention, and drive measurable results across Google, Meta, LinkedIn, and programmatic platforms.",
      category: "DIGITAL",
      icon: Megaphone,
      path: "/services/advertising",
      features: [
        "Multi-channel ad campaigns (Google, Meta, LinkedIn)",
        "Programmatic advertising & retargeting strategies",
        "Creative ad concepts that stop the scroll",
        "ROI-focused media buying & optimization",
        "Display advertising & banner campaigns",
        "Video advertising & YouTube marketing"
      ]
    },
    {
      title: "E-Commerce Marketing",
      description: "End-to-end e-commerce growth strategies that optimize product listings, increase conversions, reduce cart abandonment, and scale revenue across all major platforms.",
      category: "DIGITAL",
      icon: ShoppingCart,
      path: "/services/ecommerce",
      features: [
        "Marketplace optimization (Amazon, Flipkart, Shopify)",
        "Conversion rate optimization & funnel analysis",
        "Email & SMS marketing automation",
        "Product photography & listing enhancement",
        "Shopping ads & product feed optimization",
        "Customer retention & loyalty programs"
      ]
    },
    {
      title: "Branding",
      description: "Strategic brand development that creates memorable identities, builds emotional connections, and establishes lasting market positions through cohesive visual and verbal systems.",
      category: "CREATIVE",
      icon: Palette,
      path: "/services/branding",
      features: [
        "Brand identity & logo design systems",
        "Brand strategy & positioning frameworks",
        "Visual language & style guide development",
        "Brand refresh & evolution consulting",
        "Brand messaging & tone of voice",
        "Brand architecture & portfolio strategy"
      ]
    },
    {
      title: "Media Production",
      description: "Professional video and photography production services that capture attention, evoke emotions, and deliver cinematic quality content for all your marketing needs.",
      category: "CREATIVE",
      icon: Video,
      path: "/services/media-production",
      features: [
        "Commercial & corporate video production",
        "Product photography & lifestyle shoots",
        "Drone videography & aerial cinematography",
        "Post-production editing & color grading",
        "Event coverage & live streaming",
        "Documentary & testimonial videos"
      ]
    },
    {
      title: "Animation",
      description: "Cutting-edge animation services that bring ideas to life through 2D/3D character animation, motion graphics, explainer videos, and visual effects that engage and inform.",
      category: "CREATIVE",
      icon: Sparkles,
      path: "/services/animation",
      features: [
        "2D & 3D character animation",
        "Motion graphics & explainer videos",
        "Logo animation & kinetic typography",
        "VFX & visual effects integration",
        "Whiteboard animation & illustration",
        "Interactive animations for web & app"
      ]
    },
    {
      title: "Graphic Designing",
      description: "Stunning visual design that communicates clearly, reinforces brand identity, and creates cohesive experiences across all digital and print touchpoints.",
      category: "CREATIVE",
      icon: Pencil,
      path: "/services/graphic-designing",
      features: [
        "Marketing collateral & campaign visuals",
        "Social media graphics & templates",
        "Packaging design & label creation",
        "Infographics & presentation design",
        "Print design (brochures, flyers, posters)",
        "UI/UX design for digital products"
      ]
    },
    {
      title: "OOH Services",
      description: "Strategic out-of-home advertising that maximizes visibility, creates memorable brand experiences, and drives offline-to-online conversions through high-impact placements.",
      category: "OFFLINE",
      icon: MapPin,
      path: "/services/ooh-services",
      features: [
        "Billboard & hoarding design & placement",
        "Transit advertising (metro, bus, auto)",
        "Mall & retail space activations",
        "Airport & railway station branding",
        "Digital OOH (DOOH) campaigns",
        "Street furniture & kiosk advertising"
      ]
    },
    {
      title: "Print Media",
      description: "Premium print design and production services that create tangible brand experiences through high-quality materials, expert craftsmanship, and attention to detail.",
      category: "OFFLINE",
      icon: FileText,
      path: "/services/print-media",
      features: [
        "Brochures, catalogs & product lookbooks",
        "Magazine & newspaper ad design",
        "Business cards & corporate stationery",
        "Packaging & label printing solutions",
        "Direct mail campaigns & flyers",
        "Annual reports & company profiles"
      ]
    },
    {
      title: "Software Development",
      description: "Custom enterprise software solutions built with modern technologies, scalable architectures, and best practices to solve complex business challenges and drive digital transformation.",
      category: "TECH",
      icon: Code,
      path: "/services/software-development",
      features: [
        "Custom enterprise software solutions",
        "CRM & ERP system development",
        "API integration & microservices",
        "Cloud-based SaaS platforms",
        "Database design & optimization",
        "Legacy system modernization"
      ]
    },
    {
      title: "Application Development",
      description: "Native and cross-platform mobile apps that deliver seamless user experiences, drive engagement, and help you reach customers wherever they are with feature-rich functionality.",
      category: "TECH",
      icon: Smartphone,
      path: "/services/application-development",
      features: [
        "iOS & Android native app development",
        "Cross-platform apps (React Native, Flutter)",
        "UI/UX design & prototyping",
        "App store optimization & deployment",
        "In-app analytics & user tracking",
        "Push notifications & engagement features"
      ]
    },
    {
      title: "Website Development",
      description: "Fast, responsive, SEO-optimized websites built on modern frameworks that convert visitors into customers and provide exceptional user experiences across all devices.",
      category: "TECH",
      icon: Globe,
      path: "/services/website-development",
      features: [
        "Responsive & mobile-first websites",
        "E-commerce platforms (Shopify, WooCommerce)",
        "CMS integration (WordPress, Webflow)",
        "Performance optimization & SEO setup",
        "Custom web applications & portals",
        "Maintenance & ongoing support"
      ]
    },
    {
      title: "Political Campaigns",
      description: "Comprehensive political campaign management that combines traditional grassroots organizing with digital strategy to build support, manage reputation, and win elections.",
      category: "STRATEGY",
      icon: Target,
      path: "/services/political-campaigns",
      features: [
        "Campaign strategy & messaging frameworks",
        "Multi-channel media planning & buying",
        "Ground activation & grassroots mobilization",
        "Social media & digital reputation management",
        "Opposition research & crisis management",
        "Voter data analysis & micro-targeting"
      ]
    },
    {
      title: "Corporate Gifting",
      description: "Thoughtful corporate gifting solutions that strengthen relationships, show appreciation, and reinforce brand values through customized, high-quality products.",
      category: "STRATEGY",
      icon: Gift,
      path: "/services/corporate-gifting",
      features: [
        "Customized & branded gift solutions",
        "Festival & occasion-based gifting",
        "Employee recognition & appreciation kits",
        "Client engagement & loyalty programs",
        "Bulk ordering & logistics management",
        "Gift packaging & presentation design"
      ]
    },
    {
      title: "Influencer Marketing",
      description: "Strategic influencer partnerships that amplify brand messages, build authentic connections, and drive conversions through trusted voices across all major social platforms.",
      category: "DIGITAL",
      icon: Users,
      path: "/services/influencer-marketing",
      features: [
        "Influencer identification & outreach",
        "Campaign strategy & creative briefing",
        "Performance tracking & analytics",
        "Long-term brand partnerships & collaborations",
        "Micro & macro influencer campaigns",
        "Content rights & usage management"
      ]
    },
    {
      title: "Public Relations",
      description: "Strategic PR campaigns that shape public perception, manage crises, secure media coverage, and build lasting credibility through earned media and thought leadership.",
      category: "STRATEGY",
      icon: Newspaper,
      path: "/services/public-relations",
      features: [
        "Media relations & press release distribution",
        "Crisis management & reputation repair",
        "Thought leadership & executive positioning",
        "Event PR & launch campaigns",
        "Media monitoring & sentiment analysis",
        "Press kit development & media training"
      ]
    }
  ];

  // Industries We Serve
  const industries = [
    'Healthcare', 'Education', 'E-commerce', 'Real Estate', 'Finance', 'Technology',
    'Hospitality', 'Fashion', 'Food & Beverage', 'Automotive', 'Entertainment', 'Sports',
    'Manufacturing', 'Agriculture', 'Legal', 'Non-Profit', 'Beauty', 'Construction',
    'Logistics', 'Pharmaceutical'
  ];

  // Success Metrics
  const successMetrics = [
    {
      metric: '500+',
      label: 'Happy Clients',
      icon: HeartHandshake
    },
    {
      metric: '1000+',
      label: 'Projects Completed',
      icon: CheckCircle2
    },
    {
      metric: '300%',
      label: 'Avg. ROI Increase',
      icon: TrendingUp
    },
    {
      metric: '97%',
      label: 'Client Retention',
      icon: Star
    },
    {
      metric: '20+',
      label: 'Industries Served',
      icon: Briefcase
    },
    {
      metric: '10+',
      label: 'Years Experience',
      icon: Award
    }
  ];

  return (
    <>
      <SEOHead {...metadata} />
      <SchemaMarkup type="organization" />
      <EnhancedSchemaMarkup page="services" />
      <FAQSchema faqs={SERVICES_FAQS} />
      <LocalBusinessSchema />
      <Breadcrumbs items={[{ label: 'Services' }]} />
      
      <div style={{ paddingTop: '120px' }}>
        {/* Hero Section */}
        <StackingSection index={0} total={totalSections}>
          <HeroSection />
        </StackingSection>

        {/* Service Categories Overview - TABS + CARDS GRID */}
        <StackingSection index={1} total={totalSections}>
          <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 overflow-y-auto py-8">
            <div className="w-full md:w-[90vw] lg:w-[80vw] py-4 md:py-8">
              <div className="text-center mb-8 md:mb-12">
                <Badge className="mb-4 bg-yellow-500 text-black">
                  Service Categories
                </Badge>
                <h2 className="mb-4">Explore Our 16 Core Services</h2>
                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                  Browse our comprehensive service portfolio organized by category
                </p>
              </div>

              {/* Tabs + Cards Grid */}
              <Tabs defaultValue="digital" className="w-full">
                {/* Tab Navigation */}
                <TabsList className="grid w-full grid-cols-2 md:grid-cols-5 gap-2 bg-white/5 p-2 rounded-xl mb-8 border border-white/10">
                  <TabsTrigger 
                    value="digital" 
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black transition-all duration-300 rounded-lg"
                  >
                    <Monitor className="w-4 h-4 mr-2" />
                    Digital
                  </TabsTrigger>
                  <TabsTrigger 
                    value="creative" 
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black transition-all duration-300 rounded-lg"
                  >
                    <Palette className="w-4 h-4 mr-2" />
                    Creative
                  </TabsTrigger>
                  <TabsTrigger 
                    value="tech" 
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black transition-all duration-300 rounded-lg"
                  >
                    <Code className="w-4 h-4 mr-2" />
                    Technology
                  </TabsTrigger>
                  <TabsTrigger 
                    value="offline" 
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black transition-all duration-300 rounded-lg"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Offline
                  </TabsTrigger>
                  <TabsTrigger 
                    value="strategy" 
                    className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black transition-all duration-300 rounded-lg"
                  >
                    <Target className="w-4 h-4 mr-2" />
                    Strategy
                  </TabsTrigger>
                </TabsList>

                {/* Digital Marketing Services */}
                <TabsContent value="digital" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.filter(s => s.category === 'DIGITAL').map((service, i) => (
                      <Link key={i} to={service.path} className="block">
                        <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                          <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <service.icon className="text-white mb-3 md:mb-4" />
                            <h3 className="mb-2 text-base md:text-lg">{service.title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2 flex-grow">{service.description}</p>
                            <Button 
                              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-full text-xs md:text-sm gap-2 mt-auto"
                              size="sm"
                              asChild
                            >
                              <span>
                                Explore
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* Creative Services */}
                <TabsContent value="creative" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {services.filter(s => s.category === 'CREATIVE').map((service, i) => (
                      <Link key={i} to={service.path} className="block">
                        <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                          <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <service.icon className="text-white mb-3 md:mb-4" />
                            <h3 className="mb-2 text-base md:text-lg">{service.title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2 flex-grow">{service.description}</p>
                            <Button 
                              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-full text-xs md:text-sm gap-2 mt-auto"
                              size="sm"
                              asChild
                            >
                              <span>
                                Explore
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* Technology Services */}
                <TabsContent value="tech" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.filter(s => s.category === 'TECH').map((service, i) => (
                      <Link key={i} to={service.path} className="block">
                        <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                          <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30 transition-all">
                              <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <h3 className="mb-2 text-base md:text-lg">{service.title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2 flex-grow">{service.description}</p>
                            <Button 
                              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-full text-xs md:text-sm gap-2 mt-auto"
                              size="sm"
                              asChild
                            >
                              <span>
                                Explore
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* Offline Marketing Services */}
                <TabsContent value="offline" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
                    {services.filter(s => s.category === 'OFFLINE').map((service, i) => (
                      <Link key={i} to={service.path} className="block">
                        <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                          <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30 transition-all">
                              <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <h3 className="mb-2 text-base md:text-lg">{service.title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2 flex-grow">{service.description}</p>
                            <Button 
                              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-full text-xs md:text-sm gap-2 mt-auto"
                              size="sm"
                              asChild
                            >
                              <span>
                                Explore
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>

                {/* Strategic Services */}
                <TabsContent value="strategy" className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {services.filter(s => s.category === 'STRATEGY').map((service, i) => (
                      <Link key={i} to={service.path} className="block">
                        <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:scale-105 transition-all duration-300 group cursor-pointer h-full">
                          <CardContent className="p-4 md:p-6 flex flex-col h-full">
                            <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30 transition-all">
                              <service.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                            </div>
                            <h3 className="mb-2 text-base md:text-lg">{service.title}</h3>
                            <p className="text-gray-400 text-xs md:text-sm mb-4 line-clamp-2 flex-grow">{service.description}</p>
                            <Button 
                              className="w-full bg-yellow-500 hover:bg-yellow-400 text-black rounded-full text-xs md:text-sm gap-2 mt-auto"
                              size="sm"
                              asChild
                            >
                              <span>
                                Explore
                                <ArrowRight className="w-3 h-3 md:w-4 md:h-4" />
                              </span>
                            </Button>
                          </CardContent>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </StackingSection>

        {/* Service Sections (16 services) */}
        {services.map((service, index) => (
          <StackingSection key={index + 2} index={index + 2} total={totalSections}>
            <ServiceSection {...service} />
          </StackingSection>
        ))}

        {/* Why Choose Our Services - After service sections (index 18) */}
        <StackingSection index={18} total={totalSections}>
          <div className="w-[80vw] mx-auto py-16">
            <h2 className="mb-8">Why Choose Inchtomilez Services?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {whyChooseUs.map((item, index) => (
                <div
                  key={index}
                  className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-start justify-between mb-4">
                    <item.icon className="h-10 w-10 text-white" />
                    <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                      {item.badge}
                    </Badge>
                  </div>
                  <h3 className="mb-2">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </StackingSection>

        {/* Our Process - AUTO-CYCLING ACCORDION */}
        <StackingSection index={19} total={totalSections}>
          <div className="flex items-center justify-center h-full px-4 md:px-8 lg:px-16 overflow-y-auto">
            <div className="w-full md:w-[90vw] lg:w-[80vw] py-8 md:py-12">
              <div className="text-center mb-8 md:mb-12">
                <Badge className="mb-4 bg-yellow-500 text-black">
                  Our Methodology
                </Badge>
                <h2 className="mb-4">Our Proven 4-Step Process</h2>
                <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto">
                  From discovery to delivery, we follow a proven methodology that ensures exceptional results
                </p>
              </div>

              {/* Auto-Cycling Accordion */}
              <Accordion 
                type="single" 
                collapsible 
                value={activeProcess}
                onValueChange={setActiveProcess}
                className="space-y-4 w-full max-w-4xl mx-auto"
              >
                {processSteps.map((step, idx) => (
                  <AccordionItem 
                    key={`process-${idx + 1}`}
                    value={`process-${idx + 1}`}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 data-[state=open]:border-yellow-500/50 data-[state=open]:bg-white/10"
                  >
                    <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline group">
                      <div className="flex items-center gap-3 md:gap-4 w-full text-left">
                        {/* Step Number Badge */}
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center flex-shrink-0 group-hover:bg-yellow-500/20 transition-all group-data-[state=open]:bg-yellow-500 group-data-[state=open]:text-black">
                          <span className="text-yellow-500 group-data-[state=open]:text-black">{step.step}</span>
                        </div>
                        
                        {/* Icon */}
                        <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 border border-white/10 rounded-full flex items-center justify-center flex-shrink-0 group-hover:border-yellow-500/30 transition-all group-data-[state=open]:border-yellow-500/50">
                          <step.icon className="w-6 h-6 md:w-7 md:h-7 text-white" />
                        </div>
                        
                        {/* Content */}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <h3 className="text-white text-base md:text-lg">{step.title}</h3>
                            <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 text-xs">
                              {step.badge}
                            </Badge>
                          </div>
                          <p className="text-gray-400 text-xs md:text-sm">{step.description}</p>
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-4 md:px-6 pb-4">
                      <div className="pl-0 md:pl-[120px] pr-4">
                        <div className="pt-2 border-t border-white/10">
                          <div className="bg-white/5 rounded-lg p-4 mt-3">
                            <p className="text-gray-300 text-xs md:text-sm leading-relaxed mb-3">
                              {step.title === 'Discovery & Research' && 
                                'We start with comprehensive market research, competitor analysis, audience profiling, and goal setting. This phase includes stakeholder interviews, data collection, and deep-dive workshops to understand your unique challenges and opportunities.'
                              }
                              {step.title === 'Strategy & Planning' && 
                                'Based on insights from discovery, we craft a custom marketing strategy with clear KPIs, detailed timelines, budget allocation, and channel selection. You\'ll receive a comprehensive roadmap that outlines every campaign element and success metric.'
                              }
                              {step.title === 'Creative Execution' && 
                                'Our expert team brings your strategy to life with compelling creative assets, engaging content, and seamless campaign implementation across all selected channels. Every detail is optimized for maximum impact and conversion.'
                              }
                              {step.title === 'Monitor & Optimize' && 
                                'We continuously track performance metrics, conduct A/B testing, and make data-driven optimizations. You\'ll receive regular reports showing ROI, campaign performance, and actionable insights for ongoing improvement.'
                              }
                            </p>
                            
                            {/* Key Deliverables */}
                            <div className="space-y-2">
                              <p className="text-yellow-500 text-xs">Key Deliverables:</p>
                              <ul className="space-y-1 text-gray-400 text-xs">
                                {step.title === 'Discovery & Research' && (
                                  <>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Market & Competitor Analysis</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Audience Personas & Journey Maps</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> SWOT Analysis</li>
                                  </>
                                )}
                                {step.title === 'Strategy & Planning' && (
                                  <>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Comprehensive Marketing Strategy Document</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Campaign Timeline & Budget Breakdown</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> KPI Framework & Success Metrics</li>
                                  </>
                                )}
                                {step.title === 'Creative Execution' && (
                                  <>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Creative Assets (Ads, Content, Designs)</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Campaign Launch & Setup</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Multi-Channel Implementation</li>
                                  </>
                                )}
                                {step.title === 'Monitor & Optimize' && (
                                  <>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> Weekly/Monthly Performance Reports</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> A/B Testing & Optimization Recommendations</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 className="w-3 h-3 text-yellow-500" /> ROI Analysis & Growth Insights</li>
                                  </>
                                )}
                              </ul>
                            </div>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </StackingSection>

        {/* Final CTA Section */}
        <StackingSection index={20} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw] text-center space-y-6">
              <Badge className="bg-yellow-500 text-black border-0 px-4 py-1">
                Ready to Transform Your Business?
              </Badge>
              <h2 className="mb-4">Let's Build Something Amazing Together</h2>
              <p className="text-lg text-gray-300 max-w-3xl mx-auto mb-8">
                Join 500+ businesses that trust Inchtomilez for their digital marketing success. 
                Get a free consultation and custom strategy proposal today.
              </p>
              <div className="flex flex-wrap gap-4 justify-center">
                <Link to="/lets-talk">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-8 py-6 gap-2">
                    Get Free Consultation
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
                  onClick={() => window.open('https://wa.me/919669988666', '_blank')}
                >
                  WhatsApp Us
                </Button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-8 max-w-3xl mx-auto">
                {successMetrics.map((metric, index) => (
                  <div 
                    key={index}
                    className="bg-white/5 border border-white/10 rounded-lg p-4 hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <metric.icon className="h-8 w-8 text-white mx-auto mb-2" />
                    <div className="text-2xl mb-1">{metric.metric}</div>
                    <p className="text-gray-300 text-sm">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>
      </div>
    </>
  );
}
