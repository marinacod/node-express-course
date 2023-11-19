const { writeFile, readFile } = require('fs').promises;

writeFile('./temporary/temp.txt', 'line one\n')
  .then(() => {
    return writeFile('./temporary/temp.txt', 'line two\n', { flag: 'a' });
  })
  .then(() => {
    return writeFile('./temporary/temp.txt', 'line three', { flag: 'a' });
  })
  .then(() => {
    return readFile('./temporary/temp.txt', 'utf8');
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log('An error occurred: ', error);
  });
