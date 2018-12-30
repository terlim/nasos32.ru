"use strict";
const gulp              = require('gulp');
const clean             = require('./clean');
const html_build        = require('./htmlbuild');
const fonts_build       = require('./fontsbuild');
const css_build         = require('./css');
const scss_build        = require('./scss');
const img_build         = require('./imgbuild');
const js_build          = require('./jsbuild');
const icons_build       = require('./iconfont');

const server            = require('./browsersync');
const watch             = require('./watch');

gulp.task('default', gulp.series ('clean','icons_build','img_build','html_build','fonts_build','scss_build','css_build','js_build',gulp.parallel('server','watch')));