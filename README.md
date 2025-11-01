# 🟥 7Sports — Dynamic Energy Website

A vibrant, energetic, and family-friendly website for 7Sports youth athletics program featuring modern design, interactive elements, and mobile-first responsive layouts.

## 🎨 Visual Identity

**Color Palette:**

-   Primary Red: `#D62828`
-   Warm White: `#FAFAFA`
-   Accent Gray: `#ECECEC`
-   Support Yellow: `#F6C443`
-   Deep Charcoal: `#1A1A1A`

**Typography:**

-   Font Family: Poppins (rounded and friendly)
-   Bold weights for headings, regular for body text

## ✨ Features

### 🏠 Landing Page (index.html)

-   Autoplay hero video banner with overlay
-   "Play. Learn. Grow." headline with CTA buttons
-   Quick highlights strip (3 icon cards)
-   Program preview carousel
-   About teaser section
-   Motion ball element that follows scroll

### ⚽ Programs Page (programs.html)

-   Interactive sport tabs (Soccer, Dek Hockey, Multi-Sport)
-   Age-based accordion system (2-4, 4-6, 7-12 years)
-   Program details with mini galleries
-   Animated transitions

### 📍 Find My Program Page (find-program.html)

-   Sticky filter bar (Sport, Age, Distance)
-   Interactive Leaflet map with custom markers
-   Dynamic results list with program cards
-   Click-to-highlight integration between map and cards
-   Real-time filtering

### 🗺️ Locations Page (locations.html)

-   Regional overview map with cluster markers
-   City cards grid (6 cities featured)
-   Coming Soon section with email signup
-   Interactive map navigation

### 👥 About Us Page (about.html)

-   Story section with animated statistics
-   Core values showcase
-   Founder profiles with quotes
-   Auto-scrolling coaches carousel
-   Video placeholder with testimonials
-   Join Our Team CTA

### ❓ FAQ Page (faq.html)

-   Live search functionality
-   Categorized accordion sections
-   6 categories covering all common questions
-   Contact suggestion section

### 🎯 Global Features

-   **Responsive Design:** Mobile-first approach with breakpoints
-   **Sticky Header:** Compact navigation with language toggle
-   **Mobile Bottom Nav:** Fixed 3-icon navigation for mobile users
-   **Floating Action Button (FAB):** Quick access to call/email
-   **Motion Ball:** Bouncing ball that travels on scroll (desktop only)
-   **Micro-animations:**
    -   Hover ripples on buttons (scale + shadow)
    -   Slide-in transitions on page load
    -   Smooth accordion expand/collapse
    -   Card hover lifts
    -   Carousel smooth transitions

## 📁 File Structure

```
7sportsMockUp-1/
├── index.html              # Landing page
├── programs.html           # Programs/Sports page
├── find-program.html       # Interactive program finder
├── locations.html          # Locations overview
├── about.html              # About Us page
├── faq.html                # FAQ page
├── styles.css              # Global styles
├── programs.css            # Programs page styles
├── find-program.css        # Find program page styles
├── locations.css           # Locations page styles
├── about.css               # About page styles
├── faq.css                 # FAQ page styles
├── script.js               # Main JavaScript
├── map.js                  # Map functionality
├── locations.js            # Locations map
├── about.js                # About page carousel
└── README.md               # This file
```

## 🚀 Getting Started

### Prerequisites

-   Modern web browser (Chrome, Firefox, Safari, Edge)
-   No build tools required - pure HTML/CSS/JS

### Installation

1. Clone or download this repository
2. Open `index.html` in your web browser
3. That's it! No dependencies to install.

### External Dependencies (CDN)

-   **Leaflet.js** (v1.9.4) - For interactive maps
-   **Google Fonts** - Poppins font family
-   All loaded via CDN, no local installation needed

## 🎮 Interactive Elements

### Carousels

-   **Landing Page:** Program preview carousel
-   **About Page:** Coaches carousel with auto-advance
-   Navigation via arrow buttons
-   Touch-friendly on mobile

### Maps

-   **Find My Program:** Interactive map with filterable locations
-   **Locations:** Overview map with city clusters
-   Click markers for details
-   Synchronized with result cards

### Accordions

-   **Programs Page:** Age group details
-   **FAQ Page:** Question categories
-   Smooth expand/collapse animations
-   Only one open at a time per group

### Filters

-   **Find My Program:** Sport, Age, Distance filters
-   Real-time results update
-   URL parameter support for direct links

### Search

-   **FAQ Page:** Live search across all questions
-   Instant results as you type
-   Highlights matching items

## 📱 Responsive Breakpoints

-   **Mobile:** < 768px (single column, bottom nav)
-   **Tablet:** 768px - 1024px (2 columns, adjusted layouts)
-   **Desktop:** > 1024px (full layout, motion ball visible)

## 🎨 Design Patterns

### Buttons

-   Minimum 44px height (accessibility)
-   Hover: Scale (1.02) + shadow lift
-   Active: Slight press effect (scale 0.98)
-   Rounded corners (12px radius)

### Cards

-   16px border radius
-   Hover: Lift effect (-8px translateY)
-   Box shadow on hover
-   Smooth transitions (0.3s ease)

### Images/Placeholders

-   Gradient backgrounds as placeholders
-   Emoji overlays for visual interest
-   Ready for real image replacement

## 🔄 Animation Details

### Page Load

-   Hero text slides in from left
-   Cards fade in with stagger delay
-   Smooth opacity transitions

### Scroll

-   Motion ball follows scroll path in wavy pattern
-   Stats animate when scrolling into view
-   Smooth anchor link scrolling

### Interactions

-   Button bounce on click
-   Card hover lift
-   Accordion smooth expand
-   Map pin pop on hover

## 🌐 Browser Support

-   Chrome/Edge (latest 2 versions)
-   Firefox (latest 2 versions)
-   Safari (latest 2 versions)
-   Mobile Safari (iOS 13+)
-   Chrome Mobile (latest)

## 📊 Performance Optimizations

-   CSS transitions over JavaScript animations
-   Debounced scroll handlers
-   RequestAnimationFrame for smooth animations
-   Lazy image loading ready (when images added)
-   Minimal external dependencies

## 🎯 Company Information

**Founded:** 2018 (7 years of excellence)
**CEO:** Robin Mitchell (Co-Founder)
**Co-Founder:** Marc Dubois (Director of Programs)

## 🎯 Future Enhancements

### Ready for Implementation

-   Replace gradient placeholders with actual photos
-   Add real video content (hero and about sections)
-   Expand French translations to cover all site content
-   Connect to backend API for real program data
-   Implement user registration system
-   Add payment integration
-   Email notification system for cancellations
-   Social media integration
-   Blog/news section

### Suggested Additions

-   Coach booking system
-   Parent dashboard/portal
-   Mobile app companion
-   Live schedule updates
-   Online payment portal
-   Waitlist management

## 🛠️ Customization Guide

### Changing Colors

Edit CSS variables in `styles.css`:

```css
:root {
    --primary-red: #d62828;
    --warm-white: #fafafa;
    --accent-gray: #ececec;
    --support-yellow: #f6c443;
    --deep-charcoal: #1a1a1a;
}
```

### Adding New Programs

1. Update program data in `map.js`
2. Add card to `programs.html` accordion
3. Update filter options in `find-program.html`

### Modifying Navigation

Edit header section in each HTML file and update `desktop-nav` links.

### Adding Cities

1. Update city data in `locations.js`
2. Add city card in `locations.html`

## 📧 Contact & Support

For questions about implementation:

-   Email: info@7sports.com
-   Phone: (555) 123-4567

## 📄 License

This is a mockup/demo project created for 7Sports.

---

**Built with ❤️ for kids who love to play, learn, and grow!**

🏃‍♂️ Play. Learn. Grow. 🏃‍♀️
