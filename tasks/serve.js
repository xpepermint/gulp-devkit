var gls = require('gulp-live-server');

module.exports = function(gulp, config) {

  gulp.task('serve', ['watch'], function() {
    var server = gls.new(config.serve.execFile);
    server.start();
    gulp.watch(config.serve.watchPaths, server.notify);
  });

};
