var gls = require('gulp-live-server');

module.exports = function(gulp, config) {

  gulp.task('serve', ['watch'], function() {
    var server = gls.new(config.main);
    server.start();
    gulp.watch([config.assets.buildPath + '/**/*'], server.notify);
  });

};
