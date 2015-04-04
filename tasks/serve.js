var nodemon = require('gulp-nodemon');
var livereload = require('gulp-livereload');

module.exports = function(gulp, config) {
  var delay;

  var notify = function() {
    if (delay) clearTimeout(delay);
    delay = setTimeout(livereload.reload, 1000);
  }

  gulp.task('serve', ['watch'], function() {
    nodemon(config.nodemon)
    .on('start', notify)
    .on('restart', notify);
  });
};
