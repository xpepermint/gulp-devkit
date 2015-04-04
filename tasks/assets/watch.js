var livereload = require('gulp-livereload');

module.exports = function(gulp, config) {

  gulp.task('assets:watch:styles', ['assets:compile:styles'], function() {
    return gulp.watch(config.paths.assets.styles + '/**/*.styl', ['assets:compile:styles']);
  });

  gulp.task('assets:watch:scripts', ['assets:compile:scripts'], function() {
    return gulp.watch(config.paths.assets.scripts + '/**/*.js', ['assets:compile:scripts']);
  });

  gulp.task('assets:watch:views', ['assets:compile:views'], function() {
    return gulp.watch(config.paths.assets.scripts + '/**/*.html', ['assets:compile:views']);
  });

  gulp.task('assets:watch:images', ['assets:compile:images'], function() {
    return gulp.watch(config.paths.assets.images + '/**/*.{' + config.ext.images.join(',') + '}', ['assets:compile:images']);
  });

  gulp.task('assets:watch:fonts', ['assets:compile:fonts'], function() {
    return gulp.watch(config.paths.assets.fonts + '/**/*.{' + config.ext.fonts.join(',') + '}', ['assets:compile:fonts']);
  });

  gulp.task('watch', ['assets:watch:styles', 'assets:watch:scripts', 'assets:watch:views', 'assets:watch:images', 'assets:watch:fonts'], function() {
    if (config.livereload.enabled) {
      livereload.listen();
    }
    gulp.watch([config.paths.views + '/**/*'], livereload.reload);
  });

};
