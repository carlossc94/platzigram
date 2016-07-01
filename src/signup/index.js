var page =require('page');
var vacio=require('empty-element');
var template=require('./template');
var title=require('title');

page('/signup',function(ctx, next){
	title('Platzigram - SignUp');
	var main=document.getElementById('main-container');
	//variable de yoyo en la cual se le agrega lo que contendra este elemento


//agregar a la variable main un hijo en la cual es todo lo que esta en elemen
	vacio(main).appendChild(template);

})