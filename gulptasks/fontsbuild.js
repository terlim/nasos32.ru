// перенос шрифтов
"use strict";
const gulp      = require('gulp');
const debug     = require('gulp-debug'); // модуль

var config = require('./_config');

gulp.task('fonts_build', function() {
    return gulp.src(config.source.fonts)
        .pipe(debug({title:'fonts'}))
        .pipe(gulp.dest(config.build.fonts));
});