var gulp = require('gulp');
var sass = require('gulp-sass'); //编译sass
var webserver = require('gulp-webserver'); //启服务
var mincss = require('gulp-clean-css'); //启服务
var minjs = require('gulp-uglify'); //压缩js
//编译sass
gulp.task('bysass', function() {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./src/css'))
});
//压缩css
gulp.task('mincss', function() {
    return gulp.src('./src/css/**/*.css')
        .pipe(mincss())
        .pipe(gulp.dest('./dist/css'))
});

//服务器
gulp.task('startserver', function() {
    return gulp.src('src')
        .pipe(webserver({
            host: "169.254.112.84",
            port: 8080,
            livereload: true
        }))
});
//压缩js
gulp.task('minjs', function() {
    return gulp.src('./src/js/**/*.js')
        .pipe(minjs())
        .pipe(gulp.dest('./dist/js'))
});

//管理开发任务
gulp.task('dev', gulp.series('bysass', 'minjs', 'startserver', 'mincss'));