// ==========================================
// IMAGE TO BASE64 CONVERTER
// ==========================================
// This script converts all images in the 'images' folder to base64 format
// and outputs them in a format you can copy-paste into script.js

const fs = require('fs');
const path = require('path');

// Configuration
const IMAGES_FOLDER = path.join(__dirname, '..', 'images');
const OUTPUT_FILE = path.join(__dirname, 'base64_images.txt');

// Supported image formats
const SUPPORTED_FORMATS = ['.jpg', '.jpeg', '.png', '.gif', '.webp'];

function convertImagesToBase64() {
    console.log('🌹 Converting images to Base64...\n');

    // Check if images folder exists
    if (!fs.existsSync(IMAGES_FOLDER)) {
        console.error('❌ Error: "images" folder not found!');
        console.log('Please create an "images" folder and add your photos there.');
        return;
    }

    // Read all files from images folder
    const files = fs.readdirSync(IMAGES_FOLDER);
    const imageFiles = files.filter(file => {
        const ext = path.extname(file).toLowerCase();
        return SUPPORTED_FORMATS.includes(ext);
    });

    if (imageFiles.length === 0) {
        console.error('❌ No image files found in the "images" folder!');
        console.log('Supported formats: .jpg, .jpeg, .png, .gif, .webp');
        return;
    }

    console.log(`✅ Found ${imageFiles.length} image(s)\n`);

    let outputContent = '// ========== BASE64 ENCODED IMAGES ==========\n';
    outputContent += '// Copy and paste these into the photos array in script.js\n';
    outputContent += '// Replace the src property with the base64 string\n\n';
    outputContent += 'const photos = [\n';

    imageFiles.forEach((file, index) => {
        const filePath = path.join(IMAGES_FOLDER, file);
        const fileBuffer = fs.readFileSync(filePath);
        const base64 = fileBuffer.toString('base64');
        const ext = path.extname(file).toLowerCase().substring(1);

        // Determine MIME type
        let mimeType = 'image/jpeg';
        if (ext === 'png') mimeType = 'image/png';
        else if (ext === 'gif') mimeType = 'image/gif';
        else if (ext === 'webp') mimeType = 'image/webp';

        const base64String = `data:${mimeType};base64,${base64}`;
        const fileSizeKB = (fileBuffer.length / 1024).toFixed(2);

        console.log(`📸 ${file} - ${fileSizeKB} KB`);

        outputContent += `    {\n`;
        outputContent += `        src: '${base64String}',\n`;
        outputContent += `        caption: 'Add your caption here for photo ${index + 1}',\n`;
        outputContent += `        date: 'Day ${index + 1}'\n`;
        outputContent += `    }${index < imageFiles.length - 1 ? ',' : ''}\n`;
    });

    outputContent += '];\n\n';
    outputContent += '// ========== INSTRUCTIONS ==========\n';
    outputContent += '// 1. Open js/script.js\n';
    outputContent += '// 2. Replace the entire photos array with the one above\n';
    outputContent += '// 3. Update the captions with your personal messages\n';
    outputContent += '// 4. Save and refresh your website\n';

    // Write to output file
    fs.writeFileSync(OUTPUT_FILE, outputContent);

    console.log(`\n✅ Conversion complete!`);
    console.log(`📄 Base64 code saved to: ${OUTPUT_FILE}`);
    console.log(`\n💡 Next steps:`);
    console.log(`   1. Open ${OUTPUT_FILE}`);
    console.log(`   2. Copy the photos array`);
    console.log(`   3. Replace the photos array in js/script.js`);
    console.log(`   4. Update the captions`);
    console.log(`\n⚠️  Note: Base64 encoding increases file size by ~33%`);
    console.log(`   For better performance, consider using regular image files for large images.\n`);
}

// Run the conversion
try {
    convertImagesToBase64();
} catch (error) {
    console.error('❌ Error during conversion:', error.message);
}
