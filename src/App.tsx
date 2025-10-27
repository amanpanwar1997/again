import { useEffect, lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Header from './components/Header';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import FloatingCTA from './components/FloatingCTA';
import BackgroundMusic from './components/BackgroundMusic';
import PWAInstallPrompt from './components/PWAInstallPrompt';
import { registerServiceWorker, trackInstallation } from './utils/pwaRegister';
import { enforceSecureConnection, preventClickjacking, checkBrowserSecurity } from './utils/securityHelpers';
import { initPerformanceOptimizations } from './utils/performanceOptimizations';

// Loading fallback component
const PageLoader = () => (
  <div className="min-h-screen bg-black flex items-center justify-center">
    <div className="text-center">
      <div className="w-16 h-16 border-4 border-yellow-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
      <p className="text-white">Loading...</p>
    </div>
  </div>
);

// Lazy load main pages for better performance
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Services = lazy(() => import('./pages/Services'));
const LetsTalk = lazy(() => import('./pages/LetsTalk'));
const Blogs = lazy(() => import('./pages/Blogs'));
const BlogPost = lazy(() => import('./components/BlogPost'));
const Industries = lazy(() => import('./pages/Industries'));
const Login = lazy(() => import('./pages/Login'));
const Admin = lazy(() => import('./pages/Admin'));
const NotFound = lazy(() => import('./pages/NotFound'));

// Import ProtectedRoute component
import ProtectedRoute from './components/ProtectedRoute';

// Lazy load service pages
const DigitalMarketing = lazy(() => import('./pages/services/DigitalMarketing'));
const Advertising = lazy(() => import('./pages/services/Advertising'));
const ECommerce = lazy(() => import('./pages/services/ECommerce'));
const Branding = lazy(() => import('./pages/services/Branding'));
const MediaProduction = lazy(() => import('./pages/services/MediaProduction'));
const Animation = lazy(() => import('./pages/services/Animation'));
const GraphicDesigning = lazy(() => import('./pages/services/GraphicDesigning'));
const OOHServices = lazy(() => import('./pages/services/OOHServices'));
const PrintMedia = lazy(() => import('./pages/services/PrintMedia'));
const SoftwareDevelopment = lazy(() => import('./pages/services/SoftwareDevelopment'));
const ApplicationDevelopment = lazy(() => import('./pages/services/ApplicationDevelopment'));
const WebsiteDevelopment = lazy(() => import('./pages/services/WebsiteDevelopment'));
const PoliticalCampaigns = lazy(() => import('./pages/services/PoliticalCampaigns'));
const CorporateGifting = lazy(() => import('./pages/services/CorporateGifting'));
const InfluencerMarketing = lazy(() => import('./pages/services/InfluencerMarketing'));
const PublicRelations = lazy(() => import('./pages/services/PublicRelations'));

// Lazy load industry pages
const Healthcare = lazy(() => import('./pages/industries/Healthcare'));
const Education = lazy(() => import('./pages/industries/Education'));
const RealEstate = lazy(() => import('./pages/industries/RealEstate'));
const EcommerceIndustry = lazy(() => import('./pages/industries/Ecommerce'));
const Technology = lazy(() => import('./pages/industries/Technology'));
const Finance = lazy(() => import('./pages/industries/Finance'));
const Hospitality = lazy(() => import('./pages/industries/Hospitality'));
const Automotive = lazy(() => import('./pages/industries/Automotive'));
const Fashion = lazy(() => import('./pages/industries/Fashion'));
const FoodBeverage = lazy(() => import('./pages/industries/FoodBeverage'));
const Entertainment = lazy(() => import('./pages/industries/Entertainment'));
const Sports = lazy(() => import('./pages/industries/Sports'));
const Legal = lazy(() => import('./pages/industries/Legal'));
const Manufacturing = lazy(() => import('./pages/industries/Manufacturing'));
const NonProfit = lazy(() => import('./pages/industries/NonProfit'));
const Pharmaceutical = lazy(() => import('./pages/industries/Pharmaceutical'));
const Construction = lazy(() => import('./pages/industries/Construction'));
const Agriculture = lazy(() => import('./pages/industries/Agriculture'));
const Logistics = lazy(() => import('./pages/industries/Logistics'));
const Beauty = lazy(() => import('./pages/industries/Beauty'));

export default function App() {
  useEffect(() => {
    try {
      // Initialize security measures (safe for iframes)
      enforceSecureConnection();
      preventClickjacking();
      checkBrowserSecurity();
    } catch (error) {
      console.warn('Security initialization warning:', error);
    }
    
    try {
      // Initialize PWA
      registerServiceWorker();
      trackInstallation();
    } catch (error) {
      console.warn('PWA initialization warning:', error);
    }
    
    try {
      // Initialize performance optimizations
      initPerformanceOptimizations();
    } catch (error) {
      console.warn('Performance optimization warning:', error);
    }
  }, []);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Header />
        <FloatingCTA />
        <BackgroundMusic />
        <PWAInstallPrompt />
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/lets-talk" element={<LetsTalk />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/industries" element={<Industries />} />
            
            {/* Authentication */}
            <Route path="/login" element={<Login />} />
            <Route 
              path="/admin" 
              element={
                <ProtectedRoute>
                  <Admin />
                </ProtectedRoute>
              } 
            />
            
            {/* Service pages */}
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/advertising" element={<Advertising />} />
            <Route path="/services/ecommerce" element={<ECommerce />} />
            <Route path="/services/branding" element={<Branding />} />
            <Route path="/services/media-production" element={<MediaProduction />} />
            <Route path="/services/animation" element={<Animation />} />
            <Route path="/services/graphic-designing" element={<GraphicDesigning />} />
            <Route path="/services/ooh-services" element={<OOHServices />} />
            <Route path="/services/print-media" element={<PrintMedia />} />
            <Route path="/services/software-development" element={<SoftwareDevelopment />} />
            <Route path="/services/application-development" element={<ApplicationDevelopment />} />
            <Route path="/services/website-development" element={<WebsiteDevelopment />} />
            <Route path="/services/political-campaigns" element={<PoliticalCampaigns />} />
            <Route path="/services/corporate-gifting" element={<CorporateGifting />} />
            <Route path="/services/influencer-marketing" element={<InfluencerMarketing />} />
            <Route path="/services/public-relations" element={<PublicRelations />} />
            
            {/* Industry pages */}
            <Route path="/industries/healthcare" element={<Healthcare />} />
            <Route path="/industries/education" element={<Education />} />
            <Route path="/industries/real-estate" element={<RealEstate />} />
            <Route path="/industries/ecommerce" element={<EcommerceIndustry />} />
            <Route path="/industries/technology" element={<Technology />} />
            <Route path="/industries/finance" element={<Finance />} />
            <Route path="/industries/hospitality" element={<Hospitality />} />
            <Route path="/industries/automotive" element={<Automotive />} />
            <Route path="/industries/fashion" element={<Fashion />} />
            <Route path="/industries/food-beverage" element={<FoodBeverage />} />
            <Route path="/industries/entertainment" element={<Entertainment />} />
            <Route path="/industries/sports" element={<Sports />} />
            <Route path="/industries/legal" element={<Legal />} />
            <Route path="/industries/manufacturing" element={<Manufacturing />} />
            <Route path="/industries/non-profit" element={<NonProfit />} />
            <Route path="/industries/pharmaceutical" element={<Pharmaceutical />} />
            <Route path="/industries/construction" element={<Construction />} />
            <Route path="/industries/agriculture" element={<Agriculture />} />
            <Route path="/industries/logistics" element={<Logistics />} />
            <Route path="/industries/beauty" element={<Beauty />} />
            
            <Route path="/preview_page.html" element={<Home />} />
            <Route path="/404" element={<NotFound />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </HelmetProvider>
  );
}
