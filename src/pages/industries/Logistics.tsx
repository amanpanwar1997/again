import StackingSection from '../../components/StackingSection';
import { Truck, Package, MapPin, TrendingUp, Users, Phone, Star, CheckCircle2, Globe, BarChart3, Clock, Award } from 'lucide-react';

export default function Logistics() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Logistics & Transportation Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Drive business growth for logistics companies, freight forwarders, and transportation providers with targeted B2B marketing strategies that generate qualified leads.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Logistics Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: Truck, title: 'Fleet Marketing', desc: 'Trucking and freight services' },
              { icon: Package, title: '3PL Marketing', desc: 'Third-party logistics providers' },
              { icon: Globe, title: 'Freight Forwarding', desc: 'International shipping services' },
              { icon: MapPin, title: 'Last Mile Delivery', desc: 'E-commerce fulfillment marketing' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Logistics Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['Freight & Trucking', 'Warehousing & Distribution', 'Ocean Freight', 'Air Cargo', 'Rail Transport', 'Courier Services', 'Cold Chain Logistics', 'Automotive Logistics', 'E-commerce Fulfillment'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">120+</div><p className="text-gray-400">Logistics Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">$85M+</div><p className="text-gray-400">Contract Value Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">65%</div><p className="text-gray-400">Increase in B2B Leads</p></div>
            <div className="text-center"><div className="text-white mb-2">5.2x</div><p className="text-gray-400">ROI on Marketing</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">B2B Lead Generation</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Decision-Maker Targeting', desc: 'Reach supply chain managers, procurement directors, and logistics VPs.' },
              { title: 'RFQ & RFP Campaigns', desc: 'Capture businesses actively seeking logistics partners.' },
              { title: 'Trade Show Marketing', desc: 'Pre-event, at-event, and post-event engagement strategies.' }
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
            <h3 className="text-white mb-4">Regional 3PL Provider</h3>
            <p className="text-gray-300 mb-6">A third-party logistics company needed to expand from regional to national accounts.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">85</div><p className="text-gray-400">New Enterprise Clients</p></div>
              <div><div className="text-white mb-1">$12M</div><p className="text-gray-400">Annual Contract Value</p></div>
              <div><div className="text-white mb-1">450%</div><p className="text-gray-400">Lead Volume Increase</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Digital Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Globe className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">SEO for Logistics</h4><p className="text-gray-300">Rank for freight, shipping, and warehousing searches.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><BarChart3 className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">LinkedIn Marketing</h4><p className="text-gray-300">B2B campaigns targeting supply chain professionals.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Clock className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Content Marketing</h4><p className="text-gray-300">Industry insights and logistics thought leadership.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Logistics Companies Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'B2B Expertise', desc: 'Specialized in complex B2B sales cycles and enterprise accounts.' },
              { title: 'Industry Knowledge', desc: 'Understanding of freight, warehousing, and supply chain management.' },
              { title: 'Multi-Channel Approach', desc: 'LinkedIn, trade shows, email, and search marketing integration.' },
              { title: 'Contract-Based Sales', desc: 'Strategies designed for long-term logistics contracts.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us break into Fortune 500 accounts. Their understanding of logistics B2B sales and targeted LinkedIn campaigns delivered 85 new enterprise clients in 18 months."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">DW</span></div>
              <div><p className="text-white">David Williams</p><p className="text-gray-400">VP Sales, Continental Logistics</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Generate Logistics Leads?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a B2B marketing strategy that fills your pipeline with qualified enterprise accounts.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
