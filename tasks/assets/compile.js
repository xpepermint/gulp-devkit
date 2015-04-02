var stylus = require('gulp-stylus');
var include = require('gulp-file-include');
var bable = require('gulp-babel');
var jade = require('gulp-jade');
var es = require('event-stream');

module.exports = function(gulp, config) {

  gulp.task('assets:compile:styles', ['assets:clean:styles'], function() {
    var cssstr =  gulp.src(config.assets.stylesPath + '/**/*.css')
      .pipe(gulp.dest(config.assets.buildPath + ''));
    var stylstr = gulp.src(config.assets.stylesPath + '/**/*.styl')
      .pipe(include({ prefix: '//= ' }))
      .pipe(stylus())
      .pipe(gulp.dest(config.assets.buildPath + ''));
    return es.merge(cssstr, stylstr);
  });

  gulp.task('assets:compile:scripts', ['assets:clean:scripts'], function() {
    return gulp.src(config.assets.scriptsPath + '/**/*.js')
      .pipe(include({ prefix: '//= ' }))
      .pipe(bable())
      .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile:views', ['assets:clean:views'], function() {
    var htmlstr =  gulp.src(config.assets.viewsPath + '/**/*.html')
      .pipe(include({ prefix: '//= ' }))
      .pipe(gulp.dest(config.assets.buildPath + ''));
    var jadestr = gulp.src(config.assets.viewsPath + '/**/*.jade')
      .pipe(include({ prefix: '//= ' }))
      .pipe(jade())
      .pipe(gulp.dest(config.assets.buildPath + ''));
      return es.merge(htmlstr, jadestr);
  });

  gulp.task('assets:compile:images', ['assets:clean:images'], function() {
    return gulp.src(config.assets.imagesPath + '/**/*.{' + config.assets.imagesExt.join(',') + '}')
      .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile:fonts', ['assets:clean:fonts'], function() {
    return gulp.src(config.assets.fontsPath + '/**/*.{' + config.assets.fontsExt.join(',') + '}')
      .pipe(gulp.dest(config.assets.buildPath + ''));
  });

  gulp.task('assets:compile', ['assets:compile:styles', 'assets:compile:views', 'assets:compile:scripts', 'assets:compile:images', 'assets:compile:fonts']);

};
