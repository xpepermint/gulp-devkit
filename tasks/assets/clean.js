var rimraf = require('gulp-rimraf');

module.exports = function(gulp, config) {

  gulp.task('assets:clean:styles', function() {
    return gulp.src(config.assets.buildPath + '/**/.css', { read: false })
      .pipe(rimraf());
  });

  gulp.task('assets:clean:scripts', function() {
    return gulp.src(config.assets.buildPath + '/**/.js', { read: false })
      .pipe(rimraf());
  });

  gulp.task('assets:clean:images', function() {
    return gulp.src(config.assets.buildPath + '/**/.{' + config.assets.imagesExt + '}', { read: false })
      .pipe(rimraf());
  });

  gulp.task('assets:clean:fonts', function() {
    return gulp.src(config.assets.buildPath + '/**/.{' + config.assets.fontsExt + '}', { read: false })
      .pipe(rimraf());
  });

  gulp.task('assets:clean', ['assets:clean:styles', 'assets:clean:scripts', 'assets:clean:images', 'assets:clean:fonts']);

};
