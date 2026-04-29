document.addEventListener('DOMContentLoaded', () => {
    // ============================================
    // Mobile Navigation Toggle
    // ============================================
    const navToggle = document.getElementById('navToggle');
    const navLinks = document.getElementById('navLinks');
    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
        // Close mobile menu when clicking a link
        navLinks.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // ============================================
    // Theme Toggle (Light/Dark)
    // ============================================
    const themeToggleBtn = document.getElementById('themeToggleText');
    const htmlElement = document.documentElement;

    const savedTheme = localStorage.getItem('pyronets-theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Default to light (Stripe-like)
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        htmlElement.setAttribute('data-theme', 'dark');
    } else {
        htmlElement.setAttribute('data-theme', 'light');
    }

    const updateThemeUI = (theme) => {
        if (!themeToggleBtn) return;
        if (theme === 'dark') {
            themeToggleBtn.innerHTML = '&#9728; Light';
        } else {
            themeToggleBtn.innerHTML = '&#127769; Dark';
        }
    };

    updateThemeUI(htmlElement.getAttribute('data-theme'));

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener('click', () => {
            const currentTheme = htmlElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            htmlElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('pyronets-theme', newTheme);
            updateThemeUI(newTheme);
        });
    }

    // ============================================
    // Scroll-based Nav Background
    // ============================================
    const nav = document.getElementById('nav');
    if (nav) {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                nav.classList.add('scrolled');
            } else {
                nav.classList.remove('scrolled');
            }
        };
        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll(); // Initial check
    }

    // ============================================
    // Intersection Observer — Fade-in Animations
    // ============================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    const animateElements = document.querySelectorAll('.animate');
    animateElements.forEach(el => observer.observe(el));

    // ============================================
    // Counter Animation (Stats)
    // ============================================
    const counters = document.querySelectorAll('.counter');
    let countersAnimated = false;

    const animateCounters = () => {
        if (countersAnimated) return;
        countersAnimated = true;

        counters.forEach(counter => {
            const target = parseFloat(counter.getAttribute('data-target'));
            const decimals = parseInt(counter.getAttribute('data-decimals') || '0');
            const duration = 2000;
            const startTime = performance.now();

            const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

            const update = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);
                const easedProgress = easeOutCubic(progress);
                const current = target * easedProgress;

                if (decimals > 0) {
                    counter.textContent = current.toFixed(decimals);
                } else {
                    counter.textContent = Math.floor(current);
                }

                if (progress < 1) {
                    requestAnimationFrame(update);
                } else {
                    if (decimals > 0) {
                        counter.textContent = target.toFixed(decimals);
                    } else {
                        counter.textContent = target;
                    }
                }
            };

            requestAnimationFrame(update);
        });
    };

    // Trigger counters when hero stats are visible
    if (counters.length > 0) {
        const statsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animateCounters();
                    statsObserver.disconnect();
                }
            });
        }, { threshold: 0.3 });

        const heroStats = document.querySelector('.hero-stats');
        if (heroStats) {
            statsObserver.observe(heroStats);
        }
    }

    // ============================================
    // FAQ Accordion
    // ============================================
    const faqItems = document.querySelectorAll('.faq-item');
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        if (question) {
            question.addEventListener('click', () => {
                const isActive = item.classList.contains('active');

                // Close all others
                faqItems.forEach(other => other.classList.remove('active'));

                // Toggle current
                if (!isActive) {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                } else {
                    question.setAttribute('aria-expanded', 'false');
                }
            });
        }
    });

    // ============================================
    // Pricing Toggle (Monthly ↔ Annual)
    // ============================================
    const pricingSwitch = document.getElementById('pricingSwitch');
    const monthlyLabel = document.getElementById('monthlyLabel');
    const annualLabel = document.getElementById('annualLabel');

    if (pricingSwitch) {
        let isAnnual = false;

        const updatePricing = () => {
            const amounts = document.querySelectorAll('.pricing-amount[data-monthly]');
            amounts.forEach(el => {
                const monthly = el.getAttribute('data-monthly');
                const annual = el.getAttribute('data-annual');
                el.textContent = isAnnual ? `$${annual}` : `$${monthly}`;
            });

            if (monthlyLabel && annualLabel) {
                monthlyLabel.classList.toggle('active', !isAnnual);
                annualLabel.classList.toggle('active', isAnnual);
            }

            pricingSwitch.classList.toggle('active', isAnnual);
            pricingSwitch.setAttribute('aria-checked', isAnnual.toString());
        };

        pricingSwitch.addEventListener('click', () => {
            isAnnual = !isAnnual;
            updatePricing();
        });

        pricingSwitch.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                isAnnual = !isAnnual;
                updatePricing();
            }
        });
    }
});
