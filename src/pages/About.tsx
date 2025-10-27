import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../components/EnhancedSchemaMarkup';
import FAQSchema from '../components/FAQSchema';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { MAIN_PAGES_METADATA } from '../utils/mainPagesMetadata';
import { ABOUT_FAQS } from '../utils/faqData';
import StackingSection from '../components/StackingSection';
import Breadcrumbs from '../components/Breadcrumbs';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import {
  Target,
  Users,
  Award,
  TrendingUp,
  Shield,
  Lightbulb,
  Heart,
  Zap,
  Globe,
  CheckCircle,
  Star,
  Trophy,
  Clock,
  Rocket,
  Brain,
  ArrowRight,
  MessageCircle,
  Eye,
  Handshake,
  Sparkles,
  Code,
  Palette,
  BarChart,
  Megaphone
} from 'lucide-react';
import { useState, useEffect } from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../components/ui/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { useIsMobile } from '../components/ui/use-mobile';
import { Phone } from 'lucide-react';

export default function About() {
  const totalSections = 16;
  const metadata = MAIN_PAGES_METADATA.about;
  const [activeReason, setActiveReason] = useState<string>('reason-1');
  const [activeGrowth, setActiveGrowth] = useState<string>('growth-1');
  const [activeSimple, setActiveSimple] = useState<string>('simple-1');
  const [activeDifference, setActiveDifference] = useState<string>('diff-1');
  const isMobile = useIsMobile();

  // Auto-cycle through reasons every 4 seconds
  useEffect(() => {
    const reasons = ['reason-1', 'reason-2', 'reason-3', 'reason-4', 'reason-5', 'reason-6'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % reasons.length;
      setActiveReason(reasons[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  // Auto-cycle through growth items every 4 seconds (mobile only)
  useEffect(() => {
    if (!isMobile) return;
    const items = ['growth-1', 'growth-2', 'growth-3', 'growth-4'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      setActiveGrowth(items[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // Auto-cycle through simple items every 4 seconds (mobile only)
  useEffect(() => {
    if (!isMobile) return;
    const items = ['simple-1', 'simple-2', 'simple-3', 'simple-4'];
    let currentIndex = 0;

    const interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % items.length;
      setActiveSimple(items[currentIndex]);
    }, 4000);

    return () => clearInterval(interval);
  }, [isMobile]);

  // SECTION 0: Hero Section
  const HeroSection = () => (
    <div className="flex flex-col justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
      <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
        <div className="text-4xl md:text-6xl lg:text-8xl mb-4 md:mb-6">Hi</div>
        <div className="space-y-3 md:space-y-4">
          <p className="text-xl md:text-2xl lg:text-3xl break-words">
            We are <span className="text-yellow-500">INCH</span>TO<span className="text-yellow-500">MILEZ</span>
          </p>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-300 break-words">
            Not just another Agency to compare estimates
          </p>
          <p className="text-base md:text-lg break-words">
            Ask us for <span className="text-yellow-500">work samples</span> to compare
          </p>
        </div>
        <div className="mt-12 md:mt-20 text-right">
          <p className="text-sm md:text-base text-gray-400 break-words">
            You will get the best at <span className="text-yellow-500">INCH TO MILEZ</span>!!!!
          </p>
        </div>
      </div>
    </div>
  );

  // SECTION 1: Who We Are
  const WhoWeAreSection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
              <span className="text-yellow-500 text-xs md:text-sm">WHO WE ARE</span>
            </div>
            <h2 className="mb-4 md:mb-6 break-words">Your Growth Partners in Digital Excellence</h2>
            <p className="text-base md:text-lg text-gray-300 max-w-4xl break-words">
              Inchtomilez is a full-service digital marketing and advertising agency based in Indore, Madhya Pradesh. 
              We're not just service providers — we're your strategic partners in building extraordinary brands and driving 
              measurable business growth.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {[
              {
                icon: Target,
                title: 'Mission-Driven',
                desc: 'To transform businesses through innovative digital strategies that deliver real, measurable results and long-term sustainable growth.'
              },
              {
                icon: Eye,
                title: 'Visionary Approach',
                desc: 'To become India\'s most trusted digital marketing agency known for transparency, creativity, and client success stories.'
              },
              {
                icon: Heart,
                title: 'Core Values',
                desc: 'Integrity, innovation, client-first mindset, data-driven decisions, and commitment to excellence in everything we do.'
              },
              {
                icon: Users,
                title: 'Expert Team',
                desc: '50+ digital marketing specialists, creative designers, developers, and strategists working together for your success.'
              },
              {
                icon: Globe,
                title: 'Wide Reach',
                desc: 'Serving 200+ clients across 20+ industries in India and globally with localized strategies and global best practices.'
              },
              {
                icon: Award,
                title: 'Proven Track Record',
                desc: 'Google Premier Partner, 4.9★ rating, ISO certified, and recognized as Indore\'s #1 digital marketing agency.'
              }
            ].map((item, i) => (
              <Card 
                key={i}
                className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300 group w-full"
              >
                <CardContent className="p-4 md:p-6">
                  <item.icon className="text-white mb-3 md:mb-4" />
                  <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">{item.title}</h3>
                  <p className="text-gray-400 text-sm md:text-base leading-relaxed break-words">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  // SECTION 2: Growth Philosophy (Mobile: Tabs, Desktop: Grid)
  const GrowthSection = () => {
    const growthItems = [
      {
        icon: BarChart,
        title: 'Data-Driven Decisions',
        desc: 'Every strategy backed by analytics, market research, and performance metrics'
      },
      {
        icon: TrendingUp,
        title: 'Sustainable Growth',
        desc: 'Long-term strategies that build momentum and deliver consistent results'
      },
      {
        icon: Target,
        title: 'Goal-Oriented',
        desc: 'Clear KPIs, transparent reporting, and accountability at every step'
      },
      {
        icon: Rocket,
        title: 'Scalable Solutions',
        desc: 'Systems and processes designed to grow with your business'
      }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="mb-4 md:mb-6 break-words">
                We Believe In Growth That Is <span className="text-yellow-500">Measurable</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed break-words">
                We're not just about short-term wins; we craft long-lasting strategies yielding measurable insights.
              </p>
            
              {/* Mobile: Tabs */}
              {isMobile ? (
                <Tabs 
                  value={activeGrowth} 
                  onValueChange={setActiveGrowth}
                  className="mt-8 w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 gap-2 bg-white/5 p-1 h-auto mb-6">
                    {growthItems.map((item, i) => (
                      <TabsTrigger 
                        key={i}
                        value={`growth-${i + 1}`}
                        className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-500 text-xs py-2 break-words"
                      >
                        {item.title.split(' ')[0]}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {growthItems.map((item, i) => (
                    <TabsContent key={i} value={`growth-${i + 1}`} className="w-full">
                      <Card className="bg-white/5 border-white/10 w-full">
                        <CardContent className="p-6">
                          <item.icon className="text-white mb-4 mx-auto" />
                          <h3 className="mb-3 text-center break-words">{item.title}</h3>
                          <p className="text-gray-400 text-center break-words">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                /* Desktop: Grid */
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-8 md:mt-12">
                  {growthItems.map((item, i) => (
                    <Card 
                      key={i}
                      className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 group w-full"
                    >
                      <CardContent className="p-4 md:p-6 flex items-start gap-3 md:gap-4">
                        <item.icon className="text-white flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <h3 className="mb-1 md:mb-2 text-sm md:text-base break-words">{item.title}</h3>
                          <p className="text-gray-400 text-xs md:text-sm break-words">{item.desc}</p>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SECTION 3: Simple & Clear (Mobile: Tabs, Desktop: List)
  const SimpleSection = () => {
    const simpleItems = [
      {
        title: 'No Jargon',
        desc: 'We speak your language, not marketing buzzwords. Clear communication, transparent processes.'
      },
      {
        title: 'No Hidden Costs',
        desc: 'Straightforward pricing, detailed proposals, and honest timelines. What you see is what you get.'
      },
      {
        title: 'No Complicated Contracts',
        desc: 'Simple agreements that protect both parties and ensure clarity on deliverables and expectations.'
      },
      {
        title: 'Just Results',
        desc: 'We focus on what matters — delivering tangible outcomes that move your business forward.'
      }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-center justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="max-w-4xl text-center mx-auto">
              <h2 className="mb-4 md:mb-6 break-words">
                We Are <span className="text-yellow-500">Simple</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed break-words">
                We believe in Simple, Sound & Clear Brand Communication.
              </p>
            
              {/* Mobile: Tabs */}
              {isMobile ? (
                <Tabs 
                  value={activeSimple} 
                  onValueChange={setActiveSimple}
                  className="mt-6 w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 gap-2 bg-white/5 p-1 h-auto mb-6">
                    {simpleItems.map((item, i) => (
                      <TabsTrigger 
                        key={i}
                        value={`simple-${i + 1}`}
                        className="data-[state=active]:bg-yellow-500/20 data-[state=active]:text-yellow-500 text-xs py-2 break-words"
                      >
                        {item.title}
                      </TabsTrigger>
                    ))}
                  </TabsList>
                  {simpleItems.map((item, i) => (
                    <TabsContent key={i} value={`simple-${i + 1}`} className="w-full">
                      <Card className="bg-white/5 border-white/10 w-full">
                        <CardContent className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <CheckCircle className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                            <h3 className="break-words">{item.title}</h3>
                          </div>
                          <p className="text-gray-400 break-words">{item.desc}</p>
                        </CardContent>
                      </Card>
                    </TabsContent>
                  ))}
                </Tabs>
              ) : (
                /* Desktop: List */
                <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 lg:p-12 w-full">
                  <div className="space-y-4 md:space-y-6">
                    {simpleItems.map((item, i) => (
                      <div key={i} className="flex items-start gap-3 md:gap-4">
                        <CheckCircle className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 flex-shrink-0 mt-1" />
                        <div className="flex-1 min-w-0">
                          <div className="text-white mb-1 text-sm md:text-base break-words">{item.title}</div>
                          <p className="text-gray-400 text-xs md:text-sm break-words">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SECTION 4: Our Story
  const OurStorySection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
              <span className="text-yellow-500 text-xs md:text-sm">OUR JOURNEY</span>
            </div>
            <h2 className="mb-4 md:mb-6 break-words">From Inches to Miles — Our Story</h2>
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto leading-relaxed break-words">
              Founded with a vision to bridge the gap between traditional marketing and digital innovation, 
              Inchtomilez started as a small team of passionate marketers in Indore. Today, we're proud to be 
              one of the most trusted digital marketing agencies in central India, serving clients across industries 
              and geographies.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <Card className="bg-white/5 border-white/10 w-full">
              <CardContent className="p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-yellow-500">2018</div>
                <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">The Beginning</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed break-words">
                  Started with 3 founders and a vision to revolutionize digital marketing in Indore. 
                  First office in Vijay Nagar, serving local businesses.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 w-full">
              <CardContent className="p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-yellow-500">2020</div>
                <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">Expansion & Recognition</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed break-words">
                  Team grew to 20+ members. Became Google Premier Partner. 
                  Expanded services to include full-stack development and branding.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 w-full">
              <CardContent className="p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-yellow-500">2022</div>
                <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">Innovation & Growth</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed break-words">
                  Launched AI-powered marketing solutions. Crossed 100 active clients. 
                  ISO 9001:2015 certified for quality management.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/5 border-white/10 w-full">
              <CardContent className="p-6 md:p-8">
                <div className="text-3xl md:text-4xl lg:text-5xl mb-3 md:mb-4 text-yellow-500">2024</div>
                <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">Market Leadership</h3>
                <p className="text-gray-400 text-sm md:text-base leading-relaxed break-words">
                  50+ team members, 200+ clients, 4.9★ Google rating. 
                  Recognized as Indore's #1 digital marketing agency.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );

  // SECTION 5: What Sets Us Apart (Mobile: Horizontal Carousel, Desktop: Grid)
  const WhatSetsUsApartSection = () => {
    const differenceItems = [
      {
        icon: Shield,
        title: 'No Fake Awards',
        subtitle: 'Earned, Not Bought',
        desc: 'We never pay for awards or fake certifications. Every recognition we have is earned through exceptional client results and industry leadership.'
      },
      {
        icon: Handshake,
        title: 'No Bargaining',
        subtitle: 'Fair & Fixed Pricing',
        desc: 'Our pricing reflects the value we deliver. We don\'t engage in bargaining because our work requires years of expertise, creativity, and strategic thinking.'
      },
      {
        icon: Brain,
        title: 'Strategic Thinking',
        subtitle: 'Not Just Execution',
        desc: 'We don\'t just execute campaigns — we craft comprehensive strategies aligned with your business goals and market opportunities.'
      },
      {
        icon: Lightbulb,
        title: 'Creative Excellence',
        subtitle: 'Original & Impactful',
        desc: 'Every campaign is custom-built from scratch. No templates, no cookie-cutter solutions. Just original, compelling creative work.'
      },
      {
        icon: MessageCircle,
        title: 'Transparent Communication',
        subtitle: 'Always In The Loop',
        desc: 'Regular updates, detailed reporting, and open communication channels. You always know what we\'re doing and why.'
      },
      {
        icon: Zap,
        title: 'Agile & Responsive',
        subtitle: 'Fast-Moving Team',
        desc: 'Quick turnarounds, rapid iteration, and the flexibility to adapt strategies based on real-time market feedback and performance data.'
      }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                <span className="text-yellow-500 text-xs md:text-sm">OUR DIFFERENCE</span>
              </div>
              <h2 className="mb-4 md:mb-6 break-words">What Makes Us Different</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto break-words">
                In a crowded marketplace of digital agencies, we stand out through our commitment to 
                authenticity, measurable results, and client success over everything else.
              </p>
            </div>

            {/* Mobile: Horizontal Carousel */}
            {isMobile ? (
              <div className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4">
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                  {differenceItems.map((item, i) => (
                    <Card 
                      key={i}
                      className="bg-white/5 border-white/10 flex-shrink-0"
                      style={{ width: '280px', maxWidth: '280px' }}
                    >
                      <CardContent className="p-5">
                        <item.icon className="text-white mb-4" />
                        <div className="text-yellow-500 text-xs mb-2 break-words">{item.subtitle}</div>
                        <h3 className="mb-3 break-words">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed break-words">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop: Horizontal Tabs with Container Card */
              <div className="w-full">
                {(() => {
                  const differenceItemsWithIds = differenceItems.map((item, i) => ({
                    ...item,
                    id: `diff-${i + 1}`
                  }));

                  const activeDifferenceData = differenceItemsWithIds.find(d => d.id === activeDifference) || differenceItemsWithIds[0];

                  return (
                    <>
                      {/* Horizontal Tab Buttons */}
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mb-6">
                        {differenceItemsWithIds.map((item) => (
                          <button
                            key={item.id}
                            onClick={() => setActiveDifference(item.id)}
                            className={`flex items-start gap-3 px-4 py-3 rounded-lg border transition-all duration-300 text-left ${
                              activeDifference === item.id
                                ? 'bg-yellow-500/10 border-yellow-500/50 text-white'
                                : 'bg-white/5 border-white/10 text-gray-400 hover:border-white/20 hover:text-white'
                            }`}
                          >
                            <item.icon className="flex-shrink-0 mt-1" />
                            <div className="flex-1 min-w-0">
                              <div className="text-sm mb-1">{item.title}</div>
                              <div className="text-xs text-yellow-500">{item.subtitle}</div>
                            </div>
                          </button>
                        ))}
                      </div>

                      {/* Active Tab Content Card */}
                      <Card className="bg-white/5 border-white/20 hover:border-yellow-500/30 transition-all duration-300">
                        <CardContent className="p-8">
                          {/* Header */}
                          <div className="flex items-start gap-6 mb-6">
                            <div className="w-16 h-16 bg-white/5 rounded-full flex items-center justify-center border-2 border-white/10 flex-shrink-0">
                              <activeDifferenceData.icon className="text-white" />
                            </div>
                            <div className="flex-1">
                              <div className="text-yellow-500 mb-2">{activeDifferenceData.subtitle}</div>
                              <h3 className="mb-3">{activeDifferenceData.title}</h3>
                            </div>
                          </div>

                          {/* Details */}
                          <div className="pl-[88px]">
                            <p className="text-gray-300 leading-relaxed">{activeDifferenceData.desc}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </>
                  );
                })()}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // SECTION 6: Not Published — Earned
  const NotPublishedSection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="max-w-4xl text-center mx-auto">
            <h2 className="mb-4 md:mb-6 break-words">
              We Are <span className="text-yellow-500">Not Published</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed break-words">
              We never pay to get Awarded.
            </p>

            <Card className="bg-yellow-500/10 border-yellow-500/30 mb-6 md:mb-8 w-full">
              <CardContent className="p-6 md:p-8">
                <div className="flex items-start gap-3 md:gap-4 mb-4 md:mb-6">
                  <Trophy className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <h3 className="mb-2 text-yellow-500 text-base md:text-lg break-words">Our Philosophy on Recognition</h3>
                    <p className="text-gray-300 text-sm md:text-base leading-relaxed break-words">
                      In an industry flooded with paid awards and fake certifications, we take a different approach. 
                      Every accolade we have is earned through real client success, measurable results, and industry 
                      contribution — never purchased.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
              <Card className="bg-white/5 border-white/10 w-full">
                <CardContent className="p-5 md:p-6">
                  <Star className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 mb-3 md:mb-4 flex-shrink-0" />
                  <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">Authentic Recognition</h3>
                  <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="break-words">Google Premier Partner (earned through campaign performance)</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="break-words">4.9★ Google rating from 200+ real clients</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="break-words">ISO 9001:2015 certification (international standard)</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-white/5 border-white/10 w-full">
                <CardContent className="p-5 md:p-6">
                  <Award className="w-6 h-6 md:w-8 md:h-8 text-yellow-500 mb-3 md:mb-4 flex-shrink-0" />
                  <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">Real Achievements</h3>
                  <ul className="space-y-2 text-gray-400 text-xs md:text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="break-words">200+ successful client campaigns</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="break-words">Ranked #1 in Indore by organic search results</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                      <span className="break-words">Industry recognition through client testimonials</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // SECTION 7: No Bargaining
  const NoBargainSection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="max-w-4xl text-center mx-auto">
            <h2 className="mb-4 md:mb-6 break-words">
              We Do <span className="text-yellow-500">Not Bargain!</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl text-gray-300 mb-6 md:mb-8 leading-relaxed break-words">
              We weave incredible stories, which need years of Experience, Concept & Skills.
            </p>

            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 mb-6 md:mb-8 w-full">
              <div className="space-y-4 md:space-y-6">
                <div>
                  <h3 className="mb-2 md:mb-3 text-yellow-500 text-base md:text-lg break-words">Why We Don't Bargain</h3>
                  <p className="text-gray-300 text-sm md:text-base leading-relaxed break-words">
                    Our pricing is based on the real value we bring to your business, not arbitrary numbers. 
                    When you work with us, you're investing in:
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                  {[
                    {
                      title: 'Strategic Expertise',
                      desc: 'Years of experience across 20+ industries and 200+ successful campaigns'
                    },
                    {
                      title: 'Creative Excellence',
                      desc: 'Award-winning creative team producing original, high-impact content'
                    },
                    {
                      title: 'Advanced Tools',
                      desc: 'Access to premium marketing tools, platforms, and technologies'
                    },
                    {
                      title: 'Dedicated Team',
                      desc: 'Committed professionals working exclusively on your success'
                    }
                  ].map((item, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                      <div className="flex-1 min-w-0">
                        <div className="text-white mb-1 text-sm md:text-base break-words">{item.title}</div>
                        <p className="text-gray-400 text-xs md:text-sm break-words">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <Card className="bg-yellow-500/10 border-yellow-500/30 w-full">
              <CardContent className="p-5 md:p-6 text-center">
                <p className="text-gray-300 text-sm md:text-base break-words">
                  <span className="text-yellow-500">Fair Pricing. Real Value.</span> We believe in transparent, 
                  value-based pricing that reflects the transformation we bring to your business.
                </p>
              </CardContent>
            </Card>
        </div>
      </div>
    </div>
  </div>
);

  // SECTION 8: Our Services Overview (Mobile: Horizontal Carousel, Desktop: Grid)
  const ServicesOverviewSection = () => {
    const services = [
      { icon: Megaphone, name: 'Digital Marketing', link: '/services/digital-marketing' },
      { icon: Palette, name: 'Branding', link: '/services/branding' },
      { icon: Code, name: 'Web Development', link: '/services/website-development' },
      { icon: Globe, name: 'E-Commerce', link: '/services/ecommerce' },
      { icon: BarChart, name: 'SEO & Analytics', link: '/services/digital-marketing' },
      { icon: Users, name: 'Social Media', link: '/services/digital-marketing' },
      { icon: Sparkles, name: 'Graphic Design', link: '/services/graphic-designing' },
      { icon: MessageCircle, name: 'Influencer Marketing', link: '/services/influencer-marketing' }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                <span className="text-yellow-500 text-xs md:text-sm">COMPREHENSIVE SOLUTIONS</span>
              </div>
              <h2 className="mb-4 md:mb-6 break-words">16 Specialized Services Under One Roof</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto break-words">
                From digital marketing to software development, branding to political campaigns — we offer 
                end-to-end solutions to meet all your business needs.
              </p>
            </div>

            {/* Mobile: Horizontal Carousel */}
            {isMobile ? (
              <div className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4 mb-6">
                <div className="flex gap-3 pb-4" style={{ width: 'max-content' }}>
                  {services.map((service, i) => (
                    <Link to={service.link} key={i}>
                      <Card className="bg-white/5 border-white/10 flex-shrink-0" style={{ width: '140px', maxWidth: '140px' }}>
                        <CardContent className="p-4 text-center">
                          <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mx-auto mb-3 flex-shrink-0">
                            <service.icon className="w-6 h-6 text-white" />
                          </div>
                          <div className="text-white text-xs break-words">{service.name}</div>
                        </CardContent>
                      </Card>
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop: Grid */
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4 w-full">
                {services.map((service, i) => (
                  <Link to={service.link} key={i}>
                    <Card className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300 group h-full w-full">
                      <CardContent className="p-4 md:p-5 text-center">
                        <service.icon className="text-white mb-2 md:mb-3 mx-auto" />
                        <div className="text-white text-xs md:text-sm break-words">{service.name}</div>
                      </CardContent>
                    </Card>
                  </Link>
                ))}
              </div>
            )}

            <div className="text-center mt-6 md:mt-8">
              <Link to="/services">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base">
                  Explore All Services <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SECTION 9: Industries We Serve (Mobile: 2-Column Bento Grid, Desktop: 5-Column Grid)
  const IndustriesSection = () => {
    const industries = [
      'Healthcare',
      'Education',
      'Real Estate',
      'E-Commerce',
      'Technology',
      'Finance',
      'Hospitality',
      'Automotive',
      'Fashion',
      'Food & Beverage',
      'Entertainment',
      'Sports',
      'Legal',
      'Manufacturing',
      'Agriculture'
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                <span className="text-yellow-500 text-xs md:text-sm">INDUSTRY EXPERTISE</span>
              </div>
              <h2 className="mb-4 md:mb-6 break-words">Serving 20+ Industries with Specialized Knowledge</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto break-words">
                We don't believe in one-size-fits-all solutions. Our team has deep expertise across diverse 
                industries, allowing us to craft strategies that speak your industry's language.
              </p>
            </div>

            {/* Mobile: 2-Column Bento Grid, Desktop: 5-Column Grid */}
            <div className={`grid gap-3 md:gap-4 w-full ${isMobile ? 'grid-cols-2' : 'grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5'}`}>
              {industries.map((industry, i) => (
                <Card 
                  key={i}
                  className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:bg-white/10 transition-all duration-300 cursor-pointer w-full"
                >
                  <CardContent className="p-3 md:p-4 text-center">
                    <div className="text-white text-xs md:text-sm break-words">{industry}</div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6 md:mt-8">
              <Link to="/industries">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base">
                  View All Industries <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };

  // SECTION 10: Team & Culture (Mobile: Horizontal Carousel, Desktop: Grid)
  const TeamCultureSection = () => {
    const teamMembers = [
      {
        icon: Brain,
        title: 'Strategy Team',
        count: '8 Strategists',
        desc: 'Marketing strategists, business analysts, and growth consultants who craft winning game plans.'
      },
      {
        icon: Palette,
        title: 'Creative Team',
        count: '15 Designers',
        desc: 'Graphic designers, video editors, animators, and content creators who bring ideas to life.'
      },
      {
        icon: Code,
        title: 'Tech Team',
        count: '12 Developers',
        desc: 'Full-stack developers, app developers, and SEO specialists building digital excellence.'
      },
      {
        icon: Megaphone,
        title: 'Marketing Team',
        count: '10 Marketers',
        desc: 'Digital marketers, PPC experts, and social media managers driving measurable results.'
      },
      {
        icon: Users,
        title: 'Client Success',
        count: '5 Managers',
        desc: 'Dedicated account managers ensuring your satisfaction and project success.'
      },
      {
        icon: Target,
        title: 'Leadership',
        count: '3 Founders',
        desc: 'Visionary leaders with 10+ years of combined experience guiding the agency forward.'
      }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                <span className="text-yellow-500 text-xs md:text-sm">OUR TEAM</span>
              </div>
              <h2 className="mb-4 md:mb-6 break-words">50+ Experts. One Mission. Your Success.</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto break-words">
                Behind every successful campaign is a team of passionate professionals dedicated to excellence. 
                Meet the people who make the magic happen.
              </p>
            </div>

            {/* Mobile: Horizontal Carousel */}
            {isMobile ? (
              <div className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4">
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                  {teamMembers.map((team, i) => (
                    <Card 
                      key={i}
                      className="bg-white/5 border-white/10 flex-shrink-0"
                      style={{ width: '260px', maxWidth: '260px' }}
                    >
                      <CardContent className="p-5">
                        <team.icon className="text-white mb-4" />
                        <div className="text-yellow-500 text-xs mb-2 break-words">{team.count}</div>
                        <h3 className="mb-3 break-words">{team.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed break-words">{team.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop: Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 w-full">
                {teamMembers.map((team, i) => (
                  <Card 
                    key={i}
                    className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 group w-full"
                  >
                    <CardContent className="p-5 md:p-6">
                      <team.icon className="text-white mb-3 md:mb-4" />
                      <div className="text-yellow-500 text-xs md:text-sm mb-1 md:mb-2 break-words">{team.count}</div>
                      <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">{team.title}</h3>
                      <p className="text-gray-400 text-xs md:text-sm leading-relaxed break-words">{team.desc}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // SECTION 11: Client Success Stats (2-Row Auto Carousel)
  const StatsSection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex flex-col items-center justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="text-center mb-8 md:mb-12">
            <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
              <span className="text-yellow-500 text-xs md:text-sm">BY THE NUMBERS</span>
            </div>
            <h2 className="mb-4 md:mb-6 break-words">Results That Speak Louder Than Words</h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto break-words">
              Our track record of success is measured in client growth, campaign performance, and real business impact.
            </p>
          </div>

          {/* 2-Row Horizontal Auto-Scroll Carousel */}
          <div className="flex-1 min-h-0 flex flex-col gap-4 w-full overflow-x-hidden">
            {/* Row 1 - Stats 1-4 (Scroll Left) */}
            <div className="overflow-hidden relative w-full">
              <div 
                className="flex gap-4 pb-2 w-max"
                style={{
                  animation: 'scroll-left-row1 40s linear infinite'
                }}
              >
                {/* Duplicate cards for infinite loop */}
                {[...Array(2)].map((_, duplicateIndex) => (
                  [
                    { number: '200+', label: 'Happy Clients', icon: Users },
                    { number: '500+', label: 'Projects Delivered', icon: CheckCircle },
                    { number: '4.9★', label: 'Google Rating', icon: Star },
                    { number: '50+', label: 'Team Members', icon: Users }
                  ].map((stat, i) => (
                    <Card 
                      key={`row1-${duplicateIndex}-${i}`}
                      className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 group flex-shrink-0" 
                      style={{ width: '200px', maxWidth: '200px', minWidth: '200px' }}
                    >
                      <CardContent className="p-4 md:p-6 text-center">
                        <stat.icon className="text-white mb-3 mx-auto" />
                        <div className="text-3xl md:text-4xl mb-2 text-yellow-500">{stat.number}</div>
                        <div className="text-gray-400 text-sm break-words">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))
                ))}
              </div>
            </div>

            {/* Row 2 - Stats 5-8 (Scroll Right - Reverse) */}
            <div className="overflow-hidden relative w-full">
              <div 
                className="flex gap-4 pb-2 w-max"
                style={{
                  animation: 'scroll-left-row2 35s linear infinite reverse'
                }}
              >
                {/* Duplicate cards for infinite loop */}
                {[...Array(2)].map((_, duplicateIndex) => (
                  [
                    { number: '20+', label: 'Industries Served', icon: Globe },
                    { number: '6+', label: 'Years Experience', icon: Clock },
                    { number: '95%', label: 'Client Retention', icon: Heart },
                    { number: '350%', label: 'Avg ROI Growth', icon: TrendingUp }
                  ].map((stat, i) => (
                    <Card 
                      key={`row2-${duplicateIndex}-${i}`}
                      className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 group flex-shrink-0" 
                      style={{ width: '200px', maxWidth: '200px', minWidth: '200px' }}
                    >
                      <CardContent className="p-4 md:p-6 text-center">
                        <stat.icon className="text-white mb-3 mx-auto" />
                        <div className="text-3xl md:text-4xl mb-2 text-yellow-500">{stat.number}</div>
                        <div className="text-gray-400 text-sm break-words">{stat.label}</div>
                      </CardContent>
                    </Card>
                  ))
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  // SECTION 12: Why Choose Inchtomilez (Auto-Cycling Accordion)
  const WhyChooseUsSection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="mb-8 md:mb-12 text-center">
            <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
              <span className="text-yellow-500 text-xs md:text-sm">WHY US</span>
            </div>
            <h2 className="mb-4 md:mb-6 break-words">Why Businesses Choose Inchtomilez</h2>
            <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto break-words">
              We're more than a service provider — we're your strategic growth partner committed to your long-term success.
            </p>
          </div>

          {/* Auto-Cycling Vertical Accordions */}
          <Accordion 
            type="single" 
            collapsible 
            value={activeReason}
            onValueChange={setActiveReason}
            className="space-y-4 w-full max-w-4xl mx-auto"
          >
          {[
            {
              id: 'reason-1',
              icon: Target,
              title: 'Results-Focused',
              desc: 'Every strategy is designed with clear KPIs and measurable outcomes.',
              details: 'We track, analyze, and optimize continuously to ensure maximum ROI. Our data-driven approach means every decision is backed by insights, and every campaign is measured against clear success metrics. You\'ll see exactly how your investment translates into business growth.',
              stats: [
                { label: 'Avg ROI Increase', value: '350%' },
                { label: 'Campaign Success Rate', value: '92%' }
              ]
            },
            {
              id: 'reason-2',
              icon: Shield,
              title: 'Complete Transparency',
              desc: 'Detailed reporting, open communication, and honest feedback.',
              details: 'You always know where your investment is going. We provide comprehensive monthly reports, real-time dashboard access, and regular strategy calls. No hidden fees, no surprises — just honest, transparent partnership focused on your success.',
              stats: [
                { label: 'Client Satisfaction', value: '98%' },
                { label: 'Reporting Frequency', value: 'Weekly' }
              ]
            },
            {
              id: 'reason-3',
              icon: Rocket,
              title: 'Proven Track Record',
              desc: '200+ successful client stories across industries.',
              details: 'Our portfolio speaks to our ability to deliver consistent results. From startups to established enterprises, we\'ve helped businesses across 20+ industries achieve their goals. Real case studies, real results, real growth.',
              stats: [
                { label: 'Happy Clients', value: '200+' },
                { label: 'Industries Served', value: '20+' }
              ]
            },
            {
              id: 'reason-4',
              icon: Users,
              title: 'Dedicated Team',
              desc: 'Committed specialists working exclusively on your projects.',
              details: 'You get a personal account manager and dedicated team members with personalized attention. No juggling between multiple clients — when you need us, we\'re there. Direct access to strategists, designers, and developers.',
              stats: [
                { label: 'Team Members', value: '50+' },
                { label: 'Response Time', value: '<2hrs' }
              ]
            },
            {
              id: 'reason-5',
              icon: Lightbulb,
              title: 'Innovation-Driven',
              desc: 'We stay ahead of industry trends and emerging technologies.',
              details: 'Platform updates, algorithm changes, new advertising opportunities — we\'re always on top of it. Our team continuously learns and adapts to keep your brand competitive in the ever-changing digital landscape.',
              stats: [
                { label: 'Platform Certifications', value: '25+' },
                { label: 'Training Hours/Year', value: '500+' }
              ]
            },
            {
              id: 'reason-6',
              icon: Heart,
              title: 'Client-First Culture',
              desc: 'Your success is our success.',
              details: 'We measure our performance by the growth and satisfaction of our clients. Our 95% client retention rate and countless referrals prove that when we say we care about your business, we mean it. Your goals become our mission.',
              stats: [
                { label: 'Client Retention', value: '95%' },
                { label: 'Referral Rate', value: '78%' }
              ]
            }
          ].map((reason) => (
            <AccordionItem 
              key={reason.id} 
              value={reason.id}
              className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all duration-300 data-[state=open]:border-yellow-500/50 data-[state=open]:bg-white/10"
            >
              <AccordionTrigger className="px-4 md:px-6 py-4 hover:no-underline group">
                <div className="flex items-center gap-3 md:gap-4 w-full text-left">
                  {/* Icon */}
                  <reason.icon className="text-white flex-shrink-0" />
                  
                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white mb-1 text-base md:text-lg">{reason.title}</h3>
                    <p className="text-gray-400 text-xs md:text-sm">{reason.desc}</p>
                  </div>
                </div>
              </AccordionTrigger>
              
              <AccordionContent className="px-4 md:px-6 pb-4">
                <div className="pl-0 md:pl-[72px] pr-4">
                  <div className="pt-2 border-t border-white/10">
                    <p className="text-gray-300 text-xs md:text-sm leading-relaxed mt-3">
                      {reason.details}
                    </p>
                    
                    {/* Stats Grid */}
                    <div className="grid grid-cols-2 gap-3 md:gap-4 mt-4">
                      {reason.stats.map((stat, idx) => (
                        <div key={idx} className="bg-white/5 rounded-lg p-3 text-center">
                          <div className="text-yellow-500 mb-1 text-base md:text-lg">{stat.value}</div>
                          <div className="text-gray-400 text-xs">{stat.label}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  </div>
);

  // SECTION 13: Our Process (Mobile: Horizontal Carousel, Desktop: Vertical Cards)
  const ProcessSection = () => {
    const processSteps = [
      {
        step: '01',
        title: 'Discovery & Strategy',
        desc: 'We start by understanding your business, goals, target audience, and competitive landscape. Deep dive into analytics and market research.'
      },
      {
        step: '02',
        title: 'Planning & Proposal',
        desc: 'Detailed strategy document with clear timelines, deliverables, KPIs, and budget breakdown. Complete transparency from day one.'
      },
      {
        step: '03',
        title: 'Creative Development',
        desc: 'Our creative team brings the strategy to life with compelling content, stunning designs, and engaging campaigns.'
      },
      {
        step: '04',
        title: 'Execution & Launch',
        desc: 'Seamless implementation across all channels with careful monitoring and quality assurance at every stage.'
      },
      {
        step: '05',
        title: 'Analysis & Optimization',
        desc: 'Continuous tracking, detailed reporting, and data-driven optimizations to maximize ROI and achieve goals.'
      }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                <span className="text-yellow-500 text-xs md:text-sm">HOW WE WORK</span>
              </div>
              <h2 className="mb-4 md:mb-6 break-words">Our 5-Step Success Process</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-4xl mx-auto break-words">
                From discovery to delivery, we follow a proven methodology that ensures exceptional results every time.
              </p>
            </div>

            {/* Mobile: Horizontal Carousel */}
            {isMobile ? (
              <div className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4">
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                  {processSteps.map((item, i) => (
                    <Card 
                      key={i}
                      className="bg-white/5 border-white/10 flex-shrink-0"
                      style={{ width: '280px', maxWidth: '280px' }}
                    >
                      <CardContent className="p-5">
                        <div className="text-5xl text-yellow-500/30 mb-4">
                          {item.step}
                        </div>
                        <h3 className="mb-3 break-words">{item.title}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed break-words">{item.desc}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop: Vertical Cards */
              <div className="space-y-4 md:space-y-6 w-full">
                {processSteps.map((item, i) => (
                  <Card 
                    key={i}
                    className="bg-white/5 border-white/10 hover:border-yellow-500/30 transition-all duration-300 group w-full"
                  >
                    <CardContent className="p-5 md:p-6">
                      <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6">
                        <div className="text-4xl md:text-5xl lg:text-6xl text-yellow-500/20 group-hover:text-yellow-500/40 transition-all flex-shrink-0">
                          {item.step}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="mb-2 md:mb-3 text-base md:text-lg break-words">{item.title}</h3>
                          <p className="text-gray-400 text-sm md:text-base leading-relaxed break-words">{item.desc}</p>
                        </div>
                        <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-yellow-500 opacity-0 group-hover:opacity-100 transition-all hidden md:block flex-shrink-0" />
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // SECTION 14: Testimonials (Mobile: Horizontal Carousel, Desktop: Grid)
  const TestimonialsSection = () => {
    const testimonials = [
      {
        quote: "Inchtomilez transformed our digital presence completely. The ROI has been phenomenal, and the team is incredibly professional.",
        name: "Rajesh Kumar",
        title: "CEO, Tech Innovations Ltd",
        rating: 5
      },
      {
        quote: "Best digital marketing agency we've worked with. Their strategies are data-driven and results-oriented. Highly recommended!",
        name: "Priya Sharma",
        title: "Marketing Director, Fashion Hub",
        rating: 5
      },
      {
        quote: "From branding to digital campaigns, Inchtomilez delivered beyond expectations. They're our growth partners.",
        name: "Amit Patel",
        title: "Founder, Real Estate Pro",
        rating: 5
      },
      {
        quote: "Working with Inchtomilez has been a game-changer. Results speak for themselves — #1 on Google!",
        name: "Sneha Jain",
        title: "Director, Healthcare Solutions",
        rating: 5
      }
    ];

    return (
      <div className="w-full h-full overflow-y-auto overflow-x-hidden">
        <div className="flex items-start justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8 md:pt-32 md:pb-12">
          <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
            <div className="mb-8 md:mb-12 text-center">
              <div className="inline-block px-4 md:px-6 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-4 md:mb-6">
                <span className="text-yellow-500 text-xs md:text-sm">CLIENT VOICES</span>
              </div>
              <h2 className="mb-4 md:mb-6 break-words">What Our Clients Say About Us</h2>
              <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto break-words">
                Real feedback from real businesses we've helped grow and succeed.
              </p>
            </div>

            {/* Mobile: Horizontal Carousel */}
            {isMobile ? (
              <div className="w-full overflow-x-auto hide-scrollbar -mx-4 px-4">
                <div className="flex gap-4 pb-4" style={{ width: 'max-content' }}>
                  {testimonials.map((testimonial, i) => (
                    <Card 
                      key={i}
                      className="bg-white/5 border-white/10 flex-shrink-0"
                      style={{ width: '300px', maxWidth: '300px' }}
                    >
                      <CardContent className="p-5">
                        <div className="flex gap-1 mb-4">
                          {[...Array(testimonial.rating)].map((_, idx) => (
                            <Star key={idx} className="w-4 h-4 fill-yellow-500 text-yellow-500 flex-shrink-0" />
                          ))}
                        </div>
                        <p className="text-gray-300 mb-6 italic text-sm leading-relaxed break-words">
                          "{testimonial.quote}"
                        </p>
                        <div>
                          <div className="text-white mb-1 text-sm break-words">{testimonial.name}</div>
                          <div className="text-gray-400 text-xs break-words">{testimonial.title}</div>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            ) : (
              /* Desktop: Grid */
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full">
                {testimonials.map((testimonial, i) => (
                  <Card 
                    key={i}
                    className="bg-white/5 border-white/10 w-full"
                  >
                    <CardContent className="p-5 md:p-6">
                      <div className="flex gap-1 mb-3 md:mb-4">
                        {[...Array(testimonial.rating)].map((_, idx) => (
                          <Star key={idx} className="w-4 h-4 md:w-5 md:h-5 fill-yellow-500 text-yellow-500 flex-shrink-0" />
                        ))}
                      </div>
                      <p className="text-gray-300 mb-4 md:mb-6 italic text-sm md:text-base leading-relaxed break-words">
                        "{testimonial.quote}"
                      </p>
                      <div>
                        <div className="text-white mb-1 text-sm md:text-base break-words">{testimonial.name}</div>
                        <div className="text-gray-400 text-xs md:text-sm break-words">{testimonial.title}</div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  };

  // SECTION 15: Get Started CTA
  const GetStartedSection = () => (
    <div className="w-full h-full overflow-y-auto overflow-x-hidden">
      <div className="flex items-center justify-center min-h-full px-4 md:px-8 lg:px-16 pt-24 pb-8">
        <div className="w-full max-w-full md:w-[90vw] lg:w-[80vw] mx-auto">
          <div className="text-center">
            <h2 className="mb-4 md:mb-6 break-words">Ready to Transform Your Brand?</h2>
            <p className="text-base md:text-lg text-gray-300 max-w-3xl mx-auto mb-8 md:mb-12 break-words">
              Join 200+ successful businesses that trust Inchtomilez with their digital growth. 
              Let's create something extraordinary together.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/lets-talk">
                <Button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto">
                  Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4 md:w-5 md:h-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button className="bg-transparent border-2 border-white/20 hover:bg-white/10 text-white rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto">
                  Explore Our Services
                </Button>
              </Link>
            </div>

            <div className="mt-8 md:mt-12 flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-8 text-gray-400 text-xs md:text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                <span className="break-words">9669988666 / 9009970709</span>
              </div>
              <div className="flex items-center gap-2">
                <MessageCircle className="w-4 h-4 md:w-5 md:h-5 text-yellow-500 flex-shrink-0" />
                <span className="break-words">contact@inchtomilez.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <>
      <SEOHead {...metadata} />
      <SchemaMarkup type="organization" />
      <EnhancedSchemaMarkup page="about" />
      <FAQSchema faqs={ABOUT_FAQS} />
      <LocalBusinessSchema />
      <Breadcrumbs items={[{ label: 'About' }]} />
      
      <div style={{ paddingTop: '120px' }}>
        <StackingSection index={0} total={totalSections}>
          <HeroSection />
        </StackingSection>
      
        <StackingSection index={1} total={totalSections}>
          <WhoWeAreSection />
        </StackingSection>
      
        <StackingSection index={2} total={totalSections}>
          <GrowthSection />
        </StackingSection>
      
        <StackingSection index={3} total={totalSections}>
          <SimpleSection />
        </StackingSection>

        <StackingSection index={4} total={totalSections}>
          <OurStorySection />
        </StackingSection>

        <StackingSection index={5} total={totalSections}>
          <WhatSetsUsApartSection />
        </StackingSection>

        <StackingSection index={6} total={totalSections}>
          <NotPublishedSection />
        </StackingSection>

        <StackingSection index={7} total={totalSections}>
          <NoBargainSection />
        </StackingSection>

        <StackingSection index={8} total={totalSections}>
          <ServicesOverviewSection />
        </StackingSection>

        <StackingSection index={9} total={totalSections}>
          <IndustriesSection />
        </StackingSection>

        <StackingSection index={10} total={totalSections}>
          <TeamCultureSection />
        </StackingSection>

        <StackingSection index={11} total={totalSections}>
          <StatsSection />
        </StackingSection>

        <StackingSection index={12} total={totalSections}>
          <WhyChooseUsSection />
        </StackingSection>

        <StackingSection index={13} total={totalSections}>
          <ProcessSection />
        </StackingSection>

        <StackingSection index={14} total={totalSections}>
          <TestimonialsSection />
        </StackingSection>

        <StackingSection index={15} total={totalSections}>
          <GetStartedSection />
        </StackingSection>
      </div>
    </>
  );
}
