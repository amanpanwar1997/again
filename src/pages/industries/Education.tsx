import StackingSection from '../../components/StackingSection';
import { GraduationCap, BookOpen, Users, Globe, TrendingUp, Award, BarChart3, Phone, Target, CheckCircle2, Smartphone, Video, Mail, Star } from 'lucide-react';

export default function Education() {
  const totalSections = 13;

  return (
    <div className="bg-black min-h-screen">
      {/* Hero Section */}
      <StackingSection index={0} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h1 className="mb-8">Education Marketing Excellence</h1>
          <p className="text-white max-w-3xl mb-8">
            Boost student enrollment, enhance institutional reputation, and engage learners with data-driven digital marketing strategies for schools, universities, and e-learning platforms.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">
              Start Growing
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all">
              Success Stories
            </button>
          </div>
        </div>
      </StackingSection>

      {/* Education Sectors */}
      <StackingSection index={1} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Education Sectors We Serve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
            {[
              { icon: GraduationCap, title: 'Universities & Colleges', desc: 'Student recruitment and alumni engagement' },
              { icon: BookOpen, title: 'K-12 Schools', desc: 'Parent outreach and enrollment campaigns' },
              { icon: Globe, title: 'Online Learning Platforms', desc: 'Course promotion and user acquisition' },
              { icon: Users, title: 'Training Centers', desc: 'Professional development marketing' },
              { icon: Award, title: 'Test Prep Companies', desc: 'Student acquisition strategies' },
              { icon: Smartphone, title: 'EdTech Startups', desc: 'Product launches and growth marketing' }
            ].map((sector, index) => {
              const Icon = sector.icon;
              return (
                <div key={index} className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 hover:scale-105 transition-all">
                  <Icon className="w-8 h-8 text-white mb-4" />
                  <h4 className="text-white mb-2">{sector.title}</h4>
                  <p className="text-gray-400">{sector.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </StackingSection>

      {/* Services */}
      <StackingSection index={2} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Education Marketing Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Target className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Student Recruitment</h4>
              <p className="text-gray-400">Targeted campaigns to attract qualified students</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Globe className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">International Marketing</h4>
              <p className="text-gray-400">Reach students globally with localized campaigns</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Video className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Virtual Tours</h4>
              <p className="text-gray-400">Immersive campus and program showcases</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg hover:border-yellow-500/50 transition-all">
              <Mail className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Email Nurturing</h4>
              <p className="text-gray-400">Automated enrollment funnel campaigns</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Stats */}
      <StackingSection index={3} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Education Marketing Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 w-full">
            <div className="text-center">
              <div className="text-white mb-2">150+</div>
              <p className="text-gray-400">Educational Institutions</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">45%</div>
              <p className="text-gray-400">Avg. Enrollment Increase</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">2.8M+</div>
              <p className="text-gray-400">Student Leads Generated</p>
            </div>
            <div className="text-center">
              <div className="text-white mb-2">92%</div>
              <p className="text-gray-400">Client Retention Rate</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Student Journey */}
      <StackingSection index={4} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Student Enrollment Journey</h2>
          <div className="space-y-6 w-full max-w-4xl">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">1. Awareness</h4>
              <p className="text-gray-300">Reach prospective students through targeted social media, search ads, and content marketing.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">2. Consideration</h4>
              <p className="text-gray-300">Nurture leads with virtual tours, webinars, and personalized email campaigns.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">3. Application</h4>
              <p className="text-gray-300">Simplify the application process with optimized forms and automated reminders.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">4. Enrollment</h4>
              <p className="text-gray-300">Convert applicants with strategic follow-up and financial aid support communication.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Digital Channels */}
      <StackingSection index={5} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Multi-Channel Education Marketing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Social Media Marketing</h4>
              <p className="text-gray-300 mb-4">Engage students on platforms they use daily - Instagram, TikTok, YouTube, and LinkedIn.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Student-generated content campaigns</li>
                <li>• Campus life storytelling</li>
                <li>• Alumni success stories</li>
              </ul>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <h4 className="text-white mb-2">Search Engine Marketing</h4>
              <p className="text-gray-300 mb-4">Capture high-intent searches for programs, courses, and educational opportunities.</p>
              <ul className="space-y-2 text-gray-400">
                <li>• Google Ads for course searches</li>
                <li>• SEO for program pages</li>
                <li>• Local search optimization</li>
              </ul>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Case Study */}
      <StackingSection index={6} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Education Success Story</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <h3 className="text-white mb-4">Private University - Online Program Launch</h3>
            <p className="text-gray-300 mb-6">
              A private university needed to launch 5 new online degree programs and achieve 500 enrollments in the first year.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
              <div>
                <div className="text-white mb-1">742</div>
                <p className="text-gray-400">Total Enrollments (148% of goal)</p>
              </div>
              <div>
                <div className="text-white mb-1">$180</div>
                <p className="text-gray-400">Cost Per Enrollment</p>
              </div>
              <div>
                <div className="text-white mb-1">12:1</div>
                <p className="text-gray-400">Return on Ad Spend</p>
              </div>
            </div>
            <button className="px-6 py-3 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">
              View Case Study
            </button>
          </div>
        </div>
      </StackingSection>

      {/* Content Marketing */}
      <StackingSection index={7} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Educational Content That Converts</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Video className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Video Marketing</h4>
              <p className="text-gray-300">Campus tours, student testimonials, faculty interviews, and course previews.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <BookOpen className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Blog Content</h4>
              <p className="text-gray-300">SEO-optimized articles addressing student questions and career guidance.</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg">
              <Smartphone className="w-8 h-8 text-white mb-4" />
              <h4 className="text-white mb-2">Interactive Content</h4>
              <p className="text-gray-300">Quizzes, calculators, and virtual reality campus experiences.</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Technology */}
      <StackingSection index={8} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">EdTech Marketing Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-4xl">
            <div className="flex gap-4">
              <Smartphone className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Mobile-First Approach</h4>
                <p className="text-gray-300">Gen Z students are mobile-first - we optimize every touchpoint for mobile devices.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <BarChart3 className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Analytics & Insights</h4>
                <p className="text-gray-300">Track student journey from first click to enrollment with advanced attribution.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">Marketing Automation</h4>
                <p className="text-gray-300">Automated nurture campaigns that guide prospects through enrollment funnel.</p>
              </div>
            </div>
            <div className="flex gap-4">
              <Globe className="w-8 h-8 text-white flex-shrink-0" />
              <div>
                <h4 className="text-white mb-2">CRM Integration</h4>
                <p className="text-gray-300">Seamless integration with Salesforce, HubSpot, and education-specific CRMs.</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* ROI */}
      <StackingSection index={9} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Education Marketing ROI</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-full">
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <TrendingUp className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">8.5:1</div>
              <p className="text-gray-400">Avg. Return on Investment</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Users className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">45%</div>
              <p className="text-gray-400">Enrollment Increase</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Target className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">$250</div>
              <p className="text-gray-400">Avg. Cost Per Lead</p>
            </div>
            <div className="p-6 bg-black border border-white/10 rounded-lg text-center">
              <Award className="w-8 h-8 text-white mx-auto mb-4" />
              <div className="text-white mb-1">65%</div>
              <p className="text-gray-400">Lead-to-Enrollment Rate</p>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* Why Choose Us */}
      <StackingSection index={10} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">Why Educational Institutions Trust Us</h2>
          <div className="space-y-6 w-full max-w-4xl">
            {[
              { title: 'Education Industry Expertise', desc: 'Specialized team with deep understanding of student psychology and enrollment funnels.' },
              { title: 'Proven Enrollment Growth', desc: '150+ institutions have increased enrollment by an average of 45% within 12 months.' },
              { title: 'Gen Z & Millennial Focus', desc: 'We speak the language of modern students and know where they spend their time online.' },
              { title: 'Full-Funnel Strategy', desc: 'From awareness to enrollment and alumni engagement - we handle the complete journey.' }
            ].map((item, index) => (
              <div key={index} className="flex gap-4">
                <CheckCircle2 className="w-6 h-6 text-white flex-shrink-0 mt-1" />
                <div>
                  <h4 className="text-white mb-2">{item.title}</h4>
                  <p className="text-gray-300">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </StackingSection>

      {/* Testimonial */}
      <StackingSection index={11} total={totalSections}>
        <div className="flex flex-col justify-center items-start min-h-screen w-[80vw] mx-auto px-8">
          <h2 className="mb-8">What Education Leaders Say</h2>
          <div className="bg-black border border-white/10 rounded-lg p-8 w-full max-w-4xl">
            <div className="flex gap-2 mb-4">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 text-yellow-500 fill-yellow-500" />
              ))}
            </div>
            <p className="text-white mb-6">
              "Inchtomilez helped us launch our online MBA program and exceed our first-year enrollment goals by 48%. Their understanding of the education landscape and ability to reach working professionals was exceptional."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                <span className="text-white">ST</span>
              </div>
              <div>
                <p className="text-white">Dr. Sarah Thompson</p>
                <p className="text-gray-400">Dean of Graduate Studies, State University</p>
              </div>
            </div>
          </div>
        </div>
      </StackingSection>

      {/* CTA */}
      <StackingSection index={12} total={totalSections}>
        <div className="flex flex-col justify-center items-center min-h-screen w-[80vw] mx-auto px-8 text-center">
          <h2 className="mb-6">Ready to Boost Student Enrollment?</h2>
          <p className="text-white max-w-2xl mb-8">
            Let's create a data-driven marketing strategy that attracts qualified students and grows your institution.
          </p>
          <div className="flex gap-4">
            <button className="px-8 py-4 bg-yellow-500 text-black rounded-full hover:bg-yellow-400 transition-all">
              Get Started
            </button>
            <button className="px-8 py-4 border border-white text-white rounded-full hover:bg-white hover:text-black transition-all flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Talk to Expert
            </button>
          </div>
        </div>
      </StackingSection>
    </div>
  );
}
