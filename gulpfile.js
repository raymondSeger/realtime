var gulp        = require('gulp');
var uglify      = require('gulp-uglify');
var pump        = require('pump');

gulp.task('compress', function (cb) {
    pump([
            gulp.src('public/js/*.js'),
            uglify(),
            gulp.dest('dist')
        ],
        cb
    );
});

gulp.task('hello', function() {
    console.log('Hello Zell');
});

gulp.task('default', function() {
    gulp.run('hello', 'compress');
});
