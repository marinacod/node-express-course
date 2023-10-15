const { readFileSync, writeFileSync } = require('fs');
writeFileSync('./temporary/fileA.txt', 'Hello');
writeFileSync('./temporary/fileA.txt', 'there', { flag: 'a' });
writeFileSync('./temporary/fileA.txt', 'Maryna', { flag: 'a' });
const result = readFileSync('./temporary/fileA.txt', 'utf8');
console.log(result);
