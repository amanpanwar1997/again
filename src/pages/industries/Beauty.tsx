import StackingSection from '../../components/StackingSection';
import { Sparkles, Heart, Users, TrendingUp, Phone, Star, CheckCircle2, Camera, ShoppingCart, Award, Globe, Target } from 'lucide-react';

export default function Beauty() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Beauty & Cosmetics Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Build premium beauty brands, drive product sales, and create engaged communities with influencer-driven, visually stunning marketing strategies for cosmetics, skincare, and beauty services.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Beauty Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: Sparkles, title: 'Brand Building', desc: 'Create iconic beauty brands' },
              { icon: Camera, title: 'Visual Content', desc: 'Professional beauty photography' },
              { icon: Users, title: 'Influencer Marketing', desc: 'Beauty creator partnerships' },
              { icon: ShoppingCart, title: 'E-Commerce Growth', desc: 'Drive cosmetics sales' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Beauty Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['Skincare Brands', 'Makeup & Cosmetics', 'Haircare Products', 'Fragrance Brands', 'Beauty Salons & Spas', 'Nail Care', 'Clean Beauty', 'K-Beauty Brands', 'Men\'s Grooming'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">220+</div><p className="text-gray-400">Beauty Brands</p></div>
            <div className="text-center"><div className="text-white mb-2">$240M+</div><p className="text-gray-400">Product Sales Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">6.8M+</div><p className="text-gray-400">Social Media Followers</p></div>
            <div className="text-center"><div className="text-white mb-2">425%</div><p className="text-gray-400">Avg. Revenue Growth</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Influencer & Creator Marketing</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Beauty Influencer Partnerships', desc: 'Connect with top beauty YouTubers, Instagram creators, and TikTok influencers.' },
              { title: 'User-Generated Content', desc: 'Customer reviews, tutorials, and before/after content that drives conversions.' },
              { title: 'Affiliate Programs', desc: 'Commission-based partnerships with beauty creators and bloggers.' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">{item.title}</h4><p className="text-gray-300">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Success Story</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <h3 className="text-white mb-4">Clean Beauty Startup</h3>
            <p className="text-gray-300 mb-6">A sustainable skincare brand needed to launch and compete with established beauty giants.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$8.5M</div><p className="text-gray-400">First Year Revenue</p></div>
              <div><div className="text-white mb-1">425K</div><p className="text-gray-400">Instagram Followers</p></div>
              <div><div className="text-white mb-1">12.3x</div><p className="text-gray-400">ROAS</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Social Commerce Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Camera className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Instagram & TikTok</h4><p className="text-gray-300">Shoppable posts, reels, and live shopping events.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Globe className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">YouTube Beauty</h4><p className="text-gray-300">Tutorials, reviews, and product demonstrations.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Heart className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Community Building</h4><p className="text-gray-300">Engaged beauty communities and brand ambassadors.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Beauty Brands Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Beauty Industry Specialists', desc: '220+ beauty brands trust our expertise in cosmetics marketing.' },
              { title: 'Influencer Network', desc: 'Relationships with 1,000+ beauty influencers and content creators.' },
              { title: 'Visual Excellence', desc: 'Professional beauty photography and video production services.' },
              { title: 'Trend-Forward Strategy', desc: 'Stay ahead with TikTok virality, clean beauty, and K-beauty trends.' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" /><div><h4 className="text-white mb-2">{item.title}</h4><p className="text-gray-300">{item.desc}</p></div></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Client Testimonial</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}</div>
            <p className="text-white mb-6">"InchtoMilez transformed our skincare brand into a viral sensation. Their influencer partnerships and TikTok strategy drove 400K followers and $8M revenue in our first year. Absolutely game-changing."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">SK</span></div>
              <div><p className="text-white">Sophia Kim</p><p className="text-gray-400">Founder & CEO, Glow Naturals</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Build a Beauty Empire?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a viral-ready marketing strategy that makes your beauty brand unforgettable.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Book Consultation</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
