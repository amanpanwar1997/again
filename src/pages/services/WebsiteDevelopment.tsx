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
import { Globe, Smartphone, Zap, Code, CheckCircle2, Rocket, Layout, Lock } from 'lucide-react';

export default function WebsiteDevelopment() {
  const totalSections = 12;

  // Website Types (REDUCED)
  const websiteTypes = [
    { icon: '🌐', title: 'Business Websites', description: 'Professional corporate sites', items: ['Custom design', 'CMS integration', 'Contact forms'] },
    { icon: '🛒', title: 'E-Commerce', description: 'Online stores', items: ['Product catalog', 'Payment gateway', 'Order management'] },
    { icon: '📱', title: 'Landing Pages', description: 'High-converting pages', items: ['A/B testing', 'Lead capture', 'Fast loading'] },
    { icon: '📰', title: 'Blogs & Portfolios', description: 'Content showcases', items: ['Blog CMS', 'Portfolio gallery', 'SEO optimized'] }
  ];

  // Tech Stack (REDUCED)
  const techStack = [
    { title: 'Frontend', description: 'Modern frameworks', items: ['React', 'Next.js', 'Tailwind CSS'] },
    { title: 'Backend', description: 'Scalable systems', items: ['Node.js', 'PHP', 'Python'] },
    { title: 'CMS', description: 'Easy management', items: ['WordPress', 'Webflow', 'Custom CMS'] }
  ];

  // Process (REDUCED)
  const process = [
    { step: '01', title: 'Discovery', description: 'Requirements & planning' },
    { step: '02', title: 'Design', description: 'UI/UX wireframes' },
    { step: '03', title: 'Development', description: 'Code & integrate' },
    { step: '04', title: 'Launch', description: 'Deploy & support' }
  ];

  // Features (REDUCED)
  const features = [
    { icon: Smartphone, title: 'Mobile Responsive', description: 'Perfect on all devices' },
    { icon: Zap, title: 'Fast Loading', description: 'Optimized performance' },
    { icon: Lock, title: 'Secure & Safe', description: 'SSL & best practices' }
  ];

  // Results
  const results = [
    { metric: '400+', label: 'Websites Built' },
    { metric: '99%', label: 'Uptime SLA' },
    { metric: '<2s', label: 'Avg Load Time' },
    { metric: '24/7', label: 'Support' }
  ];

  // Packages (REDUCED)
  const packages = [
    {
      name: 'Starter',
      price: '₹30,000',
      period: '',
      note: '5-page website',
      features: ['Responsive design', 'Contact form', 'Basic SEO', '1 month support'],
      popular: false
    },
    {
      name: 'Business',
      price: '₹75,000',
      period: '',
      note: '10-page website',
      features: ['Custom design', 'CMS integration', 'Advanced SEO', '3 months support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹2,00,000',
      period: '+',
      note: 'Unlimited pages',
      features: ['Full custom development', 'E-commerce', 'Premium SEO', '1 year support'],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/website-development')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'Website Development Services',
          description: 'Custom website development: business websites, e-commerce, landing pages, CMS',
          serviceType: 'Website Development',
          url: '/services/website-development'
        }}
      />
      <SchemaMarkup type="organization" />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Website Development' }]} />

      <div className="pt-20">
        {/* Hero */}
        <StackingSection index={0} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <Badge className="mb-4 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
                Website Development
              </Badge>
              <h1 className="mb-4">Build Your Digital Presence</h1>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl">
                Custom website development that drives results. From business sites to e-commerce platforms, we build fast, secure, and scalable websites.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-4 md:py-6">
                <Globe className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Your Project
              </Button>
            </div>
          </div>
        </StackingSection>

        {/* Website Types - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={1} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Types of Websites</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {websiteTypes.map((type, index) => (
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
                {websiteTypes.map((type, index) => (
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

        {/* Tech Stack - ACCORDION (Mobile) / GRID (Desktop) */}
        <StackingSection index={2} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Technology Stack</h2>
              
              {/* Mobile: Accordion */}
              <div className="md:hidden">
                <Accordion type="single" collapsible className="w-full space-y-3">
                  {techStack.map((tech, index) => (
                    <AccordionItem 
                      key={index} 
                      value={`tech-${index}`}
                      className="bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-yellow-500/30 transition-all data-[state=open]:border-yellow-500/50"
                    >
                      <AccordionTrigger className="px-4 py-3 hover:no-underline">
                        <h3 className="text-white text-sm">{tech.title}</h3>
                      </AccordionTrigger>
                      <AccordionContent className="px-4 pb-3">
                        <p className="text-gray-300 text-sm mb-3">{tech.description}</p>
                        <div className="space-y-2">
                          {tech.items.map((item, idx) => (
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
                {techStack.map((tech, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-6">
                      <h3 className="mb-4">{tech.title}</h3>
                      <p className="text-gray-300 mb-4">{tech.description}</p>
                      <ul className="space-y-2">
                        {tech.items.map((item, idx) => (
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
          <div>
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Our Process
              </Badge>
              <h2 className="mb-6 md:mb-8">Development Process</h2>
              
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

        {/* Features - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={4} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Key Features</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {features.map((feature, index) => (
                    <Card key={index} className="bg-black border border-white/10 hover:scale-105 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <feature.icon className="h-8 w-8 mb-3 text-yellow-500" />
                        <h3 className="mb-2 text-base">{feature.title}</h3>
                        <p className="text-gray-300 text-sm">{feature.description}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Desktop: Grid */}
              <div className="hidden md:grid grid-cols-3 gap-6">
                {features.map((feature, index) => (
                  <Card key={index} className="bg-black border border-white/10 hover:scale-105 transition-all">
                    <CardContent className="p-6">
                      <feature.icon className="h-10 w-10 mb-4 text-yellow-500" />
                      <h3 className="mb-3">{feature.title}</h3>
                      <p className="text-gray-300">{feature.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Additional Features */}
        <StackingSection index={5} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">What You Get</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                {[
                  { icon: Code, title: 'Clean Code', description: 'Modern, maintainable codebase' },
                  { icon: Layout, title: 'Custom Design', description: 'Tailored to your brand' },
                  { icon: Rocket, title: 'Fast Deployment', description: '2-4 week turnaround' }
                ].map((item, index) => (
                  <Card key={index} className="bg-black border border-white/10">
                    <CardContent className="p-5 md:p-6">
                      <item.icon className="h-8 w-8 md:h-10 md:w-10 mb-3 md:mb-4 text-yellow-500" />
                      <h3 className="mb-2 md:mb-3 text-base md:text-lg">{item.title}</h3>
                      <p className="text-gray-300 text-sm md:text-base">{item.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Results - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={6} total={totalSections}>
          <div>
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
          <div>
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Pricing
              </Badge>
              <h2 className="mb-6 md:mb-8">Development Packages</h2>
              
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

        {/* Technologies */}
        <StackingSection index={8} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Technologies We Use</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['React', 'Next.js', 'WordPress', 'PHP', 'Node.js', 'Tailwind CSS', 'MySQL', 'MongoDB', 'AWS', 'Vercel'].map((tech, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/5 text-white border border-white/10 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Portfolio */}
        <StackingSection index={9} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Recent Projects</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { title: 'E-Commerce Platform', type: 'Online Store', tech: 'React + Node.js' },
                    { title: 'Corporate Website', type: 'Business Site', tech: 'WordPress' },
                    { title: 'SaaS Dashboard', type: 'Web App', tech: 'Next.js' }
                  ].map((project, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <Badge className="mb-2 bg-yellow-500/20 text-yellow-500 text-xs">
                          {project.type}
                        </Badge>
                        <h3 className="mb-2 text-base">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.tech}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  { title: 'E-Commerce Platform', type: 'Online Store', tech: 'React + Node.js' },
                  { title: 'Corporate Website', type: 'Business Site', tech: 'WordPress' },
                  { title: 'SaaS Dashboard', type: 'Web App', tech: 'Next.js' }
                ].map((project, index) => (
                  <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-yellow-500/20 text-yellow-500">
                        {project.type}
                      </Badge>
                      <h3 className="mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.tech}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Testimonials */}
        <StackingSection index={10} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Client Feedback</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { client: 'E-Commerce Owner', review: 'Delivered a lightning-fast online store. Sales up 200%!', rating: '5/5' },
                    { client: 'Startup Founder', review: 'Professional, on-time, and exceeded expectations.', rating: '5/5' }
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
                  { client: 'E-Commerce Owner', review: 'Delivered a lightning-fast online store. Sales up 200%!', rating: '5/5' },
                  { client: 'Startup Founder', review: 'Professional, on-time, and exceeded expectations.', rating: '5/5' }
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
          <div>
            <div className="w-[80vw]">
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                  Ready to Build?
                </Badge>
                <h1 className="mb-4 text-2xl md:text-4xl">Launch Your Website Today</h1>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Join 400+ businesses with fast, secure, and beautiful websites. Get online in 2-4 weeks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Rocket className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    Start Project
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Globe className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    View Portfolio
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    2-4 Week Delivery
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    99% Uptime SLA
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    24/7 Support
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
