# WordPress Quick Start - Don't Panic! 🚀

## The Truth: You're 90% Done Already

Your static site is basically a WordPress theme already. You just need to:

1. Move files to WordPress structure
2. Add some PHP tags
3. Set up ACF fields

**That's it.** Your CSS, JS, and design stay exactly the same.

---

## Day 1: Setup (2-3 hours)

### Step 1: Create Theme Folder

```bash
# In your WordPress themes folder:
wp-content/themes/7sports-theme/
```

### Step 2: Copy Your Files

```bash
# Copy these folders/files:
styles/ → assets/css/
scripts/ → assets/js/
assets/images/ → assets/images/
```

### Step 3: Create Basic Theme Files

**style.css** (just add WordPress header at top):

```css
/*
Theme Name: 7Sports
Theme URI: https://7sports.ca
Description: Custom theme for 7Sports
Version: 1.0
*/

/* Your existing CSS goes here - copy everything from styles.css */
```

**functions.php** (minimal version to start):

```php
<?php
// Enqueue your CSS
function sevensports_styles() {
    wp_enqueue_style('main', get_stylesheet_uri());
    wp_enqueue_style('about', get_template_directory_uri() . '/assets/css/about.css');
    wp_enqueue_style('programs', get_template_directory_uri() . '/assets/css/programs.css');
    // ... add all your CSS files
}
add_action('wp_enqueue_scripts', 'sevensports_styles');

// Enqueue your JS
function sevensports_scripts() {
    wp_enqueue_script('main', get_template_directory_uri() . '/assets/js/main.js', [], '1.0', true);
    wp_enqueue_script('map', get_template_directory_uri() . '/assets/js/map.js', [], '1.0', true);
    // ... add all your JS files
}
add_action('wp_enqueue_scripts', 'sevensports_scripts');
```

**header.php** (copy your header HTML):

```php
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php wp_title(); ?></title>
    <?php wp_head(); ?>
</head>
<body>
    <header class="header">
        <!-- Copy your existing header HTML here -->
    </header>
```

**footer.php** (copy your footer HTML):

```php
    <footer class="footer">
        <!-- Copy your existing footer HTML here -->
    </footer>
    <?php wp_footer(); ?>
</body>
</html>
```

**front-page.php** (your homepage):

```php
<?php get_header(); ?>
<!-- Copy your index.html content here -->
<?php get_footer(); ?>
```

### Step 4: Activate Theme

```bash
wp theme activate 7sports-theme
```

**✅ You should now see your site!** (with hardcoded content)

---

## Day 2: Make One Page Dynamic (2-3 hours)

Pick the simplest page (maybe FAQ) and make it editable:

### Step 1: Install ACF

```bash
wp plugin install advanced-custom-fields-pro --activate
```

### Step 2: Create ACF Field Group for FAQ

In WordPress admin → Custom Fields → Add New:

-   Field Group Name: "FAQ Page"
-   Add Field: "FAQ Items" (Repeater)
    -   Sub-fields:
        -   Question (Text)
        -   Answer (Textarea)
        -   Category (Select)

### Step 3: Update page-faq.php

```php
<?php get_header(); ?>

<section class="page-hero">
    <h1><?php the_title(); ?></h1>
    <p><?php the_field('page_subtitle'); ?></p>
</section>

<section class="faq-content-section">
    <?php if (have_rows('faq_items')) : ?>
        <?php while (have_rows('faq_items')) : the_row(); ?>
            <div class="accordion-item">
                <button class="accordion-header">
                    <span><?php the_sub_field('question'); ?></span>
                    <span class="accordion-icon">+</span>
                </button>
                <div class="accordion-content">
                    <p><?php the_sub_field('answer'); ?></p>
                </div>
            </div>
        <?php endwhile; ?>
    <?php endif; ?>
</section>

<?php get_footer(); ?>
```

**✅ Now your client can edit FAQs in WordPress admin!**

---

## Day 3: Programs & Locations (3-4 hours)

### Step 1: Register Custom Post Types

Add to functions.php:

```php
// Programs
register_post_type('program', [
    'public' => true,
    'label' => 'Programs',
    'supports' => ['title', 'editor', 'thumbnail'],
    'has_archive' => true,
]);

// Locations
register_post_type('location', [
    'public' => true,
    'label' => 'Locations',
    'supports' => ['title', 'editor', 'thumbnail'],
    'has_archive' => true,
]);
```

### Step 2: Create ACF Fields for Programs

Field Group: "Program Details"

-   Sport (Select: Soccer, Dek Hockey, Multi-Sport)
-   Age Range (Text)
-   Price (Number)
-   Latitude (Number)
-   Longitude (Number)
-   Season (Checkbox: Fall, Winter, Spring, Summer)
-   Location (Relationship: Select location)

### Step 3: Update map.js to Use WordPress Data

In page-find-program.php, before your map.js:

```php
<script>
const programs = <?php
    $programs = get_posts(['post_type' => 'program', 'posts_per_page' => -1]);
    $data = [];
    foreach ($programs as $p) {
        $data[] = [
            'id' => $p->ID,
            'name' => $p->post_title,
            'sport' => get_field('sport', $p->ID),
            'city' => get_field('city', $p->ID),
            'lat' => get_field('latitude', $p->ID),
            'lng' => get_field('longitude', $p->ID),
            'ages' => get_field('age_range', $p->ID),
            'price' => get_field('price', $p->ID),
            'season' => get_field('season', $p->ID), // Array
        ];
    }
    echo json_encode($data);
?>;
</script>
```

**Your existing map.js code works the same!** Just uses this data instead of hardcoded array.

---

## Day 4-5: Finish Other Pages (4-6 hours)

Repeat the process:

1. Copy HTML to PHP template
2. Replace hardcoded content with `the_field()` or `get_posts()`
3. Test

---

## Common Questions

### "Do I need to rewrite my JavaScript?"

**No!** Your JS stays 99% the same. Just make sure data comes from PHP instead of hardcoded.

### "Do I need to rewrite my CSS?"

**No!** Copy it exactly as-is. It all works.

### "What about the filters?"

Your filter JavaScript stays the same. Just:

1. Get filtered data from WordPress (via AJAX or page reload)
2. Pass to your existing filter function
3. Done!

### "How do I handle EN/FR?"

Use WPML plugin or Polylang. They handle language switching automatically.

---

## The Simplest Possible Approach

**Week 1:** Get it working with hardcoded content (just move files)
**Week 2:** Make one thing editable (like FAQ)
**Week 3:** Make programs/locations editable
**Week 4:** Polish and test

**Don't try to do everything at once!**

---

## When You Get Stuck

1. **Check the migration guide** (`WORDPRESS-MIGRATION-GUIDE.md`)
2. **Look at the example template** (`WORDPRESS-EXAMPLE-TEMPLATE.php`)
3. **Google:** "WordPress [your question]"
4. **WordPress Codex:** https://codex.wordpress.org/

---

## Remember

-   Your design is done ✅
-   Your CSS is done ✅
-   Your JavaScript is done ✅
-   You just need to connect it to WordPress database ✅

**You're not starting over. You're finishing!** 🎉





