import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../components/EnhancedSchemaMarkup';
import FAQSchema from '../components/FAQSchema';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import { MAIN_PAGES_METADATA } from '../utils/mainPagesMetadata';
import { CONTACT_FAQS } from '../utils/faqData';
import { getPageMetadata } from '../utils/seoMetadata';
import StackingSection from '../components/StackingSection';
import Breadcrumbs from '../components/Breadcrumbs';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import ContactFormWithSupabase from '../components/ContactFormWithSupabase';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  MessageSquare, 
  Linkedin, 
  Facebook, 
  Instagram, 
  Twitter,
  Globe,
  Users,
  Briefcase,
  Target,
  TrendingUp,
  Award,
  CheckCircle2,
  HeartHandshake,
  Rocket,
  Zap
} from 'lucide-react';

export default function LetsTalk() {
  const totalSections = 15;
  const metadata = MAIN_PAGES_METADATA.letsTalk;

  // Contact Methods
  const contactMethods = [
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+91 9669988666', '+91 9009970709'],
      description: 'Available Mon-Sat, 9 AM - 7 PM IST',
      badge: 'Instant Response'
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['contact@inchtomilez.com'],
      description: 'We respond within 24 hours',
      badge: '24h Response'
    },
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['Vijay Nagar, Indore', 'Madhya Pradesh, India'],
      description: 'Schedule a meeting at our office',
      badge: 'By Appointment'
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Saturday', '9:00 AM - 7:00 PM'],
      description: 'Closed on Sundays & Public Holidays',
      badge: 'IST Timezone'
    }
  ];

  // Services Offered Badges
  const serviceBadges = [
    'Digital Marketing',
    'Advertising',
    'E-Commerce',
    'Branding',
    'Media Production',
    'Animation',
    'Graphic Design',
    'OOH Services',
    'Print Media',
    'Software Development',
    'App Development',
    'Website Development',
    'Political Campaigns',
    'Corporate Gifting',
    'Influencer Marketing',
    'Public Relations'
  ];

  // Industry Expertise Badges
  const industryBadges = [
    'Healthcare',
    'Education',
    'E-commerce',
    'Real Estate',
    'Finance',
    'Technology',
    'Hospitality',
    'Fashion',
    'Food & Beverage',
    'Automotive',
    'Entertainment',
    'Sports',
    'Manufacturing',
    'Agriculture',
    'Legal Services',
    'Non-Profit',
    'Beauty & Wellness',
    'Construction',
    'Logistics',
    'Pharmaceutical'
  ];

  // Why Choose Us
  const whyChooseUs = [
    {
      icon: Award,
      title: 'Award-Winning Agency',
      description: 'Recognized excellence in digital marketing and advertising',
      badge: 'Top Rated'
    },
    {
      icon: Users,
      title: '500+ Happy Clients',
      description: 'Trusted by businesses across 20+ industries',
      badge: 'Proven Track Record'
    },
    {
      icon: TrendingUp,
      title: 'Data-Driven Results',
      description: 'Average 300% ROI increase for our clients',
      badge: '300% ROI'
    },
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Fast execution without compromising quality',
      badge: 'Fast Delivery'
    },
    {
      icon: Target,
      title: 'Strategic Approach',
      description: 'Customized solutions for your unique goals',
      badge: 'Tailored Solutions'
    },
    {
      icon: HeartHandshake,
      title: 'Dedicated Support',
      description: '24/7 customer support and account management',
      badge: '24/7 Support'
    }
  ];

  // Social Media Links
  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', badge: 'B2B' },
    { icon: Facebook, label: 'Facebook', badge: '10K+' },
    { icon: Instagram, label: 'Instagram', badge: '25K+' },
    { icon: Twitter, label: 'Twitter/X', badge: 'Daily' },
    { icon: Globe, label: 'Website', badge: 'Portfolio' }
  ];

  // Project Types
  const projectTypes = [
    { icon: Rocket, title: 'New Launch', badge: 'Startup Ready' },
    { icon: TrendingUp, title: 'Growth Campaign', badge: 'Scale Fast' },
    { icon: Target, title: 'Brand Revamp', badge: 'Transform' },
    { icon: Briefcase, title: 'Ongoing Support', badge: 'Long-term' }
  ];

  // FAQ Section Data
  const faqs = [
    {
      question: 'What is your typical project timeline?',
      answer: '2-12 weeks depending on scope and complexity'
    },
    {
      question: 'Do you work with startups?',
      answer: 'Yes, we have special packages for startups and new businesses'
    },
    {
      question: 'What industries do you serve?',
      answer: 'We serve 20+ industries with specialized expertise in each'
    },
    {
      question: 'Can you handle urgent projects?',
      answer: 'Yes, we offer express delivery for time-sensitive campaigns'
    }
  ];

  return (
    <>
      <SEOHead {...getPageMetadata('letsTalk')} />
      <SchemaMarkup type="organization" />
      <EnhancedSchemaMarkup page="letsTalk" />
      <Breadcrumbs items={[{ label: "Let's Talk" }]} />
      
      <div className="pt-20">
        {/* Hero Section */}
        <StackingSection index={0} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 w-fit bg-yellow-500 text-black hover:bg-yellow-400">
                Get In Touch
              </Badge>
              <h1 className="mb-4">Let's Talk About Your Next Big Project</h1>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Ready to transform your brand? Whether you're launching a new business, scaling operations, 
                or reimagining your digital presence, we're here to help you succeed.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Now: 9669988666
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  <Mail className="mr-2 h-5 w-5" />
                  Email Us
                </Button>
              </div>
              <div className="flex flex-wrap gap-3 mt-8">
                <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                  Free Consultation
                </Badge>
                <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                  No Obligation Quote
                </Badge>
                <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                  24h Response Time
                </Badge>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Contact Methods */}
        <StackingSection index={1} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Multiple Ways to Reach Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {contactMethods.map((method, index) => (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <method.icon className="h-10 w-10 text-white" />
                      <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                        {method.badge}
                      </Badge>
                    </div>
                    <h3 className="mb-3">{method.title}</h3>
                    {method.details.map((detail, idx) => (
                      <p key={idx} className="text-white mb-1">{detail}</p>
                    ))}
                    <p className="text-gray-400 mt-2">{method.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Contact Form */}
        <StackingSection index={2} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <div className="max-w-3xl">
                <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                  Quick Response Form
                </Badge>
                <ContactFormWithSupabase />
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Services We Offer - Badges */}
        <StackingSection index={3} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Our Expertise
              </Badge>
              <h2 className="mb-4">Services We Offer</h2>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Comprehensive digital marketing and advertising solutions tailored to your needs
              </p>
              <div className="flex flex-wrap gap-3">
                {serviceBadges.map((service, index) => (
                  <Badge 
                    key={index}
                    variant="outline" 
                    className="border-white/20 text-white px-4 py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 cursor-pointer"
                  >
                    {service}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Industries We Serve - Badges */}
        <StackingSection index={4} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                Industry Expertise
              </Badge>
              <h2 className="mb-4">Industries We Serve</h2>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Specialized knowledge across 20+ industries with proven success stories
              </p>
              <div className="flex flex-wrap gap-3">
                {industryBadges.map((industry, index) => (
                  <Badge 
                    key={index}
                    className="bg-white/5 text-white border border-white/10 px-4 py-2 hover:bg-yellow-500 hover:text-black hover:border-yellow-500 transition-all duration-300 cursor-pointer"
                  >
                    {industry}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Why Choose Us */}
        <StackingSection index={5} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Why Choose Inchtomilez?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {whyChooseUs.map((item, index) => (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105"
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
          </div>
        </StackingSection>

        {/* Project Types */}
        <StackingSection index={6} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">What Type of Project Do You Have?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {projectTypes.map((type, index) => (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group"
                  >
                    <type.icon className="h-12 w-12 text-white mb-4 group-hover:text-yellow-500 transition-colors" />
                    <h3 className="mb-2">{type.title}</h3>
                    <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                      {type.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Social Media */}
        <StackingSection index={7} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-4">Connect With Us on Social Media</h2>
              <p className="text-gray-300 mb-8 max-w-3xl">
                Follow us for daily insights, case studies, and industry trends
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {socialLinks.map((social, index) => (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-6 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105 cursor-pointer group text-center"
                  >
                    <social.icon className="h-10 w-10 text-white mx-auto mb-3 group-hover:text-yellow-500 transition-colors" />
                    <h4 className="mb-2">{social.label}</h4>
                    <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30">
                      {social.badge}
                    </Badge>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Office Hours & Availability */}
        <StackingSection index={8} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Our Availability</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-black border border-white/10 rounded-lg p-6">
                  <Badge className="mb-4 bg-yellow-500 text-black">
                    Office Hours
                  </Badge>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Monday - Friday</span>
                      <span className="text-white">9 AM - 7 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Saturday</span>
                      <span className="text-white">10 AM - 5 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Sunday</span>
                      <span className="text-gray-500">Closed</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-white/10 rounded-lg p-6">
                  <Badge className="mb-4 bg-yellow-500 text-black">
                    Support Availability
                  </Badge>
                  <div className="space-y-3">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                      <span className="text-white">24/7 Email Support</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                      <span className="text-white">WhatsApp Available</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500" />
                      <span className="text-white">Emergency Support</span>
                    </div>
                  </div>
                </div>

                <div className="bg-black border border-white/10 rounded-lg p-6">
                  <Badge className="mb-4 bg-yellow-500 text-black">
                    Response Time
                  </Badge>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Email</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        24 hrs
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">Phone Call</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        Instant
                      </Badge>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-gray-300">WhatsApp</span>
                      <Badge variant="outline" className="border-yellow-500 text-yellow-500">
                        2-4 hrs
                      </Badge>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* FAQs */}
        <StackingSection index={9} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Frequently Asked Questions</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {faqs.map((faq, index) => (
                  <div
                    key={index}
                    className="bg-black border border-white/10 rounded-lg p-6 hover:border-yellow-500/30 transition-all duration-300"
                  >
                    <h3 className="mb-3 flex items-start gap-2">
                      <MessageSquare className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      {faq.question}
                    </h3>
                    <p className="text-gray-300 ml-7">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Company Stats */}
        <StackingSection index={10} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Our Track Record</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '48px', fontWeight: 'bold' }}>500+</div>
                  <p className="text-gray-300">Happy Clients</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Worldwide
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '48px', fontWeight: 'bold' }}>1000+</div>
                  <p className="text-gray-300">Projects Completed</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Success Rate
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '48px', fontWeight: 'bold' }}>20+</div>
                  <p className="text-gray-300">Industries Served</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Specialized
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-6 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <div className="text-yellow-500 mb-2" style={{ fontSize: '48px', fontWeight: 'bold' }}>10+</div>
                  <p className="text-gray-300">Years Experience</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Proven
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* What to Expect */}
        <StackingSection index={11} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">What to Expect When You Contact Us</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    1
                  </div>
                  <h3 className="mb-2">Initial Contact</h3>
                  <p className="text-gray-300">We respond within 24 hours to understand your needs</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Quick Response
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    2
                  </div>
                  <h3 className="mb-2">Free Consultation</h3>
                  <p className="text-gray-300">30-minute strategy session to discuss your goals</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    No Obligation
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    3
                  </div>
                  <h3 className="mb-2">Custom Proposal</h3>
                  <p className="text-gray-300">Detailed plan with timeline and transparent pricing</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Transparent
                  </Badge>
                </div>
                <div className="text-center">
                  <div className="bg-yellow-500 text-black rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4" style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    4
                  </div>
                  <h3 className="mb-2">Project Kickoff</h3>
                  <p className="text-gray-300">Onboarding and execution with dedicated support</p>
                  <Badge className="mt-3 bg-yellow-500/20 text-yellow-500">
                    Full Support
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Certifications & Partnerships */}
        <StackingSection index={12} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Certifications & Partnerships</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                <div className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <Badge className="bg-yellow-500 text-black w-full">
                    Google Partner
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <Badge className="bg-yellow-500 text-black w-full">
                    Meta Certified
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <Badge className="bg-yellow-500 text-black w-full">
                    ISO Certified
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <Badge className="bg-yellow-500 text-black w-full">
                    AWS Partner
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <Badge className="bg-yellow-500 text-black w-full">
                    Adobe Certified
                  </Badge>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-4 text-center hover:border-yellow-500/50 transition-all duration-300">
                  <Badge className="bg-yellow-500 text-black w-full">
                    HubSpot Partner
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Location Map Placeholder */}
        <StackingSection index={13} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <h2 className="mb-8">Visit Our Office</h2>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div>
                  <div className="bg-black border border-white/10 rounded-lg p-8">
                    <MapPin className="h-12 w-12 text-yellow-500 mb-4" />
                    <h3 className="mb-4">Office Address</h3>
                    <p className="text-white mb-2">Inchtomilez Digital Marketing</p>
                    <p className="text-gray-300 mb-2">Vijay Nagar</p>
                    <p className="text-gray-300 mb-4">Indore, Madhya Pradesh, India</p>
                    
                    <div className="space-y-3 mt-6">
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-yellow-500" />
                        <span className="text-white">+91 9669988666</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Phone className="h-5 w-5 text-yellow-500" />
                        <span className="text-white">+91 9009970709</span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Mail className="h-5 w-5 text-yellow-500" />
                        <span className="text-white">contact@inchtomilez.com</span>
                      </div>
                    </div>

                    <Button className="mt-6 bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6">
                      <MapPin className="mr-2 h-4 w-4" />
                      Get Directions
                    </Button>
                  </div>
                </div>
                <div className="bg-black border border-white/10 rounded-lg p-8 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="h-20 w-20 text-yellow-500 mx-auto mb-4" />
                    <h3 className="mb-2">Map Integration</h3>
                    <p className="text-gray-300 mb-4">
                      Interactive map will be displayed here
                    </p>
                    <Badge className="bg-yellow-500/20 text-yellow-500">
                      Coming Soon
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        {/* Final CTA */}
        <StackingSection index={14} total={totalSections}>
          <div className="flex items-center justify-center min-h-screen px-8 md:px-16">
            <div className="w-[80vw]">
              <div className="text-center max-w-4xl mx-auto">
                <Badge className="mb-4 bg-yellow-500 text-black hover:bg-yellow-400">
                  Ready to Get Started?
                </Badge>
                <h1 className="mb-4">Let's Transform Your Business Together</h1>
                <p className="text-gray-300 mb-8">
                  Join 500+ successful businesses that trust Inchtomilez for their digital growth
                </p>
                
                <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-10 py-7">
                    <Phone className="mr-2 h-6 w-6" />
                    Call: 9669988666
                  </Button>
                  <Button variant="outline" className="border-white text-white hover:bg-white hover:text-black rounded-full px-10 py-7">
                    <Mail className="mr-2 h-6 w-6" />
                    Send Email
                  </Button>
                </div>

                <div className="flex flex-wrap gap-3 justify-center">
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Free Consultation
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    No Long-term Contracts
                  </Badge>
                  <Badge variant="outline" className="border-yellow-500 text-yellow-500 px-4 py-2">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Money-back Guarantee
                  </Badge>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>
      </div>

      <FAQSchema faqs={CONTACT_FAQS} />
      <LocalBusinessSchema />
    </>
  );
}
