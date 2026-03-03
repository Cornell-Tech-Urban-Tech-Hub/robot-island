# Robot Island — Design Document

**Date:** 2026-03-02
**Status:** Approved

## Overview

Rename and refocus the NYC AV Atlas project to **Robot Island** — an interactive web atlas of autonomous vehicle deployment case studies on Roosevelt Island, NYC. The site serves as a student assignment platform where each student picks a real location on the island and develops an AV case study with illustrations, animations, and video.

**Live URL:** `robotisland.urbantech.info`

## Branding

**Name:** Robot Island
**Tagline:** Autonomous Vehicle Futures on Roosevelt Island

### Color Palette

| Role | Value | Notes |
|------|-------|-------|
| Accent | `#0066FF` | Electric blue — tech/autonomy feel |
| Accent hover | `#0052CC` | Darker blue |
| Background | `#F5F7FA` | Cool gray-white |
| Text primary | `hsla(220, 15%, 15%, 0.9)` | Cool dark |
| Header/Footer | `#1A1A2E` | Near-black navy |
| Map highlight | `#00C2FF` | Cyan — visible on light map tiles |

## Content Schema

### Frontmatter

```yaml
title: string          # "[Location] — [Short AV Concept]"
description: string    # One-sentence summary
author: string?        # Student name (optional)
geojson: string        # Path to boundary file: "geo/[slug].geojson"
media:                 # Array of media files
  - file: string       # Path: "media/[slug]-01.jpg"
    caption: string    # Description of the media
    featured: boolean? # true = hero image (first match wins)
```

### Markdown Body Template

```markdown
## Summary
[2-3 sentences describing the site and the AV intervention]

## AV Use Case

### What AVs are involved?
[Vehicle types, fleet size, technology level]

### What are they doing?
[Service or operation — routes, schedules, interactions]

### Why here?
[Why is this location suited to this AV deployment?]

## Stakeholders

### Who participates?
[Operators, agencies, tech providers, institutions]

### Who is impacted?
[Residents, commuters, pedestrians, businesses, vulnerable populations]

### How does the solution use their capabilities?
[What do stakeholders bring to the table?]

### How does it address their concerns?
[Safety, access, equity, noise, jobs, etc.]

## Blueprints

### [Blueprint Recommendation Title 1]
[Which specific NACTO Blueprint guideline applies? What does it recommend, and how is it applied at this site?]

### [Blueprint Recommendation Title 2]
[Same structure]

## Methods

### Step 1
- **Tool:** [Software/AI tool used]
- **Transformation:** [Prompt, technique, settings]
- **Result:** [Output produced, how it advanced the work]

### Step 2
- **Tool:** [...]
- **Transformation:** [...]
- **Result:** [...]

### Step 3
- **Tool:** [...]
- **Transformation:** [...]
- **Result:** [...]
```

## 20 Roosevelt Island Locations

| # | Slug | Location | Zone Type |
|---|------|----------|-----------|
| 1 | tram-plaza | Tram Plaza | Transit hub |
| 2 | motorgate-garage | Motorgate Garage | Parking structure |
| 3 | main-street-west-road | Main Street & West Road | Intersection |
| 4 | good-shepherd-plaza | Good Shepherd Plaza | Plaza |
| 5 | ri-bridge | Roosevelt Island Bridge | Bridge approach |
| 6 | southpoint-park | Southpoint Park | Park loop |
| 7 | cornell-tech-campus | Cornell Tech Campus Circle | Campus road |
| 8 | lighthouse-park | Lighthouse Park | Park terminus |
| 9 | blackwell-park | Blackwell Park | Park |
| 10 | rivercross-courtyard | Rivercross Courtyard | Residential plaza |
| 11 | westview-loop | Westview Loop | Residential drop-off |
| 12 | island-house-circle | Island House Circle | Residential plaza |
| 13 | manhattan-park-entrance | Manhattan Park Entrance | Residential entry |
| 14 | goldwater-site | Goldwater Hospital Site | Redevelopment zone |
| 15 | four-freedoms-park | FDR Four Freedoms Park | Memorial park |
| 16 | octagon-plaza | Octagon Plaza | Residential/historic |
| 17 | sportspark-drive | Sportspark Drive | Recreation zone |
| 18 | firefighters-field | Firefighters Field | Open space |
| 19 | coler-hospital | Coler Hospital Campus | Healthcare facility |
| 20 | strecker-lab | Strecker Memorial Lab | Historic landmark |

## Sample Case Study

**Tram Plaza** will be the fully built prototype — the most iconic RI location with strong AV potential as a last-mile connection point from the aerial tram to the island interior.

## Infrastructure Changes

1. **GitHub:** Rename repo `nyc-av-atlas` → `robot-island` via `gh repo rename`
2. **Netlify:** Rename site to `robot-island` via Netlify CLI
3. **DNS:** Create CNAME record `robotisland.urbantech.info` → Netlify deployment in Route53
4. **Netlify custom domain:** Add `robotisland.urbantech.info` as custom domain

## Architecture (Unchanged)

- Astro 5 SSR + Content Collections
- Mapbox GL 3 with light-v11 style
- Static pre-render for case study pages
- Slug-based routing from markdown filenames
- Map center shifts to Roosevelt Island (~40.762, -73.950)
