# 🧭 ZeroToOne — Turn Bold Ideas Into Launch-Ready Software

[![Next.js](https://img.shields.io/badge/Next.js-14-blue?logo=nextdotjs)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-3-38BDF8?logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer%20Motion-animate-0055FF?logo=framer)](https://www.framer.com/motion/)
[![MIT License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)

ZeroToOne is a modern, motion-enhanced marketing site built with **Next.js**, **Tailwind CSS**, and **Framer Motion**. It’s designed to impress founders, pitch confidently, and showcase your unique startup-building process.

## ✨ Key Features

- ⚡ Scroll-reactive animations with Framer Motion
- 🎯 Floating CTA and section-based navigation
- 🧠 Modular sections: Hero, What You Get, Pillars, Timeline, Case Studies, Testimonials, Founder Bio
- 💬 Dark mode toggle with `next-themes`
- 📱 Fully responsive and mobile-first
- 🔍 Scrollspy-enabled `<FloatingSectionNav />` with animated tooltips

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 🧩 Project Structure

```
src/
├── app/                # Next.js App Router pages and layout
├── components/         # Custom UI components (Hero, CTA, Nav, etc.)
├── styles/             # Global styles and Tailwind config
├── public/             # Static assets (logos, images)
```

## 🛠 Built With

- [Next.js 14](https://nextjs.org/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [Framer Motion](https://www.framer.com/motion/)
- [Lucide Icons](https://lucide.dev/)
- [next-themes](https://github.com/pacocoursey/next-themes)

## 🧠 How It Works

- **Scroll navigation:** `<FloatingSectionNav />` tracks visible sections and smoothly scrolls to anchors
- **Motion UI:** Components animate in as they enter the viewport
- **Dark mode toggle:** Fades between themes, with persisted user preference
- **Homepage sections:** are modular, animated, and brand-consistent with your values: clarity, speed, and launch-readiness

## 📦 Future Enhancements

- CMS or MDX blog integration
- SEO optimizations and Open Graph previews
- Client logos + case studies carousel
- Full accessibility audit and improvements

## 🧑‍💻 About ZeroToOne

> “We help visionaries turn raw ideas into real, working products — designed to impress, built to scale, and ready to launch.”

Learn more at [https://zerotoone.cloud](https://zerotoone.cloud)
