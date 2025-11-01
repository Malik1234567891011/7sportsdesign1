// ================================
// 7Sports - News & Highlights JavaScript
// ================================

document.addEventListener("DOMContentLoaded", function () {
    // ================================
    // Filter Tabs Functionality
    // ================================

    const filterTabs = document.querySelectorAll(".filter-tab");
    const newsItems = document.querySelectorAll(".news-grid-item");

    filterTabs.forEach((tab) => {
        tab.addEventListener("click", function () {
            const filter = this.getAttribute("data-filter");

            // Update active tab
            filterTabs.forEach((t) => t.classList.remove("active"));
            this.classList.add("active");

            // Filter news items
            newsItems.forEach((item) => {
                const category = item.getAttribute("data-category");

                if (filter === "all" || category === filter) {
                    item.classList.remove("hidden");
                    item.style.animation = "fadeInUp 0.6s ease-out forwards";
                } else {
                    item.classList.add("hidden");
                }
            });
        });
    });

    // ================================
    // Article Modal Functionality
    // ================================

    const articleModal = document.getElementById("articleModal");
    const modalBody = document.getElementById("articleModalBody");
    const closeModal = document.querySelector(".article-modal-close");

    // Article content data
    const articles = {
        "article-1": {
            image: "linear-gradient(135deg, #D62828 0%, #F77F00 100%)",
            category: "Event",
            date: "Oct 21, 2025",
            title: "Spring Soccer Tournament Recap",
            content: `
                <p>This year's Spring Soccer Tournament was an incredible success, bringing together over 200 young athletes from across Quebec for a weekend of competition, camaraderie, and celebration.</p>
                
                <p>The event featured multiple age groups competing in friendly matches that emphasized teamwork over winning. Our coaches were thrilled to see the progress that participants have made throughout the season.</p>
                
                <p>Highlights included:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Outstanding sportsmanship from all participants</li>
                    <li>Skill demonstrations showcasing ball control and passing</li>
                    <li>Family-friendly activities throughout the day</li>
                    <li>Awards ceremony celebrating every child's effort</li>
                </ul>
                
                <p>Thank you to all the families who participated and made this tournament such a memorable experience. We're already looking forward to next year's event!</p>
            `,
        },
        "article-2": {
            image: "linear-gradient(135deg, #2B59C3 0%, #0077B6 100%)",
            category: "Camp",
            date: "Oct 18, 2025",
            title: "Summer Camp Registration Opens",
            content: `
                <p>Get ready for an action-packed summer! Early bird registration is now open for our exciting summer programs across all locations.</p>
                
                <p>Our summer camps offer a perfect blend of sport development, fun activities, and skill-building sessions. Whether your child loves soccer, dek hockey, or wants to try multiple sports, we have a program that fits.</p>
                
                <p><strong>Special Early Bird Offer:</strong> Save 15% when you register before December 1st! Use code EARLYBIRD2026 at checkout.</p>
                
                <p>Camps are available in weekly sessions throughout July and August, with flexible scheduling to accommodate family vacations. Each camp includes:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Expert coaching in a fun, supportive environment</li>
                    <li>Age-appropriate skill development activities</li>
                    <li>Team-building games and activities</li>
                    <li>Take-home progress reports</li>
                </ul>
                
                <p>Spaces are limited, so don't wait! Register today to secure your child's spot in our most popular summer camps.</p>
            `,
        },
        "article-3": {
            image: "linear-gradient(135deg, #F6C443 0%, #EE9B00 100%)",
            category: "Community",
            date: "Oct 15, 2025",
            title: "New Location Opening in Laval",
            content: `
                <p>We're thrilled to announce our newest facility opening this fall in Laval! This state-of-the-art location will serve families in the Laval and North Shore areas.</p>
                
                <p>The new facility features:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Two full-size indoor soccer fields</li>
                    <li>Dedicated dek hockey rink with premium deck surface</li>
                    <li>Multi-sport activity area for younger athletes</li>
                    <li>Modern changing rooms and parent viewing area</li>
                    <li>Accessible facilities meeting all safety standards</li>
                </ul>
                
                <p><strong>Grand Opening Celebration:</strong> Join us on November 5th from 10 AM to 2 PM for:</p>
                <ul style="margin: 1rem 0; padding-left: 2rem;">
                    <li>Free trial sessions for all ages</li>
                    <li>Meet and greet with our coaches</li>
                    <li>Facility tours and demonstrations</li>
                    <li>Special registration discounts</li>
                    <li>Refreshments and activities for the whole family</li>
                </ul>
                
                <p>We can't wait to welcome the Laval community to the 7Sports family!</p>
            `,
        },
        "article-4": {
            image: "linear-gradient(135deg, #2A9D8F 0%, #E9C46A 100%)",
            category: "Announcement",
            date: "Oct 12, 2025",
            title: "Coach of the Month: Emma Laurent",
            content: `
                <p>This month, we're celebrating Emma Laurent, our incredible Lead Soccer Coach in Montreal, who has been inspiring young athletes for over 5 years at 7Sports.</p>
                
                <p>Emma's approach to coaching emphasizes patience, encouragement, and celebrating small victories. Her ability to connect with children of all ages and skill levels makes her a beloved figure in our community.</p>
                
                <p><strong>What parents say:</strong></p>
                <blockquote style="border-left: 4px solid var(--primary-red); padding-left: 1.5rem; margin: 1.5rem 0; font-style: italic; color: #666;">
                    "Emma has transformed my daughter's relationship with sports. She went from being hesitant to join activities to being the first one on the field every week!" - Parent testimonial
                </blockquote>
                
                <p>Emma's dedication goes beyond the field. She regularly communicates with parents about their child's progress and provides personalized encouragement that builds lasting confidence.</p>
                
                <p>Thank you, Emma, for being an outstanding role model and for helping so many children discover their love for soccer!</p>
            `,
        },
        "article-5": {
            image: "linear-gradient(135deg, #7C3AED 0%, #A78BFA 100%)",
            category: "Event",
            date: "Oct 8, 2025",
            title: "Holiday Multi-Sport Day",
            content: `
                <p>Join us for a special holiday celebration featuring all our sports programs! This fun-filled event is perfect for the whole family.</p>
                
                <p>On December 18th, from 10 AM to 4 PM, we'll be hosting activities across all sports including soccer, dek hockey, and multi-sport stations. It's a great opportunity for kids to try different activities and for families to experience the 7Sports community.</p>
                
                <p>Activities include fun games, prizes, skill challenges, and family activities. Admission is free for all 7Sports families!</p>
            `,
        },
        "article-6": {
            image: "linear-gradient(135deg, #DC2626 0%, #F97316 100%)",
            category: "Community",
            date: "Oct 5, 2025",
            title: "Parent Feedback Success Stories",
            content: `
                <p>We're constantly inspired by the stories we hear from parents about how 7Sports has positively impacted their children. Here are some recent testimonials:</p>
                
                <p><strong>Confidence Building:</strong> "My son was very shy and reluctant to join group activities. After just a few weeks at 7Sports, he's gained so much confidence and made great friends."</p>
                
                <p><strong>Skill Development:</strong> "My daughter's coordination and ball skills have improved dramatically. More importantly, she's learned about teamwork and respect for others."</p>
                
                <p><strong>Inclusive Environment:</strong> "As a parent of a child with special needs, I'm so grateful for the inclusive and supportive environment at 7Sports. Every child truly belongs here."</p>
            `,
        },
    };

    // Handle article link clicks
    document.querySelectorAll(".news-grid-link, .news-link").forEach((link) => {
        link.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href && href.startsWith("#article-")) {
                e.preventDefault();
                const articleId = href.substring(1);

                if (articles[articleId]) {
                    const article = articles[articleId];
                    showArticle(article, articleId);
                }
            }
        });
    });

    // Show article in modal
    function showArticle(article, articleId) {
        modalBody.innerHTML = `
            <div class="article-modal-image" style="background: ${article.image};"></div>
            <div class="article-modal-header">
                <span class="article-modal-date">${article.date}</span>
                <span class="article-modal-category">${article.category}</span>
                <h2>${article.title}</h2>
            </div>
            <div class="article-modal-content-text">
                ${article.content}
            </div>
        `;

        articleModal.classList.add("active");
        document.body.style.overflow = "hidden";
    }

    // Close modal
    function closeArticleModal() {
        articleModal.classList.remove("active");
        document.body.style.overflow = "";
    }

    if (closeModal) {
        closeModal.addEventListener("click", closeArticleModal);
    }

    // Close modal when clicking outside
    articleModal.addEventListener("click", function (e) {
        if (e.target === articleModal) {
            closeArticleModal();
        }
    });

    // Close modal with Escape key
    document.addEventListener("keydown", function (e) {
        if (e.key === "Escape" && articleModal.classList.contains("active")) {
            closeArticleModal();
        }
    });

    // Handle URL hash on page load
    if (window.location.hash) {
        const articleId = window.location.hash.substring(1);
        if (articles[articleId]) {
            setTimeout(() => {
                showArticle(articles[articleId], articleId);
            }, 300);
        }
    }
});
