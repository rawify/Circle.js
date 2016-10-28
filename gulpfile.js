
'use strict';

var gulp = require('gulp');
var closureCompiler = require('google-closure-compiler').gulp();

gulp.task('compile', function() {
  return gulp.src(['circle.js'])
    .pipe(closureCompiler({
      compilation_level: 'ADVANCED',
      language_in: 'ES6_STRICT',
      externs: 'externs.js',
      language_out: 'ES5_STRICT',
      js_output_file: 'circle.min.js',
      warning_level: 'VERBOSE'
    }))
    .pipe(gulp.dest('.'));
});

gulp.task('default', ['compile']);
