var gulp = require('gulp'),
    assets      = require('./_config').build,
    source      = require('./_config').source,
    imagemin    = require('gulp-imagemin');
    debug       = require('gulp-debug');

var config = {
    src  : [ source.img + '/*.jpg', source.img + '/*.jpeg', source.img + '/*.png',source.img + '/*.svg' ],
    dest : assets.img
};


gulp.task('img_build', function () {
    return gulp.src(config.src)
        .pipe(debug({title:'images'}))
        .pipe(imagemin(
            [
                imagemin.jpegtran({progressive: true}),
                imagemin.optipng({optimizationLevel: 5}),
                imagemin.svgo({
                    plugins: [
                        {removeViewBox: true},
                        {cleanupIDs: false}
                    ]
                })
            ]
        ))
        .pipe(gulp.dest(config.dest))
});