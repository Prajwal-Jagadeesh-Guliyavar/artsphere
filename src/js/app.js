// Smooth Scroll Implementation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
});

// Intersection Observer for Scroll Effects
const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

document.querySelectorAll('.gallery-item, .about-content').forEach(el => {
    observer.observe(el);
});

// Contact Form Validation
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const formData = new FormData(contactForm);
    const errors = [];

    if (!formData.get('name')) errors.push('Name is required');
    if (!emailRegex.test(formData.get('email'))) errors.push('Valid email required');
    if (!formData.get('message')) errors.push('Message cannot be empty');

    if (errors.length > 0) {
        alert(errors.join('\n'));
        return;
    }

    // Submit form (add your form handling logic here)
    alert('Form submitted successfully!');
    contactForm.reset();
});