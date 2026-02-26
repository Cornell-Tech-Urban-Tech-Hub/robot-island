# Atlas Redesign Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Redesign NYC AV Atlas to match the visual style of atlasofurbantech.org — traditional scrolling layout with embedded interactive map, burgundy header bar, Barlow headings, Georgia body text, image cards.

**Architecture:** Replace split-screen layout with traditional full-page scroll. Home page: burgundy header → hero → full-width interactive Mapbox map (all boundaries, click-to-navigate, hover popups) → case study card grid → footer. Detail page: burgundy header → hero image with overlaid title → embedded map (all boundaries, current highlighted) → single-column content body → footer.

**Tech Stack:** Astro 5, Mapbox GL 3, Barlow font (Google Fonts), Georgia serif, Netlify SSR.

---

### Task 1: Update global styles and typography

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/layouts/Layout.astro`

**Step 1: Replace font imports and CSS variables in `global.css`**

Replace the entire `global.css` with updated palette, fonts, and base styles:

- Swap Google Fonts import: drop Work Sans + IBM Plex Serif, add Barlow (400,500,600,700)
- Change `--font-sans` to `'Barlow', sans-serif`
- Change `--font-serif` to `Georgia, serif`
- Remove `--font-heading` (use `--font-sans` for headings)
- Change `--color-accent` to `#AA142D`
- Change `--color-accent-hover` to `#8B0F24`
- Change `--color-bg-base` to `#fef6ea`
- Change `--color-text-primary` to `hsla(0,0%,0%,0.8)`
- Remove split-layout z-index vars (`--z-map`, `--z-sidebar`)
- Keep `--z-header`, add `--z-modal`
- Remove `--header-height` (header is now in normal flow, not fixed offset)
- Base font-size: 16px (not 18px)
- Body font: `var(--font-serif)` (Georgia)
- Headings: `var(--font-sans)` (Barlow)
- Buttons: update `.btn-outline` accent color

**Step 2: Update `Layout.astro` font link**

Change the Google Fonts `<link>` in `<head>` to load Barlow instead of Work Sans + IBM Plex Serif + Merriweather.

**Step 3: Verify dev server starts**

Run: `npm run dev`
Expected: Server starts, pages load (will look broken until later tasks complete — that's fine)

**Step 4: Commit**

```bash
git add src/styles/global.css src/layouts/Layout.astro
git commit -m "style: update palette and typography to match Atlas of Urban Tech"
```

---

### Task 2: Rewrite Navigation component as burgundy header bar

**Files:**
- Modify: `src/components/Navigation.astro`

**Step 1: Rewrite Navigation.astro**

Replace the transparent floating nav with a solid burgundy header bar:

- Full-width, `background-color: #AA142D`, padding `1rem 0`
- Inner container: flex, space-between, align-items center, max-width 1200px, margin auto, padding 0 2rem
- Left: logo/brand link to `/` — "The Atlas of NYC AV Futures" in white, Barlow font. "Atlas" slightly larger/bolder.
- Right: nav links in white, Barlow 600 weight, no underline by default, underline on hover. Links: "About the Project", "The Research", "Explore Map" (href `/#map`)
- No conditional hiding of brand on home page — always show it
- Mobile: stack to column, center links

**Step 2: Verify navigation renders**

Run: `npm run dev`, check both `/` and a case study page.
Expected: Burgundy bar at top on both pages.

**Step 3: Commit**

```bash
git add src/components/Navigation.astro
git commit -m "feat: burgundy header bar matching Atlas of Urban Tech"
```

---

### Task 3: Add image field to content schema and case studies

**Files:**
- Modify: `src/content/config.ts`
- Modify: `src/content/case-studies/navy-yard.md`
- Modify: `src/content/case-studies/jfk-terminal.md`
- Modify: `src/content/case-studies/roosevelt-island.md`
- Create: `public/images/navy-yard.jpg` (placeholder)
- Create: `public/images/jfk-terminal.jpg` (placeholder)
- Create: `public/images/roosevelt-island.jpg` (placeholder)

**Step 1: Update content schema**

In `config.ts`, add `image` field to the schema:
```typescript
image: z.string().optional() // path like 'images/navy-yard.jpg'
```

**Step 2: Create placeholder images**

Generate three simple 800x400 SVG placeholder images in `public/images/` (solid color blocks with text overlay). Use SVG so no external dependencies needed:
- `navy-yard.svg` — dark blue-gray (#2c3e50) with white text "Brooklyn Navy Yard"
- `jfk-terminal.svg` — dark teal (#1a5276) with white text "JFK Airport"
- `roosevelt-island.svg` — dark green (#1e4d2b) with white text "Roosevelt Island"

**Step 3: Add image frontmatter to each case study**

Add `image: images/navy-yard.svg` (etc.) to each markdown file's frontmatter.

**Step 4: Verify content collection loads**

Run: `npm run dev`
Expected: No schema errors, pages still render.

**Step 5: Commit**

```bash
git add src/content/config.ts src/content/case-studies/ public/images/
git commit -m "feat: add image field to case study schema with placeholders"
```

---

### Task 4: Rewrite home page — hero + map + card grid

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Rewrite index.astro**

Replace the entire file. New structure (no SplitLayout import):

```
Layout > main.atlas-home
  section.hero          — title + subtitle
  section.map-section   — full-width Mapbox map container (id="map", 500px height)
  section.case-studies  — h2 "Case Studies" + responsive card grid
  footer.atlas-footer   — simple footer text
```

**Hero section:**
- Cream background (`--color-bg-base`)
- Container centered, max-width 1200px
- `h1`: "The Atlas of NYC AV Futures" — "Atlas" in accent color
- `p`: subtitle in Georgia

**Map section:**
- Full-width div, 500px height, id="map"
- Map initialization inline (since Map.astro will be refactored in Task 5)

**Case study grid:**
- CSS grid: `grid-template-columns: repeat(auto-fill, minmax(320px, 1fr))`, gap 2rem
- Each card: `<a>` wrapping an `<article>` — link to `/case-studies/${slug}`
- Card structure: image div (200px height, object-fit cover, background-image fallback), content area with title (h3, Barlow), description (Georgia), author, "Read more →" text
- Hover: `transform: translateY(-4px)`, `box-shadow` increase
- White background, subtle border, border-radius 4px

**Map client script:**
- Import mapboxgl, initialize map in `#map` container
- Style: `mapbox://styles/mapbox/light-v11`
- On load: fetch all GeoJSON files, merge features, add source `all-boundaries`
- Layers: fill (accent color, 0.15 opacity) + line (accent, 1px)
- Hover behavior: on `mouseenter` a feature — highlight it (increase fill opacity to 0.4, line width to 3), show popup with case study name. On `mouseleave` — reset.
- Click behavior: on click a feature — navigate to `/case-studies/${slug}`. To do this, each GeoJSON feature needs a `slug` property added at load time (map geojson URL to slug).
- Fit bounds to all features with padding.
- Expose `window.atlasMap` for potential reuse.

**Step 2: Verify home page renders**

Run: `npm run dev`
Expected: Hero, map with 3 boundaries, card grid with images, footer. Hover boundaries shows popup. Click navigates.

**Step 3: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rewrite home page as traditional scroll with map and card grid"
```

---

### Task 5: Rewrite case study detail page

**Files:**
- Modify: `src/pages/case-studies/[slug].astro`

**Step 1: Rewrite [slug].astro**

Replace entirely. New structure (no SplitLayout):

```
Layout > main.case-detail
  section.hero-image    — full-width image with overlaid title
  section.detail-map    — embedded map, 400px, all boundaries + highlight
  article.content-body  — centered single column, max-width 800px
```

**Hero image section:**
- Full-width, min-height 300px, background-image from `study.data.image`
- Position relative, dark gradient overlay (for text readability)
- Back link `← Back to Atlas` positioned top-left over image
- Title `h1` positioned bottom-left, white text with white background highlight (box-shadow trick from Atlas: `background: white; color: #333; box-decoration-break: clone; padding: 0.2em 0.5em; box-shadow: 0.5em 0 0 white, -0.5em 0 0 white`)
- Author below title in muted text

**Map section:**
- Container max-width 1200px centered, 400px height map
- Initialize Mapbox in this container
- Load ALL geojson files, add as `all-boundaries` source (gray fill 0.15, gray line 1px)
- Load current case study's geojson, add as `active-boundary` source (accent fill 0.4, accent line 3px)
- Fit bounds to current case study with generous padding
- Clicking other boundaries navigates to those case studies (same slug mapping as home page)
- Hover popup on other boundaries showing their names

**Content body:**
- Max-width 800px, margin auto, padding 3rem 2rem
- Renders `<Content />` from markdown
- Georgia body text, Barlow headings
- Blockquote style: accent left border, light background
- Standard markdown element styling (lists, code blocks, etc.)

**Step 2: Verify a case study page renders**

Run: `npm run dev`, navigate to `/case-studies/navy-yard`
Expected: Hero image, map with all 3 boundaries (navy yard highlighted), content body.

**Step 3: Commit**

```bash
git add src/pages/case-studies/\\[slug\\].astro
git commit -m "feat: rewrite case study detail page with hero image, embedded map, content body"
```

---

### Task 6: Add footer component and clean up dead code

**Files:**
- Create: `src/components/Footer.astro`
- Modify: `src/pages/index.astro` (use Footer component)
- Modify: `src/pages/case-studies/[slug].astro` (use Footer component)
- Delete: `src/layouts/SplitLayout.astro`
- Delete: `src/components/Map.astro` (map init is now inline in pages)
- Delete: `src/components/Welcome.astro` (unused boilerplate)

**Step 1: Create Footer.astro**

Dark footer (#333 background, #eee text):
- Container centered, max-width 1200px
- Left: "The Atlas of NYC AV Futures" brand text
- Right: nav links (same as header) + "A research project exploring urban tech futures."
- Padding 3rem, flex layout

**Step 2: Import and use Footer in both pages**

Add `<Footer />` at bottom of index.astro and [slug].astro (replace inline footer markup).

**Step 3: Delete dead files**

Remove `SplitLayout.astro`, `Map.astro`, `Welcome.astro`.

**Step 4: Verify everything still works**

Run: `npm run dev`
Expected: Both pages render correctly. No console errors about missing imports.

**Step 5: Run build**

Run: `npm run build`
Expected: Clean build, no errors.

**Step 6: Commit**

```bash
git add -A
git commit -m "chore: add footer component, remove dead split-layout code"
```

---

### Task 7: Polish and responsive design pass

**Files:**
- Modify: `src/styles/global.css`
- Modify: `src/pages/index.astro`
- Modify: `src/pages/case-studies/[slug].astro`

**Step 1: Add responsive breakpoints**

- At `max-width: 768px`: card grid to single column, map height 350px, hero title smaller (1.8rem), reduce content padding
- At `max-width: 480px`: further reduce spacing, map height 280px
- Footer stacks vertically on mobile

**Step 2: Polish transitions**

- Card hover: `transition: transform 0.25s ease, box-shadow 0.25s ease`
- Map boundary hover: smooth opacity transition
- Nav link underline animation (scaleX from 0 to 1)

**Step 3: Verify on narrow viewport**

Run: `npm run dev`, resize browser to mobile width.
Expected: Everything stacks cleanly, map still functional, no horizontal scroll.

**Step 4: Final build check**

Run: `npm run build`
Expected: Clean build.

**Step 5: Commit**

```bash
git add -A
git commit -m "style: responsive design and transition polish"
```
