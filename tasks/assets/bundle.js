var RevAll = require('gulp-rev-all');
var gzip = require('gulp-gzip');

module.exports = function(gulp, config) {

  var match = config.assets.buildPath + '/**/*.{css,js,' + config.assets.imagesExt.join(',') + ', ' + config.assets.fontsExt.join(',') + '}';

  gulp.task('assets:bundle:fingerprint', ['assets:pack'], function() {
    var revAll = new RevAll();
    return gulp.src([match])
      .pipe(revAll.revision())
      .pipe(gulp.dest(config.assets.buildPath))
      .pipe(revAll.manifestFile())
      .pipe(gulp.dest(config.assets.buildPath));
  });

  gulp.task('assets:bundle:gzip', ['assets:bundle:fingerprint'], function() {
    return gulp.src([match])
      .pipe(gzip({ append: true }))
      .pipe(gulp.dest(config.assets.buildPath));
  });

  gulp.task('assets:bundle', ['assets:bundle:fingerprint']);

};
