// Script.js for Personal Portfolio

document.addEventListener('DOMContentLoaded', () => {

    // ---------------------------------------------
    // 1. Sticky Navbar
    // ---------------------------------------------
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 20) {
            navbar.classList.add('sticky');
        } else {
            navbar.classList.remove('sticky');
        }
    });

    // ---------------------------------------------
    // 2. Mobile Menu Toggle
    // ---------------------------------------------
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-menu a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.classList.toggle('active'); // Optional: for hamburger animation if needed
    });

    // Close mobile menu when a link is clicked
    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.classList.remove('active');
        });
    });

    // ---------------------------------------------
    // 3. Smooth Scrolling for Navigation Links
    // ---------------------------------------------
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                // Account for fixed navbar height
                const headerOffset = 70;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });

                // Active Link update
                document.querySelectorAll('.nav-links a').forEach(link => link.classList.remove('active'));
                this.classList.add('active');
            }
        });
    });

    // ---------------------------------------------
    // 4. Scroll Active Link (Spy Scroll)
    // ---------------------------------------------
    const sections = document.querySelectorAll('section');
    const navLi = document.querySelectorAll('.nav-links li a');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            // -100 to trigger highlight slightly before proper section
            if (pageYOffset >= (sectionTop - 100)) {
                current = section.getAttribute('id');
            }
        });

        navLi.forEach(a => {
            a.classList.remove('active');
            if (a.getAttribute('href').includes(current)) {
                a.classList.add('active');
            }
        });
    });

    // ---------------------------------------------
    // 5. Scroll Reveal Animation (Intersection Observer)
    // ---------------------------------------------
    const revealElements = document.querySelectorAll('.skill-card, .project-card, .timeline-item, .section-title, .about-text');

    const revealOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const revealOnScroll = new IntersectionObserver(function (entries, revealOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('reveal');
                revealOnScroll.unobserve(entry.target);
            }
        });
    }, revealOptions);

    revealElements.forEach(el => {
        el.classList.add('hidden'); // Add initial hidden state via JS to ensure graceful degradation if JS fails
        revealOnScroll.observe(el);
    });

    // ---------------------------------------------
    // 6. Contact Form Handling (EmailJS)
    // ---------------------------------------------
    const contactForm = document.getElementById('contact-form');

    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            // Show loading state (optional)
            const submitBtn = this.querySelector('button[type="submit"]');
            const originalBtnText = submitBtn.textContent;
            submitBtn.textContent = 'Sending...';

            // EmailJS Service ID, Template ID, and Form ID
            // User provided Service ID: service_7avirgc
            // User needs to provide Template ID
            const serviceID = 'service_7avirgc';
            const templateID = 'template_46p73eo';

            // Explicitly get values
            const params = {
                name: this.querySelector('[name="name"]').value,
                email: this.querySelector('[name="email"]').value,
                message: this.querySelector('[name="message"]').value
            };

            emailjs.send(serviceID, templateID, params)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                    submitBtn.textContent = originalBtnText;
                }, (err) => {
                    alert('Failed to send message.\nError: ' + JSON.stringify(err));
                    console.log('FAILED...', err);
                    submitBtn.textContent = originalBtnText;
                });
        });
    }
});
