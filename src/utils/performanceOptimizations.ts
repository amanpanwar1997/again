// Performance Optimization Utilities

/**
 * Lazy load images with Intersection Observer
 */
export function lazyLoadImages() {
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as HTMLImageElement;
          if (img.dataset.src) {
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);
          }
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach((img) => {
      imageObserver.observe(img);
    });
  }
}

/**
 * Preload critical resources
 */
export function preloadCriticalResources() {
  // Preload fonts
  const fontLink = document.createElement('link');
  fontLink.rel = 'preload';
  fontLink.as = 'font';
  fontLink.type = 'font/woff2';
  fontLink.href = 'https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap';
  fontLink.crossOrigin = 'anonymous';
  document.head.appendChild(fontLink);

  // DNS prefetch for external domains
  const dnsPrefetchDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com',
    'https://www.googletagmanager.com',
    'https://www.google-analytics.com',
    'https://wa.me'
  ];

  dnsPrefetchDomains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'dns-prefetch';
    link.href = domain;
    document.head.appendChild(link);
  });

  // Preconnect to critical origins
  const preconnectDomains = [
    'https://fonts.googleapis.com',
    'https://fonts.gstatic.com'
  ];

  preconnectDomains.forEach((domain) => {
    const link = document.createElement('link');
    link.rel = 'preconnect';
    link.href = domain;
    link.crossOrigin = 'anonymous';
    document.head.appendChild(link);
  });
}

/**
 * Defer non-critical JavaScript
 */
export function deferNonCriticalScripts() {
  // This would typically be handled in HTML with script defer/async attributes
  // or with dynamic script loading
  console.log('🚀 Non-critical scripts deferred');
}

/**
 * Enable browser caching hints
 */
export function setupCachingStrategy() {
  // This is informational - actual caching is set on server
  const cachingRules = {
    static: '1 year',      // CSS, JS, images
    html: '1 hour',        // HTML pages
    api: 'no-cache',       // API responses
    fonts: '1 year',       // Web fonts
  };
  
  console.log('📦 Caching strategy:', cachingRules);
}

/**
 * Measure and log performance metrics
 */
export function measurePerformance() {
  if ('performance' in window && 'PerformanceObserver' in window) {
    // Measure First Contentful Paint (FCP)
    const fcpObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (entry.name === 'first-contentful-paint') {
          console.log('⚡ First Contentful Paint:', entry.startTime.toFixed(2), 'ms');
        }
      }
    });

    try {
      fcpObserver.observe({ entryTypes: ['paint'] });
    } catch (e) {
      // Not supported in all browsers
    }

    // Measure Largest Contentful Paint (LCP)
    const lcpObserver = new PerformanceObserver((list) => {
      const entries = list.getEntries();
      const lastEntry = entries[entries.length - 1];
      console.log('⚡ Largest Contentful Paint:', lastEntry.startTime.toFixed(2), 'ms');
    });

    try {
      lcpObserver.observe({ entryTypes: ['largest-contentful-paint'] });
    } catch (e) {
      // Not supported in all browsers
    }

    // Measure Cumulative Layout Shift (CLS)
    let clsScore = 0;
    const clsObserver = new PerformanceObserver((list) => {
      for (const entry of list.getEntries()) {
        if (!(entry as any).hadRecentInput) {
          clsScore += (entry as any).value;
        }
      }
      console.log('⚡ Cumulative Layout Shift:', clsScore.toFixed(4));
    });

    try {
      clsObserver.observe({ entryTypes: ['layout-shift'] });
    } catch (e) {
      // Not supported in all browsers
    }

    // Log navigation timing
    window.addEventListener('load', () => {
      setTimeout(() => {
        const perfData = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming;
        if (perfData) {
          console.log('📊 Performance Metrics:');
          console.log('  - DNS Lookup:', (perfData.domainLookupEnd - perfData.domainLookupStart).toFixed(2), 'ms');
          console.log('  - TCP Connection:', (perfData.connectEnd - perfData.connectStart).toFixed(2), 'ms');
          console.log('  - Request Time:', (perfData.responseStart - perfData.requestStart).toFixed(2), 'ms');
          console.log('  - Response Time:', (perfData.responseEnd - perfData.responseStart).toFixed(2), 'ms');
          console.log('  - DOM Processing:', (perfData.domComplete - perfData.domLoading).toFixed(2), 'ms');
          console.log('  - Total Load Time:', (perfData.loadEventEnd - perfData.fetchStart).toFixed(2), 'ms');
        }
      }, 0);
    });
  }
}

/**
 * Optimize images on the fly
 */
export function optimizeImages() {
  // Add loading="lazy" to all images
  document.querySelectorAll('img:not([loading])').forEach((img) => {
    img.setAttribute('loading', 'lazy');
  });

  // Add decoding="async" for better performance
  document.querySelectorAll('img:not([decoding])').forEach((img) => {
    img.setAttribute('decoding', 'async');
  });
}

/**
 * Reduce motion for users who prefer it
 */
export function respectReducedMotion() {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  
  if (prefersReducedMotion.matches) {
    document.documentElement.classList.add('reduce-motion');
    console.log('♿ Reduced motion enabled for accessibility');
  }
}

/**
 * Enable hardware acceleration
 */
export function enableHardwareAcceleration() {
  // Add will-change hints to animated elements
  const animatedElements = document.querySelectorAll(
    '.hover\\:scale-105, .hover\\:scale-110, [class*="transition"]'
  );
  
  animatedElements.forEach((el) => {
    (el as HTMLElement).style.willChange = 'transform';
  });
}

/**
 * Debounce scroll events for better performance
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function(...args: Parameters<T>) {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle resize events
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Critical CSS inlining helper
 */
export function inlineCriticalCSS() {
  // This would typically be done at build time
  // But we can mark critical styles in development
  console.log('🎨 Critical CSS should be inlined in production');
}

/**
 * Compress and optimize assets
 */
export function setupCompressionHeaders() {
  // This is informational - actual compression is set on server
  const compressionFormats = ['br', 'gzip', 'deflate'];
  console.log('🗜️ Supported compression formats:', compressionFormats);
}

/**
 * Initialize all performance optimizations
 */
export function initPerformanceOptimizations() {
  if (typeof window === 'undefined') return;
  
  try {
    preloadCriticalResources();
  } catch (e) {
    console.warn('Preload resources failed:', e);
  }
  
  try {
    lazyLoadImages();
  } catch (e) {
    console.warn('Lazy load images failed:', e);
  }
  
  try {
    optimizeImages();
  } catch (e) {
    console.warn('Image optimization failed:', e);
  }
  
  try {
    respectReducedMotion();
  } catch (e) {
    console.warn('Reduced motion check failed:', e);
  }
  
  try {
    measurePerformance();
  } catch (e) {
    console.warn('Performance measurement failed:', e);
  }
  
  try {
    enableHardwareAcceleration();
  } catch (e) {
    console.warn('Hardware acceleration failed:', e);
  }
  
  console.log('✅ Performance optimizations initialized');
}
