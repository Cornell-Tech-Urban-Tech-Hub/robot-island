# Robot Island Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Rename NYC AV Atlas to Robot Island, refocus on Roosevelt Island with 20 location-based case studies, update branding/palette, deploy to robotisland.urbantech.info.

**Architecture:** Same Astro 5 SSR + Mapbox GL + Content Collections architecture. Content schema gets a `media` array with `featured` flag. Old NYC case studies replaced with 20 Roosevelt Island locations. Fresh color palette (electric blue / cool gray). Infrastructure: rename GitHub repo, Netlify site, Route53 CNAME.

**Tech Stack:** Astro 5, Mapbox GL 3, Netlify, AWS Route53, GitHub CLI, Netlify CLI

**No test framework** — verify each task with `npm run build` (must succeed with zero errors).

---

### Task 1: Update Color Palette and CSS Design System

**Files:**
- Modify: `src/styles/global.css`

**Step 1: Replace CSS custom properties**

Change the `:root` block in `global.css`:

```css
:root {
  /* Color Palette - Robot Island */
  --color-bg-base: #F5F7FA;        /* Cool gray-white */
  --color-bg-alt: #E8EDF2;         /* Slightly darker cool gray */
  --color-bg-white: #FFFFFF;

  --color-text-primary: hsla(220, 15%, 15%, 0.9);
  --color-text-secondary: #555555;
  --color-text-muted: #888888;

  /* Primary Accent - Electric Blue */
  --color-accent: #0066FF;
  --color-accent-hover: #0052CC;

  /* Header/Footer - Near-black Navy */
  --color-header: #1A1A2E;
  --color-footer: #1A1A2E;

  /* Map highlight */
  --color-map-highlight: #00C2FF;   /* Cyan */
  --color-map-base: #0066FF;

  --color-border: #D1D9E0;

  /* Typography — unchanged */
  --font-sans: 'Barlow', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  --font-serif: Georgia, serif;

  --max-width: 1200px;
  --transition-fast: 150ms ease-in-out;
  --transition-base: 300ms ease-in-out;
  --z-header: 1000;
  --z-modal: 2000;
}
```

Also update `.btn-outline` to use `var(--color-accent)` (already does, just verify).

Update the comment at top of file from "NYC AV Atlas" to "Robot Island".

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds

**Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "style: update color palette to Robot Island electric blue theme"
```

---

### Task 2: Rebrand Navigation and Footer

**Files:**
- Modify: `src/components/Navigation.astro`
- Modify: `src/components/Footer.astro`

**Step 1: Update Navigation.astro**

Change brand text from `The <strong>Atlas</strong> of NYC AV Futures` to `<strong>Robot</strong> Island`.

Change header background from `#AA142D` to `var(--color-header)` (which is `#1A1A2E`).

Update nav links — remove "About the Project" and "The Research", keep "Explore Map":
```html
<nav class="nav-links">
    <a href="/#map-section">Explore Map</a>
</nav>
```

**Step 2: Update Footer.astro**

Change footer title from `The <strong>Atlas</strong> of NYC AV Futures` to `<strong>Robot</strong> Island`.

Change footer background from `#333` to `var(--color-footer)`.

Update footer tagline to: `Autonomous vehicle futures on Roosevelt Island.`

Update footer links to match nav (remove About/Research, keep Explore Map).

**Step 3: Verify build**

Run: `npm run build`

**Step 4: Commit**

```bash
git add src/components/Navigation.astro src/components/Footer.astro
git commit -m "style: rebrand navigation and footer to Robot Island"
```

---

### Task 3: Update Layout and Meta Tags

**Files:**
- Modify: `src/layouts/Layout.astro`
- Modify: `package.json`

**Step 1: Update Layout.astro**

Change default description from `"A global atlas of case studies for autonomous vehicle futures in NYC."` to `"Autonomous vehicle case studies on Roosevelt Island."`.

**Step 2: Update package.json**

Change `"name": "nyc-av-atlas"` to `"name": "robot-island"`.

**Step 3: Verify build**

Run: `npm run build`

**Step 4: Commit**

```bash
git add src/layouts/Layout.astro package.json
git commit -m "chore: rename project to robot-island, update meta tags"
```

---

### Task 4: Update Content Schema

**Files:**
- Modify: `src/content/config.ts`

**Step 1: Update the Zod schema**

Replace the schema to add `media` array and remove standalone `image`:

```typescript
import { z, defineCollection } from 'astro:content';

const caseStudies = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        description: z.string(),
        author: z.string().optional(),
        geojson: z.string(),
        media: z.array(z.object({
            file: z.string(),
            caption: z.string(),
            featured: z.boolean().optional(),
        })).optional(),
    })
});

export const collections = {
    'case-studies': caseStudies,
};
```

**Step 2: Verify build**

Run: `npm run build`
Expected: May fail because existing case studies still have `image` field. That's fine — we'll fix in Task 5.

**Step 3: Commit**

```bash
git add src/content/config.ts
git commit -m "feat: update content schema with media array and featured flag"
```

---

### Task 5: Delete Old Content and GeoJSON

**Files:**
- Delete: `src/content/case-studies/navy-yard.md`
- Delete: `src/content/case-studies/jfk-terminal.md`
- Delete: `src/content/case-studies/roosevelt-island.md`
- Delete: `public/geo/navy-yard.geojson`
- Delete: `public/geo/jfk-terminal.geojson`
- Delete: `public/geo/roosevelt-island.geojson`
- Delete: `public/images/navy-yard.svg`
- Delete: `public/images/jfk-terminal.svg`
- Delete: `public/images/roosevelt-island.svg`

**Step 1: Remove old files**

```bash
rm src/content/case-studies/navy-yard.md
rm src/content/case-studies/jfk-terminal.md
rm src/content/case-studies/roosevelt-island.md
rm public/geo/navy-yard.geojson
rm public/geo/jfk-terminal.geojson
rm public/geo/roosevelt-island.geojson
rm -f public/images/navy-yard.svg
rm -f public/images/jfk-terminal.svg
rm -f public/images/roosevelt-island.svg
```

**Step 2: Commit**

```bash
git add -u
git commit -m "chore: remove old NYC case studies, GeoJSON, and images"
```

---

### Task 6: Create Student Template

**Files:**
- Create: `src/content/case-studies/_TEMPLATE.md`

**Step 1: Write the template file**

```markdown
---
title: "[Location Name] — [Short AV Concept]"
description: "One-sentence summary of the case study."
author: ""
geojson: "geo/[slug].geojson"
media:
  - file: "media/[slug]-01.jpg"
    caption: "Description of this image or video"
    featured: true
  - file: "media/[slug]-02.jpg"
    caption: "Description of this image or video"
---

## Summary

[2-3 sentences describing the site and the autonomous vehicle intervention you are proposing.]

## AV Use Case

### What AVs are involved?

[Describe the vehicle types, fleet size, and technology level (e.g., Level 4 autonomous shuttles, delivery robots, autonomous freight vehicles).]

### What are they doing?

[Describe the service or operation — routes, schedules, passenger or cargo interactions, operating hours.]

### Why here?

[Why is this specific Roosevelt Island location suited to this AV deployment? What about the built environment, traffic patterns, or community needs makes it a good fit?]

## Stakeholders

### Who participates?

[Operators, agencies, tech providers, institutions — who runs this and who enables it?]

### Who is impacted?

[Residents, commuters, pedestrians, businesses, vulnerable populations — who experiences the effects?]

### How does the solution use their capabilities?

[What do key stakeholders bring to the table? What expertise, infrastructure, or authority do they contribute?]

### How does it address their concerns?

[Safety, access, equity, noise, jobs, privacy — what concerns exist and how does the design respond?]

## Blueprints

### [Blueprint Recommendation Title 1]

[Which specific NACTO Blueprint for Autonomous Urbanism guideline applies? What does it recommend, and how is it applied at this site? Be specific about the physical changes to the street or space.]

### [Blueprint Recommendation Title 2]

[Same structure — title names the specific guideline, body discusses how it shapes the design at this location.]

## Methods

### Step 1

- **Tool:** [What software or AI tool was used]
- **Transformation:** [What did you do with it — prompt, technique, settings]
- **Result:** [What output was produced and how it advanced the work]

### Step 2

- **Tool:** [...]
- **Transformation:** [...]
- **Result:** [...]

### Step 3

- **Tool:** [...]
- **Transformation:** [...]
- **Result:** [...]
```

Note: This file starts with `_` so Astro ignores it as a content entry.

**Step 2: Create `public/media/` directory**

```bash
mkdir -p public/media
```

**Step 3: Commit**

```bash
git add src/content/case-studies/_TEMPLATE.md public/media
git commit -m "feat: add student case study template with structured sections"
```

---

### Task 7: Create 20 GeoJSON Files for Roosevelt Island Locations

**Files:**
- Create: `public/geo/tram-plaza.geojson`
- Create: `public/geo/motorgate-garage.geojson`
- Create: `public/geo/main-street-west-road.geojson`
- Create: `public/geo/good-shepherd-plaza.geojson`
- Create: `public/geo/ri-bridge.geojson`
- Create: `public/geo/southpoint-park.geojson`
- Create: `public/geo/cornell-tech-campus.geojson`
- Create: `public/geo/lighthouse-park.geojson`
- Create: `public/geo/blackwell-park.geojson`
- Create: `public/geo/rivercross-courtyard.geojson`
- Create: `public/geo/westview-loop.geojson`
- Create: `public/geo/island-house-circle.geojson`
- Create: `public/geo/manhattan-park-entrance.geojson`
- Create: `public/geo/goldwater-site.geojson`
- Create: `public/geo/four-freedoms-park.geojson`
- Create: `public/geo/octagon-plaza.geojson`
- Create: `public/geo/sportspark-drive.geojson`
- Create: `public/geo/firefighters-field.geojson`
- Create: `public/geo/coler-hospital.geojson`
- Create: `public/geo/strecker-lab.geojson`

**Step 1: Create all 20 GeoJSON files**

Each file is a FeatureCollection with a single Polygon feature. Use real approximate coordinates for each location on Roosevelt Island. The island runs roughly from 40.750 (south tip, Four Freedoms Park) to 40.773 (north tip, Lighthouse Park), longitude roughly -73.955 (west shore) to -73.943 (east shore).

Key coordinate references:
- Tram Plaza: ~40.7572, -73.9543
- Motorgate Garage: ~40.7565, -73.9535
- Main St & West Rd: ~40.7610, -73.9510
- Good Shepherd Plaza: ~40.7590, -73.9520
- RI Bridge: ~40.7560, -73.9500
- Southpoint Park: ~40.7520, -73.9490
- Cornell Tech: ~40.7545, -73.9540
- Lighthouse Park: ~40.7725, -73.9440
- Blackwell Park: ~40.7645, -73.9485
- Rivercross: ~40.7610, -73.9520
- Westview: ~40.7595, -73.9525
- Island House: ~40.7580, -73.9530
- Manhattan Park: ~40.7630, -73.9505
- Goldwater Site: ~40.7665, -73.9480
- Four Freedoms Park: ~40.7505, -73.9490
- Octagon: ~40.7685, -73.9485
- Sportspark: ~40.7655, -73.9490
- Firefighters Field: ~40.7675, -73.9478
- Coler Hospital: ~40.7705, -73.9460
- Strecker Lab: ~40.7625, -73.9510

Each polygon should be a small rectangle (~0.001 lat/lng) around the center point. Format:

```json
{
    "type": "FeatureCollection",
    "features": [
        {
            "type": "Feature",
            "properties": {
                "name": "[Location Name]",
                "type": "[Zone Type]"
            },
            "geometry": {
                "type": "Polygon",
                "coordinates": [[
                    [lng-0.0005, lat-0.0004],
                    [lng+0.0005, lat-0.0004],
                    [lng+0.0005, lat+0.0004],
                    [lng-0.0005, lat+0.0004],
                    [lng-0.0005, lat-0.0004]
                ]]
            }
        }
    ]
}
```

**Step 2: Commit**

```bash
git add public/geo/*.geojson
git commit -m "feat: add 20 Roosevelt Island location GeoJSON boundaries"
```

---

### Task 8: Create 20 Stub Case Study Markdown Files

**Files:**
- Create 20 files in `src/content/case-studies/` matching the slugs from the design doc

**Step 1: Create all 20 stub markdown files**

Each file uses the template structure but with location-specific title, description, and geojson path. The body sections contain placeholder text prompting students to fill in. Author field left empty.

Example for `tram-plaza.md`:
```yaml
---
title: "Tram Plaza — [Your AV Concept]"
description: "A case study exploring autonomous vehicle deployment at Roosevelt Island's Tram Plaza."
author: ""
geojson: "geo/tram-plaza.geojson"
media: []
---
```

Body uses the template sections with `[placeholder instructions]`.

Create all 20:
1. `tram-plaza.md`
2. `motorgate-garage.md`
3. `main-street-west-road.md`
4. `good-shepherd-plaza.md`
5. `ri-bridge.md`
6. `southpoint-park.md`
7. `cornell-tech-campus.md`
8. `lighthouse-park.md`
9. `blackwell-park.md`
10. `rivercross-courtyard.md`
11. `westview-loop.md`
12. `island-house-circle.md`
13. `manhattan-park-entrance.md`
14. `goldwater-site.md`
15. `four-freedoms-park.md`
16. `octagon-plaza.md`
17. `sportspark-drive.md`
18. `firefighters-field.md`
19. `coler-hospital.md`
20. `strecker-lab.md`

**Step 2: Verify build**

Run: `npm run build`
Expected: Build succeeds, 20 case study pages generated

**Step 3: Commit**

```bash
git add src/content/case-studies/*.md
git commit -m "feat: add 20 Roosevelt Island case study stubs"
```

---

### Task 9: Build Sample Case Study — Tram Plaza

**Files:**
- Modify: `src/content/case-studies/tram-plaza.md`

**Step 1: Write fully fleshed-out content for Tram Plaza**

Replace the stub with a complete sample case study demonstrating all sections. This serves as the prototype for students to see how a finished case study looks.

Title: `"Tram Plaza — Last-Mile Autonomous Shuttle Hub"`

Write realistic content for all sections:
- **Summary:** Tram Plaza as a multimodal transfer point, autonomous shuttles connecting tram arrivals to island destinations
- **AV Use Case:** Low-speed autonomous shuttle pods (Level 4), 6-passenger capacity, continuous loop from tram to Main Street, why the plaza geometry and passenger volume make it ideal
- **Stakeholders:** RIOC, MTA, Cornell Tech, residents, commuters; addresses concerns about pedestrian safety in the busy plaza
- **Blueprints:** Cite 2 specific NACTO Blueprint guidelines (e.g., "Dedicated AV Lanes" and "Passenger Loading Zones") with specific application to Tram Plaza layout
- **Methods:** 3 steps using AI tools (e.g., Step 1: Midjourney for concept art, Step 2: Photoshop for compositing, Step 3: RunwayML for animation)

Add sample media entries in frontmatter (files won't exist yet, that's fine):
```yaml
media:
  - file: "media/tram-plaza-aerial.jpg"
    caption: "Aerial view of Tram Plaza showing proposed shuttle loop"
    featured: true
  - file: "media/tram-plaza-street-level.jpg"
    caption: "Street-level rendering of autonomous shuttle at passenger loading zone"
  - file: "media/tram-plaza-sequence.mp4"
    caption: "Animation showing shuttle arrival and passenger boarding sequence"
```

**Step 2: Verify build**

Run: `npm run build`

**Step 3: Commit**

```bash
git add src/content/case-studies/tram-plaza.md
git commit -m "feat: add fully built Tram Plaza sample case study"
```

---

### Task 10: Update Home Page Branding and Map Center

**Files:**
- Modify: `src/pages/index.astro`

**Step 1: Update hero text**

Change:
- `<h1>The <span class="accent">Atlas</span> of NYC AV Futures</h1>` → `<h1><span class="accent">Robot</span> Island</h1>`
- Subtitle → `Autonomous vehicle case studies on Roosevelt Island. Each site explores how AVs could reshape mobility, access, and public space on this unique New York City island.`
- Page title: `"The Atlas of NYC AV Futures"` → `"Robot Island"`

**Step 2: Update map center and colors**

In the `<script>` section:
- Change map center from `[-73.935242, 40.73061]` to `[-73.950, 40.762]` (Roosevelt Island center)
- Change zoom from `11` to `14` (island-scale)
- Change all `#AA142D` color references to `var(--color-map-base)` — but since this is in a script, use the literal value `#0066FF`
- Change hover color to `#00C2FF`

**Step 3: Update card rendering for new media schema**

The card currently uses `study.data.image` for the card image. Change to use the first `featured` media item:

```typescript
// In the card rendering loop, compute featured image:
const featuredMedia = study.data.media?.find(m => m.featured);
const cardImage = featuredMedia?.file;
```

Then use `cardImage` instead of `study.data.image` in the `style` attribute.

**Step 4: Verify build**

Run: `npm run build`

**Step 5: Commit**

```bash
git add src/pages/index.astro
git commit -m "feat: rebrand home page to Robot Island, update map to Roosevelt Island"
```

---

### Task 11: Update Detail Page Branding, Map Colors, and Media Gallery

**Files:**
- Modify: `src/pages/case-studies/[slug].astro`

**Step 1: Update page title**

Change `${study.data.title} | NYC AV Atlas` → `${study.data.title} | Robot Island`

**Step 2: Update hero image source**

Change hero image from `study.data.image` to featured media item:

```typescript
const featuredMedia = study.data.media?.find(m => m.featured);
const heroImage = featuredMedia?.file;
```

Use `heroImage` in the hero section's `background-image` style.

**Step 3: Update back link text**

Change `← Back to Atlas` → `← Back to Robot Island`

**Step 4: Add media gallery section**

After the content body and before the Footer, add a media gallery section that renders all non-featured media items from frontmatter:

```html
{study.data.media && study.data.media.filter(m => !m.featured).length > 0 && (
    <section class="media-gallery">
        <div class="container">
            <h2>Media</h2>
            <div class="gallery-grid">
                {study.data.media.filter(m => !m.featured).map((item) => (
                    <figure class="gallery-item">
                        {item.file.endsWith('.mp4') ? (
                            <video controls src={`/${item.file}`}></video>
                        ) : (
                            <img src={`/${item.file}`} alt={item.caption} />
                        )}
                        <figcaption>{item.caption}</figcaption>
                    </figure>
                ))}
            </div>
        </div>
    </section>
)}
```

Add styles for `.media-gallery`, `.gallery-grid` (2-column grid), `.gallery-item`.

**Step 5: Update map center and colors in script**

- Change map center from `[-73.935242, 40.73061]` to `[-73.950, 40.762]`
- Change `#AA142D` → `#0066FF` for active boundary
- Change `#888` → `#94A3B8` for inactive boundaries

**Step 6: Verify build**

Run: `npm run build`

**Step 7: Commit**

```bash
git add src/pages/case-studies/\[slug\].astro
git commit -m "feat: rebrand detail page, add media gallery, update map colors"
```

---

### Task 12: Update CLAUDE.md

**Files:**
- Modify: `CLAUDE.md`

**Step 1: Update project documentation**

Update all references:
- Project name: Robot Island
- Description: interactive web atlas of autonomous vehicle deployment case studies on Roosevelt Island
- Content schema: document new `media` array with `featured` flag
- Geographic focus: Roosevelt Island (not NYC)
- Map center: `[-73.950, 40.762]`
- Color palette: document new colors
- Remove references to old case studies, add note about 20 RI locations
- Update the Design System section colors

**Step 2: Commit**

```bash
git add CLAUDE.md
git commit -m "docs: update CLAUDE.md for Robot Island rebrand"
```

---

### Task 13: Rename GitHub Repository

**Step 1: Rename the repo**

```bash
gh repo rename robot-island
```

**Step 2: Verify remote URL updated**

```bash
git remote -v
```

Expected: Remote URL now shows `robot-island`

**Step 3: Commit** (no code changes, just verify)

---

### Task 14: Rename Netlify Site and Add Custom Domain

**Step 1: Check if Netlify CLI is available**

```bash
npx netlify-cli status
```

**Step 2: Rename the Netlify site**

```bash
npx netlify-cli sites:update --name robot-island
```

Or if the site needs to be linked first:
```bash
npx netlify-cli link
npx netlify-cli sites:update --name robot-island
```

**Step 3: Add custom domain**

```bash
npx netlify-cli domains:add robotisland.urbantech.info
```

Note the Netlify site URL / load balancer address for the DNS step.

---

### Task 15: Configure Route53 DNS

**Step 1: Find the hosted zone ID for urbantech.info**

```bash
aws route53 list-hosted-zones --query "HostedZones[?Name=='urbantech.info.'].Id" --output text
```

**Step 2: Create CNAME record**

Create a JSON change batch file and submit:

```bash
aws route53 change-resource-record-sets \
  --hosted-zone-id <ZONE_ID> \
  --change-batch '{
    "Changes": [{
      "Action": "UPSERT",
      "ResourceRecordSet": {
        "Name": "robotisland.urbantech.info",
        "Type": "CNAME",
        "TTL": 300,
        "ResourceRecords": [{"Value": "<netlify-site>.netlify.app"}]
      }
    }]
  }'
```

**Step 3: Verify DNS propagation**

```bash
dig robotisland.urbantech.info CNAME
```

**Step 4: Trigger Netlify deploy**

```bash
git push
```

**Step 5: Verify the site loads at robotisland.urbantech.info**

Open in browser or:
```bash
curl -I https://robotisland.urbantech.info
```

---

### Task 16: Final Verification

**Step 1: Run full build**

```bash
npm run build
```

**Step 2: Start dev server and verify**

```bash
npm run dev
```

Check:
- Home page loads with "Robot Island" branding and blue palette
- Map centered on Roosevelt Island showing 20 boundaries
- Card grid shows 20 case studies
- Tram Plaza detail page renders fully with all sections
- Other case study stubs render with placeholder content
- Media gallery renders on Tram Plaza page
- Navigation and footer show "Robot Island"
- Map hover/click interactions work

**Step 3: Push and verify production**

```bash
git push
```

Verify at `robotisland.urbantech.info`.
