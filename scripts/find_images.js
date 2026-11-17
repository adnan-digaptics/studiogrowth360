const fs = require('fs');
const path = require('path');

function scanDir(dir) {
  if (!fs.existsSync(dir)) return;
  fs.readdirSync(dir).forEach(file => {
    const full = path.join(dir, file);
    if (fs.statSync(full).isDirectory()) scanDir(full);
    else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
      const content = fs.readFileSync(full, 'utf8');
      const matches = content.match(/src=["'][^"']+["']/g);
      if (matches) {
        console.log(file, '->', matches);
      }
    }
  });
}

scanDir('src/components/agency');
scanDir('src/layouts');
scanDir('src/components/common');
