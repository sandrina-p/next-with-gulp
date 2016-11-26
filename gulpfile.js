var gulp = require('gulp'),

    //general plugins
    rename = require('gulp-rename'),
    // browserSync = require('browser-sync'),
    gutil = require('gulp-util'), // gulp error logs


    //scss stuff
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    sassInheritance = require('gulp-sass-multi-inheritance');


var folderStyles = 'static/styles',
    srcScss = [folderStyles+'/**/*.scss', '!'+folderStyles+'/**/_*.scss'];


// deal with scss to css
gulp.task('scss', function(){
    console.log('start task scss');
    gulp.src(srcScss)
        .pipe(sass.sync().on('error', sass.logError))
        .pipe(rename({ suffix: '.min' }))
        .pipe(autoprefixer({
            browsers: ['last 3 version', 'safari 6', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'],
            cascade: true
        }))
        .pipe(gulp.dest(folderStyles))
});


// watch for scss partials when they are changed
gulp.task('scssPartials', function() {
    return gulp.src('assets/**/*.scss')
        .pipe(sassInheritance({dir: 'static'}).on('error', gutil.log)); //find files that depend on the files that have changed
});


//watch for changes
gulp.task('watch', ['scssPartials'], function(){
    gulp.watch(folderStyles+"/**/*.scss", ['scss']);
});


gulp.task('default', function() {
  console.log('run gulp watch');
});

// // TODO allow browser-sync work with next.js.
// it doesn't work right now because .css files are injected by next/react
// so browser-sync can't find them on initial DOM
//
// gulp.task('browser-sync', function() {
//     browserSync({
//         proxy: 'localhost:3000',
//         port: 3000,
//         notify: false,
//         open: false,
//         ghostMode: false
//     });
//
//     gulp.watch(folderStyles+"/**/*.scss", ['scss']);
// });
//
//watch for changes
// gulp.task('watch', ['scssPartials', 'browser-sync'], function(){
//     gulp.watch();
// });
