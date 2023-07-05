// jshint esversion:6
const superheroes = require('superheroes');

const supervillains = require('supervillains');


var myhero = superheroes.random();
var myVillain = supervillains.random();

console.log(myhero + " / " + myVillain);