var gulp = require('gulp');
var git = require('gulp-git');

// Run git pull
// remote is the remote repo
// branch is the remote branch to pull from
gulp.task('pull', function(done){
  git.pull('origin', 'master', {args: '--rebase'}, function (err) {
    if (err) throw err;
  });
  done();
});
// gulp.task('default', 'pull');
gulp.task('default', gulp.series('pull'));
