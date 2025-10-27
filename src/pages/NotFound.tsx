import { Link } from 'react-router-dom';
import { Home, Search, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';
import SEOHead from '../components/SEOHead';

export default function NotFound() {
  return (
    <>
      <SEOHead
        title="404 - Page Not Found | Inchtomilez"
        description="The page you're looking for doesn't exist. Return to Inchtomilez homepage."
        canonicalUrl="https://inchtomilez.com/404"
      />
      
      <div className="bg-black min-h-screen flex items-center justify-center px-4" style={{ paddingTop: '80px' }}>
        <div className="text-center max-w-2xl mx-auto">
          {/* 404 Animated Text */}
          <h1 className="mb-8" style={{ fontSize: '120px', lineHeight: '1' }}>
            404
          </h1>
          
          {/* Error Message */}
          <h2 className="mb-6">
            Oops! Page Not Found
          </h2>
          
          <p className="text-gray-400 mb-12 text-lg">
            The page you're looking for doesn't exist or has been moved. 
            Don't worry, let's get you back on track.
          </p>
          
          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
            <Link to="/">
              <Button className="bg-yellow-500 text-black hover:bg-yellow-600 rounded-full px-8 py-6">
                <Home className="mr-2 h-5 w-5" />
                Back to Home
              </Button>
            </Link>
            
            <Link to="/services">
              <Button 
                variant="outline" 
                className="bg-transparent border-white text-white hover:bg-white hover:text-black rounded-full px-8 py-6"
              >
                <Search className="mr-2 h-5 w-5" />
                Explore Services
              </Button>
            </Link>
          </div>
          
          {/* Quick Links */}
          <div className="border-t border-white/10 pt-12">
            <h3 className="mb-6 text-gray-400">
              Popular Pages
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link 
                to="/about" 
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all"
              >
                <p className="text-white">About Us</p>
              </Link>
              
              <Link 
                to="/services" 
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all"
              >
                <p className="text-white">Services</p>
              </Link>
              
              <Link 
                to="/blogs" 
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all"
              >
                <p className="text-white">Blog</p>
              </Link>
              
              <Link 
                to="/lets-talk" 
                className="p-4 bg-white/5 border border-white/10 rounded-lg hover:border-yellow-500/50 hover:bg-white/10 transition-all"
              >
                <p className="text-white">Contact</p>
              </Link>
            </div>
          </div>
          
          {/* Help Text */}
          <div className="mt-12 p-6 bg-white/5 border border-white/10 rounded-lg">
            <p className="text-gray-400">
              If you believe this is an error, please{' '}
              <Link to="/lets-talk" className="text-yellow-500 hover:underline">
                contact us
              </Link>
              {' '}and let us know.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
