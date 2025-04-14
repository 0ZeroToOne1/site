
# ZeroToOne Site

![Banner](public/banner.png)

![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
![React](https://img.shields.io/badge/React-20232a?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)

Welcome to the **ZeroToOne** site repository! This is the official site for the ZeroToOne brand — a fast, modern, and impressively polished digital experience showcasing our mission, approach, and services.

## Table of Contents
1. [Project Overview](#project-overview)  
2. [Technology Stack](#technology-stack)  
3. [Features](#features)  
4. [Getting Started](#getting-started)  
5. [Usage](#usage)  
6. [Project Structure](#project-structure)  
7. [Component System](#component-system)  
8. [Recent Updates](#recent-updates)  
9. [Suggestions & “WOW” Factor Ideas](#suggestions--wow-factor-ideas)  
10. [Contributing](#contributing)  
11. [License](#license)

---

## Project Overview

ZeroToOne is a digital product studio helping founders go from raw idea to launch-ready MVP. Our site is designed to reflect that — built for clarity, conversion, and visual delight.

---

## Technology Stack

We’ve built the ZeroToOne site on a modern and flexible stack to ensure great performance and maintainability:

- **Framework**: [Next.js](https://nextjs.org/)  
- **Library**: [React](https://reactjs.org/)  
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)  
- **Animation**: [Framer Motion](https://www.framer.com/motion/)  
- **Carousel**: [Embla Carousel](https://www.embla-carousel.com/)  
- **Icons**: [Lucide React](https://lucide.dev/)  
- **Build & Deployment**: Vercel

---

## Features

- **Responsive Productized Pricing Layout** — Tabbed mobile-first UI with animated highlights
- **Framer Motion Animations** — Scroll-triggered fade-ins, floating effects, and CTA reveals
- **Parallax Hero Section** — With interactive watermark and animated scroll cue
- **Client Logo Marquee** — Brand row with subtle motion
- **Modular Components** — All homepage sections are encapsulated React components
- **Mobile-Optimized Feature Comparison** — Swipeable carousel using Embla + expandable items
- **Modern Typography and Layout** — Based on Inter, Tailwind's utility-first grid, and layered motion
- **Dark-on-Light Design** — Clean, airy feel with subtle depth and shadowing

---

## Getting Started

1. **Clone the repository**:
   ```bash
   git clone https://github.com/username/zero-to-one-site.git
   cd zero-to-one-site
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Run locally**:
   ```bash
   npm run dev
   ```
   or
   ```bash
   yarn dev
   ```

4. **Open in your browser**:
   Visit [http://localhost:3000](http://localhost:3000)

---

## Usage

- **Development**: Source files are in `app/` and `components/`. Tailwind config and PostCSS enabled.
- **Production Build**:
   ```bash
   npm run build
   ```
   or
   ```bash
   yarn build
   ```

- **Deployment**: Deploy via [Vercel](https://vercel.com) or your preferred provider.

---

## Project Structure

```plaintext
zero-to-one-site/
├─ public/              # Static assets (images, icons, etc.)
├─ app/                 # Next.js 13+ routing and pages
│  ├─ components/       # Modular, animated components
│  ├─ styles/           # Tailwind + global CSS
│  └─ layout.tsx        # Shared layout wrapper
├─ package.json         
└─ README.md
```

---

## 🧩 ZeroToOne Component System

We’ve built a component library designed to maximize reusability, polish, and animation clarity — powered by Framer Motion + Tailwind.

### ✨ Motion Helpers

| Component         | Description                                                | Example |
|------------------|------------------------------------------------------------|---------|
| `<MotionSection />` | Wraps top-level sections with fade + scale scroll animation | `id="features" className="py-24"` |
| `<MotionCard />`    | Applies hover scaling, drop shadow, and entrance fade    | Great for pricing tiers or case studies |
| `<MotionList />`    | Adds staggered `li` entrance animation                   | For timelines, bullet features |
| `<RevealText />`    | Animated fade+lift for text content                     | Used in headings and intro copy |

#### ✅ Usage Examples:

```tsx
import MotionSection from '@/components/MotionSection';
import MotionCard from '@/components/MotionCard';
import MotionList from '@/components/MotionList';
import RevealText from '@/components/RevealText';
import { motion } from 'framer-motion';

<MotionSection className="py-24 text-center bg-white">
  <RevealText className="text-3xl font-bold">
    Built to Impress. Designed to Scale.
  </RevealText>
</MotionSection>

<MotionCard className="p-6 bg-white rounded-xl shadow-md">
  <h3 className="text-xl font-semibold">Launch Plan</h3>
</MotionCard>

<MotionList className="space-y-4">
  <motion.li variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
    ✅ Feature 1
  </motion.li>
  <motion.li variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}>
    ✅ Feature 2
  </motion.li>
</MotionList>
```

---

## Recent Updates

- ✅ Scroll-linked navigation & sticky timeline with vertical progress bar
- ✅ Responsive pricing plan selector with sliding indicator + animated tab content
- ✅ Interactive “What Happens Next” component with timeline breakdown
- ✅ Signature-style founder reveal and call-to-action modal
- ✅ Launch plan carousel with feature descriptions and tier comparisons

---

## Suggestions & “WOW” Factor Ideas

- ✨ Signature hero watermark with parallax effect
- ✨ Animated badges and expanding cards
- ✨ Scroll-triggered motion on every section
- ✨ Toggle between tabbed + carousel pricing views
- ✨ Mobile-first, desktop-enhanced UX architecture

---

## Contributing

1. **Fork** this repository  
2. **Create a feature branch**  
3. **Commit** your changes  
4. **Push** to your fork  
5. **Submit a pull request**

---

## License

MIT License
