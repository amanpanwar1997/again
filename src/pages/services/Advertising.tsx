import SEOHead from '../../components/SEOHead';
import SchemaMarkup from '../../components/SchemaMarkup';
import { getPageMetadata } from '../../utils/seoMetadata';
import StackingSection from '../../components/StackingSection';
import Breadcrumbs from '../../components/Breadcrumbs';
import { Button } from '../../components/ui/button';
import { Badge } from '../../components/ui/badge';
import { Card, CardContent } from '../../components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../../components/ui/accordion';
import { Target, Eye, MousePointer, BarChart3, Users, Zap, CheckCircle2, ArrowRight, TrendingUp, Search, Monitor, Rocket } from 'lucide-react';

export default function Advertising() {
  const totalSections = 12;

  // Ad Platforms (REDUCED from 4 to 4 but condensed)
  const platforms = [
    { icon: '🔍', title: 'Google Ads', description: 'Search, Display, Shopping', items: ['PPC Management', 'Keyword Research', 'Bid Optimization'] },
    { icon: '📱', title: 'Meta Ads', description: 'Facebook & Instagram', items: ['Feed Ads', 'Story Ads', 'Carousel Ads'] },
    { icon: '💼', title: 'LinkedIn Ads', description: 'B2B Lead Generation', items: ['Sponsored Content', 'InMail Campaigns', 'Lead Gen Forms'] },
    { icon: '📺', title: 'Display Ads', description: 'Banner & Native Ads', items: ['GDN Campaigns', 'Programmatic', 'Retargeting'] }
  ];

  // Google Ads Services (REDUCED)
  const googleAds = [
    { title: 'Search Campaigns', description: 'Capture high-intent customers', items: ['Keyword research', 'Compelling ad copy', 'Conversion tracking'] },
    { title: 'Display Network', description: 'Reach 90% of internet users', items: ['Responsive ads', 'Audience targeting', 'Remarketing'] },
    { title: 'Shopping Ads', description: 'Showcase products with images', items: ['Feed optimization', 'Smart Shopping', 'Performance Max'] }
  ];

  // Social Media Advertising (REDUCED)
  const socialAds = [
    { title: 'Facebook & Instagram', sections: [
      { name: 'Targeting', desc: 'Demographics, interests, behaviors, lookalike audiences' },
      { name: 'Ad Formats', desc: 'Image, video, carousel, stories, reels' },
      { name: 'Objectives', desc: 'Brand awareness, traffic, leads, conversions' }
    ]},
    { title: 'LinkedIn Ads', sections: [
      { name: 'Professional Targeting', desc: 'Job title, company, industry, skills' },
      { name: 'Lead Generation', desc: 'Pre-filled forms, document ads, event ads' },
      { name: 'ABM', desc: 'Target specific companies and decision-makers' }
    ]}
  ];

  // Remarketing (REDUCED from 3 to 3)
  const remarketing = [
    { icon: Eye, title: 'Display Remarketing', description: 'Show ads to past visitors across websites' },
    { icon: Target, title: 'Search Remarketing', description: 'Re-engage visitors in search results' },
    { icon: Users, title: 'Dynamic Remarketing', description: 'Show products users viewed' }
  ];

  // Process (REDUCED from 4 to 4 but condensed)
  const process = [
    { step: '01', title: 'Strategy', description: 'Goals, audience, platforms' },
    { step: '02', title: 'Setup', description: 'Account creation, tracking' },
    { step: '03', title: 'Launch', description: 'Activation & monitoring' },
    { step: '04', title: 'Optimize', description: 'Testing & improvements' }
  ];

  // Analytics (REDUCED from 3 to 3)
  const analytics = [
    { icon: BarChart3, title: 'Performance Tracking', description: 'Real-time dashboards' },
    { icon: TrendingUp, title: 'Monthly Reports', description: 'Detailed analysis' },
    { icon: Zap, title: 'Conversion Tracking', description: 'Track every action' }
  ];

  // Results (KEPT 4)
  const results = [
    { metric: '6.2x', label: 'Average ROAS' },
    { metric: '42%', label: 'Lower CPA' },
    { metric: '200+', label: 'Active Campaigns' },
    { metric: '₹5Cr+', label: 'Ad Spend Managed' }
  ];

  // Packages (KEPT 3 but REDUCED features)
  const packages = [
    {
      name: 'Starter',
      price: '₹20,000',
      period: '/mo',
      note: '+ Ad Spend',
      features: ['Single platform', 'Up to ₹50K ad spend', 'Monthly reporting'],
      popular: false
    },
    {
      name: 'Growth',
      price: '₹40,000',
      period: '/mo',
      note: '+ Ad Spend',
      features: ['Multi-platform', 'Up to ₹2L ad spend', 'Bi-weekly reports'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      note: '',
      features: ['All platforms', 'Unlimited ad spend', 'Dedicated manager'],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/advertising')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'Advertising Services',
          description: 'Data-driven advertising campaigns: Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads',
          serviceType: 'Advertising',
          url: '/services/advertising'
        }}
      />
      <SchemaMarkup type="organization" />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Advertising' }]} />

      <div className="pt-20">
        {/* Hero */}
        <StackingSection index={0} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
                Advertising
              </Badge>
              <h1 className="mb-4">Precision-Targeted Advertising</h1>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl">
                Put your brand in front of the right audience at the right time. From Google Ads to social media advertising, we maximize ROI.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-4 md:py-6">
                <Rocket className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Launch Campaign
              </Button>
            </div>
          </div>
        </StackingSection>

        {/* Ad Platforms - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={1} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Advertising Platforms</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {platforms.map((platform, index) => (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <div className="text-4xl mb-3">{platform.icon}</div>
                        <h3 className="mb-2 text-base">{platform.title}</h3>
                        <p className="text-gray-400 text-xs mb-3">{platform.description}</p>
                        <ul className="space-y-1">
                          {platform.items.map((item, idx) => (
                            <li key={idx} className="text-xs text-gray-300">• {item}</li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-4 gap-4">
                {platforms.map((platform, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{platform.icon}</div>
                      <h3 className="mb-2">{platform.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{platform.description}</p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        {platform.items.map((item, idx) => (
                          <li key={idx}>• {item}</li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Google Ads - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={2} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Google Ads Services</h2>
              
              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {googleAds.map((service, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`google-${index}`}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all data-[state=open]:border-yellow-500/50"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <h3 className="text-white text-sm">{service.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <p className="text-gray-300 text-sm mb-3">{service.description}</p>
                        <div className="space-y-2">
                          {service.items.map((item, idx) => (
                            <div key={idx} className="flex items-start gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-yellow-500 flex-shrink-0 mt-0.5" />
                              <span className="text-gray-400">{item}</span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {googleAds.map((service, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="mb-4">{service.title}</h3>
                      <p className="text-gray-300 mb-4">{service.description}</p>
                      <ul className="space-y-2">
                        {service.items.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                            <span className="text-gray-400 text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Social Media Ads - ACCORDION */}
        <StackingSection index={3} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Social Media Advertising</h2>
              
              <Accordion type="single" collapsible className="w-full space-y-3 md:space-y-4">
                {socialAds.map((platform, index) => (
                  <AccordionItem 
                    key={index} 
                    value={`social-${index}`}
                    className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all data-[state=open]:border-yellow-500/50"
                  >
                    <AccordionTrigger className="px-4 md:px-6 py-3 md:py-4 hover:no-underline">
                      <h3 className="text-white text-sm md:text-base">{platform.title}</h3>
                    </AccordionTrigger>
                    <AccordionContent className="px-4 md:px-6 pb-3 md:pb-4">
                      <div className="space-y-3 md:space-y-4">
                        {platform.sections.map((section, idx) => (
                          <div key={idx} className="border-l-4 border-yellow-500 pl-3 md:pl-4">
                            <h4 className="mb-1 text-sm md:text-base">{section.name}</h4>
                            <p className="text-gray-400 text-xs md:text-sm">{section.desc}</p>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </StackingSection>

        {/* Remarketing - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={4} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Remarketing</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {remarketing.map((service, index) => (
                    <Card key={index} className="bg-black border border-white/10 hover:scale-105 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <service.icon className="h-8 w-8 mb-3 text-yellow-500" />
                        <h3 className="mb-2 text-base">{service.title}</h3>
                        <p className="text-gray-300 text-sm">{service.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {remarketing.map((service, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:scale-105 transition-all">
                    <CardContent className="p-6">
                      <service.icon className="h-10 w-10 mb-4 text-yellow-500" />
                      <h3 className="mb-3">{service.title}</h3>
                      <p className="text-gray-300">{service.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Process - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={5} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Our Process
              </Badge>
              <h2 className="mb-6 md:mb-8">Campaign Management</h2>
              
              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {process.map((step, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`process-${index}`}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all data-[state=open]:border-yellow-500/50"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <div className="flex items-center gap-3 w-full text-left">
                          <div className="w-10 h-10 bg-yellow-500/10 border border-yellow-500/30 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-yellow-500 text-sm">{step.step}</span>
                          </div>
                          <h3 className="text-white text-sm">{step.title}</h3>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <div className="pl-12">
                          <p className="text-gray-300 text-sm">{step.description}</p>
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-4 gap-4">
                {process.map((step, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-6">
                      <div className="text-yellow-500 mb-3 text-2xl">{step.step}</div>
                      <h4 className="mb-2">{step.title}</h4>
                      <p className="text-gray-400 text-sm">{step.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Analytics - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={6} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Analytics & Reporting</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {analytics.map((item, index) => (
                    <Card key={index} className="bg-black border border-white/10 flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <item.icon className="h-8 w-8 mb-3 text-yellow-500" />
                        <h3 className="mb-2 text-base">{item.title}</h3>
                        <p className="text-gray-300 text-sm">{item.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {analytics.map((item, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-6">
                      <item.icon className="h-10 w-10 mb-4 text-yellow-500" />
                      <h3 className="mb-3">{item.title}</h3>
                      <p className="text-gray-300">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Results - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={7} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Proven Results</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {results.map((result, index) => (
                    <Card key={index} className="bg-black border border-white/10 flex-shrink-0" style={{ width: '200px' }}>
                      <CardContent className="p-5 text-center">
                        <div className="text-4xl mb-1 text-yellow-500">{result.metric}</div>
                        <p className="text-gray-400 text-sm">{result.label}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-4 gap-6">
                {results.map((result, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-6 text-center">
                      <div className="text-5xl mb-2 text-yellow-500">{result.metric}</div>
                      <p className="text-gray-400">{result.label}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Pricing - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={8} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Pricing
              </Badge>
              <h2 className="mb-6 md:mb-8">Advertising Packages</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {packages.map((pkg, index) => (
                    <Card 
                      key={index}
                      className={`bg-black ${pkg.popular ? 'border-2 border-yellow-500' : 'border border-white/10'} transition-all flex-shrink-0 relative`}
                      style={{ width: '300px' }}
                    >
                      {pkg.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-3 py-0.5 rounded-full text-xs">
                          Popular
                        </div>
                      )}
                      <CardContent className="p-6">
                        <h3 className="mb-2 text-lg">{pkg.name}</h3>
                        <div className="text-3xl mb-2">{pkg.price}<span className="text-base text-gray-400">{pkg.period}</span></div>
                        {pkg.note && <p className="text-gray-400 mb-4 text-sm">{pkg.note}</p>}
                        <ul className="space-y-2 mb-6">
                          {pkg.features.map((feature, idx) => (
                            <li key={idx} className="flex items-center gap-2 text-sm">
                              <CheckCircle2 className="h-4 w-4 text-yellow-500 flex-shrink-0" />
                              <span className="text-gray-300">{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button className={`w-full text-sm ${pkg.popular ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-transparent border border-white hover:bg-white hover:text-black'} rounded-full`}>
                          Get Started
                        </Button>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {packages.map((pkg, index) => (
                  <Card 
                    key={index}
                    className={`bg-black ${pkg.popular ? 'border-2 border-yellow-500' : 'border border-white/10'} relative`}
                  >
                    {pkg.popular && (
                      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                        Popular
                      </div>
                    )}
                    <CardContent className="p-8">
                      <h3 className="mb-2">{pkg.name}</h3>
                      <div className="text-3xl mb-4">{pkg.price}<span className="text-lg text-gray-400">{pkg.period}</span></div>
                      {pkg.note && <p className="text-gray-400 mb-6 text-sm">{pkg.note}</p>}
                      <ul className="space-y-3 mb-6">
                        {pkg.features.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                            <span className="text-gray-300 text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button className={`w-full ${pkg.popular ? 'bg-yellow-500 text-black hover:bg-yellow-400' : 'bg-transparent border border-white hover:bg-white hover:text-black'} rounded-full`}>
                        Get Started
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Industries - BADGE WRAP */}
        <StackingSection index={9} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Industries We Serve</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['E-Commerce', 'Healthcare', 'Real Estate', 'Education', 'Finance', 'Technology', 'Hospitality', 'Fashion', 'Automotive', 'Legal'].map((industry, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/5 text-white border border-white/10 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Case Studies - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={10} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Success Stories</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { client: 'E-Commerce Store', result: '6.2x ROAS', time: '3 months' },
                    { client: 'B2B SaaS', result: '42% lower CPA', time: '4 months' },
                    { client: 'Local Business', result: '200% more leads', time: '2 months' }
                  ].map((study, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <Badge className="mb-2 bg-yellow-500/20 text-yellow-500 text-xs">
                          Case Study
                        </Badge>
                        <h3 className="mb-2 text-base">{study.client}</h3>
                        <p className="text-lg mb-1">{study.result}</p>
                        <p className="text-gray-400 text-xs">Timeline: {study.time}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  { client: 'E-Commerce Store', result: '6.2x ROAS', time: '3 months' },
                  { client: 'B2B SaaS', result: '42% lower CPA', time: '4 months' },
                  { client: 'Local Business', result: '200% more leads', time: '2 months' }
                ].map((study, index) => (
                  <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-yellow-500/20 text-yellow-500">
                        Case Study
                      </Badge>
                      <h3 className="mb-2">{study.client}</h3>
                      <p className="text-xl mb-2">{study.result}</p>
                      <p className="text-gray-400 text-sm">Timeline: {study.time}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Final CTA */}
        <StackingSection index={11} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                  Ready to Advertise?
                </Badge>
                <h1 className="mb-4 text-2xl md:text-4xl">Launch Your First Campaign</h1>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Join 200+ businesses achieving 6.2x average ROAS with our advertising services.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Rocket className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    Start Campaign
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Monitor className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    View Case Studies
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Free Consultation
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    No Setup Fees
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Performance Guarantee
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>
      </div>
    </div>
  );
}
