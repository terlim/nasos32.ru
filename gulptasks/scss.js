// SCSS-> CSS

"use strict";
var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    notify          = require('gulp-notify'),
    cached          = require('gulp-cached'),
    dependents      = require('gulp-dependents'),
    scss            = require('gulp-sass'),
    debug           = require('gulp-debug'),
    autoprefixer    = require('gulp-autoprefixer'),
    cssbeautify     = require('gulp-cssbeautify'),
    config          = require('./_config');

gulp.task('scss_build', function() {
    return gulp
        .src(config.source.scss)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return{
                    title: 'SCSS->CSS' + err.plugin,
                    message: err.message
                }
            })
        })) // отслеживание ошибок
        .pipe(cached('scss'))
        .pipe(dependents())
        .pipe(scss())
        .pipe(debug({title:'scss->css'}))
        .pipe(autoprefixer(['last 15 versions']))
        .pipe(debug({title:'auto-prefixer'}))
        .pipe(cssbeautify())
        .pipe(gulp.dest(function(file){
            return file.base;
        }))
});