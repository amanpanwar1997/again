import StackingSection from '../../components/StackingSection';
import { Shirt, TrendingUp, Users, Phone, Star, CheckCircle2, Camera, ShoppingCart, Award, Sparkles } from 'lucide-react';

export default function Fashion() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Fashion & Apparel Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Build iconic fashion brands, drive online and in-store sales, and create loyal communities with influencer-driven, trend-forward marketing strategies.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Fashion Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Shirt, title: 'Brand Building', desc: 'Create memorable fashion identities' },
              { icon: Camera, title: 'Lookbook Production', desc: 'Professional fashion photography' },
              { icon: ShoppingCart, title: 'E-Commerce Growth', desc: 'Drive online fashion sales' },
              { icon: Users, title: 'Influencer Campaigns', desc: 'Fashion influencer partnerships' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Fashion Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['High Fashion', 'Streetwear', 'Athleisure', 'Fast Fashion', 'Sustainable Fashion', 'Luxury Brands', 'Accessories', 'Footwear', 'DTC Brands'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">180+</div><p className="text-gray-400">Fashion Brands</p></div>
            <div className="text-center"><div className="text-white mb-2">$180M+</div><p className="text-gray-400">Sales Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">4.5M+</div><p className="text-gray-400">Social Followers Gained</p></div>
            <div className="text-center"><div className="text-white mb-2">325%</div><p className="text-gray-400">Avg. Revenue Growth</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Social Commerce</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Instagram Shopping', desc: 'Shoppable posts and stories driving direct sales.' },
              { title: 'TikTok Virality', desc: 'Trend-driven content creating explosive growth.' },
              { title: 'Influencer Partnerships', desc: 'Authentic collaborations with fashion creators.' }
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
            <h3 className="text-white mb-4">Sustainable Fashion Startup</h3>
            <p className="text-gray-300 mb-6">A sustainable fashion brand needed to break into the competitive DTC market.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$3.2M</div><p className="text-gray-400">First Year Revenue</p></div>
              <div><div className="text-white mb-1">180K</div><p className="text-gray-400">Instagram Followers</p></div>
              <div><div className="text-white mb-1">8.5x</div><p className="text-gray-400">ROAS</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Content Creation</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Camera className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Product Photography</h4><p className="text-gray-300">High-end lookbooks and lifestyle shoots.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Sparkles className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">UGC Campaigns</h4><p className="text-gray-300">Customer content driving authenticity.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Fashion Shows</h4><p className="text-gray-300">Event marketing and live streaming.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Fashion Brands Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Fashion Industry Expertise', desc: 'Deep understanding of trends, seasons, and fashion consumer behavior.' },
              { title: 'Influencer Network', desc: 'Access to 500+ fashion influencers and content creators.' },
              { title: 'Visual Storytelling', desc: 'Create compelling brand narratives that resonate.' },
              { title: 'Omnichannel Strategy', desc: 'Seamless online and offline brand experiences.' }
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
            <p className="text-white mb-6">"InchtoMilez built our brand from zero to 200K Instagram followers and $5M annual revenue. Their understanding of fashion marketing is unparalleled."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">EL</span></div>
              <div><p className="text-white">Emma Liu</p><p className="text-gray-400">Founder, Elevate Streetwear</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Build a Fashion Empire?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a trendsetting marketing strategy that makes your fashion brand unforgettable.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Book Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
