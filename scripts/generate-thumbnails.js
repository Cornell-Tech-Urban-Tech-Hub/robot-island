import { readdir, stat, mkdir } from 'fs/promises';
import { join, dirname, extname, basename } from 'path';
import sharp from 'sharp';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const CASE_STUDIES_DIR = join(__dirname, '../src/content/case-studies');

// Thumbnail sizes
const SIZES = {
  thumb: 400,   // For cards and map popups
  medium: 800,  // For sidebar previews
};

// Image extensions to process
const IMAGE_EXTS = ['.jpg', '.jpeg', '.png'];

async function getAllImages(dir, images = []) {
  const entries = await readdir(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = join(dir, entry.name);

    if (entry.isDirectory()) {
      await getAllImages(fullPath, images);
    } else if (entry.isFile()) {
      const ext = extname(entry.name).toLowerCase();
      // Skip existing thumbnails
      if (IMAGE_EXTS.includes(ext) &&
          !entry.name.includes('-thumb.') &&
          !entry.name.includes('-medium.')) {
        images.push(fullPath);
      }
    }
  }

  return images;
}

async function shouldGenerateThumbnail(sourcePath, thumbPath) {
  try {
    const [sourceStat, thumbStat] = await Promise.all([
      stat(sourcePath),
      stat(thumbPath)
    ]);
    // Regenerate if source is newer than thumbnail
    return sourceStat.mtimeMs > thumbStat.mtimeMs;
  } catch (err) {
    // Thumbnail doesn't exist, generate it
    return true;
  }
}

async function generateThumbnail(sourcePath, size, suffix) {
  const ext = extname(sourcePath);
  const base = basename(sourcePath, ext);
  const dir = dirname(sourcePath);
  const thumbPath = join(dir, `${base}-${suffix}.jpg`);

  const shouldGenerate = await shouldGenerateThumbnail(sourcePath, thumbPath);

  if (!shouldGenerate) {
    return { skipped: true, path: thumbPath };
  }

  try {
    await sharp(sourcePath)
      .resize(size, null, {
        withoutEnlargement: true,
        fit: 'inside'
      })
      .jpeg({ quality: 85, mozjpeg: true })
      .toFile(thumbPath);

    return { generated: true, path: thumbPath };
  } catch (err) {
    console.error(`Error processing ${sourcePath}:`, err.message);
    return { error: true, path: sourcePath };
  }
}

async function main() {
  console.log('🖼️  Generating thumbnails...\n');

  const images = await getAllImages(CASE_STUDIES_DIR);
  console.log(`Found ${images.length} images to process\n`);

  let generated = 0;
  let skipped = 0;
  let errors = 0;

  for (const imagePath of images) {
    const relativePath = imagePath.replace(CASE_STUDIES_DIR, '');

    // Generate both sizes
    const results = await Promise.all([
      generateThumbnail(imagePath, SIZES.thumb, 'thumb'),
      generateThumbnail(imagePath, SIZES.medium, 'medium'),
    ]);

    const anyGenerated = results.some(r => r.generated);
    const anyError = results.some(r => r.error);

    if (anyError) {
      console.log(`❌ ${relativePath}`);
      errors++;
    } else if (anyGenerated) {
      console.log(`✅ ${relativePath}`);
      generated++;
    } else {
      skipped++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   Generated: ${generated} images (${generated * 2} thumbnails)`);
  console.log(`   Skipped (up-to-date): ${skipped} images`);
  if (errors > 0) {
    console.log(`   Errors: ${errors} images`);
  }
  console.log(`\n✨ Done!`);
}

main().catch(console.error);
