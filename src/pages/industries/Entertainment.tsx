import StackingSection from '../../components/StackingSection';
import { Film, Music, Users, Phone, Star, CheckCircle2, Video, Award, TrendingUp, Tv } from 'lucide-react';

export default function Entertainment() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Entertainment & Media Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Build audiences, drive engagement, and create viral moments for film, music, gaming, and entertainment brands.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Entertainment Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Film, title: 'Film Marketing', desc: 'Box office & streaming launches' },
              { icon: Music, title: 'Music Promotion', desc: 'Artist & album campaigns' },
              { icon: Tv, title: 'Streaming Growth', desc: 'Subscriber acquisition' },
              { icon: Video, title: 'Content Creation', desc: 'Viral video production' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Entertainment Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Film Studios', 'Music Labels', 'Streaming Platforms', 'Gaming Companies', 'Live Events', 'Theater Productions', 'Content Creators', 'Podcasts', 'Animation Studios'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">220+</div><p className="text-gray-400">Entertainment Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">850M+</div><p className="text-gray-400">Content Views</p></div>
            <div className="text-center"><div className="text-white mb-2">12M+</div><p className="text-gray-400">New Fans Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">450%</div><p className="text-gray-400">Avg. Engagement Growth</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Launch Campaigns</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Film Launches', desc: 'Box office marketing, social buzz, influencer screenings.' },
              { title: 'Album Releases', desc: 'Streaming campaigns, radio promotion, social virality.' },
              { title: 'Game Launches', desc: 'Pre-orders, beta campaigns, influencer partnerships.' }
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
            <h3 className="text-white mb-4">Independent Film Studio</h3>
            <p className="text-gray-300 mb-6">An indie film needed to compete with major studio releases on a limited budget.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$24M</div><p className="text-gray-400">Box Office Revenue</p></div>
              <div><div className="text-white mb-1">85M+</div><p className="text-gray-400">Social Impressions</p></div>
              <div><div className="text-white mb-1">95%</div><p className="text-gray-400">Audience Score</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Audience Building</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Users className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Fan Communities</h4><p className="text-gray-300">Build engaged superfan communities.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><TrendingUp className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Viral Moments</h4><p className="text-gray-300">Create shareable, trending content.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Influencer Partnerships</h4><p className="text-gray-300">Collaborate with entertainment influencers.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Entertainment Brands Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Entertainment Industry Insiders', desc: 'Team with experience at major studios, labels, and platforms.' },
              { title: 'Cultural Relevance', desc: 'We understand trends and create moments that matter.' },
              { title: 'Multi-Platform Expertise', desc: 'TikTok, YouTube, Instagram, Twitch, and emerging platforms.' },
              { title: 'Launch Specialists', desc: '220+ successful film, music, and game launches.' }
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
            <p className="text-white mb-6">"InchtoMilez helped us launch our album to #1 on the charts. Their understanding of music marketing and streaming algorithms is incredible."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">LH</span></div>
              <div><p className="text-white">Luna Hayes</p><p className="text-gray-400">Artist Manager, Stellar Records</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Create Entertainment Magic?</h2>
          <p className="text-white max-w-2xl mb-8">Let's build campaigns that captivate audiences and create cultural moments.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Book Call</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
