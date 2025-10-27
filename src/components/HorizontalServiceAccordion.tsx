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
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  gradient: string;
}

const services: Service[] = [
  {
    id: 'digital-marketing',
    title: 'Digital Marketing',
    shortTitle: 'DIGITAL MARKETING',
    tagline: 'Growth-Driven Strategies',
    description: 'End-to-end digital strategy for exponential growth and brand awareness across all channels.',
    icon: TrendingUp,
    features: [
      'SEO & SEM Optimization',
      'PPC Campaign Management',
      'Analytics & Reporting'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'advertising',
    title: 'Advertising & Media',
    shortTitle: 'ADVERTISING',
    tagline: 'Omnichannel Campaigns',
    description: 'Print, digital & outdoor campaigns that sell. From creative concept to flawless execution.',
    icon: Megaphone,
    features: [
      'Creative Development',
      'Media Planning & Buying',
      'Campaign Optimization'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'seo',
    title: 'SEO & GMB',
    shortTitle: 'SEO & GMB',
    tagline: 'Search Domination',
    description: 'Get found before your competitors. Rank higher, drive more traffic, and convert better.',
    icon: Search,
    features: [
      'Technical SEO Audits',
      'Google My Business Setup',
      'Local Search Optimization'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'social-media',
    title: 'Social Media',
    shortTitle: 'SOCIAL MEDIA',
    tagline: 'Community Building',
    description: 'From viral reels to reach — we do it all. Build engaged communities that convert.',
    icon: Share2,
    features: [
      'Content Strategy & Creation',
      'Community Management',
      'Paid Social Campaigns'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'website-dev',
    title: 'Website Development',
    shortTitle: 'WEBSITE DEV',
    tagline: 'Digital Experiences',
    description: 'Build, host, and grow your digital identity. Fast, responsive, and conversion-focused.',
    icon: Code,
    features: [
      'Custom Web Applications',
      'E-Commerce Solutions',
      'Hosting & Maintenance'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'branding',
    title: 'Branding & Design',
    shortTitle: 'BRANDING',
    tagline: 'Identity Creation',
    description: 'Logos, visuals, and emotions — blended perfectly to create memorable brand identities.',
    icon: Palette,
    features: [
      'Logo & Identity Design',
      'Brand Guidelines',
      'Visual Storytelling'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'political',
    title: 'Political Campaigns',
    shortTitle: 'POLITICAL',
    tagline: 'Electoral Strategy',
    description: 'Influence that wins hearts and elections. Strategy-driven political marketing expertise.',
    icon: Users,
    features: [
      'Campaign Strategy',
      'Grassroots Marketing',
      'Voter Engagement'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  },
  {
    id: 'public-relations',
    title: 'Public Relations',
    shortTitle: 'PUBLIC RELATIONS',
    tagline: 'Reputation Management',
    description: 'Craft your brand voice strategically. Media relations and reputation management excellence.',
    icon: MessageCircle,
    features: [
      'Media Relations',
      'Crisis Communication',
      'Brand Reputation'
    ],
    gradient: 'from-yellow-500/20 to-yellow-500/5'
  }
];

const HorizontalServiceAccordion = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0); // First card always active by default

  return (
    <div className="flex gap-3 w-full h-[320px]">
      {services.map((service, index) => {
        const Icon = service.icon;
        const isActive = activeIndex === index;
        
        return (
          <div
            key={service.id}
            onMouseEnter={() => setActiveIndex(index)}
            onMouseLeave={() => setActiveIndex(0)} // Return to first card when mouse leaves
            className="bg-black border border-white/10 rounded-2xl p-6 transition-all duration-700 ease-in-out cursor-pointer group relative overflow-hidden flex flex-col"
            style={{
              width: isActive ? 'auto' : '90px',
              flex: isActive ? '1' : '0 0 90px',
            }}
          >
            {/* Background Effects */}
            <div 
              className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-transparent transition-opacity duration-700"
              style={{ opacity: isActive ? 1 : 0 }}
            />
            <div 
              className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent transition-opacity duration-700"
              style={{ opacity: isActive ? 0.6 : 0 }}
            />
            
            {/* Collapsed State - Vertical Text & Icon */}
            <div 
              className="absolute inset-0 flex items-center justify-center transition-all duration-500"
              style={{
                opacity: isActive ? 0 : 1,
                transform: isActive ? 'scale(0.95)' : 'scale(1)',
                pointerEvents: isActive ? 'none' : 'auto'
              }}
            >
              <div className="flex flex-col items-center gap-5">
                <div 
                  className="w-14 h-14 bg-white/5 rounded-xl flex items-center justify-center border transition-all duration-500"
                  style={{
                    borderColor: isActive ? 'rgba(234, 179, 8, 0.3)' : 'rgba(255, 255, 255, 0.1)'
                  }}
                >
                  <Icon className="w-7 h-7 text-white" />
                </div>
                <div 
                  className="text-white tracking-widest text-sm"
                  style={{ 
                    writingMode: 'vertical-rl', 
                    textOrientation: 'mixed',
                    letterSpacing: '0.15em'
                  }}
                >
                  {service.shortTitle}
                </div>
              </div>
            </div>
            
            {/* Expanded State - Full Content */}
            <div 
              className="relative z-10 transition-all duration-500 flex flex-col h-full"
              style={{
                opacity: isActive ? 1 : 0,
                transform: isActive ? 'translateX(0)' : 'translateX(-20px)',
                transitionDelay: isActive ? '150ms' : '0ms',
                pointerEvents: isActive ? 'auto' : 'none'
              }}
            >
              {/* Header */}
              <div className="flex items-start gap-4 mb-4">
                <div className={`w-16 h-16 bg-gradient-to-br ${service.gradient} rounded-2xl flex items-center justify-center border border-yellow-500/20 flex-shrink-0 shadow-lg shadow-yellow-500/10`}>
                  <Icon className="w-8 h-8 text-yellow-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-white mb-1 whitespace-nowrap">{service.title}</h3>
                  <p className="text-gray-400 text-xs whitespace-nowrap">{service.tagline}</p>
                </div>
              </div>
              
              {/* Description */}
              <p className="text-gray-300 text-sm mb-5 leading-relaxed">
                {service.description}
              </p>
              
              {/* Features */}
              <div className="space-y-3 mb-5">
                {service.features.map((feature, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-center gap-3 text-xs text-gray-400 transition-all duration-300"
                    style={{
                      opacity: isActive ? 1 : 0,
                      transform: isActive ? 'translateX(0)' : 'translateX(-10px)',
                      transitionDelay: isActive ? `${200 + idx * 50}ms` : '0ms'
                    }}
                  >
                    <CheckCircle className="w-4 h-4 text-yellow-500 flex-shrink-0" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
              
              {/* CTA */}
              <div className="mt-auto pt-5 border-t border-white/10">
                <button className="text-yellow-500 text-sm flex items-center gap-2 hover:gap-3 transition-all group/btn">
                  <span>Explore Service</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
            
            {/* Border Glow Effect */}
            <div 
              className="absolute inset-0 border-2 rounded-2xl transition-all duration-700 pointer-events-none"
              style={{
                borderColor: isActive ? 'rgba(234, 179, 8, 0.3)' : 'transparent',
                boxShadow: isActive ? '0 10px 40px rgba(234, 179, 8, 0.1)' : 'none'
              }}
            />
            
            {/* Sparkle Effect on Active */}
            {isActive && (
              <div className="absolute top-4 right-4 animate-pulse">
                <Sparkles className="w-5 h-5 text-yellow-500/50" />
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default HorizontalServiceAccordion;
