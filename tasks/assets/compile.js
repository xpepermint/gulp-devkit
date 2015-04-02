var stylus = require('gulp-stylus');
var include = require('gulp-file-include');
var bable = require('gulp-babel');

module.exports = function(gulp, config) {

  gulp.task('assets:compile:styles', ['assets:clean:styles'], function() {
    return gulp.src(config.assets.stylesPath + '/**/*.styl')
      .pipe(stylus())
      .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile:scripts', ['assets:clean:scripts'], function() {
    return gulp.src(config.assets.scriptsPath + '/**/*.js')
    .pipe(include({ prefix: '//= ' }))
    .pipe(bable())
    .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile:images', ['assets:clean:images'], function() {
    return gulp.src(config.assets.imagesPath + '/**/*.{' + config.assets.imagesExt + '}')
      .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile:fonts', ['assets:clean:fonts'], function() {
    return gulp.src(config.assets.fontsPath + '/**/*.{' + config.assets.fontsExt + '}')
      .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile', ['assets:compile:styles', 'assets:compile:scripts', 'assets:compile:images', 'assets:compile:fonts']);

};
