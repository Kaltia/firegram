var gulp = require("gulp"),
    watch = require("gulp-watch"),
    less = require("gulp-less"),
    livereload = require("gulp-livereload");

gulp.task("styles",function () {
  return gulp.src("less/*.less")
    .pipe(watch())
    .pipe(less())
    .pipe(gulp.dest("assets/css"))
    .pipe(livereload());
});
