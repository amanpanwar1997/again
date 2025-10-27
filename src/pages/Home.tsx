import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../components/EnhancedSchemaMarkup';
import FAQSchema from '../components/FAQSchema';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { getPageMetadata } from '../utils/seoMetadata';
import { HOME_FAQS } from '../utils/faqData';
import StackingSection from '../components/StackingSection';
import HorizontalServiceAccordion from '../components/HorizontalServiceAccordion';
import MobileServiceAccordion from '../components/MobileServiceAccordion';
import MobileServiceTabs from '../components/MobileServiceTabs';
import MobileProcessTimeline from '../components/MobileProcessTimeline';
import MobileImpactTimeline from '../components/MobileImpactTimeline';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '../components/ui/carousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Link } from 'react-router-dom';
import { 
  Rocket, 
  Phone, 
  Target, 
  Brain, 
  Settings, 
  MessageCircle,
  TrendingUp,
  Award,
  Megaphone,
  Film,
  Palette,
  BarChart,
  Globe,
  Search,
  Share2,
  Code,
  Zap,
  Users,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
  Trophy,
  Lightbulb,
  Shield,
  Clock,
  DollarSign,
  TrendingDown,
  Briefcase,
  Layers,
  Activity,
  Package,
  Monitor,
  Smartphone,
  Database,
  Cloud,
  ShoppingCart,
  Heart,
  Stethoscope,
  GraduationCap,
  Home as HomeIcon,
  Car,
  Utensils,
  Camera,
  Building,
  Leaf,
  Truck,
  Scissors,
  Hammer,
  Scale,
  MapPin,
  ChevronDown
} from 'lucide-react';
import { useState, useEffect } from 'react';
import Autoplay from 'embla-carousel-autoplay';

export default function Home() {
  const totalSections = 14;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [activeAward, setActiveAward] = useState<string>('award-1');

  const metadata = getPageMetadata('home');

  // Auto-cycle through awards every 4 seconds
  useEffect(() => {
    const awards = ['award-1', 'award-2', 'award-3', 'award-4'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % awards.length;
      setActiveAward(awards[currentIndex]);
    }, 4000); // 4 seconds per award

    return () => clearInterval(interval);
  }, []);

  // SECTION 1: Hero (Video Background)
  const HeroSection = () => (
    <div className="flex flex-col items-center justify-center h-full px-8 md:px-16">
      <div className="text-left w-[80vw] px-[0px] pt-24 md:pt-32">
        <h1 className="plain-white-hero mb-6 uppercase tracking-wide" style={{ 
          fontFamily: 'Raleway',
          fontSize: '40px !important',
          fontWeight: 'bold',
          color: 'white',
          background: 'none',
          backgroundClip: 'unset',
          WebkitBackgroundClip: 'unset',
          WebkitTextFillColor: 'white',
          textShadow: '0 4px 12px rgba(0, 0, 0, 0.9), 0 2px 4px rgba(0, 0, 0, 0.8)',
          animation: 'none'
        }}>
          DUNIYA KE BRANDS KE PEECHE<br />
          AUR Brands,<br />
          MARKETING AUR ADVERTISING KE PEECHE
        </h1>
        <div className="flex flex-wrap gap-4 justify-start mb-8">
          <Link to="/lets-talk">
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-6 rounded-full">
              <Rocket className="mr-2 h-5 w-5" />
              Let's Talk — Free Consultation
            </Button>
          </Link>
          <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black px-8 py-6 rounded-full">
            <Phone className="mr-2 h-5 w-5" />
            Call Now: 9669988666
          </Button>
        </div>
      </div>
    </div>
  );

  // SECTION 2: Company Introduction
  const CompanyIntroSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <div className="mb-8">
          <div className="inline-block px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
            <span className="text-yellow-500">HI, WE ARE INCHTOMILEZ</span>
          </div>
          <h2 className="mb-4">Not Just Another Agency To Compare Estimates!</h2>
          <p className="text-gray-300 max-w-4xl mb-6">
            Ask us for work samples to compare - You will get the best at INCHTOMILEZ! Since 2021, founded by <span className="text-yellow-500">Aman Panwar</span> in Indore, 
            we've been THE Best Digital Marketing & Advertising Agency crafting Oscar-Winning Stories for brands. We don't just market — we make magic happen!
          </p>
          <p className="text-gray-300 max-w-4xl">
            We weave incredible stories which need years of <span className="text-yellow-500">Experience, Concept & Skills</span>. From Indore to Mumbai, 
            from startups to industry leaders, we deliver measurable growth that actually matters.
          </p>
        </div>

        {/* Mobile Accordion */}
        <Accordion type="single" collapsible className="md:hidden space-y-3">
          {[
            { 
              icon: Trophy, 
              title: 'Since 2021', 
              desc: 'Founded by Aman Panwar — Modern expertise meets cinematic storytelling',
              highlight: 'Award-Winning Founder'
            },
            { 
              icon: Target, 
              title: '200+ Projects', 
              desc: 'Transforming ordinary brands into market-dominating powerhouses',
              highlight: 'Proven Track Record'
            },
            { 
              icon: Star, 
              title: '4.9★ Rating', 
              desc: 'Consistently rated as Indore\'s #1 digital marketing agency',
              highlight: 'Client Satisfaction'
            }
          ].map((item, i) => (
            <AccordionItem 
              key={i} 
              value={`item-${i}`}
              className="bg-white/5 border border-white/20 rounded-lg px-4"
            >
              <AccordionTrigger className="hover:no-underline py-4">
                <div className="flex items-center gap-3 text-left">
                  <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <div>
                    <h3 className="mb-0">{item.title}</h3>
                    <div className="text-yellow-500 text-xs">{item.highlight}</div>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-4 pt-2">
                <p className="text-gray-300 pl-[52px]">{item.desc}</p>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            { 
              icon: Trophy, 
              title: 'Since 2021', 
              desc: 'Founded by Aman Panwar — Modern expertise meets cinematic storytelling',
              highlight: 'Award-Winning Founder'
            },
            { 
              icon: Target, 
              title: '200+ Projects', 
              desc: 'Transforming ordinary brands into market-dominating powerhouses',
              highlight: 'Proven Track Record'
            },
            { 
              icon: Star, 
              title: '4.9★ Rating', 
              desc: 'Consistently rated as Indore\'s #1 digital marketing agency',
              highlight: 'Client Satisfaction'
            }
          ].map((item, i) => (
            <Card 
              key={i}
              className="bg-white/5 border-white/20 hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full mb-4 flex items-center justify-center border-2 border-yellow-500/30">
                  <item.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-yellow-500 mb-2">{item.highlight}</div>
                <h3 className="mb-2">{item.title}</h3>
                <p className="text-gray-300">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );

  // SECTION 3: Why Inchtomilez (Already Complete)
  const WhyInchtomilezSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16 overflow-y-auto">
      <div className="w-[80vw] pt-24 md:pt-32 pb-8">
        <Card className="border-white/20">
          <CardContent className="p-8">
            <div className="text-left">
              <div className="w-20 h-20 bg-yellow-500/20 rounded-full mb-6 flex items-center justify-center border-2 border-yellow-500/50">
                <Award className="h-10 w-10 text-white" />
              </div>
              <h2 className="mb-4">Why Inchtomilez Digital Marketing And Advertising Agency</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2">200+ Brand Transformations</h3>
                      <div className="text-gray-300">
                        Proven success across India with measurable results.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2">16 Services Under One Roof</h3>
                      <div className="text-gray-300">
                        Complete digital solutions from strategy to execution.
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-start gap-3 mb-4">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2">10X Average ROI</h3>
                      <div className="text-gray-300">
                        Data-driven campaigns that deliver real growth.
                      </div>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-yellow-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="mb-2">Award-Winning Team</h3>
                      <div className="text-gray-300">
                        Elite experts with proven excellence.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-6">
                <div className="text-white">
                  <span className="text-yellow-500">We don't just create campaigns — we create market leaders.</span> From startups to enterprises, we transform brands into industry powerhouses across Indore, Madhya Pradesh, and all of India.
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );

  // SECTION 4: Core Values
  const CoreValuesSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-8">
        <h2 className="mb-4">The Inchtomilez Way — We Focus On What Truly Matters</h2>
        <p className="text-gray-300 mb-12 max-w-4xl">
          Best Digital Marketing Agency In Indore — We Raise Our Hand To Claim It! When it comes to Social Media Marketing, 
          Advertising, or Making Brands Shine — <span className="text-yellow-500">HUM HAINA!</span>
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({ delay: 3000, stopOnInteraction: false })
          ]}
          className="w-full"
        >
          <CarouselContent className="-ml-4">
            {[
              {
                icon: TrendingUp,
                title: 'Measurable Growth',
                subtitle: 'We Believe In Results',
                desc: 'We craft long-lasting strategies yielding measurable insights. Not short-term wins — real-time analytics and proven ROI growth that scales.',
                badge: '10X ROI'
              },
              {
                icon: Lightbulb,
                title: 'Simple & Clear',
                subtitle: 'We Are Transparent',
                desc: 'Simple, sound & clear brand communication. No jargon, just results. Clear strategies and transparent processes from day one.',
                badge: 'No Confusion'
              },
              {
                icon: Shield,
                title: 'We Are Not Published',
                subtitle: 'Authenticity Over Awards',
                desc: 'We never pay to get awarded — Our work speaks! Organic recognition, client testimonials matter, results over badges.',
                badge: 'Real Recognition'
              },
              {
                icon: Trophy,
                title: 'We Do Not Bargain!',
                subtitle: 'Premium Quality Guaranteed',
                desc: 'Ask for work samples to compare, not just estimates. Premium quality, years of experience — You get the best at INCHTOMILEZ.',
                badge: 'Best Value'
              }
            ].map((value, i) => (
              <CarouselItem key={i} className="pl-4 md:basis-1/2 lg:basis-1/3">
                <Card 
                  className="bg-white/5 border-white/20 hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 cursor-pointer group h-full"
                  onMouseEnter={() => setHoveredCard(i)}
                  onMouseLeave={() => setHoveredCard(null)}
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <div className="flex items-center justify-between mb-4">
                      <value.icon className={`h-10 w-10 transition-all duration-300 text-white ${hoveredCard === i ? 'scale-110' : ''}`} />
                      <span className="text-yellow-500 border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-500/10">
                        {value.badge}
                      </span>
                    </div>
                    <div className="text-yellow-500 mb-2">{value.subtitle}</div>
                    <h3 className="mb-3">{value.title}</h3>
                    <p className="text-gray-300 flex-grow">{value.desc}</p>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex -left-4 bg-white/5 border-white/20 hover:bg-yellow-500/10 hover:border-yellow-500 text-white" />
          <CarouselNext className="hidden md:flex -right-4 bg-white/5 border-white/20 hover:bg-yellow-500/10 hover:border-yellow-500 text-white" />
        </Carousel>
      </div>
    </div>
  );

  // SECTION 5: Services Explorer (Horizontal Accordion)
  const ServicesSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16 overflow-y-auto">
      <div className="w-[80vw] pt-24 md:pt-32 pb-8">
        <h2 className="text-center mb-4">We Create. We Connect. We Convert.</h2>
        <p className="text-center text-gray-400 mb-12">Explore our comprehensive suite of 16 digital services — All under one roof</p>
        
        {/* Desktop: Horizontal Accordion */}
        <div className="hidden md:block">
          <HorizontalServiceAccordion />
        </div>
        
        {/* Mobile: Vertical Accordion */}
        <div className="block md:hidden">
          <MobileServiceAccordion />
        </div>
      </div>
    </div>
  );

  // SECTION 6: 360° Solutions
  const ThreeSixtySection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <div className="text-center mb-8">
          <h2 className="mb-3">360° Solutions Under One Roof</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            IT + Media + Marketing — Three pillars of digital excellence, seamlessly integrated to deliver complete brand transformation.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card className="bg-white/5 border-white/20 hover:border-yellow-500 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full mb-4 flex items-center justify-center border-2 border-yellow-500/30">
                <Code className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-yellow-500">IT Solutions</h3>
              <p className="text-gray-300 mb-4">
                Custom software, web & mobile applications, cloud solutions — Built for scale, performance, and user delight.
              </p>
              <ul className="space-y-1">
                {[
                  'Software Development',
                  'Web Applications',
                  'Mobile App Development',
                  'Cloud Solutions',
                  'E-Commerce Platforms',
                  'Custom CMS Development'
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/20 hover:border-yellow-500 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full mb-4 flex items-center justify-center border-2 border-yellow-500/30">
                <Film className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-yellow-500">Media Production</h3>
              <p className="text-gray-300 mb-4">
                Video production, animation, photography, graphic design — Creating visual experiences that captivate and convert.
              </p>
              <ul className="space-y-1">
                {[
                  'Video Production',
                  '2D/3D Animation',
                  'Commercial Photography',
                  'Graphic Design',
                  'Motion Graphics',
                  'Brand Photography'
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>

          <Card className="bg-white/5 border-white/20 hover:border-yellow-500 transition-all duration-300">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-yellow-500/10 rounded-full mb-4 flex items-center justify-center border-2 border-yellow-500/30">
                <Megaphone className="h-8 w-8 text-white" />
              </div>
              <h3 className="mb-3 text-yellow-500">Marketing Excellence</h3>
              <p className="text-gray-300 mb-4">
                Digital marketing, advertising, branding, campaigns — Strategic growth through data-driven creativity.
              </p>
              <ul className="space-y-1">
                {[
                  'Digital Marketing',
                  'Social Media Marketing',
                  'SEO & SEM',
                  'Advertising Campaigns',
                  'Brand Strategy',
                  'Political Campaigns'
                ].map((service, i) => (
                  <li key={i} className="flex items-center gap-2 text-gray-400">
                    <CheckCircle className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Mobile: Tabbed Layout */}
        <div className="block md:hidden">
          <MobileServiceTabs />
        </div>
      </div>
    </div>
  );

  // SECTION 7: Our Proven Process
  const ProcessSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <h2 className="mb-4 text-center">From Strategy To Scale — Our Proven 5-Step Process</h2>
        <p className="text-gray-300 mb-12 max-w-3xl text-center mx-auto">
          A battle-tested methodology that transforms vision into measurable results — Every single time.
        </p>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-5 gap-4">
          {[
            {
              step: '01',
              title: 'Audit & Analysis',
              icon: Search,
              desc: 'Deep dive into your business, goals, target audience, competitive landscape, and market opportunities.'
            },
            {
              step: '02',
              title: 'Strategy Development',
              icon: Target,
              desc: 'Comprehensive plan with clear KPIs, timelines, resource allocation, and growth roadmap.'
            },
            {
              step: '03',
              title: 'Creative Execution',
              icon: Palette,
              desc: 'Implementation with precision, creativity, and attention to detail across all touchpoints.'
            },
            {
              step: '04',
              title: 'Performance Optimization',
              icon: BarChart,
              desc: 'Continuous monitoring, A/B testing, data analysis, and strategic refinements for maximum ROI.'
            },
            {
              step: '05',
              title: 'Scale & Growth',
              icon: Rocket,
              desc: 'Amplify what works, expand reach, dominate your market, and achieve exponential growth.'
            }
          ].map((process, i) => (
            <Card 
              key={i}
              className="bg-white/5 border-white/20 hover:bg-yellow-500/10 hover:border-yellow-500 transition-all duration-300 cursor-pointer"
            >
              <CardContent className="p-6 flex flex-col h-full items-center text-center">
                <div className="text-yellow-500 mb-4">{process.step}</div>
                <process.icon className="h-10 w-10 mb-4 text-white" />
                <h3 className="mb-3">{process.title}</h3>
                <p className="text-gray-300 flex-grow">{process.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Animated Vertical Timeline */}
        <div className="block md:hidden">
          <MobileProcessTimeline />
        </div>
      </div>
    </div>
  );

  // SECTION 8: Impact That Matters
  const ImpactSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <div className="text-center mb-12">
          <h2 className="mb-4">Real Numbers. Real Growth. Real Results.</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We don't just talk about results — we deliver them. Here's the measurable impact we've created for brands across India.
          </p>
        </div>

        {/* Desktop: Grid Layout */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            {
              icon: Users,
              number: '200+',
              title: 'Brand Transformations',
              desc: 'Businesses transformed into market leaders across India',
              color: 'text-yellow-500'
            },
            {
              icon: DollarSign,
              number: '₹50Cr+',
              title: 'Revenue Generated',
              desc: 'Total revenue generated for our clients through digital campaigns',
              color: 'text-yellow-500'
            },
            {
              icon: TrendingUp,
              number: '10X',
              title: 'Average ROI',
              desc: 'Industry-leading return on investment across all campaigns',
              color: 'text-yellow-500'
            },
            {
              icon: Heart,
              number: '98%',
              title: 'Client Retention',
              desc: 'Long-term partnerships built on trust and exceptional results',
              color: 'text-yellow-500'
            },
            {
              icon: Star,
              number: '4.9★',
              title: 'Google Rating',
              desc: 'Based on 200+ authentic reviews from satisfied clients',
              color: 'text-yellow-500'
            },
            {
              icon: Target,
              number: '500K+',
              title: 'Leads Generated',
              desc: 'High-quality leads delivered across all industries and platforms',
              color: 'text-yellow-500'
            }
          ].map((metric, i) => (
            <Card 
              key={i}
              className="bg-white/5 border-white/20 hover:border-yellow-500 transition-all duration-300 cursor-pointer group"
            >
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-yellow-500/10 rounded-full mx-auto mb-4 flex items-center justify-center border-2 border-yellow-500/30 group-hover:scale-110 transition-all">
                  <metric.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`mb-2 ${metric.color}`}>{metric.number}</div>
                <h3 className="mb-2">{metric.title}</h3>
                <p className="text-gray-400">{metric.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Mobile: Animated Vertical Timeline */}
        <div className="block md:hidden">
          <MobileImpactTimeline />
        </div>
      </div>
    </div>
  );



  // SECTION 10: Technology Stack
  const TechnologySection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] flex flex-col justify-center items-center">
        {/* Header Section - Centered */}
        <div className="text-center mb-8">
          <h2 className="mb-4">Cutting-Edge Technology Powering Your Success</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We leverage the latest technologies, platforms, and frameworks to build fast, scalable, and future-proof digital solutions.
          </p>
        </div>

        {/* 2-Row Horizontal Auto-Scroll Carousel with Snap */}
        <div className="flex flex-col gap-3 overflow-hidden w-full">
          {/* Row 1 - Slower Scroll */}
          <div className="overflow-hidden relative">
            <div 
              className="flex gap-3 pb-2 w-max"
              style={{
                animation: 'scroll-left-row1 40s linear infinite'
              }}
            >
              {/* Duplicate cards for infinite loop */}
              {[...Array(2)].map((_, duplicateIndex) => (
                [
                  { name: 'Google Analytics', icon: BarChart, category: 'Analytics' },
                  { name: 'SEMrush', icon: Search, category: 'SEO' },
                  { name: 'HubSpot', icon: MessageCircle, category: 'CRM' },
                  { name: 'Adobe Creative', icon: Palette, category: 'Design' },
                  { name: 'React', icon: Code, category: 'Development' },
                  { name: 'WordPress', icon: Globe, category: 'CMS' },
                  { name: 'Shopify', icon: ShoppingCart, category: 'E-Commerce' },
                  { name: 'AWS', icon: Cloud, category: 'Cloud' }
                ].map((tech, i) => (
                  <Card 
                    key={`row1-${duplicateIndex}-${i}`}
                    className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group flex-shrink-0"
                    style={{ width: '180px' }}
                  >
                    <CardContent className="p-3 flex flex-col items-center justify-center text-center h-full">
                      {/* Icon */}
                      <tech.icon className="text-white mb-2" />
                      {/* Category Badge */}
                      <div className="text-yellow-500 mb-1" style={{ fontSize: '10px' }}>{tech.category}</div>
                      {/* Technology Name */}
                      <div className="text-white" style={{ fontSize: '11px' }}>{tech.name}</div>
                    </CardContent>
                  </Card>
                ))
              ))}
            </div>
          </div>

          {/* Row 2 - Faster Scroll (Reverse Direction) */}
          <div className="overflow-hidden relative">
            <div 
              className="flex gap-3 pb-2 w-max"
              style={{
                animation: 'scroll-left-row2 35s linear infinite reverse'
              }}
            >
              {/* Duplicate cards for infinite loop */}
              {[...Array(2)].map((_, duplicateIndex) => (
                [
                  { name: 'MongoDB', icon: Database, category: 'Database' },
                  { name: 'Meta Ads', icon: Share2, category: 'Advertising' },
                  { name: 'Google Ads', icon: Megaphone, category: 'PPC' },
                  { name: 'Figma', icon: Layers, category: 'UI/UX' },
                  { name: 'Node.js', icon: Code, category: 'Backend' },
                  { name: 'Firebase', icon: Database, category: 'Database' },
                  { name: 'Mailchimp', icon: MessageCircle, category: 'Email' },
                  { name: 'Canva', icon: Palette, category: 'Design' }
                ].map((tech, i) => (
                  <Card 
                    key={`row2-${duplicateIndex}-${i}`}
                    className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group flex-shrink-0"
                    style={{ width: '180px' }}
                  >
                    <CardContent className="p-3 flex flex-col items-center justify-center text-center h-full">
                      {/* Icon */}
                      <tech.icon className="text-white mb-2" />
                      {/* Category Badge */}
                      <div className="text-yellow-500 mb-1" style={{ fontSize: '10px' }}>{tech.category}</div>
                      {/* Technology Name */}
                      <div className="text-white" style={{ fontSize: '11px' }}>{tech.name}</div>
                    </CardContent>
                  </Card>
                ))
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // SECTION 11: Success Stories
  const SuccessStoriesSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <div className="text-center mb-12">
          <div className="inline-block px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
            <span className="text-yellow-500">PROVEN EXCELLENCE</span>
          </div>
          <h2 className="mb-4">Brands We've Transformed Into Market Leaders</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Real results for real businesses. See how we've helped brands achieve extraordinary growth through strategic digital marketing.
          </p>
        </div>

        {/* Horizontal Scrolling Cards */}
        <div className="overflow-x-auto snap-x snap-mandatory scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent hover:scrollbar-thumb-white/30 pb-4">
          <div className="flex gap-6 w-max">
            {[
              {
                industry: 'E-Commerce',
                icon: ShoppingCart,
                title: 'Fashion Retailer Success',
                metric: '350% Revenue Growth',
                period: 'In 6 Months',
                desc: 'Complete digital transformation with social media marketing, influencer campaigns, and conversion optimization.',
                results: [
                  'Social media following: 5K → 150K',
                  'Monthly revenue: ₹2L → ₹9L',
                  'Organic traffic increased 400%'
                ]
              },
              {
                industry: 'Healthcare',
                icon: Stethoscope,
                title: 'Medical App Launch',
                metric: '100K+ Downloads',
                period: 'First Month',
                desc: 'End-to-end app development, branding, and launch campaign with targeted digital advertising.',
                results: [
                  'App Store rating: 4.8/5 stars',
                  '50K active users in 30 days',
                  'Featured in Google Play Store'
                ]
              },
              {
                industry: 'Real Estate',
                icon: Building,
                title: 'Property Website Dominance',
                metric: '#1 Google Ranking',
                period: '45 Days',
                desc: 'Comprehensive SEO strategy, content marketing, and local business optimization for maximum visibility.',
                results: [
                  'Ranking for 50+ keywords',
                  'Lead generation up 280%',
                  'Google My Business: 500+ reviews'
                ]
              }
            ].map((story, i) => (
              <Card 
                key={i}
                className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group snap-start flex-shrink-0"
                style={{ width: '600px' }}
              >
                <CardContent className="p-6">
                  {/* Horizontal Layout */}
                  <div className="flex gap-6">
                    {/* Left Side - Icon & Badge */}
                    <div className="flex flex-col items-center gap-3 flex-shrink-0">
                      <story.icon className="text-white" />
                      <span className="text-yellow-500 border border-yellow-500/30 px-3 py-1 rounded-full bg-yellow-500/10 text-xs whitespace-nowrap">
                        {story.industry}
                      </span>
                    </div>

                    {/* Right Side - Content */}
                    <div className="flex-1 min-w-0">
                      <h3 className="mb-3">{story.title}</h3>
                      
                      <div className="mb-4">
                        <div className="text-yellow-500 mb-1">{story.metric}</div>
                        <div className="text-gray-400 text-sm">{story.period}</div>
                      </div>

                      <p className="text-gray-300 mb-4 text-sm leading-relaxed">{story.desc}</p>

                      <div className="space-y-2 mb-4">
                        {story.results.map((result, idx) => (
                          <div key={idx} className="flex items-center gap-2">
                            <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{result}</span>
                          </div>
                        ))}
                      </div>

                      <Button className="bg-yellow-500/10 hover:bg-yellow-500 hover:text-black text-white border border-yellow-500/30 rounded-full w-full">
                        View Full Case Study
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // SECTION 12: Industries We Dominate
  const IndustriesSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16 overflow-y-auto">
      <div className="w-[80vw] pt-24 md:pt-32 pb-8">
        <div className="text-center mb-12">
          <h2 className="mb-4">Specialized Expertise Across 20+ Industries</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            From Healthcare to Hospitality, Fashion to Finance — We speak your industry language and understand your unique challenges.
          </p>
        </div>

        {/* 2-Row Horizontal Auto-Scroll Carousel */}
        <div className="flex-1 min-h-0 flex flex-col gap-4 overflow-hidden">
          {/* Row 1 - Industries 1-10 (Slower Scroll Left) */}
          <div className="overflow-hidden relative">
            <div 
              className="flex gap-4 pb-2 w-max"
              style={{
                animation: 'scroll-left-row1 45s linear infinite'
              }}
            >
              {/* Duplicate cards for infinite loop */}
              {[...Array(2)].map((_, duplicateIndex) => (
                [
                  { name: 'Healthcare', icon: Stethoscope, link: '/industries/healthcare' },
                  { name: 'Education', icon: GraduationCap, link: '/industries/education' },
                  { name: 'Real Estate', icon: HomeIcon, link: '/industries/real-estate' },
                  { name: 'E-Commerce', icon: ShoppingCart, link: '/industries/ecommerce' },
                  { name: 'Technology', icon: Monitor, link: '/industries/technology' },
                  { name: 'Finance', icon: DollarSign, link: '/industries/finance' },
                  { name: 'Hospitality', icon: Utensils, link: '/industries/hospitality' },
                  { name: 'Automotive', icon: Car, link: '/industries/automotive' },
                  { name: 'Fashion', icon: Scissors, link: '/industries/fashion' },
                  { name: 'Food & Beverage', icon: Utensils, link: '/industries/food-beverage' }
                ].map((industry, i) => (
                  <Link to={industry.link} key={`row1-${duplicateIndex}-${i}`}>
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group flex-shrink-0" style={{ width: '200px' }}>
                      <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                        {/* Icon */}
                        <industry.icon className="text-white mb-3" />
                        <div className="text-white text-sm">{industry.name}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ))}
            </div>
          </div>

          {/* Row 2 - Industries 11-20 (Faster Scroll Right - Reverse) */}
          <div className="overflow-hidden relative">
            <div 
              className="flex gap-4 pb-2 w-max"
              style={{
                animation: 'scroll-left-row2 38s linear infinite reverse'
              }}
            >
              {/* Duplicate cards for infinite loop */}
              {[...Array(2)].map((_, duplicateIndex) => (
                [
                  { name: 'Entertainment', icon: Film, link: '/industries/entertainment' },
                  { name: 'Sports', icon: Trophy, link: '/industries/sports' },
                  { name: 'Legal', icon: Scale, link: '/industries/legal' },
                  { name: 'Manufacturing', icon: Hammer, link: '/industries/manufacturing' },
                  { name: 'Agriculture', icon: Leaf, link: '/industries/agriculture' },
                  { name: 'Logistics', icon: Truck, link: '/industries/logistics' },
                  { name: 'Beauty & Wellness', icon: Sparkles, link: '/industries/beauty' },
                  { name: 'Construction', icon: Building, link: '/industries/construction' },
                  { name: 'Pharmaceutical', icon: Activity, link: '/industries/pharmaceutical' },
                  { name: 'Non-Profit', icon: Heart, link: '/industries/non-profit' }
                ].map((industry, i) => (
                  <Link to={industry.link} key={`row2-${duplicateIndex}-${i}`}>
                    <Card className="bg-white/5 border-white/10 hover:bg-white/10 hover:border-yellow-500/30 transition-all duration-300 cursor-pointer group flex-shrink-0" style={{ width: '200px' }}>
                      <CardContent className="p-4 text-center flex flex-col items-center justify-center h-full">
                        {/* Icon */}
                        <industry.icon className="text-white mb-3" />
                        <div className="text-white text-sm">{industry.name}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link to="/industries">
            <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-8 py-6">
              Explore All Industries <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );

  // SECTION 13: Client Testimonials
  const TestimonialsSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <div className="text-center mb-12">
          <h2 className="mb-4">What Industry Leaders Say About Us</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Don't just take our word for it — hear directly from the brands we've helped transform and grow.
          </p>
        </div>

        <Carousel className="w-full">
          <CarouselContent>
            {[
              {
                quote: "InchToMilez transformed our digital presence completely. The ROI has been phenomenal, and the team is incredibly professional. Best decision we ever made for our business!",
                name: "Rajesh Kumar",
                title: "CEO, Tech Innovations Ltd",
                rating: 5
              },
              {
                quote: "Best digital marketing agency we've worked with. Their strategies are data-driven and results-oriented. We saw 300% growth in just 6 months. Highly recommended!",
                name: "Priya Sharma",
                title: "Marketing Director, Fashion Hub",
                rating: 5
              },
              {
                quote: "From branding to digital campaigns, InchToMilez delivered beyond expectations. Our business has grown exponentially. They're not just an agency — they're our growth partners.",
                name: "Amit Patel",
                title: "Founder, Real Estate Pro",
                rating: 5
              },
              {
                quote: "Working with InchToMilez has been a game-changer. Their creative team is brilliant, and they understand our industry deeply. Results speak for themselves — #1 on Google!",
                name: "Sneha Jain",
                title: "Director, Healthcare Solutions",
                rating: 5
              },
              {
                quote: "The most professional and results-driven agency in Indore. They helped us launch our app successfully with 100K+ downloads in the first month. Absolutely phenomenal work!",
                name: "Vikram Singh",
                title: "CTO, MedTech Startup",
                rating: 5
              }
            ].map((testimonial, i) => (
              <CarouselItem key={i}>
                <Card className="bg-white/5 border-white/20">
                  <CardContent className="p-8 md:p-12">
                    <div className="flex gap-1 mb-6">
                      {[...Array(testimonial.rating)].map((_, idx) => (
                        <Star key={idx} className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                      ))}
                    </div>
                    <p className="text-gray-300 mb-8 italic">"{testimonial.quote}"</p>
                    <div className="flex items-center gap-4">
                      <div className="w-16 h-16 bg-yellow-500/20 rounded-full flex items-center justify-center border-2 border-yellow-500/50">
                        <Users className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <div>{testimonial.name}</div>
                        <div className="text-gray-400">{testimonial.title}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="left-0" />
          <CarouselNext className="right-0" />
        </Carousel>
      </div>
    </div>
  );

  // SECTION 14: Awards & Recognition
  const AwardsSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-24 md:pt-32">
        <div className="text-center mb-12">
          <h2 className="mb-4">Industry Recognition & Certifications</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            We never pay for awards — our work speaks louder than badges. Here's the recognition we've earned through exceptional results.
          </p>
        </div>

        {/* Desktop: Horizontal Snap Scroll Cards */}
        <div className="hidden md:block overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2">
          <div className="flex gap-6 min-w-max px-1">
            {[
              {
                id: 'award-1',
                icon: Trophy,
                title: 'Google Premier Partner',
                desc: 'Certified Google Partner for advertising excellence and proven campaign success',
                year: '2023-2024',
                details: 'Recognized by Google for meeting rigorous performance standards, demonstrating expertise in Google Ads, and maintaining client satisfaction scores above 90%. Our campaigns consistently deliver ROI improvements of 200%+ for clients.',
                stats: [
                  { value: '90%+', label: 'Client Satisfaction' },
                  { value: '200%+', label: 'Avg ROI Increase' }
                ]
              },
              {
                id: 'award-2',
                icon: Award,
                title: 'Top Digital Agency Indore',
                desc: 'Ranked #1 digital marketing agency in Indore by industry leaders and clients',
                year: '2024',
                details: 'Earned through consistent delivery of exceptional results across 200+ client campaigns. Our innovative strategies and client-first approach have positioned us as the most trusted agency in central India.',
                stats: [
                  { value: '200+', label: 'Active Clients' },
                  { value: '#1', label: 'Indore Ranking' }
                ]
              },
              {
                id: 'award-3',
                icon: Star,
                title: '4.9★ Google Rating',
                desc: 'Based on 200+ authentic client reviews — highest-rated agency in the region',
                year: 'All-Time',
                details: 'Real feedback from real businesses. Our clients consistently praise our transparency, communication, results-driven approach, and dedication to their success. 95% client retention rate speaks volumes.',
                stats: [
                  { value: '4.9★', label: 'Google Rating' },
                  { value: '95%', label: 'Client Retention' }
                ]
              },
              {
                id: 'award-4',
                icon: Shield,
                title: 'ISO 9001:2015 Certified',
                desc: 'International quality management certification for service excellence',
                year: 'Certified',
                details: 'Demonstrates our commitment to maintaining international standards in quality management, process efficiency, and client satisfaction. Regular audits ensure we consistently meet the highest industry benchmarks.',
                stats: [
                  { value: 'ISO', label: '9001:2015' },
                  { value: '100%', label: 'Quality Standard' }
                ]
              }
            ].map((award) => {
              const Icon = award.icon;
              return (
                <Card 
                  key={award.id}
                  className="bg-white/5 border-white/20 hover:border-yellow-500/30 transition-all duration-300 snap-start flex-shrink-0 w-[500px]"
                >
                  <CardContent className="p-8">
                    {/* Header */}
                    <div className="flex items-start gap-6 mb-6">
                      <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/10 flex-shrink-0">
                        <Icon className="text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-2">
                          <h3>{award.title}</h3>
                          <span className="text-yellow-500 px-3 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full whitespace-nowrap">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-gray-400">{award.desc}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mb-6">
                      <p className="text-gray-300 leading-relaxed">{award.details}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      {award.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-4 text-center border border-white/10">
                          <div className="text-yellow-500 mb-1">{stat.value}</div>
                          <div className="text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        {/* Mobile: Horizontal Auto-Scroll Carousel */}
        <div className="md:hidden overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2">
          <div className="flex gap-4 min-w-max px-1">
            {[
              {
                id: 'award-1',
                icon: Trophy,
                title: 'Google Premier Partner',
                desc: 'Certified Google Partner for advertising excellence and proven campaign success',
                year: '2023-2024',
                details: 'Recognized by Google for meeting rigorous performance standards, demonstrating expertise in Google Ads, and maintaining client satisfaction scores above 90%. Our campaigns consistently deliver ROI improvements of 200%+ for clients.',
                stats: [
                  { value: '90%+', label: 'Client Satisfaction' },
                  { value: '200%+', label: 'Avg ROI Increase' }
                ]
              },
              {
                id: 'award-2',
                icon: Award,
                title: 'Top Digital Agency Indore',
                desc: 'Ranked #1 digital marketing agency in Indore by industry leaders and clients',
                year: '2024',
                details: 'Earned through consistent delivery of exceptional results across 200+ client campaigns. Our innovative strategies and client-first approach have positioned us as the most trusted agency in central India.',
                stats: [
                  { value: '200+', label: 'Active Clients' },
                  { value: '#1', label: 'Indore Ranking' }
                ]
              },
              {
                id: 'award-3',
                icon: Star,
                title: '4.9★ Google Rating',
                desc: 'Based on 200+ authentic client reviews — highest-rated agency in the region',
                year: 'All-Time',
                details: 'Real feedback from real businesses. Our clients consistently praise our transparency, communication, results-driven approach, and dedication to their success. 95% client retention rate speaks volumes.',
                stats: [
                  { value: '4.9★', label: 'Google Rating' },
                  { value: '95%', label: 'Client Retention' }
                ]
              },
              {
                id: 'award-4',
                icon: Shield,
                title: 'ISO 9001:2015 Certified',
                desc: 'International quality management certification for service excellence',
                year: 'Certified',
                details: 'Demonstrates our commitment to maintaining international standards in quality management, process efficiency, and client satisfaction. Regular audits ensure we consistently meet the highest industry benchmarks.',
                stats: [
                  { value: 'ISO', label: '9001:2015' },
                  { value: '100%', label: 'Quality Standard' }
                ]
              }
            ].map((award) => {
              const Icon = award.icon;
              return (
                <Card 
                  key={award.id}
                  className="bg-white/5 border-white/20 hover:border-yellow-500/30 transition-all duration-300 snap-start flex-shrink-0 w-[85vw]"
                >
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/10 flex-shrink-0">
                        <Icon className="text-white w-6 h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-2 mb-1 flex-wrap">
                          <h3 className="text-white">{award.title}</h3>
                          <span className="text-yellow-500 px-2 py-1 bg-yellow-500/10 border border-yellow-500/30 rounded-full whitespace-nowrap">
                            {award.year}
                          </span>
                        </div>
                        <p className="text-gray-400">{award.desc}</p>
                      </div>
                    </div>

                    {/* Details */}
                    <div className="mb-4">
                      <p className="text-gray-300 leading-relaxed">{award.details}</p>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3">
                      {award.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 text-center border border-white/10">
                          <div className="text-yellow-500 mb-1">{stat.value}</div>
                          <div className="text-gray-400">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-yellow-500/10 border-yellow-500/30 inline-block">
            <CardContent className="p-6">
              <p className="max-w-3xl">
                <span className="text-yellow-500">We Are Not Published — We Are Earned.</span> Every recognition, 
                every testimonial, every ranking is organic and based on real client satisfaction and measurable results. 
                That's the Inchtomilez difference.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );

  // SECTION 15: Get Started Today
  const GetStartedSection = () => (
    <div className="flex items-center justify-center h-full px-8 md:px-16">
      <div className="w-[80vw] pt-8">
        <div className="text-center mb-12">
          <h2 className="mb-6">Ready To Write Your Brand's Story?</h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Join 200+ successful brands. Free consultation → Custom strategy → Real results.
          </p>
        </div>

        {/* Horizontal Carousel */}
        <div className="overflow-x-auto overflow-y-hidden scroll-smooth snap-x snap-mandatory [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden pb-2 mb-12">
          <div className="flex gap-6 min-w-max px-1">
            {/* Card 1: Free Consultation */}
            <Card className="bg-white/5 border-white/20 hover:border-yellow-500/30 transition-all duration-300 snap-start flex-shrink-0 w-[400px]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Rocket className="text-white" />
                  </div>
                  <h3 className="text-yellow-500">Free Consultation</h3>
                </div>
                
                <p className="text-gray-300 mb-4">
                  30-minute strategy session with digital experts.
                </p>

                <div className="space-y-2 mb-6">
                  {[
                    'Digital audit',
                    'Growth strategy',
                    'ROI projections'
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <Link to="/lets-talk">
                  <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full w-full">
                    <Rocket className="mr-2 h-4 w-4" />
                    Book Now
                  </Button>
                </Link>
              </CardContent>
            </Card>

            {/* Card 2: Instant Support */}
            <Card className="bg-white/5 border-white/20 hover:border-yellow-500/30 transition-all duration-300 snap-start flex-shrink-0 w-[400px]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <Phone className="text-white" />
                  </div>
                  <h3 className="text-yellow-500">Instant Support</h3>
                </div>

                <p className="text-gray-300 mb-4">
                  Available 24/7 via phone, WhatsApp, or email.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-yellow-500" />
                    <div>
                      <div className="text-gray-400">Primary</div>
                      <div className="text-white">+91 9669988666</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-yellow-500" />
                    <div>
                      <div className="text-gray-400">Alternate</div>
                      <div className="text-white">+91 9009970709</div>
                    </div>
                  </div>
                </div>

                <a href="https://wa.me/919669988666?text=Hi%20Inchtomilez%2C%20I%27d%20like%20to%20discuss%20digital%20marketing%20services" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full w-full">
                    <MessageCircle className="mr-2 h-4 w-4" />
                    WhatsApp Now
                  </Button>
                </a>
              </CardContent>
            </Card>

            {/* Card 3: Visit Us */}
            <Card className="bg-white/5 border-white/20 hover:border-yellow-500/30 transition-all duration-300 snap-start flex-shrink-0 w-[400px]">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center border border-white/10">
                    <MapPin className="text-white" />
                  </div>
                  <h3 className="text-yellow-500">Visit Our Office</h3>
                </div>

                <p className="text-gray-300 mb-4">
                  Meet our team in person at our Indore office.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-4 h-4 text-yellow-500 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white">Vijay Nagar, Indore</div>
                      <div className="text-gray-400">Madhya Pradesh, India</div>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-yellow-500" />
                    <div className="text-gray-400">Mon-Sat: 10 AM - 7 PM</div>
                  </div>
                </div>

                <a href="https://maps.google.com/?q=22.7534141,75.8972057" target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full w-full">
                    <MapPin className="mr-2 h-4 w-4" />
                    Get Directions
                  </Button>
                </a>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full px-6 py-3">
            <span className="text-yellow-500">→</span>
            <span className="text-gray-300">Swipe to explore options</span>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead {...metadata} />
      <SchemaMarkup pageType="website" />
      <EnhancedSchemaMarkup />
      <FAQSchema faqs={HOME_FAQS} />
      <LocalBusinessSchema />
      
      <div className="min-h-screen bg-black text-white">
        <StackingSection index={0} total={totalSections} showVideo={true}>
          <HeroSection />
        </StackingSection>

        <StackingSection index={1} total={totalSections}>
          <CompanyIntroSection />
        </StackingSection>

        <StackingSection index={2} total={totalSections}>
          <WhyInchtomilezSection />
        </StackingSection>

        <StackingSection index={3} total={totalSections}>
          <CoreValuesSection />
        </StackingSection>

        <StackingSection index={4} total={totalSections}>
          <ServicesSection />
        </StackingSection>

        <StackingSection index={5} total={totalSections}>
          <ThreeSixtySection />
        </StackingSection>

        <StackingSection index={6} total={totalSections}>
          <ProcessSection />
        </StackingSection>

        <StackingSection index={7} total={totalSections}>
          <ImpactSection />
        </StackingSection>

        <StackingSection index={8} total={totalSections}>
          <TechnologySection />
        </StackingSection>

        <StackingSection index={9} total={totalSections}>
          <SuccessStoriesSection />
        </StackingSection>

        <StackingSection index={10} total={totalSections}>
          <IndustriesSection />
        </StackingSection>

        <StackingSection index={11} total={totalSections}>
          <TestimonialsSection />
        </StackingSection>

        <StackingSection index={12} total={totalSections}>
          <AwardsSection />
        </StackingSection>

        <StackingSection index={13} total={totalSections}>
          <GetStartedSection />
        </StackingSection>
      </div>
    </>
  );
}
