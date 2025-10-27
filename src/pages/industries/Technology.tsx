import StackingSection from '../../components/StackingSection';
import { Code, Smartphone, Cloud, Zap, Users, TrendingUp, Award, BarChart3, Target, Star, Phone, Globe, CheckCircle2, Cpu } from 'lucide-react';

export default function Technology() {
  const totalSections = 12;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Technology & IT Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Drive growth for SaaS, software, IT services, and tech startups with B2B marketing strategies that generate qualified leads and accelerate sales cycles.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">Case Studies</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Tech Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: Globe, title: 'SaaS Marketing', desc: 'Free trial and demo generation' },
              { icon: Target, title: 'B2B Lead Gen', desc: 'Enterprise decision-maker targeting' },
              { icon: Code, title: 'Developer Marketing', desc: 'Technical content and API docs' },
              { icon: Cloud, title: 'Cloud Marketing', desc: 'AWS, Azure, GCP partner campaigns' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Technology Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['SaaS & Software', 'Cybersecurity', 'Cloud Computing', 'AI & Machine Learning', 'IT Services', 'DevOps Tools', 'Data Analytics', 'Blockchain & Web3', 'IoT Solutions'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Tech Marketing Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">300+</div><p className="text-gray-400">Tech Companies</p></div>
            <div className="text-center"><div className="text-white mb-2">$120M+</div><p className="text-gray-400">ARR Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">45%</div><p className="text-gray-400">Avg. MQL Increase</p></div>
            <div className="text-center"><div className="text-white mb-2">28%</div><p className="text-gray-400">Shorter Sales Cycles</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">B2B Tech Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Account-Based Marketing</h4>
              <p className="text-gray-300 mb-4">Target high-value enterprise accounts with personalized campaigns.</p>
              <ul className="space-y-2 text-gray-400"><li>• C-suite targeting</li><li>• Multi-channel outreach</li><li>• Intent data activation</li></ul>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Content Marketing</h4>
              <p className="text-gray-300 mb-4">Thought leadership, whitepapers, and technical documentation.</p>
              <ul className="space-y-2 text-gray-400"><li>• Technical blog posts</li><li>• Case studies & ROI calculators</li><li>• Webinar programs</li></ul>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">SaaS Growth Strategy</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Free Trial Optimization', desc: 'Convert trial users to paid customers with automated onboarding sequences.' },
              { title: 'Product-Led Growth', desc: 'Leverage in-app messaging and viral loops to drive organic adoption.' },
              { title: 'Expansion Revenue', desc: 'Upsell and cross-sell campaigns increasing customer lifetime value.' },
              { title: 'Churn Reduction', desc: 'Win-back campaigns and engagement programs retaining customers.' }
            ].map((item, index) => (
              <div key={index} className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">{item.title}</h4><p className="text-gray-300">{item.desc}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Success Story</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <h3 className="text-white mb-4">Cybersecurity SaaS Platform</h3>
            <p className="text-gray-300 mb-6">A cybersecurity startup needed to generate enterprise leads and achieve $10M ARR.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$15.2M</div><p className="text-gray-400">ARR Achieved</p></div>
              <div><div className="text-white mb-1">850+</div><p className="text-gray-400">Enterprise Customers</p></div>
              <div><div className="text-white mb-1">$320</div><p className="text-gray-400">Cost Per SQL</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Technical Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Code className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Developer Relations</h4><p className="text-gray-300">Community building, API documentation, and developer advocacy.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Cpu className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Product Marketing</h4><p className="text-gray-300">Launch campaigns, feature announcements, and positioning.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Zap className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Growth Hacking</h4><p className="text-gray-300">Rapid experimentation and viral growth tactics.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Marketing Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {[
              { icon: BarChart3, title: 'Analytics Platforms', desc: 'Mixpanel, Amplitude, Heap for product analytics.' },
              { icon: Users, title: 'Marketing Automation', desc: 'HubSpot, Marketo, Pardot for lead nurturing.' },
              { icon: Target, title: 'ABM Platforms', desc: '6sense, Demandbase, RollWorks for account targeting.' },
              { icon: Smartphone, title: 'Product Analytics', desc: 'Pendo, Appcues for in-app engagement.' }
            ].map((item, index) => {
              const Icon = item.icon;
              return <div key={index} className="flex gap-4"><Icon className="w-8 h-8 text-white flex-shrink-0" /><div><h4 className="text-white mb-2">{item.title}</h4><p className="text-gray-300">{item.desc}</p></div></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Tech Companies Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Technical Expertise', desc: 'Our team includes former developers and product managers who speak your language.' },
              { title: 'Data-Driven Approach', desc: 'Advanced attribution modeling and cohort analysis drive every decision.' },
              { title: 'Fast Iteration', desc: 'Agile marketing sprints aligned with your product development cycles.' },
              { title: 'Scalable Systems', desc: 'Marketing infrastructure that grows with your ARR.' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4"><CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" /><div><h4 className="text-white mb-2">{item.title}</h4><p className="text-gray-300">{item.desc}</p></div></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={10} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Client Testimonial</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}</div>
            <p className="text-white mb-6">"InchtoMilez helped us scale from 50 to 500 enterprise customers in 18 months. Their understanding of technical audiences and B2B SaaS metrics was crucial to our success."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">RK</span></div>
              <div><p className="text-white">Raj Kumar</p><p className="text-gray-400">CMO, CloudSecure Technologies</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Accelerate Tech Growth?</h2>
          <p className="text-white max-w-2xl mb-8">Let's build a data-driven B2B marketing engine that drives pipeline and revenue.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Book Demo</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
