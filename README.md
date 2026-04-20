# Robot Island

An interactive web atlas of autonomous vehicle deployment case studies on Roosevelt Island, NYC. Built as the final project platform for Cornell Tech **INFO 5455: Smart Cities — Goals, Platforms and Futures** taught by Dr. Anthony Townsend.

**Live Website:** [robotisland.urbantech.info](https://robotisland.urbantech.info)

## About

Robot Island explores how autonomous vehicles could reshape urban life on Roosevelt Island — a 2-mile-long island in New York City's East River. Students design speculative AV deployments for real island locations, applying NACTO Blueprint for Autonomous Urbanism guidelines and documenting their AI-assisted design workflows.

The web atlas features a 50/50 split-screen interface: scrollable case study cards on the left, a rotated Mapbox GL map on the right showing site boundaries that students can explore interactively.

## For Students

### Getting Started

1. **Download the submission template:**
   - [Download example-submission.zip](https://github.com/Cornell-Tech-Urban-Tech-Hub/robot-island/raw/main/docs/example-submission.zip)

2. **Complete your case study:**
   - Edit `case-study.md` with your content
   - Add your site `boundary.geojson` (create at [geojson.io](https://geojson.io))
   - Replace placeholder images with your media files
   - Follow the README inside the template for detailed instructions

3. **Rename your folder:**
   - Use lowercase with hyphens (e.g., `motorgate-garage`, `tram-plaza`)
   - This becomes your case study URL

4. **Submit your folder:**
   - Submit according to your instructor's directions
   - Your case study will be published to [robotisland.urbantech.info](https://robotisland.urbantech.info)

### Required Files

Each submission folder must contain:
- `case-study.md` — Your case study content with frontmatter
- `boundary.geojson` — Your site boundary polygon
- Media files (`.jpg`, `.png`, `.mp4`) referenced in frontmatter

### Content Sections

Your case study should include:
- **Summary** — 2-3 sentence overview
- **AV Use Case** — What vehicles, what they're doing, why this location
- **Stakeholders** — Who participates, who's impacted, how concerns are addressed
- **Blueprints** — NACTO guidelines you're applying
- **Methods** — Your AI/design workflow (tool, transformation, result)

## For Instructors

See [docs/INSTRUCTOR-GUIDE.md](docs/INSTRUCTOR-GUIDE.md) for complete workflow documentation.

**Quick start:**
```bash
# 1. Place student folders in submissions/
# 2. Process submissions
npm run process

# 3. Review locally
npm run dev

# 4. Deploy
git add .
git commit -m "Add student submissions"
git push
```

## Tech Stack

- **Framework:** Astro 5 (SSR via Netlify)
- **Mapping:** Mapbox GL JS 3.19
- **Content:** Astro Content Collections (Markdown + frontmatter)
- **Styling:** Custom CSS design system
- **Deployment:** Netlify

## Development

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Process student submissions
npm run process

# Build for production
npm run build

# Preview production build
npm run preview
```

## Project Structure

```
robot-island/
├── docs/
│   ├── example-submission/     # Student template folder
│   ├── example-submission.zip  # Downloadable template
│   └── INSTRUCTOR-GUIDE.md     # Processing workflow
├── scripts/
│   └── process-submissions.js  # Converts submissions to published content
├── src/
│   ├── content/
│   │   ├── case-studies/       # Published case studies (auto-generated)
│   │   └── config.ts           # Content schema
│   ├── pages/
│   │   ├── index.astro         # Home page (split-screen)
│   │   └── case-studies/
│   │       └── [slug].astro    # Case study detail pages
│   └── styles/
│       └── global.css          # Design system
├── public/
│   ├── case-studies/           # Student media (auto-generated)
│   └── geo/                    # Site boundary GeoJSON files
├── submissions/                # Drop folder for student work
└── CLAUDE.md                   # Development guide
```

## Environment Variables

Create a `.env` file with your Mapbox access token:

```
PUBLIC_MAPBOX_TOKEN=your_token_here
```

## License

Educational project for Cornell Tech INFO 5455.

## Contact

- **Instructor:** Dr. Anthony Townsend
- **Email:** amt353@cornell.edu
- **Course:** INFO 5455: Smart Cities — Goals, Platforms and Futures
