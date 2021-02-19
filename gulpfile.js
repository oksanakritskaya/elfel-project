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

function html() {
    return src('views/*.ejs')
        .pipe(browserSync.stream());
}

function css() {
    return src('src/stylesheets/*.scss')
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
    return src('public/javascripts/*.js')
        .pipe(sourcemaps.init())
        .pipe(concat('index.js'))
        .pipe(terser())
        .pipe(sourcemaps.write('.'))
        .pipe(dest('public/javascripts'))
        .pipe(browserSync.stream());
}

function images() {
    return src(['src/images/*.*',  '!src/images/sprite.svg'])
        .pipe(imagemin()).pipe(dest('public/images'))
        .pipe(browserSync.stream());
}

function images_portfolio() {
    return src('src/images/portfolio/*.*')
        .pipe(imagemin()).pipe(dest('public/images/portfolio'))
        .pipe(browserSync.stream());
}

function icons() {
    return src('src/images/icons/*.svg')
        .pipe(svgSprite({
            mode: {
                stack: {
                    sprite: "../sprite.svg"
                }
            },
        }))
        .pipe(dest('public/images'))
        .pipe(browserSync.stream());
}

task('build',
    parallel(images, icons)
);

task('watch', function () {
    browserSync.init({
        port: 3002,
        proxy: 'http://localhost:3000/',
        ui: {port: 3003},
        reloadDelay: 1000
    });
    watch('src/images/*.*', images);
    watch('src/images/portfolio/*.*', images_portfolio);
    watch('src/images/icons/*.*', icons);
    watch('views/*.ejs', html);
    watch('public/javascripts/*.js', js);
    watch('src/stylesheets/*.scss', css).on('change', browserSync.reload);
});