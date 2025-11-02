# 🚀 Quick Start Guide - 7Sports Website

## How to View the Website

### Option 1: Direct Browser Access (Easiest)

1. Navigate to the project folder
2. Double-click `index.html`
3. The website will open in your default browser

### Option 2: Live Server (Recommended for Development)

If you're using VS Code:

1. Install "Live Server" extension
2. Right-click `index.html`
3. Select "Open with Live Server"
4. Site opens at `http://localhost:5500`

### Option 3: Python Simple Server

```bash
cd /Users/malik/7sportsMockUp-1
python3 -m http.server 8000
```

Then open `http://localhost:8000` in your browser

## 📄 Pages Overview

| Page             | File                | Description                                                |
| ---------------- | ------------------- | ---------------------------------------------------------- |
| **Home**         | `index.html`        | Landing page with hero video, highlights, program carousel |
| **Programs**     | `programs.html`     | Sports tabs with age-based accordions                      |
| **Find Program** | `find-program.html` | Interactive map + filters to find programs                 |
| **Locations**    | `locations.html`    | City overview map and location cards                       |
| **About Us**     | `about.html`        | Story, founders, coaches carousel, testimonials            |
| **FAQ**          | `faq.html`          | Searchable accordion-based questions                       |

## 🎨 Key Features to Test

### Interactive Elements

-   ✅ **Carousel** - Click arrows on landing page program cards
-   ✅ **Map** - Click pins on Find My Program page
-   ✅ **Filters** - Try filtering programs by sport/age/distance
-   ✅ **Accordions** - Expand/collapse on Programs and FAQ pages
-   ✅ **Search** - Type in FAQ search bar for live filtering
-   ✅ **Tabs** - Switch between sports on Programs page

### Motion & Animation

-   🎯 **Motion Ball** - Scroll on desktop to see bouncing ball follow
-   🎯 **Hover Effects** - Hover over cards and buttons for lift animations
-   🎯 **Slide-ins** - Watch hero text animate on page load
-   🎯 **Stats Animation** - Scroll to stats on About page

### Mobile Features

-   📱 **Bottom Navigation** - Resize browser to < 768px to see mobile nav
-   📱 **Floating Action Button** - Red circle button (bottom right) for quick contact
-   📱 **Responsive Layout** - All pages adapt to mobile/tablet/desktop

## 🎨 Color Scheme

```
Primary Red:    #D62828  ████
Warm White:     #FAFAFA  ████
Accent Gray:    #ECECEC  ████
Support Yellow: #F6C443  ████
Deep Charcoal:  #1A1A1A  ████
```

## 🧪 Testing Checklist

### Desktop (> 1024px)

-   [ ] Hero video area displays properly
-   [ ] Navigation shows all links horizontally
-   [ ] Motion ball appears and follows scroll
-   [ ] Carousels show 3 items at once
-   [ ] FAB menu appears on hover

### Tablet (768px - 1024px)

-   [ ] Carousels show 2 items
-   [ ] City cards show 2 columns
-   [ ] Map takes reasonable height

### Mobile (< 768px)

-   [ ] Bottom navigation shows (3 icons)
-   [ ] Carousels show 1 item
-   [ ] All cards stack vertically
-   [ ] Filter form fields stack
-   [ ] Touch interactions work smoothly

## 🔗 Navigation Flow

```
Homepage (index.html)
├─→ Programs (programs.html)
│   └─→ Find My Program (find-program.html)
├─→ Find My Program (find-program.html)
│   └─→ Locations (locations.html)
├─→ Locations (locations.html)
├─→ About Us (about.html)
└─→ FAQ (faq.html)
```

## 🎯 Call-to-Action Paths

### Primary CTAs:

1. **"Find a Program"** - Landing hero → Find My Program page
2. **"Register"** - Program cards → (would go to registration)
3. **"See Programs"** - City cards → Find My Program with filters

### Secondary CTAs:

-   "Learn More About Us" → About page
-   "Explore Our Sports" → Programs page
-   "View All Programs by City" → Locations page

## 📝 Content Notes

### Placeholder Content

-   **Images:** Gradient backgrounds with emoji overlays (ready for real photos)
-   **Video:** Hero section has video tag (add `assets/hero-video.mp4` when available)
-   **Programs:** 6 sample programs (add more in `map.js`)
-   **Cities:** 6 featured cities + 3 coming soon

### Real Data Integration Points

When connecting to a backend:

-   `map.js` - Program data (lines 14-54)
-   `locations.js` - City/location data (lines 14-23)
-   Filter forms - Connect to API endpoints
-   Registration buttons - Link to signup flow

## 🌐 Language Toggle

The site now features a working French/English toggle:

-   Click **FR** in the top navigation to switch to French
-   Click **EN** to switch back to English
-   Language preference is saved in browser localStorage
-   Key navigation and hero text are translated

**Note:** Full translation is partially implemented. You can extend translations by adding more entries to the `translations` object in `script.js`.

## 🛠️ Customization Quick Tips

### Change Brand Colors

Edit `styles.css` lines 9-14:

```css
:root {
    --primary-red: #YOUR_COLOR;
    /* ... */
}
```

### Add a New Sport

1. Add tab button in `programs.html` (line ~52)
2. Add tab panel content (line ~68+)
3. Update filter in `find-program.html` (line ~50)

### Modify Contact Info

Search for `info@7sports.com` and `(555) 123-4567` across all HTML files and replace.

## 🐛 Troubleshooting

### Map Not Showing

-   Check internet connection (Leaflet loads from CDN)
-   Open browser console for errors

### Carousel Not Working

-   Ensure `script.js` is loaded
-   Check browser console for JavaScript errors

### Styles Look Off

-   Clear browser cache (Ctrl+Shift+R / Cmd+Shift+R)
-   Ensure all CSS files are in same directory as HTML

### Motion Ball Not Visible

-   Only shows on desktop (> 1024px width)
-   Check if scrolling works properly

## 📱 Best Viewing Experience

**Desktop:** Chrome/Firefox at 1440px+ width
**Mobile:** iPhone 12/13 size (390px) or similar
**Tablet:** iPad (768px-1024px)

## 🎉 You're Ready!

Open `index.html` and explore the vibrant, energetic world of 7Sports! The site is designed to feel like kids running onto a field—bright, kinetic, and full of positive energy.

---

**Questions?** Check `README.md` for detailed documentation.

**🏃‍♂️ Play. Learn. Grow! 🏃‍♀️**
