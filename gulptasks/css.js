// сборка финального CSS

"use strict";
var gulp            = require('gulp'),
    plumber         = require('gulp-plumber'),
    notify          = require('gulp-notify'),
    postcss         = require('gulp-postcss'),
    cssnano         = require('gulp-cssnano'),
    rename          = require('gulp-rename'),
    config          = require('./_config');

var processorArray = [
    require('precss')(),
    require('postcss-focus')(),
    require('css-mqpacker')(),
    require('postcss-combine-duplicated-selectors')()

];

gulp.task('css_build', function () {
    return gulp.src(config.source.css)
        .pipe(plumber({
            errorHandler: notify.onError(function (err) {
                return{
                    title: 'CSS' + err.plugin,
                    message: err.message
                }
            })
        })) // отслеживание ошибок
        .pipe(postcss(processorArray))
        .pipe(gulp.dest(config.build.css)) // выгружаем в build
        .pipe(cssnano({
            zindex: false,
            discardComments: {
                removeAll: true
            }
        }))
        .pipe(rename({ suffix: '.min', prefix : '' }))
        .pipe(gulp.dest(config.build.css));

});