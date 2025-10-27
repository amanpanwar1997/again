/**
 * Audio URL Protection Utilities
 * 
 * This file contains advanced protection mechanisms to make it
 * significantly harder for users to extract the audio URL.
 * 
 * Security Layers:
 * 1. URL Obfuscation (base64 encoding)
 * 2. Dynamic construction from multiple parts
 * 3. Time-based token generation
 * 4. DevTools detection
 * 5. Right-click prevention
 * 6. Source inspection prevention
 * 
 * Note: Complete protection is impossible in frontend code,
 * but these layers make it extremely difficult for casual users.
 */

// Obfuscated URL component
// This is base64 encoded path to local audio file: "/background-music.mp3"
// You need to place your audio file at /public/background-music.mp3
const _audioPath = 'L2JhY2tncm91bmQtbXVzaWMubXAz';

/**
 * Constructs the audio URL from obfuscated parts
 * This makes it harder to find the URL by searching the source code
 */
export const constructAudioUrl = (): string => {
  try {
    // Decode the obfuscated URL
    const url = atob(_audioPath);
    return url;
  } catch (error) {
    console.error('Error decoding audio URL:', error);
    // Fallback to empty string if decoding fails
    return '';
  }
};

/**
 * DevTools Detection
 * Detects if browser DevTools are open
 */
export const detectDevTools = (): boolean => {
  const threshold = 160;
  const widthThreshold = window.outerWidth - window.innerWidth > threshold;
  const heightThreshold = window.outerHeight - window.innerHeight > threshold;
  
  return widthThreshold || heightThreshold;
};

/**
 * Prevents right-click on specified elements
 */
export const preventRightClick = (element: HTMLElement | null) => {
  if (!element) return;
  
  const handler = (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    return false;
  };
  
  element.addEventListener('contextmenu', handler);
  return () => element.removeEventListener('contextmenu', handler);
};

/**
 * Disables common keyboard shortcuts for inspecting
 */
export const disableInspectShortcuts = () => {
  const handler = (e: KeyboardEvent) => {
    // F12, Ctrl+Shift+I, Ctrl+Shift+J, Ctrl+Shift+C, Ctrl+U
    if (
      e.key === 'F12' ||
      (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'J' || e.key === 'C')) ||
      (e.ctrlKey && e.key === 'U')
    ) {
      e.preventDefault();
      return false;
    }
  };
  
  document.addEventListener('keydown', handler);
  return () => document.removeEventListener('keydown', handler);
};

/**
 * Obfuscates console logs to make debugging harder
 */
export const obfuscateConsole = () => {
  const noop = () => {};
  
  // Override console methods in production
  if (process.env.NODE_ENV === 'production') {
    console.log = noop;
    console.debug = noop;
    console.info = noop;
    console.warn = noop;
  }
};

/**
 * Generates a time-based validation token
 * This can be used for additional security checks
 */
export const generateToken = (): string => {
  const now = Date.now();
  const hour = Math.floor(now / (1000 * 60 * 60)); // Changes every hour
  const seed = hour.toString();
  
  // Simple hash function
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    const char = seed.charCodeAt(i);
    hash = ((hash << 5) - hash) + char;
    hash = hash & hash; // Convert to 32-bit integer
  }
  
  return Math.abs(hash).toString(36);
};

/**
 * Validates the current session
 * Returns true if the session appears legitimate
 */
export const validateSession = (): boolean => {
  // Check if running in a normal browser environment
  const hasWindow = typeof window !== 'undefined';
  const hasDocument = typeof document !== 'undefined';
  const hasNavigator = typeof navigator !== 'undefined';
  
  // Check if not in an iframe (except for trusted domains)
  const isInIframe = window !== window.top;
  const isTrustedIframe = isInIframe && (
    document.referrer.includes('figma.com') ||
    document.referrer.includes('localhost')
  );
  
  return hasWindow && hasDocument && hasNavigator && (!isInIframe || isTrustedIframe);
};

/**
 * Advanced protection bundle
 * Activates all protection mechanisms
 */
export const activateAudioProtection = () => {
  const cleanupFunctions: Array<() => void> = [];
  
  // 1. Disable inspect shortcuts
  const removeShortcutHandler = disableInspectShortcuts();
  if (removeShortcutHandler) cleanupFunctions.push(removeShortcutHandler);
  
  // 2. Obfuscate console (production only)
  obfuscateConsole();
  
  // 3. DevTools detection interval
  const devToolsInterval = setInterval(() => {
    if (detectDevTools()) {
      // DevTools detected - you can add custom logic here
      // For example, pause audio, show warning, etc.
    }
  }, 1000);
  
  cleanupFunctions.push(() => clearInterval(devToolsInterval));
  
  // Return cleanup function
  return () => {
    cleanupFunctions.forEach(cleanup => cleanup());
  };
};

/**
 * Watermark function
 * Adds an invisible watermark to help track unauthorized use
 */
export const addWatermark = () => {
  const watermark = document.createElement('div');
  watermark.style.cssText = 'position:fixed;opacity:0;pointer-events:none;';
  watermark.textContent = `Protected by Inchtomilez - ${generateToken()}`;
  document.body.appendChild(watermark);
};

// Export all protection utilities
export default {
  constructAudioUrl,
  detectDevTools,
  preventRightClick,
  disableInspectShortcuts,
  obfuscateConsole,
  generateToken,
  validateSession,
  activateAudioProtection,
  addWatermark,
};
