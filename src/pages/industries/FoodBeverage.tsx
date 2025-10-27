import StackingSection from '../../components/StackingSection';
import { UtensilsCrossed, TrendingUp, Users, Phone, Star, CheckCircle2, Camera, ShoppingCart, Award, MapPin } from 'lucide-react';

export default function FoodBeverage() {
  const totalSections = 10;
  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Food & Beverage Marketing</h1>
          <p className="text-white max-w-3xl mb-8">Drive foot traffic, online orders, and brand loyalty for restaurants, food brands, and beverage companies with appetite-inducing digital marketing.</p>
          <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Food & Beverage Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 w-full">
            {[
              { icon: UtensilsCrossed, title: 'Restaurant Marketing', desc: 'Fill tables and boost reservations' },
              { icon: ShoppingCart, title: 'Online Ordering', desc: 'Delivery app optimization' },
              { icon: Camera, title: 'Food Photography', desc: 'Mouth-watering visuals' },
              { icon: MapPin, title: 'Local SEO', desc: 'Dominate local searches' }
            ].map((s, i) => {
              const Icon = s.icon;
              return <div key={i} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all"><Icon className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">{s.title}</h4><p className="text-gray-400">{s.desc}</p></div>;
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">F&B Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {['Restaurants', 'Food Trucks', 'Cafes & Coffee Shops', 'Bars & Nightclubs', 'Food Brands', 'Beverage Companies', 'Catering Services', 'Cloud Kitchens', 'Meal Kits'].map((s, i) => (
              <div key={i} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all"><CheckCircle2 className="w-6 h-6 text-white mb-2" /><p className="text-white">{s}</p></div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center"><div className="text-white mb-2">600+</div><p className="text-gray-400">F&B Clients</p></div>
            <div className="text-center"><div className="text-white mb-2">75%</div><p className="text-gray-400">Avg. Revenue Increase</p></div>
            <div className="text-center"><div className="text-white mb-2">$250M+</div><p className="text-gray-400">Sales Generated</p></div>
            <div className="text-center"><div className="text-white mb-2">8.2x</div><p className="text-gray-400">ROI</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Restaurant Marketing</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Online Ordering Growth', desc: 'DoorDash, UberEats, Grubhub optimization and direct ordering systems.' },
              { title: 'Social Media Marketing', desc: 'Instagram and TikTok content that drives reservations.' },
              { title: 'Loyalty Programs', desc: 'Customer retention through points and rewards.' }
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
            <h3 className="text-white mb-4">Fast-Casual Restaurant Chain</h3>
            <p className="text-gray-300 mb-6">A regional chain needed to compete with national brands and increase online orders.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">340%</div><p className="text-gray-400">Online Order Growth</p></div>
              <div><div className="text-white mb-1">$8.5M</div><p className="text-gray-400">Additional Revenue</p></div>
              <div><div className="text-white mb-1">125K</div><p className="text-gray-400">New Loyalty Members</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Visual Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Camera className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Food Photography</h4><p className="text-gray-300">Professional menu and social media photography.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Award className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">Video Content</h4><p className="text-gray-300">Recipe videos and behind-the-scenes content.</p></div>
            <div className="p-6 bg-black border border-white/10 rounded-lg"><Users className="w-8 h-8 text-white mb-4" /><h4 className="text-white mb-2">UGC Campaigns</h4><p className="text-gray-300">Customer photos and reviews.</p></div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why F&B Brands Choose Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Food Industry Experts', desc: '600+ restaurants and food brands trust our strategies.' },
              { title: 'Delivery Optimization', desc: 'Maximize visibility on all major delivery platforms.' },
              { title: 'Local Domination', desc: 'Rank #1 for local food searches in your area.' },
              { title: 'Proven Results', desc: '75% average revenue increase within 6 months.' }
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
            <p className="text-white mb-6">"InchtoMilez tripled our online orders and helped us open 3 new locations. Their social media content fills our tables every night."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">MR</span></div>
              <div><p className="text-white">Marco Rossi</p><p className="text-gray-400">Owner, Bella Italia</p></div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Fill More Tables?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a marketing strategy that makes customers hungry for your food and brand.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2"><Phone className="w-5 h-5" />Call Us</button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
