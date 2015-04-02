module.exports = function(gulp, config) {

  gulp.task('assets:watch:styles', ['assets:compile:styles'], function() {
    return gulp.watch(config.assets.stylesPath + '/**/*.styl', ['assets:compile:styles']);
  });

  gulp.task('assets:watch:scripts', ['assets:compile:scripts'], function() {
    return gulp.watch(config.assets.scriptsPath + '/**/*.js', ['assets:compile:scripts']);
  });

  gulp.task('assets:watch:images', ['assets:compile:images'], function() {
    return gulp.watch(config.assets.imagesPath + '/**/*.{' + config.assets.imagesExt.join(',') + '}', ['assets:compile:images']);
  });

  gulp.task('assets:watch:fonts', ['assets:compile:fonts'], function() {
    return gulp.watch(config.assets.fontsPath + '/**/*.{' + config.assets.fontsExt.join(',') + '}', ['assets:compile:fonts']);
  });

  gulp.task('watch', ['assets:watch:styles', 'assets:watch:scripts', 'assets:watch:images', 'assets:watch:fonts']);

};
