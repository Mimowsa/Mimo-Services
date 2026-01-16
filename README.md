# Mimo Services - Power Platform Freelancer Site

Static marketing site built with Next.js (App Router) for a Power Platform freelancer. Focused on credibility, SEO, and clear storytelling for enterprise decision makers.

## Stack
- Next.js (App Router)
- TypeScript
- CSS Modules
- Static export (`next.config.js` uses `output: 'export'`)

## Getting started

Install dependencies:
```
npm install
```

Run locally:
```
npm run dev
```

Build static output:
```
npm run build
```

The static export is written to `out/`.

## Project structure
```
app/
  page.tsx              # Home
  mes-projets/          # Portfolio
  a-propos/             # About
  contact/              # Contact
  components/           # Shared UI
public/
  img/                  # Logos and visuals (placeholders)
data/
  projects.ts           # Portfolio content
```

## Required images
Place the following files in `public/img`:
- `logo.png` (site logo)
- `danone.png`
- `edf.png`
- `parker-hannifin.png`
- `ics.png`
- `about-portrait.jpg`
- `about-value.png` (if you re-enable the visual)
- `icon-process.png`
- `icon-automation.png`
- `icon-users.png`

Recommended formats:
- PNG or SVG for logos/icons
- Transparent background where possible

## SEO notes
- One H1 per page
- Semantic sections and articles
- Per-page metadata in each route
- Open Graph tags and sitemap/robots provided

## Contact form
The contact form uses a `mailto:` action. It requires a configured mail client on the user machine.

## Scripts
- `npm run dev` - local dev server
- `npm run build` - production build + static export
- `npm run lint` - linting

## License
Private project.
