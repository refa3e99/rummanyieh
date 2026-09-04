const fs = require('fs');
const path = require('path');
const p = path.join(process.cwd(), 'public/images/menu');
console.log(fs.existsSync(p) ? fs.readdirSync(p) : 'Not found');
