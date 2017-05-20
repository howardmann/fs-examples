// EXAMPLE 5. STREAM READ AND WRITE DATA USING PIPE SHORTHAND
var fs = require('fs');

var readStream = fs.createReadStream('./example5/readStream.txt');
var writeStream = fs.createWriteStream('./example5/writeStream.txt');


// readStream.on('data', function(chunk){
//   console.log('############# CHUNK');
//   console.log(chunk);
//   writeStream.write(chunk);
// })

// readStream.on('end', function(){
//   console.log('ENDED');
// });

readStream.pipe(writeStream);

// Runs immediately as streams are asyncrhonous
console.log('...rest of code');
