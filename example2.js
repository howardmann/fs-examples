// EXAMPLE 2. READ AND WRITE FILES ASYNCHRONOUSLY
var fs = require('fs');

var text = 'Hello Faster World'

// Same as example2 but using promises to avoid callback hell
fs.mkdir('./example2', function(err){
  if (err) {
    console.log('Directory already created');
  } else {
    fs.writeFile('./example2/readme.txt', text, function(err){
      if (err) {
        console.log(err);
      } else {
        fs.readFile('./example2/readme.txt', 'utf8', function(err, data){
          if (err) {
            console.log(err);
          } else {
            console.log(data);
          }
        })
      }
    });
  }
});

// This runs immediately as above code is asynchronous
console.log('...rest of code');
