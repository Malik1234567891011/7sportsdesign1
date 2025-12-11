<?php
/**
 * Example: How your homepage (index.html) becomes front-page.php
 * 
 * This shows you EXACTLY how to convert your existing HTML
 * Most of your code stays the same - just add PHP for dynamic content
 */

get_header(); // This loads your header.php (your existing header HTML)
?>

<!-- Your existing hero section - almost identical! -->
<section class="hero">
    <video class="hero-video" autoplay muted loop playsinline>
        <source src="<?php echo get_template_directory_uri(); ?>/assets/hero-video.mp4" type="video/mp4" />
    </video>
    <div class="hero-overlay"></div>
    <div class="hero-content">
        <!-- Instead of hardcoded text, use ACF or WordPress options -->
        <h1 class="hero-title slide-in-left">
            <?php 
            // Option 1: Use ACF field (client can edit in WordPress admin)
            the_field('hero_title', 'option'); 
            // Option 2: Or hardcode if it never changes
            // echo 'Play. Learn. Grow.';
            ?>
        </h1>
        <p class="hero-subtitle slide-in-left" style="animation-delay: 0.2s">
            <?php the_field('hero_subtitle', 'option'); ?>
        </p>
        <div class="hero-buttons slide-in-left" style="animation-delay: 0.4s">
            <a href="<?php echo get_permalink(get_page_by_path('find-program')); ?>" class="btn btn-primary">
                Find a Program
            </a>
            <a href="<?php echo get_permalink(get_page_by_path('programs')); ?>" class="btn btn-secondary">
                Explore Our Sports
            </a>
        </div>
    </div>
    <div class="hero-fallback"></div>
</section>

<!-- Your existing highlights section - stays the same! -->
<section class="highlights">
    <div class="container">
        <div class="highlights-grid">
            <!-- This HTML stays exactly the same -->
            <div class="highlight-card fade-in">
                <div class="highlight-icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                        <circle cx="9" cy="7" r="4"></circle>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                    </svg>
                </div>
                <h3>Inclusive Programs</h3>
                <p>Every child belongs on the field</p>
            </div>
            <!-- ... rest of highlights ... -->
        </div>
    </div>
</section>

<!-- Program Preview Carousel - NOW DYNAMIC! -->
<section class="program-preview">
    <div class="container">
        <h2 class="section-title">Our Programs</h2>
        <p class="section-subtitle">Choose the perfect sport for your child</p>

        <div class="carousel">
            <!-- Your existing carousel HTML structure -->
            <button class="carousel-btn carousel-prev" aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
            </button>

            <div class="carousel-container">
                <div class="carousel-track">
                    <?php
                    // Get programs from WordPress instead of hardcoded
                    $programs = get_posts([
                        'post_type' => 'program',
                        'posts_per_page' => 3,
                        'orderby' => 'menu_order',
                        'order' => 'ASC',
                    ]);
                    
                    foreach ($programs as $program) :
                        // Get ACF fields
                        $sport = get_field('sport', $program->ID);
                        $age_range = get_field('age_range', $program->ID);
                        $image = get_field('featured_image', $program->ID);
                    ?>
                        <div class="program-card">
                            <div class="program-image">
                                <?php if ($image) : ?>
                                    <img src="<?php echo $image['url']; ?>" alt="<?php echo $program->post_title; ?>">
                                <?php else : ?>
                                    <?php echo get_the_post_thumbnail($program->ID, 'large'); ?>
                                <?php endif; ?>
                            </div>
                            <div class="program-content">
                                <h3><?php echo $program->post_title; ?></h3>
                                <p class="program-age">Ages <?php echo $age_range; ?></p>
                                <p class="program-description">
                                    <?php echo $program->post_excerpt; ?>
                                </p>
                                <a href="<?php echo get_permalink($program->ID); ?>" class="btn btn-small">
                                    Learn More
                                </a>
                            </div>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>

            <button class="carousel-btn carousel-next" aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
            </button>
        </div>
    </div>
</section>

<!-- Testimonials - NOW EDITABLE! -->
<section class="testimonials-section">
    <div class="container">
        <h2 class="section-title">What Parents Say</h2>
        <p class="section-subtitle">Real stories from families in our community</p>
        <div class="testimonials-grid">
            <?php
            // Get testimonials from ACF repeater field
            if (have_rows('testimonials', 'option')) :
                while (have_rows('testimonials', 'option')) : the_row();
                    $stars = get_sub_field('stars');
                    $text = get_sub_field('testimonial_text');
                    $author = get_sub_field('author');
            ?>
                <div class="testimonial-card">
                    <div class="testimonial-stars"><?php echo str_repeat('⭐', $stars); ?></div>
                    <p class="testimonial-text"><?php echo $text; ?></p>
                    <p class="testimonial-author">— <?php echo $author; ?></p>
                </div>
            <?php
                endwhile;
            endif;
            ?>
        </div>
    </div>
</section>

<!-- Your existing about teaser - stays the same! -->
<section class="about-teaser">
    <div class="container">
        <div class="about-teaser-content">
            <h2><?php the_field('about_teaser_title', 'option'); ?></h2>
            <p><?php the_field('about_teaser_text', 'option'); ?></p>
            <a href="<?php echo get_permalink(get_page_by_path('about')); ?>" class="btn btn-primary">
                Learn More About Us
            </a>
        </div>
    </div>
</section>

<?php get_footer(); // This loads your footer.php (your existing footer HTML) ?>






