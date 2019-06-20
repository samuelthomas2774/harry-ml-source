/*
    Gulpfile
    Portfolio
*/

const gulp = require('gulp')
const sass = require('gulp-sass')
const htmlmin = require('gulp-htmlmin')
const pump = require('pump')
const concat = require('gulp-concat')

gulp.task('downloads', (cb) => {
    pump([
        gulp.src('./src/dl/*.*'),
        gulp.dest('./build/dl/')
    ], cb)
});
 
gulp.task('html', (cb) => {
    pump([
        gulp.src('./src/**.html'),
        htmlmin({ collapseWhitespace: true }),
        gulp.dest('./build/')
    ], cb)
});

gulp.task('scss', (cb) => {
    pump([
        gulp.src('./src/scss/**.scss'),
        sass(),
        concat('main.css'),
        gulp.dest('./build/css/')
    ], cb)
});

// gulp.task('js', (cb) => {
//     pump([
//         gulp.src([
//             './src/js/requirejquery.js',
//             './src/js/ghpfp.js',
//             './src/js/main.js'
//         ]),
//         gulp.dest('./build/js/')
//     ], cb)
// });

gulp.task('build', gulp.parallel('html', 'scss', 'downloads'));

gulp.task('watch', (cb) => {
        gulp.watch('./src/**.html', gulp.parallel('html'));
        gulp.watch('./src/scss/**.scss', gulp.parallel('scss'));
        gulp.watch('./src/dl/*.*', gulp.parallel('downloads'));
        cb();
});
