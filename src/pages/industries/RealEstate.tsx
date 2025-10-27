import StackingSection from '../../components/StackingSection';
import { Home, MapPin, TrendingUp, Users, Globe, Video, Camera, Phone, Star, Award, BarChart3, Target, CheckCircle2, Smartphone } from 'lucide-react';

export default function RealEstate() {
  const totalSections = 12;

  return (
    <div className="bg-black min-h-screen">
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Real Estate Marketing Solutions</h1>
          <p className="text-white max-w-3xl mb-8">
            Generate qualified leads, sell properties faster, and build your brand with cutting-edge digital marketing strategies for real estate agents, brokers, and developers.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">View Portfolio</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Real Estate Digital Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            {[
              { icon: Globe, title: 'Property SEO', desc: 'Rank for local real estate searches' },
              { icon: Video, title: '3D Virtual Tours', desc: 'Immersive property showcases' },
              { icon: Camera, title: 'Pro Photography', desc: 'High-quality listing visuals' },
              { icon: Target, title: 'Lead Generation', desc: 'Qualified buyer and seller leads' }
            ].map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
                  <Icon className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-white mb-2">{service.title}</h4>
                  <p className="text-gray-400">{service.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Real Estate Marketing Stats</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center">
              <div className="text-white mb-2">500+</div>
              <p className="text-gray-400">Real Estate Clients</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">32%</div>
              <p className="text-gray-400">Faster Property Sales</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">$850M+</div>
              <p className="text-gray-400">Properties Marketed</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">6.2x</div>
              <p className="text-gray-400">Avg. ROI on Marketing Spend</p>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Property Marketing Channels</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Social Media Advertising</h4>
              <p className="text-gray-300 mb-4">Facebook, Instagram, and YouTube ads targeting qualified buyers in specific locations.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Geo-targeted campaigns</li>
                <li>• Carousel property ads</li>
                <li>• Video property tours</li>
              </ul>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Google Ads & SEO</h4>
              <p className="text-gray-300 mb-4">Capture high-intent searches for properties and real estate services in your area.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Local SEO optimization</li>
                <li>• Google My Business</li>
                <li>• PPC for listings</li>
              </ul>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Real Estate Sectors</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {['Residential Sales', 'Commercial Real Estate', 'Property Development', 'Real Estate Brokerages', 'Property Management', 'Luxury Real Estate', 'Real Estate Investment', 'Vacation Rentals'].map((sector, index) => (
              <div key={index} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
                <CheckCircle2 className="w-6 h-6 text-white mb-2" />
                <p className="text-white">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Virtual Reality & 3D Tours</h2>
          <div className="max-w-4xl">
            <p className="text-white mb-6">Stand out with immersive property experiences that let buyers tour homes from anywhere in the world.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 bg-black border border-white/10 rounded-lg">
                <Video className="w-8 h-8 text-white mb-4" />
                <h4 className="text-white mb-2">3D Matterport Tours</h4>
                <p className="text-gray-300">Interactive walkthroughs that boost engagement by 300%.</p>
              </div>
              <div className="p-6 bg-black border border-white/10 rounded-lg">
                <Camera className="w-8 h-8 text-white mb-4" />
                <h4 className="text-white mb-2">Drone Photography</h4>
                <p className="text-gray-300">Aerial shots showcasing property and neighborhood.</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Lead Generation & Nurturing</h2>
          <div className="space-y-6 w-full max-w-4xl">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Landing Pages</h4>
              <p className="text-gray-300">High-converting pages for each property listing with lead capture forms.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Email Automation</h4>
              <p className="text-gray-300">Automated drip campaigns nurturing leads from inquiry to closing.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">CRM Integration</h4>
              <p className="text-gray-300">Sync with Follow Up Boss, LionDesk, and other real estate CRMs.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Success Story</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <h3 className="text-white mb-4">Luxury Real Estate Brokerage</h3>
            <p className="text-gray-300 mb-6">A boutique luxury brokerage needed to compete with larger agencies and sell $50M+ in properties.</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div><div className="text-white mb-1">$87M</div><p className="text-gray-400">Total Sales in 12 Months</p></div>
              <div><div className="text-white mb-1">28 Days</div><p className="text-gray-400">Avg. Time on Market</p></div>
              <div><div className="text-white mb-1">425%</div><p className="text-gray-400">Increase in Qualified Leads</p></div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Read Case Study</button>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Real Estate Pros Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            {[
              { icon: Award, title: 'Real Estate Specialists', desc: '500+ agents and brokerages trust our expertise.' },
              { icon: TrendingUp, title: 'Proven Results', desc: 'Properties sell 32% faster with our marketing.' },
              { icon: Target, title: 'Qualified Leads Only', desc: 'Advanced targeting attracts serious buyers.' },
              { icon: Smartphone, title: 'Mobile-First Strategy', desc: '85% of buyers start their search on mobile.' }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="flex gap-4">
                  <Icon className="w-8 h-8 text-white flex-shrink-0" />
                  <div>
                    <h4 className="text-white mb-2">{item.title}</h4>
                    <p className="text-gray-300">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </StackingSection>

      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Client Testimonial</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-white mb-6">"InchtoMilez completely transformed our real estate marketing. Our listings now get 10x more visibility, and we're closing deals 40% faster. Their 3D tour integration and targeted ad campaigns are game-changers."</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center"><span className="text-white">JM</span></div>
              <div>
                <p className="text-white">Jennifer Martinez</p>
                <p className="text-gray-400">Broker/Owner, Prestige Realty Group</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={10} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Technology Stack</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Globe className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">IDX Integration</h4>
              <p className="text-gray-300">MLS-integrated property search on your website.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Smartphone className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">CRM Platforms</h4>
              <p className="text-gray-300">Integration with all major real estate CRMs.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <BarChart3 className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Analytics Dashboard</h4>
              <p className="text-gray-300">Real-time tracking of leads, showings, and sales.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Sell Properties Faster?</h2>
          <p className="text-white max-w-2xl mb-8">Let's create a custom real estate marketing strategy that generates qualified leads and closes more deals.</p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">Get Started</button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2">
              <Phone className="w-5 h-5" />Call Now
            </button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
