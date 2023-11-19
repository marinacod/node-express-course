const { writeFile, readFile } = require('fs').promises;

const writer = async () => {
  try {
    await writeFile('./temporary/temp.txt', 'line one\n');
    await writeFile('./temporary/temp.txt', 'line two\n', { flag: 'a' });
    await writeFile('./temporary/temp.txt', 'line three', { flag: 'a' });
  } catch (error) {
    console.log(error);
  }
};

const reader = async () => {
  try {
    const result = await readFile('./temporary/temp.txt', 'utf8');
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};

const readWrite = async () => {
  await writer();
  await reader();
};
readWrite();
