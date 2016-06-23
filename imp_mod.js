////this is 3rd file 

var app1 = require('./exp_mod'); ////require() is used to import the exported thing from the file
// app1.avatar();
app1.printXXX();
console.log(app1.favMov);

////modules imported are shared with all those which has imported it eg :for chat app all will req the same window so instead
//of making copy for all of them one is shared by all of them
//cheout khalesi.js , app1.js, redwoman.js 