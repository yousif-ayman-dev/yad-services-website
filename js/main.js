// ================================
// YAD Services - Main JavaScript
// ================================

console.log("YAD Services Ready 🔥");

// ================================
// SMOOTH SCROLL
// ================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
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

// ================================
// NAVBAR ACTIVE LINK
// ================================

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });
}

setActiveNavLink();

// ================================
// SCROLL ANIMATIONS
// ================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animation = 'fadeIn 0.6s ease forwards';
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card, .step-card, .why-us-card').forEach(el => {
    observer.observe(el);
});

// ================================
// HOVER EFFECTS
// ================================

document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px)';
    });

    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});

// ================================
// COUNTER ANIMATION
// ================================

function animateCounters() {
    const counters = document.querySelectorAll('.counter');

    counters.forEach(counter => {
        const target = parseInt(counter.textContent);
        const increment = target / 50;
        let current = 0;

        const updateCounter = () => {
            current += increment;
            if (current < target) {
                counter.textContent = Math.ceil(current);
                requestAnimationFrame(updateCounter);
            } else {
                counter.textContent = target;
            }
        };

        updateCounter();
    });
}

// Call counter animation when page loads
window.addEventListener('load', () => {
    setTimeout(animateCounters, 500);
});

// ================================
// SERVICE DETAILS PAGE
// ================================

function getServiceDetails() {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');

    const services = {
        'graduation': {
            title: 'مشاريع التخرج',
            subtitle: 'مشاريع تخرج احترافية ومبتكرة',
            description: 'نقدم خدمات إنجاز مشاريع التخرج الجامعية في جميع التخصصات بمعايير عالية الجودة وأحدث التقنيات. نساعدك في إنجاز مشروعك بطريقة احترافية تضمن الحصول على أعلى الدرجات.',
            icon: '🎓'
        },
        'assignments': {
            title: 'الواجبات والتكاليف',
            subtitle: 'حل جميع الواجبات والأنشطة الدراسية',
            description: 'نساعدك في إنجاز جميع الواجبات والأنشطة الدراسية بدقة عالية وفي الوقت المحدد. نقدم حلول شاملة ومفصلة لجميع المواد والمستويات الدراسية مع شرح مفصل لكل خطوة.',
            icon: '📝'
        },
        'exams': {
            title: 'حل الامتحانات',
            subtitle: 'حل جميع أنواع الامتحانات والاختبارات',
            description: 'نقدم خدمات حل الامتحانات والاختبارات في جميع المواد والتخصصات. نحل الامتحانات بدقة عالية سواء كانت نظرية أو عملية ونضمن لك النجاح والحصول على أعلى الدرجات.',
            icon: '📋'
        },
        'reports': {
            title: 'التقارير والبحوث',
            subtitle: 'تقارير وبحوث أكاديمية احترافية',
            description: 'نكتب لك التقارير والبحوث الأكاديمية بأعلى مستويات الجودة والدقة. نقدم محتوى أصلي ومفصل مع الاستشهادات والمراجع العلمية المناسبة وتنسيق احترافي.',
            icon: '📄'
        },
        'cv': {
            title: 'إنشاء السيرة الذاتية',
            subtitle: 'سير ذاتية احترافية وجذابة',
            description: 'نصمم لك سيرة ذاتية احترافية وجذابة تساعدك في الحصول على فرص العمل المرغوبة. نركز على إبراز نقاط القوة وجعل سيرتك مميزة عن غيرها وموافقة لمعايير التوظيف الدولية.',
            icon: '👔'
        },
        'websites': {
            title: 'تصميم المواقع',
            subtitle: 'مواقع إلكترونية احترافية ومتجاوبة',
            description: 'نطور لك مواقع إلكترونية احترافية ومتجاوبة مع جميع الأجهزة والشاشات. نقدم تصاميم عصرية ووظائف متقدمة تضمن تجربة مستخدم ممتازة وسهولة الاستخدام.',
            icon: '💻'
        },
        'office': {
            title: 'أعمال المكتب',
            subtitle: 'خدمات إدخال البيانات ومهام أوفيس',
            description: 'نقدم خدمات إدخال البيانات بدقة عالية ومعالجة جميع مهام Microsoft Office (Word, Excel, PowerPoint). نساعدك في تنظيم ومعالجة بياناتك بطريقة احترافية وسريعة.',
            icon: '📊'
        }
    };

    if (service && services[service]) {
        const serviceData = services[service];
        document.getElementById('serviceTitle').textContent = serviceData.title;
        document.getElementById('serviceSubtitle').textContent = serviceData.subtitle;
        document.getElementById('serviceDescription').textContent = serviceData.description;
    }
}

// Call service details function on page load
if (window.location.pathname.includes('service-details')) {
    window.addEventListener('load', getServiceDetails);
}

// ================================
// FORM VALIDATION (if forms are added)
// ================================

const forms = document.querySelectorAll('form');

forms.forEach(form => {
    form.addEventListener('submit', function(e) {
        e.preventDefault();

        // Basic validation
        const inputs = this.querySelectorAll('input[required], textarea[required]');
        let isValid = true;

        inputs.forEach(input => {
            if (input.value.trim() === '') {
                input.style.borderColor = '#e74c3c';
                isValid = false;
            } else {
                input.style.borderColor = '#ddd';
            }
        });

        if (isValid) {
            alert('شكراً! سيتم التواصل معك قريباً');
            this.reset();
        }
    });
});

// ================================
// DARK MODE TOGGLE (Optional)
// ================================

function initDarkMode() {
    const darkModeButton = document.getElementById('darkModeToggle');
    if (!darkModeButton) return;

    const isDarkMode = localStorage.getItem('darkMode') === 'true';

    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        darkModeButton.textContent = '☀️';
    }

    darkModeButton.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
        const newDarkMode = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkMode', newDarkMode);
        darkModeButton.textContent = newDarkMode ? '☀️' : '🌙';
    });
}

initDarkMode();

// ================================
// WHATSAPP INTEGRATION
// ================================

document.querySelectorAll('a[href*="wa.me"]').forEach(link => {
    link.addEventListener('click', function(e) {
        // Optional: Add analytics here
        console.log('User clicked WhatsApp link');
    });
});

// ================================
// PAGE LOAD COMPLETE
// ================================

window.addEventListener('load', () => {
    console.log('YAD Services fully loaded');
    document.body.style.opacity = '1';
});

// ================================
// LAZY LOADING FOR IMAGES
// ================================

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}