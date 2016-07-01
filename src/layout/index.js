var yo=require('yo-yo');
var translate=require('../translate');
//utilizar yo-yo
//module.exports =Se le asigna lo que tenga yo-yo, variable de JS, dividir en modulos o archivos con diferentes responnsabilidades
module.exports =function layout(content){
	return yo`<div class="content">
			${content}
		</div>`;

}

//todo lo escrito en yo son  el contenido principal del home page