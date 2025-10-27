import StackingSection from '../../components/StackingSection';
import { Factory, TrendingUp, Users, Phone, Star, CheckCircle2, Award, Globe, Package, Cog } from 'lucide-react';

export default function Manufacturing() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Manufacturing Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Generate B2B leads, showcase capabilities, and drive growth for manufacturers, industrial suppliers, and production companies.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Manufacturing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Factory, title: 'B2B Lead Generation', desc: 'Attract qualified buyers' },
              { icon: Globe, title: 'Industrial SEO', desc: 'Rank for industry terms' },
              { icon: Package, title: 'Capability Marketing', desc: 'Showcase production capacity' },
              { icon: Cog, title: 'Technical Content', desc: 'Engineering-focused content' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Manufacturing Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Automotive Parts', 'Aerospace', 'Electronics', 'Machinery', 'Plastics & Injection Molding', 'Metal Fabrication', 'Chemical Manufacturing', 'Food Processing', 'Textiles'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">180+</div><p className="text-gray-400">Manufacturers</p></div>
            <div className="text-center"><div className="text-white mb-2">$280M+</div><p className="text-gray-400">Contract Value</p></div>
            <div className="text-center"><div className="text-white mb-2">15K+</div><p className="text-gray-400">RFQs Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">42%</div><p className="text-gray-400">Sales Cycle Reduction</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">B2B Manufacturing Marketing</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'LinkedIn Lead Generation', desc: 'Target procurement managers, engineers, and decision-makers.' },
              { title: 'Trade Show Support', desc: 'Pre-show campaigns and post-show nurturing.' },
              { title: 'Technical Documentation', desc: 'Capability brochures, case studies, white papers.' }
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
            <h3 className="text-white mb-4">Precision Machining Company</h3>
            <p className="text-gray-300 mb-6">A CNC machine shop needed to attract aerospace and medical device manufacturers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$18M</div><p className="text-gray-400">New Contracts</p></div>
              <div><div className="text-white mb-1">420+</div><p className="text-gray-400">Qualified RFQs</p></div>
              <div><div className="text-white mb-1">65%</div><p className="text-gray-400">Win Rate Increase</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Digital Capabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Factory className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Virtual Tours</h4><p className="text-gray-300">Showcase facilities and equipment.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Cog className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Process Videos</h4><p className="text-gray-300">Demonstrate manufacturing capabilities.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Certifications</h4><p className="text-gray-300">Highlight ISO, AS9100, ITAR compliance.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Manufacturers Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Industrial Marketing Experts', desc: '180+ manufacturers trust our B2B strategies.' },
              { title: 'Technical Understanding', desc: 'We speak the language of engineers and procurement.' },
              { title: 'Long Sales Cycle Expertise', desc: 'Nurture campaigns for complex B2B sales.' },
              { title: 'RFQ Generation', desc: '15K+ qualified requests for quote delivered.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us land contracts with Fortune 500 companies. Their understanding of B2B manufacturing marketing is exceptional."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">RP</span></div>
              <div><p className="text-white">Robert Peters</p><p className="text-gray-400">VP Sales, Precision Industries</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Grow Your Manufacturing Business?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create B2B marketing campaigns that generate qualified RFQs and new contracts.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Book Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
