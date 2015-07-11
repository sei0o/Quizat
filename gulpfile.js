var gulp = require('gulp');
var stylus = require("gulp-stylus");
var shell = require("gulp-shell");
var plumber = require("gulp-plumber");

gulp.task("stylus", function(){
  gulp.src("public/stylesheet/*.styl")
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest("public/stylesheet/"));
});

gulp.task("deploy", function(){
  gulp.src("")
    .pipe(plumber())
    .pipe(shell([
        "git add .",
        "git commit -m 'Commit With Gulp'",
        "git push origin master"
      ]));
});

gulp.task("watch", function(){
  gulp.watch("public/stylesheet/*.styl", ["stylus"]);
})

gulp.task("default", ["stylus", "watch"]);
