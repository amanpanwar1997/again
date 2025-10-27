import SEOHead from '../../components/SEOHead';
import SchemaMarkup from '../../components/SchemaMarkup';
import { getPageMetadata } from '../../utils/seoMetadata';
import StackingSection from '../../components/StackingSection';
import { Button } from '../../components/ui/button';
import { Card, CardContent } from '../../components/ui/card';
import { ShoppingCart, TrendingUp, Package, BarChart3, Search, Star, Zap, CheckCircle2, ArrowRight, Users, Award, Target } from 'lucide-react';

export default function ECommerce() {
  const totalSections = 13;

  return (
    <div className="bg-black min-h-screen">
      <SEOHead metadata={getPageMetadata('services/ecommerce')} />
      <SchemaMarkup 
        type="service" 
        data={{
          name: 'E-Commerce Marketing Services',
          description: 'Amazon, Flipkart, Shopify optimization. Grow your online store sales.',
          serviceType: 'E-Commerce Marketing',
          url: '/services/ecommerce'
        }}
      />
      <SchemaMarkup type="organization" />

      <div className="pt-20">
        <StackingSection index={0} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h1 className="mb-8">E-Commerce Marketing Services</h1>
              <p className="mb-8 max-w-3xl">
                Skyrocket your online store sales with data-driven e-commerce marketing. From Amazon optimization to Shopify growth strategies, we help you dominate digital marketplaces.
              </p>
              <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6">
                Grow Your Sales <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={1} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Why E-Commerce Marketing Matters</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <ShoppingCart className="h-10 w-10 mb-4" />
                    <h3 className="mb-3">Increase Sales</h3>
                    <p className="text-gray-300">Optimize product listings, pricing, and promotions to maximize conversions and revenue.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <Search className="h-10 w-10 mb-4" />
                    <h3 className="mb-3">Improve Visibility</h3>
                    <p className="text-gray-300">Rank higher in marketplace search results and get discovered by more potential customers.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300 hover:scale-105">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 mb-4" />
                    <h3 className="mb-3">Scale Profitably</h3>
                    <p className="text-gray-300">Reduce acquisition costs while increasing customer lifetime value and repeat purchases.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={2} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Our E-Commerce Marketing Services</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">🛒</div>
                    <h3 className="mb-2">Amazon Marketing</h3>
                    <p className="text-gray-400 text-sm">SEO optimization</p>
                    <p className="text-gray-400 text-sm">Sponsored Products</p>
                    <p className="text-gray-400 text-sm">Brand Registry</p>
                    <p className="text-gray-400 text-sm">A+ Content</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">🛍️</div>
                    <h3 className="mb-2">Flipkart Marketing</h3>
                    <p className="text-gray-400 text-sm">Listing optimization</p>
                    <p className="text-gray-400 text-sm">Flipkart Ads</p>
                    <p className="text-gray-400 text-sm">Seller support</p>
                    <p className="text-gray-400 text-sm">Campaign management</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">🏪</div>
                    <h3 className="mb-2">Shopify Marketing</h3>
                    <p className="text-gray-400 text-sm">Store optimization</p>
                    <p className="text-gray-400 text-sm">Email marketing</p>
                    <p className="text-gray-400 text-sm">Social commerce</p>
                    <p className="text-gray-400 text-sm">CRO strategies</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="text-4xl mb-3">📦</div>
                    <h3 className="mb-2">Marketplace Management</h3>
                    <p className="text-gray-400 text-sm">Inventory management</p>
                    <p className="text-gray-400 text-sm">Order fulfillment</p>
                    <p className="text-gray-400 text-sm">Customer service</p>
                    <p className="text-gray-400 text-sm">Analytics & reporting</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={3} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Amazon Marketing Mastery</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="mb-4">SEO & Listing Optimization</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Keyword research for high-volume, low-competition terms</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Optimized titles, bullet points, and descriptions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Backend search term optimization</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">A+ Content and Enhanced Brand Content</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Product image optimization for higher conversions</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-4">Amazon Advertising</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Sponsored Products campaigns</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Sponsored Brands and video ads</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">Sponsored Display advertising</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">PPC bid optimization and strategy</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-yellow-500 mt-1 flex-shrink-0" />
                      <span className="text-gray-300">ACOS reduction and profit maximization</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={4} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Shopify Store Growth</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="mb-4">Conversion Optimization</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• UX/UI improvements</li>
                      <li>• Cart abandonment recovery</li>
                      <li>• Checkout optimization</li>
                      <li>• Trust signals & reviews</li>
                      <li>• Mobile optimization</li>
                      <li>• Page speed enhancement</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="mb-4">Traffic Generation</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Google Shopping ads</li>
                      <li>• Facebook & Instagram ads</li>
                      <li>• Influencer partnerships</li>
                      <li>• Content marketing</li>
                      <li>• Email campaigns</li>
                      <li>• SEO optimization</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <h3 className="mb-4">Retention Strategies</h3>
                    <ul className="space-y-2 text-sm text-gray-300">
                      <li>• Email automation flows</li>
                      <li>• Loyalty programs</li>
                      <li>• SMS marketing</li>
                      <li>• Personalized recommendations</li>
                      <li>• Re-engagement campaigns</li>
                      <li>• Customer feedback loops</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={5} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Product Launch Strategy</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-yellow-500 mb-3">Week 1-2</div>
                    <h3 className="mb-2">Pre-Launch</h3>
                    <p className="text-gray-400">Market research, competitor analysis, pricing strategy, listing creation</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-yellow-500 mb-3">Week 3-4</div>
                    <h3 className="mb-2">Launch</h3>
                    <p className="text-gray-400">Initial traffic campaigns, review generation, social proof building</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-yellow-500 mb-3">Week 5-8</div>
                    <h3 className="mb-2">Growth</h3>
                    <p className="text-gray-400">PPC optimization, listing refinement, expanding keywords, scaling ads</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <div className="text-yellow-500 mb-3">Week 9+</div>
                    <h3 className="mb-2">Optimization</h3>
                    <p className="text-gray-400">Profit maximization, inventory management, seasonal planning</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={6} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Marketplace Platforms We Master</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Amazon India', 'Flipkart', 'Shopify', 'Meesho', 'Myntra', 'Ajio', 'Snapdeal', 'PayTM Mall'].map((platform) => (
                  <Card key={platform} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm">{platform}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={7} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">E-Commerce Analytics & Insights</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <BarChart3 className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Sales Tracking</h3>
                    <p className="text-gray-300">Real-time dashboards showing revenue, units sold, conversion rates, and profitability metrics.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <Target className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Customer Insights</h3>
                    <p className="text-gray-300">Understand buying behavior, demographics, lifetime value, and purchase patterns.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <Zap className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Competitor Analysis</h3>
                    <p className="text-gray-300">Track competitor pricing, rankings, reviews, and promotional strategies.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={8} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Products We Excel At Marketing</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {['Fashion', 'Electronics', 'Home & Living', 'Beauty', 'Health', 'Sports', 'Books', 'Toys', 'Automotive', 'Groceries', 'Jewelry', 'Pet Supplies'].map((category) => (
                  <Card key={category} className="bg-black border border-white/10 hover:border-yellow-500/50 transition-all duration-300">
                    <CardContent className="p-4 text-center">
                      <p className="text-sm">{category}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={9} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">E-Commerce Results</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-2 text-yellow-500">250%</div>
                    <p className="text-gray-400">Avg Sales Growth</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-2 text-yellow-500">4.2x</div>
                    <p className="text-gray-400">ROI on Ad Spend</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-2 text-yellow-500">50+</div>
                    <p className="text-gray-400">Brands Managed</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6 text-center">
                    <div className="text-5xl mb-2 text-yellow-500">₹10Cr+</div>
                    <p className="text-gray-400">GMV Generated</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={10} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">E-Commerce Marketing Packages</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="mb-2">Starter</h3>
                    <div className="text-3xl mb-4">₹30,000<span className="text-lg text-gray-400">/mo</span></div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Single marketplace</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Listing optimization</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Basic PPC management</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Monthly reporting</span></li>
                    </ul>
                    <Button className="w-full bg-transparent border border-white hover:bg-white hover:text-black rounded-full">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-black border-2 border-yellow-500 relative">
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-yellow-500 text-black px-4 py-1 rounded-full text-sm">
                    Popular
                  </div>
                  <CardContent className="p-8">
                    <h3 className="mb-2">Growth</h3>
                    <div className="text-3xl mb-4">₹60,000<span className="text-lg text-gray-400">/mo</span></div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Multi-marketplace</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Advanced PPC</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Product launches</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Weekly optimization</span></li>
                    </ul>
                    <Button className="w-full bg-yellow-500 text-black hover:bg-yellow-400 rounded-full">
                      Get Started
                    </Button>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-8">
                    <h3 className="mb-2">Enterprise</h3>
                    <div className="text-3xl mb-4">Custom</div>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">All marketplaces</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Full catalog management</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">Dedicated account manager</span></li>
                      <li className="flex items-center gap-2"><CheckCircle2 className="h-5 w-5 text-yellow-500" /> <span className="text-gray-300 text-sm">24/7 support</span></li>
                    </ul>
                    <Button className="w-full bg-transparent border border-white hover:bg-white hover:text-black rounded-full">
                      Contact Us
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={11} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto">
              <h2 className="mb-8">Why Choose Inchtomilez for E-Commerce?</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <Award className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Marketplace Experts</h3>
                    <p className="text-gray-300">Certified partners with Amazon, Flipkart, and Shopify with proven success records.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <TrendingUp className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Proven Growth</h3>
                    <p className="text-gray-300">Average 250% sales increase within 6 months for our e-commerce clients.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <Package className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Full-Service</h3>
                    <p className="text-gray-300">From listing creation to ad management to customer service - we handle it all.</p>
                  </CardContent>
                </Card>
                <Card className="bg-black border border-white/10">
                  <CardContent className="p-6">
                    <Users className="h-10 w-10 mb-4 text-yellow-500" />
                    <h3 className="mb-3">Dedicated Support</h3>
                    <p className="text-gray-300">Your own account manager who knows your business and marketplace inside out.</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </StackingSection>

        <StackingSection index={12} total={totalSections}>
          <div className="min-h-screen flex items-center">
            <div className="w-[80vw] mx-auto text-center">
              <h2 className="mb-6">Ready to Dominate E-Commerce?</h2>
              <p className="mb-8 max-w-2xl mx-auto text-gray-300">
                Let's grow your online store with data-driven strategies that increase sales and profitability. Start your e-commerce journey today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6">
                  Schedule Free Audit
                </Button>
                <Button className="bg-transparent border border-white hover:bg-white hover:text-black rounded-full px-8 py-6">
                  View Case Studies
                </Button>
              </div>
            </div>
          </div>
        </StackingSection>
      </div>
    </div>
  );
}
