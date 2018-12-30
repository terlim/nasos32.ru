// Watch

"use strict";
var gulp            = require('gulp'),
    config          = require('./_config');

const html_build        = require('./htmlbuild');
const fonts_build       = require('./fontsbuild');
const css_build         = require('./css');
const scss_build        = require('./scss');
const img_build         = require('./imgbuild');
const js_build          = require('./jsbuild');
const icons_build       = require('./iconfont');


gulp.task('watch', function(){
    gulp.watch(config.source.html_src, gulp.series('html_build'));
    gulp.watch(config.source.html, gulp.series('html_build'));
    gulp.watch(config.source.fonts, gulp.series('fonts_build'));
    gulp.watch(config.source.css, gulp.series('css_build'));
    gulp.watch(config.source.scss, gulp.series('scss_build'));
    gulp.watch(config.source.css_src, gulp.series('css_build'));
    gulp.watch(config.source.img, gulp.series('img_build'));
    gulp.watch(config.source.js, gulp.series('js_build'));
    gulp.watch(config.source.icon, gulp.series('icons_build'));

});