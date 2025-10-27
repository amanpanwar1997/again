import StackingSection from '../../components/StackingSection';
import { Car, TrendingUp, Users, Phone, Star, CheckCircle2, Target, Award, Wrench, MapPin } from 'lucide-react';

export default function Automotive() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Automotive Marketing Solutions</h1>
          <p className="text-white max-w-3xl mb-8">Drive showroom traffic, increase vehicle sales, and boost service appointments for dealerships, auto manufacturers, and automotive service providers.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Automotive Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: Car, title: 'Dealership Marketing', desc: 'New & used vehicle sales' },
              { icon: Wrench, title: 'Service Marketing', desc: 'Maintenance & repair bookings' },
              { icon: Target, title: 'Conquest Campaigns', desc: 'Steal market share' },
              { icon: MapPin, title: 'Local Targeting', desc: 'Geo-targeted campaigns' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Automotive Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['New Car Dealerships', 'Used Car Lots', 'Luxury Auto Dealers', 'Auto Service Centers', 'Auto Parts Retailers', 'Car Rental Companies', 'EV Manufacturers', 'Auto Insurance'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">250+</div><p className="text-gray-400">Dealership Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">15,000+</div><p className="text-gray-400">Vehicles Sold Monthly</p></div>
            <div className="text-center"><div className="text-white mb-2">55%</div><p className="text-gray-400">Increase in Showroom Traffic</p></div>
            <div className="text-center"><div className="text-white mb-2">$450M+</div><p className="text-gray-400">Vehicle Sales Generated</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Digital Showroom</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'VR Vehicle Tours', desc: '360° interior and exterior vehicle showcases.' },
              { title: 'Inventory Marketing', desc: 'Automated campaigns for each vehicle in stock.' },
              { title: 'Test Drive Bookings', desc: 'Online scheduling and automated reminders.' }
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
            <h3 className="text-white mb-4">Multi-Location Dealership Group</h3>
            <p className="text-gray-300 mb-6">A 8-location dealership group needed to increase vehicle sales across all brands.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">2,800</div><p className="text-gray-400">Additional Vehicles Sold</p></div>
              <div><div className="text-white mb-1">$42M</div><p className="text-gray-400">Additional Revenue</p></div>
              <div><div className="text-white mb-1">650%</div><p className="text-gray-400">ROI on Marketing</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Service Department Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">Service Reminders</h4><p className="text-gray-300">Automated oil change, tire rotation, and maintenance reminders.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><h4 className="text-white mb-2">Seasonal Campaigns</h4><p className="text-gray-300">Winter tire, AC service, and pre-road trip promotions.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Dealerships Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Automotive Specialists', desc: '250+ dealerships trust our proven strategies.' },
              { title: 'Full-Funnel Marketing', desc: 'From awareness to purchase and service retention.' },
              { title: 'Real-Time Inventory Sync', desc: 'Dynamic ads based on current stock.' },
              { title: 'Conquest & Retention', desc: 'Attract new customers while keeping current ones.' }
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
            <p className="text-white mb-6">"InchtoMilez transformed our digital marketing. We're now the #1 dealer in our region, selling 200+ vehicles per month. Their conquest campaigns are incredibly effective."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">JB</span></div>
              <div><p className="text-white">James Brown</p><p className="text-gray-400">General Manager, Metro Auto Group</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Increase Vehicle Sales?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a data-driven automotive marketing strategy that fills your showroom and service bays.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Call Now</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
