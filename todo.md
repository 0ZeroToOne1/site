
# ZeroToOne Motion Utilities – Project TODO

A working checklist of what's been completed and what's recommended to enhance further.

---

## ✅ Completed

### Setup & Tooling
- [x] ESLint and Prettier config files
- [x] VS Code auto-format on save
- [x] GitHub Action for `lint` + `format` on PRs
- [x] Pre-configured `package.json` scripts

### Motion Utilities Library
- [x] `MotionReveal.tsx`
- [x] `StaggerReveal.tsx`
- [x] `SlideReveal.tsx`
- [x] `ZoomReveal.tsx`
- [x] `ParallaxLayer.tsx`
- [x] `AnimatedPath.tsx`
- [x] `variants.ts` and `constants.ts`

### Docs & Dev Experience
- [x] `motion_utilities_library.md` – full documentation
- [x] `<MotionDocsPage />` – renders docs as styled markdown page
- [x] Packaged all components + config into dev-ready zip

---

## ✳️ Recommended Next Steps

### Routes & Docs
- [ ] Add route: `/docs/motion` or `/motion-docs`
- [ ] Copy `motion_utilities_library.md` to `/public` so it can be fetched
- [ ] Include a link to this doc in footer or nav
- [ ] Create sidebar / ToC for docs navigation

### Showcase / Playground
- [ ] Add demo grid showing each motion utility live
- [ ] Optional: Set up Storybook for internal testing
- [ ] Build a “Motion Playground” page (Framer-style control panel)

### Performance & Polish
- [ ] Debounce/throttle scroll triggers on `AnimatedPath` and `ParallaxLayer`
- [ ] Add smooth anchor scrolls to animated sections
- [ ] Use motion blur or spring modifiers for high-speed parallax

### Bonus WOW Ideas
- [ ] SVG section connectors (wavy dividers, animated pipes, etc.)
- [ ] Scroll-reactive mini map or timeline tracker
- [ ] Motion-enabled testimonial / logo marquees

---

**Keep this list updated as you ship new motion features.**
