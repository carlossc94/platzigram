var yo=require('yo-yo');
var layout=require('../layout');
var picture=require('../picture-cards');
var translate = require('../translate');
//utilizar yo-yo
//module.exports =Se le asigna lo que tenga yo-yo, variable de JS, dividir en modulos o archivos con diferentes responnsabilidades
//el modulo $pictures.map devuelve una funcion o array
//a diferencia de foreach qu no duvuelve otro array

//la propiedad de enctype del form sirve para que el servidore traduzca la informacion que reciba del formulario

module.exports=function(pictures){
		var element = yo`<div class="container timeline">
		<div class="row">
			<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
				<form enctype="multipart/form-data" class="form-upload">

				</form>
			</div>
		</div>
		<div class="row">
			<div class="col s12 m10 offset-m1 l6 offset-l3">
				${pictures.map(function (pic) {
					return picture(pic);
				})}
			</div>
		</div>
	</div>`;

	//este lo envia a layout a homepage
	return layout(element);
}
