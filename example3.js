// EXAMPLE 3. READ AND WRITE FILES ASYNCHRONOUSLY WITH PROMISES
var Promise = require('bluebird');
var fs = Promise.promisifyAll(require('fs'));

var text = 'Hello Faster World with Promises'

// Same as example2 but using promises to avoid callback hell
fs.mkdirAsync('./example3')
  .catch(err => console.log('directory already exists'))
  .then(() => fs.writeFileAsync('./example3/readme.txt', text))
  .then(() => fs.readFileAsync('./example3/readme.txt', 'utf8'))
  .then((data) => console.log(data))
  .catch(err => console.log(err));

// This runs immediately as above code is asynchronous
console.log('...rest of code');
