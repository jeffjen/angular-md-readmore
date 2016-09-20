"use strict"

const babel = require("gulp-babel");
const del = require("del");
const gulp = require("gulp");
const sass = require("gulp-sass");

let paths = {
    scss: [ "src/angular-readmore.scss" ],
    main: [ "src/angular-readmore.js" ],

    dest: "dist/"
};

gulp.task("readmore.clean", function () {
    return del([ paths.dest ]);
});

gulp.task("readmore.sass", function () {
    return gulp.
        src(paths.scss).
        pipe(sass()).
        pipe(gulp.dest(paths.dest));
});

gulp.task("readmore.js", function () {
    return gulp.src(paths.main).
        pipe(babel({
            "presets": [ "es2015" ]
        })).
        pipe(gulp.dest(paths.dest));
});

gulp.task("readmore", [ "readmore.sass", "readmore.js" ]);

gulp.task("clean", [ "readmore.clean" ]);
gulp.task("default", [ "readmore" ]);
