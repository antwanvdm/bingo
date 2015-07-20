//All dependencies loaded
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var react = require('gulp-react');

//Folder paths
var jsBuildPath = 'js/dist';

//Javascript files list
var javascriptFiles = [
    'node_modules/react/dist/react.js',
    'node_modules/socket.io-client/socket.io.js',
    'js/src/main.js',
    'js/src/modules/BingoItem.js',
    'js/src/modules/BingoCard.js'
];

/**
 * Build for production, without sourcemaps and uglified
 * Runs clean before running this
 */
gulp.task('build-js', function ()
{
    return gulp.src(javascriptFiles)
        .pipe(react())
        .pipe(concat('final.min.js'))
        .pipe(gulp.dest(jsBuildPath));
});

/**
 * Default watcher for development. Cleans build folder before and does a build before starting watching
 */
gulp.task('default', function ()
{
    gulp.start('build-js');

    gulp.watch(javascriptFiles, ['build-js']);
});
