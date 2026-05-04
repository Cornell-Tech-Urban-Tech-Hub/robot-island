/**
 * Process Submissions
 *
 * Reads student submission folders from submissions/ and copies them into
 * src/content/case-studies/[slug]/ as self-contained case study folders
 * (markdown + geojson + media all colocated).
 *
 * Each submission folder must contain:
 *   - index.md (or case-study.md, which is renamed to index.md)
 *   - boundary.geojson
 *   - any referenced media files
 *
 * The folder name becomes the URL slug. If the markdown frontmatter does not
 * already declare `slug:`, one is injected based on the folder name.
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

async function ensureDir(dir) {
    await fs.mkdir(dir, { recursive: true });
}

function injectSlug(content, slug) {
    const fmMatch = content.match(/^---\n([\s\S]*?)\n---/);
    if (!fmMatch) return content;
    const fm = fmMatch[1];
    if (/^slug:/m.test(fm)) return content;
    const newFm = `${fm}\nslug: "${slug}"`;
    return content.replace(fmMatch[0], `---\n${newFm}\n---`);
}

async function processSubmission(submissionPath) {
    const slug = path.basename(submissionPath);
    console.log(`Processing: ${slug}`);

    const files = await fs.readdir(submissionPath);

    const mdFile = files.find(f => f === 'index.md' || f === 'case-study.md');
    if (!mdFile) {
        console.warn(`  ⚠️  No markdown file found in ${slug}, skipping`);
        return;
    }

    const destDir = path.join(CONTENT_DIR, slug);
    await ensureDir(destDir);

    const mdPath = path.join(submissionPath, mdFile);
    let content = await fs.readFile(mdPath, 'utf-8');
    content = injectSlug(content, slug);

    const outputMdPath = path.join(destDir, 'index.md');
    await fs.writeFile(outputMdPath, content);
    console.log(`  ✓ Markdown → src/content/case-studies/${slug}/index.md`);

    for (const file of files) {
        if (file === mdFile || file.startsWith('.')) continue;
        const srcPath = path.join(submissionPath, file);
        const destPath = path.join(destDir, file);
        await fs.copyFile(srcPath, destPath);
        console.log(`  ✓ Asset → src/content/case-studies/${slug}/${file}`);
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
