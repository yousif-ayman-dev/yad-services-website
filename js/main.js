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

    const currentPage =
        window.location.pathname.split('/').pop() || 'index.html';

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
// DARK MODE
// ================================

const themeToggles =
    document.querySelectorAll('.btn-theme-toggle');

function applyTheme(theme) {

    document.body.classList.toggle(
        'dark-mode',
        theme === 'dark'
    );

    document.documentElement.style.colorScheme =
        theme === 'dark' ? 'dark' : 'light';

    themeToggles.forEach(function(toggle) {

        toggle.textContent =
            theme === 'dark' ? '☀️' : '🌙';

    });

    localStorage.setItem('yadTheme', theme);

}

themeToggles.forEach(function(toggle) {

    toggle.addEventListener('click', function() {

        const isDark =
            document.body.classList.contains('dark-mode');

        applyTheme(isDark ? 'light' : 'dark');

    });

});

applyTheme(localStorage.getItem('yadTheme') || 'light');

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

            entry.target.classList.add('visible');

            observer.unobserve(entry.target);

        }

    });

}, observerOptions);

// ================================
// OBSERVE ELEMENTS
// ================================

const scrollTargets = document.querySelectorAll(
    '.service-card, .portfolio-card, .testimonial-card, .step-card, .why-us-card, .trust-card, .feedback-card, .contact-info-item, .service-detail-card, .hero-content, .hero-image, .cta-content, .about-text, .about-image, .faq-item, .details-section'
);

scrollTargets.forEach(el => {

    el.classList.add('animate-on-scroll');

    observer.observe(el);

});

// ================================
// BACK TO TOP BUTTON
// ================================

const backToTopBtn =
    document.createElement('button');

backToTopBtn.innerHTML =
    '<i class="fas fa-arrow-up"></i>';

backToTopBtn.className =
    'back-to-top-btn';

backToTopBtn.setAttribute(
    'aria-label',
    'العودة للأعلى'
);

document.body.appendChild(backToTopBtn);

window.addEventListener('scroll', () => {

    if (window.scrollY > 300) {

        backToTopBtn.classList.add('show');

    } else {

        backToTopBtn.classList.remove('show');

    }

});

backToTopBtn.addEventListener('click', () => {

    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

});

// ================================
// SERVICE DETAILS PAGE
// ================================

function getServiceDetails() {

    const params =
        new URLSearchParams(window.location.search);

    const service = params.get('service');

    const services = {

        graduation: {

            title: 'مشاريع التخرج',

            subtitle: 'مشاريع تخرج احترافية ومتكاملة',

            description: 'نقدم خدمة تنفيذ مشاريع التخرج بشكل احترافي يشمل البرمجة، كتابة التوثيق، تصميم الواجهات، وتجهيز العرض النهائي بما يتوافق مع متطلبات الجامعة.',

            features: [
                'تنفيذ المشروع كاملاً من البداية حتى التسليم',
                'تصميم واجهات حديثة وسهلة الاستخدام',
                'توثيق أكاديمي منظم واحترافي',
                'تعديلات ومتابعة مستمرة',
                'تسليم مرتب وفي الموعد المتفق عليه'
            ]

        },

        assignments: {

            title: 'الواجبات والتكاليف',

            subtitle: 'حل واجبات وتكاليف جامعية بدقة',

            description: 'نوفر خدمة حل الواجبات والتكاليف الجامعية بطريقة مرتبة ودقيقة مع مراعاة التنسيق الأكاديمي ومتطلبات المادة.',

            features: [
                'حلول دقيقة ومنظمة',
                'تنسيق أكاديمي احترافي',
                'شرح واضح عند الطلب',
                'سرعة بالتنفيذ والتسليم',
                'متابعة وتعديلات حسب الحاجة'
            ]

        },

        exams: {

            title: 'حل الامتحانات',

            subtitle: 'حل امتحانات واختبارات أونلاين',

            description: 'خدمة مخصصة لمساعدة الطلاب في الامتحانات والاختبارات الإلكترونية بسرعة واحترافية مع الالتزام بالوقت المطلوب.',

            features: [
                'التزام كامل بوقت الامتحان',
                'سرية وخصوصية عالية',
                'دقة في الإجابات والحلول',
                'متابعة مباشرة أثناء الاختبار',
                'تنفيذ سريع واحترافي'
            ]

        },

        reports: {

            title: 'التقارير والبحوث',

            subtitle: 'تقارير وبحوث أكاديمية احترافية',

            description: 'نقوم بإعداد التقارير والبحوث الأكاديمية بصياغة منظمة ومحتوى احترافي مع الالتزام بالتوثيق العلمي المطلوب.',

            features: [
                'كتابة محتوى أصلي ومنظم',
                'توثيق أكاديمي حسب المطلوب',
                'تنسيق احترافي وجاهز للطباعة',
                'مراجعة لغوية وتقنية',
                'تسليم بصيغ متعددة حسب الطلب'
            ]

        },

        cv: {

            title: 'السيرة الذاتية',

            subtitle: 'تصميم سيرة ذاتية احترافية',

            description: 'نساعدك في إنشاء سيرة ذاتية احترافية بتصميم عصري يبرز خبراتك ومهاراتك بطريقة جذابة.',

            features: [
                'تصميم حديث وجذاب',
                'تنسيق متوافق مع ATS',
                'إبراز المهارات والخبرات',
                'إمكانية التعديل مستقبلاً',
                'تسليم PDF ونسخة قابلة للتعديل'
            ]

        },

        websites: {

            title: 'تصميم المواقع',

            subtitle: 'تصميم وتطوير مواقع إلكترونية',

            description: 'نصمم مواقع إلكترونية حديثة ومتجاوبة تناسب مختلف الأجهزة مع الاهتمام بسرعة الأداء وتجربة المستخدم.',

            features: [
                'تصميم متجاوب مع جميع الأجهزة',
                'واجهة استخدام عصرية وسلسة',
                'سرعة وأداء ممتاز',
                'دعم الوضع الليلي',
                'تحسين تجربة المستخدم'
            ]

        },

        office: {

            title: 'أعمال المكتب',

            subtitle: 'خدمات Word و Excel و PowerPoint',

            description: 'نقدم خدمات مكتبية احترافية تشمل تنسيق الملفات وإعداد العروض التقديمية وإدخال البيانات.',

            features: [
                'تنسيق ملفات احترافي',
                'إعداد عروض PowerPoint جذابة',
                'تنظيم بيانات Excel بدقة',
                'تسليم سريع ومرتب',
                'تعديلات حسب الطلب'
            ]

        }

    };

    if (services[service]) {

        const data = services[service];

        document.getElementById('serviceTitle').textContent =
            data.title;

        document.getElementById('serviceSubtitle').textContent =
            data.subtitle;

        document.getElementById('serviceDescription').textContent =
            data.description;

        data.features.forEach((feature, index) => {

            const el =
                document.getElementById(`feature${index + 1}`);

            if (el) {
                el.textContent = feature;
            }

        });

    }

}

if (
    window.location.pathname.includes(
        'service-details.html'
    )
) {

    getServiceDetails();

}