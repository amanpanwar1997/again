// Blog SEO Metadata - Dynamic metadata for all 100 blog posts

import { BlogTopic, getBlogSlug } from './blogData';

export interface BlogSEOMetadata {
  title: string;
  h1: string;
  description: string;
  keywords: string;
  focusKeyword: string;
  canonical: string;
  ogTitle: string;
  ogDescription: string;
  author: string;
  publishedDate: string;
  modifiedDate: string;
}

/**
 * Generate SEO metadata for a blog post
 * @param blog - Blog topic object
 * @returns Complete SEO metadata for the blog post
 */
export function generateBlogSEOMetadata(blog: BlogTopic): BlogSEOMetadata {
  const slug = getBlogSlug(blog);
  const cleanTitle = blog.title.replace(/[?!:]/g, '').trim();
  
  // Generate focus keyword from title (first 2-3 meaningful words)
  const titleWords = cleanTitle.toLowerCase().split(' ');
  const focusKeyword = titleWords.slice(0, Math.min(3, titleWords.length)).join(' ');
  
  // Generate keywords
  const categoryKeywords = getCategoryKeywords(blog.category);
  const keywords = `${focusKeyword}, ${blog.category.toLowerCase()}, ${categoryKeywords}, digital marketing blog, inchtomilez`;
  
  // Generate description
  const description = blog.excerpt 
    ? `${blog.excerpt} Expert insights from Inchtomilez, Indore's leading digital marketing agency.`
    : `Learn about ${blog.title.toLowerCase()}. Expert ${blog.category.toLowerCase()} insights from Inchtomilez digital marketing agency in Indore. Read now!`;
  
  // Ensure description is 150-160 characters
  const truncatedDescription = description.length > 160 
    ? description.substring(0, 157) + '...'
    : description;
  
  return {
    title: `${blog.title} | Inchtomilez Digital Marketing Blog`,
    h1: blog.title,
    description: truncatedDescription,
    keywords,
    focusKeyword,
    canonical: `/blogs/${slug}`,
    ogTitle: `${blog.title} | Inchtomilez`,
    ogDescription: truncatedDescription,
    author: blog.author.name,
    publishedDate: blog.publishedDate || new Date().toISOString(),
    modifiedDate: new Date().toISOString()
  };
}

/**
 * Get category-specific keywords
 */
function getCategoryKeywords(category: string): string {
  const categoryKeywordMap: Record<string, string> = {
    'General Digital Marketing': 'digital marketing strategy, online marketing tips, digital marketing guide',
    'SEO (Search Engine Optimization)': 'seo tips, search engine optimization, seo strategy, ranking guide',
    'Social Media Marketing': 'social media strategy, facebook marketing, instagram marketing, social media tips',
    'PPC (Pay-Per-Click)': 'google ads, facebook ads, ppc strategy, paid advertising',
    'Content Marketing': 'content strategy, content marketing tips, blog marketing, content creation',
    'Email Marketing': 'email campaigns, email marketing tips, newsletter strategy, email automation',
    'Branding': 'brand strategy, brand identity, branding tips, brand development',
    'Web Development & Design': 'website design, web development, ui ux design, website optimization',
    'E-Commerce': 'ecommerce marketing, online store, shopify tips, amazon marketing',
    'Video Marketing': 'video marketing strategy, youtube marketing, video content, video seo',
    'Analytics & Tools': 'marketing analytics, google analytics, marketing tools, data analysis',
    'Influencer Marketing': 'influencer strategy, creator marketing, influencer partnerships',
    'Mobile Marketing': 'mobile marketing, app marketing, mobile strategy, mobile advertising',
    'Local SEO': 'local seo, google my business, local marketing, local search optimization',
    'Conversion Optimization': 'conversion rate optimization, cro, landing page optimization',
    'Marketing Automation': 'marketing automation, automation tools, automated marketing',
    'Graphic Design': 'graphic design tips, design strategy, visual content, design tools',
    'Agency Growth': 'agency tips, business growth, agency management, client acquisition'
  };
  
  return categoryKeywordMap[category] || 'marketing tips, business growth, digital strategy';
}

/**
 * Generate Article schema markup for a blog post
 */
export function generateBlogArticleSchema(blog: BlogTopic, metadata: BlogSEOMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    'headline': blog.title,
    'description': metadata.description,
    'image': 'https://inchtomilez.com/logo.png',
    'author': {
      '@type': 'Person',
      'name': blog.author.name,
      'jobTitle': blog.author.role
    },
    'publisher': {
      '@type': 'Organization',
      'name': 'Inchtomilez Digital Marketing Agency',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://inchtomilez.com/logo.png'
      }
    },
    'datePublished': metadata.publishedDate,
    'dateModified': metadata.modifiedDate,
    'mainEntityOfPage': {
      '@type': 'WebPage',
      '@id': `https://inchtomilez.com${metadata.canonical}`
    },
    'keywords': metadata.keywords,
    'articleSection': blog.category,
    'wordCount': 1500,
    'articleBody': `Comprehensive guide on ${blog.title.toLowerCase()}`
  };
}

/**
 * Generate BreadcrumbList schema for blog post
 */
export function generateBlogBreadcrumbSchema(blog: BlogTopic, metadata: BlogSEOMetadata) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Home',
        'item': 'https://inchtomilez.com'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Blog',
        'item': 'https://inchtomilez.com/blogs'
      },
      {
        '@type': 'ListItem',
        'position': 3,
        'name': blog.title,
        'item': `https://inchtomilez.com${metadata.canonical}`
      }
    ]
  };
}

/**
 * Generate blog listing page metadata
 */
export const BLOG_LISTING_METADATA: BlogSEOMetadata = {
  title: 'Digital Marketing Blog - 100+ Expert Articles | Inchtomilez Indore',
  h1: 'Digital Marketing Insights & Growth Strategies',
  description: '100+ expert articles on digital marketing, SEO, social media, PPC, branding, content marketing & more. Learn proven strategies from Indore\'s leading digital marketing agency.',
  keywords: 'digital marketing blog, seo tips, social media marketing tips, ppc strategies, content marketing blog, marketing trends 2025, digital marketing insights',
  focusKeyword: 'digital marketing blog',
  canonical: '/blogs',
  ogTitle: 'Digital Marketing Blog - Expert Insights | Inchtomilez',
  ogDescription: '100+ expert articles on SEO, social media, PPC & more. Learn from industry leaders.',
  author: 'Inchtomilez Team',
  publishedDate: new Date().toISOString(),
  modifiedDate: new Date().toISOString()
};
