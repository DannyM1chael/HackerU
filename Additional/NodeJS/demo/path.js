const path = require('path');

console.log('Filename is', path.basename(__filename));
console.log('Directory name is', path.dirname(__filename));
console.log('Extension name is', path.extname(__filename));
console.log('Parse', path.parse(__filename).name);
console.log(path.join(__dirname, 'server', 'index.html'));