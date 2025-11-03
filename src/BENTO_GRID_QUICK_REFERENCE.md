# BENTO GRID 2.0 - QUICK REFERENCE GUIDE

**Component:** BentoGrid2 v3.0  
**Location:** `/components/layout/BentoGrid2.tsx`  
**Status:** ✅ Production-Ready

---

## 🚀 QUICK START

### **1. Import the Component**

```tsx
import { BentoGrid2 } from '../layout/BentoGrid2';
```

### **2. Choose Your Mode**

**Asymmetric** (advanced pattern) → Services, features, showcases  
**Uniform** (simple columns) → Stats, team members, FAQs

---

## 📋 USAGE PATTERNS

### **Pattern 1: Services Grid (Asymmetric)**

```tsx
import { Rocket, Target, Globe } from 'lucide-react';

const services = [
  {
    title: 'Digital Marketing',
    description: 'Complete digital solutions.',
    icon: Rocket,
    link: '/services/digital-marketing'
  },
  // ... 11 more (12 total recommended)
];

<BentoGrid2 
  cards={services}
  mode="asymmetric"
  showBadges={true}
  showStats={true}
  ariaLabel="Our services"
/>
```

**✅ Use when:** You need visual hierarchy, badges, stats display  
**✅ Best for:** 12 cards (perfect asymmetric pattern)

---

### **Pattern 2: Stats Grid (Uniform)**

```tsx
const stats = [
  { 
    number: '96+', 
    label: 'Clients Served', 
    sublabel: 'Growing businesses' 
  },
  // ... more stats
];

<BentoGrid2 
  cards={stats}
  mode="uniform"
  columns={4}
  ariaLabel="Company statistics"
/>
```

**✅ Use when:** Simple equal-sized cards  
**✅ Best for:** 4-8 cards with stats/numbers

---

### **Pattern 3: Features Grid (Uniform with Icons)**

```tsx
import { Shield, Award, Users } from 'lucide-react';

const features = [
  {
    icon: Shield,
    label: 'Honest Communication',
    description: 'We set realistic expectations about timelines.',
  },
  // ... more features
];

<BentoGrid2 
  cards={features}
  mode="uniform"
  columns={3}
  showCTA={false}
  ariaLabel="Why choose us"
/>
```

**✅ Use when:** Features without links  
**✅ Best for:** 3-6 feature cards

---

## 🎯 COMPLETE API

```typescript
<BentoGrid2 
  // Data (required)
  cards={arrayOfCards}
  
  // Mode (default: 'asymmetric')
  mode="asymmetric" | "uniform"
  
  // Columns for uniform mode (default: 4)
  columns={2 | 3 | 4 | 5}
  
  // Visual features
  showBadges={true}     // default: true
  showStats={true}      // default: true
  showCTA={true}        // default: true
  
  // Custom styling
  className="custom-class"
  
  // Accessibility (always include!)
  ariaLabel="Descriptive label"
/>
```

---

## 📦 DATA STRUCTURES

### **For Linked Cards (Services/Features)**

```typescript
interface BentoCard {
  title: string;        // Required
  description: string;  // Required
  icon: LucideIcon;     // Required
  link: string;         // Required
}
```

### **For Simple Cards (Stats/Team)**

```typescript
interface SimpleBentoCard {
  icon?: LucideIcon;    // Optional
  number?: string;      // Optional (e.g., "96+")
  label: string;        // Required
  sublabel?: string;    // Optional
  description?: string; // Optional
}
```

---

## 🎨 RESPONSIVE BREAKPOINTS

### **Asymmetric Mode**
- Mobile (≤768px): **2 columns**, gap-2 (8px)
- Tablet (768-1023px): **6 columns**, gap-3 (12px)
- Desktop (≥1024px): **8 columns**, gap-3 (12px)

### **Uniform Mode**
- Mobile (≤640px): **1 column**, gap-4 (16px)
- Tablet (≥768px): **2-3 columns**, gap-6 (24px)
- Desktop (≥1024px): **2/3/4/5 columns**, gap-8 (32px)

---

## ✅ BEST PRACTICES

### **DO:**
✅ Always include `ariaLabel` for accessibility  
✅ Use asymmetric mode for 12 cards (perfect pattern)  
✅ Use uniform mode for stats/features  
✅ Import icons from `lucide-react`  
✅ Keep descriptions concise (2-3 lines max)  

### **DON'T:**
❌ Mix modes on the same page (use one consistently)  
❌ Forget aria labels  
❌ Use inline styles (use className instead)  
❌ Create cards with missing required fields  
❌ Use asymmetric mode for stats (use uniform instead)  

---

## 🔧 COMMON USE CASES

| Use Case | Mode | Columns | ShowBadges | ShowStats | ShowCTA |
|----------|------|---------|------------|-----------|---------|
| **Services Showcase** | asymmetric | - | true | true | true |
| **Features Grid** | uniform | 3-4 | false | false | false |
| **Stats Display** | uniform | 4 | false | false | false |
| **Team Members** | uniform | 3 | false | false | false |
| **Industries** | asymmetric | - | true | false | true |
| **Blog Posts** | asymmetric | - | true | false | true |
| **FAQ Categories** | uniform | 4 | false | false | true |
| **Process Steps** | uniform | 5 | false | false | false |

---

## 🎯 MIGRATION CHECKLIST

**When migrating from old BentoGrid:**

1. ✅ Remove old import: ~~`import { BentoGrid, BentoItem }`~~
2. ✅ Add new import: `import { BentoGrid2 }`
3. ✅ Convert data to card objects (BentoCard or SimpleBentoCard)
4. ✅ Replace manual grid construction with `<BentoGrid2 cards={data} />`
5. ✅ Add `mode` prop (asymmetric or uniform)
6. ✅ Add `columns` prop (if uniform mode)
7. ✅ Add `ariaLabel` for accessibility
8. ✅ Remove manual BentoItem components
9. ✅ Remove inline styles and classNames from items
10. ✅ Test responsiveness on all breakpoints

---

## 🐛 TROUBLESHOOTING

**Problem:** Cards not displaying correctly  
**Solution:** Check that all required fields (title, description, icon, link) are provided

**Problem:** Grid layout looks broken on mobile  
**Solution:** Mode is set correctly? Asymmetric for complex, uniform for simple

**Problem:** TypeScript errors  
**Solution:** Ensure card data matches BentoCard or SimpleBentoCard interface

**Problem:** Accessibility warnings  
**Solution:** Add ariaLabel prop to BentoGrid2

**Problem:** Badges not showing  
**Solution:** Set `showBadges={true}` and use `mode="asymmetric"`

---

## 📱 SECTION TEMPLATE

**Standard Section Structure:**

```tsx
<section className="border-t border-white/10 py-16 md:py-24">
  <div className="container mx-auto px-4 sm:px-6 lg:px-8">
    <div className="max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="mb-4 leading-[1.3]">
          Section Title
        </h2>
        <p className="text-[0.9375rem] text-gray-300">
          Section description...
        </p>
      </div>

      {/* BentoGrid2 */}
      <BentoGrid2 
        cards={data}
        mode="asymmetric"
        ariaLabel="Section content"
      />

      {/* Optional CTA */}
      <div className="mt-12 text-center">
        <Link to="/page" className="bg-yellow-500 ...">
          View All <ArrowRight />
        </Link>
      </div>
    </div>
  </div>
</section>
```

---

## 🎨 VISUAL REFERENCE

### **Asymmetric Pattern (12 Cards)**

```
Desktop (8 columns):
┌─────────┬─────────┐
│  Wide   │  Wide   │  Row 1 (4+4)
├──┬──┬──┬──┼──┬──┬──┤
│2 │2 │2 │2 │2 │2 │2 │  Row 2 (2+2+2+2)
├───┴──┼───┴──┼──┤
│  3   │  3   │2 │     Row 3 (3+3+2)
├──┬──┼──┬──┼───────┤
│2 │2 │2 │2 │ Wide │  Row 4 (2+2+4)
└──┴──┴──┴──┴───────┘
```

### **Uniform Pattern (4 Columns)**

```
Desktop:
┌────┬────┬────┬────┐
│ 1  │ 2  │ 3  │ 4  │
├────┼────┼────┼────┤
│ 5  │ 6  │ 7  │ 8  │
└────┴────┴────┴────┘
```

---

## 💡 PRO TIPS

1. **12 is the magic number** - For asymmetric mode, use exactly 12 cards for perfect layout
2. **Consistent icons** - Use lucide-react icons consistently across all cards
3. **Short descriptions** - Keep card descriptions to 2-3 lines maximum
4. **Test on mobile** - Always test responsive behavior on small screens
5. **Accessibility first** - Never forget ariaLabel - screen reader users matter!

---

## 📚 MORE RESOURCES

- **Full Documentation:** `/BENTO_GRID_CENTRALIZATION_COMPLETE.md`
- **Design Guidelines:** `/guidelines/Guidelines.md`
- **Source Code:** `/components/layout/BentoGrid2.tsx`
- **Live Examples:** HomePage, ServicesPage

---

**Quick Reference Version:** 1.0.0  
**Last Updated:** November 3, 2025  
**Component Version:** BentoGrid2 v3.0
