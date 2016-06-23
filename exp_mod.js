/////this is 2nd file
// module --- group similar code together
function printavatar(){
	console.log('Avatar');
}

function printmartian(){
	console.log('Martian');
}
// module.exports.avatar = printavatar; //heere only printavatar is exported not others

////there is module.exports = {} (blan object ) in every file module.exports is an object 
///so if we write function in above in json format like
module.exports = {
	printXXX : function(){
		console.log('XXX in module obj');
	},
	favMov : 'UD PU' ,

	power : ''

	
}



