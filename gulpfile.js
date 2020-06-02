var gulp        = require('gulp');
var browserSync = require('browser-sync');
var reload      = browserSync.reload;
var sass        = require('gulp-sass');
 
// Tareas para BrowserSync
gulp.task('browser-sync', function() {
    //Archivos a observar
    var files = [
    './style.css', //Nombre de salida del compilado de Sass
    './assets/js/*.js',
    ];
 
    //Se inicializa BrowserSync
    browserSync.init(files, {
    //Sevidor (MAMP)
    proxy: "localhost:8888/html-blank",
    notify: false
    });
});
 
// Tarea para Sass, observa los cambios
gulp.task('sass', function () {
    return gulp.src('./assets/sass/style.scss') //Archivo scss contenedor -> da de salida style.css
        .pipe(sass())
        .pipe(gulp.dest('./'))
        .pipe(reload({stream:true}));
});

//Necesario para v4 gulp.series() para encadenar la tarea
gulp.task('watch-sass', function () {
    gulp.watch('./assets/sass/style.scss', gulp.series('sass'));
});



// Tarea default al correr comando Gulp, se ejecutan simultáneamente las tareas
gulp.task('default', gulp.parallel('watch-sass', 'browser-sync'));
