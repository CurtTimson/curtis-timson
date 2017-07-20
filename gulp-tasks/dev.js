var gulp = require("gulp");

var less = require("gulp-less");

var lessPath = 'static/less/*.less';

gulp.task('dev', ['less-watch']);

gulp.task('less-watch', function(){
  gulp.watch(lessPath, ['less']);
});

gulp.task('less', function(){
  return gulp.src(lessPath)
    .pipe(less())
    .pipe(gulp.dest('static/css'))
});
