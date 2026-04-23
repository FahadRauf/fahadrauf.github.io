# Fahad Rauf — Portfolio

Personal portfolio for **Fahad Rauf**, a Full-Stack Developer and Tableau Specialist. Built with React + Vite, styled with a peach / mint / cream palette, and animated with framer-motion on top of a hand-drawn SVG doodle background.

## Stack

- React 18 + Vite
- framer-motion (animations)
- react-icons (brand icons)
- Plain CSS with design tokens (`src/styles/tokens.css`)

## Sections

- **Home** — animated hero, blob-framed portrait, floating chips
- **About** — journey, stats, and four skill cards
- **Projects** — filterable grid (All / Web & App / Tableau Viz)
- **Contact** — email + GitHub / X / Instagram / Tableau Public links

## Run

```bash
npm install
npm run dev
```

Then open the URL Vite prints (default `http://localhost:5173`).

## Build for production

```bash
npm run build
npm run preview
```

The production bundle lands in `dist/`.

## Assets

All images live in `public/img/` and are referenced with absolute `/img/...` URLs.

- `background.jpg` — Home portrait
- `fs1.png` — Bike Rental App
- `screenshot42.png` — Ludo Desktop _(drop this file in `public/img/` to replace the placeholder)_
- `screenshot45.png` — IMDB Top 1000
- `screenshot60.png` — COVID-19 Global Impact
- `screenshot63.png` — Customer Churn
- `screenshot88.png` — Student Habits vs Performance

If an image fails to load, the project card renders a styled placeholder with a "Screenshot coming soon" label, so the site never breaks.

## Editing content

- Projects — `src/data/projects.js`
- Socials / email — `src/data/socials.js`
- Copy for hero/about — `src/sections/Home.jsx`, `src/sections/About.jsx`
- Colors, fonts, radii — `src/styles/tokens.css`

## Accessibility

- Semantic landmarks (`<header>`, `<main>`, `<section aria-labelledby>`, `<footer>`).
- Focus rings on every interactive element.
- Respects `prefers-reduced-motion`.
