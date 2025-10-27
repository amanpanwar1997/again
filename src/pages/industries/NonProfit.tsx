import StackingSection from '../../components/StackingSection';
import { Heart, Users, Phone, Star, CheckCircle2, Award, TrendingUp, DollarSign, Globe, Target } from 'lucide-react';

export default function NonProfit() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Non-Profit & NGO Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Drive donations, recruit volunteers, and amplify your mission with purpose-driven digital marketing for non-profits and social causes.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Non-Profit Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: DollarSign, title: 'Fundraising Campaigns', desc: 'Drive donations & recurring giving' },
              { icon: Users, title: 'Volunteer Recruitment', desc: 'Build engaged volunteer base' },
              { icon: Globe, title: 'Awareness Campaigns', desc: 'Amplify your cause' },
              { icon: Heart, title: 'Donor Retention', desc: 'Increase lifetime value' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Cause Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Healthcare & Medical', 'Education & Youth', 'Environment & Climate', 'Animal Welfare', 'Human Rights', 'Arts & Culture', 'Community Development', 'Disaster Relief', 'Food Security'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">320+</div><p className="text-gray-400">Non-Profits Served</p></div>
            <div className="text-center"><div className="text-white mb-2">$85M+</div><p className="text-gray-400">Donations Raised</p></div>
            <div className="text-center"><div className="text-white mb-2">250K+</div><p className="text-gray-400">Volunteers Recruited</p></div>
            <div className="text-center"><div className="text-white mb-2">340%</div><p className="text-gray-400">Avg. Donation Growth</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Fundraising Strategy</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Digital Fundraising', desc: 'Online donation campaigns optimized for conversion.' },
              { title: 'Monthly Giving Programs', desc: 'Build sustainable recurring donation streams.' },
              { title: 'Major Donor Campaigns', desc: 'Targeted outreach to high-net-worth supporters.' }
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
            <h3 className="text-white mb-4">Environmental Non-Profit</h3>
            <p className="text-gray-300 mb-6">A conservation organization needed to increase donations and awareness.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$4.2M</div><p className="text-gray-400">Donations Raised</p></div>
              <div><div className="text-white mb-1">12K</div><p className="text-gray-400">Monthly Donors</p></div>
              <div><div className="text-white mb-1">425%</div><p className="text-gray-400">ROI on Marketing</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Storytelling & Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Heart className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Impact Stories</h4><p className="text-gray-300">Share beneficiary success stories.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Video Content</h4><p className="text-gray-300">Emotional documentary-style videos.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Target className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Impact Reporting</h4><p className="text-gray-300">Transparent donor impact communication.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Non-Profits Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Mission-Aligned', desc: 'We share your commitment to making a difference.' },
              { title: 'Non-Profit Pricing', desc: 'Special rates and grant-friendly packages.' },
              { title: 'Proven Fundraising', desc: '$85M+ raised for non-profit clients.' },
              { title: 'Impact Measurement', desc: 'Track donations, volunteers, and awareness metrics.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us grow our monthly donors from 200 to 12,000. Their compassionate approach and expertise transformed our fundraising."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">SG</span></div>
              <div><p className="text-white">Sarah Green</p><p className="text-gray-400">Executive Director, Earth Guardians</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Amplify Your Mission?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create marketing campaigns that drive donations, recruit volunteers, and change lives.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
