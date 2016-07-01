var yo=require('yo-yo');
var landing=require('../landing');
var translate=require('../translate');
//utilizar yo-yo
//module.exports =Se le sdigna lo que tenga yo-yo, variable de JS, dividir en modulos o archivos con diferentes responnsabilidades
var signinForm=yo`<div class="col s12 m7">
						<div class="row">
							<div class="signup-box">
								<h1 class="platzigram">
									Platzigram
								</h1>
								<form class="signup-form">
									<div class="section">
										<a class="btn btn-fb hide-on-small-only">
											${translate.mensaje('signup.facebook')}
										</a>
										<a class="btn btn-fb hide-on-med-and-up">
											<i class="fa fa-facebook-official"></i>${translate.mensaje('signup.text')}
										</a>
									</div>
									<div class="divider"></div>
									<div class="section">
										<input type="text" name="username" placeholder="${translate.mensaje('username')}">
										<input type="password" name="password" placeholder="${translate.mensaje('password')}">
										<button class="btn waves-effect waves-lights btn-signup" type="submit">${translate.mensaje('signin-entrar')}</button>
									</div>
								</form>
							</div>
						</div>
						<div class="row">
							<div class="login-box">
								${translate.mensaje('signin.not-have-account')} <a href="/signup">${translate.mensaje('signup.call-to-action')}</a>
							</div>
						</div>
					</div>`;

//se va exportar el modulo mediante la llamada de landing
//en la cual se le agrega la variable SigninForm
module.exports=landing(signinForm);