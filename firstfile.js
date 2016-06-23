/////this is 1st file
var person = {
	name:'john',
	age : 21
};

var printval = function(){
	console.log('this is a test statement');
} ;

console.log(person);


setTimeout(printval() , 5000);
console.log(person);
 
// nodejs iss fast in handling data , if a bunch of request is done then taking new one is not dependent on the completion of prev req 

// every thing in nodejs is object fo eg
// so everything is reference

var john = {
	lname : 'snow',
	house : 'stark'
};
var per = john;
per.house = 'lannister';
console.log(john.house)

// '===' vs '=='
console.log('19' === '19'); //t when both val and type are same 
///==============================================================================
// using 'this', example
var snow = {
	fname : function(){
		console.log('john is my first name');
		console.log(this == snow); ///this refers to whatever is calling this here it is snow
	}
};

snow.fname(); 
///bydefault this = global
///==============================================================================

// prototype is used to add feature to the function
///==============================================================================










