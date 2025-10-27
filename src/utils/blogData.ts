// Helper function to generate SEO-friendly slugs from titles
export function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .replace(/'/g, '') // Remove apostrophes
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .trim()
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with single hyphen
}

// Author Data
export const AUTHORS = {
  aman: {
    name: 'Aman Verma',
    role: 'CEO & Digital Marketing Strategist',
    avatar: 'AV',
    bio: 'Digital marketing expert with 10+ years of experience in agency growth and brand development.'
  },
  rajesh: {
    name: 'Rajesh Kumar',
    role: 'Senior Digital Marketing Consultant',
    avatar: 'RK',
    bio: 'Specializes in digital transformation and marketing automation for businesses.'
  },
  priya: {
    name: 'Priya Sharma',
    role: 'SEO & Content Strategist',
    avatar: 'PS',
    bio: 'SEO expert helping businesses rank higher and drive organic traffic.'
  },
  neha: {
    name: 'Neha Patel',
    role: 'Content Marketing Lead',
    avatar: 'NP',
    bio: 'Passionate about crafting compelling content that converts and engages audiences.'
  },
  vikram: {
    name: 'Vikram Singh',
    role: 'Social Media Strategist',
    avatar: 'VS',
    bio: 'Creates viral social media campaigns and builds engaged online communities.'
  },
  anjali: {
    name: 'Anjali Gupta',
    role: 'PPC & Performance Marketing Expert',
    avatar: 'AG',
    bio: 'Data-driven marketer specializing in high-ROI paid advertising campaigns.'
  },
  rohit: {
    name: 'Rohit Mehta',
    role: 'Web Development & UX Lead',
    avatar: 'RM',
    bio: 'Full-stack developer focused on creating high-converting websites and apps.'
  },
  arjun: {
    name: 'Arjun Rao',
    role: 'Video Marketing Specialist',
    avatar: 'AR',
    bio: 'Creates engaging video content that drives brand awareness and conversions.'
  },
  sneha: {
    name: 'Sneha Desai',
    role: 'Brand Designer',
    avatar: 'SD',
    bio: 'Crafts memorable brand identities that resonate with target audiences.'
  },
  kavita: {
    name: 'Kavita Joshi',
    role: 'Email Marketing Strategist',
    avatar: 'KJ',
    bio: 'Builds automated email campaigns that nurture leads and drive sales.'
  }
};

export type Author = typeof AUTHORS[keyof typeof AUTHORS];

// Blog Topic Interface
export interface BlogTopic {
  id: string;
  slug?: string;
  title: string;
  category: string;
  author: Author;
  excerpt?: string;
  readTime?: string;
  publishedDate?: string;
  tags?: string[];
  featured?: boolean;
}

// Helper function to get blog slug (use provided slug or generate from title)
export function getBlogSlug(blog: BlogTopic): string {
  return blog.slug || generateSlug(blog.title);
}

// All 100 Blog Topics with Metadata
export const ALL_100_BLOG_TOPICS: BlogTopic[] = [
  // A. General Digital Marketing (15)
  { 
    id: 'dm-001',
    slug: 'what-is-digital-marketing-and-how-it-works-for-small-businesses-in-india',
    title: 'What Is Digital Marketing and How It Works for Small Businesses in India', 
    category: 'Digital Marketing', 
    author: AUTHORS.aman,
    excerpt: 'Comprehensive guide to understanding digital marketing and its impact on small businesses across India.',
    readTime: '8 min read',
    publishedDate: 'Oct 20, 2025',
    tags: ['Digital Marketing', 'Small Business', 'India'],
    featured: true
  },
  { 
    id: 'dm-002',
    slug: 'top-digital-marketing-strategies-to-grow-your-business-in-2025',
    title: 'Top Digital Marketing Strategies to Grow Your Business in 2025', 
    category: 'Digital Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Discover the most effective digital marketing strategies that will help your business thrive in 2025.',
    readTime: '10 min read',
    publishedDate: 'Oct 18, 2025',
    tags: ['Strategy', 'Growth', '2025'],
    featured: true
  },
  { 
    id: 'dm-003',
    title: 'Why Every Business in Indore Needs a Digital Marketing Agency', 
    category: 'Digital Marketing', 
    author: AUTHORS.aman,
    excerpt: 'Learn why partnering with a local digital marketing agency is crucial for business success in Indore.',
    readTime: '6 min read',
    publishedDate: 'Oct 15, 2025',
    tags: ['Indore', 'Agency', 'Local Business']
  },
  { 
    id: 'dm-004', 
    title: 'Traditional Marketing vs Digital Marketing - Which Works Better in 2025?', 
    category: 'Digital Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'A detailed comparison of traditional and digital marketing methods and their effectiveness.',
    readTime: '9 min read',
    publishedDate: 'Oct 12, 2025',
    tags: ['Comparison', 'Traditional Marketing', 'ROI']
  },
  { 
    id: 'dm-005', 
    title: 'Top 10 Benefits of Hiring a Digital Marketing Agency in Indore', 
    category: 'Digital Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Explore the key advantages of working with a professional digital marketing agency.',
    readTime: '7 min read',
    publishedDate: 'Oct 10, 2025',
    tags: ['Agency Benefits', 'Indore', 'Outsourcing']
  },
  { 
    id: 'dm-006', 
    title: 'How to Build a Powerful Online Brand Presence in India', 
    category: 'Digital Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Step-by-step guide to establishing a strong and memorable online brand presence.',
    readTime: '11 min read',
    publishedDate: 'Oct 8, 2025',
    tags: ['Branding', 'Online Presence', 'India']
  },
  { 
    id: 'dm-007', 
    title: 'Why Local SEO Matters for Small Businesses in Tier-2 Cities', 
    category: 'Local Marketing', 
    author: AUTHORS.priya,
    excerpt: 'Understand the importance of local SEO for businesses in tier-2 cities like Indore.',
    readTime: '8 min read',
    publishedDate: 'Oct 5, 2025',
    tags: ['Local SEO', 'Tier-2 Cities', 'Small Business'],
    featured: true
  },
  { 
    id: 'dm-008', 
    title: 'How to Choose the Right Digital Marketing Agency in India', 
    category: 'Digital Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Essential criteria and questions to ask when selecting a digital marketing partner.',
    readTime: '9 min read',
    publishedDate: 'Oct 3, 2025',
    tags: ['Agency Selection', 'Guide', 'India']
  },
  { 
    id: 'dm-009', 
    title: 'Common Digital Marketing Mistakes Businesses Make and How to Avoid Them', 
    category: 'Digital Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Identify and avoid the most common pitfalls in digital marketing campaigns.',
    readTime: '10 min read',
    publishedDate: 'Oct 1, 2025',
    tags: ['Mistakes', 'Best Practices', 'Tips']
  },
  { 
    id: 'dm-010', 
    title: 'Role of Digital Marketing in Startup Growth in India', 
    category: 'Business Growth', 
    author: AUTHORS.aman,
    excerpt: 'How startups can leverage digital marketing for rapid growth and market penetration.',
    readTime: '8 min read',
    publishedDate: 'Sep 28, 2025',
    tags: ['Startups', 'Growth', 'India']
  },
  { 
    id: 'dm-011', 
    title: 'How Digital Marketing Is Changing the Advertising Industry', 
    category: 'Digital Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Explore the transformative impact of digital marketing on traditional advertising.',
    readTime: '7 min read',
    publishedDate: 'Sep 25, 2025',
    tags: ['Industry Trends', 'Advertising', 'Digital Transformation']
  },
  { 
    id: 'dm-012', 
    title: 'Importance of Data Analytics in Digital Campaigns', 
    category: 'Analytics & Strategy', 
    author: AUTHORS.anjali,
    excerpt: 'Learn how data analytics drives smarter decisions and better campaign performance.',
    readTime: '9 min read',
    publishedDate: 'Sep 22, 2025',
    tags: ['Analytics', 'Data', 'ROI']
  },
  { 
    id: 'dm-013', 
    title: 'Top Digital Marketing Trends to Watch in 2025', 
    category: 'Digital Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Stay ahead with the latest digital marketing trends shaping the industry.',
    readTime: '10 min read',
    publishedDate: 'Sep 20, 2025',
    tags: ['Trends', '2025', 'Innovation'],
    featured: true
  },
  { 
    id: 'dm-014', 
    title: 'Cost Breakdown: How Much Does Digital Marketing Cost in India?', 
    category: 'Digital Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Detailed pricing guide for various digital marketing services in India.',
    readTime: '8 min read',
    publishedDate: 'Sep 18, 2025',
    tags: ['Pricing', 'Budget', 'India']
  },
  { 
    id: 'dm-015', 
    title: 'The Future of AI in Digital Marketing', 
    category: 'Digital Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Discover how AI is revolutionizing digital marketing strategies and execution.',
    readTime: '11 min read',
    publishedDate: 'Sep 15, 2025',
    tags: ['AI', 'Automation', 'Future']
  },

  // B. SEO (10)
  { 
    id: 'seo-001', 
    title: 'SEO for Local Businesses in Indore: A Complete Guide', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'Master local SEO strategies to dominate search results in Indore.',
    readTime: '12 min read',
    publishedDate: 'Sep 12, 2025',
    tags: ['Local SEO', 'Indore', 'Guide']
  },
  { 
    id: 'seo-002', 
    title: 'How to Rank Your Website #1 on Google in 2025', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'Proven strategies to achieve and maintain top Google rankings.',
    readTime: '14 min read',
    publishedDate: 'Sep 10, 2025',
    tags: ['SEO', 'Google', 'Rankings'],
    featured: true
  },
  { 
    id: 'seo-003', 
    title: 'On-Page vs Off-Page SEO - What is the Difference?', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'Understand the key differences and how to balance both for optimal results.',
    readTime: '8 min read',
    publishedDate: 'Sep 8, 2025',
    tags: ['On-Page SEO', 'Off-Page SEO', 'Basics']
  },
  { 
    id: 'seo-004', 
    title: 'Common SEO Myths That Are Hurting Your Website Ranking', 
    category: 'SEO', 
    author: AUTHORS.rajesh,
    excerpt: 'Debunk popular SEO myths and learn what actually works.',
    readTime: '9 min read',
    publishedDate: 'Sep 5, 2025',
    tags: ['SEO Myths', 'Best Practices', 'Rankings']
  },
  { 
    id: 'seo-005', 
    title: 'Top 10 SEO Tools Every Marketer Should Use in 2025', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'Essential SEO tools to streamline your optimization efforts.',
    readTime: '10 min read',
    publishedDate: 'Sep 3, 2025',
    tags: ['SEO Tools', 'Software', 'Productivity']
  },
  { 
    id: 'seo-006', 
    title: 'How Long Does It Take to See Results from SEO?', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'Realistic timeline and expectations for SEO campaign success.',
    readTime: '7 min read',
    publishedDate: 'Sep 1, 2025',
    tags: ['SEO Timeline', 'Expectations', 'Results']
  },
  { 
    id: 'seo-007', 
    title: 'Technical SEO Checklist for Indian Businesses', 
    category: 'SEO', 
    author: AUTHORS.rohit,
    excerpt: 'Comprehensive technical SEO audit checklist for optimal website performance.',
    readTime: '13 min read',
    publishedDate: 'Aug 28, 2025',
    tags: ['Technical SEO', 'Checklist', 'Website']
  },
  { 
    id: 'seo-008', 
    title: 'Local SEO Strategies for Clinics, Salons, and Service Businesses', 
    category: 'Local Marketing', 
    author: AUTHORS.priya,
    excerpt: 'Specialized local SEO tactics for service-based businesses.',
    readTime: '11 min read',
    publishedDate: 'Aug 25, 2025',
    tags: ['Local SEO', 'Service Business', 'Healthcare']
  },
  { 
    id: 'seo-009', 
    title: 'Voice Search Optimization: The Future of SEO in India', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'Prepare your website for the voice search revolution.',
    readTime: '9 min read',
    publishedDate: 'Aug 22, 2025',
    tags: ['Voice Search', 'Future', 'Optimization']
  },
  { 
    id: 'seo-010', 
    title: 'Why Link Building Still Matters in 2025', 
    category: 'SEO', 
    author: AUTHORS.priya,
    excerpt: 'The continued importance of quality backlinks in modern SEO.',
    readTime: '8 min read',
    publishedDate: 'Aug 20, 2025',
    tags: ['Link Building', 'Backlinks', 'Authority']
  },

  // C. Social Media Marketing (10)
  { 
    id: 'smm-001', 
    title: 'How to Grow Your Brand Organically on Instagram', 
    category: 'Social Media Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Proven organic growth strategies for Instagram success.',
    readTime: '10 min read',
    publishedDate: 'Aug 18, 2025',
    tags: ['Instagram', 'Organic Growth', 'Social Media']
  },
  { 
    id: 'smm-002', 
    title: 'Best Social Media Platforms for Businesses in India', 
    category: 'Social Media Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Compare and choose the right social platforms for your business.',
    readTime: '9 min read',
    publishedDate: 'Aug 15, 2025',
    tags: ['Platform Selection', 'India', 'Strategy']
  },
  { 
    id: 'smm-003', 
    title: 'How to Create Viral Reels and Short Videos for Your Brand', 
    category: 'Social Media Marketing', 
    author: AUTHORS.arjun,
    excerpt: 'Master the art of creating engaging short-form video content.',
    readTime: '8 min read',
    publishedDate: 'Aug 12, 2025',
    tags: ['Reels', 'Video', 'Viral Content'],
    featured: true
  },
  { 
    id: 'smm-004', 
    title: 'Facebook Ads vs Instagram Ads: Which Works Better in 2025?', 
    category: 'Social Media Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'Detailed comparison of Facebook and Instagram advertising platforms.',
    readTime: '10 min read',
    publishedDate: 'Aug 10, 2025',
    tags: ['Facebook Ads', 'Instagram Ads', 'Comparison']
  },
  { 
    id: 'smm-005', 
    title: 'Top 5 Social Media Marketing Strategies for Local Businesses', 
    category: 'Social Media Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Effective social media tactics tailored for local businesses.',
    readTime: '9 min read',
    publishedDate: 'Aug 8, 2025',
    tags: ['Local Business', 'Strategy', 'Social Media']
  },
  { 
    id: 'smm-006', 
    title: 'How to Build a Strong Social Media Presence in Indore', 
    category: 'Social Media Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Localized social media strategies for Indore-based businesses.',
    readTime: '8 min read',
    publishedDate: 'Aug 5, 2025',
    tags: ['Indore', 'Local Marketing', 'Presence']
  },
  { 
    id: 'smm-007', 
    title: 'The Role of Influencer Marketing in Brand Awareness', 
    category: 'Social Media Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Leverage influencer partnerships for maximum brand visibility.',
    readTime: '10 min read',
    publishedDate: 'Aug 3, 2025',
    tags: ['Influencer Marketing', 'Brand Awareness', 'Partnerships']
  },
  { 
    id: 'smm-008', 
    title: 'Social Media Content Calendar Ideas for Indian Businesses', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Plan and organize your social media content for consistent engagement.',
    readTime: '11 min read',
    publishedDate: 'Aug 1, 2025',
    tags: ['Content Calendar', 'Planning', 'Organization']
  },
  { 
    id: 'smm-009', 
    title: 'How to Run Cost-Effective Social Media Campaigns', 
    category: 'Social Media Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'Maximize ROI with budget-friendly social media advertising.',
    readTime: '9 min read',
    publishedDate: 'Jul 28, 2025',
    tags: ['Budget', 'ROI', 'Campaigns']
  },
  { 
    id: 'smm-010', 
    title: 'Importance of Community Engagement in SMM', 
    category: 'Social Media Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Build loyal communities through authentic engagement strategies.',
    readTime: '8 min read',
    publishedDate: 'Jul 25, 2025',
    tags: ['Community', 'Engagement', 'Loyalty']
  },

  // D. Google Ads & Paid Advertising (10)
  { 
    id: 'ppc-001', 
    title: 'Google Ads vs Facebook Ads - Which Gives Better ROI?', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.anjali,
    excerpt: 'Compare ROI and performance between Google and Facebook advertising.',
    readTime: '11 min read',
    publishedDate: 'Jul 22, 2025',
    tags: ['Google Ads', 'Facebook Ads', 'ROI']
  },
  { 
    id: 'ppc-002', 
    title: 'How to Create a Successful Google Ads Campaign in 2025', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.anjali,
    excerpt: 'Step-by-step guide to launching high-performing Google Ads campaigns.',
    readTime: '13 min read',
    publishedDate: 'Jul 20, 2025',
    tags: ['Google Ads', 'Campaign', 'Guide'],
    featured: true
  },
  { 
    id: 'ppc-003', 
    title: 'Top PPC Mistakes That Drain Your Advertising Budget', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.anjali,
    excerpt: 'Avoid costly PPC mistakes and optimize your ad spend.',
    readTime: '9 min read',
    publishedDate: 'Jul 18, 2025',
    tags: ['PPC Mistakes', 'Budget', 'Optimization']
  },
  { 
    id: 'ppc-004', 
    title: 'Remarketing Campaigns: What They Are and Why You Need Them', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.anjali,
    excerpt: 'Master remarketing to convert interested visitors into customers.',
    readTime: '10 min read',
    publishedDate: 'Jul 15, 2025',
    tags: ['Remarketing', 'Retargeting', 'Conversion']
  },
  { 
    id: 'ppc-005', 
    title: 'How to Improve Google Ads Quality Score for Better Results', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.anjali,
    excerpt: 'Boost your Quality Score to reduce costs and improve ad performance.',
    readTime: '11 min read',
    publishedDate: 'Jul 12, 2025',
    tags: ['Quality Score', 'Google Ads', 'Optimization']
  },
  { 
    id: 'ppc-006', 
    title: 'Best Ad Copywriting Tips for Higher Conversions', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.neha,
    excerpt: 'Craft compelling ad copy that drives clicks and conversions.',
    readTime: '8 min read',
    publishedDate: 'Jul 10, 2025',
    tags: ['Copywriting', 'Ad Copy', 'Conversions']
  },
  { 
    id: 'ppc-007', 
    title: 'Understanding CPC, CPM, and CPA in Digital Advertising', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.anjali,
    excerpt: 'Demystify key advertising metrics and pricing models.',
    readTime: '9 min read',
    publishedDate: 'Jul 8, 2025',
    tags: ['Metrics', 'CPC', 'CPM', 'CPA']
  },
  { 
    id: 'ppc-008', 
    title: 'Why Local Businesses Should Invest in Paid Ads', 
    category: 'PPC & Paid Advertising', 
    author: AUTHORS.rajesh,
    excerpt: 'The case for paid advertising in local business growth.',
    readTime: '8 min read',
    publishedDate: 'Jul 5, 2025',
    tags: ['Local Business', 'Paid Ads', 'Investment']
  },
  { 
    id: 'ppc-009', 
    title: 'How to Use Google Ads for E-commerce Growth', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'E-commerce specific Google Ads strategies for maximum sales.',
    readTime: '12 min read',
    publishedDate: 'Jul 3, 2025',
    tags: ['E-commerce', 'Google Ads', 'Sales']
  },
  { 
    id: 'ppc-010', 
    title: 'How to Track ROI from Your PPC Campaigns', 
    category: 'Analytics & Strategy', 
    author: AUTHORS.anjali,
    excerpt: 'Measure and optimize your PPC campaign performance effectively.',
    readTime: '10 min read',
    publishedDate: 'Jul 1, 2025',
    tags: ['ROI', 'Tracking', 'Analytics']
  },

  // E. Branding & Design (10)
  { 
    id: 'brand-001', 
    title: 'How to Build a Strong Brand Identity in 2025', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.sneha,
    excerpt: 'Create a memorable brand identity that stands out in the market.',
    readTime: '11 min read',
    publishedDate: 'Jun 28, 2025',
    tags: ['Brand Identity', 'Branding', 'Design']
  },
  { 
    id: 'brand-002', 
    title: 'Why Logo Design Matters for Brand Recall', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.sneha,
    excerpt: 'The psychology and importance of effective logo design.',
    readTime: '8 min read',
    publishedDate: 'Jun 25, 2025',
    tags: ['Logo Design', 'Brand Recall', 'Visual Identity']
  },
  { 
    id: 'brand-003', 
    title: 'How to Create a Consistent Brand Voice Online', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.neha,
    excerpt: 'Develop and maintain a consistent brand voice across all channels.',
    readTime: '9 min read',
    publishedDate: 'Jun 22, 2025',
    tags: ['Brand Voice', 'Consistency', 'Communication']
  },
  { 
    id: 'brand-004', 
    title: 'The Psychology Behind Colors in Branding', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.sneha,
    excerpt: 'Understand how color choices influence brand perception.',
    readTime: '10 min read',
    publishedDate: 'Jun 20, 2025',
    tags: ['Color Psychology', 'Branding', 'Design']
  },
  { 
    id: 'brand-005', 
    title: 'How Good Branding Increases Customer Trust', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.aman,
    excerpt: 'Build customer trust through strategic branding initiatives.',
    readTime: '9 min read',
    publishedDate: 'Jun 18, 2025',
    tags: ['Trust', 'Branding', 'Customer Loyalty']
  },
  { 
    id: 'brand-006', 
    title: 'Importance of Rebranding for Evolving Businesses', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.sneha,
    excerpt: 'When and how to successfully rebrand your business.',
    readTime: '10 min read',
    publishedDate: 'Jun 15, 2025',
    tags: ['Rebranding', 'Evolution', 'Strategy']
  },
  { 
    id: 'brand-007', 
    title: 'Brand Storytelling: Turning Your Brand into a Narrative', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Craft compelling brand stories that resonate with your audience.',
    readTime: '11 min read',
    publishedDate: 'Jun 12, 2025',
    tags: ['Storytelling', 'Brand Narrative', 'Content']
  },
  { 
    id: 'brand-008', 
    title: 'How to Build Personal Branding as a Business Owner', 
    category: 'Business Growth', 
    author: AUTHORS.aman,
    excerpt: 'Establish yourself as an authority through personal branding.',
    readTime: '10 min read',
    publishedDate: 'Jun 10, 2025',
    tags: ['Personal Branding', 'Leadership', 'Authority']
  },
  { 
    id: 'brand-009', 
    title: 'How Website Design Impacts Brand Perception', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'The critical role of web design in shaping brand perception.',
    readTime: '9 min read',
    publishedDate: 'Jun 8, 2025',
    tags: ['Web Design', 'Brand Perception', 'UX']
  },
  { 
    id: 'brand-010', 
    title: 'Common Branding Mistakes to Avoid in 2025', 
    category: 'Graphic Design & Branding', 
    author: AUTHORS.sneha,
    excerpt: 'Avoid these critical branding mistakes that hurt your business.',
    readTime: '9 min read',
    publishedDate: 'Jun 5, 2025',
    tags: ['Branding Mistakes', 'Best Practices', 'Tips']
  },

  // F. Website Design & Development (10)
  { 
    id: 'web-001', 
    title: 'Why Responsive Web Design Is Crucial in 2025', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'The importance of mobile-responsive design in modern web development.',
    readTime: '8 min read',
    publishedDate: 'Jun 3, 2025',
    tags: ['Responsive Design', 'Mobile', 'UX']
  },
  { 
    id: 'web-002', 
    title: 'Top 10 Web Design Trends for Indian Businesses', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'Latest web design trends shaping the Indian digital landscape.',
    readTime: '11 min read',
    publishedDate: 'Jun 1, 2025',
    tags: ['Design Trends', 'India', 'Web Design']
  },
  { 
    id: 'web-003', 
    title: 'How Website Speed Affects SEO and Conversions', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'Optimize website speed for better rankings and user experience.',
    readTime: '10 min read',
    publishedDate: 'May 28, 2025',
    tags: ['Website Speed', 'SEO', 'Conversions']
  },
  { 
    id: 'web-004', 
    title: 'Common Website Design Mistakes That Kill Leads', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'Identify and fix website design flaws that hurt conversions.',
    readTime: '9 min read',
    publishedDate: 'May 25, 2025',
    tags: ['Design Mistakes', 'Conversions', 'UX']
  },
  { 
    id: 'web-005', 
    title: 'Why Your Business Website Needs a Blog Section', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'The strategic benefits of adding a blog to your business website.',
    readTime: '8 min read',
    publishedDate: 'May 22, 2025',
    tags: ['Blogging', 'Content', 'SEO']
  },
  { 
    id: 'web-006', 
    title: 'Benefits of Using WordPress for Business Websites', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'Why WordPress remains the top choice for business websites.',
    readTime: '9 min read',
    publishedDate: 'May 20, 2025',
    tags: ['WordPress', 'CMS', 'Business']
  },
  { 
    id: 'web-007', 
    title: 'Landing Pages That Convert: A Complete Guide', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'Design high-converting landing pages that drive results.',
    readTime: '12 min read',
    publishedDate: 'May 18, 2025',
    tags: ['Landing Pages', 'Conversion', 'Design'],
    featured: true
  },
  { 
    id: 'web-008', 
    title: 'How to Design a Website That Builds Trust', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'Design elements that create credibility and trust with visitors.',
    readTime: '10 min read',
    publishedDate: 'May 15, 2025',
    tags: ['Trust', 'Credibility', 'Web Design']
  },
  { 
    id: 'web-009', 
    title: 'How to Improve Website UX for Better Engagement', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'UX best practices for creating engaging website experiences.',
    readTime: '11 min read',
    publishedDate: 'May 12, 2025',
    tags: ['UX', 'Engagement', 'User Experience']
  },
  { 
    id: 'web-010', 
    title: 'Why Every Business Needs a Mobile-Friendly Website', 
    category: 'Web Design & Development', 
    author: AUTHORS.rohit,
    excerpt: 'The critical importance of mobile optimization for business success.',
    readTime: '8 min read',
    publishedDate: 'May 10, 2025',
    tags: ['Mobile', 'Responsive', 'Business']
  },

  // G. Content Marketing (10)
  { 
    id: 'content-001', 
    title: 'How to Create High-Quality Content That Converts', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Master the art of creating content that drives conversions.',
    readTime: '11 min read',
    publishedDate: 'May 8, 2025',
    tags: ['Content Creation', 'Conversions', 'Quality']
  },
  { 
    id: 'content-002', 
    title: 'Importance of Blogging for SEO and Brand Awareness', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'How consistent blogging boosts SEO and builds brand authority.',
    readTime: '10 min read',
    publishedDate: 'May 5, 2025',
    tags: ['Blogging', 'SEO', 'Brand Awareness']
  },
  { 
    id: 'content-003', 
    title: 'How to Do Keyword Research for Blog Topics', 
    category: 'Content Marketing', 
    author: AUTHORS.priya,
    excerpt: 'Find the right keywords to drive targeted traffic to your blog.',
    readTime: '12 min read',
    publishedDate: 'May 3, 2025',
    tags: ['Keyword Research', 'SEO', 'Content Strategy']
  },
  { 
    id: 'content-004', 
    title: 'Why Video Content Is the Future of Marketing', 
    category: 'Video Marketing', 
    author: AUTHORS.arjun,
    excerpt: 'The rise of video marketing and how to leverage it effectively.',
    readTime: '10 min read',
    publishedDate: 'May 1, 2025',
    tags: ['Video Marketing', 'Future', 'Content']
  },
  { 
    id: 'content-005', 
    title: 'Storytelling Techniques for Business Content', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Use storytelling to make your business content more engaging.',
    readTime: '9 min read',
    publishedDate: 'Apr 28, 2025',
    tags: ['Storytelling', 'Content', 'Engagement']
  },
  { 
    id: 'content-006', 
    title: 'How to Repurpose Old Content for More Reach', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Maximize content ROI by repurposing existing assets.',
    readTime: '8 min read',
    publishedDate: 'Apr 25, 2025',
    tags: ['Content Repurposing', 'ROI', 'Strategy']
  },
  { 
    id: 'content-007', 
    title: 'The Role of Copywriting in Digital Marketing', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Master persuasive copywriting for better marketing results.',
    readTime: '10 min read',
    publishedDate: 'Apr 22, 2025',
    tags: ['Copywriting', 'Marketing', 'Persuasion']
  },
  { 
    id: 'content-008', 
    title: 'How to Create Content for Each Stage of the Buyer\'s Journey', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Tailor content to guide prospects through the buying process.',
    readTime: '13 min read',
    publishedDate: 'Apr 20, 2025',
    tags: ['Buyer Journey', 'Content Strategy', 'Sales Funnel']
  },
  { 
    id: 'content-009', 
    title: 'Content Marketing vs Advertising - What is the Difference?', 
    category: 'Content Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Understand the key differences and when to use each approach.',
    readTime: '9 min read',
    publishedDate: 'Apr 18, 2025',
    tags: ['Content Marketing', 'Advertising', 'Strategy']
  },
  { 
    id: 'content-010', 
    title: 'Best Tools for Content Creation and Optimization', 
    category: 'Content Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Essential tools to streamline your content creation workflow.',
    readTime: '11 min read',
    publishedDate: 'Apr 15, 2025',
    tags: ['Content Tools', 'Productivity', 'Optimization']
  },

  // H. E-commerce & Performance Marketing (10)
  { 
    id: 'ecom-001', 
    title: 'How to Scale E-commerce Sales Using Digital Ads', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'Proven paid advertising strategies for e-commerce growth.',
    readTime: '12 min read',
    publishedDate: 'Apr 12, 2025',
    tags: ['E-commerce', 'Digital Ads', 'Sales']
  },
  { 
    id: 'ecom-002', 
    title: 'Conversion Rate Optimization Tips for Online Stores', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.rohit,
    excerpt: 'Optimize your online store for maximum conversions.',
    readTime: '11 min read',
    publishedDate: 'Apr 10, 2025',
    tags: ['CRO', 'E-commerce', 'Conversions']
  },
  { 
    id: 'ecom-003', 
    title: 'Best Digital Marketing Strategies for Shopify Stores', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Shopify-specific marketing tactics for online success.',
    readTime: '10 min read',
    publishedDate: 'Apr 8, 2025',
    tags: ['Shopify', 'E-commerce', 'Strategy']
  },
  { 
    id: 'ecom-004', 
    title: 'How to Retarget Abandoned Carts with Ads', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'Recover lost sales with effective cart abandonment campaigns.',
    readTime: '9 min read',
    publishedDate: 'Apr 5, 2025',
    tags: ['Cart Abandonment', 'Retargeting', 'E-commerce']
  },
  { 
    id: 'ecom-005', 
    title: 'Email Marketing Automation for E-commerce', 
    category: 'Email Marketing', 
    author: AUTHORS.kavita,
    excerpt: 'Automate email campaigns to drive repeat purchases.',
    readTime: '11 min read',
    publishedDate: 'Apr 3, 2025',
    tags: ['Email Marketing', 'Automation', 'E-commerce']
  },
  { 
    id: 'ecom-006', 
    title: 'How to Use WhatsApp Marketing for E-commerce Growth', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Leverage WhatsApp for customer engagement and sales.',
    readTime: '10 min read',
    publishedDate: 'Apr 1, 2025',
    tags: ['WhatsApp Marketing', 'E-commerce', 'Messaging']
  },
  { 
    id: 'ecom-007', 
    title: 'Top Mistakes Online Stores Make in Performance Marketing', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'Avoid common performance marketing pitfalls in e-commerce.',
    readTime: '10 min read',
    publishedDate: 'Mar 28, 2025',
    tags: ['Performance Marketing', 'Mistakes', 'E-commerce']
  },
  { 
    id: 'ecom-008', 
    title: 'Role of Influencer Marketing in E-commerce', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Use influencer partnerships to boost e-commerce sales.',
    readTime: '9 min read',
    publishedDate: 'Mar 25, 2025',
    tags: ['Influencer Marketing', 'E-commerce', 'Sales']
  },
  { 
    id: 'ecom-009', 
    title: 'How to Optimize Product Pages for Higher Sales', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.rohit,
    excerpt: 'Product page optimization best practices for conversions.',
    readTime: '11 min read',
    publishedDate: 'Mar 22, 2025',
    tags: ['Product Pages', 'Optimization', 'Sales']
  },
  { 
    id: 'ecom-010', 
    title: 'Data-Driven E-commerce Marketing in 2025', 
    category: 'E-Commerce Marketing', 
    author: AUTHORS.anjali,
    excerpt: 'Use data analytics to make smarter e-commerce decisions.',
    readTime: '12 min read',
    publishedDate: 'Mar 20, 2025',
    tags: ['Data-Driven', 'Analytics', 'E-commerce']
  },

  // I. Agency Insights & Case Studies (10)
  { 
    id: 'agency-001', 
    title: 'Behind the Scenes: How a Digital Marketing Agency Works', 
    category: 'Business Growth', 
    author: AUTHORS.aman,
    excerpt: 'Peek inside the operations of a successful digital agency.',
    readTime: '10 min read',
    publishedDate: 'Mar 18, 2025',
    tags: ['Agency', 'Operations', 'Behind the Scenes']
  },
  { 
    id: 'agency-002', 
    title: 'Case Study: How We Helped a Local Business 5x Its Leads', 
    category: 'Business Growth', 
    author: AUTHORS.aman,
    excerpt: 'Real results from a local business transformation campaign.',
    readTime: '8 min read',
    publishedDate: 'Mar 15, 2025',
    tags: ['Case Study', 'Results', 'Lead Generation'],
    featured: true
  },
  { 
    id: 'agency-003', 
    title: 'Why Transparent Reporting Matters in Digital Marketing', 
    category: 'Business Growth', 
    author: AUTHORS.rajesh,
    excerpt: 'The importance of clear communication and reporting.',
    readTime: '9 min read',
    publishedDate: 'Mar 12, 2025',
    tags: ['Reporting', 'Transparency', 'Communication']
  },
  { 
    id: 'agency-004', 
    title: 'How Agencies in Indore Compete with Metro City Firms', 
    category: 'Digital Marketing', 
    author: AUTHORS.aman,
    excerpt: 'Competitive advantages of tier-2 city digital agencies.',
    readTime: '10 min read',
    publishedDate: 'Mar 10, 2025',
    tags: ['Indore', 'Competition', 'Tier-2 Cities']
  },
  { 
    id: 'agency-005', 
    title: 'Benefits of Hiring a Full-Service Digital Marketing Agency', 
    category: 'Digital Marketing', 
    author: AUTHORS.aman,
    excerpt: 'Why all-in-one agencies deliver better results.',
    readTime: '9 min read',
    publishedDate: 'Mar 8, 2025',
    tags: ['Full-Service', 'Agency Benefits', 'ROI']
  },
  { 
    id: 'agency-006', 
    title: 'Common Challenges Digital Agencies Face in India', 
    category: 'Business Growth', 
    author: AUTHORS.rajesh,
    excerpt: 'Navigate the unique challenges of the Indian market.',
    readTime: '10 min read',
    publishedDate: 'Mar 5, 2025',
    tags: ['Challenges', 'India', 'Agency']
  },
  { 
    id: 'agency-007', 
    title: 'How We Measure Success in Digital Campaigns', 
    category: 'Analytics & Strategy', 
    author: AUTHORS.anjali,
    excerpt: 'Key metrics and KPIs we track for client success.',
    readTime: '11 min read',
    publishedDate: 'Mar 3, 2025',
    tags: ['Metrics', 'Success', 'KPIs']
  },
  { 
    id: 'agency-008', 
    title: 'Key Performance Indicators Every Client Should Know', 
    category: 'Analytics & Strategy', 
    author: AUTHORS.anjali,
    excerpt: 'Essential KPIs to track your marketing performance.',
    readTime: '10 min read',
    publishedDate: 'Mar 1, 2025',
    tags: ['KPIs', 'Analytics', 'Performance']
  },
  { 
    id: 'agency-009', 
    title: 'How Digital Agencies Are Using AI Tools for Optimization', 
    category: 'Digital Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'AI-powered tools transforming agency workflows.',
    readTime: '11 min read',
    publishedDate: 'Feb 25, 2025',
    tags: ['AI', 'Automation', 'Optimization']
  },
  { 
    id: 'agency-010', 
    title: 'The Evolution of Advertising Agencies in India', 
    category: 'Business Growth', 
    author: AUTHORS.aman,
    excerpt: 'How advertising agencies have adapted to the digital age.',
    readTime: '12 min read',
    publishedDate: 'Feb 22, 2025',
    tags: ['Evolution', 'History', 'India']
  },

  // J. Local & Industry-Specific (5)
  { 
    id: 'local-001', 
    title: 'Top Digital Marketing Companies in Indore (2025 Update)', 
    category: 'Local Marketing', 
    author: AUTHORS.aman,
    excerpt: 'Comprehensive guide to Indore\'s leading digital agencies.',
    readTime: '9 min read',
    publishedDate: 'Feb 20, 2025',
    tags: ['Indore', 'Agencies', 'Directory']
  },
  { 
    id: 'local-002', 
    title: 'How Digital Marketing Helps Local Restaurants in Indore', 
    category: 'Industry-Specific Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Digital strategies tailored for restaurant businesses.',
    readTime: '10 min read',
    publishedDate: 'Feb 18, 2025',
    tags: ['Restaurants', 'Local Business', 'Food Industry']
  },
  { 
    id: 'local-003', 
    title: 'Real Estate Digital Marketing Trends in India', 
    category: 'Industry-Specific Marketing', 
    author: AUTHORS.rajesh,
    excerpt: 'Marketing strategies for real estate professionals.',
    readTime: '11 min read',
    publishedDate: 'Feb 15, 2025',
    tags: ['Real Estate', 'Property', 'India']
  },
  { 
    id: 'local-004', 
    title: 'Healthcare Digital Marketing Strategies for Clinics', 
    category: 'Industry-Specific Marketing', 
    author: AUTHORS.neha,
    excerpt: 'Compliant and effective marketing for healthcare providers.',
    readTime: '12 min read',
    publishedDate: 'Feb 12, 2025',
    tags: ['Healthcare', 'Clinics', 'Medical Marketing']
  },
  { 
    id: 'local-005', 
    title: 'How Educational Institutions in Indore Can Use Digital Marketing', 
    category: 'Industry-Specific Marketing', 
    author: AUTHORS.vikram,
    excerpt: 'Digital marketing strategies for schools and colleges.',
    readTime: '10 min read',
    publishedDate: 'Feb 10, 2025',
    tags: ['Education', 'Schools', 'Indore']
  }
];

// Get unique categories
export const BLOG_CATEGORIES = Array.from(
  new Set(ALL_100_BLOG_TOPICS.map(blog => blog.category))
).sort();

// Get featured blogs
export const FEATURED_BLOGS = ALL_100_BLOG_TOPICS.filter(blog => blog.featured);

// Get recent blogs (first 6)
export const RECENT_BLOGS = ALL_100_BLOG_TOPICS.slice(0, 6);
