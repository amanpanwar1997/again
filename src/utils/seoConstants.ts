// Global SEO Constants for InchtoMilez

export const SEO_CONSTANTS = {
  // Business Information
  siteName: 'Inchtomilez',
  siteUrl: 'https://www.inchtomilez.com',
  businessName: 'Inchtomilez Digital Marketing and Advertising Agency',
  
  // Location Information
  location: {
    address: 'Vijay Nagar, Indore',
    city: 'Indore',
    state: 'Madhya Pradesh',
    stateCode: 'MP',
    country: 'India',
    countryCode: 'IN',
    postalCode: '452010',
    coordinates: {
      latitude: 22.7534141,
      longitude: 75.8972057
    },
    region: 'IN-MP',
    placename: 'Indore'
  },

  // Contact Information
  contact: {
    phone: '+91-9669988666',
    phoneSecondary: '+91-9009970709',
    phoneDisplay: '9669988666, 9009970709',
    email: 'business@inchtomilez.com',
  },

  // Social Media
  social: {
    facebook: 'https://facebook.com/inchtomilez',
    instagram: 'https://instagram.com/inchtomilez',
    twitter: 'https://twitter.com/inchtomilez',
    linkedin: 'https://linkedin.com/company/inchtomilez',
    youtube: 'https://youtube.com/@inchtomilez'
  },

  // Default SEO Values
  defaultTitle: 'Inchtomilez - Digital Marketing and Advertising Agency in Indore',
  defaultDescription: 'Inchtomilez is a leading digital marketing and advertising agency in Indore. We build brands that speak louder than ads with digital marketing, branding, web development, and creative services.',
  defaultKeywords: 'marketing agency indore, advertising agency indore, digital marketing indore, branding agency, web development indore, social media marketing, SEO services indore',
  
  // Open Graph Defaults
  ogType: 'website',
  ogImage: 'https://www.inchtomilez.com/og-image.jpg', // Update with actual OG image
  ogImageWidth: '1200',
  ogImageHeight: '630',

  // Twitter Card Defaults
  twitterCard: 'summary_large_image',
  twitterSite: '@inchtomilez',
  twitterCreator: '@inchtomilez',

  // Author & Copyright
  author: 'Inchtomilez Team',
  copyright: `© ${new Date().getFullYear()} Inchtomilez. All rights reserved.`,

  // Theme Colors
  themeColor: '#000000',
  accentColor: '#eab308',

  // Business Hours (for schema)
  businessHours: [
    { day: 'Monday', hours: '09:00-18:00' },
    { day: 'Tuesday', hours: '09:00-18:00' },
    { day: 'Wednesday', hours: '09:00-18:00' },
    { day: 'Thursday', hours: '09:00-18:00' },
    { day: 'Friday', hours: '09:00-18:00' },
    { day: 'Saturday', hours: '09:00-14:00' },
    { day: 'Sunday', hours: 'Closed' }
  ]
};

export const SERVICE_CATEGORIES = {
  digital: ['Digital Marketing', 'Advertising', 'E-Commerce Marketing'],
  creative: ['Branding', 'Media Production', 'Animation', 'Graphic Designing'],
  offline: ['OOH Services', 'Print Media'],
  tech: ['Software Development', 'Application Development', 'Website Development'],
  strategy: ['Political Campaigns', 'Corporate Gifting', 'Influencer Marketing', 'Public Relations']
};

export const INDUSTRIES_SERVED = [
  'Healthcare', 'Education', 'Real Estate', 'E-Commerce', 'Technology',
  'Finance', 'Hospitality', 'Automotive', 'Fashion', 'Food & Beverage',
  'Entertainment', 'Sports', 'Legal', 'Manufacturing', 'Non-Profit',
  'Pharmaceutical', 'Construction', 'Agriculture', 'Logistics', 'Beauty'
];
