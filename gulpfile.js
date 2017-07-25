var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    gulp.src('assets/stylesheets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('assets/stylesheets/css/'))
});

gulp.task('minify-css', function() {
  gulp.src('assets/stylesheets/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('assets/stylesheets/build/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('assets/stylesheets/sass/**/*.scss',['styles']);
    gulp.watch('assets/stylesheets/css/*.css',['minify-css']);
});
