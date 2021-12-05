"use strict";

import {
    paths
} from "../gulpfile.babel";
import gulp, {src, dest} from "gulp";
import gulpif from "gulp-if";
import rename from "gulp-rename";
import browsersync from "browser-sync";
import debug from "gulp-debug";
import yargs from "yargs";
import concat from "gulp-concat";
const uglify = require('gulp-uglify-es').default;
const notify = require('gulp-notify');
const babel = require('gulp-babel');

let isProd = false;

gulp.task("scripts", () => {
    src('src/js/vendor/**.js')
        .pipe(concat('vendor.js'))
        .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
        .pipe(dest('dist/js/'))
    return src(
            ['src/js/components/**.js', 'src/js/main.js'])
        .pipe(babel({
            presets: ['@babel/env']
        }))
        .pipe(concat('main.js'))
        .pipe(gulpif(isProd, uglify().on("error", notify.onError())))
        .pipe(dest('dist/js'))
        .pipe(browsersync.stream());
});