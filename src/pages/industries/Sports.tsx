import StackingSection from '../../components/StackingSection';
import { Trophy, Users, Phone, Star, CheckCircle2, Target, Award, TrendingUp, Zap, Dumbbell } from 'lucide-react';

export default function Sports() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Sports & Fitness Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Build fan engagement, drive ticket sales, and grow memberships for sports teams, fitness brands, and athletic organizations.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Sports Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Trophy, title: 'Sports Teams', desc: 'Fan engagement & ticket sales' },
              { icon: Dumbbell, title: 'Fitness Centers', desc: 'Membership growth campaigns' },
              { icon: Users, title: 'Athlete Branding', desc: 'Personal brand building' },
              { icon: Target, title: 'Sponsorship Marketing', desc: 'Brand partnerships & activations' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Sports Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Professional Teams', 'Fitness Gyms', 'Sports Leagues', 'Athletic Apparel', 'Nutrition Brands', 'Personal Trainers', 'Sports Equipment', 'E-Sports', 'Youth Sports'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">350+</div><p className="text-gray-400">Sports Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">$120M+</div><p className="text-gray-400">Ticket Sales Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">500K+</div><p className="text-gray-400">New Gym Members</p></div>
            <div className="text-center"><div className="text-white mb-2">85%</div><p className="text-gray-400">Fan Engagement Increase</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Fan Engagement</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Social Media Strategy', desc: 'Build passionate fan communities across all platforms.' },
              { title: 'Game Day Marketing', desc: 'Drive ticket sales and create unforgettable experiences.' },
              { title: 'Merchandise Sales', desc: 'E-commerce optimization for team gear and apparel.' }
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
            <h3 className="text-white mb-4">Regional Sports Team</h3>
            <p className="text-gray-300 mb-6">A minor league team needed to increase attendance and fan engagement.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">220%</div><p className="text-gray-400">Attendance Increase</p></div>
              <div><div className="text-white mb-1">$3.2M</div><p className="text-gray-400">Ticket Revenue Growth</p></div>
              <div><div className="text-white mb-1">45K</div><p className="text-gray-400">New Social Followers</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Fitness Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Dumbbell className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Membership Growth</h4><p className="text-gray-300">Targeted campaigns driving gym signups.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Users className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Retention Programs</h4><p className="text-gray-300">Keep members engaged and active.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Zap className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Class Promotion</h4><p className="text-gray-300">Fill group fitness classes.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Sports Brands Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Sports Marketing Experts', desc: '350+ teams, gyms, and athletic brands served.' },
              { title: 'Fan-First Approach', desc: 'We understand fan psychology and engagement.' },
              { title: 'Multi-Channel Strategy', desc: 'Social, email, SMS, and in-venue marketing.' },
              { title: 'Proven Results', desc: '85% average increase in fan engagement.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us sell out 18 consecutive home games. Their social media campaigns created incredible buzz and fan excitement."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">KW</span></div>
              <div><p className="text-white">Kyle Williams</p><p className="text-gray-400">Marketing Director, Thunder FC</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Win More Fans?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create marketing campaigns that fill stadiums, gyms, and build passionate fan communities.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Call Now</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
