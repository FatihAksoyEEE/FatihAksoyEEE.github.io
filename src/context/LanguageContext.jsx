import { createContext, useState, useContext } from 'react';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState('tr'); // 'tr' or 'en'

    const toggleLanguage = () => {
        setLanguage((prev) => (prev === 'tr' ? 'en' : 'tr'));
    };

    const t = (key) => {
        const translations = {
            tr: {
                // Navbar
                about: 'Hakkımda',
                skills: 'Yetenekler',
                projects: 'Projeler',
                contact: 'İletişim',

                // Hero
                greeting: 'Elektrik-Elektronik Mühendisi',
                heroTitle: 'MÜHENDİSLİK',
                heroSubtitle: 'GELECEĞİ',
                heroDesc: 'Gömülü sistemler, IoT ve ileri teknoloji devre tasarımlarıyla geleceğin teknolojilerini bugünden inşa ediyorum. Uzay ve havacılık teknolojilerine tutkulu bir mühendis adayı.',
                viewProjects: 'Projelerimi Gör',

                // Stat Cards
                embedded: 'GÖMÜLÜ',
                embeddedDesc: 'Düşük seviye programlama',
                iot: 'IoT',
                iotDesc: 'Ağ bağlantılı sistemler',
                pcb: 'PCB',
                pcbDesc: 'Profesyonel devre tasarımı',

                // About
                aboutTitle: 'Hakkımda',
                aboutDesc1: 'Merhaba! Ben Fatih, teknolojiye ve mühendisliğe olan tutkumla dünyayı daha yaşanabilir bir yer haline getirmeyi hedefleyen bir Elektrik-Elektronik Mühendisliği öğrencisiyim.',
                aboutDesc2: 'Özellikle gömülü sistemler, IoT (Nesnelerin İnterneti) ve baskı devre kartı (PCB) tasarımı alanlarında kendimi geliştiriyorum. Teorik bilgilerimi pratik projelerle pekiştirerek, gerçek dünya sorunlarına inovatif çözümler üretmekten keyif alıyorum.',
                aboutDesc3: 'Sürekli öğrenme ve gelişime inanan biri olarak, yeni teknolojileri takip ediyor ve projelerimde en güncel yöntemleri kullanmaya çalışıyorum.',
                degree: 'Lisans Derecesi',
                experience: 'Deneyim',
                projectDev: 'Proje Geliştirme',

                // Skills
                skillsTitle: 'Yetenekler',
                programming: 'Programlama',
                embeddedSystems: 'Gömülü Sistemler',
                circuitDesign: 'Devre Tasarımı',
                tools: 'Araçlar & Yazılımlar',
                levelAdv: 'İleri',
                levelInt: 'Orta',
                levelBas: 'Temel',

                // Projects
                projectsTitle: 'Projelerim',
                p1Title: 'Yer Kontrol İstasyonu (GCS)',
                p1Desc: 'İnsansız Hava Araçları (İHA) için geliştirilmiş kapsamlı kontrol arayüzü. Telemetri verilerini (konum, hız, yükseklik) gerçek zamanlı izleme, harita entegrasyonu ve uçuş planlama özellikleri.',
                p2Title: 'LoRa Tabanlı Verici Sistemi',
                p2Desc: 'ESP32 ve LoRa modülleri kullanılarak uzun menzilli, düşük güç tüketimli haberleşme sistemi tasarımı. Sensör verilerinin güvenli iletimi ve hata yönetimi.',
                p3Title: 'Akıllı Ev Otomasyonu',
                p3Desc: 'IoT tabanlı ev kontrol sistemi. Wi-Fi üzerinden lamba, sıcaklık ve kilit kontrolü sağlayan mobil uyumlu arayüz.',
                typeSoftware: 'Yazılım',
                typeHardware: 'Donanım & Gömülü',
                typeIoT: 'IoT',

                // Contact
                contactTitle: 'İletişime Geç',
                contactDesc: 'Projelerim hakkında konuşmak veya iş birliği yapmak isterseniz bana ulaşabilirsiniz.',
                emailLabel: 'E-posta',
                linkedinLabel: 'LinkedIn',
                githubLabel: 'GitHub',
                locationTitle: 'Konum',
                locationDesc: 'İstanbul, Türkiye',
                formName: 'Adınız',
                formNamePlaceholder: 'Ad Soyad',
                formEmailPlaceholder: 'ornek@email.com',
                formMessage: 'Mesajınız',
                formSend: 'Gönder',

                // Footer
                footerRights: 'Tüm Hakları Saklıdır.',
                footerMadeWith: 'React & Tailwind CSS ile geliştirildi.'
            },
            en: {
                // Navbar
                about: 'About',
                skills: 'Skills',
                projects: 'Projects',
                contact: 'Contact',

                // Hero
                greeting: 'Electrical-Electronics Engineer',
                heroTitle: 'ENGINEERING',
                heroSubtitle: 'THE FUTURE',
                heroDesc: 'Building tomorrow\'s technologies today with embedded systems, IoT, and advanced circuit designs. An engineering candidate passionate about space and aviation technologies.',
                viewProjects: 'View Projects',

                // Stat Cards
                embedded: 'EMBEDDED',
                embeddedDesc: 'Low-level programming',
                iot: 'IoT',
                iotDesc: 'Networked systems',
                pcb: 'PCB',
                pcbDesc: 'Professional circuit design',

                // About
                aboutTitle: 'About Me',
                aboutDesc1: 'Hello! I am Fatih, an Electrical-Electronics Engineering student aiming to make the world a better place with my passion for technology and engineering.',
                aboutDesc2: 'I specifically focus on embedded systems, IoT (Internet of Things), and printed circuit board (PCB) design. I reinforce my theoretical knowledge with practical projects and enjoy creating innovative solutions to real-world problems.',
                aboutDesc3: 'As a believer in continuous learning and development, I follow new technologies and try to use the most up-to-date methods in my projects.',
                degree: 'Bachelor\'s Degree',
                experience: 'Experience',
                projectDev: 'Project Development',

                // Skills
                skillsTitle: 'Skills',
                programming: 'Programming',
                embeddedSystems: 'Embedded Systems',
                circuitDesign: 'Circuit Design',
                tools: 'Tools & Software',
                levelAdv: 'Advanced',
                levelInt: 'Intermediate',
                levelBas: 'Basic',

                // Projects
                projectsTitle: 'My Projects',
                p1Title: 'Ground Control Station (GCS)',
                p1Desc: 'Comprehensive control interface developed for Unmanned Aerial Vehicles (UAVs). Real-time monitoring of telemetry data (position, speed, altitude), map integration, and flight planning features.',
                p2Title: 'LoRa Based Transmitter System',
                p2Desc: 'Long-range, low-power communication system design using ESP32 and LoRa modules. Secure transmission of sensor data and error management.',
                p3Title: 'Smart Home Automation',
                p3Desc: 'IoT-based home control system. Mobile-compatible interface providing control of lights, temperature, and locks via Wi-Fi.',
                typeSoftware: 'Software',
                typeHardware: 'Hardware & Firmware',
                typeIoT: 'IoT',

                // Contact
                contactTitle: 'Get in Touch',
                contactDesc: 'Feel free to reach out to discuss my projects or collaboration opportunities.',
                emailLabel: 'Email',
                linkedinLabel: 'LinkedIn',
                githubLabel: 'GitHub',
                locationTitle: 'Location',
                locationDesc: 'Istanbul, Turkey',
                formName: 'Name',
                formNamePlaceholder: 'Full Name',
                formEmailPlaceholder: 'example@email.com',
                formMessage: 'Message',
                formSend: 'Send',

                // Footer
                footerRights: 'All Rights Reserved.',
                footerMadeWith: 'Developed with React & Tailwind CSS.'
            }
        };

        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);
