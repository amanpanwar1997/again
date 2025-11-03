import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, TrendingUp, Target, Users, Award, Sparkles, BarChart3, CheckCircle, Star, Shield } from 'lucide-react';
import { Badge } from '../ui/badge';
import { BentoGrid2 } from '../layout/BentoGrid2';
import { AutoCarousel } from '../ui/AutoCarousel';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../ui/accordion';
import { SEOHead } from '../SEOHead';
import { getAllKeywords, getPageKeywords } from '../../utils/seoKeywords';
import { StructuredData, organizationSchema, getWebPageSchema, getBreadcrumbSchema } from '../../utils/structuredData';

export function IndustryDetailPage() {
  const { slug } = useParams();

  const industryData: Record<string, any> = {
    'healthcare': {
      title: 'Healthcare',
      description: 'Specialized marketing solutions for healthcare providers, helping you connect with patients and build trust in a highly regulated industry.',
      tagline: 'Building Trust Through Digital Excellence',
      challenges: [
        'Patient acquisition and retention',
        'HIPAA compliance in marketing',
        'Building trust and credibility',
        'Reputation management',
      ],
      solutions: [
        'Healthcare SEO and local search optimization',
        'HIPAA-compliant digital marketing',
        'Patient engagement strategies',
        'Medical content marketing',
        'Healthcare website development',
        'Online reputation management',
      ],
      stats: [
        { metric: '300%', label: 'ROI Increase', description: 'Multi-specialty hospital campaign' },
        { metric: '2,400+', label: 'Patient Leads', description: 'Generated in 6 months' },
        { metric: '#1', label: 'Local Rankings', description: 'Average position in 90 days' },
        { metric: '4.8★', label: 'Avg Review Rating', description: 'Across 12 clinics' },
      ],
      services: [
        { name: 'Local SEO for Clinics', description: 'Dominate local search results and Google Maps', icon: Target },
        { name: 'Patient Acquisition', description: 'Drive qualified appointments through digital channels', icon: Users },
        { name: 'Healthcare Content', description: 'Medical blogs, videos, and educational content', icon: BarChart3 },
        { name: 'Reputation Management', description: 'Monitor and improve online reviews', icon: Award },
      ],
      successStories: [
        { client: 'Multi-Specialty Hospital, Indore', result: '300% ROI increase', timeframe: '6 months' },
        { client: 'Dental Clinic Network', result: '2,400 new patient leads', timeframe: '12 months' },
        { client: 'Cosmetic Surgery Center', result: '#1 ranking for 47 keywords', timeframe: '90 days' },
      ],
    },
    'education': {
      title: 'Education',
      description: 'Digital marketing strategies for educational institutions, helping you attract and enroll more students through data-driven campaigns.',
      tagline: 'Driving Student Enrollment Through Digital Innovation',
      challenges: [
        'Student acquisition and enrollment',
        'Brand differentiation in competitive markets',
        'Parent and student engagement',
        'Online reputation management',
      ],
      solutions: [
        'Education SEO and local search',
        'Social media marketing for schools',
        'Lead generation campaigns',
        'Parent-focused content marketing',
        'Admission funnel optimization',
        'Virtual campus tours',
      ],
      stats: [
        { metric: '2,000+', label: 'Enrollments', description: 'Coaching institute in 6 months' },
        { metric: '450%', label: 'Lead Growth', description: 'International school campaign' },
        { metric: '₹35L', label: 'Ad Spend ROI', description: '12X return on investment' },
        { metric: '90%', label: 'Enrollment Rate', description: 'From digital campaigns' },
      ],
      services: [
        { name: 'Enrollment Marketing', description: 'Fill seats with qualified students', icon: Users },
        { name: 'Parent Engagement', description: 'Build trust with decision-makers', icon: Award },
        { name: 'Education Content', description: 'Blogs, videos, and success stories', icon: BarChart3 },
        { name: 'Virtual Events', description: 'Webinars and online open houses', icon: Sparkles },
      ],
      successStories: [
        { client: 'Excel Coaching Institute', result: '2,000+ student enrollments', timeframe: '6 months' },
        { client: 'International School', result: '450% increase in inquiries', timeframe: '1 year' },
        { client: 'E-Learning Platform', result: '10,000+ course sign-ups', timeframe: '3 months' },
      ],
    },
    'real-estate': {
      title: 'Real Estate',
      description: 'Proven marketing strategies for real estate developers, brokers, and consultants to generate high-quality leads and accelerate property sales.',
      tagline: 'Turning Leads Into Property Sales',
      challenges: [
        'Generating high-quality leads',
        'Long sales cycles',
        'Building brand credibility',
        'Showcasing properties digitally',
      ],
      solutions: [
        'Real estate SEO and PPC',
        'Facebook and Google Lead Ads',
        'Virtual property tours',
        'Landing page optimization',
        'CRM integration',
        'Retargeting campaigns',
      ],
      stats: [
        { metric: '200+', label: 'Leads/Month', description: 'High-quality buyer leads' },
        { metric: '32%', label: 'Conversion Rate', description: 'Lead to site visit' },
        { metric: '85%', label: 'Quality Score', description: 'Qualified prospects' },
        { metric: '3x', label: 'ROI Growth', description: 'Year over year' },
      ],
      services: [
        { name: 'Lead Generation', description: 'Facebook, Google, and WhatsApp campaigns', icon: Target },
        { name: 'Virtual Tours', description: '360° property showcases', icon: Sparkles },
        { name: 'SEO for Developers', description: 'Rank for high-value property keywords', icon: TrendingUp },
        { name: 'CRM Automation', description: 'Lead nurturing and follow-up', icon: BarChart3 },
      ],
      successStories: [
        { client: 'Premier Developers', result: '200+ monthly qualified leads', timeframe: '9 months' },
        { client: 'Luxury Villas Project', result: '32% conversion rate achieved', timeframe: '6 months' },
        { client: 'Commercial Real Estate', result: '3x ROI improvement', timeframe: '1 year' },
      ],
    },
  };

  const currentIndustry = industryData[slug || 'healthcare'] || industryData['healthcare'];
  
  // SEO Data
  const seoData = getPageKeywords('industries', slug);
  const breadcrumbs = [
    { name: 'Home', path: '/' },
    { name: 'Industries', path: '/industries' },
    { name: currentIndustry.title, path: `/industries/${slug}` },
  ];

  return (
    <div className="bg-black">
      {/* SEO Meta Tags */}
      <SEOHead
        title={seoData.title}
        description={seoData.description}
        keywords={getAllKeywords('industries', slug)}
        ogType="website"
      />
      
      {/* Structured Data */}
      <StructuredData 
        schema={[
          organizationSchema,
          getWebPageSchema(seoData.title, seoData.description, `/industries/${slug}`, breadcrumbs),
          getBreadcrumbSchema(breadcrumbs),
        ]} 
      />
      
      {/* Hero Section */}
      <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-32 md:py-48">
        <div className="max-w-4xl mx-auto">
          <Link
            to="/industries"
            className="inline-flex items-center gap-2 text-[0.8125rem] text-yellow-500 hover:text-yellow-400 transition-colors duration-200 mb-8"
          >
            <ArrowLeft size={16} />
            Back to Industries
          </Link>

          {/* H1: Guidelines-compliant */}
          <h1 className="text-2xl md:text-3xl font-medium tracking-tight mb-6">
            {currentIndustry.title} Marketing Solutions
          </h1>
          <p className="text-[0.9375rem] leading-relaxed text-yellow-500 mb-6 italic">
            {currentIndustry.tagline}
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12">
            {currentIndustry.description}
          </p>

          <Link
            to="/contact"
            className="btn-primary inline-flex items-center gap-2"
          >
            Get Industry-Specific Strategy
            <ArrowRight size={20} />
          </Link>
        </div>
      </section>

      {/* Success Metrics */}
      <section className="border-t border-white/10 py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-6 text-center">PROVEN RESULTS</p>
            {/* H2: Auto-styled with animated gradient */}
            <h2 className="mb-16 text-center">
              Industry Success Metrics
            </h2>

            <BentoGrid2 
              cards={currentIndustry.stats.map((stat: any) => ({
                number: stat.metric,
                label: stat.label,
                sublabel: stat.description,
              }))}
              mode="uniform"
              columns={4}
              ariaLabel="Industry success metrics"
            />
          </div>
        </div>
      </section>

      {/* Industry Challenges & Solutions */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Challenges */}
              <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 p-6 min-h-[200px]">
                <h3 className="text-[1.375rem] font-medium mb-6">Industry Challenges</h3>
                <div className="space-y-3">
                  {currentIndustry.challenges.map((challenge: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <Shield className="flex-shrink-0 text-yellow-500 mt-0.5" size={20} />
                      <p className="text-[0.9375rem] leading-relaxed text-gray-300">{challenge}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Solutions */}
              <div className="relative overflow-hidden rounded-lg bg-white/5 border border-white/10 p-6 min-h-[200px]">
                <h3 className="text-[1.375rem] font-medium mb-6">Our Solutions</h3>
                <div className="space-y-3">
                  {currentIndustry.solutions.map((solution: string, index: number) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="flex-shrink-0 text-yellow-500 mt-0.5" size={20} />
                      <p className="text-[0.9375rem] leading-relaxed text-gray-300">{solution}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Industry-Specific Services */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-6 text-center">SPECIALIZED SERVICES</p>
            <h2 className="mb-16 text-center">
              Tailored Solutions for {currentIndustry.title}
            </h2>

            <BentoGrid2 
              cards={currentIndustry.services.map((service: any) => ({
                icon: service.icon,
                label: service.name,
                description: service.description,
              }))}
              mode="uniform"
              columns={2}
              ariaLabel={`Specialized services for ${currentIndustry.title}`}
            />
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <p className="text-xs font-medium uppercase tracking-wide text-yellow-500 mb-6 text-center">CLIENT SUCCESS</p>
            <h2 className="mb-4 text-center">
              Real Results from Real Clients
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center">
              See how we've helped {currentIndustry.title.toLowerCase()} businesses achieve extraordinary growth
            </p>

            <div className="space-y-4">
              {currentIndustry.successStories.map((story: any, index: number) => (
                <div key={index} className="glass p-6 rounded-xl hover:bg-white/10 transition-all duration-200">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex-1">
                      <h4 className="text-lg font-medium mb-2">{story.client}</h4>
                      <p className="text-[0.8125rem] text-yellow-500 font-semibold">{story.result}</p>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="outline" className="text-[0.8125rem]">{story.timeframe}</Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="border-t border-white/10 py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6">Ready to Transform Your {currentIndustry.title} Business?</h2>
            <p className="text-[0.9375rem] leading-relaxed text-gray-300 mb-10">
              Let's discuss how our industry-specific expertise can drive measurable results for your business
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="btn-primary inline-flex items-center justify-center gap-2"
              >
                Get Free Consultation
                <ArrowRight size={20} />
              </Link>
              <Link
                to="/services"
                className="glass px-8 py-4 rounded-xl hover:bg-white/10 transition-colors duration-200 inline-flex items-center justify-center gap-2 text-[0.9375rem] font-semibold"
              >
                View All Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
