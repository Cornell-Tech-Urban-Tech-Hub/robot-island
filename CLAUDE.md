# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Robot Island — an interactive web atlas of autonomous vehicle deployment case studies on Roosevelt Island, NYC. 50/50 split-screen layout: scrollable case study cards on the left, full-height Mapbox GL map on the right (rotated to align the island vertically). Built as a student assignment platform.

**Live URL:** `robotisland.urbantech.info`

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build
npm run process   # Process student submissions from submissions/
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

### Student Submission Workflow

**Students submit self-contained folders** via `submissions/` directory. Each folder contains:
- `case-study.md` or `index.md` — Content with frontmatter
- `boundary.geojson` — Site boundary polygon
- Media files (`.jpg`, `.png`, `.mp4`, etc.)

**Processing**: Run `npm run process` (script at `scripts/process-submissions.js`) to:
1. Copy markdown files to `src/content/case-studies/[slug].md`
2. Copy assets to `public/case-studies/[slug]/`
3. Update frontmatter paths to reference public URLs

**Template**: Students receive `docs/example-submission/` (also available as `docs/example-submission.zip`). See `docs/INSTRUCTOR-GUIDE.md` for full workflow.

**Folder naming**: Folder name becomes URL slug (e.g., `motorgate-garage` → `/case-studies/motorgate-garage`)

### Content-Driven Routing

Case studies live in `src/content/case-studies/*.md` with schema defined in `src/content/config.ts`. Each has frontmatter: `title`, `place`, `concept`, `description`, `author?`, `type` (passenger/freight/service), `geojson`, `media?` (array of `{ file, caption, featured? }`).

Routes:
- `/` — Home page with split-screen: card grid (left) + map (right)
- `/case-studies/[slug]` — Detail page with hero image, map, content body, media gallery

### Layout System

Home page uses a 50/50 flexbox split: `.content-side` (left, scrollable) and `.map-side` (right, full-height sticky map). Stacks vertically on mobile (< 768px) with map on top.

Detail pages use a traditional single-column layout with hero image, embedded map, content body, and media gallery.

### Map Integration

Map is initialized inline in page scripts (no separate Map component). Style: `mapbox://styles/mapbox/light-v11`.

**Home page map** (in `index.astro` client script):
- Center: `[-73.950, 40.762]`, zoom: `14`, bearing: `28` (rotates island to align vertically)
- On load: fetches all GeoJSON files, merges into one source, fits bounds
- Hover highlights boundaries in cyan, click navigates to case study

**Detail page map** (in `[slug].astro`):
- Shows all boundaries (gray) with current case study highlighted (blue)
- Fits map to current case study's bounds
- Bearing: `28` to match home page rotation

### GeoJSON Files

**Legacy location**: `public/geo/*.geojson` — 20 pre-created Roosevelt Island site boundaries.

**Student submissions**: `public/case-studies/[slug]/boundary.geojson` — Created by processing script from student submission folders.

All files use FeatureCollection format with Polygon geometries. Properties include `name` and `type`.

### Content Schema

```typescript
{
    title: string,          // Full title: "Place — Concept"
    place: string,          // Location name only
    concept: string,        // Short concept description
    description: string,    // One-sentence summary
    author?: string,        // Student/author name
    type: 'passenger' | 'freight' | 'service',
    geojson: string,        // "case-studies/[slug]/boundary.geojson" or legacy "geo/[slug].geojson"
    media?: Array<{
        file: string,       // "case-studies/[slug]/image.jpg" or "https://..."
        caption: string,
        featured?: boolean, // true = hero image (only one should be true)
    }>,
}
```

### Media

**Student submissions**: Media files go in `public/case-studies/[slug]/` (via processing script).

**Legacy/manual uploads**: `public/media/` still supported for backward compatibility.

**Frontmatter reference**: Can be relative paths (`"case-studies/slug/image.jpg"`), legacy paths (`"media/image.jpg"`), or external URLs (`"https://..."`).

The item with `featured: true` becomes the hero image on detail pages. Non-featured items render in a gallery grid below content. YouTube embeds supported via full URL.

### Design System

CSS custom properties in `global.css`:
- Accent: `--color-accent: #0066FF` (Electric Blue)
- Accent hover: `--color-accent-hover: #0052CC`
- Background: `--color-bg-base: #F5F7FA` (Cool gray-white)
- Header/Footer: `--color-header: #1A1A2E` / `--color-footer: #1A1A2E` (Near-black navy)
- Map colors: `--color-map-base: #0066FF`, `--color-map-highlight: #00C2FF` (Cyan)
- Fonts: Barlow (UI/nav/headings), Georgia (body)

### Map Layer IDs

Home page:
- `boundaries-fill` / `boundaries-line` — base layers (blue, low opacity)
- `boundaries-fill-hover` / `boundaries-line-hover` — hover highlight

Detail page:
- `all-boundaries-fill` / `all-boundaries-line` — all boundaries (gray)
- `active-boundary-fill` / `active-boundary-line` — current case study (blue)

## Environment Variables

`PUBLIC_MAPBOX_TOKEN` in `.env` — required for Mapbox GL. Must use `PUBLIC_` prefix for Astro client-side access.
