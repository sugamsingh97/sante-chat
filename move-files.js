const fs = require('fs');
const path = require('path');

// Create frontend directory if it doesn't exist
if (!fs.existsSync('frontend')) {
  fs.mkdirSync('frontend');
  fs.mkdirSync('frontend/src');
  fs.mkdirSync('frontend/public');
}

// Move frontend files
const frontendFiles = [
  { src: 'src/App.js', dest: 'frontend/src/App.js' },
  { src: 'src/App.css', dest: 'frontend/src/App.css' },
  { src: 'src/index.js', dest: 'frontend/src/index.js' },
  { src: 'src/components', dest: 'frontend/src/components' },
  { src: 'src/pages', dest: 'frontend/src/pages' },
  { src: 'public/index.html', dest: 'frontend/public/index.html' }
];

frontendFiles.forEach(file => {
  if (fs.existsSync(file.src)) {
    fs.renameSync(file.src, file.dest);
  }
});

console.log('Files moved successfully!'); 