// Main Pages SEO Metadata - Home, About, Services, Let's Talk, Blogs, Industries

export interface PageSEOMetadata {
  title: string;
  h1: string;
  description: string;
  keywords: string;
  focusKeyword: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  schemaType: 'WebPage' | 'AboutPage' | 'ContactPage' | 'CollectionPage';
}

export const MAIN_PAGES_METADATA: Record<string, PageSEOMetadata> = {
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
  }
};
