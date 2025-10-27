import { useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Calendar, User, ArrowLeft, ArrowRight, Clock, Tag } from 'lucide-react';
import { ALL_100_BLOG_TOPICS, getBlogSlug, type BlogTopic } from '../utils/blogData';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { Avatar, AvatarFallback } from './ui/avatar';
import SEOHead from './SEOHead';
import SchemaMarkup from './SchemaMarkup';

export default function BlogPost() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();

  // Find the blog post by slug (try slug first, then fallback to id for backwards compatibility)
  const blog = ALL_100_BLOG_TOPICS.find(b => getBlogSlug(b) === slug || b.id === slug);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // If blog not found, redirect to blogs page
  useEffect(() => {
    if (!blog) {
      navigate('/blogs');
    }
  }, [blog, navigate]);

  if (!blog) {
    return null;
  }

  // Find related blogs (same category, excluding current)
  const relatedBlogs = ALL_100_BLOG_TOPICS
    .filter(b => b.category === blog.category && b.id !== blog.id)
    .slice(0, 3);

  // Find previous and next blogs
  const currentIndex = ALL_100_BLOG_TOPICS.findIndex(b => b.id === blog.id);
  const previousBlog = currentIndex > 0 ? ALL_100_BLOG_TOPICS[currentIndex - 1] : null;
  const nextBlog = currentIndex < ALL_100_BLOG_TOPICS.length - 1 ? ALL_100_BLOG_TOPICS[currentIndex + 1] : null;

  return (
    <>
      <SEOHead
        title={`${blog.title} | Inchtomilez Blog`}
        description={blog.excerpt || `Expert insights on ${blog.category} - ${blog.title}`}
        canonicalUrl={`https://inchtomilez.com/blog/${getBlogSlug(blog)}`}
        ogType="article"
      />

      <SchemaMarkup
        type="BlogPosting"
        data={{
          headline: blog.title,
          description: blog.excerpt,
          author: {
            '@type': 'Person',
            name: blog.author.name,
          },
          datePublished: blog.publishedDate,
          publisher: {
            '@type': 'Organization',
            name: 'Inchtomilez',
            logo: {
              '@type': 'ImageObject',
              url: 'https://inchtomilez.com/logo.png',
            },
          },
        }}
      />

      <div className="bg-black min-h-screen" style={{ paddingTop: '80px' }}>
        {/* Back Button */}
        <div className="px-4 py-6 border-b border-white/10">
          <div className="max-w-4xl mx-auto">
            <Link to="/blogs">
              <Button variant="ghost" className="text-gray-400 hover:text-white">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Blogs
              </Button>
            </Link>
          </div>
        </div>

        {/* Article Header */}
        <article className="py-12 px-4">
          <div className="max-w-4xl mx-auto">
            {/* Category Badge */}
            <Badge className="bg-yellow-500/20 text-yellow-500 border-yellow-500/30 hover:bg-yellow-500/30 mb-6">
              {blog.category}
            </Badge>

            {/* Title */}
            <h1 className="mb-6">{blog.title}</h1>

            {/* Meta Info */}
            <div className="flex flex-wrap items-center gap-6 mb-8 pb-8 border-b border-white/10">
              {/* Author */}
              <div className="flex items-center gap-3">
                <Avatar className="h-12 w-12 bg-yellow-500/20 border border-yellow-500/30">
                  <AvatarFallback className="bg-transparent text-yellow-500">
                    {blog.author.avatar}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-white">{blog.author.name}</p>
                  <p className="text-sm text-gray-400">{blog.author.role}</p>
                </div>
              </div>

              {/* Divider */}
              <div className="hidden sm:block w-px h-12 bg-white/10" />

              {/* Date & Read Time */}
              <div className="flex flex-col gap-2">
                {blog.publishedDate && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Calendar className="h-4 w-4" />
                    <span>{blog.publishedDate}</span>
                  </div>
                )}
                {blog.readTime && (
                  <div className="flex items-center gap-2 text-gray-400">
                    <Clock className="h-4 w-4" />
                    <span>{blog.readTime}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Excerpt */}
            {blog.excerpt && (
              <div className="text-xl text-gray-300 mb-8 pb-8 border-b border-white/10">
                {blog.excerpt}
              </div>
            )}

            {/* Article Content */}
            <div className="prose prose-invert prose-lg max-w-none">
              <BlogContent blog={blog} />
            </div>

            {/* Tags */}
            {blog.tags && blog.tags.length > 0 && (
              <div className="mt-12 pt-8 border-t border-white/10">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="h-5 w-5 text-yellow-500" />
                  <h3>Tags</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {blog.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-2 bg-white/5 border border-white/10 rounded-lg text-gray-300 hover:border-yellow-500/50 hover:bg-white/10 transition-all cursor-pointer"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Author Bio */}
            <div className="mt-12 p-8 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex items-start gap-4">
                <Avatar className="h-16 w-16 bg-yellow-500/20 border-2 border-yellow-500/30">
                  <AvatarFallback className="bg-transparent text-yellow-500 text-lg">
                    {blog.author.avatar}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <h3 className="mb-2">About {blog.author.name}</h3>
                  <p className="text-gray-400 mb-2">{blog.author.role}</p>
                  <p className="text-gray-300">{blog.author.bio}</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-8 border-t border-white/10 grid grid-cols-1 md:grid-cols-2 gap-6">
              {previousBlog && (
                <Link to={`/blog/${getBlogSlug(previousBlog)}`} className="group">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all">
                    <div className="flex items-center gap-2 text-gray-400 mb-2">
                      <ArrowLeft className="h-4 w-4" />
                      <span className="text-sm">Previous Article</span>
                    </div>
                    <h4 className="group-hover:text-yellow-500 transition-colors line-clamp-2">
                      {previousBlog.title}
                    </h4>
                  </div>
                </Link>
              )}
              {nextBlog && (
                <Link to={`/blog/${getBlogSlug(nextBlog)}`} className="group md:col-start-2">
                  <div className="p-6 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all">
                    <div className="flex items-center justify-end gap-2 text-gray-400 mb-2">
                      <span className="text-sm">Next Article</span>
                      <ArrowRight className="h-4 w-4" />
                    </div>
                    <h4 className="text-right group-hover:text-yellow-500 transition-colors line-clamp-2">
                      {nextBlog.title}
                    </h4>
                  </div>
                </Link>
              )}
            </div>
          </div>
        </article>

        {/* Related Articles */}
        {relatedBlogs.length > 0 && (
          <section className="py-16 px-4 border-t border-white/10">
            <div className="max-w-4xl mx-auto">
              <h2 className="mb-8">Related Articles</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {relatedBlogs.map((relatedBlog) => (
                  <Link
                    key={relatedBlog.id}
                    to={`/blog/${getBlogSlug(relatedBlog)}`}
                    className="group"
                  >
                    <div className="h-full p-6 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all">
                      <Badge className="bg-white/10 text-yellow-500 border-yellow-500/30 mb-4">
                        {relatedBlog.category}
                      </Badge>
                      <h4 className="mb-3 group-hover:text-yellow-500 transition-colors line-clamp-3">
                        {relatedBlog.title}
                      </h4>
                      <p className="text-sm text-gray-400">{relatedBlog.readTime}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* CTA Section */}
        <section className="py-20 px-4 border-t border-white/10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Need Help with {blog.category}?</h2>
            <p className="text-gray-400 mb-8">
              Our experts are ready to help you achieve your goals. Let's discuss your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/lets-talk">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-600 rounded-full px-8 py-6">
                  Book Free Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/services">
                <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  View Our Services
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

// Helper function to parse markdown-style links and convert to React Router Links
function parseLinks(text: string) {
  const parts: (string | JSX.Element)[] = [];
  const linkRegex = /\[([^\]]+)\]\(([^\)]+)\)/g;
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(text.substring(lastIndex, match.index));
    }
    
    // Add the link
    const linkText = match[1];
    const linkUrl = match[2];
    parts.push(
      <Link 
        key={match.index} 
        to={linkUrl} 
        className="text-yellow-500 hover:text-yellow-400 underline transition-colors"
      >
        {linkText}
      </Link>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < text.length) {
    parts.push(text.substring(lastIndex));
  }
  
  return parts.length > 0 ? parts : [text];
}

// Blog Content Component - Generates full article content based on blog topic
function BlogContent({ blog }: { blog: BlogTopic }) {
  // Generate comprehensive content based on the blog topic
  const content = generateBlogContent(blog);

  return (
    <div className="space-y-6 text-gray-300">
      {content.sections.map((section, index) => (
        <div key={index}>
          <h2 className="mb-4">{section.heading}</h2>
          {section.paragraphs.map((paragraph, pIndex) => (
            <p key={pIndex} className="mb-4">
              {parseLinks(paragraph)}
            </p>
          ))}
          {section.list && (
            <ul className="list-disc list-inside space-y-2 my-4">
              {section.list.map((item, lIndex) => (
                <li key={lIndex}>{parseLinks(item)}</li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
}

// Content generator function
function generateBlogContent(blog: BlogTopic) {
  // This is a comprehensive content generator that creates SEO-optimized blog content
  // In production, this would pull from a CMS or content API

  const baseContent = {
    sections: [
      {
        heading: 'Introduction',
        paragraphs: [
          `In today's digital landscape, ${blog.category.toLowerCase()} has become more crucial than ever for businesses looking to thrive in the competitive Indian market. This comprehensive guide will walk you through everything you need to know about ${blog.title.toLowerCase()}.`,
          `Whether you're a startup in Indore, a growing business in tier-2 cities, or an established enterprise, understanding ${blog.category.toLowerCase()} strategies can significantly impact your bottom line. At [Inchtomilez](/about), we help businesses leverage digital marketing to achieve measurable growth. Let's dive deep into actionable insights that you can implement right away.`,
        ],
      },
      {
        heading: 'Why This Matters for Your Business',
        paragraphs: [
          `The Indian digital market is evolving rapidly, with over 700 million internet users and counting. Businesses across [entertainment](/industries/entertainment), [sports](/industries/sports), [beauty & wellness](/industries/beauty), and [logistics](/industries/logistics) sectors that leverage ${blog.category.toLowerCase()} effectively are seeing remarkable growth in leads, conversions, and brand awareness.`,
          `According to recent industry reports, companies investing in ${blog.category.toLowerCase()} experience an average ROI increase of 300-500% within the first year. Whether you need [OOH advertising](/services/ooh-services), [print media solutions](/services/print-media), [corporate gifting](/services/corporate-gifting), or [public relations](/services/public-relations) support, this isn't just a trend—it's a fundamental shift in how businesses connect with their customers.`,
        ],
        list: [
          'Increased online visibility and [brand recognition](/services/branding)',
          'Higher quality leads through [targeted advertising](/services/advertising)',
          'Improved customer engagement via [social media marketing](/services/digital-marketing)',
          'Cost-effective [digital campaigns](/services/digital-marketing) compared to traditional methods',
          'Data-driven insights through [analytics and tracking](/services/digital-marketing)',
        ],
      },
      {
        heading: 'Key Strategies for Success',
        paragraphs: [
          `Implementing effective ${blog.category.toLowerCase()} requires a strategic approach tailored to your business goals and target audience. At [Inchtomilez](/about), we combine [creative design](/services/graphic-designing), [data-driven marketing](/services/digital-marketing), and [cutting-edge technology](/services/software-development) to deliver measurable results. Here are the proven strategies that deliver results:`,
        ],
        list: [
          'Define clear, measurable objectives and KPIs',
          'Understand your target audience deeply with [audience research](/services/branding)',
          'Create compelling, value-driven [content](/services/branding) that resonates',
          'Optimize for mobile-first experiences with [responsive design](/services/website-development)',
          'Leverage [data analytics](/services/digital-marketing) for continuous improvement',
          'Build a consistent [brand presence](/services/branding) across all channels',
          'Focus on customer experience at every touchpoint',
        ],
      },
      {
        heading: 'Common Mistakes to Avoid',
        paragraphs: [
          `Many businesses across [agriculture](/industries/agriculture), [construction](/industries/construction), [non-profit](/industries/non-profit), and other sectors make critical mistakes when implementing ${blog.category.toLowerCase()} strategies. Working with an experienced [digital marketing agency](/about) can help you avoid these pitfalls and save time, money, and frustration:`,
        ],
        list: [
          'Neglecting [mobile optimization](/services/website-development) in a mobile-first market',
          'Failing to track and measure [campaign performance](/services/digital-marketing) properly',
          'Ignoring local SEO opportunities in your [digital strategy](/services/digital-marketing)',
          'Creating generic content instead of industry-specific [targeted messaging](/services/branding)',
          'Not investing enough in quality [creative production](/services/media-production)',
          'Overlooking the importance of consistent [brand identity](/services/branding) across touchpoints',
          'Skipping [political campaign strategies](/services/political-campaigns) for NGOs and advocacy groups',
        ],
      },
      {
        heading: 'Best Practices for Indian Businesses',
        paragraphs: [
          `The Indian market has unique characteristics that require specialized approaches. Whether you're in [healthcare](/industries/healthcare), [education](/industries/education), [retail & e-commerce](/industries/ecommerce), [real estate](/industries/real-estate), or [hospitality](/industries/hospitality), understanding local market dynamics is crucial. Here's what works best for businesses targeting Indian audiences:`,
          `Understanding regional preferences, language diversity, and cultural nuances is crucial for success. Our work with clients across [fashion](/industries/fashion), [food & beverage](/industries/food-beverage), [automotive](/industries/automotive), and [technology](/industries/technology) industries has shown that businesses that localize their ${blog.category.toLowerCase()} efforts see significantly better engagement and conversion rates.`,
        ],
        list: [
          'Leverage regional languages and cultural contexts in your [content strategy](/services/branding)',
          'Optimize for slower internet connections with [fast loading websites](/services/website-development)',
          'Focus on value-for-money messaging in your [advertising campaigns](/services/advertising)',
          'Use social proof and testimonials effectively across [social media](/services/digital-marketing)',
          'Build trust through transparency and authenticity in [brand communication](/services/branding)',
        ],
      },
      {
        heading: 'Measuring Success and ROI',
        paragraphs: [
          `Success in ${blog.category.toLowerCase()} isn't just about vanity metrics—it's about measurable business impact. Here's how to track what truly matters:`,
          `Establish clear benchmarks from the start and monitor key performance indicators regularly. This data-driven approach ensures you're investing resources in strategies that deliver real results.`,
        ],
        list: [
          'Track conversion rates and cost per acquisition',
          'Monitor engagement metrics and user behavior',
          'Measure brand awareness and sentiment',
          'Calculate customer lifetime value',
          'Analyze competitor performance and market trends',
        ],
      },
      {
        heading: 'Future Trends to Watch',
        paragraphs: [
          `The ${blog.category.toLowerCase()} landscape is constantly evolving. Staying ahead of emerging trends ensures your business remains competitive. At Inchtomilez, we help businesses leverage emerging technologies through [custom software development](/services/software-development), [mobile app development](/services/application-development), and [AI-powered automation](/services/digital-marketing).`,
          `AI-powered personalization, voice search optimization, and interactive content are reshaping how businesses engage with customers. Our [video marketing](/services/media-production), [animation services](/services/animation), and [influencer marketing](/services/influencer-marketing) solutions help brands stay ahead of the curve. Early adopters of these technologies are gaining significant competitive advantages across industries including [finance](/industries/finance), [legal](/industries/legal), [pharmaceutical](/industries/pharmaceutical), and [manufacturing](/industries/manufacturing).`,
        ],
      },
      {
        heading: 'How Inchtomilez Can Help',
        paragraphs: [
          `At [Inchtomilez](/about), we specialize in delivering results-driven ${blog.category.toLowerCase()} solutions tailored for Indian businesses. Our [comprehensive digital marketing services](/services/digital-marketing) include everything from [SEO](/services/digital-marketing) and [social media marketing](/services/digital-marketing) to [content creation](/services/branding) and [paid advertising](/services/advertising).`,
          `We understand the unique challenges faced by businesses in Indore and across India. Whether you need help with [website development](/services/website-development), [e-commerce solutions](/services/ecommerce), [branding](/services/branding), or [video production](/services/media-production), our team of experts brings years of experience working with businesses across industries like [healthcare](/industries/healthcare), [education](/industries/education), [real estate](/industries/real-estate), and [technology](/industries/technology).`,
        ],
        list: [
          'Customized strategies based on your business goals',
          'Transparent reporting and regular performance updates',
          'Dedicated account management and support',
          'Proven track record with measurable results',
          'Cost-effective solutions for businesses of all sizes',
        ],
      },
      {
        heading: 'Conclusion',
        paragraphs: [
          `Success in ${blog.category.toLowerCase()} requires a combination of strategic planning, consistent execution, and continuous optimization. By implementing the strategies outlined in this guide, you're well-positioned to achieve your business objectives.`,
          `Remember, digital marketing is a marathon, not a sprint. Patience, persistence, and data-driven decision-making are key to long-term success. If you're ready to take your ${blog.category.toLowerCase()} efforts to the next level, [contact our team at Inchtomilez](/lets-talk) for a free consultation. Explore our [full range of services](/services) or check out our [blog](/blogs) for more insights on growing your business online.`,
        ],
      },
    ],
  };

  return baseContent;
}
