"use strict";
var
  gulp = require("gulp"),
  gutil = require("gulp-util"),
  watch = require("gulp-watch"),
  prefixer = require("gulp-autoprefixer"),
  uglify = require("gulp-uglify"),
  sass = require("gulp-sass"),
  sassGlob = require("gulp-sass-glob"),
  sourcemaps = require("gulp-sourcemaps"),
  fileInclude = require("gulp-file-include"),
  cssmin = require("gulp-minify-css"),
  imagemin = require("gulp-imagemin"),
  pngquant = require("imagemin-pngquant"),
  rimraf = require("rimraf"),
  browserSync = require("browser-sync"),
  reload = browserSync.reload,
  svgmin = require("gulp-svgmin"),
  svgstore = require("gulp-svgstore"),
  rsp = require("remove-svg-properties"),
  addSrc = require("gulp-add-src"),
  plumber = require("gulp-plumber"),
  removeHtmlComments = require('gulp-remove-html-comments'),
  env = require('gulp-env'),
  webpackStream = require('webpack-stream'),
  webpack = require('webpack'),
  webpackDevMiddleware = require('webpack-dev-middleware'),
  webpackHotMiddleware = require('webpack-hot-middleware'),
  through = require('through2'),
  webpackSettings = require('./webpack.config'),
  bundler = webpack(webpackSettings),
  path = require('./path'),
  config = {
    server: {
      baseDir: "./",
      middleware: [
        webpackDevMiddleware(bundler, {
          publicPath: webpackSettings.output.publicPath,
          stats: {colors: true}
        }),
        webpackHotMiddleware(bundler)
      ]
    },
    notify: false,
    port: 9999
  };
gulp.task("html", function () {
  gulp.src(path.src.html) //Выберем файлы по нужному пути
    .pipe(plumber())
    .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(path.app.html)) //Выплюнем их в папку build
    .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

gulp.task("js", function () {
  gulp.src(path.src.js) //Найдем наш main файл
    .pipe(plumber())
    .pipe(webpackStream(webpackSettings, webpack))
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(through.obj(function (file, enc, cb) {
      // Dont pipe through any source map files as it will be handled
      // by gulp-sourcemaps
      var isSourceMap = /\.map$/.test(file.path);
      if (!isSourceMap) this.push(file);
      cb();
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest(path.app.js));
});

gulp.task("style", function () {
  gulp.src(path.src.style) //Выберем наш main.scss
    .pipe(sourcemaps.init()) //То же самое что и с js
    .pipe(plumber())
    .pipe(sassGlob())
    .pipe(sass()) //Скомпилируем
    .pipe(prefixer({
      browsers: ['ie 10']
    })) //Добавим вендорные префиксы
    .pipe(cssmin()) //Сожмем
    .pipe(sourcemaps.write())
    .pipe(gulp.dest(path.app.css)) //И в build
    .pipe(reload({stream: true}));
});

gulp.task("image", function () {
  gulp.src(path.src.img.compress) //Выберем наши картинки
    .pipe(imagemin({ //Сожмем их
      progressive: true,
      svgoPlugins: [{removeViewBox: false}],
      use: [pngquant()],
      interlaced: true
    }))
    .pipe(gulp.dest(path.app.img)) //И бросим в build
    .pipe(reload({stream: true}));

  gulp.src(path.src.img.noCompress) // Выберем картинки которые не надо сжимать
    .pipe(gulp.dest(path.app.img)) //И бросим в build
    .pipe(reload({stream: true}));
});

gulp.task("svg", function () {
  gulp.src(path.src.svg.compress) //Выберем наши картинки
    .pipe(rsp.stream.remove({
      stylesheets: true,
      properties: [rsp.PROPS_FILL, rsp.PROPS_STROKE, "color", "style", "id", rsp.PROPS_FONT],
      namespaces: ["inkscape", "style"]
    }))
    // .pipe(svgmin())
    .pipe(addSrc(path.src.svg.noCompress))
    .pipe(svgstore())
    .pipe(gulp.dest(path.app.svg))
    .pipe(reload({stream: true}));

  gulp.src(path.src.svg.extra)
    .pipe(gulp.dest(path.app.svg))
    .pipe(reload({stream: true}));
});

gulp.task("fonts", function () {
  gulp.src(path.src.fonts)
    .pipe(gulp.dest(path.app.fonts))
});

//------------

gulp.task("prodOnlyHtml", function () {
  gulp.src(path.src.prodOnlyHtml) //Выберем файлы по нужному пути
    .pipe(plumber())
    .pipe(fileInclude({prefix: '@@', basepath: '@file'}))
    .pipe(removeHtmlComments())
    .pipe(gulp.dest(path.prodOnly.html)) //Выплюнем их в папку build
    .pipe(reload({stream: true})); //И перезагрузим наш сервер для обновлений
});

//------------

gulp.task("webserver", function () {
  browserSync(config);
});

gulp.task("build", [
  "html",
  "js",
  "style",
  "fonts",
  "image",
  "svg",
  "prodOnlyHtml"
]);

gulp.task("watch", function () {
  watch([path.watch.html], function (event, cb) {
    gulp.start("html");
    gulp.start("prodOnlyHtml");
  });
  watch([path.watch.style], function (event, cb) {
    gulp.start("style");
  });
  watch([path.watch.js], function (event, cb) {
    gulp.start("js");
  });
  watch([path.watch.img], function (event, cb) {
    gulp.start("image");
  });
  watch([path.watch.svg], function (event, cb) {
    gulp.start("svg");
  });
  watch([path.watch.fonts], function (event, cb) {
    gulp.start("fonts");
  });
});

gulp.task("default", ["webserver", "build", "watch"]);
