// сборка html
"use strict";

const gulp      = require('gulp');
const plumber   = require('gulp-plumber'); // модуль для отслеживания ошибок
const rigger    = require('gulp-rigger');  // модуль для импорта содержимого одного файла в другой
const debug     = require('gulp-debug');   // модуль вывода файлов в потоке
const notify    = require('gulp-notify');  // модуль уведомления об ошибках


var config = require('./_config');

gulp.task('html_build', function () {
    return gulp.src(config.source.html) // выбор всех html страниц по указанному пути

        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return{
                    title: 'HTML' + err.plugin,
                    message: err.message
                }
            })
        })) // отслеживание ошибок
        .pipe(rigger()) //Прогоним через rigger
        .pipe(debug({title:'HTML'}))
        .pipe(gulp.dest(config.build.html));// выкладывание готовых файлов

});