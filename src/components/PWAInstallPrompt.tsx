import { useState, useEffect } from 'react';
import { Download, X } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

export default function PWAInstallPrompt() {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);
  const [isIOS, setIsIOS] = useState(false);
  const [isStandalone, setIsStandalone] = useState(false);

  useEffect(() => {
    // Check if running in standalone mode
    const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || 
                               (window.navigator as any).standalone === true;
    setIsStandalone(isInStandaloneMode);

    // Check if iOS
    const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
    setIsIOS(iOS);

    // Listen for beforeinstallprompt event (Chrome, Edge, Samsung)
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const event = e as BeforeInstallPromptEvent;
      setDeferredPrompt(event);
      
      // Check if user has dismissed prompt before
      const hasSeenPrompt = localStorage.getItem('pwa-install-dismissed');
      if (!hasSeenPrompt) {
        // Show prompt after 3 seconds
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 3000);
      }
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Show iOS install instructions if on iOS and not installed
    if (iOS && !isInStandaloneMode) {
      const hasSeenIOSPrompt = localStorage.getItem('pwa-ios-install-dismissed');
      if (!hasSeenIOSPrompt) {
        setTimeout(() => {
          setShowInstallPrompt(true);
        }, 3000);
      }
    }

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  const handleInstallClick = async () => {
    if (!deferredPrompt && !isIOS) {
      return;
    }

    if (deferredPrompt) {
      // Show install prompt
      deferredPrompt.prompt();
      
      // Wait for user response
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
      
      setDeferredPrompt(null);
      setShowInstallPrompt(false);
    }
  };

  const handleDismiss = () => {
    setShowInstallPrompt(false);
    if (isIOS) {
      localStorage.setItem('pwa-ios-install-dismissed', 'true');
    } else {
      localStorage.setItem('pwa-install-dismissed', 'true');
    }
  };

  // Don't show if already installed or user dismissed
  if (isStandalone || !showInstallPrompt) {
    return null;
  }

  return (
    <div className="fixed top-20 left-1/2 -translate-x-1/2 z-[9998] w-[90vw] max-w-md animate-in slide-in-from-top duration-500">
      <div className="bg-black border-2 border-yellow-500 rounded-2xl p-6 shadow-2xl">
        {/* Close button */}
        <button
          onClick={handleDismiss}
          className="absolute top-3 right-3 text-white hover:text-yellow-500 transition-colors"
          aria-label="Dismiss"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0">
            <Download className="w-6 h-6 text-black" />
          </div>

          <div className="flex-1">
            <h3 className="text-white mb-2">Install Inchtomilez App</h3>
            
            {isIOS ? (
              // iOS specific instructions
              <div>
                <p className="text-sm text-gray-300 mb-3">
                  Install this app on your iPhone for quick access and offline functionality.
                </p>
                <div className="bg-white/5 rounded-lg p-3 text-xs text-gray-300 space-y-2">
                  <p>📱 Tap the Share button in Safari</p>
                  <p>➕ Select "Add to Home Screen"</p>
                  <p>✅ Tap "Add" to install</p>
                </div>
              </div>
            ) : (
              // Android/Desktop instructions
              <div>
                <p className="text-sm text-gray-300 mb-4">
                  Install our app for faster access, offline support, and a better experience.
                </p>
                <button
                  onClick={handleInstallClick}
                  className="w-full bg-yellow-500 hover:bg-yellow-400 text-black py-3 px-6 rounded-full transition-all duration-300 hover:scale-105"
                >
                  Install Now
                </button>
              </div>
            )}

            {!isIOS && (
              <button
                onClick={handleDismiss}
                className="w-full mt-2 text-sm text-gray-400 hover:text-white transition-colors"
              >
                Maybe later
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
