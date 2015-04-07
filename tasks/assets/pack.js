var cssmin = require('gulp-cssmin');
var jsmin = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');

module.exports = function(gulp, config) {

  gulp.task('assets:pack:styles', ['assets:compile:styles'], function() {
    return gulp.src([config.paths.assets.build + '/**/*.css'])
      .pipe(cssmin())
      .pipe(gulp.dest(config.paths.assets.build));
  });

  gulp.task('assets:pack:scripts', ['assets:compile:scripts'], function() {
    return gulp.src([config.paths.assets.build + '/**/*.js'])
      .pipe(jsmin())
      .pipe(gulp.dest(config.paths.assets.build));
  });

  gulp.task('assets:pack:views', ['assets:compile:views'], function() {
    return gulp.src([config.paths.assets.build + '/**/*.html'])
      .pipe(htmlmin())
      .pipe(gulp.dest(config.paths.assets.build));
  });

  gulp.task('assets:pack:images', ['assets:compile:images']);

  gulp.task('assets:pack:fonts', ['assets:compile:fonts']);

  gulp.task('assets:pack', ['assets:pack:styles', 'assets:pack:views', 'assets:pack:scripts', 'assets:pack:images', 'assets:pack:fonts']);

};
