var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var source = require('vinyl-source-stream');
var buffer = require('vinyl-buffer');
var browserify = require('browserify');
var watchify = require('watchify');
var babel = require('babelify');
var postcss = require('gulp-postcss');
var precss = require('precss');
var autoprefixer = require('autoprefixer');

function compileJS(watch) {
  var options = { debug: true, extensions: ['.jsx'] };
  var rawBundler = browserify('./main.js', options);
  var babelOptions = { presets: ['es2015', 'react'] };
  var transformedBundler = rawBundler.transform(babel, babelOptions);
  var bundler = watchify(transformedBundler);

  function rebundle() {
    bundler.bundle()
      .on('end', function() {
        console.log('-> JS ready...');
      })
      .on('error', function(error) {
        console.log(error);
        this.emit('end');
      })
      .pipe(source('main.js'))
      .pipe(buffer())
      .pipe(sourcemaps.init({ loadMaps: true }))
      .pipe(sourcemaps.write('./'))
      .pipe(gulp.dest('./build'));
  }

  if (watch) {
    bundler.on('update', function() {
      console.log('-> bundling JS...');
      rebundle();
    });
  }

  rebundle();
}

function compileCSS() {
  var processors = [
    precss,
    autoprefixer
  ];

  gulp.src('main.css')
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(postcss(processors))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build'));
}

function watchJS() {
  compileJS(true);
}

function watchCSS() {
  gulp.watch(['main.css', 'css/**/*.css'], ['build:css'])
    .on('change', function() {
      console.log('-> bundling CSS...');
      this.emit('ready');
    })
    .on('ready', function() {
      console.log('-> CSS ready...');
    });
}

gulp.task('build:js', compileJS);
gulp.task('build:css', compileCSS);
gulp.task('watch:js', watchJS);
gulp.task('watch:css', watchCSS);
gulp.task('default', ['watch:css', 'watch:js']);
