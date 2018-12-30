// сборка финального js

"use strict";
var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    notify          = require('gulp-notify'),
    rigger          = require('gulp-rigger'),
    uglify          = require('gulp-uglify'),

    config          = require('./_config');

gulp.task('js_build', function () {
    return gulp.src(config.source.js) // получим файл main.js
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return{
                    title: 'JS'  + err.plugin,
                    message: err.message
                }
            })
        })) // отслеживание ошибок
        .pipe(rigger()) // импортируем все указанные файлы в main.main.js
        .pipe(uglify()) // минимизируем main.js
        .pipe(debug({title:'js'}))
        .pipe(gulp.dest(config.build.js)) // положим готовый файл

});
