
# **ZeroToOne** – From Idea to Launch, Engineered for Speed & Style

> We help visionaries turn bold ideas into real, working products — designed to impress, built to scale, and ready to launch.

---

## **Tech Stack Overview**

| Layer            | Tech                                                                 |
|------------------|----------------------------------------------------------------------|
| Frontend         | Next.js 14 (App Router, Server Actions), React 18, TypeScript        |
| Styling          | Tailwind CSS (w/ Headwind conventions), Framer Motion, Radix UI      |
| UI Components    | Lucide Icons, Embla Carousel, Custom SVG Paths, Animations           |
| Backend (optional)| Edge Functions / Serverless API routes (via Vercel)                  |
| Deployment       | Vercel + Preview Environments, GitHub Actions CI (optional)          |
| Marketing Infra  | Lead Magnet Flow (PDF, Notion Planner, Email Sequence, Microsite)    |

---

## **Project Philosophy**

ZeroToOne is not just a website — it's a polished, narrative-driven digital experience engineered to guide founders from spark to ship. Every section is modular, scroll-animated, and responsive, optimized for:

- **Fast launches** with performance-first builds (LCP < 1.5s)
- **Emotional storytelling** through motion and layout
- **Component reusability** for rapid iteration and A/B testing

---

## **Core Components (with Engineering Highlights)**

### 1. **HeroSection**
- Framer Motion parallax + opacity transforms
- Scroll-reactive floating “0 → 1” watermark
- Radial gradient + vignette background layer
- Bouncing scroll cue icon and CTA reveal

### 2. **HowWeWorkTimeline**
- Two-column layout with sticky vertical scroll nav
- `<TimelineProgressNav />` supports scroll-sync, animated highlights, and a glowing progress rail
- Inline `<DiscoverMock />`, `<DesignMock />`, `<BuildMock />`, `<LaunchMock />` visual modules
- Mobile: Switches to swipeable nav with `<TimelineMobileNav />`

### 3. **ProductBuildSimulator**
- Drag-in UI blocks with blur/scale transitions
- Floating terminal preview window
- Scroll-triggered toast + optional confetti celebration
- Built using Framer Motion `useScroll`, `useTransform`, and a custom animation context

### 4. **WhatYouGet**
- `<MotionCard />` with staggered entry animations
- Click-to-expand detailed list with animated height/opacity
- Supports hover pulse accents and dynamic iconography

### 5. **CaseStudySection**
- Grid of animated cards with optional brand logos
- Icons animate on reveal, with slot support for links
- Responsive carousel (Embla) on mobile
- Modular quote pairings optionally tied to client logos

### 6. **ComparePlansTable**
- Tier-based feature breakdown using grouped rows
- Animated hover tooltips via Radix Popover
- Scroll-aware “Recommended” badge with shimmer
- Responsive: converts to swipeable card format on mobile

### 7. **CallToActionSection**
- Final CTA with floating testimonial quote
- Animated background pulse or spotlight
- “What Happens Next?” modal trigger w/ Framer transitions

---

## **Signature Features & WOW Effects**

- **Animated SVG Blueprint Paths**  
  Connect every section with flowing, scroll-reactive SVG lines in accent color (`#0284c7`), giving a cohesive architectural blueprint feel.

- **FloatingCTA Component**  
  Auto-reveals after scrolling past `#hero`, stays docked with subtle shimmer, and supports modal triggers or link navigation.

- **Lead Magnet System**  
  - PDF Checklist: “Zero to MVP in 60 Days” (polished for download/share)
  - Notion Launch Planner: Public template with guided prompts
  - Microsite: `mvp.zerotoone.so` w/ gated download and email capture
  - Email Series: 3-step automation, styled for ConvertKit or Resend

---

## **Developer Experience**

- **Tailwind + Headwind** for visually grouped utility-first class ordering
- **Modular folder structure**: Each section/component self-contained with animation, icons, and config
- **Prettier + ESLint + GitHub Actions** for formatting and CI lint checks
- **Custom VS Code Extension**: _DaVinci ERB Formatter_ for our Rails sister projects

---

## **Getting Started**

```bash
pnpm install
pnpm dev
```

> Requires: Node 18+, pnpm, and Vercel CLI (optional)

---

## **Next Up: Enhancements Coming Soon**

- [ ] Launch Teaser Animation (Discover → Design → Build → Launch → Logo Reveal)
- [ ] Floating Founder Console – Live UI for onboarding
- [ ] Testimonials carousel with motion avatars + staggered entry
- [ ] Blueprint background animation synced with scroll
- [ ] Real client logo wall and open source credits section
- [ ] Founder Resource Hub with gated downloads (PDFs, templates, Notion kits)

---

## **Contributing**

Have an idea to make the experience even smoother or more impressive?  
Open a PR or get in touch — we build fast, test obsessively, and polish every pixel.