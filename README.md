# Fatih Aksoy - Kişisel Portföy Web Sitesi

Elektrik-Elektronik Mühendisliği öğrencisi Fatih Aksoy'un kişisel portföy web sitesi. Gömülü sistemler, IoT, robotik ve güç elektroniği projeleri.

## 🚀 Özellikler

- ✨ Modern ve profesyonel tasarım
- 🌓 Dark/Light mode toggle
- 📱 Fully responsive (mobil, tablet, desktop)
- ⚡ Hızlı ve optimize edilmiş
- 🎨 Glassmorphism efektleri
- 🎭 Smooth animasyonlar
- 📊 İnteraktif özellikler
- ♿ Erişilebilir (WCAG AA)

## 🛠️ Teknolojiler

- HTML5
- CSS3 (Custom Properties, Grid, Flexbox)
- Vanilla JavaScript (ES6+)
- Font Awesome 6
- Google Fonts (Inter, Roboto, Fira Code)

## 📁 Proje Yapısı

```
AksoyTechnic/
├── index.html              # Ana sayfa
├── css/
│   ├── variables.css      # CSS custom properties
│   ├── style.css          # Ana stiller
│   ├── components.css     # Bileşen stilleri
│   └── responsive.css     # Responsive tasarım
├── js/
│   ├── main.js            # Ana JavaScript
│   └── animations.js      # Scroll animasyonları
├── images/                # Görseller
├── assets/                # CV, raporlar
└── README.md
```

## 🎯 Geliştirme Durumu

### ✅ Tamamlanan (Faz 1)
- [x] Proje planı
- [x] Dosya yapısı
- [x] Tasarım sistemi (CSS variables)
- [x] Navigation bar (responsive + dark mode)
- [x] Hero section (typing animation, stats)
- [x] Footer
- [x] Temel animasyonlar
- [x] Responsive tasarım

### 🔄 Devam Eden
- [ ] Hakkımda bölümü
- [ ] Yetenekler grid
- [ ] Projeler bölümü
- [ ] Blog sistemi
- [ ] İletişim formu

## 🚀 Kullanım

### Lokal olarak çalıştırma

1. Repoyu klonlayın veya indirin
2. `index.html` dosyasını bir tarayıcıda açın
3. Veya bir local server kullanın:

```bash
# Python 3
python -m http.server 8000

# Node.js (http-server)
npx http-server
```

4. Tarayıcıda `http://localhost:8000` adresine gidin

### Deploy

- **GitHub Pages**: Settings > Pages > Source: main branch
- **Netlify**: Drag & drop klasörü
- **Vercel**: `vercel` komutu ile deploy

## 📝 İçerik Güncelleme

### Kişisel bilgileri değiştirme

1. `index.html` dosyasını açın
2. Hero section'daki bilgileri güncelleyin
3. Meta tags'leri düzenleyin (SEO için)

### Renk temasını değiştirme

`css/variables.css` dosyasında:
```css
--accent-primary: #00d4ff;  /* Ana vurgu rengi */
--accent-secondary: #ff6b35; /* İkincil vurgu */
```

### Typing animasyonu metinleri

`js/main.js` dosyasında:
```javascript
const phrases = [
  'Gömülü Sistemler',
  'IoT Projeleri',
  // Yeni metin ekle
];
```

## 🎨 Tasarım Sistemi

### Renkler
- **Primary**: `#00d4ff` (Elektrik mavisi)
- **Secondary**: `#ff6b35` (Turuncu)
- **Background**: `#0a0e27` (Koyu lacivert)
- **Text**: `#ffffff`, `#b8c1ec`

### Tipografi
- **Başlıklar**: Inter
- **Metin**: Roboto
- **Kod**: Fira Code

### Spacing
- Base unit: `1rem` (16px)
- Scale: 4px, 8px, 12px, 16px, 20px, 24px, 32px, 40px, 48px, 64px, 80px, 96px

## 📄 Lisans

© 2026 Fatih Aksoy. Tüm hakları saklıdır.

## 📧 İletişim

- Email: fatih@example.com
- LinkedIn: [linkedin.com/in/fatihaksoy](https://linkedin.com/in/fatihaksoy)
- GitHub: [github.com/fatihaksoy](https://github.com/fatihaksoy)

---

Made with ❤️ and ☕
