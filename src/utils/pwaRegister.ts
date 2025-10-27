// PWA Service Worker Registration
export function registerServiceWorker() {
  // Don't register service worker in iframe contexts
  try {
    if (window.self !== window.top) {
      console.log('📱 Running in iframe - skipping Service Worker registration');
      return;
    }
  } catch (e) {
    console.log('📱 Cross-origin iframe - skipping Service Worker registration');
    return;
  }

  if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
      navigator.serviceWorker
        .register('/service-worker.js')
        .then((registration) => {
          console.log('✅ Service Worker registered successfully:', registration.scope);

          // Check for updates every hour
          setInterval(() => {
            registration.update();
          }, 60 * 60 * 1000);

          // Listen for updates
          registration.addEventListener('updatefound', () => {
            const newWorker = registration.installing;
            if (newWorker) {
              newWorker.addEventListener('statechange', () => {
                if (newWorker.state === 'installed' && navigator.serviceWorker.controller) {
                  // New service worker available, show update prompt
                  if (confirm('New version available! Reload to update?')) {
                    window.location.reload();
                  }
                }
              });
            }
          });
        })
        .catch((error) => {
          console.log('ℹ️ Service Worker registration not available:', error.message);
        });
    });
  } else {
    console.log('ℹ️ Service Workers not supported in this environment');
  }
}

// Request notification permission (optional)
export async function requestNotificationPermission() {
  if ('Notification' in window && 'serviceWorker' in navigator) {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') {
      console.log('✅ Notification permission granted');
      return true;
    }
  }
  return false;
}

// Check if app is running in standalone mode
export function isStandalone(): boolean {
  return window.matchMedia('(display-mode: standalone)').matches || 
         (window.navigator as any).standalone === true;
}

// Check if device is iOS
export function isIOS(): boolean {
  return /iPad|iPhone|iPod/.test(navigator.userAgent) && !(window as any).MSStream;
}

// Check if device is Android
export function isAndroid(): boolean {
  return /Android/.test(navigator.userAgent);
}

// Add to home screen tracking
export function trackInstallation() {
  // Skip in iframe contexts
  try {
    if (window.self !== window.top) {
      return;
    }
  } catch (e) {
    return;
  }

  window.addEventListener('appinstalled', () => {
    console.log('✅ PWA installed successfully');
    // Track installation event
    if ((window as any).gtag) {
      (window as any).gtag('event', 'pwa_install', {
        event_category: 'PWA',
        event_label: 'App Installed'
      });
    }
  });
}
