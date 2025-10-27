import StackingSection from '../../components/StackingSection';
import { Pill, Shield, Users, Phone, Star, CheckCircle2, Award, TrendingUp, FileText, Globe } from 'lucide-react';

export default function Pharmaceutical() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Pharmaceutical Marketing</h1>
          <p className="text-white max-w-3xl mb-8">FDA-compliant marketing for pharmaceutical companies, biotech firms, and life sciences organizations.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Pharma Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Pill, title: 'DTC Campaigns', desc: 'Direct-to-consumer advertising' },
              { icon: Users, title: 'HCP Marketing', desc: 'Physician & specialist outreach' },
              { icon: Shield, title: 'FDA Compliance', desc: 'Fully compliant campaigns' },
              { icon: FileText, title: 'Medical Content', desc: 'Scientific & educational materials' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Pharmaceutical Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Prescription Drugs', 'OTC Medications', 'Biotech', 'Medical Devices', 'Vaccines', 'Generic Drugs', 'Specialty Pharma', 'Clinical Research', 'Contract Manufacturing'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">120+</div><p className="text-gray-400">Pharma Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">$350M+</div><p className="text-gray-400">Revenue Impact</p></div>
            <div className="text-center"><div className="text-white mb-2">100%</div><p className="text-gray-400">FDA Compliance</p></div>
            <div className="text-center"><div className="text-white mb-2">45%</div><p className="text-gray-400">Prescription Lift</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Compliance & Strategy</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'FDA-Compliant Advertising', desc: 'All campaigns meet FDA guidelines for fair balance, ISI, and risk disclosure.' },
              { title: 'HCP Education', desc: 'Medical science liaisons, CME programs, peer-to-peer education.' },
              { title: 'Patient Support Programs', desc: 'Adherence campaigns, copay assistance awareness, patient education.' }
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
            <h3 className="text-white mb-4">Specialty Pharmaceutical Company</h3>
            <p className="text-gray-300 mb-6">A rare disease drug needed HCP awareness and patient identification campaigns.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$85M</div><p className="text-gray-400">Annual Rx Revenue</p></div>
              <div><div className="text-white mb-1">2,800</div><p className="text-gray-400">Patients Started Therapy</p></div>
              <div><div className="text-white mb-1">92%</div><p className="text-gray-400">HCP Awareness</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Marketing Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Globe className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">DTC Advertising</h4><p className="text-gray-300">TV, digital, print with full fair balance.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Users className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">HCP Digital</h4><p className="text-gray-300">Medscape, Doximity, medical journals.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Patient Support</h4><p className="text-gray-300">Disease awareness, adherence programs.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Pharma Companies Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Regulatory Expertise', desc: '100% FDA-compliant campaigns with zero violations.' },
              { title: 'Medical Affairs Support', desc: 'Work with MSLs, medical writers, and clinical teams.' },
              { title: 'Launch Specialists', desc: '50+ successful drug launches.' },
              { title: 'Multi-Stakeholder Approach', desc: 'Patients, HCPs, payers, and KOLs.' }
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
            <p className="text-white mb-6">"InchtoMilez's understanding of pharma regulations and HCP marketing is exceptional. They helped us achieve 92% physician awareness for our specialty drug."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">DR</span></div>
              <div><p className="text-white">Dr. Rachel Kim</p><p className="text-gray-400">VP Marketing, BioNova Therapeutics</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Launch Your Next Drug?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create FDA-compliant marketing campaigns that drive prescriptions and patient outcomes.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Schedule Meeting</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
