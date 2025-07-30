const sharp = require('sharp');
const path = require('path');

async function createLQIP(inputPath) {
  if (inputPath.includes('-lqip')) {
    console.log(`Skipping LQIP file: ${inputPath}`);
    return;
  }

  const dir = path.dirname(inputPath);
  const name = path.basename(inputPath, path.extname(inputPath));
  const ext = path.extname(inputPath);
  const outputPath = path.join(dir, `${name}-lqip${ext}`);

  await sharp(inputPath)
    .jpeg({
      quality: 1,
      progressive: true,
      optimizeCoding: true,
      mozjpeg: true,
      trellisQuantisation: true,
      overshootDeringing: true,
      optimizeScans: true,
    })
    .toFile(outputPath);

  console.log(`Created: ${outputPath}`);
}

// Get file path from command line arguments
const inputPath = process.argv[2];

if (!inputPath) {
  console.error('Please provide an image path');
  console.log('Usage: node scripts/sharp-lqip.js <image-path>');
  process.exit(1);
}

createLQIP(inputPath).catch(console.error);

