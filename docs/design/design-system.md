# EduFlex Design System Specification

Dokumentasi resmi sistem desain visual untuk **EduFlex LMS Landing Page**.

---

## 1. Color Tokens (Sistem Warna Semantik)

EduFlex menggunakan arsitektur warna semantik yang mendukung konteks **Dark Section** (Default Navy) dan **Light Section** (White/Light Slate) tanpa mengacak nilai hex sembarangan pada komponen.

### Dark Context Tokens (Default)
- **`--background`**: `#0B0F17` (Dark Navy - Latar Utama)
- **`--foreground`**: `#F8FAFC` (Slate 50 - Teks Utama)
- **`--surface`**: `#111827` (Slate 900 - Latar Card/Panel)
- **`--surface-muted`**: `#1E293B` (Slate 800 - Latar Muted)
- **`--surface-dark`**: `#070A0F` (Deep Dark Surface)
- **`--border`**: `rgba(255, 255, 255, 0.08)` (Border tipis)
- **`--border-hover`**: `rgba(255, 255, 255, 0.16)`

### Primary Accent (Emerald Family)
- **`--accent`**: `#10B981` (Emerald 500 - CTA & State Aktif)
- **`--accent-hover`**: `#059669` (Emerald 600 - Hover Button)
- **`--accent-muted`**: `rgba(16, 185, 129, 0.12)` (Badge & Accent Background)
- **`--accent-glow`**: `rgba(16, 185, 129, 0.2)` (Ambient Glow Effect)

### Light Section Context Tokens (`.section-light`)
- **`--background`**: `#FFFFFF`
- **`--foreground`**: `#0F172A`
- **`--surface`**: `#F8FAFC`
- **`--border`**: `#E2E8F0`

---

## 2. Typography (Hirarki Tipografi)

Menggunakan font bawaan `Geist Sans` dan `Geist Mono` dengan bobot terpilih (`400`, `600`, `700`) untuk menjaga karakter *editorial & B2B SaaS*.

- **`Display` (`.text-display`)**: `clamp(2.5rem, 5vw + 1rem, 4.5rem)`, weight `700`, leading `1.1`, tracking `-0.03em`.
- **`H1` (`.text-h1`)**: `clamp(2rem, 3vw + 1rem, 3.25rem)`, weight `700`, leading `1.15`, tracking `-0.025em`.
- **`H2` (`.text-h2`)**: `clamp(1.5rem, 2vw + 1rem, 2.25rem)`, weight `600`, leading `1.2`, tracking `-0.02em`.
- **`H3` (`.text-h3`)**: `clamp(1.25rem, 1vw + 1rem, 1.5rem)`, weight `600`, leading `1.3`.
- **`Body` (`.text-body`)**: `1rem` (16px), line-height `1.6`, weight `400`.
- **`Body Small` (`.text-body-small`)**: `0.875rem` (14px), line-height `1.57`, weight `400`.
- **`Caption` (`.text-caption`)**: `0.75rem` (12px), line-height `1.4`.
- **`Eyebrow` (`.text-eyebrow`)**: `0.75rem` (12px), weight `600`, uppercase, tracking `0.1em`, color Emerald.

---

## 3. Spacing System (Jarak & Whitespace)

- **Section Vertical Spacing**: `py-16 sm:py-24 lg:py-32` (Generous whitespace antar section).
- **Heading-to-Description**: `space-y-4` (16px).
- **Card Internal Padding**: `p-6 sm:p-8` (24px - 32px).
- **Grid Gaps**: `gap-6 lg:gap-8` (24px - 32px).

---

## 4. Container System (`Container.tsx`)

Membatasi lebar maksimal konten secara konsisten di seluruh section:
- **`default`**: `max-w-7xl` (1280px)
- **`small`**: `max-w-5xl` (1024px)
- **`large`**: `max-w-[1400px]`
- **Horizontal Padding**: `px-4 sm:px-6 lg:px-8` (Mobile hingga Desktop).

---

## 5. Border Radius Scale

- **Small (`--radius-sm`)**: `0.375rem` (6px) - Badge & small tags.
- **Medium (`--radius-md`)**: `0.75rem` (12px) - Buttons & inputs.
- **Large (`--radius-lg`)**: `1.25rem` (20px) - Cards, containers, & mockups.
- **Pill (`--radius-pill`)**: `9999px` - Badges & rounded buttons.

---

## 6. Elevation / Shadows

- **Subtle**: `shadow-subtle` (`0 1px 2px 0 rgba(0, 0, 0, 0.25)`) untuk tombol & card ringan.
- **Card**: `shadow-card` (`0 12px 32px -8px rgba(0, 0, 0, 0.4)`) untuk floating cards.
- **Glow**: `shadow-glow` (`0 0 50px -10px var(--accent-glow)`) untuk sorotan visual.

---

## 7. Button System (`Button.tsx`)

Varian tombol terstandarisasi:
- **`primary`**: Emerald fill (`bg-emerald-500 hover:bg-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20`).
- **`secondary`**: Dark slate fill (`bg-slate-800 text-slate-100 hover:bg-slate-700/80`).
- **`outline`**: Transparent dengan border (`border border-slate-700/80 text-slate-200 hover:bg-slate-800/60`).
- **`ghost`**: Text only (`hover:bg-slate-800/50 text-slate-300`).
- **State Support**: `hover`, `active` (`scale-[0.98]`), `focus-visible`, `disabled` (`opacity-50`).

---

## 8. Icon System

- Menggunakan library **`lucide-react`**.
- Ukuran standar:
  - Small / Inline: `w-3.5 h-3.5` (14px) atau `w-4 h-4` (16px).
  - Medium / Card Icon: `w-5 h-5` (20px).
  - Large / Feature Icon: `w-6 h-6` (24px).

---

## 9. Responsive Principles

- **Mobile First Grid Collapsing**: Grid 3 kolom runtuh menjadi 1 kolom di layar HP (`grid-cols-1 md:grid-cols-3`).
- **Fluid Typography**: Menggunakan `clamp()` untuk judul agar menyesuaikan skala layar secara halus.
- **Padding Scalability**: Padding bertahap dari `px-4` di HP ke `px-8` di Desktop.

---

## 10. Accessibility Baseline (A11y)

- **Color Contrast**: Memenuhi standar WCAG AA (Kontras teks terang pada background gelap `#0B0F17`).
- **Focus Indicator**: `*:focus-visible` menggunakan outline ring Emerald 2px dengan offset `2px`.
- **Reduced Motion Support**: `@media (prefers-reduced-motion: reduce)` secara otomatis mematikan durasi animasi dan smooth scroll bagi pengguna dengan sensitivitas gerakan.
