const gulp = require('gulp');
uglify = require('gulp-uglify'),
concat = require('gulp-concat'),
sass = require('gulp-sass'),
livereload = require('gulp-livereload'),

sass.compiler = require('node-sass');

// Livereload
gulp.task('lreload', function() {
    livereload.reload();
});

gulp.task('sass', function () {
    return gulp.src('./sass/site.sass')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./wwwroot/css/'))
  });
  
gulp.task('scripts', function() {
    gulp.src([
        './node_modules/vue/dist/vue.js',
        './js/elements.js',
        './js/cadastro.js',
        './js/dashboard.js',
        './js/main.js'
    ])
    .pipe(concat('site.js'))
    // .pipe(uglify())
    .pipe(gulp.dest('./wwwroot/js/'))
});

// csHtml
gulp.task('cshtml', function() {
    gulp.src('./Views/**/*.cshtml')
        .pipe(livereload());
});

// Watch
gulp.task('watch', function(){
    livereload.listen();
    gulp.watch('./js/**/*.js', ['scripts','lreload']);
    gulp.watch('./sass/**/*.sass', ['sass', 'lreload']);
    gulp.watch('./Views/**/*.cshtml', ['cshtml']);
});

gulp.task('default', ['gulp watch']);