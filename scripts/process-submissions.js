/**
 * Process Submissions
 *
 * Reads student submission folders from submissions/ and processes them into the Astro project:
 * - Copies markdown to src/content/case-studies/
 * - Copies assets (geojson, images, videos) to public/case-studies/
 * - Updates frontmatter paths to reference the correct public URLs
 *
 * Usage: node scripts/process-submissions.js
 */

import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const ROOT = path.resolve(__dirname, '..');

const SUBMISSIONS_DIR = path.join(ROOT, 'submissions');
const CONTENT_DIR = path.join(ROOT, 'src', 'content', 'case-studies');
const PUBLIC_DIR = path.join(ROOT, 'public', 'case-studies');

async function ensureDir(dir) {
    try {
        await fs.mkdir(dir, { recursive: true });
    } catch (error) {
        if (error.code !== 'EEXIST') throw error;
    }
}

async function processSubmission(submissionPath) {
    const slug = path.basename(submissionPath);
    console.log(`Processing: ${slug}`);

    // Read all files in submission folder
    const files = await fs.readdir(submissionPath);

    // Find markdown file (index.md or case-study.md)
    const mdFile = files.find(f => f === 'index.md' || f === 'case-study.md');
    if (!mdFile) {
        console.warn(`  ⚠️  No markdown file found in ${slug}, skipping`);
        return;
    }

    // Read markdown content
    const mdPath = path.join(submissionPath, mdFile);
    let content = await fs.readFile(mdPath, 'utf-8');

    // Update frontmatter paths
    // geojson: "boundary.geojson" → geojson: "case-studies/[slug]/boundary.geojson"
    content = content.replace(
        /geojson:\s*["']([^"']+)["']/g,
        (match, p1) => {
            if (p1.startsWith('http')) return match;
            return `geojson: "case-studies/${slug}/${p1.replace('./', '')}"`;
        }
    );

    // file: "image.jpg" → file: "case-studies/[slug]/image.jpg"
    content = content.replace(
        /file:\s*["']([^"']+)["']/gm,
        (match, p1) => {
            if (p1.startsWith('http')) return match;
            return `file: "case-studies/${slug}/${p1.replace('./', '')}"`;
        }
    );

    // Write processed markdown to content directory
    await ensureDir(CONTENT_DIR);
    const outputMdPath = path.join(CONTENT_DIR, `${slug}.md`);
    await fs.writeFile(outputMdPath, content);
    console.log(`  ✓ Markdown → src/content/case-studies/${slug}.md`);

    // Copy asset files to public directory
    const publicSlugDir = path.join(PUBLIC_DIR, slug);
    await ensureDir(publicSlugDir);

    for (const file of files) {
        if (file === mdFile || file.startsWith('.')) continue;

        const srcPath = path.join(submissionPath, file);
        const destPath = path.join(publicSlugDir, file);

        await fs.copyFile(srcPath, destPath);
        console.log(`  ✓ Asset → public/case-studies/${slug}/${file}`);
    }
}

async function main() {
    console.log('🤖 Processing student submissions...\n');

    try {
        const submissions = await fs.readdir(SUBMISSIONS_DIR);

        let processed = 0;
        for (const item of submissions) {
            if (item.startsWith('.') || item.startsWith('_')) continue;

            const submissionPath = path.join(SUBMISSIONS_DIR, item);
            const stats = await fs.stat(submissionPath);

            if (stats.isDirectory()) {
                await processSubmission(submissionPath);
                processed++;
            }
        }

        console.log(`\n✅ Processed ${processed} submission(s)`);

    } catch (error) {
        if (error.code === 'ENOENT') {
            console.error(`\n❌ submissions/ directory not found`);
            console.log('Create it with: mkdir submissions');
        } else {
            throw error;
        }
    }
}

main().catch(console.error);
