// ============================================
// MULTI-LANGUAGE SUPPORT
// Fatih Aksoy Portfolio
// ============================================

// Language data
const translations = {
    tr: {
        // Navigation
        nav: {
            home: 'Ana Sayfa',
            about: 'Hakkımda',
            skills: 'Yetenekler',
            projects: 'Projeler',
            blog: 'Blog',
            experience: 'Deneyim',
            contact: 'İletişim'
        },
        // Hero Section
        hero: {
            greeting: 'Merhaba, ben',
            name: 'Fatih Aksoy',
            typingPhrases: [
                'Gömülü Sistemler',
                'Otomasyon',
                'Yazılım Geliştirme',
                'Robotik'
            ],
            description: 'Elektrik-Elektronik Mühendisliği öğrencisiyim ve teknolojiye tutkuyla bağlıyım. Gömülü sistemler, otomasyon, yazılım ve robotik alanlarında projeler geliştiriyorum. Karmaşık problemleri basit ve yaratıcı çözümlerle aşmayı, yeni şeyler öğrenmeyi ve paylaşmayı seviyorum. Her proje benim için yeni bir macera!',
            cta: {
                projects: 'Projelerimi İncele',
                cv: 'CV İndir',
                contact: 'İletişime Geç'
            },
            stats: {
                projects: 'Tamamlanan Proje',
                technologies: 'Kullanılan Teknoloji',
                commits: 'GitHub Commits'
            }
        },
        // Sections
        sections: {
            about: 'Hakkımda',
            skills: 'Teknik Yetenekler',
            projects: 'Projeler',
            blog: 'Blog & Teknik Notlar',
            experience: 'Deneyim & Kazanımlar',
            contact: 'İletişim'
        },
        // Footer
        footer: {
            description: 'Elektrik-Elektronik Mühendisliği öğrencisi. Gömülü sistemler, otomasyon, yazılım ve robotik alanlarında projeler geliştiriyorum.',
            quickLinks: 'Hızlı Linkler',
            socialMedia: 'Sosyal Medya',
            copyright: 'Tüm hakları saklıdır.',
            madeWith: 'Made with'
        }
    },
    en: {
        // Navigation
        nav: {
            home: 'Home',
            about: 'About',
            skills: 'Skills',
            projects: 'Projects',
            blog: 'Blog',
            experience: 'Experience',
            contact: 'Contact'
        },
        // Hero Section
        hero: {
            greeting: 'Hello, I\'m',
            name: 'Fatih Aksoy',
            typingPhrases: [
                'Embedded Systems',
                'Automation',
                'Software Development',
                'Robotics'
            ],
            description: 'I\'m an Electrical-Electronics Engineering student with a passion for technology. I develop projects in embedded systems, automation, software, and robotics. I love solving complex problems with simple and creative solutions, learning new things, and sharing knowledge. Every project is a new adventure for me!',
            cta: {
                projects: 'View Projects',
                cv: 'Download CV',
                contact: 'Get in Touch'
            },
            stats: {
                projects: 'Completed Projects',
                technologies: 'Technologies Used',
                commits: 'GitHub Commits'
            }
        },
        // Sections
        sections: {
            about: 'About Me',
            skills: 'Technical Skills',
            projects: 'Projects',
            blog: 'Blog & Technical Notes',
            experience: 'Experience & Achievements',
            contact: 'Contact'
        },
        // Footer
        footer: {
            description: 'Electrical-Electronics Engineering student. Developing projects in embedded systems, automation, software, and robotics.',
            quickLinks: 'Quick Links',
            socialMedia: 'Social Media',
            copyright: 'All rights reserved.',
            madeWith: 'Made with'
        }
    }
};

// Current language (default: Turkish)
let currentLang = localStorage.getItem('language') || 'tr';

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    setLanguage(currentLang);
    updateLanguageButton();
});

// Language toggle function
function toggleLanguage() {
    currentLang = currentLang === 'tr' ? 'en' : 'tr';
    localStorage.setItem('language', currentLang);
    setLanguage(currentLang);
    updateLanguageButton();

    // Restart typing animation with new language
    if (window.typingAnimation) {
        window.typingAnimation.restart();
    }
}

// Set language
function setLanguage(lang) {
    const t = translations[lang];

    // Update HTML lang attribute
    document.documentElement.setAttribute('lang', lang);

    // Navigation
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const keys = key.split('.');
        let value = t;

        keys.forEach(k => {
            value = value[k];
        });

        if (value) {
            element.textContent = value;
        }
    });

    // Hero section
    const heroGreeting = document.querySelector('.hero-greeting');
    const heroDescription = document.querySelector('.hero-description');

    if (heroGreeting) heroGreeting.textContent = t.hero.greeting;
    if (heroDescription) heroDescription.textContent = t.hero.description;

    // CTA Buttons
    const ctaButtons = document.querySelectorAll('.hero-cta .btn');
    if (ctaButtons[0]) {
        ctaButtons[0].innerHTML = `<i class="fas fa-rocket"></i> ${t.hero.cta.projects}`;
    }
    if (ctaButtons[1]) {
        ctaButtons[1].innerHTML = `<i class="fas fa-download"></i> ${t.hero.cta.cv}`;
    }
    if (ctaButtons[2]) {
        ctaButtons[2].innerHTML = `<i class="fas fa-envelope"></i> ${t.hero.cta.contact}`;
    }

    // Stats labels
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels[0]) statLabels[0].textContent = t.hero.stats.projects;
    if (statLabels[1]) statLabels[1].textContent = t.hero.stats.technologies;
    if (statLabels[2]) statLabels[2].textContent = t.hero.stats.commits;

    // Section titles
    const sectionTitles = document.querySelectorAll('.section-title');
    const sectionKeys = ['about', 'skills', 'projects', 'blog', 'experience', 'contact'];
    sectionTitles.forEach((title, index) => {
        if (sectionKeys[index]) {
            title.textContent = t.sections[sectionKeys[index]];
        }
    });

    // Footer
    const footerDescription = document.querySelector('.footer-section p');
    if (footerDescription) {
        footerDescription.textContent = t.footer.description;
    }

    const footerHeadings = document.querySelectorAll('.footer-section h4');
    if (footerHeadings[1]) footerHeadings[1].textContent = t.footer.quickLinks;
    if (footerHeadings[2]) footerHeadings[2].textContent = t.footer.socialMedia;
}

// Update language button
function updateLanguageButton() {
    const langButton = document.getElementById('langToggle');
    if (langButton) {
        langButton.textContent = currentLang.toUpperCase();
    }
}

// Get current language translations
function getCurrentTranslations() {
    return translations[currentLang];
}

// Export for use in other scripts
window.i18n = {
    toggleLanguage,
    setLanguage,
    getCurrentTranslations,
    currentLang: () => currentLang
};
