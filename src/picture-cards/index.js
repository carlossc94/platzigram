var yo=require('yo-yo');
var translate=require('../translate');

//Este if es para agregar los pollysh de safari
if (!window.Intl) {
  window.Intl=require('intl');
  require('intl-relativeformat/dist/locale-data/en.js');
  require('intl-relativeformat/dist/locale-data/es.js');
}

//format js con window variable global
var IntlRelativeFormat = window.IntlRelativeFormat=  require('intl-relativeformat');

require('intl-relativeformat/dist/locale-data/en.js');
require('intl-relativeformat/dist/locale-data/es.js');

var rf = new IntlRelativeFormat('es');

module.exports= function pictureCard(pic)
{var el; 

//funcion que se llamara varias veces para renderizar los cambios de like y unlike
  function render(picture){
  return yo`<div class="card ${picture.liked ? 'liked' : ''}">
    <div class="card-image">
      <img class="activator" src="${picture.url}">
    </div>
    <div class="card-content">
      <a href="/user/${picture.user.username}" class="card-title">
        <img src="${picture.user.avatar}" class="avatar"/>
        <span class="username">${picture.user.username}</span>
      </a>
      <small class="right time">${translate.date.format(picture.createdAt)}</small>
      <p>
        <a class="left" href="#" onclick=${like.bind(null, true)}>
          <i class="fa fa-heart-o" aria-hidden="true"></i>
        </a>
        <a class="left" href="#" onclick=${like.bind(null,false)}>
          <i class="fa fa-heart" aria-hidden="true"></i>
        </a>
        <span class="left likes">${translate.mensaje('likes', {likes:picture.likes})}</span>
      </p>
    </div>
  </div>`;
  }
 
//Funcion para la cual se usara el like o dislike del corazon
//la funcion recibira un parametro true o false
  function like(liked){
    //pic.liked recibe si e strue o false
    pic.liked=liked;
    //condicion if en una linea donde recibe el parametro like
    //si es verdadero se aumenta 1 si no (:) se resta 1
    pic.likes+= liked ? 1 : -1;
    //la variable newElement recibe todo de la funcion render pic
    var newElement=render(pic);
    //se actualizara la vista del antiguo elemento al nuevo elemento
    yo.update(el,newElement);
    //regresara falso para volver a entrar en la condicion
    return false;
  }

  //obtiene la primera vista antes de que la funcion like sea llamada otra vez
  el=render(pic);
  //se retorna el elemento
  return el;
}

  //esta es las caracteristicas que tendra el cuerpo del home page
  //y de las cards de materialize


  //.bind sirve como una segunda funcion en la cual pasa parametros de un objeto this y un segundo
  //donde solo nos importa el segundo parametro
  //bind devuelve la funcion bind con la funcion like con el parametro true o false