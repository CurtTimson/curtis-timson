let gulp = require("gulp");
let less = require("gulp-less");
let concat = require('gulp-concat');
let cleanCSS = require('gulp-clean-css');
let uglify = require('gulp-uglify');

let lessPath = 'static/less/*.less';

//CSS
(() => {
  gulp.task('less-watch', function(){
    gulp.watch(lessPath, ['less']);
  });

  gulp.task('less', function(){
    return gulp.src(lessPath)
      .pipe(less())
      .pipe(gulp.dest('static/css'))
  });

  gulp.task('compile-ct-main-css', () => {
    return gulp.src([
      './node_modules/prismjs/themes/prism-okaidia.css',
      './node_modules/lastfm-nowplaying/dist/lastfm-nowplaying.min.css',
      './static/css/ct.css'
    ])
    .pipe(cleanCSS())
    .pipe(concat('ct-main.css'))
    .pipe(gulp.dest('./static/css'));
  });
})();

//JS
gulp.task('compile-ct-vendor-js', () => {
  return gulp.src([
    './node_modules/jquery/dist/jquery.min.js',
    './node_modules/history.js/scripts/bundled/html4+html5/jquery.history.js',
    './node_modules/imagesloaded/imagesloaded.pkgd.min.js',
    './node_modules/masonry/dist/masonry.pkgd.min.js',
    './node_modules/fitvids/jquery.fitvids.js',
    './node_modules/prismjs/prism.js',
    './node_modules/nprogress/nprogress.js',
    './src/js/vendor/gist-embed.min.js',
    './node_modules/angular/angular.min.js',
    './node_modules/lastfm-nowplaying/dist/lastfm-nowplaying.min.js'
  ])
  .pipe(uglify())
  .pipe(concat('ct-vendor.js'))
  .pipe(gulp.dest('./static/js'));
});

gulp.task('compile-ct-main-js', () => {
  return gulp.src([
    './src/js/ct.js'
  ])
  .pipe(uglify())
  .pipe(concat('ct-main.js'))
  .pipe(gulp.dest('./static/js'));
});


gulp.task('dev', gulp.series('less-watch'));