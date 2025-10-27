import StackingSection from '../../components/StackingSection';
import { HardHat, TrendingUp, Users, Phone, Star, CheckCircle2, Award, MapPin, Building, Wrench } from 'lucide-react';

export default function Construction() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Construction Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Generate project leads, build brand credibility, and grow your construction business with targeted B2B and B2C marketing.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Construction Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: HardHat, title: 'Contractor Marketing', desc: 'Residential & commercial leads' },
              { icon: Building, title: 'Project Showcase', desc: 'Portfolio & case studies' },
              { icon: MapPin, title: 'Local SEO', desc: 'Dominate service area searches' },
              { icon: Users, title: 'Bid Management', desc: 'RFP & bidding support' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Construction Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['General Contractors', 'Home Builders', 'Commercial Construction', 'Remodeling', 'Roofing', 'HVAC', 'Electrical', 'Plumbing', 'Landscape Construction'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">380+</div><p className="text-gray-400">Construction Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">$520M+</div><p className="text-gray-400">Project Value</p></div>
            <div className="text-center"><div className="text-white mb-2">28K+</div><p className="text-gray-400">Qualified Leads</p></div>
            <div className="text-center"><div className="text-white mb-2">65%</div><p className="text-gray-400">Lead-to-Project Rate</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Lead Generation</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Residential Projects', desc: 'Homeowner lead generation through Google, social media, and local advertising.' },
              { title: 'Commercial Bids', desc: 'Target property managers, developers, and facility managers.' },
              { title: 'Emergency Services', desc: 'Priority listings for urgent repair and restoration work.' }
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
            <h3 className="text-white mb-4">Commercial Construction Firm</h3>
            <p className="text-gray-300 mb-6">A mid-size contractor needed to expand into new markets and win larger projects.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$120M</div><p className="text-gray-400">New Project Value</p></div>
              <div><div className="text-white mb-1">42</div><p className="text-gray-400">Major Projects Won</p></div>
              <div><div className="text-white mb-1">850%</div><p className="text-gray-400">ROI</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Project Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Building className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Before/After Showcase</h4><p className="text-gray-300">Visual portfolio of completed projects.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Client Testimonials</h4><p className="text-gray-300">Video reviews and written testimonials.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Wrench className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Expertise Content</h4><p className="text-gray-300">Educational guides and resources.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Contractors Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Construction Industry Experts', desc: '380+ contractors trust our proven strategies.' },
              { title: 'Qualified Leads Only', desc: 'Pre-qualified homeowners and businesses ready to start projects.' },
              { title: 'Local Market Domination', desc: 'Rank #1 for construction services in your service area.' },
              { title: 'Fast ROI', desc: 'Average 850% return on marketing investment.' }
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
            <p className="text-white mb-6">"InchtoMilez filled our project pipeline with qualified leads. We went from $8M to $35M in annual revenue in just 2 years."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">MW</span></div>
              <div><p className="text-white">Mike Wilson</p><p className="text-gray-400">President, Elite Builders</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Build Your Business?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create marketing campaigns that generate qualified construction leads and grow your project pipeline.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Call Now</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
