var gulp = require("gulp");
var uglify = require("gulp-uglify");
var concat = require("gulp-concat");

gulp.task('default', ['compile-scriptjs']);

gulp.task('compile-scriptjs', () => {
    return gulp.src('src/js/script.js')
        .pipe(uglify())
        .pipe(gulp.dest('static/js'))
});

gulp.task('dev', () => {
    gulp.watch('src/js/script.js', ['compile-scriptjs', 'compile-scripts']);
})

gulp.task('compile-scripts', () => {
    return gulp.src(['static/js/dependencies.js', 'static/js/script.js'])
        .pipe(concat('main.js'))
        .pipe(gulp.dest('static/js'))
});