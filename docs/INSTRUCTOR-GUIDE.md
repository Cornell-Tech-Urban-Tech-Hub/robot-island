# Robot Island — Instructor Guide

This guide explains how to manage student submissions and publish them to the Robot Island web atlas.

## Workflow Overview

1. Students complete their case studies using the submission template
2. Students submit their folders (via file upload, shared drive, etc.)
3. You copy submitted folders into the `submissions/` directory
4. Run `npm run process` to integrate submissions into the site
5. Deploy to Netlify (automatic on git push)

## Setting up for submissions

### First time setup

1. Create the `submissions/` directory in the project root:
   ```bash
   mkdir submissions
   ```

2. Distribute the template to students:
   - Share `docs/example-submission/` as a reference
   - Or share `docs/example-submission.zip` (pre-packaged template)

### Accepting submissions

Students can submit their folders via:
- File upload (Google Drive, Dropbox, etc.)
- Email attachment (if small)
- Git pull request (advanced)
- USB drive handoff

## Processing submissions

### Step 1: Add folders to submissions/

Copy each student's folder into `submissions/`:

```
submissions/
├── motorgate-garage/
│   ├── case-study.md
│   ├── boundary.geojson
│   ├── hero-image.jpg
│   └── street-view.jpg
├── tram-plaza/
│   ├── case-study.md
│   ├── boundary.geojson
│   └── media files...
└── lighthouse-park/
    └── ...
```

**Folder naming**: Each folder name becomes the URL slug (e.g., `motorgate-garage` → `/case-studies/motorgate-garage`)

### Step 2: Run the processing script

```bash
npm run process
```

This script:
- Reads all folders from `submissions/`
- Copies markdown files to `src/content/case-studies/[slug].md`
- Copies assets (geojson, images, videos) to `public/case-studies/[slug]/`
- Updates frontmatter paths to reference the correct URLs

**Output example**:
```
🤖 Processing student submissions...

Processing: motorgate-garage
  ✓ Markdown → src/content/case-studies/motorgate-garage.md
  ✓ Asset → public/case-studies/motorgate-garage/boundary.geojson
  ✓ Asset → public/case-studies/motorgate-garage/hero-image.jpg
  ✓ Asset → public/case-studies/motorgate-garage/street-view.jpg

✅ Processed 1 submission(s)
```

### Step 3: Review and test locally

```bash
npm run dev
```

Visit `localhost:4321` and check:
- Home page card grid shows new case studies
- Map displays new boundaries correctly
- Detail pages load with all media
- No console errors

### Step 4: Deploy

```bash
git add .
git commit -m "Add student submissions: [list names]"
git push
```

Netlify will automatically rebuild and deploy the site.

## Troubleshooting

### "No markdown file found in [slug], skipping"

The folder is missing `case-study.md` or `index.md`. Check:
- File exists in the folder
- File is named exactly `case-study.md` (lowercase, hyphen)

### Invalid frontmatter errors

The markdown file has malformed YAML frontmatter. Common issues:
- Missing quotes around values with special characters
- Incorrect indentation in the `media` array
- Missing required fields (`title`, `place`, `concept`, `description`, `type`, `geojson`)

### Map not showing boundary

The GeoJSON file is invalid or missing. Check:
- File exists and is named `boundary.geojson`
- File contains valid GeoJSON (test at geojson.io)
- File uses FeatureCollection format with Polygon geometry

### Images not loading

File paths don't match frontmatter. Check:
- File names in `media` list exactly match actual file names
- No spaces or capital letters in file names
- Files are in the student's submission folder

### Multiple submissions with same slug

Two students used the same folder name. One will overwrite the other. Rename one folder before processing.

## Advanced: Batch operations

### Process only new submissions

The script processes all folders in `submissions/` every time. To avoid reprocessing:

1. Move processed folders to `submissions/_archive/`
2. Run `npm run process`
3. Only new folders in `submissions/` will be processed

### Remove a published case study

1. Delete the markdown file: `src/content/case-studies/[slug].md`
2. Delete the assets folder: `public/case-studies/[slug]/`
3. Rebuild and deploy

## Student template customization

To modify the template students receive:

1. Edit `docs/example-submission/case-study.md`
2. Update frontmatter schema in `src/content/config.ts` if adding fields
3. Re-zip: `cd docs && zip -r example-submission.zip example-submission/`
4. Distribute the updated template

## Grading checklist

Use this checklist when reviewing submissions:

- [ ] Folder name is lowercase with hyphens (no spaces)
- [ ] `case-study.md` exists and has all required frontmatter fields
- [ ] All content sections are completed (no example text remaining)
- [ ] `boundary.geojson` is valid and shows the correct site location
- [ ] At least one media file exists and is referenced in frontmatter
- [ ] One media item is marked `featured: true` (hero image)
- [ ] File names match what's listed in the `media` array
- [ ] No placeholder text or template examples remain
- [ ] Writing is clear, specific, and follows assignment rubric

## Support

For technical issues with the Robot Island platform:
- Check CLAUDE.md for development guidance
- Contact: amt353@cornell.edu
