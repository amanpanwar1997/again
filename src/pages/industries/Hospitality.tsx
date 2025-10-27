import StackingSection from '../../components/StackingSection';
import { Hotel, MapPin, Star, Users, TrendingUp, Phone, CheckCircle2, Globe, Camera, Award } from 'lucide-react';

export default function Hospitality() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Hospitality & Tourism Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Drive bookings, increase occupancy, and build brand loyalty for hotels, resorts, restaurants, and travel companies with proven digital marketing strategies.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Hospitality Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Hotel, title: 'Hotel Marketing', desc: 'Direct bookings & OTA optimization' },
              { icon: MapPin, title: 'Tourism Campaigns', desc: 'Destination marketing & attractions' },
              { icon: Users, title: 'Restaurant Marketing', desc: 'Reservations & foot traffic' },
              { icon: Globe, title: 'Travel Marketing', desc: 'Tour packages & experiences' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Hospitality Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Hotels & Resorts', 'Restaurants & Bars', 'Travel Agencies', 'Event Venues', 'Tourism Boards', 'Cruise Lines', 'Vacation Rentals', 'Spas & Wellness'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">400+</div><p className="text-gray-400">Hospitality Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">65%</div><p className="text-gray-400">Avg. Booking Increase</p></div>
            <div className="text-center"><div className="text-white mb-2">$320M+</div><p className="text-gray-400">Revenue Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">7.5x</div><p className="text-gray-400">ROI on Marketing</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Direct Booking Strategy</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Reduce OTA Dependency', desc: 'Drive direct bookings through your website with metasearch and remarketing.' },
              { title: 'Revenue Management', desc: 'Dynamic pricing strategies and promotional campaigns.' },
              { title: 'Loyalty Programs', desc: 'Guest retention through membership and rewards programs.' }
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
            <h3 className="text-white mb-4">Boutique Hotel Chain</h3>
            <p className="text-gray-300 mb-6">A 12-property boutique hotel chain needed to increase direct bookings and reduce OTA commissions.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">85%</div><p className="text-gray-400">Direct Booking Rate</p></div>
              <div><div className="text-white mb-1">$2.4M</div><p className="text-gray-400">Annual Savings on Commissions</p></div>
              <div><div className="text-white mb-1">92%</div><p className="text-gray-400">Occupancy Rate</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Visual Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Camera className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Professional Photography</h4><p className="text-gray-300">High-quality images showcasing your property.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Globe className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Virtual Tours</h4><p className="text-gray-300">360° property walkthroughs.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Star className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Video Content</h4><p className="text-gray-300">Destination highlights and experiences.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Reputation Management</h2>
          <div className="max-w-4xl">
            <p className="text-white mb-6">Your online reputation drives booking decisions. We help you build and protect it.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">Review Generation</h4><p className="text-gray-300">Automated requests for guest reviews on Google, TripAdvisor, Yelp.</p></div>
              <div className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">Review Response</h4><p className="text-gray-300">Professional responses to all reviews building trust.</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Client Testimonial</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">{[1,2,3,4,5].map(s => <Star key={s} className="w-6 h-6 text-yellow-500 fill-yellow-500" />)}</div>
            <p className="text-white mb-6">"InchtoMilez helped us reduce our OTA dependency from 60% to 15% while increasing our overall bookings by 40%. Their strategies transformed our business."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">MP</span></div>
              <div><p className="text-white">Maria Perez</p><p className="text-gray-400">General Manager, Seaside Resort Group</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Increase Direct Bookings?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a marketing strategy that drives occupancy and revenue for your hospitality business.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Call Us</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
