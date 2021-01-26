/*
/!*
const { src, dest, watch, parallel, series } = require("gulp");
const sass = require('gulp-sass');
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const eslint = require("gulp-eslint");
const sync = require("browser-sync").create();


function generateCSS(cb) {
    src('./sass/!**!/!*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(dest('public/stylesheets'))
        .pipe(sync.stream());
    cb();
}


function generateHTML(cb) {
    src("./views/index.ejs")
        .pipe(ejs({
            title: "Hello Semaphore CI!",
        }))
        .pipe(rename({
            extname: ".html"
        }))
        .pipe(dest("public"));
    cb();
}


function runLinter(cb) {
    return src(['**!/!*.js', '!node_modules/!**'])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError())
        .on('end', function() {
            cb();
        });
}

function watchFiles(cb) {
    watch('views/!**.ejs', generateHTML);
    watch('sass/!**.scss', generateCSS);
    watch([ '**!/!*.js', '!node_modules/!**'], parallel(runLinter, runTests));
}


function browserSync(cb) {
    sync.init({
        server: {
            //proxy: "localhost:3001",
            baseDir: "./public"
        }
    });

    watch('views/!**.ejs', generateHTML);
    watch('sass/!**.scss', generateCSS);
    watch("./public/!**.html").on('change', sync.reload);
}


exports.css = generateCSS;
exports.html = generateHTML;
exports.lint = runLinter;
exports.watch = watchFiles;
exports.sync = browserSync;

exports.default = series(runLinter,parallel(generateCSS,generateHTML));
*!/


/!*const gulp = require('gulp');
const nodemon = require('gulp-nodemon');

gulp.task('serve', function() {
    nodemon({
        script: 'app.js',
        ext: 'js',
        env: {
            NODE_ENV: 'dev',
            PORT: 9080
        },
        ignore: ['./node_modules/!**']
    });
});*!/

/!*
const gulp = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');

exports.run = function () {
    browserSync.init({
        server: {
            proxy: 'localhost:3000',
            baseDir: './public/',
            port: 3000
        }
    });

    gulp.watch('public/scss/!*.scss', css).on('change', browserSync.reload);
};

function css() {
    return gulp
        .src('public/scss/!*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('public/stylesheets'))
        .pipe(browserSync.stream());
}
*!/

var
    gulp         = require('gulp'),
    del          = require('del'),
    nodemon      = require('gulp-nodemon'),
    browserSync  = require('browser-sync').create()
;

// CLEAN
gulp.task('clean', function() {
    return del('dist');
});

// VIEWS
gulp.task('dev:views', function() {
    return gulp
        .src('src/views/!**!/!*.ejs')
        //Process views
        .pipe(gulp.dest('dist/views'))
})
gulp.task('watch:views', function(done) {
    gulp.watch('src/views/!**!/!*.ejs', gulp.series('dev:views'));
    done();
})

//STYLES
gulp.task('dev:styles', function() {
    return gulp
        .src('src/styles/!**!/!*.css')
        //Process styles
        .pipe(gulp.dest('dist/public/styles'))
})
gulp.task('watch:styles', function(done) {
    gulp.watch('src/styles/!**!/!*.css', gulp.series('dev:styles'));
    done();
})

//SERVER
gulp.task('server', function (cb) {
    var called = false;
    //config.plugins.nodemon
    return nodemon({
        script: 'app.js',
        ignore: [
            'gulpfile.js',
            'config/',
            'node_modules/'
        ]
    })
        .on('start', function () {
            if (!called) {
                called = true;
                cb();
            }
        })
});

// BROWSER-SYNC

function browserSyncInit(done) {
    browserSync.init({
        proxy: "localhost:3000",
        port: 5000,
        files: [
            'dist/!**!/!*.*'
        ],
        notify: true
    })
    done();
}
gulp.task('browser-sync', browserSyncInit);

//DEV
gulp.task('dev', gulp.parallel('dev:styles', 'dev:views'));

//WATCH
gulp.task('watch', gulp.parallel('watch:styles', 'watch:views'));

//DEFAULT
gulp.task('default', gulp.series('clean', 'dev', 'server', gulp.parallel('watch','browser-sync')));*/
