var gulp = require("gulp");
var uglify = require("gulp-uglify");

gulp.task('default', ['compile-script']);

gulp.task('compile-script', () => (
    gulp.src('src/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('static/js'))
));

gulp.task('dev', () => {
    gulp.watch('src/js/script.js', ['compile-script']);
})