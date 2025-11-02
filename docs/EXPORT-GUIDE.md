# Exporting 7Sports Website as Image-Based Prototypes

## Quick Comparison

### 🏆 **Best Option: Web2Figma + Screenshot Backup**

**Why it works best:**

-   Your code is **pure static HTML/CSS/JS** - perfect for Web2Figma
-   Converts live site → editable Figma layers
-   You can continue designing in Figma after import
-   Screenshots as backup for static presentations

### 📸 **Simplest Option: Browser Screenshots**

-   No setup required
-   Works immediately
-   Good for quick client presentations
-   Limited editing capabilities

---

## Recommended Workflow

### Step 1: Start Local Server

Your site needs to be running locally for Web2Figma:

```bash
# In your project directory
python -m http.server 8000
# OR
npx http-server -p 8000
```

Then open: `http://localhost:8000`

### Step 2: Use Web2Figma

1. Install the **Web2Figma** plugin in Figma:

    - Open Figma Desktop App
    - Go to Plugins → Browse plugins
    - Search "Web2Figma"
    - Install

2. Run the plugin:
    - Plugins → Web2Figma
    - Enter: `http://localhost:8000/index.html`
    - Click "Import"
    - Repeat for other pages

**Advantages:**

-   ✅ Converts to editable Figma layers
-   ✅ Maintains text, colors, spacing
-   ✅ Can continue designing in Figma
-   ✅ Perfect for your static HTML structure

**Limitations:**

-   Requires local server running
-   Some complex CSS animations might not import perfectly
-   Interactive elements become static

### Step 3: Take Screenshots (Backup/Alternative)

**Option A: Browser Extension (Fastest)**

1. Install "Full Page Screen Capture" Chrome extension
2. Open each page
3. Click extension → Capture full page
4. Save images

**Option B: DevTools (Built-in)**

1. Open page in Chrome
2. Press `F12` (DevTools)
3. Press `Cmd+Shift+P` (Mac) or `Ctrl+Shift+P` (Windows)
4. Type: `Capture screenshot` or `Capture full size screenshot`
5. Save image

**Option C: Online Tool**

-   Visit: https://www.screenshotmachine.com/
-   Enter: `http://localhost:8000/index.html`
-   Set viewport sizes
-   Download screenshots

---

## Viewport Sizes to Capture

For comprehensive prototyping, capture these:

1. **Desktop**: 1920×1080
2. **Laptop**: 1440×900
3. **Tablet**: 768×1024
4. **Mobile**: 375×667

---

## Pages to Export

1. `index.html` - Homepage with Weekly News section
2. `news.html` - News & Highlights page
3. `programs.html` - Programs page
4. `find-program.html` - Find Program page
5. `locations.html` - Locations page
6. `about.html` - About Us page
7. `faq.html` - FAQ page

---

## Figma Setup Recommendations

### After Importing with Web2Figma:

1. **Organize by Pages:**

    - Create frames for each HTML page
    - Group related screens

2. **Add Annotations:**

    - Use Figma's sticky notes
    - Label interactive elements
    - Add hover states as separate frames

3. **Create Prototype Links:**

    - Connect frames to simulate navigation
    - Add hover interactions for buttons/cards
    - Set up mobile/desktop variants

4. **Style Guide:**
    - Extract colors (already defined in CSS)
    - Document typography (Poppins)
    - Export component library

---

## Quick Command Script

If you want to automate screenshots, save this as `screenshot.sh`:

```bash
#!/bin/bash
# Start local server in background
python -m http.server 8000 &
SERVER_PID=$!

# Wait for server to start
sleep 2

# Take screenshots (requires wkhtmltopdf or similar)
# Or use Playwright/Puppeteer Node.js script

# Stop server
kill $SERVER_PID
```

---

## What I Can Help With

I can help you:

1. ✅ **Set up Web2Figma import** - guide you through the process
2. ✅ **Create screenshot automation script** - if you want automated exports
3. ✅ **Optimize CSS** - ensure best compatibility with Web2Figma
4. ✅ **Generate Figma frame structure** - create a Figma file template

**Most capable with:** Web2Figma setup and CSS optimization for Figma compatibility.

---

## Troubleshooting

**Web2Figma not working?**

-   Make sure local server is running
-   Check browser console for errors
-   Try importing one page at a time
-   Some CSS features (backdrop-filter, advanced animations) might not import

**Screenshots look wrong?**

-   Wait for page to fully load
-   Disable browser extensions that might interfere
-   Check that all fonts are loaded (Google Fonts might need time)

**Need interactive prototype?**

-   Use Figma's prototype features after import
-   Or keep live site and share URL with clients
-   Or use Framer (but requires rebuilding)

---

## Recommendation

**Best approach:** Use **Web2Figma** to get editable Figma layers, then take **screenshots as backup** for presentations where Figma isn't available.

This gives you:

-   ✅ Editable design files in Figma
-   ✅ Static images for slides/docs
-   ✅ Flexibility to continue designing
-   ✅ Client-ready deliverables
