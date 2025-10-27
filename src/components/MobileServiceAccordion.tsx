import { useState } from 'react';
import { 
  TrendingUp,
  Megaphone,
  Search,
  Share2,
  Code,
  Palette,
  Users,
  MessageCircle,
  CheckCircle,
  ArrowRight
} from 'lucide-react';
import { Card, CardContent } from './ui/card';
import { useSwipeGesture, triggerHapticFeedback } from '../utils/touchGestures';

interface Service {
  id: string;
  title: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  features: string[];
}

const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    tagline: 'Growth-Driven Strategies',
    description: 'End-to-end digital strategy for exponential growth and brand awareness across all channels.',
    icon: TrendingUp,
    features: [
      'SEO & SEM Optimization',
      'PPC Campaign Management',
      'Analytics & Reporting'
    ]
  },
  {
    id: 'advertising',
    title: 'Advertising & Media',
    tagline: 'Omnichannel Campaigns',
    description: 'Print, digital & outdoor campaigns that sell. From creative concept to flawless execution.',
    icon: Megaphone,
    features: [
      'Creative Development',
      'Media Planning & Buying',
      'Campaign Optimization'
    ]
  },
  {
    id: 'seo',
    title: 'SEO & GMB',
    tagline: 'Search Domination',
    description: 'Get found before your competitors. Rank higher, drive more traffic, and convert better.',
    icon: Search,
    features: [
      'Technical SEO Audits',
      'Google My Business Setup',
      'Local Search Optimization'
    ]
  },
  {
    id: 'social-media',
    title: 'Social Media',
    tagline: 'Community Building',
    description: 'From viral reels to reach — we do it all. Build engaged communities that convert.',
    icon: Share2,
    features: [
      'Content Strategy & Creation',
      'Community Management',
      'Paid Social Campaigns'
    ]
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    tagline: 'Digital Experiences',
    description: 'Build, host, and grow your digital identity. Fast, responsive, and conversion-focused.',
    icon: Code,
    features: [
      'Custom Web Applications',
      'E-Commerce Solutions',
      'Hosting & Maintenance'
    ]
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    tagline: 'Identity Creation',
    description: 'Logos, visuals, and emotions — blended perfectly to create memorable brand identities.',
    icon: Palette,
    features: [
      'Logo & Identity Design',
      'Brand Guidelines',
      'Visual Storytelling'
    ]
  },
  {
    id: 'political',
    title: 'Political Campaigns',
    tagline: 'Electoral Strategy',
    description: 'Influence that wins hearts and elections. Strategy-driven political marketing expertise.',
    icon: Users,
    features: [
      'Campaign Strategy',
      'Grassroots Marketing',
      'Voter Engagement'
    ]
  },
  {
    id: 'public-relations',
    title: 'Public Relations',
    tagline: 'Reputation Management',
    description: 'Craft your brand voice strategically. Media relations and reputation management excellence.',
    icon: MessageCircle,
    features: [
      'Media Relations',
      'Crisis Communication',
      'Brand Reputation'
    ]
  }
];

const MobileServiceAccordion = () => {
  const [activeTab, setActiveTab] = useState<string>('digital-marketing');
  
  const activeService = services.find(service => service.id === activeTab) || services[0];
  const ActiveIcon = activeService.icon;

  // Get current tab index
  const currentIndex = services.findIndex(s => s.id === activeTab);

  // Navigate to previous service with haptic feedback
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setActiveTab(services[currentIndex - 1].id);
      triggerHapticFeedback(10); // Light haptic feedback
    }
  };

  // Navigate to next service with haptic feedback
  const goToNext = () => {
    if (currentIndex < services.length - 1) {
      setActiveTab(services[currentIndex + 1].id);
      triggerHapticFeedback(10); // Light haptic feedback
    }
  };

  // Handle tab selection with haptic feedback
  const handleTabSelect = (serviceId: string) => {
    setActiveTab(serviceId);
    triggerHapticFeedback(10); // Light haptic feedback on tap
  };

  // Setup swipe gestures
  const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipeGesture(
    {
      onSwipeLeft: goToNext,
      onSwipeRight: goToPrevious
    },
    {
      threshold: 50, // 50px minimum swipe distance
      timeout: 300, // 300ms maximum swipe duration
      velocity: 0.3 // Minimum swipe velocity
    }
  );

  return (
    <div className="w-full h-[480px] flex flex-col gap-4">
      {/* Horizontal Scrollable Tabs */}
      <div className="w-full overflow-x-auto overflow-y-hidden pb-2 snap-x snap-mandatory scroll-smooth [-webkit-overflow-scrolling:touch] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        <div className="flex gap-2 min-w-max px-1">
          {services.map((service) => {
            const Icon = service.icon;
            const isActive = activeTab === service.id;
            
            return (
              <button
                key={service.id}
                onClick={() => handleTabSelect(service.id)}
                className={`
                  flex items-center gap-2 px-4 py-3 rounded-xl border transition-all duration-300 snap-start
                  ${isActive 
                    ? 'bg-yellow-500/10 border-yellow-500/30 text-white' 
                    : 'bg-white/5 border-white/10 text-gray-400 hover:bg-white/10 hover:border-white/20'
                  }
                `}
              >
                <div className={`
                  w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0
                  ${isActive ? 'bg-yellow-500/20' : 'bg-white/5'}
                `}>
                  <Icon className={`w-4 h-4 ${isActive ? 'text-yellow-500' : 'text-white'}`} />
                </div>
                <div className="text-left whitespace-nowrap">
                  <div className={`text-sm ${isActive ? 'text-white' : 'text-gray-300'}`}>
                    {service.title}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* Active Service Card - Swipeable */}
      <div 
        className="flex-1 overflow-y-auto pr-2 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Card className="border-white/10 bg-black">
          <CardContent className="p-6">
            {/* Icon + Title */}
            <div className="flex items-start gap-4 mb-6">
              <div className="w-16 h-16 bg-yellow-500/10 rounded-xl flex items-center justify-center border border-yellow-500/30 flex-shrink-0">
                <ActiveIcon className="w-8 h-8 text-yellow-500" />
              </div>
              <div className="flex-1">
                <h3 className="text-white mb-1">{activeService.title}</h3>
                <div className="text-yellow-500 text-xs">{activeService.tagline}</div>
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {activeService.description}
            </p>

            {/* Features */}
            <div className="space-y-3 mb-6">
              {activeService.features.map((feature, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-3 text-sm text-gray-300"
                >
                  <CheckCircle className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4 border-t border-white/10">
              <button 
                className="text-yellow-500 text-sm flex items-center gap-2 hover:gap-3 transition-all"
                onClick={() => triggerHapticFeedback(15)}
              >
                <span>Explore Service</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {/* Swipe Indicator (subtle hint) */}
            <div className="flex items-center justify-center gap-2 mt-6 pt-4 border-t border-white/10">
              <div className="text-gray-500 text-xs flex items-center gap-2">
                {currentIndex > 0 && <span>←</span>}
                <span>Swipe to browse</span>
                {currentIndex < services.length - 1 && <span>→</span>}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MobileServiceAccordion;
