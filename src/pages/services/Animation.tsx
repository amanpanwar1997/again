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
import { Film, Palette, Sparkles, Play, CheckCircle2, Video, Wand2, Layers } from 'lucide-react';

export default function Animation() {
  const totalSections = 12;

  // Animation Types (REDUCED)
  const animationTypes = [
    { icon: '🎬', title: '2D Animation', description: 'Character & motion graphics', items: ['Explainer videos', 'Character animation', 'Motion graphics'] },
    { icon: '🎭', title: '3D Animation', description: 'Realistic 3D modeling', items: ['Product visualization', 'Architectural walkthrough', '3D characters'] },
    { icon: '✏️', title: 'Whiteboard', description: 'Hand-drawn storytelling', items: ['Educational videos', 'Process explanations', 'Brand stories'] },
    { icon: '🎨', title: 'Motion Graphics', description: 'Dynamic visual design', items: ['Logo animations', 'Social media ads', 'UI animations'] }
  ];

  // Services (REDUCED)
  const services = [
    { title: 'Explainer Videos', description: 'Simplify complex concepts', items: ['Script writing', 'Storyboarding', 'Voiceover integration'] },
    { title: 'Product Demos', description: 'Showcase your products', items: ['3D product modeling', 'Feature highlights', 'Interactive demos'] },
    { title: 'Brand Videos', description: 'Tell your brand story', items: ['Brand messaging', 'Visual identity', 'Emotional storytelling'] }
  ];

  // Process (REDUCED)
  const process = [
    { step: '01', title: 'Concept', description: 'Ideation & scripting' },
    { step: '02', title: 'Storyboard', description: 'Visual planning' },
    { step: '03', title: 'Animation', description: 'Bringing it to life' },
    { step: '04', title: 'Delivery', description: 'Final polish & render' }
  ];

  // Industries (REDUCED)
  const industries = [
    { icon: Video, title: 'E-Learning', description: 'Educational content' },
    { icon: Sparkles, title: 'Marketing', description: 'Brand campaigns' },
    { icon: Layers, title: 'Product', description: 'Product demos' }
  ];

  // Results
  const results = [
    { metric: '500+', label: 'Videos Created' },
    { metric: '95%', label: 'Client Satisfaction' },
    { metric: '2.5M+', label: 'Total Views' },
    { metric: '24-48h', label: 'Turnaround' }
  ];

  // Packages (REDUCED)
  const packages = [
    {
      name: 'Basic',
      price: '₹15,000',
      period: '/video',
      note: '30-60 seconds',
      features: ['2D animation', 'Basic storyboard', '1 revision', 'HD export'],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹35,000',
      period: '/video',
      note: '60-90 seconds',
      features: ['2D/3D animation', 'Full storyboard', '3 revisions', '4K export'],
      popular: true
    },
    {
      name: 'Premium',
      price: '₹75,000',
      period: '/video',
      note: '90-120 seconds',
      features: ['Full 3D animation', 'Premium storyboard', 'Unlimited revisions', '4K export'],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/animation')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'Animation Services',
          description: '2D/3D animation, motion graphics, explainer videos, and whiteboard animations',
          serviceType: 'Animation',
          url: '/services/animation'
        }}
      />
      <SchemaMarkup type="organization" />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Animation' }]} />

      <div className="pt-20">
        {/* Hero */}
        <StackingSection index={0} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
                Animation
              </Badge>
              <h1 className="mb-4">Bring Your Ideas to Life</h1>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl">
                Professional 2D/3D animation services that captivate, engage, and convert. From explainer videos to product demos.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-4 md:py-6">
                <Film className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Your Project
              </Button>
            </div>
          </div>
        </StackingSection>

        {/* Animation Types - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={1} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Animation Styles</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {animationTypes.map((type, index) => (
                    <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <div className="text-4xl mb-3">{type.icon}</div>
                        <h3 className="mb-2 text-base">{type.title}</h3>
                        <p className="text-gray-400 text-xs mb-3">{type.description}</p>
                        <ul className="space-y-1">
                          {type.items.map((item, idx) => (
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
                {animationTypes.map((type, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all hover:scale-105">
                    <CardContent className="p-6">
                      <div className="text-4xl mb-3">{type.icon}</div>
                      <h3 className="mb-2">{type.title}</h3>
                      <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                      <ul className="space-y-1 text-sm text-gray-300">
                        {type.items.map((item, idx) => (
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

        {/* Services - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={2} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Our Services</h2>
              
              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {services.map((service, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`service-${index}`}
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
                {services.map((service, index) => (
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

        {/* Process - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={3} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Our Process
              </Badge>
              <h2 className="mb-6 md:mb-8">How We Create</h2>
              
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
              <h2 className="mb-6 md:mb-8">Industries We Serve</h2>
              
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
                  { icon: Wand2, title: 'Creative Excellence', description: 'Award-winning animation team' },
                  { icon: Play, title: 'Fast Turnaround', description: '24-48 hour delivery' },
                  { icon: Palette, title: 'Custom Styles', description: 'Tailored to your brand' }
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
              <h2 className="mb-6 md:mb-8">Our Impact</h2>
              
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
              <h2 className="mb-6 md:mb-8">Animation Packages</h2>
              
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
                      <div className="text-3xl mb-4">{pkg.price}<span className="text-lg text-gray-400">{pkg.period}</span></div>
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

        {/* Use Cases */}
        <StackingSection index={8} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Popular Use Cases</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['Explainer Videos', 'Product Demos', 'Social Media Ads', 'Training Videos', 'Brand Stories', 'App Previews', 'Logo Animation', 'Event Promotion'].map((useCase, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/5 text-white border border-white/10 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  >
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Portfolio Showcase */}
        <StackingSection index={9} total={totalSections}>
          <div className="flex items-center justify-center h-full px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Recent Work</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { title: 'SaaS Explainer', type: '2D Animation', views: '50K+' },
                    { title: 'Product Launch', type: '3D Animation', views: '100K+' },
                    { title: 'Brand Story', type: 'Motion Graphics', views: '75K+' }
                  ].map((work, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <Badge className="mb-2 bg-yellow-500/20 text-yellow-500 text-xs">
                          {work.type}
                        </Badge>
                        <h3 className="mb-2 text-base">{work.title}</h3>
                        <p className="text-gray-400 text-sm">{work.views} views</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  { title: 'SaaS Explainer', type: '2D Animation', views: '50K+' },
                  { title: 'Product Launch', type: '3D Animation', views: '100K+' },
                  { title: 'Brand Story', type: 'Motion Graphics', views: '75K+' }
                ].map((work, index) => (
                  <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-yellow-500/20 text-yellow-500">
                        {work.type}
                      </Badge>
                      <h3 className="mb-2">{work.title}</h3>
                      <p className="text-gray-400">{work.views} views</p>
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
              <h2 className="mb-6 md:mb-8">Client Reviews</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { client: 'Tech Startup', review: 'Amazing animations that perfectly captured our product!', rating: '5/5' },
                    { client: 'E-Learning Platform', review: 'Fast turnaround and excellent quality.', rating: '5/5' }
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
                  { client: 'Tech Startup', review: 'Amazing animations that perfectly captured our product!', rating: '5/5' },
                  { client: 'E-Learning Platform', review: 'Fast turnaround and excellent quality.', rating: '5/5' }
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
                  Ready to Animate?
                </Badge>
                <h1 className="mb-4 text-2xl md:text-4xl">Create Your Animation Today</h1>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Join 500+ brands who trust us with their animation needs. Fast turnaround, premium quality.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Film className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    Start Project
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Play className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    View Portfolio
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    24-48h Delivery
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    Unlimited Revisions
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    4K Quality
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
