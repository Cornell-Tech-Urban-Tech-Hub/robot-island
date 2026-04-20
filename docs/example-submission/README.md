# Robot Island — Student Submission Template

This folder contains everything you need to create your Robot Island case study. Follow the instructions below to complete your submission.

## What's in this folder?

- `case-study.md` — Your case study content (edit this file)
- `boundary.geojson` — The boundary polygon for your selected site
- `hero-image.jpg` — Your featured image (replace this placeholder)
- `street-view.jpg` — Additional media (replace this placeholder)
- `site-plan.jpg` — Additional media (replace this placeholder)
- `README.md` — This file (instructions)

## How to complete your submission

### Step 1: Rename the folder

Rename this folder to match your site using lowercase with hyphens:
- Good: `motorgate-garage`
- Good: `tram-plaza`
- Bad: `Motorgate Garage` (no spaces)
- Bad: `motorgate_garage` (use hyphens, not underscores)

### Step 2: Edit the case study markdown

Open `case-study.md` and update all sections:

1. **Frontmatter** (the section between `---` at the top):
   - `title`: Your full title (e.g., "Motorgate Garage — Autonomous Freight Hub")
   - `place`: Location name only (e.g., "Motorgate Garage")
   - `concept`: Short concept description (e.g., "Autonomous Freight Hub")
   - `description`: One-sentence summary of your case study
   - `author`: Your name
   - `type`: Choose `"passenger"`, `"freight"`, or `"service"`
   - `geojson`: Leave as `"boundary.geojson"`
   - `media`: List all your images/videos (see below)

2. **Content sections**: Replace the example text with your own content for:
   - Summary
   - AV Use Case (What/Why/Where)
   - Stakeholders (Who participates/impacted, capabilities, concerns)
   - Blueprints (NACTO guidelines you're applying)
   - Methods (Your AI/design workflow)

### Step 3: Add your boundary GeoJSON

Replace `boundary.geojson` with the GeoJSON file for your site. The file MUST:
- Be named exactly `boundary.geojson` (lowercase)
- Be a valid GeoJSON FeatureCollection
- Contain a Polygon geometry showing your site boundary
- Use WGS84 coordinates (standard latitude/longitude)

You can create GeoJSON files using [geojson.io](https://geojson.io).

### Step 4: Add your media files

Replace the placeholder `.jpg` files with your own images/videos:

1. **Supported formats**: `.jpg`, `.jpeg`, `.png`, `.mp4`, `.mov`
2. **File names**: Use lowercase with hyphens (e.g., `hero-image.jpg`, `site-plan.png`)
3. **File size**: Keep images under 5MB each for best performance

**Update the `media` list in frontmatter** to match your files:

```yaml
media:
  - file: "hero-image.jpg"
    caption: "Description of this image"
    featured: true         # Only ONE image should have featured: true
  - file: "street-view.jpg"
    caption: "Another image description"
  - file: "process-video.mp4"
    caption: "Video showing design process"
```

**For YouTube videos**, use the full URL:

```yaml
media:
  - file: "https://www.youtube.com/watch?v=VIDEO_ID"
    caption: "Animation showing autonomous vehicle sequence"
```

### Step 5: Submit your folder

Once everything is complete:

1. Make sure your folder is renamed (Step 1)
2. Double-check all file names match what's in the `media` list
3. Test that `boundary.geojson` is valid GeoJSON
4. Zip your entire folder if required by your instructor
5. Submit according to your course instructions

## File naming rules

✅ **Good**:
- `motorgate-garage`
- `hero-image.jpg`
- `boundary.geojson`

❌ **Bad**:
- `Motorgate Garage` (no spaces)
- `Hero Image.jpg` (no spaces or capitals)
- `boundary.json` (must be `.geojson`)

## Getting help

- **GeoJSON help**: Use [geojson.io](https://geojson.io) to draw boundaries
- **Markdown help**: [Markdown Guide](https://www.markdownguide.org/basic-syntax/)
- **Questions**: Contact your instructor

## Example output

When processed, your case study will appear at:
- `robotisland.urbantech.info/case-studies/your-folder-name`

Your media files will be accessible at:
- `robotisland.urbantech.info/case-studies/your-folder-name/hero-image.jpg`

The map will load and display your boundary from the GeoJSON file.
