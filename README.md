# Proxima World — Enterprise Corporate Website

A premium, production-ready React frontend for a growing technology company. Refined editorial corporate aesthetic with a futuristic edge: deep midnight navy backgrounds, electric blue accents, generous whitespace, and tasteful scroll-driven motion.

## Tech stack

- **React 18** + **Vite 5** — fast HMR, modern build
- **Tailwind CSS 3** — utility-first styling with custom design tokens
- **React Router 6** — declarative routing
- **Zero icon dependency** — inline SVGs in `components/ui/Icons.jsx`

## Quick start

```bash
# 1. Install dependencies
npm install

# 2. Start the dev server
npm run dev          # http://localhost:5173

# 3. Production build
npm run build
npm run preview
```

> Node 18+ recommended.

## Project structure

```
src/
├── App.jsx                  # Route table
├── main.jsx                 # Entry point + providers
├── index.css                # Tailwind layers + theme tokens + animations
│
├── components/
│   ├── layout/              # Navbar, Footer, Layout, Logo (+ ProximaMark)
│   ├── ui/                  # Reusable primitives (Button, Container, Section, etc.)
│   ├── sections/            # Composable page sections (Hero, Stats, CTA, ...)
│   └── theme/               # ThemeToggle
│
├── context/
│   └── ThemeContext.jsx     # Dark / light theme provider
│
├── hooks/
│   ├── useReveal.js         # IntersectionObserver-based scroll reveal
│   └── useScrollPosition.js # Scroll-aware navbar styling
│
├── pages/                   # Route components (one per top-level page)
├── data/                    # Static content (services, industries, nav, etc.)
└── utils/
    └── cn.js                # Tiny classname merger
```

## Design system

### Brand palette

The palette is built around the Proxima World logo — deep midnight navy paired with electric cyan-blue.

**Light mode**
| Token | RGB | Hex | Use |
|-------|-----|-----|-----|
| `bg` | 241 245 251 | `#F1F5FB` | Page background (cool off-white) |
| `surface` | 255 255 255 | `#FFFFFF` | Cards |
| `ink` | 7 9 26 | `#07091A` | Body text (deep navy) |
| `accent` | 30 159 255 | `#1E9FFF` | Electric blue accent |

**Dark mode**
| Token | RGB | Hex | Use |
|-------|-----|-----|-----|
| `bg` | 4 7 18 | `#040712` | Page background (midnight — matches logo) |
| `surface` | 11 17 34 | `#0B1122` | Cards |
| `ink` | 224 232 245 | `#E0E8F5` | Body text |
| `accent` | 61 175 255 | `#3DAFFF` | Electric blue (brighter for dark) |

All colors are declared as CSS custom properties on `:root` / `.dark` and surfaced to Tailwind via `colors: { bg: 'rgb(var(--color-bg) / <alpha-value>)' }` so you can use alpha modifiers like `bg-ink/80`. **To rebrand, change the CSS variables in `src/index.css` — every component re-themes automatically.**

### Logo

The Proxima World mark is a stylised "P" with an orbital sphere, available in two forms:

- `public/proxima-mark.svg` — standalone full-color version (transparent background)
- `public/favicon.svg` — same mark on a dark navy rounded square (browser tab)
- `<ProximaMark />` — React component exported from `components/layout/Logo.jsx`

### Typography

- **Display** — Fraunces (variable serif, Google Fonts) — adds editorial sophistication that counterbalances the techy palette
- **Body** — DM Sans (Google Fonts) — clean, neutral, well-designed
- **Mono** — JetBrains Mono (used sparingly for metadata)

### Reusable utility patterns

Defined in `@layer components` in `index.css`:

- `.eyebrow` — small uppercase tagline with leading rule
- `.card` / `.card-interactive` — surface cards with hover state
- `.link-underline` — animated underline link
- `.section-y` / `.section-y-sm` — consistent vertical rhythm
- `.bg-grid` + `.bg-grid-fade` — subtle background grid
- `.bg-stars` — pinpoint star-field texture (use sparingly in dark mode)
- `.reveal` / `.reveal-stagger` — scroll-triggered animations (toggled by `useReveal`)

## Pages

| Path           | Component       | Description                                  |
| -------------- | --------------- | -------------------------------------------- |
| `/`            | `Home.jsx`      | Hero + capability overview + social proof    |
| `/about`       | `About.jsx`     | Story, values, stats                         |
| `/services`    | `Services.jsx`  | Detailed capability breakdown + approach     |
| `/industries`  | `Industries.jsx`| Industry expertise + testimonials            |
| `/careers`     | `Careers.jsx`   | Culture, benefits, open roles                |
| `/contact`     | `Contact.jsx`   | Contact form (client-side) + office details  |
| `*`            | `NotFound.jsx`  | 404                                          |

## Accessibility

- Semantic HTML (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`)
- `aria-label` on icon-only controls; `aria-expanded` / `aria-hidden` / `inert` on the mobile drawer
- Focus-visible rings on all interactive elements (accent-coloured)
- Respects `prefers-reduced-motion` — animations disabled in `index.css`
- Mobile drawer locks background scroll and is keyboard-navigable

## Performance notes

- Google Fonts use `display=swap` and are preconnected in `index.html`
- Animations are CSS-only — no JS animation library, no runtime overhead
- IntersectionObserver instances are disconnected once content is revealed
- No icon-library dependency — bundle stays lean
- Inline theme-init script prevents FOUC on first paint

## Extending

- **New page** → add a file in `src/pages/`, then a `<Route>` in `App.jsx`. Use `<PageHero>` and `<Section>` for instant rhythm.
- **New section** → drop a component in `src/components/sections/` and compose it in any page.
- **Rebrand** → update CSS variables in `src/index.css`, the logo SVGs in `public/`, the `<ProximaMark />` component, and the wordmark text in `Logo.jsx`.

---

Built with React + Vite + Tailwind. Designed for clarity, scale, and longevity.
