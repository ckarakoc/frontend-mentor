// todo: make .ps1 file and finish this.
const sharp = require('sharp');
const fs = require('fs');

const inputPath = process.argv[2];

if (!inputPath) {
  console.error('Usage: node generate-base64.js path/to/image.jpg');
  process.exit(1);
}

sharp(inputPath)
  .resize(10) // shrink image to ~10px wide
  .blur()     // add optional blur
  .toBuffer()
  .then((data) => {
    const base64 = data.toString('base64');
    const mime = 'image/jpeg'; // or use image/png based on input
    const dataUrl = `data:${mime};base64,${base64}`;
    console.log(dataUrl);
  })
  .catch(err => console.error(err));
