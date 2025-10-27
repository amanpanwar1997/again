# Mobile Testing Guide - About Page

## Quick Test Instructions

### Desktop Testing (Chrome DevTools)
1. Open Chrome DevTools (F12)
2. Click "Toggle Device Toolbar" (Ctrl+Shift+M)
3. Select "iPhone 12 Pro" or "Responsive"
4. Navigate to `/about` page
5. Test each section below

### Section-by-Section Testing

---

## Section 2: Growth Philosophy
**Expected Mobile Behavior:**
- ✅ Should show 2×2 tab grid at top
- ✅ Tabs should auto-cycle every 4 seconds
- ✅ Active tab highlighted in yellow
- ✅ Card content changes with tab selection

**Desktop Behavior:**
- ✅ Shows 2-column grid with all 4 items
- ✅ No tabs visible

**Test Steps:**
1. Scroll to "We Believe In Growth That Is Measurable"
2. On mobile: Watch tabs auto-cycle
3. On mobile: Tap a tab to select manually
4. On desktop: Verify grid layout

---

## Section 3: Simple & Clear
**Expected Mobile Behavior:**
- ✅ Should show 2×2 tab grid at top
- ✅ Tabs should auto-cycle every 4 seconds
- ✅ Active tab highlighted in yellow
- ✅ Checkmark icon visible in card

**Desktop Behavior:**
- ✅ Shows vertical list with all 4 items
- ✅ Checkmarks aligned left

**Test Steps:**
1. Scroll to "We Are Simple"
2. On mobile: Watch tabs auto-cycle
3. On mobile: Tap a tab (e.g., "No Jargon")
4. On desktop: Verify vertical list in single container

---

## Section 5: What Sets Us Apart
**Expected Mobile Behavior:**
- ✅ Horizontal scrollable carousel
- ✅ Cards are 280px wide
- ✅ Smooth swipe/scroll
- ✅ No scrollbar visible
- ✅ Shows 6 cards total

**Desktop Behavior:**
- ✅ 2-column grid
- ✅ All 6 cards visible
- ✅ Hover effects work

**Test Steps:**
1. Scroll to "What Makes Us Different"
2. On mobile: Swipe left/right through cards
3. On mobile: Verify smooth scroll
4. On desktop: Hover over cards for border effect

---

## Section 8: Services Overview
**Expected Mobile Behavior:**
- ✅ Horizontal scrollable carousel
- ✅ Cards are 140px wide (compact)
- ✅ Shows 8 service cards
- ✅ Icon + service name visible

**Desktop Behavior:**
- ✅ 4-column grid (responsive)
- ✅ All 8 services visible
- ✅ Links to service pages work

**Test Steps:**
1. Scroll to "16 Specialized Services"
2. On mobile: Swipe through service cards
3. On mobile: Tap a card to navigate
4. On desktop: Verify 4-column grid

---

## Section 9: Industries We Serve
**Expected Mobile Behavior:**
- ✅ 2-column bento grid
- ✅ All 15 industries visible
- ✅ Compact card design
- ✅ Proper vertical spacing

**Desktop Behavior:**
- ✅ 5-column grid (responsive: 2→3→4→5)
- ✅ All industries visible
- ✅ Hover effects work

**Test Steps:**
1. Scroll to "Serving 20+ Industries"
2. On mobile: Verify 2-column layout
3. On mobile: Check if all 15 fit well
4. On desktop: Verify responsive columns

---

## Section 10: Team & Culture
**Expected Mobile Behavior:**
- ✅ Horizontal scrollable carousel
- ✅ Cards are 260px wide
- ✅ Shows 6 team cards
- ✅ Icon + count + title + description visible

**Desktop Behavior:**
- ✅ 3-column grid
- ✅ All 6 teams visible
- ✅ Hover effects work

**Test Steps:**
1. Scroll to "50+ Experts. One Mission."
2. On mobile: Swipe through team cards
3. On mobile: Verify card width is comfortable
4. On desktop: Verify 3-column grid

---

## Section 11: Stats Section
**Expected Behavior (All Devices):**
- ✅ 2 rows of auto-scrolling stats
- ✅ Row 1 scrolls left (40s)
- ✅ Row 2 scrolls right/reverse (35s)
- ✅ Infinite loop (seamless)
- ✅ Smooth animation

**Test Steps:**
1. Scroll to "Results That Speak Louder"
2. Watch both rows auto-scroll
3. Verify smooth infinite loop
4. Check if cards duplicate seamlessly

---

## Section 12: Why Choose Inchtomilez
**Expected Behavior (All Devices):**
- ✅ Vertical accordion with 6 items
- ✅ Auto-cycles every 4 seconds
- ✅ Active item expands with details
- ✅ Shows stats in expanded view

**Test Steps:**
1. Scroll to "Why Businesses Choose Inchtomilez"
2. Watch accordion auto-cycle
3. Click an accordion to manually expand
4. Verify stats grid shows in expanded state

---

## Section 13: Our Process
**Expected Mobile Behavior:**
- ✅ Horizontal scrollable carousel
- ✅ Cards are 280px wide
- ✅ Shows 5 process steps
- ✅ Large step number visible

**Desktop Behavior:**
- ✅ Vertical stacked cards
- ✅ All 5 steps visible
- ✅ Arrow icon on hover (right side)

**Test Steps:**
1. Scroll to "Our 5-Step Success Process"
2. On mobile: Swipe through process steps
3. On mobile: Verify step numbers (01-05)
4. On desktop: Hover for arrow animation

---

## Section 14: Testimonials
**Expected Mobile Behavior:**
- ✅ Horizontal scrollable carousel
- ✅ Cards are 300px wide
- ✅ Shows 4 testimonials
- ✅ Star rating + quote + name visible

**Desktop Behavior:**
- ✅ 2-column grid
- ✅ All 4 testimonials visible
- ✅ Star ratings display

**Test Steps:**
1. Scroll to "What Our Clients Say"
2. On mobile: Swipe through testimonials
3. On mobile: Verify 5 yellow stars
4. On desktop: Verify 2-column grid

---

## General Mobile UX Checks

### Horizontal Carousels
- [ ] Smooth scroll/swipe
- [ ] No scrollbar visible
- [ ] Cards don't overflow viewport
- [ ] Proper negative margin (-mx-4 px-4)
- [ ] Cards snap to position (optional)

### Tabs
- [ ] Auto-cycle works (4 seconds)
- [ ] Manual tap stops auto-cycle temporarily
- [ ] Active state highlighted in yellow
- [ ] Content changes smoothly
- [ ] Tab labels readable

### Typography
- [ ] All text uses Raleway font
- [ ] Headings have animated gradient
- [ ] No font-size classes breaking design
- [ ] Text is readable at mobile size

### Icons
- [ ] All icons are 24px × 24px
- [ ] All icons are white
- [ ] Icon containers have white borders
- [ ] No yellow circular backgrounds

### Spacing
- [ ] Consistent 8px base spacing
- [ ] Proper padding on all cards
- [ ] Adequate gaps between elements
- [ ] No overflow issues

### Colors
- [ ] Pure black background
- [ ] Pure white text
- [ ] Yellow accents on CTAs
- [ ] Gray for muted text

## Browser Testing Matrix

### Desktop Browsers
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile Browsers
- [ ] iOS Safari (iPhone)
- [ ] Android Chrome
- [ ] Samsung Internet
- [ ] Firefox Mobile

### Screen Sizes
- [ ] Mobile: 375px (iPhone SE)
- [ ] Mobile: 390px (iPhone 12/13/14)
- [ ] Mobile: 414px (iPhone Plus)
- [ ] Tablet: 768px (iPad)
- [ ] Desktop: 1024px
- [ ] Desktop: 1440px
- [ ] Desktop: 1920px

## Performance Checks

### Mobile Performance
- [ ] Page loads under 3 seconds
- [ ] Smooth 60fps scrolling
- [ ] No layout shifts
- [ ] Images load progressively
- [ ] Animations don't lag

### Auto-Cycle Performance
- [ ] No memory leaks
- [ ] Cleanup on unmount
- [ ] Smooth transitions
- [ ] CPU usage acceptable

### Lighthouse Scores (Mobile)
- [ ] Performance: 90+
- [ ] Accessibility: 90+
- [ ] Best Practices: 90+
- [ ] SEO: 90+

## Accessibility Checks

### Keyboard Navigation
- [ ] Tab through all interactive elements
- [ ] Tabs are keyboard accessible
- [ ] Accordion items keyboard accessible
- [ ] Focus states visible (yellow)

### Screen Readers
- [ ] Headings read correctly
- [ ] Card content announced
- [ ] Tab labels make sense
- [ ] Accordion states announced

### Touch Targets
- [ ] All buttons ≥44px touch area
- [ ] Tab triggers ≥44px
- [ ] Accordion triggers ≥44px
- [ ] No overlapping targets

## Known Issues to Watch For

### Potential Issues
1. **Auto-cycle conflicts:** If user taps tab, should stop/resume cycle?
2. **Carousel snap:** Cards might not snap perfectly on some devices
3. **Font loading:** Raleway might flash unstyled briefly
4. **Icon size:** Global CSS override should keep all at 24px

### Edge Cases
1. **Slow connections:** Tabs might cycle before content loads
2. **Very small screens:** 280px cards might be too wide for <320px
3. **Very large screens:** Carousels might look odd on 4K displays
4. **Landscape mode:** Mobile carousels should still work

## Debug Tips

### If Tabs Don't Auto-Cycle
1. Check browser console for errors
2. Verify `isMobile` hook returns correct value
3. Ensure useEffect dependencies correct
4. Check if interval is being cleared properly

### If Carousels Don't Scroll
1. Verify `.hide-scrollbar` class exists in globals.css
2. Check if `overflow-x-auto` is applied
3. Ensure cards have `flex-shrink-0`
4. Verify `style={{ width: 'max-content' }}` on container

### If Icons Wrong Size
1. Check if globals.css has icon override
2. Verify lucide-react icons used
3. Ensure no inline width/height props
4. Check if h-6/w-6 classes overridden

### If Mobile Detector Fails
1. Import correct: `import { useIsMobile } from '../components/ui/use-mobile'`
2. Check if hook uses correct breakpoint (640px)
3. Verify window resize listener works
4. Test in actual mobile browser (not just DevTools)

## Sign-Off Checklist

### Before Deployment
- [ ] All 10 sections tested on mobile
- [ ] All 10 sections tested on desktop
- [ ] Auto-cycle working correctly
- [ ] No console errors
- [ ] No layout shifts
- [ ] Performance acceptable
- [ ] Accessibility verified
- [ ] Cross-browser tested
- [ ] Design system compliant
- [ ] Code reviewed

---

**Testing Date:** __________  
**Tester:** __________  
**Device:** __________  
**Browser:** __________  
**Pass/Fail:** __________  
**Notes:** __________
