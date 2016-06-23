///5th file 
var khalessi = require('./exp_mod') ///never include .js extension while importing a file which u made if not dont use ./
khalessi.power = 'fire';

console.log("power of khalesi is " + khalessi.power);


////eg of obj_factory ie import mod without shaaring with others
var khal_house = require('./obj_factory')
khal_house.house = 'targarean'

console.log("house of khalesi is " + khal_house.house);