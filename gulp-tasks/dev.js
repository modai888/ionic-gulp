'use strict';
var rename = require('gulp-rename');

module.exports = function (gulp,CONF) {
  return function () {
    return gulp.src(CONF.ENVIRONMENT.DEV)
      .pipe(rename(CONF.ENVIRONMENT.FILE))
      .pipe(gulp.dest(CONF.ENVIRONMENT.DEST));
  };
};
