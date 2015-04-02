var _ = require('lodash');
var defaults = require('./defaults');

module.exports = function(gulp, config) {

  config = _.merge(defaults, config);

  require('./tasks/assets/clean')(gulp, config);
  require('./tasks/assets/compile')(gulp, config);
  require('./tasks/assets/watch')(gulp, config);
  require('./tasks/assets/pack')(gulp, config);
  require('./tasks/assets/bundle')(gulp, config);
  require('./tasks/serve')(gulp, config);
};
