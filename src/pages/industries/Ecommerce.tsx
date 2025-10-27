import StackingSection from '../../components/StackingSection';
import { ShoppingCart, TrendingUp, Globe, Smartphone, Package, CreditCard, BarChart3, Users, Target, Star, Award, Phone, CheckCircle2, Zap } from 'lucide-react';

export default function Ecommerce() {
  const totalSections = 12;

  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">E-Commerce Marketing That Drives Sales</h1>
          <p className="text-white max-w-3xl mb-8">Scale your online store with performance-driven e-commerce marketing strategies that increase traffic, conversions, and customer lifetime value.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">View Case Studies</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">E-Commerce Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: ShoppingCart, title: 'Conversion Optimization', desc: 'Increase checkout completion rates' },
              { icon: Target, title: 'Performance Ads', desc: 'Google Shopping & Meta catalog ads' },
              { icon: Globe, title: 'E-Commerce SEO', desc: 'Rank products in search results' },
              { icon: Smartphone, title: 'Mobile Commerce', desc: 'Optimize for mobile shoppers' }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
                  <Icon className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-white mb-2">{service.title}</h4>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">E-Commerce Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">800+</div><p className="text-gray-400">Online Stores Managed</p></div>
            <div className="text-center"><div className="text-white mb-2">$450M+</div><p className="text-gray-400">Revenue Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">285%</div><p className="text-gray-400">Avg. Revenue Growth</p></div>
            <div className="text-center"><div className="text-white mb-2">5.8x</div><p className="text-gray-400">Return on Ad Spend</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">E-Commerce Platforms</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['Shopify', 'WooCommerce', 'Magento', 'BigCommerce', 'Amazon Seller', 'Custom Platforms'].map((platform, index) => (
              <div key={index} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
                <CheckCircle2 className="w-6 h-6 text-white mb-2" />
                <p className="text-white">{platform}</p>
              </div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Performance Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Google Shopping Ads</h4>
              <p className="text-gray-300 mb-4">Product listing ads that capture high-intent shoppers.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Smart Shopping campaigns</li>
                <li>• Performance Max</li>
                <li>• Feed optimization</li>
              </ul>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Social Commerce</h4>
              <p className="text-gray-300 mb-4">Instagram Shopping, Facebook Shops, TikTok Shop integration.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Dynamic product ads</li>
                <li>• Catalog management</li>
                <li>• Influencer commerce</li>
              </ul>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Conversion Rate Optimization</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'A/B Testing', desc: 'Continuous testing of product pages, checkout flow, and CTAs.' },
              { title: 'Cart Abandonment Recovery', desc: 'Email and SMS sequences recovering 25-35% of abandoned carts.' },
              { title: 'Personalization', desc: 'Dynamic product recommendations based on browsing behavior.' },
              { title: 'Mobile Optimization', desc: 'Fast, frictionless mobile shopping experiences.' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-black border border-white/10 rounded-lg">
                <h4 className="text-white mb-2">{item.title}</h4>
                <p className="text-gray-300">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Customer Retention</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Users className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Email Marketing</h4>
              <p className="text-gray-300">Segmented campaigns driving repeat purchases.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Award className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Loyalty Programs</h4>
              <p className="text-gray-300">Points, rewards, and VIP tiers.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Smartphone className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">SMS Marketing</h4>
              <p className="text-gray-300">Time-sensitive offers and restocks.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Success Story</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <h3 className="text-white mb-4">Fashion E-Commerce Brand</h3>
            <p className="text-gray-300 mb-6">A DTC fashion brand needed to scale from $100K to $1M monthly revenue.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$1.4M</div><p className="text-gray-400">Monthly Revenue Achieved</p></div>
              <div><div className="text-white mb-1">6.2x</div><p className="text-gray-400">ROAS on Paid Ads</p></div>
              <div><div className="text-white mb-1">42%</div><p className="text-gray-400">Repeat Customer Rate</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Full Story</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">E-Commerce Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['Fashion & Apparel', 'Beauty & Cosmetics', 'Electronics', 'Home & Furniture', 'Sports & Fitness', 'Food & Beverage', 'Jewelry & Accessories', 'Health & Wellness', 'Pet Products'].map((category, index) => (
              <div key={index} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
                <Package className="w-6 h-6 text-white mb-2" />
                <p className="text-white">{category}</p>
              </div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Analytics & Insights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <BarChart3 className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">Real-Time</div>
              <p className="text-gray-400">Sales Dashboard</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <TrendingUp className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">LTV Analysis</div>
              <p className="text-gray-400">Customer Lifetime Value</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Target className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">Attribution</div>
              <p className="text-gray-400">Multi-Touch Tracking</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Zap className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">Automation</div>
              <p className="text-gray-400">Smart Campaigns</p>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={10} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Client Testimonial</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}</div>
            <p className="text-white mb-6">"InchtoMilez scaled our Shopify store from $50K to $800K monthly in 8 months. Their expertise in Google Shopping and Facebook ads is unmatched. Best ROI we've ever seen."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">AK</span></div>
              <div>
                <p className="text-white">Alex Kim</p>
                <p className="text-gray-400">Founder, Luxe Apparel Co.</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Scale Your E-Commerce Store?</h2>
          <p className="text-white max-w-2xl mb-8">Let's build a data-driven growth strategy that increases your revenue and customer lifetime value.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Book a Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
