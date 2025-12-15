
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const inputImage = 'public/meditation-logo.png';
const outputDir = 'public';
const sizes = [192, 512];

if (!fs.existsSync(inputImage)) {
    console.error(`Input image not found: ${inputImage}`);
    process.exit(1);
}

sizes.forEach(size => {
    const outputPath = path.join(outputDir, `pwa-${size}x${size}.png`);
    sharp(inputImage)
        .resize(size, size)
        .toFile(outputPath, (err, info) => {
            if (err) {
                console.error(`Error generating ${size}x${size} icon:`, err);
            } else {
                console.log(`Generated ${size}x${size} icon: ${outputPath}`);
            }
        });
});
