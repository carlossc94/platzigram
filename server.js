//Tener una variable express que busca dentro de los modulos express
var express =require ('express');
//el uso de multer
var multer=require('multer');
//uso de file extension
var ext=require('file-extension');
//storage para almacenar el archivo en una carpete especifica
var storage=multer.diskStorage({
	destination: function(req, file, cb){
		cb(null,'./uploads')
	},
	filename:function (req,file,cb){
		cb(null,Date.now()+'.'+ext(file.originalname));
	}
})

//devolver el valor mediante el template de donde se encuentre picture
var upload=multer({storage: storage}).single('picture');

//es una funcion ya que contiene ().
var app=express();


//Entregar vistas y utilizar pug como dependecnia para procesarla
app.set('view engine', 'pug');

//la carpeta public este accesible, mediante static
app.use(express.static('public'));

/*
ejemplo de restrict de usuarios logueados
function restrict (req, res, next){
	if(req.user) return next();
	res.redirect('/signup')
}
*/

//en get se envia una ruta y despues una funcion
app.get('/', function(req, res){
	//render llamar al motor de vistas pug
	res.render('index',{title:'Platzigram'});
})

//en get se envia una ruta y despues una funcion
app.get('/signup', function(req, res){
	//render llamar al motor de vistas pug
	res.render('index',{title:'Platzigram - SignUp'});
})

//en get se envia una ruta y despues una funcion
app.get('/signin', function(req, res){
	//render llamar al motor de vistas pug
	res.render('index',{title:'Platzigram - SignIn'});
})

//api para lograr establecer la comunicacion en backend consumir datos
//un ejemplo de next es saber si el usario esta logueado o no y asi redireccionar o ejecutar la siguiente funcion
	//definir las fotos
	//mediante objetos y subobjetos  
app.get('/api/pictures', function(req, res, next){
	var pictures=[
		{
			user:{
				username:'Soberanis_Car',
				avatar:'https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/12540888_10201196251264580_4577950889139395794_n.jpg?oh=d026ae60ab21ca7c721954d1a03adf8d&oe=5808AC6E'
			},
			url:'office.jpg',
			likes:0,
			liked:false,
			createdAt: new Date().getTime()
		},
		{
			user:{
				username:'Soberanis_Car',
				avatar:'https://scontent-dfw1-1.xx.fbcdn.net/v/t1.0-9/12540888_10201196251264580_4577950889139395794_n.jpg?oh=d026ae60ab21ca7c721954d1a03adf8d&oe=5808AC6E'
			},
			url:'office.jpg',
			likes:4,
			liked:false,
			createdAt: new Date().setDate(new Date().getDate()-10)
		}
	];
	//funcion que recibe un callback, ejecute una fucniocn qur se dara
	setTimeout(function(){
		res.send(pictures);
	},2000);
});

//uso final del app en multer
app.post('/api/pictures',function(req, res){
	//parametro que se va a buscar
	upload(req,res, function(err){
		if(err){
			return res.send(500,"Error Uploading File");
		}
		res.send("File Upload Successful");
	})
});

app.listen(3000, function(err){
	if(err) return console.log("Hubo algun error"), process.exit(1);

	console.log('Platzigram escuchando en el puerto 3000');
	})
