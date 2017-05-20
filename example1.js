// EXAMPLE 1. READ AND WRITE FILES SYNCHRONOUSLY
var fs = require('fs');

var text = "Hello World";

// Write a file synchronously
fs.writeFileSync('./example1/readme.txt', text, 'utf8');

// Read a file synchronously
var readme = fs.readFileSync('./example1/readme.txt', 'utf8');
console.log(readme);

// Rest of code runs after
console.log('...rest of code');
