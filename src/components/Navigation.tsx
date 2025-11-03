import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown, ArrowRight, Megaphone, Gauge, Palette, Code, Smartphone, Image, Video, Users, Briefcase, LayoutGrid, Radio, Package, Building2, GraduationCap, Home, ShoppingCart, Cpu, DollarSign, Hotel, Car, Shirt, Scale, Factory, Wheat, Truck, Hammer, Store, Zap, Heart, Trophy, Lightbulb } from 'lucide-react';
import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import logoImage from 'figma:asset/291b7319b5121f776c225ad4d66462f7385e5e1e.png';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [industriesDropdownOpen, setIndustriesDropdownOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);
  const location = useLocation();
  const servicesRef = useRef<HTMLDivElement>(null);
  const industriesRef = useRef<HTMLDivElement>(null);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
    setServicesDropdownOpen(false);
    setIndustriesDropdownOpen(false);
  }, [location.pathname]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  // Close mega menu on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (servicesRef.current && !servicesRef.current.contains(event.target as Node)) {
        setServicesDropdownOpen(false);
      }
      if (industriesRef.current && !industriesRef.current.contains(event.target as Node)) {
        setIndustriesDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const services = [
    { name: 'Digital Marketing', slug: 'digital-marketing', icon: Megaphone, description: 'Full-spectrum digital strategies', badge: 'Popular' },
    { name: 'Branding', slug: 'branding', icon: Palette, description: 'Build memorable brand identities', badge: 'Core' },
    { name: 'BTL Activations', slug: 'btl-activations', icon: Users, description: 'On-ground experiential marketing', badge: 'NEW' },
    { name: 'Creative Campaigns', slug: 'creative-campaigns', icon: Lightbulb, description: 'Integrated campaign execution', badge: 'NEW' },
    { name: 'OOH Advertising', slug: 'ooh-advertising', icon: LayoutGrid, description: 'Outdoor & billboard advertising', badge: 'Core' },
    { name: 'Advertising', slug: 'advertising', icon: Gauge, description: 'Strategic ad campaign management' },
    { name: 'Website & App Development', slug: 'website-development', icon: Code, description: 'Custom web & mobile solutions' },
    { name: 'Software Development', slug: 'software-development', icon: Smartphone, description: 'Enterprise software solutions' },
    { name: 'Graphic Design & Creative', slug: 'graphic-design', icon: Image, description: 'Visual design & creativity' },
    { name: 'Media Production', slug: 'media-production', icon: Video, description: 'Professional photo & video' },
    { name: 'Public Relations', slug: 'public-relations', icon: Users, description: 'Strategic PR & media relations' },
    { name: 'Political Campaigns', slug: 'political-campaigns', icon: Briefcase, description: 'Campaign strategy & execution' },
    { name: 'Radio & Newspapers', slug: 'radio-newspapers', icon: Radio, description: 'Traditional media campaigns' },
    { name: 'Product Marketing', slug: 'product-marketing', icon: Package, description: 'Product launch & positioning' },
  ];

  const industries = [
    { name: 'Healthcare', slug: 'healthcare', icon: Heart },
    { name: 'Education', slug: 'education', icon: GraduationCap },
    { name: 'Real Estate', slug: 'real-estate', icon: Home },
    { name: 'E-Commerce', slug: 'ecommerce', icon: ShoppingCart },
    { name: 'Technology', slug: 'technology', icon: Cpu },
    { name: 'Finance', slug: 'finance', icon: DollarSign },
    { name: 'Hospitality', slug: 'hospitality', icon: Hotel },
    { name: 'Automotive', slug: 'automotive', icon: Car },
    { name: 'Fashion & Retail', slug: 'fashion', icon: Shirt },
    { name: 'Legal', slug: 'legal', icon: Scale },
    { name: 'Manufacturing', slug: 'manufacturing', icon: Factory },
    { name: 'Agriculture', slug: 'agriculture', icon: Wheat },
    { name: 'Logistics', slug: 'logistics', icon: Truck },
    { name: 'Construction', slug: 'construction', icon: Hammer },
    { name: 'Retail', slug: 'retail', icon: Store },
    { name: 'Energy', slug: 'energy', icon: Zap },
    { name: 'Non-Profit', slug: 'non-profit', icon: Heart },
    { name: 'Sports & Fitness', slug: 'sports', icon: Trophy },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Blogs', path: '/blogs' },
    { name: 'FAQs', path: '/faqs' },
    { name: 'Contact Us', path: '/contact' },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  const isDropdownActive = (basePath: string) => {
    return location.pathname.startsWith(basePath);
  };

  return (
    <nav className="bg-black/95 border-b border-white/10 sticky top-0 z-50 backdrop-blur-xl">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImage} 
              alt="Inchtomilez Logo" 
              className="h-10 w-auto object-contain transition-transform duration-200 group-hover:scale-105"
            />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {/* Home */}
            {navLinks.filter(link => link.path === '/').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-yellow-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* About */}
            {navLinks.filter(link => link.path === '/about').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-yellow-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Services Mega Menu */}
            <div 
              ref={servicesRef}
              className="relative"
              onMouseEnter={() => setServicesDropdownOpen(true)}
              onMouseLeave={() => setServicesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/services"
                  className={`relative transition-colors duration-200 ${
                    isDropdownActive('/services')
                      ? 'text-yellow-500'
                      : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() => setServicesDropdownOpen(false)}
                >
                  Services
                  {isDropdownActive('/services') && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                <ChevronDown 
                  className={`icon-xs transition-transform duration-300 ${
                    servicesDropdownOpen ? 'rotate-180' : ''
                  } ${isDropdownActive('/services') ? 'text-yellow-500' : 'text-white/80'}`} 
                />
              </div>

              <AnimatePresence>
                {servicesDropdownOpen && (
                  <>
                    {/* Subtle Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                      style={{ top: '5rem' }}
                    />
                    
                    {/* Mega Menu Panel */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[82vw] max-w-3xl z-50"
                    >
                      <div className="glass-strong rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                        {/* Compact Header */}
                        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 border-b border-white/10 px-4 py-2.5">
                          <Link
                            to="/services"
                            className="group flex items-center justify-between"
                            onClick={() => setServicesDropdownOpen(false)}
                          >
                            <h3 className="text-[0.9375rem] font-semibold text-yellow-500">Our Services</h3>
                            <div className="flex items-center gap-1.5 text-yellow-500 group-hover:gap-2 transition-all duration-200">
                              <span className="text-[0.75rem] font-medium uppercase tracking-wide">View All</span>
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </Link>
                        </div>

                        {/* Compact Services Grid */}
                        <div className="p-3 grid grid-cols-4 gap-1.5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                          {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="group p-2.5 rounded-lg hover:bg-yellow-500/10 border border-white/5 hover:border-yellow-500/40 transition-all duration-200 relative"
                                onClick={() => setServicesDropdownOpen(false)}
                              >
                                {service.badge && (
                                  <div className={`absolute -top-1 -right-1 px-1.5 py-0.5 rounded text-[0.625rem] font-semibold ${
                                    service.badge === 'NEW' ? 'bg-green-500 text-black' :
                                    service.badge === 'Core' ? 'bg-yellow-500 text-black' :
                                    service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                                    'bg-white/20 text-white'
                                  }`}>
                                    {service.badge}
                                  </div>
                                )}
                                <div className="flex flex-col items-center text-center gap-1.5">
                                  <div className="p-1.5 rounded-md bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-110 transition-all duration-200">
                                    <IconComponent className="w-3.5 h-3.5" />
                                  </div>
                                  <h4 className="text-[0.75rem] font-medium text-white/90 group-hover:text-white transition-colors duration-200 leading-tight">
                                    {service.name}
                                  </h4>
                                </div>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Industries Mega Menu */}
            <div 
              ref={industriesRef}
              className="relative"
              onMouseEnter={() => setIndustriesDropdownOpen(true)}
              onMouseLeave={() => setIndustriesDropdownOpen(false)}
            >
              <div className="flex items-center gap-1">
                <Link
                  to="/industries"
                  className={`relative transition-colors duration-200 ${
                    isDropdownActive('/industries')
                      ? 'text-yellow-500'
                      : 'text-white/80 hover:text-white'
                  }`}
                  onClick={() => setIndustriesDropdownOpen(false)}
                >
                  Industries
                  {isDropdownActive('/industries') && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                </Link>
                <ChevronDown 
                  className={`icon-xs transition-transform duration-300 ${
                    industriesDropdownOpen ? 'rotate-180' : ''
                  } ${isDropdownActive('/industries') ? 'text-yellow-500' : 'text-white/80'}`} 
                />
              </div>

              <AnimatePresence>
                {industriesDropdownOpen && (
                  <>
                    {/* Subtle Backdrop */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.15 }}
                      className="fixed inset-0 bg-black/40 backdrop-blur-sm z-40"
                      style={{ top: '5rem' }}
                    />
                    
                    {/* Mega Menu Panel */}
                    <motion.div
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                      className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[82vw] max-w-3xl z-50"
                    >
                      <div className="glass-strong rounded-xl shadow-2xl border border-white/20 overflow-hidden">
                        {/* Compact Header */}
                        <div className="bg-gradient-to-r from-yellow-500/20 to-yellow-500/5 border-b border-white/10 px-4 py-2.5">
                          <Link
                            to="/industries"
                            className="group flex items-center justify-between"
                            onClick={() => setIndustriesDropdownOpen(false)}
                          >
                            <h3 className="text-[0.9375rem] font-semibold text-yellow-500">Industries We Serve</h3>
                            <div className="flex items-center gap-1.5 text-yellow-500 group-hover:gap-2 transition-all duration-200">
                              <span className="text-[0.75rem] font-medium uppercase tracking-wide">View All</span>
                              <ArrowRight className="w-3 h-3" />
                            </div>
                          </Link>
                        </div>

                        {/* Compact Industries Grid */}
                        <div className="p-3 grid grid-cols-6 gap-1.5 max-h-[60vh] overflow-y-auto custom-scrollbar">
                          {industries.map((industry) => {
                            const IconComponent = industry.icon;
                            return (
                              <Link
                                key={industry.slug}
                                to={`/industries/${industry.slug}`}
                                className="group p-2.5 rounded-lg hover:bg-yellow-500/10 border border-white/5 hover:border-yellow-500/40 transition-all duration-200 flex flex-col items-center text-center"
                                onClick={() => setIndustriesDropdownOpen(false)}
                              >
                                <div className="p-1.5 rounded-md bg-white/10 text-white group-hover:bg-white/20 group-hover:scale-110 transition-all duration-200 mb-1.5">
                                  <IconComponent className="w-3.5 h-3.5" />
                                </div>
                                <h4 className="text-[0.7rem] font-medium text-white/90 group-hover:text-white transition-colors duration-200 leading-tight">
                                  {industry.name}
                                </h4>
                              </Link>
                            );
                          })}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Blogs */}
            {navLinks.filter(link => link.path === '/blogs').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-yellow-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* FAQs */}
            {navLinks.filter(link => link.path === '/faqs').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-yellow-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}

            {/* Contact Us */}
            {navLinks.filter(link => link.path === '/contact').map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative transition-colors duration-200 ${
                  isActive(link.path)
                    ? 'text-yellow-500'
                    : 'text-white/80 hover:text-white'
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-yellow-500"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 hover:text-yellow-500 transition-colors duration-200 relative z-[60]"
            aria-label="Toggle menu"
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden"
            >
              <div className="py-4 border-t border-white/10 max-h-[calc(100vh-5rem)] overflow-y-auto custom-scrollbar">
                {/* Regular Nav Links */}
                <div className="space-y-1">
                  {navLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`block py-3 px-2 rounded-lg transition-all duration-200 ${
                        isActive(link.path)
                          ? 'text-yellow-500 bg-yellow-500/10'
                          : 'text-white/80 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>

                {/* Mobile Services Dropdown */}
                <div className="border-t border-white/10 mt-4 pt-4">
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-2 rounded-lg transition-all duration-200 ${
                      isDropdownActive('/services')
                        ? 'text-yellow-500 bg-yellow-500/10'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    <span>Services</span>
                    <ChevronDown 
                      className={`icon-xs transition-transform duration-300 ${
                        mobileServicesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileServicesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          <Link
                            to="/services"
                            className="flex items-center gap-2 py-2.5 px-3 text-sm text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all duration-150"
                          >
                            <ArrowRight className="icon-xs" />
                            <span>View All Services</span>
                          </Link>
                          {services.map((service) => {
                            const IconComponent = service.icon;
                            return (
                              <Link
                                key={service.slug}
                                to={`/services/${service.slug}`}
                                className="flex items-center gap-2 py-2 px-3 text-[0.8125rem] text-white/70 hover:text-yellow-500 hover:bg-yellow-500/5 rounded-lg transition-all duration-150"
                              >
                                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                                <span className="flex-1">{service.name}</span>
                                {service.badge && (
                                  <span className={`px-1.5 py-0.5 rounded text-[0.625rem] font-semibold ${
                                    service.badge === 'NEW' ? 'bg-green-500 text-black' :
                                    service.badge === 'Core' ? 'bg-yellow-500 text-black' :
                                    service.badge === 'Popular' ? 'bg-blue-500 text-white' :
                                    'bg-white/20 text-white'
                                  }`}>
                                    {service.badge}
                                  </span>
                                )}
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Mobile Industries Dropdown */}
                <div className="border-t border-white/10 mt-4 pt-4">
                  <button
                    onClick={() => setMobileIndustriesOpen(!mobileIndustriesOpen)}
                    className={`w-full flex items-center justify-between py-3 px-2 rounded-lg transition-all duration-200 ${
                      isDropdownActive('/industries')
                        ? 'text-yellow-500 bg-yellow-500/10'
                        : 'text-white/80 hover:bg-white/5'
                    }`}
                  >
                    <span>Industries</span>
                    <ChevronDown 
                      className={`icon-xs transition-transform duration-300 ${
                        mobileIndustriesOpen ? 'rotate-180' : ''
                      }`} 
                    />
                  </button>
                  
                  <AnimatePresence>
                    {mobileIndustriesOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pl-4 space-y-1 mt-2">
                          <Link
                            to="/industries"
                            className="flex items-center gap-2 py-2.5 px-3 text-sm text-yellow-500 hover:bg-yellow-500/10 rounded-lg transition-all duration-150"
                          >
                            <ArrowRight className="icon-xs" />
                            <span>View All Industries</span>
                          </Link>
                          {industries.map((industry) => {
                            const IconComponent = industry.icon;
                            return (
                              <Link
                                key={industry.slug}
                                to={`/industries/${industry.slug}`}
                                className="flex items-center gap-2 py-2 px-3 text-[0.8125rem] text-white/70 hover:text-yellow-500 hover:bg-yellow-500/5 rounded-lg transition-all duration-150"
                              >
                                <IconComponent className="w-3.5 h-3.5 flex-shrink-0" />
                                <span>{industry.name}</span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
