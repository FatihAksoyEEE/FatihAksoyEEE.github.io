// ============================================
// SCROLL ANIMATIONS
// Fatih Aksoy Portfolio
// Using Intersection Observer API
// ============================================

// ==================== FADE IN ANIMATIONS ====================

// Elements to animate on scroll
const animateOnScroll = document.querySelectorAll('.card, .section-title, .grid > *');

// Intersection Observer options
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

// Create observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            // Add delay based on index for staggered animation
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);

            // Stop observing once animated
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Set initial state and observe elements
animateOnScroll.forEach(element => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(30px)';
    element.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(element);
});

// ==================== PROGRESS BAR ANIMATION ====================

const progressBars = document.querySelectorAll('.progress-fill');

const progressObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBar = entry.target;
            const targetWidth = progressBar.getAttribute('data-progress') || '0';

            // Animate to target width
            setTimeout(() => {
                progressBar.style.width = targetWidth + '%';
            }, 200);

            progressObserver.unobserve(progressBar);
        }
    });
}, { threshold: 0.5 });

progressBars.forEach(bar => {
    bar.style.width = '0%';
    progressObserver.observe(bar);
});

// ==================== PARALLAX EFFECT (Subtle) ====================

const parallaxElements = document.querySelectorAll('[data-parallax]');

window.addEventListener('scroll', throttle(() => {
    const scrolled = window.pageYOffset;

    parallaxElements.forEach(element => {
        const speed = element.getAttribute('data-parallax') || 0.5;
        const yPos = -(scrolled * speed);
        element.style.transform = `translateY(${yPos}px)`;
    });
}, 16)); // ~60fps

// ==================== REVEAL ANIMATION (Alternative) ====================

// Add 'reveal' class to elements you want to animate
const revealElements = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(element => {
    revealObserver.observe(element);
});

// ==================== STAGGER ANIMATION FOR LISTS ====================

function staggerAnimation(selector, delay = 100) {
    const elements = document.querySelectorAll(selector);

    const staggerObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const items = entry.target.children;
                Array.from(items).forEach((item, index) => {
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'translateX(0)';
                    }, index * delay);
                });
                staggerObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    elements.forEach(element => {
        const items = element.children;
        Array.from(items).forEach(item => {
            item.style.opacity = '0';
            item.style.transform = 'translateX(-20px)';
            item.style.transition = 'opacity 0.5s ease-out, transform 0.5s ease-out';
        });
        staggerObserver.observe(element);
    });
}

// Apply to specific elements (uncomment when elements exist)
// staggerAnimation('.skills-list', 80);
// staggerAnimation('.project-grid', 100);

// ==================== SCROLL PROGRESS BAR ====================

// Create scroll progress indicator
const scrollProgress = document.createElement('div');
scrollProgress.id = 'scrollProgress';
scrollProgress.style.cssText = `
  position: fixed;
  top: 0;
  left: 0;
  height: 3px;
  background: linear-gradient(90deg, #00d4ff 0%, #00ff88 100%);
  width: 0%;
  z-index: 9999;
  transition: width 0.1s ease-out;
`;
document.body.appendChild(scrollProgress);

window.addEventListener('scroll', throttle(() => {
    const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (window.pageYOffset / windowHeight) * 100;
    scrollProgress.style.width = scrolled + '%';
}, 16));

// ==================== UTILITY: Throttle Function ====================

function throttle(func, limit) {
    let inThrottle;
    return function (...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// ==================== NUMBER COUNTER ANIMATION ====================

function animateNumber(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateNumber = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateNumber);
        } else {
            element.textContent = target;
        }
    };

    updateNumber();
}

// ==================== HOVER TILT EFFECT (3D Cards) ====================

const tiltCards = document.querySelectorAll('[data-tilt]');

tiltCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`;
    });

    card.addEventListener('mouseleave', () => {
        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
    });

    card.style.transition = 'transform 0.3s ease-out';
});

// ==================== LAZY LOADING IMAGES ====================

const lazyImages = document.querySelectorAll('img[data-src]');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.getAttribute('data-src');
            img.removeAttribute('data-src');
            imageObserver.unobserve(img);

            // Add fade-in effect
            img.style.opacity = '0';
            img.style.transition = 'opacity 0.5s ease-in';
            img.onload = () => {
                img.style.opacity = '1';
            };
        }
    });
}, { rootMargin: '50px' });

lazyImages.forEach(img => imageObserver.observe(img));

// ==================== EXPORT FUNCTIONS ====================

window.animationUtils = {
    animateNumber,
    staggerAnimation,
    throttle
};
