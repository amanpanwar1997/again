import StackingSection from '../../components/StackingSection';
import { Sprout, TrendingUp, Users, Phone, Star, CheckCircle2, Award, Globe, Package, Leaf } from 'lucide-react';

export default function Agriculture() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Agriculture Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Drive growth for farms, agribusiness, agricultural technology, and food production companies with specialized digital marketing.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Agriculture Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Sprout, title: 'Farm Marketing', desc: 'Direct-to-consumer sales growth' },
              { icon: Package, title: 'AgTech Promotion', desc: 'Technology adoption campaigns' },
              { icon: Globe, title: 'B2B Agriculture', desc: 'Supplier & distributor marketing' },
              { icon: Leaf, title: 'Sustainability Messaging', desc: 'Organic & eco-friendly branding' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Agriculture Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Crop Farming', 'Livestock', 'Organic Farming', 'AgTech Startups', 'Farm Equipment', 'Seeds & Fertilizer', 'Agricultural Consulting', 'Food Processing', 'Vertical Farming'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">280+</div><p className="text-gray-400">Agriculture Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">$180M+</div><p className="text-gray-400">Revenue Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">55%</div><p className="text-gray-400">Avg. Sales Growth</p></div>
            <div className="text-center"><div className="text-white mb-2">6.8x</div><p className="text-gray-400">ROI</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Direct-to-Consumer</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Farmers Markets & CSA', desc: 'Build community supported agriculture membership and market sales.' },
              { title: 'Online Farm Stores', desc: 'E-commerce platforms for direct produce sales.' },
              { title: 'Agritourism', desc: 'Market farm tours, pick-your-own, and farm stays.' }
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
            <h3 className="text-white mb-4">Organic Farm Cooperative</h3>
            <p className="text-gray-300 mb-6">A collective of 25 organic farms needed to expand DTC sales and reduce wholesaler dependency.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$12M</div><p className="text-gray-400">DTC Revenue</p></div>
              <div><div className="text-white mb-1">8,500</div><p className="text-gray-400">CSA Members</p></div>
              <div><div className="text-white mb-1">420%</div><p className="text-gray-400">Growth in 2 Years</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">AgTech Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Sprout className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Farmer Adoption</h4><p className="text-gray-300">Educate farmers on new technologies.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Demo Programs</h4><p className="text-gray-300">Trial campaigns and field demonstrations.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Users className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Dealer Networks</h4><p className="text-gray-300">Support agricultural equipment dealers.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Agriculture Brands Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Agriculture Industry Knowledge', desc: 'Deep understanding of farming operations and rural markets.' },
              { title: 'Seasonal Campaign Expertise', desc: 'Marketing aligned with planting and harvest cycles.' },
              { title: 'Rural & Urban Reach', desc: 'Target both farmers and urban consumers.' },
              { title: 'Sustainability Focus', desc: 'Highlight organic, regenerative, and eco-friendly practices.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us grow our CSA from 200 to 8,500 members. Their understanding of both agriculture and digital marketing is incredible."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">JF</span></div>
              <div><p className="text-white">Jessica Farmer</p><p className="text-gray-400">Executive Director, Green Valley Cooperative</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Grow Your Agricultural Business?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create marketing strategies that connect your farm or agribusiness with customers and drive sustainable growth.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
