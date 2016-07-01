/*var numeros=[400,200,1,-23];
/*Funcion normal de javascript
var numerosMas1=numeros.map(function(numero){
	return numero+1;
})*/
//funcion de emeascript 2015*/
/*var numerosMas1=numeros.map(n => n+1);

console.log(numerosMas1);*/
require('babel-polyfill');
var page = require('page');

require('./homepage');
require('./signup');
require('./signin');
require('./footer');

page();