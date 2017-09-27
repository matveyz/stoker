module.exports = {
  prodOnly: {
    html: "prod_only/",
    js: "prod_only/js/",
    css: "prod_only/css/",
    img: "prod_only/img/",
    fonts: "prod_only/fonts/",
    svg: "prod_only/svg/"
  },
  app: { //Тут мы укажем куда складывать готовые после сборки файлы
    html: "app/",
    js: "app/js/",
    css: "app/css/",
    img: "app/img/",
    fonts: "app/fonts/",
    svg: "app/svg/"
  },
  src: { //Пути откуда брать исходники
    html: ["src/*.html", "!src/prod_only_html/*.html"], //Синтаксис src/*.html говорит gulp что мы хотим взять все файлы с расширением .html
    prodOnlyHtml: "src/prod_only_html/*.html",
    js: "src/js/main.js",//В стилях и скриптах нам понадобятся только main файлы
    style: "src/style/main.scss",
    iestyle: "src/style/all-ie-only.scss",
    img: {
      compress: ["src/img/**/*.*", "!src/img/no-compress/**/*.*"], //Синтаксис img/**/*.* означает - взять все файлы всех расширений из папки и из вложенных каталогов
      noCompress: "src/img/no-compress/**/*.*"
    },
    svg: {
      compress: ["src/svg/**/*.svg", "!src/svg/no-compress/**/*.svg", "!src/svg/extra/**/*.svg"],
      noCompress: "src/svg/no-compress/**/*.svg",
      extra: "src/svg/extra/**/*.svg"
    },
    fonts: "src/fonts/**/*.*",
    lib: {
      js: "src/js/lib/**/*.js",
      css: "src/style/lib/**/*.scss"
    }
  },
  watch: { //Тут мы укажем, за изменением каких файлов мы хотим наблюдать
    html: "src/**/*.html",
    js: "src/js/**/*.js",
    style: "src/style/**/*.scss",
    img: "src/img/**/*.*",
    svg: "src/svg/**/*.*",
    fonts: "src/fonts/**/*.*"
  },
};