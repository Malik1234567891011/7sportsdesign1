# How to View/Test PHP Files Locally

## Option 1: Quick PHP Syntax Check (No WordPress Needed)

If you just want to see if the PHP syntax is correct:

### Using PHP CLI (if installed):

```bash
php -l docs/WORDPRESS-EXAMPLE-TEMPLATE.php
```

This will check for syntax errors (but won't execute WordPress functions).

---

## Option 2: Local WordPress Development (Recommended)

To actually **run** and **see** your PHP templates working, you need WordPress running locally.

### Easiest Option: Local by Flywheel (Mac/Windows)

1. **Download:** https://localwp.com/
2. **Install** (takes 5 minutes)
3. **Create new site:**
    - Click "Create a new site"
    - Name: "7Sports"
    - Choose PHP version (7.4 or 8.0)
4. **Install WordPress:**
    - Click "Start site"
    - It auto-installs WordPress
    - Click "WP Admin" to access WordPress

### Then:

1. **Copy your theme files:**

    ```bash
    # Find your Local site folder (usually ~/Local Sites/7sports/app/public/)
    # Copy your files there:
    wp-content/themes/7sports-theme/
    ```

2. **Activate theme:**

    - Go to WordPress admin → Appearance → Themes
    - Activate "7Sports"

3. **View your PHP:**
    - Your `front-page.php` will automatically load on homepage
    - Visit: `http://7sports.local` (or whatever Local gives you)

---

## Option 3: MAMP/XAMPP (More Manual)

### MAMP (Mac):

1. Download: https://www.mamp.info/
2. Install WordPress in `htdocs/`
3. Access via `http://localhost:8888/`

### XAMPP (Windows/Mac/Linux):

1. Download: https://www.apachefriends.org/
2. Install WordPress in `htdocs/`
3. Access via `http://localhost/`

---

## Option 4: Just Read the Code (What You're Doing Now)

**Right now, you're viewing it correctly!**

The file `WORDPRESS-EXAMPLE-TEMPLATE.php` is:

-   ✅ A **reference/example** file
-   ✅ Shows you how to convert your HTML
-   ✅ Not meant to run standalone
-   ✅ Just code to read and learn from

**You don't need to "view" it rendered yet** - it's just showing you the pattern.

---

## What You Should Do Right Now

### Step 1: Understand the Pattern

Look at the PHP file and see:

-   `<?php get_header(); ?>` = loads header
-   `<?php the_field('field_name'); ?>` = gets ACF field
-   `<?php get_posts(...); ?>` = gets WordPress posts
-   `<?php get_footer(); ?>` = loads footer

### Step 2: When Ready to Test

1. Set up Local by Flywheel (easiest)
2. Create your theme folder
3. Copy your files
4. Then you can see it working

---

## Quick Test: Can You See PHP Syntax?

If your editor shows:

-   ✅ PHP code highlighted in colors
-   ✅ `<?php` tags visible
-   ✅ Code is readable

**Then you're viewing it correctly!**

The file is just a **template/example** - it's not meant to run until you have WordPress set up.

---

## Need to See It Rendered?

**You'll need:**

1. WordPress installed (use Local by Flywheel - easiest)
2. Your theme files in the theme folder
3. ACF plugin installed
4. Some test content created

**Then visit:** `http://your-local-site.local` and you'll see it!

---

## For Now

**Just read the PHP file as code** - it's showing you:

-   How your HTML converts to PHP
-   Where to add WordPress functions
-   How to make content dynamic

**You don't need to run it yet** - it's a learning/reference file! 📚





