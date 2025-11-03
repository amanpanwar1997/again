# Inchtomilez Design System Guidelines

## TYPOGRAPHY SYSTEM V2 (Raleway-Only Framework — Refined)

**Font Family:**
```css
'Raleway', system-ui, -apple-system, sans-serif;
```

**Weights:** 400 (Regular), 500 (Medium), 600 (SemiBold), 700 (Bold)  
**Base Font Size:** 16px  
**Base Line Height:** 1.5

### 🎯 Desktop Headings Hierarchy

| Element | Font Size | Font Weight | Line Height | Letter Spacing | Special Effects | Tailwind Class Example |
|---------|-----------|-------------|-------------|----------------|-----------------|------------------------|
| H1 | 1.875rem / 30px | 500 | 1.3 | -0.01em | None | `text-2xl md:text-3xl font-medium tracking-tight` |
| H2 | 1.375rem / 22px | 700 | 1.3 | -0.01em | **Animated Gradient** (Red→Magenta→Purple→Amber) | Auto-applied via base styles |
| H3 | 1.375rem / 22px | 500 | 1.4 | 0 | None | `text-[1.375rem] font-medium` |
| H4 | 1.125rem / 18px | 500 | 1.4 | 0 | `text-lg font-medium` |
| Body (P) | 0.9375rem / 15px | 400 | 1.6 | 0 | `text-[0.9375rem] leading-relaxed` |
| Small/Label | 0.8125rem / 13px | 400 | 1.6 | 0 | `text-[0.8125rem]` |
| Button | 0.9375rem / 15px | 600 | 1.5 | 0 | `text-[0.9375rem] font-semibold` |
| Caption | 0.75rem / 12px | 500 | 1.5 | 0.02em | `text-xs font-medium uppercase tracking-wide` |

### 📱 Mobile Headings Hierarchy (≤768px)

| Element | Font Size | Font Weight |
|---------|-----------|-------------|
| H1 | 1.625rem / 26px | 500 |
| H2 | 1.25rem / 20px | 700 |
| H3 | 1.25rem / 20px | 500 |
| H4 | 1rem / 16px | 500 |
| Body (P) | 0.875rem / 14px | 400 |
| Small/Label | 0.75rem / 12px | 400 |
| Button | 0.875rem / 14px | 600 |

### 💡 Typography Rules

- Always use white or near-white text (`text-white`, `text-gray-200`) on black backgrounds.
- **H2 Elements:** Automatically styled with animated gradient (Red #ef4444 → Magenta #ec4899 → Purple #a855f7 → Amber #f59e0b) — No classes needed!
- Highlight keywords or CTA text using yellow (#eab308) or `.text-gradient`.
- Maintain max 65–75 characters per line for readability.
- Paragraphs: `mb-4` default spacing.
- Avoid italics — use weight and color contrast instead.
- Headings should always have top and bottom spacing: `mt-6 mb-3`.
- Use uppercase sparingly — only for badges, captions, or section labels.

### ✨ Text Style Utilities

```css
/* Standard text gradient for accents */
.text-gradient {
  @apply bg-gradient-to-br from-white to-yellow-500 bg-clip-text text-transparent;
}

/* H2 Animated Gradient - Automatically applied to all <h2> elements */
.h2-gradient {
  background: linear-gradient(135deg, #ef4444 0%, #ec4899 25%, #a855f7 50%, #f59e0b 75%, #dc2626 100%);
  background-size: 300% 300%;
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shimmer 8s ease-in-out infinite;
}

@keyframes gradient-shimmer {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}

.text-muted {
  @apply text-gray-400;
}

.text-accent {
  @apply text-yellow-500;
}
```

**⚠️ Important:** All `<h2>` elements automatically have the animated gradient applied via base styles. No additional classes needed.

**Usage Example:**

```tsx
<h1 className="text-gradient text-5xl font-bold leading-tight">
  Transform Your Brand <br /> with Precision
</h1>
<p className="text-base text-gray-300 leading-relaxed max-w-2xl">
  Experience advanced digital marketing powered by next-generation strategies.
</p>
```

---

## 🧱 BENTO GRID SYSTEM

**Purpose:** Display multiple interactive cards or feature blocks in a visually dynamic grid (like Apple's "Bento" style).

**🎯 UNIFIED GRID SYSTEM: BentoGrid2 (v3.0)**

**⚠️ IMPORTANT:** BentoGrid2 is the **ONLY** grid system for ALL pages:
- ✅ **Use BentoGrid2 for:** Services, features, industries, team grids, stats, showcases, ALL content grids
- ❌ **BentoGrid (Legacy):** DEPRECATED - Do not use
- ✨ **New:** Unified system with two modes: `asymmetric` (advanced pattern) and `uniform` (simple columns)

---

### 📐 BENTO GRID 2.0 UNIFIED SYSTEM (BentoGrid2.tsx) ⭐ PRIMARY

**Use for:** ALL grid layouts across the website (services, features, industries, team, stats)

**Version:** 3.0.0 - CENTRALIZED & OPTIMIZED  
**Component:** `/components/layout/BentoGrid2.tsx`  
**Status:** 🟢 Production-ready, globally unified

### 🎯 TWO GRID MODES

#### Mode 1: ASYMMETRIC (Advanced Pattern Grid)

| Screen | Columns | Gap | Auto Rows | Notes |
|--------|---------|-----|-----------|-------|
| Mobile (≤768px) | 2 | 8px (gap-2) | 120px min | Simple two-column |
| Tablet (768-1023px) | 6 | 12px (gap-3) | 140px min | Flexible 6-column grid |
| Desktop (≥1024px) | 8 | 12px (gap-3) | 140px min | Sophisticated 8-column |

**Use for:** Services showcase, featured content, marketing grids with visual hierarchy

#### Mode 2: UNIFORM (Simple Equal Columns)

| Screen | Columns | Gap | Notes |
|--------|---------|-----|-------|
| Mobile (≤640px) | 1 | 1rem (gap-4) | Vertical stack |
| Tablet (≥768px) | 2-3 | 1.5rem (gap-6) | Responsive columns |
| Desktop (≥1024px) | 2/3/4/5 | 2rem (gap-8) | Full grid layout |

**Use for:** Stats grids, team members, simple features, equal-priority content

### ⚡ USAGE EXAMPLES

#### Example 1: Asymmetric Mode (Services/Features)

```tsx
import { BentoGrid2 } from './components/layout/BentoGrid2';
import { Rocket, Target, Globe } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Complete digital solutions for modern brands.',
    icon: Rocket,
    link: '/services/digital-marketing'
  },
  {
    title: 'Branding',
    description: 'Create memorable brand identities.',
    icon: Target,
    link: '/services/branding'
  },
  // ... 10 more cards (12 total recommended)
];

<BentoGrid2 
  cards={services}
  mode="asymmetric"
  showBadges={true}
  showStats={true}
  ariaLabel="Our services"
/>
```

#### Example 2: Uniform Mode (Stats/Team)

```tsx
const stats = [
  {
    number: '96+',
    label: 'Clients Served',
    sublabel: 'Startups to enterprises'
  },
  {
    number: '100+',
    label: 'Brands Managed',
    sublabel: 'Growing businesses'
  },
  {
    number: '7',
    label: 'Years Experience',
    sublabel: 'Industry expertise'
  },
  {
    number: '60+',
    label: 'Websites Built',
    sublabel: 'Successfully delivered'
  },
];

<BentoGrid2 
  cards={stats}
  mode="uniform"
  columns={4}
  ariaLabel="Company statistics"
/>
```

#### Example 3: Uniform Mode with Icons (Features)

```tsx
import { Shield, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    label: 'Honest Communication',
    description: 'We set realistic expectations about timelines and results.'
  },
  {
    icon: Award,
    label: 'Proven Track Record',
    description: '7 years of experience serving 96+ clients.'
  },
  {
    icon: Users,
    label: 'Experienced Team',
    description: '50+ specialists across strategy, creative, and development.'
  },
];

<BentoGrid2 
  cards={features}
  mode="uniform"
  columns={3}
  showCTA={false}
  ariaLabel="Why choose us"
/>
```

### 📐 12-Card Asymmetric Pattern

Perfect mathematical distribution - no empty spaces:

```
Desktop (8 columns):
Row 1: [4-col wide] + [4-col wide] = 8 ✓
Row 2: [2-col] + [2-col] + [2-col] + [2-col] = 8 ✓
Row 3: [3-col] + [3-col] + [2-col] = 8 ✓
Row 4: [2-col] + [2-col] + [4-col wide] = 8 ✓

Tablet (6 columns):
Row 1: [3-col] + [3-col] = 6 ✓
Row 2: [2-col] + [2-col] + [2-col] = 6 ✓
Row 3: Wraps naturally...
```

#### Premium Features (Pure CSS - Production Version)

✅ **Visual Effects:**
- **Hover scale & lift:** Card scales to 1.02 and lifts -1px on hover
- **Border transitions:** white/20 → yellow-500 smooth color change
- **Background effects:** white/5 → white/10 brightness on hover
- **Gradient glow:** Diagonal yellow tint overlay (700ms transition)
- **Text color shifts:** white → yellow-500 on hover
- **Smooth animations:** All transitions use CSS (GPU-accelerated)

✅ **Badge System:**
- **12 badge variants:** Popular, Trending, Hot, New, Featured, Top, Essential, Premium, Best, Top Pick, Choice, Rising
- **Color-coded with icons:** Each badge has unique color + Lucide icon
- **Automatic rotation:** Badges rotate per card index (badge index % 12)
- **Consistent styling:** Rounded pills with backdrop blur

✅ **Stats Display:**
- **Wide cards only:** Shows on col-span-4 cards (positions 0, 1, 11 in 12-card pattern)
- **12 stat variations:** 500+ Projects, 98% Success, 24/7 Support, 10x ROI, 1M+ Reach, 250+ Campaigns, 95% Retention, 50+ Awards, 3x Growth, 100+ Brands, 2.5M Views, 99% Uptime
- **Sparkle icon:** Yellow sparkle icon with stat number + label
- **Social proof:** Adds credibility to wide showcase cards

✅ **CTA Buttons:**
- **Mobile:** Always visible (opacity: 1, text + icon)
- **Desktop:** Hover-reveal (opacity: 0 → 1 on hover)
- **Animation:** Smooth 300ms opacity transition
- **Styling:** Yellow text, arrow icon, "View" label

#### Usage Example

```tsx
import { BentoGrid2 } from './components/layout/BentoGrid2';
import { Megaphone, Film, Palette, Code } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Complete digital solutions for modern brands.',
    icon: Megaphone,
    link: '/services/digital-marketing'
  },
  {
    title: 'Media Production',
    description: 'Professional video and photo production.',
    icon: Film,
    link: '/services/media-production'
  },
  // ... 10 more cards (12 total recommended)
];

<BentoGrid2 
  cards={services}
  showBadges={true}
  showStats={true}
/>
```

#### Card Anatomy

```
1. Base Container → Border transitions, background effects
2. Background Effects Layer → Gradients, glows, corner accents
3. Content Layer → Badge, icon, text, stats, CTA
4. Particle Layer → 3 floating particles (hover only)
5. Interactive Layer → Scale, lift, tap animations
```

#### Animation Types (Pure CSS - Production Version)

1. **Hover Scale:** transform: scale(1.02) - Card grows on hover (500ms)
2. **Hover Lift:** transform: translateY(-1px) - Card lifts up (500ms)
3. **Border Transition:** border-color change (500ms)
4. **Background:** Opacity change white/5 → white/10 (500ms)
5. **Gradient Glow:** Background gradient overlay fade-in (700ms)
6. **Text Colors:** white → yellow-500 on hover (300ms)
7. **CTA Reveal:** Opacity 0 → 1 on desktop hover (300ms)
8. **Icon Color:** Icon color white → yellow-500 (300ms)

**Note:** All animations use **pure CSS transitions** - no motion/react library dependencies for maximum stability and performance.

#### Responsive Behavior

- **Mobile (≤768px):** 
  - 2-column layout (grid-cols-2)
  - 8px gap (gap-2)
  - All CTAs always visible
  - Compact card heights (min 120px)
  
- **Tablet (768-1023px):** 
  - 6-column layout (md:grid-cols-6)
  - 12px gap (md:gap-3)
  - Cards span 2-3 columns
  - Medium card heights (min 140px)
  
- **Desktop (≥1024px):** 
  - 8-column layout (lg:grid-cols-8)
  - 12px gap (lg:gap-3)
  - Sophisticated asymmetric pattern
  - CTA hover-reveal effect active

### 🎯 GLOBAL USAGE PATTERNS

**Apply BentoGrid2 across ALL pages:**

| Page | Section | Mode | Columns | Features |
|------|---------|------|---------|----------|
| **HomePage** | Services Showcase | asymmetric | - | ✅ Badges, Stats, CTA |
| **HomePage** | Hero Stats | uniform | 4 | Stats display |
| **HomePage** | Why Choose Us | asymmetric | - | ✅ Badges |
| **HomePage** | Industries | uniform | 4 | Icons + text |
| **ServicesPage** | All Services | asymmetric | - | ✅ Badges, Stats |
| **AboutPage** | Team Stats | uniform | 3 | Stats with icons |
| **AboutPage** | Values/Principles | uniform | 4 | Icon + description |
| **IndustriesPage** | All Industries | asymmetric | - | ✅ Badges |
| **BlogsPage** | Blog Posts | asymmetric | - | ✅ Badges |
| **FAQsPage** | FAQ Categories | uniform | 4 | Icons + links |
| **ContactPage** | Contact Methods | uniform | 4 | Icons + info |

### 🏗️ STANDARD IMPLEMENTATION PATTERN

```tsx
import { BentoGrid2 } from '../layout/BentoGrid2';
import { Icon1, Icon2, Icon3 } from 'lucide-react';

// Services/Features (with links) - Use asymmetric mode
const services = [
  {
    title: 'Service Name',
    description: 'Service description...',
    icon: Icon1,
    link: '/services/service-name'
  },
  // ... 12 cards total (recommended)
];

<BentoGrid2 
  cards={services}
  mode="asymmetric"
  showBadges={true}
  showStats={true}
  ariaLabel="Our services"
/>

// Stats/Team (no links) - Use uniform mode
const stats = [
  {
    number: '96+',
    label: 'Clients Served',
    sublabel: 'Growing businesses'
  },
  // ... 4-6 cards
];

<BentoGrid2 
  cards={stats}
  mode="uniform"
  columns={4}
  ariaLabel="Company statistics"
/>
```

### ✨ ACCESSIBILITY FEATURES (v3.0)

- ✅ **Semantic HTML** - Proper role="list" and role="listitem"
- ✅ **ARIA labels** - Descriptive aria-label for screen readers
- ✅ **Keyboard navigation** - Full keyboard support with focus-visible states
- ✅ **Focus indicators** - Yellow ring with offset on focus
- ✅ **Link context** - aria-label on links for better context

### ⚡ PERFORMANCE OPTIMIZATIONS (v3.0)

- ✅ **Pure CSS transitions** (no animation library dependencies)
- ✅ **GPU-accelerated** (transform and opacity only)
- ✅ **Zero JavaScript animations** (maximum stability)
- ✅ **Instant rendering** (no layout calculation delays)
- ✅ **Minimal re-renders** (stable component structure)
- ✅ **Production-tested** (bulletproof implementation)

---

### 📐 LEGACY BENTO GRID (BentoGrid.tsx)

**⚠️ DEPRECATED - DO NOT USE**

The old BentoGrid component has been fully replaced by BentoGrid2 v3.0.
All functionality is now available in the unified BentoGrid2 component.

## 🎠 AUTO CAROUSEL DESIGN

**Purpose:** Auto-scrolling horizontal display of testimonials, logos, or service highlights.  
**Type:** Infinite loop, smooth scroll, no controls (auto).

### ⚙️ Core Tailwind + JS Structure

```tsx
<section className="safe-container py-20 overflow-hidden">
  <div className="relative w-full">
    <div className="flex gap-6 animate-scroll-x">
      <div className="glass-card min-w-[300px] flex-shrink-0">Laser Lipo</div>
      <div className="glass-card min-w-[300px] flex-shrink-0">Tummy Tuck</div>
      <div className="glass-card min-w-[300px] flex-shrink-0">Mommy Makeover</div>
      <div className="glass-card min-w-[300px] flex-shrink-0">Gynecomastia</div>
      <div className="glass-card min-w-[300px] flex-shrink-0">Skin Tightening</div>
    </div>
  </div>
</section>
```

### 🎬 Carousel Animation

Add in `@layer utilities`:

```css
@keyframes scroll-x {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-scroll-x {
  animation: scroll-x 30s linear infinite;
}
```

For mirrored infinite loop effect:

```tsx
<div className="flex gap-6 animate-scroll-x">
  <div className="flex gap-6">
    {/* Original Slides */}
  </div>
  <div className="flex gap-6">
    {/* Duplicate Slides */}
  </div>
</div>
```

### 🌙 Carousel Aesthetic Rules

- Keep backgrounds transparent or black (`bg-transparent`).
- Use consistent card sizes for smooth scroll.
- For logos/testimonials — add subtle blur edges using `mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent);`

---

## 🧩 DESIGN PRINCIPLES (Core of All Layouts)

### Base Colors:

- **Background:** Black (#000)
- **Foreground:** White/Silver (#fff / #f4f4f4)
- **Accent:** Yellow (#eab308)

### Grid + Composition

- Use max 1280px width containers.
- Default section padding: `py-16 md:py-24`.
- Keep visual hierarchy clear:
  - Hero → Features → Process → CTA → Testimonials → Footer

### Depth

- Use soft shadows + glassmorphism to add visual layering.
- Avoid hard borders; use `rgba white/10%` border opacity.

### Motion

- Always prefer subtle entry animations:
  - Fade-in, scale-up, or upward reveal.
- Keep duration between 0.4s – 0.8s.

### Section Layout Archetypes

- **Hero:** `flex flex-col items-center justify-center min-h-screen text-center`
- **Feature Grid (Bento):** `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6`
- **Testimonials Carousel:** `overflow-hidden flex gap-6 animate-scroll-x`
- **CTA Section:** `bg-yellow-500 text-black py-20 rounded-2xl text-center`

---

## 🪞 VISUAL BALANCE & SPACING SCALE

| Unit | Pixels | Usage |
|------|--------|-------|
| p-4 | 16px | Compact spacing |
| p-6 | 24px | Card padding |
| p-8 | 32px | Section padding (mobile) |
| p-12 | 48px | Section padding (desktop) |
| gap-6 | 24px | Default grid gap |
| gap-10 | 40px | Bento grid large gap |

---

## 🧬 COMPONENT REUSE BLUEPRINT

| Component | Folder | Description |
|-----------|--------|-------------|
| BentoGrid.tsx | /components/layout/ | Dynamic grid accepting custom cards |
| AutoCarousel.tsx | /components/ui/ | Infinite looping carousel component |
| HeroSection.tsx | /components/sections/ | Intro section with CTA and background |
| FeatureCard.tsx | /components/common/ | Shared card layout used across grids |
| TextBlock.tsx | /components/ui/ | Reusable typography block with heading + paragraph |

---

## 📝 CSS Utility Classes Reference

### Glassmorphism
```css
.glass              /* Semi-transparent glass */
.glass-strong       /* Deep glass with strong blur */
.glass-card         /* Glass card with padding & rounded corners */
```

### Containers
```css
.safe-container     /* Max 1280px width, responsive padding */
.container          /* Standard container (existing) */
```

### Text Utilities
```css
.text-gradient      /* White to yellow gradient */
.text-muted         /* Gray-400 color */
.text-accent        /* Yellow-500 color */
```

### Carousel
```css
.animate-scroll-x        /* 30s speed */
.animate-scroll-x-fast   /* 20s speed */
.animate-scroll-x-slow   /* 45s speed */
.carousel-mask           /* Fade edges effect */
```

### Bento Grid
```css
.bento-grid              /* Base grid layout */
.bento-item              /* Grid item */
.bento-item-large        /* 2x2 span */
.bento-item-wide         /* 2x1 span */
.bento-item-tall         /* 1x2 span */
```
