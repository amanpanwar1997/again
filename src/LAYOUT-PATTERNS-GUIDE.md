# Layout Patterns Guide - Inchtomilez Website

## Overview
This guide documents the various layout patterns implemented across the website to create visual variety and avoid monotonous designs. Each pattern serves a specific purpose and should be strategically applied across pages.

---

## Pattern Types & Use Cases

### 1. **2-Row Auto Horizontal Carousel** 
**Best For:** Showcasing 8-20 items that need equal visibility

**Use Cases:**
- Industry showcases
- Technology stacks
- Client logos
- Statistics/metrics
- Team members
- Service features

**Implementation:**
- Row 1: Scrolls LEFT (slower speed: 40-45s)
- Row 2: Scrolls RIGHT/reverse (faster speed: 35-38s)
- Infinite loop with duplicated content
- 200-240px card width
- Opposite direction animations create dynamic effect

**Code Example:**
```tsx
<div className="flex-1 min-h-0 flex flex-col gap-4 overflow-hidden">
  {/* Row 1 */}
  <div className="overflow-hidden relative">
    <div 
      className="flex gap-4 pb-2 w-max"
      style={{ animation: 'scroll-left-row1 40s linear infinite' }}
    >
      {[...Array(2)].map((_, duplicateIndex) => (
        items.slice(0, items.length / 2).map((item, i) => (
          <Card key={`row1-${duplicateIndex}-${i}`} className="flex-shrink-0" style={{ width: '240px' }}>
            {/* Card Content */}
          </Card>
        ))
      ))}
    </div>
  </div>

  {/* Row 2 - Reverse Direction */}
  <div className="overflow-hidden relative">
    <div 
      className="flex gap-4 pb-2 w-max"
      style={{ animation: 'scroll-left-row2 35s linear infinite reverse' }}
    >
      {[...Array(2)].map((_, duplicateIndex) => (
        items.slice(items.length / 2).map((item, i) => (
          <Card key={`row2-${duplicateIndex}-${i}`} className="flex-shrink-0" style={{ width: '240px' }}>
            {/* Card Content */}
          </Card>
        ))
      ))}
    </div>
  </div>
</div>
```

**Applied To:**
- ✅ Home - Technology Section
- ✅ Home - Industries Section
- ✅ About - Stats Section

---

### 2. **Auto-Cycling Vertical Accordions**
**Best For:** Detailed information with 3-8 items

**Use Cases:**
- Features with detailed explanations
- Why Choose Us sections
- Process steps
- Awards/recognition
- Benefits breakdown
- FAQs

**Implementation:**
- Auto-cycles every 4 seconds
- One accordion open at a time
- User can manually override
- Expandable content with stats/details
- Smooth slide-down animations

**Code Example:**
```tsx
const [activeItem, setActiveItem] = useState<string>('item-1');

// Auto-cycle effect
useEffect(() => {
  const items = ['item-1', 'item-2', 'item-3', 'item-4'];
  let currentIndex = 0;
  
  const interval = setInterval(() => {
    currentIndex = (currentIndex + 1) % items.length;
    setActiveItem(items[currentIndex]);
  }, 4000);
  
  return () => clearInterval(interval);
}, []);

return (
  <Accordion 
    type="single" 
    collapsible 
    value={activeItem}
    onValueChange={setActiveItem}
    className="space-y-4 w-full max-w-4xl mx-auto"
  >
    {items.map((item) => (
      <AccordionItem 
        key={item.id} 
        value={item.id}
        className="bg-white/5 border border-white/10 rounded-xl data-[state=open]:border-yellow-500/50"
      >
        <AccordionTrigger className="px-6 py-4">
          {/* Icon + Title + Description */}
        </AccordionTrigger>
        <AccordionContent className="px-6 pb-4">
          {/* Detailed content + stats grid */}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>
);
```

**Applied To:**
- ✅ Home - Awards Section
- ✅ About - Why Choose Us Section

---

### 3. **Tabs + Cards Grid**
**Best For:** Categorized content with 3-6 categories

**Use Cases:**
- Service categories
- Industry solutions
- Case studies by type
- Team by department
- Resources by topic
- Portfolio by category

**Implementation:**
- Horizontal tabs at top
- Content changes per tab
- 2-3 column grid per tab
- Smooth tab transitions

**Code Example:**
```tsx
<Tabs defaultValue="category1" className="w-full">
  <TabsList className="grid w-full grid-cols-3 md:grid-cols-6 gap-2 bg-white/5 p-2 rounded-xl mb-8">
    <TabsTrigger value="category1" className="data-[state=active]:bg-yellow-500 data-[state=active]:text-black">
      Category 1
    </TabsTrigger>
    {/* More tabs */}
  </TabsList>
  
  <TabsContent value="category1" className="space-y-6">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item, i) => (
        <Card key={i} className="bg-white/5 border-white/10">
          {/* Card Content */}
        </Card>
      ))}
    </div>
  </TabsContent>
  
  {/* More tab content */}
</Tabs>
```

**To Be Applied:**
- Services page - Service categories
- Industries page - Industry groups
- Blogs page - Blog categories

---

### 4. **Single Row Horizontal Scroll**
**Best For:** 3-6 featured items

**Use Cases:**
- Featured case studies
- Success stories
- Client testimonials
- Recent blog posts
- Top services

**Implementation:**
- Horizontal scroll with landscape cards
- Manual scroll or touch swipe
- Snap to item
- No auto-scroll

**Code Example:**
```tsx
<div className="overflow-x-auto scrollbar-hide">
  <div className="flex gap-6 pb-4">
    {items.map((item, i) => (
      <div 
        key={i}
        className="flex-shrink-0 w-[90vw] md:w-[600px]"
      >
        <Card className="bg-white/5 border-white/10 h-full">
          {/* Landscape card content */}
        </Card>
      </div>
    ))}
  </div>
</div>
```

**Applied To:**
- ✅ Home - Success Stories

---

### 5. **Bento Grid (Static)**
**Best For:** Equal-importance items, 6-12 items

**Use Cases:**
- Core values
- Service offerings
- Team members
- Features list
- Benefits overview

**Implementation:**
- Responsive grid (2 → 3 → 4 columns)
- Equal height cards
- Hover effects
- Static (no auto-scroll)

**Code Example:**
```tsx
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {items.map((item, i) => (
    <Card 
      key={i}
      className="bg-white/5 border-white/10 hover:border-yellow-500/30 hover:scale-105 transition-all duration-300"
    >
      <CardContent className="p-6">
        <div className="w-12 h-12 bg-white/5 border border-white/10 rounded-full flex items-center justify-center mb-4">
          <item.icon className="w-6 h-6 text-white" />
        </div>
        <h3 className="mb-3">{item.title}</h3>
        <p className="text-gray-400 text-sm">{item.desc}</p>
      </CardContent>
    </Card>
  ))}
</div>
```

**Everywhere as fallback pattern**

---

### 6. **Timeline (Vertical)**
**Best For:** Process steps, history, journey

**Use Cases:**
- Company history
- Process workflow
- Project timeline
- Growth milestones

**Implementation:**
- Vertical line connecting items
- Numbered steps
- Alternating left/right (desktop)
- Stack on mobile

**Applied To:**
- About - Process section
- Service pages - Process workflow

---

## Pattern Selection Strategy

### Page Type → Pattern Mapping

**Home Page (14 sections):**
1. Hero - Video background
2. Services - Horizontal Service Accordion
3. Technology - ✅ 2-Row Auto Carousel
4. Process - Timeline
5. Success Stories - ✅ Single Row Horizontal Scroll
6. Industries - ✅ 2-Row Auto Carousel
7. Why Us - Bento Grid
8. Awards - ✅ Auto-Cycling Accordion
9. Impact - Timeline
10. Team - Bento Grid
11. Testimonials - Single Row Horizontal
12. Stats - Bento Grid
13. CTA - Hero style
14. Contact - Form

**About Page (15 sections):**
1. Hero - Text only
2. Who We Are - Bento Grid
3. Growth Philosophy - Bento Grid
4. Leadership - Bento Grid
5. Culture - Bento Grid
6. Awards Recognition - Bento Grid
7. No Bargaining - Content block
8. Trust - Bento Grid
9. Expertise - Bento Grid
10. Team Structure - Bento Grid
11. Stats - ✅ 2-Row Auto Carousel
12. Why Choose Us - ✅ Auto-Cycling Accordion
13. Process - Timeline
14. Client Success - Bento Grid
15. CTA - Hero style

**Services Page (17 sections):**
- Hero
- Service Overview - ✅ Tabs + Cards Grid (implement)
- 16 Individual Services - Bento Grid each

**Service Pages (16 pages, each with ~5 sections):**
1. Hero
2. Features - ✅ 2-Row Auto Carousel or Auto Accordion
3. Process - Timeline
4. Benefits - Bento Grid
5. CTA

**Industry Pages (20 pages, each with ~5 sections):**
1. Hero
2. Services - ✅ Tabs + Cards Grid
3. Solutions - Auto Accordion
4. Case Studies - Single Row Horizontal
5. CTA

---

## Pattern Rotation Rules

**Avoid:**
- ❌ Same pattern twice in a row on any page
- ❌ More than 3 Bento Grids consecutively
- ❌ Auto-scroll patterns back-to-back (carousel → carousel)

**Do:**
- ✅ Alternate between static and dynamic patterns
- ✅ Mix pattern types: Carousel → Grid → Accordion → Horizontal Scroll
- ✅ Use 2-3 different patterns minimum per page
- ✅ Save auto-patterns for high-value content

---

## Implementation Checklist

### Main Pages:
- ✅ Home - 4 patterns applied (Carousel × 2, Accordion, Horizontal)
- ✅ About - 2 patterns applied (Carousel, Accordion)
- ⏳ Services - Needs Tabs + Cards Grid
- ⏳ Industries - Needs enhancement
- ⏳ Blogs - Needs Carousel + Grid
- ⏳ Let's Talk - Form-focused (minimal patterns)

### Service Pages (16):
- ⏳ All need pattern transformation (Hero + 4 sections each)
- **Priority:** Digital Marketing, Branding, Website Development

### Industry Pages (20):
- ⏳ All need pattern transformation (Hero + 4 sections each)
- **Priority:** Healthcare, E-Commerce, Technology

---

## Next Steps

### Phase 1: Main Pages (Priority)
1. ✅ Home - Complete
2. ✅ About - Complete
3. Services - Add Tabs + Cards Grid for service categories
4. Industries - Add Tabs for industry groups
5. Blogs - Add 2-Row Carousel for featured posts

### Phase 2: Service Pages (16 pages)
Apply pattern template:
```
Section 1: Hero
Section 2: Features (2-Row Carousel or Auto Accordion)
Section 3: Process (Timeline)
Section 4: Benefits (Bento Grid)
Section 5: CTA
```

### Phase 3: Industry Pages (20 pages)
Apply pattern template:
```
Section 1: Hero
Section 2: Services (Tabs + Cards Grid)
Section 3: Solutions (Auto Accordion)
Section 4: Case Studies (Single Row Horizontal)
Section 5: CTA
```

---

## Animation CSS Required

Ensure these keyframes exist in `/styles/globals.css`:

```css
@keyframes scroll-left-row1 {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

@keyframes scroll-left-row2 {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
```

---

## Pattern Statistics

**Current Implementation:**
- ✅ 2-Row Auto Carousel: 3 instances (Home × 2, About × 1)
- ✅ Auto-Cycling Accordion: 2 instances (Home, About)
- ✅ Single Row Horizontal: 1 instance (Home Success Stories)
- ⏳ Tabs + Cards Grid: 0 instances (to be added)
- Static Bento Grid: 20+ instances (default pattern)

**Target Distribution:**
- 2-Row Auto Carousel: 15-20 instances across all pages
- Auto-Cycling Accordion: 10-15 instances
- Tabs + Cards Grid: 5-10 instances
- Single Row Horizontal: 5-10 instances
- Bento Grid: Remaining sections

---

**Last Updated:** October 26, 2025
**Version:** 1.0
**Status:** Phase 1 Complete (Home + About transformed)
