# PROJECT CONTEXT

Single source of truth for the portfolio project.
Any AI session or collaborator should read this file first before making changes.

---

## Purpose

This is a personal portfolio website for **Giulia Ivan**, showcasing UX/UI design work, frontend development skills, and professional case studies. It serves as the primary digital presence for job applications, freelance inquiries, and professional credibility.

---

## Positioning

**UX-focused frontend/product designer.**

The portfolio communicates:

- Strong UX research and design thinking skills
- Ability to execute designs in code (HTML/CSS/JS, React)
- Experience across B2B SaaS, consumer apps, and local business websites
- Proficiency with Figma, Adobe XD, and modern frontend tools
- Professional, product-minded approach to every project

The tone is confident, clean, and industry-aligned. This is a product design portfolio, not an academic archive.

---

## Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 (Create React App) |
| Language | JavaScript (JSX) |
| Styling | CSS (separate file per component, CSS variables) |
| Routing | react-router-dom with HashRouter (for GitHub Pages compatibility) |
| Font | Poppins (Google Fonts) — weights 300, 400, 500, 600 |
| Icons | react-icons |
| Carousel | Swiper |
| Contact Form | EmailJS |
| Deployment | GitHub Pages via gh-pages |
| Hosting URL | https://giuliaivan.github.io/portfolio-updatedVersion |

**Deploy command:** `CI=false npm run deploy`
The `CI=false` prefix is required because pre-existing lint warnings in `Footer.jsx` and `Nav.jsx` cause the build to fail when `CI=true` (default on some systems).

---

## Design System

### CSS Variables (defined in `src/index.css`)

```
--color-bg: #1f1f38            (dark navy background)
--color-bg-variant: #2c2c6c    (card/section backgrounds)
--color-primary: #4db5ff        (accent blue)
--color-primary-variant: rgba(77, 181, 255, 0.4)
--color-white: #fff             (primary text)
--color-light: rgba(255, 255, 255, 0.6)  (secondary/muted text)
--transition: all 400ms ease
--container-width-lg: 75%
--container-width-md: 86%
--container-width-sm: 90%
```

### Typography

- Font family: `'Poppins', sans-serif`
- Headings: font-weight 500–600
- Body: font-weight 300–400
- Line height: 1.7 (body), 1.1–1.5 (headings)

### Border Radius

- Buttons: `0.4rem`
- Cards: `1.25rem` to `2rem`
- Images: `1.5rem`
- Pills/keywords: `2rem`

### Buttons

- `.btn` — outlined, border `1px solid var(--color-primary)`
- `.btn-primary` — filled, `background: var(--color-primary)`
- Hover: white background, dark text

### Responsive Breakpoints

- Desktop: default
- Tablet: `max-width: 1024px`
- Mobile: `max-width: 600px`

---

## UI Design Direction

- Dark theme throughout
- Generous whitespace and breathing room
- Strong typography hierarchy (large bold titles, muted subtitles)
- Minimalist aesthetic with no clutter
- Subtle section separators (thin borders, `rgba(255,255,255,0.06)`)
- Rounded containers and soft cards
- Accent color used sparingly and consistently
- Fade-in animations on scroll (IntersectionObserver)
- Image-driven storytelling in solution sections
- Professional product-case feel

---

## Tone of Voice

- Professional and confident
- Concise, direct language
- First person where appropriate ("I designed...", "We focused on...")
- No academic tone or references
- No emojis anywhere
- No filler phrases ("In conclusion...", "To summarize...")
- No excessive adjectives
- Action-oriented descriptions
- Present problems clearly, then show the solution

---

## Design Principles

1. **Clarity over decoration** — every element must serve a purpose
2. **Hierarchy first** — headings, subheadings, body text must be visually distinct
3. **Consistency** — all case studies use the same CSS classes and layout patterns
4. **Breathing room** — generous margins and padding between sections
5. **Visual storytelling** — the solution section leads with images, not text
6. **Mobile-ready** — every page must work on phone, tablet, and desktop
7. **Brand alignment** — all pages use the same color palette and typography

---

## What NOT to Include

- Emojis
- Academic language or thesis-style writing
- School project framing (no "this was a university assignment")
- Excessive color or visual noise
- Cluttered layouts or compressed sections
- Inline styles (except minor one-offs like `marginTop`)
- New CSS files for case studies (use the shared `grundfos-study.css`)
- Comments that narrate what the code does
- Hardcoded colors (always use CSS variables)

---

## Project Architecture

```
src/
├── index.js              (entry point, HashRouter wraps App)
├── index.css             (global styles, CSS variables, resets)
├── App.jsx               (routes: HomePage + case study pages)
├── assets/               (images, PDFs, textures)
└── components/
    ├── header/            (hero section of homepage)
    ├── nav/               (fixed bottom navigation)
    ├── about/             (about me section)
    ├── experience/        (skills/experience section)
    ├── services/          (services offered)
    ├── portfolio/         (project cards grid + filtering)
    ├── testimonials/      (client testimonials carousel)
    ├── contact/           (contact form via EmailJS)
    ├── footer/            (footer with links)
    └── casestudy/         (all case study page components)
        ├── grundfos-study.css   (SHARED CSS for all case studies)
        ├── GrundfosStudy.jsx
        ├── LinderStudy.jsx
        ├── CoroBeautyStudy.jsx
        ├── KromosomStudy.jsx
        ├── FindeStudy.jsx
        ├── PICitStudy.jsx
        └── Dorm8sStudy.jsx
```

---

## Current Implemented Case Studies

| # | Project | Route | Portfolio Key | Category |
|---|---|---|---|---|
| 1 | Grundfos — Eacademy Redesign | `/projects/grundfos` | 11 | design |
| 2 | Linder — Professional Matching Platform | `/projects/linder` | 12 | code |
| 3 | CoroBeauty — Cosmetology Salon Website | `/projects/corobeauty` | 6 | code, design |
| 4 | Kromosom — LGBTQ+ Cafe-Bar Website | `/projects/kromosom` | 2 | code, design |
| 5 | Finde — Dorm Community App | `/projects/finde` | 8 | design |
| 6 | PICit — Dispatch View Redesign | `/projects/picit` | 5 | design |
| 7 | Dorm8s — Shared Living Management App | `/projects/dorm8s` | 4 | code, design |

---

## Case Study Structure Rules

Every case study page must follow this structure. All use the shared `grundfos-study.css` and the `cs-*` class prefix.

### Required Boilerplate

```jsx
import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import './grundfos-study.css'
import heroImage from '../../assets/[image]'

const [Name]Study = () => {
  const navigate = useNavigate()

  useEffect(() => {
    window.scrollTo(0, 0)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('cs-visible')
        })
      },
      { threshold: 0.1 }
    )
    const elements = document.querySelectorAll('.cs-animate')
    elements.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="cs-page">
      {/* ... sections ... */}
    </div>
  )
}
```

### Section Order

1. **Back button** — `cs-back`, navigates to `/`
2. **Hero** — `cs-hero` with title (`cs-hero__title`), subtitle, description, meta row, hero image
3. **The Challenge** — problem context and bullet points
4. **Problem Statement** — `cs-highlight-card` with italic "How might we..." quote
5. **Understanding the Users** — `cs-cards-grid` with two `cs-user-card` columns, followed by `cs-insight`
6. **Defining the Direction** — numbered priorities, optionally `cs-keyword-row` for brand attributes
7. **The Solution** — `cs-section--solution` with alternating `cs-solution-block` / `cs-solution-block--reverse` grids (text + image)
8. **Testing & Iteration** (if applicable) — findings and changes
9. **My Contribution** — `cs-contribution-list` (two-column grid)
10. **Outcome** — final results list with closing statement
11. **Closing** — `cs-closing` with prototype/demo link, optional GitHub link, and "Back to Portfolio" button

### Available CSS Components

| Class | Purpose |
|---|---|
| `cs-page` | Page wrapper, max-width 1100px |
| `cs-back` | Top back button |
| `cs-hero`, `cs-hero__title`, `cs-hero__subtitle`, `cs-hero__description` | Hero section |
| `cs-hero__meta`, `cs-hero__meta-item`, `cs-meta-label`, `cs-meta-value` | Horizontal meta row |
| `cs-hero__image` | Hero image with rounded corners |
| `cs-section`, `cs-section__inner`, `cs-section__heading`, `cs-section__text` | Standard section |
| `cs-highlight-card`, `cs-highlight-text` | Problem statement card |
| `cs-cards-grid`, `cs-user-card`, `cs-user-card__title`, `cs-user-card__label`, `cs-user-card__list` | Two-column user cards |
| `cs-insight`, `cs-insight__label`, `cs-insight__text` | Key insight callout |
| `cs-list`, `cs-list--numbered` | Bullet and numbered lists |
| `cs-section--solution`, `cs-solution-block`, `cs-solution-block--reverse` | Alternating text/image grid |
| `cs-solution-block__title`, `cs-solution-block__text`, `cs-solution-block__image` | Solution block internals |
| `cs-image-placeholder` | Placeholder for screenshots (dashed border) |
| `cs-persona-card`, `cs-persona-card__header`, `cs-persona-card__body`, `cs-persona-card__column` | Persona card with two-column layout |
| `cs-keyword-row`, `cs-keyword` | Pill-style keyword tags |
| `cs-contribution-list` | Two-column contribution grid |
| `cs-section--outcome` | Outcome section (reduced bottom margin) |
| `cs-closing`, `cs-closing__inner`, `cs-closing__back` | Bottom CTA section |
| `cs-section__text--closing` | Closing paragraph with top border |
| `cs-section__text--result` | Accent-colored result text |
| `cs-animate`, `cs-visible` | Scroll fade-in animation |

### Wiring Up a New Case Study

1. Create `src/components/casestudy/[Name]Study.jsx`
2. Import and use `./grundfos-study.css` (do NOT create a new CSS file)
3. Add route in `src/App.jsx`: `<Route path="/projects/[slug]" element={<[Name]Study />} />`
4. Add `caseStudy: "/projects/[slug]"` to the project entry in `src/components/portfolio/Portfolio.jsx`
5. Verify build: `CI=false npx react-scripts build`
6. Deploy: `CI=false npm run deploy`

---

## Rules for Future Case Studies

- Always reuse the shared CSS (`grundfos-study.css`). If a new component is needed, add it there.
- All class names must use the `cs-` prefix.
- Follow the established section order.
- Use `cs-animate` on every section and solution block for scroll animations.
- Use image placeholders (`cs-image-placeholder`) when screenshots are not yet available.
- Every solution subsection must alternate direction (normal, then `--reverse`).
- The closing section must include at least a prototype/demo link and a "Back to Portfolio" button.
- Test the build before deploying. Fix any lint errors introduced.
- Keep all text professional, concise, and action-oriented.
