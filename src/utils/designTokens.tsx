/**
 * CENTRALIZED DESIGN TOKENS
 * Single source of truth for all design values across the website
 * Version: 1.0.0
 * Last Updated: January 2025
 */

// =============================================================================
// COLOR SYSTEM
// =============================================================================

export const colors = {
  // Brand Primary
  black: '#000000',
  white: '#ffffff',
  yellow: '#eab308',
  
  // Backgrounds
  background: {
    primary: '#000000',
    card: '#0a0a0a',
    muted: '#1f1f1f',
  },
  
  // Text
  text: {
    primary: '#ffffff',
    secondary: '#f4f4f4',
    muted: '#b3b3b3',
    accent: '#eab308',
  },
  
  // Borders
  border: {
    default: 'rgba(255, 255, 255, 0.1)',
    hover: 'rgba(255, 255, 255, 0.2)',
    accent: 'rgba(234, 179, 8, 0.3)',
  },
  
  // Status Colors
  status: {
    success: '#22c55e',
    warning: '#f59e0b',
    error: '#ef4444',
    info: '#3b82f6',
  },
  
  // Gradient Colors (for H2 animation)
  gradient: {
    red: '#ef4444',
    magenta: '#ec4899',
    purple: '#a855f7',
    amber: '#f59e0b',
    deepRed: '#dc2626',
  },
} as const;

// =============================================================================
// TYPOGRAPHY SYSTEM
// =============================================================================

export const typography = {
  // Font Families
  fonts: {
    primary: '"Raleway", system-ui, -apple-system, sans-serif',
  },
  
  // Font Weights
  weights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  
  // Desktop Font Sizes
  desktop: {
    h1: '1.875rem',      // 30px
    h2: '1.375rem',      // 22px
    h3: '1.375rem',      // 22px
    h4: '1.125rem',      // 18px
    body: '0.9375rem',   // 15px
    small: '0.8125rem',  // 13px
    button: '0.9375rem', // 15px
    caption: '0.75rem',  // 12px
  },
  
  // Mobile Font Sizes (≤768px)
  mobile: {
    h1: '1.625rem',      // 26px
    h2: '1.25rem',       // 20px
    h3: '1.25rem',       // 20px
    h4: '1rem',          // 16px
    body: '0.875rem',    // 14px
    small: '0.75rem',    // 12px
    button: '0.875rem',  // 14px
    caption: '0.75rem',  // 12px
  },
  
  // Line Heights
  lineHeights: {
    tight: 1.1,
    heading: 1.3,
    relaxed: 1.4,
    body: 1.6,
  },
  
  // Letter Spacing
  letterSpacing: {
    tight: '-0.02em',
    heading: '-0.01em',
    normal: '0',
    wide: '0.02em',
  },
} as const;

// =============================================================================
// SPACING SYSTEM (8px grid)
// =============================================================================

export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px - Compact spacing
  6: '1.5rem',    // 24px - Card padding (Guidelines.md standard)
  8: '2rem',      // 32px - Section padding (mobile)
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px - Section padding (desktop)
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
} as const;

// =============================================================================
// BREAKPOINTS
// =============================================================================

export const breakpoints = {
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
} as const;

// =============================================================================
// GRID SYSTEM
// =============================================================================

export const grid = {
  // Bento Grid 2.0 (Primary)
  bentoGrid2: {
    mobile: {
      columns: 2,
      gap: '0.5rem',  // 8px
      minHeight: '120px',
    },
    tablet: {
      columns: 6,
      gap: '0.75rem', // 12px
      minHeight: '140px',
    },
    desktop: {
      columns: 8,
      gap: '0.75rem', // 12px
      minHeight: '140px',
    },
  },
  
  // Legacy Bento Grid
  bentoGrid: {
    mobile: 1,
    tablet: 2,
    desktop: 4,
    gap: {
      mobile: '1rem',    // 16px
      tablet: '1.5rem',  // 24px
      desktop: '2rem',   // 32px
    },
  },
  
  // Container Max Widths
  containers: {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',    // Standard max (Guidelines.md)
    '2xl': '1536px',
  },
} as const;

// =============================================================================
// SHADOWS
// =============================================================================

export const shadows = {
  card: '0 2px 8px rgba(0, 0, 0, 0.4)',
  cardHover: '0 4px 12px rgba(234, 179, 8, 0.15)',
  strong: '0 4px 12px rgba(0, 0, 0, 0.6)',
  strongHover: '0 6px 16px rgba(234, 179, 8, 0.2)',
  button: '0 2px 8px rgba(234, 179, 8, 0.3)',
  buttonHover: '0 4px 16px rgba(234, 179, 8, 0.4)',
} as const;

// =============================================================================
// BORDER RADIUS
// =============================================================================

export const radius = {
  sm: 'calc(0.75rem - 4px)',  // 8px
  md: 'calc(0.75rem - 2px)',  // 10px
  lg: '0.75rem',              // 12px (default)
  xl: 'calc(0.75rem + 4px)',  // 16px
  full: '9999px',
} as const;

// =============================================================================
// TRANSITIONS
// =============================================================================

export const transitions = {
  fast: '200ms',
  normal: '300ms',
  slow: '500ms',
  slower: '700ms',
  easing: {
    default: 'ease-in-out',
    ease: 'ease',
    in: 'ease-in',
    out: 'ease-out',
  },
} as const;

// =============================================================================
// Z-INDEX SCALE
// =============================================================================

export const zIndex = {
  base: 0,
  dropdown: 10,
  sticky: 20,
  overlay: 30,
  modal: 40,
  popover: 50,
  toast: 60,
  tooltip: 70,
  nav: 80,
  max: 9999,
} as const;

// =============================================================================
// ANIMATION DURATIONS
// =============================================================================

export const animations = {
  carousel: {
    slow: '45s',
    normal: '30s',
    fast: '20s',
  },
  gradient: '8s',
  hover: '200ms',
  transition: '300ms',
} as const;

// =============================================================================
// COMPONENT SPECIFIC TOKENS
// =============================================================================

export const components = {
  // Button Padding
  button: {
    sm: { x: '1.25rem', y: '0.625rem' },  // px-5 py-2.5
    md: { x: '1.5rem', y: '0.75rem' },    // px-6 py-3
    lg: { x: '2rem', y: '1rem' },         // px-8 py-4
  },
  
  // Card Padding (Guidelines.md: p-6 = 24px "Card padding")
  card: {
    compact: '1rem',      // p-4 = 16px
    default: '1.5rem',    // p-6 = 24px (Standard)
    spacious: '2rem',     // p-8 = 32px
  },
  
  // Section Padding
  section: {
    mobile: '4rem',       // py-16 (64px)
    desktop: '6rem',      // py-24 (96px)
  },
  
  // Icon Sizes
  icon: {
    xs: '16px',
    sm: '20px',
    md: '24px',
    lg: '32px',
    xl: '48px',
  },
} as const;

// =============================================================================
// GLASSMORPHISM PRESETS
// =============================================================================

export const glass = {
  default: {
    background: '#0a0a0a',
    border: 'rgba(255, 255, 255, 0.1)',
    shadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
    hover: {
      border: 'rgba(255, 255, 255, 0.2)',
      shadow: '0 4px 12px rgba(234, 179, 8, 0.15)',
    },
  },
  strong: {
    background: '#0a0a0a',
    border: 'rgba(255, 255, 255, 0.2)',
    shadow: '0 4px 12px rgba(0, 0, 0, 0.6)',
    hover: {
      border: 'rgba(234, 179, 8, 0.3)',
      shadow: '0 6px 16px rgba(234, 179, 8, 0.2)',
    },
  },
  card: {
    background: '#0a0a0a',
    border: 'rgba(255, 255, 255, 0.1)',
    padding: '1.5rem',  // 24px
    shadow: '0 2px 8px rgba(0, 0, 0, 0.4)',
    hover: {
      border: 'rgba(255, 255, 255, 0.2)',
      shadow: '0 4px 12px rgba(234, 179, 8, 0.15)',
    },
  },
} as const;

// =============================================================================
// UTILITY CLASSES MAP
// =============================================================================

export const utilityClasses = {
  // Container
  safeContainer: 'w-full max-w-[1280px] mx-auto px-4 sm:px-6 lg:px-8',
  container: 'w-full mx-auto px-4 sm:px-6 lg:px-8',
  
  // Section
  section: 'border-t border-white/10 py-16 md:py-24',
  sectionContent: 'container mx-auto px-4 sm:px-6 lg:px-8',
  sectionInner: 'max-w-6xl mx-auto',
  
  // Text
  sectionLabel: 'text-xs font-medium uppercase tracking-wide text-yellow-500 mb-4 text-center',
  heading: 'mb-4 text-center leading-[1.3]',
  paragraph: 'text-[0.9375rem] leading-relaxed text-gray-300 mb-12 text-center max-w-3xl mx-auto',
  
  // Glass Cards
  glass: 'bg-[#0a0a0a] border border-white/10 rounded-xl p-6',
  glassStrong: 'bg-[#0a0a0a] border border-white/20 rounded-xl p-6',
  glassCard: 'bg-[#0a0a0a] border border-white/10 rounded-xl p-6',
  
  // Buttons
  btnPrimary: 'bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold shadow-lg hover:scale-105',
  btnSecondary: 'bg-[#0a0a0a] text-white border border-white/20 px-8 py-4 rounded-xl transition-all duration-300 inline-flex items-center gap-2 text-[0.9375rem] font-semibold hover:border-yellow-500/50 hover:text-yellow-500',
  
  // Grids
  bentoGrid: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8',
} as const;

// =============================================================================
// EXPORT TYPES
// =============================================================================

export type ColorToken = typeof colors;
export type TypographyToken = typeof typography;
export type SpacingToken = typeof spacing;
export type GridToken = typeof grid;
export type ShadowToken = typeof shadows;
export type RadiusToken = typeof radius;
export type TransitionToken = typeof transitions;
export type ZIndexToken = typeof zIndex;
export type AnimationToken = typeof animations;
export type ComponentToken = typeof components;
export type GlassToken = typeof glass;
export type UtilityToken = typeof utilityClasses;
