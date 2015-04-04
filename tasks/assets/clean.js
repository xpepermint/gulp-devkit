var del = require('del');
var vinylPaths = require('vinyl-paths');

module.exports = function(gulp, config) {

  gulp.task('assets:clean:styles', function() {
    return gulp.src(config.paths.assets.build + '/**/*.css')
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:scripts', function() {
    return gulp.src(config.paths.assets.build + '/**/*.js', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:views', function() {
    return gulp.src(config.paths.assets.build + '/**/*.html', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:images', function() {
    return gulp.src(config.paths.assets.build + '/**/*.{' + config.ext.images.join(',') + '}', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean:fonts', function() {
    return gulp.src(config.paths.assets.build + '/**/*.{' + config.ext.fonts.join(',') + '}', { read: false })
      .pipe(vinylPaths(del));
  });

  gulp.task('assets:clean', function() {
    return gulp.src(config.paths.assets.build)
      .pipe(vinylPaths(del));
  });

};
