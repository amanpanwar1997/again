import { Link } from 'react-router-dom';
import { Button } from './ui/button';
import { Input } from './ui/input';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';
import { Badge } from './ui/badge';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Facebook, 
  Instagram, 
  Linkedin, 
  Twitter,
  Youtube,
  ArrowRight,
  Star,
  ExternalLink,
  Award,
  Shield,
  Clock,
  Users,
  TrendingUp,
  CheckCircle2,
  MessageCircle
} from 'lucide-react';
import { useState } from 'react';
import { newsletterAPI } from '../utils/supabase/client';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      const response = await newsletterAPI.subscribe(email);
      
      if (response.alreadySubscribed) {
        setError('You are already subscribed!');
      } else {
        setSubscribed(true);
        console.log('Newsletter subscription successful:', email);
        
        setTimeout(() => {
          setSubscribed(false);
          setEmail('');
        }, 3000);
      }
    } catch (err) {
      console.error('Newsletter subscription error:', err);
      setError('Failed to subscribe. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const currentYear = new Date().getFullYear();

  const services = [
    { name: 'Digital Marketing', path: '/services/digital-marketing' },
    { name: 'Advertising', path: '/services/advertising' },
    { name: 'E-Commerce Marketing', path: '/services/ecommerce' },
    { name: 'Branding', path: '/services/branding' },
    { name: 'Media Production', path: '/services/media-production' },
    { name: 'Animation', path: '/services/animation' },
    { name: 'Graphic Designing', path: '/services/graphic-designing' },
    { name: 'OOH Services', path: '/services/ooh-services' },
    { name: 'Print Media', path: '/services/print-media' },
    { name: 'Software Development', path: '/services/software-development' },
    { name: 'Application Development', path: '/services/application-development' },
    { name: 'Website Development', path: '/services/website-development' },
    { name: 'Political Campaigns', path: '/services/political-campaigns' },
    { name: 'Corporate Gifting', path: '/services/corporate-gifting' },
    { name: 'Influencer Marketing', path: '/services/influencer-marketing' },
    { name: 'Public Relations', path: '/services/public-relations' }
  ];

  const industries = [
    { name: 'Healthcare', path: '/industries/healthcare' },
    { name: 'Education', path: '/industries/education' },
    { name: 'Real Estate', path: '/industries/real-estate' },
    { name: 'E-Commerce', path: '/industries/ecommerce' },
    { name: 'Technology', path: '/industries/technology' },
    { name: 'Finance', path: '/industries/finance' },
    { name: 'Hospitality', path: '/industries/hospitality' },
    { name: 'Automotive', path: '/industries/automotive' },
    { name: 'Fashion', path: '/industries/fashion' },
    { name: 'Food & Beverage', path: '/industries/food-beverage' },
    { name: 'Entertainment', path: '/industries/entertainment' },
    { name: 'Sports', path: '/industries/sports' },
    { name: 'Legal', path: '/industries/legal' },
    { name: 'Manufacturing', path: '/industries/manufacturing' },
    { name: 'Non-Profit', path: '/industries/non-profit' },
    { name: 'Pharmaceutical', path: '/industries/pharmaceutical' },
    { name: 'Construction', path: '/industries/construction' },
    { name: 'Agriculture', path: '/industries/agriculture' },
    { name: 'Logistics', path: '/industries/logistics' },
    { name: 'Beauty & Wellness', path: '/industries/beauty' }
  ];

  const trustSignals = [
    { icon: Award, text: '10+ Years Experience' },
    { icon: Users, text: '500+ Happy Clients' },
    { icon: TrendingUp, text: '1000+ Projects Delivered' },
    { icon: Shield, text: 'ISO Certified' }
  ];

  return (
    <footer className="bg-black border-t border-white/10 mt-16">
      {/* Trust Signals Bar */}
      <div className="border-b border-white/10 bg-white/5">
        <div className="flex items-center justify-center px-8 md:px-16 py-6">
          <div className="w-[80vw]">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
              {trustSignals.map((signal, index) => (
                <div key={index} className="flex items-center gap-2 md:gap-3">
                  <div className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                    <signal.icon className="h-4 w-4 md:h-5 md:w-5 text-yellow-500" />
                  </div>
                  <span className="text-xs md:text-sm text-gray-300">{signal.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="flex items-center justify-center px-8 md:px-16 py-12 md:py-16">
        <div className="w-[80vw]">
          {/* Top Section - Newsletter & CTA */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
            <div>
              <Badge className="mb-4 bg-yellow-500 text-black">
                Let's Work Together
              </Badge>
              <h3 className="mb-3 md:mb-4">Ready to Transform Your Brand?</h3>
              <p className="text-gray-300 mb-4 md:mb-6">
                Let's create something extraordinary together. Get in touch for a free consultation and discover how Inchtomilez can elevate your digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/lets-talk">
                  <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto">
                    Let's Talk <ArrowRight className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                  </Button>
                </Link>
                <Button 
                  variant="outline" 
                  className="border-white text-white hover:bg-white hover:text-black rounded-full px-6 md:px-8 py-5 md:py-6 w-full sm:w-auto"
                  onClick={() => {
                    // Trigger AI Chatbot
                    const chatbotTrigger = document.querySelector('[data-chatbot-trigger]') as HTMLElement;
                    if (chatbotTrigger) chatbotTrigger.click();
                  }}
                >
                  <MessageCircle className="mr-2 h-4 w-4 md:h-5 md:w-5" />
                  Chat with Us
                </Button>
              </div>
            </div>
            
            <div>
              <Badge className="mb-4 bg-yellow-500/10 text-yellow-500 border border-yellow-500/20">
                Stay Updated
              </Badge>
              <h3 className="mb-3 md:mb-4">Subscribe to Our Newsletter</h3>
              <p className="text-gray-300 mb-4">
                Get the latest digital marketing insights, industry trends, and exclusive tips delivered straight to your inbox.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row gap-2">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError('');
                    }}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-400 flex-1"
                    required
                    disabled={isLoading}
                  />
                  <Button 
                    type="submit"
                    className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 w-full sm:w-auto"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Subscribing...' : subscribed ? 'Subscribed!' : 'Subscribe'}
                  </Button>
                </div>
                {error && (
                  <p className="text-sm text-red-400">{error}</p>
                )}
                {subscribed && (
                  <p className="text-sm text-green-400">✓ Successfully subscribed to our newsletter!</p>
                )}
              </form>
            </div>
          </div>

          {/* Main Footer Grid - Desktop */}
          <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12 md:mb-16">
            {/* Company Info */}
            <div className="lg:col-span-1">
              <h3 className="mb-4">Inchtomilez</h3>
              <p className="text-gray-300 text-sm mb-4">
                Indore's most trusted digital marketing & advertising agency transforming brands into market leaders.
              </p>
              
              {/* Operating Hours */}
              <div className="mb-4">
                <div className="flex items-center gap-2 mb-2">
                  <Clock className="h-4 w-4 text-yellow-500" />
                  <h4 className="text-sm text-yellow-500">Business Hours</h4>
                </div>
                <div className="text-sm text-gray-400 space-y-1">
                  <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                  <p>Sat: 9:00 AM - 5:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex flex-wrap gap-2">
                <a 
                  href="https://facebook.com/inchtomilez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a 
                  href="https://instagram.com/inchtomilez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a 
                  href="https://linkedin.com/company/inchtomilez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a 
                  href="https://twitter.com/inchtomilez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a 
                  href="https://youtube.com/@inchtomilez" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                  aria-label="YouTube"
                >
                  <Youtube className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="mb-4 text-yellow-500">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/industries" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    Industries
                  </Link>
                </li>
                <li>
                  <Link to="/blogs" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/lets-talk" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2">
                    <CheckCircle2 className="h-3 w-3" />
                    Let's Talk
                  </Link>
                </li>
              </ul>
            </div>

            {/* Services Column 1 */}
            <div>
              <h4 className="mb-4 text-yellow-500">Services</h4>
              <ul className="space-y-2">
                {services.slice(0, 8).map((service) => (
                  <li key={service.path}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Column 2 */}
            <div>
              <h4 className="mb-4 text-yellow-500">More Services</h4>
              <ul className="space-y-2">
                {services.slice(8).map((service) => (
                  <li key={service.path}>
                    <Link 
                      to={service.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {service.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Industries */}
            <div>
              <h4 className="mb-4 text-yellow-500">Industries</h4>
              <ul className="space-y-2">
                {industries.slice(0, 10).map((industry) => (
                  <li key={industry.path}>
                    <Link 
                      to={industry.path} 
                      className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                    >
                      <ArrowRight className="h-3 w-3" />
                      {industry.name}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link 
                    to="/industries" 
                    className="text-yellow-500 hover:text-yellow-400 transition-colors text-sm inline-flex items-center gap-1"
                  >
                    View All Industries <ArrowRight className="h-3 w-3" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile - Accordion Navigation */}
          <div className="md:hidden mb-12">
            <Accordion type="single" collapsible className="w-full space-y-3">
              {/* Company Info Mobile */}
              <AccordionItem 
                value="company"
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <h4 className="text-white">About Inchtomilez</h4>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <p className="text-gray-300 text-sm mb-4">
                    Indore's most trusted digital marketing & advertising agency transforming brands into market leaders.
                  </p>
                  
                  {/* Operating Hours */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Clock className="h-4 w-4 text-yellow-500" />
                      <h4 className="text-sm text-yellow-500">Business Hours</h4>
                    </div>
                    <div className="text-sm text-gray-400 space-y-1">
                      <p>Mon - Fri: 9:00 AM - 7:00 PM</p>
                      <p>Sat: 9:00 AM - 5:00 PM</p>
                      <p>Sun: Closed</p>
                    </div>
                  </div>

                  {/* Social Media */}
                  <div className="flex flex-wrap gap-2">
                    <a 
                      href="https://facebook.com/inchtomilez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://instagram.com/inchtomilez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://linkedin.com/company/inchtomilez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                      aria-label="LinkedIn"
                    >
                      <Linkedin className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://twitter.com/inchtomilez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                    <a 
                      href="https://youtube.com/@inchtomilez" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-yellow-500/10 hover:border-yellow-500 transition-all"
                      aria-label="YouTube"
                    >
                      <Youtube className="h-5 w-5" />
                    </a>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Quick Links Mobile */}
              <AccordionItem 
                value="quick-links"
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <h4 className="text-white">Quick Links</h4>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <ul className="space-y-2">
                    {[
                      { name: 'Home', path: '/' },
                      { name: 'About Us', path: '/about' },
                      { name: 'Services', path: '/services' },
                      { name: 'Industries', path: '/industries' },
                      { name: 'Blogs', path: '/blogs' },
                      { name: "Let's Talk", path: '/lets-talk' }
                    ].map((link) => (
                      <li key={link.path}>
                        <Link 
                          to={link.path} 
                          className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                        >
                          <CheckCircle2 className="h-3 w-3" />
                          {link.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Services Mobile */}
              <AccordionItem 
                value="services"
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <h4 className="text-white">Services ({services.length})</h4>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <ul className="space-y-2">
                    {services.map((service) => (
                      <li key={service.path}>
                        <Link 
                          to={service.path} 
                          className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>

              {/* Industries Mobile */}
              <AccordionItem 
                value="industries"
                className="bg-white/5 border border-white/10 rounded-xl overflow-hidden"
              >
                <AccordionTrigger className="px-4 py-3 hover:no-underline">
                  <h4 className="text-white">Industries ({industries.length})</h4>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-3">
                  <ul className="space-y-2">
                    {industries.map((industry) => (
                      <li key={industry.path}>
                        <Link 
                          to={industry.path} 
                          className="text-gray-300 hover:text-yellow-500 transition-colors text-sm flex items-center gap-2"
                        >
                          <ArrowRight className="h-3 w-3" />
                          {industry.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>

          {/* Contact Info Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Phone className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <h4 className="mb-2">Call Us</h4>
                <a href="tel:+919669988666" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm block">
                  +91 9669988666
                </a>
                <a href="tel:+919009970709" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm block">
                  +91 9009970709
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <Mail className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <h4 className="mb-2">Email Us</h4>
                <a href="mailto:contact@inchtomilez.com" className="text-gray-300 hover:text-yellow-500 transition-colors text-sm">
                  contact@inchtomilez.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center flex-shrink-0">
                <MapPin className="h-5 w-5 text-yellow-500" />
              </div>
              <div>
                <h4 className="mb-2">Visit Us</h4>
                <p className="text-gray-300 text-sm">
                  Vijay Nagar, Indore<br />
                  Madhya Pradesh, India
                </p>
              </div>
            </div>
          </div>

          {/* Google My Business Integration */}
          <div className="mb-12 md:mb-16 pb-12 md:pb-16 border-b border-white/10">
            <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 hover:border-yellow-500/30 transition-all">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 items-center">
                {/* Left: GMB Info */}
                <div>
                  <div className="flex items-center gap-2 mb-3 md:mb-4">
                    <h3>Find Us on Google</h3>
                    <ExternalLink className="h-5 w-5 text-yellow-500" />
                  </div>
                  <p className="text-gray-300 mb-4 md:mb-6">
                    Visit our Google Business Profile to see reviews, photos, business hours, and get directions to our Indore office.
                  </p>
                  
                  {/* Rating Display */}
                  <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star 
                          key={star} 
                          className="h-4 w-4 md:h-5 md:w-5 fill-yellow-500 text-yellow-500" 
                        />
                      ))}
                    </div>
                    <div>
                      <div className="text-yellow-500 text-sm md:text-base">4.9 out of 5</div>
                      <div className="text-gray-400 text-xs md:text-sm">Based on 127+ reviews</div>
                    </div>
                  </div>

                  {/* GMB CTA Button */}
                  <a
                    href="https://www.google.com/maps/place/Inchtomilez+-+Digital+Marketing+Agency+%7C+Advertising+Agency+In+Indore/@22.7534141,75.8946308,1069m/data=!3m2!1e3!4b1!4m6!3m5!1s0x3962fd0025e4a99b:0xfd87631a2b62db28!8m2!3d22.7534141!4d75.8972057!16s%2Fg%2F11vz4y7d37"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-6 md:px-8 py-5 md:py-6 text-sm md:text-base w-full sm:w-auto">
                      View on Google Maps <ExternalLink className="ml-2 h-4 w-4 md:h-5 md:w-5" />
                    </Button>
                  </a>
                </div>

                {/* Right: Quick Actions */}
                <div className="grid grid-cols-2 gap-3 md:gap-4">
                  {/* Write Review */}
                  <a
                    href="https://search.google.com/local/writereview?placeid=ChIJm6nkJQD9YjkRKNtiKxpjh_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border border-white/10 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 hover:scale-105 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30">
                      <Star className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                    </div>
                    <h4 className="mb-1 md:mb-2 text-sm md:text-base group-hover:text-yellow-500 transition-colors">Write a Review</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Share your experience</p>
                  </a>

                  {/* Get Directions */}
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=22.7534141,75.8972057&destination_place_id=ChIJm6nkJQD9YjkRKNtiKxpjh_0"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-black border border-white/10 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 hover:scale-105 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30">
                      <MapPin className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                    </div>
                    <h4 className="mb-1 md:mb-2 text-sm md:text-base group-hover:text-yellow-500 transition-colors">Get Directions</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Navigate to our office</p>
                  </a>

                  {/* Call Now */}
                  <a
                    href="tel:+919669988666"
                    className="bg-black border border-white/10 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 hover:scale-105 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30">
                      <Phone className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                    </div>
                    <h4 className="mb-1 md:mb-2 text-sm md:text-base group-hover:text-yellow-500 transition-colors">Call Now</h4>
                    <p className="text-gray-400 text-xs md:text-sm">+91 9669988666</p>
                  </a>

                  {/* Email */}
                  <a
                    href="mailto:contact@inchtomilez.com"
                    className="bg-black border border-white/10 rounded-xl p-4 md:p-6 hover:border-yellow-500/30 hover:scale-105 transition-all group"
                  >
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-3 md:mb-4 group-hover:border-yellow-500/30">
                      <Mail className="h-5 w-5 md:h-6 md:w-6 text-yellow-500" />
                    </div>
                    <h4 className="mb-1 md:mb-2 text-sm md:text-base group-hover:text-yellow-500 transition-colors">Email Us</h4>
                    <p className="text-gray-400 text-xs md:text-sm">Get a free quote</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Footer */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-xs md:text-sm text-center md:text-left">
              © {currentYear} Inchtomilez Digital Marketing and Advertising Agency. All rights reserved.
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs md:text-sm">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs md:text-sm">
                Terms of Service
              </Link>
              <Link to="/sitemap.xml" className="text-gray-400 hover:text-yellow-500 transition-colors text-xs md:text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
