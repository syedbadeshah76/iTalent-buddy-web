document.addEventListener('DOMContentLoaded', () => {
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    const closeMobileMenuButton = document.getElementById('close-mobile-menu-button');

    mobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.add('active');
    });

    closeMobileMenuButton.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
    });
});
// tailwind.config.js

    document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    // Stop observing once the element is visible to save resources
                    observer.unobserve(entry.target);
                }
            });
        }, {
            rootMargin: "0px",
            threshold: 0.2 // Trigger when 20% of the element is visible
        });

        // Select all elements you want to animate
        const animatedElements = document.querySelectorAll('.scroll-animate, .promo-card, .sponsor-card, .stat-item, .gaming-image img');
        
        // Observe each element
        animatedElements.forEach(element => {
            observer.observe(element);
        });

    });
