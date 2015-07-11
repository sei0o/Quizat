var gulp = require('gulp');
var stylus = require("gulp-stylus");
var shell = require("gulp-shell");
var plumber = require("gulp-plumber");
var minimist = require("minimist");

gulp.task("stylus", function(){
  gulp.src("public/stylesheet/*.styl")
    .pipe(plumber())
    .pipe(stylus())
    .pipe(gulp.dest("public/stylesheet/"));
});

gulp.task("deploy", function(){
  var args = minimist(process.argv.slice(2));
  var commitMsg = args.m;
  gulp.src("")
    .pipe(plumber())
    .pipe(shell([
        "git add .",
        "git commit -m '"+ commitMsg +"'",
        "git push origin master"
      ]));
});

gulp.task("watch", function(){
  gulp.watch("public/stylesheet/*.styl", ["stylus"]);
})

gulp.task("default", ["stylus", "watch"]);
