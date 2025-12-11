# 7Sports Design System & Core Values

## Complete Design Brief for Replication

---

## 🎯 **PHILOSOPHY: "Dynamic Energy with Premium Polish"**

This website embodies **energetic youthfulness** balanced with **sophisticated design discipline**. Every decision reinforces that this is a professional organization that understands families, values accessibility, and creates joy through sport. The design never feels corporate—it feels **inviting, modern, and trustworthy**.

---

## 🎨 **1. VISUAL IDENTITY & COLOR SYSTEM**

### Core Brand Colors

**Primary Red (`#D62828`)**

-   **Role:** Energy, action, primary CTAs, brand moments
-   **Usage:** Buttons, accents, category badges, active states
-   **Philosophy:** Bold but not aggressive. Warm, approachable red that signals "let's play"
-   **Gradient Variants:**
    -   Light: `#E32B2B` (gradient start)
    -   Dark: `#C41F1F` (gradient end)
-   **Shadow:** Custom red shadow `0 8px 24px rgba(214, 40, 40, 0.25)` for depth

**Support Yellow (`#F6C443`)**

-   **Role:** Optimism, highlights, secondary energy
-   **Usage:** Age badges, hover states on navigation, accent gradients
-   **Philosophy:** Warm, sunny, child-friendly without being childish

**Neutral Foundation**

-   **Off-White (`#F8F8F8`)**: Primary background. Never pure white—softer, premium feel
-   **Warm White (`#FAFAFA`)**: Card backgrounds, subtle sections
-   **Light Gray (`#F5F5F5`)**: Alternating section backgrounds
-   **Accent Gray (`#ECECEC`)**: Borders, subtle dividers
-   **Deep Charcoal (`#111111`)**: Primary text. **Never pure black** (#000)—off-black is softer, more readable
-   **Charcoal (`#2A2A2A`)**: Secondary text
-   **Text Muted (`#666666`)**: Tertiary text, descriptions

### Color Application Rules

1. **Gradients Over Flat Colors:** Nearly all colored elements use subtle gradients:

    - Buttons: `linear-gradient(135deg, #E32B2B 0%, #C41F1F 100%)`
    - Hero sections: `linear-gradient(135deg, #D62828 0%, #F77F00 50%, #F6C443 100%)` (red→orange→yellow)
    - This adds depth and premium feel

2. **Contrast Philosophy:**

    - High contrast for readability (WCAG AA compliant)
    - But softened edges—no harsh #000/#FFF contrasts
    - Text on colored backgrounds always uses white or off-white

3. **Color Hierarchy:**
    - Red = Primary action (sign up, find program)
    - Yellow = Secondary highlights (badges, hovers)
    - Neutrals = Content foundation
    - Never more than 3 colors visible in a single component

---

## ✍️ **2. TYPOGRAPHY SYSTEM**

### Font Family

**Poppins** (Google Fonts)

-   **Why:** Rounded, friendly, approachable but professional
-   **Weights Used:** 400 (body), 600 (semibold), 700 (bold), 800 (extra-bold)
-   **Alternative Suggestions:** If Poppins feels too common, consider:
    -   Headings: Inter Tight, Satoshi, Clash Display
    -   Body: Inter, Manrope, Source Sans 3

### Type Scale (Responsive with `clamp()`)

**Headings:**

-   `h1`: `clamp(2.75rem, 5vw, 4.5rem)` → 44-72px, weight 800
-   `h2`: `clamp(2rem, 4vw, 3.25rem)` → 32-52px, weight 800
-   `h3`: `clamp(1.5rem, 3vw, 2.25rem)` → 24-36px, weight 700

**Body:**

-   Standard: `1rem` (16px base)
-   Large body: `1.125rem` (18px)
-   Small: `0.95rem` (15px)

### Typography Rules

1. **Letter Spacing:**

    - Headings: `-0.02em` (tighter for modern look)
    - Uppercase text: `+0.02em` (slight tracking for elegance)
    - Body: Normal

2. **Line Height:**

    - Headings: `1.1-1.2` (tight, impactful)
    - Body: `1.7` (generous for readability—critical for families scanning content)

3. **Font Smoothing:**

    - Always include: `-webkit-font-smoothing: antialiased` and `-moz-osx-font-smoothing: grayscale`
    - Makes text feel premium on all devices

4. **Text Color:**
    - Never pure black. Use `--deep-charcoal: #111111`
    - Muted text: `#666666` for secondary info
    - White text on colored backgrounds always includes text-shadow for depth

---

## 📐 **3. SPACING & LAYOUT SYSTEM**

### 8px Grid Foundation

All spacing multiples of 8px for visual rhythm:

```
--spacing-xs:  0.5rem  (8px)
--spacing-sm:  1rem    (16px)
--spacing-md:  1.5rem  (24px)
--spacing-lg:  2rem    (32px)
--spacing-xl:  3rem    (48px)
--spacing-2xl: 4rem    (64px)
--spacing-3xl: 5rem    (80px)
```

### Spacing Philosophy: "Premium Breathing Room"

1. **Section Padding:**

    - Default: `var(--spacing-3xl)` (80px) top/bottom
    - Mobile: `var(--spacing-2xl)` (64px)
    - **Never cram content.** Cheap sites use 24px; premium uses 64-80px

2. **Container Padding:**

    - Desktop: `2rem` (32px) left/right
    - Mobile: `1.5rem` (24px)
    - **Text never touches edges**

3. **Component Spacing:**

    - Cards: `var(--spacing-2xl)` (64px) internal padding
    - Gaps between cards: `2rem` (32px)
    - Related items grouped tightly; sections clearly separated

4. **Visual Check:**
    - Zoom out to 25% in design tool
    - If layout looks calm and readable = good hierarchy
    - If cluttered = need more spacing

### Layout Principles

1. **Container Max-Width:** `1200px` (not full-width—prevents eye strain)
2. **Grid Alignment:** Everything aligns to invisible 8px grid
3. **Consistent Margins:** Use spacing variables, never arbitrary numbers
4. **Mobile-First:** Design for mobile, enhance for desktop

---

## 🔲 **4. COMPONENT DESIGN PATTERNS**

### Buttons

**Primary Button:**

-   Background: Red gradient (`linear-gradient(135deg, #E32B2B 0%, #C41F1F 100%)`)
-   Text: White, weight 600
-   Padding: `1rem 2.5rem` (vertical, horizontal)
-   Min-height: `48px` (accessibility)
-   Border-radius: `12px` (rounded but not pill-shaped)
-   Shadow: `var(--shadow-red)` (red-tinted shadow for depth)
-   Letter-spacing: `0.01em`
-   **Hover Effect:**
    -   Transform: `translateY(-3px) scale(1.02)`
    -   Shadow: Increased (`0 12px 32px rgba(214, 40, 40, 0.35)`)
    -   Gradient darkens slightly via `::before` pseudo-element overlay
-   **Active:** `scale(0.99)` (press feedback)

**Secondary Button:**

-   Background: White
-   Border: `2px solid var(--primary-red)`
-   Text: Red
-   **Hover:** Transforms to red gradient, text becomes white

**Button Sizes:**

-   Standard: `1rem 2.5rem`
-   Small: `0.75rem 1.5rem`
-   Large: `1.25rem 3rem`, min-height `56px`

### Cards

**Standard Card Pattern:**

-   Background: White
-   Border-radius: `var(--border-radius-lg)` (24px)
-   Padding: `var(--spacing-2xl)` (64px)
-   Border: `1px solid rgba(0, 0, 0, 0.04)` (subtle, not harsh)
-   Shadow: `var(--shadow-md)` (elevated but not floating)
-   **Hover:**
    -   Transform: `translateY(-12px) scale(1.01)`
    -   Shadow: `var(--shadow-xl)` (stronger elevation)
    -   Border: Slight red tint `rgba(214, 40, 40, 0.15)`
    -   Transition: `0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)` (smooth, premium)

**Image Cards:**

-   Image aspect ratio: Maintained, `object-fit: cover`
-   Image height: `240px` for program cards, `220px` for news cards
-   Border-radius on top corners only: `24px 24px 0 0`
-   Image hover: Slight scale (`1.1`) for engagement

### Navigation

**Desktop Nav:**

-   Font-size: `0.95rem`
-   Font-weight: `600`
-   Letter-spacing: `0.01em`
-   Active state: Red color + underline indicator
-   **Header Behavior:**
    -   On hero: Transparent background, white text with shadow
    -   After scroll: White/translucent background (`rgba(255, 255, 255, 0.85)`), dark text
    -   Smooth transition between states

**Mobile Nav (Bottom Fixed):**

-   Background: `rgba(255, 255, 255, 0.98)` with blur
-   Border-top: `1px solid rgba(0, 0, 0, 0.06)`
-   Shadow: Upward shadow (`0 -4px 24px rgba(0, 0, 0, 0.12)`)
-   Active state: Red indicator bar
-   Icons + text labels for clarity

---

## 🎭 **5. SHADOW & DEPTH SYSTEM**

### Shadow Hierarchy (All Subtle—Realism Over Drama)

```
--shadow-xs:  0 1px 3px rgba(0, 0, 0, 0.08)    → Subtle elevation
--shadow-sm:  0 2px 8px rgba(0, 0, 0, 0.1)     → Cards at rest
--shadow-md:  0 4px 20px rgba(0, 0, 0, 0.12)   → Elevated cards
--shadow-lg:  0 8px 40px rgba(0, 0, 0, 0.16)   → Hovered cards
--shadow-xl:  0 16px 60px rgba(0, 0, 0, 0.2)   → Modal/overlay
--shadow-red: 0 8px 24px rgba(214, 40, 40, 0.25) → Brand moments
```

### Depth Rules

1. **Layering:** Use shadows to create hierarchy, not borders
2. **Color-Tinted Shadows:** Red elements get red-tinted shadows for cohesion
3. **Realism:** Soft, diffused shadows—not sharp drop shadows
4. **Hover Elevation:** Always increase shadow on hover to show interactivity

---

## 🔄 **6. ANIMATION & MOTION PHILOSOPHY**

### Core Principle: "Subtle Movement, Clear Intent"

Every animation serves a purpose—feedback, hierarchy, or delight. Nothing moves randomly.

### Animation Types

**1. Page Load Animations:**

-   Hero text: Slide in from left (`slideInLeft`, 0.8s)
-   Cards: Fade in with stagger (`fadeIn`, 0.6s)
-   Stagger delays: 0s, 0.2s, 0.4s for visual rhythm

**2. Hover Interactions:**

-   Buttons: Lift (`translateY(-3px)`) + scale (`1.02`)
-   Cards: Lift (`translateY(-12px)`) + shadow increase
-   Images: Subtle scale (`1.1`) for engagement
-   **Duration:** 0.3-0.4s (fast enough to feel responsive, smooth enough to feel premium)

**3. Transitions:**

-   Default: `cubic-bezier(0.4, 0, 0.2, 1)` (Material Design ease)
-   Smooth: `cubic-bezier(0.25, 0.46, 0.45, 0.94)` (premium feel)
-   **Never use linear**—always use easing curves

**4. Accordions/Tabs:**

-   Smooth expand/collapse: `max-height 0.4s ease`
-   Icon rotation: `transform: rotate(45deg)` on active

**5. Carousels:**

-   Transform-based (not display toggling)
-   Smooth transition: `transform 0.5s ease`

### Motion Rules

1. **Performance:** Use `transform` and `opacity` only (GPU-accelerated)
2. **Accessibility:** Respect `prefers-reduced-motion`
3. **Purpose:** Every animation must enhance UX, not distract
4. **Consistency:** Same animation type = same duration/easing

---

## 📱 **7. RESPONSIVE DESIGN STRATEGY**

### Breakpoint System

```
Mobile:    < 768px   → Single column, bottom nav
Tablet:    768-1024px → 2 columns, adjusted layouts
Desktop:   > 1024px  → Full layout, all features
```

### Mobile-First Approach

1. **Design for mobile first**, then enhance for larger screens
2. **Touch targets:** Minimum 44px height/width (accessibility)
3. **Text sizes:** Use `clamp()` for fluid typography
4. **Navigation:** Bottom nav on mobile, top nav on desktop
5. **Images:** Responsive with `object-fit: cover` for consistent aspect ratios

### Responsive Patterns

**Carousels:**

-   Mobile: 1 card visible, swipeable
-   Tablet: 2 cards visible
-   Desktop: 3 cards visible

**Grids:**

-   Mobile: 1 column
-   Tablet: `repeat(auto-fit, minmax(300px, 1fr))`
-   Desktop: Explicit columns (e.g., 3-column)

**Hero Sections:**

-   Mobile: `min-height: 300px`
-   Desktop: `min-height: 55vh`

---

## 🎨 **8. HERO SECTION PATTERN**

### Consistent Hero Design Across All Pages

**Structure:**

```html
<section class="page-hero">
    <div class="page-hero-overlay"></div>
    <div class="page-hero-content">
        <h1>Page Title</h1>
        <p>Subtitle or description</p>
    </div>
</section>
```

**Styling:**

-   Background: Orange gradient (`linear-gradient(135deg, #d62828 0%, #f77f00 50%, #f6c443 100%)`)
-   Height: `min-height: 55vh` (desktop), `300px` (mobile)
-   Overlay: Dark semi-transparent (`rgba(26, 26, 26, 0.35)`)
-   Pattern: Subtle SVG pattern overlay (0.3 opacity)
-   Text: White, centered, with text-shadow for depth
-   Content: Centered vertically and horizontally using flexbox

**Why This Works:**

-   Creates visual consistency across all pages
-   Orange gradient feels energetic and approachable
-   Large, clear typography establishes hierarchy immediately
-   Dark overlay ensures text readability

---

## 🖼️ **9. IMAGE & MEDIA STRATEGY**

### Image Treatment

1. **Consistent Aspect Ratios:**

    - Program cards: 240px height, 16:9 or square
    - News cards: 220px height
    - Founder images: 400px height

2. **Object Fit:**

    - Always use `object-fit: cover` and `object-position: center`
    - Ensures images fill containers without distortion

3. **Border Radius:**

    - Match container border-radius
    - Top corners rounded on cards with images

4. **Hover Effects:**
    - Subtle scale (`1.1`) on hover
    - Smooth transition (`0.4s ease`)

### Image Philosophy

-   **Real photos over illustrations** (shows actual kids, coaches, facilities)
-   **Action-oriented:** Kids playing, moving, engaged
-   **Diverse representation:** Inclusive imagery
-   **Optimized:** Compressed but high-quality
-   **Placeholders:** Use gradients during development, replace with real images

---

## 🎯 **10. CONTENT HIERARCHY & INFORMATION ARCHITECTURE**

### Content Strategy

**Hero Message:**

-   **One bold tagline** (e.g., "Play. Learn. Grow.")
-   **One supporting line** (e.g., "Where kids discover teamwork through sport")
-   **One primary CTA** (e.g., "Find a Program")
-   **One secondary CTA** (optional)

**Section Structure:**

1. **Title** (centered, large, bold)
2. **Subtitle** (optional, smaller, muted)
3. **Content grid/cards**
4. **CTA** (if needed)

### Information Density

-   **Don't overfill sections.** Maximum 3-4 cards per row on desktop
-   **White space is content.** Use it to guide the eye
-   **One focal point per section.** Clear visual hierarchy
-   **Progressive disclosure:** Accordions, tabs, and modals for detailed info

---

## 🎪 **11. INTERACTIVE COMPONENTS**

### Carousels

**Pattern:**

-   Track-based (transform, not display toggle)
-   Arrow buttons on sides (desktop)
-   Touch/swipe enabled (mobile)
-   Smooth transitions (0.5s ease)

**Styling:**

-   Buttons: White circle with shadow, red on hover
-   Buttons positioned: Absolute, centered vertically, outside container
-   Responsive: Adjust cards per viewport

### Accordions

**Pattern:**

-   Header: Always visible, clickable
-   Content: `max-height: 0` to `max-height: 1000px` (or auto)
-   Icon: Rotates 45deg on active
-   Smooth: `max-height 0.4s ease`

### Tabs

**Pattern:**

-   Button-based navigation
-   Panel display: `display: none` → `display: block` on active
-   Smooth fade-in animation on tab change
-   Active state: Red background, white text

### Forms

**Pattern:**

-   Inputs: Rounded (`12px`), subtle border
-   Focus: Red border + shadow
-   Labels: Above inputs (accessibility)
-   Buttons: Primary red gradient

---

## 💎 **12. PREMIUM MICRODETAILS**

### What Makes This Feel "Premium"

1. **Rounded Corners:** Consistent use of border-radius (12px, 16px, 24px)
2. **Subtle Borders:** `1px solid rgba(0, 0, 0, 0.04)` instead of harsh lines
3. **Gradient Overlays:** All colored elements use gradients
4. **Text Shadows:** White text on images/colored backgrounds gets shadow
5. **Backdrop Blur:** Header and mobile nav use `backdrop-filter: blur(20px)`
6. **Smooth Scrolling:** `scroll-behavior: smooth` for anchor links
7. **Focus States:** Clear outline on keyboard navigation (accessibility)
8. **Icon Consistency:** Same stroke-width (2px), same size (24px), same color scheme

---

## 🚀 **13. PERFORMANCE & TECHNICAL DECISIONS**

### Performance Philosophy

1. **CSS Transitions over JavaScript animations** (better performance)
2. **Transform/opacity only** for animations (GPU-accelerated)
3. **Debounced scroll handlers** (don't fire every pixel)
4. **RequestAnimationFrame** for smooth animations
5. **Lazy loading ready** (add `loading="lazy"` to images when implemented)

### Code Organization

-   **Component-based CSS:** Each page has its own CSS file
-   **CSS Variables:** All design tokens in `:root`
-   **DRY Principle:** Reusable classes, no duplication
-   **Semantic HTML:** Proper heading hierarchy, ARIA labels where needed

---

## 🎭 **14. CONTENT TONE & VOICE**

### Writing Style

1. **Conversational but professional:** "We're here to help" not "We provide solutions"
2. **Child-focused:** Always emphasize kids' experience, not corporate goals
3. **Inclusive language:** "Every child" not "All children"
4. **Action-oriented:** Verbs first ("Play. Learn. Grow." not "Playing, Learning, Growing")
5. **Short sentences:** Easy to scan, accessible to all reading levels

### Content Length

-   **Headlines:** 8-10 words max
-   **Descriptions:** 1-3 sentences
-   **Body paragraphs:** 2-4 sentences, break up long text
-   **CTAs:** 2-5 words ("Find a Program", "Learn More", "Register Now")

---

## 🔗 **15. NAVIGATION & USER FLOW**

### Navigation Philosophy

1. **Always accessible:** Header visible on scroll, mobile bottom nav always available
2. **Clear hierarchy:** Primary actions (Find Program) most prominent
3. **Breadcrumbs:** Implicit through header active states
4. **Deep linking:** URL parameters for filtered states (e.g., `?sport=soccer&age=4-6`)

### User Journey

**Primary Path:**
Homepage → Find Program → Register

**Secondary Paths:**

-   Homepage → Programs → Learn More → Find Program
-   Homepage → Locations → Find Program (with location filter)
-   Homepage → News → Engagement → Find Program

**Always provide multiple ways to reach core actions**

---

## 🌟 **16. ACCESSIBILITY & INCLUSION**

### Accessibility Standards

1. **WCAG AA compliant:** Color contrast ratios meet standards
2. **Keyboard navigation:** All interactive elements focusable
3. **Screen readers:** Semantic HTML, ARIA labels where needed
4. **Touch targets:** Minimum 44px height/width (Apple/Android guidelines)
5. **Font sizes:** Minimum 16px base, responsive scaling
6. **Alt text:** All images have descriptive alt attributes

### Inclusive Design

-   **Language toggle:** EN/FR support (structure ready)
-   **Diverse imagery:** Representation matters
-   **Clear language:** Avoid jargon, simple explanations
-   **Multiple contact methods:** Phone, email, location finder

---

## 🎨 **17. BRAND PERSONALITY EXPRESSED THROUGH DESIGN**

### Brand Attributes

1. **Energetic:** Motion, bright colors, active imagery
2. **Approachable:** Rounded corners, friendly typography, warm colors
3. **Professional:** Consistent spacing, clean layouts, polished details
4. **Inclusive:** Diverse imagery, clear language, accessible design
5. **Trustworthy:** Clear information, easy navigation, professional presentation

### Design Elements That Reinforce Brand

-   **Red = Energy/Passion:** Used for action, excitement, primary moments
-   **Yellow = Optimism:** Used for highlights, positivity, warmth
-   **Rounded = Friendly:** Soft corners everywhere, never harsh angles
-   **Spacing = Premium:** Breathing room shows care and attention
-   **Motion = Alive:** Subtle animations make the site feel dynamic

---

## 📋 **18. IMPLEMENTATION CHECKLIST**

### For Recreating This Design System

**Visual Foundation:**

-   [ ] Implement 8px spacing grid system
-   [ ] Set up color variables (red, yellow, neutrals)
-   [ ] Configure typography scale with clamp()
-   [ ] Define shadow hierarchy
-   [ ] Set up border-radius system

**Components:**

-   [ ] Build button system (primary, secondary, sizes)
-   [ ] Create card component (standard, image, hover states)
-   [ ] Design navigation (header, mobile nav)
-   [ ] Style hero sections (consistent gradient, overlay, typography)
-   [ ] Build carousel component
-   [ ] Create accordion/tab components

**Interactions:**

-   [ ] Add hover states to all interactive elements
-   [ ] Implement smooth transitions (0.3-0.4s)
-   [ ] Create page load animations
-   [ ] Add scroll effects (header transparency)

**Responsive:**

-   [ ] Set up breakpoints (768px, 1024px)
-   [ ] Create mobile navigation
-   [ ] Adjust grid layouts per breakpoint
-   [ ] Test touch interactions

**Polish:**

-   [ ] Add backdrop blur to headers/nav
-   [ ] Implement text shadows where needed
-   [ ] Add gradient overlays to colored elements
-   [ ] Ensure consistent border-radius usage
-   [ ] Optimize animation performance

---

## 🎯 **19. THE GOLDEN RULES**

### Do's

✅ **DO** use generous spacing (64-80px between sections)
✅ **DO** use gradients instead of flat colors
✅ **DO** use subtle shadows for depth
✅ **DO** make buttons lift on hover
✅ **DO** use rounded corners consistently
✅ **DO** keep text off-black (#111) not pure black
✅ **DO** use white text with shadow on colored backgrounds
✅ **DO** center hero content with consistent styling
✅ **DO** maintain 8px grid spacing
✅ **DO** use smooth, eased transitions

### Don'ts

❌ **DON'T** use pure black (#000) or pure white (#FFF)
❌ **DON'T** cram content—always add breathing room
❌ **DON'T** use linear animations—always use easing curves
❌ **DON'T** mix more than 2-3 colors in a component
❌ **DON'T** create flat designs—add depth with shadows/gradients
❌ **DON'T** use harsh borders—use subtle rgba borders
❌ **DON'T** forget hover states on interactive elements
❌ **DON'T** break the 8px grid spacing
❌ **DON'T** ignore mobile—design mobile-first
❌ **DON'T** use random font sizes—stick to the type scale

---

## 💡 **20. FINAL NOTES: WHAT MAKES THIS SPECIAL**

This design system works because it balances **opposites**:

-   **Energetic but Professional:** Fun colors with disciplined spacing
-   **Modern but Accessible:** Cutting-edge design with traditional usability
-   **Bold but Approachable:** Strong visual identity that doesn't intimidate
-   **Premium but Welcoming:** High-quality feel that invites participation
-   **Dynamic but Calm:** Motion and energy with breathing room

**The secret:** Every element serves the user's journey to engagement. Nothing is decorative for decoration's sake. Every color, spacing, animation, and interaction guides families toward finding the right program for their child.

When recreating, ask: _"Does this help a parent find a program for their kid?"_ If yes, keep it. If no, remove it.

---

**End of Design System Documentation**







