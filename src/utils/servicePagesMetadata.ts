// Service Pages SEO Metadata - All 16 service pages

export interface ServicePageSEOMetadata {
  title: string;
  h1: string;
  description: string;
  keywords: string;
  focusKeyword: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
}

export const SERVICE_PAGES_METADATA: Record<string, ServicePageSEOMetadata> = {
  'digital-marketing': {
    title: 'Digital Marketing Services in Indore - SEO, PPC, SMM | Inchtomilez',
    h1: 'Digital Marketing Servcies',
    description: 'Expert digital marketing services in Indore. Comprehensive SEO, PPC, social media marketing, email marketing, content marketing. Data-driven strategies for maximum ROI. Call +91-9669988666 for free consultation.',
    keywords: 'digital marketing services indore, seo services indore, ppc management indore, social media marketing indore, content marketing indore, email marketing indore, online marketing indore, internet marketing indore',
    focusKeyword: 'digital marketing services indore',
    canonical: '/services/digital-marketing',
    ogTitle: 'Digital Marketing Services in Indore | Inchtomilez',
    ogDescription: 'Transform your online presence with expert digital marketing. SEO, PPC, social media & more.'
  },

  'advertising': {
    title: 'Advertising Services in Indore - Google Ads, Facebook Ads & More | Inchtomilez',
    h1: 'Data-Driven Advertising Services in Indore',
    description: 'Expert advertising services in Indore: Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, Display Advertising. Maximize ROI with targeted campaigns. PPC management by certified experts.',
    keywords: 'advertising services indore, google ads indore, facebook ads indore, ppc management indore, display advertising, social media ads indore, paid advertising indore',
    focusKeyword: 'advertising services indore',
    canonical: '/services/advertising',
    ogTitle: 'Advertising Services in Indore | PPC & Social Ads',
    ogDescription: 'Drive instant results with expert Google Ads, Facebook Ads & PPC management.'
  },

  'ecommerce': {
    title: 'E-Commerce Marketing Services in Indore - Amazon, Flipkart, Shopify | Inchtomilez',
    h1: 'E-Commerce Marketing Services - Grow Your Online Store',
    description: 'Expert e-commerce marketing in Indore: Amazon SEO, Flipkart ads, Shopify optimization, marketplace management. Increase sales with data-driven strategies for online stores.',
    keywords: 'ecommerce marketing indore, amazon marketing indore, flipkart advertising, shopify marketing, marketplace optimization, online store marketing, amazon seo',
    focusKeyword: 'ecommerce marketing indore',
    canonical: '/services/ecommerce',
    ogTitle: 'E-Commerce Marketing Services | Amazon, Flipkart & Shopify',
    ogDescription: 'Grow your online store with expert marketplace marketing and optimization.'
  },

  'branding': {
    title: 'Branding Services in Indore - Logo Design, Brand Identity & Strategy | Inchtomilez',
    h1: 'Branding Services in Indore - Build Brands That Dominate',
    description: 'Professional branding services in Indore: Logo design, brand identity, brand strategy, positioning, messaging. Create memorable brands that dominate your industry.',
    keywords: 'branding services indore, brand identity indore, logo design indore, brand strategy, brand positioning, corporate branding indore, rebranding services',
    focusKeyword: 'branding services indore',
    canonical: '/services/branding',
    ogTitle: 'Branding Services in Indore | Logo & Brand Identity',
    ogDescription: 'Build powerful brands with expert logo design, brand strategy & identity development.'
  },

  'media-production': {
    title: 'Media Production Services in Indore - Video & Photography | Inchtomilez',
    h1: 'Media Production Services - Professional Video & Photography',
    description: 'Professional media production in Indore: Commercial videos, corporate films, product photography, event coverage, promotional videos. High-quality visual content creation.',
    keywords: 'media production indore, video production indore, commercial photography indore, corporate videos, product photography, event videography indore',
    focusKeyword: 'media production indore',
    canonical: '/services/media-production',
    ogTitle: 'Media Production Services in Indore | Video & Photography',
    ogDescription: 'Create stunning visual content with professional video production & photography services.'
  },

  'animation': {
    title: 'Animation Services in Indore - 2D/3D Animation & Motion Graphics | Inchtomilez',
    h1: 'Animation Services - Bring Your Ideas to Life',
    description: 'Creative animation services in Indore: 2D/3D animation, motion graphics, explainer videos, animated ads, character animation. Engaging animated content that converts.',
    keywords: 'animation services indore, 2d animation indore, 3d animation indore, motion graphics, explainer videos, animated ads, character animation',
    focusKeyword: 'animation services indore',
    canonical: '/services/animation',
    ogTitle: 'Animation Services in Indore | 2D, 3D & Motion Graphics',
    ogDescription: 'Professional animation services: explainer videos, 3D animation & motion graphics.'
  },

  'graphic-designing': {
    title: 'Graphic Design Services in Indore - UI/UX & Print Design | Inchtomilez',
    h1: 'Graphic Design Services - Beautiful Designs That Convert',
    description: 'Expert graphic design services in Indore: UI/UX design, print design, social media graphics, brochures, packaging design. Creative designs that drive results.',
    keywords: 'graphic design indore, ui ux design indore, print design indore, social media graphics, brochure design, packaging design, logo designer indore',
    focusKeyword: 'graphic design indore',
    canonical: '/services/graphic-designing',
    ogTitle: 'Graphic Design Services in Indore | UI/UX & Print',
    ogDescription: 'Creative graphic design for digital & print. UI/UX, branding, social media & more.'
  },

  'ooh-services': {
    title: 'OOH Services in Indore - Outdoor Advertising & Billboards | Inchtomilez',
    h1: 'OOH Services - High-Impact Outdoor Advertising',
    description: 'Out-of-home advertising in Indore: Billboards, bus shelters, transit ads, street furniture, hoarding advertising. High-impact outdoor campaigns that get noticed.',
    keywords: 'ooh advertising indore, outdoor advertising indore, billboard advertising indore, transit ads, bus shelter ads, hoarding advertising indore',
    focusKeyword: 'outdoor advertising indore',
    canonical: '/services/ooh-services',
    ogTitle: 'OOH Services in Indore | Billboards & Outdoor Advertising',
    ogDescription: 'Dominate outdoor spaces with strategic billboard and transit advertising campaigns.'
  },

  'print-media': {
    title: 'Print Media Services in Indore - Brochures, Catalogs & Magazines | Inchtomilez',
    h1: 'Print Media Services - Professional Print Solutions',
    description: 'Print media services in Indore: Brochures, catalogs, magazines, flyers, posters, business cards. Professional print design and production for impactful marketing materials.',
    keywords: 'print media indore, brochure design indore, catalog design, magazine advertising, print advertising indore, flyer design, business cards indore',
    focusKeyword: 'print media indore',
    canonical: '/services/print-media',
    ogTitle: 'Print Media Services in Indore | Brochures & Catalogs',
    ogDescription: 'Professional print media design & production. Brochures, catalogs, magazines & more.'
  },

  'software-development': {
    title: 'Software Development Services in Indore - Custom Solutions | Inchtomilez',
    h1: 'Software Development - Scalable Custom Solutions',
    description: 'Custom software development in Indore: Enterprise software, web applications, SaaS products, API development, CRM systems. Scalable technology solutions built for growth.',
    keywords: 'software development indore, custom software indore, enterprise software, web applications, saas development, api development, crm development indore',
    focusKeyword: 'software development indore',
    canonical: '/services/software-development',
    ogTitle: 'Software Development Services in Indore | Custom Solutions',
    ogDescription: 'Build scalable software solutions: Enterprise apps, SaaS products & web applications.'
  },

  'application-development': {
    title: 'Mobile App Development in Indore - iOS & Android Apps | Inchtomilez',
    h1: 'Mobile App Development - iOS & Android Solutions',
    description: 'Mobile app development services in Indore: Native iOS apps, Android apps, cross-platform apps, React Native. User-friendly mobile solutions that engage customers.',
    keywords: 'app development indore, mobile app development indore, ios app development, android app development, react native development, mobile apps indore',
    focusKeyword: 'mobile app development indore',
    canonical: '/services/application-development',
    ogTitle: 'Mobile App Development in Indore | iOS & Android Apps',
    ogDescription: 'Build engaging mobile apps for iOS & Android with expert development services.'
  },

  'website-development': {
    title: 'Website Development Services in Indore - Responsive & SEO Optimized | Inchtomilez',
    h1: 'Website Development - Fast, Responsive & SEO-Friendly',
    description: 'Professional website development in Indore: Responsive websites, WordPress, e-commerce sites, custom web development. Fast, SEO-optimized websites that convert visitors into customers.',
    keywords: 'website development indore, web development indore, responsive websites, wordpress development indore, ecommerce website indore, custom websites',
    focusKeyword: 'website development indore',
    canonical: '/services/website-development',
    ogTitle: 'Website Development Services in Indore | Responsive & SEO Ready',
    ogDescription: 'Build high-performing websites: WordPress, e-commerce & custom web development.'
  },

  'political-campaigns': {
    title: 'Political Campaign Management in Indore - Win Elections | Inchtomilez',
    h1: 'Political Campaign Management - Data-Driven Election Strategies',
    description: 'Win elections with expert political campaign management in Indore: Campaign strategy, social media campaigns, ground campaigns, voter outreach, polling analysis, political advertising.',
    keywords: 'political campaigns indore, election campaigns, political marketing, campaign strategy, political advertising, voter outreach, election management',
    focusKeyword: 'political campaigns indore',
    canonical: '/services/political-campaigns',
    ogTitle: 'Political Campaign Management in Indore | Win Elections',
    ogDescription: 'Data-driven political campaigns: Strategy, social media, ground campaigns & voter outreach.'
  },

  'corporate-gifting': {
    title: 'Corporate Gifting Services in Indore - Branded Merchandise | Inchtomilez',
    h1: 'Corporate Gifting - Premium Branded Merchandise',
    description: 'Premium corporate gifting services in Indore: Branded merchandise, custom gifts, employee gifts, client appreciation gifts, promotional products. Strengthen relationships with thoughtful gifting.',
    keywords: 'corporate gifting indore, branded merchandise indore, promotional products, custom gifts, employee gifts, client gifts, promotional items indore',
    focusKeyword: 'corporate gifting indore',
    canonical: '/services/corporate-gifting',
    ogTitle: 'Corporate Gifting Services in Indore | Branded Merchandise',
    ogDescription: 'Premium corporate gifts & branded merchandise for employees, clients & events.'
  },

  'influencer-marketing': {
    title: 'Influencer Marketing Services in Indore - Creator Partnerships | Inchtomilez',
    h1: 'Influencer Marketing - Amplify Your Brand Reach',
    description: 'Expert influencer marketing services in Indore: Influencer partnerships, creator collaborations, sponsored content, brand ambassadors, influencer campaigns. Reach millions authentically.',
    keywords: 'influencer marketing indore, influencer partnerships, creator marketing, sponsored content, brand ambassadors, influencer campaigns, social media influencers',
    focusKeyword: 'influencer marketing indore',
    canonical: '/services/influencer-marketing',
    ogTitle: 'Influencer Marketing Services in Indore | Creator Partnerships',
    ogDescription: 'Connect with the right influencers to amplify your brand reach & engagement.'
  },

  'public-relations': {
    title: 'Public Relations Services in Indore - Media & PR Strategy | Inchtomilez',
    h1: 'Public Relations - Build Your Brand Reputation',
    description: 'Strategic PR services in Indore: Media relations, press releases, crisis management, reputation management, brand PR, media coverage. Manage your brand image effectively.',
    keywords: 'public relations indore, pr services indore, media relations, press releases, crisis management, reputation management, brand pr, media coverage',
    focusKeyword: 'public relations indore',
    canonical: '/services/public-relations',
    ogTitle: 'Public Relations Services in Indore | Media & PR Strategy',
    ogDescription: 'Strategic PR services: Media relations, press releases & reputation management.'
  }
};
