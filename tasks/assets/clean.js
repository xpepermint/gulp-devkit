var del = require('del');
var vinylPaths = require('vinyl-paths');

module.exports = function(gulp, config) {

  gulp.task('assets:clean:styles', function() {
    return gulp.src(config.assets.buildPath + '/**/*.css')
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:scripts', function() {
    return gulp.src(config.assets.buildPath + '/**/*.js', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:views', function() {
    return gulp.src(config.assets.buildPath + '/**/*.html', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:images', function() {
    return gulp.src(config.assets.buildPath + '/**/*.{' + config.assets.imagesExt.join(',') + '}', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:fonts', function() {
    return gulp.src(config.assets.buildPath + '/**/*.{' + config.assets.fontsExt.join(',') + '}', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean', function() {
    return gulp.src(config.assets.buildPath)
      .pipe(vinylPaths(del));
  });

};
