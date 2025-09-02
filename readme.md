# 💱 Döviz Kuru Çevirici

Modern ve kullanıcı dostu bir döviz kuru çevirici uygulaması. React ve TailwindCSS ile geliştirilmiştir.

## 🚀 Demo

[Canlı Demo](https://melihcandemir.github.io/ReactCurrency/)

## ✨ Özellikler

- 🌍 **33+ Para Birimi Desteği** - Dünya genelinde kullanılan başlıca para birimlerini destekler
- 📱 **Responsive Tasarım** - Mobil ve masaüstü cihazlarda mükemmel görünüm
- 🌙 **Dark/Light Mod** - Kullanıcı tercihine göre tema değiştirme
- 🔄 **Hızlı Para Birimi Değiştirme** - Tek tıkla para birimlerini yer değiştirme
- ⚡ **Gerçek Zamanlı Kurlar** - FreeCurrencyAPI ile güncel döviz kurları
- 🎨 **Modern UI/UX** - TailwindCSS ile şık ve modern tasarım
- 📊 **Hassas Hesaplama** - 2 ondalık basamağa kadar hassas sonuçlar

## 🛠️ Kullanılan Teknolojiler

- **React 19** - Modern JavaScript kütüphanesi
- **TailwindCSS 4** - Utility-first CSS framework
- **Axios** - HTTP istekleri için
- **Vite** - Hızlı geliştirme ortamı
- **FreeCurrencyAPI** - Döviz kuru verileri

## 📦 Kurulum

1. **Projeyi klonlayın:**

```bash
git clone https://github.com/melihcandemir/ReactCurrency.git
cd ReactCurrency
```

2. **Bağımlılıkları yükleyin:**

```bash
npm install
```

3. **Geliştirme sunucusunu başlatın:**

```bash
npm run dev
```

4. **Tarayıcınızda açın:**

```
http://localhost:5173
```

## 🏗️ Proje Yapısı

```
ReactCurrency/
├── public/
├── src/
│   ├── assets/
│   │   ├── index.css          # Ana CSS dosyası
│   │   └── React.png          # Favicon
│   ├── components/
│   │   ├── Currency.jsx       # Ana döviz çevirici bileşeni
│   │   ├── DesktopLayout.jsx  # Masaüstü düzeni
│   │   ├── MobileLayout.jsx   # Mobil düzen
│   │   └── Theme.jsx          # Tema değiştirici
│   ├── App.jsx               # Ana uygulama bileşeni
│   ├── main.jsx              # Uygulama giriş noktası
│   └── partner.js            # Yardımcı fonksiyonlar ve sabitler
├── index.html                # Ana HTML dosyası
├── package.json              # Proje bağımlılıkları
├── vite.config.js           # Vite yapılandırması
└── readme.md                # Bu dosya
```

## 🎯 Kullanım

1. **Miktar Girişi:** İlk kutucuğa çevirmek istediğiniz miktarı girin
2. **Para Birimi Seçimi:** Dropdown menülerden kaynak ve hedef para birimlerini seçin
3. **Hızlı Değiştirme:** Ortadaki ok simgesine tıklayarak para birimlerini yer değiştirin
4. **Çevirme:** "Çevir" butonuna tıklayarak sonucu görün
5. **Tema Değiştirme:** Sağ alt köşedeki butona tıklayarak dark/light mod arasında geçiş yapın

## 🌍 Desteklenen Para Birimleri

TRY, USD, EUR, GBP, JPY, CHF, CAD, AUD, SEK, NOK, DKK, PLN, CZK, HUF, RON, BGN, HRK, RUB, CNY, INR, KRW, SGD, HKD, MXN, BRL, ZAR, THB, MYR, PHP, IDR, ILS, NZD, ISK

## 📱 Responsive Tasarım

- **Mobil Görünüm:** Dikey düzen, dokunmatik optimizasyonu
- **Tablet Görünüm:** Orta boyut ekranlar için optimize edilmiş
- **Masaüstü Görünüm:** Yatay düzen, hover efektleri

## 🚀 Deployment

Projeyi GitHub Pages'e deploy etmek için:

```bash
npm run build
npm run deploy
```

## 🤝 Katkıda Bulunma

1. Bu projeyi fork edin
2. Yeni bir branch oluşturun (`git checkout -b feature/yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Branch'inizi push edin (`git push origin feature/yeni-ozellik`)
5. Pull Request oluşturun

## 📄 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👨‍💻 Geliştirici

**Melih Can Demir**

- GitHub: [@melihcandemir](https://github.com/melihcandemir)
- LinkedIn: [Melih Can Demir](https://linkedin.com/in/melihcandemir)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın!
