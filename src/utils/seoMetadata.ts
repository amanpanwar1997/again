// Page-specific SEO metadata for all pages

export interface PageMetadata {
  title: string;
  h1: string;
  description: string;
  keywords: string;
  focusKeyword: string;
  canonical?: string;
  ogTitle?: string;
  ogDescription?: string;
  schemaType?: 'WebPage' | 'AboutPage' | 'ContactPage' | 'Service' | 'CollectionPage';
}

export const PAGE_METADATA: Record<string, PageMetadata> = {
  // Main Pages
  home: {
    title: 'Inchtomilez - #1 Digital Marketing Agency in Indore | 360° Marketing Solutions',
    h1: 'Build Brands That Speak Louder Than Ads',
    description: 'Leading digital marketing & advertising agency in Indore. Expert SEO, PPC, social media marketing, branding, web development & creative services. Drive growth with data-driven strategies. Call +91-9669988666',
    keywords: 'digital marketing agency indore, advertising agency indore, seo services indore, social media marketing indore, branding agency indore, web development indore, ppc agency indore, content marketing indore',
    focusKeyword: 'digital marketing agency indore',
    canonical: '/',
    ogTitle: 'Inchtomilez - #1 Digital Marketing Agency in Indore',
    ogDescription: 'Transform your business with Indore\'s leading digital marketing agency. Expert SEO, PPC, social media & branding services.',
    schemaType: 'WebPage'
  },

  about: {
    title: 'About Inchtomilez - Premier Digital Marketing Agency in Indore | Our Story',
    h1: 'About Inchtomilez - Building Brands That Dominate',
    description: 'Learn about Inchtomilez, Indore\'s leading digital marketing agency. Our mission, values, expert team, and commitment to delivering measurable results. 10+ years of expertise, 500+ successful campaigns.',
    keywords: 'about inchtomilez, digital marketing agency indore, our team, company values, marketing experts indore, agency story, why choose inchtomilez',
    focusKeyword: 'digital marketing agency indore',
    canonical: '/about',
    ogTitle: 'About Inchtomilez - Your Growth Partners in Indore',
    ogDescription: 'Meet the team behind Indore\'s most trusted digital marketing agency. Expert strategies, proven results.',
    schemaType: 'AboutPage'
  },

  services: {
    title: 'Digital Marketing Services in Indore - SEO, PPC, SMM & More | Inchtomilez',
    h1: 'Comprehensive Digital Marketing Services in Indore',
    description: '360° digital marketing services in Indore: SEO, PPC, social media marketing, branding, web development, content marketing, e-commerce marketing. Data-driven strategies for measurable growth. Free consultation available.',
    keywords: 'digital marketing services indore, seo services indore, ppc management indore, social media marketing indore, branding services indore, web development indore, content marketing indore, email marketing indore',
    focusKeyword: 'digital marketing services indore',
    canonical: '/services',
    ogTitle: 'Complete Digital Marketing Services in Indore | Inchtomilez',
    ogDescription: '16 specialized services under one roof. From SEO to web development, we drive results.',
    schemaType: 'CollectionPage'
  },

  letsTalk: {
    title: 'Contact Inchtomilez - Get Free Digital Marketing Consultation | Indore',
    h1: 'Let\'s Talk About Growing Your Business',
    description: 'Contact Inchtomilez for a free digital marketing consultation. Call +91-9669988666 or +91-9009970709. Located in Vijay Nagar, Indore. Let\'s discuss your goals and create a winning strategy.',
    keywords: 'contact inchtomilez, digital marketing consultation indore, free consultation, marketing agency contact, inchtomilez phone number, indore marketing agency contact',
    focusKeyword: 'digital marketing consultation indore',
    canonical: '/lets-talk',
    ogTitle: 'Contact Inchtomilez - Free Consultation Available',
    ogDescription: 'Ready to grow? Contact Indore\'s leading digital marketing agency. Free consultation, expert advice.',
    schemaType: 'ContactPage'
  },

  blogs: {
    title: 'Digital Marketing Blog - 100+ Expert Articles | Inchtomilez Indore',
    h1: 'Digital Marketing Insights & Growth Strategies',
    description: '100+ expert articles on digital marketing, SEO, social media, PPC, branding, content marketing & more. Learn proven strategies from Indore\'s leading digital marketing agency. Stay ahead with actionable insights.',
    keywords: 'digital marketing blog, seo tips, social media marketing tips, ppc strategies, content marketing blog, marketing trends 2025, digital marketing insights',
    focusKeyword: 'digital marketing blog',
    canonical: '/blogs',
    ogTitle: 'Digital Marketing Blog - Expert Insights | Inchtomilez',
    ogDescription: '100+ expert articles on SEO, social media, PPC & more. Learn from industry leaders.',
    schemaType: 'CollectionPage'
  },

  industries: {
    title: 'Industries We Serve - 20+ Sectors | Digital Marketing Agency Indore',
    h1: 'Industry-Specific Digital Marketing Expertise',
    description: 'Specialized digital marketing services across 20+ industries: Healthcare, Education, Real Estate, E-Commerce, Technology, Finance, Hospitality, Legal & more. Industry-specific strategies that deliver results in Indore.',
    keywords: 'industry specific marketing, healthcare digital marketing, education marketing, real estate marketing, ecommerce marketing, b2b marketing, hospitality marketing, finance marketing indore',
    focusKeyword: 'industry specific digital marketing',
    canonical: '/industries',
    ogTitle: '20+ Industries We Serve | Inchtomilez Digital Marketing',
    ogDescription: 'Specialized expertise across healthcare, education, real estate, technology & more.',
    schemaType: 'CollectionPage'
  },

  // Service Pages
  'services/digital-marketing': {
    title: 'Digital Marketing Services in Indore - SEO, PPC, SMM | Inchtomilez',
    h1: 'Digital Marketing Services in Indore - Drive Growth Online',
    description: 'Expert digital marketing services in Indore. Comprehensive SEO, PPC, social media marketing, email marketing, content marketing. Data-driven strategies for maximum ROI. Call +91-9669988666 for free consultation.',
    keywords: 'digital marketing services indore, seo services indore, ppc management indore, social media marketing indore, content marketing indore, email marketing indore, online marketing indore, internet marketing indore',
    focusKeyword: 'digital marketing services indore',
    canonical: '/services/digital-marketing',
    ogTitle: 'Digital Marketing Services in Indore | Inchtomilez',
    ogDescription: 'Transform your online presence with expert digital marketing. SEO, PPC, social media & more.',
    schemaType: 'Service'
  },

  'services/advertising': {
    title: 'Advertising Services in Indore - Google Ads, Facebook Ads & More | Inchtomilez',
    h1: 'Data-Driven Advertising Services in Indore',
    description: 'Expert advertising services in Indore: Google Ads, Facebook Ads, Instagram Ads, LinkedIn Ads, Display Advertising. Maximize ROI with targeted campaigns. PPC management by certified experts.',
    keywords: 'advertising services indore, google ads indore, facebook ads indore, ppc management indore, display advertising, social media ads indore, paid advertising indore',
    focusKeyword: 'advertising services indore',
    canonical: '/services/advertising',
    ogTitle: 'Advertising Services in Indore | PPC & Social Ads',
    ogDescription: 'Drive instant results with expert Google Ads, Facebook Ads & PPC management.',
    schemaType: 'Service'
  },

  'services/ecommerce': {
    title: 'E-Commerce Marketing Services in Indore - Amazon, Flipkart, Shopify | Inchtomilez',
    h1: 'E-Commerce Marketing Services - Grow Your Online Store',
    description: 'Expert e-commerce marketing in Indore: Amazon SEO, Flipkart ads, Shopify optimization, marketplace management. Increase sales with data-driven strategies for online stores.',
    keywords: 'ecommerce marketing indore, amazon marketing indore, flipkart advertising, shopify marketing, marketplace optimization, online store marketing, amazon seo',
    focusKeyword: 'ecommerce marketing indore',
    canonical: '/services/ecommerce',
    ogTitle: 'E-Commerce Marketing Services | Amazon, Flipkart & Shopify',
    ogDescription: 'Grow your online store with expert marketplace marketing and optimization.',
    schemaType: 'Service'
  },

  'services/branding': {
    title: 'Branding Services in Indore - Logo Design, Brand Identity & Strategy | Inchtomilez',
    h1: 'Branding Services in Indore - Build Brands That Dominate',
    description: 'Professional branding services in Indore: Logo design, brand identity, brand strategy, positioning, messaging. Create memorable brands that dominate your industry.',
    keywords: 'branding services indore, brand identity indore, logo design indore, brand strategy, brand positioning, corporate branding indore, rebranding services',
    focusKeyword: 'branding services indore',
    canonical: '/services/branding',
    ogTitle: 'Branding Services in Indore | Logo & Brand Identity',
    ogDescription: 'Build powerful brands with expert logo design, brand strategy & identity development.',
    schemaType: 'Service'
  },

  'services/media-production': {
    title: 'Media Production Services in Indore - Video & Photography | Inchtomilez',
    h1: 'Media Production Services - Professional Video & Photography',
    description: 'Professional media production in Indore: Commercial videos, corporate films, product photography, event coverage, promotional videos. High-quality visual content creation.',
    keywords: 'media production indore, video production indore, commercial photography indore, corporate videos, product photography, event videography indore',
    focusKeyword: 'media production indore',
    canonical: '/services/media-production',
    ogTitle: 'Media Production Services in Indore | Video & Photography',
    ogDescription: 'Create stunning visual content with professional video production & photography services.',
    schemaType: 'Service'
  },

  'services/animation': {
    title: 'Animation Services in Indore - 2D/3D Animation & Motion Graphics | Inchtomilez',
    h1: 'Animation Services - Bring Your Ideas to Life',
    description: 'Creative animation services in Indore: 2D/3D animation, motion graphics, explainer videos, animated ads, character animation. Engaging animated content that converts.',
    keywords: 'animation services indore, 2d animation indore, 3d animation indore, motion graphics, explainer videos, animated ads, character animation',
    focusKeyword: 'animation services indore',
    canonical: '/services/animation',
    ogTitle: 'Animation Services in Indore | 2D, 3D & Motion Graphics',
    ogDescription: 'Professional animation services: explainer videos, 3D animation & motion graphics.',
    schemaType: 'Service'
  },

  'services/graphic-designing': {
    title: 'Graphic Design Services in Indore - UI/UX & Print Design | Inchtomilez',
    h1: 'Graphic Design Services - Beautiful Designs That Convert',
    description: 'Expert graphic design services in Indore: UI/UX design, print design, social media graphics, brochures, packaging design. Creative designs that drive results.',
    keywords: 'graphic design indore, ui ux design indore, print design indore, social media graphics, brochure design, packaging design, logo designer indore',
    focusKeyword: 'graphic design indore',
    canonical: '/services/graphic-designing',
    ogTitle: 'Graphic Design Services in Indore | UI/UX & Print',
    ogDescription: 'Creative graphic design for digital & print. UI/UX, branding, social media & more.',
    schemaType: 'Service'
  },

  'services/ooh-services': {
    title: 'OOH Services in Indore - Outdoor Advertising & Billboards | Inchtomilez',
    h1: 'OOH Services - High-Impact Outdoor Advertising',
    description: 'Out-of-home advertising in Indore: Billboards, bus shelters, transit ads, street furniture, hoarding advertising. High-impact outdoor campaigns that get noticed.',
    keywords: 'ooh advertising indore, outdoor advertising indore, billboard advertising indore, transit ads, bus shelter ads, hoarding advertising indore',
    focusKeyword: 'outdoor advertising indore',
    canonical: '/services/ooh-services',
    ogTitle: 'OOH Services in Indore | Billboards & Outdoor Advertising',
    ogDescription: 'Dominate outdoor spaces with strategic billboard and transit advertising campaigns.',
    schemaType: 'Service'
  },

  'services/print-media': {
    title: 'Print Media Services in Indore - Brochures, Catalogs & Magazines | Inchtomilez',
    h1: 'Print Media Services - Professional Print Solutions',
    description: 'Print media services in Indore: Brochures, catalogs, magazines, flyers, posters, business cards. Professional print design and production for impactful marketing materials.',
    keywords: 'print media indore, brochure design indore, catalog design, magazine advertising, print advertising indore, flyer design, business cards indore',
    focusKeyword: 'print media indore',
    canonical: '/services/print-media',
    ogTitle: 'Print Media Services in Indore | Brochures & Catalogs',
    ogDescription: 'Professional print media design & production. Brochures, catalogs, magazines & more.',
    schemaType: 'Service'
  },

  'services/software-development': {
    title: 'Software Development Services in Indore - Custom Solutions | Inchtomilez',
    h1: 'Software Development - Scalable Custom Solutions',
    description: 'Custom software development in Indore: Enterprise software, web applications, SaaS products, API development, CRM systems. Scalable technology solutions built for growth.',
    keywords: 'software development indore, custom software indore, enterprise software, web applications, saas development, api development, crm development indore',
    focusKeyword: 'software development indore',
    canonical: '/services/software-development',
    ogTitle: 'Software Development Services in Indore | Custom Solutions',
    ogDescription: 'Build scalable software solutions: Enterprise apps, SaaS products & web applications.',
    schemaType: 'Service'
  },

  'services/application-development': {
    title: 'Mobile App Development in Indore - iOS & Android Apps | Inchtomilez',
    h1: 'Mobile App Development - iOS & Android Solutions',
    description: 'Mobile app development services in Indore: Native iOS apps, Android apps, cross-platform apps, React Native. User-friendly mobile solutions that engage customers.',
    keywords: 'app development indore, mobile app development indore, ios app development, android app development, react native development, mobile apps indore',
    focusKeyword: 'mobile app development indore',
    canonical: '/services/application-development',
    ogTitle: 'Mobile App Development in Indore | iOS & Android Apps',
    ogDescription: 'Build engaging mobile apps for iOS & Android with expert development services.',
    schemaType: 'Service'
  },

  'services/website-development': {
    title: 'Website Development Services in Indore - Responsive & SEO Optimized | Inchtomilez',
    h1: 'Website Development - Fast, Responsive & SEO-Friendly',
    description: 'Professional website development in Indore: Responsive websites, WordPress, e-commerce sites, custom web development. Fast, SEO-optimized websites that convert visitors into customers.',
    keywords: 'website development indore, web development indore, responsive websites, wordpress development indore, ecommerce website indore, custom websites',
    focusKeyword: 'website development indore',
    canonical: '/services/website-development',
    ogTitle: 'Website Development Services in Indore | Responsive & SEO Ready',
    ogDescription: 'Build high-performing websites: WordPress, e-commerce & custom web development.',
    schemaType: 'Service'
  },

  'services/political-campaigns': {
    title: 'Political Campaign Management in Indore - Win Elections | Inchtomilez',
    h1: 'Political Campaign Management - Data-Driven Election Strategies',
    description: 'Win elections with expert political campaign management in Indore: Campaign strategy, social media campaigns, ground campaigns, voter outreach, polling analysis, political advertising.',
    keywords: 'political campaigns indore, election campaigns, political marketing, campaign strategy, political advertising, voter outreach, election management',
    focusKeyword: 'political campaigns indore',
    canonical: '/services/political-campaigns',
    ogTitle: 'Political Campaign Management in Indore | Win Elections',
    ogDescription: 'Data-driven political campaigns: Strategy, social media, ground campaigns & voter outreach.',
    schemaType: 'Service'
  },

  'services/corporate-gifting': {
    title: 'Corporate Gifting Services in Indore - Branded Merchandise | Inchtomilez',
    h1: 'Corporate Gifting - Premium Branded Merchandise',
    description: 'Premium corporate gifting services in Indore: Branded merchandise, custom gifts, employee gifts, client appreciation gifts, promotional products. Strengthen relationships with thoughtful gifting.',
    keywords: 'corporate gifting indore, branded merchandise indore, promotional products, custom gifts, employee gifts, client gifts, promotional items indore',
    focusKeyword: 'corporate gifting indore',
    canonical: '/services/corporate-gifting',
    ogTitle: 'Corporate Gifting Services in Indore | Branded Merchandise',
    ogDescription: 'Premium corporate gifts & branded merchandise for employees, clients & events.',
    schemaType: 'Service'
  },

  'services/influencer-marketing': {
    title: 'Influencer Marketing Services in Indore - Creator Partnerships | Inchtomilez',
    h1: 'Influencer Marketing - Amplify Your Brand Reach',
    description: 'Expert influencer marketing services in Indore: Influencer partnerships, creator collaborations, sponsored content, brand ambassadors, influencer campaigns. Reach millions authentically.',
    keywords: 'influencer marketing indore, influencer partnerships, creator marketing, sponsored content, brand ambassadors, influencer campaigns, social media influencers',
    focusKeyword: 'influencer marketing indore',
    canonical: '/services/influencer-marketing',
    ogTitle: 'Influencer Marketing Services in Indore | Creator Partnerships',
    ogDescription: 'Connect with the right influencers to amplify your brand reach & engagement.',
    schemaType: 'Service'
  },

  'services/public-relations': {
    title: 'Public Relations Services in Indore - Media & PR Strategy | Inchtomilez',
    h1: 'Public Relations - Build Your Brand Reputation',
    description: 'Strategic PR services in Indore: Media relations, press releases, crisis management, reputation management, brand PR, media coverage. Manage your brand image effectively.',
    keywords: 'public relations indore, pr services indore, media relations, press releases, crisis management, reputation management, brand pr, media coverage',
    focusKeyword: 'public relations indore',
    canonical: '/services/public-relations',
    ogTitle: 'Public Relations Services in Indore | Media & PR Strategy',
    ogDescription: 'Strategic PR services: Media relations, press releases & reputation management.',
    schemaType: 'Service'
  },

  // Industry Pages
  'industries/healthcare': {
    title: 'Healthcare Marketing Services - Medical Practice Growth | InchtoMilez',
    description: 'Specialized healthcare marketing: Medical practice marketing, hospital marketing, telehealth marketing, patient acquisition.',
    keywords: 'healthcare marketing, medical marketing, hospital marketing, doctor marketing, healthcare advertising, patient acquisition',
    canonical: '/industries/healthcare',
    schemaType: 'Service'
  },

  'industries/education': {
    title: 'Education Marketing - Schools, Universities & E-Learning | InchtoMilez',
    description: 'Education marketing experts: School enrollment, university admissions, e-learning platform marketing, student recruitment.',
    keywords: 'education marketing, school marketing, university marketing, student recruitment, elearning marketing',
    canonical: '/industries/education',
    schemaType: 'Service'
  },

  'industries/real-estate': {
    title: 'Real Estate Marketing Services - Property Sales & Leads | InchtoMilez',
    description: 'Real estate marketing: Property listings, lead generation, virtual tours, builder marketing, real estate SEO.',
    keywords: 'real estate marketing, property marketing, real estate advertising, realtor marketing, property sales',
    canonical: '/industries/real-estate',
    schemaType: 'Service'
  },

  'industries/ecommerce': {
    title: 'E-Commerce Marketing - Online Store Growth | InchtoMilez',
    description: 'E-commerce growth marketing: Conversion optimization, marketplace advertising, Shopify marketing, DTC brand building.',
    keywords: 'ecommerce marketing, online store marketing, shopify marketing, dtc marketing, ecommerce growth',
    canonical: '/industries/ecommerce',
    schemaType: 'Service'
  },

  'industries/technology': {
    title: 'Technology & SaaS Marketing - B2B Tech Growth | InchtoMilez',
    description: 'Tech marketing specialists: SaaS marketing, software marketing, B2B tech, product launches, demand generation.',
    keywords: 'tech marketing, saas marketing, software marketing, b2b technology marketing, product marketing',
    canonical: '/industries/technology',
    schemaType: 'Service'
  },

  'industries/finance': {
    title: 'Finance Marketing - Banking, Fintech & Insurance | InchtoMilez',
    description: 'Financial services marketing: Banking, fintech, insurance marketing, wealth management, financial advisor marketing.',
    keywords: 'finance marketing, banking marketing, fintech marketing, insurance marketing, financial services',
    canonical: '/industries/finance',
    schemaType: 'Service'
  },

  'industries/hospitality': {
    title: 'Hospitality Marketing - Hotels, Resorts & Restaurants | InchtoMilez',
    description: 'Hospitality marketing: Hotel marketing, restaurant marketing, resort promotion, travel marketing, bookings growth.',
    keywords: 'hospitality marketing, hotel marketing, restaurant marketing, resort marketing, tourism marketing',
    canonical: '/industries/hospitality',
    schemaType: 'Service'
  },

  'industries/automotive': {
    title: 'Automotive Marketing - Dealerships & Service Centers | InchtoMilez',
    description: 'Automotive marketing: Car dealership marketing, auto service marketing, vehicle sales, parts marketing.',
    keywords: 'automotive marketing, car dealership marketing, auto marketing, vehicle sales marketing',
    canonical: '/industries/automotive',
    schemaType: 'Service'
  },

  'industries/fashion': {
    title: 'Fashion Marketing - Apparel & Luxury Brands | InchtoMilez',
    description: 'Fashion marketing experts: Clothing brands, luxury fashion, streetwear, accessories, influencer campaigns.',
    keywords: 'fashion marketing, clothing brand marketing, luxury fashion marketing, apparel marketing',
    canonical: '/industries/fashion',
    schemaType: 'Service'
  },

  'industries/food-beverage': {
    title: 'Food & Beverage Marketing - Restaurants & CPG Brands | InchtoMilez',
    description: 'F&B marketing: Restaurant marketing, food brand marketing, beverage marketing, CPG products, delivery apps.',
    keywords: 'food marketing, restaurant marketing, beverage marketing, food brand marketing, cpg marketing',
    canonical: '/industries/food-beverage',
    schemaType: 'Service'
  },

  'industries/entertainment': {
    title: 'Entertainment Marketing - Media, Events & Production | InchtoMilez',
    description: 'Entertainment marketing: Event marketing, media promotion, production company marketing, ticket sales.',
    keywords: 'entertainment marketing, event marketing, media marketing, concert marketing, show promotion',
    canonical: '/industries/entertainment',
    schemaType: 'Service'
  },

  'industries/sports': {
    title: 'Sports & Fitness Marketing - Gyms, Teams & Brands | InchtoMilez',
    description: 'Sports marketing: Gym marketing, sports team promotion, fitness brand marketing, membership growth.',
    keywords: 'sports marketing, fitness marketing, gym marketing, sports team marketing, athletic marketing',
    canonical: '/industries/sports',
    schemaType: 'Service'
  },

  'industries/legal': {
    title: 'Legal Marketing - Law Firms & Attorney Services | InchtoMilez',
    description: 'Legal marketing: Law firm marketing, attorney marketing, legal services promotion, client acquisition.',
    keywords: 'legal marketing, law firm marketing, attorney marketing, lawyer marketing, legal services',
    canonical: '/industries/legal',
    schemaType: 'Service'
  },

  'industries/manufacturing': {
    title: 'Manufacturing Marketing - B2B Industrial Marketing | InchtoMilez',
    description: 'Manufacturing marketing: B2B industrial marketing, trade shows, lead generation, supplier marketing.',
    keywords: 'manufacturing marketing, industrial marketing, b2b manufacturing, factory marketing',
    canonical: '/industries/manufacturing',
    schemaType: 'Service'
  },

  'industries/non-profit': {
    title: 'Non-Profit Marketing - NGOs, Charities & Foundations | InchtoMilez',
    description: 'Non-profit marketing: NGO marketing, charity campaigns, fundraising marketing, donor acquisition.',
    keywords: 'nonprofit marketing, ngo marketing, charity marketing, fundraising marketing, donation campaigns',
    canonical: '/industries/non-profit',
    schemaType: 'Service'
  },

  'industries/pharmaceutical': {
    title: 'Pharmaceutical Marketing - Pharma & Medical Devices | InchtoMilez',
    description: 'Pharma marketing: Pharmaceutical marketing, medical device marketing, healthcare products, B2B pharma.',
    keywords: 'pharmaceutical marketing, pharma marketing, medical device marketing, healthcare products',
    canonical: '/industries/pharmaceutical',
    schemaType: 'Service'
  },

  'industries/construction': {
    title: 'Construction Marketing - Contractors & Builders | InchtoMilez',
    description: 'Construction marketing: Contractor marketing, builder marketing, real estate development, project marketing.',
    keywords: 'construction marketing, contractor marketing, builder marketing, construction company marketing',
    canonical: '/industries/construction',
    schemaType: 'Service'
  },

  'industries/agriculture': {
    title: 'Agriculture Marketing - Farming & Agritech | InchtoMilez',
    description: 'Agriculture marketing: Farming marketing, agritech marketing, agricultural products, food production.',
    keywords: 'agriculture marketing, farming marketing, agritech marketing, agricultural marketing',
    canonical: '/industries/agriculture',
    schemaType: 'Service'
  },

  'industries/logistics': {
    title: 'Logistics Marketing - Shipping, Freight & Warehousing | InchtoMilez',
    description: 'Logistics marketing: Shipping company marketing, freight marketing, warehousing, B2B logistics.',
    keywords: 'logistics marketing, shipping marketing, freight marketing, warehousing marketing, supply chain',
    canonical: '/industries/logistics',
    schemaType: 'Service'
  },

  'industries/beauty': {
    title: 'Beauty Marketing - Cosmetics, Skincare & Salons | InchtoMilez',
    description: 'Beauty marketing: Cosmetics marketing, skincare brands, salon marketing, beauty influencer campaigns.',
    keywords: 'beauty marketing, cosmetics marketing, skincare marketing, salon marketing, beauty brand marketing',
    canonical: '/industries/beauty',
    schemaType: 'Service'
  }
};

// Helper function to get metadata by page key
export function getPageMetadata(pageKey: string): PageMetadata {
  return PAGE_METADATA[pageKey] || PAGE_METADATA.home;
}
