var yo=require('yo-yo');
var layout=require('../layout');
var picture=require('../picture-cards');
var translate = require('../translate');
var request=require('superagent');
//utilizar yo-yo
//module.exports =Se le asigna lo que tenga yo-yo, variable de JS, dividir en modulos o archivos con diferentes responnsabilidades
//el modulo $pictures.map devuelve una funcion o array
//a diferencia de foreach qu no duvuelve otro array

//la propiedad de enctype del form sirve para que el servidore traduzca la informacion que reciba del formulario

module.exports=function(pictures){
		var element = yo`<div class="container timeline">
		<div class="row">
			<div class="col s12 m10 offset-m1 l8 offset-l2 center-align">
				<form enctype="multipart/form-data" class="form-upload" id="formUpload" onsubmit=${onsubmit}>
					<div id="fileName" class="fileUpload btn btn-flat cyan">
						<span>
							<i class="fa fa-camera" aria-hidden="true"></i> ${translate.mensaje('upload-picture')}
						</span>
						<input name="picture" id="file" type="file" class="upload" onchange=${onchange}/>
					</div>
					<button id="btnUpload" type="submit" class="btn btn-flat cyan hide">
						${translate.mensaje('upload')}
					</button>
					<button id="btnCancel" type="button" class="btn btn-flat red hide" onclick=${cancel}>
						<i class="fa fa-times" aria-hidden="true"></i>
					</button>
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

	//la capacidad de los toglebuttons para cambiar de referencia de hide a visible o viceversa
	function toggleButtons(){
		document.getElementById('fileName').classList.toggle('hide');
		document.getElementById('btnUpload').classList.toggle('hide');
		document.getElementById('btnCancel').classList.toggle('hide');
	}

	//la funcion cancel para que se resetee nuetro formulario y vuelva al boton de subir foto
	function cancel(){
		toggleButtons();
		document.getElementById('formUpload').reset();
	}

	//cambiar el hide de los botones, si tiene hide es hace visible, o viceversa
	function onchange(){
		toggleButtons();
	}

	//necesitara el evento para disparar la accion
	//no disparará el request por default sino que se hara de otra forma
	function onsubmit(ev){
		ev.preventDefault();
		//el evento submit que recibira el formulario con this ya que es el mismo formulario que lo dispara
		var data= new FormData(this);
		//se envia esta data
		//api/pictures devuelve la ruta que estaban las fotos
		request
			.post('/api/pictures')
			//la data para que el backend la procese
			.send(data)
			//el end es saber el error y la respuesta
			.end(function(err,res){
				//este nombre aparte de parametros son argumentos incluidos de forma implicita con un array de todos los elementos
				console.log(arguments);
			})
	}
	//este lo envia a layout a homepage
	return layout(element);
}
