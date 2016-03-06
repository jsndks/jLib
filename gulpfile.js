'use strict';

var gulp = require('gulp');
var jshint = require('gulp-jshint');
var del = require('del');
var browserify = require('gulp-browserify');

// /////////////////////////////////////////////////////////////
// JavaScript
// /////////////////////////////////////////////////////////////
gulp.task('lint', function() {
  return gulp.src('./src/**/*.js')
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

gulp.task('scripts', ['lint'], function() {
    // Single entry point to browserify
    gulp.src('./src/**/*.js')
        .pipe(browserify({
            insertGlobals : true,
            debug : !gulp.env.production
        }))
        .pipe(gulp.dest('./dest/'));
});