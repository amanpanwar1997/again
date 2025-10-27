import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import { Monitor, Megaphone, ShoppingCart, Palette, Video, Sparkles, Pencil, MapPin, FileText, Code, Smartphone, Globe, Target, Gift, Users, Newspaper, Heart, GraduationCap, Home, DollarSign, Hotel, Car, Shirt, Utensils, Film, Trophy, Scale, Factory, HandHeart, Pill, HardHat, Wheat, Truck, Menu, X, ChevronDown, ChevronRight } from 'lucide-react';
import logo from 'figma:asset/90948f9aa2b6ab5b4d89fb6e1fa928039c1588d3.png';

export default function Header() {
  const location = useLocation();
  
  // Desktop mega menu states
  const [showServicesMegaMenu, setShowServicesMegaMenu] = useState(false);
  const [showIndustriesMegaMenu, setShowIndustriesMegaMenu] = useState(false);
  
  // Hover timeout refs for smooth transitions
  const servicesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const industriesTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  
  // Mobile menu states
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [mobileIndustriesOpen, setMobileIndustriesOpen] = useState(false);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [mobileMenuOpen]);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
      if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
    };
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  const menuItems = [
    { label: 'Home', path: '/', hasMegaMenu: false },
    { label: 'About', path: '/about', hasMegaMenu: false },
    { label: 'Services', path: '/services', hasMegaMenu: 'services' },
    { label: "Let's Talk", path: '/lets-talk', hasMegaMenu: false },
    { label: 'Blogs', path: '/blogs', hasMegaMenu: false },
    { label: 'Industries', path: '/industries', hasMegaMenu: 'industries' },
  ];

  const serviceCategories = [
    {
      title: 'Digital & Marketing',
      services: [
        { name: 'Digital Marketing', path: '/services/digital-marketing', icon: Monitor },
        { name: 'Advertising', path: '/services/advertising', icon: Megaphone },
        { name: 'E-Commerce Marketing', path: '/services/ecommerce', icon: ShoppingCart },
        { name: 'Influencer Marketing', path: '/services/influencer-marketing', icon: Users },
        { name: 'Public Relations', path: '/services/public-relations', icon: Newspaper },
      ]
    },
    {
      title: 'Creative Services',
      services: [
        { name: 'Branding', path: '/services/branding', icon: Palette },
        { name: 'Media Production', path: '/services/media-production', icon: Video },
        { name: 'Animation', path: '/services/animation', icon: Sparkles },
        { name: 'Graphic Designing', path: '/services/graphic-designing', icon: Pencil },
      ]
    },
    {
      title: 'Development & Other',
      services: [
        { name: 'Software Development', path: '/services/software-development', icon: Code },
        { name: 'App Development', path: '/services/application-development', icon: Smartphone },
        { name: 'Website Development', path: '/services/website-development', icon: Globe },
        { name: 'OOH Services', path: '/services/ooh-services', icon: MapPin },
        { name: 'Print Media', path: '/services/print-media', icon: FileText },
        { name: 'Political Campaigns', path: '/services/political-campaigns', icon: Target },
        { name: 'Corporate Gifting', path: '/services/corporate-gifting', icon: Gift },
      ]
    }
  ];

  const industryCategories = [
    {
      title: 'Business & Tech',
      industries: [
        { name: 'E-Commerce', path: '/industries/ecommerce', icon: ShoppingCart },
        { name: 'Technology', path: '/industries/technology', icon: Monitor },
        { name: 'Real Estate', path: '/industries/real-estate', icon: Home },
        { name: 'Finance', path: '/industries/finance', icon: DollarSign },
        { name: 'Legal', path: '/industries/legal', icon: Scale },
        { name: 'Manufacturing', path: '/industries/manufacturing', icon: Factory },
      ]
    },
    {
      title: 'Lifestyle & Health',
      industries: [
        { name: 'Healthcare', path: '/industries/healthcare', icon: Heart },
        { name: 'Pharmaceutical', path: '/industries/pharmaceutical', icon: Pill },
        { name: 'Beauty & Wellness', path: '/industries/beauty', icon: Sparkles },
        { name: 'Fashion', path: '/industries/fashion', icon: Shirt },
        { name: 'Food & Beverage', path: '/industries/food-beverage', icon: Utensils },
        { name: 'Hospitality', path: '/industries/hospitality', icon: Hotel },
      ]
    },
    {
      title: 'Services & Others',
      industries: [
        { name: 'Education', path: '/industries/education', icon: GraduationCap },
        { name: 'Entertainment', path: '/industries/entertainment', icon: Film },
        { name: 'Sports & Fitness', path: '/industries/sports', icon: Trophy },
        { name: 'Automotive', path: '/industries/automotive', icon: Car },
        { name: 'Construction', path: '/industries/construction', icon: HardHat },
        { name: 'Agriculture', path: '/industries/agriculture', icon: Wheat },
        { name: 'Logistics', path: '/industries/logistics', icon: Truck },
        { name: 'Non-Profit', path: '/industries/non-profit', icon: HandHeart },
      ]
    }
  ];

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    setMobileIndustriesOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
    if (!mobileMenuOpen) {
      setMobileServicesOpen(false);
      setMobileIndustriesOpen(false);
    }
  };

  const handleServicesClick = () => {
    setMobileServicesOpen(!mobileServicesOpen);
    setMobileIndustriesOpen(false);
  };

  const handleIndustriesClick = () => {
    setMobileIndustriesOpen(!mobileIndustriesOpen);
    setMobileServicesOpen(false);
  };

  return (
    <>
      {/* Header Bar */}
      <header className="fixed top-0 left-0 right-0 z-[10000] border-b border-white/10 transition-all duration-300">
        <div className="px-4 md:px-8 py-3 md:py-4">
          <div className="flex items-center justify-between max-w-7xl mx-auto">
            {/* Logo */}
            <Link 
              to="/" 
              className="flex items-center z-[100002] relative"
              onClick={closeMobileMenu}
            >
              <img 
                src={logo} 
                alt="Inchtomilez Digital Marketing and Advertising Agency" 
                className="h-9 md:h-12 w-auto transition-transform duration-300 hover:scale-105" 
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center">
              <ul className="flex items-center gap-6 xl:gap-8">
                {menuItems.map((item) => (
                  <li
                    key={item.path}
                    className="relative"
                    onMouseEnter={() => {
                      if (item.hasMegaMenu === 'services') {
                        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                        setShowServicesMegaMenu(true);
                      }
                      if (item.hasMegaMenu === 'industries') {
                        if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
                        setShowIndustriesMegaMenu(true);
                      }
                    }}
                    onMouseLeave={() => {
                      if (item.hasMegaMenu === 'services') {
                        if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                        servicesTimeoutRef.current = setTimeout(() => setShowServicesMegaMenu(false), 150);
                      }
                      if (item.hasMegaMenu === 'industries') {
                        if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
                        industriesTimeoutRef.current = setTimeout(() => setShowIndustriesMegaMenu(false), 150);
                      }
                    }}
                  >
                    <Link
                      to={item.path}
                      className={`text-white hover:text-yellow-500 transition-all duration-300 relative flex items-center gap-1.5 py-2 ${
                        isActive(item.path) ? 'text-gradient' : ''
                      }`}
                    >
                      {item.label}
                      {item.hasMegaMenu && (
                        <ChevronDown 
                          className={`transition-transform duration-300 ${
                            (item.hasMegaMenu === 'services' && showServicesMegaMenu) || 
                            (item.hasMegaMenu === 'industries' && showIndustriesMegaMenu) ? 
                            'rotate-180' : ''
                          }`} 
                        />
                      )}
                    </Link>

                    {/* Services Mega Menu - Desktop */}
                    {item.hasMegaMenu === 'services' && showServicesMegaMenu && (
                      <div 
                        className="hidden lg:block fixed left-0 right-0 top-0 pt-20 z-[9999] animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={() => {
                          if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                          setShowServicesMegaMenu(true);
                        }}
                        onMouseLeave={() => {
                          if (servicesTimeoutRef.current) clearTimeout(servicesTimeoutRef.current);
                          servicesTimeoutRef.current = setTimeout(() => setShowServicesMegaMenu(false), 200);
                        }}
                      >
                        <div className="max-w-7xl mx-auto px-4">
                          <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl max-w-5xl mx-auto relative">
                            <button
                              onClick={() => setShowServicesMegaMenu(false)}
                              className="absolute top-4 right-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                              aria-label="Close menu"
                              type="button"
                            >
                              <X />
                            </button>

                            <div className="mb-4">
                              <h4 className="text-white mb-1">Our Services</h4>
                              <p className="text-gray-400">360° Digital Solutions</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              {serviceCategories.map((category) => (
                                <div key={category.title}>
                                  <h5 className="text-gray-400 mb-3 uppercase tracking-wider">{category.title}</h5>
                                  <div className="space-y-1">
                                    {category.services.map((service) => {
                                      const Icon = service.icon;
                                      return (
                                        <Link
                                          key={service.path}
                                          to={service.path}
                                          className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-all duration-300 text-white group"
                                        >
                                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 transition-all duration-300">
                                            <Icon className="group-hover:text-yellow-500 transition-colors duration-300" />
                                          </div>
                                          <span className="group-hover:text-yellow-500 transition-colors duration-300">{service.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                              <div>
                                <h5 className="text-white mb-1">Need a custom solution?</h5>
                                <p className="text-gray-400">We tailor our services to fit your unique needs</p>
                              </div>
                              <Link
                                to="/lets-talk"
                                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
                              >
                                Let's Talk →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Industries Mega Menu - Desktop */}
                    {item.hasMegaMenu === 'industries' && showIndustriesMegaMenu && (
                      <div 
                        className="hidden lg:block fixed left-0 right-0 top-0 pt-20 z-[9999] animate-in fade-in slide-in-from-top-2 duration-200"
                        onMouseEnter={() => {
                          if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
                          setShowIndustriesMegaMenu(true);
                        }}
                        onMouseLeave={() => {
                          if (industriesTimeoutRef.current) clearTimeout(industriesTimeoutRef.current);
                          industriesTimeoutRef.current = setTimeout(() => setShowIndustriesMegaMenu(false), 200);
                        }}
                      >
                        <div className="max-w-7xl mx-auto px-4">
                          <div className="bg-black/95 backdrop-blur-xl border border-white/20 rounded-2xl p-6 shadow-2xl max-w-5xl mx-auto relative">
                            <button
                              onClick={() => setShowIndustriesMegaMenu(false)}
                              className="absolute top-4 right-4 text-white/60 hover:text-white hover:bg-white/10 rounded-full p-2 transition-all duration-300"
                              aria-label="Close menu"
                              type="button"
                            >
                              <X />
                            </button>

                            <div className="mb-4">
                              <h4 className="text-white mb-1">Industries We Serve</h4>
                              <p className="text-gray-400">Specialized expertise across 20+ verticals</p>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                              {industryCategories.map((category) => (
                                <div key={category.title}>
                                  <h5 className="text-gray-400 mb-3 uppercase tracking-wider">{category.title}</h5>
                                  <div className="space-y-1">
                                    {category.industries.map((industry) => {
                                      const Icon = industry.icon;
                                      return (
                                        <Link
                                          key={industry.path}
                                          to={industry.path}
                                          className="flex items-center gap-3 p-3 hover:bg-white/5 rounded-xl transition-all duration-300 text-white group"
                                        >
                                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 group-hover:border-yellow-500/50 transition-all duration-300">
                                            <Icon className="group-hover:text-yellow-500 transition-colors duration-300" />
                                          </div>
                                          <span className="group-hover:text-yellow-500 transition-colors duration-300">{industry.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>

                            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                              <div>
                                <h5 className="text-white mb-1">Don't see your industry?</h5>
                                <p className="text-gray-400">We work with diverse sectors - let's talk</p>
                              </div>
                              <Link
                                to="/lets-talk"
                                className="px-6 py-3 bg-yellow-500 hover:bg-yellow-400 text-black rounded-full transition-all duration-300 hover:scale-105 whitespace-nowrap"
                              >
                                Contact Us →
                              </Link>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Mobile Hamburger Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden relative z-[100002] w-12 h-12 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 active:scale-95"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
              type="button"
            >
              <div className="relative w-6 h-6">
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'top-1/2 rotate-45 -translate-y-1/2' : 'top-1'
                  }`}
                />
                <span 
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                  }`}
                />
                <span 
                  className={`absolute left-0 w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                    mobileMenuOpen ? 'top-1/2 -rotate-45 -translate-y-1/2' : 'bottom-1'
                  }`}
                />
              </div>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[9998] lg:hidden"
            onClick={closeMobileMenu}
          />
          
          {/* Mobile Menu Panel */}
          <div 
            className="fixed top-0 right-0 bottom-0 w-full max-w-sm bg-black/98 backdrop-blur-xl border-l border-white/10 z-[9999] lg:hidden overflow-y-auto animate-in slide-in-from-right duration-300"
          >
            {/* Mobile Menu Header */}
            <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between">
              <h3 className="text-white">Menu</h3>
              <button
                onClick={closeMobileMenu}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 active:scale-95"
                aria-label="Close menu"
                type="button"
              >
                <X />
              </button>
            </div>

            {/* Mobile Menu Content */}
            <nav className="p-4">
              <ul className="space-y-2">
                {menuItems.map((item) => (
                  <li key={item.path}>
                    {!item.hasMegaMenu ? (
                      <Link
                        to={item.path}
                        onClick={closeMobileMenu}
                        className={`flex items-center justify-between w-full px-4 py-4 rounded-xl border transition-all duration-300 active:scale-98 ${
                          isActive(item.path)
                            ? 'bg-yellow-500 border-yellow-500 text-black'
                            : 'bg-white/5 border-white/10 text-white hover:bg-white/10 hover:border-yellow-500/50'
                        }`}
                      >
                        <span>{item.label}</span>
                        <ChevronRight className={isActive(item.path) ? 'text-black' : 'text-white'} />
                      </Link>
                    ) : (
                      <div>
                        {/* Mega Menu Trigger */}
                        <button
                          onClick={item.hasMegaMenu === 'services' ? handleServicesClick : handleIndustriesClick}
                          type="button"
                          className="flex items-center justify-between w-full px-4 py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-yellow-500/50 transition-all duration-300 active:scale-98"
                        >
                          <span>{item.label}</span>
                          <ChevronDown 
                            className={`transition-transform duration-300 ${
                              (item.hasMegaMenu === 'services' && mobileServicesOpen) || 
                              (item.hasMegaMenu === 'industries' && mobileIndustriesOpen) 
                                ? 'rotate-180' 
                                : ''
                            }`}
                          />
                        </button>

                        {/* Services Submenu */}
                        {item.hasMegaMenu === 'services' && mobileServicesOpen && (
                          <div className="mt-2 rounded-xl bg-white/5 border border-white/20 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                            {/* Submenu Header with Main Page Link and Close */}
                            <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between gap-3">
                              <Link
                                to="/services"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg transition-all duration-300 active:scale-98 flex-1"
                              >
                                <span>View All Services</span>
                                <ChevronRight className="text-black" />
                              </Link>
                              <button
                                onClick={handleServicesClick}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 active:scale-95 flex-shrink-0"
                                aria-label="Close submenu"
                                type="button"
                              >
                                <X />
                              </button>
                            </div>

                            {/* Submenu Content */}
                            <div className="p-4 max-h-[50vh] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                              {serviceCategories.map((category) => (
                                <div key={category.title}>
                                  <h5 className="text-gray-400 mb-2 uppercase tracking-wider">{category.title}</h5>
                                  <div className="space-y-1">
                                    {category.services.map((service) => {
                                      const Icon = service.icon;
                                      return (
                                        <Link
                                          key={service.path}
                                          to={service.path}
                                          onClick={closeMobileMenu}
                                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 text-white transition-all duration-300 active:scale-98"
                                        >
                                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                                            <Icon />
                                          </div>
                                          <span>{service.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}

                        {/* Industries Submenu */}
                        {item.hasMegaMenu === 'industries' && mobileIndustriesOpen && (
                          <div className="mt-2 rounded-xl bg-white/5 border border-white/20 animate-in fade-in slide-in-from-top-2 duration-200 overflow-hidden">
                            {/* Submenu Header with Main Page Link and Close */}
                            <div className="sticky top-0 z-10 bg-black/90 backdrop-blur-xl border-b border-white/10 p-4 flex items-center justify-between gap-3">
                              <Link
                                to="/industries"
                                onClick={closeMobileMenu}
                                className="flex items-center gap-2 px-4 py-2 bg-yellow-500 hover:bg-yellow-400 text-black rounded-lg transition-all duration-300 active:scale-98 flex-1"
                              >
                                <span>View All Industries</span>
                                <ChevronRight className="text-black" />
                              </Link>
                              <button
                                onClick={handleIndustriesClick}
                                className="w-10 h-10 flex items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 transition-all duration-300 active:scale-95 flex-shrink-0"
                                aria-label="Close submenu"
                                type="button"
                              >
                                <X />
                              </button>
                            </div>

                            {/* Submenu Content */}
                            <div className="p-4 max-h-[50vh] overflow-y-auto space-y-4 pr-2 custom-scrollbar">
                              {industryCategories.map((category) => (
                                <div key={category.title}>
                                  <h5 className="text-gray-400 mb-2 uppercase tracking-wider">{category.title}</h5>
                                  <div className="space-y-1">
                                    {category.industries.map((industry) => {
                                      const Icon = industry.icon;
                                      return (
                                        <Link
                                          key={industry.path}
                                          to={industry.path}
                                          onClick={closeMobileMenu}
                                          className="flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-yellow-500/50 text-white transition-all duration-300 active:scale-98"
                                        >
                                          <div className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center border border-white/10 flex-shrink-0">
                                            <Icon />
                                          </div>
                                          <span>{industry.name}</span>
                                        </Link>
                                      );
                                    })}
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    )}
                  </li>
                ))}
              </ul>

              {/* Mobile CTA */}
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  to="/lets-talk"
                  onClick={closeMobileMenu}
                  className="flex items-center justify-center w-full px-6 py-4 bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl transition-all duration-300 active:scale-98"
                >
                  <span>Get Started</span>
                  <ChevronRight />
                </Link>
              </div>
            </nav>
          </div>
        </>
      )}

      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.05);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(255, 255, 255, 0.2);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(234, 179, 8, 0.5);
        }
      `}</style>
    </>
  );
}
