// сборка iconFont

"use strict";
var gulp            = require('gulp'),
    iconfontCss     = require('gulp-iconfont-css'),
    iconfont          = require('gulp-iconfont'),
    config          = require('./_config');

const fontName      = 'myiconfont';

// icon fonts
gulp.task('icons_build', function(){
    return gulp.src(config.source.icon)
        .pipe(iconfontCss({
            path: config.source.icon_template_path,
            fontName: fontName,

            targetPath: config.source.icon_font_path,
            fontPath: '../fonts/icons/'
        }))
        .pipe(iconfont({
            fontName: fontName,
            prependUnicode: true,
            formats: ['svg', 'ttf', 'eot', 'woff', 'woff2'],
            normalize: true,
            fontHeight: 1001

        }))
        .pipe(gulp.dest('src/fonts/icons'))

});
