

//Este if es para agregar los pollysh de safari
if (!window.Intl) {
  window.Intl=require('intl');
  require('intl/locale-data/jsonp/en-US.js');
  require('intl/locale-data/jsonp/es.js');
}

//format js con window variable global
var IntlRelativeFormat = window.IntlRelativeFormat=  require('intl-relativeformat');
var IntlMessageFormat=require('intl-messageformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');
//requerir los archivos de es, en-US
var es =require('./es');
var en =require('./en-US');

//requerir messageformat

var MESSAGES={};

MESSAGES.es=es;
MESSAGES['en-US']=en;

//local storage para almacenar los idiomas
var locale=localStorage.locale || 'es';

//funcion para el mensaje, que recibe los lijes y options son las opciones en la cual se da like o likes
//se pasa los mensajes segun cual es el mensaje que se quiere traducir
		//en esto se le pasa una propiedad y un argumento
module.exports={
	mensaje: function (message,options={}){
	var msg=new IntlMessageFormat(MESSAGES[locale][message], locale, null);
	return msg.format(options);
	},
	date: new IntlRelativeFormat(locale)
}
