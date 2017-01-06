var gulp = require('gulp'),
    cleanCSS = require('gulp-clean-css'),
    jshint = require('gulp-jshint'),
    stylish = require('jshint-stylish'),
    uglify = require('gulp-uglify'),
    usemin = require('gulp-usemin'),
    rename = require('gulp-rename'),
    concat = require('gulp-concat'),
    notify = require('gulp-notify'),
    cache = require('gulp-cache'),
    changed = require('gulp-changed'),
    rev = require('gulp-rev'),
    browserSync = require('browser-sync'),
    ngannotate = require('gulp-ng-annotate'),
    del = require('del'),
    inject = require('gulp-inject'),
    bowerFile = require('main-bower-files');


gulp.task('jshint', function() {
  return gulp.src('scripts/*.js')
  .pipe(jshint())
  .pipe(jshint.reporter(stylish));
});

// Clean
gulp.task('clean', function() {
    return del(['dist']);
});

/*
gulp.task('usemin',['jshint'], function () {
  return gulp.src('./index.html')
      .pipe(usemin({
        css:[minifycss(),rev()],
        js: [ngannotate(),uglify(),rev()]
      }))
      .pipe(gulp.dest('dist/'));
});
*/

gulp.task('bowerTest', function () {
    gulp.src(bowerFile(), {base:'./bower_components'}).pipe(gulp.dest('./dist'));
});

gulp.task('test2', function () {
    gulp.src('./dist/**/*.js').pipe(gulp.dest('./dist/scripts'));
});

gulp.task('test3', function () {
    return del(['./dist/**','!./dist/scripts'], {force:true});
});

gulp.task('uglify', function () {
    return gulp.src('./scripts/*.js').pipe(uglify()).pipe(concat('script.js')).pipe(gulp.dest('./dist/scripts'));
});

gulp.task('cleanCSS', function () {
    return gulp.src('./styles/*.css').pipe(cleanCSS()).pipe(gulp.dest('./dist/styles'));
});

gulp.task('inject', ['uglify', 'cleanCSS'],function () {
    var target = gulp.src(['./**/*.html', '!./node_modules/**']);
    var sources = gulp.src(['./scripts/*.js', './styles/*.css', '!./node_modules/**'], {read: false});
    return target.pipe(inject(sources, {relative: true})).pipe(gulp.dest('./dist'));
});

gulp.task('copyfonts', ['clean'], function() {
   gulp.src('./bower_components/font-awesome/fonts/**/*.{ttf,woff,eof,svg}*')
   .pipe(gulp.dest('./dist/fonts'));
});

//Move images
gulp.task('moveImg', function () {
    return del(['dist/img']), gulp.src('img/*')
        .pipe(gulp.dest('dist/img'))
        .pipe(notify({ message: 'Images task complete' }));
});

// Default task
gulp.task('default', ['clean'], function() {
    gulp.start('uglify', 'cleanCSS','inject', 'moveImg','copyfonts');
    //gulp.start('bowerTest', 'test2', 'test3');
});

// Watch
gulp.task('watch', ['browser-sync'], function() {
  // Watch .js files
  gulp.watch('{scripts/*.js,./*.css,./*.html}', ['inject']);

});

gulp.task('browser-sync', ['default'], function () {
   var files = [
      './*.html',
      './*.css',
      'img/*.png',
      'img/*.jpg',
      'scripts/*.js',
      'dist/**/*'
   ];

   browserSync.init(files, {
      server: {
         baseDir: "dist",
         index: "index.html"
      }
   });
        // Watch any files in dist/, reload on change
  gulp.watch(['dist/**']).on('change', browserSync.reload);
});


