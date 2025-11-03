/**
 * Performance Optimization Utilities
 * Best practices for Inchtomilez website performance
 */

// Debounce function for expensive operations
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout | null = null;
  
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      timeout = null;
      func(...args);
    };
    
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// Throttle function for scroll events
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Preload critical images
export function preloadImage(src: string): Promise<void> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve();
    img.onerror = reject;
    img.src = src;
  });
}

// Intersection Observer for lazy loading
export function createLazyObserver(
  callback: (entry: IntersectionObserverEntry) => void,
  options?: IntersectionObserverInit
): IntersectionObserver {
  return new IntersectionObserver((entries) => {
    entries.forEach(callback);
  }, {
    rootMargin: '50px',
    threshold: 0.01,
    ...options,
  });
}

// Check if user prefers reduced motion
export function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return false;
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

// Performance marks for monitoring
export const perfMark = {
  start: (name: string) => {
    if (typeof performance !== 'undefined') {
      performance.mark(`${name}-start`);
    }
  },
  end: (name: string) => {
    if (typeof performance !== 'undefined') {
      performance.mark(`${name}-end`);
      try {
        performance.measure(name, `${name}-start`, `${name}-end`);
      } catch (e) {
        // Mark doesn't exist, ignore
      }
    }
  },
  clear: (name: string) => {
    if (typeof performance !== 'undefined') {
      performance.clearMarks(`${name}-start`);
      performance.clearMarks(`${name}-end`);
      performance.clearMeasures(name);
    }
  },
};

// Dynamically import components
export async function dynamicImport<T>(
  importFunc: () => Promise<{ default: T }>
): Promise<T> {
  const module = await importFunc();
  return module.default;
}
