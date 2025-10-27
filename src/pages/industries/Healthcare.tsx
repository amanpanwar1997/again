import StackingSection from '../../components/StackingSection';
import { Heart, Activity, Users, Shield, Zap, Award, BarChart3, Phone, TrendingUp, CheckCircle2, Target, Star, Globe, Smartphone, Video } from 'lucide-react';

export default function Healthcare() {
  const totalSections = 14;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Healthcare Marketing Solutions</h1>
          <p className="text-white max-w-3xl mb-8">
            Transform patient engagement and healthcare delivery with cutting-edge digital marketing strategies tailored for medical practices, hospitals, clinics, and healthcare technology companies.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">
              View Case Studies
            </button>
          </div>
        </div>
      </StackingSection>

      {/* Industry Overview */}
      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Industry Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Heart className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white mb-2">Patient-Centric Approach</h3>
              <p className="text-gray-300">Building trust and engagement through empathetic, HIPAA-compliant marketing strategies.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Activity className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white mb-2">Healthcare Compliance</h3>
              <p className="text-gray-300">All campaigns fully compliant with HIPAA, FDA, and medical advertising regulations.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Shield className="w-8 h-8 text-white mb-4" />
              <h3 className="text-white mb-2">Data Security First</h3>
              <p className="text-gray-300">Enterprise-grade security measures protecting patient data and medical information.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Services for Healthcare */}
      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
              <Globe className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Medical SEO</h4>
              <p className="text-gray-400">Rank higher for medical services and procedures</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
              <Users className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Patient Acquisition</h4>
              <p className="text-gray-400">Targeted campaigns to attract new patients</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
              <Smartphone className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Telemedicine Marketing</h4>
              <p className="text-gray-400">Promote virtual care and online consultations</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
              <Video className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Medical Content</h4>
              <p className="text-gray-400">Educational videos and patient testimonials</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Healthcare Sectors */}
      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {[
              'Hospitals & Medical Centers',
              'Dental Practices',
              'Cosmetic Surgery Clinics',
              'Mental Health Services',
              'Physical Therapy',
              'Urgent Care Centers',
              'Specialty Clinics',
              'Pharmaceutical Companies',
              'Medical Device Manufacturers',
              'Health Tech Startups',
              'Wellness Centers',
              'Diagnostic Labs'
            ].map((sector, index) => (
              <div key={index} className="p-4 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
                <CheckCircle2 className="w-6 h-6 text-white mb-2" />
                <p className="text-white">{sector}</p>
              </div>
            ))}
          </div>
        </div>
      </StackingSection>

      {/* Stats Section */}
      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Marketing Results</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center">
              <div className="text-white mb-2">250+</div>
              <p className="text-gray-400">Healthcare Clients</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">3.5M+</div>
              <p className="text-gray-400">Patient Leads Generated</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">98%</div>
              <p className="text-gray-400">HIPAA Compliance Rate</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">4.8x</div>
              <p className="text-gray-400">Avg. ROI Increase</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Digital Strategy */}
      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Digital Strategy</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            <div>
              <h3 className="text-white mb-4">Patient Journey Mapping</h3>
              <p className="text-gray-300 mb-4">
                We map every touchpoint from initial symptom search to post-treatment follow-up, ensuring seamless patient experiences.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Search intent analysis for medical queries</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Multi-channel patient engagement</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Reputation management and reviews</span>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-white mb-4">Compliance & Trust</h3>
              <p className="text-gray-300 mb-4">
                Building patient trust through transparent, ethical, and compliant marketing practices.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">HIPAA-compliant data handling</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">FDA advertising guidelines adherence</span>
                </li>
                <li className="flex items-start gap-2">
                  <Shield className="w-5 h-5 text-white mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Medical ethics in all communications</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Patient Engagement */}
      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Patient Engagement Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Smartphone className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Mobile-First Experiences</h4>
              <p className="text-gray-300">Responsive websites and apps for appointment booking and patient portals.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Video className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Educational Content</h4>
              <p className="text-gray-300">Video content explaining procedures, conditions, and treatments.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Star className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Review Management</h4>
              <p className="text-gray-300">Building online reputation through patient testimonials and reviews.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Technology Integration */}
      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Technology Integration</h2>
          <div className="space-y-6 w-full max-w-4xl">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">EHR/EMR Integration</h4>
              <p className="text-gray-300">Seamless integration with electronic health records for automated patient communication.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Appointment Scheduling</h4>
              <p className="text-gray-300">Online booking systems integrated with practice management software.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Telemedicine Platforms</h4>
              <p className="text-gray-300">Marketing support for telehealth services and virtual consultations.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Patient CRM</h4>
              <p className="text-gray-300">Custom CRM solutions for patient relationship management and follow-ups.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Case Study */}
      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Success Story</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <h3 className="text-white mb-4">Multi-Specialty Medical Center</h3>
            <p className="text-gray-300 mb-6">
              A 50-physician medical center needed to increase patient appointments across 8 specialties while maintaining HIPAA compliance.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-white mb-1">185%</div>
                <p className="text-gray-400">Increase in New Patients</p>
              </div>
              <div>
                <div className="text-white mb-1">$2.4M</div>
                <p className="text-gray-400">Additional Revenue</p>
              </div>
              <div>
                <div className="text-white mb-1">4.9/5</div>
                <p className="text-gray-400">Patient Satisfaction Score</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">
              Read Full Case Study
            </button>
          </div>
        </div>
      </StackingSection>

      {/* Compliance Expertise */}
      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Compliance Expertise</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Shield className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">HIPAA Compliance</h4>
              <p className="text-gray-300 mb-4">All marketing activities fully compliant with patient privacy regulations.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Secure data transmission</li>
                <li>• Patient consent management</li>
                <li>• Privacy policy compliance</li>
              </ul>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Award className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">FDA Guidelines</h4>
              <p className="text-gray-300 mb-4">Pharmaceutical and medical device advertising that meets FDA standards.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Truthful claims</li>
                <li>• Risk disclosure</li>
                <li>• Scientific substantiation</li>
              </ul>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* ROI Focus */}
      <StackingSection index={10} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Healthcare Marketing ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <TrendingUp className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">$15</div>
              <p className="text-gray-400">Avg. Revenue Per Dollar Spent</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Users className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">32%</div>
              <p className="text-gray-400">Patient Retention Increase</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <BarChart3 className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">240%</div>
              <p className="text-gray-400">Avg. Website Traffic Growth</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Target className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">68%</div>
              <p className="text-gray-400">Conversion Rate Improvement</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Why Choose Us */}
      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Healthcare Providers Choose Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="flex gap-4">
              <Award className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Healthcare Industry Specialists</h4>
                <p className="text-gray-300">Dedicated team with deep healthcare marketing experience and medical knowledge.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Shield className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Compliance Guaranteed</h4>
                <p className="text-gray-300">Every campaign reviewed for HIPAA, FDA, and medical advertising compliance.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Data-Driven Results</h4>
                <p className="text-gray-300">Advanced analytics tracking patient acquisition costs and lifetime value.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Zap className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Rapid Deployment</h4>
                <p className="text-gray-300">Get campaigns live quickly without compromising quality or compliance.</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Testimonial */}
      <StackingSection index={12} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">What Healthcare Leaders Say</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-white mb-6">
              "Inchtomilez transformed our patient acquisition strategy. Their deep understanding of healthcare compliance combined with cutting-edge digital marketing delivered results beyond our expectations. We've seen a 180% increase in new patient appointments while maintaining perfect HIPAA compliance."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-white">DM</span>
              </div>
              <div>
                <p className="text-white">Dr. Michael Chen</p>
                <p className="text-gray-400">Chief Medical Officer, Metro Health System</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* CTA Section */}
      <StackingSection index={13} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Transform Your Healthcare Marketing?</h2>
          <p className="text-white max-w-2xl mb-8">
            Let's discuss how we can help you attract more patients, build trust, and grow your healthcare practice with compliant, effective digital marketing.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">
              Schedule Consultation
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Call Us Now
            </button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
