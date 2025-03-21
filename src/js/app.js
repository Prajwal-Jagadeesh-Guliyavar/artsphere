// Smooth scroll for anchor links
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

// Form validation and submission
document.querySelectorAll('.contact-form').forEach(form => {
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(form);
        const errors = [];
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // Validate name
        if (!formData.get('name') || formData.get('name').trim().length < 2) {
            errors.push('Please enter a valid name (at least 2 characters)');
        }

        // Validate email
        if (!emailRegex.test(formData.get('email'))) {
            errors.push('Please enter a valid email address');
        }

        // Validate message
        if (!formData.get('message') || formData.get('message').trim().length < 10) {
            errors.push('Please enter a message with at least 10 characters');
        }

        if (errors.length > 0) {
            alert(errors.join('\n'));
            return;
        }

        // Simulate form submission
        alert('Thank you for your message! We\'ll respond shortly.');
        form.reset();
    });
});

// Mobile menu functionality
const initMobileMenu = () => {
    const nav = document.querySelector('.glass-nav');
    if (!nav) return;

    // Create mobile menu button
    const mobileMenuBtn = document.createElement('button');
    mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
    mobileMenuBtn.className = 'mobile-menu-btn';
    mobileMenuBtn.setAttribute('aria-label', 'Toggle navigation menu');
    nav.appendChild(mobileMenuBtn);

    // Get the nav links container
    const navLinks = document.querySelector('.nav-links');

    // Toggle menu visibility
    mobileMenuBtn.addEventListener('click', () => {
        const isExpanded = navLinks.classList.toggle('show');
        mobileMenuBtn.setAttribute('aria-expanded', isExpanded);
        mobileMenuBtn.innerHTML = isExpanded ? 
            '<i class="fas fa-times"></i>' : 
            '<i class="fas fa-bars"></i>';
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!nav.contains(e.target)) {
            navLinks.classList.remove('show');
            mobileMenuBtn.setAttribute('aria-expanded', false);
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });

    // Close menu on resize if window becomes large
    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            navLinks.classList.remove('show');
            mobileMenuBtn.setAttribute('aria-expanded', false);
            mobileMenuBtn.innerHTML = '<i class="fas fa-bars"></i>';
        }
    });
};

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    initMobileMenu();
});