var gulp        = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function(cb){
  runSequence('styles', cb);
});

gulp.task('default', function(cb){
  runSequence('clean', 'build', ['watch','connect'], cb);
});
