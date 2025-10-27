# 🎨 Design System Quick Reference Card

## Typography Classes (Use These!)

```tsx
className="text-hero"          // 40px - Hero headings
className="text-heading"       // 29px - Section headings  
className="text-subheading"    // 21px - Subsection titles
className="text-body"          // 13px - Body text (default)
className="text-small"         // 11px - Labels, captions
className="text-metric"        // 15px - Stats, numbers

className="text-nav"           // 16px - Navigation
className="text-menu-category" // 12px - Menu categories
className="text-menu-link"     // 14px - Menu links
className="text-badge"         // 10px - Badges
className="text-tech-category" // 10px - Tech labels
className="text-tech-name"     // 11px - Tech names

className="text-display"       // 120px - Special displays
className="text-stat-large"    // 32px - Large stats
className="text-stat-medium"   // 24px - Medium stats
```

---

## Icon Usage (White, 24px, No Yellow Containers!)

### ✅ Correct
```tsx
// Direct icon (preferred)
<Target className="text-white mb-3" />

// With white container
<div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center">
  <Target className="text-white" />
</div>
```

### ❌ Wrong
```tsx
// Yellow circular background (REMOVED GLOBALLY)
<div className="w-12 h-12 bg-yellow-500/10 border border-yellow-500/20 rounded-full">
  <Target />
</div>
```

---

## Badge Usage (20px height, auto-enforced)

```tsx
<span className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full">
  <span className="text-yellow-500 text-badge">BADGE TEXT</span>
</span>
```

**Global enforcement:** Height, padding, font-size handled automatically.

---

## Section Padding (Standard Pattern)

```tsx
<StackingSection index={X} total={totalSections}>
  <div className="flex items-center justify-center h-full px-8 md:px-16">
    <div className="w-[80vw] pt-8">
      {/* Content */}
    </div>
  </div>
</StackingSection>
```

Or use utility classes:
```tsx
<div className="section-padding-standard">
  <div className="section-content-width">
    {/* Content */}
  </div>
</div>
```

---

## Button Styling

```tsx
// Primary button
<Button className="btn-primary">
  Click Me
</Button>

// Secondary button
<Button className="btn-secondary">
  Click Me
</Button>

// Or manual (yellow CTA)
<Button className="bg-yellow-500 text-black hover:bg-yellow-400 rounded-full px-8 py-6">
  Click Me
</Button>
```

---

## Card Styling

```tsx
// Standard card (black background)
<Card className="card-standard">
  <CardContent>Content</CardContent>
</Card>

// White background variant
<Card className="card-white-bg">
  <CardContent>Content</CardContent>
</Card>

// Or manual
<Card className="bg-white/5 border-white/10 hover:border-yellow-500/30">
  <CardContent>Content</CardContent>
</Card>
```

---

## Color Palette

```tsx
// Background
className="bg-black"           // Pure black
className="bg-white/5"         // Subtle white overlay
className="bg-yellow-500/10"   // Subtle yellow overlay

// Text
className="text-white"         // Primary text
className="text-gray-400"      // Labels/roles
className="text-gray-300"      // Descriptions
className="text-yellow-500"    // Accents/CTAs

// Borders
className="border-white/10"    // Subtle
className="border-white/20"    // Medium
className="border-yellow-500/30" // Hover states
```

---

## Grid Layouts

```tsx
// 2 columns
className="grid grid-cols-1 md:grid-cols-2 gap-4"

// 3 columns  
className="grid grid-cols-1 md:grid-cols-3 gap-4"

// 4 columns
className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"

// 6 columns
className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
```

---

## Spacing System (8px base)

```tsx
gap-2   // 8px
gap-4   // 16px
gap-6   // 24px
gap-8   // 32px
gap-12  // 48px
gap-16  // 64px

px-4    // 16px horizontal
px-8    // 32px horizontal
px-16   // 64px horizontal

pt-8    // 32px top (standard section)
```

---

## Common Patterns

### Hero Section
```tsx
<div className="flex items-center justify-center h-full px-8 md:px-16">
  <div className="w-[80vw] text-center">
    <h1 className="text-hero mb-6">Hero Heading</h1>
    <p className="text-body mb-8">Description</p>
    <Button className="btn-primary">CTA</Button>
  </div>
</div>
```

### Feature Card
```tsx
<Card className="card-white-bg">
  <CardContent className="p-6">
    <Target className="text-white mb-3" />
    <h3 className="text-subheading mb-2">Feature Title</h3>
    <p className="text-body text-gray-300">Description here</p>
  </CardContent>
</Card>
```

### Badge with Label
```tsx
<div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/30 rounded-full mb-6">
  <span className="text-yellow-500 text-badge">LABEL</span>
</div>
```

---

## DO's & DON'Ts

### ✅ DO
- Use typography utility classes
- Keep icons 24px × 24px white
- Use white/transparent icon containers
- Follow section padding pattern (pt-8, px-8 md:px-16)
- Use Raleway font (applied globally)
- Keep all backgrounds black or white/5
- Use yellow only for CTAs and accents

### ❌ DON'T
- Use inline fontSize styles
- Use yellow circular icon backgrounds
- Use colored icons (except yellow in CTAs)
- Break stacking section pattern
- Use light mode colors
- Override global CSS rules
- Use custom badge sizing

---

## Mobile Breakpoints

```tsx
// Mobile-first approach
className="text-sm md:text-base lg:text-lg"
className="px-4 md:px-8 lg:px-16"
className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3"

// Breakpoints:
// Mobile:  ≤640px
// Tablet:  641px - 1024px  
// Desktop: ≥1025px
```

---

## Header & Footer

### Header (fixed, z-index: 10000)
```tsx
// Auto-styled globally
// Fixed position with backdrop blur
// Yellow accents on hover
// Gradient text on active page
```

### Footer (all pages)
```tsx
// Auto-included
// Google My Business integration
// Social links
// Newsletter signup
// Contact info
```

---

## Floating CTAs

```tsx
// Auto-included on all pages
// AI Chatbot (top-right)
// WhatsApp (bottom-right)
// Yellow buttons with black icons
// 56px × 56px, 28px icons
```

---

## SEO & Schema

```tsx
import { SEOHead } from './components/SEOHead';
import { SchemaMarkup } from './components/SchemaMarkup';

// In component
<SEOHead {...metadata} />
<SchemaMarkup type="organization" />
```

---

## Quick Checklist

- [ ] Using typography utility classes?
- [ ] Icons 24px × 24px white?
- [ ] No yellow icon containers?
- [ ] Badges 20px height?
- [ ] Section padding correct (pt-8, px-8 md:px-16)?
- [ ] Content width 80vw?
- [ ] Raleway font applied?
- [ ] Mobile responsive?
- [ ] SEO metadata included?
- [ ] Schema markup added?

---

**File:** `/DESIGN-SYSTEM-QUICK-REFERENCE.md`  
**Last Updated:** December 2024  
**For:** Developers working on Inchtomilez website
