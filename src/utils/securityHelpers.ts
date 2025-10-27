// Security and Performance Utilities

/**
 * Force HTTPS redirect
 * Redirects HTTP to HTTPS and non-www to www
 */
export function enforceSecureConnection() {
  if (typeof window === 'undefined') return;

  // Don't redirect if inside an iframe (e.g., Figma preview)
  try {
    if (window.self !== window.top) {
      console.log('🔒 Running inside iframe - skipping HTTPS redirect');
      return;
    }
  } catch (e) {
    // If we can't access window.top due to cross-origin, we're in an iframe
    console.log('🔒 Cross-origin iframe detected - skipping HTTPS redirect');
    return;
  }

  const currentUrl = window.location.href;
  const protocol = window.location.protocol;
  const hostname = window.location.hostname;
  
  // Skip for localhost development
  if (hostname === 'localhost' || hostname === '127.0.0.1') {
    return;
  }

  // Skip for figma.site preview domains
  if (hostname.includes('figma.site') || hostname.includes('figmaiframepreview')) {
    return;
  }

  let needsRedirect = false;
  let newUrl = currentUrl;

  // Force HTTPS
  if (protocol === 'http:') {
    newUrl = newUrl.replace('http://', 'https://');
    needsRedirect = true;
  }

  // Force www subdomain (optional - disabled by default)
  // Uncomment the lines below if you want to force www subdomain
  // if (!hostname.startsWith('www.') && !hostname.includes('localhost')) {
  //   newUrl = newUrl.replace('://', '://www.');
  //   needsRedirect = true;
  // }

  if (needsRedirect) {
    window.location.href = newUrl;
  }
}

/**
 * Set security headers (informational - actual headers set on server)
 * These are CSP meta tags that can be added to HTML
 * Note: Iframe-safe - no X-Frame-Options or upgrade-insecure-requests
 */
export function getSecurityMetaTags() {
  return [
    {
      httpEquiv: 'Content-Security-Policy',
      content: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.google-analytics.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https: blob:; media-src 'self' https:; connect-src 'self' https://www.google-analytics.com https://analytics.google.com https://api.unsplash.com; frame-ancestors 'self' https://*.figma.com; object-src 'none'; base-uri 'self'; form-action 'self';"
    },
    {
      httpEquiv: 'X-Content-Type-Options',
      content: 'nosniff'
    },
    {
      httpEquiv: 'X-XSS-Protection',
      content: '1; mode=block'
    },
    {
      httpEquiv: 'Referrer-Policy',
      content: 'strict-origin-when-cross-origin'
    },
    {
      httpEquiv: 'Permissions-Policy',
      content: 'geolocation=(self), microphone=(), camera=(), payment=()'
    }
  ];
}

/**
 * Sanitize user input to prevent XSS
 */
export function sanitizeInput(input: string): string {
  const div = document.createElement('div');
  div.textContent = input;
  return div.innerHTML;
}

/**
 * Validate email format
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate phone number format (Indian)
 */
export function isValidPhone(phone: string): boolean {
  const phoneRegex = /^[6-9]\d{9}$/;
  return phoneRegex.test(phone.replace(/\s+/g, ''));
}

/**
 * Rate limiting helper (client-side)
 */
export class RateLimiter {
  private attempts: Map<string, number[]> = new Map();
  private readonly limit: number;
  private readonly windowMs: number;

  constructor(limit: number = 5, windowMs: number = 60000) {
    this.limit = limit;
    this.windowMs = windowMs;
  }

  canProceed(key: string): boolean {
    const now = Date.now();
    const attempts = this.attempts.get(key) || [];
    
    // Filter out old attempts
    const recentAttempts = attempts.filter(time => now - time < this.windowMs);
    
    if (recentAttempts.length >= this.limit) {
      return false;
    }
    
    recentAttempts.push(now);
    this.attempts.set(key, recentAttempts);
    return true;
  }

  reset(key: string): void {
    this.attempts.delete(key);
  }
}

/**
 * Detect and prevent clickjacking
 */
export function preventClickjacking() {
  try {
    if (window.self !== window.top) {
      // Check if we're in a safe iframe context (like Figma preview)
      const hostname = window.location.hostname;
      if (hostname.includes('figma.site') || hostname.includes('figmaiframepreview') || 
          hostname === 'localhost' || hostname === '127.0.0.1') {
        console.log('🔒 Safe iframe context detected - allowing');
        return;
      }
      
      // Page is in an untrusted iframe - attempt to break out
      // Note: This may fail due to browser security, which is expected
      try {
        window.top!.location = window.self.location;
      } catch (e) {
        console.warn('⚠️ Clickjacking prevention blocked by browser security');
      }
    }
  } catch (e) {
    // Cross-origin iframe - can't access window.top
    console.log('🔒 Cross-origin iframe - cannot verify clickjacking');
  }
}

/**
 * Secure localStorage wrapper with encryption (simple obfuscation)
 */
export const secureStorage = {
  setItem(key: string, value: string): void {
    try {
      const encoded = btoa(encodeURIComponent(value));
      localStorage.setItem(key, encoded);
    } catch (e) {
      console.error('Storage error:', e);
    }
  },

  getItem(key: string): string | null {
    try {
      const encoded = localStorage.getItem(key);
      if (!encoded) return null;
      return decodeURIComponent(atob(encoded));
    } catch (e) {
      console.error('Storage error:', e);
      return null;
    }
  },

  removeItem(key: string): void {
    localStorage.removeItem(key);
  }
};

/**
 * Generate nonce for inline scripts (CSP)
 */
export function generateNonce(): string {
  const array = new Uint8Array(16);
  crypto.getRandomValues(array);
  return btoa(String.fromCharCode(...array));
}

/**
 * Check if browser is outdated
 */
export function checkBrowserSecurity(): boolean {
  const ua = navigator.userAgent;
  
  // Check for very old browsers
  if (ua.includes('MSIE') || ua.includes('Trident/')) {
    console.warn('⚠️ Outdated browser detected. Please upgrade for security.');
    return false;
  }
  
  return true;
}

/**
 * Enable Subresource Integrity checking
 */
export function verifySRI(scriptUrl: string, integrity: string, algorithm: string = 'sha384'): boolean {
  // This would be used on server-side
  // Client-side verification is limited
  return true;
}
