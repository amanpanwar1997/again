import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, ArrowRight, Tag, BookOpen, TrendingUp, Filter } from 'lucide-react';
import { ALL_100_BLOG_TOPICS, getBlogSlug, BLOG_CATEGORIES, FEATURED_BLOGS, type BlogTopic } from '../utils/blogData';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback } from '../components/ui/avatar';
import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../components/EnhancedSchemaMarkup';
import { getPageMetadata } from '../utils/seoMetadata';
import Breadcrumbs from '../components/Breadcrumbs';

export default function Blogs() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [currentPage, setCurrentPage] = useState(1);
  const blogsPerPage = 12;

  // Filter and search logic
  const filteredBlogs = useMemo(() => {
    let filtered = ALL_100_BLOG_TOPICS;

    // Filter by category
    if (selectedCategory !== 'All') {
      filtered = filtered.filter(blog => blog.category === selectedCategory);
    }

    // Filter by search query
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(blog =>
        blog.title.toLowerCase().includes(query) ||
        blog.category.toLowerCase().includes(query) ||
        blog.author.name.toLowerCase().includes(query) ||
        blog.excerpt?.toLowerCase().includes(query) ||
        blog.tags?.some(tag => tag.toLowerCase().includes(query))
      );
    }

    return filtered;
  }, [searchQuery, selectedCategory]);

  // Pagination logic
  const totalPages = Math.ceil(filteredBlogs.length / blogsPerPage);
  const startIndex = (currentPage - 1) * blogsPerPage;
  const endIndex = startIndex + blogsPerPage;
  const currentBlogs = filteredBlogs.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  useMemo(() => {
    setCurrentPage(1);
  }, [searchQuery, selectedCategory]);

  return (
    <>
      <SEOHead
        title="Digital Marketing Blog | 100+ Expert Articles | Inchtomilez"
        description="Explore 100+ expert articles on digital marketing, SEO, social media, branding, and more. Stay updated with the latest trends and strategies for business growth in India."
        canonicalUrl="https://inchtomilez.com/blogs"
      />
      <SchemaMarkup type="organization" />
      <EnhancedSchemaMarkup page="blogs" />
      <Breadcrumbs items={[{ label: 'Blogs' }]} />
      
      <div className="bg-black min-h-screen" style={{ paddingTop: '120px' }}>
        {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 mb-6">
            <BookOpen className="h-4 w-4 text-yellow-500" />
            <span className="text-gray-400">Digital Marketing Insights</span>
          </div>
          <h1 className="mb-6">Inchtomilez Blog</h1>
          <p className="max-w-3xl mx-auto text-gray-400 mb-8">
            Expert insights, strategies, and tips on digital marketing, SEO, social media, branding, and everything you need to grow your business online in 2025.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
            <div className="text-center">
              <div className="mb-2">100+</div>
              <p className="text-gray-400">Articles Published</p>
            </div>
            <div className="text-center">
              <div className="mb-2">15+</div>
              <p className="text-gray-400">Expert Authors</p>
            </div>
            <div className="text-center">
              <div className="mb-2">12</div>
              <p className="text-gray-400">Topic Categories</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Blogs */}
      {FEATURED_BLOGS.length > 0 && (
        <section className="py-16 px-4 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <TrendingUp className="h-6 w-6 text-yellow-500" />
              <h2>Featured Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {FEATURED_BLOGS.map((blog) => (
                <BlogCard key={blog.id} blog={blog} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Search and Filter Section */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row gap-6 mb-12">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Search articles by title, category, author, or tags..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-gray-500 h-12"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white h-12 min-w-[200px]"
              >
                <option value="All">All Categories</option>
                {BLOG_CATEGORIES.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-8">
            <p className="text-gray-400">
              Showing <span className="text-white">{filteredBlogs.length}</span> {filteredBlogs.length === 1 ? 'article' : 'articles'}
              {selectedCategory !== 'All' && (
                <span> in <span className="text-yellow-500">{selectedCategory}</span></span>
              )}
              {searchQuery && (
                <span> matching "<span className="text-yellow-500">{searchQuery}</span>"</span>
              )}
            </p>
          </div>

          {/* Blog Grid */}
          {currentBlogs.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {currentBlogs.map((blog) => (
                  <BlogCard key={blog.id} blog={blog} />
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex justify-center items-center gap-2">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.max(1, prev - 1))}
                    disabled={currentPage === 1}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    Previous
                  </Button>
                  
                  <div className="flex gap-2">
                    {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
                      let pageNum;
                      if (totalPages <= 5) {
                        pageNum = i + 1;
                      } else if (currentPage <= 3) {
                        pageNum = i + 1;
                      } else if (currentPage >= totalPages - 2) {
                        pageNum = totalPages - 4 + i;
                      } else {
                        pageNum = currentPage - 2 + i;
                      }

                      return (
                        <Button
                          key={pageNum}
                          variant={currentPage === pageNum ? 'default' : 'outline'}
                          onClick={() => setCurrentPage(pageNum)}
                          className={
                            currentPage === pageNum
                              ? 'bg-yellow-500 text-black hover:bg-yellow-600'
                              : 'bg-white/5 border-white/10 text-white hover:bg-white/10'
                          }
                        >
                          {pageNum}
                        </Button>
                      );
                    })}
                  </div>

                  <Button
                    variant="outline"
                    onClick={() => setCurrentPage(prev => Math.min(totalPages, prev + 1))}
                    disabled={currentPage === totalPages}
                    className="bg-white/5 border-white/10 text-white hover:bg-white/10"
                  >
                    Next
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-20">
              <Search className="h-16 w-16 text-gray-600 mx-auto mb-4" />
              <h3 className="mb-2">No articles found</h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your search or filter to find what you're looking for.
              </p>
              <Button
                onClick={() => {
                  setSearchQuery('');
                  setSelectedCategory('All');
                }}
                className="bg-yellow-500 text-black hover:bg-yellow-600"
              >
                Clear Filters
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Categories Overview */}
      <section className="py-16 px-4 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <h2 className="mb-8">Explore by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {BLOG_CATEGORIES.map((category) => {
              const count = ALL_100_BLOG_TOPICS.filter(b => b.category === category).length;
              return (
                <button
                  key={category}
                  onClick={() => {
                    setSelectedCategory(category);
                    window.scrollTo({ top: 400, behavior: 'smooth' });
                  }}
                  className="group p-6 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all text-left"
                >
                  <div className="flex items-start justify-between mb-2">
                    <Tag className="h-5 w-5 text-yellow-500" />
                    <span className="text-gray-400">{count}</span>
                  </div>
                  <h4 className="group-hover:text-yellow-500 transition-colors">{category}</h4>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 border-t border-white/10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="mb-6">Ready to Grow Your Business?</h2>
          <p className="text-gray-400 mb-8">
            Let's discuss how our digital marketing strategies can help you achieve your business goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-yellow-500 text-black hover:bg-yellow-600 rounded-full px-8 py-6">
              Book Free Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6">
              View Our Services
            </Button>
          </div>
        </div>
      </section>
    </div>
    </>
  );
}

// Blog Card Component
function BlogCard({ blog, featured = false }: { blog: BlogTopic; featured?: boolean }) {
  return (
    <article className={`group h-full bg-black border border-white/10 rounded-lg overflow-hidden hover:border-yellow-500/50 transition-all ${featured ? 'hover:scale-105' : 'hover:scale-102'}`}>
      {/* Featured Badge */}
      {featured && (
        <div className="bg-yellow-500 text-black px-4 py-2">
          <div className="flex items-center gap-2">
            <TrendingUp className="h-4 w-4" />
            <span className="text-sm font-medium">Featured</span>
          </div>
        </div>
      )}

      <div className="p-6">
        {/* Category Badge */}
        <Badge className="bg-white/10 text-yellow-500 border-yellow-500/30 hover:bg-white/20 mb-4">
          {blog.category}
        </Badge>

        {/* Title */}
        <h3 className="mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
          {blog.title}
        </h3>

        {/* Excerpt */}
        {blog.excerpt && (
          <p className="text-gray-400 mb-4 line-clamp-2">
            {blog.excerpt}
          </p>
        )}

        {/* Tags */}
        {blog.tags && blog.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {blog.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-400"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}

        {/* Meta Info */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div className="flex items-center gap-3">
            <Avatar className="h-8 w-8 bg-yellow-500/20 border border-yellow-500/30">
              <AvatarFallback className="bg-transparent text-yellow-500 text-xs">
                {blog.author.avatar}
              </AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm text-white">{blog.author.name}</p>
              <p className="text-xs text-gray-500">{blog.author.role}</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-white/10">
          <div className="flex items-center gap-4 text-sm text-gray-400">
            {blog.publishedDate && (
              <div className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                <span>{blog.publishedDate}</span>
              </div>
            )}
            {blog.readTime && (
              <div className="flex items-center gap-1">
                <BookOpen className="h-4 w-4" />
                <span>{blog.readTime}</span>
              </div>
            )}
          </div>
        </div>

        {/* Read More */}
        <Link to={`/blog/${getBlogSlug(blog)}`}>
          <Button
            variant="ghost"
            className="w-full mt-4 group-hover:bg-yellow-500 group-hover:text-black transition-all"
          >
            Read Article
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </Link>
      </div>
    </article>
  );
}
