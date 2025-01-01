// Animation utilities
const animateOnScroll = () => {
    const elements = document.querySelectorAll('.fade-in');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(element => observer.observe(element));
};

// Initialize animations
document.addEventListener('DOMContentLoaded', () => {
    animateOnScroll();
});

// // Parallax effect
window.addEventListener('scroll', () => {
    const parallaxElements = document.querySelectorAll('.parallax');
    parallaxElements.forEach(element => {
        const speed = element.dataset.speed || 0.5;
        // const yPos = -(window.pageYOffset * speed);
        element.style.transform = `translateY(${speed}px)`;
    });
});

// Contact form submission handling
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // You can implement an API call here to send the data to your backend server
    console.log('Form submitted:', { name, email, message });

    // Clear form fields after submission
    this.reset();
    alert('Thank you for your message, ' + name + '! I will get back to you shortly.');
});
