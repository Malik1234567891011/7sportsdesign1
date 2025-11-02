/**
 * Website Screenshot Export Script
 *
 * This script helps export your website pages as images for prototyping.
 *
 * To use:
 * 1. Make sure you have Node.js installed
 * 2. Run: npm install puppeteer (or use Playwright)
 * 3. Start a local server: python -m http.server 8000
 * 4. Run this script: node export-prototypes.js
 *
 * Alternatively, use browser extensions or online tools.
 */

// This is a template - you'd need Puppeteer or Playwright to run it
// For now, here's a manual approach:

const pages = [
    "index.html",
    "news.html",
    "programs.html",
    "find-program.html",
    "locations.html",
    "about.html",
    "faq.html",
];

const viewports = [
    { width: 1920, height: 1080, name: "desktop" },
    { width: 1440, height: 900, name: "laptop" },
    { width: 768, height: 1024, name: "tablet" },
    { width: 375, height: 667, name: "mobile" },
];

console.log(`
Website Screenshot Export Guide
===============================

Pages to capture: ${pages.join(", ")}

Viewport sizes:
- Desktop: 1920x1080
- Laptop: 1440x900
- Tablet: 768x1024
- Mobile: 375x667

OPTION A: Browser Developer Tools (Easiest)
1. Open each page in Chrome/Firefox
2. Press F12 to open DevTools
3. Click the device toolbar icon (mobile icon)
4. Set viewport to desired size
5. Press Cmd+Shift+P (Mac) or Ctrl+Shift+P (Windows)
6. Type "Capture screenshot" or use full page screenshot extension

OPTION B: Browser Extension (Recommended)
Install one of these:
- "Full Page Screen Capture" (Chrome)
- "Fireshot" (Firefox/Chrome)
- "Awesome Screenshot"

OPTION C: Online Tool
Use: https://www.screenshotmachine.com/ or similar

OPTION D: Python Script (If you have Python)
Run: python -c "
from playwright.sync_api import sync_playwright

with sync_playwright() as p:
    browser = p.chromium.launch()
    page = browser.new_page()
    
    pages = ['index.html', 'news.html', 'programs.html']
    viewports = [(1920, 1080), (375, 667)]
    
    for page_name in pages:
        for width, height in viewports:
            page.set_viewport_size({'width': width, 'height': height})
            page.goto(f'http://localhost:8000/{page_name}')
            page.wait_for_load_state('networkidle')
            page.screenshot(path=f'{page_name}-{width}x{height}.png', full_page=True)
    
    browser.close()
"
`);
