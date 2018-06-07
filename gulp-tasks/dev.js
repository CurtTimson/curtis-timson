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

gulp.task("copy-npm-files", ['copy-npm-files-static']);

gulp.task('copy-npm-files-static', () => {
  return gulp.src(['./node_modules/jquery/dist/jquery.min.js',
                    './node_modules/angular/angular.min.js',
                    './node_modules/lastfm-nowplaying/dist/lastfm-nowplaying.min.js',
                    './node_modules/lastfm-nowplaying/dist/lastfm-nowplaying.min.css'])
        .pipe(gulp.dest('./static/npm/'));
});
