import StackingSection from '../../components/StackingSection';
import { DollarSign, Shield, TrendingUp, Users, Award, Phone, Star, CheckCircle2, CreditCard, BarChart3, Lock, Globe } from 'lucide-react';

export default function Finance() {
  const totalSections = 12;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Finance & Banking Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Build trust and drive customer acquisition for banks, fintech, insurance, and financial services with compliant, data-driven marketing strategies.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">Case Studies</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Financial Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: DollarSign, title: 'Fintech Marketing', desc: 'User acquisition for digital banking apps' },
              { icon: Shield, title: 'Compliance-First', desc: 'FINRA, SEC compliant campaigns' },
              { icon: CreditCard, title: 'Credit Card Acquisition', desc: 'Targeted application campaigns' },
              { icon: TrendingUp, title: 'Investment Marketing', desc: 'Attract high-net-worth clients' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Finance Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['Retail Banking', 'Investment Firms', 'Insurance Companies', 'Fintech Startups', 'Credit Unions', 'Wealth Management', 'Payment Processing', 'Cryptocurrency', 'Mortgage Lenders'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">200+</div><p className="text-gray-400">Financial Institutions</p></div>
            <div className="text-center"><div className="text-white mb-2">$2.5B+</div><p className="text-gray-400">AUM Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">100%</div><p className="text-gray-400">Regulatory Compliance</p></div>
            <div className="text-center"><div className="text-white mb-2">4.2x</div><p className="text-gray-400">ROI on Marketing</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Trust & Compliance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Regulatory Compliance</h4>
              <p className="text-gray-300 mb-4">All campaigns comply with FINRA, SEC, FTC, and CFPB regulations.</p>
              <ul className="space-y-2 text-gray-400"><li>• Required disclosures</li><li>• Risk language</li><li>• Approval workflows</li></ul>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Data Security</h4>
              <p className="text-gray-300 mb-4">Bank-level encryption and PCI DSS compliance for customer data.</p>
              <ul className="space-y-2 text-gray-400"><li>• Encrypted data transmission</li><li>• SOC 2 certified</li><li>• GDPR compliant</li></ul>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Financial Marketing Strategies</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Account Opening Campaigns', desc: 'Incentivize new checking, savings, and investment account signups.' },
              { title: 'Loan & Mortgage Marketing', desc: 'Targeted campaigns for qualified borrowers with competitive rates.' },
              { title: 'Wealth Management Lead Gen', desc: 'Attract high-net-worth individuals seeking advisory services.' },
              { title: 'Financial Education Content', desc: 'Build trust with educational blog posts, calculators, and webinars.' }
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
            <h3 className="text-white mb-4">Regional Credit Union</h3>
            <p className="text-gray-300 mb-6">A credit union needed to compete with national banks and increase membership by 25%.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">12,400</div><p className="text-gray-400">New Members (42% growth)</p></div>
              <div><div className="text-white mb-1">$180M</div><p className="text-gray-400">New Deposits</p></div>
              <div><div className="text-white mb-1">$85</div><p className="text-gray-400">Cost Per Acquisition</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Digital Banking</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Globe className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Mobile App Marketing</h4><p className="text-gray-300">Drive downloads and active users for banking apps.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Lock className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Security Messaging</h4><p className="text-gray-300">Build confidence with fraud protection and encryption.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Users className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Customer Retention</h4><p className="text-gray-300">Increase product adoption and wallet share.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Investment Marketing</h2>
          <div className="max-w-4xl">
            <p className="text-white mb-6">Attract qualified investors with compliant, educational marketing campaigns.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">Robo-Advisor Campaigns</h4><p className="text-gray-300">Automated investment platform user acquisition.</p></div>
              <div className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">Retirement Planning</h4><p className="text-gray-300">401(k) and IRA rollover lead generation.</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Financial Institutions Trust Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Compliance Expertise', desc: '200+ compliant campaigns with zero regulatory issues.' },
              { title: 'Financial Services Focus', desc: 'Specialized team understanding complex financial products.' },
              { title: 'Data Security', desc: 'Bank-level security protecting sensitive customer information.' },
              { title: 'Proven ROI', desc: 'Average 4.2x return on marketing investment.' }
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
            <p className="text-white mb-6">"InchtoMilez understands the complexities of financial services marketing. Their compliant campaigns helped us acquire 12,000 new members while maintaining perfect regulatory standing."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">TC</span></div>
              <div><p className="text-white">Tom Chen</p><p className="text-gray-400">VP Marketing, Coastal Credit Union</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Grow Your Financial Institution?</h2>
          <p className="text-white max-w-2xl mb-8">Let's build compliant, effective marketing campaigns that drive account growth and customer acquisition.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
