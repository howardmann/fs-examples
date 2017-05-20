// EXAMPLE 4. STREAM READ AND WRITE DATA
var fs = require('fs');

var readStream = fs.createReadStream('./example4/readStream.txt');
var writeStream = fs.createWriteStream('./example4/writeStream.txt');

readStream.on('data', function(chunk){
  console.log('############# CHUNK');
  console.log(chunk);
  writeStream.write(chunk);
})

readStream.on('end', function(){
  console.log('ENDED');
});

// Runs immediately as streams are asyncrhonous
console.log('...rest of code');
