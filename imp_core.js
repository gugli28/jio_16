////readingg and writing to and from a file 


var fs = require('fs');
fs.writeFileSync('test_file.txt','there will be war b/w the bastards');
///reading from a file
console.log(fs.readFileSync('test_file.txt').toString()); 

/////path module

var path_mod = require('path')


/// this gonna run fn every 2s
setInterval(function(){
	console.log('print')
},2000);

///
console.log(__dirname)
console.log(__filename)