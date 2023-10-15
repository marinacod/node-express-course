const names = require('./04-names.js');
console.log(names);

const myFunction = require('./05-utils.js');
myFunction('David');
myFunction(names.name2);

const data = require('./06-alternative-flavor.js');
console.log(data);

require('./07-mind-grenade.js');
