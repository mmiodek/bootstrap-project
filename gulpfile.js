var gulp = require('gulp');
var nunjucksRender = require('gulp-nunjucks-render');
var sass = require('gulp-sass');

// gulp.task('default', defaultTask);

// function defaultTask(done) {
//   // place code for your default task here
//   done();
// }

gulp.task('nunjucks', function() {
  // Gets .html and .nunjucks files in pages
  return gulp.src('app/pages/**/*.+(html|nunjucks)')
  // Renders template with nunjucks
  .pipe(nunjucksRender({
      path: ['app/templates']
    }))
  // output files in app folder
  .pipe(gulp.dest('app'))
});

gulp.task('sass', function () {
  return gulp.src('app/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('app/css'));
});
 
gulp.task('watch', function () {
  gulp.watch('app/css/*.scss', ['sass']);
  gulp.watch('app/templates/**/*.nunjucks', ['nunjucks']);
});

// Default Task
gulp.task('default', ['sass', 'nunjucks', 'watch']);