// ==========================================
// MODERN ROSE DAY WEBSITE - JAVASCRIPT
// ==========================================

// ========== PHOTOS DATA ==========
// Add your base64 encoded images here or use image paths
// To convert images to base64: Use the convertImagesToBase64.js script provided

const photos = [
    {
        src: 'images/photo1.jpg',
        caption: 'Every love story is beautiful, but ours is my favorite',
        date: 'Memory 1'
    },
    {
        src: 'images/photo2.jpg',
        caption: 'You are my today and all of my tomorrows',
        date: 'Memory 2'
    },
    {
        src: 'images/photo3.jpg',
        caption: 'In a sea of people, my eyes will always search for you',
        date: 'Memory 3'
    },
    {
        src: 'images/photo4.jpg',
        caption: 'I love you not only for what you are, but for what I am when I am with you',
        date: 'Memory 4'
    },
    {
        src: 'images/photo5.jpg',
        caption: 'With you, I am home',
        date: 'Memory 5'
    },
    {
        src: 'images/photo6.jpg',
        caption: 'You are my sunshine on a cloudy day',
        date: 'Memory 6'
    },
    {
        src: 'images/photo7.jpg',
        caption: 'Together is my favorite place to be',
        date: 'Memory 7'
    },
    {
        src: 'images/photo8.jpg',
        caption: 'You make my heart smile',
        date: 'Memory 8'
    },
    {
        src: 'images/photo9.jpg',
        caption: 'Every moment with you is magical',
        date: 'Memory 9'
    },
    {
        src: 'images/photo10.jpg',
        caption: 'You are my greatest adventure',
        date: 'Memory 10'
    },
    {
        src: 'images/photo11.jpg',
        caption: 'Forever grateful for you',
        date: 'Memory 11'
    },
    {
        src: 'images/photo12.jpg',
        caption: 'My heart belongs to you',
        date: 'Memory 12'
    }
];

// ========== TIMELINE DATA ==========
const timelineData = [
    {
        date: 'First Meeting',
        title: 'When Our Eyes Met',
        description: 'The moment I saw you, I knew my life was about to change forever. Your smile lit up the entire room.'
    },
    {
        date: 'First Date',
        title: 'Our First Adventure',
        description: 'That perfect evening when time stood still. Every moment felt magical, every word felt meaningful.'
    },
    {
        date: 'Special Moment',
        title: 'Falling Deeper',
        description: 'I realized you weren\'t just someone I liked - you were someone I couldn\'t imagine my life without.'
    },
    {
        date: 'Today',
        title: 'Forever Together',
        description: 'Every day with you is a new chapter in our beautiful love story. Here\'s to forever and always.'
    }
];

// ========== INITIALIZATION ==========
document.addEventListener('DOMContentLoaded', function () {
    initializePetals();
    loadTimeline();
    loadGallery();
    initializeLightbox();
    initializeScrollAnimations();
    initializeProposal();
});

// ========== ROSE PETALS ANIMATION ==========
function initializePetals() {
    const container = document.getElementById('petalsContainer');
    const petalCount = window.innerWidth < 768 ? 15 : 25;

    function createPetal() {
        const petal = document.createElement('div');
        petal.className = 'petal';
        petal.style.left = Math.random() * 100 + '%';
        petal.style.animationDuration = (Math.random() * 5 + 8) + 's';
        petal.style.animationDelay = Math.random() * 5 + 's';
        petal.style.opacity = Math.random() * 0.5 + 0.3;

        // Random petal variations
        const size = Math.random() * 0.5 + 0.8;
        petal.style.transform = `scale(${size})`;

        container.appendChild(petal);

        // Remove and recreate after animation
        setTimeout(() => {
            petal.remove();
            createPetal();
        }, (parseFloat(petal.style.animationDuration) + parseFloat(petal.style.animationDelay)) * 1000);
    }

    // Create initial petals
    for (let i = 0; i < petalCount; i++) {
        setTimeout(() => createPetal(), i * 200);
    }
}

// ========== TIMELINE LOADING ==========
function loadTimeline() {
    const timeline = document.getElementById('timeline');

    timelineData.forEach((item, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        timelineItem.style.animationDelay = `${index * 0.2}s`;

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-date">${item.date}</div>
                <h3 class="timeline-title">${item.title}</h3>
                <p class="timeline-description">${item.description}</p>
            </div>
            <div class="timeline-dot"></div>
        `;

        timeline.appendChild(timelineItem);
    });
}

// ========== PHOTO GALLERY LOADING ==========
function loadGallery() {
    const grid = document.getElementById('photoGrid');

    photos.forEach((photo, index) => {
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.setAttribute('data-index', index);

        photoItem.innerHTML = `
            <img src="${photo.src}" alt="${photo.caption}" loading="lazy">
            <div class="photo-overlay">
                <p class="photo-caption">${photo.caption}</p>
            </div>
        `;

        // Add click event to open lightbox
        photoItem.addEventListener('click', () => openLightbox(index));

        grid.appendChild(photoItem);
    });
}

// ========== LIGHTBOX FUNCTIONALITY ==========
let currentImageIndex = 0;

function initializeLightbox() {
    const lightbox = document.getElementById('lightbox');
    const closeBtn = document.getElementById('lightboxClose');
    const prevBtn = document.getElementById('lightboxPrev');
    const nextBtn = document.getElementById('lightboxNext');

    // Close lightbox
    closeBtn.addEventListener('click', closeLightbox);

    // Navigation
    prevBtn.addEventListener('click', () => navigateLightbox(-1));
    nextBtn.addEventListener('click', () => navigateLightbox(1));

    // Click outside to close
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Keyboard navigation
    document.addEventListener('keydown', (e) => {
        if (!lightbox.classList.contains('active')) return;

        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowLeft') navigateLightbox(-1);
        if (e.key === 'ArrowRight') navigateLightbox(1);
    });

    // Touch swipe support for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    lightbox.addEventListener('touchstart', (e) => {
        touchStartX = e.changedTouches[0].screenX;
    });

    lightbox.addEventListener('touchend', (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const swipeThreshold = 50;
        const diff = touchStartX - touchEndX;

        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                navigateLightbox(1); // Swipe left - next
            } else {
                navigateLightbox(-1); // Swipe right - prev
            }
        }
    }
}

function openLightbox(index) {
    currentImageIndex = index;
    updateLightboxImage();
    document.getElementById('lightbox').classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent background scrolling
}

function closeLightbox() {
    document.getElementById('lightbox').classList.remove('active');
    document.body.style.overflow = ''; // Restore scrolling
}

function navigateLightbox(direction) {
    currentImageIndex += direction;

    // Wrap around
    if (currentImageIndex < 0) {
        currentImageIndex = photos.length - 1;
    } else if (currentImageIndex >= photos.length) {
        currentImageIndex = 0;
    }

    updateLightboxImage();
}

function updateLightboxImage() {
    const img = document.getElementById('lightboxImage');
    const caption = document.getElementById('lightboxCaption');
    const photo = photos[currentImageIndex];

    img.src = photo.src;
    img.alt = photo.caption;
    caption.textContent = photo.caption;
}

// ========== SCROLL ANIMATIONS ==========
function initializeScrollAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe timeline items
    document.querySelectorAll('.timeline-item').forEach(item => {
        observer.observe(item);
    });

    // Observe photo items
    document.querySelectorAll('.photo-item').forEach(item => {
        observer.observe(item);
    });
}

// ========== SMOOTH SCROLL ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// ========== PERFORMANCE OPTIMIZATIONS ==========
// Lazy loading for images
if ('loading' in HTMLImageElement.prototype) {
    // Browser supports lazy loading
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.src;
    });
} else {
    // Fallback for browsers that don't support lazy loading
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/lazysizes/5.3.2/lazysizes.min.js';
    document.body.appendChild(script);
}

// ========== UTILITY FUNCTIONS ==========

// Preload images for better performance
function preloadImages() {
    photos.forEach(photo => {
        const img = new Image();
        img.src = photo.src;
    });
}

// Call preload after page load
window.addEventListener('load', preloadImages);

// Handle orientation change on mobile
window.addEventListener('orientationchange', function () {
    setTimeout(() => {
        window.scrollTo(0, 0);
    }, 100);
});

// ========== PROPOSAL SECTION ==========
function initializeProposal() {
    const btnYes = document.getElementById('btnYes');
    const btnNo = document.getElementById('btnNo');
    const celebrationOverlay = document.getElementById('celebrationOverlay');

    if (!btnYes || !btnNo) return;

    // Yes button - Beautiful celebration
    btnYes.addEventListener('click', function () {
        console.log("Yes button clicked! 💖");

        // Show celebration overlay
        celebrationOverlay.classList.add('active');

        // Create floating hearts
        createFloatingHearts();

        // Play celebration sound
        playJoySound();

        // Auto-close after 5 seconds
        setTimeout(() => {
            celebrationOverlay.classList.remove('active');
            // Clean up hearts
            const hearts = celebrationOverlay.querySelectorAll('.celebration-heart');
            hearts.forEach(heart => heart.remove());
        }, 5000);
    });

    // No button - Move to random position
    btnNo.addEventListener('mouseover', moveNoButton);
    btnNo.addEventListener('touchstart', (e) => { e.preventDefault(); moveNoButton(); });
    btnNo.addEventListener('click', function (e) {
        e.preventDefault();
        moveNoButton();
    });

    function moveNoButton() {
        const container = btnNo.closest('.proposal-buttons');
        const containerRect = container.getBoundingClientRect();
        const btnRect = btnNo.getBoundingClientRect();

        // Calculate container dimensions (safe way)
        // Use clientWidth/Height if possible for padding box, fallback to rect
        const containerWidth = container.clientWidth || containerRect.width;
        const containerHeight = container.clientHeight || containerRect.height;
        const btnWidth = btnNo.offsetWidth || btnRect.width;
        const btnHeight = btnNo.offsetHeight || btnRect.height;

        // Ensure absolute positioning for movement
        btnNo.style.position = 'absolute';
        // Faster transition for snappier feel
        btnNo.style.transition = 'all 0.3s ease';

        // Safety padding from edges
        const padding = 20;

        // Calculate max allowed positions
        // Ensure we don't go negative
        const maxX = Math.max(0, containerWidth - btnWidth - padding);
        const maxY = Math.max(0, containerHeight - btnHeight - padding);

        // Generate random position within bounds
        // Add padding/2 offset to keep away from exact edge
        const randomX = Math.random() * maxX;
        const randomY = Math.random() * maxY;

        // Apply new position
        btnNo.style.left = `${randomX + (padding / 2)}px`;
        btnNo.style.top = `${randomY + (padding / 2)}px`;

        // Reset transform to avoid compounding effects
        btnNo.style.transform = 'none';

        // Ensure high z-index
        btnNo.style.zIndex = '50';
    }
}

// ========== FLOATING HEARTS CELEBRATION ==========
function createFloatingHearts() {
    const celebrationOverlay = document.getElementById('celebrationOverlay');
    const hearts = ['❤️', '💕', '💖', '💗', '💓', '💝', '💞'];

    // Create 30 floating hearts
    for (let i = 0; i < 30; i++) {
        setTimeout(() => {
            const heart = document.createElement('div');
            heart.className = 'celebration-heart';
            heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];

            // Random position at bottom
            heart.style.left = Math.random() * 100 + '%';
            heart.style.bottom = '-50px';

            // Random animation duration
            heart.style.animationDuration = (Math.random() * 3 + 4) + 's';

            celebrationOverlay.appendChild(heart);

            // Remove after animation
            setTimeout(() => {
                if (heart.parentNode) {
                    heart.remove();
                }
            }, 7000);
        }, i * 100);
    }
}

// ========== CONFETTI EFFECT ==========
function createConfetti() {
    const colors = ['#ff1744', '#f50057', '#ffd700', '#ff4569', '#ffc0cb'];

    for (let i = 0; i < 50; i++) {
        setTimeout(() => {
            const confetti = document.createElement('div');
            confetti.className = 'confetti';
            confetti.style.left = Math.random() * 100 + '%';
            confetti.style.background = colors[Math.floor(Math.random() * colors.length)];
            confetti.style.animationDelay = Math.random() * 0.5 + 's';
            confetti.style.animationDuration = (Math.random() * 2 + 2) + 's';

            document.getElementById('celebrationOverlay').appendChild(confetti);

            setTimeout(() => confetti.remove(), 4000);
        }, i * 30);
    }
}

// ========== PLAY JOY SOUND ==========
function playJoySound() {
    try {
        const audio = new Audio('sound/sound1.m4a');
        audio.volume = 0.7; // 70% volume
        audio.play().catch(err => {
            console.log('Could not play sound:', err);
        });
    } catch (e) {
        console.log('Audio not available');
    }
}

// Console message
console.log('%c💖 Made with Love 💖', 'color: #ff1744; font-size: 20px; font-weight: bold;');
console.log('%cHappy Rose Day! 🌹', 'color: #f50057; font-size: 16px;');
