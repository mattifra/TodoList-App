var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');

gulp.task('styles', function() {
    gulp.src('sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./css/'))
});

gulp.task('minify-css', function() {
  gulp.src('css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./dist/'));
});


//Watch task
gulp.task('default',function() {
    gulp.watch('sass/**/*.scss',['styles']);
    gulp.watch('css/*.css',['minify-css']);
});
