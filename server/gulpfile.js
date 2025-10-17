var gulp = require("gulp");
var ts = require("gulp-typescript");
var sourcemaps = require("gulp-sourcemaps");

var tsProject = ts.createProject("tsconfig.json");

gulp.task("build", function () {
  return gulp.src(["src/**/*.ts"], { base: "src" })   // ✅ explicit inputs
    .pipe(sourcemaps.init())
    .pipe(tsProject())
    .js
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest("dist2"));                        // ✅ your chosen output
});
