# Coolz Ire Portfolio - Technical Specification

---

## Component Inventory

### shadcn/ui Components (Built-in)

| Component | Purpose | Customization |
|-----------|---------|---------------|
| Button | CTAs, form submit | Custom colors, glow effect |
| Card | Project cards, stats | Dark theme, hover lift |
| Input | Contact form | Dark styling, focus glow |
| Textarea | Contact form message | Dark styling |
| Badge | Tech stack tags | Pill shape, gradient |
| Separator | Section dividers | Subtle color |
| Sheet | Mobile navigation | Slide from right |

### Custom Components to Build

| Component | Purpose | Location |
|-----------|---------|----------|
| Navigation | Fixed header with scroll effect | `components/Navigation.tsx` |
| MobileNav | Hamburger menu for mobile | `components/MobileNav.tsx` |
| Hero | Main hero section | `sections/Hero.tsx` |
| About | About section with stats | `sections/About.tsx` |
| Projects | Project grid with cards | `sections/Projects.tsx` |
| ProjectCard | Individual project card | `components/ProjectCard.tsx` |
| Experience | Timeline layout | `sections/Experience.tsx` |
| TimelineItem | Individual timeline entry | `components/TimelineItem.tsx` |
| Contact | Contact form + info | `sections/Contact.tsx` |
| Footer | Site footer | `sections/Footer.tsx` |
| TechBadge | Animated tech badge | `components/TechBadge.tsx` |
| StatCard | Animated stat counter | `components/StatCard.tsx` |
| SkillCategory | Skill group display | `components/SkillCategory.tsx` |
| SocialLinks | Social icon links | `components/SocialLinks.tsx` |
| ScrollReveal | Scroll animation wrapper | `components/ScrollReveal.tsx` |
| GradientText | Animated gradient text | `components/GradientText.tsx` |
| ParticleBackground | Animated background | `components/ParticleBackground.tsx` |

---

## Animation Implementation Table

| Animation | Library | Implementation Approach | Complexity |
|-----------|---------|------------------------|------------|
| Page load sequence | Framer Motion | `motion` components with staggerChildren | Medium |
| Hero text reveal | Framer Motion | Word-by-word stagger with variants | Medium |
| Gradient text animation | CSS | Background gradient with animation | Low |
| Tech badge pop-in | Framer Motion | Scale + opacity with stagger | Low |
| Navigation scroll effect | React + CSS | useScroll hook, conditional classes | Low |
| Scroll reveal (sections) | Framer Motion | whileInView with viewport options | Medium |
| Card hover lift | CSS/Framer | translateY + shadow transition | Low |
| Stats counter | Custom hook | useCountUp with Intersection Observer | Medium |
| Timeline draw | Framer Motion | SVG path animation | Medium |
| Timeline item reveal | Framer Motion | x/opacity animation based on position | Medium |
| Button hover glow | CSS | Box-shadow transition | Low |
| Link underline | CSS | Width animation on ::after | Low |
| Form input focus | CSS | Border + box-shadow transition | Low |
| Particle background | Canvas/CSS | Floating particles with CSS animation | Medium |
| Mobile menu slide | Framer Motion | Sheet component + AnimatePresence | Low |

---

## Animation Library Choices

### Primary: Framer Motion
**Rationale:**
- Native React integration
- Declarative API
- Built-in scroll animations (whileInView)
- AnimatePresence for mount/unmount
- Gesture support
- Excellent performance

### Secondary: CSS Animations
**Use for:**
- Simple hover effects
- Gradient animations
- Continuous background effects
- Transitions

### Custom Hooks
- `useScroll` - Track scroll position
- `useInView` - Intersection observer wrapper
- `useCountUp` - Animated number counter

---

## Project File Structure

```
/mnt/okcomputer/output/app/
├── public/
│   ├── images/
│   │   ├── hero-bg.jpg
│   │   ├── project-1.jpg
│   │   ├── project-2.jpg
│   │   ├── project-3.jpg
│   │   ├── project-4.jpg
│   │   └── project-5.jpg
│   └── cv.pdf
├── cv.typ
├── src/
│   ├── components/
│   │   ├── ui/              # shadcn components
│   │   ├── Navigation.tsx
│   │   ├── MobileNav.tsx
│   │   ├── ProjectCard.tsx
│   │   ├── TimelineItem.tsx
│   │   ├── TechBadge.tsx
│   │   ├── StatCard.tsx
│   │   ├── SkillCategory.tsx
│   │   ├── SocialLinks.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── GradientText.tsx
│   │   └── ParticleBackground.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   ├── Experience.tsx
│   │   ├── Contact.tsx
│   │   └── Footer.tsx
│   ├── hooks/
│   │   ├── useScroll.ts
│   │   ├── useInView.ts
│   │   └── useCountUp.ts
│   ├── lib/
│   │   └── utils.ts
│   ├── data/
│   │   ├── projects.ts
│   │   ├── skills.ts
│   │   └── experience.ts
│   ├── styles/
│   │   └── globals.css
│   ├── App.tsx
│   └── main.tsx
├── index.html
├── tailwind.config.js
├── vite.config.ts
└── package.json
```

---

## Dependencies to Install

### Core (via init script)
- React 18+
- TypeScript
- Vite
- Tailwind CSS
- shadcn/ui components

### Animation
```bash
npm install framer-motion
```

### Icons
```bash
npm install lucide-react
```

### Fonts (via Google Fonts in CSS)
- Space Grotesk
- Inter
- JetBrains Mono

---

## Tailwind Configuration Extensions

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-dark': '#104F55',
        'primary': '#32746D',
        'primary-light': '#9EC5AB',
        'dark': '#01200F',
        'darker': '#011502',
        'navy': '#14213D',
        'royal-blue': '#274C92',
        'slate': '#5E7099',
        'charcoal': '#2D2D2D',
        'off-white': '#F5F5F5',
      },
      fontFamily: {
        'heading': ['Space Grotesk', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
        'mono': ['JetBrains Mono', 'monospace'],
      },
      animation: {
        'gradient': 'gradient 8s linear infinite',
        'float': 'float 6s ease-in-out infinite',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        gradient: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
      },
    },
  },
}
```

---

## Key Implementation Notes

### Scroll Animation Pattern
```tsx
// Using Framer Motion whileInView
<motion.div
  initial={{ opacity: 0, y: 40 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-100px" }}
  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
>
  {children}
</motion.div>
```

### Stagger Children Pattern
```tsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};
```

### Counter Animation Hook
```tsx
// useCountUp.ts
// Animates from 0 to target when element is in view
// Duration: 2s
// Easing: easeOutExpo
```

### Navigation Scroll Effect
```tsx
// Track scroll position
// Add 'scrolled' class when > 50px
// Transition background over 300ms
```

---

## Performance Considerations

1. **Image Optimization**
   - Use WebP format where possible
   - Lazy load below-fold images
   - Proper sizing with srcset

2. **Animation Performance**
   - Use transform/opacity only
   - Add will-change sparingly
   - Respect prefers-reduced-motion

3. **Code Splitting**
   - Lazy load sections if needed
   - Dynamic imports for heavy components

4. **Font Loading**
   - Use font-display: swap
   - Preload critical fonts
