// веб сервер
"use strict";
var gulp        = require('gulp'),
    browserSync = require('browser-sync'),
    config      = require('./_config');

gulp.task('server', function () {
    browserSync.init({
        server: config.build.html
    });
    browserSync.watch(config.build.html+'**/*.*').on('change', browserSync.reload);
});