// ================================
// 7Sports - Main JavaScript
// ================================

document.addEventListener("DOMContentLoaded", function () {
    // ================================
    // Language Toggle Functionality
    // ================================

    const translations = {
        en: {
            "Play. Learn. Grow.": "Play. Learn. Grow.",
            "Where kids discover teamwork through sport":
                "Where kids discover teamwork through sport",
            "Find a Program": "Find a Program",
            "Explore Our Sports": "Explore Our Sports",
            "Inclusive Programs": "Inclusive Programs",
            "Every child belongs on the field":
                "Every child belongs on the field",
            "Expert Coaches": "Expert Coaches",
            "Trained to inspire and develop skills":
                "Trained to inspire and develop skills",
            "Safe & Fun Environment": "Safe & Fun Environment",
            "Building confidence through play":
                "Building confidence through play",
            "Our Programs": "Our Programs",
            "Choose the perfect sport for your child":
                "Choose the perfect sport for your child",
            Home: "Home",
            Programs: "Programs",
            "Find My Program": "Find My Program",
            Locations: "Locations",
            "About Us": "About Us",
            FAQ: "FAQ",
        },
        fr: {
            "Play. Learn. Grow.": "Jouer. Apprendre. Grandir.",
            "Where kids discover teamwork through sport":
                "Où les enfants découvrent le travail d'équipe par le sport",
            "Find a Program": "Trouver un Programme",
            "Explore Our Sports": "Explorer Nos Sports",
            "Inclusive Programs": "Programmes Inclusifs",
            "Every child belongs on the field":
                "Chaque enfant a sa place sur le terrain",
            "Expert Coaches": "Entraîneurs Experts",
            "Trained to inspire and develop skills":
                "Formés pour inspirer et développer les compétences",
            "Safe & Fun Environment": "Environnement Sûr et Amusant",
            "Building confidence through play":
                "Construire la confiance par le jeu",
            "Our Programs": "Nos Programmes",
            "Choose the perfect sport for your child":
                "Choisissez le sport parfait pour votre enfant",
            Home: "Accueil",
            Programs: "Programmes",
            "Find My Program": "Trouver Mon Programme",
            Locations: "Emplacements",
            "About Us": "À Propos",
            FAQ: "FAQ",
        },
    };

    let currentLang = localStorage.getItem("7sports-lang") || "en";

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem("7sports-lang", lang);

        // Update lang buttons
        document.querySelectorAll(".lang-btn").forEach((btn) => {
            btn.classList.remove("active");
            if (btn.textContent.toLowerCase() === lang) {
                btn.classList.add("active");
            }
        });

        // Translate visible text
        if (translations[lang]) {
            Object.keys(translations[lang]).forEach((key) => {
                const elements = document.querySelectorAll(
                    "h1, h2, h3, p, a, span, button"
                );
                elements.forEach((el) => {
                    if (el.textContent.trim() === key) {
                        el.textContent = translations[lang][key];
                    }
                });
            });
        }
    };

    // Initialize language on page load
    if (currentLang === "fr") {
        updateLanguage("fr");
    }

    // Language button click handlers
    document.querySelectorAll(".lang-btn").forEach((btn) => {
        btn.addEventListener("click", function () {
            const lang = this.textContent.toLowerCase();
            updateLanguage(lang);
        });
    });

    // ================================
    // Carousel Functionality
    // ================================

    const initCarousel = () => {
        const track = document.querySelector(".carousel-track");
        const prevBtn = document.querySelector(".carousel-prev");
        const nextBtn = document.querySelector(".carousel-next");

        if (!track || !prevBtn || !nextBtn) return;

        let currentIndex = 0;
        const cards = document.querySelectorAll(".program-card");
        const totalCards = cards.length;

        // Determine cards per view based on screen size
        const getCardsPerView = () => {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        };

        let cardsPerView = getCardsPerView();

        const updateCarousel = () => {
            const cardWidth = cards[0].offsetWidth;
            const gap = 32; // 2rem gap
            const offset = -(currentIndex * (cardWidth + gap));
            track.style.transform = `translateX(${offset}px)`;

            // Update button states
            prevBtn.disabled = currentIndex === 0;
            nextBtn.disabled = currentIndex >= totalCards - cardsPerView;

            prevBtn.style.opacity = prevBtn.disabled ? "0.3" : "1";
            nextBtn.style.opacity = nextBtn.disabled ? "0.3" : "1";
        };

        prevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateCarousel();
            }
        });

        nextBtn.addEventListener("click", () => {
            if (currentIndex < totalCards - cardsPerView) {
                currentIndex++;
                updateCarousel();
            }
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                cardsPerView = getCardsPerView();
                currentIndex = Math.min(
                    currentIndex,
                    totalCards - cardsPerView
                );
                updateCarousel();
            }, 250);
        });

        // Initial update
        updateCarousel();
    };

    initCarousel();

    // ================================
    // News Carousel Functionality (Homepage)
    // ================================

    const initNewsCarousel = () => {
        const newsTrack = document.querySelector(".news-carousel-track");
        const newsPrevBtn = document.querySelector(".carousel-prev-news");
        const newsNextBtn = document.querySelector(".carousel-next-news");

        if (!newsTrack || !newsPrevBtn || !newsNextBtn) return;

        let currentIndex = 0;
        const cards = document.querySelectorAll(".news-card");
        const totalCards = cards.length;

        // Determine cards per view based on screen size
        const getCardsPerView = () => {
            if (window.innerWidth >= 1024) return 3;
            if (window.innerWidth >= 768) return 2;
            return 1;
        };

        let cardsPerView = getCardsPerView();

        const updateNewsCarousel = () => {
            const cardWidth = cards[0].offsetWidth;
            const gap = 32; // 2rem gap
            const offset = -(currentIndex * (cardWidth + gap));
            newsTrack.style.transform = `translateX(${offset}px)`;

            // Update button states
            newsPrevBtn.disabled = currentIndex === 0;
            newsNextBtn.disabled = currentIndex >= totalCards - cardsPerView;

            newsPrevBtn.style.opacity = newsPrevBtn.disabled ? "0.3" : "1";
            newsNextBtn.style.opacity = newsNextBtn.disabled ? "0.3" : "1";
        };

        newsPrevBtn.addEventListener("click", () => {
            if (currentIndex > 0) {
                currentIndex--;
                updateNewsCarousel();
            }
        });

        newsNextBtn.addEventListener("click", () => {
            if (currentIndex < totalCards - cardsPerView) {
                currentIndex++;
                updateNewsCarousel();
            }
        });

        // Handle window resize
        let resizeTimer;
        window.addEventListener("resize", () => {
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(() => {
                cardsPerView = getCardsPerView();
                currentIndex = Math.min(
                    currentIndex,
                    totalCards - cardsPerView
                );
                updateNewsCarousel();
            }, 250);
        });

        // Initial update
        updateNewsCarousel();
    };

    initNewsCarousel();

    // ================================
    // Motion Ball Follow Scroll
    // ================================

    const motionBall = document.querySelector(".motion-ball");

    if (motionBall) {
        let ballX = window.innerWidth - 100;
        let ballY = 100;

        motionBall.style.left = `${ballX}px`;
        motionBall.style.top = `${ballY}px`;

        let lastScrollY = window.scrollY;
        let ticking = false;

        const updateBallPosition = () => {
            const scrollY = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Calculate ball position based on scroll
            const scrollPercent = scrollY / (documentHeight - windowHeight);

            // Move ball in a wavy pattern as user scrolls
            ballY = 100 + scrollPercent * (documentHeight - 200);
            ballX =
                window.innerWidth - 100 - Math.sin(scrollPercent * 10) * 100;

            // Keep ball within bounds
            ballX = Math.max(60, Math.min(window.innerWidth - 60, ballX));
            ballY = Math.max(100, Math.min(documentHeight - 100, ballY));

            motionBall.style.left = `${ballX}px`;
            motionBall.style.top = `${ballY}px`;

            ticking = false;
        };

        window.addEventListener("scroll", () => {
            lastScrollY = window.scrollY;

            if (!ticking) {
                window.requestAnimationFrame(updateBallPosition);
                ticking = true;
            }
        });
    }

    // ================================
    // FAB Menu Toggle
    // ================================

    const fabButton = document.querySelector(".fab-button");
    const fabMenu = document.querySelector(".fab-menu");

    if (fabButton && fabMenu) {
        let menuOpen = false;

        fabButton.addEventListener("click", (e) => {
            e.stopPropagation();
            menuOpen = !menuOpen;

            if (menuOpen) {
                fabMenu.style.opacity = "1";
                fabMenu.style.transform = "translateY(0)";
                fabMenu.style.pointerEvents = "all";
            } else {
                fabMenu.style.opacity = "0";
                fabMenu.style.transform = "translateY(10px)";
                fabMenu.style.pointerEvents = "none";
            }
        });

        document.addEventListener("click", () => {
            if (menuOpen) {
                menuOpen = false;
                fabMenu.style.opacity = "0";
                fabMenu.style.transform = "translateY(10px)";
                fabMenu.style.pointerEvents = "none";
            }
        });
    }

    // ================================
    // Header Scroll Effect (Shadow Only)
    // ================================

    const header = document.querySelector(".header");

    if (header) {
        window.addEventListener("scroll", () => {
            const currentScroll = window.scrollY;

            // Add stronger shadow when scrolled
            if (currentScroll > 100) {
                header.style.boxShadow = "0 4px 16px rgba(0, 0, 0, 0.1)";
            } else {
                header.style.boxShadow = "0 2px 8px rgba(0, 0, 0, 0.1)";
            }
        });
    }

    // ================================
    // Smooth Scroll for Anchor Links
    // ================================

    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            const href = this.getAttribute("href");
            if (href !== "#" && href !== "#contact") {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight - 20;

                    window.scrollTo({
                        top: targetPosition,
                        behavior: "smooth",
                    });
                }
            }
        });
    });

    // ================================
    // Accordion Functionality (for Programs page)
    // ================================

    const initAccordions = () => {
        const accordionHeaders = document.querySelectorAll(".accordion-header");

        accordionHeaders.forEach((header) => {
            header.addEventListener("click", () => {
                const item = header.parentElement;
                const content = item.querySelector(".accordion-content");
                const isActive = item.classList.contains("active");

                // Close all accordions in the same group
                const group = item.closest(".accordion-group");
                if (group) {
                    group
                        .querySelectorAll(".accordion-item")
                        .forEach((otherItem) => {
                            if (otherItem !== item) {
                                otherItem.classList.remove("active");
                                const otherContent =
                                    otherItem.querySelector(
                                        ".accordion-content"
                                    );
                                if (otherContent) {
                                    otherContent.style.maxHeight = null;
                                }
                            }
                        });
                }

                // Toggle current accordion
                item.classList.toggle("active");

                if (!isActive) {
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.style.maxHeight = null;
                }
            });
        });
    };

    initAccordions();

    // ================================
    // Tab Functionality (for Programs page)
    // ================================

    const initTabs = () => {
        const tabButtons = document.querySelectorAll(".tab-btn");
        const tabPanels = document.querySelectorAll(".tab-panel");

        tabButtons.forEach((button) => {
            button.addEventListener("click", () => {
                const targetTab = button.getAttribute("data-tab");

                // Remove active from all buttons and panels
                tabButtons.forEach((btn) => btn.classList.remove("active"));
                tabPanels.forEach((panel) => panel.classList.remove("active"));

                // Add active to clicked button and corresponding panel
                button.classList.add("active");
                const targetPanel = document.getElementById(targetTab);
                if (targetPanel) {
                    targetPanel.classList.add("active");
                }
            });
        });
    };

    initTabs();

    // ================================
    // FAQ Search Functionality
    // ================================

    const initFAQSearch = () => {
        const searchInput = document.querySelector(".faq-search-input");
        const accordionItems = document.querySelectorAll(".accordion-item");

        if (!searchInput) return;

        searchInput.addEventListener("input", (e) => {
            const searchTerm = e.target.value.toLowerCase();

            accordionItems.forEach((item) => {
                const question = item
                    .querySelector(".accordion-header")
                    .textContent.toLowerCase();
                const answer = item
                    .querySelector(".accordion-content")
                    .textContent.toLowerCase();

                if (
                    question.includes(searchTerm) ||
                    answer.includes(searchTerm)
                ) {
                    item.style.display = "block";

                    // Highlight matching term
                    if (searchTerm.length > 2) {
                        item.classList.add("highlight");
                    } else {
                        item.classList.remove("highlight");
                    }
                } else {
                    item.style.display = "none";
                }
            });
        });
    };

    initFAQSearch();
});
