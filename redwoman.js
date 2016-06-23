
/////6th file
var redwoman = require('./exp_mod') ///never include .js extension while importing a file

console.log("power of redwoman is " + redwoman.power); 
///checout app1 , 



var woman_house = require('./obj_factory')
woman_house.house = 'Banjara'

console.log("house of redwoman is " + woman_house.house);