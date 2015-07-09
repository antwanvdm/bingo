//All dependencies loaded
var gulp = require('gulp');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');

//Folder paths
var jsBuildPath = 'js/dist';

//Javascript files list
var javascriptFiles = [
    'js/src/main.js',
    'js/src/modules/bingoItem.js',
    'js/src/modules/bingoCard.js'
];

/**
 * Build for production, without sourcemaps and uglified
 * Runs clean before running this
 */
gulp.task('build-js', function ()
{
    return gulp.src(javascriptFiles)
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
