"use strict";
const gulp = require('gulp');
const del  = require('del'); // плагин для удаления файлов и каталогов

// Clean
gulp.task('clean', function () {
    return del('build');
});