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
import { Sparkles, Palette, Target, Heart, CheckCircle2, Pen, Eye, Layers } from 'lucide-react';

export default function Branding() {
  const totalSections = 12;

  // Branding Services (REDUCED)
  const services = [
    { icon: '🎨', title: 'Brand Identity', description: 'Logo, colors, typography', items: ['Logo design', 'Color palette', 'Typography system'] },
    { icon: '📖', title: 'Brand Strategy', description: 'Positioning & messaging', items: ['Market research', 'Brand positioning', 'Messaging framework'] },
    { icon: '✨', title: 'Brand Guidelines', description: 'Complete brand book', items: ['Usage guidelines', 'Visual standards', 'Voice & tone'] },
    { icon: '🎯', title: 'Rebranding', description: 'Brand refresh & evolution', items: ['Audit existing brand', 'Redesign identity', 'Migration plan'] }
  ];

  // Brand Elements (REDUCED)
  const elements = [
    { title: 'Visual Identity', description: 'Logos, colors, and design assets', items: ['Primary logo', 'Logo variations', 'Color system'] },
    { title: 'Brand Voice', description: 'Messaging and communication style', items: ['Tone of voice', 'Key messages', 'Tagline'] },
    { title: 'Brand Assets', description: 'Templates and collateral', items: ['Business cards', 'Letterhead', 'Social media templates'] }
  ];

  // Process (REDUCED)
  const process = [
    { step: '01', title: 'Discovery', description: 'Research & strategy' },
    { step: '02', title: 'Design', description: 'Create visual identity' },
    { step: '03', title: 'Refine', description: 'Feedback & iterations' },
    { step: '04', title: 'Launch', description: 'Guidelines & delivery' }
  ];

  // Industries (REDUCED)
  const industries = [
    { icon: Target, title: 'Startups', description: 'Build from scratch' },
    { icon: Heart, title: 'Healthcare', description: 'Trusted branding' },
    { icon: Layers, title: 'Tech', description: 'Modern identity' }
  ];

  // Results
  const results = [
    { metric: '300+', label: 'Brands Created' },
    { metric: '98%', label: 'Client Satisfaction' },
    { metric: '50+', label: 'Awards Won' },
    { metric: '7-14d', label: 'Avg Turnaround' }
  ];

  // Packages (REDUCED)
  const packages = [
    {
      name: 'Starter',
      price: '₹25,000',
      period: '',
      note: 'Essential branding',
      features: ['Logo design', 'Color palette', 'Basic guidelines', '2 revisions'],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹75,000',
      period: '',
      note: 'Complete identity',
      features: ['Full brand identity', 'Brand guidelines', 'Stationery design', 'Unlimited revisions'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹1,50,000',
      period: '',
      note: 'Strategic branding',
      features: ['Brand strategy', 'Full identity suite', 'Brand book (50+ pages)', 'Ongoing support'],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/branding')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'Branding Services',
          description: 'Complete brand identity design, brand strategy, and brand guidelines',
          serviceType: 'Branding',
          url: '/services/branding'
        }}
      />
      <SchemaMarkup type="organization" />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Branding' }]} />

      <div className="pt-20">
        {/* Hero */}
        <StackingSection index={0} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
                Branding
              </Badge>
              <h1 className="mb-4">Build a Brand People Love</h1>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl">
                From logo design to complete brand strategy, we create memorable identities that stand out.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-4 md:py-6">
                <Sparkles className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Build Your Brand
              </Button>
            </div>
          </div>
        </StackingSection>

        {/* Services - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={1} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Branding Services</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {services.map((service, index) => (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <div className="text-4xl mb-3">{service.icon}</div>
                        <h3 className="mb-2 text-base">{service.title}</h3>
                        <p className="text-gray-400 text-xs mb-3">{service.description}</p>
                        <ul className="space-y-1">
                          {service.items.map((item, idx) => (
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
                {services.map((service, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{service.icon}</div>
                      <h3 className="mb-2">{service.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{service.description}</p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        {service.items.map((item, idx) => (
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

        {/* Brand Elements - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={2} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">What You Get</h2>
              
              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {elements.map((element, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`element-${index}`}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all data-[state=open]:border-yellow-500/50"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <h3 className="text-white text-sm">{element.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <p className="text-gray-300 text-sm mb-3">{element.description}</p>
                        <div className="space-y-2">
                          {element.items.map((item, idx) => (
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
                {elements.map((element, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="mb-4">{element.title}</h3>
                      <p className="text-gray-300 mb-4">{element.description}</p>
                      <ul className="space-y-2">
                        {element.items.map((item, idx) => (
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

        {/* Process - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={3} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Our Process
              </Badge>
              <h2 className="mb-6 md:mb-8">How We Work</h2>
              
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

        {/* Industries - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={4} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Industries We Brand</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {industries.map((industry, index) => (
                    <Card key={index} className="bg-black border border-white/10 hover:scale-105 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <industry.icon className="h-8 w-8 mb-3 text-yellow-500" />
                        <h3 className="mb-2 text-base">{industry.title}</h3>
                        <p className="text-gray-300 text-sm">{industry.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {industries.map((industry, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:scale-105 transition-all">
                    <CardContent className="p-6">
                      <industry.icon className="h-10 w-10 mb-4 text-yellow-500" />
                      <h3 className="mb-3">{industry.title}</h3>
                      <p className="text-gray-300">{industry.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Features */}
        <StackingSection index={5} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Why Choose Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: Palette, title: 'Award-Winning Design', description: '50+ industry awards' },
                  { icon: Eye, title: 'Strategic Approach', description: 'Data-driven branding' },
                  { icon: Pen, title: 'Expert Team', description: '15+ years experience' }
                ].map((feature, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-5 md:p-6">
                      <feature.icon className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-yellow-500" />
                      <h3 className="mb-2 md:mb-3 text-base md:text-lg">{feature.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Results - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={6} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Our Track Record</h2>
              
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
        <StackingSection index={7} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Pricing
              </Badge>
              <h2 className="mb-6 md:mb-8">Branding Packages</h2>
              
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
                        <div className="text-3xl mb-2">{pkg.price}</div>
                        <p className="text-gray-400 mb-4 text-sm">{pkg.note}</p>
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
                      <div className="text-3xl mb-4">{pkg.price}</div>
                      <p className="text-gray-400 mb-6 text-sm">{pkg.note}</p>
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

        {/* Deliverables */}
        <StackingSection index={8} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">What You Receive</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Logo Files (AI, PNG, SVG)', 'Color Palette', 'Typography Guide', 'Brand Guidelines', 'Business Cards', 'Letterhead', 'Social Media Kit', 'Email Signature'].map((deliverable, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/5 text-white border border-white/10 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  >
                    {deliverable}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Portfolio */}
        <StackingSection index={9} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Recent Projects</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { title: 'Tech Startup', type: 'Full Identity', industry: 'Technology' },
                    { title: 'Healthcare Brand', type: 'Rebranding', industry: 'Healthcare' },
                    { title: 'Fashion Label', type: 'New Launch', industry: 'Fashion' }
                  ].map((project, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <Badge className="mb-2 bg-yellow-500/20 text-yellow-500 text-xs">
                          {project.type}
                        </Badge>
                        <h3 className="mb-2 text-base">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.industry}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  { title: 'Tech Startup', type: 'Full Identity', industry: 'Technology' },
                  { title: 'Healthcare Brand', type: 'Rebranding', industry: 'Healthcare' },
                  { title: 'Fashion Label', type: 'New Launch', industry: 'Fashion' }
                ].map((project, index) => (
                  <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-yellow-500/20 text-yellow-500">
                        {project.type}
                      </Badge>
                      <h3 className="mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.industry}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Testimonials */}
        <StackingSection index={10} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Client Feedback</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { client: 'Startup Founder', review: 'They created a brand identity that perfectly represents our vision!', rating: '5/5' },
                    { client: 'Marketing Director', review: 'Professional, creative, and delivered on time.', rating: '5/5' }
                  ].map((testimonial, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 flex-shrink-0" style={{ width: '300px' }}>
                      <CardContent className="p-5">
                        <div className="text-yellow-500 mb-2 text-sm">{testimonial.rating}</div>
                        <p className="text-gray-300 text-sm mb-3">"{testimonial.review}"</p>
                        <p className="text-gray-400 text-xs">— {testimonial.client}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-2 gap-6">
                {[
                  { client: 'Startup Founder', review: 'They created a brand identity that perfectly represents our vision!', rating: '5/5' },
                  { client: 'Marketing Director', review: 'Professional, creative, and delivered on time.', rating: '5/5' }
                ].map((testimonial, index) => (
                  <Card key={index} className="bg-white/5 border border-white/10">
                    <CardContent className="p-6">
                      <div className="text-yellow-500 mb-3">{testimonial.rating}</div>
                      <p className="text-gray-300 mb-4">"{testimonial.review}"</p>
                      <p className="text-gray-400 text-sm">— {testimonial.client}</p>
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
                  Ready to Brand?
                </Badge>
                <h1 className="mb-4 text-2xl md:text-4xl">Start Your Branding Journey</h1>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Join 300+ brands who trust us with their identity. Award-winning design, strategic approach.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Sparkles className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    Start Project
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Eye className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    View Portfolio
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    7-14 Day Delivery
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Unlimited Revisions
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Full IP Rights
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
