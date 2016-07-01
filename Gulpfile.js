var gulp =require('gulp');
var sass=require('gulp-sass');
var rename=require('gulp-rename');
var babel=require('babelify');
var browserify=require('browserify');
var source=require('vinyl-source-stream');
var watchify=require('watchify');

gulp.task('styles',function(){
	gulp
		.src('index.scss')
		.pipe(sass())
		.pipe(rename('styles.css'))
		.pipe(gulp.dest('public'));
	})

gulp.task('assets',function(){
	gulp
		.src('assets/*')//Glob expresiones regulares para extensiones etc
		.pipe(gulp.dest('public'));
	})



//definir funcion para saber si se hace watch o no
function compile(watch){
	var bundle=browserify('./src/index.js');
	//checa si el valor es verdadero o false
	//Cada vez que haya cambios entrara a esta condicion
	if(watch){
		//En caso de que exista watch
		bundle=watchify(bundle);
		//va ejecutar el codigo correspondiente
		//on recibe un evento en string  
		bundle.on('update', function(){
			console.log('---> Bundling...');
			rebundle();
		})
	}

	//rebundle es la actualizacion de mandar la tarea de los scripts
function rebundle(){

	//llamamos bundle que esta fuera de esta funcion
	bundle 
	//pasar la ruta del archivo que procese
	/*browserify('./src/index.js')*/
	//transformarlo con babel
	.transform(babel, {presets:['es2015'], plugins:['syntax-async-functions', 'transform-regenerator']})
	//procesar y generar archivo
	.bundle()
	//errores
	.on('error',function(err){
		console.log(err); this.emit('end')
	})
	//transformar algo que devuelve bundle a algo que entienda gulp con source (vinyl-source-stream)
	.pipe(source('index.js'))
	//rename renombrar archivo
	.pipe(rename('app.js'))
	//destino en la cual ira el app.js
	.pipe(gulp.dest('public'));
}

	
	//se llama por primera vez
	rebundle();
}

//build gulp, como hacer la compilacion
gulp.task('build', function(){
	return compile();
})
//vigilar los cambios
gulp.task('watch',function(){
	return compile(true);
})

gulp.task('default',['styles','assets','build'])
//para ejecuta una tarea solo se llama gulp 'nombre de la tarea'