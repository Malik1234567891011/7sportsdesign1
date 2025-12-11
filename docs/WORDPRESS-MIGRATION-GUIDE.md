# WordPress Migration Guide for 7Sports

## 🎯 Good News: You Don't Need to Start From Scratch!

**~80-90% of your current work can be reused.** Here's what transfers directly:

### ✅ What You Can Keep (Almost Everything)

1. **All CSS Files** - 100% reusable

    - `styles/styles.css` → WordPress theme `style.css`
    - `styles/about.css`, `styles/programs.css`, etc. → Can stay as separate files
    - Your entire design system works as-is

2. **All JavaScript** - 95% reusable

    - `scripts/script.js` → WordPress theme `assets/js/main.js`
    - `scripts/map.js` → Works the same, just needs WordPress data
    - All carousel, accordion, filter logic stays the same

3. **HTML Structure** - Convert to PHP templates

    - `index.html` → `front-page.php` or `page-home.php`
    - `pages/programs.html` → `page-programs.php` or `single-program.php`
    - Same structure, just add PHP for dynamic content

4. **Images & Assets** - 100% reusable

    - Move `assets/` folder to WordPress theme

5. **Design System** - 100% reusable
    - All your colors, spacing, typography stays the same

---

## 📋 WordPress Structure You'll Need

### 1. Custom Post Types (CPTs)

Based on your WP-CLI commands, you'll need:

```php
// In functions.php or a plugin
- program (for individual programs)
- location (for locations like Pierrefonds)
- announcement (for urgent announcements)
```

### 2. Custom Taxonomies

```php
- season (Hiver, Printemps, Été, Automne)
- region (Montréal Ouest, Laval, etc.)
- sport (Soccer, Dek Hockey, Multi-Sport)
- age_group (2-4, 4-6, 7-12)
```

### 3. Advanced Custom Fields (ACF) Setup

You'll use ACF to make content editable. Here's what fields you'll need:

**Program Fields:**

-   Age range
-   Price
-   Season availability (relationship to season taxonomy)
-   Location (relationship to location CPT)
-   Sport type (relationship to sport taxonomy)
-   Description
-   Image gallery
-   Coordinates (lat/lng for map)

**Location Fields:**

-   Address
-   City
-   Coordinates (lat/lng)
-   Available programs (relationship to program CPT)
-   Phone
-   Hours

**Announcement Fields:**

-   Urgency level (New, Update, etc.)
-   Expiry date
-   Category

---

## 🏗️ WordPress Theme Structure

```
7sports-theme/
├── style.css (your styles.css)
├── functions.php (theme setup, CPTs, enqueue scripts)
├── header.php (your header navigation)
├── footer.php (your footer)
├── front-page.php (homepage)
├── page-programs.php (programs listing)
├── page-find-program.php (find program with filters)
├── page-about.php (about page)
├── page-faq.php (FAQ page)
├── single-program.php (individual program detail)
├── single-location.php (individual location detail)
├── archive-announcement.php (news/announcements)
├── assets/
│   ├── css/
│   │   ├── about.css
│   │   ├── programs.css
│   │   └── ... (all your existing CSS)
│   ├── js/
│   │   ├── main.js (your script.js)
│   │   ├── map.js (your map.js)
│   │   └── ... (all your existing JS)
│   └── images/ (your assets/images/)
└── template-parts/ (reusable components)
    ├── hero.php
    ├── testimonial-card.php
    └── ...
```

---

## 🔄 Conversion Process

### Step 1: Create Theme Files

**functions.php** - Register everything:

```php
<?php
// Enqueue styles and scripts
function sevensports_enqueue_assets() {
    wp_enqueue_style('main-style', get_stylesheet_uri());
    wp_enqueue_style('about-style', get_template_directory_uri() . '/assets/css/about.css');
    // ... all your CSS files

    wp_enqueue_script('main-js', get_template_directory_uri() . '/assets/js/main.js', [], '1.0', true);
    wp_enqueue_script('map-js', get_template_directory_uri() . '/assets/js/map.js', ['leaflet'], '1.0', true);
}
add_action('wp_enqueue_scripts', 'sevensports_enqueue_assets');

// Register Custom Post Types
function sevensports_register_cpts() {
    // Program CPT
    register_post_type('program', [
        'public' => true,
        'label' => 'Programs',
        'supports' => ['title', 'editor', 'thumbnail'],
        'has_archive' => true,
    ]);

    // Location CPT
    register_post_type('location', [
        'public' => true,
        'label' => 'Locations',
        'supports' => ['title', 'editor', 'thumbnail'],
        'has_archive' => true,
    ]);

    // Announcement CPT
    register_post_type('announcement', [
        'public' => true,
        'label' => 'Announcements',
        'supports' => ['title', 'editor', 'thumbnail'],
        'has_archive' => true,
    ]);
}
add_action('init', 'sevensports_register_cpts');

// Register Taxonomies
function sevensports_register_taxonomies() {
    register_taxonomy('season', ['program'], [
        'public' => true,
        'label' => 'Seasons',
    ]);

    register_taxonomy('region', ['location', 'program'], [
        'public' => true,
        'label' => 'Regions',
    ]);

    register_taxonomy('sport', ['program'], [
        'public' => true,
        'label' => 'Sports',
    ]);

    register_taxonomy('age_group', ['program'], [
        'public' => true,
        'label' => 'Age Groups',
    ]);
}
add_action('init', 'sevensports_register_taxonomies');
```

### Step 2: Convert HTML to PHP Templates

**Example: front-page.php** (Homepage)

```php
<?php get_header(); ?>

<!-- Your existing hero section HTML -->
<section class="hero">
    <!-- Same HTML, but make title dynamic -->
    <h1><?php echo get_bloginfo('description'); ?></h1>
    <!-- Or use ACF field: -->
    <h1><?php the_field('hero_title'); ?></h1>
</section>

<!-- Your existing highlights section -->
<section class="highlights">
    <!-- Same HTML structure -->
</section>

<!-- Programs carousel - now dynamic -->
<section class="program-preview">
    <?php
    $programs = get_posts([
        'post_type' => 'program',
        'posts_per_page' => 3,
    ]);
    foreach ($programs as $program) :
        $sport = get_field('sport', $program->ID);
        $age = get_field('age_range', $program->ID);
    ?>
        <div class="program-card">
            <div class="program-image">
                <?php echo get_the_post_thumbnail($program->ID, 'large'); ?>
            </div>
            <div class="program-content">
                <h3><?php echo $program->post_title; ?></h3>
                <p class="program-age">Ages <?php echo $age; ?></p>
                <p><?php echo $program->post_excerpt; ?></p>
            </div>
        </div>
    <?php endforeach; ?>
</section>

<?php get_footer(); ?>
```

### Step 3: Make Filters Work with WordPress

**page-find-program.php** - Your filter page:

```php
<?php get_header(); ?>

<!-- Your existing filter HTML stays the same -->
<div class="filter-bar">
    <form class="filter-form" id="filterForm">
        <!-- Same filter HTML -->
    </form>
</div>

<!-- Map section - now uses WordPress data -->
<div id="programMap"></div>

<script>
// Your existing map.js, but data comes from WordPress
const programs = <?php
    $programs = get_posts([
        'post_type' => 'program',
        'posts_per_page' => -1,
    ]);
    $programs_data = [];
    foreach ($programs as $program) {
        $programs_data[] = [
            'id' => $program->ID,
            'name' => $program->post_title,
            'sport' => get_field('sport', $program->ID),
            'city' => get_field('city', $program->ID),
            'lat' => get_field('latitude', $program->ID),
            'lng' => get_field('longitude', $program->ID),
            'ages' => get_field('age_range', $program->ID),
            'price' => get_field('price', $program->ID),
            'season' => wp_get_post_terms($program->ID, 'season', ['fields' => 'slugs']),
        ];
    }
    echo json_encode($programs_data);
?>;
// Rest of your map.js code works the same!
</script>

<?php get_footer(); ?>
```

---

## 🎨 ACF Field Groups Setup

### Program Field Group:

```
Program Details
├── Sport (Select: Soccer, Dek Hockey, Multi-Sport)
├── Age Range (Text: "2-4", "4-6", "7-12")
├── Price (Number)
├── Description (Textarea)
├── Image Gallery (Gallery)
├── Location (Relationship: Select location CPT)
├── Coordinates
│   ├── Latitude (Number)
│   └── Longitude (Number)
└── Season Availability (Taxonomy: season)
```

### Location Field Group:

```
Location Details
├── Address (Text)
├── City (Text)
├── Coordinates
│   ├── Latitude (Number)
│   └── Longitude (Number)
├── Phone (Text)
├── Available Programs (Relationship: Select program CPTs)
└── Region (Taxonomy: region)
```

---

## 🔧 What Changes vs. Static Site

### 1. Navigation

**Before:** Hardcoded in HTML

```html
<nav class="desktop-nav">
    <a href="pages/programs.html">Programs</a>
</nav>
```

**After:** WordPress Menu

```php
<?php
wp_nav_menu([
    'theme_location' => 'primary',
    'container' => 'nav',
    'container_class' => 'desktop-nav',
]);
?>
```

### 2. Content

**Before:** Hardcoded text

```html
<h2>Our Programs</h2>
<p>Discover the perfect sport for your child</p>
```

**After:** Editable via ACF or page content

```php
<h2><?php the_field('page_title'); ?></h2>
<p><?php the_field('page_subtitle'); ?></p>
```

### 3. Program Data

**Before:** Hardcoded in map.js

```javascript
const programs = [
    { name: "Downtown Soccer Academy", ... }
];
```

**After:** From WordPress database

```php
$programs = get_posts(['post_type' => 'program']);
// Convert to JSON for JavaScript
```

### 4. Images

**Before:** Static paths

```html
<img src="assets/images/soccer-kids.jpg" />
```

**After:** WordPress media library

```php
<?php echo get_the_post_thumbnail($post_id, 'large'); ?>
// Or ACF image field
<img src="<?php the_field('hero_image'); ?>">
```

---

## 📝 Migration Checklist

### Phase 1: Setup (1-2 days)

-   [ ] Create WordPress theme folder structure
-   [ ] Copy all CSS files to theme
-   [ ] Copy all JS files to theme
-   [ ] Copy images/assets to theme
-   [ ] Create `functions.php` with CPTs and taxonomies
-   [ ] Create `style.css` with theme header

### Phase 2: Templates (2-3 days)

-   [ ] Convert `index.html` → `front-page.php`
-   [ ] Convert `pages/programs.html` → `page-programs.php`
-   [ ] Convert `pages/find-program.html` → `page-find-program.php`
-   [ ] Convert `pages/about.html` → `page-about.php`
-   [ ] Convert `pages/faq.html` → `page-faq.php`
-   [ ] Convert `pages/news.html` → `archive-announcement.php`
-   [ ] Create `header.php` and `footer.php`

### Phase 3: Dynamic Content (2-3 days)

-   [ ] Set up ACF field groups
-   [ ] Make program carousel dynamic
-   [ ] Make map use WordPress data
-   [ ] Make filters query WordPress
-   [ ] Make testimonials editable
-   [ ] Make FAQ editable

### Phase 4: Polish (1-2 days)

-   [ ] Test all functionality
-   [ ] Add WordPress menus
-   [ ] Set up permalinks
-   [ ] Add language support (EN/FR)
-   [ ] Test mobile responsiveness

**Total Time Estimate: 6-10 days**

---

## 🚀 Quick Start Commands

Your WP-CLI commands are good! Here's the complete setup:

```bash
# Install WordPress
wp core install --url=https://staging.7sports.ca --title="7Sports" \
  --admin_user=admin --admin_password=*** --admin_email=admin@7sports.ca

# Basic settings
wp option update timezone_string "America/Toronto"
wp rewrite structure '/%postname%/' --hard

# Activate theme
wp theme activate 7sports-theme

# Activate plugins
wp plugin install advanced-custom-fields-pro --activate
wp plugin install wpml --activate  # For EN/FR support

# Create pages
wp post create --post_type=page --post_title="Accueil" --post_status=publish --post_name="accueil"
wp post create --post_type=page --post_title="Programmes" --post_status=publish --post_name="programmes"
wp post create --post_type=page --post_title="Trouver mon programme" --post_status=publish --post_name="trouver-programme"
wp post create --post_type=page --post_title="À propos" --post_status=publish --post_name="a-propos"
wp post create --post_type=page --post_title="FAQ" --post_status=publish --post_name="faq"
wp post create --post_type=page --post_title="Annonces" --post_status=publish --post_name="annonces"

# Create taxonomies (these will be created by your theme's functions.php)
# But you can seed terms:
wp term create season "Hiver" --description="Winter programs"
wp term create season "Printemps" --description="Spring programs"
wp term create season "Été" --description="Summer programs"
wp term create season "Automne" --description="Fall programs"

wp term create region "Montréal" --description="Montreal region"
wp term create region "Laval" --description="Laval region"
wp term create region "West Island" --description="West Island region"

wp term create sport "Soccer" --description="Soccer programs"
wp term create sport "Dek Hockey" --description="Dek Hockey programs"
wp term create sport "Multi-Sport" --description="Multi-Sport programs"

wp term create age_group "2-4" --description="Ages 2 to 4"
wp term create age_group "4-6" --description="Ages 4 to 6"
wp term create age_group "7-12" --description="Ages 7 to 12"
```

---

## 💡 Pro Tips

1. **Start with one page** - Convert homepage first, get it working, then move to others
2. **Use ACF Flexible Content** - For complex sections like hero, testimonials, etc.
3. **Keep your JS separate** - Your map.js, carousel.js can stay almost identical
4. **Use WordPress REST API** - For AJAX filtering without page reloads
5. **Test incrementally** - Don't convert everything at once

---

## 🆘 Common Issues & Solutions

### Issue: Map not showing programs

**Solution:** Make sure you're outputting the data correctly:

```php
<script>
const programs = <?php echo json_encode($programs_data); ?>;
// Make sure this outputs valid JSON
</script>
```

### Issue: Filters not working

**Solution:** Use WordPress AJAX or REST API:

```php
// In functions.php
add_action('wp_ajax_filter_programs', 'filter_programs_handler');
add_action('wp_ajax_nopriv_filter_programs', 'filter_programs_handler');

function filter_programs_handler() {
    $sport = $_POST['sport'];
    $age = $_POST['age'];
    // Query WordPress
    $programs = get_posts([
        'post_type' => 'program',
        'tax_query' => [
            ['taxonomy' => 'sport', 'field' => 'slug', 'terms' => $sport],
        ],
    ]);
    wp_send_json($programs);
}
```

### Issue: Styles not loading

**Solution:** Check enqueue in functions.php:

```php
wp_enqueue_style('main-style', get_stylesheet_uri(), [], '1.0.0');
// Make sure path is correct
```

---

## 📚 Resources

-   [WordPress Theme Development](https://developer.wordpress.org/themes/)
-   [ACF Documentation](https://www.advancedcustomfields.com/resources/)
-   [Custom Post Types](https://developer.wordpress.org/reference/functions/register_post_type/)
-   [WP-CLI Commands](https://wp-cli.org/commands/)

---

## ✅ Bottom Line

**You're NOT starting from scratch!** You're:

-   Moving files to WordPress structure (1 day)
-   Converting HTML to PHP templates (2-3 days)
-   Making content dynamic with ACF (2-3 days)
-   Testing and polishing (1-2 days)

**Total: ~1 week of work**, not weeks of rebuilding.

Your design, CSS, JavaScript, and structure are all reusable. WordPress just makes the content editable and adds a database backend.

---

**Need help with a specific part?** Let me know which template or functionality you want to tackle first!





