let gulp = require("gulp");
let uglify = require("gulp-uglify");
let sass = require("gulp-sass");
let cleanCSS = require('gulp-clean-css');
let concat = require("gulp-concat");
let runSequence = require('run-sequence');

gulp.task('default', ['compile-scriptjs']);

// compile scripts
(gulp => {

    gulp.task('compile-scriptjs', () => {
        return gulp.src('src/js/script.js')
            .pipe(uglify())
            .pipe(gulp.dest('static/js'))
    });

    gulp.task('compile-scripts', () => {
        return gulp.src(['static/js/dependencies.js', 'static/js/script.js'])
            .pipe(concat('main.js'))
            .pipe(gulp.dest('static/js'))
    });

})(gulp);


//compile styles
(gulp => {

    gulp.task('compile-styles-sass', () => {
        return gulp.src('src/sass/style.scss')
            .pipe(sass())
            .pipe(cleanCSS())
            .pipe(gulp.dest('static/css'));
    });

    gulp.task('compile-styles', () => {
        return gulp.src(['static/css/dependencies.css', 'static/css/style.css'])
            .pipe(concat('main.css'))
            .pipe(gulp.dest('static/css'));
    });

})(gulp);



gulp.task('dev', () => {
    gulp.watch(['src/**/*'], ['dev-tasks']);
})

gulp.task('dev-tasks', () => {
    runSequence('compile-scriptjs', 'compile-scripts', 'compile-styles-sass', 'compile-styles');
})