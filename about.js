// ================================
// About Page - Coaches Carousel
// ================================

document.addEventListener('DOMContentLoaded', function() {
    
    const track = document.querySelector('.coaches-track');
    const prevBtn = document.querySelector('.carousel-prev-coach');
    const nextBtn = document.querySelector('.carousel-next-coach');
    
    if (!track || !prevBtn || !nextBtn) return;
    
    let currentIndex = 0;
    const cards = document.querySelectorAll('.coach-card');
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
        
        prevBtn.style.opacity = prevBtn.disabled ? '0.3' : '1';
        nextBtn.style.opacity = nextBtn.disabled ? '0.3' : '1';
        prevBtn.style.cursor = prevBtn.disabled ? 'not-allowed' : 'pointer';
        nextBtn.style.cursor = nextBtn.disabled ? 'not-allowed' : 'pointer';
    };
    
    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });
    
    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
            updateCarousel();
        }
    });
    
    // Handle window resize
    let resizeTimer;
    window.addEventListener('resize', () => {
        clearTimeout(resizeTimer);
        resizeTimer = setTimeout(() => {
            cardsPerView = getCardsPerView();
            currentIndex = Math.min(currentIndex, totalCards - cardsPerView);
            updateCarousel();
        }, 250);
    });
    
    // Initial update
    updateCarousel();
    
    // Auto-advance carousel every 5 seconds
    let autoAdvance = setInterval(() => {
        if (currentIndex < totalCards - cardsPerView) {
            currentIndex++;
        } else {
            currentIndex = 0;
        }
        updateCarousel();
    }, 5000);
    
    // Pause auto-advance on hover
    const carouselWrapper = document.querySelector('.coaches-carousel-wrapper');
    if (carouselWrapper) {
        carouselWrapper.addEventListener('mouseenter', () => {
            clearInterval(autoAdvance);
        });
        
        carouselWrapper.addEventListener('mouseleave', () => {
            autoAdvance = setInterval(() => {
                if (currentIndex < totalCards - cardsPerView) {
                    currentIndex++;
                } else {
                    currentIndex = 0;
                }
                updateCarousel();
            }, 5000);
        });
    }
    
    // Video placeholder click handler
    const videoPlaceholder = document.querySelector('.video-placeholder');
    if (videoPlaceholder) {
        videoPlaceholder.addEventListener('click', () => {
            // In a real implementation, this would open a video modal or embed
            alert('Video player would open here! 🎥\n\nThis would typically load a YouTube embed or similar video content showing highlights of 7Sports programs in action.');
        });
    }
    
    // Animate stats on scroll
    const observerOptions = {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const animateValue = (element, start, end, duration) => {
        const range = end - start;
        const increment = range / (duration / 16);
        let current = start;
        
        const timer = setInterval(() => {
            current += increment;
            if (current >= end) {
                current = end;
                clearInterval(timer);
            }
            
            // Format number with commas
            const formatted = Math.floor(current).toLocaleString();
            element.textContent = formatted + (element.dataset.suffix || '');
        }, 16);
    };
    
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
                entry.target.classList.add('animated');
                
                const statNumber = entry.target.querySelector('.stat-number');
                if (statNumber) {
                    const text = statNumber.textContent;
                    const number = parseInt(text.replace(/[^0-9]/g, ''));
                    const suffix = text.replace(/[0-9,]/g, '');
                    
                    statNumber.dataset.suffix = suffix;
                    statNumber.textContent = '0' + suffix;
                    
                    setTimeout(() => {
                        animateValue(statNumber, 0, number, 2000);
                    }, 100);
                }
            }
        });
    }, observerOptions);
    
    const statCards = document.querySelectorAll('.stat');
    statCards.forEach(card => statsObserver.observe(card));
});

