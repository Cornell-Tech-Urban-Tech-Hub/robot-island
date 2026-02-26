# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

NYC AV Atlas — an interactive web atlas of autonomous vehicle deployment case studies in New York City. Split-screen layout: scrollable case study content on the right, Mapbox GL map on the left. Modeled after https://www.atlasofurbantech.org.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
npm install       # Install dependencies
```

No test framework is configured.

## Tech Stack

- **Framework:** Astro 5 (SSR mode via `@astrojs/netlify`)
- **Mapping:** Mapbox GL 3 (`mapbox-gl@3.19.0`)
- **Content:** Astro Content Collections with Markdown frontmatter
- **Styling:** Custom CSS design system (no Tailwind/framework) in `src/styles/global.css`
- **Deployment:** Netlify
- **TypeScript:** Strict mode, extends `astro/tsconfigs/strict`

## Architecture

### Content-Driven Routing

Case studies live in `src/content/case-studies/*.md` with schema defined in `src/content/config.ts`. Each has frontmatter: `title`, `description`, `author?`, `geojson` (path to boundary file in `public/geo/`).

Routes:
- `/` — Home page with all case study cards + map showing all boundaries
- `/case-studies/[slug]` — Detail page with full markdown + map zoomed to that boundary

### Layout System

`SplitLayout.astro` provides the 50/50 split-screen (flexbox). Stacks vertically on mobile. The map container sits on the right (`position: relative; z-index: 0`), content scrolls on the left (`overflow-y: auto; max-width: 700px`).

### Map Integration

`Map.astro` initializes Mapbox GL and exposes the instance as `window.atlasMap`. Props: `lng`, `lat`, `zoom`. Style: `mapbox://styles/mapbox/light-v11`.

**Home page map behavior** (in `index.astro` client script):
- On load: fetches all GeoJSON files, calculates global bounds, adds base layers (gray fill/stroke)
- Intersection Observer watches cards; as a card enters mid-viewport, its boundary highlights (red fill/stroke) and the map flies to its bounds
- Scrolling back to top resets to global view

**Detail page map behavior** (in `[slug].astro`):
- Loads and displays the case study's GeoJSON boundary, fits map to its bounds

### GeoJSON Files

Located in `public/geo/*.geojson`. FeatureCollection format with Polygon geometries. Properties include `name` and `type`. Referenced from case study frontmatter via relative path (e.g., `geojson: 'geo/navy-yard.geojson'`).

### Map Layer IDs

- `all-case-studies` / `all-case-studies-border` — base layers for all boundaries
- `active-case-study` / `active-case-study-border` — highlighted boundary on scroll
- `case-detail-source` / `case-detail-layer` / `case-detail-border` — detail page layers

### Design System

CSS custom properties in `global.css`:
- Accent color: `--color-accent: #C8102E` (Atlas Red)
- Fonts: Work Sans (UI/nav), Merriweather (body), IBM Plex Serif (headings)
- Background: `--color-bg-base: #F9F6ED` (cream)
- Header height: `--header-height: 80px`

## Environment Variables

`PUBLIC_MAPBOX_TOKEN` in `.env` — required for Mapbox GL. Must use `PUBLIC_` prefix for Astro client-side access.
