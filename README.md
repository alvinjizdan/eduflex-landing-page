# EduFlex — Customizable SaaS LMS Landing Page

Repositori ini berisi **Standalone SaaS Marketing Landing Page** untuk **EduFlex**, platform *LMS Infrastructure* terkustomisasi bagi instansi dan perusahaan.

---

## 🎯 Tujuan Proyek

Website ini difokuskan 100% sebagai **Product Marketing & Landing Page (SPA)** yang memposisikan EduFlex sebagai solusi LMS Enterprise yang fleksibel. Proyek ini terpisah penuh dari sistem backend & aplikasi internal LMS.

---

## 🛠️ Stack Teknologi

- **Framework**: Next.js 16 (App Router)
- **Bahasa**: TypeScript
- **Styling**: Tailwind CSS v4
- **Ikon**: Lucide React
- **Typography**: Geist Sans & Geist Mono (Next Font)

---

## 📁 Struktur Proyek

```text
landing-page-eduflex/
├── src/
│   ├── app/
│   │   ├── globals.css      # Global CSS, Tailwind v4, & design tokens
│   │   ├── layout.tsx       # Root layout & SEO metadata structure
│   │   └── page.tsx         # Landing page entry point
│   ├── components/          # Reusable UI & section components (Next steps)
│   │   ├── common/
│   │   ├── sections/
│   │   └── ui/
│   ├── config/              # Site & metadata configurations
│   │   └── site.ts
│   └── types/               # TypeScript interfaces & types
├── public/                  # Static assets & favicons
├── package.json
└── README.md
```

---

## 🚀 Memulai (Local Development)

1. **Jalankan Development Server**:
   ```bash
   npm run dev
   ```

2. **Buka di Browser**:
   Akses `http://localhost:3000` di peramban Anda.

3. **Build untuk Produksi**:
   ```bash
   npm run build
   ```

---

## 🎨 Arah Desain (Visual Direction)
- **Tema**: Premium B2B SaaS / Modern LMS
- **Warna Utama**: Dark Navy (`#0B0F17`), Dark Slate Surfaces (`#111827`, `#1E293B`), Emerald Green Accent (`#10B981`)
- **Prinsip**: Clean, Professional, Strong Typography, & Generous Whitespace.
