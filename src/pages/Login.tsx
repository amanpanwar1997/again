import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { authAPI } from '../utils/supabase/auth';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { 
  Lock, 
  Mail, 
  Eye, 
  EyeOff, 
  LogIn, 
  Sparkles,
  AlertCircle,
  CheckCircle2,
  UserPlus
} from 'lucide-react';
import { toast } from 'sonner@2.0.3';

// Default admin credentials
const DEFAULT_EMAIL = 'inchtomilez@gmail.com';
const DEFAULT_PASSWORD = 'Amazing@123';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [isInitializing, setIsInitializing] = useState(false);
  const [adminExists, setAdminExists] = useState<boolean | null>(null);

  // Check if default admin exists and initialize if needed
  useEffect(() => {
    const checkAndInitializeAdmin = async () => {
      try {
        // Check if default admin exists
        const response = await fetch(
          `https://${projectId}.supabase.co/functions/v1/make-server-dfdfec0d/auth/check-admin`,
          {
            headers: {
              'Authorization': `Bearer ${publicAnonKey}`,
            },
          }
        );

        const data = await response.json();
        setAdminExists(data.exists);

        // If admin doesn't exist, initialize it
        if (!data.exists) {
          console.log('Default admin not found. Initializing...');
          await initializeDefaultAdmin();
        }
      } catch (error) {
        console.error('Error checking admin status:', error);
      }
    };

    checkAndInitializeAdmin();
  }, []);

  const initializeDefaultAdmin = async () => {
    setIsInitializing(true);
    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-dfdfec0d/auth/init-admin`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        setAdminExists(true);
        toast.success('Default admin account created successfully!', {
          icon: <UserPlus className="h-5 w-5" />,
        });
      }
    } catch (error) {
      console.error('Error initializing admin:', error);
      toast.error('Failed to initialize admin account. Please check server logs.', {
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } finally {
      setIsInitializing(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsLoading(true);

    try {
      // Validate inputs
      if (!email || !password) {
        throw new Error('Please fill in all fields');
      }

      if (!email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      if (password.length < 6) {
        throw new Error('Password must be at least 6 characters');
      }

      // Sign in
      const data = await authAPI.signIn(email, password);
      
      if (data.session) {
        toast.success('Login successful! Redirecting to dashboard...', {
          icon: <CheckCircle2 className="h-5 w-5" />,
        });
        
        // Store session info
        localStorage.setItem('supabase_session', JSON.stringify(data.session));
        
        // Redirect to admin dashboard
        setTimeout(() => {
          navigate('/admin');
        }, 500);
      }
    } catch (error: any) {
      console.error('Login error:', error);
      const errorMessage = error.message || 'Login failed. Please try again.';
      setError(errorMessage);
      toast.error(errorMessage, {
        icon: <AlertCircle className="h-5 w-5" />,
      });
    } finally {
      setIsLoading(false);
    }
  };



  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500/20 to-yellow-500/5 border border-yellow-500/30 mb-6">
            <Lock className="h-10 w-10 text-yellow-500" />
          </div>
          <h1 className="text-white mb-2 flex items-center justify-center gap-3">
            <Sparkles className="h-6 w-6 text-yellow-500" />
            Admin Login
          </h1>
          <p className="text-gray-400">
            Sign in to access the Inchtomilez admin dashboard
          </p>
        </div>

        {/* Initialization Status */}
        {isInitializing && (
          <div className="mb-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-xl flex items-start gap-3">
            <div className="w-5 h-5 border-2 border-yellow-500 border-t-transparent rounded-full animate-spin flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-yellow-400 text-sm mb-1">
                Initializing default admin account...
              </p>
              <p className="text-yellow-400/60 text-xs">
                Please wait while we set up your admin user
              </p>
            </div>
          </div>
        )}



        {/* Login Form */}
        <form onSubmit={handleLogin} className="space-y-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
            {/* Error Message */}
            {error && (
              <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-xl flex items-start gap-3">
                <AlertCircle className="h-5 w-5 text-red-500 flex-shrink-0 mt-0.5" />
                <p className="text-red-400 text-sm">{error}</p>
              </div>
            )}

            {/* Email Field */}
            <div className="mb-6">
              <label htmlFor="email" className="block text-sm text-gray-400 mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="email"
                  type="email"
                  placeholder="admin@inchtomilez.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-12 h-12 bg-black border-white/20 text-white placeholder:text-gray-600 focus:border-yellow-500 focus:ring-yellow-500"
                  required
                  autoComplete="email"
                  disabled={isLoading}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm text-gray-400 mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-500" />
                <Input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-12 pr-12 h-12 bg-black border-white/20 text-white placeholder:text-gray-600 focus:border-yellow-500 focus:ring-yellow-500"
                  required
                  autoComplete="current-password"
                  disabled={isLoading}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500 hover:text-white transition-colors"
                  disabled={isLoading}
                >
                  {showPassword ? (
                    <EyeOff className="h-5 w-5" />
                  ) : (
                    <Eye className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>

            {/* Login Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full h-12 bg-yellow-500 text-black hover:bg-yellow-400 text-base"
            >
              {isLoading ? (
                <div className="flex items-center justify-center gap-2">
                  <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                  Signing in...
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2">
                  <LogIn className="h-5 w-5" />
                  Sign In
                </div>
              )}
            </Button>
          </div>

          {/* Additional Info */}
          <div className="text-center space-y-4">
            <p className="text-sm text-gray-500">
              Authorized personnel only
            </p>
            <div className="pt-4 border-t border-white/10">
              <p className="text-xs text-gray-600">
                Protected by Supabase Authentication
              </p>
            </div>
          </div>
        </form>

        {/* Security Notice */}
        <div className="mt-8 bg-white/5 border border-white/10 rounded-xl p-4">
          <div className="flex items-start gap-3">
            <Lock className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-sm text-gray-400 mb-1">
                <span className="text-white">Secure Login</span> • Your connection is encrypted
              </p>
              <p className="text-xs text-gray-600">
                All authentication is handled securely by Supabase
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
