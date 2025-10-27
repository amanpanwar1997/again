import StackingSection from '../../components/StackingSection';
import { Scale, Shield, Users, Phone, Star, CheckCircle2, Award, TrendingUp, FileText, Building } from 'lucide-react';

export default function Legal() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Legal Services Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Generate qualified leads and build trust for law firms, attorneys, and legal service providers with ethical, results-driven marketing.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Legal Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Scale, title: 'Law Firm SEO', desc: 'Rank for practice area searches' },
              { icon: Users, title: 'Client Acquisition', desc: 'Generate qualified case leads' },
              { icon: Shield, title: 'Reputation Management', desc: 'Build attorney credibility' },
              { icon: FileText, title: 'Content Marketing', desc: 'Legal expertise showcasing' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Practice Areas</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Personal Injury', 'Family Law', 'Criminal Defense', 'Corporate Law', 'Immigration', 'Estate Planning', 'Real Estate Law', 'Employment Law', 'Bankruptcy'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">450+</div><p className="text-gray-400">Law Firms</p></div>
            <div className="text-center"><div className="text-white mb-2">125K+</div><p className="text-gray-400">Case Leads Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">$420M+</div><p className="text-gray-400">Client Value Delivered</p></div>
            <div className="text-center"><div className="text-white mb-2">98%</div><p className="text-gray-400">Bar Compliance Rate</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Ethical Marketing</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Bar Compliant Campaigns', desc: 'All marketing follows state bar advertising rules and ethics guidelines.' },
              { title: 'Qualified Lead Generation', desc: 'Attract clients who need your specific legal expertise.' },
              { title: 'Thought Leadership', desc: 'Position attorneys as trusted legal experts through content.' }
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
            <h3 className="text-white mb-4">Personal Injury Law Firm</h3>
            <p className="text-gray-300 mb-6">A regional PI firm needed to compete with national TV advertisers.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">850+</div><p className="text-gray-400">New Cases/Year</p></div>
              <div><div className="text-white mb-1">$45M</div><p className="text-gray-400">Case Value Generated</p></div>
              <div><div className="text-white mb-1">$320</div><p className="text-gray-400">Cost Per Case</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Digital Presence</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Building className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Local SEO</h4><p className="text-gray-300">Dominate "lawyer near me" searches.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Reviews</h4><p className="text-gray-300">Build credibility with client testimonials.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><FileText className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Legal Content</h4><p className="text-gray-300">Educational blog posts and resources.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Law Firms Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Legal Marketing Specialists', desc: '450+ law firms trust our bar-compliant strategies.' },
              { title: 'High-Value Cases', desc: 'We attract clients with real legal needs and budgets.' },
              { title: 'Ethical Practices', desc: 'Every campaign follows state bar advertising rules.' },
              { title: 'Transparent Reporting', desc: 'Clear ROI tracking and case attribution.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us grow from 50 to 850 cases annually while maintaining perfect bar compliance. Their legal marketing expertise is unmatched."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">JD</span></div>
              <div><p className="text-white">John Davidson, Esq.</p><p className="text-gray-400">Managing Partner, Davidson & Associates</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Grow Your Law Firm?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create ethical, effective marketing campaigns that attract high-value clients.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Consultation</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
