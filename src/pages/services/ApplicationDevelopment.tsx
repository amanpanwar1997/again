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
import { Smartphone, Apple, Monitor, Zap, CheckCircle2, Code2, Shield, Rocket } from 'lucide-react';

export default function ApplicationDevelopment() {
  const totalSections = 12;

  // App Types (REDUCED)
  const appTypes = [
    { icon: '📱', title: 'Mobile Apps', description: 'iOS & Android native', items: ['Native apps', 'Cross-platform', 'App Store ready'] },
    { icon: '🌐', title: 'Web Apps', description: 'Progressive web apps', items: ['PWA', 'Responsive', 'Offline support'] },
    { icon: '💼', title: 'Enterprise Apps', description: 'Business solutions', items: ['CRM', 'ERP', 'Workflow automation'] },
    { icon: '🎮', title: 'Custom Apps', description: 'Tailored solutions', items: ['API integration', 'Cloud-based', 'Scalable'] }
  ];

  // Tech Stack (REDUCED)
  const techStack = [
    { title: 'Mobile', description: 'Native & cross-platform', items: ['React Native', 'Flutter', 'Swift/Kotlin'] },
    { title: 'Web', description: 'Modern frameworks', items: ['React', 'Vue.js', 'Progressive Web Apps'] },
    { title: 'Backend', description: 'Robust infrastructure', items: ['Node.js', 'Firebase', 'AWS/Azure'] }
  ];

  // Process (REDUCED)
  const process = [
    { step: '01', title: 'Planning', description: 'Requirements & wireframes' },
    { step: '02', title: 'Design', description: 'UI/UX prototypes' },
    { step: '03', title: 'Development', description: 'Coding & testing' },
    { step: '04', title: 'Deployment', description: 'Launch & support' }
  ];

  // Features (REDUCED)
  const features = [
    { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security' },
    { icon: Zap, title: 'Fast Performance', description: 'Optimized for speed' },
    { icon: Rocket, title: 'Scalable', description: 'Grows with your business' }
  ];

  // Results
  const results = [
    { metric: '250+', label: 'Apps Delivered' },
    { metric: '4.8/5', label: 'Avg Rating' },
    { metric: '1M+', label: 'Total Downloads' },
    { metric: '99.9%', label: 'Uptime' }
  ];

  // Packages (REDUCED)
  const packages = [
    {
      name: 'Basic',
      price: '₹50,000',
      period: '',
      note: 'Simple mobile app',
      features: ['iOS or Android', 'Basic features', '3 screens', '1 month support'],
      popular: false
    },
    {
      name: 'Professional',
      price: '₹1,50,000',
      period: '',
      note: 'Full-featured app',
      features: ['iOS + Android', 'Advanced features', 'Unlimited screens', '6 months support'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '₹5,00,000',
      period: '+',
      note: 'Custom solution',
      features: ['All platforms', 'Full backend', 'API integrations', '1 year support'],
      popular: false
    }
  ];

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/application-development')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'Application Development Services',
          description: 'Custom mobile and web app development: iOS, Android, PWA, enterprise apps',
          serviceType: 'Application Development',
          url: '/services/application-development'
        }}
      />
      <SchemaMarkup type="organization" />
      <Breadcrumbs items={[{ label: 'Services', path: '/services' }, { label: 'Application Development' }]} />

      <div className="pt-20">
        {/* Hero */}
        <StackingSection index={0} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <Badge className="mb-4 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
                Application Development
              </Badge>
              <h1 className="mb-4">Build Powerful Mobile & Web Apps</h1>
              <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8 max-w-3xl">
                Custom iOS, Android, and web applications that deliver exceptional user experiences. From startups to enterprises.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-4 md:py-6">
                <Smartphone className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                Start Your App
              </Button>
            </div>
          </div>
        </StackingSection>

        {/* App Types - HORIZONTAL CAROUSEL (Mobile) / GRID (Desktop) */}
        <StackingSection index={1} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Types of Apps We Build</h2>
              
              {/* Mobile: Horizontal Scroll */}
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {appTypes.map((type, index) => (
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
                {appTypes.map((type, index) => (
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
              <h2 className="mb-6 md:mb-8">Development Journey</h2>
              
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
                  { icon: Code2, title: 'Clean Architecture', description: 'Maintainable codebase' },
                  { icon: Apple, title: 'App Store Ready', description: 'Full submission support' },
                  { icon: Monitor, title: 'Admin Dashboard', description: 'Manage your app easily' }
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
          <div>
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black">
                Pricing
              </Badge>
              <h2 className="mb-6 md:mb-8">App Packages</h2>
              
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

        {/* Platforms */}
        <StackingSection index={8} total={totalSections}>
          <div>
            <div className="w-[80vw]">
              <h2 className="mb-6 md:mb-8">Platforms We Support</h2>
              <div className="flex flex-wrap gap-2 md:gap-3">
                {['iOS', 'Android', 'Web (PWA)', 'React Native', 'Flutter', 'Hybrid Apps', 'Windows', 'macOS'].map((platform, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/5 text-white border border-white/10 text-xs md:text-sm px-3 md:px-4 py-1.5 md:py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300"
                  >
                    {platform}
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
              <h2 className="mb-6 md:mb-8">Recent Apps</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { title: 'Fitness Tracker', type: 'Health App', platform: 'iOS + Android' },
                    { title: 'Food Delivery', type: 'E-Commerce', platform: 'React Native' },
                    { title: 'Finance Manager', type: 'FinTech', platform: 'Flutter' }
                  ].map((project, index) => (
                    <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all flex-shrink-0" style={{ width: '280px' }}>
                      <CardContent className="p-5">
                        <Badge className="mb-2 bg-yellow-500/20 text-yellow-500 text-xs">
                          {project.type}
                        </Badge>
                        <h3 className="mb-2 text-base">{project.title}</h3>
                        <p className="text-gray-400 text-sm">{project.platform}</p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="hidden md:grid grid-cols-3 gap-6">
                {[
                  { title: 'Fitness Tracker', type: 'Health App', platform: 'iOS + Android' },
                  { title: 'Food Delivery', type: 'E-Commerce', platform: 'React Native' },
                  { title: 'Finance Manager', type: 'FinTech', platform: 'Flutter' }
                ].map((project, index) => (
                  <Card key={index} className="bg-white/5 border border-white/10 hover:border-yellow-500/50 transition-all">
                    <CardContent className="p-6">
                      <Badge className="mb-3 bg-yellow-500/20 text-yellow-500">
                        {project.type}
                      </Badge>
                      <h3 className="mb-2">{project.title}</h3>
                      <p className="text-gray-400">{project.platform}</p>
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
              <h2 className="mb-6 md:mb-8">Client Reviews</h2>
              
              <div className="md:hidden overflow-x-auto pb-4 -mx-4 px-4">
                <div className="flex gap-4" style={{ width: 'max-content' }}>
                  {[
                    { client: 'Startup Founder', review: 'They built an amazing app that our users love!', rating: '5/5' },
                    { client: 'E-Commerce CEO', review: 'Professional team, delivered on time and budget.', rating: '5/5' }
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
                  { client: 'Startup Founder', review: 'They built an amazing app that our users love!', rating: '5/5' },
                  { client: 'E-Commerce CEO', review: 'Professional team, delivered on time and budget.', rating: '5/5' }
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
                <h1 className="mb-4 text-2xl md:text-4xl">Launch Your App Today</h1>
                <p className="text-base md:text-xl text-gray-300 mb-6 md:mb-8">
                  Join 250+ businesses with powerful, user-friendly apps. From concept to App Store in 8-12 weeks.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center mb-6 md:mb-8">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Rocket className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    Start Project
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 md:px-10 py-5 md:py-7 text-base md:text-lg">
                    <Smartphone className="mr-2 h-5 w-5 md:h-6 md:w-6" />
                    View Apps
                  </Button>
                </div>

                <div className="flex flex-wrap gap-2 md:gap-3 justify-center">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    8-12 Week Delivery
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    99.9% Uptime
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-3 md:px-4 py-1.5 md:py-2 text-xs md:text-sm">
                    <CheckCircle2 className="mr-1 md:mr-2 h-3 w-3 md:h-4 md:w-4" />
                    App Store Support
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
