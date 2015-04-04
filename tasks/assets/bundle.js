var RevAll = require('gulp-rev-all');
var gzip = require('gulp-gzip');

module.exports = function(gulp, config) {

  var match = config.paths.assets.build + '/**/*.{css,js,' + config.ext.images.join(',') + ', ' + config.ext.fonts.join(',') + '}';

  gulp.task('assets:bundle:fingerprint', ['assets:pack'], function() {
    var revAll = new RevAll();
    return gulp.src([match])
      .pipe(revAll.revision())
      .pipe(gulp.dest(config.paths.assets.build))
      .pipe(revAll.manifestFile())
      .pipe(gulp.dest(config.paths.assets.build));
  });

  gulp.task('assets:bundle:gzip', ['assets:bundle:fingerprint'], function() {
    return gulp.src([match])
      .pipe(gzip({ append: true }))
      .pipe(gulp.dest(config.paths.assets.build));
  });

  gulp.task('assets:bundle', ['assets:bundle:fingerprint']);

};
