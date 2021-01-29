const gulp = require('gulp'),
    {src, series, task, parallel, dest, watch} = require('gulp'),
    imagemin = require('gulp-imagemin'),
    concat = require('gulp-concat'),
    terser = require('gulp-terser'),
    sourcemaps = require('gulp-sourcemaps'),
    cssnano = require('gulp-cssnano'),
    autoprefixer = require('gulp-autoprefixer'),
    browserSync = require('browser-sync'),
    del = require('del'),
    svgSprite = require('gulp-svg-sprite'),
    ts = require('gulp-typescript');
var sass = require('gulp-sass');
sass.compiler = require('node-sass');

function css() {
    return src('public/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass().on('error', sass.logError))
        .pipe(concat('styles.css'))
        .pipe(autoprefixer())
        .pipe(cssnano())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/stylesheets'))
        .pipe(browserSync.stream());
}

function js() {
    return src('public/ts/*.ts')
        .pipe(sourcemaps.init())
        .pipe(ts())
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/javascripts'))
        .pipe(browserSync.stream());
}

task('watch', function () {
    browserSync.init({
        port: 3002,                      //this can be any port, it will show our app
        proxy: 'http://localhost:3000/', //this is the port where express server works
        ui: {port: 3003},                //UI, can be any port
        reloadDelay: 1000                //Important, otherwise syncing will not work
    });
    watch('public/ts/*.ts', js);
    watch('public/scss/*.scss', css).on('change', browserSync.reload);
});