var plumber = require('gulp-plumber');
var stylus = require('gulp-stylus');
var include = require('gulp-file-include');
var bable = require('gulp-babel');
var jade = require('gulp-jade');
var es = require('event-stream');
var livereload = require('gulp-livereload');

module.exports = function(gulp, config) {

  gulp.task('assets:compile:styles', ['assets:clean:styles'], function() {
    var cssstr =  gulp.src(config.paths.assets.styles + '/**/*.css')
      .pipe(gulp.dest(config.paths.assets.build + ''));
    var stylstr = gulp.src(config.paths.assets.styles + '/**/*.styl')
      .pipe(plumber())
      .pipe(include({ prefix: '//= ' }))
      .pipe(stylus())
      .pipe(gulp.dest(config.paths.assets.build + ''));
    return es.merge(cssstr, stylstr)
      .pipe(livereload());
  });

  gulp.task('assets:compile:scripts', ['assets:clean:scripts'], function() {
    return gulp.src(config.paths.assets.scripts + '/**/*.js')
      .pipe(plumber())
      .pipe(include({ prefix: '//= ' }))
      .pipe(bable())
      .pipe(gulp.dest(config.paths.assets.build + ''))
      .pipe(livereload())
      .on('error', function(err) { console.error(err.toString()) });
  });

  gulp.task('assets:compile:views', ['assets:clean:views'], function() {
    var htmlstr =  gulp.src(config.paths.assets.views + '/**/*.html')
      .pipe(include({ prefix: '//= ' }))
      .pipe(gulp.dest(config.paths.assets.build + ''));
    var jadestr = gulp.src(config.paths.assets.views + '/**/*.jade')
      .pipe(plumber())
      .pipe(include({ prefix: '//= ' }))
      .pipe(jade())
      .pipe(gulp.dest(config.paths.assets.build + ''));
    return es.merge(htmlstr, jadestr)
      .pipe(livereload());
  });

  gulp.task('assets:compile:images', ['assets:clean:images'], function() {
    return gulp.src(config.paths.assets.images + '/**/*.{' + config.ext.images.join(',') + '}')
      .pipe(gulp.dest(config.paths.assets.build + ''))
      .pipe(livereload());
  });

  gulp.task('assets:compile:fonts', ['assets:clean:fonts'], function() {
    return gulp.src(config.paths.assets.fonts + '/**/*.{' + config.ext.fonts.join(',') + '}')
      .pipe(gulp.dest(config.paths.assets.build + ''))
      .pipe(livereload());
  });

  gulp.task('assets:compile', ['assets:compile:styles', 'assets:compile:views', 'assets:compile:scripts', 'assets:compile:images', 'assets:compile:fonts']);

};
