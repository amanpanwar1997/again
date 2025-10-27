import SEOHead from '../components/SEOHead';
import SchemaMarkup from '../components/SchemaMarkup';
import EnhancedSchemaMarkup from '../components/EnhancedSchemaMarkup';
import { getPageMetadata } from '../utils/seoMetadata';
import StackingSection from '../components/StackingSection';
import Breadcrumbs from '../components/Breadcrumbs';
import { Link } from 'react-router-dom';
import { Heart, GraduationCap, Home, ShoppingCart, Code, DollarSign, Hotel, Car, Shirt, Utensils, Film, Trophy, Scale, Factory, HandHeart, Pill, HardHat, Wheat, Truck, Sparkles, ArrowRight, TrendingUp, Users, Award } from 'lucide-react';

export default function Industries() {
  const totalSections = 12;

  const industries = [
    { name: 'Healthcare', slug: 'healthcare', icon: Heart, desc: 'Medical practices, hospitals, telehealth' },
    { name: 'Education', slug: 'education', icon: GraduationCap, desc: 'Schools, universities, e-learning' },
    { name: 'Real Estate', slug: 'real-estate', icon: Home, desc: 'Agents, brokers, developers' },
    { name: 'E-Commerce', slug: 'ecommerce', icon: ShoppingCart, desc: 'Online stores, marketplaces, DTC' },
    { name: 'Technology', slug: 'technology', icon: Code, desc: 'SaaS, software, IT services' },
    { name: 'Finance', slug: 'finance', icon: DollarSign, desc: 'Banking, fintech, insurance' },
    { name: 'Hospitality', slug: 'hospitality', icon: Hotel, desc: 'Hotels, resorts, restaurants' },
    { name: 'Automotive', slug: 'automotive', icon: Car, desc: 'Dealerships, service centers' },
    { name: 'Fashion', slug: 'fashion', icon: Shirt, desc: 'Apparel, streetwear, luxury' },
    { name: 'Food & Beverage', slug: 'food-beverage', icon: Utensils, desc: 'Restaurants, food brands, CPG' },
    { name: 'Entertainment', slug: 'entertainment', icon: Film, desc: 'Media, events, production' },
    { name: 'Sports & Fitness', slug: 'sports', icon: Trophy, desc: 'Gyms, teams, fitness brands' },
    { name: 'Legal Services', slug: 'legal', icon: Scale, desc: 'Law firms, attorneys, legal tech' },
    { name: 'Manufacturing', slug: 'manufacturing', icon: Factory, desc: 'Industrial, B2B manufacturing' },
    { name: 'Non-Profit', slug: 'non-profit', icon: HandHeart, desc: 'NGOs, charities, foundations' },
    { name: 'Pharmaceutical', slug: 'pharmaceutical', icon: Pill, desc: 'Pharma companies, med devices' },
    { name: 'Construction', slug: 'construction', icon: HardHat, desc: 'Contractors, builders, real estate dev' },
    { name: 'Agriculture', slug: 'agriculture', icon: Wheat, desc: 'Farming, agritech, food production' },
    { name: 'Logistics', slug: 'logistics', icon: Truck, desc: 'Shipping, freight, warehousing' },
    { name: 'Beauty', slug: 'beauty', icon: Sparkles, desc: 'Cosmetics, skincare, salons' }
  ];

  return (
    <>
      <SEOHead {...getPageMetadata('industries')} />
      <SchemaMarkup type="organization" />
      <EnhancedSchemaMarkup page="industries" />
      <Breadcrumbs items={[{ label: 'Industries' }]} />
      
      <div style={{ paddingTop: '120px' }}>
        {/* Hero Section */}
        <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Industry Expertise Across Every Vertical</h1>
          <p className="text-white max-w-3xl mb-8">
            We don't just understand marketing — we understand your industry. With specialized strategies for 20+ sectors, we deliver campaigns that speak your customers' language and drive measurable results.
          </p>
          <div className="flex gap-4">
            <Link to="/lets-talk" className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all inline-block">
              Let's Talk
            </Link>
            <a href="#industries" className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all inline-block">
              Explore Industries
            </a>
          </div>
        </div>
      </StackingSection>

      {/* Stats Section */}
      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Industry Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center">
              <div className="text-white mb-2">20+</div>
              <p className="text-gray-400">Industries Served</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">3,500+</div>
              <p className="text-gray-400">Industry Clients</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">$2.8B+</div>
              <p className="text-gray-400">Revenue Generated</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">285%</div>
              <p className="text-gray-400">Avg. Growth Rate</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 1 */}
      <StackingSection index={2} total={totalSections}>
        <div id="industries" className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare & Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {industries.slice(0, 2).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 2 */}
      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Real Estate, E-Commerce & Technology</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {industries.slice(2, 5).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 3 */}
      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Finance & Hospitality</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {industries.slice(5, 7).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 4 */}
      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Automotive, Fashion & Food</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {industries.slice(7, 10).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 5 */}
      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Entertainment, Sports & Legal</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {industries.slice(10, 13).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 6 */}
      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Manufacturing & Non-Profit</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {industries.slice(13, 15).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 7 */}
      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Pharmaceutical & Construction</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
            {industries.slice(15, 17).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* All Industries Grid - Part 8 */}
      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Agriculture, Logistics & Beauty</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            {industries.slice(17, 20).map((industry) => {
              const Icon = industry.icon;
              return (
                <Link 
                  key={industry.slug}
                  to={`/industries/${industry.slug}`}
                  className="p-8 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all group"
                >
                  <Icon className="w-10 h-10 text-white mb-4" />
                  <h3 className="text-white mb-2">{industry.name}</h3>
                  <p className="text-gray-400 mb-4">{industry.desc}</p>
                  <div className="flex items-center gap-2 text-yellow-500 group-hover:gap-4 transition-all">
                    <span>Learn More</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* Why Industry Expertise Matters */}
      <StackingSection index={10} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Industry Expertise Matters</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
            <div className="p-8 bg-black border border-white/10 rounded-lg">
              <TrendingUp className="w-10 h-10 text-white mb-4" />
              <h3 className="text-white mb-2">Faster Results</h3>
              <p className="text-gray-300">We skip the learning curve. Our industry-specific strategies deliver results 3x faster than generic agencies.</p>
            </div>
            <div className="p-8 bg-black border border-white/10 rounded-lg">
              <Users className="w-10 h-10 text-white mb-4" />
              <h3 className="text-white mb-2">Better Targeting</h3>
              <p className="text-gray-300">We know your audience's pain points, behavior patterns, and decision-making process.</p>
            </div>
            <div className="p-8 bg-black border border-white/10 rounded-lg">
              <Award className="w-10 h-10 text-white mb-4" />
              <h3 className="text-white mb-2">Proven Strategies</h3>
              <p className="text-gray-300">Battle-tested campaigns across 3,500+ clients in your industry vertical.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* CTA Section */}
      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Dominate Your Industry?</h2>
          <p className="text-white max-w-2xl mb-8">
            Partner with an agency that understands your industry inside and out. Let's create a custom strategy that drives measurable growth for your business.
          </p>
          <div className="flex gap-4">
            <Link to="/lets-talk" className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all inline-block">
              Schedule Consultation
            </Link>
            <Link to="/services" className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all inline-block">
              View All Services
            </Link>
          </div>
        </div>
      </StackingSection>
      </div>
    </>
  );
}
