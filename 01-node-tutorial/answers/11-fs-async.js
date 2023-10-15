const { writeFile } = require('fs');
console.log('at start');
writeFile('./temporary/fileB.txt', 'first line\n', (err) => {
  if (err) console.log(err);
  console.log('at point 1');
  writeFile('./temporary/fileB.txt', 'second line\n', { flag: 'a' }, (err) => {
    if (err) console.log(err);
    console.log('at point 2');
    writeFile('./temporary/fileB.txt', 'third line', { flag: 'a' }, (err) => {
      if (err) console.log(err);
      console.log('at point 3');
    });
  });
});
console.log('at end');
