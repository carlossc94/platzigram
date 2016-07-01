var page =require('page');
var vacio=require('empty-element');
var template=require('./template');
var title=require('title');

page('/signin',function(ctx, next){
	title('Platzigram - SignIn');
	var main=document.getElementById('main-container');

//agregar a la variable main un hijo en la cual es todo lo que esta en elemen
	vacio(main).appendChild(template);

})