var yo=require('yo-yo');
//utilizar yo-yo
//module.exports =Se le sdigna lo que tenga yo-yo, variable de JS, dividir en modulos o archivos con diferentes responnsabilidades
//se le envia a la funcion landding (box) que yoyo almacenará en ${box}
//para procesarlo y salga ya sea (signup o signin)
module.exports = function landing(box){
return yo`<div class="container landing">
		<div class="row">
			<div class="col s10 push-s1">
				<div class="row">
					<div class="col m5 hide-on-small-only">
						<img class="iphone" src="iphone.png">
					</div>
					${box}
				</div>	
			</div>
		</div>
	</div>`;
}